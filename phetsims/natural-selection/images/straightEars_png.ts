/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;