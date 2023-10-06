/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;