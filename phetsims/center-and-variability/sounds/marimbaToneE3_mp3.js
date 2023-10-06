/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';
import base64SoundToByteArray from '../../tambo/js/base64SoundToByteArray.js';
import WrappedAudioBuffer from '../../tambo/js/WrappedAudioBuffer.js';
import phetAudioContext from '../../tambo/js/phetAudioContext.js';

const soundURI = 'data:audio/mpeg;base64,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';
const soundByteArray = base64SoundToByteArray( phetAudioContext, soundURI );
const unlock = asyncLoader.createLock( soundURI );
const wrappedAudioBuffer = new WrappedAudioBuffer();

// safe way to unlock
let unlocked = false;
const safeUnlock = () => {
  if ( !unlocked ) {
    unlock();
    unlocked = true;
  }
};

const onDecodeSuccess = decodedAudio => {
  if ( wrappedAudioBuffer.audioBufferProperty.value === null ) {
    wrappedAudioBuffer.audioBufferProperty.set( decodedAudio );
    safeUnlock();
  }
};
const onDecodeError = decodeError => {
  console.warn( 'decode of audio data failed, using stubbed sound, error: ' + decodeError );
  wrappedAudioBuffer.audioBufferProperty.set( phetAudioContext.createBuffer( 1, 1, phetAudioContext.sampleRate ) );
  safeUnlock();
};
const decodePromise = phetAudioContext.decodeAudioData( soundByteArray.buffer, onDecodeSuccess, onDecodeError );
if ( decodePromise ) {
  decodePromise
    .then( decodedAudio => {
      if ( wrappedAudioBuffer.audioBufferProperty.value === null ) {
        wrappedAudioBuffer.audioBufferProperty.set( decodedAudio );
        safeUnlock();
      }
    } )
    .catch( e => {
      console.warn( 'promise rejection caught for audio decode, error = ' + e );
      safeUnlock();
    } );
}
export default wrappedAudioBuffer;