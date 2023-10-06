/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 219,
    "height": 166,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 110,
    "height": 83,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 55,
    "height": 42,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 28,
    "height": 21,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAAAklEQVR4AewaftIAAAKhSURBVO3BT2jWdRzA8ffn+/3+nmd7ns1nDicDRXARHjaz0lAmOPqzi4qHYh3qFgSFkCApneoikh6cKXQQOlh0EUQ8BBHpoRSmHssomtWMnGy69ueZz5/v7/v91HDC40P8nB7Cg68XTzzxvxvY9dxHQ+8M7mKJhEfw3oub3jIa1/Gv0u6ubTM/lMfkor8ugrBoZm1cY/sKl07s+e4IDSwPYWp6RuLlb04WTPigxeq2vNGtrHardWS2r+Dj1hyhP0fozxH6pex7KZm+U1+OHP1keFhZJCzRuy9v6S9RO+aIG0WEe+S1EtXTf5PH0Ki8JU/hz5Sbs92vfHbmq3MsMizB3pc27VlO9UwiulFEaBTOz5JT4Z7UKX57Ox1JQmFCQk/vht9p4Mhw+OKrb1cmK0Nzn48PyLTmEKGZmVJqVnEbWsj3teEE2q7UKPyljNXC5McHDv5GA0eG4vFbO1p77WDH693cyUEqERCMgAKqYBSWq8Hd8LjzVdrrlnoq3KxUuePTcZo4MrSqeXbZrxYzmqIKUZU0KjEqImCNwRrBEFCg4h1zNU+55vEhUl3nOvie+zgyVHw6X09TEmvIWYM1ghXBWkGBqIpPAz4oPg0EVdIYWRCioqsSSxNHhgi388YgQFQgQhRFAAVUQbnLGEMMEQUiUG1Xij3FqzQxZIjKBA+iLFIUUIW6iZidHbf8fP4gTRwZgjKuZFMWKAsUpbwG/EDnjbZS6/uHBs9eoIkjw9VnQmdP0VC8Flk2DcYaQGg27wK19TmqTyVzblXrt2MX6h+e2H/2R/6DI8OxfefeHB5545LbmQxOTNWeNrOhy9W1TUJMVCTERCq+aKYKK1qum1SvTH5d+PTo0BfXyCA8pNGf/7C/jP7UubKru/zC5ucrPO7+AdjPG2ZFV2KCAAAAAElFTkSuQmCC"
  },
  {
    "width": 14,
    "height": 11,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAAAklEQVR4AewaftIAAAERSURBVM3Br08CYRzA4c/3vQPZmLjDzSAbAy2SDDo2ZnDqjBadf4QbSW1ki0kNVJuBzVkINqvJZLlmkQZ3GJCDe9/XHyPcGNHg8/D/7B9XD5hBmKEX9rk83L5VwrrdyXryNAgQ6K+q0XnjoVYuFq0w5XR3cysj8bXCbogIuuTgvGn0soPKObbXK1Wady3fJeGmsXcy8PTFcBR7CL9cI2TKQjaA8HUQNB9bPt9cEub8cTWfUp6r0lgsIIAlijXh54hw0SgmXBIibTqugHFAKcFaizaGKDaMrYVKxmfCJaFTMN2CFnKBBYQfWizDNSceFtPPCyvzdSaEKVcvR/WoG9VSHzpvFbFZSr+rlNs+q963+QtfF6FmrC9A/TUAAAAASUVORK5CYII="
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