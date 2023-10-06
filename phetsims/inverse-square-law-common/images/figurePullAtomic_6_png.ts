/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;