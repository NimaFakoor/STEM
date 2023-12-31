// Copyright 2019-2023, University of Colorado Boulder

/**
 * Screen for that demonstrates various vibration patterns supported by Tappi.
 *
 * @author Jesse Greenberg
 */

import Property from '../../../../axon/js/Property.js';
import Screen from '../../../../joist/js/Screen.js';
import tappi from '../../tappi.js';
import TappiStrings from '../../TappiStrings.js';
import PatternsModel from './model/PatternsModel.js';
import PatternsScreenView from './view/PatternsScreenView.js';

class PatternsScreen extends Screen {

  /**
   * @param {Tandem} tandem
   */
  constructor() {

    const options = {
      backgroundColorProperty: new Property( 'white' ),
      name: TappiStrings.screen.patternsStringProperty
    };

    super(
      () => new PatternsModel(),
      model => new PatternsScreenView( model ),
      options
    );
  }
}

tappi.register( 'PatternsScreen', PatternsScreen );
export default PatternsScreen;