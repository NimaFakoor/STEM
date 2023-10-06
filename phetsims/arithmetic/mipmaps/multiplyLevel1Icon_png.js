/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 259,
    "height": 243,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADzCAYAAACCNHNmAAAAAklEQVR4AewaftIAAC+JSURBVO3BD3zbhX3g/Y9+/in6Y0mWjK0ocmzJliD+kxBhTAqpOcICbW59Dkjpeg/l1sA6btsLtqXX2wHtdr1uTyk8271Iadltl90gXf+8xpGGdq+upJASiqEhBKOQOHaK5EiO/9uJZFm2JCTLJ21xz8tsx7HlxK6/77dmMgchxJVyu0ajOcwypCCEEDkKQgiRoyCEEDkqF/nb//8wodNDrHYP/pdtVG8oZ8orb4R4tSWEmFlNlZXfud/HdI9+7TCr3VOPb2OlULlI6PQQJ491s9qNj6aYbnB4nPfbhxDz9377EGLlUBBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwFIYTIURBCiBwVIcQV8+Mf/aPb43JvA9yAm392G//SV4Lh0GGuMBUhxJJIxXv5/osv8vaRt+nu7ubtI0fIec5u1aHTFlFu1aHXFmEpVrEYteQNRVO8dWp4m8fl/nwwHNrDFaQihCiIbCZB/FwbiWgn8XNtZDMJvnHWSLlVR2W5kd+8w43dqmMuleVG8lLp7NNGXdHd46mJB4PhUMjjclsBHxANhkN+loCKEGJRYgPHGBtuI36uDUuxFq/TRKWnFK/TxEI0uEsI9I5y/3bXtp8c639Pv8YTLS/RuXVahVQ6i926gcFoyg/sA54PhkNRCkBFCHHZ0skI0Z43iA28i1aTwlthpvEGN3arjsXSaRXyLEYtn/o3ldbYeNpqMWqZLjae9rWFYr53Pzj/tMfl/gqwJxgORVkEzWQO05w5PcT4aIrVzr2hnGKzjikDw2MMDI8jZmYyaqmpsjLd+x1D/Krp6e7mmT17+ODkz6gsN9LgttDgKqHQYuNp8ixGLXNJpbO8/E4fgd54CNgZDIf8LJDKRao3lCP+tbVlxawtK0bM3/W15fyqiMVifPVP/4z9L75IZbmRT99WSWW5kaViMWqZD51W4e6tFbSFR9yv+Qff87jcDwbDoedZABUhxJye/9u/5Zk9X4eJBJ++rZLKciPLTYOrhPISPS+83vWcx+UmGA49z2VSEULMKBaL8Xv/8Xd4+8gRttaXcUv9OpYzu1XHp2+r4oXXu57zuNy3BcOhB7kMKhd55Y0Qg8PjrHZ33OpibVkxU97vGOJE+xBiZvYyI3fe6ma67xw4xUqVivfyzT//Akwk+M073NitOlYCu1XHp2+r4oXXux7wuNyvB8Oh55knlYu82hLi/fYhVrtNdeWsLStmyon2Ib59oA0xs+vryrnzVjfTfftAGytRbOAYA6dfoLLcyN1b3ei0CsvN2aFxKsuNzMRu1XH31gpeeP3scx6XOxQMhw4zDwpCiF+KDRxj4PQLNLhL+PRtlei0CsuRTltEoDfObCrLjWytLyPngMfltjIPCkKIfxIbOMbA6RdocJewo8nBcma36tBpFQajKWZzS/012K06K/Ac86AghCAx0snA6RdocJewo8nBSlBZbiQ2nmYwmmI2H29aR849Hpf7Hi5BQYhVLptJ0Nu2j8pyIzuaHKwkXqeJoZEkqXSWmditOrbWl5HznMfltjIHBSFWuYHTL6DVpLh7awXLQaA3zuVocJXQFhphNo3X2rAUa63Al5mDghCrWPxcG/Fzbey4aR06rcJy0BYa4XI1uEsI9MaZiU6rsLX+GnJ2e1xuN7NQEGKVymYSDJx+Aa/ThNdpYjk4OzROKp3lcum0Cqn0BKl0lpk0uEqwFGvJeZpZKAixSp0Lv0I2k+B2n53lonsogbdqHQvR4Coh0DvKbG7fbCfnHo/LvY0ZKAixCqWTEaI9LWytL8Ni1LJcRMayuKrcLFTqwyyz8TpNWIq15HyZGSgIsQqdD7+CTqvQeK2N5SKVznLNNQ4Ww1th4uzQOLPZWn8NOds8LrebiygIscqkkxFiA8e48dpSdFqF5eLs0Dib66pZW2ZloSxGLUPRFLNpcJVgKdaS82UuoiDEKnM+/Ao6rULjtTaWk7ND4zQ31uEosxEbT7NQujUKc7nRayPnAY/LbWUaBSFWkWwmQfxcG94KMzqtwnKSntThKLORNzKWZqEqy42cHRpnNg3uEi54gGkUhFhFYgPvks0k2Fp/DctJbDxNhcNJIViMWoaiKWaj0yo0uEvI2cU0CkKsItGeN6gsN2IxallOzg6Ns7mumjxfbTWpdJal5HWayPF5XG4fFygIsUrEz7WRTkZovNbGcnN2KEFzYz1ThqIpFiOVzjIXr9OETquQs4sLFIRYJcaG29BpFbxOE8tOkQmTUc+V5K0wk7ONC1SEWCXi59qoW2+mEGLjaUbG0sxGpy3CbtUxH4PRFHUeF9OtLbOyGDqtwqVUlhtoC434PC63OxgOhVSEWAVS8V6ymQReZylzSaWzDEaTdA8lyBuMJkmlswxGk6TSWfJMRj3eqnWAypy6P2SKv+MMleVG8sqtOvTaItaXG9Bpi+geGueuX69nusykjth4AotRy0JYirVcitdpBvrJuQfYoyLEKpAY6SSvstzIdGeHxukeSjAYTTI4kiI2lsZbtQ5vVRWOchu3lllxlNlwlFlxlNkohEBXH/HxJMc7zhAfSxBJ9eGrrWa6//Tbn6Gl9RTBzg/o7+/C6zSj0yrM11A0hddpYi46rYLdqmMwmtpMjooQq0AiGsRSrCWv9YMIgd44Z4fGUVQD2UyC2zfbQTXzg798hKXmrVpHnq+2mrk0N9bT3FhPfDxJS+spzg0PED4bwmFVsVt1zMVSrDIf5VY9g9HUNnJUhFgFUmO9KBMT7P3HINmiEqwVd1BVWYPO5OSDn/0XGq+10fZqiOXIZNSzo7mRKYGuPo6dOI3/5PsYtZOsLzdit+qYLvVhlvmoLDfQFhpxe1xuq4oQv+KymQTpZASD1cM1rjsxlNQwk/XlRlpaT9HcWM+V5u84Q/9whIHhKMVGPc2NdTjKbMzEW7UOb9U6evt6uW5thrND47R+EGFKuVWHbo3CfFiMWi7wqQixCri3PI5Wb2MmimpgMJrC6zTx5rvtNDfWM5NAVx9vtraztszKjuZGCslXWw1UM6Wl9RSBrj6aG+uZTTKdJa+y3EhluZEpZ4fG8TrNzEdluZELfApC/IpTVANavY3Z6ExOUukJKsuNvHPiNDOJjyf5/Nf+hvhYgn0HfsqLP3mLpdTcWE9zYz1zGYommUlluRGdVuEyWVWEEL/ksKm83NLKjuZGpouPJ3j4/k+wo7mRXTu3YzLq+VVht+oYjKZcCkKIX/I6Tbz5bjsXc5TZ2NHcSJ7JqOdXiU5bRI5bQQjxS16niZbWU8THk6w2CkKIf6Gy3Eigq4+Z9AwM83t/+k2+/8qbLIUv7fk7fmP3U/QPR7gU3ZoiCklBCEEqnWWKTqsQ6OpjJs98+4e8+tZ7PPrf/5bY2DiFFOjq4ydvtnLygyBP7d3PpdhLdBSSghCCoWiKKal0Fm/VOmbSMzDMlKPvn6aQAl19JFJJMhMT/Px4B/HxJHPxd5yhkBSEEKwvNzAllZ5gPtqDZykkR5kN3Zo15KUzaQJdfVwJqfQEOX4FIcS/MBhN4a1ax0zMJiNTKtZeQyH5aqspt1nJUzQKjjIrswl09VFZbqQQBqMpckYUhBC/lEpnyTMZ9czk3js/ypSPXL+BQtu9626usdrYekM9jjIbs+kfjlBgIRUhVrlENAhUkjcYTWIy6pnNHbfcwFNf+C0sJiMVa8sotB3Njfhqq3GU2ZhLsKuf9eUGFuvs0DgXhFSEEL+USmfxVq1jLp+886MsJUeZjUsJhPuoc2hZrNh4mgv8CkKIXxqKplgJ2oNhLEYtixUby5ATCoZDUQUhVrF0MkJeSbGWlaJ/OIJxzSSFcHZonBw/OQpCrGKZVIQ8i1HLFF9dDZerfzhCfDxJ/3CEpdbS2k5luZFCODs0Ts7r5CgIsYqlk+e5WP9QhMt1sOU9/B2dmIwGltrx9jN4nCYWazCa4oLD5CgIsYplkhEqy41M1z8c4XJ5qhw0N9ZjMupZSvHxJO+c6MBu1bFY3UPj5ESD4ZCfHAUhVrF0MsJ0Oq3CQvhqa+gfjrDUWlpP4a0wUwhnh8bJOcwFCkKsYqmxXirLjUwpt+oIdPVxuUxGPSajgfh4kqW0/+BbeJ0mCiHQGyfnB1ygIMQqlor3YilWmVJSrCU+niQ+nuRymYx6TEY9SyXQ1cfguWG8ThOLFeiNc8FhLlAQYpVKxXvJKy/RM8Vi1KLTKgS6+lhu9h98i42uEgrh7NA4Of5gOBTiAgUhVqnESCd5dquO6SrLjbz57imWk0BXH6+97afxWhuFEOiNk7OPaRSEWKUS0SCV5UYuVllupKW1neXk2e/8iBuvLUWnVViswWiK2FianOeZRkGIVWp8pJNyq46LeStM9A9HCHT1MV/9wxEu5eWWVl78yVtcrpbWU7QHwzRea6MQ2sIj5LwUDIeiTKMgxCoUP9dGNpPA6zRxMYtRi9dpYv/Bt5iPl1taue8Lf8G+l35KfDzJxeLjSfa99FOe2rufyxUfT/LU3v3suGkdOq1CIbSFRsjZx0VUhFiFxobb0GkVKsuNzKTxWhsvvN7Krp2/hqPMxlx2NDeS9+x3fsTzBw7hq63GUWajfzhCfDxJoKsPk1HPw/d/gk99bCuX40++/m0cVhWv00QhBHrjpNLZaDAceomLqAixymQzCeLn2qhbb2Y2leVGvE4TT+3dz9OP/zaXsqO5kR3NjbS0niLY1U+eo9xG3sP3fwJfbTWX66m9++k8281n73BTKG2hEXKeZwYqQqwy8XNtZDMJGr1rmcuOm9ax9x+DvPiTt/jUx7YyH82N9TQ31rNYL/7kLV5728+nb6tCp1UohFQ6S6A3Ts7XmYGKEKtINpPgfPgVKsuN2K065qLTKty9tYJnv/MjTEY9O5obuRKe2rufl1tauXtrBXarjkJpC42Q81IwHAoxAwUhVpFoTwvpZIRb6q9hPirLjey4ycFTe/fzcksrS+2pvft5uaUVS7GWVHqCQno3ECHn68xCRYhVJH6ujbzDxwe5pb4Mr9PEpTS4Ssjb8/wBguE+Hr7/EyyVh+//BJvrqjnefoaW1lO85h/EW2HG6zThdZpYqEBvnNhY+nAwHDrMLFSEWEWqGncTGzjG+fAr/OCtHizFWrbWX4PXaUanVZhNg6uE8hI9B4++i7/jDH/2h/fjKLNRaCajnh3NjexobsT0HT3+jjO0hfpoC42g0yo0uEtocJVgt+q4HK0fRMj5CnNQEWKVsaxtwrK2idjAMWID7/LyO0F02kG8FWYaXBYqy43MxG7V8enbqnjt+CAP/ck32bVzO5/62FYKzd9xhv0H32JzXTV77/8En/3PX2XbZjvB3jiB3lFaP4hgKdbidZpocJVgt+qYS2w8zdmh8cPBcOgwc1ARYpWyrG3CsraJdDJCtOcNftHfRlvoLJZiLV6nicpyI5XlRnRahSk6rcKOJgeB3jh/88KPefPdUzz60L04ymwsVkvrKfYffAtHmY2H7/91HGU28qqr1hMbH8PjNHFL/TWk0lkCvaMEeuK88HoXujVFeJ0mGlwl2K06LvbWqXPkfIVLUBFildPqbZR77qLccxepeC9j59poH+qk9YMgeXarjvXlRuxWHRajFrtVj9dp4qFf9/Da8UHu+8Jf8MDO7dz7sa2YjHouR/9whIMt7/HyG634aqt59KF7cZTZmC42luZn7/Z8HrACtxl1RVxj0W2zFGu58dpSRsbTdA+N0xYaQbemCK/ThNdporLcSGw8TVto5HAwHDrMJagIIX5JZ3KiMzkp5Z8lRjpJRIMEYhHahyIkokGm2K06dNoidFqF5w8c4uU3Wnn68c/hKLMxl0BXH2+2ttPy7inyPn5rI3v/7BFMRj2zCYZDe7iIx+W2Aj7ACviAklQ662v9IELrBxEfYLUUa8n5CvOgIoSYlaGkBkNJDRdLJyNkUhEmgXIn/yTWf4z7vvAX+Gqr+fitjTjKbEwJdPURDPfh7zhDXnNjHY8+dC/eqnUsVDAcigKH+WcvsUgqQojLptXb0OptTGcoqaHc8+/oO9fGs99vY3ykE6fjGswWC+2nTvHoQ/eya+ev4SizcTl8dTX4O868BrwOPB8Mh0IsARUhRMEoqgHL2iYsa5vI+/G3foO3jxzh/v/3PnY0N7JQp/9haNvRE9ptT/6t6Q/BfUMwHApRYCoXqamyIsBk1DKdvczI9XXliJnVVFm52PV15YjFCXT10fbB68TGNGzZlOax34pbf/OL1geA/0aBqVzkd+73If61O291c+etbsT8PfX4NgTU1dezEIGuPr78zF7+8o+HsBRPstRUhBBLymKxkBcfT2Iy6pkPf8cZvvsPz/ODb/RjKZ5kirl4kqWiIIRYUs/s+Tp5ga4+LiU+nuTZ7/yInx39Jn/5x/1YiieZrq4mg9U8ucvjclspMBUhxJJ5+8gRnt/7NHfc/CFzCXT1cfCNVs6PvM2Dd59jy6Y0M2nvVGlq+ND96hHdGY/LfXswHPJTICoXefRrh3m/fYjV7qkvbuP62nKmfOfAKb59oA0xs+vrynnq8W1M928/+79Z7RKdz7Dr7gTm4iz7D77F8Y4zTImPJQh09VFa0kWDZ5T/8IkUdTUZZtPeqdIzWMSzX4px4JDe+tge82sel/v2YDjkpwBUhBBLIjZwjETkLJ+9axxL8SRbNr7J6JiGKbU1GSzFk1zK0RNa2s+o1FVnuOPmFHk7tyfJsT62x/yax+W+IRgOhVgkFSHEkoj2tPAf705gKZ4kr64mw3zFxjQcPbGGjjMqO7cn2bIpwcV2bk/SM1hk/cZ3jQc8LvftwXAoyiKoCCEKLhXvJRXvZef2JJejvVPl6EktluJJtt+c4o6bU8zlkfvGaO8s8r16RPdl4PMsgooQouCiPS3ccXOKCvsEs2nvVDn0to7uAYWewSJ6BhQq1mb5yKY0luIJLMWTzMfXdo9y9HNrdntc7n3BcMjPAqkIIQounYpQYc8yk1eP6Pjm94zE4hruuPlDPrIpTYU9SV7PYBE9g0W8emQNO7cnmQ9L8SS77k7wje8anwZuZ4FUhBAFlc0kSMV7aT+jsuHflZNXV5PBXDxJXs+Awu9/Zpyd25P8a2kW4pH7xtj3A8M2j8vtC4ZDfhZARQhRULGBd9lQNcrfPRFlSs9gEY/tMfORTWkeeWKMpbBze5J9PzTsAvwsgIIQoqCiPW+w664EU149ouOxPWa++NtxHrlvjKWyc3uSnHtYIAUhRMGk4r2kkxG235wiNqbh4a9a6Dij8ndPRKmrybCU6moyWIon3R6X28oCKAghCiY2cIy6mgw9A0U8/NUSdt2V4JH7xrhSamsy5PhYABUhREFkMwkSI53EjBq++T0jz35pBEvxJFeSpTjLQqkIIRYlnYxwPvwK8XNt/FpTlF13JdiyKc3VEBtTWCgVIcSCxAaOERt4F206wM7tSXbdnaDCPsFKpSKEmLd0MsLowDEiPS001cX45ANJdm5P8qtARQhxSYmRTqLdb6AkT7L95hS7/lOCupoMy01Hp0owHDrMAqgIIeaUzSToPv5XfPGhODu3J7EUT7JcxcY0LJSKEGJG8XNtjPYfw+eaJAjsuivBcnb0hJacwyyQihDilxIjncT6j+EoPs8nb6ljR/MnMRn13L7rSyx37WdUcvwskIoQq1w6GSHa8wZmTS933FTNxz+7DUeZjZXm6AktOcdZIBUhVqFsJkFs4F2yoye56Tor9/7uVrxV/5aV7OiJNeQcZoFUhFhF4ufaGBtu4/qKcR74f26gufFzLFdHT2j5/iE9n9yeZMumNHM5ekJLbEzjD4ZDIRZIRYhfIbGBYySinaRTEabT6mw4is/zyVvqaG7chqPMxnJ19ISWb3yvmI5OlV13J6hYm+VSvn9IT84+FkFFiBUum0kQ7Wkh0tOC3arnY411fPTG2znecYZAuI/NddU0N9bhKLOxnLV3qjzxNyY6OlV23Z3g2S+NYCme5FJiYxoOHdGR8xKLoCLEChYbOMZQ8B+43uvgj//ofhxlVlpa2+kfjvDx5hvYdc+vsdzFxjR887vF7PuhgS2b0rz0TIQK+wTzdeiIjtiY5qVgOBRiEVSEWIHSyQgDv3iBog97+KMHP0Fe/3CEvE99bCsrxatHdDyxt5jRMYVnvxTjjptTXK7vH9KTs49FUhFihUnFe+l+/6/Zen01jz70R/QPRzAZ9TjKbCylnsEiKuwTFEJsTMPje8y8ekTHHTen+NruUSzFk1yu2JiGoye05BxmkVSEWEHSyQjd7/81H7u5jkcfupc8b9U6roSeAYUK+wSL9eoRHY/vMZP35O5Rdm5PslCHjujIeSkYDkVZJBUhVpC+U/vYen01jz50L1eSyagnNqawGD2DRTy2x8zRE1q2bErz5O5RKuwTLMbbJ7Tk/IACUBFihYj2tKDNnufRhz7HleatWkfHmfPccXOKhXj1iI7H95iJjWn4/c+M88h9YxTCoSM6cg5TACpCrADZTIJz4Vf4owc/gcmo52po7yzicsXGNDyx18SBQ3oq7BN864kYdTUZCuHoCS2xMY0/GA6FKAAVIVaA2MC72K16djQ3cqX1D0fIO3piDZejZ7CIh79qob1TZcumNM9+aQRL8SSF8uoRHTmHKRAVIVaAbCbBbY11XEktrafYf/At3g/0o9XbSI1pOHpCy5ZNaS6lvVPls1+0EhvTsHN7kid3j1JoR09qydlHgagIsUKYig0stf7hCPsPvkVLazvn4lDqupPqLQ2kxvroPv5XfP+Qni2b0szlwCE9T+w1ERvT8OTuUXZuT1JoPYNFtHeq0WA45KdAVIRYIfztney659cotPh4kpbWUxx8oxV/xxksa5uwVPx73CU1TDGU1KDV2zhwKMKuuxLU1WSYyYFDeh7bYybvyd2j7NyeZCkcPaEl5zAFpCLECmBe28T7rS38yde/w8P3/zqOMhuL0T8cwd9xhjffbael9RQ6kxPL2iY8Wx9AUQ3MpNR1JwOnX+Dxr5v51hNRLMWTTPfEXhP7fmgg78ndo+zcnmSpvHpkDTk/oIBUhFgBtHob66//Hd7t/Afu+8Jf0NxYz+a6arxV6/DVVjMTf8cZphzvOEOev72T/uEo/cMRvFXr+PitjbR3Jymt/V0uxbK2idjAu7R3Bnlir4knd48y5bE9Zg4c0mMpnuTZL42wZVOapXT0xBpyDlNAKkKsEDqTk/XX/w6peC8nB47xzi/eQ5s9hLdqHVPi40kCXX1McZTZcJRZyfPV1fDRG+vxVq3DW7UOk1FPnqPMyp6XXqHUdSeXsva6T9PVuocDh/gnT+4e5bE9Zg4c0mMpnuRbT0Spq8mwlNo7VWJjmlAwHApRQCpCrDA6k5Ny011Ee1q4cV03jz50L1MCXX14q9ZxOZob6zn4xnt0xXvRmZzMRau34WzYRffxv+LAIT1HT2jpGSzCUjzJt56IUleTYakdPakl5zAFpiDEChU/18bmumqmi48nWYhHH7qXse4fMh+GkhoMVg95PYNF5H1t9yh1NRmuhKMntOS8ToEpCLFCJaJBfLXVFILJqGf3fbdwPvwK85HNJNi5PUnek7tHuePmFFfK0RNryDlMgakIsQIlRjpxlNlwlNkolObGeg6+8R5d8V50JidzScV7eXL3KL//mXEq7BNcKT2DRcTGNKFgOBSiwBSEWIHiwyfxVq2j0B596F7Gun/IXLKZBFMq7BNcSe2dKjl+loCCECtQYqSTzXXVFJrJqGf3fbdwPvwKs0mN9VFXk+Fq6DijknOcJaAgxAqTzSRIxXvx1VYzE3/HGRajubGeumt6SMV7mUkq3ou5eJKrIRbXkBNiCSgIscKMj3RiMurxVq1jqTz60L2Mdf+QmaST5/nIpjRXQ/sZlZwQS0BBiBUmEQ3iq61hJr7aagrBZNSz+75bOB9+hYulxvqosE9wNXxkU5qloiDECjN2ro3NddXMpn84QiE0N9ZTd00PqXgv0yWiQWqrM1xFPpaAghArSDoZIZ2M4KutZjYDw1EK5dGH7mU09ALnw6+Ql4r3kldXk+EqsrIEVIRYQRIjQfK8VetYav3DEQ62vIdOmyZ+/ghDmQQ6k5O6mgy/ilSEWEES0U6aG+tZSv3DEfYd+ClH2kK4PR5qr7+BTCbDkTd+RmLEzqaNE1wttdUZclwsARUhVpDESJDNd2xlLvGxBAu176Wf8vJb7+OodONramKKqqr4mm7Cf+wd6momuFosxVly3CwBFSFWiHQyQjoZwVdbzVJ4au9+/J391F5/AzMxmc1kMhm2bPyQq6VibZYcK0tAQYgVIjESxGTU461ax1zWltvwd5zhcjy1dz/+zn5qGzYym+HBQfJqazJcLRX2CXJ8LAEFIVaIseE2fLU1XIqvtprjHWeYr5dbWjnSFqK2YSNziUYibNmUxlI8ydVkKZ7E43JbKTAFIVaI8ZFONtdVcyneqnUEwn3MR6Crj7/++5+w0efjUoaHBvnIpjRXW21NhhwfBaYgxAqQiveSzSTw1VYzHyajnkBXH3OJjyf5k69/B2/9RlRVZS7JRIJkIsH2j6S42irsE+S4KTAFIVaAxEgnJqMeb9U65uOjN9Zx8I1W5vLU3v3oS0oxmc1cyvDQIHl1NRmutvVrs+S4KTAFIVaARDRIc2M989XcWI+/4wyzebmlFf8HZ3HXeJgPq62UvG9+r5irrbY6Q85mCkxBiBUgfq6NzXXVXI74eJKW1lNcrH84wl///U/YuNnHfJnMZrwbNvCN7xo5ekLL1WQpzpJjpcAUhFjmEiOd5Plqq5kvf8cZ+ocjvPluOxd7au9+kukMqlbL5Vhf5aLMbufhr5YQG9NwtWzZlCZnGwWmIMQyl4gGcZTZcJTZmK99Bw5R7rmLl1taiY8nmeLvOENHuB/vdRvo7gpzuWobNvJh1shnv2jlaqqwT+Bxud0UkIIQy9z4SCfNjXXMl7/jDKHRCqwVzWj1Nl5uaWXKvgOHcNd4KLPbGR4cJJPJcDlUVWXjZh8fdOl5bI+Zq6VibZYcNwWkIMQyls0kSESDbK6rZr7+/LkfcY3rTvKKr2lg/8G3yPN3nMHfcYYyu5289VUuurvCzJf/2DEOv/ITOtpOomq1HDik58AhPVfDRzalydlGASkIsYyNj3SS19xYz3zse+mnTF7zMRTVQJ5lbRP9wxFaWk9x8I1WTGYz3V1h8hxOJ8ODg2QyGebL13QTGzf7SCYS1DZs5LE9Zg4c0nMlHT2h5dUja8gpoYBUhFjGEtEgzY31zEf/cIQXf9bPuoaPM0VncqIzOdl34KcEuvq4uflWTh73s77KhaqqeDfU0t0Vxl3j4VLiozGsNhtTHE4n8dFRHtsTJm/n9iRLqWewiG9818iBQ3pyPh8Mh/ZQQApCLGNj59rYXFfNfPz5c/9ImecuLmZZ20Sgqw+H04neYMC7oZburjB5VpuN+OgoyUSCS8lkMkxRVZVMJoN3wwbcHg+P7THzze8VsxRiYxq++b1i7vkDGz9vr+GClygwFSGWqXQyQjoZobmxjktpaT1FeLSC0lIbF1P1NvIczgryrDYb3V1hkokEeoOB9VUuQp1Bahs2Ml8ms4X46ChWmw13jQe93sD/eKGDt09o+eJvx6mrybBYsTEN3/qhkX0/MKCsuYb6GxrQGwxEIxGSiYQPCFFAKkIsU4mRII4yG44yG5fyP/7+p1hrfpeZRHta0BsMWG02prhrPIQ6g9Q2bMRqs9Hf20M0EsFqszEfqlYlk04zxeF0YrXZ6Ghr454/1LJze5JddyWoq8lwudo7Vfb90MCBQ3qstlJq6jxYbTam6PUGkomED3iJAlIRYpkaG25jx411XEpL6ylSuo0UqwZmkogGWV/lYjqT2UxeNBLBarPh3VCL/9g7NN18C/NhMpuJx0cps9uZojcY8DU1EY1E+IfX3+PAIT11NRnuuPlDtmz8kC2b0symvVPl6EktBw7pae9UcTidOJzgcFZgtdmYgYsCUxFimYqfa+Pjtz7CpRx84z2sFf+e2RisHvp7w7g9HlRVZYp3Qy0n/X58TU2oqsr6KhehziDuGg+XYrWVEjjdgbvGw0zWu1w41jk5edzP3/1Yyze+e568upoM5uJJKuwT5PUMFtHRqRIb01Bmt1NWbsdq66W2YSPRSIT4aAyrzcZ0eoMeIrgpMBUhlqH4uTYcZTa8Veu4lNP9GqxeA7OxVjTT1xZkeHAQh9PJFFVVKbOXE+oM4q7x4HA68R87Rrx8FJPZzMWstlKikQhWmw2rzUYykSCZSKA3GJgucLoD74Za8lRVi6+pibz46CgdbSfZ6PRxZiRJf28PeoOBmrpSrDYbU5LJBP5jx8hk0pTZ7VxMbzCQ46bAVC7y1OPbEP/a/TvruX9nPWL+fvyt32C+YrEYbx85wmgsxkduvpln9hzFfF0jlxLo6uO+T9/JH+z+DWb3G2xrPkSoM4jD6WS69VUuTh73k0wk0BsM1DY00NHWhq+piYuZzGaGBwex2mzkldntdHd14d2wgel8TTcRON1BNBKhtmEjU0xmM6qqRW8woDcYiEbOY7WVYrXZmM5d44EaLsVNgakIcZU9s+frfPvrz7BJVTFoNPzPiQkCExm+99//M5fSPxxhfaWPS3ngtx7k//vTP6O/txeH08l03us2EPjFaTZu9qE3GFhfVUXg9Gm8GzYwncPp5ORxP94NG8hz13g4duTnrK+qQm8wMEVVVWobNhIfHcVkNjOb+Ogo7hoPy4WCEFfZM3v28F+NJnau0bNDq+MRvZHbtGvwd5zhUoJd/ZgtFi7lk5/6FBaLhcDpDjKZDNPpDQasNhvdXWHyyux2Mpk0/b29TGcym1FVlf7eXvL0BgMOZwWBX5xmJiazmYupWpVC8bjc2yggBSGusvXr15OYnGS6TUVaBoajXEqpRsNf/t7DfP/FF5mLxWLhgd/6LTKZDN1dYS62vsrF8OAQ8dFR8mobNtLf20t8dJTp1le5CHUGmeL2eIiPjjI8OMilJBMJVFVlSiadYTlRgdsR4ioaHR09kGDSakBD3vnJLEczH9L1Riv+9k4cZTY+emMdzY31TBcfT/JySyu/qTPwPx99nOs2bNi5cdOmKLP4g91/yDN79jwXCgbdjnVO9AYD0230+fAfewdf002oqspGnw//sXfwNd2EqqrkOZxO+nt7OXncz/oqF1abDe91G+hoO8nNpf8GVVWZzfDQIGXldvLio6NYS20sJxqEuIo8Lve2TUXqa5/TG8l7Pf0hgYkMO9boqFCKOD+Z5UQmw9FMmhG9Fl9tDV7XOuJjCV5uaeXGdJada/QczaT5birxYDAcep45eFzuB4DnrLZSfE1NXCwaidDdFWbjZh958dFRAqdPs9HnQ1VV8jKZDN1dYYYHB4mPjpJXZrfjvW4DeoOB2fiPHcPX1EReqDOI1VaK1WbjcoU6g4SCQXJuD4ZDhymQIoS4Sjwu938zajRPf0Zn0GvR8L8/TGLRKOzU6bFoFPIMGg3uoiI+ql3DLSgogxH6fhHmw1Afn9CobFHXkGfQaHg9/WE0MhL9AXOIjET9pVbrtmQy4Va1KpYSK9PpDQY+/DDF+XPnsNpKWaPTYTKb6Whro8xuR1EUFEXBaivFub4St8eD2+PB7nCgarXMZnhwEKVIwWorJS8U7MTt8bAQ0UiEaCRCzr7ISDREgSgIcYV5XO4HPC73mS2q9st/YjBZDRoN/yuVYIu6htu0a5iNQaNhU5HKDq2OHVodFUoRU0o1CnZF8TE/nycnFAySyWS42PoqF8lEgv7eXvJMZjPeDRvwH3uH+OgolyuTydDd1cX6Khd58dFRTGYzy42KEEvM43JvA7YBLuCeLarWumONDgMaXs98SGBigs/o9JRqFBbDolF8zEMwHPJ7XO49mUxmd0fbSTZu9nGx2oaNHDvyc0xmMyazGZPZjK/pJk76/ZTZy1lf5WI+kokEHW1teDdsQFVV8rq7wrhrPCxUMpFgKagIsQQ8Lvc2YBdwD2CtUIoo1WjwFqmcmMgQmJjgaCbNbdo17NDqKIQKRcHjcluD4VCUS/sKcM/w4KC7v7cXh9PJxXxNN3HS78e7YQMmsxlVVfE1NdHdFcZ/7BhujwerzcZMMpkM/b09DA8OUdvQgN5gIC+ZSJCnNxhYqGQiyVJQEaKAPC63G3gauKdCKeI27Rq8RUWUahSmeIuK+F/JBP/VaKKQDBoNOT7gMJcQDIeiHpf7QeC1wOkOTGYzJrOZ6VRVZaPPx0m/n/VVVZTZ7eStr3LhcFbQ3RUmFAxiMptRtSp6vYFkMkF8dJRMOoPD6cTX1MR0gV+cxnvdBhYjPhrjAj8FVIQQBeJxuX3Az0s1iu8zegM71+ipUIowaDRMZ9EolCoK702k8RapFEogO0FgYuIrkZFolHmIjERDpVarNZvN3hwbGcHuWIeiKEynKApldjvdXWGSyQSWEit5iqJgtZXicDoxFhejarWoWi16gwHn+kqc69djMpuZLnD6NFZbKdbSUhYqGonQ291NTigYDj1FASkIUQAel9sHvFahFFn/yFDMpiKVuWwqUglMTHB+MkuhBCYmCIZDIS7PVwB/fHSUjraTzERVVWobNpLJZDh53E8mk2E6vcGA1WbDarNhtdlQVZWLhTqD5DmcThajv7eHC16iwBSEWCSPy20FXqtQiqyP6I0YNBrmY4dWx4lMhqspGA5FgQeB6PDgIB1tJ5mNu8bD+ioX/mPv0N/by3wkEwlOHvej1xvwbtjAYmQyGYYHB7lgHwWmIMTifdmg0Vg/pzdg0GiYL29REScmMhRKf3biMAsQDIf8wO1AtL+3l462k2QyGWZitdlouvkW8vzHjhE4fZpoJMJ0yUSC4cFBOtpOEvjFabzXbcDhdLJYgdMdZDIZcvzBcMhPgakIsQgel9sKPHCbdg2lGoWrKT45GWWBguGQ3+Ny3w681t/ba42PjuJruglVVZmJw+nE4XQSHx1leGiQ7q4wmXSGPJPZjMlsxl3jQW8wUAgdbSfp7+3lgs+zBFSEWCCPy+0DDgBWr6KyEN6iIs5PZinVKCxGYGKCnOMsQjAc8ntc7tuB1+Kjo9ZjR37Oxs0+TGYzszGZzZjMZpZSf28v/b29XPD5YDh0mCVQhBALVGq1/hioJedoJk1PdgKtRsNaRWG+AtkJzmcnyQBHJ9IEshMEshMEshMEshOAhvOTk5QqCrM5MZHhUPpDzk9mrZGR6F+zCJGRaH+p1XoQ2JHJZKyD/f0Yi4sxFhdzNfT39tLRdpILng+GQ4+zRDQIsUAel/vMbdo17lKNwuvpDzk/mWWKt0ilQlEwaDTkJSYn6clmyUtMTtKTnWAmFUoRBo2GKYGJDFMMGg0VShHTBSYyVChFbFG1vJxOkZicvCEYDvlZJI/LbQVeA3zkuD0e3DUerqT+3l462k5ywfPBcOhBlpAGIRbI43I/t6lIfeBzeiN5PdkJTkxkCExMEJjIcLEKpQiDRoMBqCgqIs+rqOR5i4qYS092gsQk/yTBJOezWSqUIkoVDaUahbzdYzGC4ZCGAvG43FbgaeABcvQGA+urqnA4K1BVlaXU39tLR9tJLngpGA7tZIlpEGKBPC63G3itQilye4uK8BapVCgKpRqFiwUmJsg7P5nl/GSWvMDEBFMCExmm8xap5FUoCgaNhgqlCAMavEVFTDk/meV8dpJANkNgYoLARMYfDIduoMA8Lvdu4GmmKbPbMZnNqKqKyWwhz2qzsVCZTIb46Ch58dEYgdOnucAP3B4Mh6IsMQ1CLJLH5fYB9wC3AW7Azb8UBfz8Mz8wAkQBP/8sFAyHQkzjcbndgBtwA25gM2AFtvF/hYAQ8DrgBw4Hw6EoS8DjcluB3cAuwM0cVFXFZLYwl/hojEwmwyX4gduD4VCUK0CDEOKyeFxuH3APsBmwAm7ATeFEgeeD4dDnuYL+DwLp266MUmAYAAAAAElFTkSuQmCC"
  },
  {
    "width": 130,
    "height": 122,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 65,
    "height": 61,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 33,
    "height": 31,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAfCAYAAABplKSyAAAAAklEQVR4AewaftIAAAQ0SURBVM3BW2xTZQDA8f/5ztd76dZ1F8fW0pUNAwQYukRdlMUIJhBJiOiDLwZfkAeToS8Qn/RBFE1IfFJJDA+SiJgMw02ZhEuiMQ4EhkOBwgZrN7Z2Zd2F7vR2PpkZSSW2L1Kz30+LDsbUQHiEYhZUOLG4nYwl7lFKKOij/1aCUta0N5/UNG0dD5ED4RH2dJ6kmPaXA1Q0N9LVPUgpO7e18tHnlyhlTXsz/0YwDwjmAcE8IJgHBPOAYB4Q/E/MfJa+3gvVna8+/WHI73dRQBscjKsb4VGKqahwYnXaiI3do5SWUDXh/jEepswsv506gkicwWVXmKYinc3nJlPZn7/qHljfH43MyIFIko/3/UExHW01+KocdHUPUsrOba18svcShZQyWWnppsk3BHb+ljcVNqsuvULr2PRs4xd7DkReF5SROxclWBWlkN1dh9A0ZtVW2l8K+QO1kjKyqyTC2cSSkB+LxQLKRJdWYrEoN8OXcTss3qWL3G8IyihhXUnadGJ3uAn6GwkGAthsNpa0LMdplwihEah1+QVlJjRFpcdFLp9nltvpIDWTYpZSivi4EROUkWnmUNkxFricaGjkTROnw050KMKsVDpnXAgnuyRlpKdHMWdGiAyP4HK5sEiJkc4QvnYRt0Mnk81f6o9G+qSmadisgmJ0KdCFhs0qKEUTGjar4B8sjfyUfIUr3QmeWu5gdYuJ1SKpqK3puX7tVlQpvuM+GQxUsX3LCorxeOzYrJJQoJJSmgJVbN+ygmIUeaxTB3DKETY8d6zZyDg+6Nw1epj75MDtBLv39lJMR1sNvioHXd2DlLJzWyu79/ZSTNB1mx2bP8VpN/FVZqs2doh3OndxmPskZVZhMdjU2sfaJw/h9aR5wCKVgzmSMpCk2bBsnMf9dpoW2rGJQbyeCOmMTvyupK46y524vMwcSRlsbp3khTYfpqkYik+TTesIYcUwBP56g9SMnn//M+d+SDBLUAbf9EhiiSTJyWn6buvsO91GJqPhrzeYlTL06LGzkbPMkZTBygZwuxw47TaeWZpicmKAhro0DyjUBAUEZbCsMU8ul2fGSLP/x4ssXniFQkLTKikgeMSUUiyuh4E7in1HzzM6YXD810qG43XMUkojPu5xUkA2LfKxY+sqivF47Niskpagl1JCQR87tq7il+OnaKhzk8osxjUyjhHvxcDKu1+280QoSfKeg6tDNuBrHpD+Bm+9v8HLf7V9/fp19SOx1xqM9Nrzl+stk9HEkdM+77m6xxa+Z5p5YaLTc8OLy+VG06YkBTQegVBjYPWbdsepGqFX5lE4NI2kUkffuv7nxnVrXzxYXVO72SKlELqOpmncGR4688OJ759njs4j4PV4xhYJXcWUeeJQJnPQrdFz1cwf7R2/G+7vv/ltLm1MZbPZkanp6d+HhyLnIv033x6fnJxgzl+IMpbQmSwYGgAAAABJRU5ErkJggg=="
  },
  {
    "width": 17,
    "height": 16,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAYAAADwMZRfAAAAAklEQVR4AewaftIAAAIQSURBVK3BTUiTYQDA8f/zvK/OqWtTZ1lT322i9kFCBEKrQZ/4dYqCTkGXbh28de8W1CWMKOjjULeSCPykQ22nZoiXIiZqgjXNaOrc3Dvdnlb5wtulFPz9xPCrmJqJL2AxDviY+prBrslfxdTnJJbD+3fPngy3+Nmkz8QXGH0yieXUVQeDY0vY9SjFQCSBxbPLgZ1kB0h2gG601HH6isQSaKqlq8yJXcCooivMb8nvi/z49Np7+9qZyHI69/TG4+gDfWrBZGAijaXTtcpwNIFdj4ChaAJZyHLW+5ySErNCdzjD+YJqDtY3PNPZBo08jcE2WgI+Uuk047GRuhNt3ks625AT5bhdFbhclWzkNygqrKzm5nQpBJomsEgh0DSBnZACTROQzzExaeKszLCS/JbKmBvvX0Y+jOr+RjcdoQKWYKObDqWwCzR46Agp/jDIinGOHhwt8++L91+/B/r07BKD0QSWTmA4msCuR8BQ9AvH/Vnam+cJNd2iUMiULKdK91Ak2aIGV5YLoTyLSUkqbSIEa703Kx9RJNmi8lKB1CRKzVPjyaEUmcHI3AxFetDw0B1WWIKGh27+FjSq8Jp5ovEcb8bm8dW0Y65LJ7zlF7373KFq/uFuX59rsvd+f7Wz9MhSXt3JtbZefjgSqFGwxibBfwR99fK8w3lxRRXWTSE+vpOidq+v/lgmk56OjcVeUPQTN3S9XWmfLxIAAAAASUVORK5CYII="
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