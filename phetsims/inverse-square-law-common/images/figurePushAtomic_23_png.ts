/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;