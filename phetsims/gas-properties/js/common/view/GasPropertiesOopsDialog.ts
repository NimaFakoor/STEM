// Copyright 2019-2023, University of Colorado Boulder

/**
 * GasPropertiesOopsDialog is a specialization of OopsDialog, with a custom icon and options.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import OopsDialog from '../../../../scenery-phet/js/OopsDialog.js';
import PhetFont from '../../../../scenery-phet/js/PhetFont.js';
import { Image } from '../../../../scenery/js/imports.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import phetGirlLabCoat_png from '../../../images/phetGirlLabCoat_png.js';
import gasProperties from '../../gasProperties.js';
import ReadOnlyProperty from '../../../../axon/js/ReadOnlyProperty.js';

export default class GasPropertiesOopsDialog extends OopsDialog {

  public constructor( messageStringProperty: ReadOnlyProperty<string>, tandem: Tandem ) {

    super( messageStringProperty, {

      // OopsDialogOptions
      iconNode: new Image( phetGirlLabCoat_png, {
        maxHeight: 132 // determined empirically
      } ),
      richTextOptions: {
        font: new PhetFont( 16 )
      },
      tandem: tandem
    } );
  }
}

gasProperties.register( 'GasPropertiesOopsDialog', GasPropertiesOopsDialog );