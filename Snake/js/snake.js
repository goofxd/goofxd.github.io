var Collections, Helper, Particles, UI, Utils, Sponsor, App, Log, Snake, __extends = this && this.__extends || function() {
        var n = function(t, e) {
            return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array ? function(t, e) {
                    t.__proto__ = e
                } : function(t, e) {
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                }))(t, e)
        };
        return function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function i() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }
    }(),
    __awaiter = this && this.__awaiter || function(t, r, a, h) {
        return new(a = a || Promise)(function(i, e) {
            function n(t) {
                try {
                    s(h.next(t))
                } catch (t) {
                    e(t)
                }
            }

            function o(t) {
                try {
                    s(h.throw(t))
                } catch (t) {
                    e(t)
                }
            }

            function s(t) {
                var e;
                t.done ? i(t.value) : ((e = t.value) instanceof a ? e : new a(function(t) {
                    t(e)
                })).then(n, o)
            }
            s((h = h.apply(t, r || [])).next())
        })
    },
    __generator = this && this.__generator || function(n, o) {
        var s, r, a, h = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            },
            c = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
        return "function" == typeof Symbol && (c[Symbol.iterator] = function() {
            return this
        }), c;

        function t(i) {
            return function(t) {
                var e = [i, t];
                if (s) throw new TypeError("Generator is already executing.");
                for (; h = c && e[c = 0] ? 0 : h;) try {
                    if (s = 1, r && (a = 2 & e[0] ? r.return : e[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, e[1])).done) return a;
                    switch (r = 0, (e = a ? [2 & e[0], a.value] : e)[0]) {
                        case 0:
                        case 1:
                            a = e;
                            break;
                        case 4:
                            return h.label++, {
                                value: e[1],
                                done: !1
                            };
                        case 5:
                            h.label++, r = e[1], e = [0];
                            continue;
                        case 7:
                            e = h.ops.pop(), h.trys.pop();
                            continue;
                        default:
                            if (!(a = 0 < (a = h.trys).length && a[a.length - 1]) && (6 === e[0] || 2 === e[0])) {
                                h = 0;
                                continue
                            }
                            if (3 === e[0] && (!a || e[1] > a[0] && e[1] < a[3])) h.label = e[1];
                            else if (6 === e[0] && h.label < a[1]) h.label = a[1], a = e;
                            else {
                                if (!(a && h.label < a[2])) {
                                    a[2] && h.ops.pop(), h.trys.pop();
                                    continue
                                }
                                h.label = a[2], h.ops.push(e)
                            }
                    }
                    e = o.call(n, h)
                } catch (t) {
                    e = [6, t], r = 0
                } finally {
                    s = a = 0
                }
                if (5 & e[0]) throw e[1];
                return {
                    value: e[0] ? e[1] : void 0,
                    done: !0
                }
            }
        }
    };

function launch() {
    var t = App.sponsor,
        e = App.getSponsorFeatures(t);
    t === Sponsor.eSponsorID.NONE ? new Sponsor.SponsorNone(e) : t === Sponsor.eSponsorID.COOLMATHGAMES && new Sponsor.SponsorCoolmathGames(e), Utils.StorageUtils.load(App.Config.saveKey).then(function(t) {
        null != t && void 0 !== t.id && "snake" === t.id && (App.settings = t), createAndStartGame()
    }).catch(function(t) {})
}

