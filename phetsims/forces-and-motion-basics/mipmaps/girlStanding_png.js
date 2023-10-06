/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 65,
    "height": 196,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 33,
    "height": 98,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 17,
    "height": 49,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 9,
    "height": 25,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAZCAYAAADjRwSLAAAAAklEQVR4AewaftIAAAL5SURBVE3BW2gcVRwH4N/5n5md2elmN5O9ZEO2tk0al6QxSWOK8dKgVF2pD0WpF8RSKwiRgj4KCkLBp6JQRBBE0T7og5dWW7y0MRS1cVulJSaRmCjbYlZDNpduNpmZbGb2HI+wD/k+BuWlw/uGM6nIK8SYLSXWvao/feL0lWdrgb8AhR872PNE5474u2FDTwoJ0wzxqJBoG+xKZ34Yn/sCCu3O2C9IwJJkwYpth27aCARDdJvxIGk6QeHpeGRoaH+uv/eOfuzJZhFuSIAYg79RtiKmXvj9xuJvdG6s8AlEDUJI/M8yDZiGCWIMrYlIGxR6+oHb+12nAkEhVISFkK6hsrYKP6gFk4WlPBQt0RjeOXdzajkUjjktzanMSrkS3Lg563PGpkd+LVyAwi9PFL999XgpmbTzA0J0bTP0f2ig9+JSqvnf9z886+ehaKTp1JLEc20ZJFbKb4NrYEKg1Y7iOIC3oFDu3p6npEwlGAPiNtDYAEgJcG5n7uo17odCRw7l0r4YxlYVp9stlV/X+roesqCQxnlq0w+wFWOaw4izu/s6+6HQH4W5UddbK2CLsGHYS7cqXz//2qmTUPilq+OFA4PXQ2Yo8bBXNVFaTmBs3F0/9OLHPVKIGhQNyqnPurX2jg4wAJxzuK4b7e7Rj05NTJyGQlDa2tu7I5EIvI0NGKaJpngc8aZ4DnUEhXO+B3W+79eklIg2xnajjqCQs/jekaFOPD6YHX9s36788CN9mLz2y0nUEZSD++9s3tmaRG92B29J2m6qKYY3Xj7aiTqCwjn5UPygVna9ahFKOmHfhjqC8ul3P81DKS4s/nx2ZOzMph9gzXWLqNOgDM6UBq6OXsH5D778KwYuZ+/ZG5Q+v7QXdfyd9q6PQoyeic3O6xajmSnPWc1OFg97t9Z3HWiM3zeytnqOwsSfNIjC055zbXR15fJX5aXz153K9waRkQ4Zue2G8SjPWg3VSi24cOLvP4/Nes6MFKKad9fPdBhW8/zm5o/fLC+8+R9XdCBgL14EtAAAAABJRU5ErkJggg=="
  },
  {
    "width": 5,
    "height": 13,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAANCAYAAABhPKSIAAAAAklEQVR4AewaftIAAAETSURBVGPszHCYwMbKnPz33/9vH7/8KGheeGw5E6+gtJeOgR2PpIy6mAAvZxwDEDAJCIq8lJRWZJCSlGZgYmTgZQAClrevTt1+94ZV7/uPF0wsHF+2MgABi73NI0kV2Qt8338xMOhr8JjmdjMwMH3/lSnMysrA8P+/3I+X7xvEGICA6cPn57s/fOZhePeBhfnT1x+zGYCAZfLGx0949rkxsLCwsN6/u4GFAQhYeLk5+Y2UxL9ysLP9efvmDT8DELD4mio9NtZW+/Tv//8vCiLcX7Zv3crAdH3RNsbnj58/fvv2w5O3569zMQABi8yXv123O5Zd/P3//0d2JqZaOS7u/QzlMsrBDEDAyMzCWiqtnMsABAAYTGJ5Ic92twAAAABJRU5ErkJggg=="
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