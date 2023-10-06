/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;