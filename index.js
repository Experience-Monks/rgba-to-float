var pack = require('int-bits').pack

module.exports = function rgbaToFloat(r, g, b, a) {
    var bits = (a << 24 | b << 16 | g << 8 | r)
    return pack(bits & 0xfeffffff)
}