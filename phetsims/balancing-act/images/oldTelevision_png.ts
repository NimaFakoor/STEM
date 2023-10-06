/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABpCAYAAAAjvu20AAAACXBIWXMAAAk6AAAJOgHwZJJKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADTFJREFUeNrsXVtsXMUZ/vZ+tXd9v2Ov2YCdxGHjKEBa1UlaSGkpYFRK2yeMBKjqQ5tWap+KlD5UUKlSoX0IF6lNHlp4TAFB0lbFAUpRwIkDhNjY+LZOfFnvetd7v3dm9ux619kk3vtxPF80mjNnzzk+Z775L/PPf04k8XgcHPlBqdZY9vbtfufAgQPNdvsKht97/ydWq/XlQq8r512bPyx9u/741NNPNSfbao3mJULUmVDAP8NJqRC6TabmmalpnD5zBoFgEIMPP0x3d5FSECkSrr7yVl1GUo2S0rnhJ1OhkiLl3Zs3hgVCXEKb1k8WSghXX/lLyQlS3SUQcYgQMVrM63NJyY+QJ0pFCCdFhIRwUkRICCdl84QcEwihGColIQW7xCaT6Ue7enuek8qkjV9cHvvb5ORXz9yChAyR6q9Ck3pXJ0r9N/Mmhdxs10+feXp61+5drO31eHD85Vf+MD4+/itOSOVc4kFKyLlz5zA9NYV77r4Hep3uMCekCKCSkk9RqNSHurq64qROL066P99riqWQZxhKe6aj5f77BdmUNI8kOaM1CNsvknKMjC7nFpQQizBbp89ykjzDUNlvogijykKLsH1UkBY6wma2mtQIz5K8/xOVuo9SPFgXKcNp4v8CKUZOSAVJSXvILSM1YiKkYJuyGbeZVNTuHBSrrRHucVSwIWfJvR2q9D2VdEZPw9jCQ/5CcAR+TjuAdMSgSAihayKnBEIuUjdfDPdVtkWuLFLzDyFk4awgIcNCCP6iEM8ShQSXLfaVRWoeIWWmElIjZkLKKilikRqxE1KxKHGFpeYU1lcNB8U4wa144kQ5paacayIVndGXaF5D68EiX/9E2rUtYp7IiirFqFRSs2UkRGySUiqpSZOQuNglpORhlhLE0E7lGkPbEIIf2iqBUdFnSBLVc5SGZoRZt0tQZ6fSwuzUxU0PjSS3R4UIQlINvkDOG94KywdbIm01i625WFtjMLU1t1Q3tzSjtbUVOq3umvMmJifgdDpxdWERV0hJnivMU4aT5HJS8iOFLjQdbWtpvqt/rwX9lr1obG7K6Ro0h2BkZATnL4xiYmoaaQtzL1DCi5Fuui1IEcg4tqPb1Hn/ffchmaRRKJYXl/D26Xfw8fkMJ+wkJV4Mk0lRkpJUVzVGw8EfP/540cjIRs7fX399o+QMVVqtiY6U5Br5/n6L4QePPQadXp93h9tWVlLthvr666q806dP4823T6fvepEQc5STkkbID7//qGHg4MGczqUv78xZ5zA1PY1Jsr3qdGU9ro06BqR0m0zoubMnRdSlzy/hLydPIhAMpdRZRZImxERKcgXweoSkj3zqVTEiZmbh8/vTPaucQVQk+nb2wtTdjcb6Bvz5+PF0Yn5LiDm2nUkZVquUBzva2tZd2nVdXxaQv8/qNFIoTOX2zERBCiGETvjeFakTWHY1xkhx/Ot7RsFfH8R6Qh1HeXGWuuS19781KrH/88H0lTiOyuOwVJAQToh4cIKS8gTvB1Ghk7/JJUJwUkSITb009J8lM0ZWq2EPSBGPRhFjJZZWx8j+RDseE2rajsVSx8VT2xvapM7Yjgrtjb8L7Ru58BKJUNN/EglrSyRSSKUSUqSsyFiRQS4nRSaHXCGHUqGESkWLChq1GlqNBh31KgyYHegyzOXv2iobEQ8tp+qikXJ8Zj/mfXLWkUBs24zWVb8C786acdikQVfVeG4ny3SQGPdB0vB1wHFeCEmcKQ4pwyt34GpIRbai62EJQzXUGhVdRxZGcTw10qNUAiLrkhQVJCZRR0kdS9UbJS2bVNHzYvT67PdoSlLY3wSukRqJIC4SViXERipJSE2GpMhkUFBJkSugUCiIpCiYlLD7iWUOvBHHTjTrlqCW5hDRj3oh6SBTPvsIJLX9iM2/UTz1ddFdl9rWadQwm9qhUiuzHkvJiNAOD0cSnUvbkQiikcR2VGgnO562WadH1smJphFKO4e1YxsIpO2IoNayqTKBlGSdJEXCCJEw1ZUgRZ4iRaVUQK0kqkurIcdLsbSYGUubD/fBrHo/p46Njf7yhpLEbpHUcUIgJXHTpDgiCqay6EP07OiEjIyuWx0arRZmsxlX5q+k9nmiNdkP1ifWeaTVd0DS8gCi43/Cmn0On9rMcErN0Ol1CASCkASW0WuYQCexT5K6AUjI8VA1JK4x+xrifm9uNoWi3li1LQhJQqvTora2hkn2DQ25tp2pJ6YpvDOwLy/gA9sA7uzdg3aiWUYvnIdlL/29B1arCdb5EXzD6E8QsjYGVPcQQmby874Mhqpt55ZSG3MzUuLUeLuJExD1IRivJoQcwO49/WQAy/HmG2/id8//Hg9+59t49tln0d7RgWlyvS+nzmKH87nEBa7yeUpJQEc6dXcnrkrQ1NLBCKGYnEis+czNrrvUJpMJ467b+OSxXFj0GtDQ0HDN/mA4jNHRUdhXbKwdkdcWZ/LIcXOEo/KUlFACVl2J5ehYPAbX2hpcX6zhtg5P8Wb0HDeHXhXE5ctjCAYDjISN8x2myqxWHvsqJ8zGBSzblhkhN0K7zsVJKRea9YtoUq/PN1RqFavVKnVqn1Iag6VxiquvcuJw5wW8O7sXSwEdBgYG2L79+/anCDnSeRF1WgcnpaxzG3kQD9z+EWaJ22t116HpyD4oZCE062ww18yx37mhrxBoOCUZUonbP8r5fG5TSgiJqi6v8zgppZztB+3Zf5DpuPoqNaSmpxBf/DcLuQQjKly2347FYAsC1mpo5A9BF51Hb+1syshLu8jx7rFE7IyTUiIYdgJeK+z2NXy4vA8d3bvRU2NM/RyNWHBuYhLmwEfYUTsNVHUCzgtcfZVUTX3xPBv1/1vqw8677oVRIOS94WE8/Mgg/vvBB+jt7cFk5F4seprZAljc/h4npaSk0Cixw4T6tt5U/IvipVdeJbP8FYyMJNbp79hhxqcrt3NDXy4s+YwwGtdXKKe+msLUzCzb7u3thXPVyQjzyRo5KeWCJ6iCWpMIqQT8Abz86itsm65gavQ6XPzsUywuLNzak8dwOIxQKIxgIIhoLIoIaSdXCpPZLAqFEkqaFKHRsPVymjRRKtAo8SQx5mFyDzQw+dnnl9j+fotlXXo2+b7NliCFZrV4PV64XWvwkDrg97M0pWsma9ck4/kzkvF0Oh1RMUY2eouNJq0THy4k1ncnJibgcKwmSOnvXx9I0UhG0HLLkeL3+uCwr8K95oFnzb2pDMmbXpOQGQoG4XG70dbWCr1eUZyZe90AdujtGHME4Aiqmf2gaG9vQ1195qze0jTDsmAkIdt1sybl4pGGCOwrDqw518hDuRAhqimZ51VsUJU3b72CltZm1Nc3FC2ccrDjAs5a92D/3fvhD/hTEeIkvtYyxUL8UvOvEZ95DRAjKT6PDy6HCyvLK0Q9+TJyiUsNmnFpW7ahSl/FkvEKcokjPlZXq9w40vUJJldvYxHipYAGtaoAatQ+7GmYZL+z462nUudUnBRqG1aJSrLbEhIR8AVSCdyVAJXEhYVFVFcXlkKVHi6h4fldDROsSFsfRWxtkbhmlzKPv8HEcdOkUC8nX9COX16ywWV3EhvhzMgXFgPomrqb2Bh1nar4F5dpmWqLe3I7bVOkeIjRra/b/Pup1DgvzC0QD8QFr9srKhKyPh/x6Brq6jP2OZ0u4lIXpkji7i8J67acz9vUX11ZXUNjnRFanSb7nCFEjPSyHUtXbaReYZIVL5GRLolt82bq9+WlJeapKRQFqjXnx3mdt+mhMDY5x7Luq6t1wqw1SAylHavMUDsyXhraihPRxOAKwWqfY26zXrf5b8Ise2uw4sv9TXcDcQDaqpbzJ4W+5nB5fBoKmQxkLkZ8fW/q9YRbAZfHxjLe5NosHvrNPA4d6WNvg+Xs+MSMkLrc+Nl3/YV5XyEymhJvdXFQKLRGGAz5fw9ixU3/5/TM8AsPSBaI9rbWgs5XpuWFcVKKJSmKwiae/kCQkyI2yOVyTorYkPycFSdFRNjwbTFOiljBSeHqi4Orr62ALCupnJQKgkZG5Fm+T8DTViuEaDiMYCgMr9fLSREDaDQ6xEqYBXpzIkUti8IXkWz7TtTLVotkPuJsWSBM89UIKZScnG3KgWobH9YEdbK5gq9B7QfNnAwSUgKk0IwaShAlJydS7qmZRqsyuK0J6a6yokY+e93f6ReepEJHXq/Q9ClKRihESAhSCSHb4WBiGSQSzY0UjSyMoY5RfKvOBo00tq3I0CmjONw5ib21n9zwODraac9cr1BJCAQC7BNTTFKE7RCrA1mTC29q6Ckx32yaJKXU3UBtl0woZZskULMrFG9eV1hcWsJu9N3EfoSZdLD853CIJRpSKaFtlVbFva9iI+hxQKfWZOQ2U0KoVyVVgn08lH4OMapWsS8Bpr4ISIpSpUCt9NpMfPpZ9Tjv2gJdXFkbwvKWnM+Tx+xQhqe5pJQCiugVVooFHmYRISgps7wbxEfKUd4NosKL0tr736L/fd6TvC9EAfrf6R77vwADAFdWgvA6lPApAAAAAElFTkSuQmCC';
export default image;