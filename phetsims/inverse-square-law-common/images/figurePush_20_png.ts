/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;