/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;