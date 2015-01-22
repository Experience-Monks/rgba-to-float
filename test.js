var pack = require('./')
var unpack = require('int-bits').unpack
var test = require('tape')

test('packs a RGBA color into a single float', function(t) {
    var RGBA = [0xaa, 0xff, 0x00, 0xff]

    var color = pack(RGBA[0], RGBA[1], RGBA[2], RGBA[3])
    t.equal(typeof color, 'number', 'returns number')
    
    t.equal(pack(0,0,0,0), 0)
    t.equal(unpack(pack(0xff,0xff,0xff,0xff)), 0xffffffff & 0xfeffffff)

    var bits = unpack(color)
    var A = (bits & 0xff000000) >>> 24
    var B = (bits & 0x00ff0000) >>> 16
    var G = (bits & 0x0000ff00) >>> 8
    var R = (bits & 0x000000ff)
    //fix precision loss with high bits
    A = Math.floor(A*(255/254))
    
    t.deepEqual([R,G,B,A], RGBA, 'packs RGBA as ABGR float')
    t.end()
})