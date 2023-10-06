/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 219,
    "height": 166,
    "url": "data:image/png;base64,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f/VVX094EHTBuODzSkoh/gCf3/IR046mAj75Tx/7kj88MiMUBoMQtUFj2cafb+rd+JMfviMVBd8gRM3QWLZ58+alfsEPagchaorGslK5FEaIGqSxrC5WN8ZvGISoKRrL5i9YsB0H3xiEqCkay7q7uvbXNzcfKpYRoqZoLEs3N422zuranS+BQojaoamArrnztmd9UAhROzQVsGjJG36ZA5RCiJqhqYCFvb3bPMAYhKgZmgqY2zP3xUA0mPV9hKgZmgro7Og4mEzPOFAsIUTN0FRAXTRanNUz74VsCRRC1AZNhcw7pvdXWUAhRG3QVMiChQu35gGlEKImaCqkd1Hv8ygwPkLUBE2FzO7ufqku1TBY8hCiJmgqpDXdOtTU3vFSoQQKIaqfpkIcrejumf981gOFENVPU0ELFy/ZkgWUQoiqp6mghYt6t5b5NYMQVU9TQfN65u3UQVX0fYSoepoKmjVrVn8y3dZfLCNE1dNUUDIRz3bOmbsrVwSFENVNU2Gz581/PgsohKhumgpbuGjxL3OAUghR1TQV1tvb+7wBjEGIqqapsDlz5uyJJOsyZQ8hqpqmwtrb2g41zmjfXyyBQojqpamwYMA1nd1zdmTLCFHVNBW2d+/etl/t3nKycUAphKhamgq767v/8fHUknJH0YAyCFG1NBX01JNPL9mWefSDi06ZSd4BYxCiamkqxHhwy73/3qfDxWhh3INIAM9HiKqlqZBV93/vnIn65y84+32LWfyWGUTSEYplUAhRnVwqxBgMYCJJR3U1Jrnk4yex7h/Wgg9K8X8ZpjVjwPN5TRTg82sGFzHtuFTIRZdduHb87pc/8siye77Y1BWPmwMdTLohSoUCSvO/DOiAU9QBp4hBMQ0ZY1QoHM6H44lxY4ziz2QAPTUVW3LssT9FTDvKGEPFGNiza1/zy4de7igUCwE37BgMr2B8o+videPJxoYx3/c105AxRoVC4UJdXd2kMUbxGtXXxfKu63qIacWlkhR098wc7O6ZOYgQVU4jhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsEIjhLBCI4SwQiOEsOK/AaAyMBFrmfDbAAAAAElFTkSuQmCC"
  },
  {
    "width": 110,
    "height": 83,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABTCAYAAAB+vzKIAAAAAklEQVR4AewaftIAAAVASURBVO3BfWzU9R3A8ffn+/vd9dfrw1l7hSIrrJQOQYWpcTEDH3hQxsxgbEY0AdQY/yLLTBZxiwOcM0GNLsASki26GZf4gGYPmpDQJboxjCEMCQlYBSpCqXJHodena3sPv8+e/thMmJO7cpeVz+uFMcYYY4wxxhhjJqiNGzcsnDd37hOYojkqIJ1OXxmLVS/BFM1RAfkwmx8YSE/b/Ozjt2CK4qiA0aldDy5Z3zxl9wdvbMQUxacCahq9kdnzG+nv6Y1hiuKogIHUcAaUoE7qMUVxVECu30sWwhDxs83bfr71BswFc5TZK6++Mic/WBUv5EK8iF5+WH/3crKnN4K5ID5lsmnzD5efDvatOxh5fsEV88di2UyMoDbC4Z2nml4c/uV84E+YL0y4yNY/9r2VA42HH7lsKjfUxAN37tMMR95JseDuNoYGxhjY3I3nJJ/xavf7LTNefmzr9u2TGi/PYT6XcJH86tfPzduTfOmphumFxTV1gf/p8UE+2XeWKUehDp/6DS341R7dj3YxORYgIoyMZhn1Yx+d86o7Vj/84yeXLb39BOa8hItg9UN3rI9fNfRwfVMk0XsqQ8/eXqZ3eTRVB6hALltA1zWR+HIth3/QSUsQ49+EsFBgMM9gWqr+0n7L0m0bfvrELsxneIyj0z1noiNTP/xN7cz+h5yTmiPvniG6a5DZIzFiUR+Ef/IQhtp9mlrrOPFWkkaq+E/ihMCXqgYvbO8/euier7a1fuu6G29s+MMf397/s2efyWPwGCcnjp+qfnzHmjerp2RW9CfH5GRHktkfR0kEVSB8hnNC3xSYenUDx95JMXksiqKcTzTiuVovvMJPJ2/7829fW9s2o/WaTc9s+WDHjh1nuYQJ4+BsKu098sLKjtrmwqLkx8OMvZ3mKlcHwnkJwplEnobbE/S+dJpmAhTlfxM0LDCY1eF+CfZMn79w+0+efPoNLkEe4+ATDv4i3jZ2Z293hpGOPq7x4yB8rljGwzs4So34gPJFiQhVvote5uvMwa7OVdfObF059/rrJ722c9f+bVu35LhECCVadc+qu7rze1+MN8Wq9OQoXxuJo6KUiyCM5bKMSFVPr0bf+sYD655eu3bNISY4jxKkes9FXt/y1AuJBXUtmb4x5vQEeL5DAQUUUEABBRRQQAEFFFBAAQUUUEABBRRQhUKohAqhQqgQKoQKoUJBFRFHRLS+XrPzju3dff+MadMX3rR02fBf3zvQyQQllGD5bUueGzi074Fz6UE8J0Q8x3hTFA0LXAgH5FuuPPZeZ2c7E5RPkb678jurj3bsXFPNKIHjXwoFxpsAwoURQMLQMYE5ivRR17H7Y4xGFVMJjiJFgyCCYCrEUaR0KtkXhpgKcRSpbdasA9kQUyGOIn1z+bd35wVTIY4iLVqy+IAE9UOYinAUac6sWX2xaa0nBVMJjhJkVVMimApwlCA3MnwiX8BUgKMEX7910btZTCU4SnDHihV7QiXElJ2jBDffdPMRf1JLSjDl5ihBQ7w+F0ya3C2CKTNHifrT6TOqmDJzlCiRaHw/W8CUmaNE/pfCa0PBlJmjBA9+f/Xa5nmFW3PiMOXlKMFA7fH7Ft3b7k1b1oYAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgh/p6AhaAgagoagIWgIGoKG/IMwgfmUYPFX7v7RgTd/v6mxfnY01eIhgIaFMDs8NMpFIxL1GXZOcvwXCsQTjaf5EGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4z5f/I3UjLS1dU/0ZUAAAAASUVORK5CYII="
  },
  {
    "width": 55,
    "height": 42,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAqCAYAAAAXk8MDAAAAAklEQVR4AewaftIAAAIQSURBVO3BO2gTYQAH8P/3XS7XlLxszBAMRS0oglUotfgaBJtooGjASdEMtQVxsIvilCoKFYcK6uLQwUERxFFERRxifSBEHASD1iGgoU25S0zzOHuPTwcFFbzGCOmdfL8fOI5zhvHx9NpNvb1x2BhFi5SSvMHjkQ7CxihapPW8j+06GRqEjVG0qCarsi/s9l25ejkKm6JowfHJoWMr17iH9EUtMJ2/dQk2RfAXRi8mRoLd2gm1qm5UX1dJdH8EpfN55hI9uQWId5Onz00k9sTLsAkBTZj9NC801r26STrqp2rTSiSY+UJ884Cw04f68wrxUhLuhLZj5smjkf7V0S2bt26by755m8cyI1iCXCyT9J3kg7pcjQUzKnzMhR/0Q0HUb8vw6wJ+phlMXYSQrUjBG1P3H1/DMiFYQjzVN9XVbR6NPjXgEQT8ggEg+CPDMJlGxJkFk9zbPjx2IZU6Moc2IrCwLzZ4oCF+uC5VDG+oJqIZjDEwht8wKKqhlLzhyWfZ7ATaxAULhVwuTeWPXnxTxD/r0qMd69FGFFYYC8DBKCxQSSrAwSgs6EAeDkZhwZCkd3AwCgu79yYeagwMDkVhIX3m7AtXaJUCh6KwsCLgN03DKMKhKCyMjh3u8w50RuBQLlho+GcH+pM95czL+memaybTNRNNIoSYIEzHdwSAKLkL4DiO4ziO4ziO4zjuP/UV3I2zxyBE/gMAAAAASUVORK5CYII="
  },
  {
    "width": 28,
    "height": 21,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAVCAYAAABVAo5cAAAAAklEQVR4AewaftIAAAEXSURBVO3BMS8DYRgH8P/73L09LjQRJWXhA1ibGAxNMYjEZrQQSzdDJ1+AhKEkYvIBGotB2oQ0hsbSRCfpICJCLzVJqLu32t5jfSOIVG9yvx/+t9lUchU9RvhBIt23srefjaKHBL6wvr2QsEe8TUuKlJt7Lrc9e+fw/DKPHhD4JH2QXPPr7lb0qhmLTA/g/eIVkkWrw1TxYOayxfIu/kBAszQ/N8WjD2cTdxQ3hICOmcEM9tp8/+h2jgvXNxl0wYTGqVY3qFSLP+FbAsCkPxhbBJBBFwi6iFVHwAgae3ys5AOMABE0J6f5grCHXhAgAxqHKjNiuLXcuFVNJlMxScUkFZNUTFLBkC4M6Qqrv+Y03o4QCoVCv/EB9mZe9kVnwj8AAAAASUVORK5CYII="
  },
  {
    "width": 14,
    "height": 11,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAAAAklEQVR4AewaftIAAACISURBVGOgCiiY55Y/afJEdgYiACMDFGQ0WrTzMTMl/z/49SnjX6aVXfvOdzDgAYwMQGCqIB8qIfp3Cfc3JjYGIPgPBB9+/L22894zHQYcgIUBCBg5OX++uHyDlZEBDhj/s/OKM+ABTAxAoB6ocJFVXezLf2a27/+Z2b7/Z2b7zsDE+J1hFJAHABDyKe8h1o6HAAAAAElFTkSuQmCC"
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