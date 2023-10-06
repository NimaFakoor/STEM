/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,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';
export default image;