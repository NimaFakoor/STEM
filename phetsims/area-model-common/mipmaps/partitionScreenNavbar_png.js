/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 306,
    "height": 208,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAADQCAYAAACEPe34AAAAAklEQVR4AewaftIAAA/sSURBVO3BT2icd2LH4U9/jA5Z93XeooNdETOy6XqgwXkFnoXVoZoZ8F4WPFZI6IJNFQkbWxcnVmzDHlaSJe2h4GjtyBfblStlirwstER6Db3YZWZ0cSFjdqahhXEhnsFhKi8I3mjWyUGFtpMyQRn9df5I+k2+z/Mn//N/EBGxmEFExHIGERHLGURELGcQEbGcQUTEcgYREcsZREQsZxARsZxBRMRyBhERyxlERCxnEBGxnEFExHIGERHLGURELGcQEbGcQUTEcgYREcsZREQsF0JEtt3iowyLuSx1eyMerUfjtDgu8uJCiPUWMrM8S8+x+CjD55USda3ROHsPd3Do5Du81NaO7LzHt0Z4cvc6y9WAtRw8eYHD54ZpcVxk60KItZaKefJX+lgq5lnLYi7DYi7Dk7vXOXzuCofPDSM7Y7ka8PBsgqVino08uXudxUcZOm+naXFcZGsMYqWlYp6HZxMsFfNsxeNbVygM9yE7ozDcx1Ixz1YsFfM8PJtAts4gVspdfJ3lasCLeHpvmoXMLLK9Fh9lWMjM0ujA8V4On7tCazROo6Vinid3ryNbE0Ks8+m9aT6vlGh04Hgvf3npGi2Oy0JmlsJwH8vVgJUe3xphf7wb2T6f+h/QqGNkileO9/L/hnl4NsFiLsNKT+99wMGTF5DNGcQ6C+k5GrVG43gjU7Q4LjX74928eukajZaKeb6olJDts/gow0p7Ix28cryXlQ6efIdGS8U8sjUhxDpLj/M02h8/QaN98W6gj0af/1eJl9rake3xV7/9PUuP8ywV83xeKfNyxKNRi+Mi31wIsY43MsViLkvNcjVg6XGe1qNxGrU4LrLzWhyX1qNxWo/GWc9SMU+jvZEOZGtCiHVaj8ZpPRpnM19USqzlR3/ejuweS8U8j2+N0OjwuWFka0JI03p67wMa/aitnZfa2pGd9+m9aRZzWRYysyxXA1Y6cLyX/fFuZGtCSFNargY8uXudRq8c70V2h39/b4DlakCjw+eucPjcMLJ1BmlKD88mWK4GrNTiuBw8+Q6yOyxXAxrtj3ezP34CeTEhpOkUhvtYKuZpdPjcMC2Oi+y8Lyol1rKQmWUhM8v+eDfeyBQtjotsLoQ0lcJwH0/vTdNof7ybgycvILvHq5eusTfSwXI14PGtEZaKeeoWMrN8frZE5+00LY6LbMwgTaMw3MfTe9M02hvpwBuZQnaPl9raOXjyAq1H4+yPd9N5O83eSAcrLRXzPLn7PrI5gzSFwnAfT+9N02hvpIPO22laHBfZvVocl8Pnhmn05O51ZHMGsV5huI+n96Zp1BqN03k7TYvjIrvf/ng3jZarAUvFPLKxEGK1T+9N8/TeNI0OHO/FG5lC7Lf8xwDZWAix1kJmlvxwH40OHO/FG5lCdt7iowyLuSxLxTzLfwz4olIi5Lh0/fb3NFquBsg3E0Ks9EWlRGG4j0YHjvfijUwhu8MXlRKPb12h0XI1oMVxWWnxUYa1tB6NIxsLIVbKX+ljuRqwUovjsi9xgsVHGTay93AHLY6LfP/2xbuBPhr9x3sDeCNT1C1XAx7fGqHR/ng3srkQYp3FRxkWcxkaLVcDcu++zmY6/y5N69E48v1rcVwOHO/l6b1pVnp6b5rlasDBU++wXA14fGuEpWKeRgdPvYNsLoRY58nM+4g9Dp8bZiEzy3I1YKWFzCwLmVnWc/DkBVqPxpHNGcQqy9WAhcwsYo+X2trpvJ2mxXHZqgPHe3n10jVkawxilcVHGcQ+eyMddP3297RG42ykxXF59dI1vJEpZOtCiFX+uxrQGo3zbbT8qYtsv5fa2um8nWapmGchM8dSMc/yHwNq9h7u4OWIx754Ny2Oi7yYEGKVV4738srxXsReeyMd7I10IN8dg4iI5QwiIpYziIhYziAiYjmDiIjlDCIilgshm0okEojI9+Ott96it7eXbyOEbCqTySAi3494PM63FUK27MGDSeSbuXjxKoVCkfHxy3heBJFUyieV8vkuhJAti3VFkW/GdR1qPC9CrCuKyHw2x3fFICJiOYOIiOUMIiKWM4iIWM4gImI5g4iI5QwiIpYziIhYziAiYjmDiIjlDCIiljOIiFjOICJiOYOIiOUMIiKWM4iIWM4gImI5g4iI5QwiIpYziIhYziAiYjmDiIjlDCIiljOIiFjOICJiOYOIiOUMIiKWM4iIWM4gImI5g4iI5QwiIpYziIhYziAiYjmDiIjlDCIiljOIiFjOICJiOYOIiOUMIiKWM4iIWM4gImI5g4iI5QwiIpYziIhYziAiYrkQIrKjCoUiwWdVamJdUeTFhZCmkp3PUee9FsF1HWT3KZcrjI7dJJXyaRSLRRkc7CfWFUW2JoRYLzufY2JiBt9P08jzIrx9/hQ9PUlkd0ilfE6fGWI92WyObPYMPT1Jxt+7jOs6yMZCiNUuXrzKxI0Z1lMoFDl9ZojsfI47k6PIzkqlfE6fGaJRLBalplSqUC5XqEmlfMrlCg/uTyIbCyHWOn1miFTKZyXPi+C6DkFQpVAoUpdK+bgvO4yPX0Z2Rrlc4eKlq9S5rsPgYD9vnz/FStn5HKdPD1EuV8hmc4yN3WRwsB9ZXwixku+nSaV86pLJBL8Zv0w43EZduVzh9JkhstkcNRM3ZkieSBDriiLbb2JihiCoUuO6Dg/uT+J5ERrFuqLkPvod0Z/8gnK5wsSNGc6fP4XrOsjaDGKldy9epa6nJ8k//eM1wuE2VgqH23hwfxLPi1CXSvnIzpjz09QNDvbjeRHW47oOvxm/TE0QVEn9g4+szyDWSaV8yuUKNeFwG+PvXWYjQ4P91GWzOWT7lcsVyuUKdT1/k2QzyWQC13Wo8f00sr4QTSLzMV/pOATuHprWnJ+mbmiwH9d12EgymWBosJ9wuI1wexuy/UrlCnWxWBTXddgKz4uQzeYoFIrI+kJYLPMxvD8Hsw9ZpeMQDJ+E7k6azvx8jrpkMsFWDA72I/YKgiqyvhCWGrgN1+dYV/4TeP3X0HsMpgZoGuVyhSCoUuN5EVzXYaVyuUKpXKHGey2C6zrI7hIEVbaqVKpQl53PEeuKIquFsNDIXbg+x5ZMP+BLUwM0hVK5Ql043EZNEFS5cWOGD1I+5XKFlTwvwtBgP8lkAtk5sa4odYVCkXK5QjjcxkbK5QrlcgXZnMEypWdwZYZV2vdB/Ai4e1hl+gHMPqQpFApF6jq8CIVCkehPfsHo2E3K5QqNCoUib7w5wOkzQ8jOSiYT1L178SqbeffiVWRrDJZ5f45Veo/Bk7+H9N/Ckylo38cqH/wLTeGzoEpdqVzh2M/OUC5XqHFdh1gsSiwWJRxuY6VUyuf0mSFk57zVk6TO99O88eYAQVClURBUOX1mCN9PI1sTwjKZj/ma9n0wNcBX3D0wfBL6rvE1sw9pOqmUT43nRRgfv0ysK8pKhUKRi5euks3mqEmlfGJdUXp6ksj2SyYTJJMJfD9Nje+n+fHhn9PVFaXDi1CTLxSZn88RBFVc1yEcbqNQKCIbM1hm+CRcOQXdndBxCLp/yirt+/jB8LwID+5PEuuK0sjzIjy4P0lPT5K60bGbyM65MzmK50WoC4Iqvp9mdOwmo2M38f00QVDFdR0e3J/EdR1kcyEs090J3Z1sqPSMVdr30XRc1+HB/Ulc12Ej4+9dxvfTBEGVcrlCoVDE8yLI9nNdh9xHv2Ns7CYTN2YIgiqNenqSDA32Ew63EQRV6mJdUWRtIZpM8Bzen2OV3mM0na6uKK7rsBnXdejqiuL7aWqy8zk8L4LsnMHBfs6fP8X8fI5CoUhNONxGLBYlHG6jrlAoIpsL0STyn0D+E3h/DvKf8DUdh2D4JE2hKxaFMb7U4UXYqg4vgu+nqfksqCI7z3UdkskEyWSCtRQKRepisSiyvhBN4vVfQ+kZq8SPwIeDNA33ZQexVxBUKfxbEe+1CK7rsJFUyqfOey2CrC9Ekyg9Y5XuTvjwVzQVz4tQl53PMcjWlMoV6sLhNmT7vfHmAL6fpmZ8/DJvnz/FRub8NHXJEwlkfYYmEDxnTbMP4c/+Gq7P0VSSyQQ12WyOcrnCZoKgiu+nqYvFosj2i8Wi1E1MzLCRiRszlMsVasLhNmJdUWR9hiZQegbdnXDlFFw4Ae4evhI8h4Hb0HeNpnEimaDujTcH2MzY2E2CoEqN50UIh9uQ7XcimaCuXK5w+swQa5m4McPFi1ep+834ZWRjIZpAxyH48Fd85a1jkPglBM/5yvQDiB2B3mNYr6cnycSNGQqFIoVCkWM/O8OdyVHC4TZWCoIqY2M3mbgxQ93b508hOyMcbuPt86eYuDFDTSrlk83mOJFM4LoOQVBlzk9TLleo6+lJkkwmkI2FaEIdh+DaWei7xteM3IXeYzSFO5OjHPvZGYKgSjab4y9+/HNisSixrig1pXIF308TBFXqkskEPT1JZOcMDvaTnc9RKBSpKZcrTNyYYS09PUnuTI4imzM0qe5OVik9g9IzmoLnRXhwfxLXdajLZnOMjt1kdOwmqZRPEFSp87wIdyZHkZ3lug65j37H0GA/ruuwlnC4jTuTo9yZHEW2JkSTcvewptIfoH0fTcHzIvzn43/m4qWrpFI+a3Fdh7fPn2JwsB/ZPQYH+zl//hTz8zkKhSI1L7sOsa4onhdBXkwIi5SeQekPkP8EPnsOpWfg7oFrZ/nBcl2HO5OjjL93mfn5HIVCkbquWJRYVxTZnVzXIZlMkEwmkG8nhEVm/xUGbrPKtbOskvmYNXUcoim5rkMymSCZTCDyQ2OwSPdPWdP1OVZ5f45VOg6BuwcRaTIGi7Tvg/gRVhm4Ddfn+FLwHPquwexDVnnnBCLShEJYZvgUZH7JKgO3YeA264ofgd5jiEgTMlgmfgSmBnghHYfgw0FEpEmFsFDvMXD3QN81CJ6zoe5OmBoAdw8i0qRCWKq7E+KvwfQDmHsI+U8geM6XOg5BxyF46xjEjyAiTS6Exdw9cOEEXDiBiPyAGURELGcQEbGcQUTEcgYREcsZREQsZxARsZxBRMRyBhERyxlERCxnEBGxnEFExHIGERHLGURELGcQEbGcQUTEcgYREcsZREQsZxARsZxBRMRyBhERyxlERCxnEBGxnEFExHIGERHLGURELGcQEbGcQUTEcgYREcsZREQsZxARsZxBRMRyBhERyxlERCxnEBGxnEFExHIGERHLGURELGcQEbGcQUTEcgYREcsZREQsZxARsZxBRMRyBhERyxlERCxnEBGxXAjZsrGxm8g3UypVqEmlfOazOUSy8zm+KyFky0bHbiLfTirlI/JdCyGbunLlCiLy/YjFYnxbIWRTw8PDiMjuZRARsZxBRMRyBhERyxlERCxnEBGxnEFExHIGERHLGURELGcQEbGcQUTEcgYREcsZREQsZxARsZxBRMRyBhERyxlERCxnEBGxnEFExHIGERHL/S9CD8YC7Z02GgAAAABJRU5ErkJggg=="
  },
  {
    "width": 153,
    "height": 104,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 77,
    "height": 52,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAAA0CAYAAADPJLW5AAAAAklEQVR4AewaftIAAAPNSURBVO3Bb0yUdQDA8e/97uH4c3BA5ME6kCZB4CKBOQRyNpCQjWYrWSXNqOl4QVrT0ZuyPy8a8iJnzf4u55qNidaGcyhZEobN3HJyBROncmAhf64dDA+QO+G5cr1x9YZfe55jk9/nYwn9DUXG9wJFmkCRJlCkCRRpGmEUnLrJ1WPfMO39k5TVq1m+bj1mmfaO0vPpPgLeYR6u20nKqgKMIgijK61HmejpJu3xUn57rZzJ6x7McuOnThJX5pK28Vm6d23BSBphlPVUNaGNmwjxj5CuY5asZzYTnPLTc+ATllXVYCRBGNkcCWjRMbj372VZ9ZvEP5iBmYJTfkKheUK6znwwgFEEYaTP3ebiB01YLFCw6w0sFgtmmfGOoMXYKdjewFjz20x4rmEUQRgNdpxirOU97Kmp9Le14h8Zwix9hw/Rva+JwR9OIezp2JNTMIogjAITPh54qZHgpJ+ZkWH0YBCz5G6tJyF7Jf5BD0Vffkd0YhJG0QijnOdrCRdbbBw5z23BDBoGcbvd+Hw+7jXZ2dm4XC7upmGQoaE+SoqXY5Qfuy6Qn5eDw2FnsYyN+RgYGMDlcnE3DYNERFhxOGIxij0mGofDjsMRy2KZmbmFb5z/ECjSBIo0gSJNoEgTKNIEijSBIk2gSBMo0gT3uJmZWYymEUaBQJAjR76l232ZDRUlVFauxSy6rvPRx4cZH59E13W2v7IZpzMJIwgkzQbh9hz/y8n2s2RmprP3/Qau/z6C1zuOWTyeIRIT4nj3nXpeb3iZ48c7MYpAQvsZyKyBolrovYK08+d/xeGw09raQfn6IpzO+zDL/LxOXJydOzTNSt/lAYyiIWFgGM7thxOdcOI0PJKFlN7eq3i94+Tn53DwYCs7dtSQnJyEGVasSKW5uY2BwRtYrVYsGEdDQn0N9F2DY13Q9CrSHs3NorS0kDsqKkro9/xBcnISZtB1nbq6aiIjbQghaGlpxygCSZGRUFYAbWeQVlycR1fXBYaGxjjd8TMPZaRhllAIGhu/4NIlD599fpTKyrUYRbBAs0E4dxHuT4Cny+GtNpieRUpV1Trm5nXa28/yQs2TOJ1JmCUqysaePTux2SLYtnUTGRlpGEVjgWwaHPga0lNgNgC7nwB7FFKsVitlpYWUlRYSDvHxsRQXr8JoGgskBHy4G35xg1WDNXksWRoS4uxQ9hhLnkCRJlCkCRRpAkWaQJEmUKQJFGkCRZpAkSZQpGkYZGz0Joe+OolRPJ5h+vtHiYyKYLFM+W+xpqiKf9MwyIu121gqBIo0gSJNoEgTKNL+AmazK2lAJmHqAAAAAElFTkSuQmCC"
  },
  {
    "width": 39,
    "height": 26,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAaCAYAAAA0R0VGAAAAAklEQVR4AewaftIAAAHGSURBVM3By04TUQCA4b+npz2CCLUVmN5ramtS0rBRty58DJe+jHtfwDfQhW5NXLKkkdSZtJEB2oi1oZRClM5FWchqSM/MQub7Ev5fxNNrQYwJIvBch+MvHX5NTwljcrDPyOyiSxDBxc8RvjOn9+E9YTjnM+yP79AliODuxiYnPYvK8xeEsVIocmczz+X5DB2CCE76PaZWl9P9HmEcfP5EQgiSaYUOiYbBYIDjOFxLKYyXr/AA27bRpbafoICj4ZCbGIaBUoorEg1n0z3K5fssYlk2zWaVqGazC0ajJKVSiSsSDamURKk0i6TTKZRKE9V8PmfucE0QY4IYE8SY4D9zXQ9dkhs4LsgkgcbjCbu7JuvrWdrtBrp2djr4vk+5kqdY2GARQQCzD2/eQt8m0FfzG8vLS0iZJAzP80irFEeH39EhCPC4DtUi+D6B1lZXqNdLHP8YE0Y2m8HzfAzjAToEATpduLcEh0MCbW09YjI549nTNmHU62Ue1opUqwV0SAK0mpBZhVKeQIlEgkajSlhSJsnlMuiSBJBJqBS5dYIYE8SYIMYEMSbR8Psyh2m5LHI5z2NaLlF5nqJWW+MfiYZWa5vbIIixP+n7jHzwt6voAAAAAElFTkSuQmCC"
  },
  {
    "width": 20,
    "height": 13,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAAAklEQVR4AewaftIAAAD7SURBVK3BwU7CMACA4b+1iykuwiCCCRcTPXj0nXxSb55MuHAznkQBK0RgwLq1SkKWZekuhu8T/g+n8yhpkO/3fIxeCNkuDN9vr4RIGnhXkE4/CXF5TrZeE6KoWS6mWGs4uHy4YT4bk273tPQ5VWeDiPlszEFRONqdW7TWKGq835EklirnfkiSDk2yLMNai9YayYlJKrynZG3OZDIjZLXaMP9aECI5Srfw9EzJmCXGLAlJ0x2T9ykhiiPn4PqK0mDQI45bhPT7XbrdNiGSo/gC7u8oCSGI4xYhQgiiSBEiOTFFjfMKYxxVm00EOJrkhSBJFAeKml5vCAz5r19cbGPOu9H+QgAAAABJRU5ErkJggg=="
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