/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;