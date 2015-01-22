# rgba-to-float

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Packs a RGBA color into an ABGR-encoded float. This is useful in WebGL to interleave color data into a Float32Array, but only using a single float for RGBA.

```js
var pack = require('rgba-to-float')

//packs RGBA into a float,
var color = pack(0, 255, 128, 127)
```

This will only work in browsers that implement typed arrays correctly. 

## precision

This masks high bits to avoid NaN values, and has a slight amount of precision loss. In the vertex shader you may want to bias it so that `0.0` and `1.0` alpha produces expected results. 

```glsl
attribute vec4 color;
varying vec4 v_color;

void main() {
    v_color = color;
    v_color.a = color.a * (255.0/254.0);
    //...
}
```

## Usage

[![NPM](https://nodei.co/npm/rgba-to-float.png)](https://www.npmjs.com/package/rgba-to-float)

#### `color = pack(r, g, b, a)`

Packs the red, green, blue and alpha channels (0 - 255) into a single float, encoded as ABGR. 

## License

MIT, see [LICENSE.md](http://github.com/Jam3/rgba-to-float/blob/master/LICENSE.md) for details.
