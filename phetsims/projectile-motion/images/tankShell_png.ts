/* eslint-disable */
import asyncLoader from '../../phet-core/js/asyncLoader.js';

const image = new Image();
const unlock = asyncLoader.createLock( image );
image.onload = unlock;
image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAAB8CAYAAAAvkab8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAHVdJREFUeNrsXVtsG9eZPmdmOLyIEiXLtmT5EsduosTOxW3jbLJp0gBx4AZtdrvIy6L75Id9KFDEKFAgeTCMIA+BgwLdpA+NgW6BPGyyD+lDAT9svcEi3naNrp1srNSWbMm62ZKsO+/X4cycPWcokkNyhjxDUiIp/R8wFjWkTGo055vv+85//sGEEAQAAADtAon3hRjjE74u1++TiezRLr/rHhw6AC+ITrp1ghR6AfyPTFp7l36dhaMCsOUaHqXECEmUhC8fe6Jf6ul1w1EDcGN6PISSSRUNH9+Flh4k0PxsFNGL22V6cbtAz70rcIQAjkmJElKvSxZmjz29J3DwcA8cMQA3RkdWUTScQc+/fKCwj5KRQUzTE2FNcgmT6ZTKyOljOFoAblLy+lwfULt21nxiAQC1sL6aQl9efYBe+eHDyOUSLF8zR8lpYnRdV1U9Rk/Di2pWZwQVhqMHpFRVJYkiXn72xf1y/x4vHC0AN/5yZR4doMqaR10zAqPkhMLBtCKIwqWsov0CcqedC6Hak7Is/rR3lwcICeBYJTGbxmv32fnFlPj3Tz8kDwx1vSFKwt0uv3yNXhRfhqMJSqkEbo90//Gndh+ELAngVCUN7vejhx/prevns1kdzUyE0P2ZqEotXUSU8Pl0Sv0NHNkdrpTYjJuukSEgJIATMIXElNKBBs4blkE9erwfnfrRw9Lxb+/pp6rpQ6qe0izfpOflYTjK2xtSlRPjH+nVTsQChqME4MbyYsIgJLtw2ykO5nIpiRKdNDcbPTtPN0pSrKTgbaryR+CI7yD7xqzbiZMDB/cd8MNRAnDjiz/eQ48e22XYt81SYjN3w4a1o8Q3RW0dI6c/wJHf5kqJzbqxi9SegS72GI4SgJswWF3SZhESg6/LhY6f2MPsnbS0EB8ev7X+mewWExjh9xVF+whKCrapUqJE9OOeXvfvX/nhYREOEYAXk3dCaJXat2deGNrS96XkxIox1UgorUsu4RNYyrINlRK1bn+3/1C3CCoJ4ARry0nUv9e35e/LlBndJKbUJsaCZ+Zno2e8PtdVau3OwVKWbUJKiJBTff1uJAhwgADOSOmRx3e17P2ZtTtxcsCwdzMToReoevoveoFdUDLaeVjK0uGklMloB/cOQp4E4Ec4mDa+tsOC7XxJAd2EudnoQUpO/yq7xQ9EUfiYqqd3IHfqMFJiVbRen6TQP6IMhwfAi1Vm3dqw8n+jpEBcX00FqHo6u5RSz1Jrd4mS05uQO3WOUjqxa7dXhvokgBOsLCZRO7e1YYTJto3c6fXF+fhrHq80nklr56CkoM1JqcvvOtnX70Hg3ABO7dtDRwNt/zlNuZM0Pxs9PjUe+swlizFRxOcoQX0K1q4NSYkQ9N2BIciTAPxQFM1QIJ20cJvlTmxtHt1YpXjf3Ez0w2w2/Stq7S5Sa/cBWLs2IiV6cg37u2VQSgBHKilArZth+Y2yN2K+yLU98ktZouGMNH03bF7KAt0xW01KG5XcyB+AjBvghJQyyOt35UpIDBLKXdFI/pGJmEjpP8ji25aBZWLM2rFlMpSYTk9PhE9R5QTdMVuslE7sGfClqUrywKEB8CK4lkK9fayuDRfIpUBIJsLJ7SM1icuWvLaIuFjuxEoKHn60T9xYyvJbVlIAS1laREoen+SBPAngBIlYrqEbI6U8cZScQXRnkaRwgXXsiIv9WySq1qkuljuZuhQEJkbX36NW9R3ZLUF3zK0ipUCf+7Fdu2HmDeAMofU06mI5JCUlTEpZxiApekLhMhlEMKrclyejMuJCDaguYsNUTlVXvjtmMpGVJ8aCbyzOx/++yy9/Tb9/C3KnTSSldEp7zt8DITeAH0pGQ1Q1oG563hgjvcAnG/RiY8uwaU9xH64gjvJTMb+AvEBePHbR+AaXfAZcp100lxTMTISevT8T/dzlEqE75maRkksW/N0GKQErAfhVUm+/Bxm1thiXKhtSwhsbJGUmrtwrMSn1ewWSwpWqq/zctLaLTlWXc7soywIafqIfPfpEvzQ3E+2fngj/WpSEX8myeBGWsjSRlOJR5SgrBwAAeBGPZtkNJlB+BQAus2hFzZQf6biqJSsSmjknqlRdhdeSUjbiVl3G5yvQooXC4reLDx0JsE1cW0mKlKDOzkF3zOaREgOzbwAAL2JRBbFiW2GDlIhJuphpiphGeglxmWRVKaEVKcRKdeEypqlLdSEe1cUf0rNF7HsGfeixp/rR1J3w6XvTkVeo3ZtKJaE7Zl2kxG4U4PVJUA4AcIRETEG9u4qTI3l7VZZ3l+SUxDSqzdRDTIxjFYxvneoiJkLjD+nzqou5jaef2Ysef2q3dH86Mnz3TvAzqiZjVE3+UslASYETpdTbHXBDngRwZt8oKR0Z7kMlC7jNVgkTVOawcgql1DGVqZk8IbRKdZmIy0p1cdpFt0dEjxzbxTbpwVys7+5Y8F1WUuDxuj7JpFXojslDSl4vq1GCgwLgB5t9Y6eMYA60zeeQSWmQiueK6Qyx2t9K1cUb0pd8QHu7uP9QN9sktiRn8k7ozL2pyBmqqC4n4rCUxZaUZLf4XP9eqFECOENwLY32HfSXyR7zSDYNYVL2kqKcKlinasRVQhIFEYWt9zequpzYRcxvF3ft9qKT3/OiE88OIKqcTk+MBV/1eKSFDHTHrCSlnl73oPEnBlYC1An7U6c46iuICZUGOrgsEzITl9k6EWz54zZ2sV7VVYW4SvY7t4tut4ie+PYetgkzk5GDozdWf+d2Sx/Qz3Axq+gXdnLuVCClZCL7rZ5eVpULgwvAhwdzccRWADhjrsqCyHLi2grVVW4X+VUXsdjfmF088mgv24SVxURgYjT41tJC/Oe+LtflVHJndsc0zb6h3T0BGUHDSQAv2LlCbX9Hqi5b4qqpujYvpB8Y8hvlFYl4Vr719errczPR17w+13g6pf5sJ+VOBVKSJMFYiCsAKwE4QW2GUTjZOr/IobpINW4jlcRVotZaE9KzkoLnvr8ffef5QWlmInz89s31z2W3ZHTHpAS17btjFm5GKbnE9D/98zF3N/RSAnDi+v8sGsTEQttOh/0CXVKiZmq8xHJ/Sd2TjTUlVfcTdrNNNDUeUoOrKc3tkS4mE9lt2x2zoJQ0VXcH+oCQAE0ZyZ13dW5hSF9UV/Yh/bce60NHH+uTlh8kpOnx0FlKUme7e9yX4zFl2y1lKVlmAtYN4ARKRkfdrA0u5r/ydzZztT6k37e/Cw3S7amTe9H0ePj02Ddrp7r88uRG696PtxUpuVyCKgg2d8wFACywtpJEQ4e6DVIqF024fFBtf7G1ZaqLPdfT40ZPnxxgS1nYIuDhkevLv6W27gP63u9n0p29lEXKHUT88sA+X5wqpV4YagCnA5BNkGBcSx0Ry+d5yuJ2rOriCOk9HhF96/E+trEWKgGqnN5bW0m94/FIlzKZzuyOWVBGoiR4BBHsG8AZmOXP2f5K0iFll3pcjFdsBpwNcXGorp1FXGVPbvzeh44EjC0eU2SqnN6YuhN6g1q7q9TaneukkgJTSQD2iFA4CXBi35ZT6MDh7sLAMBOD9WNS7PqIrQiFh7isyYvbLm5D8ipXm6xR44unDqK/eXEIUeX0wsRo8HOv17WIBXSBElTbd8eUzH9VUEoAJ6D2ALlceIOQcKGFRz4nKuRFJsKqTVwIVFeTwApbWbkG3aTJ26GDoyOrv5Yk4Vcer3QxEc+2bXfMPCkdHjQ16gIAeOF2Cwb5kLwSItj0fa7pW/ExNhETqSCqYiU0LiWs8tC3mupyRFz5z+ycuErfq/2xkTuxW0aJYyNrZykpse6Yl6hyarulLAVS8vokJIJSAjiE1ydukBAd3DoqPiaouOUHPjE/X1x2kS/gzb0mR0hFkkOlhYuOVBexVD4VqmsHhfSD+/3GFo8qzNq9PjEWfM3fLU9Rkmqb7pgGKfUEZJh1AzjGwJBvY/aNbYLlgDVIRydIJ1aEVXyMLIgMmVVXhTUs2kUroir5WoPEdqJdZG2vn31xKGft7oSGb329+pmbLWWR8LlUsrVLWQxS6up29bITRNcJjDQAF+5NRZHbIyFdQ6WFgWWD0CAnnFu8m1vMiq2Jy0xKujVxlXyfJxozsW3YxTwBmdWYrV10oLq2Y0jPcqdjT+9mm3R/Oto3emP1Q0XR/8XX5fqEklNLumNKhT8K3XQdBhuAD/rGQNd0GzIq+R4XllFUe22h5knElhZJ180kZEFiZjtYRmT59iKl+ReqCOmR6f9xbhc7W3UdOtLDNondhn1sZO0M65DZHXBfplZvS7tjSvnfIUdKoJQAfDCIgBGFVnoLEFzGJhVkVP5aG+IqJ6RS4mIPhUpFZlZdFvmWTszZFrEgqU0I6TdbdW1CSM+6Y37v1EFj5o4S02mqnk75u+XJjda9H2+NUkLs9jBe40QDALhIaWNwlyglU0EfRnZkZUNcphWr9qoLmx5XsYvsq5B7Neaxi/nH+iaE9HWrrtaH9P6AnC8pECdvh4ZvXFv6HVvKQv+vi4qibVp3TIOUIqHMCdktgX0D8Nu3DSViZEoFsikNSnDZJRyXsVQ14rJWXaT6a+tVXZ0Y0peprsbsYm3V9cixPrYJSwvxwOjI2lsL9+M/37jhZtNLCqTilY8Y8hYA4FNKG/atTF1XXIFx6e2HMCYWz1sRGTZ9Tyxfa2sXbVQXLhttXKprC0J6VJ6FoRohvY36qt8u8quuwQOFkgL5xvXl12cnI6/5ulzjqWTzumNKZjlOQCkBHNi33Xu9SNOIRY6By8iJVJBV5fe4jKg4VVez7CKn6nIS0pt/T9uQ3kKBVQvpUbmlRA5UVxNDetay5qVXD6HnXtKk0ZHV4+Ojwc9ltxiRJOF8o0tZJHNwCUE3gBfhUAbJbmHjnMFlg5XYEE8VIuIirlJGKFFdTuyiE9VltoBO7KLFaxsJ6e0f561Xa0J6j1dE331+0Gjde3c02E/J6UPTUpa6umMapMQ6BOhQEgBwgAglJTZ4cucMX1lA5T5S42dKG/WX50r2ZGT+AWJDVpuoulod0pe9zj6kN2VJTQjph5/sR8NP9EuL83FpYjR4dmIseLYn4L4cizrrjmmQkiRiT+4Dg1IC8Pq3fNBNauQ7RXKwskr2qoOfuOqzi5wqqpbq6uCQHtksCUJcqsveLh54yI/20+2ZFwbRzf9bPX375vor/h55KhHjW8pSVqcEYw3AnykVzpmKGzUSy4FdySXYYpCSuoirtlKrrboaDelL9GC1kH6rVFczQ3q0YSsRsg/pC49zb9DX70EvvXoAPfvSPmlmIjJ87U8PPqO2LkEV4PvplGrbHdOUKSGoUwI4IKWcsjYyJWzRKNFCXdRUT7XyHauBaKtW6rOL7RbSFz9j60L6fGF1rZAeWTzH3sAlC+jJ7+xGT357tzQ5HgrcuLby7spi8p0uv/xJMpGtWMpSMvsGnARw4N6KGYRFI/xiD+pSpWBFXKTCGplfx6G6ym+T3aBdtLd7NkS0aSG9WXU1OaSvUF3EXmE2MaQ/9lQ/evzJXRLLJK9+8eDM2DfrZ7p75KvxWLE7pmntGwGlBHDMSvkZ27IxWkI+xnMEVyEu09WfWKySqKm67JWDI9Vl+TP1qy5scQ9v7Cikb0FpRL12Mf8eVUJ6hnxphMfrQ//wk6PoBz8+jC59Nv3C3bHQF6IkXNU18qNCpqSDUgLUkSnl7/BabY6EEAsFYkNcCFntb5LqcmAXm6W6rNai4WaG9KiB0ogWhvSZtIbGR0Poiz/O6UpGj7k94kW6z1i6IpVc3SDoBjggJbt1VRZCp3Di2pGXJXGVvz4/wDhVl9391epVXZ0c0lctjbAI6ctVV7NC+khIQX/9ahX975+WNI9XnIxGlIpFvlJ5cAkA8Ps3VHHOWKkQgpDFbWHtycv2NDQrJlw6rnntoumTc6iuJof0VVQXtvCNbR3SO1Rd92di6ObXa8bW2+e+zBb0ZjLqFas/c4GUwL4BHCslUu61UMVtp62+wTYsRir+gyqqi9i/lMcuFpREAyG9lepqTkjfoOrC9kq1gogatYvlry8L6W+NrLFaJXVpIal5fdJFuvODUDA9W+1vbJBSVtHiCIJugNNMCVUjIQsCyr8M1yauRlQXj10sFACi+kP6EtW100J6SzLK7WB50dfXlpkqUpWMFnG5hPPZrMa9Hi4XdOtINVdwAgC1wBqBsdt2m+2bxTXf4rbTnOTVgOpqml1EjYX0TS2N6ICQPhrOoGt/foDGvllHPb3y9XhUeauezgESDC9APWCLcdkdMSpWlJdd/cufxDZUROohrnpUV712ETkP6UvIqwNCelvVZbt+MfczMxNhdOP6irqymNQll3CJ7vpFJJSZrffcKllmAkoJ4MS+xWPZitmxarxUSRXElogwD3FZkBe2YRayiXaRS3VteUhfqbpQHarL7ufYjUhn7kaYMlLVrG4sHVFV/SNq0xruRilV/QsDALXICZlalxCOs8mCVKqTFw9xFb+r2y5uperakpDeueriCeljEYUF1+j2zXXV7RG5F9k6JiV/t2uESvGnyVAXjDIAt1IySYnq49FcFUxqqafmqi5uu9gmqqslIb2VmirZh9HifBzd/HoV3ZuKoO6AfJmqo7ezijayGedWQSnFYwqMNED95FR+PlcQBA9xoYZUFyb1EVdVu1iP6uqgkL6W6poYC6KbN1a1aCijssZt9Jl3ouHMpt6osrQdLrg3QB2kZDVLw3Uu4YoSm4ZUF6lJeHXYxXpUVweF9FaqS8loaHRkjW6ruigKC+mUen4rbq1kkykBAPWlSpUDBNccWNWylWaoLlwiP7bGLlZVXW0e0q+vGjehZPd6Y7f1vpxV9AsK0a5s9RllkFI0oizt5768AQAIDezzoQS1/MRWFZDKAcJLXnWoLmxBEIRTSuz0kP7unTC6OxZUKSnpsix8Qne9G4vUP6XfFFLKKlq6qvwFACyQiGetg2tc21NhG29Ur+pybBcdqa7WhPSbqbqUtIamqCKiNo1N6cdECZ/TVP3TZBOm9Jtl32aZjwRWAjjPlEilVOEYIATzjG4nqquFdrEJqgsT28infuKy+P3ZhNZfv1xB96YjqsslsPu1nWv2lH7TSCm4lgb3BqgjUSqVKlVVQRXicm5LbM1PlRymeXax2aprs0P6lQcJdPuv6+jBfFyR3SKb0n+TOqTZdjynIOgG1I0uvwtlqcJ2ySLi4oAqxMVLXpuiutowpK9bdZl4SVE0NDcTRd98taIzi0YP/0Vq0S60g0XjIiX6YeNUxvlhqAF44aOkFFrPoD2DPttBgnlymApSaUx12ZKeU9XVwpC+EdXFLNrURJgqozVNlsXJZCJ7YSun9JtGSvRDqzDMAM7tGynWuVgEGs2xJc5UF7Eb8U5VV4eF9MuLCWNx7DTd/N2bW3W96aTE2gtgjHshUwLUyUw2Y7jKfdKIbSJkyxrtorp4iiWdqa7G7OK0QUQhNbia0tyeXCO1WLR1U/pNU0oAgFOwmw2Gg2m0e6+vti2xHVjWLIAtBi6P6qo9i1Wn6ir/ZZqqupyH9Cwvmri1zmyaqipaRJSE86qq/2Y7nFeSU/8LAOThconGkgRWFoAtPAbv+WRd+Fif6uKyi/WorjYJ6Vlt2K0bq2jmbphNNFxPJbJ1NVLrCFKS3WIkEVcCbEYFAHBKJqSWx0DIkrh4yatdVFerQvr5+zF059a6GlpL6S5ZNKqu4zFldjueV2ZSCieilJS6gJQAfOjd5UFT46EqS02QhS0hHAtJK9slchGXTdZTlbzK36qNQvpsVkcL99hdQFZUTSUJ+gPvaxr5SE1mw9v5vCqQkprV4wRBUTfAgX2TBZRVdPvlF3W0/Mi9lFS1Mnaqi+cedM22i1Xfsk7VxSza3bEgm0lTXW5xKpVU3263qustISVRwvOJWPY4GoTBBuCDLIv0aq6V3vsNWzNT47NYzlUXtpRCW2QX61Bda4tJo3/Rg7kY8vqkS6qqs7uAjOy080oynWBLjKFBKQF4EaD2LRLKVCxKxxYDl1SxP9artxpXXaS6FKquurYwpJ+dijBlpKUSalyUhI/p3neSie1t0bhIKbSenh066IcpOIBzNNyviCAbZ9R+qqtJIT0TAAYZ3Q7qooAXMhntfCdVXW8JKVGMrCwl0TE4JgAnaqnPjdaWk6h/r9fGw6C613BVkgi/6qo6dd+I6uJp0VRFdUVCaTR5O8RW6bMpfVZ1fSG7zab0m0lKYV0jaXrQPXBYALxgi3Hzt+gqubc8qTbusfXDuqbgHRKX8eQm2MUa5HWfktDsZEQNB9Oa5BI/Rdt4Sr+ZpDQbCWUkMG8AJ+ilSml9hSqlPV6+lfO4LPa1Ja8GiKum6iLWP9tISG/xQdjMJCOjyTvBXCM1UTinaeRT+k0YzhwOUqJ+dhZjLEHSDXCqlNIpB2u5OVt+MPbBNYnLmry4u0Q2qrpsQvpkIovu3FxHC3Mx1SUJ4+m0+jMCFq0upYREEWcSccXtg6puAK9S6nejiVuJ5v/HDaiuptpFCyKyC+lXqWIcv7XOJo0UStaXNVV/U822ZyO1jiElt1eaT8SzR31Q1Q3gVUouESWTLep6s1mqy0FIz6qul+bj6PbNNZVaswS1HBfp1wvbvep6y0hJ18hSOJg+arfqGwAoBztXUtSutDWcqi4O4mIWbW42iqbHQ5okC5PUwl6AKf1NICWM0VdZRX8BDgvAmVoSUDScQT297s79JTiJK0gtGiMjtlFHcVlV9bd3YtX1lpFSKqmOrC4l0eNPwoEB8CPQ5zGUQ0eTUg0YqmgirCXiiirLotFIjT6ehb/+JpMSxWw6raYIIl44NAB+UnIbSmlw//Zq8c7yopmJELo/E2VT+hFRwue1bdJIrZNIaSQeVbxQFgBwAjYxsrqU2Da/D1N9bGHsPFVHHq90NZ0y7o12Bf7SLSAleuDDkiRkwqGMm139AABepTR5J9jxv8fSQpxZNDUSSuuSK3f76lQyCxatxUqJTfFOJuPZ44FeICUAH4wZuKRq2B0WeneaRWOKaGo8pGqansAI5xqpqSpM6bcLKQki/iYcSh8fPNAFRwfADRZys1zJWG7SIRaN9blmeREl0ilq0XZUI7WOIiX6x/o8Esr8BHIlgCML12taA9fGWF9NGeH10oMEy4suaap+XoUp/fYmJYqR0Ho6TTkJugUA+C3cgM9YfNquyE/pp1PZuCjmGqmloOq6M0iJStgRjLEnGc8iWG4CcGLfItS+tZtFm8+RkS6IeEGBRmodq5SQxyeN0xNs2AukBHBASgztUNnNPsP03bBBSBtV1xdIFqb0O5qUEEF/XF9ODg8OQdgN4Me+/X5jWr1VpGQs/5iJquFQWoOq621GSumUemV1OflT+lCGQwTgBWuJS0lhS9/TPKVPFVFMFPE5XSOfQl603ZQSQldiUUVWlM6rOwG0DgNDfjRyfXlL6pXyVdeL83FVkvB4Jq1BI7XtTEqsstvjlUapFD9+8HAPHCUAFxgRMevGLNxmnTdsSn9idB2Fg2lFEAU2pf8LNUvAou0ApYSIjj5ZXoi/B6QEcAJ2viw3mZSMRmr0/xy/tQ5V1zuZlBRF+/elB4n3OnHpAKB1OEDJaHRk1bBXjZaUmKb0NckFjdRAKREy6/W5xukVahjUEsCJhWPExMjk0eP9dVs0NpM2D43UdiSqSiB2ZWJXKThMAKcWjtUJMZXtBIyI/vs/72vX/ryQWVtOfkh3PZyIKz9gBb1wVHcOMKlx32HZLYaf+duhQKcstAS0B/5yZd5YB1dLLZkbqek6WcQYXaAXQ2ikBkqpCmsh/P6tG6uglgCO8PTJAUMtRW2WnrD9I18uo8t/mGKExBqpvZpJq4eAkAA1lRKDxystPHQkMFRvRgDYmWCtQZgle/7lA4XJkvJGapm09i7LL+FoARyREsb4hCjia0eH+2TWh7kHGsABOMFm4hgxHXmkN9frWtVjAsa/VBTtI1YPB0cIUBcpbRDTYaqY/o3Ka7gFE8Ax3G5xLpPR3oRGaoCmkRIAAABsBaAqEgAAtBX+X4ABANWFEMNB0c3UAAAAAElFTkSuQmCC';
export default image;