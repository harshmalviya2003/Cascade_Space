/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var $_ = Object.create;
    var an = Object.defineProperty;
    var Q_ = Object.getOwnPropertyDescriptor;
    var Z_ = Object.getOwnPropertyNames;
    var J_ = Object.getPrototypeOf
      , eb = Object.prototype.hasOwnProperty;
    var he = (e, t) => () => (e && (t = e(e = 0)),
    t);
    var c = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Fe = (e, t) => {
        for (var r in t)
            an(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , Ls = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of Z_(t))
                !eb.call(e, i) && i !== r && an(e, i, {
                    get: () => t[i],
                    enumerable: !(n = Q_(t, i)) || n.enumerable
                });
        return e
    }
    ;
    var le = (e, t, r) => (r = e != null ? $_(J_(e)) : {},
    Ls(t || !e || !e.__esModule ? an(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e))
      , tt = e => Ls(an({}, "__esModule", {
        value: !0
    }), e);
    var Li = c( () => {
        "use strict";
        window.tram = function(e) {
            function t(f, y) {
                var O = new V.Bare;
                return O.init(f, y)
            }
            function r(f) {
                return f.replace(/[A-Z]/g, function(y) {
                    return "-" + y.toLowerCase()
                })
            }
            function n(f) {
                var y = parseInt(f.slice(1), 16)
                  , O = y >> 16 & 255
                  , S = y >> 8 & 255
                  , I = 255 & y;
                return [O, S, I]
            }
            function i(f, y, O) {
                return "#" + (1 << 24 | f << 16 | y << 8 | O).toString(16).slice(1)
            }
            function o() {}
            function a(f, y) {
                l("Type warning: Expected: [" + f + "] Got: [" + typeof y + "] " + y)
            }
            function s(f, y, O) {
                l("Units do not match [" + f + "]: " + y + ", " + O)
            }
            function u(f, y, O) {
                if (y !== void 0 && (O = y),
                f === void 0)
                    return O;
                var S = O;
                return St.test(f) || !lt.test(f) ? S = parseInt(f, 10) : lt.test(f) && (S = 1e3 * parseFloat(f)),
                0 > S && (S = 0),
                S === S ? S : O
            }
            function l(f) {
                se.debug && window && window.console.warn(f)
            }
            function m(f) {
                for (var y = -1, O = f ? f.length : 0, S = []; ++y < O; ) {
                    var I = f[y];
                    I && S.push(I)
                }
                return S
            }
            var p = function(f, y, O) {
                function S(ie) {
                    return typeof ie == "object"
                }
                function I(ie) {
                    return typeof ie == "function"
                }
                function R() {}
                function ee(ie, pe) {
                    function j() {
                        var Re = new ae;
                        return I(Re.init) && Re.init.apply(Re, arguments),
                        Re
                    }
                    function ae() {}
                    pe === O && (pe = ie,
                    ie = Object),
                    j.Bare = ae;
                    var ue, be = R[f] = ie[f], et = ae[f] = j[f] = new R;
                    return et.constructor = j,
                    j.mixin = function(Re) {
                        return ae[f] = j[f] = ee(j, Re)[f],
                        j
                    }
                    ,
                    j.open = function(Re) {
                        if (ue = {},
                        I(Re) ? ue = Re.call(j, et, be, j, ie) : S(Re) && (ue = Re),
                        S(ue))
                            for (var yr in ue)
                                y.call(ue, yr) && (et[yr] = ue[yr]);
                        return I(et.init) || (et.init = ie),
                        j
                    }
                    ,
                    j.open(pe)
                }
                return ee
            }("prototype", {}.hasOwnProperty)
              , g = {
                ease: ["ease", function(f, y, O, S) {
                    var I = (f /= S) * f
                      , R = I * f;
                    return y + O * (-2.75 * R * I + 11 * I * I + -15.5 * R + 8 * I + .25 * f)
                }
                ],
                "ease-in": ["ease-in", function(f, y, O, S) {
                    var I = (f /= S) * f
                      , R = I * f;
                    return y + O * (-1 * R * I + 3 * I * I + -3 * R + 2 * I)
                }
                ],
                "ease-out": ["ease-out", function(f, y, O, S) {
                    var I = (f /= S) * f
                      , R = I * f;
                    return y + O * (.3 * R * I + -1.6 * I * I + 2.2 * R + -1.8 * I + 1.9 * f)
                }
                ],
                "ease-in-out": ["ease-in-out", function(f, y, O, S) {
                    var I = (f /= S) * f
                      , R = I * f;
                    return y + O * (2 * R * I + -5 * I * I + 2 * R + 2 * I)
                }
                ],
                linear: ["linear", function(f, y, O, S) {
                    return O * f / S + y
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, y, O, S) {
                    return O * (f /= S) * f + y
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, y, O, S) {
                    return -O * (f /= S) * (f - 2) + y
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, y, O, S) {
                    return (f /= S / 2) < 1 ? O / 2 * f * f + y : -O / 2 * (--f * (f - 2) - 1) + y
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, y, O, S) {
                    return O * (f /= S) * f * f + y
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, y, O, S) {
                    return O * ((f = f / S - 1) * f * f + 1) + y
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, y, O, S) {
                    return (f /= S / 2) < 1 ? O / 2 * f * f * f + y : O / 2 * ((f -= 2) * f * f + 2) + y
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, y, O, S) {
                    return O * (f /= S) * f * f * f + y
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, y, O, S) {
                    return -O * ((f = f / S - 1) * f * f * f - 1) + y
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, y, O, S) {
                    return (f /= S / 2) < 1 ? O / 2 * f * f * f * f + y : -O / 2 * ((f -= 2) * f * f * f - 2) + y
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, y, O, S) {
                    return O * (f /= S) * f * f * f * f + y
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, y, O, S) {
                    return O * ((f = f / S - 1) * f * f * f * f + 1) + y
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, y, O, S) {
                    return (f /= S / 2) < 1 ? O / 2 * f * f * f * f * f + y : O / 2 * ((f -= 2) * f * f * f * f + 2) + y
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, y, O, S) {
                    return -O * Math.cos(f / S * (Math.PI / 2)) + O + y
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, y, O, S) {
                    return O * Math.sin(f / S * (Math.PI / 2)) + y
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, y, O, S) {
                    return -O / 2 * (Math.cos(Math.PI * f / S) - 1) + y
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, y, O, S) {
                    return f === 0 ? y : O * Math.pow(2, 10 * (f / S - 1)) + y
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, y, O, S) {
                    return f === S ? y + O : O * (-Math.pow(2, -10 * f / S) + 1) + y
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, y, O, S) {
                    return f === 0 ? y : f === S ? y + O : (f /= S / 2) < 1 ? O / 2 * Math.pow(2, 10 * (f - 1)) + y : O / 2 * (-Math.pow(2, -10 * --f) + 2) + y
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, y, O, S) {
                    return -O * (Math.sqrt(1 - (f /= S) * f) - 1) + y
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, y, O, S) {
                    return O * Math.sqrt(1 - (f = f / S - 1) * f) + y
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, y, O, S) {
                    return (f /= S / 2) < 1 ? -O / 2 * (Math.sqrt(1 - f * f) - 1) + y : O / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + y
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, y, O, S, I) {
                    return I === void 0 && (I = 1.70158),
                    O * (f /= S) * f * ((I + 1) * f - I) + y
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, y, O, S, I) {
                    return I === void 0 && (I = 1.70158),
                    O * ((f = f / S - 1) * f * ((I + 1) * f + I) + 1) + y
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, y, O, S, I) {
                    return I === void 0 && (I = 1.70158),
                    (f /= S / 2) < 1 ? O / 2 * f * f * (((I *= 1.525) + 1) * f - I) + y : O / 2 * ((f -= 2) * f * (((I *= 1.525) + 1) * f + I) + 2) + y
                }
                ]
            }
              , h = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , T = document
              , b = window
              , w = "bkwld-tram"
              , _ = /[\-\.0-9]/g
              , C = /[A-Z]/
              , x = "number"
              , N = /^(rgb|#)/
              , M = /(em|cm|mm|in|pt|pc|px)$/
              , P = /(em|cm|mm|in|pt|pc|px|%)$/
              , z = /(deg|rad|turn)$/
              , K = "unitless"
              , $ = /(all|none) 0s ease 0s/
              , Z = /^(width|height)$/
              , G = " "
              , A = T.createElement("a")
              , v = ["Webkit", "Moz", "O", "ms"]
              , L = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , D = function(f) {
                if (f in A.style)
                    return {
                        dom: f,
                        css: f
                    };
                var y, O, S = "", I = f.split("-");
                for (y = 0; y < I.length; y++)
                    S += I[y].charAt(0).toUpperCase() + I[y].slice(1);
                for (y = 0; y < v.length; y++)
                    if (O = v[y] + S,
                    O in A.style)
                        return {
                            dom: O,
                            css: L[y] + f
                        }
            }
              , U = t.support = {
                bind: Function.prototype.bind,
                transform: D("transform"),
                transition: D("transition"),
                backface: D("backface-visibility"),
                timing: D("transition-timing-function")
            };
            if (U.transition) {
                var te = U.timing.dom;
                if (A.style[te] = g["ease-in-back"][0],
                !A.style[te])
                    for (var re in h)
                        g[re][0] = h[re]
            }
            var F = t.frame = function() {
                var f = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame;
                return f && U.bind ? f.bind(b) : function(y) {
                    b.setTimeout(y, 16)
                }
            }()
              , X = t.now = function() {
                var f = b.performance
                  , y = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                return y && U.bind ? y.bind(f) : Date.now || function() {
                    return +new Date
                }
            }()
              , Q = p(function(f) {
                function y(ne, ce) {
                    var me = m(("" + ne).split(G))
                      , fe = me[0];
                    ce = ce || {};
                    var Ne = Y[fe];
                    if (!Ne)
                        return l("Unsupported property: " + fe);
                    if (!ce.weak || !this.props[fe]) {
                        var We = Ne[0]
                          , Me = this.props[fe];
                        return Me || (Me = this.props[fe] = new We.Bare),
                        Me.init(this.$el, me, Ne, ce),
                        Me
                    }
                }
                function O(ne, ce, me) {
                    if (ne) {
                        var fe = typeof ne;
                        if (ce || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        fe == "number" && ce)
                            return this.timer = new oe({
                                duration: ne,
                                context: this,
                                complete: R
                            }),
                            void (this.active = !0);
                        if (fe == "string" && ce) {
                            switch (ne) {
                            case "hide":
                                j.call(this);
                                break;
                            case "stop":
                                ee.call(this);
                                break;
                            case "redraw":
                                ae.call(this);
                                break;
                            default:
                                y.call(this, ne, me && me[1])
                            }
                            return R.call(this)
                        }
                        if (fe == "function")
                            return void ne.call(this, this);
                        if (fe == "object") {
                            var Ne = 0;
                            et.call(this, ne, function(Te, Y_) {
                                Te.span > Ne && (Ne = Te.span),
                                Te.stop(),
                                Te.animate(Y_)
                            }, function(Te) {
                                "wait"in Te && (Ne = u(Te.wait, 0))
                            }),
                            be.call(this),
                            Ne > 0 && (this.timer = new oe({
                                duration: Ne,
                                context: this
                            }),
                            this.active = !0,
                            ce && (this.timer.complete = R));
                            var We = this
                              , Me = !1
                              , on = {};
                            F(function() {
                                et.call(We, ne, function(Te) {
                                    Te.active && (Me = !0,
                                    on[Te.name] = Te.nextStyle)
                                }),
                                Me && We.$el.css(on)
                            })
                        }
                    }
                }
                function S(ne) {
                    ne = u(ne, 0),
                    this.active ? this.queue.push({
                        options: ne
                    }) : (this.timer = new oe({
                        duration: ne,
                        context: this,
                        complete: R
                    }),
                    this.active = !0)
                }
                function I(ne) {
                    return this.active ? (this.queue.push({
                        options: ne,
                        args: arguments
                    }),
                    void (this.timer.complete = R)) : l("No active transition timer. Use start() or wait() before then().")
                }
                function R() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var ne = this.queue.shift();
                        O.call(this, ne.options, !0, ne.args)
                    }
                }
                function ee(ne) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ce;
                    typeof ne == "string" ? (ce = {},
                    ce[ne] = 1) : ce = typeof ne == "object" && ne != null ? ne : this.props,
                    et.call(this, ce, Re),
                    be.call(this)
                }
                function ie(ne) {
                    ee.call(this, ne),
                    et.call(this, ne, yr, z_)
                }
                function pe(ne) {
                    typeof ne != "string" && (ne = "block"),
                    this.el.style.display = ne
                }
                function j() {
                    ee.call(this),
                    this.el.style.display = "none"
                }
                function ae() {
                    this.el.offsetHeight
                }
                function ue() {
                    ee.call(this),
                    e.removeData(this.el, w),
                    this.$el = this.el = null
                }
                function be() {
                    var ne, ce, me = [];
                    this.upstream && me.push(this.upstream);
                    for (ne in this.props)
                        ce = this.props[ne],
                        ce.active && me.push(ce.string);
                    me = me.join(","),
                    this.style !== me && (this.style = me,
                    this.el.style[U.transition.dom] = me)
                }
                function et(ne, ce, me) {
                    var fe, Ne, We, Me, on = ce !== Re, Te = {};
                    for (fe in ne)
                        We = ne[fe],
                        fe in ge ? (Te.transform || (Te.transform = {}),
                        Te.transform[fe] = We) : (C.test(fe) && (fe = r(fe)),
                        fe in Y ? Te[fe] = We : (Me || (Me = {}),
                        Me[fe] = We));
                    for (fe in Te) {
                        if (We = Te[fe],
                        Ne = this.props[fe],
                        !Ne) {
                            if (!on)
                                continue;
                            Ne = y.call(this, fe)
                        }
                        ce.call(this, Ne, We)
                    }
                    me && Me && me.call(this, Me)
                }
                function Re(ne) {
                    ne.stop()
                }
                function yr(ne, ce) {
                    ne.set(ce)
                }
                function z_(ne) {
                    this.$el.css(ne)
                }
                function He(ne, ce) {
                    f[ne] = function() {
                        return this.children ? K_.call(this, ce, arguments) : (this.el && ce.apply(this, arguments),
                        this)
                    }
                }
                function K_(ne, ce) {
                    var me, fe = this.children.length;
                    for (me = 0; fe > me; me++)
                        ne.apply(this.children[me], ce);
                    return this
                }
                f.init = function(ne) {
                    if (this.$el = e(ne),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    se.keepInherited && !se.fallback) {
                        var ce = H(this.el, "transition");
                        ce && !$.test(ce) && (this.upstream = ce)
                    }
                    U.backface && se.hideBackface && E(this.el, U.backface.css, "hidden")
                }
                ,
                He("add", y),
                He("start", O),
                He("wait", S),
                He("then", I),
                He("next", R),
                He("stop", ee),
                He("set", ie),
                He("show", pe),
                He("hide", j),
                He("redraw", ae),
                He("destroy", ue)
            })
              , V = p(Q, function(f) {
                function y(O, S) {
                    var I = e.data(O, w) || e.data(O, w, new Q.Bare);
                    return I.el || I.init(O),
                    S ? I.start(S) : I
                }
                f.init = function(O, S) {
                    var I = e(O);
                    if (!I.length)
                        return this;
                    if (I.length === 1)
                        return y(I[0], S);
                    var R = [];
                    return I.each(function(ee, ie) {
                        R.push(y(ie, S))
                    }),
                    this.children = R,
                    this
                }
            })
              , k = p(function(f) {
                function y() {
                    var R = this.get();
                    this.update("auto");
                    var ee = this.get();
                    return this.update(R),
                    ee
                }
                function O(R, ee, ie) {
                    return ee !== void 0 && (ie = ee),
                    R in g ? R : ie
                }
                function S(R) {
                    var ee = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(R);
                    return (ee ? i(ee[1], ee[2], ee[3]) : R).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var I = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                f.init = function(R, ee, ie, pe) {
                    this.$el = R,
                    this.el = R[0];
                    var j = ee[0];
                    ie[2] && (j = ie[2]),
                    J[j] && (j = J[j]),
                    this.name = j,
                    this.type = ie[1],
                    this.duration = u(ee[1], this.duration, I.duration),
                    this.ease = O(ee[2], this.ease, I.ease),
                    this.delay = u(ee[3], this.delay, I.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = Z.test(this.name),
                    this.unit = pe.unit || this.unit || se.defaultUnit,
                    this.angle = pe.angle || this.angle || se.defaultAngle,
                    se.fallback || pe.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + G + this.duration + "ms" + (this.ease != "ease" ? G + g[this.ease][0] : "") + (this.delay ? G + this.delay + "ms" : ""))
                }
                ,
                f.set = function(R) {
                    R = this.convert(R, this.type),
                    this.update(R),
                    this.redraw()
                }
                ,
                f.transition = function(R) {
                    this.active = !0,
                    R = this.convert(R, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    R == "auto" && (R = y.call(this))),
                    this.nextStyle = R
                }
                ,
                f.fallback = function(R) {
                    var ee = this.el.style[this.name] || this.convert(this.get(), this.type);
                    R = this.convert(R, this.type),
                    this.auto && (ee == "auto" && (ee = this.convert(this.get(), this.type)),
                    R == "auto" && (R = y.call(this))),
                    this.tween = new q({
                        from: ee,
                        to: R,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                f.get = function() {
                    return H(this.el, this.name)
                }
                ,
                f.update = function(R) {
                    E(this.el, this.name, R)
                }
                ,
                f.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    E(this.el, this.name, this.get()));
                    var R = this.tween;
                    R && R.context && R.destroy()
                }
                ,
                f.convert = function(R, ee) {
                    if (R == "auto" && this.auto)
                        return R;
                    var ie, pe = typeof R == "number", j = typeof R == "string";
                    switch (ee) {
                    case x:
                        if (pe)
                            return R;
                        if (j && R.replace(_, "") === "")
                            return +R;
                        ie = "number(unitless)";
                        break;
                    case N:
                        if (j) {
                            if (R === "" && this.original)
                                return this.original;
                            if (ee.test(R))
                                return R.charAt(0) == "#" && R.length == 7 ? R : S(R)
                        }
                        ie = "hex or rgb string";
                        break;
                    case M:
                        if (pe)
                            return R + this.unit;
                        if (j && ee.test(R))
                            return R;
                        ie = "number(px) or string(unit)";
                        break;
                    case P:
                        if (pe)
                            return R + this.unit;
                        if (j && ee.test(R))
                            return R;
                        ie = "number(px) or string(unit or %)";
                        break;
                    case z:
                        if (pe)
                            return R + this.angle;
                        if (j && ee.test(R))
                            return R;
                        ie = "number(deg) or string(angle)";
                        break;
                    case K:
                        if (pe || j && P.test(R))
                            return R;
                        ie = "number(unitless) or string(unit or %)"
                    }
                    return a(ie, R),
                    R
                }
                ,
                f.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , d = p(k, function(f, y) {
                f.init = function() {
                    y.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), N))
                }
            })
              , B = p(k, function(f, y) {
                f.init = function() {
                    y.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                f.get = function() {
                    return this.$el[this.name]()
                }
                ,
                f.update = function(O) {
                    this.$el[this.name](O)
                }
            })
              , W = p(k, function(f, y) {
                function O(S, I) {
                    var R, ee, ie, pe, j;
                    for (R in S)
                        pe = ge[R],
                        ie = pe[0],
                        ee = pe[1] || R,
                        j = this.convert(S[R], ie),
                        I.call(this, ee, j, ie)
                }
                f.init = function() {
                    y.init.apply(this, arguments),
                    this.current || (this.current = {},
                    ge.perspective && se.perspective && (this.current.perspective = se.perspective,
                    E(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                f.set = function(S) {
                    O.call(this, S, function(I, R) {
                        this.current[I] = R
                    }),
                    E(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                f.transition = function(S) {
                    var I = this.values(S);
                    this.tween = new _e({
                        current: this.current,
                        values: I,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var R, ee = {};
                    for (R in this.current)
                        ee[R] = R in I ? I[R] : this.current[R];
                    this.active = !0,
                    this.nextStyle = this.style(ee)
                }
                ,
                f.fallback = function(S) {
                    var I = this.values(S);
                    this.tween = new _e({
                        current: this.current,
                        values: I,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                f.update = function() {
                    E(this.el, this.name, this.style(this.current))
                }
                ,
                f.style = function(S) {
                    var I, R = "";
                    for (I in S)
                        R += I + "(" + S[I] + ") ";
                    return R
                }
                ,
                f.values = function(S) {
                    var I, R = {};
                    return O.call(this, S, function(ee, ie, pe) {
                        R[ee] = ie,
                        this.current[ee] === void 0 && (I = 0,
                        ~ee.indexOf("scale") && (I = 1),
                        this.current[ee] = this.convert(I, pe))
                    }),
                    R
                }
            })
              , q = p(function(f) {
                function y(j) {
                    ie.push(j) === 1 && F(O)
                }
                function O() {
                    var j, ae, ue, be = ie.length;
                    if (be)
                        for (F(O),
                        ae = X(),
                        j = be; j--; )
                            ue = ie[j],
                            ue && ue.render(ae)
                }
                function S(j) {
                    var ae, ue = e.inArray(j, ie);
                    ue >= 0 && (ae = ie.slice(ue + 1),
                    ie.length = ue,
                    ae.length && (ie = ie.concat(ae)))
                }
                function I(j) {
                    return Math.round(j * pe) / pe
                }
                function R(j, ae, ue) {
                    return i(j[0] + ue * (ae[0] - j[0]), j[1] + ue * (ae[1] - j[1]), j[2] + ue * (ae[2] - j[2]))
                }
                var ee = {
                    ease: g.ease[1],
                    from: 0,
                    to: 1
                };
                f.init = function(j) {
                    this.duration = j.duration || 0,
                    this.delay = j.delay || 0;
                    var ae = j.ease || ee.ease;
                    g[ae] && (ae = g[ae][1]),
                    typeof ae != "function" && (ae = ee.ease),
                    this.ease = ae,
                    this.update = j.update || o,
                    this.complete = j.complete || o,
                    this.context = j.context || this,
                    this.name = j.name;
                    var ue = j.from
                      , be = j.to;
                    ue === void 0 && (ue = ee.from),
                    be === void 0 && (be = ee.to),
                    this.unit = j.unit || "",
                    typeof ue == "number" && typeof be == "number" ? (this.begin = ue,
                    this.change = be - ue) : this.format(be, ue),
                    this.value = this.begin + this.unit,
                    this.start = X(),
                    j.autoplay !== !1 && this.play()
                }
                ,
                f.play = function() {
                    this.active || (this.start || (this.start = X()),
                    this.active = !0,
                    y(this))
                }
                ,
                f.stop = function() {
                    this.active && (this.active = !1,
                    S(this))
                }
                ,
                f.render = function(j) {
                    var ae, ue = j - this.start;
                    if (this.delay) {
                        if (ue <= this.delay)
                            return;
                        ue -= this.delay
                    }
                    if (ue < this.duration) {
                        var be = this.ease(ue, 0, 1, this.duration);
                        return ae = this.startRGB ? R(this.startRGB, this.endRGB, be) : I(this.begin + be * this.change),
                        this.value = ae + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    ae = this.endHex || this.begin + this.change,
                    this.value = ae + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                f.format = function(j, ae) {
                    if (ae += "",
                    j += "",
                    j.charAt(0) == "#")
                        return this.startRGB = n(ae),
                        this.endRGB = n(j),
                        this.endHex = j,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var ue = ae.replace(_, "")
                          , be = j.replace(_, "");
                        ue !== be && s("tween", ae, j),
                        this.unit = ue
                    }
                    ae = parseFloat(ae),
                    j = parseFloat(j),
                    this.begin = this.value = ae,
                    this.change = j - ae
                }
                ,
                f.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var ie = []
                  , pe = 1e3
            })
              , oe = p(q, function(f) {
                f.init = function(y) {
                    this.duration = y.duration || 0,
                    this.complete = y.complete || o,
                    this.context = y.context,
                    this.play()
                }
                ,
                f.render = function(y) {
                    var O = y - this.start;
                    O < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , _e = p(q, function(f, y) {
                f.init = function(O) {
                    this.context = O.context,
                    this.update = O.update,
                    this.tweens = [],
                    this.current = O.current;
                    var S, I;
                    for (S in O.values)
                        I = O.values[S],
                        this.current[S] !== I && this.tweens.push(new q({
                            name: S,
                            from: this.current[S],
                            to: I,
                            duration: O.duration,
                            delay: O.delay,
                            ease: O.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                f.render = function(O) {
                    var S, I, R = this.tweens.length, ee = !1;
                    for (S = R; S--; )
                        I = this.tweens[S],
                        I.context && (I.render(O),
                        this.current[I.name] = I.value,
                        ee = !0);
                    return ee ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                f.destroy = function() {
                    if (y.destroy.call(this),
                    this.tweens) {
                        var O, S = this.tweens.length;
                        for (O = S; O--; )
                            this.tweens[O].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , se = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !U.transition,
                agentTests: []
            };
            t.fallback = function(f) {
                if (!U.transition)
                    return se.fallback = !0;
                se.agentTests.push("(" + f + ")");
                var y = new RegExp(se.agentTests.join("|"),"i");
                se.fallback = y.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(f) {
                return new q(f)
            }
            ,
            t.delay = function(f, y, O) {
                return new oe({
                    complete: y,
                    duration: f,
                    context: O
                })
            }
            ,
            e.fn.tram = function(f) {
                return t.call(null, this, f)
            }
            ;
            var E = e.style
              , H = e.css
              , J = {
                transform: U.transform && U.transform.css
            }
              , Y = {
                color: [d, N],
                background: [d, N, "background-color"],
                "outline-color": [d, N],
                "border-color": [d, N],
                "border-top-color": [d, N],
                "border-right-color": [d, N],
                "border-bottom-color": [d, N],
                "border-left-color": [d, N],
                "border-width": [k, M],
                "border-top-width": [k, M],
                "border-right-width": [k, M],
                "border-bottom-width": [k, M],
                "border-left-width": [k, M],
                "border-spacing": [k, M],
                "letter-spacing": [k, M],
                margin: [k, M],
                "margin-top": [k, M],
                "margin-right": [k, M],
                "margin-bottom": [k, M],
                "margin-left": [k, M],
                padding: [k, M],
                "padding-top": [k, M],
                "padding-right": [k, M],
                "padding-bottom": [k, M],
                "padding-left": [k, M],
                "outline-width": [k, M],
                opacity: [k, x],
                top: [k, P],
                right: [k, P],
                bottom: [k, P],
                left: [k, P],
                "font-size": [k, P],
                "text-indent": [k, P],
                "word-spacing": [k, P],
                width: [k, P],
                "min-width": [k, P],
                "max-width": [k, P],
                height: [k, P],
                "min-height": [k, P],
                "max-height": [k, P],
                "line-height": [k, K],
                "scroll-top": [B, x, "scrollTop"],
                "scroll-left": [B, x, "scrollLeft"]
            }
              , ge = {};
            U.transform && (Y.transform = [W],
            ge = {
                x: [P, "translateX"],
                y: [P, "translateY"],
                rotate: [z],
                rotateX: [z],
                rotateY: [z],
                scale: [x],
                scaleX: [x],
                scaleY: [x],
                skew: [z],
                skewX: [z],
                skewY: [z]
            }),
            U.transform && U.backface && (ge.z = [P, "translateZ"],
            ge.rotateZ = [z],
            ge.scaleZ = [x],
            ge.perspective = [M]);
            var St = /ms/
              , lt = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var qs = c( (WV, Ps) => {
        "use strict";
        var tb = window.$
          , rb = Li() && tb.tram;
        Ps.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , i = Function.prototype
              , o = r.push
              , a = r.slice
              , s = r.concat
              , u = n.toString
              , l = n.hasOwnProperty
              , m = r.forEach
              , p = r.map
              , g = r.reduce
              , h = r.reduceRight
              , T = r.filter
              , b = r.every
              , w = r.some
              , _ = r.indexOf
              , C = r.lastIndexOf
              , x = Array.isArray
              , N = Object.keys
              , M = i.bind
              , P = e.each = e.forEach = function(v, L, D) {
                if (v == null)
                    return v;
                if (m && v.forEach === m)
                    v.forEach(L, D);
                else if (v.length === +v.length) {
                    for (var U = 0, te = v.length; U < te; U++)
                        if (L.call(D, v[U], U, v) === t)
                            return
                } else
                    for (var re = e.keys(v), U = 0, te = re.length; U < te; U++)
                        if (L.call(D, v[re[U]], re[U], v) === t)
                            return;
                return v
            }
            ;
            e.map = e.collect = function(v, L, D) {
                var U = [];
                return v == null ? U : p && v.map === p ? v.map(L, D) : (P(v, function(te, re, F) {
                    U.push(L.call(D, te, re, F))
                }),
                U)
            }
            ,
            e.find = e.detect = function(v, L, D) {
                var U;
                return z(v, function(te, re, F) {
                    if (L.call(D, te, re, F))
                        return U = te,
                        !0
                }),
                U
            }
            ,
            e.filter = e.select = function(v, L, D) {
                var U = [];
                return v == null ? U : T && v.filter === T ? v.filter(L, D) : (P(v, function(te, re, F) {
                    L.call(D, te, re, F) && U.push(te)
                }),
                U)
            }
            ;
            var z = e.some = e.any = function(v, L, D) {
                L || (L = e.identity);
                var U = !1;
                return v == null ? U : w && v.some === w ? v.some(L, D) : (P(v, function(te, re, F) {
                    if (U || (U = L.call(D, te, re, F)))
                        return t
                }),
                !!U)
            }
            ;
            e.contains = e.include = function(v, L) {
                return v == null ? !1 : _ && v.indexOf === _ ? v.indexOf(L) != -1 : z(v, function(D) {
                    return D === L
                })
            }
            ,
            e.delay = function(v, L) {
                var D = a.call(arguments, 2);
                return setTimeout(function() {
                    return v.apply(null, D)
                }, L)
            }
            ,
            e.defer = function(v) {
                return e.delay.apply(e, [v, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(v) {
                var L, D, U;
                return function() {
                    L || (L = !0,
                    D = arguments,
                    U = this,
                    rb.frame(function() {
                        L = !1,
                        v.apply(U, D)
                    }))
                }
            }
            ,
            e.debounce = function(v, L, D) {
                var U, te, re, F, X, Q = function() {
                    var V = e.now() - F;
                    V < L ? U = setTimeout(Q, L - V) : (U = null,
                    D || (X = v.apply(re, te),
                    re = te = null))
                };
                return function() {
                    re = this,
                    te = arguments,
                    F = e.now();
                    var V = D && !U;
                    return U || (U = setTimeout(Q, L)),
                    V && (X = v.apply(re, te),
                    re = te = null),
                    X
                }
            }
            ,
            e.defaults = function(v) {
                if (!e.isObject(v))
                    return v;
                for (var L = 1, D = arguments.length; L < D; L++) {
                    var U = arguments[L];
                    for (var te in U)
                        v[te] === void 0 && (v[te] = U[te])
                }
                return v
            }
            ,
            e.keys = function(v) {
                if (!e.isObject(v))
                    return [];
                if (N)
                    return N(v);
                var L = [];
                for (var D in v)
                    e.has(v, D) && L.push(D);
                return L
            }
            ,
            e.has = function(v, L) {
                return l.call(v, L)
            }
            ,
            e.isObject = function(v) {
                return v === Object(v)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var K = /(.)^/
              , $ = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , Z = /\\|'|\r|\n|\u2028|\u2029/g
              , G = function(v) {
                return "\\" + $[v]
            }
              , A = /^\s*(\w|\$)+\s*$/;
            return e.template = function(v, L, D) {
                !L && D && (L = D),
                L = e.defaults({}, L, e.templateSettings);
                var U = RegExp([(L.escape || K).source, (L.interpolate || K).source, (L.evaluate || K).source].join("|") + "|$", "g")
                  , te = 0
                  , re = "__p+='";
                v.replace(U, function(V, k, d, B, W) {
                    return re += v.slice(te, W).replace(Z, G),
                    te = W + V.length,
                    k ? re += `'+
((__t=(` + k + `))==null?'':_.escape(__t))+
'` : d ? re += `'+
((__t=(` + d + `))==null?'':__t)+
'` : B && (re += `';
` + B + `
__p+='`),
                    V
                }),
                re += `';
`;
                var F = L.variable;
                if (F) {
                    if (!A.test(F))
                        throw new Error("variable is not a bare identifier: " + F)
                } else
                    re = `with(obj||{}){
` + re + `}
`,
                    F = "obj";
                re = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + re + `return __p;
`;
                var X;
                try {
                    X = new Function(L.variable || "obj","_",re)
                } catch (V) {
                    throw V.source = re,
                    V
                }
                var Q = function(V) {
                    return X.call(this, V, e)
                };
                return Q.source = "function(" + F + `){
` + re + "}",
                Q
            }
            ,
            e
        }()
    }
    );
    var De = c( (XV, Bs) => {
        "use strict";
        var de = {}
          , Vt = {}
          , Bt = []
          , qi = window.Webflow || []
          , mt = window.jQuery
          , je = mt(window)
          , nb = mt(document)
          , rt = mt.isFunction
          , Xe = de._ = qs()
          , Fs = de.tram = Li() && mt.tram
          , un = !1
          , Mi = !1;
        Fs.config.hideBackface = !1;
        Fs.config.keepInherited = !0;
        de.define = function(e, t, r) {
            Vt[e] && ks(Vt[e]);
            var n = Vt[e] = t(mt, Xe, r) || {};
            return Ds(n),
            n
        }
        ;
        de.require = function(e) {
            return Vt[e]
        }
        ;
        function Ds(e) {
            de.env() && (rt(e.design) && je.on("__wf_design", e.design),
            rt(e.preview) && je.on("__wf_preview", e.preview)),
            rt(e.destroy) && je.on("__wf_destroy", e.destroy),
            e.ready && rt(e.ready) && ib(e)
        }
        function ib(e) {
            if (un) {
                e.ready();
                return
            }
            Xe.contains(Bt, e.ready) || Bt.push(e.ready)
        }
        function ks(e) {
            rt(e.design) && je.off("__wf_design", e.design),
            rt(e.preview) && je.off("__wf_preview", e.preview),
            rt(e.destroy) && je.off("__wf_destroy", e.destroy),
            e.ready && rt(e.ready) && ob(e)
        }
        function ob(e) {
            Bt = Xe.filter(Bt, function(t) {
                return t !== e.ready
            })
        }
        de.push = function(e) {
            if (un) {
                rt(e) && e();
                return
            }
            qi.push(e)
        }
        ;
        de.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var sn = navigator.userAgent.toLowerCase()
          , Gs = de.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , ab = de.env.chrome = /chrome/.test(sn) && /Google/.test(navigator.vendor) && parseInt(sn.match(/chrome\/(\d+)\./)[1], 10)
          , sb = de.env.ios = /(ipod|iphone|ipad)/.test(sn);
        de.env.safari = /safari/.test(sn) && !ab && !sb;
        var Pi;
        Gs && nb.on("touchstart mousedown", function(e) {
            Pi = e.target
        });
        de.validClick = Gs ? function(e) {
            return e === Pi || mt.contains(e, Pi)
        }
        : function() {
            return !0
        }
        ;
        var Us = "resize.webflow orientationchange.webflow load.webflow"
          , ub = "scroll.webflow " + Us;
        de.resize = Fi(je, Us);
        de.scroll = Fi(je, ub);
        de.redraw = Fi();
        function Fi(e, t) {
            var r = []
              , n = {};
            return n.up = Xe.throttle(function(i) {
                Xe.each(r, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(i) {
                typeof i == "function" && (Xe.contains(r, i) || r.push(i))
            }
            ,
            n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Xe.filter(r, function(o) {
                    return o !== i
                })
            }
            ,
            n
        }
        de.location = function(e) {
            window.location = e
        }
        ;
        de.env() && (de.location = function() {}
        );
        de.ready = function() {
            un = !0,
            Mi ? cb() : Xe.each(Bt, Ms),
            Xe.each(qi, Ms),
            de.resize.up()
        }
        ;
        function Ms(e) {
            rt(e) && e()
        }
        function cb() {
            Mi = !1,
            Xe.each(Vt, Ds)
        }
        var Ct;
        de.load = function(e) {
            Ct.then(e)
        }
        ;
        function Vs() {
            Ct && (Ct.reject(),
            je.off("load", Ct.resolve)),
            Ct = new mt.Deferred,
            je.on("load", Ct.resolve)
        }
        de.destroy = function(e) {
            e = e || {},
            Mi = !0,
            je.triggerHandler("__wf_destroy"),
            e.domready != null && (un = e.domready),
            Xe.each(Vt, ks),
            de.resize.off(),
            de.scroll.off(),
            de.redraw.off(),
            Bt = [],
            qi = [],
            Ct.state() === "pending" && Vs()
        }
        ;
        mt(de.ready);
        Vs();
        Bs.exports = window.Webflow = de
    }
    );
    var Xs = c( (jV, Ws) => {
        "use strict";
        var Hs = De();
        Hs.define("brand", Ws.exports = function(e) {
            var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", l;
            t.ready = function() {
                var h = n.attr("data-wf-status")
                  , T = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(T) && a.hostname !== T && (h = !0),
                h && !s && (l = l || p(),
                g(),
                setTimeout(g, 500),
                e(r).off(u, m).on(u, m))
            }
            ;
            function m() {
                var h = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", h ? "display: none !important;" : "")
            }
            function p() {
                var h = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return h.append(T, b),
                h[0]
            }
            function g() {
                var h = i.children(o)
                  , T = h.length && h.get(0) === l
                  , b = Hs.env("editor");
                if (T) {
                    b && h.remove();
                    return
                }
                h.length && h.remove(),
                b || i.append(l)
            }
            return t
        }
        )
    }
    );
    var zs = c( (zV, js) => {
        "use strict";
        var Di = De();
        Di.define("edit", js.exports = function(e, t, r) {
            if (r = r || {},
            (Di.env("test") || Di.env("frame")) && !r.fixture && !lb())
                return {
                    exit: 1
                };
            var n = {}, i = e(window), o = e(document.documentElement), a = document.location, s = "hashchange", u, l = r.load || g, m = !1;
            try {
                m = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            m ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, p).triggerHandler(s);
            function p() {
                u || /\?edit/.test(a.hash) && l()
            }
            function g() {
                u = !0,
                window.WebflowEditor = !0,
                i.off(s, p),
                C(function(N) {
                    e.ajax({
                        url: _("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: h(N)
                    })
                })
            }
            function h(N) {
                return function(M) {
                    if (!M) {
                        console.error("Could not load editor data");
                        return
                    }
                    M.thirdPartyCookiesSupported = N,
                    T(w(M.scriptPath), function() {
                        window.WebflowEditor(M)
                    })
                }
            }
            function T(N, M) {
                e.ajax({
                    type: "GET",
                    url: N,
                    dataType: "script",
                    cache: !0
                }).then(M, b)
            }
            function b(N, M, P) {
                throw console.error("Could not load editor script: " + M),
                P
            }
            function w(N) {
                return N.indexOf("//") >= 0 ? N : _("https://editor-api.webflow.com" + N)
            }
            function _(N) {
                return N.replace(/([^:])\/\//g, "$1/")
            }
            function C(N) {
                var M = window.document.createElement("iframe");
                M.src = "https://webflow.com/site/third-party-cookie-check.html",
                M.style.display = "none",
                M.sandbox = "allow-scripts allow-same-origin";
                var P = function(z) {
                    z.data === "WF_third_party_cookies_unsupported" ? (x(M, P),
                    N(!1)) : z.data === "WF_third_party_cookies_supported" && (x(M, P),
                    N(!0))
                };
                M.onerror = function() {
                    x(M, P),
                    N(!1)
                }
                ,
                window.addEventListener("message", P, !1),
                window.document.body.appendChild(M)
            }
            function x(N, M) {
                window.removeEventListener("message", M, !1),
                N.remove()
            }
            return n
        }
        );
        function lb() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var Ys = c( (KV, Ks) => {
        "use strict";
        var fb = De();
        fb.define("focus-visible", Ks.exports = function() {
            function e(r) {
                var n = !0
                  , i = !1
                  , o = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(x) {
                    return !!(x && x !== document && x.nodeName !== "HTML" && x.nodeName !== "BODY" && "classList"in x && "contains"in x.classList)
                }
                function u(x) {
                    var N = x.type
                      , M = x.tagName;
                    return !!(M === "INPUT" && a[N] && !x.readOnly || M === "TEXTAREA" && !x.readOnly || x.isContentEditable)
                }
                function l(x) {
                    x.getAttribute("data-wf-focus-visible") || x.setAttribute("data-wf-focus-visible", "true")
                }
                function m(x) {
                    x.getAttribute("data-wf-focus-visible") && x.removeAttribute("data-wf-focus-visible")
                }
                function p(x) {
                    x.metaKey || x.altKey || x.ctrlKey || (s(r.activeElement) && l(r.activeElement),
                    n = !0)
                }
                function g() {
                    n = !1
                }
                function h(x) {
                    s(x.target) && (n || u(x.target)) && l(x.target)
                }
                function T(x) {
                    s(x.target) && x.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    m(x.target))
                }
                function b() {
                    document.visibilityState === "hidden" && (i && (n = !0),
                    w())
                }
                function w() {
                    document.addEventListener("mousemove", C),
                    document.addEventListener("mousedown", C),
                    document.addEventListener("mouseup", C),
                    document.addEventListener("pointermove", C),
                    document.addEventListener("pointerdown", C),
                    document.addEventListener("pointerup", C),
                    document.addEventListener("touchmove", C),
                    document.addEventListener("touchstart", C),
                    document.addEventListener("touchend", C)
                }
                function _() {
                    document.removeEventListener("mousemove", C),
                    document.removeEventListener("mousedown", C),
                    document.removeEventListener("mouseup", C),
                    document.removeEventListener("pointermove", C),
                    document.removeEventListener("pointerdown", C),
                    document.removeEventListener("pointerup", C),
                    document.removeEventListener("touchmove", C),
                    document.removeEventListener("touchstart", C),
                    document.removeEventListener("touchend", C)
                }
                function C(x) {
                    x.target.nodeName && x.target.nodeName.toLowerCase() === "html" || (n = !1,
                    _())
                }
                document.addEventListener("keydown", p, !0),
                document.addEventListener("mousedown", g, !0),
                document.addEventListener("pointerdown", g, !0),
                document.addEventListener("touchstart", g, !0),
                document.addEventListener("visibilitychange", b, !0),
                w(),
                r.addEventListener("focus", h, !0),
                r.addEventListener("blur", T, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Zs = c( (YV, Qs) => {
        "use strict";
        var $s = De();
        $s.define("focus", Qs.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }
            function i(a) {
                n(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && $s.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var tu = c( ($V, eu) => {
        "use strict";
        var ki = window.jQuery
          , nt = {}
          , cn = []
          , Js = ".w-ix"
          , ln = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                ki(t).triggerHandler(nt.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                ki(t).triggerHandler(nt.types.OUTRO))
            }
        };
        nt.triggers = {};
        nt.types = {
            INTRO: "w-ix-intro" + Js,
            OUTRO: "w-ix-outro" + Js
        };
        nt.init = function() {
            for (var e = cn.length, t = 0; t < e; t++) {
                var r = cn[t];
                r[0](0, r[1])
            }
            cn = [],
            ki.extend(nt.triggers, ln)
        }
        ;
        nt.async = function() {
            for (var e in ln) {
                var t = ln[e];
                ln.hasOwnProperty(e) && (nt.triggers[e] = function(r, n) {
                    cn.push([t, n])
                }
                )
            }
        }
        ;
        nt.async();
        eu.exports = nt
    }
    );
    var _r = c( (QV, iu) => {
        "use strict";
        var Gi = tu();
        function ru(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var db = window.jQuery
          , fn = {}
          , nu = ".w-ix"
          , pb = {
            reset: function(e, t) {
                Gi.triggers.reset(e, t)
            },
            intro: function(e, t) {
                Gi.triggers.intro(e, t),
                ru(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                Gi.triggers.outro(e, t),
                ru(t, "COMPONENT_INACTIVE")
            }
        };
        fn.triggers = {};
        fn.types = {
            INTRO: "w-ix-intro" + nu,
            OUTRO: "w-ix-outro" + nu
        };
        db.extend(fn.triggers, pb);
        iu.exports = fn
    }
    );
    var ou = c( (ZV, ft) => {
        function Ui(e) {
            return ft.exports = Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            ft.exports.__esModule = !0,
            ft.exports.default = ft.exports,
            Ui(e)
        }
        ft.exports = Ui,
        ft.exports.__esModule = !0,
        ft.exports.default = ft.exports
    }
    );
    var dn = c( (JV, br) => {
        var gb = ou().default;
        function au(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (au = function(i) {
                return i ? r : t
            }
            )(e)
        }
        function vb(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || gb(e) !== "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = au(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        br.exports = vb,
        br.exports.__esModule = !0,
        br.exports.default = br.exports
    }
    );
    var su = c( (eB, Tr) => {
        function hb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Tr.exports = hb,
        Tr.exports.__esModule = !0,
        Tr.exports.default = Tr.exports
    }
    );
    var Ee = c( (tB, uu) => {
        var pn = function(e) {
            return e && e.Math == Math && e
        };
        uu.exports = pn(typeof globalThis == "object" && globalThis) || pn(typeof window == "object" && window) || pn(typeof self == "object" && self) || pn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var Ht = c( (rB, cu) => {
        cu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var Rt = c( (nB, lu) => {
        var Eb = Ht();
        lu.exports = !Eb(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var gn = c( (iB, fu) => {
        var Ir = Function.prototype.call;
        fu.exports = Ir.bind ? Ir.bind(Ir) : function() {
            return Ir.apply(Ir, arguments)
        }
    }
    );
    var vu = c(gu => {
        "use strict";
        var du = {}.propertyIsEnumerable
          , pu = Object.getOwnPropertyDescriptor
          , mb = pu && !du.call({
            1: 2
        }, 1);
        gu.f = mb ? function(t) {
            var r = pu(this, t);
            return !!r && r.enumerable
        }
        : du
    }
    );
    var Vi = c( (aB, hu) => {
        hu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var ze = c( (sB, mu) => {
        var Eu = Function.prototype
          , Bi = Eu.bind
          , Hi = Eu.call
          , yb = Bi && Bi.bind(Hi);
        mu.exports = Bi ? function(e) {
            return e && yb(Hi, e)
        }
        : function(e) {
            return e && function() {
                return Hi.apply(e, arguments)
            }
        }
    }
    );
    var bu = c( (uB, _u) => {
        var yu = ze()
          , _b = yu({}.toString)
          , bb = yu("".slice);
        _u.exports = function(e) {
            return bb(_b(e), 8, -1)
        }
    }
    );
    var Iu = c( (cB, Tu) => {
        var Tb = Ee()
          , Ib = ze()
          , Ob = Ht()
          , wb = bu()
          , Wi = Tb.Object
          , Ab = Ib("".split);
        Tu.exports = Ob(function() {
            return !Wi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return wb(e) == "String" ? Ab(e, "") : Wi(e)
        }
        : Wi
    }
    );
    var Xi = c( (lB, Ou) => {
        var xb = Ee()
          , Sb = xb.TypeError;
        Ou.exports = function(e) {
            if (e == null)
                throw Sb("Can't call method on " + e);
            return e
        }
    }
    );
    var Or = c( (fB, wu) => {
        var Cb = Iu()
          , Rb = Xi();
        wu.exports = function(e) {
            return Cb(Rb(e))
        }
    }
    );
    var it = c( (dB, Au) => {
        Au.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var Wt = c( (pB, xu) => {
        var Nb = it();
        xu.exports = function(e) {
            return typeof e == "object" ? e !== null : Nb(e)
        }
    }
    );
    var wr = c( (gB, Su) => {
        var ji = Ee()
          , Lb = it()
          , Pb = function(e) {
            return Lb(e) ? e : void 0
        };
        Su.exports = function(e, t) {
            return arguments.length < 2 ? Pb(ji[e]) : ji[e] && ji[e][t]
        }
    }
    );
    var Ru = c( (vB, Cu) => {
        var qb = ze();
        Cu.exports = qb({}.isPrototypeOf)
    }
    );
    var Lu = c( (hB, Nu) => {
        var Mb = wr();
        Nu.exports = Mb("navigator", "userAgent") || ""
    }
    );
    var Gu = c( (EB, ku) => {
        var Du = Ee(), zi = Lu(), Pu = Du.process, qu = Du.Deno, Mu = Pu && Pu.versions || qu && qu.version, Fu = Mu && Mu.v8, Ke, vn;
        Fu && (Ke = Fu.split("."),
        vn = Ke[0] > 0 && Ke[0] < 4 ? 1 : +(Ke[0] + Ke[1]));
        !vn && zi && (Ke = zi.match(/Edge\/(\d+)/),
        (!Ke || Ke[1] >= 74) && (Ke = zi.match(/Chrome\/(\d+)/),
        Ke && (vn = +Ke[1])));
        ku.exports = vn
    }
    );
    var Ki = c( (mB, Vu) => {
        var Uu = Gu()
          , Fb = Ht();
        Vu.exports = !!Object.getOwnPropertySymbols && !Fb(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Uu && Uu < 41
        })
    }
    );
    var Yi = c( (yB, Bu) => {
        var Db = Ki();
        Bu.exports = Db && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var $i = c( (_B, Hu) => {
        var kb = Ee()
          , Gb = wr()
          , Ub = it()
          , Vb = Ru()
          , Bb = Yi()
          , Hb = kb.Object;
        Hu.exports = Bb ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = Gb("Symbol");
            return Ub(t) && Vb(t.prototype, Hb(e))
        }
    }
    );
    var Xu = c( (bB, Wu) => {
        var Wb = Ee()
          , Xb = Wb.String;
        Wu.exports = function(e) {
            try {
                return Xb(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var zu = c( (TB, ju) => {
        var jb = Ee()
          , zb = it()
          , Kb = Xu()
          , Yb = jb.TypeError;
        ju.exports = function(e) {
            if (zb(e))
                return e;
            throw Yb(Kb(e) + " is not a function")
        }
    }
    );
    var Yu = c( (IB, Ku) => {
        var $b = zu();
        Ku.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : $b(r)
        }
    }
    );
    var Qu = c( (OB, $u) => {
        var Qb = Ee()
          , Qi = gn()
          , Zi = it()
          , Ji = Wt()
          , Zb = Qb.TypeError;
        $u.exports = function(e, t) {
            var r, n;
            if (t === "string" && Zi(r = e.toString) && !Ji(n = Qi(r, e)) || Zi(r = e.valueOf) && !Ji(n = Qi(r, e)) || t !== "string" && Zi(r = e.toString) && !Ji(n = Qi(r, e)))
                return n;
            throw Zb("Can't convert object to primitive value")
        }
    }
    );
    var Ju = c( (wB, Zu) => {
        Zu.exports = !1
    }
    );
    var hn = c( (AB, tc) => {
        var ec = Ee()
          , Jb = Object.defineProperty;
        tc.exports = function(e, t) {
            try {
                Jb(ec, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                ec[e] = t
            }
            return t
        }
    }
    );
    var En = c( (xB, nc) => {
        var eT = Ee()
          , tT = hn()
          , rc = "__core-js_shared__"
          , rT = eT[rc] || tT(rc, {});
        nc.exports = rT
    }
    );
    var eo = c( (SB, oc) => {
        var nT = Ju()
          , ic = En();
        (oc.exports = function(e, t) {
            return ic[e] || (ic[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: nT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var sc = c( (CB, ac) => {
        var iT = Ee()
          , oT = Xi()
          , aT = iT.Object;
        ac.exports = function(e) {
            return aT(oT(e))
        }
    }
    );
    var yt = c( (RB, uc) => {
        var sT = ze()
          , uT = sc()
          , cT = sT({}.hasOwnProperty);
        uc.exports = Object.hasOwn || function(t, r) {
            return cT(uT(t), r)
        }
    }
    );
    var to = c( (NB, cc) => {
        var lT = ze()
          , fT = 0
          , dT = Math.random()
        cc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + pT(++fT + dT, 36)
        }
    }
    );
    var ro = c( (LB, gc) => {
        var gT = Ee()
          , vT = eo()
          , lc = yt()
          , hT = to()
          , fc = Ki()
          , pc = Yi()
          , Xt = vT("wks")
          , Nt = gT.Symbol
          , dc = Nt && Nt.for
          , ET = pc ? Nt : Nt && Nt.withoutSetter || hT;
        gc.exports = function(e) {
            if (!lc(Xt, e) || !(fc || typeof Xt[e] == "string")) {
                var t = "Symbol." + e;
                fc && lc(Nt, e) ? Xt[e] = Nt[e] : pc && dc ? Xt[e] = dc(t) : Xt[e] = ET(t)
            }
            return Xt[e]
        }
    }
    );
    var mc = c( (PB, Ec) => {
        var mT = Ee()
          , yT = gn()
          , vc = Wt()
          , hc = $i()
          , _T = Yu()
          , bT = Qu()
          , TT = ro()
          , IT = mT.TypeError
          , OT = TT("toPrimitive");
        Ec.exports = function(e, t) {
            if (!vc(e) || hc(e))
                return e;
            var r = _T(e, OT), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = yT(r, e, t),
                !vc(n) || hc(n))
                    return n;
                throw IT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            bT(e, t)
        }
    }
    );
    var no = c( (qB, yc) => {
        var wT = mc()
          , AT = $i();
        yc.exports = function(e) {
            var t = wT(e, "string");
            return AT(t) ? t : t + ""
        }
    }
    );
    var oo = c( (MB, bc) => {
        var xT = Ee()
          , _c = Wt()
          , io = xT.document
          , ST = _c(io) && _c(io.createElement);
        bc.exports = function(e) {
            return ST ? io.createElement(e) : {}
        }
    }
    );
    var ao = c( (FB, Tc) => {
        var CT = Rt()
          , RT = Ht()
          , NT = oo();
        Tc.exports = !CT && !RT(function() {
            return Object.defineProperty(NT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var so = c(Oc => {
        var LT = Rt()
          , PT = gn()
          , qT = vu()
          , MT = Vi()
          , FT = Or()
          , DT = no()
          , kT = yt()
          , GT = ao()
          , Ic = Object.getOwnPropertyDescriptor;
        Oc.f = LT ? Ic : function(t, r) {
            if (t = FT(t),
            r = DT(r),
            GT)
                try {
                    return Ic(t, r)
                } catch {}
            if (kT(t, r))
                return MT(!PT(qT.f, t, r), t[r])
        }
    }
    );
    var Ar = c( (kB, Ac) => {
        var wc = Ee()
          , UT = Wt()
          , VT = wc.String
          , BT = wc.TypeError;
        Ac.exports = function(e) {
            if (UT(e))
                return e;
            throw BT(VT(e) + " is not an object")
        }
    }
    );
    var xr = c(Cc => {
        var HT = Ee()
          , WT = Rt()
          , XT = ao()
          , xc = Ar()
          , jT = no()
          , zT = HT.TypeError
          , Sc = Object.defineProperty;
        Cc.f = WT ? Sc : function(t, r, n) {
            if (xc(t),
            r = jT(r),
            xc(n),
            XT)
                try {
                    return Sc(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw zT("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var mn = c( (UB, Rc) => {
        var KT = Rt()
          , YT = xr()
          , $T = Vi();
        Rc.exports = KT ? function(e, t, r) {
            return YT.f(e, t, $T(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var co = c( (VB, Nc) => {
        var QT = ze()
          , ZT = it()
          , uo = En()
          , JT = QT(Function.toString);
        ZT(uo.inspectSource) || (uo.inspectSource = function(e) {
            return JT(e)
        }
        );
        Nc.exports = uo.inspectSource
    }
    );
    var qc = c( (BB, Pc) => {
        var eI = Ee()
          , tI = it()
          , rI = co()
          , Lc = eI.WeakMap;
        Pc.exports = tI(Lc) && /native code/.test(rI(Lc))
    }
    );
    var lo = c( (HB, Fc) => {
        var nI = eo()
          , iI = to()
          , Mc = nI("keys");
        Fc.exports = function(e) {
            return Mc[e] || (Mc[e] = iI(e))
        }
    }
    );
    var yn = c( (WB, Dc) => {
        Dc.exports = {}
    }
    );
    var Hc = c( (XB, Bc) => {
        var oI = qc(), Vc = Ee(), fo = ze(), aI = Wt(), sI = mn(), po = yt(), go = En(), uI = lo(), cI = yn(), kc = "Object already initialized", ho = Vc.TypeError, lI = Vc.WeakMap, _n, Sr, bn, fI = function(e) {
            return bn(e) ? Sr(e) : _n(e, {})
        }, dI = function(e) {
            return function(t) {
                var r;
                if (!aI(t) || (r = Sr(t)).type !== e)
                    throw ho("Incompatible receiver, " + e + " required");
                return r
            }
        };
        oI || go.state ? (_t = go.state || (go.state = new lI),
        Gc = fo(_t.get),
        vo = fo(_t.has),
        Uc = fo(_t.set),
        _n = function(e, t) {
            if (vo(_t, e))
                throw new ho(kc);
            return t.facade = e,
            Uc(_t, e, t),
            t
        }
        ,
        Sr = function(e) {
            return Gc(_t, e) || {}
        }
        ,
        bn = function(e) {
            return vo(_t, e)
        }
        ) : (Lt = uI("state"),
        cI[Lt] = !0,
        _n = function(e, t) {
            if (po(e, Lt))
                throw new ho(kc);
            return t.facade = e,
            sI(e, Lt, t),
            t
        }
        ,
        Sr = function(e) {
            return po(e, Lt) ? e[Lt] : {}
        }
        ,
        bn = function(e) {
            return po(e, Lt)
        }
        );
        var _t, Gc, vo, Uc, Lt;
        Bc.exports = {
            set: _n,
            get: Sr,
            has: bn,
            enforce: fI,
            getterFor: dI
        }
    }
    );
    var jc = c( (jB, Xc) => {
        var Eo = Rt()
          , pI = yt()
          , Wc = Function.prototype
          , gI = Eo && Object.getOwnPropertyDescriptor
          , mo = pI(Wc, "name")
          , vI = mo && function() {}
        .name === "something"
          , hI = mo && (!Eo || Eo && gI(Wc, "name").configurable);
        Xc.exports = {
            EXISTS: mo,
            PROPER: vI,
            CONFIGURABLE: hI
        }
    }
    );
    var Qc = c( (zB, $c) => {
        var EI = Ee()
          , zc = it()
          , mI = yt()
          , Kc = mn()
          , yI = hn()
          , _I = co()
          , Yc = Hc()
          , bI = jc().CONFIGURABLE
          , TI = Yc.get
          , II = Yc.enforce
          , OI = String(String).split("String");
        ($c.exports = function(e, t, r, n) {
            var i = n ? !!n.unsafe : !1, o = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, u;
            if (zc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!mI(r, "name") || bI && r.name !== s) && Kc(r, "name", s),
            u = II(r),
            u.source || (u.source = OI.join(typeof s == "string" ? s : ""))),
            e === EI) {
                o ? e[t] = r : yI(t, r);
                return
            } else
                i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Kc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return zc(this) && TI(this).source || _I(this)
        })
    }
    );
    var yo = c( (KB, Zc) => {
        var wI = Math.ceil
          , AI = Math.floor;
        Zc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? AI : wI)(t)
        }
    }
    );
    var el = c( (YB, Jc) => {
        var xI = yo()
          , SI = Math.max
          , CI = Math.min;
        Jc.exports = function(e, t) {
            var r = xI(e);
            return r < 0 ? SI(r + t, 0) : CI(r, t)
        }
    }
    );
    var rl = c( ($B, tl) => {
        var RI = yo()
          , NI = Math.min;
        tl.exports = function(e) {
            return e > 0 ? NI(RI(e), 9007199254740991) : 0
        }
    }
    );
    var il = c( (QB, nl) => {
        var LI = rl();
        nl.exports = function(e) {
            return LI(e.length)
        }
    }
    );
    var _o = c( (ZB, al) => {
        var PI = Or()
          , qI = el()
          , MI = il()
          , ol = function(e) {
            return function(t, r, n) {
                var i = PI(t), o = MI(i), a = qI(n, o), s;
                if (e && r != r) {
                    for (; o > a; )
                        if (s = i[a++],
                        s != s)
                            return !0
                } else
                    for (; o > a; a++)
                        if ((e || a in i) && i[a] === r)
                            return e || a || 0;
                return !e && -1
            }
        };
        al.exports = {
            includes: ol(!0),
            indexOf: ol(!1)
        }
    }
    );
    var To = c( (JB, ul) => {
        var FI = ze()
          , bo = yt()
          , DI = Or()
          , kI = _o().indexOf
          , GI = yn()
          , sl = FI([].push);
        ul.exports = function(e, t) {
            var r = DI(e), n = 0, i = [], o;
            for (o in r)
                !bo(GI, o) && bo(r, o) && sl(i, o);
            for (; t.length > n; )
                bo(r, o = t[n++]) && (~kI(i, o) || sl(i, o));
            return i
        }
    }
    );
    var Tn = c( (eH, cl) => {
        cl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var fl = c(ll => {
        var UI = To()
          , VI = Tn()
          , BI = VI.concat("length", "prototype");
        ll.f = Object.getOwnPropertyNames || function(t) {
            return UI(t, BI)
        }
    }
    );
    var pl = c(dl => {
        dl.f = Object.getOwnPropertySymbols
    }
    );
    var vl = c( (nH, gl) => {
        var HI = wr()
          , WI = ze()
          , XI = fl()
          , jI = pl()
          , zI = Ar()
          , KI = WI([].concat);
        gl.exports = HI("Reflect", "ownKeys") || function(t) {
            var r = XI.f(zI(t))
              , n = jI.f;
            return n ? KI(r, n(t)) : r
        }
    }
    );
    var El = c( (iH, hl) => {
        var YI = yt()
          , $I = vl()
          , QI = so()
          , ZI = xr();
        hl.exports = function(e, t) {
            for (var r = $I(t), n = ZI.f, i = QI.f, o = 0; o < r.length; o++) {
                var a = r[o];
                YI(e, a) || n(e, a, i(t, a))
            }
        }
    }
    );
    var yl = c( (oH, ml) => {
        var JI = Ht()
          , eO = it()
          , tO = /#|\.prototype\./
          , Cr = function(e, t) {
            var r = nO[rO(e)];
            return r == oO ? !0 : r == iO ? !1 : eO(t) ? JI(t) : !!t
        }
          , rO = Cr.normalize = function(e) {
            return String(e).replace(tO, ".").toLowerCase()
        }
          , nO = Cr.data = {}
          , iO = Cr.NATIVE = "N"
          , oO = Cr.POLYFILL = "P";
        ml.exports = Cr
    }
    );
    var bl = c( (aH, _l) => {
        var Io = Ee()
          , aO = so().f
          , sO = mn()
          , uO = Qc()
          , cO = hn()
          , lO = El()
          , fO = yl();
        _l.exports = function(e, t) {
            var r = e.target, n = e.global, i = e.stat, o, a, s, u, l, m;
            if (n ? a = Io : i ? a = Io[r] || cO(r, {}) : a = (Io[r] || {}).prototype,
            a)
                for (s in t) {
                    if (l = t[s],
                    e.noTargetGet ? (m = aO(a, s),
                    u = m && m.value) : u = a[s],
                    o = fO(n ? s : r + (i ? "." : "#") + s, e.forced),
                    !o && u !== void 0) {
                        if (typeof l == typeof u)
                            continue;
                        lO(l, u)
                    }
                    (e.sham || u && u.sham) && sO(l, "sham", !0),
                    uO(a, s, l, e)
                }
        }
    }
    );
    var Il = c( (sH, Tl) => {
        var dO = To()
          , pO = Tn();
        Tl.exports = Object.keys || function(t) {
            return dO(t, pO)
        }
    }
    );
    var wl = c( (uH, Ol) => {
        var gO = Rt()
          , vO = xr()
          , hO = Ar()
          , EO = Or()
          , mO = Il();
        Ol.exports = gO ? Object.defineProperties : function(t, r) {
            hO(t);
            for (var n = EO(r), i = mO(r), o = i.length, a = 0, s; o > a; )
                vO.f(t, s = i[a++], n[s]);
            return t
        }
    }
    );
    var xl = c( (cH, Al) => {
        var yO = wr();
        Al.exports = yO("document", "documentElement")
    }
    );
    var Ml = c( (lH, ql) => {
        var _O = Ar(), bO = wl(), Sl = Tn(), TO = yn(), IO = xl(), OO = oo(), wO = lo(), Cl = ">", Rl = "<", wo = "prototype", Ao = "script", Ll = wO("IE_PROTO"), Oo = function() {}, Pl = function(e) {
            return Rl + Ao + Cl + e + Rl + "/" + Ao + Cl
        }, Nl = function(e) {
            e.write(Pl("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, AO = function() {
            var e = OO("iframe"), t = "java" + Ao + ":", r;
            return e.style.display = "none",
            IO.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(Pl("document.F=Object")),
            r.close(),
            r.F
        }, In, On = function() {
            try {
                In = new ActiveXObject("htmlfile")
            } catch {}
            On = typeof document < "u" ? document.domain && In ? Nl(In) : AO() : Nl(In);
            for (var e = Sl.length; e--; )
                delete On[wo][Sl[e]];
            return On()
        };
        TO[Ll] = !0;
        ql.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (Oo[wo] = _O(t),
            n = new Oo,
            Oo[wo] = null,
            n[Ll] = t) : n = On(),
            r === void 0 ? n : bO(n, r)
        }
    }
    );
    var Dl = c( (fH, Fl) => {
        var xO = ro()
          , SO = Ml()
          , CO = xr()
          , xo = xO("unscopables")
          , So = Array.prototype;
        So[xo] == null && CO.f(So, xo, {
            configurable: !0,
            value: SO(null)
        });
        Fl.exports = function(e) {
            So[xo][e] = !0
        }
    }
    );
    var kl = c( () => {
        "use strict";
        var RO = bl()
          , NO = _o().includes
          , LO = Dl();
        RO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return NO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        LO("includes")
    }
    );
    var Ul = c( (gH, Gl) => {
        var PO = Ee()
          , qO = ze();
        Gl.exports = function(e, t) {
            return qO(PO[e].prototype[t])
        }
    }
    );
    var Bl = c( (vH, Vl) => {
        kl();
        var MO = Ul();
        Vl.exports = MO("Array", "includes")
    }
    );
    var Wl = c( (hH, Hl) => {
        var FO = Bl();
        Hl.exports = FO
    }
    );
    var jl = c( (EH, Xl) => {
        var DO = Wl();
        Xl.exports = DO
    }
    );
    var Co = c( (mH, zl) => {
        var kO = typeof global == "object" && global && global.Object === Object && global;
        zl.exports = kO
    }
    );
    var Ye = c( (yH, Kl) => {
        var GO = Co()
          , UO = typeof self == "object" && self && self.Object === Object && self
          , VO = GO || UO || Function("return this")();
        Kl.exports = VO
    }
    );
    var jt = c( (_H, Yl) => {
        var BO = Ye()
          , HO = BO.Symbol;
        Yl.exports = HO
    }
    );
    var Jl = c( (bH, Zl) => {
        var $l = jt()
          , Ql = Object.prototype
          , WO = Ql.hasOwnProperty
          , XO = Ql.toString
          , Rr = $l ? $l.toStringTag : void 0;
        function jO(e) {
            var t = WO.call(e, Rr)
              , r = e[Rr];
            try {
                e[Rr] = void 0;
                var n = !0
            } catch {}
            var i = XO.call(e);
            return n && (t ? e[Rr] = r : delete e[Rr]),
            i
        }
        Zl.exports = jO
    }
    );
    var tf = c( (TH, ef) => {
        var zO = Object.prototype
          , KO = zO.toString;
        function YO(e) {
            return KO.call(e)
        }
        ef.exports = YO
    }
    );
    var bt = c( (IH, of) => {
        var rf = jt()
          , $O = Jl()
          , QO = tf()
          , ZO = "[object Null]"
          , JO = "[object Undefined]"
          , nf = rf ? rf.toStringTag : void 0;
        function ew(e) {
            return e == null ? e === void 0 ? JO : ZO : nf && nf in Object(e) ? $O(e) : QO(e)
        }
        of.exports = ew
    }
    );
    var Ro = c( (OH, af) => {
        function tw(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        af.exports = tw
    }
    );
    var No = c( (wH, sf) => {
        var rw = Ro()
          , nw = rw(Object.getPrototypeOf, Object);
        sf.exports = nw
    }
    );
    var dt = c( (AH, uf) => {
        function iw(e) {
            return e != null && typeof e == "object"
        }
        uf.exports = iw
    }
    );
    var Lo = c( (xH, lf) => {
        var ow = bt()
          , aw = No()
          , sw = dt()
          , uw = "[object Object]"
          , cw = Function.prototype
          , lw = Object.prototype
          , cf = cw.toString
          , fw = lw.hasOwnProperty
          , dw = cf.call(Object);
        function pw(e) {
            if (!sw(e) || ow(e) != uw)
                return !1;
            var t = aw(e);
            if (t === null)
                return !0;
            var r = fw.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && cf.call(r) == dw
        }
        lf.exports = pw
    }
    );
    var ff = c(Po => {
        "use strict";
        Object.defineProperty(Po, "__esModule", {
            value: !0
        });
        Po.default = gw;
        function gw(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var df = c( (Mo, qo) => {
        "use strict";
        Object.defineProperty(Mo, "__esModule", {
            value: !0
        });
        var vw = ff()
          , hw = Ew(vw);
        function Ew(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var zt;
        typeof self < "u" ? zt = self : typeof window < "u" ? zt = window : typeof global < "u" ? zt = global : typeof qo < "u" ? zt = qo : zt = Function("return this")();
        var mw = (0,
        hw.default)(zt);
        Mo.default = mw
    }
    );
    var Fo = c(Nr => {
        "use strict";
        Nr.__esModule = !0;
        Nr.ActionTypes = void 0;
        Nr.default = hf;
        var yw = Lo()
          , _w = vf(yw)
          , bw = df()
          , pf = vf(bw);
        function vf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var gf = Nr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function hf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(hf)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , a = []
              , s = a
              , u = !1;
            function l() {
                s === a && (s = a.slice())
            }
            function m() {
                return o
            }
            function p(b) {
                if (typeof b != "function")
                    throw new Error("Expected listener to be a function.");
                var w = !0;
                return l(),
                s.push(b),
                function() {
                    if (w) {
                        w = !1,
                        l();
                        var C = s.indexOf(b);
                        s.splice(C, 1)
                    }
                }
            }
            function g(b) {
                if (!(0,
                _w.default)(b))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof b.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0,
                    o = i(o, b)
                } finally {
                    u = !1
                }
                for (var w = a = s, _ = 0; _ < w.length; _++)
                    w[_]();
                return b
            }
            function h(b) {
                if (typeof b != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = b,
                g({
                    type: gf.INIT
                })
            }
            function T() {
                var b, w = p;
                return b = {
                    subscribe: function(C) {
                        if (typeof C != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function x() {
                            C.next && C.next(m())
                        }
                        x();
                        var N = w(x);
                        return {
                            unsubscribe: N
                        }
                    }
                },
                b[pf.default] = function() {
                    return this
                }
                ,
                b
            }
            return g({
                type: gf.INIT
            }),
            n = {
                dispatch: g,
                subscribe: p,
                getState: m,
                replaceReducer: h
            },
            n[pf.default] = T,
            n
        }
    }
    );
    var ko = c(Do => {
        "use strict";
        Do.__esModule = !0;
        Do.default = Tw;
        function Tw(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var yf = c(Go => {
        "use strict";
        Go.__esModule = !0;
        Go.default = xw;
        var Ef = Fo()
          , Iw = Lo()
          , NH = mf(Iw)
          , Ow = ko()
          , LH = mf(Ow);
        function mf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function ww(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function Aw(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: Ef.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + Ef.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function xw(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                Aw(r)
            } catch (u) {
                s = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , m = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var p;
                for (var g = !1, h = {}, T = 0; T < o.length; T++) {
                    var b = o[T]
                      , w = r[b]
                      , _ = l[b]
                      , C = w(_, m);
                    if (typeof C > "u") {
                        var x = ww(b, m);
                        throw new Error(x)
                    }
                    h[b] = C,
                    g = g || C !== _
                }
                return g ? h : l
            }
        }
    }
    );
    var bf = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = Sw;
        function _f(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function Sw(e, t) {
            if (typeof e == "function")
                return _f(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i]
                  , a = e[o];
                typeof a == "function" && (n[o] = _f(a, t))
            }
            return n
        }
    }
    );
    var Bo = c(Vo => {
        "use strict";
        Vo.__esModule = !0;
        Vo.default = Cw;
        function Cw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var Tf = c(Ho => {
        "use strict";
        Ho.__esModule = !0;
        var Rw = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        Ho.default = qw;
        var Nw = Bo()
          , Lw = Pw(Nw);
        function Pw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function qw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a)
                      , u = s.dispatch
                      , l = []
                      , m = {
                        getState: s.getState,
                        dispatch: function(g) {
                            return u(g)
                        }
                    };
                    return l = t.map(function(p) {
                        return p(m)
                    }),
                    u = Lw.default.apply(void 0, l)(s.dispatch),
                    Rw({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    }
    );
    var Wo = c(Be => {
        "use strict";
        Be.__esModule = !0;
        Be.compose = Be.applyMiddleware = Be.bindActionCreators = Be.combineReducers = Be.createStore = void 0;
        var Mw = Fo()
          , Fw = Kt(Mw)
          , Dw = yf()
          , kw = Kt(Dw)
          , Gw = bf()
          , Uw = Kt(Gw)
          , Vw = Tf()
          , Bw = Kt(Vw)
          , Hw = Bo()
          , Ww = Kt(Hw)
          , Xw = ko()
          , DH = Kt(Xw);
        function Kt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Be.createStore = Fw.default;
        Be.combineReducers = kw.default;
        Be.bindActionCreators = Uw.default;
        Be.applyMiddleware = Bw.default;
        Be.compose = Ww.default
    }
    );
    var $e, Xo, ot, jw, zw, wn, Kw, jo = he( () => {
        "use strict";
        $e = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        Xo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        ot = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        jw = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        zw = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        wn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        Kw = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var ke, Yw, An = he( () => {
        "use strict";
        ke = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        Yw = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var $w, If = he( () => {
        "use strict";
        $w = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var Qw, Zw, Jw, e0, t0, r0, n0, zo, Of = he( () => {
        "use strict";
        An();
        ({TRANSFORM_MOVE: Qw, TRANSFORM_SCALE: Zw, TRANSFORM_ROTATE: Jw, TRANSFORM_SKEW: e0, STYLE_SIZE: t0, STYLE_FILTER: r0, STYLE_FONT_VARIATION: n0} = ke),
        zo = {
            [Qw]: !0,
            [Zw]: !0,
            [Jw]: !0,
            [e0]: !0,
            [t0]: !0,
            [r0]: !0,
            [n0]: !0
        }
    }
    );
    var Ie = {};
    Fe(Ie, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => _0,
        IX2_ANIMATION_FRAME_CHANGED: () => g0,
        IX2_CLEAR_REQUESTED: () => f0,
        IX2_ELEMENT_STATE_CHANGED: () => y0,
        IX2_EVENT_LISTENER_ADDED: () => d0,
        IX2_EVENT_STATE_CHANGED: () => p0,
        IX2_INSTANCE_ADDED: () => h0,
        IX2_INSTANCE_REMOVED: () => m0,
        IX2_INSTANCE_STARTED: () => E0,
        IX2_MEDIA_QUERIES_DEFINED: () => T0,
        IX2_PARAMETER_CHANGED: () => v0,
        IX2_PLAYBACK_REQUESTED: () => c0,
        IX2_PREVIEW_REQUESTED: () => u0,
        IX2_RAW_DATA_IMPORTED: () => i0,
        IX2_SESSION_INITIALIZED: () => o0,
        IX2_SESSION_STARTED: () => a0,
        IX2_SESSION_STOPPED: () => s0,
        IX2_STOP_REQUESTED: () => l0,
        IX2_TEST_FRAME_RENDERED: () => I0,
        IX2_VIEWPORT_WIDTH_CHANGED: () => b0
    });
    var i0, o0, a0, s0, u0, c0, l0, f0, d0, p0, g0, v0, h0, E0, m0, y0, _0, b0, T0, I0, wf = he( () => {
        "use strict";
        i0 = "IX2_RAW_DATA_IMPORTED",
        o0 = "IX2_SESSION_INITIALIZED",
        a0 = "IX2_SESSION_STARTED",
        s0 = "IX2_SESSION_STOPPED",
        u0 = "IX2_PREVIEW_REQUESTED",
        c0 = "IX2_PLAYBACK_REQUESTED",
        l0 = "IX2_STOP_REQUESTED",
        f0 = "IX2_CLEAR_REQUESTED",
        d0 = "IX2_EVENT_LISTENER_ADDED",
        p0 = "IX2_EVENT_STATE_CHANGED",
        g0 = "IX2_ANIMATION_FRAME_CHANGED",
        v0 = "IX2_PARAMETER_CHANGED",
        h0 = "IX2_INSTANCE_ADDED",
        E0 = "IX2_INSTANCE_STARTED",
        m0 = "IX2_INSTANCE_REMOVED",
        y0 = "IX2_ELEMENT_STATE_CHANGED",
        _0 = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        b0 = "IX2_VIEWPORT_WIDTH_CHANGED",
        T0 = "IX2_MEDIA_QUERIES_DEFINED",
        I0 = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var Ce = {};
    Fe(Ce, {
        ABSTRACT_NODE: () => bA,
        AUTO: () => lA,
        BACKGROUND: () => iA,
        BACKGROUND_COLOR: () => nA,
        BAR_DELIMITER: () => pA,
        BORDER_COLOR: () => oA,
        BOUNDARY_SELECTOR: () => S0,
        CHILDREN: () => gA,
        COLON_DELIMITER: () => dA,
        COLOR: () => aA,
        COMMA_DELIMITER: () => fA,
        CONFIG_UNIT: () => F0,
        CONFIG_VALUE: () => L0,
        CONFIG_X_UNIT: () => P0,
        CONFIG_X_VALUE: () => C0,
        CONFIG_Y_UNIT: () => q0,
        CONFIG_Y_VALUE: () => R0,
        CONFIG_Z_UNIT: () => M0,
        CONFIG_Z_VALUE: () => N0,
        DISPLAY: () => sA,
        FILTER: () => J0,
        FLEX: () => uA,
        FONT_VARIATION_SETTINGS: () => eA,
        HEIGHT: () => rA,
        HTML_ELEMENT: () => yA,
        IMMEDIATE_CHILDREN: () => vA,
        IX2_ID_DELIMITER: () => O0,
        OPACITY: () => Z0,
        PARENT: () => EA,
        PLAIN_OBJECT: () => _A,
        PRESERVE_3D: () => mA,
        RENDER_GENERAL: () => IA,
        RENDER_PLUGIN: () => wA,
        RENDER_STYLE: () => OA,
        RENDER_TRANSFORM: () => TA,
        ROTATE_X: () => j0,
        ROTATE_Y: () => z0,
        ROTATE_Z: () => K0,
        SCALE_3D: () => X0,
        SCALE_X: () => B0,
        SCALE_Y: () => H0,
        SCALE_Z: () => W0,
        SIBLINGS: () => hA,
        SKEW: () => Y0,
        SKEW_X: () => $0,
        SKEW_Y: () => Q0,
        TRANSFORM: () => D0,
        TRANSLATE_3D: () => V0,
        TRANSLATE_X: () => k0,
        TRANSLATE_Y: () => G0,
        TRANSLATE_Z: () => U0,
        WF_PAGE: () => w0,
        WIDTH: () => tA,
        WILL_CHANGE: () => cA,
        W_MOD_IX: () => x0,
        W_MOD_JS: () => A0
    });
    var O0, w0, A0, x0, S0, C0, R0, N0, L0, P0, q0, M0, F0, D0, k0, G0, U0, V0, B0, H0, W0, X0, j0, z0, K0, Y0, $0, Q0, Z0, J0, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, gA, vA, hA, EA, mA, yA, _A, bA, TA, IA, OA, wA, Af = he( () => {
        "use strict";
        O0 = "|",
        w0 = "data-wf-page",
        A0 = "w-mod-js",
        x0 = "w-mod-ix",
        S0 = ".w-dyn-item",
        C0 = "xValue",
        R0 = "yValue",
        N0 = "zValue",
        L0 = "value",
        P0 = "xUnit",
        q0 = "yUnit",
        M0 = "zUnit",
        F0 = "unit",
        D0 = "transform",
        k0 = "translateX",
        G0 = "translateY",
        U0 = "translateZ",
        V0 = "translate3d",
        B0 = "scaleX",
        H0 = "scaleY",
        W0 = "scaleZ",
        X0 = "scale3d",
        j0 = "rotateX",
        z0 = "rotateY",
        K0 = "rotateZ",
        Y0 = "skew",
        $0 = "skewX",
        Q0 = "skewY",
        Z0 = "opacity",
        J0 = "filter",
        eA = "font-variation-settings",
        tA = "width",
        rA = "height",
        nA = "backgroundColor",
        iA = "background",
        oA = "borderColor",
        aA = "color",
        sA = "display",
        uA = "flex",
        cA = "willChange",
        lA = "AUTO",
        fA = ",",
        dA = ":",
        pA = "|",
        gA = "CHILDREN",
        vA = "IMMEDIATE_CHILDREN",
        hA = "SIBLINGS",
        EA = "PARENT",
        mA = "preserve-3d",
        yA = "HTML_ELEMENT",
        _A = "PLAIN_OBJECT",
        bA = "ABSTRACT_NODE",
        TA = "RENDER_TRANSFORM",
        IA = "RENDER_GENERAL",
        OA = "RENDER_STYLE",
        wA = "RENDER_PLUGIN"
    }
    );
    var xf = {};
    Fe(xf, {
        ActionAppliesTo: () => Yw,
        ActionTypeConsts: () => ke,
        EventAppliesTo: () => Xo,
        EventBasedOn: () => ot,
        EventContinuousMouseAxes: () => jw,
        EventLimitAffectedElements: () => zw,
        EventTypeConsts: () => $e,
        IX2EngineActionTypes: () => Ie,
        IX2EngineConstants: () => Ce,
        InteractionTypeConsts: () => $w,
        QuickEffectDirectionConsts: () => Kw,
        QuickEffectIds: () => wn,
        ReducedMotionTypes: () => zo
    });
    var Ge = he( () => {
        "use strict";
        jo();
        An();
        If();
        Of();
        wf();
        Af();
        An();
        jo()
    }
    );
    var AA, Sf, Cf = he( () => {
        "use strict";
        Ge();
        ({IX2_RAW_DATA_IMPORTED: AA} = Ie),
        Sf = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case AA:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var Yt = c(ye => {
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var xA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        ye.clone = Sn;
        ye.addLast = Lf;
        ye.addFirst = Pf;
        ye.removeLast = qf;
        ye.removeFirst = Mf;
        ye.insert = Ff;
        ye.removeAt = Df;
        ye.replaceAt = kf;
        ye.getIn = Cn;
        ye.set = Rn;
        ye.setIn = Nn;
        ye.update = Uf;
        ye.updateIn = Vf;
        ye.merge = Bf;
        ye.mergeDeep = Hf;
        ye.mergeIn = Wf;
        ye.omit = Xf;
        ye.addDefaults = jf;
        var Rf = "INVALID_ARGS";
        function Nf(e) {
            throw new Error(e)
        }
        function Ko(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var SA = {}.hasOwnProperty;
        function Sn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = Ko(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }
        function Ue(e, t, r) {
            var n = r;
            n == null && Nf(Rf);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
                a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var m = Ko(l);
                    if (m.length)
                        for (var p = 0; p <= m.length; p++) {
                            var g = m[p];
                            if (!(e && n[g] !== void 0)) {
                                var h = l[g];
                                t && xn(n[g]) && xn(h) && (h = Ue(e, t, n[g], h)),
                                !(h === void 0 || h === n[g]) && (i || (i = !0,
                                n = Sn(n)),
                                n[g] = h)
                            }
                        }
                }
            }
            return n
        }
        function xn(e) {
            var t = typeof e > "u" ? "undefined" : xA(e);
            return e != null && (t === "object" || t === "function")
        }
        function Lf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function Pf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function qf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Mf(e) {
            return e.length ? e.slice(1) : e
        }
        function Ff(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Df(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function kf(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++)
                i[o] = e[o];
            return i[t] = r,
            i
        }
        function Cn(e, t) {
            if (!Array.isArray(t) && Nf(Rf),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function Rn(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , i = e ?? n;
            if (i[t] === r)
                return i;
            var o = Sn(i);
            return o[t] = r,
            o
        }
        function Gf(e, t, r, n) {
            var i = void 0
              , o = t[n];
            if (n === t.length - 1)
                i = r;
            else {
                var a = xn(e) && xn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Gf(a, t, r, n + 1)
            }
            return Rn(e, o, i)
        }
        function Nn(e, t, r) {
            return t.length ? Gf(e, t, r, 0) : r
        }
        function Uf(e, t, r) {
            var n = e?.[t]
              , i = r(n);
            return Rn(e, t, i)
        }
        function Vf(e, t, r) {
            var n = Cn(e, t)
              , i = r(n);
            return Nn(e, t, i)
        }
        function Bf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ue(!1, !1, e, t, r, n, i, o)
        }
        function Hf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ue(!1, !0, e, t, r, n, i, o)
        }
        function Wf(e, t, r, n, i, o, a) {
            var s = Cn(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, m = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++)
                m[p - 7] = arguments[p];
            return m.length ? u = Ue.call.apply(Ue, [null, !1, !1, s, r, n, i, o, a].concat(m)) : u = Ue(!1, !1, s, r, n, i, o, a),
            Nn(e, t, u)
        }
        function Xf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (SA.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var o = {}, a = Ko(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }
        function jf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ue(!0, !1, e, t, r, n, i, o)
        }
        var CA = {
            clone: Sn,
            addLast: Lf,
            addFirst: Pf,
            removeLast: qf,
            removeFirst: Mf,
            insert: Ff,
            removeAt: Df,
            replaceAt: kf,
            getIn: Cn,
            set: Rn,
            setIn: Nn,
            update: Uf,
            updateIn: Vf,
            merge: Bf,
            mergeDeep: Hf,
            mergeIn: Wf,
            omit: Xf,
            addDefaults: jf
        };
        ye.default = CA
    }
    );
    var Kf, RA, NA, LA, PA, qA, zf, Yf, $f = he( () => {
        "use strict";
        Ge();
        Kf = le(Yt()),
        {IX2_PREVIEW_REQUESTED: RA, IX2_PLAYBACK_REQUESTED: NA, IX2_STOP_REQUESTED: LA, IX2_CLEAR_REQUESTED: PA} = Ie,
        qA = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        zf = Object.create(null, {
            [RA]: {
                value: "preview"
            },
            [NA]: {
                value: "playback"
            },
            [LA]: {
                value: "stop"
            },
            [PA]: {
                value: "clear"
            }
        }),
        Yf = (e=qA, t) => {
            if (t.type in zf) {
                let r = [zf[t.type]];
                return (0,
                Kf.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var Le, MA, FA, DA, kA, GA, UA, VA, BA, HA, WA, Qf, XA, Zf, Jf = he( () => {
        "use strict";
        Ge();
        Le = le(Yt()),
        {IX2_SESSION_INITIALIZED: MA, IX2_SESSION_STARTED: FA, IX2_TEST_FRAME_RENDERED: DA, IX2_SESSION_STOPPED: kA, IX2_EVENT_LISTENER_ADDED: GA, IX2_EVENT_STATE_CHANGED: UA, IX2_ANIMATION_FRAME_CHANGED: VA, IX2_ACTION_LIST_PLAYBACK_CHANGED: BA, IX2_VIEWPORT_WIDTH_CHANGED: HA, IX2_MEDIA_QUERIES_DEFINED: WA} = Ie,
        Qf = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        XA = 20,
        Zf = (e=Qf, t) => {
            switch (t.type) {
            case MA:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    Le.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case FA:
                return (0,
                Le.set)(e, "active", !0);
            case DA:
                {
                    let {payload: {step: r=XA}} = t;
                    return (0,
                    Le.set)(e, "tick", e.tick + r)
                }
            case kA:
                return Qf;
            case VA:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    Le.set)(e, "tick", r)
                }
            case GA:
                {
                    let r = (0,
                    Le.addLast)(e.eventListeners, t.payload);
                    return (0,
                    Le.set)(e, "eventListeners", r)
                }
            case UA:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    Le.setIn)(e, ["eventState", r], n)
                }
            case BA:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    Le.setIn)(e, ["playbackState", r], n)
                }
            case HA:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , i = n.length
                      , o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: u, max: l} = n[a];
                        if (r >= u && r <= l) {
                            o = s;
                            break
                        }
                    }
                    return (0,
                    Le.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: o
                    })
                }
            case WA:
                return (0,
                Le.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var td = c( (n5, ed) => {
        function jA() {
            this.__data__ = [],
            this.size = 0
        }
        ed.exports = jA
    }
    );
    var Ln = c( (i5, rd) => {
        function zA(e, t) {
            return e === t || e !== e && t !== t
        }
        rd.exports = zA
    }
    );
    var Lr = c( (o5, nd) => {
        var KA = Ln();
        function YA(e, t) {
            for (var r = e.length; r--; )
                if (KA(e[r][0], t))
                    return r;
            return -1
        }
        nd.exports = YA
    }
    );
    var od = c( (a5, id) => {
        var $A = Lr()
          , QA = Array.prototype
          , ZA = QA.splice;
        function JA(e) {
            var t = this.__data__
              , r = $A(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : ZA.call(t, r, 1),
            --this.size,
            !0
        }
        id.exports = JA
    }
    );
    var sd = c( (s5, ad) => {
        var ex = Lr();
        function tx(e) {
            var t = this.__data__
              , r = ex(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        ad.exports = tx
    }
    );
    var cd = c( (u5, ud) => {
        var rx = Lr();
        function nx(e) {
            return rx(this.__data__, e) > -1
        }
        ud.exports = nx
    }
    );
    var fd = c( (c5, ld) => {
        var ix = Lr();
        function ox(e, t) {
            var r = this.__data__
              , n = ix(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        ld.exports = ox
    }
    );
    var Pr = c( (l5, dd) => {
        var ax = td()
          , sx = od()
          , ux = sd()
          , cx = cd()
          , lx = fd();
        function $t(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        $t.prototype.clear = ax;
        $t.prototype.delete = sx;
        $t.prototype.get = ux;
        $t.prototype.has = cx;
        $t.prototype.set = lx;
        dd.exports = $t
    }
    );
    var gd = c( (f5, pd) => {
        var fx = Pr();
        function dx() {
            this.__data__ = new fx,
            this.size = 0
        }
        pd.exports = dx
    }
    );
    var hd = c( (d5, vd) => {
        function px(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        vd.exports = px
    }
    );
    var md = c( (p5, Ed) => {
        function gx(e) {
            return this.__data__.get(e)
        }
        Ed.exports = gx
    }
    );
    var _d = c( (g5, yd) => {
        function vx(e) {
            return this.__data__.has(e)
        }
        yd.exports = vx
    }
    );
    var at = c( (v5, bd) => {
        function hx(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        bd.exports = hx
    }
    );
    var Yo = c( (h5, Td) => {
        var Ex = bt()
          , mx = at()
          , yx = "[object AsyncFunction]"
          , _x = "[object Function]"
          , bx = "[object GeneratorFunction]"
          , Tx = "[object Proxy]";
        function Ix(e) {
            if (!mx(e))
                return !1;
            var t = Ex(e);
            return t == _x || t == bx || t == yx || t == Tx
        }
        Td.exports = Ix
    }
    );
    var Od = c( (E5, Id) => {
        var Ox = Ye()
          , wx = Ox["__core-js_shared__"];
        Id.exports = wx
    }
    );
    var xd = c( (m5, Ad) => {
        var $o = Od()
          , wd = function() {
            var e = /[^.]+$/.exec($o && $o.keys && $o.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function Ax(e) {
            return !!wd && wd in e
        }
        Ad.exports = Ax
    }
    );
    var Qo = c( (y5, Sd) => {
        var xx = Function.prototype
          , Sx = xx.toString;
        function Cx(e) {
            if (e != null) {
                try {
                    return Sx.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Sd.exports = Cx
    }
    );
    var Rd = c( (_5, Cd) => {
        var Rx = Yo()
          , Nx = xd()
          , Lx = at()
          , Px = Qo()
          , qx = /[\\^$.*+?()[\]{}|]/g
          , Mx = /^\[object .+?Constructor\]$/
          , Fx = Function.prototype
          , Dx = Object.prototype
          , kx = Fx.toString
          , Gx = Dx.hasOwnProperty
          , Ux = RegExp("^" + kx.call(Gx).replace(qx, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function Vx(e) {
            if (!Lx(e) || Nx(e))
                return !1;
            var t = Rx(e) ? Ux : Mx;
            return t.test(Px(e))
        }
        Cd.exports = Vx
    }
    );
    var Ld = c( (b5, Nd) => {
        function Bx(e, t) {
            return e?.[t]
        }
        Nd.exports = Bx
    }
    );
    var Tt = c( (T5, Pd) => {
        var Hx = Rd()
          , Wx = Ld();
        function Xx(e, t) {
            var r = Wx(e, t);
            return Hx(r) ? r : void 0
        }
        Pd.exports = Xx
    }
    );
    var Pn = c( (I5, qd) => {
        var jx = Tt()
          , zx = Ye()
          , Kx = jx(zx, "Map");
        qd.exports = Kx
    }
    );
    var qr = c( (O5, Md) => {
        var Yx = Tt()
          , $x = Yx(Object, "create");
        Md.exports = $x
    }
    );
    var kd = c( (w5, Dd) => {
        var Fd = qr();
        function Qx() {
            this.__data__ = Fd ? Fd(null) : {},
            this.size = 0
        }
        Dd.exports = Qx
    }
    );
    var Ud = c( (A5, Gd) => {
        function Zx(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Gd.exports = Zx
    }
    );
    var Bd = c( (x5, Vd) => {
        var Jx = qr()
          , eS = "__lodash_hash_undefined__"
          , tS = Object.prototype
          , rS = tS.hasOwnProperty;
        function nS(e) {
            var t = this.__data__;
            if (Jx) {
                var r = t[e];
                return r === eS ? void 0 : r
            }
            return rS.call(t, e) ? t[e] : void 0
        }
        Vd.exports = nS
    }
    );
    var Wd = c( (S5, Hd) => {
        var iS = qr()
          , oS = Object.prototype
          , aS = oS.hasOwnProperty;
        function sS(e) {
            var t = this.__data__;
            return iS ? t[e] !== void 0 : aS.call(t, e)
        }
        Hd.exports = sS
    }
    );
    var jd = c( (C5, Xd) => {
        var uS = qr()
          , cS = "__lodash_hash_undefined__";
        function lS(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = uS && t === void 0 ? cS : t,
            this
        }
        Xd.exports = lS
    }
    );
    var Kd = c( (R5, zd) => {
        var fS = kd()
          , dS = Ud()
          , pS = Bd()
          , gS = Wd()
          , vS = jd();
        function Qt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = fS;
        Qt.prototype.delete = dS;
        Qt.prototype.get = pS;
        Qt.prototype.has = gS;
        Qt.prototype.set = vS;
        zd.exports = Qt
    }
    );
    var Qd = c( (N5, $d) => {
        var Yd = Kd()
          , hS = Pr()
          , ES = Pn();
        function mS() {
            this.size = 0,
            this.__data__ = {
                hash: new Yd,
                map: new (ES || hS),
                string: new Yd
            }
        }
        $d.exports = mS
    }
    );
    var Jd = c( (L5, Zd) => {
        function yS(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Zd.exports = yS
    }
    );
    var Mr = c( (P5, ep) => {
        var _S = Jd();
        function bS(e, t) {
            var r = e.__data__;
            return _S(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        ep.exports = bS
    }
    );
    var rp = c( (q5, tp) => {
        var TS = Mr();
        function IS(e) {
            var t = TS(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        tp.exports = IS
    }
    );
    var ip = c( (M5, np) => {
        var OS = Mr();
        function wS(e) {
            return OS(this, e).get(e)
        }
        np.exports = wS
    }
    );
    var ap = c( (F5, op) => {
        var AS = Mr();
        function xS(e) {
            return AS(this, e).has(e)
        }
        op.exports = xS
    }
    );
    var up = c( (D5, sp) => {
        var SS = Mr();
        function CS(e, t) {
            var r = SS(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        sp.exports = CS
    }
    );
    var qn = c( (k5, cp) => {
        var RS = Qd()
          , NS = rp()
          , LS = ip()
          , PS = ap()
          , qS = up();
        function Zt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Zt.prototype.clear = RS;
        Zt.prototype.delete = NS;
        Zt.prototype.get = LS;
        Zt.prototype.has = PS;
        Zt.prototype.set = qS;
        cp.exports = Zt
    }
    );
    var fp = c( (G5, lp) => {
        var MS = Pr()
          , FS = Pn()
          , DS = qn()
          , kS = 200;
        function GS(e, t) {
            var r = this.__data__;
            if (r instanceof MS) {
                var n = r.__data__;
                if (!FS || n.length < kS - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new DS(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        lp.exports = GS
    }
    );
    var Zo = c( (U5, dp) => {
        var US = Pr()
          , VS = gd()
          , BS = hd()
          , HS = md()
          , WS = _d()
          , XS = fp();
        function Jt(e) {
            var t = this.__data__ = new US(e);
            this.size = t.size
        }
        Jt.prototype.clear = VS;
        Jt.prototype.delete = BS;
        Jt.prototype.get = HS;
        Jt.prototype.has = WS;
        Jt.prototype.set = XS;
        dp.exports = Jt
    }
    );
    var gp = c( (V5, pp) => {
        var jS = "__lodash_hash_undefined__";
        function zS(e) {
            return this.__data__.set(e, jS),
            this
        }
        pp.exports = zS
    }
    );
    var hp = c( (B5, vp) => {
        function KS(e) {
            return this.__data__.has(e)
        }
        vp.exports = KS
    }
    );
    var mp = c( (H5, Ep) => {
        var YS = qn()
          , $S = gp()
          , QS = hp();
        function Mn(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new YS; ++t < r; )
                this.add(e[t])
        }
        Mn.prototype.add = Mn.prototype.push = $S;
        Mn.prototype.has = QS;
        Ep.exports = Mn
    }
    );
    var _p = c( (W5, yp) => {
        function ZS(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        yp.exports = ZS
    }
    );
    var Tp = c( (X5, bp) => {
        function JS(e, t) {
            return e.has(t)
        }
        bp.exports = JS
    }
    );
    var Jo = c( (j5, Ip) => {
        var eC = mp()
          , tC = _p()
          , rC = Tp()
          , nC = 1
          , iC = 2;
        function oC(e, t, r, n, i, o) {
            var a = r & nC
              , s = e.length
              , u = t.length;
            if (s != u && !(a && u > s))
                return !1;
            var l = o.get(e)
              , m = o.get(t);
            if (l && m)
                return l == t && m == e;
            var p = -1
              , g = !0
              , h = r & iC ? new eC : void 0;
            for (o.set(e, t),
            o.set(t, e); ++p < s; ) {
                var T = e[p]
                  , b = t[p];
                if (n)
                    var w = a ? n(b, T, p, t, e, o) : n(T, b, p, e, t, o);
                if (w !== void 0) {
                    if (w)
                        continue;
                    g = !1;
                    break
                }
                if (h) {
                    if (!tC(t, function(_, C) {
                        if (!rC(h, C) && (T === _ || i(T, _, r, n, o)))
                            return h.push(C)
                    })) {
                        g = !1;
                        break
                    }
                } else if (!(T === b || i(T, b, r, n, o))) {
                    g = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            g
        }
        Ip.exports = oC
    }
    );
    var wp = c( (z5, Op) => {
        var aC = Ye()
          , sC = aC.Uint8Array;
        Op.exports = sC
    }
    );
    var xp = c( (K5, Ap) => {
        function uC(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }),
            r
        }
        Ap.exports = uC
    }
    );
    var Cp = c( (Y5, Sp) => {
        function cC(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        Sp.exports = cC
    }
    );
    var qp = c( ($5, Pp) => {
        var Rp = jt()
          , Np = wp()
          , lC = Ln()
          , fC = Jo()
          , dC = xp()
          , pC = Cp()
          , gC = 1
          , vC = 2
          , hC = "[object Boolean]"
          , EC = "[object Date]"
          , mC = "[object Error]"
          , yC = "[object Map]"
          , _C = "[object Number]"
          , bC = "[object RegExp]"
          , TC = "[object Set]"
          , IC = "[object String]"
          , OC = "[object Symbol]"
          , wC = "[object ArrayBuffer]"
          , AC = "[object DataView]"
          , Lp = Rp ? Rp.prototype : void 0
          , ea = Lp ? Lp.valueOf : void 0;
        function xC(e, t, r, n, i, o, a) {
            switch (r) {
            case AC:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case wC:
                return !(e.byteLength != t.byteLength || !o(new Np(e), new Np(t)));
            case hC:
            case EC:
            case _C:
                return lC(+e, +t);
            case mC:
                return e.name == t.name && e.message == t.message;
            case bC:
            case IC:
                return e == t + "";
            case yC:
                var s = dC;
            case TC:
                var u = n & gC;
                if (s || (s = pC),
                e.size != t.size && !u)
                    return !1;
                var l = a.get(e);
                if (l)
                    return l == t;
                n |= vC,
                a.set(e, t);
                var m = fC(s(e), s(t), n, i, o, a);
                return a.delete(e),
                m;
            case OC:
                if (ea)
                    return ea.call(e) == ea.call(t)
            }
            return !1
        }
        Pp.exports = xC
    }
    );
    var Fn = c( (Q5, Mp) => {
        function SC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
                e[i + r] = t[r];
            return e
        }
        Mp.exports = SC
    }
    );
    var Oe = c( (Z5, Fp) => {
        var CC = Array.isArray;
        Fp.exports = CC
    }
    );
    var ta = c( (J5, Dp) => {
        var RC = Fn()
          , NC = Oe();
        function LC(e, t, r) {
            var n = t(e);
            return NC(e) ? n : RC(n, r(e))
        }
        Dp.exports = LC
    }
    );
    var Gp = c( (eW, kp) => {
        function PC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        kp.exports = PC
    }
    );
    var ra = c( (tW, Up) => {
        function qC() {
            return []
        }
        Up.exports = qC
    }
    );
    var na = c( (rW, Bp) => {
        var MC = Gp()
          , FC = ra()
          , DC = Object.prototype
          , kC = DC.propertyIsEnumerable
          , Vp = Object.getOwnPropertySymbols
          , GC = Vp ? function(e) {
            return e == null ? [] : (e = Object(e),
            MC(Vp(e), function(t) {
                return kC.call(e, t)
            }))
        }
        : FC;
        Bp.exports = GC
    }
    );
    var Wp = c( (nW, Hp) => {
        function UC(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Hp.exports = UC
    }
    );
    var jp = c( (iW, Xp) => {
        var VC = bt()
          , BC = dt()
          , HC = "[object Arguments]";
        function WC(e) {
            return BC(e) && VC(e) == HC
        }
        Xp.exports = WC
    }
    );
    var Fr = c( (oW, Yp) => {
        var zp = jp()
          , XC = dt()
          , Kp = Object.prototype
          , jC = Kp.hasOwnProperty
          , zC = Kp.propertyIsEnumerable
          , KC = zp(function() {
            return arguments
        }()) ? zp : function(e) {
            return XC(e) && jC.call(e, "callee") && !zC.call(e, "callee")
        }
        ;
        Yp.exports = KC
    }
    );
    var Qp = c( (aW, $p) => {
        function YC() {
            return !1
        }
        $p.exports = YC
    }
    );
    var Dn = c( (Dr, er) => {
        var $C = Ye()
          , QC = Qp()
          , eg = typeof Dr == "object" && Dr && !Dr.nodeType && Dr
          , Zp = eg && typeof er == "object" && er && !er.nodeType && er
          , ZC = Zp && Zp.exports === eg
          , Jp = ZC ? $C.Buffer : void 0
          , JC = Jp ? Jp.isBuffer : void 0
          , eR = JC || QC;
        er.exports = eR
    }
    );
    var kn = c( (sW, tg) => {
        var tR = 9007199254740991
          , rR = /^(?:0|[1-9]\d*)$/;
        function nR(e, t) {
            var r = typeof e;
            return t = t ?? tR,
            !!t && (r == "number" || r != "symbol" && rR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        tg.exports = nR
    }
    );
    var Gn = c( (uW, rg) => {
        var iR = 9007199254740991;
        function oR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= iR
        }
        rg.exports = oR
    }
    );
    var ig = c( (cW, ng) => {
        var aR = bt()
          , sR = Gn()
          , uR = dt()
          , cR = "[object Arguments]"
          , lR = "[object Array]"
          , fR = "[object Boolean]"
          , dR = "[object Date]"
          , pR = "[object Error]"
          , gR = "[object Function]"
          , vR = "[object Map]"
          , hR = "[object Number]"
          , ER = "[object Object]"
          , mR = "[object RegExp]"
          , yR = "[object Set]"
          , _R = "[object String]"
          , bR = "[object WeakMap]"
          , TR = "[object ArrayBuffer]"
          , IR = "[object DataView]"
          , OR = "[object Float32Array]"
          , wR = "[object Float64Array]"
          , AR = "[object Int8Array]"
          , xR = "[object Int16Array]"
          , SR = "[object Int32Array]"
          , CR = "[object Uint8Array]"
          , RR = "[object Uint8ClampedArray]"
          , NR = "[object Uint16Array]"
          , LR = "[object Uint32Array]"
          , ve = {};
        ve[OR] = ve[wR] = ve[AR] = ve[xR] = ve[SR] = ve[CR] = ve[RR] = ve[NR] = ve[LR] = !0;
        ve[cR] = ve[lR] = ve[TR] = ve[fR] = ve[IR] = ve[dR] = ve[pR] = ve[gR] = ve[vR] = ve[hR] = ve[ER] = ve[mR] = ve[yR] = ve[_R] = ve[bR] = !1;
        function PR(e) {
            return uR(e) && sR(e.length) && !!ve[aR(e)]
        }
        ng.exports = PR
    }
    );
    var ag = c( (lW, og) => {
        function qR(e) {
            return function(t) {
                return e(t)
            }
        }
        og.exports = qR
    }
    );
    var ug = c( (kr, tr) => {
        var MR = Co()
          , sg = typeof kr == "object" && kr && !kr.nodeType && kr
          , Gr = sg && typeof tr == "object" && tr && !tr.nodeType && tr
          , FR = Gr && Gr.exports === sg
          , ia = FR && MR.process
          , DR = function() {
            try {
                var e = Gr && Gr.require && Gr.require("util").types;
                return e || ia && ia.binding && ia.binding("util")
            } catch {}
        }();
        tr.exports = DR
    }
    );
    var Un = c( (fW, fg) => {
        var kR = ig()
          , GR = ag()
          , cg = ug()
          , lg = cg && cg.isTypedArray
          , UR = lg ? GR(lg) : kR;
        fg.exports = UR
    }
    );
    var oa = c( (dW, dg) => {
        var VR = Wp()
          , BR = Fr()
          , HR = Oe()
          , WR = Dn()
          , XR = kn()
          , jR = Un()
          , zR = Object.prototype
          , KR = zR.hasOwnProperty;
        function YR(e, t) {
            var r = HR(e)
              , n = !r && BR(e)
              , i = !r && !n && WR(e)
              , o = !r && !n && !i && jR(e)
              , a = r || n || i || o
              , s = a ? VR(e.length, String) : []
              , u = s.length;
            for (var l in e)
                (t || KR.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || XR(l, u))) && s.push(l);
            return s
        }
        dg.exports = YR
    }
    );
    var Vn = c( (pW, pg) => {
        var $R = Object.prototype;
        function QR(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || $R;
            return e === r
        }
        pg.exports = QR
    }
    );
    var vg = c( (gW, gg) => {
        var ZR = Ro()
          , JR = ZR(Object.keys, Object);
        gg.exports = JR
    }
    );
    var Bn = c( (vW, hg) => {
        var eN = Vn()
          , tN = vg()
          , rN = Object.prototype
          , nN = rN.hasOwnProperty;
        function iN(e) {
            if (!eN(e))
                return tN(e);
            var t = [];
            for (var r in Object(e))
                nN.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        hg.exports = iN
    }
    );
    var Pt = c( (hW, Eg) => {
        var oN = Yo()
          , aN = Gn();
        function sN(e) {
            return e != null && aN(e.length) && !oN(e)
        }
        Eg.exports = sN
    }
    );
    var Ur = c( (EW, mg) => {
        var uN = oa()
          , cN = Bn()
          , lN = Pt();
        function fN(e) {
            return lN(e) ? uN(e) : cN(e)
        }
        mg.exports = fN
    }
    );
    var _g = c( (mW, yg) => {
        var dN = ta()
          , pN = na()
          , gN = Ur();
        function vN(e) {
            return dN(e, gN, pN)
        }
        yg.exports = vN
    }
    );
    var Ig = c( (yW, Tg) => {
        var bg = _g()
          , hN = 1
          , EN = Object.prototype
          , mN = EN.hasOwnProperty;
        function yN(e, t, r, n, i, o) {
            var a = r & hN
              , s = bg(e)
              , u = s.length
              , l = bg(t)
              , m = l.length;
            if (u != m && !a)
                return !1;
            for (var p = u; p--; ) {
                var g = s[p];
                if (!(a ? g in t : mN.call(t, g)))
                    return !1
            }
            var h = o.get(e)
              , T = o.get(t);
            if (h && T)
                return h == t && T == e;
            var b = !0;
            o.set(e, t),
            o.set(t, e);
            for (var w = a; ++p < u; ) {
                g = s[p];
                var _ = e[g]
                  , C = t[g];
                if (n)
                    var x = a ? n(C, _, g, t, e, o) : n(_, C, g, e, t, o);
                if (!(x === void 0 ? _ === C || i(_, C, r, n, o) : x)) {
                    b = !1;
                    break
                }
                w || (w = g == "constructor")
            }
            if (b && !w) {
                var N = e.constructor
                  , M = t.constructor;
                N != M && "constructor"in e && "constructor"in t && !(typeof N == "function" && N instanceof N && typeof M == "function" && M instanceof M) && (b = !1)
            }
            return o.delete(e),
            o.delete(t),
            b
        }
        Tg.exports = yN
    }
    );
    var wg = c( (_W, Og) => {
        var _N = Tt()
          , bN = Ye()
          , TN = _N(bN, "DataView");
        Og.exports = TN
    }
    );
    var xg = c( (bW, Ag) => {
        var IN = Tt()
          , ON = Ye()
          , wN = IN(ON, "Promise");
        Ag.exports = wN
    }
    );
    var Cg = c( (TW, Sg) => {
        var AN = Tt()
          , xN = Ye()
          , SN = AN(xN, "Set");
        Sg.exports = SN
    }
    );
    var aa = c( (IW, Rg) => {
        var CN = Tt()
          , RN = Ye()
          , NN = CN(RN, "WeakMap");
        Rg.exports = NN
    }
    );
    var Hn = c( (OW, Dg) => {
        var sa = wg()
          , ua = Pn()
          , ca = xg()
          , la = Cg()
          , fa = aa()
          , Fg = bt()
          , rr = Qo()
          , Ng = "[object Map]"
          , LN = "[object Object]"
          , Lg = "[object Promise]"
          , Pg = "[object Set]"
          , qg = "[object WeakMap]"
          , Mg = "[object DataView]"
          , PN = rr(sa)
          , qN = rr(ua)
          , MN = rr(ca)
          , FN = rr(la)
          , DN = rr(fa)
          , qt = Fg;
        (sa && qt(new sa(new ArrayBuffer(1))) != Mg || ua && qt(new ua) != Ng || ca && qt(ca.resolve()) != Lg || la && qt(new la) != Pg || fa && qt(new fa) != qg) && (qt = function(e) {
            var t = Fg(e)
              , r = t == LN ? e.constructor : void 0
              , n = r ? rr(r) : "";
            if (n)
                switch (n) {
                case PN:
                    return Mg;
                case qN:
                    return Ng;
                case MN:
                    return Lg;
                case FN:
                    return Pg;
                case DN:
                    return qg
                }
            return t
        }
        );
        Dg.exports = qt
    }
    );
    var Xg = c( (wW, Wg) => {
        var da = Zo()
          , kN = Jo()
          , GN = qp()
          , UN = Ig()
          , kg = Hn()
          , Gg = Oe()
          , Ug = Dn()
          , VN = Un()
          , BN = 1
          , Vg = "[object Arguments]"
          , Bg = "[object Array]"
          , Wn = "[object Object]"
          , HN = Object.prototype
          , Hg = HN.hasOwnProperty;
        function WN(e, t, r, n, i, o) {
            var a = Gg(e)
              , s = Gg(t)
              , u = a ? Bg : kg(e)
              , l = s ? Bg : kg(t);
            u = u == Vg ? Wn : u,
            l = l == Vg ? Wn : l;
            var m = u == Wn
              , p = l == Wn
              , g = u == l;
            if (g && Ug(e)) {
                if (!Ug(t))
                    return !1;
                a = !0,
                m = !1
            }
            if (g && !m)
                return o || (o = new da),
                a || VN(e) ? kN(e, t, r, n, i, o) : GN(e, t, u, r, n, i, o);
            if (!(r & BN)) {
                var h = m && Hg.call(e, "__wrapped__")
                  , T = p && Hg.call(t, "__wrapped__");
                if (h || T) {
                    var b = h ? e.value() : e
                      , w = T ? t.value() : t;
                    return o || (o = new da),
                    i(b, w, r, n, o)
                }
            }
            return g ? (o || (o = new da),
            UN(e, t, r, n, i, o)) : !1
        }
        Wg.exports = WN
    }
    );
    var pa = c( (AW, Kg) => {
        var XN = Xg()
          , jg = dt();
        function zg(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !jg(e) && !jg(t) ? e !== e && t !== t : XN(e, t, r, n, zg, i)
        }
        Kg.exports = zg
    }
    );
    var $g = c( (xW, Yg) => {
        var jN = Zo()
          , zN = pa()
          , KN = 1
          , YN = 2;
        function $N(e, t, r, n) {
            var i = r.length
              , o = i
              , a = !n;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                s = r[i];
                var u = s[0]
                  , l = e[u]
                  , m = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e))
                        return !1
                } else {
                    var p = new jN;
                    if (n)
                        var g = n(l, m, u, e, t, p);
                    if (!(g === void 0 ? zN(m, l, KN | YN, n, p) : g))
                        return !1
                }
            }
            return !0
        }
        Yg.exports = $N
    }
    );
    var ga = c( (SW, Qg) => {
        var QN = at();
        function ZN(e) {
            return e === e && !QN(e)
        }
        Qg.exports = ZN
    }
    );
    var Jg = c( (CW, Zg) => {
        var JN = ga()
          , eL = Ur();
        function tL(e) {
            for (var t = eL(e), r = t.length; r--; ) {
                var n = t[r]
                  , i = e[n];
                t[r] = [n, i, JN(i)]
            }
            return t
        }
        Zg.exports = tL
    }
    );
    var va = c( (RW, ev) => {
        function rL(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        ev.exports = rL
    }
    );
    var rv = c( (NW, tv) => {
        var nL = $g()
          , iL = Jg()
          , oL = va();
        function aL(e) {
            var t = iL(e);
            return t.length == 1 && t[0][2] ? oL(t[0][0], t[0][1]) : function(r) {
                return r === e || nL(r, e, t)
            }
        }
        tv.exports = aL
    }
    );
    var Vr = c( (LW, nv) => {
        var sL = bt()
          , uL = dt()
          , cL = "[object Symbol]";
        function lL(e) {
            return typeof e == "symbol" || uL(e) && sL(e) == cL
        }
        nv.exports = lL
    }
    );
    var Xn = c( (PW, iv) => {
        var fL = Oe()
          , dL = Vr()
          , pL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , gL = /^\w*$/;
        function vL(e, t) {
            if (fL(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || dL(e) ? !0 : gL.test(e) || !pL.test(e) || t != null && e in Object(t)
        }
        iv.exports = vL
    }
    );
    var sv = c( (qW, av) => {
        var ov = qn()
          , hL = "Expected a function";
        function ha(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(hL);
            var r = function() {
                var n = arguments
                  , i = t ? t.apply(this, n) : n[0]
                  , o = r.cache;
                if (o.has(i))
                    return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o,
                a
            };
            return r.cache = new (ha.Cache || ov),
            r
        }
        ha.Cache = ov;
        av.exports = ha
    }
    );
    var cv = c( (MW, uv) => {
        var EL = sv()
          , mL = 500;
        function yL(e) {
            var t = EL(e, function(n) {
                return r.size === mL && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        uv.exports = yL
    }
    );
    var fv = c( (FW, lv) => {
        var _L = cv()
          , bL = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , TL = /\\(\\)?/g
          , IL = _L(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(bL, function(r, n, i, o) {
                t.push(i ? o.replace(TL, "$1") : n || r)
            }),
            t
        });
        lv.exports = IL
    }
    );
    var Ea = c( (DW, dv) => {
        function OL(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
                i[r] = t(e[r], r, e);
            return i
        }
        dv.exports = OL
    }
    );
    var mv = c( (kW, Ev) => {
        var pv = jt()
          , wL = Ea()
          , AL = Oe()
          , xL = Vr()
          , SL = 1 / 0
          , gv = pv ? pv.prototype : void 0
          , vv = gv ? gv.toString : void 0;
        function hv(e) {
            if (typeof e == "string")
                return e;
            if (AL(e))
                return wL(e, hv) + "";
            if (xL(e))
                return vv ? vv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -SL ? "-0" : t
        }
        Ev.exports = hv
    }
    );
    var _v = c( (GW, yv) => {
        var CL = mv();
        function RL(e) {
            return e == null ? "" : CL(e)
        }
        yv.exports = RL
    }
    );
    var Br = c( (UW, bv) => {
        var NL = Oe()
          , LL = Xn()
          , PL = fv()
          , qL = _v();
        function ML(e, t) {
            return NL(e) ? e : LL(e, t) ? [e] : PL(qL(e))
        }
        bv.exports = ML
    }
    );
    var nr = c( (VW, Tv) => {
        var FL = Vr()
          , DL = 1 / 0;
        function kL(e) {
            if (typeof e == "string" || FL(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -DL ? "-0" : t
        }
        Tv.exports = kL
    }
    );
    var jn = c( (BW, Iv) => {
        var GL = Br()
          , UL = nr();
        function VL(e, t) {
            t = GL(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[UL(t[r++])];
            return r && r == n ? e : void 0
        }
        Iv.exports = VL
    }
    );
    var zn = c( (HW, Ov) => {
        var BL = jn();
        function HL(e, t, r) {
            var n = e == null ? void 0 : BL(e, t);
            return n === void 0 ? r : n
        }
        Ov.exports = HL
    }
    );
    var Av = c( (WW, wv) => {
        function WL(e, t) {
            return e != null && t in Object(e)
        }
        wv.exports = WL
    }
    );
    var Sv = c( (XW, xv) => {
        var XL = Br()
          , jL = Fr()
          , zL = Oe()
          , KL = kn()
          , YL = Gn()
          , $L = nr();
        function QL(e, t, r) {
            t = XL(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i; ) {
                var a = $L(t[n]);
                if (!(o = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length,
            !!i && YL(i) && KL(a, i) && (zL(e) || jL(e)))
        }
        xv.exports = QL
    }
    );
    var Rv = c( (jW, Cv) => {
        var ZL = Av()
          , JL = Sv();
        function eP(e, t) {
            return e != null && JL(e, t, ZL)
        }
        Cv.exports = eP
    }
    );
    var Lv = c( (zW, Nv) => {
        var tP = pa()
          , rP = zn()
          , nP = Rv()
          , iP = Xn()
          , oP = ga()
          , aP = va()
          , sP = nr()
          , uP = 1
          , cP = 2;
        function lP(e, t) {
            return iP(e) && oP(t) ? aP(sP(e), t) : function(r) {
                var n = rP(r, e);
                return n === void 0 && n === t ? nP(r, e) : tP(t, n, uP | cP)
            }
        }
        Nv.exports = lP
    }
    );
    var Kn = c( (KW, Pv) => {
        function fP(e) {
            return e
        }
        Pv.exports = fP
    }
    );
    var ma = c( (YW, qv) => {
        function dP(e) {
            return function(t) {
                return t?.[e]
            }
        }
        qv.exports = dP
    }
    );
    var Fv = c( ($W, Mv) => {
        var pP = jn();
        function gP(e) {
            return function(t) {
                return pP(t, e)
            }
        }
        Mv.exports = gP
    }
    );
    var kv = c( (QW, Dv) => {
        var vP = ma()
          , hP = Fv()
          , EP = Xn()
          , mP = nr();
        function yP(e) {
            return EP(e) ? vP(mP(e)) : hP(e)
        }
        Dv.exports = yP
    }
    );
    var It = c( (ZW, Gv) => {
        var _P = rv()
          , bP = Lv()
          , TP = Kn()
          , IP = Oe()
          , OP = kv();
        function wP(e) {
            return typeof e == "function" ? e : e == null ? TP : typeof e == "object" ? IP(e) ? bP(e[0], e[1]) : _P(e) : OP(e)
        }
        Gv.exports = wP
    }
    );
    var ya = c( (JW, Uv) => {
        var AP = It()
          , xP = Pt()
          , SP = Ur();
        function CP(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!xP(t)) {
                    var o = AP(r, 3);
                    t = SP(t),
                    r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Uv.exports = CP
    }
    );
    var _a = c( (eX, Vv) => {
        function RP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        Vv.exports = RP
    }
    );
    var Hv = c( (tX, Bv) => {
        var NP = /\s/;
        function LP(e) {
            for (var t = e.length; t-- && NP.test(e.charAt(t)); )
                ;
            return t
        }
        Bv.exports = LP
    }
    );
    var Xv = c( (rX, Wv) => {
        var PP = Hv()
          , qP = /^\s+/;
        function MP(e) {
            return e && e.slice(0, PP(e) + 1).replace(qP, "")
        }
        Wv.exports = MP
    }
    );
    var Yn = c( (nX, Kv) => {
        var FP = Xv()
          , jv = at()
          , DP = Vr()
          , zv = 0 / 0
          , kP = /^[-+]0x[0-9a-f]+$/i
          , GP = /^0b[01]+$/i
          , UP = /^0o[0-7]+$/i
          , VP = parseInt;
        function BP(e) {
            if (typeof e == "number")
                return e;
            if (DP(e))
                return zv;
            if (jv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = jv(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = FP(e);
            var r = GP.test(e);
            return r || UP.test(e) ? VP(e.slice(2), r ? 2 : 8) : kP.test(e) ? zv : +e
        }
        Kv.exports = BP
    }
    );
    var Qv = c( (iX, $v) => {
        var HP = Yn()
          , Yv = 1 / 0
          , WP = 17976931348623157e292;
        function XP(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = HP(e),
            e === Yv || e === -Yv) {
                var t = e < 0 ? -1 : 1;
                return t * WP
            }
            return e === e ? e : 0
        }
        $v.exports = XP
    }
    );
    var ba = c( (oX, Zv) => {
        var jP = Qv();
        function zP(e) {
            var t = jP(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Zv.exports = zP
    }
    );
    var eh = c( (aX, Jv) => {
        var KP = _a()
          , YP = It()
          , $P = ba()
          , QP = Math.max;
        function ZP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = r == null ? 0 : $P(r);
            return i < 0 && (i = QP(n + i, 0)),
            KP(e, YP(t, 3), i)
        }
        Jv.exports = ZP
    }
    );
    var Ta = c( (sX, th) => {
        var JP = ya()
          , eq = eh()
          , tq = JP(eq);
        th.exports = tq
    }
    );
    var ih = {};
    Fe(ih, {
        ELEMENT_MATCHES: () => rq,
        FLEX_PREFIXED: () => Ia,
        IS_BROWSER_ENV: () => Qe,
        TRANSFORM_PREFIXED: () => Ot,
        TRANSFORM_STYLE_PREFIXED: () => Qn,
        withBrowser: () => $n
    });
    var nh, Qe, $n, rq, Ia, Ot, rh, Qn, Zn = he( () => {
        "use strict";
        nh = le(Ta()),
        Qe = typeof window < "u",
        $n = (e, t) => Qe ? e() : t,
        rq = $n( () => (0,
        nh.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        Ia = $n( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return r
            } catch {
                return r
            }
        }
        , "flex"),
        Ot = $n( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        rh = Ot.split("transform")[0],
        Qn = rh ? rh + "TransformStyle" : "transformStyle"
    }
    );
    var Oa = c( (uX, ch) => {
        var nq = 4
          , iq = .001
          , oq = 1e-7
          , aq = 10
          , Hr = 11
          , Jn = 1 / (Hr - 1)
          , sq = typeof Float32Array == "function";
        function oh(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function ah(e, t) {
            return 3 * t - 6 * e
        }
        function sh(e) {
            return 3 * e
        }
        function ei(e, t, r) {
            return ((oh(t, r) * e + ah(t, r)) * e + sh(t)) * e
        }
        function uh(e, t, r) {
            return 3 * oh(t, r) * e * e + 2 * ah(t, r) * e + sh(t)
        }
        function uq(e, t, r, n, i) {
            var o, a, s = 0;
            do
                a = t + (r - t) / 2,
                o = ei(a, n, i) - e,
                o > 0 ? r = a : t = a;
            while (Math.abs(o) > oq && ++s < aq);
            return a
        }
        function cq(e, t, r, n) {
            for (var i = 0; i < nq; ++i) {
                var o = uh(t, r, n);
                if (o === 0)
                    return t;
                var a = ei(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        ch.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = sq ? new Float32Array(Hr) : new Array(Hr);
            if (t !== r || n !== i)
                for (var a = 0; a < Hr; ++a)
                    o[a] = ei(a * Jn, t, n);
            function s(u) {
                for (var l = 0, m = 1, p = Hr - 1; m !== p && o[m] <= u; ++m)
                    l += Jn;
                --m;
                var g = (u - o[m]) / (o[m + 1] - o[m])
                  , h = l + g * Jn
                  , T = uh(h, t, n);
                return T >= iq ? cq(u, h, t, n) : T === 0 ? h : uq(u, l, l + Jn, t, n)
            }
            return function(l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : ei(s(l), r, i)
            }
        }
    }
    );
    var Xr = {};
    Fe(Xr, {
        bounce: () => Xq,
        bouncePast: () => jq,
        ease: () => lq,
        easeIn: () => fq,
        easeInOut: () => pq,
        easeOut: () => dq,
        inBack: () => Fq,
        inCirc: () => Lq,
        inCubic: () => Eq,
        inElastic: () => Gq,
        inExpo: () => Cq,
        inOutBack: () => kq,
        inOutCirc: () => qq,
        inOutCubic: () => yq,
        inOutElastic: () => Vq,
        inOutExpo: () => Nq,
        inOutQuad: () => hq,
        inOutQuart: () => Tq,
        inOutQuint: () => wq,
        inOutSine: () => Sq,
        inQuad: () => gq,
        inQuart: () => _q,
        inQuint: () => Iq,
        inSine: () => Aq,
        outBack: () => Dq,
        outBounce: () => Mq,
        outCirc: () => Pq,
        outCubic: () => mq,
        outElastic: () => Uq,
        outExpo: () => Rq,
        outQuad: () => vq,
        outQuart: () => bq,
        outQuint: () => Oq,
        outSine: () => xq,
        swingFrom: () => Hq,
        swingFromTo: () => Bq,
        swingTo: () => Wq
    });
    function gq(e) {
        return Math.pow(e, 2)
    }
    function vq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function hq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function Eq(e) {
        return Math.pow(e, 3)
    }
    function mq(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function yq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function _q(e) {
        return Math.pow(e, 4)
    }
    function bq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function Tq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function Iq(e) {
        return Math.pow(e, 5)
    }
    function Oq(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function wq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function Aq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function xq(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function Sq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function Cq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function Rq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function Nq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function Lq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function Pq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function qq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function Mq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function Fq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }
    function Dq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function kq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function Gq(e) {
        let t = pt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }
    function Uq(e) {
        let t = pt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }
    function Vq(e) {
        let t = pt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }
    function Bq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function Hq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }
    function Wq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function Xq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function jq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Wr, pt, lq, fq, dq, pq, wa = he( () => {
        "use strict";
        Wr = le(Oa()),
        pt = 1.70158,
        lq = (0,
        Wr.default)(.25, .1, .25, 1),
        fq = (0,
        Wr.default)(.42, 0, 1, 1),
        dq = (0,
        Wr.default)(0, 0, .58, 1),
        pq = (0,
        Wr.default)(.42, 0, .58, 1)
    }
    );
    var fh = {};
    Fe(fh, {
        applyEasing: () => Kq,
        createBezierEasing: () => zq,
        optimizeFloat: () => jr
    });
    function jr(e, t=5, r=10) {
        let n = Math.pow(r, t)
          , i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function zq(e) {
        return (0,
        lh.default)(...e)
    }
    function Kq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : jr(r ? t > 0 ? r(t) : t : t > 0 && e && Xr[e] ? Xr[e](t) : t)
    }
    var lh, Aa = he( () => {
        "use strict";
        wa();
        lh = le(Oa())
    }
    );
    var gh = {};
    Fe(gh, {
        createElementState: () => ph,
        ixElements: () => uM,
        mergeActionState: () => xa
    });
    function ph(e, t, r, n, i) {
        let o = r === Yq ? (0,
        ir.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        ir.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }
    function xa(e, t, r, n, i) {
        let o = lM(i);
        return (0,
        ir.mergeIn)(e, [t, sM, r], n, o)
    }
    function lM(e) {
        let {config: t} = e;
        return cM.reduce( (r, n) => {
            let i = n[0]
              , o = n[1]
              , a = t[i]
              , s = t[o];
            return a != null && s != null && (r[o] = s),
            r
        }
        , {})
    }
    var ir, lX, Yq, fX, $q, Qq, Zq, Jq, eM, tM, rM, nM, iM, oM, aM, dh, sM, uM, cM, vh = he( () => {
        "use strict";
        ir = le(Yt());
        Ge();
        ({HTML_ELEMENT: lX, PLAIN_OBJECT: Yq, ABSTRACT_NODE: fX, CONFIG_X_VALUE: $q, CONFIG_Y_VALUE: Qq, CONFIG_Z_VALUE: Zq, CONFIG_VALUE: Jq, CONFIG_X_UNIT: eM, CONFIG_Y_UNIT: tM, CONFIG_Z_UNIT: rM, CONFIG_UNIT: nM} = Ce),
        {IX2_SESSION_STOPPED: iM, IX2_INSTANCE_ADDED: oM, IX2_ELEMENT_STATE_CHANGED: aM} = Ie,
        dh = {},
        sM = "refState",
        uM = (e=dh, t={}) => {
            switch (t.type) {
            case iM:
                return dh;
            case oM:
                {
                    let {elementId: r, element: n, origin: i, actionItem: o, refType: a} = t.payload
                      , {actionTypeId: s} = o
                      , u = e;
                    return (0,
                    ir.getIn)(u, [r, n]) !== n && (u = ph(u, n, a, r, o)),
                    xa(u, r, s, i, o)
                }
            case aM:
                {
                    let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                    return xa(e, r, n, i, o)
                }
            default:
                return e
            }
        }
        ;
        cM = [[$q, eM], [Qq, tM], [Zq, rM], [Jq, nM]]
    }
    );
    var hh = c(we => {
        "use strict";
        Object.defineProperty(we, "__esModule", {
            value: !0
        });
        we.renderPlugin = we.getPluginOrigin = we.getPluginDuration = we.getPluginDestination = we.getPluginConfig = we.createPluginInstance = we.clearPlugin = void 0;
        var fM = e => e.value;
        we.getPluginConfig = fM;
        var dM = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        we.getPluginDuration = dM;
        var pM = e => e || {
            value: 0
        };
        we.getPluginOrigin = pM;
        var gM = e => ({
            value: e.value
        });
        we.getPluginDestination = gM;
        var vM = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        we.createPluginInstance = vM;
        var hM = (e, t, r) => {
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        we.renderPlugin = hM;
        var EM = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        we.clearPlugin = EM
    }
    );
    var mh = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var mM = e => document.querySelector(`[data-w-id="${e}"]`)
          , yM = () => window.Webflow.require("spline")
          , _M = (e, t) => e.filter(r => !t.includes(r))
          , bM = (e, t) => e.value[t];
        Ae.getPluginConfig = bM;
        var TM = () => null;
        Ae.getPluginDuration = TM;
        var Eh = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , IM = (e, t) => {
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let o = Object.keys(e)
                  , a = _M(n, o);
                return a.length ? a.reduce( (u, l) => (u[l] = Eh[l],
                u), e) : e
            }
            return n.reduce( (o, a) => (o[a] = Eh[a],
            o), {})
        }
        ;
        Ae.getPluginOrigin = IM;
        var OM = e => e.value;
        Ae.getPluginDestination = OM;
        var wM = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? mM(n) : null
        }
        ;
        Ae.createPluginInstance = wM;
        var AM = (e, t, r) => {
            let n = yM()
              , i = n.getInstance(e)
              , o = r.config.target.objectId
              , a = s => {
                if (!s)
                    throw new Error("Invalid spline app passed to renderSpline");
                let u = o && s.findObjectById(o);
                if (!u)
                    return;
                let {PLUGIN_SPLINE: l} = t;
                l.positionX != null && (u.position.x = l.positionX),
                l.positionY != null && (u.position.y = l.positionY),
                l.positionZ != null && (u.position.z = l.positionZ),
                l.rotationX != null && (u.rotation.x = l.rotationX),
                l.rotationY != null && (u.rotation.y = l.rotationY),
                l.rotationZ != null && (u.rotation.z = l.rotationZ),
                l.scaleX != null && (u.scale.x = l.scaleX),
                l.scaleY != null && (u.scale.y = l.scaleY),
                l.scaleZ != null && (u.scale.z = l.scaleZ)
            }
            ;
            i ? a(i.spline) : n.setLoadHandler(e, a)
        }
        ;
        Ae.renderPlugin = AM;
        var xM = () => null;
        Ae.clearPlugin = xM
    }
    );
    var Ca = c(Sa => {
        "use strict";
        Object.defineProperty(Sa, "__esModule", {
            value: !0
        });
        Sa.normalizeColor = SM;
        var yh = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function SM(e) {
            let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase(), s = (typeof yh[o] == "string" ? yh[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16),
                r = parseInt(u[1] + u[1], 16),
                n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16),
                r = parseInt(u.substring(2, 4), 16),
                n = parseInt(u.substring(4, 6), 16))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                r = parseInt(u[1], 10),
                n = parseInt(u[2], 10),
                i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                r = parseInt(u[1], 10),
                n = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , l = parseFloat(u[0])
                  , m = parseFloat(u[1].replace("%", "")) / 100
                  , p = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let g = (1 - Math.abs(2 * p - 1)) * m, h = g * (1 - Math.abs(l / 60 % 2 - 1)), T = p - g / 2, b, w, _;
                l >= 0 && l < 60 ? (b = g,
                w = h,
                _ = 0) : l >= 60 && l < 120 ? (b = h,
                w = g,
                _ = 0) : l >= 120 && l < 180 ? (b = 0,
                w = g,
                _ = h) : l >= 180 && l < 240 ? (b = 0,
                w = h,
                _ = g) : l >= 240 && l < 300 ? (b = h,
                w = 0,
                _ = g) : (b = g,
                w = 0,
                _ = h),
                t = Math.round((b + T) * 255),
                r = Math.round((w + T) * 255),
                n = Math.round((_ + T) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), l = parseFloat(u[0]), m = parseFloat(u[1].replace("%", "")) / 100, p = parseFloat(u[2].replace("%", "")) / 100, g = (1 - Math.abs(2 * p - 1)) * m, h = g * (1 - Math.abs(l / 60 % 2 - 1)), T = p - g / 2, b, w, _;
                l >= 0 && l < 60 ? (b = g,
                w = h,
                _ = 0) : l >= 60 && l < 120 ? (b = h,
                w = g,
                _ = 0) : l >= 120 && l < 180 ? (b = 0,
                w = g,
                _ = h) : l >= 180 && l < 240 ? (b = 0,
                w = h,
                _ = g) : l >= 240 && l < 300 ? (b = h,
                w = 0,
                _ = g) : (b = g,
                w = 0,
                _ = h),
                t = Math.round((b + T) * 255),
                r = Math.round((w + T) * 255),
                n = Math.round((_ + T) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    }
    );
    var _h = c(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.renderPlugin = xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
        var CM = Ca()
          , RM = (e, t) => e.value[t];
        xe.getPluginConfig = RM;
        var NM = () => null;
        xe.getPluginDuration = NM;
        var LM = (e, t) => {
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return (0,
                CM.normalizeColor)(i)
        }
        ;
        xe.getPluginOrigin = LM;
        var PM = e => e.value;
        xe.getPluginDestination = PM;
        var qM = () => null;
        xe.createPluginInstance = qM;
        var MM = (e, t, r) => {
            let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: a, red: s, green: u, blue: l, alpha: m} = o, p;
            a != null && (p = a + i),
            s != null && l != null && u != null && m != null && (p = `rgba(${s}, ${u}, ${l}, ${m})`),
            p != null && document.documentElement.style.setProperty(n, p)
        }
        ;
        xe.renderPlugin = MM;
        var FM = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
        ;
        xe.clearPlugin = FM
    }
    );
    var bh = c(ti => {
        "use strict";
        var Na = dn().default;
        Object.defineProperty(ti, "__esModule", {
            value: !0
        });
        ti.pluginMethodMap = void 0;
        var Ra = (Ge(),
        tt(xf))
          , DM = Na(hh())
          , kM = Na(mh())
          , GM = Na(_h())
          , hX = ti.pluginMethodMap = new Map([[Ra.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...DM
        }], [Ra.ActionTypeConsts.PLUGIN_SPLINE, {
            ...kM
        }], [Ra.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...GM
        }]])
    }
    );
    var Th = {};
    Fe(Th, {
        clearPlugin: () => Da,
        createPluginInstance: () => VM,
        getPluginConfig: () => Pa,
        getPluginDestination: () => Ma,
        getPluginDuration: () => UM,
        getPluginOrigin: () => qa,
        isPluginType: () => Mt,
        renderPlugin: () => Fa
    });
    function Mt(e) {
        return La.pluginMethodMap.has(e)
    }
    var La, Ft, Pa, qa, UM, Ma, VM, Fa, Da, ka = he( () => {
        "use strict";
        Zn();
        La = le(bh());
        Ft = e => t => {
            if (!Qe)
                return () => null;
            let r = La.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
        ,
        Pa = Ft("getPluginConfig"),
        qa = Ft("getPluginOrigin"),
        UM = Ft("getPluginDuration"),
        Ma = Ft("getPluginDestination"),
        VM = Ft("createPluginInstance"),
        Fa = Ft("renderPlugin"),
        Da = Ft("clearPlugin")
    }
    );
    var Oh = c( (yX, Ih) => {
        function BM(e, t) {
            return e == null || e !== e ? t : e
        }
        Ih.exports = BM
    }
    );
    var Ah = c( (_X, wh) => {
        function HM(e, t, r, n) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o; )
                r = t(r, e[i], i, e);
            return r
        }
        wh.exports = HM
    }
    );
    var Sh = c( (bX, xh) => {
        function WM(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1)
                        break
                }
                return t
            }
        }
        xh.exports = WM
    }
    );
    var Rh = c( (TX, Ch) => {
        var XM = Sh()
          , jM = XM();
        Ch.exports = jM
    }
    );
    var Ga = c( (IX, Nh) => {
        var zM = Rh()
          , KM = Ur();
        function YM(e, t) {
            return e && zM(e, t, KM)
        }
        Nh.exports = YM
    }
    );
    var Ph = c( (OX, Lh) => {
        var $M = Pt();
        function QM(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!$M(r))
                    return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
                    ;
                return r
            }
        }
        Lh.exports = QM
    }
    );
    var Ua = c( (wX, qh) => {
        var ZM = Ga()
          , JM = Ph()
          , eF = JM(ZM);
        qh.exports = eF
    }
    );
    var Fh = c( (AX, Mh) => {
        function tF(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1,
                o) : t(r, o, a, s)
            }),
            r
        }
        Mh.exports = tF
    }
    );
    var kh = c( (xX, Dh) => {
        var rF = Ah()
          , nF = Ua()
          , iF = It()
          , oF = Fh()
          , aF = Oe();
        function sF(e, t, r) {
            var n = aF(e) ? rF : oF
              , i = arguments.length < 3;
            return n(e, iF(t, 4), r, i, nF)
        }
        Dh.exports = sF
    }
    );
    var Uh = c( (SX, Gh) => {
        var uF = _a()
          , cF = It()
          , lF = ba()
          , fF = Math.max
          , dF = Math.min;
        function pF(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = n - 1;
            return r !== void 0 && (i = lF(r),
            i = r < 0 ? fF(n + i, 0) : dF(i, n - 1)),
            uF(e, cF(t, 3), i, !0)
        }
        Gh.exports = pF
    }
    );
    var Bh = c( (CX, Vh) => {
        var gF = ya()
          , vF = Uh()
          , hF = gF(vF);
        Vh.exports = hF
    }
    );
    function Hh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function mF(e, t) {
        if (Hh(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let r = Object.keys(e)
          , n = Object.keys(t);
        if (r.length !== n.length)
            return !1;
        for (let i = 0; i < r.length; i++)
            if (!EF.call(t, r[i]) || !Hh(e[r[i]], t[r[i]]))
                return !1;
        return !0
    }
    var EF, Va, Wh = he( () => {
        "use strict";
        EF = Object.prototype.hasOwnProperty;
        Va = mF
    }
    );
    var uE = {};
    Fe(uE, {
        cleanupHTMLElement: () => vD,
        clearAllStyles: () => gD,
        clearObjectCache: () => MF,
        getActionListProgress: () => ED,
        getAffectedElements: () => ja,
        getComputedStyle: () => HF,
        getDestinationValues: () => $F,
        getElementId: () => GF,
        getInstanceId: () => DF,
        getInstanceOrigin: () => jF,
        getItemConfigByKey: () => YF,
        getMaxDurationItemIndex: () => sE,
        getNamespacedParameterId: () => _D,
        getRenderType: () => iE,
        getStyleProp: () => QF,
        mediaQueriesEqual: () => TD,
        observeStore: () => BF,
        reduceListToGroup: () => mD,
        reifyState: () => UF,
        renderHTMLElement: () => ZF,
        shallowEqual: () => Va,
        shouldAllowMediaQuery: () => bD,
        shouldNamespaceEventParameter: () => yD,
        stringifyTarget: () => ID
    });
    function MF() {
        ri.clear()
    }
    function DF() {
        return "i" + FF++
    }
    function GF(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t)
                return n.id
        }
        return "e" + kF++
    }
    function UF({events: e, actionLists: t, site: r}={}) {
        let n = (0,
        ai.default)(e, (a, s) => {
            let {eventTypeId: u} = s;
            return a[u] || (a[u] = {}),
            a[u][s.id] = s,
            a
        }
        , {})
          , i = r && r.mediaQueries
          , o = [];
        return i ? o = i.map(a => a.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function BF({store: e, select: t, onChange: r, comparator: n=VF}) {
        let {getState: i, subscribe: o} = e
          , a = o(u)
          , s = t(i());
        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            n(l, s) || (s = l,
            r(s, e))
        }
        return a
    }
    function zh(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }
    function ja({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce( (A, v) => A.concat(ja({
                config: {
                    target: v
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i
            })), []);
        let {getValidDocument: a, getQuerySelector: s, queryDocument: u, getChildElements: l, getSiblingElements: m, matchSelector: p, elementContains: g, isSiblingNode: h} = i
          , {target: T} = e;
        if (!T)
            return [];
        let {id: b, objectId: w, selector: _, selectorGuids: C, appliesTo: x, useEventTarget: N} = zh(T);
        if (w)
            return [ri.has(w) ? ri.get(w) : ri.set(w, {}).get(w)];
        if (x === Xo.PAGE) {
            let A = a(b);
            return A ? [A] : []
        }
        let P = (t?.action?.config?.affectedElements ?? {})[b || _] || {}, z = !!(P.id || P.selector), K, $, Z, G = t && s(zh(t.target));
        if (z ? (K = P.limitAffectedElements,
        $ = G,
        Z = s(P)) : $ = Z = s({
            id: b,
            selector: _,
            selectorGuids: C
        }),
        t && N) {
            let A = r && (Z || N === !0) ? [r] : u(G);
            if (Z) {
                if (N === LF)
                    return u(Z).filter(v => A.some(L => g(v, L)));
                if (N === Xh)
                    return u(Z).filter(v => A.some(L => g(L, v)));
                if (N === jh)
                    return u(Z).filter(v => A.some(L => h(L, v)))
            }
            return A
        }
        return $ == null || Z == null ? [] : Qe && n ? u(Z).filter(A => n.contains(A)) : K === Xh ? u($, Z) : K === NF ? l(u($)).filter(p(Z)) : K === jh ? m(u($)).filter(p(Z)) : u(Z)
    }
    function HF({element: e, actionItem: t}) {
        if (!Qe)
            return {};
        let {actionTypeId: r} = t;
        switch (r) {
        case cr:
        case lr:
        case fr:
        case dr:
        case ui:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function jF(e, t={}, r={}, n, i) {
        let {getStyle: o} = i
          , {actionTypeId: a} = n;
        if (Mt(a))
            return qa(a)(t[a], n);
        switch (n.actionTypeId) {
        case ar:
        case sr:
        case ur:
        case $r:
            return t[n.actionTypeId] || za[n.actionTypeId];
        case Qr:
            return WF(t[n.actionTypeId], n.config.filters);
        case Zr:
            return XF(t[n.actionTypeId], n.config.fontVariations);
        case tE:
            return {
                value: (0,
                gt.default)(parseFloat(o(e, ii)), 1)
            };
        case cr:
            {
                let s = o(e, st), u = o(e, ut), l, m;
                return n.config.widthUnit === wt ? l = Kh.test(s) ? parseFloat(s) : parseFloat(r.width) : l = (0,
                gt.default)(parseFloat(s), parseFloat(r.width)),
                n.config.heightUnit === wt ? m = Kh.test(u) ? parseFloat(u) : parseFloat(r.height) : m = (0,
                gt.default)(parseFloat(u), parseFloat(r.height)),
                {
                    widthValue: l,
                    heightValue: m
                }
            }
        case lr:
        case fr:
        case dr:
            return fD({
                element: e,
                actionTypeId: n.actionTypeId,
                computedStyle: r,
                getStyle: o
            });
        case ui:
            return {
                value: (0,
                gt.default)(o(e, oi), r.display)
            };
        case qF:
            return t[n.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function $F({element: e, actionItem: t, elementApi: r}) {
        if (Mt(t.actionTypeId))
            return Ma(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case ar:
        case sr:
        case ur:
        case $r:
            {
                let {xValue: n, yValue: i, zValue: o} = t.config;
                return {
                    xValue: n,
                    yValue: i,
                    zValue: o
                }
            }
        case cr:
            {
                let {getStyle: n, setStyle: i, getProperty: o} = r
                  , {widthUnit: a, heightUnit: s} = t.config
                  , {widthValue: u, heightValue: l} = t.config;
                if (!Qe)
                    return {
                        widthValue: u,
                        heightValue: l
                    };
                if (a === wt) {
                    let m = n(e, st);
                    i(e, st, ""),
                    u = o(e, "offsetWidth"),
                    i(e, st, m)
                }
                if (s === wt) {
                    let m = n(e, ut);
                    i(e, ut, ""),
                    l = o(e, "offsetHeight"),
                    i(e, ut, m)
                }
                return {
                    widthValue: u,
                    heightValue: l
                }
            }
        case lr:
        case fr:
        case dr:
            {
                let {rValue: n, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
                if (s && s.startsWith("--")) {
                    let {getStyle: u} = r
                      , l = u(e, s)
                      , m = (0,
                    Qh.normalizeColor)(l);
                    return {
                        rValue: m.red,
                        gValue: m.green,
                        bValue: m.blue,
                        aValue: m.alpha
                    }
                }
                return {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
        case Qr:
            return t.config.filters.reduce(zF, {});
        case Zr:
            return t.config.fontVariations.reduce(KF, {});
        default:
            {
                let {value: n} = t.config;
                return {
                    value: n
                }
            }
        }
    }
    function iE(e) {
        if (/^TRANSFORM_/.test(e))
            return Jh;
        if (/^STYLE_/.test(e))
            return Wa;
        if (/^GENERAL_/.test(e))
            return Ha;
        if (/^PLUGIN_/.test(e))
            return eE
    }
    function QF(e, t) {
        return e === Wa ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function ZF(e, t, r, n, i, o, a, s, u) {
        switch (s) {
        case Jh:
            return nD(e, t, r, i, a);
        case Wa:
            return dD(e, t, r, i, o, a);
        case Ha:
            return pD(e, i, a);
        case eE:
            {
                let {actionTypeId: l} = i;
                if (Mt(l))
                    return Fa(l)(u, t, i)
            }
        }
    }
    function nD(e, t, r, n, i) {
        let o = rD.map(s => {
            let u = za[s]
              , {xValue: l=u.xValue, yValue: m=u.yValue, zValue: p=u.zValue, xUnit: g="", yUnit: h="", zUnit: T=""} = t[s] || {};
            switch (s) {
            case ar:
                return `${bF}(${l}${g}, ${m}${h}, ${p}${T})`;
            case sr:
                return `${TF}(${l}${g}, ${m}${h}, ${p}${T})`;
            case ur:
                return `${IF}(${l}${g}) ${OF}(${m}${h}) ${wF}(${p}${T})`;
            case $r:
                return `${AF}(${l}${g}, ${m}${h})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = i;
        Dt(e, Ot, i),
        a(e, Ot, o),
        aD(n, r) && a(e, Qn, xF)
    }
    function iD(e, t, r, n) {
        let i = (0,
        ai.default)(t, (a, s, u) => `${a} ${u}(${s}${tD(u, r)})`, "")
          , {setStyle: o} = n;
        Dt(e, zr, n),
        o(e, zr, i)
    }
    function oD(e, t, r, n) {
        let i = (0,
        ai.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`),
        a), []).join(", ")
          , {setStyle: o} = n;
        Dt(e, Kr, n),
        o(e, Kr, i)
    }
    function aD({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === ar && n !== void 0 || e === sr && n !== void 0 || e === ur && (t !== void 0 || r !== void 0)
    }
    function lD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }
    function fD({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let i = Xa[t]
          , o = n(e, i)
          , a = uD.test(o) ? o : r[i]
          , s = lD(cD, a).split(Yr);
        return {
            rValue: (0,
            gt.default)(parseInt(s[0], 10), 255),
            gValue: (0,
            gt.default)(parseInt(s[1], 10), 255),
            bValue: (0,
            gt.default)(parseInt(s[2], 10), 255),
            aValue: (0,
            gt.default)(parseFloat(s[3]), 1)
        }
    }
    function dD(e, t, r, n, i, o) {
        let {setStyle: a} = o;
        switch (n.actionTypeId) {
        case cr:
            {
                let {widthUnit: s="", heightUnit: u=""} = n.config
                  , {widthValue: l, heightValue: m} = r;
                l !== void 0 && (s === wt && (s = "px"),
                Dt(e, st, o),
                a(e, st, l + s)),
                m !== void 0 && (u === wt && (u = "px"),
                Dt(e, ut, o),
                a(e, ut, m + u));
                break
            }
        case Qr:
            {
                iD(e, r, n.config, o);
                break
            }
        case Zr:
            {
                oD(e, r, n.config, o);
                break
            }
        case lr:
        case fr:
        case dr:
            {
                let s = Xa[n.actionTypeId]
                  , u = Math.round(r.rValue)
                  , l = Math.round(r.gValue)
                  , m = Math.round(r.bValue)
                  , p = r.aValue;
                Dt(e, s, o),
                a(e, s, p >= 1 ? `rgb(${u},${l},${m})` : `rgba(${u},${l},${m},${p})`);
                break
            }
        default:
            {
                let {unit: s=""} = n.config;
                Dt(e, i, o),
                a(e, i, r.value + s);
                break
            }
        }
    }
    function pD(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
        case ui:
            {
                let {value: i} = t.config;
                i === SF && Qe ? n(e, oi, Ia) : n(e, oi, i);
                return
            }
        }
    }
    function Dt(e, t, r) {
        if (!Qe)
            return;
        let n = nE[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, or);
        if (!a) {
            o(e, or, n);
            return
        }
        let s = a.split(Yr).map(rE);
        s.indexOf(n) === -1 && o(e, or, s.concat(n).join(Yr))
    }
    function oE(e, t, r) {
        if (!Qe)
            return;
        let n = nE[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, or);
        !a || a.indexOf(n) === -1 || o(e, or, a.split(Yr).map(rE).filter(s => s !== n).join(Yr))
    }
    function gD({store: e, elementApi: t}) {
        let {ixData: r} = e.getState()
          , {events: n={}, actionLists: i={}} = r;
        Object.keys(n).forEach(o => {
            let a = n[o]
              , {config: s} = a.action
              , {actionListId: u} = s
              , l = i[u];
            l && Yh({
                actionList: l,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o => {
            Yh({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function Yh({actionList: e={}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e;
        n && n.forEach(o => {
            $h({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }
        ),
        i && i.forEach(o => {
            let {continuousActionGroups: a} = o;
            a.forEach(s => {
                $h({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            }
            )
        }
        )
    }
    function $h({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(i => {
            let {actionTypeId: o, config: a} = i, s;
            Mt(o) ? s = u => Da(o)(u, i) : s = aE({
                effect: hD,
                actionTypeId: o,
                elementApi: r
            }),
            ja({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        }
        )
    }
    function vD(e, t, r) {
        let {setStyle: n, getStyle: i} = r
          , {actionTypeId: o} = t;
        if (o === cr) {
            let {config: a} = t;
            a.widthUnit === wt && n(e, st, ""),
            a.heightUnit === wt && n(e, ut, "")
        }
        i(e, or) && aE({
            effect: oE,
            actionTypeId: o,
            elementApi: r
        })(e)
    }
    function hD(e, t, r) {
        let {setStyle: n} = r;
        oE(e, t, r),
        n(e, t, ""),
        t === Ot && n(e, Qn, "")
    }
    function sE(e) {
        let t = 0
          , r = 0;
        return e.forEach( (n, i) => {
            let {config: o} = n
              , a = o.delay + o.duration;
            a >= t && (t = a,
            r = i)
        }
        ),
        r
    }
    function ED(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , a = 0
          , s = 0;
        return r.forEach( (u, l) => {
            if (n && l === 0)
                return;
            let {actionItems: m} = u
              , p = m[sE(m)]
              , {config: g, actionTypeId: h} = p;
            i.id === p.id && (s = a + o);
            let T = iE(h) === Ha ? 0 : g.duration;
            a += g.delay + T
        }
        ),
        a > 0 ? jr(s / a) : 0
    }
    function mD({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e
          , o = []
          , a = s => (o.push((0,
        si.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })),
        s.id === t);
        return n && n.some( ({actionItems: s}) => s.some(a)),
        i && i.some(s => {
            let {continuousActionGroups: u} = s;
            return u.some( ({actionItems: l}) => l.some(a))
        }
        ),
        (0,
        si.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function yD(e, {basedOn: t}) {
        return e === $e.SCROLLING_IN_VIEW && (t === ot.ELEMENT || t == null) || e === $e.MOUSE_MOVE && t === ot.ELEMENT
    }
    function _D(e, t) {
        return e + PF + t
    }
    function bD(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function TD(e, t) {
        return Va(e && e.sort(), t && t.sort())
    }
    function ID(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + Ba + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: r="", useEventTarget: n=""} = e;
        return t + Ba + r + Ba + n
    }
    var gt, ai, ni, si, Qh, yF, _F, bF, TF, IF, OF, wF, AF, xF, SF, ii, zr, Kr, st, ut, Zh, CF, RF, Xh, NF, jh, LF, oi, or, wt, Yr, PF, Ba, Jh, Ha, Wa, eE, ar, sr, ur, $r, tE, Qr, Zr, cr, lr, fr, dr, ui, qF, rE, Xa, nE, ri, FF, kF, VF, Kh, WF, XF, zF, KF, YF, za, JF, eD, tD, rD, sD, uD, cD, aE, cE = he( () => {
        "use strict";
        gt = le(Oh()),
        ai = le(kh()),
        ni = le(Bh()),
        si = le(Yt());
        Ge();
        Wh();
        Aa();
        Qh = le(Ca());
        ka();
        Zn();
        ({BACKGROUND: yF, TRANSFORM: _F, TRANSLATE_3D: bF, SCALE_3D: TF, ROTATE_X: IF, ROTATE_Y: OF, ROTATE_Z: wF, SKEW: AF, PRESERVE_3D: xF, FLEX: SF, OPACITY: ii, FILTER: zr, FONT_VARIATION_SETTINGS: Kr, WIDTH: st, HEIGHT: ut, BACKGROUND_COLOR: Zh, BORDER_COLOR: CF, COLOR: RF, CHILDREN: Xh, IMMEDIATE_CHILDREN: NF, SIBLINGS: jh, PARENT: LF, DISPLAY: oi, WILL_CHANGE: or, AUTO: wt, COMMA_DELIMITER: Yr, COLON_DELIMITER: PF, BAR_DELIMITER: Ba, RENDER_TRANSFORM: Jh, RENDER_GENERAL: Ha, RENDER_STYLE: Wa, RENDER_PLUGIN: eE} = Ce),
        {TRANSFORM_MOVE: ar, TRANSFORM_SCALE: sr, TRANSFORM_ROTATE: ur, TRANSFORM_SKEW: $r, STYLE_OPACITY: tE, STYLE_FILTER: Qr, STYLE_FONT_VARIATION: Zr, STYLE_SIZE: cr, STYLE_BACKGROUND_COLOR: lr, STYLE_BORDER: fr, STYLE_TEXT_COLOR: dr, GENERAL_DISPLAY: ui, OBJECT_VALUE: qF} = ke,
        rE = e => e.trim(),
        Xa = Object.freeze({
            [lr]: Zh,
            [fr]: CF,
            [dr]: RF
        }),
        nE = Object.freeze({
            [Ot]: _F,
            [Zh]: yF,
            [ii]: ii,
            [zr]: zr,
            [st]: st,
            [ut]: ut,
            [Kr]: Kr
        }),
        ri = new Map;
        FF = 1;
        kF = 1;
        VF = (e, t) => e === t;
        Kh = /px/,
        WF = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = JF[n.type]),
        r), e || {}),
        XF = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = eD[n.type] || n.defaultValue || 0),
        r), e || {});
        zF = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        KF = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        YF = (e, t, r) => {
            if (Mt(e))
                return Pa(e)(r, t);
            switch (e) {
            case Qr:
                {
                    let n = (0,
                    ni.default)(r.filters, ({type: i}) => i === t);
                    return n ? n.value : 0
                }
            case Zr:
                {
                    let n = (0,
                    ni.default)(r.fontVariations, ({type: i}) => i === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        za = {
            [ar]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [sr]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [ur]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [$r]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        JF = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        eD = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        tD = (e, t) => {
            let r = (0,
            ni.default)(t.filters, ({type: n}) => n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        rD = Object.keys(za);
        sD = "\\(([^)]+)\\)",
        uD = /^rgb/,
        cD = RegExp(`rgba?${sD}`);
        aE = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
            switch (t) {
            case ar:
            case sr:
            case ur:
            case $r:
                e(n, Ot, r);
                break;
            case Qr:
                e(n, zr, r);
                break;
            case Zr:
                e(n, Kr, r);
                break;
            case tE:
                e(n, ii, r);
                break;
            case cr:
                e(n, st, r),
                e(n, ut, r);
                break;
            case lr:
            case fr:
            case dr:
                e(n, Xa[t], r);
                break;
            case ui:
                e(n, oi, r);
                break
            }
        }
    }
    );
    var kt = c(Pe => {
        "use strict";
        var pr = dn().default;
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.IX2VanillaUtils = Pe.IX2VanillaPlugins = Pe.IX2ElementsReducer = Pe.IX2Easings = Pe.IX2EasingUtils = Pe.IX2BrowserSupport = void 0;
        var OD = pr((Zn(),
        tt(ih)));
        Pe.IX2BrowserSupport = OD;
        var wD = pr((wa(),
        tt(Xr)));
        Pe.IX2Easings = wD;
        var AD = pr((Aa(),
        tt(fh)));
        Pe.IX2EasingUtils = AD;
        var xD = pr((vh(),
        tt(gh)));
        Pe.IX2ElementsReducer = xD;
        var SD = pr((ka(),
        tt(Th)));
        Pe.IX2VanillaPlugins = SD;
        var CD = pr((cE(),
        tt(uE)));
        Pe.IX2VanillaUtils = CD
    }
    );
    var li, vt, RD, ND, LD, PD, qD, MD, ci, lE, FD, DD, Ka, kD, GD, UD, VD, fE, dE = he( () => {
        "use strict";
        Ge();
        li = le(kt()),
        vt = le(Yt()),
        {IX2_RAW_DATA_IMPORTED: RD, IX2_SESSION_STOPPED: ND, IX2_INSTANCE_ADDED: LD, IX2_INSTANCE_STARTED: PD, IX2_INSTANCE_REMOVED: qD, IX2_ANIMATION_FRAME_CHANGED: MD} = Ie,
        {optimizeFloat: ci, applyEasing: lE, createBezierEasing: FD} = li.IX2EasingUtils,
        {RENDER_GENERAL: DD} = Ce,
        {getItemConfigByKey: Ka, getRenderType: kD, getStyleProp: GD} = li.IX2VanillaUtils,
        UD = (e, t) => {
            let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: u, customEasingFn: l, skipMotion: m, skipToValue: p} = e
              , {parameters: g} = t.payload
              , h = Math.max(1 - a, .01)
              , T = g[n];
            T == null && (h = 1,
            T = s);
            let b = Math.max(T, 0) || 0
              , w = ci(b - r)
              , _ = m ? p : ci(r + w * h)
              , C = _ * 100;
            if (_ === r && e.current)
                return e;
            let x, N, M, P;
            for (let K = 0, {length: $} = i; K < $; K++) {
                let {keyframe: Z, actionItems: G} = i[K];
                if (K === 0 && (x = G[0]),
                C >= Z) {
                    x = G[0];
                    let A = i[K + 1]
                      , v = A && C !== Z;
                    N = v ? A.actionItems[0] : null,
                    v && (M = Z / 100,
                    P = (A.keyframe - Z) / 100)
                }
            }
            let z = {};
            if (x && !N)
                for (let K = 0, {length: $} = o; K < $; K++) {
                    let Z = o[K];
                    z[Z] = Ka(u, Z, x.config)
                }
            else if (x && N && M !== void 0 && P !== void 0) {
                let K = (_ - M) / P
                  , $ = x.config.easing
                  , Z = lE($, K, l);
                for (let G = 0, {length: A} = o; G < A; G++) {
                    let v = o[G]
                      , L = Ka(u, v, x.config)
                      , te = (Ka(u, v, N.config) - L) * Z + L;
                    z[v] = te
                }
            }
            return (0,
            vt.merge)(e, {
                position: _,
                current: z
            })
        }
        ,
        VD = (e, t) => {
            let {active: r, origin: n, start: i, immediate: o, renderType: a, verbose: s, actionItem: u, destination: l, destinationKeys: m, pluginDuration: p, instanceDelay: g, customEasingFn: h, skipMotion: T} = e
              , b = u.config.easing
              , {duration: w, delay: _} = u.config;
            p != null && (w = p),
            _ = g ?? _,
            a === DD ? w = 0 : (o || T) && (w = _ = 0);
            let {now: C} = t.payload;
            if (r && n) {
                let x = C - (i + _);
                if (s) {
                    let K = C - i
                      , $ = w + _
                      , Z = ci(Math.min(Math.max(0, K / $), 1));
                    e = (0,
                    vt.set)(e, "verboseTimeElapsed", $ * Z)
                }
                if (x < 0)
                    return e;
                let N = ci(Math.min(Math.max(0, x / w), 1))
                  , M = lE(b, N, h)
                  , P = {}
                  , z = null;
                return m.length && (z = m.reduce( (K, $) => {
                    let Z = l[$]
                      , G = parseFloat(n[$]) || 0
                      , v = (parseFloat(Z) - G) * M + G;
                    return K[$] = v,
                    K
                }
                , {})),
                P.current = z,
                P.position = N,
                N === 1 && (P.active = !1,
                P.complete = !0),
                (0,
                vt.merge)(e, P)
            }
            return e
        }
        ,
        fE = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case RD:
                return t.payload.ixInstances || Object.freeze({});
            case ND:
                return Object.freeze({});
            case LD:
                {
                    let {instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: u, groupIndex: l, isCarrier: m, origin: p, destination: g, immediate: h, verbose: T, continuous: b, parameterId: w, actionGroups: _, smoothing: C, restingValue: x, pluginInstance: N, pluginDuration: M, instanceDelay: P, skipMotion: z, skipToValue: K} = t.payload
                      , {actionTypeId: $} = i
                      , Z = kD($)
                      , G = GD(Z, $)
                      , A = Object.keys(g).filter(L => g[L] != null && typeof g[L] != "string")
                      , {easing: v} = i.config;
                    return (0,
                    vt.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: p,
                        destination: g,
                        destinationKeys: A,
                        immediate: h,
                        verbose: T,
                        current: null,
                        actionItem: i,
                        actionTypeId: $,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        renderType: Z,
                        isCarrier: m,
                        styleProp: G,
                        continuous: b,
                        parameterId: w,
                        actionGroups: _,
                        smoothing: C,
                        restingValue: x,
                        pluginInstance: N,
                        pluginDuration: M,
                        instanceDelay: P,
                        skipMotion: z,
                        skipToValue: K,
                        customEasingFn: Array.isArray(v) && v.length === 4 ? FD(v) : void 0
                    })
                }
            case PD:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    vt.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case qD:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case MD:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: i} = n;
                    for (let o = 0; o < i; o++) {
                        let a = n[o]
                          , s = e[a]
                          , u = s.continuous ? UD : VD;
                        r = (0,
                        vt.set)(r, a, u(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
    }
    );
    var BD, HD, WD, pE, gE = he( () => {
        "use strict";
        Ge();
        ({IX2_RAW_DATA_IMPORTED: BD, IX2_SESSION_STOPPED: HD, IX2_PARAMETER_CHANGED: WD} = Ie),
        pE = (e={}, t) => {
            switch (t.type) {
            case BD:
                return t.payload.ixParameters || {};
            case HD:
                return {};
            case WD:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var EE = {};
    Fe(EE, {
        default: () => jD
    });
    var vE, hE, XD, jD, mE = he( () => {
        "use strict";
        vE = le(Wo());
        Cf();
        $f();
        Jf();
        hE = le(kt());
        dE();
        gE();
        ({ixElements: XD} = hE.IX2ElementsReducer),
        jD = (0,
        vE.combineReducers)({
            ixData: Sf,
            ixRequest: Yf,
            ixSession: Zf,
            ixElements: XD,
            ixInstances: fE,
            ixParameters: pE
        })
    }
    );
    var _E = c( (jX, yE) => {
        var zD = bt()
          , KD = Oe()
          , YD = dt()
          , $D = "[object String]";
        function QD(e) {
            return typeof e == "string" || !KD(e) && YD(e) && zD(e) == $D
        }
        yE.exports = QD
    }
    );
    var TE = c( (zX, bE) => {
        var ZD = ma()
          , JD = ZD("length");
        bE.exports = JD
    }
    );
    var OE = c( (KX, IE) => {
        var e1 = "\\ud800-\\udfff"
          , t1 = "\\u0300-\\u036f"
          , r1 = "\\ufe20-\\ufe2f"
          , n1 = "\\u20d0-\\u20ff"
          , i1 = t1 + r1 + n1
          , o1 = "\\ufe0e\\ufe0f"
          , a1 = "\\u200d"
          , s1 = RegExp("[" + a1 + e1 + i1 + o1 + "]");
        function u1(e) {
            return s1.test(e)
        }
        IE.exports = u1
    }
    );
    var PE = c( (YX, LE) => {
        var AE = "\\ud800-\\udfff"
          , c1 = "\\u0300-\\u036f"
          , l1 = "\\ufe20-\\ufe2f"
          , f1 = "\\u20d0-\\u20ff"
          , d1 = c1 + l1 + f1
          , p1 = "\\ufe0e\\ufe0f"
          , g1 = "[" + AE + "]"
          , Ya = "[" + d1 + "]"
          , $a = "\\ud83c[\\udffb-\\udfff]"
          , v1 = "(?:" + Ya + "|" + $a + ")"
          , xE = "[^" + AE + "]"
          , SE = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , CE = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , h1 = "\\u200d"
          , RE = v1 + "?"
          , NE = "[" + p1 + "]?"
          , E1 = "(?:" + h1 + "(?:" + [xE, SE, CE].join("|") + ")" + NE + RE + ")*"
          , m1 = NE + RE + E1
          , y1 = "(?:" + [xE + Ya + "?", Ya, SE, CE, g1].join("|") + ")"
          , wE = RegExp($a + "(?=" + $a + ")|" + y1 + m1, "g");
        function _1(e) {
            for (var t = wE.lastIndex = 0; wE.test(e); )
                ++t;
            return t
        }
        LE.exports = _1
    }
    );
    var ME = c( ($X, qE) => {
        var b1 = TE()
          , T1 = OE()
          , I1 = PE();
        function O1(e) {
            return T1(e) ? I1(e) : b1(e)
        }
        qE.exports = O1
    }
    );
    var DE = c( (QX, FE) => {
        var w1 = Bn()
          , A1 = Hn()
          , x1 = Pt()
          , S1 = _E()
          , C1 = ME()
          , R1 = "[object Map]"
          , N1 = "[object Set]";
        function L1(e) {
            if (e == null)
                return 0;
            if (x1(e))
                return S1(e) ? C1(e) : e.length;
            var t = A1(e);
            return t == R1 || t == N1 ? e.size : w1(e).length
        }
        FE.exports = L1
    }
    );
    var GE = c( (ZX, kE) => {
        var P1 = "Expected a function";
        function q1(e) {
            if (typeof e != "function")
                throw new TypeError(P1);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        kE.exports = q1
    }
    );
    var Qa = c( (JX, UE) => {
        var M1 = Tt()
          , F1 = function() {
            try {
                var e = M1(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        UE.exports = F1
    }
    );
    var Za = c( (ej, BE) => {
        var VE = Qa();
        function D1(e, t, r) {
            t == "__proto__" && VE ? VE(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        BE.exports = D1
    }
    );
    var WE = c( (tj, HE) => {
        var k1 = Za()
          , G1 = Ln()
          , U1 = Object.prototype
          , V1 = U1.hasOwnProperty;
        function B1(e, t, r) {
            var n = e[t];
            (!(V1.call(e, t) && G1(n, r)) || r === void 0 && !(t in e)) && k1(e, t, r)
        }
        HE.exports = B1
    }
    );
    var zE = c( (rj, jE) => {
        var H1 = WE()
          , W1 = Br()
          , X1 = kn()
          , XE = at()
          , j1 = nr();
        function z1(e, t, r, n) {
            if (!XE(e))
                return e;
            t = W1(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
                var u = j1(t[i])
                  , l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype")
                    return e;
                if (i != a) {
                    var m = s[u];
                    l = n ? n(m, u, s) : void 0,
                    l === void 0 && (l = XE(m) ? m : X1(t[i + 1]) ? [] : {})
                }
                H1(s, u, l),
                s = s[u]
            }
            return e
        }
        jE.exports = z1
    }
    );
    var YE = c( (nj, KE) => {
        var K1 = jn()
          , Y1 = zE()
          , $1 = Br();
        function Q1(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i; ) {
                var a = t[n]
                  , s = K1(e, a);
                r(s, a) && Y1(o, $1(a, e), s)
            }
            return o
        }
        KE.exports = Q1
    }
    );
    var QE = c( (ij, $E) => {
        var Z1 = Fn()
          , J1 = No()
          , e2 = na()
          , t2 = ra()
          , r2 = Object.getOwnPropertySymbols
          , n2 = r2 ? function(e) {
            for (var t = []; e; )
                Z1(t, e2(e)),
                e = J1(e);
            return t
        }
        : t2;
        $E.exports = n2
    }
    );
    var JE = c( (oj, ZE) => {
        function i2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        ZE.exports = i2
    }
    );
    var tm = c( (aj, em) => {
        var o2 = at()
          , a2 = Vn()
          , s2 = JE()
          , u2 = Object.prototype
          , c2 = u2.hasOwnProperty;
        function l2(e) {
            if (!o2(e))
                return s2(e);
            var t = a2(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !c2.call(e, n)) || r.push(n);
            return r
        }
        em.exports = l2
    }
    );
    var nm = c( (sj, rm) => {
        var f2 = oa()
          , d2 = tm()
          , p2 = Pt();
        function g2(e) {
            return p2(e) ? f2(e, !0) : d2(e)
        }
        rm.exports = g2
    }
    );
    var om = c( (uj, im) => {
        var v2 = ta()
          , h2 = QE()
          , E2 = nm();
        function m2(e) {
            return v2(e, E2, h2)
        }
        im.exports = m2
    }
    );
    var sm = c( (cj, am) => {
        var y2 = Ea()
          , _2 = It()
          , b2 = YE()
          , T2 = om();
        function I2(e, t) {
            if (e == null)
                return {};
            var r = y2(T2(e), function(n) {
                return [n]
            });
            return t = _2(t),
            b2(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        am.exports = I2
    }
    );
    var cm = c( (lj, um) => {
        var O2 = It()
          , w2 = GE()
          , A2 = sm();
        function x2(e, t) {
            return A2(e, w2(O2(t)))
        }
        um.exports = x2
    }
    );
    var fm = c( (fj, lm) => {
        var S2 = Bn()
          , C2 = Hn()
          , R2 = Fr()
          , N2 = Oe()
          , L2 = Pt()
          , P2 = Dn()
          , q2 = Vn()
          , M2 = Un()
          , F2 = "[object Map]"
          , D2 = "[object Set]"
          , k2 = Object.prototype
          , G2 = k2.hasOwnProperty;
        function U2(e) {
            if (e == null)
                return !0;
            if (L2(e) && (N2(e) || typeof e == "string" || typeof e.splice == "function" || P2(e) || M2(e) || R2(e)))
                return !e.length;
            var t = C2(e);
            if (t == F2 || t == D2)
                return !e.size;
            if (q2(e))
                return !S2(e).length;
            for (var r in e)
                if (G2.call(e, r))
                    return !1;
            return !0
        }
        lm.exports = U2
    }
    );
    var pm = c( (dj, dm) => {
        var V2 = Za()
          , B2 = Ga()
          , H2 = It();
        function W2(e, t) {
            var r = {};
            return t = H2(t, 3),
            B2(e, function(n, i, o) {
                V2(r, i, t(n, i, o))
            }),
            r
        }
        dm.exports = W2
    }
    );
    var vm = c( (pj, gm) => {
        function X2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        gm.exports = X2
    }
    );
    var Em = c( (gj, hm) => {
        var j2 = Kn();
        function z2(e) {
            return typeof e == "function" ? e : j2
        }
        hm.exports = z2
    }
    );
    var ym = c( (vj, mm) => {
        var K2 = vm()
          , Y2 = Ua()
          , $2 = Em()
          , Q2 = Oe();
        function Z2(e, t) {
            var r = Q2(e) ? K2 : Y2;
            return r(e, $2(t))
        }
        mm.exports = Z2
    }
    );
    var bm = c( (hj, _m) => {
        var J2 = Ye()
          , ek = function() {
            return J2.Date.now()
        };
        _m.exports = ek
    }
    );
    var Om = c( (Ej, Im) => {
        var tk = at()
          , Ja = bm()
          , Tm = Yn()
          , rk = "Expected a function"
          , nk = Math.max
          , ik = Math.min;
        function ok(e, t, r) {
            var n, i, o, a, s, u, l = 0, m = !1, p = !1, g = !0;
            if (typeof e != "function")
                throw new TypeError(rk);
            t = Tm(t) || 0,
            tk(r) && (m = !!r.leading,
            p = "maxWait"in r,
            o = p ? nk(Tm(r.maxWait) || 0, t) : o,
            g = "trailing"in r ? !!r.trailing : g);
            function h(P) {
                var z = n
                  , K = i;
                return n = i = void 0,
                l = P,
                a = e.apply(K, z),
                a
            }
            function T(P) {
                return l = P,
                s = setTimeout(_, t),
                m ? h(P) : a
            }
            function b(P) {
                var z = P - u
                  , K = P - l
                  , $ = t - z;
                return p ? ik($, o - K) : $
            }
            function w(P) {
                var z = P - u
                  , K = P - l;
                return u === void 0 || z >= t || z < 0 || p && K >= o
            }
            function _() {
                var P = Ja();
                if (w(P))
                    return C(P);
                s = setTimeout(_, b(P))
            }
            function C(P) {
                return s = void 0,
                g && n ? h(P) : (n = i = void 0,
                a)
            }
            function x() {
                s !== void 0 && clearTimeout(s),
                l = 0,
                n = u = i = s = void 0
            }
            function N() {
                return s === void 0 ? a : C(Ja())
            }
            function M() {
                var P = Ja()
                  , z = w(P);
                if (n = arguments,
                i = this,
                u = P,
                z) {
                    if (s === void 0)
                        return T(u);
                    if (p)
                        return clearTimeout(s),
                        s = setTimeout(_, t),
                        h(u)
                }
                return s === void 0 && (s = setTimeout(_, t)),
                a
            }
            return M.cancel = x,
            M.flush = N,
            M
        }
        Im.exports = ok
    }
    );
    var Am = c( (mj, wm) => {
        var ak = Om()
          , sk = at()
          , uk = "Expected a function";
        function ck(e, t, r) {
            var n = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(uk);
            return sk(r) && (n = "leading"in r ? !!r.leading : n,
            i = "trailing"in r ? !!r.trailing : i),
            ak(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        wm.exports = ck
    }
    );
    var Sm = {};
    Fe(Sm, {
        actionListPlaybackChanged: () => vr,
        animationFrameChanged: () => di,
        clearRequested: () => qk,
        elementStateChanged: () => ss,
        eventListenerAdded: () => fi,
        eventStateChanged: () => is,
        instanceAdded: () => os,
        instanceRemoved: () => as,
        instanceStarted: () => pi,
        mediaQueriesDefined: () => cs,
        parameterChanged: () => gr,
        playbackRequested: () => Lk,
        previewRequested: () => Nk,
        rawDataImported: () => es,
        sessionInitialized: () => ts,
        sessionStarted: () => rs,
        sessionStopped: () => ns,
        stopRequested: () => Pk,
        testFrameRendered: () => Mk,
        viewportWidthChanged: () => us
    });
    var xm, lk, fk, dk, pk, gk, vk, hk, Ek, mk, yk, _k, bk, Tk, Ik, Ok, wk, Ak, xk, Sk, Ck, Rk, es, ts, rs, ns, Nk, Lk, Pk, qk, fi, Mk, is, di, gr, os, pi, as, ss, vr, us, cs, gi = he( () => {
        "use strict";
        Ge();
        xm = le(kt()),
        {IX2_RAW_DATA_IMPORTED: lk, IX2_SESSION_INITIALIZED: fk, IX2_SESSION_STARTED: dk, IX2_SESSION_STOPPED: pk, IX2_PREVIEW_REQUESTED: gk, IX2_PLAYBACK_REQUESTED: vk, IX2_STOP_REQUESTED: hk, IX2_CLEAR_REQUESTED: Ek, IX2_EVENT_LISTENER_ADDED: mk, IX2_TEST_FRAME_RENDERED: yk, IX2_EVENT_STATE_CHANGED: _k, IX2_ANIMATION_FRAME_CHANGED: bk, IX2_PARAMETER_CHANGED: Tk, IX2_INSTANCE_ADDED: Ik, IX2_INSTANCE_STARTED: Ok, IX2_INSTANCE_REMOVED: wk, IX2_ELEMENT_STATE_CHANGED: Ak, IX2_ACTION_LIST_PLAYBACK_CHANGED: xk, IX2_VIEWPORT_WIDTH_CHANGED: Sk, IX2_MEDIA_QUERIES_DEFINED: Ck} = Ie,
        {reifyState: Rk} = xm.IX2VanillaUtils,
        es = e => ({
            type: lk,
            payload: {
                ...Rk(e)
            }
        }),
        ts = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: fk,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        rs = () => ({
            type: dk
        }),
        ns = () => ({
            type: pk
        }),
        Nk = ({rawData: e, defer: t}) => ({
            type: gk,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        Lk = ({actionTypeId: e=ke.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: u}) => ({
            type: vk,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }),
        Pk = e => ({
            type: hk,
            payload: {
                actionListId: e
            }
        }),
        qk = () => ({
            type: Ek
        }),
        fi = (e, t) => ({
            type: mk,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        Mk = (e=1) => ({
            type: yk,
            payload: {
                step: e
            }
        }),
        is = (e, t) => ({
            type: _k,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        di = (e, t) => ({
            type: bk,
            payload: {
                now: e,
                parameters: t
            }
        }),
        gr = (e, t) => ({
            type: Tk,
            payload: {
                key: e,
                value: t
            }
        }),
        os = e => ({
            type: Ik,
            payload: {
                ...e
            }
        }),
        pi = (e, t) => ({
            type: Ok,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        as = e => ({
            type: wk,
            payload: {
                instanceId: e
            }
        }),
        ss = (e, t, r, n) => ({
            type: Ak,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }),
        vr = ({actionListId: e, isPlaying: t}) => ({
            type: xk,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        us = ({width: e, mediaQueries: t}) => ({
            type: Sk,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        cs = () => ({
            type: Ck
        })
    }
    );
    var qe = {};
    Fe(qe, {
        elementContains: () => ds,
        getChildElements: () => Xk,
        getClosestElement: () => Jr,
        getProperty: () => Uk,
        getQuerySelector: () => fs,
        getRefType: () => ps,
        getSiblingElements: () => jk,
        getStyle: () => Gk,
        getValidDocument: () => Bk,
        isSiblingNode: () => Wk,
        matchSelector: () => Vk,
        queryDocument: () => Hk,
        setStyle: () => kk
    });
    function kk(e, t, r) {
        e.style[t] = r
    }
    function Gk(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function Uk(e, t) {
        return e[t]
    }
    function Vk(e) {
        return t => t[ls](e)
    }
    function fs({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(Cm) !== -1) {
                let n = e.split(Cm)
                  , i = n[0];
                if (r = n[1],
                i !== document.documentElement.getAttribute(Nm))
                    return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }
    function Bk(e) {
        return e == null || e === document.documentElement.getAttribute(Nm) ? document : null
    }
    function Hk(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function ds(e, t) {
        return e.contains(t)
    }
    function Wk(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function Xk(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: i} = e[r]
              , {length: o} = i;
            if (o)
                for (let a = 0; a < o; a++)
                    t.push(i[a])
        }
        return t
    }
    function jk(e=[]) {
        let t = []
          , r = [];
        for (let n = 0, {length: i} = e; n < i; n++) {
            let {parentNode: o} = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
                continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function ps(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? Fk : Dk : null
    }
    var Rm, ls, Cm, Fk, Dk, Nm, Jr, Lm = he( () => {
        "use strict";
        Rm = le(kt());
        Ge();
        ({ELEMENT_MATCHES: ls} = Rm.IX2BrowserSupport),
        {IX2_ID_DELIMITER: Cm, HTML_ELEMENT: Fk, PLAIN_OBJECT: Dk, WF_PAGE: Nm} = Ce;
        Jr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[ls] && r[ls](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    }
    );
    var gs = c( (bj, qm) => {
        var zk = at()
          , Pm = Object.create
          , Kk = function() {
            function e() {}
            return function(t) {
                if (!zk(t))
                    return {};
                if (Pm)
                    return Pm(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        qm.exports = Kk
    }
    );
    var vi = c( (Tj, Mm) => {
        function Yk() {}
        Mm.exports = Yk
    }
    );
    var Ei = c( (Ij, Fm) => {
        var $k = gs()
          , Qk = vi();
        function hi(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        hi.prototype = $k(Qk.prototype);
        hi.prototype.constructor = hi;
        Fm.exports = hi
    }
    );
    var Um = c( (Oj, Gm) => {
        var Dm = jt()
          , Zk = Fr()
          , Jk = Oe()
          , km = Dm ? Dm.isConcatSpreadable : void 0;
        function eG(e) {
            return Jk(e) || Zk(e) || !!(km && e && e[km])
        }
        Gm.exports = eG
    }
    );
    var Hm = c( (wj, Bm) => {
        var tG = Fn()
          , rG = Um();
        function Vm(e, t, r, n, i) {
            var o = -1
              , a = e.length;
            for (r || (r = rG),
            i || (i = []); ++o < a; ) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? Vm(s, t - 1, r, n, i) : tG(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        Bm.exports = Vm
    }
    );
    var Xm = c( (Aj, Wm) => {
        var nG = Hm();
        function iG(e) {
            var t = e == null ? 0 : e.length;
            return t ? nG(e, 1) : []
        }
        Wm.exports = iG
    }
    );
    var zm = c( (xj, jm) => {
        function oG(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        jm.exports = oG
    }
    );
    var $m = c( (Sj, Ym) => {
        var aG = zm()
          , Km = Math.max;
        function sG(e, t, r) {
            return t = Km(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, i = -1, o = Km(n.length - t, 0), a = Array(o); ++i < o; )
                    a[i] = n[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t; )
                    s[i] = n[i];
                return s[t] = r(a),
                aG(e, this, s)
            }
        }
        Ym.exports = sG
    }
    );
    var Zm = c( (Cj, Qm) => {
        function uG(e) {
            return function() {
                return e
            }
        }
        Qm.exports = uG
    }
    );
    var ty = c( (Rj, ey) => {
        var cG = Zm()
          , Jm = Qa()
          , lG = Kn()
          , fG = Jm ? function(e, t) {
            return Jm(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: cG(t),
                writable: !0
            })
        }
        : lG;
        ey.exports = fG
    }
    );
    var ny = c( (Nj, ry) => {
        var dG = 800
          , pG = 16
          , gG = Date.now;
        function vG(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = gG()
                  , i = pG - (n - r);
                if (r = n,
                i > 0) {
                    if (++t >= dG)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        ry.exports = vG
    }
    );
    var oy = c( (Lj, iy) => {
        var hG = ty()
          , EG = ny()
          , mG = EG(hG);
        iy.exports = mG
    }
    );
    var sy = c( (Pj, ay) => {
        var yG = Xm()
          , _G = $m()
          , bG = oy();
        function TG(e) {
            return bG(_G(e, void 0, yG), e + "")
        }
        ay.exports = TG
    }
    );
    var ly = c( (qj, cy) => {
        var uy = aa()
          , IG = uy && new uy;
        cy.exports = IG
    }
    );
    var dy = c( (Mj, fy) => {
        function OG() {}
        fy.exports = OG
    }
    );
    var vs = c( (Fj, gy) => {
        var py = ly()
          , wG = dy()
          , AG = py ? function(e) {
            return py.get(e)
        }
        : wG;
        gy.exports = AG
    }
    );
    var hy = c( (Dj, vy) => {
        var xG = {};
        vy.exports = xG
    }
    );
    var hs = c( (kj, my) => {
        var Ey = hy()
          , SG = Object.prototype
          , CG = SG.hasOwnProperty;
        function RG(e) {
            for (var t = e.name + "", r = Ey[t], n = CG.call(Ey, t) ? r.length : 0; n--; ) {
                var i = r[n]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        my.exports = RG
    }
    );
    var yi = c( (Gj, yy) => {
        var NG = gs()
          , LG = vi()
          , PG = 4294967295;
        function mi(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = PG,
            this.__views__ = []
        }
        mi.prototype = NG(LG.prototype);
        mi.prototype.constructor = mi;
        yy.exports = mi
    }
    );
    var by = c( (Uj, _y) => {
        function qG(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        _y.exports = qG
    }
    );
    var Iy = c( (Vj, Ty) => {
        var MG = yi()
          , FG = Ei()
          , DG = by();
        function kG(e) {
            if (e instanceof MG)
                return e.clone();
            var t = new FG(e.__wrapped__,e.__chain__);
            return t.__actions__ = DG(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        Ty.exports = kG
    }
    );
    var Ay = c( (Bj, wy) => {
        var GG = yi()
          , Oy = Ei()
          , UG = vi()
          , VG = Oe()
          , BG = dt()
          , HG = Iy()
          , WG = Object.prototype
          , XG = WG.hasOwnProperty;
        function _i(e) {
            if (BG(e) && !VG(e) && !(e instanceof GG)) {
                if (e instanceof Oy)
                    return e;
                if (XG.call(e, "__wrapped__"))
                    return HG(e)
            }
            return new Oy(e)
        }
        _i.prototype = UG.prototype;
        _i.prototype.constructor = _i;
        wy.exports = _i
    }
    );
    var Sy = c( (Hj, xy) => {
        var jG = yi()
          , zG = vs()
          , KG = hs()
          , YG = Ay();
        function $G(e) {
            var t = KG(e)
              , r = YG[t];
            if (typeof r != "function" || !(t in jG.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = zG(r);
            return !!n && e === n[0]
        }
        xy.exports = $G
    }
    );
    var Ly = c( (Wj, Ny) => {
        var Cy = Ei()
          , QG = sy()
          , ZG = vs()
          , Es = hs()
          , JG = Oe()
          , Ry = Sy()
          , eU = "Expected a function"
          , tU = 8
          , rU = 32
          , nU = 128
          , iU = 256;
        function oU(e) {
            return QG(function(t) {
                var r = t.length
                  , n = r
                  , i = Cy.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var o = t[n];
                    if (typeof o != "function")
                        throw new TypeError(eU);
                    if (i && !a && Es(o) == "wrapper")
                        var a = new Cy([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    o = t[n];
                    var s = Es(o)
                      , u = s == "wrapper" ? ZG(o) : void 0;
                    u && Ry(u[0]) && u[1] == (nU | tU | rU | iU) && !u[4].length && u[9] == 1 ? a = a[Es(u[0])].apply(a, u[3]) : a = o.length == 1 && Ry(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var l = arguments
                      , m = l[0];
                    if (a && l.length == 1 && JG(m))
                        return a.plant(m).value();
                    for (var p = 0, g = r ? t[p].apply(this, l) : m; ++p < r; )
                        g = t[p].call(this, g);
                    return g
                }
            })
        }
        Ny.exports = oU
    }
    );
    var qy = c( (Xj, Py) => {
        var aU = Ly()
          , sU = aU();
        Py.exports = sU
    }
    );
    var Fy = c( (jj, My) => {
        function uU(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        My.exports = uU
    }
    );
    var ky = c( (zj, Dy) => {
        var cU = Fy()
          , ms = Yn();
        function lU(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = ms(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = ms(t),
            t = t === t ? t : 0),
            cU(ms(e), t, r)
        }
        Dy.exports = lU
    }
    );
    var zy, Ky, Yy, $y, fU, dU, pU, gU, vU, hU, EU, mU, yU, _U, bU, TU, IU, OU, wU, Qy, Zy, AU, xU, SU, Jy, CU, RU, e_, NU, ys, t_, Gy, Uy, r_, tn, LU, ct, n_, PU, Ve, Ze, rn, i_, _s, Vy, bs, qU, en, MU, FU, DU, o_, By, kU, Hy, GU, UU, VU, Wy, bi, Ti, Xy, jy, a_, s_ = he( () => {
        "use strict";
        zy = le(qy()),
        Ky = le(zn()),
        Yy = le(ky());
        Ge();
        Ts();
        gi();
        $y = le(kt()),
        {MOUSE_CLICK: fU, MOUSE_SECOND_CLICK: dU, MOUSE_DOWN: pU, MOUSE_UP: gU, MOUSE_OVER: vU, MOUSE_OUT: hU, DROPDOWN_CLOSE: EU, DROPDOWN_OPEN: mU, SLIDER_ACTIVE: yU, SLIDER_INACTIVE: _U, TAB_ACTIVE: bU, TAB_INACTIVE: TU, NAVBAR_CLOSE: IU, NAVBAR_OPEN: OU, MOUSE_MOVE: wU, PAGE_SCROLL_DOWN: Qy, SCROLL_INTO_VIEW: Zy, SCROLL_OUT_OF_VIEW: AU, PAGE_SCROLL_UP: xU, SCROLLING_IN_VIEW: SU, PAGE_FINISH: Jy, ECOMMERCE_CART_CLOSE: CU, ECOMMERCE_CART_OPEN: RU, PAGE_START: e_, PAGE_SCROLL: NU} = $e,
        ys = "COMPONENT_ACTIVE",
        t_ = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Gy} = Ce,
        {getNamespacedParameterId: Uy} = $y.IX2VanillaUtils,
        r_ = e => t => typeof t == "object" && e(t) ? !0 : t,
        tn = r_( ({element: e, nativeEvent: t}) => e === t.target),
        LU = r_( ({element: e, nativeEvent: t}) => e.contains(t.target)),
        ct = (0,
        zy.default)([tn, LU]),
        n_ = (e, t) => {
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , i = n[t];
                if (i && !qU[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        PU = ({store: e, event: t}) => {
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!n_(e, n)
        }
        ,
        Ve = ({store: e, event: t, element: r, eventStateKey: n}, i) => {
            let {action: o, id: a} = t
              , {actionListId: s, autoStopEventId: u} = o.config
              , l = n_(e, u);
            return l && hr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Gy + n.split(Gy)[1],
                actionListId: (0,
                Ky.default)(l, "action.config.actionListId")
            }),
            hr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            nn({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            i
        }
        ,
        Ze = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
        rn = {
            handler: Ze(ct, Ve)
        },
        i_ = {
            ...rn,
            types: [ys, t_].join(" ")
        },
        _s = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        Vy = "mouseover mouseout",
        bs = {
            types: _s
        },
        qU = {
            PAGE_START: e_,
            PAGE_FINISH: Jy
        },
        en = ( () => {
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                Yy.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        MU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        FU = ({element: e, nativeEvent: t}) => {
            let {type: r, target: n, relatedTarget: i} = t
              , o = e.contains(n);
            if (r === "mouseover" && o)
                return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }
        ,
        DU = e => {
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: i} = en()
              , o = r.scrollOffsetValue
              , u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return MU(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }
        ,
        o_ = e => (t, r) => {
            let {type: n} = t.nativeEvent
              , i = [ys, t_].indexOf(n) !== -1 ? n === ys : r.isActive
              , o = {
                ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }
        ,
        By = e => (t, r) => {
            let n = {
                elementHovered: FU(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
        ,
        kU = e => (t, r) => {
            let n = {
                ...r,
                elementVisible: DU(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
        ,
        Hy = e => (t, r={}) => {
            let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = en()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: u, scrollOffsetUnit: l} = a
              , m = l === "PX"
              , p = i - o
              , g = Number((n / p).toFixed(2));
            if (r && r.percentTop === g)
                return r;
            let h = (m ? u : o * (u || 0) / 100) / p, T, b, w = 0;
            r && (T = g > r.percentTop,
            b = r.scrollingDown !== T,
            w = b ? g : r.anchorTop);
            let _ = s === Qy ? g >= w + h : g <= w - h
              , C = {
                ...r,
                percentTop: g,
                inBounds: _,
                anchorTop: w,
                scrollingDown: T
            };
            return r && _ && (b || C.inBounds !== r.inBounds) && e(t, C) || C
        }
        ,
        GU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        UU = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
        ,
        VU = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
        ,
        Wy = e => (t, r={
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
        ,
        bi = (e=!0) => ({
            ...i_,
            handler: Ze(e ? ct : tn, o_( (t, r) => r.isActive ? rn.handler(t, r) : r))
        }),
        Ti = (e=!0) => ({
            ...i_,
            handler: Ze(e ? ct : tn, o_( (t, r) => r.isActive ? r : rn.handler(t, r)))
        }),
        Xy = {
            ...bs,
            handler: kU( (e, t) => {
                let {elementVisible: r} = t
                  , {event: n, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: a} = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Zy === r ? (Ve(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        jy = .05,
        a_ = {
            [yU]: bi(),
            [_U]: Ti(),
            [mU]: bi(),
            [EU]: Ti(),
            [OU]: bi(!1),
            [IU]: Ti(!1),
            [bU]: bi(),
            [TU]: Ti(),
            [RU]: {
                types: "ecommerce-cart-open",
                handler: Ze(ct, Ve)
            },
            [CU]: {
                types: "ecommerce-cart-close",
                handler: Ze(ct, Ve)
            },
            [fU]: {
                types: "click",
                handler: Ze(ct, Wy( (e, {clickCount: t}) => {
                    PU(e) ? t === 1 && Ve(e) : Ve(e)
                }
                ))
            },
            [dU]: {
                types: "click",
                handler: Ze(ct, Wy( (e, {clickCount: t}) => {
                    t === 2 && Ve(e)
                }
                ))
            },
            [pU]: {
                ...rn,
                types: "mousedown"
            },
            [gU]: {
                ...rn,
                types: "mouseup"
            },
            [vU]: {
                types: Vy,
                handler: Ze(ct, By( (e, t) => {
                    t.elementHovered && Ve(e)
                }
                ))
            },
            [hU]: {
                types: Vy,
                handler: Ze(ct, By( (e, t) => {
                    t.elementHovered || Ve(e)
                }
                ))
            },
            [wU]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i}, o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: l, restingState: m=0} = r
                      , {clientX: p=o.clientX, clientY: g=o.clientY, pageX: h=o.pageX, pageY: T=o.pageY} = n
                      , b = s === "X_AXIS"
                      , w = n.type === "mouseout"
                      , _ = m / 100
                      , C = u
                      , x = !1;
                    switch (a) {
                    case ot.VIEWPORT:
                        {
                            _ = b ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case ot.PAGE:
                        {
                            let {scrollLeft: N, scrollTop: M, scrollWidth: P, scrollHeight: z} = en();
                            _ = b ? Math.min(N + h, P) / P : Math.min(M + T, z) / z;
                            break
                        }
                    case ot.ELEMENT:
                    default:
                        {
                            C = Uy(i, u);
                            let N = n.type.indexOf("mouse") === 0;
                            if (N && ct({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let M = t.getBoundingClientRect()
                              , {left: P, top: z, width: K, height: $} = M;
                            if (!N && !GU({
                                left: p,
                                top: g
                            }, M))
                                break;
                            x = !0,
                            _ = b ? (p - P) / K : (g - z) / $;
                            break
                        }
                    }
                    return w && (_ > 1 - jy || _ < jy) && (_ = Math.round(_)),
                    (a !== ot.ELEMENT || x || x !== o.elementHovered) && (_ = l ? 1 - _ : _,
                    e.dispatch(gr(C, _))),
                    {
                        elementHovered: x,
                        clientX: p,
                        clientY: g,
                        pageX: h,
                        pageY: T
                    }
                }
            },
            [NU]: {
                types: _s,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: a} = en()
                      , s = i / (o - a);
                    s = n ? 1 - s : s,
                    e.dispatch(gr(r, s))
                }
            },
            [SU]: {
                types: _s,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, i={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: l} = en()
                      , {basedOn: m, selectedAxis: p, continuousParameterGroupId: g, startsEntering: h, startsExiting: T, addEndOffset: b, addStartOffset: w, addOffsetValue: _=0, endOffsetValue: C=0} = r
                      , x = p === "X_AXIS";
                    if (m === ot.VIEWPORT) {
                        let N = x ? o / s : a / u;
                        return N !== i.scrollPercent && t.dispatch(gr(g, N)),
                        {
                            scrollPercent: N
                        }
                    } else {
                        let N = Uy(n, g)
                          , M = e.getBoundingClientRect()
                          , P = (w ? _ : 0) / 100
                          , z = (b ? C : 0) / 100;
                        P = h ? P : 1 - P,
                        z = T ? z : 1 - z;
                        let K = M.top + Math.min(M.height * P, l)
                          , Z = M.top + M.height * z - K
                          , G = Math.min(l + Z, u)
                          , v = Math.min(Math.max(0, l - K), G) / G;
                        return v !== i.scrollPercent && t.dispatch(gr(N, v)),
                        {
                            scrollPercent: v
                        }
                    }
                }
            },
            [Zy]: Xy,
            [AU]: Xy,
            [Qy]: {
                ...bs,
                handler: Hy( (e, t) => {
                    t.scrollingDown && Ve(e)
                }
                )
            },
            [xU]: {
                ...bs,
                handler: Hy( (e, t) => {
                    t.scrollingDown || Ve(e)
                }
                )
            },
            [Jy]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ze(tn, UU(Ve))
            },
            [e_]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ze(tn, VU(Ve))
            }
        }
    }
    );
    var O_ = {};
    Fe(O_, {
        observeRequests: () => sV,
        startActionGroup: () => nn,
        startEngine: () => Si,
        stopActionGroup: () => hr,
        stopAllActionGroups: () => b_,
        stopEngine: () => Ci
    });
    function sV(e) {
        Gt({
            store: e,
            select: ({ixRequest: t}) => t.preview,
            onChange: lV
        }),
        Gt({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: fV
        }),
        Gt({
            store: e,
            select: ({ixRequest: t}) => t.stop,
            onChange: dV
        }),
        Gt({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: pV
        })
    }
    function uV(e) {
        Gt({
            store: e,
            select: ({ixSession: t}) => t.mediaQueryKey,
            onChange: () => {
                Ci(e),
                E_({
                    store: e,
                    elementApi: qe
                }),
                Si({
                    store: e,
                    allowEvents: !0
                }),
                m_()
            }
        })
    }
    function cV(e, t) {
        let r = Gt({
            store: e,
            select: ({ixSession: n}) => n.tick,
            onChange: n => {
                t(n),
                r()
            }
        })
    }
    function lV({rawData: e, defer: t}, r) {
        let n = () => {
            Si({
                store: r,
                rawData: e,
                allowEvents: !0
            }),
            m_()
        }
        ;
        t ? setTimeout(n, 0) : n()
    }
    function m_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function fV(e, t) {
        let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: u, verbose: l=!0} = e
          , {rawData: m} = e;
        if (n && i && m && s) {
            let p = m.actionLists[n];
            p && (m = $U({
                actionList: p,
                actionItemId: i,
                rawData: m
            }))
        }
        if (Si({
            store: t,
            rawData: m,
            allowEvents: a,
            testManual: u
        }),
        n && r === ke.GENERAL_START_ACTION || Is(r)) {
            hr({
                store: t,
                actionListId: n
            }),
            __({
                store: t,
                actionListId: n,
                eventId: o
            });
            let p = nn({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: l
            });
            l && p && t.dispatch(vr({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }
    function dV({actionListId: e}, t) {
        e ? hr({
            store: t,
            actionListId: e
        }) : b_({
            store: t
        }),
        Ci(t)
    }
    function pV(e, t) {
        Ci(t),
        E_({
            store: t,
            elementApi: qe
        })
    }
    function Si({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(es(t)),
        i.active || (e.dispatch(ts({
            hasBoundaryNodes: !!document.querySelector(Oi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        r && (yV(e),
        gV(),
        e.getState().ixSession.hasDefinedMediaQueries && uV(e)),
        e.dispatch(rs()),
        vV(e, n))
    }
    function gV() {
        let {documentElement: e} = document;
        e.className.indexOf(u_) === -1 && (e.className += ` ${u_}`)
    }
    function vV(e, t) {
        let r = n => {
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(di(n, o)),
            t ? cV(e, r) : requestAnimationFrame(r))
        }
        ;
        r(window.performance.now())
    }
    function Ci(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(hV),
            eV(),
            e.dispatch(ns())
        }
    }
    function hV({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function EV({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: u}) {
        let {ixData: l, ixSession: m} = e.getState()
          , {events: p} = l
          , g = p[n]
          , {eventTypeId: h} = g
          , T = {}
          , b = {}
          , w = []
          , {continuousActionGroups: _} = a
          , {id: C} = a;
        QU(h, i) && (C = ZU(t, C));
        let x = m.hasBoundaryNodes && r ? Jr(r, Oi) : null;
        _.forEach(N => {
            let {keyframe: M, actionItems: P} = N;
            P.forEach(z => {
                let {actionTypeId: K} = z
                  , {target: $} = z.config;
                if (!$)
                    return;
                let Z = $.boundaryMode ? x : null
                  , G = tV($) + Os + K;
                if (b[G] = mV(b[G], M, z),
                !T[G]) {
                    T[G] = !0;
                    let {config: A} = z;
                    wi({
                        config: A,
                        event: g,
                        eventTarget: r,
                        elementRoot: Z,
                        elementApi: qe
                    }).forEach(v => {
                        w.push({
                            element: v,
                            key: G
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        w.forEach( ({element: N, key: M}) => {
            let P = b[M]
              , z = (0,
            ht.default)(P, "[0].actionItems[0]", {})
              , {actionTypeId: K} = z
              , $ = xi(K) ? As(K)(N, z) : null
              , Z = ws({
                element: N,
                actionItem: z,
                elementApi: qe
            }, $);
            xs({
                store: e,
                element: N,
                eventId: n,
                actionListId: o,
                actionItem: z,
                destination: Z,
                continuous: !0,
                parameterId: C,
                actionGroups: P,
                smoothing: s,
                restingValue: u,
                pluginInstance: $
            })
        }
        )
    }
    function mV(e=[], t, r) {
        let n = [...e], i;
        return n.some( (o, a) => o.keyframe === t ? (i = a,
        !0) : !1),
        i == null && (i = n.length,
        n.push({
            keyframe: t,
            actionItems: []
        })),
        n[i].actionItems.push(r),
        n
    }
    function yV(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: r} = t;
        y_(e),
        (0,
        Er.default)(r, (i, o) => {
            let a = a_[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            wV({
                logic: a,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: n} = e.getState();
        n.eventListeners.length && bV(e)
    }
    function bV(e) {
        let t = () => {
            y_(e)
        }
        ;
        _V.forEach(r => {
            window.addEventListener(r, t),
            e.dispatch(fi(window, [r, t]))
        }
        ),
        t()
    }
    function y_(e) {
        let {ixSession: t, ixData: r} = e.getState()
          , n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: i} = r;
            e.dispatch(us({
                width: n,
                mediaQueries: i
            }))
        }
    }
    function wV({logic: e, store: t, events: r}) {
        AV(r);
        let {types: n, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: a} = o
          , s = TV(r, OV);
        if (!(0,
        f_.default)(s))
            return;
        (0,
        Er.default)(s, (p, g) => {
            let h = r[g]
              , {action: T, id: b, mediaQueries: w=o.mediaQueryKeys} = h
              , {actionListId: _} = T.config;
            rV(w, o.mediaQueryKeys) || t.dispatch(cs()),
            T.actionTypeId === ke.GENERAL_CONTINUOUS_ACTION && (Array.isArray(h.config) ? h.config : [h.config]).forEach(x => {
                let {continuousParameterGroupId: N} = x
                  , M = (0,
                ht.default)(a, `${_}.continuousParameterGroups`, [])
                  , P = (0,
                l_.default)(M, ({id: $}) => $ === N)
                  , z = (x.smoothing || 0) / 100
                  , K = (x.restingState || 0) / 100;
                P && p.forEach( ($, Z) => {
                    let G = b + Os + Z;
                    EV({
                        store: t,
                        eventStateKey: G,
                        eventTarget: $,
                        eventId: b,
                        eventConfig: x,
                        actionListId: _,
                        parameterGroup: P,
                        smoothing: z,
                        restingValue: K
                    })
                }
                )
            }
            ),
            (T.actionTypeId === ke.GENERAL_START_ACTION || Is(T.actionTypeId)) && __({
                store: t,
                actionListId: _,
                eventId: b
            })
        }
        );
        let u = p => {
            let {ixSession: g} = t.getState();
            IV(s, (h, T, b) => {
                let w = r[T]
                  , _ = g.eventState[b]
                  , {action: C, mediaQueries: x=o.mediaQueryKeys} = w;
                if (!Ai(x, g.mediaQueryKey))
                    return;
                let N = (M={}) => {
                    let P = i({
                        store: t,
                        element: h,
                        event: w,
                        eventConfig: M,
                        nativeEvent: p,
                        eventStateKey: b
                    }, _);
                    nV(P, _) || t.dispatch(is(b, P))
                }
                ;
                C.actionTypeId === ke.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(w.config) ? w.config : [w.config]).forEach(N) : N()
            }
            )
        }
          , l = (0,
        v_.default)(u, aV)
          , m = ({target: p=document, types: g, throttle: h}) => {
            g.split(" ").filter(Boolean).forEach(T => {
                let b = h ? l : u;
                p.addEventListener(T, b),
                t.dispatch(fi(p, [T, b]))
            }
            )
        }
        ;
        Array.isArray(n) ? n.forEach(m) : typeof n == "string" && m(e)
    }
    function AV(e) {
        if (!oV)
            return;
        let t = {}
          , r = "";
        for (let n in e) {
            let {eventTypeId: i, target: o} = e[n]
              , a = fs(o);
            t[a] || (i === $e.MOUSE_CLICK || i === $e.MOUSE_SECOND_CLICK) && (t[a] = !0,
            r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r,
            document.body.appendChild(n)
        }
    }
    function __({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: i} = e.getState()
          , {actionLists: o, events: a} = n
          , s = a[r]
          , u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0,
            ht.default)(u, "actionItemGroups[0].actionItems", [])
              , m = (0,
            ht.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Ai(m, i.mediaQueryKey))
                return;
            l.forEach(p => {
                let {config: g, actionTypeId: h} = p
                  , T = g?.target?.useEventTarget === !0 && g?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : g
                  , b = wi({
                    config: T,
                    event: s,
                    elementApi: qe
                })
                  , w = xi(h);
                b.forEach(_ => {
                    let C = w ? As(h)(_, p) : null;
                    xs({
                        destination: ws({
                            element: _,
                            actionItem: p,
                            elementApi: qe
                        }, C),
                        immediate: !0,
                        store: e,
                        element: _,
                        eventId: r,
                        actionItem: p,
                        actionListId: t,
                        pluginInstance: C
                    })
                }
                )
            }
            )
        }
    }
    function b_({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        Er.default)(t, r => {
            if (!r.continuous) {
                let {actionListId: n, verbose: i} = r;
                Ss(r, e),
                i && e.dispatch(vr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function hr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState()
          , s = a.hasBoundaryNodes && r ? Jr(r, Oi) : null;
        (0,
        Er.default)(o, u => {
            let l = (0,
            ht.default)(u, "actionItem.config.target.boundaryMode")
              , m = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && m) {
                if (s && l && !ds(s, u.element))
                    return;
                Ss(u, e),
                u.verbose && e.dispatch(vr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function nn({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
        let {ixData: u, ixSession: l} = e.getState()
          , {events: m} = u
          , p = m[t] || {}
          , {mediaQueries: g=u.mediaQueryKeys} = p
          , h = (0,
        ht.default)(u, `actionLists.${i}`, {})
          , {actionItemGroups: T, useFirstGroupAsInitialState: b} = h;
        if (!T || !T.length)
            return !1;
        o >= T.length && (0,
        ht.default)(p, "config.loop") && (o = 0),
        o === 0 && b && o++;
        let _ = (o === 0 || o === 1 && b) && Is(p.action?.actionTypeId) ? p.config.delay : void 0
          , C = (0,
        ht.default)(T, [o, "actionItems"], []);
        if (!C.length || !Ai(g, l.mediaQueryKey))
            return !1;
        let x = l.hasBoundaryNodes && r ? Jr(r, Oi) : null
          , N = zU(C)
          , M = !1;
        return C.forEach( (P, z) => {
            let {config: K, actionTypeId: $} = P
              , Z = xi($)
              , {target: G} = K;
            if (!G)
                return;
            let A = G.boundaryMode ? x : null;
            wi({
                config: K,
                event: p,
                eventTarget: r,
                elementRoot: A,
                elementApi: qe
            }).forEach( (L, D) => {
                let U = Z ? As($)(L, P) : null
                  , te = Z ? iV($)(L, P) : null;
                M = !0;
                let re = N === z && D === 0
                  , F = KU({
                    element: L,
                    actionItem: P
                })
                  , X = ws({
                    element: L,
                    actionItem: P,
                    elementApi: qe
                }, U);
                xs({
                    store: e,
                    element: L,
                    actionItem: P,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: re,
                    computedStyle: F,
                    destination: X,
                    immediate: a,
                    verbose: s,
                    pluginInstance: U,
                    pluginDuration: te,
                    instanceDelay: _
                })
            }
            )
        }
        ),
        M
    }
    function xs(e) {
        let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: u, restingValue: l, eventId: m} = n, p = !u, g = XU(), {ixElements: h, ixSession: T, ixData: b} = t.getState(), w = WU(h, i), {refState: _} = h[w] || {}, C = ps(i), x = T.reducedMotion && zo[o.actionTypeId], N;
        if (x && u)
            switch (b.events[m]?.eventTypeId) {
            case $e.MOUSE_MOVE:
            case $e.MOUSE_MOVE_IN_VIEWPORT:
                N = l;
                break;
            default:
                N = .5;
                break
            }
        let M = YU(i, _, r, o, qe, s);
        if (t.dispatch(os({
            instanceId: g,
            elementId: w,
            origin: M,
            refType: C,
            skipMotion: x,
            skipToValue: N,
            ...n
        })),
        T_(document.body, "ix2-animation-started", g),
        a) {
            xV(t, g);
            return
        }
        Gt({
            store: t,
            select: ({ixInstances: P}) => P[g],
            onChange: I_
        }),
        p && t.dispatch(pi(g, T.tick))
    }
    function Ss(e, t) {
        T_(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: r, actionItem: n} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: a} = i[r] || {};
        a === h_ && JU(o, n, qe),
        t.dispatch(as(e.id))
    }
    function T_(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r),
        e.dispatchEvent(n)
    }
    function xV(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(pi(t, 0)),
        e.dispatch(di(performance.now(), r));
        let {ixInstances: n} = e.getState();
        I_(n[t], e)
    }
    function I_(e, t) {
        let {active: r, continuous: n, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: u, current: l, groupIndex: m, eventId: p, eventTarget: g, eventStateKey: h, actionListId: T, isCarrier: b, styleProp: w, verbose: _, pluginInstance: C} = e
          , {ixData: x, ixSession: N} = t.getState()
          , {events: M} = x
          , P = M[p] || {}
          , {mediaQueries: z=x.mediaQueryKeys} = P;
        if (Ai(z, N.mediaQueryKey) && (n || r || i)) {
            if (l || u === HU && i) {
                t.dispatch(ss(o, s, l, a));
                let {ixElements: K} = t.getState()
                  , {ref: $, refType: Z, refState: G} = K[o] || {}
                  , A = G && G[s];
                (Z === h_ || xi(s)) && jU($, G, A, p, a, w, qe, u, C)
            }
            if (i) {
                if (b) {
                    let K = nn({
                        store: t,
                        eventId: p,
                        eventTarget: g,
                        eventStateKey: h,
                        actionListId: T,
                        groupIndex: m + 1,
                        verbose: _
                    });
                    _ && !K && t.dispatch(vr({
                        actionListId: T,
                        isPlaying: !1
                    }))
                }
                Ss(e, t)
            }
        }
    }
    var l_, ht, f_, d_, p_, g_, Er, v_, Ii, BU, Is, Os, Oi, h_, HU, u_, wi, WU, ws, Gt, XU, jU, E_, zU, KU, YU, $U, QU, ZU, Ai, JU, eV, tV, rV, nV, xi, As, iV, c_, oV, aV, _V, TV, IV, OV, Ts = he( () => {
        "use strict";
        l_ = le(Ta()),
        ht = le(zn()),
        f_ = le(DE()),
        d_ = le(cm()),
        p_ = le(fm()),
        g_ = le(pm()),
        Er = le(ym()),
        v_ = le(Am());
        Ge();
        Ii = le(kt());
        gi();
        Lm();
        s_();
        BU = Object.keys(wn),
        Is = e => BU.includes(e),
        {COLON_DELIMITER: Os, BOUNDARY_SELECTOR: Oi, HTML_ELEMENT: h_, RENDER_GENERAL: HU, W_MOD_IX: u_} = Ce,
        {getAffectedElements: wi, getElementId: WU, getDestinationValues: ws, observeStore: Gt, getInstanceId: XU, renderHTMLElement: jU, clearAllStyles: E_, getMaxDurationItemIndex: zU, getComputedStyle: KU, getInstanceOrigin: YU, reduceListToGroup: $U, shouldNamespaceEventParameter: QU, getNamespacedParameterId: ZU, shouldAllowMediaQuery: Ai, cleanupHTMLElement: JU, clearObjectCache: eV, stringifyTarget: tV, mediaQueriesEqual: rV, shallowEqual: nV} = Ii.IX2VanillaUtils,
        {isPluginType: xi, createPluginInstance: As, getPluginDuration: iV} = Ii.IX2VanillaPlugins,
        c_ = navigator.userAgent,
        oV = c_.match(/iPad/i) || c_.match(/iPhone/),
        aV = 12;
        _V = ["resize", "orientationchange"];
        TV = (e, t) => (0,
        d_.default)((0,
        g_.default)(e, t), p_.default),
        IV = (e, t) => {
            (0,
            Er.default)(e, (r, n) => {
                r.forEach( (i, o) => {
                    let a = n + Os + o;
                    t(i, n, a)
                }
                )
            }
            )
        }
        ,
        OV = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return wi({
                config: t,
                elementApi: qe
            })
        }
    }
    );
    var A_ = c(Et => {
        "use strict";
        var SV = dn().default
          , CV = su().default;
        Object.defineProperty(Et, "__esModule", {
            value: !0
        });
        Et.actions = void 0;
        Et.destroy = w_;
        Et.init = qV;
        Et.setEnv = PV;
        Et.store = void 0;
        jl();
        var RV = Wo()
          , NV = CV((mE(),
        tt(EE)))
          , Cs = (Ts(),
        tt(O_))
          , LV = SV((gi(),
        tt(Sm)));
        Et.actions = LV;
        var Rs = Et.store = (0,
        RV.createStore)(NV.default);
        function PV(e) {
            e() && (0,
            Cs.observeRequests)(Rs)
        }
        function qV(e) {
            w_(),
            (0,
            Cs.startEngine)({
                store: Rs,
                rawData: e,
                allowEvents: !0
            })
        }
        function w_() {
            (0,
            Cs.stopEngine)(Rs)
        }
    }
    );
    var R_ = c( (rz, C_) => {
        "use strict";
        var x_ = De()
          , S_ = A_();
        S_.setEnv(x_.env);
        x_.define("ix2", C_.exports = function() {
            return S_
        }
        )
    }
    );
    var L_ = c( (nz, N_) => {
        "use strict";
        var mr = De();
        mr.define("links", N_.exports = function(e, t) {
            var r = {}, n = e(window), i, o = mr.env(), a = window.location, s = document.createElement("a"), u = "w--current", l = /index\.(html|php)$/, m = /\/$/, p, g;
            r.ready = r.design = r.preview = h;
            function h() {
                i = o && mr.env("design"),
                g = mr.env("slug") || a.pathname || "",
                mr.scroll.off(b),
                p = [];
                for (var _ = document.links, C = 0; C < _.length; ++C)
                    T(_[C]);
                p.length && (mr.scroll.on(b),
                b())
            }
            function T(_) {
                if (!_.getAttribute("hreflang")) {
                    var C = i && _.getAttribute("href-disabled") || _.getAttribute("href");
                    if (s.href = C,
                    !(C.indexOf(":") >= 0)) {
                        var x = e(_);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                return;
                            var N = e(s.hash);
                            N.length && p.push({
                                link: x,
                                sec: N,
                                active: !1
                            });
                            return
                        }
                        if (!(C === "#" || C === "")) {
                            var M = s.href === a.href || C === g || l.test(C) && m.test(g);
                            w(x, u, M)
                        }
                    }
                }
            }
            function b() {
                var _ = n.scrollTop()
                  , C = n.height();
                t.each(p, function(x) {
                    if (!x.link.attr("hreflang")) {
                        var N = x.link
                          , M = x.sec
                          , P = M.offset().top
                          , z = M.outerHeight()
                          , K = C * .5
                          , $ = M.is(":visible") && P + z - K >= _ && P + K <= _ + C;
                        x.active !== $ && (x.active = $,
                        w(N, u, $))
                    }
                })
            }
            function w(_, C, x) {
                var N = _.hasClass(C);
                x && N || !x && !N || (x ? _.addClass(C) : _.removeClass(C))
            }
            return r
        }
        )
    }
    );
    var q_ = c( (iz, P_) => {
        "use strict";
        var Ri = De();
        Ri.define("scroll", P_.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = T() ? null : window.history
              , i = e(window)
              , o = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(A) {
                window.setTimeout(A, 15)
            }
              , u = Ri.env("editor") ? ".w-editor-body" : "body"
              , l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
              , m = 'a[href="#"]'
              , p = 'a[href*="#"]:not(.w-tab-link):not(' + m + ")"
              , g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , h = document.createElement("style");
            h.appendChild(document.createTextNode(g));
            function T() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var b = /^#[a-zA-Z0-9][\w:.-]*$/;
            function w(A) {
                return b.test(A.hash) && A.host + A.pathname === r.host + r.pathname
            }
            let _ = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function C() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || _.matches
            }
            function x(A, v) {
                var L;
                switch (v) {
                case "add":
                    L = A.attr("tabindex"),
                    L ? A.attr("data-wf-tabindex-swap", L) : A.attr("tabindex", "-1");
                    break;
                case "remove":
                    L = A.attr("data-wf-tabindex-swap"),
                    L ? (A.attr("tabindex", L),
                    A.removeAttr("data-wf-tabindex-swap")) : A.removeAttr("tabindex");
                    break
                }
                A.toggleClass("wf-force-outline-none", v === "add")
            }
            function N(A) {
                var v = A.currentTarget;
                if (!(Ri.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))) {
                    var L = w(v) ? v.hash : "";
                    if (L !== "") {
                        var D = e(L);
                        D.length && (A && (A.preventDefault(),
                        A.stopPropagation()),
                        M(L, A),
                        window.setTimeout(function() {
                            P(D, function() {
                                x(D, "add"),
                                D.get(0).focus({
                                    preventScroll: !0
                                }),
                                x(D, "remove")
                            })
                        }, A ? 0 : 300))
                    }
                }
            }
            function M(A) {
                if (r.hash !== A && n && n.pushState && !(Ri.env.chrome && r.protocol === "file:")) {
                    var v = n.state && n.state.hash;
                    v !== A && n.pushState({
                        hash: A
                    }, "", A)
                }
            }
            function P(A, v) {
                var L = i.scrollTop()
                  , D = z(A);
                if (L !== D) {
                    var U = K(A, L, D)
                      , te = Date.now()
                      , re = function() {
                        var F = Date.now() - te;
                        window.scroll(0, $(L, D, F, U)),
                        F <= U ? s(re) : typeof v == "function" && v()
                    };
                    s(re)
                }
            }
            function z(A) {
                var v = e(l)
                  , L = v.css("position") === "fixed" ? v.outerHeight() : 0
                  , D = A.offset().top - L;
                if (A.data("scroll") === "mid") {
                    var U = i.height() - L
                      , te = A.outerHeight();
                    te < U && (D -= Math.round((U - te) / 2))
                }
                return D
            }
            function K(A, v, L) {
                if (C())
                    return 0;
                var D = 1;
                return a.add(A).each(function(U, te) {
                    var re = parseFloat(te.getAttribute("data-scroll-time"));
                    !isNaN(re) && re >= 0 && (D = re)
                }),
                (472.143 * Math.log(Math.abs(v - L) + 125) - 2e3) * D
            }
            function $(A, v, L, D) {
                return L > D ? v : A + (v - A) * Z(L / D)
            }
            function Z(A) {
                return A < .5 ? 4 * A * A * A : (A - 1) * (2 * A - 2) * (2 * A - 2) + 1
            }
            function G() {
                var {WF_CLICK_EMPTY: A, WF_CLICK_SCROLL: v} = t;
                o.on(v, p, N),
                o.on(A, m, function(L) {
                    L.preventDefault()
                }),
                document.head.insertBefore(h, document.head.firstChild)
            }
            return {
                ready: G
            }
        }
        )
    }
    );
    var F_ = c( (oz, M_) => {
        "use strict";
        var MV = De();
        MV.define("touch", M_.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new n(o) : null
            }
            ;
            function n(o) {
                var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), l, m;
                o.addEventListener("touchstart", p, !1),
                o.addEventListener("touchmove", g, !1),
                o.addEventListener("touchend", h, !1),
                o.addEventListener("touchcancel", T, !1),
                o.addEventListener("mousedown", p, !1),
                o.addEventListener("mousemove", g, !1),
                o.addEventListener("mouseup", h, !1),
                o.addEventListener("mouseout", T, !1);
                function p(w) {
                    var _ = w.touches;
                    _ && _.length > 1 || (a = !0,
                    _ ? (s = !0,
                    l = _[0].clientX) : l = w.clientX,
                    m = l)
                }
                function g(w) {
                    if (a) {
                        if (s && w.type === "mousemove") {
                            w.preventDefault(),
                            w.stopPropagation();
                            return
                        }
                        var _ = w.touches
                          , C = _ ? _[0].clientX : w.clientX
                          , x = C - m;
                        m = C,
                        Math.abs(x) > u && r && String(r()) === "" && (i("swipe", w, {
                            direction: x > 0 ? "right" : "left"
                        }),
                        T())
                    }
                }
                function h(w) {
                    if (a && (a = !1,
                    s && w.type === "mouseup")) {
                        w.preventDefault(),
                        w.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function T() {
                    a = !1
                }
                function b() {
                    o.removeEventListener("touchstart", p, !1),
                    o.removeEventListener("touchmove", g, !1),
                    o.removeEventListener("touchend", h, !1),
                    o.removeEventListener("touchcancel", T, !1),
                    o.removeEventListener("mousedown", p, !1),
                    o.removeEventListener("mousemove", g, !1),
                    o.removeEventListener("mouseup", h, !1),
                    o.removeEventListener("mouseout", T, !1),
                    o = null
                }
                this.destroy = b
            }
            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var G_ = c( (az, k_) => {
        "use strict";
        var Ut = De()
          , FV = _r()
          , Je = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , D_ = !0
          , DV = /^#[a-zA-Z0-9\-_]+$/;
        Ut.define("dropdown", k_.exports = function(e, t) {
            var r = t.debounce, n = {}, i = Ut.env(), o = !1, a, s = Ut.env.touch, u = ".w-dropdown", l = "w--open", m = FV.triggers, p = 900, g = "focusout" + u, h = "keydown" + u, T = "mouseenter" + u, b = "mousemove" + u, w = "mouseleave" + u, _ = (s ? "click" : "mouseup") + u, C = "w-close" + u, x = "setting" + u, N = e(document), M;
            n.ready = P,
            n.design = function() {
                o && v(),
                o = !1,
                P()
            }
            ,
            n.preview = function() {
                o = !0,
                P()
            }
            ;
            function P() {
                a = i && Ut.env("design"),
                M = N.find(u),
                M.each(z)
            }
            function z(d, B) {
                var W = e(B)
                  , q = e.data(B, u);
                q || (q = e.data(B, u, {
                    open: !1,
                    el: W,
                    config: {},
                    selectedIdx: -1
                })),
                q.toggle = q.el.children(".w-dropdown-toggle"),
                q.list = q.el.children(".w-dropdown-list"),
                q.links = q.list.find("a:not(.w-dropdown .w-dropdown a)"),
                q.complete = U(q),
                q.mouseLeave = re(q),
                q.mouseUpOutside = D(q),
                q.mouseMoveOutside = F(q),
                K(q);
                var oe = q.toggle.attr("id")
                  , _e = q.list.attr("id");
                oe || (oe = "w-dropdown-toggle-" + d),
                _e || (_e = "w-dropdown-list-" + d),
                q.toggle.attr("id", oe),
                q.toggle.attr("aria-controls", _e),
                q.toggle.attr("aria-haspopup", "menu"),
                q.toggle.attr("aria-expanded", "false"),
                q.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
                q.toggle.prop("tagName") !== "BUTTON" && (q.toggle.attr("role", "button"),
                q.toggle.attr("tabindex") || q.toggle.attr("tabindex", "0")),
                q.list.attr("id", _e),
                q.list.attr("aria-labelledby", oe),
                q.links.each(function(E, H) {
                    H.hasAttribute("tabindex") || H.setAttribute("tabindex", "0"),
                    DV.test(H.hash) && H.addEventListener("click", A.bind(null, q))
                }),
                q.el.off(u),
                q.toggle.off(u),
                q.nav && q.nav.off(u);
                var se = Z(q, D_);
                a && q.el.on(x, $(q)),
                a || (i && (q.hovering = !1,
                A(q)),
                q.config.hover && q.toggle.on(T, te(q)),
                q.el.on(C, se),
                q.el.on(h, X(q)),
                q.el.on(g, k(q)),
                q.toggle.on(_, se),
                q.toggle.on(h, V(q)),
                q.nav = q.el.closest(".w-nav"),
                q.nav.on(C, se))
            }
            function K(d) {
                var B = Number(d.el.css("z-index"));
                d.manageZ = B === p || B === p + 1,
                d.config = {
                    hover: d.el.attr("data-hover") === "true" && !s,
                    delay: d.el.attr("data-delay")
                }
            }
            function $(d) {
                return function(B, W) {
                    W = W || {},
                    K(d),
                    W.open === !0 && G(d, !0),
                    W.open === !1 && A(d, {
                        immediate: !0
                    })
                }
            }
            function Z(d, B) {
                return r(function(W) {
                    if (d.open || W && W.type === "w-close")
                        return A(d, {
                            forceClose: B
                        });
                    G(d)
                })
            }
            function G(d) {
                if (!d.open) {
                    L(d),
                    d.open = !0,
                    d.list.addClass(l),
                    d.toggle.addClass(l),
                    d.toggle.attr("aria-expanded", "true"),
                    m.intro(0, d.el[0]),
                    Ut.redraw.up(),
                    d.manageZ && d.el.css("z-index", p + 1);
                    var B = Ut.env("editor");
                    a || N.on(_, d.mouseUpOutside),
                    d.hovering && !B && d.el.on(w, d.mouseLeave),
                    d.hovering && B && N.on(b, d.mouseMoveOutside),
                    window.clearTimeout(d.delayId)
                }
            }
            function A(d, {immediate: B, forceClose: W}={}) {
                if (d.open && !(d.config.hover && d.hovering && !W)) {
                    d.toggle.attr("aria-expanded", "false"),
                    d.open = !1;
                    var q = d.config;
                    if (m.outro(0, d.el[0]),
                    N.off(_, d.mouseUpOutside),
                    N.off(b, d.mouseMoveOutside),
                    d.el.off(w, d.mouseLeave),
                    window.clearTimeout(d.delayId),
                    !q.delay || B)
                        return d.complete();
                    d.delayId = window.setTimeout(d.complete, q.delay)
                }
            }
            function v() {
                N.find(u).each(function(d, B) {
                    e(B).triggerHandler(C)
                })
            }
            function L(d) {
                var B = d.el[0];
                M.each(function(W, q) {
                    var oe = e(q);
                    oe.is(B) || oe.has(B).length || oe.triggerHandler(C)
                })
            }
            function D(d) {
                return d.mouseUpOutside && N.off(_, d.mouseUpOutside),
                r(function(B) {
                    if (d.open) {
                        var W = e(B.target);
                        if (!W.closest(".w-dropdown-toggle").length) {
                            var q = e.inArray(d.el[0], W.parents(u)) === -1
                              , oe = Ut.env("editor");
                            if (q) {
                                if (oe) {
                                    var _e = W.parents().length === 1 && W.parents("svg").length === 1
                                      , se = W.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (_e || se)
                                        return
                                }
                                A(d)
                            }
                        }
                    }
                })
            }
            function U(d) {
                return function() {
                    d.list.removeClass(l),
                    d.toggle.removeClass(l),
                    d.manageZ && d.el.css("z-index", "")
                }
            }
            function te(d) {
                return function() {
                    d.hovering = !0,
                    G(d)
                }
            }
            function re(d) {
                return function() {
                    d.hovering = !1,
                    d.links.is(":focus") || A(d)
                }
            }
            function F(d) {
                return r(function(B) {
                    if (d.open) {
                        var W = e(B.target)
                          , q = e.inArray(d.el[0], W.parents(u)) === -1;
                        if (q) {
                            var oe = W.parents(".w-editor-bem-EditorHoverControls").length
                              , _e = W.parents(".w-editor-bem-RTToolbar").length
                              , se = e(".w-editor-bem-EditorOverlay")
                              , E = se.find(".w-editor-edit-outline").length || se.find(".w-editor-bem-RTToolbar").length;
                            if (oe || _e || E)
                                return;
                            d.hovering = !1,
                            A(d)
                        }
                    }
                })
            }
            function X(d) {
                return function(B) {
                    if (!(a || !d.open))
                        switch (d.selectedIdx = d.links.index(document.activeElement),
                        B.keyCode) {
                        case Je.HOME:
                            return d.open ? (d.selectedIdx = 0,
                            Q(d),
                            B.preventDefault()) : void 0;
                        case Je.END:
                            return d.open ? (d.selectedIdx = d.links.length - 1,
                            Q(d),
                            B.preventDefault()) : void 0;
                        case Je.ESCAPE:
                            return A(d),
                            d.toggle.focus(),
                            B.stopPropagation();
                        case Je.ARROW_RIGHT:
                        case Je.ARROW_DOWN:
                            return d.selectedIdx = Math.min(d.links.length - 1, d.selectedIdx + 1),
                            Q(d),
                            B.preventDefault();
                        case Je.ARROW_LEFT:
                        case Je.ARROW_UP:
                            return d.selectedIdx = Math.max(-1, d.selectedIdx - 1),
                            Q(d),
                            B.preventDefault()
                        }
                }
            }
            function Q(d) {
                d.links[d.selectedIdx] && d.links[d.selectedIdx].focus()
            }
            function V(d) {
                var B = Z(d, D_);
                return function(W) {
                    if (!a) {
                        if (!d.open)
                            switch (W.keyCode) {
                            case Je.ARROW_UP:
                            case Je.ARROW_DOWN:
                                return W.stopPropagation()
                            }
                        switch (W.keyCode) {
                        case Je.SPACE:
                        case Je.ENTER:
                            return B(),
                            W.stopPropagation(),
                            W.preventDefault()
                        }
                    }
                }
            }
            function k(d) {
                return r(function(B) {
                    var {relatedTarget: W, target: q} = B
                      , oe = d.el[0]
                      , _e = oe.contains(W) || oe.contains(q);
                    return _e || A(d),
                    B.stopPropagation()
                })
            }
            return n
        }
        )
    }
    );
    var U_ = c(Ns => {
        "use strict";
        Object.defineProperty(Ns, "__esModule", {
            value: !0
        });
        Ns.default = kV;
        function kV(e, t, r, n, i, o, a, s, u, l, m, p, g) {
            return function(h) {
                e(h);
                var T = h.form
                  , b = {
                    name: T.attr("data-name") || T.attr("name") || "Untitled Form",
                    pageId: T.attr("data-wf-page-id") || "",
                    elementId: T.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(T.html()),
                    trackingCookies: n()
                };
                let w = T.attr("data-wf-flow");
                w && (b.wfFlow = w),
                i(h);
                var _ = o(T, b.fields);
                if (_)
                    return a(_);
                if (b.fileUploads = s(T),
                u(h),
                !l) {
                    m(h);
                    return
                }
                p.ajax({
                    url: g,
                    type: "POST",
                    data: b,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(C) {
                    C && C.code === 200 && (h.success = !0),
                    m(h)
                }).fail(function() {
                    m(h)
                })
            }
        }
    }
    );
    var B_ = c( (uz, V_) => {
        "use strict";
        var Ni = De();
        Ni.define("forms", V_.exports = function(e, t) {
            var r = {}, n = e(document), i, o = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", u, l = /e(-)?mail/i, m = /^\S+@\S+$/, p = window.alert, g = Ni.env(), h, T, b, w = /list-manage[1-9]?.com/i, _ = t.debounce(function() {
                p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                C(),
                !g && !h && N()
            }
            ;
            function C() {
                u = e("html").attr("data-wf-site"),
                T = "https://webflow.com/api/v1/form/" + u,
                a && T.indexOf("https://webflow.com") >= 0 && (T = T.replace("https://webflow.com", "https://formdata.webflow.com")),
                b = `${T}/signFile`,
                i = e(s + " form"),
                i.length && i.each(x)
            }
            function x(F, X) {
                var Q = e(X)
                  , V = e.data(X, s);
                V || (V = e.data(X, s, {
                    form: Q
                })),
                M(V);
                var k = Q.closest("div.w-form");
                V.done = k.find("> .w-form-done"),
                V.fail = k.find("> .w-form-fail"),
                V.fileUploads = k.find(".w-file-upload"),
                V.fileUploads.each(function(W) {
                    U(W, V)
                });
                var d = V.form.attr("aria-label") || V.form.attr("data-name") || "Form";
                V.done.attr("aria-label") || V.form.attr("aria-label", d),
                V.done.attr("tabindex", "-1"),
                V.done.attr("role", "region"),
                V.done.attr("aria-label") || V.done.attr("aria-label", d + " success"),
                V.fail.attr("tabindex", "-1"),
                V.fail.attr("role", "region"),
                V.fail.attr("aria-label") || V.fail.attr("aria-label", d + " failure");
                var B = V.action = Q.attr("action");
                if (V.handler = null,
                V.redirect = Q.attr("data-redirect"),
                w.test(B)) {
                    V.handler = v;
                    return
                }
                if (!B) {
                    if (u) {
                        V.handler = ( () => {
                            let W = U_().default;
                            return W(M, o, Ni, Z, D, z, p, K, P, u, L, e, T)
                        }
                        )();
                        return
                    }
                    _()
                }
            }
            function N() {
                h = !0,
                n.on("submit", s + " form", function(W) {
                    var q = e.data(this, s);
                    q.handler && (q.evt = W,
                    q.handler(q))
                });
                let F = ".w-checkbox-input"
                  , X = ".w-radio-input"
                  , Q = "w--redirected-checked"
                  , V = "w--redirected-focus"
                  , k = "w--redirected-focus-visible"
                  , d = ":focus-visible, [data-wf-focus-visible]"
                  , B = [["checkbox", F], ["radio", X]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + F + ")", W => {
                    e(W.target).siblings(F).toggleClass(Q)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', W => {
                    e(`input[name="${W.target.name}"]:not(${F})`).map( (oe, _e) => e(_e).siblings(X).removeClass(Q));
                    let q = e(W.target);
                    q.hasClass("w-radio-input") || q.siblings(X).addClass(Q)
                }
                ),
                B.forEach( ([W,q]) => {
                    n.on("focus", s + ` form input[type="${W}"]:not(` + q + ")", oe => {
                        e(oe.target).siblings(q).addClass(V),
                        e(oe.target).filter(d).siblings(q).addClass(k)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${W}"]:not(` + q + ")", oe => {
                        e(oe.target).siblings(q).removeClass(`${V} ${k}`)
                    }
                    )
                }
                )
            }
            function M(F) {
                var X = F.btn = F.form.find(':input[type="submit"]');
                F.wait = F.btn.attr("data-wait") || null,
                F.success = !1,
                X.prop("disabled", !1),
                F.label && X.val(F.label)
            }
            function P(F) {
                var X = F.btn
                  , Q = F.wait;
                X.prop("disabled", !0),
                Q && (F.label = X.val(),
                X.val(Q))
            }
            function z(F, X) {
                var Q = null;
                return X = X || {},
                F.find(':input:not([type="submit"]):not([type="file"])').each(function(V, k) {
                    var d = e(k)
                      , B = d.attr("type")
                      , W = d.attr("data-name") || d.attr("name") || "Field " + (V + 1);
                    W = encodeURIComponent(W);
                    var q = d.val();
                    if (B === "checkbox")
                        q = d.is(":checked");
                    else if (B === "radio") {
                        if (X[W] === null || typeof X[W] == "string")
                            return;
                        q = F.find('input[name="' + d.attr("name") + '"]:checked').val() || null
                    }
                    typeof q == "string" && (q = e.trim(q)),
                    X[W] = q,
                    Q = Q || G(d, B, W, q)
                }),
                Q
            }
            function K(F) {
                var X = {};
                return F.find(':input[type="file"]').each(function(Q, V) {
                    var k = e(V)
                      , d = k.attr("data-name") || k.attr("name") || "File " + (Q + 1)
                      , B = k.attr("data-value");
                    typeof B == "string" && (B = e.trim(B)),
                    X[d] = B
                }),
                X
            }
            let $ = {
                _mkto_trk: "marketo"
            };
            function Z() {
                return document.cookie.split("; ").reduce(function(X, Q) {
                    let V = Q.split("=")
                      , k = V[0];
                    if (k in $) {
                        let d = $[k]
                          , B = V.slice(1).join("=");
                        X[d] = B
                    }
                    return X
                }, {})
            }
            function G(F, X, Q, V) {
                var k = null;
                return X === "password" ? k = "Passwords cannot be submitted." : F.attr("required") ? V ? l.test(F.attr("type")) && (m.test(V) || (k = "Please enter a valid email address for: " + Q)) : k = "Please fill out the required field: " + Q : Q === "g-recaptcha-response" && !V && (k = "Please confirm you\u2019re not a robot."),
                k
            }
            function A(F) {
                D(F),
                L(F)
            }
            function v(F) {
                M(F);
                var X = F.form
                  , Q = {};
                if (/^https/.test(o.href) && !/^https/.test(F.action)) {
                    X.attr("method", "post");
                    return
                }
                D(F);
                var V = z(X, Q);
                if (V)
                    return p(V);
                P(F);
                var k;
                t.each(Q, function(q, oe) {
                    l.test(oe) && (Q.EMAIL = q),
                    /^((full[ _-]?)?name)$/i.test(oe) && (k = q),
                    /^(first[ _-]?name)$/i.test(oe) && (Q.FNAME = q),
                    /^(last[ _-]?name)$/i.test(oe) && (Q.LNAME = q)
                }),
                k && !Q.FNAME && (k = k.split(" "),
                Q.FNAME = k[0],
                Q.LNAME = Q.LNAME || k[1]);
                var d = F.action.replace("/post?", "/post-json?") + "&c=?"
                  , B = d.indexOf("u=") + 2;
                B = d.substring(B, d.indexOf("&", B));
                var W = d.indexOf("id=") + 3;
                W = d.substring(W, d.indexOf("&", W)),
                Q["b_" + B + "_" + W] = "",
                e.ajax({
                    url: d,
                    data: Q,
                    dataType: "jsonp"
                }).done(function(q) {
                    F.success = q.result === "success" || /already/.test(q.msg),
                    F.success || console.info("MailChimp error: " + q.msg),
                    L(F)
                }).fail(function() {
                    L(F)
                })
            }
            function L(F) {
                var X = F.form
                  , Q = F.redirect
                  , V = F.success;
                if (V && Q) {
                    Ni.location(Q);
                    return
                }
                F.done.toggle(V),
                F.fail.toggle(!V),
                V ? F.done.focus() : F.fail.focus(),
                X.toggle(!V),
                M(F)
            }
            function D(F) {
                F.evt && F.evt.preventDefault(),
                F.evt = null
            }
            function U(F, X) {
                if (!X.fileUploads || !X.fileUploads[F])
                    return;
                var Q, V = e(X.fileUploads[F]), k = V.find("> .w-file-upload-default"), d = V.find("> .w-file-upload-uploading"), B = V.find("> .w-file-upload-success"), W = V.find("> .w-file-upload-error"), q = k.find(".w-file-upload-input"), oe = k.find(".w-file-upload-label"), _e = oe.children(), se = W.find(".w-file-upload-error-msg"), E = B.find(".w-file-upload-file"), H = B.find(".w-file-remove-link"), J = E.find(".w-file-upload-file-name"), Y = se.attr("data-w-size-error"), ge = se.attr("data-w-type-error"), St = se.attr("data-w-generic-error");
                if (g || oe.on("click keydown", function(I) {
                    I.type === "keydown" && I.which !== 13 && I.which !== 32 || (I.preventDefault(),
                    q.click())
                }),
                oe.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                H.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                g)
                    q.on("click", function(I) {
                        I.preventDefault()
                    }),
                    oe.on("click", function(I) {
                        I.preventDefault()
                    }),
                    _e.on("click", function(I) {
                        I.preventDefault()
                    });
                else {
                    H.on("click keydown", function(I) {
                        if (I.type === "keydown") {
                            if (I.which !== 13 && I.which !== 32)
                                return;
                            I.preventDefault()
                        }
                        q.removeAttr("data-value"),
                        q.val(""),
                        J.html(""),
                        k.toggle(!0),
                        B.toggle(!1),
                        oe.focus()
                    }),
                    q.on("change", function(I) {
                        Q = I.target && I.target.files && I.target.files[0],
                        Q && (k.toggle(!1),
                        W.toggle(!1),
                        d.toggle(!0),
                        d.focus(),
                        J.text(Q.name),
                        S() || P(X),
                        X.fileUploads[F].uploading = !0,
                        te(Q, y))
                    });
                    var lt = oe.outerHeight();
                    q.height(lt),
                    q.width(1)
                }
                function f(I) {
                    var R = I.responseJSON && I.responseJSON.msg
                      , ee = St;
                    typeof R == "string" && R.indexOf("InvalidFileTypeError") === 0 ? ee = ge : typeof R == "string" && R.indexOf("MaxFileSizeError") === 0 && (ee = Y),
                    se.text(ee),
                    q.removeAttr("data-value"),
                    q.val(""),
                    d.toggle(!1),
                    k.toggle(!0),
                    W.toggle(!0),
                    W.focus(),
                    X.fileUploads[F].uploading = !1,
                    S() || M(X)
                }
                function y(I, R) {
                    if (I)
                        return f(I);
                    var ee = R.fileName
                      , ie = R.postData
                      , pe = R.fileId
                      , j = R.s3Url;
                    q.attr("data-value", pe),
                    re(j, ie, Q, ee, O)
                }
                function O(I) {
                    if (I)
                        return f(I);
                    d.toggle(!1),
                    B.css("display", "inline-block"),
                    B.focus(),
                    X.fileUploads[F].uploading = !1,
                    S() || M(X)
                }
                function S() {
                    var I = X.fileUploads && X.fileUploads.toArray() || [];
                    return I.some(function(R) {
                        return R.uploading
                    })
                }
            }
            function te(F, X) {
                var Q = new URLSearchParams({
                    name: F.name,
                    size: F.size
                });
                e.ajax({
                    type: "GET",
                    url: `${b}?${Q}`,
                    crossDomain: !0
                }).done(function(V) {
                    X(null, V)
                }).fail(function(V) {
                    X(V)
                })
            }
            function re(F, X, Q, V, k) {
                var d = new FormData;
                for (var B in X)
                    d.append(B, X[B]);
                d.append("file", Q, V),
                e.ajax({
                    type: "POST",
                    url: F,
                    data: d,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    k(null)
                }).fail(function(W) {
                    k(W)
                })
            }
            return r
        }
        )
    }
    );
    var W_ = c( (cz, H_) => {
        "use strict";
        var At = De()
          , GV = _r()
          , Se = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        At.define("navbar", H_.exports = function(e, t) {
            var r = {}, n = e.tram, i = e(window), o = e(document), a = t.debounce, s, u, l, m, p = At.env(), g = '<div class="w-nav-overlay" data-wf-ignore />', h = ".w-nav", T = "w--open", b = "w--nav-dropdown-open", w = "w--nav-dropdown-toggle-open", _ = "w--nav-dropdown-list-open", C = "w--nav-link-open", x = GV.triggers, N = e();
            r.ready = r.design = r.preview = M,
            r.destroy = function() {
                N = e(),
                P(),
                u && u.length && u.each(Z)
            }
            ;
            function M() {
                l = p && At.env("design"),
                m = At.env("editor"),
                s = e(document.body),
                u = o.find(h),
                u.length && (u.each($),
                P(),
                z())
            }
            function P() {
                At.resize.off(K)
            }
            function z() {
                At.resize.on(K)
            }
            function K() {
                u.each(k)
            }
            function $(E, H) {
                var J = e(H)
                  , Y = e.data(H, h);
                Y || (Y = e.data(H, h, {
                    open: !1,
                    el: J,
                    config: {},
                    selectedIdx: -1
                })),
                Y.menu = J.find(".w-nav-menu"),
                Y.links = Y.menu.find(".w-nav-link"),
                Y.dropdowns = Y.menu.find(".w-dropdown"),
                Y.dropdownToggle = Y.menu.find(".w-dropdown-toggle"),
                Y.dropdownList = Y.menu.find(".w-dropdown-list"),
                Y.button = J.find(".w-nav-button"),
                Y.container = J.find(".w-container"),
                Y.overlayContainerId = "w-nav-overlay-" + E,
                Y.outside = Q(Y);
                var ge = J.find(".w-nav-brand");
                ge && ge.attr("href") === "/" && ge.attr("aria-label") == null && ge.attr("aria-label", "home"),
                Y.button.attr("style", "-webkit-user-select: text;"),
                Y.button.attr("aria-label") == null && Y.button.attr("aria-label", "menu"),
                Y.button.attr("role", "button"),
                Y.button.attr("tabindex", "0"),
                Y.button.attr("aria-controls", Y.overlayContainerId),
                Y.button.attr("aria-haspopup", "menu"),
                Y.button.attr("aria-expanded", "false"),
                Y.el.off(h),
                Y.button.off(h),
                Y.menu.off(h),
                v(Y),
                l ? (G(Y),
                Y.el.on("setting" + h, L(Y))) : (A(Y),
                Y.button.on("click" + h, F(Y)),
                Y.menu.on("click" + h, "a", X(Y)),
                Y.button.on("keydown" + h, D(Y)),
                Y.el.on("keydown" + h, U(Y))),
                k(E, H)
            }
            function Z(E, H) {
                var J = e.data(H, h);
                J && (G(J),
                e.removeData(H, h))
            }
            function G(E) {
                E.overlay && (se(E, !0),
                E.overlay.remove(),
                E.overlay = null)
            }
            function A(E) {
                E.overlay || (E.overlay = e(g).appendTo(E.el),
                E.overlay.attr("id", E.overlayContainerId),
                E.parent = E.menu.parent(),
                se(E, !0))
            }
            function v(E) {
                var H = {}
                  , J = E.config || {}
                  , Y = H.animation = E.el.attr("data-animation") || "default";
                H.animOver = /^over/.test(Y),
                H.animDirect = /left$/.test(Y) ? -1 : 1,
                J.animation !== Y && E.open && t.defer(re, E),
                H.easing = E.el.attr("data-easing") || "ease",
                H.easing2 = E.el.attr("data-easing2") || "ease";
                var ge = E.el.attr("data-duration");
                H.duration = ge != null ? Number(ge) : 400,
                H.docHeight = E.el.attr("data-doc-height"),
                E.config = H
            }
            function L(E) {
                return function(H, J) {
                    J = J || {};
                    var Y = i.width();
                    v(E),
                    J.open === !0 && oe(E, !0),
                    J.open === !1 && se(E, !0),
                    E.open && t.defer(function() {
                        Y !== i.width() && re(E)
                    })
                }
            }
            function D(E) {
                return function(H) {
                    switch (H.keyCode) {
                    case Se.SPACE:
                    case Se.ENTER:
                        return F(E)(),
                        H.preventDefault(),
                        H.stopPropagation();
                    case Se.ESCAPE:
                        return se(E),
                        H.preventDefault(),
                        H.stopPropagation();
                    case Se.ARROW_RIGHT:
                    case Se.ARROW_DOWN:
                    case Se.HOME:
                    case Se.END:
                        return E.open ? (H.keyCode === Se.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0,
                        te(E),
                        H.preventDefault(),
                        H.stopPropagation()) : (H.preventDefault(),
                        H.stopPropagation())
                    }
                }
            }
            function U(E) {
                return function(H) {
                    if (E.open)
                        switch (E.selectedIdx = E.links.index(document.activeElement),
                        H.keyCode) {
                        case Se.HOME:
                        case Se.END:
                            return H.keyCode === Se.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0,
                            te(E),
                            H.preventDefault(),
                            H.stopPropagation();
                        case Se.ESCAPE:
                            return se(E),
                            E.button.focus(),
                            H.preventDefault(),
                            H.stopPropagation();
                        case Se.ARROW_LEFT:
                        case Se.ARROW_UP:
                            return E.selectedIdx = Math.max(-1, E.selectedIdx - 1),
                            te(E),
                            H.preventDefault(),
                            H.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                            return E.selectedIdx = Math.min(E.links.length - 1, E.selectedIdx + 1),
                            te(E),
                            H.preventDefault(),
                            H.stopPropagation()
                        }
                }
            }
            function te(E) {
                if (E.links[E.selectedIdx]) {
                    var H = E.links[E.selectedIdx];
                    H.focus(),
                    X(H)
                }
            }
            function re(E) {
                E.open && (se(E, !0),
                oe(E, !0))
            }
            function F(E) {
                return a(function() {
                    E.open ? se(E) : oe(E)
                })
            }
            function X(E) {
                return function(H) {
                    var J = e(this)
                      , Y = J.attr("href");
                    if (!At.validClick(H.currentTarget)) {
                        H.preventDefault();
                        return
                    }
                    Y && Y.indexOf("#") === 0 && E.open && se(E)
                }
            }
            function Q(E) {
                return E.outside && o.off("click" + h, E.outside),
                function(H) {
                    var J = e(H.target);
                    m && J.closest(".w-editor-bem-EditorOverlay").length || V(E, J)
                }
            }
            var V = a(function(E, H) {
                if (E.open) {
                    var J = H.closest(".w-nav-menu");
                    E.menu.is(J) || se(E)
                }
            });
            function k(E, H) {
                var J = e.data(H, h)
                  , Y = J.collapsed = J.button.css("display") !== "none";
                if (J.open && !Y && !l && se(J, !0),
                J.container.length) {
                    var ge = B(J);
                    J.links.each(ge),
                    J.dropdowns.each(ge)
                }
                J.open && _e(J)
            }
            var d = "max-width";
            function B(E) {
                var H = E.container.css(d);
                return H === "none" && (H = ""),
                function(J, Y) {
                    Y = e(Y),
                    Y.css(d, ""),
                    Y.css(d) === "none" && Y.css(d, H)
                }
            }
            function W(E, H) {
                H.setAttribute("data-nav-menu-open", "")
            }
            function q(E, H) {
                H.removeAttribute("data-nav-menu-open")
            }
            function oe(E, H) {
                if (E.open)
                    return;
                E.open = !0,
                E.menu.each(W),
                E.links.addClass(C),
                E.dropdowns.addClass(b),
                E.dropdownToggle.addClass(w),
                E.dropdownList.addClass(_),
                E.button.addClass(T);
                var J = E.config
                  , Y = J.animation;
                (Y === "none" || !n.support.transform || J.duration <= 0) && (H = !0);
                var ge = _e(E)
                  , St = E.menu.outerHeight(!0)
                  , lt = E.menu.outerWidth(!0)
                  , f = E.el.height()
                  , y = E.el[0];
                if (k(0, y),
                x.intro(0, y),
                At.redraw.up(),
                l || o.on("click" + h, E.outside),
                H) {
                    I();
                    return
                }
                var O = "transform " + J.duration + "ms " + J.easing;
                if (E.overlay && (N = E.menu.prev(),
                E.overlay.show().append(E.menu)),
                J.animOver) {
                    n(E.menu).add(O).set({
                        x: J.animDirect * lt,
                        height: ge
                    }).start({
                        x: 0
                    }).then(I),
                    E.overlay && E.overlay.width(lt);
                    return
                }
                var S = f + St;
                n(E.menu).add(O).set({
                    y: -S
                }).start({
                    y: 0
                }).then(I);
                function I() {
                    E.button.attr("aria-expanded", "true")
                }
            }
            function _e(E) {
                var H = E.config
                  , J = H.docHeight ? o.height() : s.height();
                return H.animOver ? E.menu.height(J) : E.el.css("position") !== "fixed" && (J -= E.el.outerHeight(!0)),
                E.overlay && E.overlay.height(J),
                J
            }
            function se(E, H) {
                if (!E.open)
                    return;
                E.open = !1,
                E.button.removeClass(T);
                var J = E.config;
                if ((J.animation === "none" || !n.support.transform || J.duration <= 0) && (H = !0),
                x.outro(0, E.el[0]),
                o.off("click" + h, E.outside),
                H) {
                    n(E.menu).stop(),
                    y();
                    return
                }
                var Y = "transform " + J.duration + "ms " + J.easing2
                  , ge = E.menu.outerHeight(!0)
                  , St = E.menu.outerWidth(!0)
                  , lt = E.el.height();
                if (J.animOver) {
                    n(E.menu).add(Y).start({
                        x: St * J.animDirect
                    }).then(y);
                    return
                }
                var f = lt + ge;
                n(E.menu).add(Y).start({
                    y: -f
                }).then(y);
                function y() {
                    E.menu.height(""),
                    n(E.menu).set({
                        x: 0,
                        y: 0
                    }),
                    E.menu.each(q),
                    E.links.removeClass(C),
                    E.dropdowns.removeClass(b),
                    E.dropdownToggle.removeClass(w),
                    E.dropdownList.removeClass(_),
                    E.overlay && E.overlay.children().length && (N.length ? E.menu.insertAfter(N) : E.menu.prependTo(E.parent),
                    E.overlay.attr("style", "").hide()),
                    E.el.triggerHandler("w-close"),
                    E.button.attr("aria-expanded", "false")
                }
            }
            return r
        }
        )
    }
    );
    var j_ = c( (lz, X_) => {
        "use strict";
        var xt = De()
          , UV = _r();
        xt.define("tabs", X_.exports = function(e) {
            var t = {}, r = e.tram, n = e(document), i, o, a = xt.env, s = a.safari, u = a(), l = "data-w-tab", m = "data-w-pane", p = ".w-tabs", g = "w--current", h = "w--tab-active", T = UV.triggers, b = !1;
            t.ready = t.design = t.preview = w,
            t.redraw = function() {
                b = !0,
                w(),
                b = !1
            }
            ,
            t.destroy = function() {
                i = n.find(p),
                i.length && (i.each(x),
                _())
            }
            ;
            function w() {
                o = u && xt.env("design"),
                i = n.find(p),
                i.length && (i.each(N),
                xt.env("preview") && !b && i.each(x),
                _(),
                C())
            }
            function _() {
                xt.redraw.off(t.redraw)
            }
            function C() {
                xt.redraw.on(t.redraw)
            }
            function x(G, A) {
                var v = e.data(A, p);
                v && (v.links && v.links.each(T.reset),
                v.panes && v.panes.each(T.reset))
            }
            function N(G, A) {
                var v = p.substr(1) + "-" + G
                  , L = e(A)
                  , D = e.data(A, p);
                if (D || (D = e.data(A, p, {
                    el: L,
                    config: {}
                })),
                D.current = null,
                D.tabIdentifier = v + "-" + l,
                D.paneIdentifier = v + "-" + m,
                D.menu = L.children(".w-tab-menu"),
                D.links = D.menu.children(".w-tab-link"),
                D.content = L.children(".w-tab-content"),
                D.panes = D.content.children(".w-tab-pane"),
                D.el.off(p),
                D.links.off(p),
                D.menu.attr("role", "tablist"),
                D.links.attr("tabindex", "-1"),
                M(D),
                !o) {
                    D.links.on("click" + p, z(D)),
                    D.links.on("keydown" + p, K(D));
                    var U = D.links.filter("." + g)
                      , te = U.attr(l);
                    te && $(D, {
                        tab: te,
                        immediate: !0
                    })
                }
            }
            function M(G) {
                var A = {};
                A.easing = G.el.attr("data-easing") || "ease";
                var v = parseInt(G.el.attr("data-duration-in"), 10);
                v = A.intro = v === v ? v : 0;
                var L = parseInt(G.el.attr("data-duration-out"), 10);
                L = A.outro = L === L ? L : 0,
                A.immediate = !v && !L,
                G.config = A
            }
            function P(G) {
                var A = G.current;
                return Array.prototype.findIndex.call(G.links, v => v.getAttribute(l) === A, null)
            }
            function z(G) {
                return function(A) {
                    A.preventDefault();
                    var v = A.currentTarget.getAttribute(l);
                    v && $(G, {
                        tab: v
                    })
                }
            }
            function K(G) {
                return function(A) {
                    var v = P(G)
                      , L = A.key
                      , D = {
                        ArrowLeft: v - 1,
                        ArrowUp: v - 1,
                        ArrowRight: v + 1,
                        ArrowDown: v + 1,
                        End: G.links.length - 1,
                        Home: 0
                    };
                    if (L in D) {
                        A.preventDefault();
                        var U = D[L];
                        U === -1 && (U = G.links.length - 1),
                        U === G.links.length && (U = 0);
                        var te = G.links[U]
                          , re = te.getAttribute(l);
                        re && $(G, {
                            tab: re
                        })
                    }
                }
            }
            function $(G, A) {
                A = A || {};
                var v = G.config
                  , L = v.easing
                  , D = A.tab;
                if (D !== G.current) {
                    G.current = D;
                    var U;
                    G.links.each(function(k, d) {
                        var B = e(d);
                        if (A.immediate || v.immediate) {
                            var W = G.panes[k];
                            d.id || (d.id = G.tabIdentifier + "-" + k),
                            W.id || (W.id = G.paneIdentifier + "-" + k),
                            d.href = "#" + W.id,
                            d.setAttribute("role", "tab"),
                            d.setAttribute("aria-controls", W.id),
                            d.setAttribute("aria-selected", "false"),
                            W.setAttribute("role", "tabpanel"),
                            W.setAttribute("aria-labelledby", d.id)
                        }
                        d.getAttribute(l) === D ? (U = d,
                        B.addClass(g).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(T.intro)) : B.hasClass(g) && B.removeClass(g).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(T.outro)
                    });
                    var te = []
                      , re = [];
                    G.panes.each(function(k, d) {
                        var B = e(d);
                        d.getAttribute(l) === D ? te.push(d) : B.hasClass(h) && re.push(d)
                    });
                    var F = e(te)
                      , X = e(re);
                    if (A.immediate || v.immediate) {
                        F.addClass(h).each(T.intro),
                        X.removeClass(h),
                        b || xt.redraw.up();
                        return
                    } else {
                        var Q = window.scrollX
                          , V = window.scrollY;
                        U.focus(),
                        window.scrollTo(Q, V)
                    }
                    X.length && v.outro ? (X.each(T.outro),
                    r(X).add("opacity " + v.outro + "ms " + L, {
                        fallback: s
                    }).start({
                        opacity: 0
                    }).then( () => Z(v, X, F))) : Z(v, X, F)
                }
            }
            function Z(G, A, v) {
                if (A.removeClass(h).css({
                    opacity: "",
                    transition: "",
                    transform: "",
                    width: "",
                    height: ""
                }),
                v.addClass(h).each(T.intro),
                xt.redraw.up(),
                !G.intro)
                    return r(v).set({
                        opacity: 1
                    });
                r(v).set({
                    opacity: 0
                }).redraw().add("opacity " + G.intro + "ms " + G.easing, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
            return t
        }
        )
    }
    );
    Xs();
    zs();
    Ys();
    Zs();
    _r();
    R_();
    L_();
    q_();
    F_();
    G_();
    B_();
    W_();
    j_();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687501265399
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687501265400
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687501335824
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-3"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687501335824
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687501344629
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687501344676
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|9b87dd7f-a0b1-18c0-8f00-770f0d31030e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|9b87dd7f-a0b1-18c0-8f00-770f0d31030e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533529677
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|9b87dd7f-a0b1-18c0-8f00-770f0d31030e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|9b87dd7f-a0b1-18c0-8f00-770f0d31030e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533529677
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|9451bb28-b088-17c1-fbe6-da99d4512caf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|9451bb28-b088-17c1-fbe6-da99d4512caf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533530249
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|9451bb28-b088-17c1-fbe6-da99d4512caf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|9451bb28-b088-17c1-fbe6-da99d4512caf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533530249
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|30c74a89-4379-b0b0-18fd-bc934535c191",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|30c74a89-4379-b0b0-18fd-bc934535c191",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533530719
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|30c74a89-4379-b0b0-18fd-bc934535c191",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|30c74a89-4379-b0b0-18fd-bc934535c191",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533530719
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|f294d140-2c96-7c4b-8824-5ceb4c07bf7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|f294d140-2c96-7c4b-8824-5ceb4c07bf7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533531015
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|f294d140-2c96-7c4b-8824-5ceb4c07bf7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|f294d140-2c96-7c4b-8824-5ceb4c07bf7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533531015
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|19002496-6211-764e-3fc6-5e940abe5e9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|19002496-6211-764e-3fc6-5e940abe5e9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533670822
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|19002496-6211-764e-3fc6-5e940abe5e9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|19002496-6211-764e-3fc6-5e940abe5e9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533670822
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|c529d994-571f-de61-d0ee-8aeec3e3f779",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|c529d994-571f-de61-d0ee-8aeec3e3f779",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533757839
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|9b87dd7f-a0b1-18c0-8f00-770f0d31030e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|9b87dd7f-a0b1-18c0-8f00-770f0d31030e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533941347
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|9451bb28-b088-17c1-fbe6-da99d4512caf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|9451bb28-b088-17c1-fbe6-da99d4512caf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533951131
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|30c74a89-4379-b0b0-18fd-bc934535c191",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|30c74a89-4379-b0b0-18fd-bc934535c191",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533962010
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|f294d140-2c96-7c4b-8824-5ceb4c07bf7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|f294d140-2c96-7c4b-8824-5ceb4c07bf7b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687533968896
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|19002496-6211-764e-3fc6-5e940abe5e9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|19002496-6211-764e-3fc6-5e940abe5e9e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687534002716
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|996f4023-8bf6-e667-9d8f-bb3fd8c82e28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|996f4023-8bf6-e667-9d8f-bb3fd8c82e28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687599443330
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|86136657-de5b-2968-2cc8-46d33e84ed5d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|86136657-de5b-2968-2cc8-46d33e84ed5d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687599480456
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|a230d088-9665-c66e-8168-236f0495b743",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|a230d088-9665-c66e-8168-236f0495b743",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687599499100
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|861372f2-f32f-b8cf-da4a-04a18ec78907",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|861372f2-f32f-b8cf-da4a-04a18ec78907",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1687599522028
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|accc9189-4793-0612-6125-78d3d589b7bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|accc9189-4793-0612-6125-78d3d589b7bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687599547032
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".section_heading",
                "originalId": "64952529b14166d061398d8d|51de5d12-776c-e0a8-824b-4a618789736f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".section_heading",
                "originalId": "64952529b14166d061398d8d|51de5d12-776c-e0a8-824b-4a618789736f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687599608434
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|67981a30-e022-f827-ab3d-cdf355feb422",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|67981a30-e022-f827-ab3d-cdf355feb422",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687599643784
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|5b6c2aa2-b519-4e95-4dc4-a7b016fd7cfd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|5b6c2aa2-b519-4e95-4dc4-a7b016fd7cfd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687599673430
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|2cc8d854-b0c9-e509-783b-1961c5c88544",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|2cc8d854-b0c9-e509-783b-1961c5c88544",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687599716820
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|93d5b839-b9b5-b1f5-d53e-6bc6a69abac1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|93d5b839-b9b5-b1f5-d53e-6bc6a69abac1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687599755714
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|b5ca9487-cdcd-536b-b78d-79ac22f97cb2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687599767668
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|674aca18-fea7-609a-a243-a322f0d1d9d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|674aca18-fea7-609a-a243-a322f0d1d9d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-6-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1687599849311
        },
        "e-54": {
            "id": "e-54",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|d896f26f-d262-18d6-10d9-686701da2582",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|d896f26f-d262-18d6-10d9-686701da2582",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600114356
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|8717ff8b-eb44-38b5-4879-028352a52a81",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|8717ff8b-eb44-38b5-4879-028352a52a81",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600126065
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|43ad3790-b1d2-6b6c-a105-36f9e38158f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|43ad3790-b1d2-6b6c-a105-36f9e38158f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600140273
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".card_wrapper.dark_blue",
                "originalId": "64952529b14166d061398d8d|74cf5fe4-0177-0670-a38f-790f9bcc10d2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".card_wrapper.dark_blue",
                "originalId": "64952529b14166d061398d8d|74cf5fe4-0177-0670-a38f-790f9bcc10d2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600155812
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|805154b3-f1b9-28b2-f1cd-fc126126c77d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|805154b3-f1b9-28b2-f1cd-fc126126c77d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687600210230
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-65"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|52cba749-c5ff-3646-de2a-ab74aedf11d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|52cba749-c5ff-3646-de2a-ab74aedf11d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687600219281
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|76b1e10e-dde6-c0e7-d705-f68ed07806ea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|76b1e10e-dde6-c0e7-d705-f68ed07806ea",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-7-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1687600320993
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|20260b1e-b885-3d91-0a39-8c722dea381f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|20260b1e-b885-3d91-0a39-8c722dea381f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687600426035
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|01ccc7fb-29c4-ed7d-7afa-115a250cfde3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|01ccc7fb-29c4-ed7d-7afa-115a250cfde3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687600437039
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|e71f1f3d-2f89-b9fa-1837-4b451cb7d389",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|e71f1f3d-2f89-b9fa-1837-4b451cb7d389",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600476712
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|de6320ff-35b5-7763-cbba-7d00484802f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|de6320ff-35b5-7763-cbba-7d00484802f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600490859
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|eb83c572-7375-9352-5fcb-40eb1000b3e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|eb83c572-7375-9352-5fcb-40eb1000b3e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600506094
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|9cb78b2e-17db-baa9-83dc-97e6a18ffa4b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|9cb78b2e-17db-baa9-83dc-97e6a18ffa4b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687600632843
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|58a25d8a-1345-3245-dc41-ef9815a8ae1d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|58a25d8a-1345-3245-dc41-ef9815a8ae1d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687600647328
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|2fbd74c4-5463-9ba8-b682-bc2117066ccd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|2fbd74c4-5463-9ba8-b682-bc2117066ccd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600789085
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|728d1edf-dea7-7fc8-3011-f7fe4f037ac2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|728d1edf-dea7-7fc8-3011-f7fe4f037ac2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600813784
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|86fc7376-8237-f4ae-20d1-65db7bba3027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|86fc7376-8237-f4ae-20d1-65db7bba3027",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600827582
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|d2985cb8-e26f-dcb2-ff4f-9a30fd17bfb2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|d2985cb8-e26f-dcb2-ff4f-9a30fd17bfb2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600843349
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64952529b14166d061398d8d|7adc195f-6332-4142-9e2a-b83f42a54498",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64952529b14166d061398d8d|7adc195f-6332-4142-9e2a-b83f42a54498",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687600855222
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|8f66883c-1c07-18d1-b4ea-27a23db814b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|8f66883c-1c07-18d1-b4ea-27a23db814b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687605336012
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|8f66883c-1c07-18d1-b4ea-27a23db814be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|8f66883c-1c07-18d1-b4ea-27a23db814be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687605336012
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|0801834e-10a5-d986-6c80-7eb406fdfd09",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|0801834e-10a5-d986-6c80-7eb406fdfd09",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687610348232
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|4a5a61fb-a4da-6a91-dff6-0b1b79cca668",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|4a5a61fb-a4da-6a91-dff6-0b1b79cca668",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1687611290889
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|4a5a61fb-a4da-6a91-dff6-0b1b79cca66e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|4a5a61fb-a4da-6a91-dff6-0b1b79cca66e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687611290889
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|4a5a61fb-a4da-6a91-dff6-0b1b79cca670",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|4a5a61fb-a4da-6a91-dff6-0b1b79cca670",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687611290889
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-105"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|4a5a61fb-a4da-6a91-dff6-0b1b79cca69d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|4a5a61fb-a4da-6a91-dff6-0b1b79cca69d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687611290889
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|4a5a61fb-a4da-6a91-dff6-0b1b79cca6a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|4a5a61fb-a4da-6a91-dff6-0b1b79cca6a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687611290889
        },
        "e-108": {
            "id": "e-108",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|1ebc9a10-e4eb-aec4-53a0-50cd9f882ae8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|1ebc9a10-e4eb-aec4-53a0-50cd9f882ae8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687612931062
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942bb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687613616765
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687613616765
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942bc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687613616765
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687613616765
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687613616765
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687613616765
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687613616765
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942cd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|70f043e5-6276-0cc7-f596-c68e66d942cd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687613616765
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-121"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|e46eb61d-3f3a-2496-cb8b-7abcd639e74d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|e46eb61d-3f3a-2496-cb8b-7abcd639e74d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687614746912
        },
        "e-122": {
            "id": "e-122",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|e46eb61d-3f3a-2496-cb8b-7abcd639e753",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|e46eb61d-3f3a-2496-cb8b-7abcd639e753",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687614746912
        },
        "e-124": {
            "id": "e-124",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-125"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|4183e974-bf00-32f5-be1e-a1744a584125",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|4183e974-bf00-32f5-be1e-a1744a584125",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687614828666
        },
        "e-126": {
            "id": "e-126",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-127"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|4183e974-bf00-32f5-be1e-a1744a58412b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|4183e974-bf00-32f5-be1e-a1744a58412b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687614828666
        },
        "e-128": {
            "id": "e-128",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "522b184d-7c18-9e46-d2a6-34d548d927b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "522b184d-7c18-9e46-d2a6-34d548d927b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687614938807
        },
        "e-132": {
            "id": "e-132",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "522b184d-7c18-9e46-d2a6-34d548d927ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "522b184d-7c18-9e46-d2a6-34d548d927ed",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687614938807
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "522b184d-7c18-9e46-d2a6-34d548d927fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "522b184d-7c18-9e46-d2a6-34d548d927fd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687614938807
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "522b184d-7c18-9e46-d2a6-34d548d9280e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "522b184d-7c18-9e46-d2a6-34d548d9280e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687614938807
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "FADE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "fadeIn",
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|5d7b0a2a-e25e-0fd1-e5ec-88b2869bba01",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|5d7b0a2a-e25e-0fd1-e5ec-88b2869bba01",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": null,
                "effectIn": true
            },
            "createdOn": 1687617953107
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|9f27e237-6a1e-77cf-e585-f23ad13ae2ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|9f27e237-6a1e-77cf-e585-f23ad13ae2ae",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687617977696
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|db134466-c0a5-8f79-3994-6f27c517742f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|db134466-c0a5-8f79-3994-6f27c517742f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687618006590
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|ba488b6e-c815-c846-8d52-8e96c3e932d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|ba488b6e-c815-c846-8d52-8e96c3e932d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687618019232
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|f913932d-817a-b166-bff7-352d653dbc55",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|f913932d-817a-b166-bff7-352d653dbc55",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687618053091
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-149"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|3aa0ca43-c1af-73f4-7e51-b30e0ff98ca6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|3aa0ca43-c1af-73f4-7e51-b30e0ff98ca6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687618068690
        },
        "e-150": {
            "id": "e-150",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-151"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6496c17afed768fccaa370d8|33caaf12-793f-409d-61a0-5e7ebd17057f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|33caaf12-793f-409d-61a0-5e7ebd17057f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687618085128
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-153"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|5bbfc8f9-7627-627e-af08-365dc84926ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|5bbfc8f9-7627-627e-af08-365dc84926ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687618644721
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|5bbfc8f9-7627-627e-af08-365dc84926ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|5bbfc8f9-7627-627e-af08-365dc84926ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687618644725
        },
        "e-154": {
            "id": "e-154",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|2758641f-7b1e-46db-18b4-2c7b698c8c7a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|2758641f-7b1e-46db-18b4-2c7b698c8c7a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687618659283
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|2758641f-7b1e-46db-18b4-2c7b698c8c7a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|2758641f-7b1e-46db-18b4-2c7b698c8c7a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687618659323
        },
        "e-156": {
            "id": "e-156",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-157"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|9a6c79c8-5f9f-69c5-4318-778e13e49cf9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|9a6c79c8-5f9f-69c5-4318-778e13e49cf9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687618669285
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6496c17afed768fccaa370d8|9a6c79c8-5f9f-69c5-4318-778e13e49cf9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6496c17afed768fccaa370d8|9a6c79c8-5f9f-69c5-4318-778e13e49cf9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687618669332
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "dac1afa3-112a-ad67-bdd5-c0a5b2e29b0e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "dac1afa3-112a-ad67-bdd5-c0a5b2e29b0e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687619245825
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "NAVBAR_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "dac1afa3-112a-ad67-bdd5-c0a5b2e29b0e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "dac1afa3-112a-ad67-bdd5-c0a5b2e29b0e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687619245865
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-161"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649707572070d51bf7594da4|a697ecfd-fc22-39fe-8e52-8e696f886dad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649707572070d51bf7594da4|a697ecfd-fc22-39fe-8e52-8e696f886dad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687619580011
        },
        "e-162": {
            "id": "e-162",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-163"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649707572070d51bf7594da4|e7a7e33f-07be-ad8d-36af-afab8a8f6e55",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649707572070d51bf7594da4|e7a7e33f-07be-ad8d-36af-afab8a8f6e55",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687621859957
        },
        "e-164": {
            "id": "e-164",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-165"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649707572070d51bf7594da4|e7a7e33f-07be-ad8d-36af-afab8a8f6e5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649707572070d51bf7594da4|e7a7e33f-07be-ad8d-36af-afab8a8f6e5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687621859957
        },
        "e-166": {
            "id": "e-166",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-167"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649707572070d51bf7594da4|cbdc6113-b592-c1da-5429-afb57b0622a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649707572070d51bf7594da4|cbdc6113-b592-c1da-5429-afb57b0622a6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687621890974
        },
        "e-168": {
            "id": "e-168",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-169"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649707572070d51bf7594da4|cbdc6113-b592-c1da-5429-afb57b0622ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649707572070d51bf7594da4|cbdc6113-b592-c1da-5429-afb57b0622ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687621890974
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649707572070d51bf7594da4|9bed226f-dbe8-7b01-f705-4927bcdbc813",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649707572070d51bf7594da4|9bed226f-dbe8-7b01-f705-4927bcdbc813",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687622184432
        },
        "e-172": {
            "id": "e-172",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-173"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649707572070d51bf7594da4|9bed226f-dbe8-7b01-f705-4927bcdbc817",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649707572070d51bf7594da4|9bed226f-dbe8-7b01-f705-4927bcdbc817",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687622184432
        },
        "e-174": {
            "id": "e-174",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-175"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2948b45e-3ba1-033b-7f1d-3822c384e7cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2948b45e-3ba1-033b-7f1d-3822c384e7cb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687623151067
        },
        "e-176": {
            "id": "e-176",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-177"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2608da9e-1836-e412-1651-52d03db166da",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2608da9e-1836-e412-1651-52d03db166da",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687623291366
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-179"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2608da9e-1836-e412-1651-52d03db166de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2608da9e-1836-e412-1651-52d03db166de",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687623291366
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-181"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".inner_photo_wrapper",
                "originalId": "649707572070d51bf7594da4|2f6f78ec-4769-c419-c461-2a06a540ab78",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".inner_photo_wrapper",
                "originalId": "649707572070d51bf7594da4|2f6f78ec-4769-c419-c461-2a06a540ab78",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 100,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687623475188
        },
        "e-182": {
            "id": "e-182",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-183"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".inner_text_wrapper",
                "originalId": "649707572070d51bf7594da4|e7d2a3cc-38b9-ddda-bfc9-2d9520ac011d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".inner_text_wrapper",
                "originalId": "649707572070d51bf7594da4|e7d2a3cc-38b9-ddda-bfc9-2d9520ac011d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687623491424
        },
        "e-184": {
            "id": "e-184",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-185"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649707572070d51bf7594da4|5894aff6-6691-93e8-2fe3-13b9e20c72c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649707572070d51bf7594da4|5894aff6-6691-93e8-2fe3-13b9e20c72c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687623525454
        },
        "e-186": {
            "id": "e-186",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-187"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649707572070d51bf7594da4|9a13c784-58a3-a6b2-fa30-8daefd5fd6be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649707572070d51bf7594da4|9a13c784-58a3-a6b2-fa30-8daefd5fd6be",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687623540497
        },
        "e-188": {
            "id": "e-188",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-189"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|01e21113-de6d-1f6e-a102-29abfefa2cac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|01e21113-de6d-1f6e-a102-29abfefa2cac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687623572502
        },
        "e-190": {
            "id": "e-190",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-191"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|f3877e9c-de29-08d4-9a99-e3dd1af4e820",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|f3877e9c-de29-08d4-9a99-e3dd1af4e820",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687623645341
        },
        "e-192": {
            "id": "e-192",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-193"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|f3877e9c-de29-08d4-9a99-e3dd1af4e826",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|f3877e9c-de29-08d4-9a99-e3dd1af4e826",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687623645341
        },
        "e-194": {
            "id": "e-194",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-195"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b864",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b864",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687623860402
        },
        "e-196": {
            "id": "e-196",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-197"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b867",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b867",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687623860402
        },
        "e-198": {
            "id": "e-198",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-199"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b868",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b868",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623860402
        },
        "e-200": {
            "id": "e-200",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-201"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b873",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b873",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623860402
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b873",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b873",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623860402
        },
        "e-202": {
            "id": "e-202",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-203"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b873",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b873",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623860402
        },
        "e-204": {
            "id": "e-204",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-205"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b87e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b87e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623860402
        },
        "e-206": {
            "id": "e-206",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-207"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b87e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b87e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623860402
        },
        "e-207": {
            "id": "e-207",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-206"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b87e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b87e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623860402
        },
        "e-208": {
            "id": "e-208",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-209"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b889",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b889",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623860402
        },
        "e-210": {
            "id": "e-210",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-211"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b889",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b889",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623860402
        },
        "e-211": {
            "id": "e-211",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b889",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|2866bf89-14d1-aca4-aba5-151a4267b889",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623860402
        },
        "e-220": {
            "id": "e-220",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-221"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687623922676
        },
        "e-222": {
            "id": "e-222",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-223"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2cd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2cd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687623922676
        },
        "e-224": {
            "id": "e-224",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-225"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2ce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2ce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-226": {
            "id": "e-226",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-227"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-227": {
            "id": "e-227",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-226"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-228": {
            "id": "e-228",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-229"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-230": {
            "id": "e-230",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-231"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-231": {
            "id": "e-231",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-230"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-232": {
            "id": "e-232",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-233"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-234": {
            "id": "e-234",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-235"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-236": {
            "id": "e-236",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-237"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-237": {
            "id": "e-237",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-236"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2ef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-238": {
            "id": "e-238",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-239"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-240": {
            "id": "e-240",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-241"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-241": {
            "id": "e-241",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-240"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd2fa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-242": {
            "id": "e-242",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-243"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd305",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd305",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-243": {
            "id": "e-243",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-242"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd305",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd305",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-244": {
            "id": "e-244",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-245"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd305",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|c60a8533-a06f-a0b7-fd55-45b7d6afd305",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687623922676
        },
        "e-246": {
            "id": "e-246",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-247"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|6b9a8beb-6831-483b-1583-ac27c113f8cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|6b9a8beb-6831-483b-1583-ac27c113f8cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687624042377
        },
        "e-248": {
            "id": "e-248",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|6b9a8beb-6831-483b-1583-ac27c113f8d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|6b9a8beb-6831-483b-1583-ac27c113f8d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687624042377
        },
        "e-250": {
            "id": "e-250",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-251"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|22a4a5c4-3cef-2366-dc0e-789d4c1f3eb6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|22a4a5c4-3cef-2366-dc0e-789d4c1f3eb6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687624107853
        },
        "e-252": {
            "id": "e-252",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-253"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|d2f840a7-0b22-02c0-fd35-f6795b201d89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|d2f840a7-0b22-02c0-fd35-f6795b201d89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687624874125
        },
        "e-253": {
            "id": "e-253",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-252"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|d2f840a7-0b22-02c0-fd35-f6795b201d89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|d2f840a7-0b22-02c0-fd35-f6795b201d89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687624874125
        },
        "e-254": {
            "id": "e-254",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-255"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "649715dbd50cd97a8f6538bd|d2f840a7-0b22-02c0-fd35-f6795b201d89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "649715dbd50cd97a8f6538bd|d2f840a7-0b22-02c0-fd35-f6795b201d89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687624874125
        },
        "e-256": {
            "id": "e-256",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-257"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|e8cd9bda-9d51-4610-d73e-2572653aa231",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|e8cd9bda-9d51-4610-d73e-2572653aa231",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687626655386
        },
        "e-258": {
            "id": "e-258",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-259"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|d38dfbf4-63fc-e277-ca50-a79974b022a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|d38dfbf4-63fc-e277-ca50-a79974b022a4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687626727796
        },
        "e-260": {
            "id": "e-260",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-261"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|d38dfbf4-63fc-e277-ca50-a79974b022a8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|d38dfbf4-63fc-e277-ca50-a79974b022a8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687626727796
        },
        "e-262": {
            "id": "e-262",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-263"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|8c842eef-b041-d139-6292-738a2bddda5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|8c842eef-b041-d139-6292-738a2bddda5e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687626818761
        },
        "e-264": {
            "id": "e-264",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-265"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|8c842eef-b041-d139-6292-738a2bddda62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|8c842eef-b041-d139-6292-738a2bddda62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687626818761
        },
        "e-266": {
            "id": "e-266",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-267"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d32",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687626895078
        },
        "e-268": {
            "id": "e-268",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-269"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d35",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d35",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687626895078
        },
        "e-270": {
            "id": "e-270",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-271"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d36",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626895078
        },
        "e-272": {
            "id": "e-272",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-273"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d41",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d41",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626895078
        },
        "e-273": {
            "id": "e-273",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-272"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d41",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d41",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626895078
        },
        "e-274": {
            "id": "e-274",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-275"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d41",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d41",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626895078
        },
        "e-276": {
            "id": "e-276",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-277"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626895078
        },
        "e-277": {
            "id": "e-277",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-276"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626895078
        },
        "e-278": {
            "id": "e-278",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-279"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626895078
        },
        "e-280": {
            "id": "e-280",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-281"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626895078
        },
        "e-282": {
            "id": "e-282",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-283"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626895078
        },
        "e-283": {
            "id": "e-283",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-282"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|ea48288f-2662-bfd9-92d0-fde9258b1d57",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626895078
        },
        "e-284": {
            "id": "e-284",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-285"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|9a64aac4-0472-0721-c4ce-02213f95c53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|9a64aac4-0472-0721-c4ce-02213f95c53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626949228
        },
        "e-286": {
            "id": "e-286",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_OPEN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-287"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|9a64aac4-0472-0721-c4ce-02213f95c53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|9a64aac4-0472-0721-c4ce-02213f95c53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626949228
        },
        "e-287": {
            "id": "e-287",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "DROPDOWN_CLOSE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-286"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|9a64aac4-0472-0721-c4ce-02213f95c53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|9a64aac4-0472-0721-c4ce-02213f95c53b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1687626949228
        },
        "e-293": {
            "id": "e-293",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-294"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|df91ef58-63de-416f-9441-c8c431fd255d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|df91ef58-63de-416f-9441-c8c431fd255d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687627339845
        },
        "e-295": {
            "id": "e-295",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-296"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|df91ef58-63de-416f-9441-c8c431fd2562",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|df91ef58-63de-416f-9441-c8c431fd2562",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687627339845
        },
        "e-297": {
            "id": "e-297",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-298"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|5cb3aaac-8777-d824-b345-488f4594f8c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|5cb3aaac-8777-d824-b345-488f4594f8c1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1687627409177
        },
        "e-299": {
            "id": "e-299",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-300"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|5cb3aaac-8777-d824-b345-488f4594f8c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|5cb3aaac-8777-d824-b345-488f4594f8c4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687627409177
        },
        "e-301": {
            "id": "e-301",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-302"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|5cb3aaac-8777-d824-b345-488f4594f8d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|5cb3aaac-8777-d824-b345-488f4594f8d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687627409177
        },
        "e-303": {
            "id": "e-303",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|dca20a66-7e78-5c95-6af5-2c8d4ae2fd93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|dca20a66-7e78-5c95-6af5-2c8d4ae2fd93",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-8-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1687627608434
        },
        "e-304": {
            "id": "e-304",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-305"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|dca20a66-7e78-5c95-6af5-2c8d4ae2fd99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|dca20a66-7e78-5c95-6af5-2c8d4ae2fd99",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687627608434
        },
        "e-312": {
            "id": "e-312",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-313"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|dca20a66-7e78-5c95-6af5-2c8d4ae2fdda",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|dca20a66-7e78-5c95-6af5-2c8d4ae2fdda",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687627608434
        },
        "e-316": {
            "id": "e-316",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-317"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|dca20a66-7e78-5c95-6af5-2c8d4ae2fddf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|dca20a66-7e78-5c95-6af5-2c8d4ae2fddf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687627608434
        },
        "e-318": {
            "id": "e-318",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInRight",
                    "autoStopEventId": "e-319"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "6497237bc3d02d63230a6ed4|dca20a66-7e78-5c95-6af5-2c8d4ae2fdf0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6497237bc3d02d63230a6ed4|dca20a66-7e78-5c95-6af5-2c8d4ae2fdf0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "RIGHT",
                "effectIn": true
            },
            "createdOn": 1687627608434
        },
        "e-320": {
            "id": "e-320",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-321"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64972a4c3518866550c121d9|b9642f77-278f-1c0a-4710-62cd89b9791d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64972a4c3518866550c121d9|b9642f77-278f-1c0a-4710-62cd89b9791d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687679544993
        },
        "e-322": {
            "id": "e-322",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-323"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64972a4c3518866550c121d9|02e6542c-7658-9660-7538-f5e1ebd9e378",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64972a4c3518866550c121d9|02e6542c-7658-9660-7538-f5e1ebd9e378",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 15,
                "scrollOffsetUnit": "%",
                "delay": 250,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687680174260
        },
        "e-324": {
            "id": "e-324",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-325"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "64972a4c3518866550c121d9|2b66848f-9222-ea53-07bd-64a7644eeb49",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64972a4c3518866550c121d9|2b66848f-9222-ea53-07bd-64a7644eeb49",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 150,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687680517273
        },
        "e-326": {
            "id": "e-326",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-327"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64972a4c3518866550c121d9|34e60ed1-e087-9cad-9b12-9fd393726656",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64972a4c3518866550c121d9|34e60ed1-e087-9cad-9b12-9fd393726656",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 50,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1687680533421
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "tab_active",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab_active_icon",
                            "selectorGuids": ["1bc11283-b27a-e5ad-e82a-08340de62300"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab_active_icon",
                            "selectorGuids": ["1bc11283-b27a-e5ad-e82a-08340de62300"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1687501276609
        },
        "a-2": {
            "id": "a-2",
            "title": "tab_unactive",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab_active_icon",
                            "selectorGuids": ["1bc11283-b27a-e5ad-e82a-08340de62300"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1687501302423
        },
        "a-3": {
            "id": "a-3",
            "title": "benefits_dropdown_open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab_active_icon",
                            "selectorGuids": ["1bc11283-b27a-e5ad-e82a-08340de62300"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-3-n-8",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".benefits_dropdown_list",
                            "selectorGuids": ["5cefc63f-d66b-9007-db9d-c60e365f2550"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab_active_icon",
                            "selectorGuids": ["1bc11283-b27a-e5ad-e82a-08340de62300"]
                        },
                        "widthUnit": "AUTO",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-3-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".benefits_dropdown_list",
                            "selectorGuids": ["5cefc63f-d66b-9007-db9d-c60e365f2550"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-3-n-5",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown_heading",
                            "selectorGuids": ["2e83bfae-06a4-f2e0-597c-0c246b9b9863"]
                        },
                        "globalSwatchId": "33d76506",
                        "rValue": 29,
                        "bValue": 51,
                        "gValue": 39,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1687532371766
        },
        "a-4": {
            "id": "a-4",
            "title": "benefits_dropdown_close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown_heading",
                            "selectorGuids": ["2e83bfae-06a4-f2e0-597c-0c246b9b9863"]
                        },
                        "globalSwatchId": "c8b347f4",
                        "rValue": 198,
                        "bValue": 220,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab_active_icon",
                            "selectorGuids": ["1bc11283-b27a-e5ad-e82a-08340de62300"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".benefits_dropdown_list",
                            "selectorGuids": ["5cefc63f-d66b-9007-db9d-c60e365f2550"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1687532473541
        },
        "a-5": {
            "id": "a-5",
            "title": "hidden_dropdown_show",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "selector": ".benefits_dropdown_list.hidden",
                            "selectorGuids": ["5cefc63f-d66b-9007-db9d-c60e365f2550", "8db214be-3abe-d507-e6a5-9832ef9ac059"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "selector": ".tab_active_icon.hidden",
                            "selectorGuids": ["1bc11283-b27a-e5ad-e82a-08340de62300", "c856592d-097e-5a68-f1fd-622dea4a8f95"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-5-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "selector": ".dropdown_heading.black",
                            "selectorGuids": ["2e83bfae-06a4-f2e0-597c-0c246b9b9863", "c5149393-3ddf-6cc0-6356-afa570826c92"]
                        },
                        "globalSwatchId": "c8b347f4",
                        "rValue": 198,
                        "bValue": 220,
                        "gValue": 207,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".benefits_dropdown_wrapper.fake",
                            "selectorGuids": ["d9997533-bb12-0d77-be28-9501c0ec3b87", "8bf9ef77-223d-bcb0-b486-72e3be01eae3"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-5-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".benefits_dropdown_wrapper.hidden",
                            "selectorGuids": ["d9997533-bb12-0d77-be28-9501c0ec3b87", "7b0478f5-ebf3-11ae-6761-c9022c9442e8"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1687533762649
        },
        "a-6": {
            "id": "a-6",
            "title": "akari mission planets",
            "continuousParameterGroups": [{
                "id": "a-6-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-6-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".mission_bg.notouch",
                                "selectorGuids": ["12fb7fad-7f39-a9c4-ecd0-d460ab81697d", "4a43a816-3a96-26ee-0340-71e21303c69d"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".edges_bg.notouch",
                                "selectorGuids": ["728828c4-4592-0cce-62e3-d57c43f8fa3d", "1dc602de-b154-86e7-8d04-82b160d8143e"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-6-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".mission_bg.notouch",
                                "selectorGuids": ["12fb7fad-7f39-a9c4-ecd0-d460ab81697d", "4a43a816-3a96-26ee-0340-71e21303c69d"]
                            },
                            "yValue": 700,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-6-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".edges_bg.notouch",
                                "selectorGuids": ["728828c4-4592-0cce-62e3-d57c43f8fa3d", "1dc602de-b154-86e7-8d04-82b160d8143e"]
                            },
                            "yValue": -700,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1687599863358
        },
        "a-7": {
            "id": "a-7",
            "title": "advantages_planet",
            "continuousParameterGroups": [{
                "id": "a-7-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-7-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".advantages_planet_1.notouch",
                                "selectorGuids": ["817047c4-d379-368d-9524-8770552e57cc", "71c97175-3421-8192-f6c8-daacd853f21e"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-7-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".advantages_stars.notouch",
                                "selectorGuids": ["43bf4cd8-72ba-340b-517d-c1f76e8a6d07", "df6a9b62-510e-cf32-3f4d-eb62dbe8da66"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-7-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".advantages_stars.notouch",
                                "selectorGuids": ["43bf4cd8-72ba-340b-517d-c1f76e8a6d07", "df6a9b62-510e-cf32-3f4d-eb62dbe8da66"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 70,
                    "actionItems": [{
                        "id": "a-7-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".advantages_stars.notouch",
                                "selectorGuids": ["43bf4cd8-72ba-340b-517d-c1f76e8a6d07", "df6a9b62-510e-cf32-3f4d-eb62dbe8da66"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-7-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".advantages_planet_1.notouch",
                                "selectorGuids": ["817047c4-d379-368d-9524-8770552e57cc", "71c97175-3421-8192-f6c8-daacd853f21e"]
                            },
                            "yValue": -600,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1687600324519
        },
        "a-8": {
            "id": "a-8",
            "title": "payment_planet",
            "continuousParameterGroups": [{
                "id": "a-8-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-8-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".payment_methods_planet.notouch",
                                "selectorGuids": ["69e4f455-1dff-98e1-7c3e-fccf64ac65d6", "e275f2cd-a5f8-1d04-495b-74d8ce6b867d"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-8-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".payment_methods_planet.notouch",
                                "selectorGuids": ["69e4f455-1dff-98e1-7c3e-fccf64ac65d6", "e275f2cd-a5f8-1d04-495b-74d8ce6b867d"]
                            },
                            "yValue": -470,
                            "xUnit": "PX",
                            "yUnit": "px",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1687600324519
        },
        "a-9": {
            "id": "a-9",
            "title": "navbar_open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_wrapper",
                            "selectorGuids": ["88300b3a-2c9f-7128-7321-c2eab1ce1af7"]
                        },
                        "globalSwatchId": "",
                        "rValue": 4,
                        "bValue": 32,
                        "gValue": 3,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1687619249168
        },
        "a-10": {
            "id": "a-10",
            "title": "navbar_close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".header_wrapper",
                            "selectorGuids": ["88300b3a-2c9f-7128-7321-c2eab1ce1af7"]
                        },
                        "globalSwatchId": "",
                        "rValue": 4,
                        "bValue": 32,
                        "gValue": 3,
                        "aValue": 0.26
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1687619313254
        },
        "a-11": {
            "id": "a-11",
            "title": "hidden_dropdown_show_current",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".benefits_dropdown_list.hidden",
                            "selectorGuids": ["5cefc63f-d66b-9007-db9d-c60e365f2550", "8db214be-3abe-d507-e6a5-9832ef9ac059"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".tab_active_icon.hidden",
                            "selectorGuids": ["1bc11283-b27a-e5ad-e82a-08340de62300", "c856592d-097e-5a68-f1fd-622dea4a8f95"]
                        },
                        "widthValue": 0,
                        "widthUnit": "px",
                        "heightUnit": "PX",
                        "locked": false
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dropdown_heading.black",
                            "selectorGuids": ["2e83bfae-06a4-f2e0-597c-0c246b9b9863", "c5149393-3ddf-6cc0-6356-afa570826c92"]
                        },
                        "globalSwatchId": "c8b347f4",
                        "rValue": 198,
                        "bValue": 220,
                        "gValue": 207,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".benefits_dropdown_wrapper.fake",
                            "selectorGuids": ["d9997533-bb12-0d77-be28-9501c0ec3b87", "8bf9ef77-223d-bcb0-b486-72e3be01eae3"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-11-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".benefits_dropdown_wrapper.hidden",
                            "selectorGuids": ["d9997533-bb12-0d77-be28-9501c0ec3b87", "7b0478f5-ebf3-11ae-6761-c9022c9442e8"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1687533762649
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "fadeIn": {
            "id": "fadeIn",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideInRight": {
            "id": "slideInRight",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
