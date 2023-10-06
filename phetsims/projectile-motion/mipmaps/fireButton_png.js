/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 86,
    "height": 76,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 43,
    "height": 38,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 22,
    "height": 19,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAYAAACUef2IAAAAAklEQVR4AewaftIAAAKwSURBVM3BXUgbBwDA8f9dbt4OtREb1Blk7kws+uCDg9qMBjulIFsGghZEZB+4DYZMcVBkYIsFwYdyCn6grwoqbC/FmpD4Qc2bCHnxoYZM1GngcD4kEDB3kZlFGqiUbtP0pb8f7yOJ/2AhNzXAz8ALXvsIeA58C6xI5KCjo+OhxWLJn5+fJ+MrYBNoA+7xSpuF6/vE7XZ7ZFn+sKGh4YHdbv8yHA5PA38CnwIHwLDENRQXFzsaGxt/UVX1WTKZ/ExVVXlgYEAHbgA68DlZAldgmuZN4Lvd3d37x8fH5S0tLQ9TqZR/bW3tx0gk8sX29nbdzMzMU2CaLIl/YZpmvmEYPxwcHLjOzs6cQL7D4SAWi7GwsPBTe3u7v6mpaVbX9W/W19dngWkusfAGwzBudXV1PfJ6vY80Tbsbj8fL8jLsdjuiKGK1Wkkmk7aqqqpby8vLX5+fn6esVuvtUCj0B7BPlkSWaZry0dHRk7m5uftjY2MFOzs7DA0N0drayt7eHtFolIqKCgoKChAE4eXq6upWMBj8HRB4JcUlAhmGYdwNBoOPR0dHPw4EArhcLjweD5IksbGxwfj4ONFolNraWoqKinyyLPfzP4TT09PKlZWV2a2trbLS0lIuDA4Okkgk6O7uprOzk8XFRXp7e3E6nT5FUfq5AjEWi31/eHhYZpomfX19+Hw+pqamcLlclJSU0NzcTF1dXdpmsy0ritLPFUknJyc3ZVlG0zQuBAIBnE4nbrebkZERNE0zPR7Pb+Xl5cNcg1hdXb3v9Xq5bHJykvr6+rTf79/v6en5VVXVYa5JCofDlUtLS7xJEAS9JYMcibquF/IW8Xj8A96BGAqFSsiQZZnCwkJEUeRCJBKxZtwhR1JNTc3fm5ubf6XT6TzDMPIURTlLp9NmIpFITUxM2MnRP2wyBDhNKvBJAAAAAElFTkSuQmCC"
  },
  {
    "width": 11,
    "height": 10,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAAAklEQVR4AewaftIAAAEUSURBVIXBwUqDAAAG4L+paAoa7iJjG3iadO7WC3Spg4PwtsOgS9fdA6PTHsBX0JOX5STyknlIPApjtKMTRFgtZDEpyKPEVt+HfzRQc4A9LitFUUiO4zwC0FEhsYMoik1BEHqKovS2223T87wHVEjUrNfr081mc8EwzEkYhp8EQegUReme590AeCFQWSwWZ51O58627SHLssfdbpfnOO7QNM2y8hEEwROAN3I6nV5blnUVRRHTbreR5zmyLHuXZfl2PB5PUNMoiuLcdV1GkiSsVissl8uc53mdpukJfmnEcfzt+z4Mw4CqqvFoNBq2Wq177EAmSXJE0zTKssRsNsv6/f4ce5Capj0PBgOOoqivNE1f8YcfEbFstHLiXxsAAAAASUVORK5CYII="
  },
  {
    "width": 6,
    "height": 5,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAYAAABmWJ3mAAAAAklEQVR4AewaftIAAABsSURBVGNABn5+fh4MDAyxDAwM0cwMQPDx40f54uLizL9//+rIyMjwnDlz5iTz9OnT65YvX14vKytrLC8vf/HGjRtnjh8/vp/l4sWLXgwMDEznzp2blZWVNZEBCliEhIReMTExvcvKyprIgAQANp0lqWiCTRIAAAAASUVORK5CYII="
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