// Copyright 2022-2023, University of Colorado Boulder

/**
 * MySolutionKeyboardHelpContent is the keyboard-help content for the 'My Solution' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import TwoColumnKeyboardHelpContent from '../../../../scenery-phet/js/keyboard/help/TwoColumnKeyboardHelpContent.js';
import phScale from '../../phScale.js';
import MoveKeyboardHelpContent from '../../common/view/MoveKeyboardHelpContent.js';
import PhScaleStrings from '../../PhScaleStrings.js';
import BasicActionsKeyboardHelpSection from '../../../../scenery-phet/js/keyboard/help/BasicActionsKeyboardHelpSection.js';

export default class MySolutionKeyboardHelpContent extends TwoColumnKeyboardHelpContent {

  public constructor() {

    // Sections in the left column.
    const leftSections = [

      // Move the Dropper
      new MoveKeyboardHelpContent( PhScaleStrings.keyboardHelpDialog.moveTheGraphIndicatorsStringProperty )
    ];

    // Sections in the right column.
    const rightSections = [

      // Basic Actions
      new BasicActionsKeyboardHelpSection( {
        withCheckboxContent: true
      } )
    ];

    super( leftSections, rightSections, {
      isDisposable: false // See https://github.com/phetsims/ph-scale/issues/285
    } );
  }
}

phScale.register( 'MySolutionKeyboardHelpContent', MySolutionKeyboardHelpContent );