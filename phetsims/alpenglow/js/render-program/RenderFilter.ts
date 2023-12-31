// Copyright 2023, University of Colorado Boulder

/**
 * RenderProgram for applying a color-matrix filter
 *
 * NOTE: This operates on unpremultiplied colors. Presumably for most operations, you'll want to wrap it in
 * the corresponding conversions.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import { RenderColor, RenderEvaluationContext, RenderPathBoolean, RenderProgram, alpenglow, SerializedRenderProgram, RenderInstruction, RenderExecutionStack, RenderExecutor } from '../imports.js';
import Matrix4 from '../../../dot/js/Matrix4.js';
import Vector4 from '../../../dot/js/Vector4.js';

export default class RenderFilter extends RenderProgram {

  public readonly logic: RenderFilterLogic;

  public constructor(
    public readonly program: RenderProgram,
    public readonly colorMatrix: Matrix4,
    public readonly colorTranslation: Vector4,
    logic?: RenderFilterLogic
  ) {
    const alphaBasedOnColor = colorMatrix.m30() !== 0 || colorMatrix.m31() !== 0 || colorMatrix.m32() !== 0;

    let isFullyTransparent;
    let isFullyOpaque;

    // If we modify alpha based on color value, we can't make guarantees
    if ( alphaBasedOnColor ) {
      isFullyTransparent = false;
      isFullyOpaque = false;
    }
    else if ( program.isFullyTransparent ) {
      isFullyTransparent = colorTranslation.w === 0;
      isFullyOpaque = colorTranslation.w === 1;
    }
    else if ( program.isFullyOpaque ) {
      isFullyTransparent = colorMatrix.m33() + colorTranslation.w === 0;
      isFullyOpaque = colorMatrix.m33() + colorTranslation.w === 1;
    }
    else {
      isFullyTransparent = colorMatrix.m33() === 0 && colorTranslation.w === 0;
      isFullyOpaque = colorMatrix.m33() === 0 && colorTranslation.w === 1;
    }

    super(
      [ program ],
      isFullyTransparent,
      isFullyOpaque
    );

    this.logic = logic || new RenderFilterLogic( this.colorMatrix, this.colorTranslation );
  }

  public override getName(): string {
    return 'RenderFilter';
  }

  public override withChildren( children: RenderProgram[] ): RenderFilter {
    assert && assert( children.length === 1 );
    return new RenderFilter( children[ 0 ], this.colorMatrix, this.colorTranslation, this.logic );
  }

  protected override equalsTyped( other: this ): boolean {
    return this.colorMatrix.equals( other.colorMatrix ) &&
           this.colorTranslation.equals( other.colorTranslation );
  }

  protected override getSimplified( children: RenderProgram[] ): RenderProgram | null {
    const program = children[ 0 ];

    // TODO: concatenated filters! Matrix multiplication
    // TODO: concatenated RenderAlpha + RenderFilter, RenderFilter + RenderAlpha (matrix multiplication)
    // TODO: matrix could be turned into RenderAlpha or a no-op!

    if ( program instanceof RenderColor ) {
      return new RenderColor( RenderFilter.applyFilter( program.color, this.colorMatrix, this.colorTranslation ) );
    }
    // Move our path-booleans "up" to the top level (so we can combine other things AND improve path-boolean replacement performance)
    else if ( program instanceof RenderPathBoolean && program.isOneSided() ) {
      return program.withOneSide( this.withChildren( [ program.getOneSide() ] ) ).simplified();
    }
    else {
      return null;
    }
  }

  public override evaluate( context: RenderEvaluationContext ): Vector4 {
    const source = this.program.evaluate( context );

    return RenderFilter.applyFilter( source, this.colorMatrix, this.colorTranslation );
  }

  public override writeInstructions( instructions: RenderInstruction[] ): void {
    this.program.writeInstructions( instructions );
    instructions.push( new RenderInstructionFilter( this.logic ) );
  }

  public static applyFilter( color: Vector4, colorMatrix: Matrix4, colorTranslation: Vector4 ): Vector4 {
    // TODO: GC friendly optimizations?
    return colorMatrix.timesVector4( color ).plus( colorTranslation );
  }

  public override serialize(): SerializedRenderFilter {
    return {
      type: 'RenderFilter',
      program: this.program.serialize(),
      colorMatrix: [
        this.colorMatrix.m00(), this.colorMatrix.m01(), this.colorMatrix.m02(), this.colorMatrix.m03(),
        this.colorMatrix.m10(), this.colorMatrix.m11(), this.colorMatrix.m12(), this.colorMatrix.m13(),
        this.colorMatrix.m20(), this.colorMatrix.m21(), this.colorMatrix.m22(), this.colorMatrix.m23(),
        this.colorMatrix.m30(), this.colorMatrix.m31(), this.colorMatrix.m32(), this.colorMatrix.m33()
      ],
      colorTranslation: [
        this.colorTranslation.x, this.colorTranslation.y, this.colorTranslation.z, this.colorTranslation.w
      ]
    };
  }

  public static override deserialize( obj: SerializedRenderFilter ): RenderFilter {
    return new RenderFilter(
      RenderProgram.deserialize( obj.program ),
      new Matrix4( ...obj.colorMatrix ),
      new Vector4( obj.colorTranslation[ 0 ], obj.colorTranslation[ 1 ], obj.colorTranslation[ 2 ], obj.colorTranslation[ 3 ] )
    );
  }
}

alpenglow.register( 'RenderFilter', RenderFilter );

export class RenderFilterLogic {
  public constructor(
    public readonly colorMatrix: Matrix4,
    public readonly colorTranslation: Vector4
  ) {}
}

const scratchVector = new Vector4( 0, 0, 0, 0 );

export class RenderInstructionFilter extends RenderInstruction {
  public constructor(
    public readonly logic: RenderFilterLogic
  ) {
    super();
  }

  public override execute(
    stack: RenderExecutionStack,
    context: RenderEvaluationContext,
    executor: RenderExecutor
  ): void {
    stack.readTop( scratchVector );
    RenderFilter.applyFilter( scratchVector, this.logic.colorMatrix, this.logic.colorTranslation );
    stack.writeTop( scratchVector );
  }
}

export type SerializedRenderFilter = {
  type: 'RenderFilter';
  program: SerializedRenderProgram;
  colorMatrix: number[];
  colorTranslation: number[];
};
