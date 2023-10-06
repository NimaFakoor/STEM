/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;