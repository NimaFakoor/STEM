/* eslint-disable */
export default "precision mediump float;\nvarying vec2 vPosition;\nuniform mat3 uMatrixInverse;\nuniform sampler2D uData;\nuniform vec2 uTextureSize;\nuniform ivec4 uPathLength;\nuniform int uMaxPathLength;\nuniform int uActiveBodies;\nuniform mat4 uColorMatrix;\nuniform vec4 uBackgroundColor;\n\n// NOTE: This is best hardcoded as a constant (we could replace in JS if needed)\nconst int maxPathLength = 32 * 32 / 4;\n\nvec2 globalToModel( in vec2 modelPoint ) {\n  return ( uMatrixInverse * vec3( modelPoint, 1.0 ) ).xy;\n}\n\n// Given an index into our \"vec3 data array\", returns the vec3\nvec4 fetch( in int index ) {\n  vec2 coordinates = vec2( mod( float( index ), uTextureSize.x ), floor( float( index ) / uTextureSize.x ) );\n  return texture2D( uData, ( coordinates + 0.5 ) / uTextureSize );\n}\n\n// Signed distance to a line segment\nfloat sdSegment( in vec2 p, in vec2 a, in vec2 b ) {\n  vec2 pa = p-a, ba = b-a;\n  float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );\n  return length( pa - ba*h );\n}\n\n// For one body, calculate the path stroke in a specific modelPosition\nvec4 getStroke( in vec2 modelPosition, in int bodyIndex, in vec3 planetColor ) {\n\n  float radius = 3.0;\n  float minDistance = 100000.0;\n\n  vec2 lastPosition = vec2( 0.0 );\n\n\n  int bodyPathLength =  ( bodyIndex == 0 ) ? uPathLength.x :\n                        ( bodyIndex == 1 ) ? uPathLength.y :\n                        ( bodyIndex == 2 ) ? uPathLength.z :\n                        ( bodyIndex == 3 ) ? uPathLength.w : 0;\n\n  float inversePathLength = 1.0 / float( bodyPathLength + 1 );\n\n  for ( int vertexIndex = 0; vertexIndex < maxPathLength; vertexIndex++ ) {\n    if ( vertexIndex >= bodyPathLength ) {\n      break;\n    }\n    vec2 position = fetch( bodyIndex * uMaxPathLength + vertexIndex ).xy;\n\n    if ( vertexIndex > 0 ) {\n      float dist = sdSegment( modelPosition, lastPosition, position );\n\n      minDistance = min( minDistance, dist + ( 1.0 - float( vertexIndex ) * inversePathLength ) * radius );\n    }\n\n    lastPosition = position;\n  }\n  return vec4( planetColor, smoothstep( radius, radius - 2.0, minDistance ) );\n}\n\n// Returns the color from the vertex shader\nvoid main( void ) {\n  vec2 modelPosition = globalToModel( vPosition );\n  vec4 color = uBackgroundColor;\n\n  for ( int bodyIndex = 0 ; bodyIndex < 4 ; bodyIndex++ ) {\n    if ( bodyIndex < uActiveBodies ){\n      vec4 stroke = getStroke( modelPosition, bodyIndex, uColorMatrix[ bodyIndex ].xyz );\n\n      color.rgb = stroke.a * stroke.rgb + color.a * color.rgb * ( 1.0 - stroke.a );\n      color.a = stroke.a + color.a * ( 1.0 - stroke.a );\n    }\n  }\n  gl_FragColor = color;\n}"