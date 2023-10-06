/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 173,
    "height": 315,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 87,
    "height": 158,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 44,
    "height": 79,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABPCAYAAACQ5Cf1AAAAAklEQVR4AewaftIAAAO+SURBVNXBecjfcxwA8Nfz3s/W2GNMW/JMEbGmsYZkbHKWNEcjSg07HMkfRmhNk/jHyFFK5ExkIfcT0i4yc1s7SI305NzMHs8es2fPqCm23+f3PL/je9jr1eb/5XxchGPQgf3wBz7FVVjVZlcHYjt+VpxDMRenYRxC2gqcWLHTSbgLx2MH1mEZFmG5xk3BhRiKzXY6DCPRhqFoxwE4EHsZ3CQc1oZxeBtjpXVjE3qwCb3ot6sK9sFotGOUfFxXwUKMVVs72v0/dAROsOfYGhhtz7Ey0GvPsBlvBdYpVg++xJv4Qv1Wo6+ChXgI+2rMBmxBP3bgN+zA7+jHNvRjI37AZryPt9HnX4/jMrSpbTue8rcKnsUmzMZI/Ij1+AzrsdFOB2EIvsNv2CgbV+AITFbbK3jI3yp26kSnga2Xn5FqW4tL/SOUbzqOlLYV89HrH6F8V6Mi7WO86D9Cuc7BFGn9eMxuQrluwTBpK/Go3YTyzMZkaX/iHgmhPNcipC3B8xJCOa7HRGk9WKCGUI5ZansZK9QQincNxkv7GTcZQCjeTLRJewZdBhCKdR4mSvsGNxpEKNYVqEh7Gn0GEYozClOlfYtb1SEU53bsL22pOoViDMe50j7BLHUKxbgbB6vWgxvQp04hf5dghrROLNGAkL8FGKFaD27XoJCvCRgnbRlWaVDI1xxp/XhME0K+pkpbjec1IeTnTIyX1qlJIT9zsJdqG3CHJoV8VHCKtHfRrUkhH/MwRrXteEILQj4ukLYaL2lByN50TJD2qhaF7M3EENU24E4tCtk6HFOkLUevFoVszUO7atvxpAyE7FRwlrQ1eEkGQnbmo0PaWzISsjNdWjfulZGQjUsxXtoX6JKRkI1ZCGmfy1Bo3XE4QdpWLJKh0Lq52FvaciyVodCa4ThdWi/uk7HQmtswRtobeF3GQmumSfsJN8hBaN5MjJP2HL6Vg9C8y9Gm2g+4WU5Cc07EcdI60SsnoTnXYbhqW7BQjkLjhuN0aWuwVo5C4+ZjjLTFchYaN01aN+6Xs9CYi3GUtE/RJWehMTMQ0l5QgFC/DpwsrQsPKECo31zsK225goT6nSFtGx5WkFCfdhwpbRUWK0ioz5UYJu0VBQr1mSbtV9ylQGFwh+NYaR+gV4HC4OZhhLTXFCwM7lRpv+BBBQsDm4FDpK1VgjCws9X2lRKEgR0lrQ/vKEEYWIe0RXhWCUJtR2OUat9jtpKE2iZJew+9ShJqGyrtIyUKtX2NHXbVhUeUaIja1mMM2tGND3EzVivRX9OAwUBsNcQNAAAAAElFTkSuQmCC"
  },
  {
    "width": 22,
    "height": 40,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAoCAYAAAD6xArmAAAAAklEQVR4AewaftIAAAHgSURBVK3BS4iNYRgA4GdeJxYjclmgsbAjl5TNRErKmpSNRhQW1Chl5RIb2RBZSRaKEkYWsx2xMJSUS8bCggUhl0SjjIyhPvU55sw5//8fz9MhmYoxfFXeemzFCszDVxzowEHsQ2AIL/ERXyQdmIm56MIopqOGTsxAqHezhl5Ml3SjW/umBWb5/97XMIRlGhvGD4zgO35iGJ/xEm/Qg9myMdyoYRO24B0G8Rqz8QYftTYZu2W3cLyGZzik3lvFrZJ9Rq/fQnt6sVQ2gCG/hfbsQkg+4Yg/QnUHsUjWhyf+CNVtlr3CPn8J1ezAQtkFfPGXUE0POiSvsN8/Qnnr0S0ZxQkNhPKOYorkPk5pIJSzAYslYzhvAqGczbLnOGMCobjAatmAJkJxBzBHMozTmgjFbZTdw1NNhGI2YYlkDJe0EIrZiZrkBc5pIbS2HCtltxUQWtuLTslP9CsgNFfDOtlD9CkgNHcYcyXfcVJBobkNskFcVFCYWA8WSUZxRglhYtswSfICV5QQGluGbtmgkkJje9ApGcFZJYXG1sge446SwnirsUDWr4Iw3naE5D2OqSCMt1b2AD9UEOptx3zZXRWFemtkH3BdRaFel+wyHqko1AvJCK5qwyT1PuEbzuGaNvwCYzphOZFSr8UAAAAASUVORK5CYII="
  },
  {
    "width": 11,
    "height": 20,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAAAklEQVR4AewaftIAAADlSURBVIXBMSuEARgA4Mfb6dBdipQyYmAxYDFgYZHyA/wBl0HdKP/gBoNB2RhvtmFjkFGkblGmS1cWdTe5+tSdu+87zzOECqbwjAZGMIsiipjHAt5yOETe/yZzuEUBLbTwjSa+UEMZM3jMYUe2NYyjjlIY7BgFVFEP2VaxiXeUtYVsRxjFFZraQrpF7OEVJ36FdCWM4VqXkG4bDVR0Cf1KmMMD6rqEfvsSVT3CX1tYxgsu9Qh/HWAY51KEjmls4ANnUoSOMiZwL0PoWEcLFzKExAqWUMOdDCGxizxuDBASn3jCqQF+AGMwKWlqPOtsAAAAAElFTkSuQmCC"
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  const unlock = asyncLoader.createLock( mipmap.img );
  mipmap.img.onload = unlock;
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = () => {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;