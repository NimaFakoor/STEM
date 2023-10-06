/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;