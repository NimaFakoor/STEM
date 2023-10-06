/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;