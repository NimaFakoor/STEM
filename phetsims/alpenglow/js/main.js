// Copyright 2023, University of Colorado Boulder

/**
 * Module that includes all Alpenglow dependencies, so that requiring this module will return an object
 * that consists of the entire exported 'alpenglow' namespace API.
 *
 * The API is actually generated by the 'alpenglow' module, so if this module (or all other modules) are
 * not included, the 'alpenglow' namespace may not be complete.
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

import * as everything from './imports.js';

// note: we don't need any of the other parts, we just need to specify them as dependencies so they fill in the alpenglow namespace
export default everything.alpenglow;