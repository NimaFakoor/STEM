/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;