function createAndStartGame() {
    var t = new Snake.Game;
    App.game = t, Sponsor.api().game = t
}! function(t) {
    function e(t, e, i) {
        void 0 === i && (i = null), this.name = "<no name>", this.debug = 0, this._newFunction = null, this._count = 0, this._pool = [], this._canGrow = !1, this._poolSize = 0, this._classType = t, this._newFunction = i;
        for (var n = 0; n < e; n++) {
            var o = this.newItem();
            this._pool[this._count++] = o
        }
        this._poolSize = e
    }
    e.prototype.spawn = function() {
        return 0 === this._count ? (this.debug, this._canGrow ? this.newItem() : null) : (this.debug, this._pool[--this._count])
    }, e.prototype.despawn = function(t) {
        this.debug, this._pool[this._count++] = t
    }, Object.defineProperty(e.prototype, "newFunction", {
        set: function(t) {
            this._newFunction = t
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.newItem = function() {
        return null !== this._newFunction ? this._newFunction() : new this._classType
    }, Object.defineProperty(e.prototype, "canGrow", {
        set: function(t) {
            this._canGrow = t
        },
        enumerable: !1,
        configurable: !0
    }), e.DEBUG_ALLOCATION = 1, e.DEBUG_CREATE = 2, e.DEBUG_DESTROY = 4, e.DEBUG_ALL = 7, t.Pool = e
}(Collections = Collections || {}),
function(t) {
    function a() {}
    a.randomizeArray = function(t, e, i, n) {
        void 0 === n && (n = !1);
        i = (i = void 0 === i ? !1 : i) ? e.slice() : e;
        return Phaser.ArrayUtils.shuffle(i), n ? i.slice(0, t) : i
    }, a.sort = function(t, e, i, n) {
        if ((i = void 0 === i ? 0 : i) < (n = void 0 === n ? t.length : n)) {
            for (var o, s = i, r = i + 1; r <= n; r++) 0 < e(t[i], t[r]) && (o = t[++s], t[s] = t[r], t[r] = o);
            o = t[i], t[i] = t[s], t[s] = o, a.sort(t, e, i, s - 1), a.sort(t, e, s + 1, n)
        }
    }, t.ArrayUtils = a
}(Helper = Helper || {}),
function(t) {
    function l() {}
    l.addSpriteIntoFont = function(t, e, i, n, o, s, r, a) {
        void 0 === r && (r = l.ALIGN_CENTER), void 0 === a && (a = .5), "string" == typeof(s = void 0 === s ? "0" : s) && (s = s.charCodeAt(0));
        var e = t.cache.getBitmapFont(e),
            h = e.font.chars,
            c = h[s];
        if (null == c) throw new Error("Reference character ".concat(String.fromCharCode(s), " with code ").concat(s, " is mssing in font. Try another."));
        s = null, t = (s = "string" == typeof n ? t.cache.getFrameByName(i, n) : t.cache.getFrameByIndex(i, n)).sourceSizeW, i = s.sourceSizeH, n = c.yOffset + (r === l.ALIGN_CENTER ? c.height / 2 : r === l.ALIGN_BOTTOM ? c.height : 0), r = Math.round(n - i * a);
        h[o] = {
            x: s.x,
            y: s.y,
            width: s.width,
            height: s.height,
            xOffset: 0,
            yOffset: r,
            xAdvance: t + 2,
            kerning: [],
            texture: new PIXI.Texture(e.base, new PIXI.Rectangle(s.x, s.y, s.width, s.height))
        }
    }, l.ALIGN_TOP = 0, l.ALIGN_CENTER = 1, l.ALIGN_BOTTOM = 2, t.FontUtils = l
}(Helper = Helper || {}),
function(t) {
    function e(t) {
        return -2 * t * t + 3 * t
    }(t = t.Easing || (t.Easing = {})).wiggle = function(t, e, i) {
        return e = t * Math.PI * 2 * e, t *= 2 * Math.PI * i + Math.PI / 2, Math.sin(e) * Math.cos(t)
    }, t.sinWithExpDecay = function(t, e, i) {
        return e = t * Math.PI * 2 * e, t = -t * i, Math.sin(e) * Math.exp(t)
    }, t.pop5 = e, t.pop5rev = function(t) {
        return -(e(1 - t) - 1)
    }, t.sin = function(t) {
        return Math.sin(2 * t * Math.PI)
    }, t.halfSin = function(t) {
        return Math.sin(t * Math.PI)
    }, t.sinWithPeriod = function(t, e) {
        return Math.sin(2 * t * Math.PI * e)
    }
}(Helper = Helper || {}),
function(t) {
    function e() {}
    e.angleLinear = function(t, e, i) {
        return t < e ? 180 < e - t && (e -= 360) : 180 < t - e && (t -= 360), t + (e - t) * i
    }, t.MathHelp = e
}(Helper = Helper || {}),
function(t) {
    function _() {}
    _.create = function(t, e, i, n, o, s, r, a, h, c, l, u) {
        void 0 === s && (s = 0), void 0 === r && (r = 0), void 0 === a && (a = 0), void 0 === h && (h = 0), void 0 === c && (c = !1), void 0 === l && (l = !1), void 0 === u && (u = !1);
        var p = new Phaser.Image(t, 0, 0, n, o),
            n = "string" == typeof o ? t.cache.getFrameByName(n, o) : t.cache.getFrameByIndex(n, o);
        return _._scaleCenterX = l, _._scaleCenterY = u, _.calculateNineImage(n, e, i, s, r, a, h, c), _._nineImage = new Phaser.BitmapData(t, "NineImage" + _._textureKey++, _._width, _._height), _.renderNineImage(p), _._nineImage
    }, _.calculateNineImage = function(t, e, i, n, o, s, r, a) {
        _._centralWidth = t.width - o - r, _._centralHeight = t.height - n - s, a ? (_._horizontalRepeats = e, _._verticalRepeats = i, _._width = o + r + _._centralWidth * e, _._height = n + s + _._centralHeight * i, _._lastWidth = 0, _._lastHeight = 0) : (t = e - o - r, _._horizontalRepeats = Math.floor(t / _._centralWidth), _._lastWidth = t % _._centralWidth, a = i - n - s, _._verticalRepeats = Math.floor(a / _._centralHeight), _._lastHeight = a % _._centralHeight, _._width = e, _._height = i), _._leftWidth = o, _._rightWidth = r, _._topHeight = n, _._bottomHeight = s
    }, _.renderNineImage = function(t) {
        var e = 0,
            i = 0;
        if (0 < _._topHeight && (_.renderNineImageRow(t, e, i, _._topHeight), e += _._topHeight, i += _._topHeight), _._scaleCenterY) {
            var n = _._verticalRepeats * _._centralHeight + _._lastHeight;
            _.renderNineImageRow(t, e, i, _._centralHeight, n), i += n
        } else {
            for (var o = 0; o < _._verticalRepeats; o++) _.renderNineImageRow(t, e, i, _._centralHeight), i += _._centralHeight;
            0 < _._lastHeight && (_.renderNineImageRow(t, e, i, _._lastHeight), i += _._lastHeight)
        }
        e += _._centralHeight, 0 < _._bottomHeight && _.renderNineImageRow(t, e, i, _._bottomHeight)
    }, _.renderNineImageRow = function(t, e, i, n, o) {
        var s = 0,
            r = 0;
        if (o = o || n, 0 < _._leftWidth && (_._nineImage.copy(t, s, e, _._leftWidth, n, r, i, _._leftWidth, o), r += _._leftWidth, s += _._leftWidth), _._scaleCenterX) {
            var a = _._horizontalRepeats * _._centralWidth + _._lastWidth;
            _._nineImage.copy(t, s, e, _._centralWidth, n, r, i, a, o), r += a
        } else {
            for (var h = 0; h < _._horizontalRepeats; h++) _._nineImage.copy(t, s, e, _._centralWidth, n, r, i, _._centralWidth, o), r += _._centralWidth;
            0 < _._lastWidth && (_._nineImage.copy(t, s, e, _._lastWidth, n, r, i, _._lastWidth, o), r += _._lastWidth)
        }
        s += _._centralWidth, 0 < _._rightWidth && _._nineImage.copy(t, s, e, _._rightWidth, n, r, i, _._rightWidth, o)
    }, _._textureKey = 0, t.NineImage = _
}(Helper = Helper || {}),
function(t) {
    var e = function(t, e, i) {
            this.dot2 = function(t, e) {
                return this.x * t + this.y * e
            }, this.dot3 = function(t, e, i) {
                return this.x * t + this.y * e + this.z * i
            }, this.x = t, this.y = e, this.z = i
        },
        e = (b.seed = function(t) {
            0 < t && t < 1 && (t *= 65536), (t = Math.floor(t)) < 256 && (t |= t << 8);
            for (var e = 0; e < 256; e++) {
                var i = 1 & e ? b.p[e] ^ 255 & t : b.p[e] ^ t >> 8 & 255;
                b.perm[e] = b.perm[e + 256] = i, b.gradP[e] = b.gradP[e + 256] = b.grad3[i % 12]
            }
        }, b.simplex2 = function(t, e) {
            var i = (t + e) * b.F2,
                n = Math.floor(t + i),
                i = Math.floor(e + i),
                o = (n + i) * b.G2,
                t = t - n + o,
                e = e - i + o,
                o = e < t ? (l = 1, 0) : (l = 0, 1),
                s = t - l + b.G2,
                r = e - o + b.G2,
                a = t - 1 + 2 * b.G2,
                h = e - 1 + 2 * b.G2,
                c = b.gradP[(n &= 255) + b.perm[i &= 255]],
                l = b.gradP[n + l + b.perm[i + o]],
                o = b.gradP[1 + n + b.perm[1 + i]],
                n = .5 - t * t - e * e,
                i = n < 0 ? 0 : (n *= n) * n * c.dot2(t, e),
                n = .5 - s * s - r * r,
                c = n < 0 ? 0 : (n *= n) * n * l.dot2(s, r),
                t = .5 - a * a - h * h,
                e = t < 0 ? 0 : (t *= t) * t * o.dot2(a, h);
            return 70 * (i + c + e)
        }, b.simplex3 = function(t, e, i) {
            var n = (t + e + i) * b.F3,
                o = Math.floor(t + n),
                s = Math.floor(e + n),
                n = Math.floor(i + n),
                r = (o + s + n) * b.G3,
                t = t - o + r,
                e = e - s + r,
                i = i - n + r,
                r = e <= t ? i <= e ? (P = S = m = 1, v = y = 0) : S = i <= t ? (P = v = y = 0, m = 1) : (P = y = m = 0, v = 1) : e < i ? (S = y = m = 0, P = v = 1) : t < i ? (S = v = m = 0, P = y = 1) : (P = S = y = 1, v = m = 0),
                a = t - m + b.G3,
                h = e - y + b.G3,
                c = i - v + b.G3,
                l = t - S + 2 * b.G3,
                u = e - P + 2 * b.G3,
                p = i - r + 2 * b.G3,
                _ = t - 1 + 3 * b.G3,
                d = e - 1 + 3 * b.G3,
                f = i - 1 + 3 * b.G3,
                g = b.gradP[(o &= 255) + b.perm[(s &= 255) + b.perm[n &= 255]]],
                m = b.gradP[o + m + b.perm[s + y + b.perm[n + v]]],
                y = b.gradP[o + S + b.perm[s + P + b.perm[n + r]]],
                v = b.gradP[1 + o + b.perm[1 + s + b.perm[1 + n]]],
                S = .6 - t * t - e * e - i * i,
                P = S < 0 ? 0 : (S *= S) * S * g.dot3(t, e, i),
                r = .6 - a * a - h * h - c * c,
                o = r < 0 ? 0 : (r *= r) * r * m.dot3(a, h, c),
                s = .6 - l * l - u * u - p * p,
                n = s < 0 ? 0 : (s *= s) * s * y.dot3(l, u, p),
                S = .6 - _ * _ - d * d - f * f,
                g = S < 0 ? 0 : (S *= S) * S * v.dot3(_, d, f);
            return 32 * (P + o + n + g)
        }, b.fade = function(t) {
            return t * t * t * (t * (6 * t - 15) + 10)
        }, b.lerp = function(t, e, i) {
            return (1 - i) * t + i * e
        }, b.perlin2 = function(t, e) {
            var i = Math.floor(t),
                n = Math.floor(e),
                o = (t -= i, e -= n, b.gradP[(i &= 255) + b.perm[n &= 255]].dot2(t, e)),
                s = b.gradP[i + b.perm[1 + n]].dot2(t, e - 1),
                r = b.gradP[1 + i + b.perm[n]].dot2(t - 1, e),
                i = b.gradP[1 + i + b.perm[1 + n]].dot2(t - 1, e - 1),
                n = b.fade(t);
            return b.lerp(b.lerp(o, r, n), b.lerp(s, i, n), b.fade(e))
        }, b.perlin3 = function(t, e, i) {
            var n = Math.floor(t),
                o = Math.floor(e),
                s = Math.floor(i),
                r = (t -= n, e -= o, i -= s, b.gradP[(n &= 255) + b.perm[(o &= 255) + b.perm[s &= 255]]].dot3(t, e, i)),
                a = b.gradP[n + b.perm[o + b.perm[1 + s]]].dot3(t, e, i - 1),
                h = b.gradP[n + b.perm[1 + o + b.perm[s]]].dot3(t, e - 1, i),
                c = b.gradP[n + b.perm[1 + o + b.perm[1 + s]]].dot3(t, e - 1, i - 1),
                l = b.gradP[1 + n + b.perm[o + b.perm[s]]].dot3(t - 1, e, i),
                u = b.gradP[1 + n + b.perm[o + b.perm[1 + s]]].dot3(t - 1, e, i - 1),
                p = b.gradP[1 + n + b.perm[1 + o + b.perm[s]]].dot3(t - 1, e - 1, i),
                n = b.gradP[1 + n + b.perm[1 + o + b.perm[1 + s]]].dot3(t - 1, e - 1, i - 1),
                o = b.fade(t),
                s = b.fade(e),
                t = b.fade(i);
            return b.lerp(b.lerp(b.lerp(r, l, o), b.lerp(a, u, o), t), b.lerp(b.lerp(h, p, o), b.lerp(c, n, o), t), s)
        }, b.grad3 = [new e(1, 1, 0), new e(-1, 1, 0), new e(1, -1, 0), new e(-1, -1, 0), new e(1, 0, 1), new e(-1, 0, 1), new e(1, 0, -1), new e(-1, 0, -1), new e(0, 1, 1), new e(0, -1, 1), new e(0, 1, -1), new e(0, -1, -1)], b.p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180], b.perm = new Array(512), b.gradP = new Array(512), b.F2 = .5 * (Math.sqrt(3) - 1), b.G2 = (3 - Math.sqrt(3)) / 6, b.F3 = 1 / 3, b.G3 = 1 / 6, b);

    function b() {}(t.Perlin = e).seed(0)
}(Helper = Helper || {}),
function(t) {
    function e(t, e) {
        this._rnd = t, this.reset(e)
    }
    e.prototype.reset = function(t) {
        --t;
        var e = Math.ceil(t / 2);
        this._lbound = -e, this._ubound = t - e, this._currentBalance = 0 === t ? this._rnd.integerInRange(-1, 0) : 0
    }, e.prototype.getBoolean = function() {
        var t = this._currentBalance + this._rnd.integerInRange(this._lbound, this._ubound);
        return this._currentBalance += 0 <= t ? -1 : 1, 0 <= t
    }, t.RandomBooleanBalancer = e
}(Helper = Helper || {}),
function(t) {
    (e = I = I || {})[e.UNDEFINED = -1] = "UNDEFINED", e[e.SPACE = 1] = "SPACE", e[e.NEWLINE = 2] = "NEWLINE", e[e.CHARACTER = 3] = "CHARACTER", M.hasNext = function() {
        return M.textPosition < M.text.length
    }, M.getChar = function() {
        return M.text.charAt(M.textPosition++)
    }, M.peekChar = function() {
        return M.text.charAt(M.textPosition)
    }, M.getPosition = function() {
        return M.textPosition
    }, M.setPosition = function(t) {
        M.textPosition = t
    }, M.getCharAdvance = function(t, e) {
        var i, t = M.fontData.chars[t];
        return t ? (i = t.xAdvance, 0 < e && t.kerning[e] && (i += t.kerning[e]), i) : 0
    }, M.getCharType = function(t) {
        return " " === t ? I.SPACE : /(?:\r\n|\r|\n)/.test(t) ? I.NEWLINE : I.CHARACTER
    }, M.wrapText = function(t, e, i, n, o, s, r) {
        void 0 === r && (r = !1), M.text = e, M.setPosition(0), M.fontData = t.cache.getBitmapFont(o).font;
        for (var e = (s = void 0 === s ? M.fontData.size : s) / M.fontData.size, a = M.fontData.lineHeight * e, h = i / e, c = [], l = [], u = [], p = 0, _ = 0, d = 0, f = (c[p] = d, u[_++] = 0, n); M.hasNext();) {
            for (var g = 0, m = 0, y = -1, v = I.UNDEFINED, S = I.UNDEFINED, P = h, b = -1; M.hasNext();) {
                var d = M.getPosition(),
                    O = M.getChar(),
                    v = M.getCharType(O),
                    O = O.charCodeAt(0);
                if (v === I.SPACE) S !== I.SPACE && (m = g), ++g, P -= M.getCharAdvance(O, b);
                else if (v === I.CHARACTER) {
                    if (S !== I.CHARACTER && (y = d), (P -= M.getCharAdvance(O, b)) < 0) {
                        r && (m = g + 1, d = y = M.getPosition(), P = -1, v = I.CHARACTER);
                        break
                    }++g
                } else if (v === I.NEWLINE) {
                    var A = !1;
                    if (M.hasNext() && (A = !0, m = g, d = y = M.getPosition(), P = -1, v = I.CHARACTER), A) break
                }
                S = v, b = O
            }(f -= a) < 0 && (u[_++] = p), P < 0 && v === I.CHARACTER ? (l[p] = 0 !== m ? m : g, f < 0 && (f = n - a), 0 !== m ? (c[++p] = y, M.setPosition(y)) : (c[++p] = d, M.setPosition(d))) : M.hasNext() || (v === I.CHARACTER ? l[p] = g : v === I.SPACE && (l[p] = m))
        }
        u[_] = p + 1;
        for (var T = [], E = 1; E <= _; E++) {
            for (var w = u[E], C = [], x = u[E - 1]; x < w; x++) C.push(M.text.substr(c[x], l[x]));
            T.push(C.join("\n"))
        }
        return T
    };
    var I, e = M;

    function M() {}
    t.TextWrapper = e
}(Helper = Helper || {}),
function(i) {
    function n(t, e) {
        this.maxVelocity = n.MAX_VELOCITY, this._delay = 0, this._velocity = new Phaser.Point(0, 0), this._angularVelocity = 0, this._friction = 0, this._angularDrag = 0, this._gravity = 0, this._alpha = 1, this._scaleChange = 0, this._alphaChange = 0, this._game = t
    }
    Object.defineProperty(n.prototype, "visual", {
        get: function() {
            return this._visual
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "on", {
        set: function(t) {
            this._on = t, this._visual.exists = t, this._visual.visible = t
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.remove = function() {
        var t = this._visual.parent;
        null !== t && (t instanceof Phaser.Group ? t.remove(this._visual) : t.removeChild(this._visual))
    }, n.prototype.bringToTop = function() {
        var t = this._visual.parent;
        t instanceof Phaser.Group && t.bringToTop(this._visual)
    }, n.prototype.sendToBack = function() {
        var t = this._visual.parent;
        t instanceof Phaser.Group && t.sendToBack(this._visual)
    }, Object.defineProperty(n.prototype, "textureKey", {
        set: function(t) {
            this._textureKey = t
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.setScaleChange = function(t, e) {
        void 0 === e && (e = 0), this._scaleChangeType = t, this._scaleChange = e
    }, Object.defineProperty(n.prototype, "delay", {
        set: function(t) {
            0 < (this._delay = t) && (this.on = !1)
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "alpha", {
        set: function(t) {
            this._alpha = t, this._visual.alpha = Phaser.Math.clamp(t, 0, 1)
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.setAlphaChange = function(t, e) {
        void 0 === e && (e = 0), this._alphaChangeType = t, this._alphaChange = e
    }, n.prototype.setPhysics = function(t, e, i, n, o, s) {
        void 0 === i && (i = 0), void 0 === n && (n = 0), void 0 === o && (o = 0), void 0 === s && (s = 0), this._velocity.setTo(t = void 0 === t ? 0 : t, e = void 0 === e ? 0 : e), this._angularVelocity = i, this._friction = n, this._angularDrag = o, this._gravity = s, this._simplePhysics = 0 === s && 0 === n && 0 === o
    }, Object.defineProperty(n.prototype, "velocity", {
        get: function() {
            return this._velocity
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.setFrame = function(t) {}, n.prototype.onEmit = function(t) {
        t.add(this._visual)
    }, n.prototype.onKill = function(t) {}, n.prototype.update = function(t, e) {
        void 0 === e && (e = !0);
        if (0 < this._delay) {
            if (0 < (this._delay -= t)) return !0;
            this.on = !0
        }
        return !(0 < this.lifetime && (this.lifetime -= t) <= 0 || (0 === this._velocity.x && 0 === this._velocity.y || (this._visual.x += this._velocity.x * t, this._visual.y += this._velocity.y * t), 0 !== this._angularVelocity && (this._visual.angle += this._angularVelocity * t), this._simplePhysics || (this._velocity.x += -this._friction * this._velocity.x * t, this._velocity.y += (this._gravity - this._friction * this._velocity.y) * t, this._angularVelocity += -this._angularDrag * this._angularVelocity * t), e && (this._scaleChangeType != i.eParameterChangeType.NO_CHANGE && this._scaleChangeType === i.eParameterChangeType.IN_TIME && ((this._visual.scale.x += this._scaleChange * t) < 0 && (this._visual.scale.x = 0, this._scaleChange < 0) && (this._scaleChangeType = i.eParameterChangeType.NO_CHANGE), (this._visual.scale.y += this._scaleChange * t) < 0) && (this._visual.scale.y = 0, this._scaleChange < 0) && (this._scaleChangeType = i.eParameterChangeType.NO_CHANGE), this._alphaChangeType != i.eParameterChangeType.NO_CHANGE) && this._alphaChangeType === i.eParameterChangeType.IN_TIME && (this._alpha += this._alphaChange * t, this._alpha < 0 ? (this._visual.alpha = 0, this._alphaChange < 0 && (this._alphaChangeType = i.eParameterChangeType.NO_CHANGE)) : 1 < this._alpha ? (this._visual.alpha = 1, 0 < this._alphaChange && (this._alphaChangeType = i.eParameterChangeType.NO_CHANGE)) : this._visual.alpha = this._alpha), 0))
    }, n.MAX_VELOCITY = 1e3, i.Particle = n
}(Particles = Particles || {}),
function(t) {
    e = t.Particle, __extends(n, e), n.prototype.setFrame = function(t) {
        var e = this._visual;
        "string" == typeof t ? e.frameName = t : e.frame = t
    }, n.prototype.onCreate = function(t) {
        var e = new Phaser.Sprite(this._game, 0, 0, this._textureKey);
        e.anchor.setTo(.5, .5), this._visual = e
    };
    var e, i = n;

    function n() {
        return null !== e && e.apply(this, arguments) || this
    }
    t.SpriteParticle = i
}(Particles = Particles || {}),
function(t) {
    s = t.SpriteParticle, __extends(i, s), i.prototype.onCreate = function(t) {
        s.prototype.onCreate.call(this, t);
        for (var e = this._visual, i = 0; i < this._anims.length; i++) {
            var n = this._anims[i],
                o = e.animations.add(n.name, n.frames, n.frameRate, n.loop);
            !n.loop && n.killOnComplete && (o.killOnComplete = !0)
        }
    }, i.prototype.update = function(t, e) {
        var i = this._delay,
            t = s.prototype.update.call(this, t, e = void 0 === e ? !0 : e);
        return 0 < i && this._delay <= 0 && this._visual.animations.currentAnim.play(), t
    }, i.prototype.setFrame = function(t) {
        this.setAnim(t)
    }, i.prototype.setAnim = function(t) {
        var e = this._visual;
        e.animations.stop(null, !0), this._delay <= 0 ? e.animations.play(t) : (e.animations.currentAnim = e.animations.getAnimation(t), e.frame = e.animations.currentAnim._frames[0])
    }, i.prototype.setRandomAnim = function() {
        this._visual;
        var t = this._anims[this._game.rnd.integerInRange(0, this._anims.length - 1)].name;
        this.setAnim(t)
    };
    var s, e = i;

    function i(t, e) {
        t = s.call(this, t, e) || this;
        return void 0 !== e && null === e || (t._anims = e[0]), t
    }
    t.AnimatedParticle = e
}(Particles = Particles || {}),
function(n) {
    function s(t) {
        this.area = new Phaser.Point(0, 0), this.gravity = 0, this.minLifetime = 1, this.maxLifetime = 1, this.delay = 0, this.minScale = 1, this.maxScale = 1, this.scaleChange = 0, this.scaleChangeType = n.eParameterChangeType.NO_CHANGE, this.minAngle = 0, this.maxAngle = 0, this.minSpeedX = 0, this.maxSpeedX = 0, this.minSpeedY = 0, this.maxSpeedY = 0, this.friction = 0, this.minAngularSpeed = 0, this.maxAngularSpeed = 0, this.angularDrag = 0, this.minAlpha = 1, this.maxAlpha = 1, this.alphaChange = 0, this.alphaChangeType = n.eParameterChangeType.NO_CHANGE, this.frames = null, this._minAdvScale = new Phaser.Point(1, 1), this._maxAdvScale = new Phaser.Point(1, 1), this._game = t
    }
    s.readParams = function(t, e) {
        var i, n = {};
        for (i in e) {
            var o = new s(t);
            s.doReadParams(o, e, i), n[i] = o
        }
        return n
    }, s.doReadParams = function(t, e, i) {
        var n, o = e[i];
        for (n in void 0 !== o.parent && null !== o.parent && (i = o.parent, s.doReadParams(t, e, i)), o) "parent" !== n && (t[n], t[n] = o[n])
    }, s.prototype.clear = function() {
        this.gravity = 0, this.setXSpeed(0, 0), this.setYSpeed(0, 0), this.setAngularSpeed(0)
    }, s.prototype.randomFrame = function() {
        var t = null;
        return t = null !== this.frames ? Array.isArray(this.frames) ? (this.frames[0], this._game.rnd.pick(this.frames)) : this.frames : t
    }, s.prototype.setXSpeed = function(t, e) {
        e = e || 0, this.minSpeedX = t = t || 0, this.maxSpeedX = e
    }, s.prototype.setYSpeed = function(t, e) {
        e = e || 0, this.minSpeedY = t = t || 0, this.maxSpeedY = e
    }, s.prototype.setAngularSpeed = function(t, e) {
        e = e || 0, this.minAngularSpeed = t = t || 0, this.maxAngularSpeed = e
    }, s.prototype.setAlpha = function(t, e) {
        void 0 === e && (e = 1), this.minAlpha = t = void 0 === t ? 1 : t, this.maxAlpha = e
    }, s.prototype.setAlphaChange = function(t, e, i) {
        switch (void 0 === e && (e = 0), void 0 === i && (i = 0), this.alphaChangeType = t) {
            case n.eParameterChangeType.NO_CHANGE:
                this.alphaChange = 0;
                break;
            case n.eParameterChangeType.IN_TIME:
                this.alphaChange = e / (i = 0 === i ? 1 : i)
        }
    }, s.prototype.setScale = function(t, e) {
        e = e || 0, this.minScale = t = t || 0, this.maxScale = e
    }, Object.defineProperty(s.prototype, "advScaleMin", {
        get: function() {
            return this._minAdvScale
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(s.prototype, "advScaleMax", {
        get: function() {
            return this._maxAdvScale
        },
        enumerable: !1,
        configurable: !0
    }), s.prototype.setAdvScale = function(t, e, i, n) {
        void 0 === e && (e = 1), void 0 === n && (n = 1), this._minAdvScale.setTo(t = void 0 === t ? 1 : t, i = void 0 === i ? 1 : i), this._maxAdvScale.setTo(e, n)
    }, s.prototype.setScaleChange = function(t, e, i) {
        switch (void 0 === e && (e = 0), void 0 === i && (i = 0), this.scaleChangeType = t) {
            case n.eParameterChangeType.NO_CHANGE:
                this.scaleChange = 0;
                break;
            case n.eParameterChangeType.IN_TIME:
                this.scaleChange = e / (i = 0 === i ? 1 : i)
        }
    }, s.prototype.setAngle = function(t, e) {
        void 0 === e && (e = 0), this.minAngle = t = void 0 === t ? 0 : t, this.maxAngle = e
    }, n.ParticleParams = s
}(Particles = Particles || {}),
function(s) {
    (t = r = r || {})[t.NONE = 0] = "NONE", t[t.FLOW = 1] = "FLOW", t[t.EXPLODE = 2] = "EXPLODE", (t = n = s.eParameterChangeType || (s.eParameterChangeType = {}))[t.NO_CHANGE = 0] = "NO_CHANGE", t[t.IN_TIME = 1] = "IN_TIME", a = Phaser.Group, __extends(h, a), Object.defineProperty(h.prototype, "params", {
        get: function() {
            return this._params
        },
        set: function(t) {
            this._params = t
        },
        enumerable: !1,
        configurable: !0
    }), h.prototype.clear = function() {
        this._params.clear()
    }, h.prototype.update = function() {
        var t;
        if (this._on && this.game.time.time >= this._timer && (this._timer = this.game.time.time + this.frequency * this.game.time.slowMotion, this._mode === r.FLOW))
            if (-1 !== this._flowTotal && this._flowCounter >= this._flowTotal) this.stopFlow();
            else
                for (var e = Math.max(1, this._flowQuantity), i = 0; i < e && !(this.emitParticle(this.forceEmit) && (this._flowCounter++, -1 !== this._flowTotal) && this._flowCounter >= this._flowTotal); i++);
        for (var n = null != (t = this.game.time.physicsElapsed) ? t : this.game.time.delta / 1e3, i = this._counterUsed - 1; 0 <= i; i--) {
            var o = this._particlesUsed[i];
            o.update(n) || (o.on = !1, o.remove(), o.onKill(this), this._particlesUsed[i] = this._particlesUsed[--this._counterUsed], this._particlesPool[this._counterPool++] = o)
        }
    }, h.prototype.makeParticles = function(t, e, i, n) {
        (void 0 === i || i > this._maxParticles) && (i = this._maxParticles), void 0 !== e && (this._params.frames = e);
        for (var o = 0; o < i; o++) {
            var s = new this.particleClass(this.game, n);
            s.textureKey = t, s.onCreate(this), s.on = !1, this._particlesPool[this._counterPool++] = s
        }
    }, Object.defineProperty(h.prototype, "on", {
        set: function(t) {
            this._on = t, this.exists = t, this.visible = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(h.prototype, "countParticles", {
        get: function() {
            return this._counterUsed
        },
        enumerable: !1,
        configurable: !0
    }), h.prototype.explode = function(t, e, i) {
        this._mode = r.EXPLODE, this.on = !0, this.emitParticles(t, e, i)
    }, h.prototype.flow = function(t, e, i, n, o, s) {
        this._mode = r.FLOW, this.on = !0, void 0 === i && (i = -1), void 0 === n && (n = !0), (e = void 0 !== e && 0 !== e ? e : 1) > this._maxParticles && (e = this._maxParticles), this.frequency = t, this._flowCounter = 0, this._flowQuantity = e, this._flowTotal = i, n && (this.emitParticles(e, o, s), this._flowCounter += e, this._timer = this.game.time.time + t * this.game.time.slowMotion)
    }, h.prototype.stopFlow = function() {
        this._mode = r.NONE
    }, h.prototype.killAllParticles = function(t) {
        for (void 0 === t && (t = !0); 0 < this._counterUsed;) {
            var e = this._particlesUsed[--this._counterUsed];
            e.remove(), t || e.onKill(this), this._particlesPool[this._counterPool++] = e
        }
    }, h.prototype.emitParticles = function(t, e, i) {
        for (var n = 0; n < t; n++) {
            var o = this.emitParticle(this.forceEmit);
            if (null === o) break;
            null != e && e.call(i, o)
        }
    }, h.prototype.emitParticle = function(t, e) {
        if (void 0 === t && (t = !1), void 0 === e && (e = !1), 0 === this._counterPool) {
            if (!t) return null;
            t = this._particlesUsed[0];
            this._particlesUsed[0] = this._particlesUsed[--this._counterUsed], t.remove(), t.onKill(this), this._particlesPool[this._counterPool++] = t
        }
        var t = this._particlesPool[--this._counterPool],
            i = ((this._particlesUsed[this._counterUsed++] = t).on = !0, null !== this._alternativeParams ? this._alternativeParams : this._params);
        return this.randomEmitPoint(this._emitPoint, i), t.visual.position.set(this._emitPoint.x, this._emitPoint.y), t.visual.angle = 0, e ? (t.lifetime = -1, t.visual.scale.set(1, 1), t.setScaleChange(n.NO_CHANGE), t.visual.angle = 0, t.alpha = 1, t.setAlphaChange(n.NO_CHANGE), t.setPhysics()) : (t.lifetime = this.game.rnd.realInRange(i.minLifetime, i.maxLifetime), t.delay = i.delay, 1 !== i.minScale || 1 !== i.maxScale ? (e = this.game.rnd.realInRange(i.minScale, i.maxScale), t.visual.scale.set(e, e)) : i.advScaleMin.x !== i.advScaleMax.x || i.advScaleMin.y !== i.advScaleMax.y ? t.visual.scale.set(this.game.rnd.realInRange(i.advScaleMin.x, i.advScaleMax.x), this.game.rnd.realInRange(i.advScaleMin.y, i.advScaleMax.y)) : t.visual.scale.set(1, 1), t.setScaleChange(i.scaleChangeType, i.scaleChange), t.visual.angle = i.minAngle === i.maxAngle ? i.minAngle : this.game.rnd.realInRange(i.minAngle, i.maxAngle), t.alpha = this.game.rnd.realInRange(i.minAlpha, i.maxAlpha), t.setAlphaChange(i.alphaChangeType, i.alphaChange), t.setPhysics(this.game.rnd.realInRange(i.minSpeedX, i.maxSpeedX), this.game.rnd.realInRange(i.minSpeedY, i.maxSpeedY), this.game.rnd.realInRange(i.minAngularSpeed, i.maxAngularSpeed), i.friction, i.angularDrag, i.gravity), null !== i.frames && t.setFrame(i.randomFrame())), t.onEmit(this), this.particleBringToTop ? t.bringToTop() : this.particleSendToBack && t.sendToBack(), t
    }, h.prototype.destroy = function() {
        s.ParticlesManager.instance.remove(this), a.prototype.destroy.call(this, !0, !1)
    }, h.prototype.randomEmitPoint = function(t, e) {
        return e.area instanceof Phaser.Point ? t.setTo(0, 0) : e.area.random(t), t.x += this.emitPoint.x, t.y += this.emitPoint.y, null !== this.emitObject && (t.x += this.emitObject.x, t.y += this.emitObject.y), t
    }, Object.defineProperty(h.prototype, "area", {
        set: function(t) {
            this._params.area = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(h.prototype, "gravity", {
        set: function(t) {
            this._params.gravity = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(h.prototype, "friction", {
        set: function(t) {
            this._params.friction = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(h.prototype, "angularDrag", {
        set: function(t) {
            this._params.angularDrag = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(h.prototype, "minScale", {
        set: function(t) {
            this._params.minScale = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(h.prototype, "maxScale", {
        set: function(t) {
            this._params.maxScale = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(h.prototype, "minAngle", {
        set: function(t) {
            this._params.minAngle = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(h.prototype, "maxAngle", {
        set: function(t) {
            this._params.maxAngle = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(h.prototype, "lifetime", {
        set: function(t) {
            this._params.minLifetime = this._params.maxLifetime = t
        },
        enumerable: !1,
        configurable: !0
    }), h.prototype.setXSpeed = function(t, e) {
        this._params.setXSpeed(t, e)
    }, h.prototype.setYSpeed = function(t, e) {
        this._params.setYSpeed(t, e)
    }, h.prototype.setAngularSpeed = function(t, e) {
        this._params.setAngularSpeed(t, e)
    }, h.prototype.setAlpha = function(t, e) {
        this._params.setAlpha(t, e)
    }, h.prototype.setAlphaChange = function(t, e, i) {
        this._params.setAlphaChange(t, e = void 0 === e ? 0 : e, i = void 0 === i ? 0 : i)
    }, h.prototype.setScale = function(t, e) {
        this._params.setScale(t, e)
    }, h.prototype.setAdvScale = function(t, e, i, n) {
        this._params.setAdvScale(t, e, i, n)
    }, h.prototype.setScaleChange = function(t, e, i) {
        this._params.setScaleChange(t, e = void 0 === e ? 0 : e, i = void 0 === i ? 0 : i)
    }, h.prototype.setAngle = function(t, e) {
        this._params.setAngle(t, e)
    }, h.prototype.emitAt = function(t, e) {
        this.emitPoint.setTo(t, e)
    }, h.prototype.emitAtObject = function(t) {
        t.center ? this.emitPoint.setTo(t.center.x, t.center.y) : this.emitPoint.setTo(t.x, t.y)
    }, h.MAX_PARTICELES = 16;
    var r, n, a, t = h;

    function h(t, e, i, n) {
        var o = a.call(this, t, null) || this;
        return o._maxParticles = h.MAX_PARTICELES, o.emitPoint = new Phaser.Point(0, 0), o.emitObject = null, o.particleClass = s.SpriteParticle, o.particleBringToTop = !1, o.particleSendToBack = !1, o.frequency = 100, o.forceEmit = !1, o._alternativeParams = null, o._on = !1, o._mode = r.NONE, o._flowQuantity = 0, o._flowTotal = 0, o._flowCounter = 0, o._particlesPool = [], o._counterPool = 0, o._particlesUsed = [], o._counterUsed = 0, o._timer = 0, o._emitPoint = new Phaser.Point(0, 0), o._params = new s.ParticleParams(t), o.position.setTo(e, i), o._maxParticles = n, o
    }
    s.ParticlesEmitter = t
}(Particles = Particles || {}),
function(t) {
    function e(t, e, i, n) {
        void 0 === i && (i = null), void 0 === n && (n = null), this._emitter = null, this._game = t, this._emitter = e, this._animEmitter = i, this._params = n
    }
    e.prototype.emit = function(t, e, i, n, o) {
        for (this._emitter.emitAt(t, e), null !== this._animEmitter && this._animEmitter.emitAt(t, e); null !== i;) {
            var s, r = i.animated ? this._animEmitter : this._emitter;
            null === this._params && i.paramsName, null !== this._params && void 0 !== (s = this._params[i.paramsName]) && (r.params = s), r.explode(this._game.rnd.integerInRange(i.countMin, i.countMax), n, o), i = i.next
        }
    }, t.ParticleChain = e
}(Particles = Particles || {}),
function(t) {
    function e() {
        this._emitters = [], this._emittersCount = 0
    }
    Object.defineProperty(e, "instance", {
        get: function() {
            return e._instance = null === e._instance ? new e : e._instance
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.add = function(t) {
        this._emitters[this._emittersCount++] = t
    }, e.prototype.remove = function(t) {
        for (var e = this._emittersCount - 1; 0 <= e && this._emitters[e] !== t; e--); - 1 !== e && (this._emitters[e] = this._emitters[--this._emittersCount])
    }, e.prototype.update = function() {
        for (var t = 0; t < this._emittersCount; t++) {
            var e = this._emitters[t];
            e.exists && e.update()
        }
    }, e._instance = null, t.ParticlesManager = e
}(Particles = Particles || {}),
function(t) {
    c = Phaser.Group, __extends(i, c), Object.defineProperty(i.prototype, "button", {
        get: function() {
            return this._button
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(i.prototype, "anchor", {
        get: function() {
            return this._button.anchor
        },
        enumerable: !1,
        configurable: !0
    }), i.prototype.setEnabled = function(t) {
        this._button.inputEnabled = t
    }, i.prototype.setHitArea = function(t) {
        this._button.hitArea = t
    }, i.prototype.setTint = function(t, e) {
        void 0 === e && (e = 0), this._downTint = t, this._overTint = e
    }, i.prototype.overEvent = function(t, e) {
        this.setButton(!0, this._down), this.overAction()
    }, i.prototype.outEvent = function(t, e) {
        this.setButton(!1, !1), this.outAction()
    }, i.prototype.downEvent = function(t, e) {
        this.setButton(this._over, !0), this.downAction(), this.onDown.dispatch(this)
    }, i.prototype.upEvent = function(t, e, i) {
        this.setButton(this._over, !1), this.upAction(), i && this.onClick.dispatch(this)
    }, i.prototype.setButton = function(t, e) {
        if (this._over || this._down || (this._saveScale.copyFrom(this._button.scale), this._savePosition.copyFrom(this._button.position)), this._down = e, this._over = t, e) {
            if (Phaser.Point.multiply(this._saveScale, this.scaleOnDown, this._button.scale), Phaser.Point.add(this._button.position, this.offsetOnDown, this._button.position), this._tinted) {
                this._button.tint = this._downTint;
                for (var i = 0; i < this._button.children.length; i++) this._button.getChildAt(i).tint = this._downTint
            }
        } else if (t) {
            if (Phaser.Point.multiply(this._saveScale, this.scaleOnOver, this._button.scale), Phaser.Point.add(this._button.position, this.offsetOnOver, this._button.position), this._tinted) {
                this._button.tint = this._overTint;
                for (i = 0; i < this._button.children.length; i++) this._button.getChildAt(i).tint = this._overTint
            }
        } else if (this._button.scale.copyFrom(this._saveScale), this._button.position.copyFrom(this._savePosition), this._tinted) {
            this._button.tint = 16777215;
            for (i = 0; i < this._button.children.length; i++) this._button.getChildAt(i).tint = 16777215
        }
    }, i.prototype.overAction = function() {}, i.prototype.outAction = function() {}, i.prototype.downAction = function() {
        Utils.AudioUtils.playSound("click")
    }, i.prototype.upAction = function() {}, i.prototype.reset = function() {
        for (var t = this._button.input._pointerData, e = 0; e < 10; e++) t[e] = {
            id: e,
            x: 0,
            y: 0,
            isDown: !1,
            isUp: !1,
            isOver: !1,
            isOut: !1,
            timeOver: 0,
            timeOut: 0,
            timeDown: 0,
            timeUp: 0,
            downDuration: 0,
            isDragged: !1
        };
        this.setButton(!1, !1)
    };
    var c, e = i;

    function i(t, e, i, n, o, s, r) {
        var a = c.call(this, t) || this,
            h = (a.onClick = new Phaser.Signal, a.onDown = new Phaser.Signal, a.scaleOnOver = new Phaser.Point(1, 1), a.scaleOnDown = new Phaser.Point(1, 1), a.offsetOnOver = new Phaser.Point(0, 0), a.offsetOnDown = new Phaser.Point(0, 0), a._tinted = !1, a._downTint = 8421504, a._overTint = 16777215, a._savePosition = new Phaser.Point, a._saveScale = new Phaser.Point, a._over = !1, a._down = !1, a.name = e, new Phaser.Button(t, 0, 0, i));
        return a.add(h), a._button = h, void 0 !== o && o && (a._tinted = !0), void 0 === s && (s = "string" == typeof n ? n + "Down" : null, a._tinted || s && !t.cache.getFrameByName(i, s)) && (s = null), void 0 === r && (r = "string" == typeof n ? n + "Over" : null, a._tinted || r && !t.cache.getFrameByName(i, r)) && (r = null), h.setFrames(r, n, s, n), h.anchor.setTo(.5, .5), h.name = e, h.onInputOver.add(a.overEvent, a), h.onInputOut.add(a.outEvent, a), h.onInputDown.add(a.downEvent, a), h.onInputUp.add(a.upEvent, a), a
    }
    t.Button = e
}(UI = UI || {}),
function(t) {
    h = t.Button, __extends(i, h), Object.defineProperty(i.prototype, "checked", {
        get: function() {
            return this._checked
        },
        set: function(t) {
            (this._checked = t) ? (this._checkSprite.frameName = this._frameChecked, this._checkSprite.visible = !0) : ((t = null !== this._frameUnchecked) && (this._checkSprite.frameName = this._frameUnchecked), this._checkSprite.visible = t)
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(i.prototype, "changeOnDown", {
        get: function() {
            return this._changeOnDown
        },
        set: function(t) {
            this._changeOnDown = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(i.prototype, "checkSprite", {
        get: function() {
            return this._checkSprite
        },
        enumerable: !1,
        configurable: !0
    }), i.prototype.setCheckPosition = function(t, e) {
        this._checkSprite.position.set(t, e)
    }, i.prototype.downEvent = function() {
        this.setButton(this._over, !0), this._changeOnDown && (this.checked = !this.checked), this.downAction(), this.onDown.dispatch(this, this._checked)
    }, i.prototype.upEvent = function(t, e, i) {
        this.setButton(this._over, !1), this.upAction(), i && (this._changeOnDown || (this.checked = !this.checked), this.onClick.dispatch(this, this._checked))
    };
    var h, e = i;

    function i(t, e, i, n, o, s, r, a) {
        e = h.call(this, t, e, i, n, s, r, a) || this, e._changeOnDown = !1, e._checkFramePosition = new Phaser.Point, e._checked = !1, n = o + "On", e.game.cache.getFrameByName(i, n), e._frameChecked = n, s = o + "Off", e.game.cache.getFrameByName(i, n) || (s = null), e._frameUnchecked = s, r = new Phaser.Sprite(t, 0, 0, i);
        return r.anchor.set(.5, .5), e.addChild(r), e._checkSprite = r, e.checked = !1, e
    }
    t.CheckBox = e
}(UI = UI || {}),
function(t) {
    r = t.Button, __extends(i, r), Object.defineProperty(i.prototype, "toggled", {
        get: function() {
            return this._toggled
        },
        set: function(t) {
            (this._toggled = t) ? (this._button.setFrames(null, this._frameToggled, this._frameToggled, this._frameToggled), this._changeOnDown && (this._button.frameName = this._frameToggled)) : (this._button.setFrames(null, this._frameUntoggled, this._frameUntoggled, this._frameUntoggled), this._changeOnDown && (this._button.frameName = this._frameUntoggled))
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(i.prototype, "changeOnDown", {
        get: function() {
            return this._changeOnDown
        },
        set: function(t) {
            this._changeOnDown = t
        },
        enumerable: !1,
        configurable: !0
    }), i.prototype.downEvent = function() {
        this.setButton(this._over, !0), this._changeOnDown && (this.toggled = !this.toggled), this.downAction(), this.onDown.dispatch(this, this._toggled)
    }, i.prototype.upEvent = function(t, e, i) {
        this.setButton(this._over, !1), this.upAction(), i && (this._changeOnDown || (this.toggled = !this.toggled), this.onClick.dispatch(this, this._toggled))
    };
    var r, e = i;

    function i(t, e, i, n, o, s) {
        t = r.call(this, t, e, i, n, s, o) || this;
        return t._toggled = !1, t._changeOnDown = !0, t._frameToggled = o, t._frameUntoggled = n, t.toggled = t._toggled, t
    }
    t.Toggle = e
}(UI = UI || {}),
function(t) {
    (e = t.eGroupPlacement || (t.eGroupPlacement = {}))[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP = 1] = "TOP", e[e.TOP_RIGHT = 2] = "TOP_RIGHT", e[e.LEFT = 3] = "LEFT", e[e.CENTER = 4] = "CENTER", e[e.RIGHT = 5] = "RIGHT", e[e.BOTTOM_LEFT = 6] = "BOTTOM_LEFT", e[e.BOTTOM = 7] = "BOTTOM", e[e.BOTTOM_RIGHT = 8] = "BOTTOM_RIGHT", i = Phaser.Group, __extends(n, i), n.prototype.hasGroupAt = function(t) {
        t = this._groups[t];
        return null != t
    }, n.prototype.groupAt = function(t, e) {
        void 0 === e && (e = !0);
        var i = this._groups[t];
        return null == i && e && ((i = new Phaser.Group(this.game, this)).fixedToCamera = !0, this._groups[t] = i, this.arrangeGroup(t)), i
    }, n.prototype.arrangeGroups = function() {
        for (var t = 0; t < this._groups.length; t++) {
            var e = this._groups[t];
            null != e && this.arrangeGroup(t)
        }
    }, n.prototype.arrangeGroup = function(t) {
        var e = t % 3,
            i = Math.floor(t / 3),
            t = this._groups[t];
        null != t && (e = this.game.width * e / 2, i = this.game.height * i / 2, t.cameraOffset.set(e, i))
    };
    var i, e = n;

    function n(t, e) {
        t = i.call(this, t, e = void 0 === e ? null : e) || this;
        return t._groups = [], t
    }
    t.UILayer = e
}(UI = UI || {}),
function(t) {
    function n() {}
    n.setSounds = function(t, e) {
        void 0 === e && (e = null), n._sfx = t, n._sfxIds = e, n._isAudioSprite = null !== t && t instanceof Phaser.AudioSprite
    }, n.addSound = function(t, e) {
        n._sfxs[t] = e
    }, n.playSoundRnd = function(t, e, i) {
        null !== t && 0 !== t.length && n.playSound(Phaser.ArrayUtils.getRandomItem(t, e, i))
    }, n.playSound = function(t, e) {
        void 0 === e && (e = 1);
        t = n.getSoundName(t);
        App.settings.soundOn && (null !== n._sfx ? n._isAudioSprite ? n._sfx.play(t, e) : n._sfx.play(t, 0, e) : void 0 !== n._sfxs[t] && n._sfxs[t].play("", 0, e))
    }, n.stopSound = function(t) {
        t = n.getSoundName(t);
        null !== n._sfx ? n._isAudioSprite && n._sfx.stop(t) : void 0 !== n._sfxs[t] && n._sfxs[t].stop()
    }, n.getSoundName = function(t) {
        t = "number" == typeof t ? n._sfxIds[t] : t;
        return t
    }, Object.defineProperty(n, "currentMusic", {
        get: function() {
            return n._currentMusic
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n, "isMusicPlaying", {
        get: function() {
            return null !== this._currentMusic && 0 !== this._currentMusic.length && n._music[n._currentMusic].isPlaying
        },
        enumerable: !1,
        configurable: !0
    }), n.addMusic = function(t, e) {
        n._music[t] = e
    }, n.playMusic = function(t, e) {
        var i;
        void 0 === e && (e = !0), n._currentMusic !== t && (null !== n._currentMusic && 0 < n._currentMusic.length && n.stopMusic(), t in n._music) && App.settings.musicOn && (n._currentMusic = t, (i = n._music[t]).loop = e, i.play(), e || i.onStop.addOnce(function() {
            n.onFinished.dispatch(t)
        }, this))
    }, n.stopMusic = function() {
        var t;
        null !== n._currentMusic && 0 < n._currentMusic.length && ((t = n._music[n._currentMusic]).isPlaying && t.stop(), n._currentMusic = "")
    }, n.pauseMusic = function() {
        var t;
        null !== n._currentMusic && 0 < n._currentMusic.length && (t = n._music[n._currentMusic]).isPlaying && t.pause()
    }, n.resumeMusic = function() {
        var t;
        null !== n._currentMusic && 0 < n._currentMusic.length && (t = n._music[n._currentMusic]).paused && t.resume()
    }, n._sfx = null, n._isAudioSprite = !1, n._sfxs = {}, n._music = {}, n._currentMusic = "", n.onFinished = new Phaser.Signal, t.AudioUtils = n
}(Utils = Utils || {}),
function(t) {
    function i() {}
    i.saveTextAsFile = function(t, e) {
        t = new Blob([t], {
            type: "text/plain"
        }), null !== i._textFile && window.URL.revokeObjectURL(i._textFile), i._textFile = window.URL.createObjectURL(t), t = document.createElement("a");
        t.download = e, t.href = i._textFile, t.onclick = function(t) {
            document.body.removeChild(t.target)
        }, t.style.display = "none", document.body.appendChild(t), t.click()
    }, i._textFile = null, t.FileUtils = i
}(Utils = Utils || {}),
function(t) {
    function e() {}
    e.supported = function() {
        return App.game.scale.compatibility.supportsFullScreen
    }, e.isFullscreen = function() {
        return App.game.scale.isFullScreen
    }, e.changeFullscreen = function() {
        var t = App.game;
        t.scale.isFullScreen ? t.scale.stopFullScreen() : t.scale.startFullScreen(!1, !1)
    }, t.FullscreenUtils = e
}(Utils = Utils || {}),
function(t) {
    function e() {}
    e.loadValuesIntoObject = function(t, e) {
        for (var i in t) e[i] = t[i]
    }, t.ObjectUtils = e
}(Utils = Utils || {}),
function(t) {
    function e() {}
    e.ChangeAnimationPhaserJSONData = function(t) {
        Phaser.AnimationParser.myCallback = t, Phaser.AnimationParser.JSONData = function(t, e) {
            if (!e.frames) return null;
            for (var i = new Phaser.FrameData, n = e.frames, o = 0; o < n.length; o++) {
                var s = i.addFrame(new Phaser.Frame(o, n[o].frame.x, n[o].frame.y, n[o].frame.w, n[o].frame.h, n[o].filename));
                n[o].trimmed && s.setTrim(n[o].trimmed, n[o].sourceSize.w, n[o].sourceSize.h, n[o].spriteSourceSize.x, n[o].spriteSourceSize.y, n[o].spriteSourceSize.w, n[o].spriteSourceSize.h), Phaser.AnimationParser.myCallback(s, n[o])
            }
            return i
        }
    }, e.AdjustTweenFunctions = function() {
        Phaser.TweenManager.prototype.removeFromUpdateQueue = function(t) {
            var e = this._tweens.indexOf(t); - 1 !== e ? this._tweens.splice(e, 1) : -1 !== (e = this._add.indexOf(t)) && this._add.splice(e, 1)
        }, Phaser.Tween.prototype.stopAndRemoveFromUpdateQueue = function(t) {
            t = this.stop(t);
            return this.manager.removeFromUpdateQueue(this), this.pendingDelete = !1, t
        }
    }, e.AddBitmapFontAddMethod = function() {
        Phaser.Cache.prototype.addBitmapFontFromImage = function(t, e, i, n, o, s, r) {
            i = this.getImage(i, !0), i = {
                url: e,
                data: i.data,
                font: null,
                base: i.base
            };
            void 0 === s && (s = 0), void 0 === r && (r = 0), i.font = "json" === o ? Phaser.LoaderParser.jsonBitmapFont(n, i.base, s, r) : Phaser.LoaderParser.xmlBitmapFont(n, i.base, s, r), this._cache.bitmapFont[t] = i, this._resolveURL(e, i)
        }
    }, t.PhaserUtils = e
}(Utils = Utils || {}),
function(t) {
    var d, f = function() {},
        e = (t.ScreenMetrics = f, (e = d = t.eOrientation || (t.eOrientation = {}))[e.PORTRAIT = 0] = "PORTRAIT", e[e.LANDSCAPE = 1] = "LANDSCAPE", i.calculateScreenMetrics = function(t, e, i, n, o, s) {
            void 0 === i && (i = d.LANDSCAPE), ((r = window.innerWidth) < (a = window.innerHeight) && i === d.LANDSCAPE || a < r && i === d.PORTRAIT) && !n && (h = r, r = a, a = h), void 0 !== o && void 0 !== s || (s = i === d.LANDSCAPE ? (o = Math.round(1024 * t / 960), Math.round(720 * e / 600)) : (o = Math.round(720 * t / 600), Math.round(1024 * e / 960)));
            var r, a, h = t / e,
                c = r / a,
                l = 0,
                u = 0,
                p = 0,
                _ = 0,
                u = h < c ? (_ = e, p = 2 * Math.ceil(_ * c / 2), l = ((p = Math.min(p, o)) - t) / 2, 0) : (p = t, _ = 2 * Math.ceil(p / c / 2), l = 0, ((_ = Math.min(_, s)) - e) / 2),
                h = (r + .01) / p,
                c = (a + .01) / _;
            return n && i === d.LANDSCAPE && (h = c), this.screenMetrics = new f, this.screenMetrics.windowWidth = r, this.screenMetrics.windowHeight = a, this.screenMetrics.defaultGameWidth = t, this.screenMetrics.defaultGameHeight = e, this.screenMetrics.maxGameWidth = o, this.screenMetrics.maxGameHeight = s, this.screenMetrics.gameWidth = p, this.screenMetrics.gameHeight = _, this.screenMetrics.scaleX = h, this.screenMetrics.scaleY = c, this.screenMetrics.offsetX = l, this.screenMetrics.offsetY = u, this.screenMetrics
        }, i);

    function i() {}
    t.ScreenUtils = e
}(Utils = Utils || {}),
function(t) {
    function r() {}
    Object.defineProperty(r, "sponsorStorage", {
        set: function(t) {
            r._sponsorStorage = t
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(r, "allowMultipleRequests", {
        set: function(t) {
            r._allowMultipleRequests = t
        },
        enumerable: !1,
        configurable: !0
    }), r.save = function(o, s) {
        return __awaiter(this, void 0, void 0, function() {
            var e, i, n;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        if (!r._allowMultipleRequests && 0 < r._requestsCounter) throw new Error("Previous load/save request was not finished yet");
                        return ++r._requestsCounter, null === (e = r._sponsorStorage) ? [3, 2] : [4, e.save(o, s)];
                    case 1:
                        if (t.sent(), !e.fallbackToStandardStorage()) return --r._requestsCounter, [2];
                        t.label = 2;
                    case 2:
                        if (null === (i = r.getLocalStorage())) throw --r._requestsCounter, new Error("Standard storage not available");
                        return n = JSON.stringify(s), i.setItem(o, n), --r._requestsCounter, [2]
                }
            })
        })
    }, r.load = function(o) {
        return __awaiter(this, void 0, void 0, function() {
            var e, i, n;
            return __generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        if (!r._allowMultipleRequests && 0 < r._requestsCounter) throw new Error("Previous load/save request was not finished yet");
                        return ++r._requestsCounter, (e = null) === (i = r._sponsorStorage) ? [3, 2] : [4, i.load(o)];
                    case 1:
                        if (null != (e = t.sent()) || !i.fallbackToStandardStorage()) return --r._requestsCounter, [2, e];
                        t.label = 2;
                    case 2:
                        if (null === (n = r.getLocalStorage())) throw --r._requestsCounter, new Error("Standard storage not available");
                        return n = n.getItem(o), e = JSON.parse(n), --r._requestsCounter, [2, e]
                }
            })
        })
    }, r.getLocalStorage = function() {
        try {
            if ("localStorage" in window && null != window.localStorage) return localStorage
        } catch (t) {}
        return null
    }, r._sponsorStorage = null, r._allowMultipleRequests = !0, r._requestsCounter = 0, t.StorageUtils = r
}(Utils = Utils || {}),
function(t) {
    function a() {}
    a.padNumber = function(t, e, i) {
        void 0 === i && (i = "0");
        t += "";
        return e <= t.length ? t : new Array(e - t.length + 1).join(i) + t
    }, a.addSpacingToNumber = function(t, e) {
        return ("" + t).replace(/\B(?=(\d{3})+(?!\d))/g, e = void 0 === e ? " " : e)
    }, a.formatTime = function(t, e, i, n) {
        void 0 === i && (i = -1), void 0 === n && (n = ":");
        var o, s = !1,
            r = "",
            e = ((3600 < (t = Math.floor(t)) || 0 === e) && (o = Math.floor(t / 3600), r += (-1 !== i ? a.padNumber(o, i) : o) + n, t %= 3600, s = !0), (!0 === s || 60 < t || 1 === e) && (o = Math.floor(t / 60), r += (-1 !== i ? a.padNumber(o, i) : o) + n, t %= 60, s = !0), t);
        return r += -1 !== i ? a.padNumber(e, i) : e
    }, t.StringUtils = a
}(Utils = Utils || {}),
function(t) {
    function n() {}
    n.setTexts = function(t) {
        n._texts = t
    }, Object.defineProperty(n, "sponsorText", {
        set: function(t) {
            n._sponsorText = t
        },
        enumerable: !1,
        configurable: !0
    }), n.getLanguage = function() {
        var t = null;
        return t = !(t = navigator && navigator.userAgent ? (t = navigator.userAgent.match(/android.*\W(\w\w)-(\w\w)\W/i)) && t[1] : t) && navigator ? (navigator.language ? t = navigator.language : navigator.languages && 0 < navigator.languages.length ? t = navigator.languages[0] : navigator.browserLanguage ? t = navigator.browserLanguage : navigator.systemLanguage ? t = navigator.systemLanguage : navigator.userLanguage && (t = navigator.userLanguage), t.substr(0, 2).toLowerCase()) : "en"
    }, n.getText = function(t, e) {
        if (null !== n._sponsorText) return n._sponsorText.getText(t, e);
        if (null === n._texts) throw new Error("Texts are not set.");
        void 0 === e && (e = App.settings.currentLanguage);
        var i = n._texts[e];
        if (void 0 === i) throw new Error("Invalid language ID ".concat(e, "."));
        i = i[t];
        if (void 0 === i) throw new Error("Text with text id: ".concat(t, " for language ").concat(e, " is missing."));
        return i
    }, n._texts = null, n._sponsorText = null, t.TextUtils = n
}(Utils = Utils || {}),
function(t) {
    function e() {}
    e.isAndroidStockBrowser = function() {
        var t = window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);
        return t && parseFloat(t[1]) < 537
    }, e.androidVersion = function() {
        var t = navigator.userAgent.match(/Android\s([0-9\.]*)/);
        return t ? parseFloat(t[1]) : -1
    }, e.androidUnlockAudio = function(t) {
        t.device.android && t.device.chrome && 55 <= t.device.chromeVersion && (t.sound.touchLocked = !0, t.input.addTouchLockCallback(function() {
            var t;
            return !this.noAudio && this.touchLocked && null === this._unlockSource && this.usingWebAudio && (t = this.context.createBuffer(1, 1, 22050), this._unlockSource = this.context.createBufferSource(), this._unlockSource.buffer = t, this._unlockSource.connect(this.context.destination), void 0 === this._unlockSource.start ? this._unlockSource.noteOn(0) : this._unlockSource.start(0), "suspended" === this._unlockSource.context.state) && this._unlockSource.context.resume(), !0
        }, t.sound, !0))
    }, t.Device = e
}(Utils = Utils || {}),
function(t) {
    (t = t.eSponsorID || (t.eSponsorID = {}))[t.NONE = 0] = "NONE", t[t.SBCGAMES = 1] = "SBCGAMES", t[t.DOCOMO = 2] = "DOCOMO", t[t.FAMOBI = 3] = "FAMOBI", t[t.PMCONNECT = 4] = "PMCONNECT", t[t.COOLMATHGAMES = 5] = "COOLMATHGAMES", t[t.ZYGOMATIC = 6] = "ZYGOMATIC", t[t.CLOUDGAMES = 7] = "CLOUDGAMES", t[t.WANTED5GAMES = 8] = "WANTED5GAMES", t[t.ORANGEFR = 9] = "ORANGEFR", t[t.WKB = 10] = "WKB", t[t.MONDIA = 11] = "MONDIA", t[t.GAMEARTER = 12] = "GAMEARTER", t[t.KAPOW = 13] = "KAPOW", t[t.YANDEX = 14] = "YANDEX", t[t.GAMEDISTRIBUTION = 15] = "GAMEDISTRIBUTION", t[t.THEBALANCE = 16] = "THEBALANCE"
}(Sponsor = Sponsor || {}),
function(t) {
    function e(t) {
        this._features = null, this._game = null, (e._instance = this)._features = t
    }
    Object.defineProperty(e, "instance", {
        get: function() {
            if (null == e._instance) throw new Error("Sponsor is ".concat(e._instance, ". Sponsor must be always initialized."));
            return e._instance
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e, "initialized", {
        get: function() {
            return null != e._instance
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "id", {
        get: function() {
            return this.features.id
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "features", {
        get: function() {
            return this._features
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "game", {
        set: function(t) {
            this._game = t
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.startGameSession = function() {
        for (var t = 0; t < arguments.length; t++) t, 0
    }, e.prototype.endGameSession = function() {
        for (var t = 0; t < arguments.length; t++) t, 0
    }, e.prototype.submitScore = function() {
        for (var t = 0; t < arguments.length; t++) t, 0
    }, e.prototype.showAd = function() {
        for (var t = 0; t < arguments.length; t++) t, 0
    }, e.prototype.onMoreGames = function() {
        for (var t = 0; t < arguments.length; t++) t, 0
    }, e.prototype.getSponsorLogoLink = function() {
        for (var t = 0; t < arguments.length; t++) t, 0;
        return null
    }, e._instance = null, t.Sponsor = e
}(Sponsor = Sponsor || {}),
function(e) {
    function i(t) {
        return void 0 !== e.Sponsor.instance.features[t]
    }
    e.api = function() {
        return e.Sponsor.instance
    }, e.id = function() {
        return e.Sponsor.instance.id
    }, e.is = function(t) {
        return e.Sponsor.instance.id === t
    }, e.features = function() {
        return e.Sponsor.instance.features
    }, e.hasFeature = i, e.isFeatureOn = function(t) {
        return !!i(t) && "boolean" == typeof(t = e.Sponsor.instance.features[t]) && t
    }
}(Sponsor = Sponsor || {}),
function(t) {
    e = t.Sponsor, __extends(n, e), n.prototype.getSponsorLogoLink = function() {
        for (var t = 0; t < arguments.length; t++) t, 0;
        return "assets/sponsor/logo/LogoNone.png"
    };
    var e, i = n;

    function n(t) {
        return e.call(this, t) || this
    }
    t.SponsorNone = i
}(Sponsor = Sponsor || {}),
function(t) {
    i = t.Sponsor, __extends(n, i), n.prototype.showAd = function() {
        for (var t = 0; t < arguments.length; t++) t, 0;
        window && window.cmgAdBreak && window.cmgAdBreak()
    }, n.prototype.startGameSession = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var i = t[0];
        void 0 !== i.eventValue ? void 0 !== parent.cmgGameEvent && parent.cmgGameEvent(i.eventName, "" + i.eventValue) : void 0 !== parent.cmgGameEvent && parent.cmgGameEvent(i.eventName)
    }, n.prototype.sendGameEvent = function(t) {
        parent && parent.cmgGameEvent && parent.cmgGameEvent(t)
    }, n.prototype.sendDataEvent = function(t, e) {
        parent && parent.cmgDataEvent && parent.cmgDataEvent(t, e)
    };
    var i, e = n;

    function n(t) {
        var t = i.call(this, t) || this,
            e = (t._muteState = !1, t);
        return document.addEventListener("adBreakStart", function() {
            e._muteState = e._game.sound.mute, e._game.sound.mute = !0, e._game.paused = !0
        }), document.addEventListener("adBreakComplete", function() {
            e._game.paused = !1, e._game.sound.mute = e._muteState
        }), t
    }
    t.SponsorCoolmathGames = e
}(Sponsor = Sponsor || {}), (App || (App = {})).Settings = function() {
        this.id = "snake", this.musicOn = !0, this.soundOn = !0, this.currentLanguage = "en", this.hiScore = 0, this.showTutorial = !0
    },
    function(e) {
        var t;
        e.SPONSOR_FEATURES = ((t = {})[Sponsor.eSponsorID.NONE] = {
            id: Sponsor.eSponsorID.NONE,
            name: "none",
            hasConfig: !1,
            showFlags: !1,
            localization: !1
        }, t[Sponsor.eSponsorID.COOLMATHGAMES] = {
            id: Sponsor.eSponsorID.COOLMATHGAMES,
            name: "coolmathgames",
            hasConfig: !1,
            showFlags: !1,
            localization: !1
        }, t), e.getSponsorFeatures = function(t) {
            if (null == e.SPONSOR_FEATURES[t]) throw new Error("Features for sponsor ".concat(Sponsor.eSponsorID[t], " are not in SPONSOR_FEATURES list."));
            return e.SPONSOR_FEATURES[t]
        }
    }(App = App || {}),
    function(t) {
        t.sponsor = Sponsor.eSponsorID.COOLMATHGAMES, t.settings = new t.Settings, t.game = null, t.correctOrientation = !1, t.CORDOVA = !1
    }(App = App || {}), App.CORDOVA = !!window.cordova, App.CORDOVA || (App.sponsor === Sponsor.eSponsorID.FAMOBI ? window.famobi_onload = launch : window.onload = launch),
    function(t) {
        function e() {}
        e.GAME_WIDTH = 640, e.GAME_HEIGHT = 1024, e.MAX_GAME_WIDTH = 820, e.MAX_GAME_HEIGHT = 1136, e.scaleX = 1, e.scaleY = 1, e.saveKey = "snake_save", e.correctOrientation = !1, e.showLanguages = !1, e.supportedLanguages = ["en"], e.FIRE_SPONSOR_EVENTS = !0, e.TAP_TOLERANCE_PIXELS = 30, e.TAP_DEAD_BELT_IN_BLOCKS = 0, e.SWIPE_DISTANCE = 50, e.SWIPE_FINISHED_AFTER_MIN_DISTANCE = !0, e.SWIPE_CONTINUOUS = !1, e.IDEAL_BOARD_SIZE_IN_BLOCKS = 1200, e.MIN_SPACE_FOR_UI = 60, e.BG_COLOR = 0, e.BORDER_COLOR = 1454668, e.FOOD_COLOR = 16711680, e.SNAKE_COLOR = 3530240, e.SNAKE_BORDER_COLOR = 26138, e.SNAKE_DEATH_COLOR = 12632256, e.SNAKE_DEATH_BORDER_COLOR = 170, e.SNAKE_BLOCK_BORDER_USE_PERCENT = !1, e.SNAKE_BLOCK_BORDER_PIXELS = 1, e.SNAKE_BLOCK_BORDER_PERCENT = .1, e.SPEED_DESKTOP = 13.333, e.SPEED_MOBILE = 7, e.BLOCKS_ON_FOOD = 4, e.TEXT_STYLE = {
            font: "20px Arial",
            fill: "#fff",
            align: "center"
        }, e.TEXT_BUTTON_STYLE = {
            font: "24px Arial",
            fill: "#fff",
            align: "center"
        }, t.Config = e
    }(App = App || {}),
    function(i) {
        n = Phaser.Game, __extends(o, n), o.prototype.onSound = function(t) {
            this.sound.mute = !t
        }, o.prototype.additionalFrameProperties = function(t, e) {
            e.anchor && (t.anchorX = e.anchor.w, t.anchorY = e.anchor.h), e.nextitem && (t.nextItemX = e.nextitem.w, t.nextItemY = e.nextitem.h)
        }, o.game = null;
        var n, t = o;

        function o() {
            var t = this,
                e = Phaser.AUTO,
                e = {
                    width: App.Config.GAME_WIDTH,
                    height: App.Config.GAME_HEIGHT,
                    renderer: e,
                    parent: "sbc_game_content",
                    transparent: !1,
                    antialias: !0,
                    physicsConfig: null,
                    preserveDrawingBuffer: !0
                };
            return Sponsor.is(Sponsor.eSponsorID.WKB) && (e.mouseWheel = !1), t = n.call(this, e) || this, o.game = t, Utils.PhaserUtils.ChangeAnimationPhaserJSONData(t.additionalFrameProperties), Utils.PhaserUtils.AdjustTweenFunctions(), Utils.PhaserUtils.AddBitmapFontAddMethod(), t.state.add("Boot", i.Boot), t.state.add("Preloader", i.Preloader), t.state.add("Menu", i.Menu), t.state.add("Play", i.Play), t.state.add("OrientationWait", i.OrientationWait), t.state.start("Boot"), t
        }
        i.Game = t
    }(Snake = Snake || {}),
    function(t) {
        var r = function(t, e) {
            this.msg = t, this.color = e
        };

        function a() {}
        a.msg = function(t, e) {
            for (var i = a.messages, n = (void 0 === e && (e = a.YELLOW), 0); n < t.length;) {
                var o = t.substr(n, 60);
                if (i.length < a.MAX_LINE) a.messages.push(new r(o, e));
                else {
                    for (var s = 1; s < a.MAX_LINE; s++) i[s - 1].msg = i[s].msg, i[s - 1].color = i[s].color;
                    i[a.MAX_LINE - 1].msg = o, i[a.MAX_LINE - 1].color = e
                }
                n += 60
            }
        }, a.render = function(t) {
            for (var e = a.messages, i = 0; i < e.length; i++) t.text(e[i].msg, 10, 70 + 16 * i, e[i].color)
        }, a.RED = "RGB(255, 0, 0)", a.GREEN = "RGB(0, 255, 0)", a.BLUE = "RGB(, 0, 255)", a.YELLOW = "RGB(255, 255, 0)", a.MAGENTA = "RGB(255, 0, 255)", a.CYAN = "RGB(0, 255, 255)", a.WHITE = "RGB(255, 255, 255)", a.MAX_LINE = 32, a.messages = [], t.Log = a
    }(Log = Log || {}),
    function(t) {
        function e() {}
        e.AUDIO_JSON = {
            resources: ["assets\\sfx\\Sfx.ogg", "assets\\sfx\\Sfx.m4a"],
            spritemap: {
                GameOver: {
                    start: 0,
                    end: 1.05718820861678,
                    loop: !1
                }
            }
        }, t.Sounds = e
    }(Snake = Snake || {}),
    function(t) {
        i = Phaser.Sprite, __extends(n, i), Object.defineProperty(n.prototype, "size", {
            get: function() {
                return this._image.width
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "gridX", {
            get: function() {
                return this._grid.x
            },
            set: function(t) {
                this._grid.x = t, this.setPositionFromGrid(this._grid.x, this._grid.y)
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "gridY", {
            get: function() {
                return this._grid.y
            },
            set: function(t) {
                this._grid.y = t, this.setPositionFromGrid(this._grid.x, this._grid.y)
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.setGrid = function(t, e) {
            this._grid.set(t, e), this.setPositionFromGrid(this._grid.x, this._grid.y)
        }, n.prototype.setPositionFromGrid = function(t, e) {
            this.position.set(t * this.size, e * this.size)
        };
        var i, e = n;

        function n(t, e) {
            t = i.call(this, t, 0, 0, e) || this;
            return t._grid = new Phaser.Point, t._image = null, t._image = e, t
        }
        t.Block = e
    }(Snake = Snake || {}),
    function(n) {
        o = Phaser.Group, __extends(s, o), s.prototype.render = function() {}, s.prototype.onResize = function(t, e) {
            t <= 0 || e <= 0 || (this.position.set(t / 2, e / 2), t = Math.min(t / this._savedDims.x, e / this._savedDims.y), this.scale.set(t))
        }, Object.defineProperty(s.prototype, "inner", {
            get: function() {
                return this._inner
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(s.prototype, "innerOffset", {
            get: function() {
                return this._innerOffset
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(s.prototype, "snake", {
            get: function() {
                return this._snake
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(s.prototype, "dimensions", {
            get: function() {
                return this._dims
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(s.prototype, "blockSize", {
            get: function() {
                return this._blockSize
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(s.prototype, "UICenterY", {
            get: function() {
                return this._UICenterY
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(s.prototype, "savedHeight", {
            get: function() {
                return this._savedDims.y
            },
            enumerable: !1,
            configurable: !0
        }), s.prototype.calculateDimensions = function(t, e) {
            var i = t / e;
            for (this._dims.x = Math.floor(Math.sqrt(App.Config.IDEAL_BOARD_SIZE_IN_BLOCKS * i)), this._dims.y = Math.floor(this._dims.x / i), this._blockSize = Math.min(Math.floor(t / this._dims.x), Math.floor(e / this._dims.y)); t - this._dims.x * this._blockSize < 2 * this._blockSize;) --this._dims.x;
            for (; e - this._dims.y * this._blockSize < 2 * this._blockSize;) --this._dims.y;
            for (this.calculateInnerOffset(t, e); e - this._innerOffset.y - this._dims.y * this._blockSize < App.Config.MIN_SPACE_FOR_UI;) --this._dims.y;
            this._UICenterY = Math.floor(e - (e - this._innerOffset.y - this._dims.y * this._blockSize) / 2)
        }, s.prototype.calculateInnerOffset = function(t, e) {
            this._innerOffset.set(Math.floor((t - this._dims.x * this._blockSize) / 2), Math.floor((e - this._dims.y * this._blockSize) / 2))
        }, s.prototype.createGraphhics = function(t) {
            var e = App.Config.SNAKE_BLOCK_BORDER_PIXELS,
                i = t - 2 * (e = App.Config.SNAKE_BLOCK_BORDER_USE_PERCENT ? Math.floor(t * App.Config.SNAKE_BLOCK_BORDER_PERCENT) : e);
            this._snakeImage = new Phaser.BitmapData(this.game, "snake", t, t), this._snakeImage.rect(0, 0, t, t, Phaser.Color.getWebRGB(App.Config.SNAKE_BORDER_COLOR)), this._snakeImage.rect(e, e, i, i, Phaser.Color.getWebRGB(App.Config.SNAKE_COLOR)), this._foodImage = new Phaser.BitmapData(this.game, "food", t, t), this._foodImage.rect(0, 0, t, t, Phaser.Color.getWebRGB(App.Config.FOOD_COLOR)), this._deathImage = new Phaser.BitmapData(this.game, "death", t, t), this._deathImage.rect(0, 0, t, t, Phaser.Color.getWebRGB(App.Config.SNAKE_DEATH_BORDER_COLOR)), this._deathImage.rect(e, e, i, i, Phaser.Color.getWebRGB(App.Config.SNAKE_DEATH_COLOR))
        }, s.prototype.updateBoard = function(t, e) {
            this._food.active || this.placeFood(), this._snake.update(t, e) && (this.checkFood(), this.checkBorderCollision(), this.checkSnakeCollision())
        }, s.prototype.placeFood = function() {
            var t = this._snake.blocks;
            do {
                for (var e = this.game.rnd.integerInRange(0, this._dims.x - 1), i = this.game.rnd.integerInRange(0, this._dims.y - 1), n = !1, o = t.length - 1; 0 <= o; o--) {
                    var s = t[o];
                    if (s.gridX === e && s.gridY === i) {
                        n = !0;
                        break
                    }
                }
            } while (n || (this._food.setGrid(e, i), this._food.active = !0), !this._food.active)
        }, s.prototype.checkFood = function() {
            var t = this._snake.headPosition;
            t.x === this._food.gridX && t.y === this._food.gridY && (this._parentState.onScore(App.Config.BLOCKS_ON_FOOD), this._snake.addNewBlocks(App.Config.BLOCKS_ON_FOOD), this._food.active = !1)
        }, s.prototype.checkBorderCollision = function() {
            var t = this._snake.headPosition;
            (t.x < 0 || t.x >= this._dims.x || t.y < 0 || t.y >= this._dims.y) && this.gameOver()
        }, s.prototype.checkSnakeCollision = function() {
            var t = this._snake.blocks;
            if (!(t.length <= 1))
                for (var e = this._snake.headPosition, i = 1; i < t.length; i++) {
                    var n = t[i];
                    if (n.gridX === e.x && n.gridY === e.y) return void this.gameOver()
                }
        }, s.prototype.gameOver = function() {
            var t = this._snake.blocks[0];
            t.loadTexture(this._deathImage), this._inner.bringToTop(t), this._parentState.onGameOver()
        }, s._calculated = !1, s._calcDims = new Phaser.Point, s._calcBlockSize = 0, s._calcInnerOffset = new Phaser.Point, s._calcUICenterY = 0, s._calcSavedDims = new Phaser.Point;
        var o, t = s;

        function s(t, e, i) {
            e = o.call(this, t, e) || this;
            return e._parentState = null, e._dims = new Phaser.Point, e._innerOffset = new Phaser.Point, e._borders = null, e._inner = null, e._food = null, e._snake = null, e._snakeImage = null, e._foodImage = null, e._deathImage = null, e._savedDims = new Phaser.Point, e._parentState = i, s._calculated ? (e._dims.copyFrom(s._calcDims), e._blockSize = s._calcBlockSize, e._innerOffset.copyFrom(s._calcInnerOffset), e._UICenterY = s._calcUICenterY, e._savedDims.copyFrom(s._calcSavedDims)) : (e.calculateDimensions(t.width, t.height), e._savedDims.set(t.width, t.height), s._calcDims.copyFrom(e._dims), s._calcBlockSize = e._blockSize, s._calcInnerOffset.copyFrom(e._innerOffset), s._calcUICenterY = e._UICenterY, s._calcSavedDims.copyFrom(e._savedDims), s._calculated = !0), e._borders = new n.Borders(t, e, e._savedDims), e.createGraphhics(e._blockSize), e._borders.resize(e._innerOffset, e._dims, e._blockSize), e._inner = new Phaser.Group(t, e), e._snake = new n.Snake(t, e, e._snakeImage, e._dims), e._food = new n.Food(t, e._foodImage), e._inner.add(e._food), e.position.set(e._savedDims.x / 2, e._savedDims.y / 2), e._inner.position.set(e._innerOffset.x - e.x, e._innerOffset.y - e.y), e.onDestroy.add(function() {
                null !== this._snakeImage && (this._snakeImage.destroy(), this._snakeImage = null), null !== this._foodImage && (this._foodImage.destroy(), this._foodImage = null), null !== this._deathImage && (this._deathImage.destroy(), this._deathImage = null)
            }, e), e
        }
        n.Board = t
    }(Snake = Snake || {}),
    function(t) {
        n = Phaser.Group, __extends(o, n), o.prototype.resize = function(t, e, i) {
            this._left.position.set(t.x - this._dims.x / 2, 0), this._left.width = t.x, this._left.height = this._dims.y;
            var n = t.x + e.x * i,
                n = (this._right.position.set(n - this._dims.x / 2, 0), this._right.width = this._dims.x - n, this._right.height = this._dims.y, this._top.position.set(0, t.y - this._dims.y / 2), this._top.width = this._dims.x, this._top.height = t.y, t.y + e.y * i);
            this._bottom.position.set(0, n - this._dims.y / 2), this._bottom.width = this._dims.x, this._bottom.height = this._dims.y - n
        }, o.SPRITE_SIZE = 64;
        var n, e = o;

        function o(t, e, i) {
            e = n.call(this, t, e) || this;
            return e._sprite = null, e._left = null, e._right = null, e._top = null, e._bottom = null, e._dims = null, e._dims = i, e._sprite = new Phaser.BitmapData(t, "border", o.SPRITE_SIZE, o.SPRITE_SIZE), e._sprite.rect(0, 0, o.SPRITE_SIZE, o.SPRITE_SIZE, Phaser.Color.getWebRGB(App.Config.BORDER_COLOR)), e._left = t.add.sprite(0, 0, e._sprite, 0, e), e._left.anchor.set(1, .5), e._right = t.add.sprite(0, 0, e._sprite, 0, e), e._right.anchor.set(0, .5), e._top = t.add.sprite(0, 0, e._sprite, 0, e), e._top.anchor.set(.5, 1), e._bottom = t.add.sprite(0, 0, e._sprite, 0, e), e._bottom.anchor.set(.5, 0), e.onDestroy.add(function() {
                null !== this._sprite && (this._sprite.destroy(), this._sprite = null)
            }, e), e
        }
        t.Borders = e
    }(Snake = Snake || {}),
    function(t) {
        o = Phaser.Group, __extends(i, o), i.prototype.setLength = function(t) {
            this._length.text = Utils.TextUtils.getText("TXT_LENGTH") + t
        }, i.prototype.setBest = function(t) {
            this._best.text = Utils.TextUtils.getText("TXT_BEST") + t
        }, i.prototype.onResize = function(t) {
            var e = (this.game.height - t.savedHeight * t.scale.y) / 2 + t.UICenterY * t.scale.y,
                t = t.dimensions.x * t.blockSize / 2 * t.scale.x;
            this._length.position.set(this.game.width / 2 - t, e), this._best.position.set(this.game.width / 2 + t, e)
        };
        var o, e = i;

        function i(t, e, i, n) {
            e = o.call(this, t, e) || this;
            return e._length = null, e._best = null, e._length = t.add.text(0, 0, "", App.Config.TEXT_STYLE, e), e._length.align = "left", e._length.anchor.set(0, .5), e._length.position.set(n, i), 1 < t.device.pixelRatio && (e._length.fontSize = 2 * e._length.fontSize), e._best = t.add.text(0, 0, "", App.Config.TEXT_STYLE, e), e._best.align = "right", e._best.anchor.set(1, .5), e._best.position.set(t.width - n, i), 1 < t.device.pixelRatio && (e._best.fontSize = 2 * e._best.fontSize), e
        }
        t.BottomUI = e
    }(Snake = Snake || {}),
    function(l) {
        u = Phaser.Group, __extends(p, u), Object.defineProperty(p.prototype, "button", {
            get: function() {
                return this._button
            },
            enumerable: !1,
            configurable: !0
        }), p.BORDER = 20;
        var u, t = p;

        function p(t, e, i, n, o, s, r) {
            void 0 === r && (r = !0);
            var e = u.call(this, t, e) || this,
                a = (e._bg = null, e._text = null, e._button = null, s.blockSize),
                h = s.dimensions,
                s = 1 < t.device.pixelRatio ? 2 : 1,
                c = (i *= s, n *= s, Math.ceil(i / a)),
                c = ((c % 2 == 1 && h.x % 2 == 0 || c % 2 == 0 && h.x % 2 == 1) && ++c, i = c * a, Math.ceil(n / a));
            for ((c % 2 == 1 && h.y % 2 == 0 || c % 2 == 0 && h.y % 2 == 1) && ++c, n = c * a; i > h.x * a;) i -= 2 * a;
            return e._height = n, e._width = i, e._bg = t.add.sprite(0, 0, "Sprites", "Black", e), e._bg.width = i, e._bg.height = n, e._bg.anchor.set(.5, .5), e._text = t.add.text(0, 0, "", App.Config.TEXT_STYLE, e), e._text.anchor.set(.5, 0), e._text.y = -n / 2 + p.BORDER * s, e._text.fontSize = e._text.fontSize * s, r && (e._button = new l.TextButton(t, o), e._button.y = n / 2 - 50 * s, e.add(e._button), e._button.scale.set(s)), e.visible = !1, e
        }
        l.Dialog = t
    }(Snake = Snake || {}),
    function(o) {
        s = o.Dialog, __extends(e, s), e.prototype.setScore = function(t, e) {
            var i = 1 < this.game.device.pixelRatio ? 2 : 1,
                n = "";
            e ? (n = n + Utils.TextUtils.getText("TXT_CONGRATS") + "\n\n", this._text.lineSpacing = -5, this._text.y = -this._height / 2 + o.Dialog.BORDER / 2 * i, this._button.y = this._height / 2 - 40 * i, this._text.addColor("#FFFF00", 0), this._text.addColor("#FFFFFF", 16)) : (n = n + Utils.TextUtils.getText("TXT_GAME_OVER") + "\n", this._text.lineSpacing = Math.floor(.85 * this._text.fontSize), this._text.y = -this._height / 2 + o.Dialog.BORDER * i, this._button.y = this._height / 2 - 50 * i, this._text.clearColors()), n = (n += Utils.TextUtils.getText("TXT_LENGTH")) + t.toString(), this._text.text = n
        };
        var s, t = e;

        function e(t, e, i, n, o) {
            return s.call(this, t, e, i, n, Utils.TextUtils.getText("TXT_PLAY_AGAIN_BUTTON"), o) || this
        }
        o.DialogGameOver = t
    }(Snake = Snake || {}),
    function(t) {
        s = t.Dialog, __extends(i, s);
        var s, e = i;

        function i(t, e, i, n, o) {
            t = s.call(this, t, e, i, n, null, o, !1) || this;
            return t._text.text = Utils.TextUtils.getText("TXT_PAUSE"), t._text.y = 0, t._text.anchor.set(.5), t._text.fontSize = .75 * t._text.fontSize, t
        }
        t.DialogPause = e
    }(Snake = Snake || {}),
    function(t) {
        s = t.Dialog, __extends(i, s);
        var s, e = i;

        function i(t, e, i, n, o) {
            e = s.call(this, t, e, i, n, Utils.TextUtils.getText("TXT_START_BUTTON"), o) || this;
            return t.device.desktop ? e._text.text = Utils.TextUtils.getText("TXT_START_PC") : e._text.text = Utils.TextUtils.getText("TXT_START_MOBILE"), e
        }
        t.DialogStart = e
    }(Snake = Snake || {}),
    function(t) {
        i = t.Block, __extends(n, i), Object.defineProperty(n.prototype, "active", {
            get: function() {
                return this._active
            },
            set: function(t) {
                this._active = t, this.visible = t
            },
            enumerable: !1,
            configurable: !0
        });
        var i, e = n;

        function n(t, e) {
            t = i.call(this, t, e) || this;
            return t.active = !1, t
        }
        t.Food = e
    }(Snake = Snake || {}),
    function(t) {
        function r(t, e, i) {
            this._board = null, this._cursorKeys = null, this._direction = new Phaser.Point, this._tmpDirection = new Phaser.Point, this._down = !1, this._downPosition = new Phaser.Point, this._hlpPt = new Phaser.Point, this._game = t, this._parentState = e, this._board = i, this._cursorKeys = t.input.keyboard.createCursorKeys(), t.input.onDown.add(this.onDown, this), t.input.addMoveCallback(this.onMove, this), t.input.onUp.add(this.onUp, this)
        }
        r.prototype.onDown = function(t) {
            this._parentState.blockInput || (this._down = !0, this._downPosition.copyFrom(t.position), this._downTime = this._game.time.time)
        }, r.prototype.onMove = function(t, e, i, n) {
            var o, s;
            this._down && Phaser.Point.subtract(t.position, this._downPosition, this._hlpPt).getMagnitude() >= App.Config.SWIPE_DISTANCE && App.Config.SWIPE_FINISHED_AFTER_MIN_DISTANCE && (o = this._board.snake.lastDirection, s = Phaser.Point.subtract(t.position, this._downPosition, this._hlpPt), App.Config.SWIPE_CONTINUOUS && this._downPosition.copyFrom(t.position), 0 !== o.x ? Math.abs(s.y) > Math.abs(s.x) && (s.y < 0 ? this._direction.copyFrom(r.UP) : this._direction.copyFrom(r.DOWN)) : 0 !== o.y ? Math.abs(s.x) > Math.abs(s.y) && (s.x < 0 ? this._direction.copyFrom(r.LEFT) : this._direction.copyFrom(r.RIGHT)) : Math.abs(s.y) > Math.abs(s.x) ? s.y < 0 ? this._direction.copyFrom(r.UP) : this._direction.copyFrom(r.DOWN) : s.x < 0 ? this._direction.copyFrom(r.LEFT) : this._direction.copyFrom(r.RIGHT))
        }, r.prototype.onUp = function(t) {
            var e, i, n;
            this._down && (this._down = !1, (e = Phaser.Point.subtract(t.position, this._downPosition, this._hlpPt).getMagnitude()) < App.Config.TAP_TOLERANCE_PIXELS && (n = this._board.snake.blocks[0].world, i = this._board.snake.lastDirection, n = Phaser.Point.subtract(t.position, n, this._hlpPt), 0 !== i.x ? Math.abs(n.y) > this._board.blockSize * App.Config.TAP_DEAD_BELT_IN_BLOCKS / 2 && (n.y < 0 ? this._direction.copyFrom(r.UP) : this._direction.copyFrom(r.DOWN)) : 0 !== i.y ? Math.abs(n.x) > this._board.blockSize * App.Config.TAP_DEAD_BELT_IN_BLOCKS / 2 && (n.x < 0 ? this._direction.copyFrom(r.LEFT) : this._direction.copyFrom(r.RIGHT)) : Math.abs(n.y) > Math.abs(n.x) ? n.y < 0 ? this._direction.copyFrom(r.UP) : this._direction.copyFrom(r.DOWN) : n.x < 0 ? this._direction.copyFrom(r.LEFT) : this._direction.copyFrom(r.RIGHT)), e >= App.Config.SWIPE_DISTANCE) && !App.Config.SWIPE_FINISHED_AFTER_MIN_DISTANCE && (i = this._board.snake.lastDirection, n = Phaser.Point.subtract(t.position, this._downPosition, this._hlpPt), 0 !== i.x ? Math.abs(n.y) > Math.abs(n.x) && (n.y < 0 ? this._direction.copyFrom(r.UP) : this._direction.copyFrom(r.DOWN)) : 0 !== i.y ? Math.abs(n.x) > Math.abs(n.y) && (n.x < 0 ? this._direction.copyFrom(r.LEFT) : this._direction.copyFrom(r.RIGHT)) : Math.abs(n.y) > Math.abs(n.x) ? n.y < 0 ? this._direction.copyFrom(r.UP) : this._direction.copyFrom(r.DOWN) : n.x < 0 ? this._direction.copyFrom(r.LEFT) : this._direction.copyFrom(r.RIGHT))
        }, r.prototype.update = function() {
            this._cursorKeys.left.isDown ? this._direction.copyFrom(r.LEFT) : this._cursorKeys.right.isDown ? this._direction.copyFrom(r.RIGHT) : this._cursorKeys.up.isDown ? this._direction.copyFrom(r.UP) : this._cursorKeys.down.isDown && this._direction.copyFrom(r.DOWN)
        }, Object.defineProperty(r.prototype, "direction", {
            get: function() {
                return this._tmpDirection.copyFrom(this._direction), this._direction.set(0, 0), this._tmpDirection
            },
            enumerable: !1,
            configurable: !0
        }), r.LEFT = new Phaser.Point(-1, 0), r.RIGHT = new Phaser.Point(1, 0), r.UP = new Phaser.Point(0, -1), r.DOWN = new Phaser.Point(0, 1), t.Input = r
    }(Snake = Snake || {}),
    function(o) {
        function t(t, e, i, n) {
            this._parent = null, this._pool = null, this._direction = new Phaser.Point, this._lastDirection = new Phaser.Point, this._hlpPt = new Phaser.Point, this._parent = e, this._pool = new Collections.Pool(o.Block, 200, function() {
                return new o.Block(t, i)
            }), this._pool.canGrow = !0, this._blocks = [], this._blocksToAdd = 0, this.addBlock(Math.floor(n.x / 2), Math.floor(n.y / 2)), this._timeToMove = 1e3 / (t.device.desktop ? App.Config.SPEED_DESKTOP : App.Config.SPEED_MOBILE), this._currentTimeToMove = this._timeToMove
        }
        Object.defineProperty(t.prototype, "blocks", {
            get: function() {
                return this._blocks
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "isMoving", {
            get: function() {
                return 0 !== this._direction.x || 0 !== this._direction.y
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "headPosition", {
            get: function() {
                var t = this._blocks[0];
                return this._hlpPt.set(t.gridX, t.gridY), this._hlpPt
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "lastDirection", {
            get: function() {
                return this._lastDirection
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.addNewBlocks = function(t) {
            this._blocksToAdd += t
        }, t.prototype.addBlock = function(t, e) {
            var i = this._pool.spawn();
            this._parent.inner.add(i), i.setGrid(t, e), this._blocks.push(i)
        }, t.prototype.update = function(t, e) {
            return (0 !== e.x && 0 === this._lastDirection.x || 0 !== e.y && 0 === this._lastDirection.y) && this._direction.copyFrom(e), !(0 === this._direction.x && 0 === this._direction.y || (this._currentTimeToMove -= t, 0 < this._currentTimeToMove) || (this._currentTimeToMove = this._timeToMove, this.move(this._direction), this._lastDirection.copyFrom(this._direction), 0))
        }, t.prototype.move = function(t) {
            for (var e = this._hlpPt, i = 0; i < this._blocks.length; i++) {
                var n = this._blocks[i],
                    o = n.gridX,
                    s = n.gridY;
                0 === i ? n.setGrid(n.gridX + t.x, n.gridY + t.y) : n.setGrid(e.x, e.y), e.set(o, s)
            }
            0 < this._blocksToAdd && (--this._blocksToAdd, this.addBlock(e.x, e.y))
        }, o.Snake = t
    }(Snake = Snake || {}),
    function(t) {
        n = UI.Button, __extends(i, n);
        var n, e = i;

        function i(t, e) {
            var i = n.call(this, t, "Button", "Sprites", "Button") || this;
            return i._text = null, i.downAction = function() {}, i._text = t.add.text(0, 0, e, App.Config.TEXT_BUTTON_STYLE, i), i._text.anchor.set(.5), i._text.y = Math.floor(.15 * i._text.fontSize), i
        }
        t.TextButton = e
    }(Snake = Snake || {}),
    function(t) {
        e = Phaser.State, __extends(n, e), n.prototype.init = function() {
            this.calcGameDims(), this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE, this.scale.setUserScale(this._userScale.x, this._userScale.y), this.scale.pageAlignHorizontally = !0, this.scale.pageAlignVertically = !0, this.scale.setResizeCallback(this.gameResized, this), this.game.device.desktop ? App.correctOrientation = !0 : (this.scale.forceOrientation(!1, !0), this.scale.onOrientationChange.add(this.orientationChange, this), this.orientationChange(this.scale, "", !0)), Utils.Device.androidUnlockAudio(this.game)
        }, n.prototype.preload = function() {
            this.load.json("Config", "assets/config.json"), Sponsor.isFeatureOn("hasConfig") && this.load.json("SponsorConfig", "assets/sponsor/config_".concat(Sponsor.features().name, ".json"))
        }, n.prototype.create = function() {
            var t = this.cache.getJSON("Config");
            if (!t) throw new Error("Game is missing file config.json at 'assets/'.");
            if (Utils.ObjectUtils.loadValuesIntoObject(t, App.Config), this.cache.checkJSONKey("SponsorConfig")) Utils.ObjectUtils.loadValuesIntoObject(this.cache.getJSON("SponsorConfig"), App.Config);
            else if (Sponsor.isFeatureOn("hasConfig")) throw new Error("Sponsor features require sponsor specific config 'config_".concat(Sponsor.features().name, ".json' at 'assets/sponsor/'."));
            this.game.state.start("Preloader")
        }, n.prototype.calcGameDims = function() {
            var t = window.innerWidth,
                e = window.innerHeight,
                i = this.game.device.pixelRatio,
                t = t * i,
                e = e * i;
            this._userScale.set(1 / i, 1 / i), this._gameDims.set(t, e)
        }, n.prototype.gameResized = function(t, e) {
            var i, n, o;
            !t.incorrectOrientation && (t = this._userScale.x, i = this._userScale.y, this.calcGameDims(), n = this._gameDims, o = this._userScale, n.x !== this.game.width || n.y !== this.game.height || .001 < Math.abs(o.x - t) || .001 < Math.abs(o.y - i)) && (this.scale.setGameSize(n.x, n.y), this.scale.setUserScale(o.x, o.y), "function" == typeof(t = this.game.state.getCurrentState()).onResize && t.onResize(n.x, n.y), this.camera.update())
        }, n.prototype.orientationChange = function(t, e, i) {
            t.isPortrait ? this.leaveIncorrectOrientation() : this.enterIncorrectOrientation()
        }, n.prototype.enterIncorrectOrientation = function() {
            document.getElementById("sbc_orientation").style.display = "block";
            var t = this.game.state.getCurrentState();
            "function" == typeof t.onPause && t.onPause(), App.correctOrientation = !1
        }, n.prototype.leaveIncorrectOrientation = function() {
            document.getElementById("sbc_orientation").style.display = "none";
            var t = this.game.state.getCurrentState();
            "function" == typeof t.onResume && t.onResume(), App.correctOrientation = !0
        };
        var e, i = n;

        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._userScale = new Phaser.Point(1, 1), t._gameDims = new Phaser.Point, t
        }
        t.Boot = i
    }(Snake = Snake || {}),
    function(t) {
        e = Phaser.State, __extends(n, e), n.prototype.setView = function(t, e) {
            this.camera.bounds = null
        };
        var e, i = n;

        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        t.SceneBase = i
    }(Snake = Snake || {}),
    function(t) {
        e = t.SceneBase, __extends(n, e), n.prototype.create = function() {
            this.stage.backgroundColor = 0, this.onResize(this.game.width, this.game.height), App.correctOrientation ? this.game.state.start("Play") : this.game.state.start("OrientationWait")
        }, n.prototype.onResize = function(t, e) {
            this.setView(t, e)
        };
        var e, i = n;

        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        t.Menu = i
    }(Snake = Snake || {}),
    function(e) {
        i = e.SceneBase, __extends(n, i), n.prototype.create = function() {
            this.stage.backgroundColor = App.Config.BG_COLOR, this._score = 1, this._board = new e.Board(this.game, this.world, this), this._ui = new e.BottomUI(this.game, this.world, this._board.UICenterY, this._board.innerOffset.x), this._ui.setLength(this._score), this._ui.setBest(App.settings.hiScore), this._input = new e.Input(this.game, this, this._board), this._blockInput = !0, this.input.keyboard.addKey(Phaser.KeyCode.ENTER).onDown.add(this.onKeyPressed, this), this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR).onDown.add(this.onSpacePressed, this), this._gameOver = !1;
            var t = this._board.dimensions.y * this._board.blockSize / 2 + this._board.innerOffset.y;
            this._dialogGameOver = new e.DialogGameOver(this.game, this.world, 360, 200, this._board), this._dialogGameOver.position.set(this.world.centerX, t), this._dialogGameOver.button.onClick.add(function() {
                this.restartGame()
            }, this), this._dialogStart = new e.DialogStart(this.game, this.world, 450, 170, this._board), this._dialogStart.position.set(this.world.centerX, t), this._dialogStart.button.onClick.add(function() {
                this.startGame()
            }, this), this._dialogPause = new e.DialogPause(this.game, this.world, 360, 200, this._board), this._dialogPause.position.set(this.world.centerX, t), this._firstGame && (this._dialogStart.visible = !0), this.onResize(this.game.width, this.game.height)
        }, n.prototype.onSpacePressed = function() {
            !this.dialogOnScreen && this._board.snake.isMoving ? this._dialogPause.visible = !0 : this._dialogPause.visible ? this._dialogPause.visible = !1 : this.onKeyPressed()
        }, n.prototype.onKeyPressed = function() {
            this._dialogGameOver.visible ? this.restartGame() : this._dialogStart.visible && this.startGame()
        }, n.prototype.startGame = function() {
            this._dialogStart.visible = !1;
            var t = Sponsor.api();
            this._firstGame && (App.Config.FIRE_SPONSOR_EVENTS && t.sendGameEvent("start"), this._firstGame = !1)
        }, n.prototype.restartGame = function() {
            this.state.start("Play");
            var t = Sponsor.api();
            App.Config.FIRE_SPONSOR_EVENTS && t.sendGameEvent("replay"), t.showAd()
        }, n.prototype.onResize = function(t, e) {
            this.setView(t, e), this._board && this._board.onResize(t, e), this._dialogStart && (t = (e - this._board.savedHeight * this._board.scale.y) / 2 + this._board.innerOffset.y * this._board.scale.y + this._board.dimensions.y * this._board.blockSize / 2 * this._board.scale.y, this._dialogGameOver.position.set(this.world.centerX, t), this._dialogPause.position.set(this.world.centerX, t), this._dialogStart.position.set(this.world.centerX, t)), this._ui && this._board && this._ui.onResize(this._board)
        }, Object.defineProperty(n.prototype, "dialogOnScreen", {
            get: function() {
                return this._dialogStart.visible || this._dialogGameOver.visible || this._dialogPause.visible
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(n.prototype, "blockInput", {
            get: function() {
                return this._blockInput
            },
            enumerable: !1,
            configurable: !0
        }), n.prototype.update = function() {
            var t, e;
            this.dialogOnScreen || (t = Math.min(this.game.time.elapsedMS, 1e3 / 15), this._gameOver) || (this._blockInput = !1, this._input.update(), e = this._input.direction, this._board.updateBoard(t, e))
        }, n.prototype.onScore = function(t) {
            this._score += t, this._ui.setLength(this._score)
        }, n.prototype.onGameOver = function() {
            var t;
            this._gameOver || (this._gameOver = !0, (t = this._score > App.settings.hiScore) && (App.settings.hiScore = this._score, this._ui.setBest(App.settings.hiScore), Utils.StorageUtils.save(App.Config.saveKey, App.settings)), this._dialogGameOver.setScore(this._score, t), this._dialogGameOver.visible = !0)
        };
        var i, t = n;

        function n() {
            var t = null !== i && i.apply(this, arguments) || this;
            return t._input = null, t._blockInput = !0, t._board = null, t._ui = null, t._score = 0, t._dialogStart = null, t._dialogGameOver = null, t._dialogPause = null, t._gameOver = !1, t._firstGame = !0, t
        }
        e.Play = t
    }(Snake = Snake || {}),
    function(t) {
        e = t.SceneBase, __extends(n, e), n.prototype.preload = function() {
            this.setView(this.game.width, this.game.height), this.stage.backgroundColor = 0;
            var t;
            this.load.atlas("Sprites", "".concat(t = "assets/atlas/", "Sprites.png"), "".concat(t, "Sprites.json")), this.load.json("Texts", "".concat("assets/text/", "text.json")), this.onResize(this.game.width, this.game.height)
        }, n.prototype.create = function() {
            Utils.TextUtils.setTexts(this.game.cache.getJSON("Texts"))
        }, n.prototype.update = function() {
            this._ready || (this._ready = !0, this.time.events.add(150, function() {
                this.game.state.start("Menu")
            }, this))
        }, n.prototype.onResize = function(t, e) {
            this.setView(t, e)
        };
        var e, i = n;

        function n() {
            var t = e.call(this) || this;
            return t._bg = null, t._ready = !1, t
        }
        t.Preloader = i
    }(Snake = Snake || {}),
    function(t) {
        e = Phaser.State, __extends(n, e), n.prototype.create = function() {
            this.stage.backgroundColor = 0
        }, n.prototype.update = function() {
            this._lock || App.correctOrientation && (this._lock = !0, this.time.events.add(200, function() {
                this.game.state.start("Play")
            }, this))
        };
        var e, i = n;

        function n() {
            var t = e.call(this) || this;
            return t._lock = !1, t
        }
        t.OrientationWait = i
    }(Snake = Snake || {});