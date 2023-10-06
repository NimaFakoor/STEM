/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;