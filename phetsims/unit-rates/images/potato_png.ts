/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;