/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;