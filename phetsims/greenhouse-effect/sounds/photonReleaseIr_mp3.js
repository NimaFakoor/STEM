/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';
import base64SoundToByteArray from '../../tambo/js/base64SoundToByteArray.js';
import WrappedAudioBuffer from '../../tambo/js/WrappedAudioBuffer.js';
import phetAudioContext from '../../tambo/js/phetAudioContext.js';

const soundURI = 'data:audio/mpeg;base64,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1/6/tSf/+zDEUYOHcLEQbKhQ0OOQocwsKDp9Uf/yJv/WCEn9bSeUlJbJc1iEhWgzp44uDWg+i402k06SrSYmhG6RejflFMJWX9HAeGnf2r9S/s2fO/E6BASdYT9dILQfTnZFChZGcriEH+SN79C6BMwNke/R//42qXsuNkfR1eHfUDzadjAAjQcLdkiAfeCfajM1N/WD3z5rrOIlj070Eyv/+zLEWoMGnPcQZ6FIkNcU4IWEqSCeFcUrzuxPu65KgADaVabkjgDvIrSm4hWZt6N1n+Wq3lshXnuj2fuogACZFabscgD70Hq7zU0XH5f79dryeLlzNH+LRPR//9P/3/hq/1WtASOevTVwAPj0er1aj5eWiIF99XOK3Ao0sbW7lup6mSP+Iv8qLK5IwJKBmdDClK7KXwZv8z/wonrV//syxGkABcSbCsecSNCWkGP0IIl+THJJLIJ4AAbjyVhUIKlCBE0fRLme8koan5Nf7lCjAHVMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7MsSDAAPAAxughEAwlp3hdCCJ/lVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zDEpQBEnF8DoQR0MFGL3nQgCg5VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+zLEywHDpEzDhgBQMAWAQACQAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
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