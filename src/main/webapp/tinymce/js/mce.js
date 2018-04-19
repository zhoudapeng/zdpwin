// 4.0.28 (2014-05-27)
!function (e, t) {
    "use strict";
    function n(e, t) {
        for (var n, r = [], i = 0; i < e.length; ++i) {
            if (n = s[e[i]] || o(e[i]), !n)throw"module definition dependecy not found: " + e[i];
            r.push(n)
        }
        t.apply(null, r)
    }

    function r(e, r, i) {
        if ("string" != typeof e)throw"invalid module definition, module id must be defined and be a string";
        if (r === t)throw"invalid module definition, dependencies must be specified";
        if (i === t)throw"invalid module definition, definition function must be specified";
        n(r, function () {
            s[e] = i.apply(null, arguments)
        })
    }

    function i(e) {
        return !!s[e]
    }

    function o(t) {
        for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
            if (!n[r[i]])return;
            n = n[r[i]]
        }
        return n
    }

    function a(n) {
        for (var r = 0; r < n.length; r++) {
            for (var i = e, o = n[r], a = o.split(/[.\/]/), l = 0; l < a.length - 1; ++l)i[a[l]] === t && (i[a[l]] = {}), i = i[a[l]];
            i[a[a.length - 1]] = s[o]
        }
    }

    var s = {}, l = "tinymce/dom/EventUtils", c = "tinymce/dom/Sizzle", u = "tinymce/dom/DomQuery", d = "tinymce/html/Styles", f = "tinymce/dom/TreeWalker", p = "tinymce/util/Tools", m = "tinymce/dom/Range", h = "tinymce/html/Entities", g = "tinymce/Env", v = "tinymce/dom/StyleSheetLoader", y = "tinymce/dom/DOMUtils", b = "tinymce/dom/ScriptLoader", C = "tinymce/AddOnManager", x = "tinymce/html/Node", w = "tinymce/html/Schema", _ = "tinymce/html/SaxParser", N = "tinymce/html/DomParser", E = "tinymce/html/Writer", k = "tinymce/html/Serializer", S = "tinymce/dom/Serializer", T = "tinymce/dom/TridentSelection", R = "tinymce/util/VK", A = "tinymce/dom/ControlSelection", B = "tinymce/dom/RangeUtils", D = "tinymce/dom/BookmarkManager", L = "tinymce/dom/Selection", M = "tinymce/dom/ElementUtils", H = "tinymce/fmt/Preview", P = "tinymce/Formatter", O = "tinymce/UndoManager", I = "tinymce/EnterKey", F = "tinymce/ForceBlocks", z = "tinymce/EditorCommands", W = "tinymce/util/URI", V = "tinymce/util/Class", U = "tinymce/util/EventDispatcher", q = "tinymce/ui/Selector", $ = "tinymce/ui/Collection", j = "tinymce/ui/DomUtils", K = "tinymce/ui/Control", G = "tinymce/ui/Factory", Y = "tinymce/ui/KeyboardNavigation", X = "tinymce/ui/Container", J = "tinymce/ui/DragHelper", Q = "tinymce/ui/Scrollable", Z = "tinymce/ui/Panel", et = "tinymce/ui/Movable", tt = "tinymce/ui/Resizable", nt = "tinymce/ui/FloatPanel", rt = "tinymce/ui/Window", it = "tinymce/ui/MessageBox", ot = "tinymce/WindowManager", at = "tinymce/util/Quirks", st = "tinymce/util/Observable", lt = "tinymce/EditorObservable", ct = "tinymce/Shortcuts", ut = "tinymce/Editor", dt = "tinymce/util/I18n", ft = "tinymce/FocusManager", pt = "tinymce/EditorManager", mt = "tinymce/LegacyInput", ht = "tinymce/util/XHR", gt = "tinymce/util/JSON", vt = "tinymce/util/JSONRequest", yt = "tinymce/util/JSONP", bt = "tinymce/util/LocalStorage", Ct = "tinymce/Compat", xt = "tinymce/ui/Layout", wt = "tinymce/ui/AbsoluteLayout", _t = "tinymce/ui/Tooltip", Nt = "tinymce/ui/Widget", Et = "tinymce/ui/Button", kt = "tinymce/ui/ButtonGroup", St = "tinymce/ui/Checkbox", Tt = "tinymce/ui/PanelButton", Rt = "tinymce/ui/ColorButton", At = "tinymce/ui/ComboBox", Bt = "tinymce/ui/Path", Dt = "tinymce/ui/ElementPath", Lt = "tinymce/ui/FormItem", Mt = "tinymce/ui/Form", Ht = "tinymce/ui/FieldSet", Pt = "tinymce/ui/FilePicker", Ot = "tinymce/ui/FitLayout", It = "tinymce/ui/FlexLayout", Ft = "tinymce/ui/FlowLayout", zt = "tinymce/ui/FormatControls", Wt = "tinymce/ui/GridLayout", Vt = "tinymce/ui/Iframe", Ut = "tinymce/ui/Label", qt = "tinymce/ui/Toolbar", $t = "tinymce/ui/MenuBar", jt = "tinymce/ui/MenuButton", Kt = "tinymce/ui/ListBox", Gt = "tinymce/ui/MenuItem", Yt = "tinymce/ui/Menu", Xt = "tinymce/ui/Radio", Jt = "tinymce/ui/ResizeHandle", Qt = "tinymce/ui/Spacer", Zt = "tinymce/ui/SplitButton", en = "tinymce/ui/StackLayout", tn = "tinymce/ui/TabPanel", nn = "tinymce/ui/TextBox", rn = "tinymce/ui/Throbber";
    r(l, [], function () {
        function e(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r || !1) : e.attachEvent && e.attachEvent("on" + t, n)
        }

        function t(e, t, n, r) {
            e.removeEventListener ? e.removeEventListener(t, n, r || !1) : e.detachEvent && e.detachEvent("on" + t, n)
        }

        function n(e, t) {
            function n() {
                return !1
            }

            function r() {
                return !0
            }

            var i, o = t || {}, l;
            for (i in e)s[i] || (o[i] = e[i]);
            if (o.target || (o.target = o.srcElement || document), e && a.test(e.type) && e.pageX === l && e.clientX !== l) {
                var c = o.target.ownerDocument || document, u = c.documentElement, d = c.body;
                o.pageX = e.clientX + (u && u.scrollLeft || d && d.scrollLeft || 0) - (u && u.clientLeft || d && d.clientLeft || 0), o.pageY = e.clientY + (u && u.scrollTop || d && d.scrollTop || 0) - (u && u.clientTop || d && d.clientTop || 0)
            }
            return o.preventDefault = function () {
                o.isDefaultPrevented = r, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            }, o.stopPropagation = function () {
                o.isPropagationStopped = r, e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
            }, o.stopImmediatePropagation = function () {
                o.isImmediatePropagationStopped = r, o.stopPropagation()
            }, o.isDefaultPrevented || (o.isDefaultPrevented = n, o.isPropagationStopped = n, o.isImmediatePropagationStopped = n), o
        }

        function r(n, r, i) {
            function o() {
                i.domLoaded || (i.domLoaded = !0, r(c))
            }

            function a() {
                ("complete" === l.readyState || "interactive" === l.readyState && l.body) && (t(l, "readystatechange", a), o())
            }

            function s() {
                try {
                    l.documentElement.doScroll("left")
                } catch (e) {
                    return void setTimeout(s, 0)
                }
                o()
            }

            var l = n.document, c = {type: "ready"};
            return i.domLoaded ? void r(c) : (l.addEventListener ? "complete" === l.readyState ? o() : e(n, "DOMContentLoaded", o) : (e(l, "readystatechange", a), l.documentElement.doScroll && n.self === n.top && s()), void e(n, "load", o))
        }

        function i() {
            function i(e, t) {
                var n, r, i, o, a = s[t];
                if (n = a && a[e.type])for (r = 0, i = n.length; i > r; r++)if (o = n[r], o && o.func.call(o.scope, e) === !1 && e.preventDefault(), e.isImmediatePropagationStopped())return
            }

            var a = this, s = {}, l, c, u, d, f;
            c = o + (+new Date).toString(32), d = "onmouseenter" in document.documentElement, u = "onfocusin" in document.documentElement, f = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            }, l = 1, a.domLoaded = !1, a.events = s, a.bind = function (t, o, p, m) {
                function h(e) {
                    i(n(e || _.event), g)
                }

                var g, v, y, b, C, x, w, _ = window;
                if (t && 3 !== t.nodeType && 8 !== t.nodeType) {
                    for (t[c] ? g = t[c] : (g = l++, t[c] = g, s[g] = {}), m = m || t, o = o.split(" "), y = o.length; y--;)b = o[y], x = h, C = w = !1, "DOMContentLoaded" === b && (b = "ready"), a.domLoaded && "ready" === b && "complete" == t.readyState ? p.call(m, n({type: b})) : (d || (C = f[b], C && (x = function (e) {
                        var t, r;
                        if (t = e.currentTarget, r = e.relatedTarget, r && t.contains)r = t.contains(r); else for (; r && r !== t;)r = r.parentNode;
                        r || (e = n(e || _.event), e.type = "mouseout" === e.type ? "mouseleave" : "mouseenter", e.target = t, i(e, g))
                    })), u || "focusin" !== b && "focusout" !== b || (w = !0, C = "focusin" === b ? "focus" : "blur", x = function (e) {
                        e = n(e || _.event), e.type = "focus" === e.type ? "focusin" : "focusout", i(e, g)
                    }), v = s[g][b], v ? "ready" === b && a.domLoaded ? p({type: b}) : v.push({
                        func: p,
                        scope: m
                    }) : (s[g][b] = v = [{
                        func: p,
                        scope: m
                    }], v.fakeName = C, v.capture = w, v.nativeHandler = x, "ready" === b ? r(t, x, a) : e(t, C || b, x, w)));
                    return t = v = 0, p
                }
            }, a.unbind = function (e, n, r) {
                var i, o, l, u, d, f;
                if (!e || 3 === e.nodeType || 8 === e.nodeType)return a;
                if (i = e[c]) {
                    if (f = s[i], n) {
                        for (n = n.split(" "), l = n.length; l--;)if (d = n[l], o = f[d]) {
                            if (r)for (u = o.length; u--;)if (o[u].func === r) {
                                var p = o.nativeHandler, m = o.fakeName, h = o.capture;
                                o = o.slice(0, u).concat(o.slice(u + 1)), o.nativeHandler = p, o.fakeName = m, o.capture = h, f[d] = o
                            }
                            r && 0 !== o.length || (delete f[d], t(e, o.fakeName || d, o.nativeHandler, o.capture))
                        }
                    } else {
                        for (d in f)o = f[d], t(e, o.fakeName || d, o.nativeHandler, o.capture);
                        f = {}
                    }
                    for (d in f)return a;
                    delete s[i];
                    try {
                        delete e[c]
                    } catch (g) {
                        e[c] = null
                    }
                }
                return a
            }, a.fire = function (e, t, r) {
                var o;
                if (!e || 3 === e.nodeType || 8 === e.nodeType)return a;
                r = n(null, r), r.type = t, r.target = e;
                do o = e[c], o && i(r, o), e = e.parentNode || e.ownerDocument || e.defaultView || e.parentWindow; while (e && !r.isPropagationStopped());
                return a
            }, a.clean = function (e) {
                var t, n, r = a.unbind;
                if (!e || 3 === e.nodeType || 8 === e.nodeType)return a;
                if (e[c] && r(e), e.getElementsByTagName || (e = e.document), e && e.getElementsByTagName)for (r(e), n = e.getElementsByTagName("*"), t = n.length; t--;)e = n[t], e[c] && r(e);
                return a
            }, a.destroy = function () {
                s = {}
            }, a.cancel = function (e) {
                return e && (e.preventDefault(), e.stopImmediatePropagation()), !1
            }
        }

        var o = "mce-data-", a = /^(?:mouse|contextmenu)|click/, s = {
            keyLocation: 1,
            layerX: 1,
            layerY: 1,
            returnValue: 1
        };
        return i.Event = new i, i.Event.bind(window, "ready", function () {
        }), i
    }), r(c, [], function () {
        function e(e) {
            return ht.test(e + "")
        }

        function n() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > _.cacheLength && delete e[t.shift()], e[n] = r, r
            }
        }

        function r(e) {
            return e[I] = !0, e
        }

        function i(e) {
            var t = B.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }

        function o(e, t, n, r) {
            var i, o, a, s, l, c, f, p, m, h;
            if ((t ? t.ownerDocument || t : F) !== B && A(t), t = t || B, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (s = t.nodeType) && 9 !== s)return [];
            if (L && !r) {
                if (i = gt.exec(e))if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode)return n;
                        if (o.id === a)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a)return n.push(o), n
                } else {
                    if (i[2])return Z.apply(n, t.getElementsByTagName(e)), n;
                    if ((a = i[3]) && z.getElementsByClassName && t.getElementsByClassName)return Z.apply(n, t.getElementsByClassName(a)), n
                }
                if (z.qsa && !M.test(e)) {
                    if (f = !0, p = I, m = t, h = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (c = u(e), (f = t.getAttribute("id")) ? p = f.replace(bt, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;)c[l] = p + d(c[l]);
                        m = mt.test(e) && t.parentNode || t, h = c.join(",")
                    }
                    if (h)try {
                        return Z.apply(n, m.querySelectorAll(h)), n
                    } catch (g) {
                    } finally {
                        f || t.removeAttribute("id")
                    }
                }
            }
            return b(e.replace(lt, "$1"), t, n, r)
        }

        function a(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function u(e, t) {
            var n, r, i, a, s, l, c, u = q[e + " "];
            if (u)return t ? 0 : u.slice(0);
            for (s = e, l = [], c = _.preFilter; s;) {
                (!n || (r = ct.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = ut.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(lt, " ")
                }), s = s.slice(n.length));
                for (a in _.filter)!(r = pt[a].exec(s)) || c[a] && !(r = c[a](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: a,
                    matches: r
                }), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? o.error(e) : q(e, l).slice(0)
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
            return r
        }

        function f(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = V++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
            } : function (t, n, a) {
                var s, l, c, u = W + " " + o;
                if (a) {
                    for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
                } else for (; t = t[r];)if (1 === t.nodeType || i)if (c = t[I] || (t[I] = {}), (l = c[r]) && l[0] === u) {
                    if ((s = l[1]) === !0 || s === w)return s === !0
                } else if (l = c[r] = [u], l[1] = e(t, n, a) || w, l[1] === !0)return !0
            }
        }

        function p(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function m(e, t, n, r, i) {
            for (var o, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), c && t.push(s));
            return a
        }

        function h(e, t, n, i, o, a) {
            return i && !i[I] && (i = h(i)), o && !o[I] && (o = h(o, a)), r(function (r, a, s, l) {
                var c, u, d, f = [], p = [], h = a.length, g = r || y(t || "*", s.nodeType ? [s] : s, []), v = !e || !r && t ? g : m(g, f, e, s, l), b = n ? o || (r ? e : h || i) ? [] : a : v;
                if (n && n(v, b, s, l), i)for (c = m(b, p), i(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[p[u]] = !(v[p[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = b.length; u--;)(d = b[u]) && c.push(v[u] = d);
                            o(null, b = [], c, l)
                        }
                        for (u = b.length; u--;)(d = b[u]) && (c = o ? tt.call(r, d) : f[u]) > -1 && (r[c] = !(a[c] = d))
                    }
                } else b = m(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, l) : Z.apply(a, b)
            })
        }

        function g(e) {
            for (var t, n, r, i = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = f(function (e) {
                return e === t
            }, a, !0), c = f(function (e) {
                return tt.call(t, e) > -1
            }, a, !0), u = [function (e, n, r) {
                return !o && (r || n !== S) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
            }]; i > s; s++)if (n = _.relative[e[s].type])u = [f(p(u), n)]; else {
                if (n = _.filter[e[s].type].apply(null, e[s].matches), n[I]) {
                    for (r = ++s; i > r && !_.relative[e[r].type]; r++);
                    return h(s > 1 && p(u), s > 1 && d(e.slice(0, s - 1)).replace(lt, "$1"), n, r > s && g(e.slice(s, r)), i > r && g(e = e.slice(r)), i > r && d(e))
                }
                u.push(n)
            }
            return p(u)
        }

        function v(e, t) {
            var n = 0, i = t.length > 0, a = e.length > 0, s = function (r, s, l, c, u) {
                var d, f, p, h = [], g = 0, v = "0", y = r && [], b = null != u, C = S, x = r || a && _.find.TAG("*", u && s.parentNode || s), N = W += null == C ? 1 : Math.random() || .1;
                for (b && (S = s !== B && s, w = n); null != (d = x[v]); v++) {
                    if (a && d) {
                        for (f = 0; p = e[f++];)if (p(d, s, l)) {
                            c.push(d);
                            break
                        }
                        b && (W = N, w = ++n)
                    }
                    i && ((d = !p && d) && g--, r && y.push(d))
                }
                if (g += v, i && v !== g) {
                    for (f = 0; p = t[f++];)p(y, h, s, l);
                    if (r) {
                        if (g > 0)for (; v--;)y[v] || h[v] || (h[v] = J.call(c));
                        h = m(h)
                    }
                    Z.apply(c, h), b && !r && h.length > 0 && g + t.length > 1 && o.uniqueSort(c)
                }
                return b && (W = N, S = C), y
            };
            return i ? r(s) : s
        }

        function y(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++)o(e, t[r], n);
            return n
        }

        function b(e, t, n, r) {
            var i, o, a, s, l, c = u(e);
            if (!r && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && L && _.relative[o[1].type]) {
                    if (t = (_.find.ID(a.matches[0].replace(xt, wt), t) || [])[0], !t)return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !_.relative[s = a.type]);)if ((l = _.find[s]) && (r = l(a.matches[0].replace(xt, wt), mt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && d(o), !e)return Z.apply(n, r), n;
                    break
                }
            }
            return k(e, c)(r, t, !L, n, mt.test(e)), n
        }

        function C() {
        }

        var x, w, _, N, E, k, S, T, R, A, B, D, L, M, H, P, O, I = "sizzle" + -new Date, F = window.document, z = {}, W = 0, V = 0, U = n(), q = n(), $ = n(), j = !1, K = function () {
            return 0
        }, G = typeof t, Y = 1 << 31, X = [], J = X.pop, Q = X.push, Z = X.push, et = X.slice, tt = X.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                return -1
            }, nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", it = rt.replace("w", "w#"), ot = "([*^$|!~]?=)", at = "\\[" + nt + "*(" + rt + ")" + nt + "*(?:" + ot + nt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + it + ")|)|)" + nt + "*\\]", st = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)", lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"), ct = new RegExp("^" + nt + "*," + nt + "*"), ut = new RegExp("^" + nt + "*([\\x20\\t\\r\\n\\f>+~])" + nt + "*"), dt = new RegExp(st), ft = new RegExp("^" + it + "$"), pt = {
            ID: new RegExp("^#(" + rt + ")"),
            CLASS: new RegExp("^\\.(" + rt + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + rt + ")['\"]?\\]"),
            TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + at),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
        }, mt = /[\x20\t\r\n\f]*[+~]/, ht = /^[^{]+\{\s*\[native code/, gt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, vt = /^(?:input|select|textarea|button)$/i, yt = /^h\d$/i, bt = /'|\\/g, Ct = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, wt = function (e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            Z.apply(X = et.call(F.childNodes), F.childNodes), X[F.childNodes.length].nodeType
        } catch (_t) {
            Z = {
                apply: X.length ? function (e, t) {
                    Q.apply(e, et.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        E = o.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, A = o.setDocument = function (n) {
            var r = n ? n.ownerDocument || n : F;
            return r !== B && 9 === r.nodeType && r.documentElement ? (B = r, D = r.documentElement, L = !E(r), z.getElementsByTagName = i(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), z.attributes = i(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), z.getElementsByClassName = i(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), z.getByName = i(function (e) {
                e.id = I + 0, e.appendChild(B.createElement("a")).setAttribute("name", I), e.appendChild(B.createElement("i")).setAttribute("name", I), D.appendChild(e);
                var t = r.getElementsByName && r.getElementsByName(I).length === 2 + r.getElementsByName(I + 0).length;
                return D.removeChild(e), t
            }), z.sortDetached = i(function (e) {
                return e.compareDocumentPosition && 1 & e.compareDocumentPosition(B.createElement("div"))
            }), _.attrHandle = i(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== G && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            }, z.getByName ? (_.find.ID = function (e, t) {
                if (typeof t.getElementById !== G && L) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, _.filter.ID = function (e) {
                var t = e.replace(xt, wt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (_.find.ID = function (e, n) {
                if (typeof n.getElementById !== G && L) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== G && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, _.filter.ID = function (e) {
                var t = e.replace(xt, wt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== G && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), _.find.TAG = z.getElementsByTagName ? function (e, t) {
                return typeof t.getElementsByTagName !== G ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, _.find.NAME = z.getByName && function (e, t) {
                    return typeof t.getElementsByName !== G ? t.getElementsByName(name) : void 0
                }, _.find.CLASS = z.getElementsByClassName && function (e, t) {
                    return typeof t.getElementsByClassName !== G && L ? t.getElementsByClassName(e) : void 0
                }, H = [], M = [":focus"], (z.qsa = e(r.querySelectorAll)) && (i(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + nt + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || M.push(":checked")
            }), i(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && M.push("[*^$]=" + nt + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (z.matchesSelector = e(P = D.matchesSelector || D.mozMatchesSelector || D.webkitMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && i(function (e) {
                z.disconnectedMatch = P.call(e, "div"), P.call(e, "[s!='']:x"), H.push("!=", st)
            }), M = new RegExp(M.join("|")), H = H.length && new RegExp(H.join("|")), O = e(D.contains) || D.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, K = D.compareDocumentPosition ? function (e, t) {
                if (e === t)return j = !0, 0;
                var n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return n ? 1 & n || T && t.compareDocumentPosition(e) === n ? e === r || O(F, e) ? -1 : t === r || O(F, t) ? 1 : R ? tt.call(R, e) - tt.call(R, t) : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var n, i = 0, o = e.parentNode, s = t.parentNode, l = [e], c = [t];
                if (e === t)return j = !0, 0;
                if (!o || !s)return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : 0;
                if (o === s)return a(e, t);
                for (n = e; n = n.parentNode;)l.unshift(n);
                for (n = t; n = n.parentNode;)c.unshift(n);
                for (; l[i] === c[i];)i++;
                return i ? a(l[i], c[i]) : l[i] === F ? -1 : c[i] === F ? 1 : 0
            }, B) : B
        }, o.matches = function (e, t) {
            return o(e, null, null, t)
        }, o.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== B && A(e), t = t.replace(Ct, "='$1']"), z.matchesSelector && L && (!H || !H.test(t)) && !M.test(t))try {
                var n = P.call(e, t);
                if (n || z.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (r) {
            }
            return o(t, B, null, [e]).length > 0
        }, o.contains = function (e, t) {
            return (e.ownerDocument || e) !== B && A(e), O(e, t)
        }, o.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== B && A(e), L && (t = t.toLowerCase()), (n = _.attrHandle[t]) ? n(e) : !L || z.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, o.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, o.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (j = !z.detectDuplicates, T = !z.sortDetached, R = !z.sortStable && e.slice(0), e.sort(K), j) {
                for (; t = e[i++];)t === e[i] && (r = n.push(i));
                for (; r--;)e.splice(n[r], 1)
            }
            return e
        }, N = o.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += N(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r]; r++)n += N(t);
            return n
        }, _ = o.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pt,
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xt, wt), e[3] = (e[4] || e[5] || "").replace(xt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && o.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && dt.test(n) && (t = u(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(xt, wt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                }, CLASS: function (e) {
                    var t = U[e + " "];
                    return t || (t = new RegExp("(^|" + nt + ")" + e + "(" + nt + "|$)")) && U(e, function (e) {
                            return t.test(e.className || typeof e.getAttribute !== G && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = o.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, u, d, f, p, m, h = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s;
                        if (g) {
                            if (o) {
                                for (; h;) {
                                    for (d = t; d = d[h];)if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)return !1;
                                    m = h = "only" === e && !m && "nextSibling"
                                }
                                return !0
                            }
                            if (m = [a ? g.firstChild : g.lastChild], a && y) {
                                for (u = g[I] || (g[I] = {}), c = u[e] || [], p = c[0] === W && c[1], f = c[0] === W && c[2], d = p && g.childNodes[p]; d = ++p && d && d[h] || (f = p = 0) || m.pop();)if (1 === d.nodeType && ++f && d === t) {
                                    u[e] = [W, p, f];
                                    break
                                }
                            } else if (y && (c = (t[I] || (t[I] = {}))[e]) && c[0] === W)f = c[1]; else for (; (d = ++p && d && d[h] || (f = p = 0) || m.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[I] || (d[I] = {}))[e] = [W, f]), d !== t)););
                            return f -= i, f === r || f % r === 0 && f / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, i = _.pseudos[e] || _.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
                    return i[I] ? i(t) : i.length > 1 ? (n = [e, e, "", t], _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, n) {
                        for (var r, o = i(e, t), a = o.length; a--;)r = tt.call(e, o[a]), e[r] = !(n[r] = o[a])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = k(e.replace(lt, "$1"));
                    return i[I] ? r(function (e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), !n.pop()
                    }
                }), has: r(function (e) {
                    return function (t) {
                        return o(e, t).length > 0
                    }
                }), contains: r(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return ft.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(), function (t) {
                        var n;
                        do if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = window.location && window.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === D
                }, focus: function (e) {
                    return e === B.activeElement && (!B.hasFocus || B.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
                    return !0
                }, parent: function (e) {
                    return !_.pseudos.empty(e)
                }, header: function (e) {
                    return yt.test(e.nodeName)
                }, input: function (e) {
                    return vt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        };
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})_.pseudos[x] = s(x);
        for (x in{submit: !0, reset: !0})_.pseudos[x] = l(x);
        return k = o.compile = function (e, t) {
            var n, r = [], i = [], o = $[e + " "];
            if (!o) {
                for (t || (t = u(e)), n = t.length; n--;)o = g(t[n]), o[I] ? r.push(o) : i.push(o);
                o = $(e, v(i, r))
            }
            return o
        }, _.pseudos.nth = _.pseudos.eq, C.prototype = _.filters = _.pseudos, _.setFilters = new C, z.sortStable = I.split("").sort(K).join("") === I, A(), [0, 0].sort(K), z.detectDuplicates = j, o
    }), r(u, [l, c], function (e, n) {
        function r(e) {
            return "undefined" != typeof e
        }

        function i(e) {
            return "string" == typeof e
        }

        function o(e) {
            var t, n, r;
            for (r = v.createElement("div"), t = v.createDocumentFragment(), r.innerHTML = e; n = r.firstChild;)t.appendChild(n);
            return t
        }

        function a(e, t, n) {
            var r;
            if ("string" == typeof t)t = o(t); else if (t.length) {
                for (r = 0; r < t.length; r++)a(e, t[r], n);
                return e
            }
            for (r = e.length; r--;)n.call(e[r], t.parentNode ? t : t);
            return e
        }

        function s(e, t) {
            return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ")
        }

        function l(e, t) {
            var n;
            for (e = e || [], "string" == typeof e && (e = e.split(" ")), t = t || {}, n = e.length; n--;)t[e[n]] = {};
            return t
        }

        function c(e, t) {
            return new c.fn.init(e, t)
        }

        function u(e) {
            var t = arguments, n, r, i;
            for (r = 1; r < t.length; r++) {
                n = t[r];
                for (i in n)e[i] = n[i]
            }
            return e
        }

        function d(e) {
            var t = [], n, r;
            for (n = 0, r = e.length; r > n; n++)t[n] = e[n];
            return t
        }

        function f(e, t) {
            var n;
            if (t.indexOf)return t.indexOf(e);
            for (n = t.length; n--;)if (t[n] === e)return n;
            return -1
        }

        function p(e) {
            return null === e || e === t ? "" : ("" + e).replace(N, "")
        }

        function m(e, t) {
            var n, r, i, o, a;
            if (e)if (n = e.length, n === o) {
                for (r in e)if (e.hasOwnProperty(r) && (a = e[r], t.call(a, a, r) === !1))break
            } else for (i = 0; n > i && (a = e[i], t.call(a, a, r) !== !1); i++);
            return e
        }

        function h(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !c(o).is(r));)1 === o.nodeType && i.push(o), o = o[n];
            return i
        }

        function g(e, t, n, r) {
            for (var i = []; e; e = e[n])r && e.nodeType !== r || e === t || i.push(e);
            return i
        }

        var v = document, y = Array.prototype.push, b = Array.prototype.slice, C = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, x = e.Event, w = l("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"), _ = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, N = /^\s*|\s*$/g;
        return c.fn = c.prototype = {
            constructor: c, selector: "", length: 0, init: function (e, t) {
                var n = this, r, a;
                if (!e)return n;
                if (e.nodeType)return n.context = n[0] = e, n.length = 1, n;
                if (i(e)) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : C.exec(e), !r)return c(t || document).find(e);
                    if (r[1])for (a = o(e).firstChild; a;)this.add(a), a = a.nextSibling; else {
                        if (a = v.getElementById(r[2]), a.id !== r[2])return n.find(e);
                        n.length = 1, n[0] = a
                    }
                } else this.add(e);
                return n
            }, toArray: function () {
                return d(this)
            }, add: function (e) {
                var t = this;
                return _(e) ? y.apply(t, e) : e instanceof c ? t.add(e.toArray()) : y.call(t, e), t
            }, attr: function (e, n) {
                var i = this;
                if ("object" == typeof e)m(e, function (e, t) {
                    i.attr(t, e)
                }); else {
                    if (!r(n))return i[0] && 1 === i[0].nodeType ? i[0].getAttribute(e) : t;
                    this.each(function () {
                        1 === this.nodeType && this.setAttribute(e, n)
                    })
                }
                return i
            }, css: function (e, n) {
                var i = this;
                if ("object" == typeof e)m(e, function (e, t) {
                    i.css(t, e)
                }); else {
                    if (e = e.replace(/-(\D)/g, function (e, t) {
                            return t.toUpperCase()
                        }), !r(n))return i[0] ? i[0].style[e] : t;
                    "number" != typeof n || w[e] || (n += "px"), i.each(function () {
                        var t = this.style;
                        "opacity" === e && this.runtimeStyle && "undefined" == typeof this.runtimeStyle.opacity && (t.filter = "" === n ? "" : "alpha(opacity=" + 100 * n + ")");
                        try {
                            t[e] = n
                        } catch (r) {
                        }
                    })
                }
                return i
            }, remove: function () {
                for (var e = this, t, n = this.length; n--;)t = e[n], x.clean(t), t.parentNode && t.parentNode.removeChild(t);
                return this
            }, empty: function () {
                for (var e = this, t, n = this.length; n--;)for (t = e[n]; t.firstChild;)t.removeChild(t.firstChild);
                return this
            }, html: function (e) {
                var t = this, n;
                if (r(e)) {
                    for (n = t.length; n--;)t[n].innerHTML = e;
                    return t
                }
                return t[0] ? t[0].innerHTML : ""
            }, text: function (e) {
                var t = this, n;
                if (r(e)) {
                    for (n = t.length; n--;)t[n].innerText = t[0].textContent = e;
                    return t
                }
                return t[0] ? t[0].innerText || t[0].textContent : ""
            }, append: function () {
                return a(this, arguments, function (e) {
                    1 === this.nodeType && this.appendChild(e)
                })
            }, prepend: function () {
                return a(this, arguments, function (e) {
                    1 === this.nodeType && this.insertBefore(e, this.firstChild)
                })
            }, before: function () {
                var e = this;
                return e[0] && e[0].parentNode ? a(e, arguments, function (e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }) : e
            }, after: function () {
                var e = this;
                return e[0] && e[0].parentNode ? a(e, arguments, function (e) {
                    this.parentNode.insertBefore(e, this)
                }) : e
            }, appendTo: function (e) {
                return c(e).append(this), this
            }, addClass: function (e) {
                return this.toggleClass(e, !0)
            }, removeClass: function (e) {
                return this.toggleClass(e, !1)
            }, toggleClass: function (e, t) {
                var n = this;
                return -1 !== e.indexOf(" ") ? m(e.split(" "), function () {
                    n.toggleClass(this, t)
                }) : n.each(function (n) {
                    var r;
                    s(n, e) !== t && (r = n.className, t ? n.className += r ? " " + e : e : n.className = p((" " + r + " ").replace(" " + e + " ", " ")))
                }), n
            }, hasClass: function (e) {
                return s(this[0], e)
            }, each: function (e) {
                return m(this, e)
            }, on: function (e, t) {
                return this.each(function () {
                    x.bind(this, e, t)
                })
            }, off: function (e, t) {
                return this.each(function () {
                    x.unbind(this, e, t)
                })
            }, show: function () {
                return this.css("display", "")
            }, hide: function () {
                return this.css("display", "none")
            }, slice: function () {
                return new c(b.apply(this, arguments))
            }, eq: function (e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, replaceWith: function (e) {
                var t = this;
                return t[0] && t[0].parentNode.replaceChild(c(e)[0], t[0]), t
            }, wrap: function (e) {
                return e = c(e)[0], this.each(function () {
                    var t = this, n = e.cloneNode(!1);
                    t.parentNode.insertBefore(n, t), n.appendChild(t)
                })
            }, unwrap: function () {
                return this.each(function () {
                    for (var e = this, t = e.firstChild, n; t;)n = t, t = t.nextSibling, e.parentNode.insertBefore(n, e)
                })
            }, clone: function () {
                var e = [];
                return this.each(function () {
                    e.push(this.cloneNode(!0))
                }), c(e)
            }, find: function (e) {
                var t, n, r = [];
                for (t = 0, n = this.length; n > t; t++)c.find(e, this[t], r);
                return c(r)
            }, push: y, sort: [].sort, splice: [].splice
        }, u(c, {
            extend: u,
            toArray: d,
            inArray: f,
            isArray: _,
            each: m,
            trim: p,
            makeMap: l,
            find: n,
            expr: n.selectors,
            unique: n.uniqueSort,
            text: n.getText,
            isXMLDoc: n.isXML,
            contains: n.contains,
            filter: function (e, t, n) {
                return n && (e = ":not(" + e + ")"), t = 1 === t.length ? c.find.matchesSelector(t[0], e) ? [t[0]] : [] : c.find.matches(e, t)
            }
        }), m({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            }, parents: function (e) {
                return h(e, "parentNode")
            }, parentsUntil: function (e, t) {
                return h(e, "parentNode", t)
            }, next: function (e) {
                return g(e, "nextSibling", 1)
            }, prev: function (e) {
                return g(e, "previousSibling", 1)
            }, nextNodes: function (e) {
                return g(e, "nextSibling")
            }, prevNodes: function (e) {
                return g(e, "previousSibling")
            }, children: function (e) {
                return g(e.firstChild, "nextSibling", 1)
            }, contents: function (e) {
                return d(("iframe" === e.nodeName ? e.contentDocument || e.contentWindow.document : e).childNodes)
            }
        }, function (e, t) {
            c.fn[e] = function (n) {
                var r = this, i;
                if (r.length > 1)throw new Error("DomQuery only supports traverse functions on a single node.");
                return r[0] && (i = t(r[0], n)), i = c(i), n && "parentsUntil" !== e ? i.filter(n) : i
            }
        }), c.fn.filter = function (e) {
            return c.filter(e)
        }, c.fn.is = function (e) {
            return !!e && this.filter(e).length > 0
        }, c.fn.init.prototype = c.fn, c
    }), r(d, [], function () {
        return function (e, t) {
            function n(e, t, n, r) {
                function i(e) {
                    return e = parseInt(e, 10).toString(16), e.length > 1 ? e : "0" + e
                }

                return "#" + i(t) + i(n) + i(r)
            }

            var r = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi, i = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi, o = /\s*([^:]+):\s*([^;]+);?/g, a = /\s+$/, s, l, c = {}, u, d, f, p = "\ufeff";
            for (e = e || {}, t && (d = t.getValidStyles(), f = t.getInvalidStyles()), u = ("\\\" \\' \\; \\: ; : " + p).split(" "), l = 0; l < u.length; l++)c[u[l]] = p + l, c[p + l] = u[l];
            return {
                toHex: function (e) {
                    return e.replace(r, n)
                }, parse: function (t) {
                    function s(e, t, n) {
                        var r, i, o, a;
                        if (r = h[e + "-top" + t], r && (i = h[e + "-right" + t], i && (o = h[e + "-bottom" + t], o && (a = h[e + "-left" + t])))) {
                            var s = [r, i, o, a];
                            for (l = s.length - 1; l-- && s[l] === s[l + 1];);
                            l > -1 && n || (h[e + t] = -1 == l ? s[0] : s.join(" "), delete h[e + "-top" + t], delete h[e + "-right" + t], delete h[e + "-bottom" + t], delete h[e + "-left" + t])
                        }
                    }

                    function u(e) {
                        var t = h[e], n;
                        if (t) {
                            for (t = t.split(" "), n = t.length; n--;)if (t[n] !== t[0])return !1;
                            return h[e] = t[0], !0
                        }
                    }

                    function d(e, t, n, r) {
                        u(t) && u(n) && u(r) && (h[e] = h[t] + " " + h[n] + " " + h[r], delete h[t], delete h[n], delete h[r])
                    }

                    function f(e) {
                        return b = !0, c[e]
                    }

                    function p(e, t) {
                        return b && (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                            return c[e]
                        })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                    }

                    function m(t, n, r, i, o, a) {
                        if (o = o || a)return o = p(o), "'" + o.replace(/\'/g, "\\'") + "'";
                        if (n = p(n || r || i), !e.allow_script_urls) {
                            var s = n.replace(/[\s\r\n]+/, "");
                            if (/(java|vb)script:/i.test(s))return "";
                            if (!e.allow_svg_data_urls && /^data:image\/svg/i.test(s))return ""
                        }
                        return C && (n = C.call(x, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')"
                    }

                    var h = {}, g, v, y, b, C = e.url_converter, x = e.url_converter_scope || this;
                    if (t) {
                        for (t = t.replace(/[\u0000-\u001F]/g, ""), t = t.replace(/\\[\"\';:\uFEFF]/g, f).replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                            return e.replace(/[;:]/g, f)
                        }); g = o.exec(t);) {
                            if (v = g[1].replace(a, "").toLowerCase(), y = g[2].replace(a, ""), y = y.replace(/\\[0-9a-f]+/g, function (e) {
                                    return String.fromCharCode(parseInt(e.substr(1), 16))
                                }), v && y.length > 0) {
                                if (!e.allow_script_urls && ("behavior" == v || /expression\s*\(|\/\*|\*\//.test(y)))continue;
                                "font-weight" === v && "700" === y ? y = "bold" : ("color" === v || "background-color" === v) && (y = y.toLowerCase()), y = y.replace(r, n), y = y.replace(i, m), h[v] = b ? p(y, !0) : y
                            }
                            o.lastIndex = g.index + g[0].length
                        }
                        s("border", "", !0), s("border", "-width"), s("border", "-color"), s("border", "-style"), s("padding", ""), s("margin", ""), d("border", "border-width", "border-style", "border-color"), "medium none" === h.border && delete h.border, "none" === h["border-image"] && delete h["border-image"]
                    }
                    return h
                }, serialize: function (e, t) {
                    function n(t) {
                        var n, r, o, a;
                        if (n = d[t])for (r = 0, o = n.length; o > r; r++)t = n[r], a = e[t], a !== s && a.length > 0 && (i += (i.length > 0 ? " " : "") + t + ": " + a + ";")
                    }

                    function r(e, t) {
                        var n;
                        return n = f["*"], n && n[e] ? !1 : (n = f[t], n && n[e] ? !1 : !0)
                    }

                    var i = "", o, a;
                    if (t && d)n("*"), n(t); else for (o in e)a = e[o], a !== s && a.length > 0 && (!f || r(o, t)) && (i += (i.length > 0 ? " " : "") + o + ": " + a + ";");
                    return i
                }
            }
        }
    }), r(f, [], function () {
        return function (e, t) {
            function n(e, n, r, i) {
                var o, a;
                if (e) {
                    if (!i && e[n])return e[n];
                    if (e != t) {
                        if (o = e[r])return o;
                        for (a = e.parentNode; a && a != t; a = a.parentNode)if (o = a[r])return o
                    }
                }
            }

            var r = e;
            this.current = function () {
                return r
            }, this.next = function (e) {
                return r = n(r, "firstChild", "nextSibling", e)
            }, this.prev = function (e) {
                return r = n(r, "lastChild", "previousSibling", e)
            }
        }
    }), r(p, [], function () {
        function e(e) {
            return null === e || e === t ? "" : ("" + e).replace(h, "")
        }

        function n(e, n) {
            return n ? "array" == n && g(e) ? !0 : typeof e == n : e !== t
        }

        function r(e) {
            var t = [], n, r;
            for (n = 0, r = e.length; r > n; n++)t[n] = e[n];
            return t
        }

        function i(e, t, n) {
            var r;
            for (e = e || [], t = t || ",", "string" == typeof e && (e = e.split(t)), n = n || {}, r = e.length; r--;)n[e[r]] = {};
            return n
        }

        function o(e, n, r) {
            var i, o;
            if (!e)return 0;
            if (r = r || e, e.length !== t) {
                for (i = 0, o = e.length; o > i; i++)if (n.call(r, e[i], i, e) === !1)return 0
            } else for (i in e)if (e.hasOwnProperty(i) && n.call(r, e[i], i, e) === !1)return 0;
            return 1
        }

        function a(e, t) {
            var n = [];
            return o(e, function (e) {
                n.push(t(e))
            }), n
        }

        function s(e, t) {
            var n = [];
            return o(e, function (e) {
                (!t || t(e)) && n.push(e)
            }), n
        }

        function l(e, t, n) {
            var r = this, i, o, a, s, l, c = 0;
            if (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e), a = e[3].match(/(^|\.)(\w+)$/i)[2], o = r.createNS(e[3].replace(/\.\w+$/, ""), n), !o[a]) {
                if ("static" == e[2])return o[a] = t, void(this.onCreate && this.onCreate(e[2], e[3], o[a]));
                t[a] || (t[a] = function () {
                }, c = 1), o[a] = t[a], r.extend(o[a].prototype, t), e[5] && (i = r.resolve(e[5]).prototype, s = e[5].match(/\.(\w+)$/i)[1], l = o[a], o[a] = c ? function () {
                    return i[s].apply(this, arguments)
                } : function () {
                    return this.parent = i[s], l.apply(this, arguments)
                }, o[a].prototype[a] = o[a], r.each(i, function (e, t) {
                    o[a].prototype[t] = i[t]
                }), r.each(t, function (e, t) {
                    i[t] ? o[a].prototype[t] = function () {
                        return this.parent = i[t], e.apply(this, arguments)
                    } : t != a && (o[a].prototype[t] = e)
                })), r.each(t["static"], function (e, t) {
                    o[a][t] = e
                })
            }
        }

        function c(e, t) {
            var n, r;
            if (e)for (n = 0, r = e.length; r > n; n++)if (e[n] === t)return n;
            return -1
        }

        function u(e, n) {
            var r, i, o, a = arguments, s;
            for (r = 1, i = a.length; i > r; r++) {
                n = a[r];
                for (o in n)n.hasOwnProperty(o) && (s = n[o], s !== t && (e[o] = s))
            }
            return e
        }

        function d(e, t, n, r) {
            r = r || this, e && (n && (e = e[n]), o(e, function (e, i) {
                return t.call(r, e, i, n) === !1 ? !1 : void d(e, t, n, r)
            }))
        }

        function f(e, t) {
            var n, r;
            for (t = t || window, e = e.split("."), n = 0; n < e.length; n++)r = e[n], t[r] || (t[r] = {}), t = t[r];
            return t
        }

        function p(e, t) {
            var n, r;
            for (t = t || window, e = e.split("."), n = 0, r = e.length; r > n && (t = t[e[n]], t); n++);
            return t
        }

        function m(t, r) {
            return !t || n(t, "array") ? t : a(t.split(r || ","), e)
        }

        var h = /^\s*|\s*$/g, g = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
        return {
            trim: e,
            isArray: g,
            is: n,
            toArray: r,
            makeMap: i,
            each: o,
            map: a,
            grep: s,
            inArray: c,
            extend: u,
            create: l,
            walk: d,
            createNS: f,
            resolve: p,
            explode: m
        }
    }), r(m, [p], function (e) {
        function t(n) {
            function r() {
                return H.createDocumentFragment()
            }

            function i(e, t) {
                _(F, e, t)
            }

            function o(e, t) {
                _(z, e, t)
            }

            function a(e) {
                i(e.parentNode, j(e))
            }

            function s(e) {
                i(e.parentNode, j(e) + 1)
            }

            function l(e) {
                o(e.parentNode, j(e))
            }

            function c(e) {
                o(e.parentNode, j(e) + 1)
            }

            function u(e) {
                e ? (M[U] = M[V], M[q] = M[W]) : (M[V] = M[U], M[W] = M[q]), M.collapsed = F
            }

            function d(e) {
                a(e), c(e)
            }

            function f(e) {
                i(e, 0), o(e, 1 === e.nodeType ? e.childNodes.length : e.nodeValue.length)
            }

            function p(e, t) {
                var n = M[V], r = M[W], i = M[U], o = M[q], a = t.startContainer, s = t.startOffset, l = t.endContainer, c = t.endOffset;
                return 0 === e ? w(n, r, a, s) : 1 === e ? w(i, o, a, s) : 2 === e ? w(i, o, l, c) : 3 === e ? w(n, r, l, c) : void 0
            }

            function m() {
                N(I)
            }

            function h() {
                return N(P)
            }

            function g() {
                return N(O)
            }

            function v(e) {
                var t = this[V], r = this[W], i, o;
                3 !== t.nodeType && 4 !== t.nodeType || !t.nodeValue ? (t.childNodes.length > 0 && (o = t.childNodes[r]), o ? t.insertBefore(e, o) : 3 == t.nodeType ? n.insertAfter(e, t) : t.appendChild(e)) : r ? r >= t.nodeValue.length ? n.insertAfter(e, t) : (i = t.splitText(r), t.parentNode.insertBefore(e, i)) : t.parentNode.insertBefore(e, t)
            }

            function y(e) {
                var t = M.extractContents();
                M.insertNode(e), e.appendChild(t), M.selectNode(e)
            }

            function b() {
                return $(new t(n), {
                    startContainer: M[V],
                    startOffset: M[W],
                    endContainer: M[U],
                    endOffset: M[q],
                    collapsed: M.collapsed,
                    commonAncestorContainer: M.commonAncestorContainer
                })
            }

            function C(e, t) {
                var n;
                if (3 == e.nodeType)return e;
                if (0 > t)return e;
                for (n = e.firstChild; n && t > 0;)--t, n = n.nextSibling;
                return n ? n : e
            }

            function x() {
                return M[V] == M[U] && M[W] == M[q]
            }

            function w(e, t, r, i) {
                var o, a, s, l, c, u;
                if (e == r)return t == i ? 0 : i > t ? -1 : 1;
                for (o = r; o && o.parentNode != e;)o = o.parentNode;
                if (o) {
                    for (a = 0, s = e.firstChild; s != o && t > a;)a++, s = s.nextSibling;
                    return a >= t ? -1 : 1
                }
                for (o = e; o && o.parentNode != r;)o = o.parentNode;
                if (o) {
                    for (a = 0, s = r.firstChild; s != o && i > a;)a++, s = s.nextSibling;
                    return i > a ? -1 : 1
                }
                for (l = n.findCommonAncestor(e, r), c = e; c && c.parentNode != l;)c = c.parentNode;
                for (c || (c = l), u = r; u && u.parentNode != l;)u = u.parentNode;
                if (u || (u = l), c == u)return 0;
                for (s = l.firstChild; s;) {
                    if (s == c)return -1;
                    if (s == u)return 1;
                    s = s.nextSibling
                }
            }

            function _(e, t, r) {
                var i, o;
                for (e ? (M[V] = t, M[W] = r) : (M[U] = t, M[q] = r), i = M[U]; i.parentNode;)i = i.parentNode;
                for (o = M[V]; o.parentNode;)o = o.parentNode;
                o == i ? w(M[V], M[W], M[U], M[q]) > 0 && M.collapse(e) : M.collapse(e), M.collapsed = x(), M.commonAncestorContainer = n.findCommonAncestor(M[V], M[U])
            }

            function N(e) {
                var t, n = 0, r = 0, i, o, a, s, l, c;
                if (M[V] == M[U])return E(e);
                for (t = M[U], i = t.parentNode; i; t = i, i = i.parentNode) {
                    if (i == M[V])return k(t, e);
                    ++n
                }
                for (t = M[V], i = t.parentNode; i; t = i, i = i.parentNode) {
                    if (i == M[U])return S(t, e);
                    ++r
                }
                for (o = r - n, a = M[V]; o > 0;)a = a.parentNode, o--;
                for (s = M[U]; 0 > o;)s = s.parentNode, o++;
                for (l = a.parentNode, c = s.parentNode; l != c; l = l.parentNode, c = c.parentNode)a = l, s = c;
                return T(a, s, e)
            }

            function E(e) {
                var t, n, i, o, a, s, l, c, u;
                if (e != I && (t = r()), M[W] == M[q])return t;
                if (3 == M[V].nodeType) {
                    if (n = M[V].nodeValue, i = n.substring(M[W], M[q]), e != O && (o = M[V], c = M[W], u = M[q] - M[W], 0 === c && u >= o.nodeValue.length - 1 ? o.parentNode.removeChild(o) : o.deleteData(c, u), M.collapse(F)), e == I)return;
                    return i.length > 0 && t.appendChild(H.createTextNode(i)), t
                }
                for (o = C(M[V], M[W]), a = M[q] - M[W]; o && a > 0;)s = o.nextSibling, l = D(o, e), t && t.appendChild(l), --a, o = s;
                return e != O && M.collapse(F), t
            }

            function k(e, t) {
                var n, i, o, a, s, l;
                if (t != I && (n = r()), i = R(e, t), n && n.appendChild(i), o = j(e), a = o - M[W], 0 >= a)return t != O && (M.setEndBefore(e), M.collapse(z)), n;
                for (i = e.previousSibling; a > 0;)s = i.previousSibling, l = D(i, t), n && n.insertBefore(l, n.firstChild), --a, i = s;
                return t != O && (M.setEndBefore(e), M.collapse(z)), n
            }

            function S(e, t) {
                var n, i, o, a, s, l;
                for (t != I && (n = r()), o = A(e, t), n && n.appendChild(o), i = j(e), ++i, a = M[q] - i, o = e.nextSibling; o && a > 0;)s = o.nextSibling, l = D(o, t), n && n.appendChild(l), --a, o = s;
                return t != O && (M.setStartAfter(e), M.collapse(F)), n
            }

            function T(e, t, n) {
                var i, o, a, s, l, c, u;
                for (n != I && (o = r()), i = A(e, n), o && o.appendChild(i), a = j(e), s = j(t), ++a, l = s - a, c = e.nextSibling; l > 0;)u = c.nextSibling, i = D(c, n), o && o.appendChild(i), c = u, --l;
                return i = R(t, n), o && o.appendChild(i), n != O && (M.setStartAfter(e), M.collapse(F)), o
            }

            function R(e, t) {
                var n = C(M[U], M[q] - 1), r, i, o, a, s, l = n != M[U];
                if (n == e)return B(n, l, z, t);
                for (r = n.parentNode, i = B(r, z, z, t); r;) {
                    for (; n;)o = n.previousSibling, a = B(n, l, z, t), t != I && i.insertBefore(a, i.firstChild), l = F, n = o;
                    if (r == e)return i;
                    n = r.previousSibling, r = r.parentNode, s = B(r, z, z, t), t != I && s.appendChild(i), i = s
                }
            }

            function A(e, t) {
                var n = C(M[V], M[W]), r = n != M[V], i, o, a, s, l;
                if (n == e)return B(n, r, F, t);
                for (i = n.parentNode, o = B(i, z, F, t); i;) {
                    for (; n;)a = n.nextSibling, s = B(n, r, F, t), t != I && o.appendChild(s), r = F, n = a;
                    if (i == e)return o;
                    n = i.nextSibling, i = i.parentNode, l = B(i, z, F, t), t != I && l.appendChild(o), o = l
                }
            }

            function B(e, t, r, i) {
                var o, a, s, l, c;
                if (t)return D(e, i);
                if (3 == e.nodeType) {
                    if (o = e.nodeValue, r ? (l = M[W], a = o.substring(l), s = o.substring(0, l)) : (l = M[q], a = o.substring(0, l), s = o.substring(l)), i != O && (e.nodeValue = s), i == I)return;
                    return c = n.clone(e, z), c.nodeValue = a, c
                }
                if (i != I)return n.clone(e, z)
            }

            function D(e, t) {
                return t != I ? t == O ? n.clone(e, F) : e : void e.parentNode.removeChild(e)
            }

            function L() {
                return n.create("body", null, g()).outerText
            }

            var M = this, H = n.doc, P = 0, O = 1, I = 2, F = !0, z = !1, W = "startOffset", V = "startContainer", U = "endContainer", q = "endOffset", $ = e.extend, j = n.nodeIndex;
            return $(M, {
                startContainer: H,
                startOffset: 0,
                endContainer: H,
                endOffset: 0,
                collapsed: F,
                commonAncestorContainer: H,
                START_TO_START: 0,
                START_TO_END: 1,
                END_TO_END: 2,
                END_TO_START: 3,
                setStart: i,
                setEnd: o,
                setStartBefore: a,
                setStartAfter: s,
                setEndBefore: l,
                setEndAfter: c,
                collapse: u,
                selectNode: d,
                selectNodeContents: f,
                compareBoundaryPoints: p,
                deleteContents: m,
                extractContents: h,
                cloneContents: g,
                insertNode: v,
                surroundContents: y,
                cloneRange: b,
                toStringIE: L
            }), M
        }

        return t.prototype.toString = function () {
            return this.toStringIE()
        }, t
    }), r(h, [p], function (e) {
        function t(e) {
            var t;
            return t = document.createElement("div"), t.innerHTML = e, t.textContent || t.innerText || e
        }

        function n(e, t) {
            var n, r, i, a = {};
            if (e) {
                for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)r = String.fromCharCode(parseInt(e[n], t)), o[r] || (i = "&" + e[n + 1] + ";", a[r] = i, a[i] = r);
                return a
            }
        }

        var r = e.makeMap, i, o, a, s = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, l = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = /[<>&\"\']/g, u = /&(#x|#)?([\w]+);/g, d = {
            128: "\u20ac",
            130: "\u201a",
            131: "\u0192",
            132: "\u201e",
            133: "\u2026",
            134: "\u2020",
            135: "\u2021",
            136: "\u02c6",
            137: "\u2030",
            138: "\u0160",
            139: "\u2039",
            140: "\u0152",
            142: "\u017d",
            145: "\u2018",
            146: "\u2019",
            147: "\u201c",
            148: "\u201d",
            149: "\u2022",
            150: "\u2013",
            151: "\u2014",
            152: "\u02dc",
            153: "\u2122",
            154: "\u0161",
            155: "\u203a",
            156: "\u0153",
            158: "\u017e",
            159: "\u0178"
        };
        o = {'"': "&quot;", "'": "&#39;", "<": "&lt;", ">": "&gt;", "&": "&amp;", "`": "&#96;"}, a = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&apos;": "'"
        }, i = n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
        var f = {
            encodeRaw: function (e, t) {
                return e.replace(t ? s : l, function (e) {
                    return o[e] || e
                })
            }, encodeAllRaw: function (e) {
                return ("" + e).replace(c, function (e) {
                    return o[e] || e
                })
            }, encodeNumeric: function (e, t) {
                return e.replace(t ? s : l, function (e) {
                    return e.length > 1 ? "&#" + (1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536) + ";" : o[e] || "&#" + e.charCodeAt(0) + ";"
                })
            }, encodeNamed: function (e, t, n) {
                return n = n || i, e.replace(t ? s : l, function (e) {
                    return o[e] || n[e] || e
                })
            }, getEncodeFunc: function (e, t) {
                function a(e, n) {
                    return e.replace(n ? s : l, function (e) {
                        return o[e] || t[e] || "&#" + e.charCodeAt(0) + ";" || e
                    })
                }

                function c(e, n) {
                    return f.encodeNamed(e, n, t)
                }

                return t = n(t) || i, e = r(e.replace(/\+/g, ",")), e.named && e.numeric ? a : e.named ? t ? c : f.encodeNamed : e.numeric ? f.encodeNumeric : f.encodeRaw
            }, decode: function (e) {
                return e.replace(u, function (e, n, r) {
                    return n ? (r = parseInt(r, 2 === n.length ? 16 : 10), r > 65535 ? (r -= 65536, String.fromCharCode(55296 + (r >> 10), 56320 + (1023 & r))) : d[r] || String.fromCharCode(r)) : a[e] || i[e] || t(e)
                })
            }
        };
        return f
    }), r(g, [], function () {
        var e = navigator, t = e.userAgent, n, r, i, o, a, s, l;
        n = window.opera && window.opera.buildNumber, r = /WebKit/.test(t), i = !r && !n && /MSIE/gi.test(t) && /Explorer/gi.test(e.appName), i = i && /MSIE (\w+)\./.exec(t)[1], o = -1 == t.indexOf("Trident/") || -1 == t.indexOf("rv:") && -1 == e.appName.indexOf("Netscape") ? !1 : 11, i = i || o, a = !r && !o && /Gecko/.test(t), s = -1 != t.indexOf("Mac"), l = /(iPad|iPhone)/.test(t);
        var c = !l || t.match(/AppleWebKit\/(\d*)/)[1] >= 534;
        return {
            opera: n,
            webkit: r,
            ie: i,
            gecko: a,
            mac: s,
            iOS: l,
            contentEditable: c,
            transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            caretAfter: 8 != i,
            range: window.getSelection && "Range" in window,
            documentMode: i ? document.documentMode || 7 : 10
        }
    }), r(v, [], function () {
        return function (e, t) {
            function n(t) {
                e.getElementsByTagName("head")[0].appendChild(t)
            }

            function r(t, r, s) {
                function l() {
                    for (var e = v.passed, t = e.length; t--;)e[t]();
                    v.status = 2, v.passed = [], v.failed = []
                }

                function c() {
                    for (var e = v.failed, t = e.length; t--;)e[t]();
                    v.status = 3, v.passed = [], v.failed = []
                }

                function u() {
                    var e = navigator.userAgent.match(/WebKit\/(\d*)/);
                    return !!(e && e[1] < 536)
                }

                function d(e, t) {
                    e() || ((new Date).getTime() - g < a ? window.setTimeout(t, 0) : c())
                }

                function f() {
                    d(function () {
                        for (var t = e.styleSheets, n, r = t.length, i; r--;)if (n = t[r], i = n.ownerNode ? n.ownerNode : n.owningElement, i && i.id === m.id)return l(), !0
                    }, f)
                }

                function p() {
                    d(function () {
                        try {
                            var e = h.sheet.cssRules;
                            return l(), !!e
                        } catch (t) {
                        }
                    }, p)
                }

                var m, h, g, v;
                if (o[t] ? v = o[t] : (v = {
                        passed: [],
                        failed: []
                    }, o[t] = v), r && v.passed.push(r), s && v.failed.push(s), 1 != v.status) {
                    if (2 == v.status)return void l();
                    if (3 == v.status)return void c();
                    if (v.status = 1, m = e.createElement("link"), m.rel = "stylesheet", m.type = "text/css", m.id = "u" + i++, m.async = !1, m.defer = !1, g = (new Date).getTime(), "onload" in m && !u())m.onload = f, m.onerror = c; else {
                        if (navigator.userAgent.indexOf("Firefox") > 0)return h = e.createElement("style"), h.textContent = '@import "' + t + '"', p(), void n(h);
                        f()
                    }
                    n(m), m.href = t
                }
            }

            var i = 0, o = {}, a;
            t = t || {}, a = t.maxLoadTime || 5e3, this.load = r
        }
    }), r(y, [c, d, l, f, m, h, g, p, v], function (e, n, r, i, o, a, s, l, c) {
        function u(e, t) {
            var i = this, o;
            i.doc = e, i.win = window, i.files = {}, i.counter = 0, i.stdMode = !v || e.documentMode >= 8, i.boxModel = !v || "CSS1Compat" == e.compatMode || i.stdMode, i.hasOuterHTML = "outerHTML" in e.createElement("a"), i.styleSheetLoader = new c(e), this.boundEvents = [], i.settings = t = h({
                keep_values: !1,
                hex_colors: 1
            }, t), i.schema = t.schema, i.styles = new n({
                url_converter: t.url_converter,
                url_converter_scope: t.url_converter_scope
            }, t.schema), i.fixDoc(e), i.events = t.ownEvents ? new r(t.proxy) : r.Event, o = t.schema ? t.schema.getBlockElements() : {}, i.isBlock = function (e) {
                if (!e)return !1;
                var t = e.nodeType;
                return t ? !(1 !== t || !o[e.nodeName]) : !!o[e]
            }
        }

        var d = l.each, f = l.is, p = l.grep, m = l.trim, h = l.extend, g = s.webkit, v = s.ie, y = /^([a-z0-9],?)+$/i, b = /^[ \t\r\n]*$/, C = l.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom", " ");
        return u.prototype = {
            root: null,
            props: {
                "for": "htmlFor",
                "class": "className",
                className: "className",
                checked: "checked",
                disabled: "disabled",
                maxlength: "maxLength",
                readonly: "readOnly",
                selected: "selected",
                value: "value",
                id: "id",
                name: "name",
                type: "type"
            },
            fixDoc: function (e) {
                var t = this.settings, n;
                if (v && t.schema) {
                    "abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g, function (t) {
                        e.createElement(t)
                    });
                    for (n in t.schema.getCustomElements())e.createElement(n)
                }
            },
            clone: function (e, t) {
                var n = this, r, i;
                return !v || 1 !== e.nodeType || t ? e.cloneNode(t) : (i = n.doc, t ? r.firstChild : (r = i.createElement(e.nodeName), d(n.getAttribs(e), function (t) {
                    n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName))
                }), r))
            },
            getRoot: function () {
                var e = this;
                return e.get(e.settings.root_element) || e.doc.body
            },
            getViewPort: function (e) {
                var t, n;
                return e = e ? e : this.win, t = e.document, n = this.boxModel ? t.documentElement : t.body, {
                    x: e.pageXOffset || n.scrollLeft,
                    y: e.pageYOffset || n.scrollTop,
                    w: e.innerWidth || n.clientWidth,
                    h: e.innerHeight || n.clientHeight
                }
            },
            getRect: function (e) {
                var t = this, n, r;
                return e = t.get(e), n = t.getPos(e), r = t.getSize(e), {x: n.x, y: n.y, w: r.w, h: r.h}
            },
            getSize: function (e) {
                var t = this, n, r;
                return e = t.get(e), n = t.getStyle(e, "width"), r = t.getStyle(e, "height"), -1 === n.indexOf("px") && (n = 0), -1 === r.indexOf("px") && (r = 0), {
                    w: parseInt(n, 10) || e.offsetWidth || e.clientWidth,
                    h: parseInt(r, 10) || e.offsetHeight || e.clientHeight
                }
            },
            getParent: function (e, t, n) {
                return this.getParents(e, t, n, !1)
            },
            getParents: function (e, n, r, i) {
                var o = this, a, s = [];
                for (e = o.get(e), i = i === t, r = r || ("BODY" != o.getRoot().nodeName ? o.getRoot().parentNode : null), f(n, "string") && (a = n, n = "*" === n ? function (e) {
                    return 1 == e.nodeType
                } : function (e) {
                    return o.is(e, a)
                }); e && e != r && e.nodeType && 9 !== e.nodeType;) {
                    if (!n || n(e)) {
                        if (!i)return e;
                        s.push(e)
                    }
                    e = e.parentNode
                }
                return i ? s : null
            },
            get: function (e) {
                var t;
                return e && this.doc && "string" == typeof e && (t = e, e = this.doc.getElementById(e), e && e.id !== t) ? this.doc.getElementsByName(t)[1] : e
            },
            getNext: function (e, t) {
                return this._findSib(e, t, "nextSibling")
            },
            getPrev: function (e, t) {
                return this._findSib(e, t, "previousSibling")
            },
            select: function (t, n) {
                var r = this;
                return e(t, r.get(n) || r.get(r.settings.root_element) || r.doc, [])
            },
            is: function (n, r) {
                var i;
                if (n.length === t) {
                    if ("*" === r)return 1 == n.nodeType;
                    if (y.test(r)) {
                        for (r = r.toLowerCase().split(/,/), n = n.nodeName.toLowerCase(), i = r.length - 1; i >= 0; i--)if (r[i] == n)return !0;
                        return !1
                    }
                }
                if (n.nodeType && 1 != n.nodeType)return !1;
                var o = n.nodeType ? [n] : n;
                return e(r, o[0].ownerDocument || o[0], null, o).length > 0
            },
            add: function (e, t, n, r, i) {
                var o = this;
                return this.run(e, function (e) {
                    var a;
                    return a = f(t, "string") ? o.doc.createElement(t) : t, o.setAttribs(a, n), r && (r.nodeType ? a.appendChild(r) : o.setHTML(a, r)), i ? a : e.appendChild(a)
                })
            },
            create: function (e, t, n) {
                return this.add(this.doc.createElement(e), e, t, n, 1)
            },
            createHTML: function (e, t, n) {
                var r = "", i;
                r += "<" + e;
                for (i in t)t.hasOwnProperty(i) && null !== t[i] && (r += " " + i + '="' + this.encode(t[i]) + '"');
                return "undefined" != typeof n ? r + ">" + n + "</" + e + ">" : r + " />"
            },
            createFragment: function (e) {
                var t, n, r = this.doc, i;
                for (i = r.createElement("div"), t = r.createDocumentFragment(), e && (i.innerHTML = e); n = i.firstChild;)t.appendChild(n);
                return t
            },
            remove: function (e, t) {
                return this.run(e, function (e) {
                    var n, r = e.parentNode;
                    if (!r)return null;
                    if (t)for (; n = e.firstChild;)!v || 3 !== n.nodeType || n.nodeValue ? r.insertBefore(n, e) : e.removeChild(n);
                    return r.removeChild(e)
                })
            },
            setStyle: function (e, t, n) {
                return this.run(e, function (e) {
                    var r = this, i, o;
                    if (t)if ("string" == typeof t) {
                        i = e.style, t = t.replace(/-(\D)/g, function (e, t) {
                            return t.toUpperCase()
                        }), "number" != typeof n && !/^[\-0-9\.]+$/.test(n) || C[t] || (n += "px"), "opacity" === t && e.runtimeStyle && "undefined" == typeof e.runtimeStyle.opacity && (i.filter = "" === n ? "" : "alpha(opacity=" + 100 * n + ")"), "float" == t && (t = "cssFloat" in e.style ? "cssFloat" : "styleFloat");
                        try {
                            i[t] = n
                        } catch (a) {
                        }
                        r.settings.update_styles && e.removeAttribute("data-mce-style")
                    } else for (o in t)r.setStyle(e, o, t[o])
                })
            },
            getStyle: function (e, n, r) {
                if (e = this.get(e)) {
                    if (this.doc.defaultView && r) {
                        n = n.replace(/[A-Z]/g, function (e) {
                            return "-" + e
                        });
                        try {
                            return this.doc.defaultView.getComputedStyle(e, null).getPropertyValue(n)
                        } catch (i) {
                            return null
                        }
                    }
                    return n = n.replace(/-(\D)/g, function (e, t) {
                        return t.toUpperCase()
                    }), "float" == n && (n = v ? "styleFloat" : "cssFloat"), e.currentStyle && r ? e.currentStyle[n] : e.style ? e.style[n] : t
                }
            },
            setStyles: function (e, t) {
                this.setStyle(e, t)
            },
            css: function (e, t, n) {
                this.setStyle(e, t, n)
            },
            removeAllAttribs: function (e) {
                return this.run(e, function (e) {
                    var t, n = e.attributes;
                    for (t = n.length - 1; t >= 0; t--)e.removeAttributeNode(n.item(t))
                })
            },
            setAttrib: function (e, t, n) {
                var r = this;
                if (e && t)return this.run(e, function (e) {
                    var i = r.settings, o = e.getAttribute(t);
                    if (null !== n)switch (t) {
                        case"style":
                            if (!f(n, "string"))return void d(n, function (t, n) {
                                r.setStyle(e, n, t)
                            });
                            i.keep_values && (n ? e.setAttribute("data-mce-style", n, 2) : e.removeAttribute("data-mce-style", 2)), e.style.cssText = n;
                            break;
                        case"class":
                            e.className = n || "";
                            break;
                        case"src":
                        case"href":
                            i.keep_values && (i.url_converter && (n = i.url_converter.call(i.url_converter_scope || r, n, t, e)), r.setAttrib(e, "data-mce-" + t, n, 2));
                            break;
                        case"shape":
                            e.setAttribute("data-mce-style", n)
                    }
                    f(n) && null !== n && 0 !== n.length ? e.setAttribute(t, "" + n, 2) : e.removeAttribute(t, 2), o != n && i.onSetAttrib && i.onSetAttrib({
                        attrElm: e,
                        attrName: t,
                        attrValue: n
                    })
                })
            },
            setAttribs: function (e, t) {
                var n = this;
                return this.run(e, function (e) {
                    d(t, function (t, r) {
                        n.setAttrib(e, r, t)
                    })
                })
            },
            getAttrib: function (e, t, n) {
                var r, i = this, o;
                if (e = i.get(e), !e || 1 !== e.nodeType)return n === o ? !1 : n;
                if (f(n) || (n = ""), /^(src|href|style|coords|shape)$/.test(t) && (r = e.getAttribute("data-mce-" + t)))return r;
                if (v && i.props[t] && (r = e[i.props[t]], r = r && r.nodeValue ? r.nodeValue : r), r || (r = e.getAttribute(t, 2)), /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noshade|nowrap|readonly|selected)$/.test(t))return e[i.props[t]] === !0 && "" === r ? t : r ? t : "";
                if ("FORM" === e.nodeName && e.getAttributeNode(t))return e.getAttributeNode(t).nodeValue;
                if ("style" === t && (r = r || e.style.cssText, r && (r = i.serializeStyle(i.parseStyle(r), e.nodeName), i.settings.keep_values && e.setAttribute("data-mce-style", r))), g && "class" === t && r && (r = r.replace(/(apple|webkit)\-[a-z\-]+/gi, "")), v)switch (t) {
                    case"rowspan":
                    case"colspan":
                        1 === r && (r = "");
                        break;
                    case"size":
                        ("+0" === r || 20 === r || 0 === r) && (r = "");
                        break;
                    case"width":
                    case"height":
                    case"vspace":
                    case"checked":
                    case"disabled":
                    case"readonly":
                        0 === r && (r = "");
                        break;
                    case"hspace":
                        -1 === r && (r = "");
                        break;
                    case"maxlength":
                    case"tabindex":
                        (32768 === r || 2147483647 === r || "32768" === r) && (r = "");
                        break;
                    case"multiple":
                    case"compact":
                    case"noshade":
                    case"nowrap":
                        return 65535 === r ? t : n;
                    case"shape":
                        r = r.toLowerCase();
                        break;
                    default:
                        0 === t.indexOf("on") && r && (r = ("" + r).replace(/^function\s+\w+\(\)\s+\{\s+(.*)\s+\}$/, "$1"))
                }
                return r !== o && null !== r && "" !== r ? "" + r : n
            },
            getPos: function (e, t) {
                var n = this, r = 0, i = 0, o, a = n.doc, s;
                if (e = n.get(e), t = t || a.body, e) {
                    if (t === a.body && e.getBoundingClientRect)return s = e.getBoundingClientRect(), t = n.boxModel ? a.documentElement : a.body, r = s.left + (a.documentElement.scrollLeft || a.body.scrollLeft) - t.clientLeft, i = s.top + (a.documentElement.scrollTop || a.body.scrollTop) - t.clientTop, {
                        x: r,
                        y: i
                    };
                    for (o = e; o && o != t && o.nodeType;)r += o.offsetLeft || 0, i += o.offsetTop || 0, o = o.offsetParent;
                    for (o = e.parentNode; o && o != t && o.nodeType;)r -= o.scrollLeft || 0, i -= o.scrollTop || 0, o = o.parentNode
                }
                return {x: r, y: i}
            },
            parseStyle: function (e) {
                return this.styles.parse(e)
            },
            serializeStyle: function (e, t) {
                return this.styles.serialize(e, t)
            },
            addStyle: function (e) {
                var t = this, n = t.doc, r, i;
                if (t !== u.DOM && n === document) {
                    var o = u.DOM.addedStyles;
                    if (o = o || [], o[e])return;
                    o[e] = !0, u.DOM.addedStyles = o
                }
                i = n.getElementById("mceDefaultStyles"), i || (i = n.createElement("style"), i.id = "mceDefaultStyles", i.type = "text/css", r = n.getElementsByTagName("head")[0], r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i)), i.styleSheet ? i.styleSheet.cssText += e : i.appendChild(n.createTextNode(e))
            },
            loadCSS: function (e) {
                var t = this, n = t.doc, r;
                return t !== u.DOM && n === document ? void u.DOM.loadCSS(e) : (e || (e = ""), r = n.getElementsByTagName("head")[0], void d(e.split(","), function (e) {
                    var i;
                    t.files[e] || (t.files[e] = !0, i = t.create("link", {
                        rel: "stylesheet",
                        href: e
                    }), v && n.documentMode && n.recalc && (i.onload = function () {
                        n.recalc && n.recalc(), i.onload = null
                    }), r.appendChild(i))
                }))
            },
            addClass: function (e, t) {
                return this.run(e, function (e) {
                    var n;
                    return t ? this.hasClass(e, t) ? e.className : (n = this.removeClass(e, t), e.className = n = ("" !== n ? n + " " : "") + t, n) : 0
                })
            },
            removeClass: function (e, t) {
                var n = this, r;
                return n.run(e, function (e) {
                    var i;
                    return n.hasClass(e, t) ? (r || (r = new RegExp("(^|\\s+)" + t + "(\\s+|$)", "g")), i = e.className.replace(r, " "), i = m(" " != i ? i : ""), e.className = i, i || (e.removeAttribute("class"), e.removeAttribute("className")), i) : e.className
                })
            },
            hasClass: function (e, t) {
                return e = this.get(e), e && t ? -1 !== (" " + e.className + " ").indexOf(" " + t + " ") : !1
            },
            toggleClass: function (e, n, r) {
                r = r === t ? !this.hasClass(e, n) : r, this.hasClass(e, n) !== r && (r ? this.addClass(e, n) : this.removeClass(e, n))
            },
            show: function (e) {
                return this.setStyle(e, "display", "block")
            },
            hide: function (e) {
                return this.setStyle(e, "display", "none")
            },
            isHidden: function (e) {
                return e = this.get(e), !e || "none" == e.style.display || "none" == this.getStyle(e, "display")
            },
            uniqueId: function (e) {
                return (e ? e : "mce_") + this.counter++
            },
            setHTML: function (e, t) {
                var n = this;
                return n.run(e, function (e) {
                    if (v) {
                        for (; e.firstChild;)e.removeChild(e.firstChild);
                        try {
                            e.innerHTML = "<br />" + t, e.removeChild(e.firstChild)
                        } catch (r) {
                            var i = n.create("div");
                            i.innerHTML = "<br />" + t, d(p(i.childNodes), function (t, n) {
                                n && e.canHaveHTML && e.appendChild(t)
                            })
                        }
                    } else e.innerHTML = t;
                    return t
                })
            },
            getOuterHTML: function (e) {
                var t, n = this;
                return (e = n.get(e)) ? 1 === e.nodeType && n.hasOuterHTML ? e.outerHTML : (t = (e.ownerDocument || n.doc).createElement("body"), t.appendChild(e.cloneNode(!0)), t.innerHTML) : null
            },
            setOuterHTML: function (e, t, n) {
                var r = this;
                return r.run(e, function (e) {
                    function i() {
                        var i, o;
                        for (o = n.createElement("body"), o.innerHTML = t, i = o.lastChild; i;)r.insertAfter(i.cloneNode(!0), e), i = i.previousSibling;
                        r.remove(e)
                    }

                    if (1 == e.nodeType)if (n = n || e.ownerDocument || r.doc, v)try {
                        1 == e.nodeType && r.hasOuterHTML ? e.outerHTML = t : i()
                    } catch (o) {
                        i()
                    } else i()
                })
            },
            decode: a.decode,
            encode: a.encodeAllRaw,
            insertAfter: function (e, t) {
                return t = this.get(t), this.run(e, function (e) {
                    var n, r;
                    return n = t.parentNode, r = t.nextSibling, r ? n.insertBefore(e, r) : n.appendChild(e), e
                })
            },
            replace: function (e, t, n) {
                var r = this;
                return r.run(t, function (t) {
                    return f(t, "array") && (e = e.cloneNode(!0)), n && d(p(t.childNodes), function (t) {
                        e.appendChild(t)
                    }), t.parentNode.replaceChild(e, t)
                })
            },
            rename: function (e, t) {
                var n = this, r;
                return e.nodeName != t.toUpperCase() && (r = n.create(t), d(n.getAttribs(e), function (t) {
                    n.setAttrib(r, t.nodeName, n.getAttrib(e, t.nodeName))
                }), n.replace(r, e, 1)), r || e
            },
            findCommonAncestor: function (e, t) {
                for (var n = e, r; n;) {
                    for (r = t; r && n != r;)r = r.parentNode;
                    if (n == r)break;
                    n = n.parentNode
                }
                return !n && e.ownerDocument ? e.ownerDocument.documentElement : n
            },
            toHex: function (e) {
                return this.styles.toHex(l.trim(e))
            },
            run: function (e, t, n) {
                var r = this, i;
                return "string" == typeof e && (e = r.get(e)), e ? (n = n || this, e.nodeType || !e.length && 0 !== e.length ? t.call(n, e) : (i = [], d(e, function (e, o) {
                    e && ("string" == typeof e && (e = r.get(e)), i.push(t.call(n, e, o)))
                }), i)) : !1
            },
            getAttribs: function (e) {
                var t;
                if (e = this.get(e), !e)return [];
                if (v) {
                    if (t = [], "OBJECT" == e.nodeName)return e.attributes;
                    "OPTION" === e.nodeName && this.getAttrib(e, "selected") && t.push({
                        specified: 1,
                        nodeName: "selected"
                    });
                    var n = /<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;
                    return e.cloneNode(!1).outerHTML.replace(n, "").replace(/[\w:\-]+/gi, function (e) {
                        t.push({specified: 1, nodeName: e})
                    }), t
                }
                return e.attributes
            },
            isEmpty: function (e, t) {
                var n = this, r, o, a, s, l, c = 0;
                if (e = e.firstChild) {
                    s = new i(e, e.parentNode), t = t || n.schema ? n.schema.getNonEmptyElements() : null;
                    do {
                        if (a = e.nodeType, 1 === a) {
                            if (e.getAttribute("data-mce-bogus"))continue;
                            if (l = e.nodeName.toLowerCase(), t && t[l]) {
                                if ("br" === l) {
                                    c++;
                                    continue
                                }
                                return !1
                            }
                            for (o = n.getAttribs(e), r = o.length; r--;)if (l = o[r].nodeName, "name" === l || "data-mce-bookmark" === l)return !1
                        }
                        if (8 == a)return !1;
                        if (3 === a && !b.test(e.nodeValue))return !1
                    } while (e = s.next())
                }
                return 1 >= c
            },
            createRng: function () {
                var e = this.doc;
                return e.createRange ? e.createRange() : new o(this)
            },
            nodeIndex: function (e, t) {
                var n = 0, r, i;
                if (e)for (r = e.nodeType, e = e.previousSibling; e; e = e.previousSibling)i = e.nodeType, (!t || 3 != i || i != r && e.nodeValue.length) && (n++, r = i);
                return n
            },
            split: function (e, t, n) {
                function r(e) {
                    function t(e) {
                        var t = e.previousSibling && "SPAN" == e.previousSibling.nodeName, n = e.nextSibling && "SPAN" == e.nextSibling.nodeName;
                        return t && n
                    }

                    var n, o = e.childNodes, a = e.nodeType;
                    if (1 != a || "bookmark" != e.getAttribute("data-mce-type")) {
                        for (n = o.length - 1; n >= 0; n--)r(o[n]);
                        if (9 != a) {
                            if (3 == a && e.nodeValue.length > 0) {
                                var s = m(e.nodeValue).length;
                                if (!i.isBlock(e.parentNode) || s > 0 || 0 === s && t(e))return
                            } else if (1 == a && (o = e.childNodes, 1 == o.length && o[0] && 1 == o[0].nodeType && "bookmark" == o[0].getAttribute("data-mce-type") && e.parentNode.insertBefore(o[0], e), o.length || /^(br|hr|input|img)$/i.test(e.nodeName)))return;
                            i.remove(e)
                        }
                        return e
                    }
                }

                var i = this, o = i.createRng(), a, s, l;
                return e && t ? (o.setStart(e.parentNode, i.nodeIndex(e)), o.setEnd(t.parentNode, i.nodeIndex(t)), a = o.extractContents(), o = i.createRng(), o.setStart(t.parentNode, i.nodeIndex(t) + 1), o.setEnd(e.parentNode, i.nodeIndex(e) + 1), s = o.extractContents(), l = e.parentNode, l.insertBefore(r(a), e), n ? l.replaceChild(n, t) : l.insertBefore(t, e), l.insertBefore(r(s), e), i.remove(e), n || t) : void 0
            },
            bind: function (e, t, n, r) {
                var i = this;
                if (l.isArray(e)) {
                    for (var o = e.length; o--;)e[o] = i.bind(e[o], t, n, r);
                    return e
                }
                return !i.settings.collect || e !== i.doc && e !== i.win || i.boundEvents.push([e, t, n, r]), i.events.bind(e, t, n, r || i)
            },
            unbind: function (e, t, n) {
                var r = this, i;
                if (l.isArray(e)) {
                    for (i = e.length; i--;)e[i] = r.unbind(e[i], t, n);
                    return e
                }
                if (r.boundEvents && (e === r.doc || e === r.win))for (i = r.boundEvents.length; i--;) {
                    var o = r.boundEvents[i];
                    e != o[0] || t && t != o[1] || n && n != o[2] || this.events.unbind(o[0], o[1], o[2])
                }
                return this.events.unbind(e, t, n)
            },
            fire: function (e, t, n) {
                return this.events.fire(e, t, n)
            },
            getContentEditable: function (e) {
                var t;
                return e && 1 == e.nodeType ? (t = e.getAttribute("data-mce-contenteditable"), t && "inherit" !== t ? t : "inherit" !== e.contentEditable ? e.contentEditable : null) : null
            },
            getContentEditableParent: function (e) {
                for (var t = this.getRoot(), n = null; e && e !== t && (n = this.getContentEditable(e), null === n); e = e.parentNode);
                return n
            },
            destroy: function () {
                var t = this;
                if (t.boundEvents) {
                    for (var n = t.boundEvents.length; n--;) {
                        var r = t.boundEvents[n];
                        this.events.unbind(r[0], r[1], r[2])
                    }
                    t.boundEvents = null
                }
                e.setDocument && e.setDocument(), t.win = t.doc = t.root = t.events = t.frag = null
            },
            isChildOf: function (e, t) {
                for (; e;) {
                    if (t === e)return !0;
                    e = e.parentNode
                }
                return !1
            },
            dumpRng: function (e) {
                return "startContainer: " + e.startContainer.nodeName + ", startOffset: " + e.startOffset + ", endContainer: " + e.endContainer.nodeName + ", endOffset: " + e.endOffset
            },
            _findSib: function (e, t, n) {
                var r = this, i = t;
                if (e)for ("string" == typeof i && (i = function (e) {
                    return r.is(e, t)
                }), e = e[n]; e; e = e[n])if (i(e))return e;
                return null
            }
        }, u.DOM = new u(document), u
    }), r(b, [y, p], function (e, t) {
        function n() {
            function e(e, t) {
                function n() {
                    o.remove(s), a && (a.onreadystatechange = a.onload = a = null), t()
                }

                function i() {
                    "undefined" != typeof console && console.log && console.log("Failed to load: " + e)
                }

                var o = r, a, s;
                s = o.uniqueId(), a = document.createElement("script"), a.id = s, a.type = "text/javascript", a.src = e, "onreadystatechange" in a ? a.onreadystatechange = function () {
                    /loaded|complete/.test(a.readyState) && n()
                } : a.onload = n, a.onerror = i, (document.getElementsByTagName("head")[0] || document.body).appendChild(a)
            }

            var t = 0, n = 1, a = 2, s = {}, l = [], c = {}, u = [], d = 0, f;
            this.isDone = function (e) {
                return s[e] == a
            }, this.markDone = function (e) {
                s[e] = a
            }, this.add = this.load = function (e, n, r) {
                var i = s[e];
                i == f && (l.push(e), s[e] = t), n && (c[e] || (c[e] = []), c[e].push({func: n, scope: r || this}))
            }, this.loadQueue = function (e, t) {
                this.loadScripts(l, e, t)
            }, this.loadScripts = function (t, r, l) {
                function p(e) {
                    i(c[e], function (e) {
                        e.func.call(e.scope)
                    }), c[e] = f
                }

                var m;
                u.push({func: r, scope: l || this}), (m = function () {
                    var r = o(t);
                    t.length = 0, i(r, function (t) {
                        return s[t] == a ? void p(t) : void(s[t] != n && (s[t] = n, d++, e(t, function () {
                            s[t] = a, d--, p(t), m()
                        })))
                    }), d || (i(u, function (e) {
                        e.func.call(e.scope)
                    }), u.length = 0)
                })()
            }
        }

        var r = e.DOM, i = t.each, o = t.grep;
        return n.ScriptLoader = new n, n
    }), r(C, [b, p], function (e, n) {
        function r() {
            var e = this;
            e.items = [], e.urls = {}, e.lookup = {}
        }

        var i = n.each;
        return r.prototype = {
            get: function (e) {
                return this.lookup[e] ? this.lookup[e].instance : t
            }, dependencies: function (e) {
                var t;
                return this.lookup[e] && (t = this.lookup[e].dependencies), t || []
            }, requireLangPack: function (t, n) {
                var i = r.language;
                if (i && r.languageLoad !== !1) {
                    if (n)if (n = "," + n + ",", -1 != n.indexOf("," + i.substr(0, 2) + ","))i = i.substr(0, 2); else if (-1 == n.indexOf("," + i + ","))return;
                    e.ScriptLoader.add(this.urls[t] + "/langs/" + i + ".js")
                }
            }, add: function (e, t, n) {
                return this.items.push(t), this.lookup[e] = {instance: t, dependencies: n}, t
            }, createUrl: function (e, t) {
                return "object" == typeof t ? t : {prefix: e.prefix, resource: t, suffix: e.suffix}
            }, addComponents: function (t, n) {
                var r = this.urls[t];
                i(n, function (t) {
                    e.ScriptLoader.add(r + "/" + t)
                })
            }, load: function (n, o, a, s) {
                function l() {
                    var r = c.dependencies(n);
                    i(r, function (e) {
                        var n = c.createUrl(o, e);
                        c.load(n.resource, n, t, t)
                    }), a && a.call(s ? s : e)
                }

                var c = this, u = o;
                c.urls[n] || ("object" == typeof o && (u = o.prefix + o.resource + o.suffix), 0 !== u.indexOf("/") && -1 == u.indexOf("://") && (u = r.baseURL + "/" + u), c.urls[n] = u.substring(0, u.lastIndexOf("/")), c.lookup[n] ? l() : e.ScriptLoader.add(u, l, s))
            }
        }, r.PluginManager = new r, r.ThemeManager = new r, r
    }), r(x, [], function () {
        function e(e, t, n) {
            var r, i, o = n ? "lastChild" : "firstChild", a = n ? "prev" : "next";
            if (e[o])return e[o];
            if (e !== t) {
                if (r = e[a])return r;
                for (i = e.parent; i && i !== t; i = i.parent)if (r = i[a])return r
            }
        }

        function t(e, t) {
            this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {})
        }

        var n = /^[ \t\r\n]*$/, r = {
            "#text": 3,
            "#comment": 8,
            "#cdata": 4,
            "#pi": 7,
            "#doctype": 10,
            "#document-fragment": 11
        };
        return t.prototype = {
            replace: function (e) {
                var t = this;
                return e.parent && e.remove(), t.insert(e, t), t.remove(), t
            }, attr: function (e, t) {
                var n = this, r, i, o;
                if ("string" != typeof e) {
                    for (i in e)n.attr(i, e[i]);
                    return n
                }
                if (r = n.attributes) {
                    if (t !== o) {
                        if (null === t) {
                            if (e in r.map)for (delete r.map[e], i = r.length; i--;)if (r[i].name === e)return r = r.splice(i, 1), n;
                            return n
                        }
                        if (e in r.map) {
                            for (i = r.length; i--;)if (r[i].name === e) {
                                r[i].value = t;
                                break
                            }
                        } else r.push({name: e, value: t});
                        return r.map[e] = t, n
                    }
                    return r.map[e]
                }
            }, clone: function () {
                var e = this, n = new t(e.name, e.type), r, i, o, a, s;
                if (o = e.attributes) {
                    for (s = [], s.map = {}, r = 0, i = o.length; i > r; r++)a = o[r], "id" !== a.name && (s[s.length] = {
                        name: a.name,
                        value: a.value
                    }, s.map[a.name] = a.value);
                    n.attributes = s
                }
                return n.value = e.value, n.shortEnded = e.shortEnded, n
            }, wrap: function (e) {
                var t = this;
                return t.parent.insert(e, t), e.append(t), t
            }, unwrap: function () {
                var e = this, t, n;
                for (t = e.firstChild; t;)n = t.next, e.insert(t, e, !0), t = n;
                e.remove()
            }, remove: function () {
                var e = this, t = e.parent, n = e.next, r = e.prev;
                return t && (t.firstChild === e ? (t.firstChild = n, n && (n.prev = null)) : r.next = n, t.lastChild === e ? (t.lastChild = r, r && (r.next = null)) : n.prev = r, e.parent = e.next = e.prev = null), e
            }, append: function (e) {
                var t = this, n;
                return e.parent && e.remove(), n = t.lastChild, n ? (n.next = e, e.prev = n, t.lastChild = e) : t.lastChild = t.firstChild = e, e.parent = t, e
            }, insert: function (e, t, n) {
                var r;
                return e.parent && e.remove(), r = t.parent || this, n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, e.next = t, t.prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, e.prev = t, t.next = e), e.parent = r, e
            }, getAll: function (t) {
                var n = this, r, i = [];
                for (r = n.firstChild; r; r = e(r, n))r.name === t && i.push(r);
                return i
            }, empty: function () {
                var t = this, n, r, i;
                if (t.firstChild) {
                    for (n = [], i = t.firstChild; i; i = e(i, t))n.push(i);
                    for (r = n.length; r--;)i = n[r], i.parent = i.firstChild = i.lastChild = i.next = i.prev = null
                }
                return t.firstChild = t.lastChild = null, t
            }, isEmpty: function (t) {
                var r = this, i = r.firstChild, o, a;
                if (i)do {
                    if (1 === i.type) {
                        if (i.attributes.map["data-mce-bogus"])continue;
                        if (t[i.name])return !1;
                        for (o = i.attributes.length; o--;)if (a = i.attributes[o].name, "name" === a || 0 === a.indexOf("data-mce-"))return !1
                    }
                    if (8 === i.type)return !1;
                    if (3 === i.type && !n.test(i.value))return !1
                } while (i = e(i, r));
                return !0
            }, walk: function (t) {
                return e(this, null, t)
            }
        }, t.create = function (e, n) {
            var i, o;
            if (i = new t(e, r[e] || 1), n)for (o in n)i.attr(o, n[o]);
            return i
        }, t
    }), r(w, [p], function (e) {
        function t(e, t) {
            return e ? e.split(t || " ") : []
        }

        function n(e) {
            function n(e, n, r) {
                function i(e) {
                    var t = {}, n, r;
                    for (n = 0, r = e.length; r > n; n++)t[e[n]] = {};
                    return t
                }

                var a, l, c, u = arguments;
                for (r = r || [], n = n || "", "string" == typeof r && (r = t(r)), l = 3; l < u.length; l++)"string" == typeof u[l] && (u[l] = t(u[l])), r.push.apply(r, u[l]);
                for (e = t(e), a = e.length; a--;)c = [].concat(s, t(n)), o[e[a]] = {
                    attributes: i(c),
                    attributesOrder: c,
                    children: i(r)
                }
            }

            function r(e, n) {
                var r, i, a, s;
                for (e = t(e), r = e.length, n = t(n); r--;)for (i = o[e[r]], a = 0, s = n.length; s > a; a++)i.attributes[n[a]] = {}, i.attributesOrder.push(n[a])
            }

            var o = {}, s, l, c, u, d, f;
            return i[e] ? i[e] : (s = t("id accesskey class dir lang style tabindex title"), l = t("address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"), c = t("a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"), "html4" != e && (s.push.apply(s, t("contenteditable contextmenu draggable dropzone hidden spellcheck translate")), l.push.apply(l, t("article aside details dialog figure header footer hgroup section nav")), c.push.apply(c, t("audio canvas command datalist mark meter output progress time wbr video ruby bdi keygen"))), "html5-strict" != e && (s.push("xml:lang"), f = t("acronym applet basefont big font strike tt"), c.push.apply(c, f), a(f, function (e) {
                n(e, "", c)
            }), d = t("center dir isindex noframes"), l.push.apply(l, d), u = [].concat(l, c), a(d, function (e) {
                n(e, "", u)
            })), u = u || [].concat(l, c), n("html", "manifest", "head body"), n("head", "", "base command link meta noscript script style title"), n("title hr noscript br"), n("base", "href target"), n("link", "href rel media hreflang type sizes hreflang"), n("meta", "name http-equiv content charset"), n("style", "media type scoped"), n("script", "src async defer type charset"), n("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", u), n("address dt dd div caption", "", u), n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", c), n("blockquote", "cite", u), n("ol", "reversed start type", "li"), n("ul", "", "li"), n("li", "value", u), n("dl", "", "dt dd"), n("a", "href target rel media hreflang type", c), n("q", "cite", c), n("ins del", "cite datetime", u), n("img", "src alt usemap ismap width height"), n("iframe", "src name width height", u), n("embed", "src type width height"), n("object", "data type typemustmatch name usemap form width height", u, "param"), n("param", "name value"), n("map", "name", u, "area"), n("area", "alt coords shape href target rel media hreflang type"), n("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" == e ? " col" : "")), n("colgroup", "span", "col"), n("col", "span"), n("tbody thead tfoot", "", "tr"), n("tr", "", "td th"), n("td", "colspan rowspan headers", u), n("th", "colspan rowspan headers scope abbr", u), n("form", "accept-charset action autocomplete enctype method name novalidate target", u), n("fieldset", "disabled form name", u, "legend"), n("label", "form for", c), n("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), n("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" == e ? u : c), n("select", "disabled form multiple name required size", "option optgroup"), n("optgroup", "disabled label", "option"), n("option", "disabled label selected value"), n("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), n("menu", "type label", u, "li"), n("noscript", "", u), "html4" != e && (n("wbr"), n("ruby", "", c, "rt rp"), n("figcaption", "", u), n("mark rt rp summary bdi", "", c), n("canvas", "width height", u), n("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", u, "track source"), n("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", u, "track source"), n("source", "src type media"), n("track", "kind src srclang label default"), n("datalist", "", c, "option"), n("article section nav aside header footer", "", u), n("hgroup", "", "h1 h2 h3 h4 h5 h6"), n("figure", "", u, "figcaption"), n("time", "datetime", c), n("dialog", "open", u), n("command", "type label icon disabled checked radiogroup command"), n("output", "for form name", c), n("progress", "value max", c), n("meter", "value min max low high optimum", c), n("details", "open", u, "summary"), n("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" != e && (r("script", "language xml:space"), r("style", "xml:space"), r("object", "declare classid code codebase codetype archive standby align border hspace vspace"), r("embed", "align name hspace vspace"), r("param", "valuetype type"), r("a", "charset name rev shape coords"), r("br", "clear"), r("applet", "codebase archive code object alt name width height align hspace vspace"), r("img", "name longdesc align border hspace vspace"), r("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), r("font basefont", "size color face"), r("input", "usemap align"), r("select", "onchange"), r("textarea"), r("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), r("ul", "type compact"), r("li", "type"), r("ol dl menu dir", "compact"), r("pre", "width xml:space"), r("hr", "align noshade size width"), r("isindex", "prompt"), r("table", "summary width frame rules cellspacing cellpadding align bgcolor"), r("col", "width align char charoff valign"), r("colgroup", "width align char charoff valign"), r("thead", "align char charoff valign"), r("tr", "align char charoff valign bgcolor"), r("th", "axis align char charoff valign nowrap bgcolor width height"), r("form", "accept"), r("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), r("tfoot", "align char charoff valign"), r("tbody", "align char charoff valign"), r("area", "nohref"), r("body", "background bgcolor text link vlink alink")), "html4" != e && (r("input button select textarea", "autofocus"), r("input textarea", "placeholder"), r("a", "download"), r("link script img", "crossorigin"), r("iframe", "sandbox seamless allowfullscreen")), a(t("a form meter progress dfn"), function (e) {
                o[e] && delete o[e].children[e]
            }), delete o.caption.children.table, i[e] = o, o)
        }

        function r(e, t) {
            var n;
            return e && (n = {}, "string" == typeof e && (e = {"*": e}), a(e, function (e, r) {
                n[r] = "map" == t ? o(e, /[, ]/) : l(e, /[, ]/)
            })), n
        }

        var i = {}, o = e.makeMap, a = e.each, s = e.extend, l = e.explode, c = e.inArray;
        return function (e) {
            function u(t, n, r) {
                var a = e[t];
                return a ? a = o(a, /[, ]/, o(a.toUpperCase(), /[, ]/)) : (a = i[t], a || (a = o(n, " ", o(n.toUpperCase(), " ")), a = s(a, r), i[t] = a)), a
            }

            function d(e) {
                return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
            }

            function f(e) {
                var n, r, i, a, s, l, u, f, p, m, h, g, v, b, x, w, _, N, E, k = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/, S = /^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/, T = /[*?+]/;
                if (e)for (e = t(e, ","), y["@"] && (w = y["@"].attributes, _ = y["@"].attributesOrder), n = 0, r = e.length; r > n; n++)if (s = k.exec(e[n])) {
                    if (b = s[1], p = s[2], x = s[3], f = s[5], g = {}, v = [], l = {
                            attributes: g,
                            attributesOrder: v
                        }, "#" === b && (l.paddEmpty = !0), "-" === b && (l.removeEmpty = !0), "!" === s[4] && (l.removeEmptyAttrs = !0), w) {
                        for (N in w)g[N] = w[N];
                        v.push.apply(v, _)
                    }
                    if (f)for (f = t(f, "|"), i = 0, a = f.length; a > i; i++)if (s = S.exec(f[i])) {
                        if (u = {}, h = s[1], m = s[2].replace(/::/g, ":"), b = s[3], E = s[4], "!" === h && (l.attributesRequired = l.attributesRequired || [], l.attributesRequired.push(m), u.required = !0), "-" === h) {
                            delete g[m], v.splice(c(v, m), 1);
                            continue
                        }
                        b && ("=" === b && (l.attributesDefault = l.attributesDefault || [], l.attributesDefault.push({
                            name: m,
                            value: E
                        }), u.defaultValue = E), ":" === b && (l.attributesForced = l.attributesForced || [], l.attributesForced.push({
                            name: m,
                            value: E
                        }), u.forcedValue = E), "<" === b && (u.validValues = o(E, "?"))), T.test(m) ? (l.attributePatterns = l.attributePatterns || [], u.pattern = d(m), l.attributePatterns.push(u)) : (g[m] || v.push(m), g[m] = u)
                    }
                    w || "@" != p || (w = g, _ = v), x && (l.outputName = p, y[x] = l), T.test(p) ? (l.pattern = d(p), C.push(l)) : y[p] = l
                }
            }

            function p(e) {
                y = {}, C = [], f(e), a(_, function (e, t) {
                    b[t] = e.children
                })
            }

            function m(e) {
                var n = /^(~)?(.+)$/;
                e && (i.text_block_elements = i.block_elements = null, a(t(e, ","), function (e) {
                    var t = n.exec(e), r = "~" === t[1], i = r ? "span" : "div", o = t[2];
                    if (b[o] = b[i], L[o] = i, r || (R[o.toUpperCase()] = {}, R[o] = {}), !y[o]) {
                        var l = y[i];
                        l = s({}, l), delete l.removeEmptyAttrs, delete l.removeEmpty, y[o] = l
                    }
                    a(b, function (e, t) {
                        e[i] && (b[t] = e = s({}, b[t]), e[o] = e[i])
                    })
                }))
            }

            function h(e) {
                var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                e && a(t(e, ","), function (e) {
                    var r = n.exec(e), i, o;
                    r && (o = r[1], i = o ? b[r[2]] : b[r[2]] = {"#comment": {}}, i = b[r[2]], a(t(r[3], "|"), function (e) {
                        "-" === o ? (b[r[2]] = i = s({}, b[r[2]]), delete i[e]) : i[e] = {}
                    }))
                })
            }

            function g(e) {
                var t = y[e], n;
                if (t)return t;
                for (n = C.length; n--;)if (t = C[n], t.pattern.test(e))return t
            }

            var v = this, y = {}, b = {}, C = [], x, w, _, N, E, k, S, T, R, A, B, D, L = {}, M = {};
            e = e || {}, _ = n(e.schema), e.verify_html === !1 && (e.valid_elements = "*[*]"), x = r(e.valid_styles), w = r(e.invalid_styles, "map"), T = r(e.valid_classes, "map"), N = u("whitespace_elements", "pre script noscript style textarea video audio iframe object"), E = u("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), k = u("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), S = u("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), A = u("non_empty_elements", "td th iframe video audio object script", k), B = u("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"), R = u("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup", B), D = u("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), a((e.special || "script noscript style textarea").split(" "), function (e) {
                M[e] = new RegExp("</" + e + "[^>]*>", "gi")
            }), e.valid_elements ? p(e.valid_elements) : (a(_, function (e, t) {
                y[t] = {attributes: e.attributes, attributesOrder: e.attributesOrder}, b[t] = e.children
            }), "html5" != e.schema && a(t("strong/b em/i"), function (e) {
                e = t(e, "/"), y[e[1]].outputName = e[0]
            }), y.img.attributesDefault = [{
                name: "alt",
                value: ""
            }], a(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function (e) {
                y[e] && (y[e].removeEmpty = !0)
            }), a(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"), function (e) {
                y[e].paddEmpty = !0
            }), a(t("span"), function (e) {
                y[e].removeEmptyAttrs = !0
            })), m(e.custom_elements), h(e.valid_children), f(e.extended_valid_elements), h("+ol[ul|ol],+ul[ul|ol]"), e.invalid_elements && a(l(e.invalid_elements), function (e) {
                y[e] && delete y[e]
            }), g("span") || f("span[!data-mce-type|*]"), v.children = b, v.getValidStyles = function () {
                return x
            }, v.getInvalidStyles = function () {
                return w
            }, v.getValidClasses = function () {
                return T
            }, v.getBoolAttrs = function () {
                return S
            }, v.getBlockElements = function () {
                return R
            }, v.getTextBlockElements = function () {
                return B
            }, v.getTextInlineElements = function () {
                return D
            }, v.getShortEndedElements = function () {
                return k
            }, v.getSelfClosingElements = function () {
                return E
            }, v.getNonEmptyElements = function () {
                return A
            }, v.getWhiteSpaceElements = function () {
                return N
            }, v.getSpecialElements = function () {
                return M
            }, v.isValidChild = function (e, t) {
                var n = b[e];
                return !(!n || !n[t])
            }, v.isValid = function (e, t) {
                var n, r, i = g(e);
                if (i) {
                    if (!t)return !0;
                    if (i.attributes[t])return !0;
                    if (n = i.attributePatterns)for (r = n.length; r--;)if (n[r].pattern.test(e))return !0
                }
                return !1
            }, v.getElementRule = g, v.getCustomElements = function () {
                return L
            }, v.addValidElements = f, v.setValidElements = p, v.addCustomElements = m, v.addValidChildren = h, v.elements = y
        }
    }), r(_, [w, h, p], function (e, t, n) {
        function r(e, t, n) {
            var r = 1, i, o, a;
            for (a = e.getShortEndedElements(), o = /<([!?\/])?([A-Za-z0-9\-\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g, o.lastIndex = n; i = o.exec(t);) {
                if ("/" === i[1])r--; else if (!i[1]) {
                    if (i[2] in a)continue;
                    r++
                }
                if (0 === r)break
            }
            return o.lastIndex
        }

        var i = n.each;
        return function (o, a) {
            function s() {
            }

            var l = this;
            o = o || {}, l.schema = a = a || new e, o.fix_self_closing !== !1 && (o.fix_self_closing = !0), i("comment cdata text start end pi doctype".split(" "), function (e) {
                e && (l[e] = o[e] || s)
            }), l.parse = function (e) {
                function i(e) {
                    var t, n;
                    for (t = p.length; t-- && p[t].name !== e;);
                    if (t >= 0) {
                        for (n = p.length - 1; n >= t; n--)e = p[n], e.valid && l.end(e.name);
                        p.length = t
                    }
                }

                function s(e, t, n, r, i) {
                    var a, s, l = /[\s\u0000-\u001F]+/g;
                    if (t = t.toLowerCase(), n = t in x ? t : z(n || r || i || ""), _ && !y && 0 !== t.indexOf("data-")) {
                        if (a = T[t], !a && R) {
                            for (s = R.length; s-- && (a = R[s], !a.pattern.test(t)););
                            -1 === s && (a = null)
                        }
                        if (!a)return;
                        if (a.validValues && !(n in a.validValues))return
                    }
                    if (V[t] && !o.allow_script_urls) {
                        var c = n.replace(l, "");
                        try {
                            c = decodeURIComponent(c)
                        } catch (u) {
                            c = unescape(c)
                        }
                        if (U.test(c))return;
                        if (!o.allow_html_data_urls && q.test(c) && !/^data:image\//i.test(c))return
                    }
                    m.map[t] = n, m.push({name: t, value: n})
                }

                var l = this, c, u = 0, d, f, p = [], m, h, g, v, y, b, C, x, w, _, N, E, k, S, T, R, A, B, D, L, M, H, P, O, I, F = 0, z = t.decode, W, V = n.makeMap("src,href,data,background,formaction,poster"), U = /((java|vb)script|mhtml):/i, q = /^data:/i;
                for (H = new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), P = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, C = a.getShortEndedElements(), M = o.self_closing_elements || a.getSelfClosingElements(), x = a.getBoolAttrs(), _ = o.validate, b = o.remove_internals, W = o.fix_self_closing, O = a.getSpecialElements(); c = H.exec(e);) {
                    if (u < c.index && l.text(z(e.substr(u, c.index - u))), d = c[6])d = d.toLowerCase(), ":" === d.charAt(0) && (d = d.substr(1)), i(d); else if (d = c[7]) {
                        if (d = d.toLowerCase(), ":" === d.charAt(0) && (d = d.substr(1)), w = d in C, W && M[d] && p.length > 0 && p[p.length - 1].name === d && i(d), !_ || (N = a.getElementRule(d))) {
                            if (E = !0, _ && (T = N.attributes, R = N.attributePatterns), (S = c[8]) ? (y = -1 !== S.indexOf("data-mce-type"), y && b && (E = !1), m = [], m.map = {}, S.replace(P, s)) : (m = [], m.map = {}), _ && !y) {
                                if (A = N.attributesRequired, B = N.attributesDefault, D = N.attributesForced, L = N.removeEmptyAttrs, L && !m.length && (E = !1), D)for (h = D.length; h--;)k = D[h], v = k.name, I = k.value, "{$uid}" === I && (I = "mce_" + F++), m.map[v] = I, m.push({
                                    name: v,
                                    value: I
                                });
                                if (B)for (h = B.length; h--;)k = B[h], v = k.name, v in m.map || (I = k.value, "{$uid}" === I && (I = "mce_" + F++), m.map[v] = I, m.push({
                                    name: v,
                                    value: I
                                }));
                                if (A) {
                                    for (h = A.length; h-- && !(A[h] in m.map););
                                    -1 === h && (E = !1)
                                }
                                if (k = m.map["data-mce-bogus"]) {
                                    if ("all" === k) {
                                        u = r(a, e, H.lastIndex), H.lastIndex = u;
                                        continue
                                    }
                                    E = !1
                                }
                            }
                            E && l.start(d, m, w)
                        } else E = !1;
                        if (f = O[d]) {
                            f.lastIndex = u = c.index + c[0].length, (c = f.exec(e)) ? (E && (g = e.substr(u, c.index - u)), u = c.index + c[0].length) : (g = e.substr(u), u = e.length), E && (g.length > 0 && l.text(g, !0), l.end(d)), H.lastIndex = u;
                            continue
                        }
                        w || (S && S.indexOf("/") == S.length - 1 ? E && l.end(d) : p.push({name: d, valid: E}))
                    } else(d = c[1]) ? (">" === d.charAt(0) && (d = " " + d), o.allow_conditional_comments || "[if" !== d.substr(0, 3) || (d = " " + d), l.comment(d)) : (d = c[2]) ? l.cdata(d) : (d = c[3]) ? l.doctype(d) : (d = c[4]) && l.pi(d, c[5]);
                    u = c.index + c[0].length
                }
                for (u < e.length && l.text(z(e.substr(u))), h = p.length - 1; h >= 0; h--)d = p[h], d.valid && l.end(d.name)
            }
        }
    }), r(N, [x, w, _, p], function (e, t, n, r) {
        var i = r.makeMap, o = r.each, a = r.explode, s = r.extend;
        return function (r, l) {
            function c(t) {
                var n, r, o, a, s, c, d, f, p, m, h, g, v, y;
                for (h = i("tr,td,th,tbody,thead,tfoot,table"), m = l.getNonEmptyElements(), g = l.getTextBlockElements(), n = 0; n < t.length; n++)if (r = t[n], r.parent && !r.fixed)if (g[r.name] && "li" == r.parent.name) {
                    for (v = r.next; v && g[v.name];)v.name = "li", v.fixed = !0, r.parent.insert(v, r.parent), v = v.next;
                    r.unwrap(r)
                } else {
                    for (a = [r], o = r.parent; o && !l.isValidChild(o.name, r.name) && !h[o.name]; o = o.parent)a.push(o);
                    if (o && a.length > 1) {
                        for (a.reverse(), s = c = u.filterNode(a[0].clone()), p = 0; p < a.length - 1; p++) {
                            for (l.isValidChild(c.name, a[p].name) ? (d = u.filterNode(a[p].clone()), c.append(d)) : d = c, f = a[p].firstChild; f && f != a[p + 1];)y = f.next, d.append(f), f = y;
                            c = d
                        }
                        s.isEmpty(m) ? o.insert(r, a[0], !0) : (o.insert(s, a[0], !0), o.insert(r, s)), o = a[0], (o.isEmpty(m) || o.firstChild === o.lastChild && "br" === o.firstChild.name) && o.empty().remove()
                    } else if (r.parent) {
                        if ("li" === r.name) {
                            if (v = r.prev, v && ("ul" === v.name || "ul" === v.name)) {
                                v.append(r);
                                continue
                            }
                            if (v = r.next, v && ("ul" === v.name || "ul" === v.name)) {
                                v.insert(r, v.firstChild, !0);
                                continue
                            }
                            r.wrap(u.filterNode(new e("ul", 1)));
                            continue
                        }
                        l.isValidChild(r.parent.name, "div") && l.isValidChild("div", r.name) ? r.wrap(u.filterNode(new e("div", 1))) : "style" === r.name || "script" === r.name ? r.empty().remove() : r.unwrap()
                    }
                }
            }

            var u = this, d = {}, f = [], p = {}, m = {};
            r = r || {}, r.validate = "validate" in r ? r.validate : !0, r.root_name = r.root_name || "body", u.schema = l = l || new t, u.filterNode = function (e) {
                var t, n, r;
                n in d && (r = p[n], r ? r.push(e) : p[n] = [e]), t = f.length;
                for (; t--;)n = f[t].name, n in e.attributes.map && (r = m[n], r ? r.push(e) : m[n] = [e]);
                return e
            }, u.addNodeFilter = function (e, t) {
                o(a(e), function (e) {
                    var n = d[e];
                    n || (d[e] = n = []), n.push(t)
                })
            }, u.addAttributeFilter = function (e, t) {
                o(a(e), function (e) {
                    var n;
                    for (n = 0; n < f.length; n++)if (f[n].name === e)return void f[n].callbacks.push(t);
                    f.push({name: e, callbacks: [t]})
                })
            }, u.parse = function (t, o) {
                function a() {
                    function e(e) {
                        e && (t = e.firstChild, t && 3 == t.type && (t.value = t.value.replace(R, "")), t = e.lastChild, t && 3 == t.type && (t.value = t.value.replace(D, "")))
                    }

                    var t = y.firstChild, n, i;
                    if (l.isValidChild(y.name, I.toLowerCase())) {
                        for (; t;)n = t.next, 3 == t.type || 1 == t.type && "p" !== t.name && !T[t.name] && !t.attr("data-mce-type") ? i ? i.append(t) : (i = u(I, 1), i.attr(r.forced_root_block_attrs), y.insert(i, t), i.append(t)) : (e(i), i = null), t = n;
                        e(i)
                    }
                }

                function u(t, n) {
                    var r = new e(t, n), i;
                    return t in d && (i = p[t], i ? i.push(r) : p[t] = [r]), r
                }

                function h(e) {
                    var t, n, r;
                    for (t = e.prev; t && 3 === t.type;)n = t.value.replace(D, ""), n.length > 0 ? (t.value = n, t = t.prev) : (r = t.prev, t.remove(), t = r)
                }

                function g(e) {
                    var t, n = {};
                    for (t in e)"li" !== t && "p" != t && (n[t] = e[t]);
                    return n
                }

                var v, y, b, C, x, w, _, N, E, k, S, T, R, A = [], B, D, L, M, H, P, O, I;
                if (o = o || {}, p = {}, m = {}, T = s(i("script,style,head,html,body,title,meta,param"), l.getBlockElements()), O = l.getNonEmptyElements(), P = l.children, S = r.validate, I = "forced_root_block" in o ? o.forced_root_block : r.forced_root_block, H = l.getWhiteSpaceElements(), R = /^[ \t\r\n]+/, D = /[ \t\r\n]+$/, L = /[ \t\r\n]+/g, M = /^[ \t\r\n]+$/, v = new n({
                        validate: S,
                        allow_script_urls: r.allow_script_urls,
                        allow_conditional_comments: r.allow_conditional_comments,
                        self_closing_elements: g(l.getSelfClosingElements()),
                        cdata: function (e) {
                            b.append(u("#cdata", 4)).value = e
                        },
                        text: function (e, t) {
                            var n;
                            B || (e = e.replace(L, " "), b.lastChild && T[b.lastChild.name] && (e = e.replace(R, ""))), 0 !== e.length && (n = u("#text", 3), n.raw = !!t, b.append(n).value = e)
                        },
                        comment: function (e) {
                            b.append(u("#comment", 8)).value = e
                        },
                        pi: function (e, t) {
                            b.append(u(e, 7)).value = t, h(b)
                        },
                        doctype: function (e) {
                            var t;
                            t = b.append(u("#doctype", 10)), t.value = e, h(b)
                        },
                        start: function (e, t, n) {
                            var r, i, o, a, s;
                            if (o = S ? l.getElementRule(e) : {}) {
                                for (r = u(o.outputName || e, 1), r.attributes = t, r.shortEnded = n, b.append(r), s = P[b.name], s && P[r.name] && !s[r.name] && A.push(r), i = f.length; i--;)a = f[i].name, a in t.map && (E = m[a], E ? E.push(r) : m[a] = [r]);
                                T[e] && h(r), n || (b = r), !B && H[e] && (B = !0)
                            }
                        },
                        end: function (t) {
                            var n, r, i, o, a;
                            if (r = S ? l.getElementRule(t) : {}) {
                                if (T[t] && !B) {
                                    if (n = b.firstChild, n && 3 === n.type)if (i = n.value.replace(R, ""), i.length > 0)n.value = i, n = n.next; else for (o = n.next, n.remove(), n = o; n && 3 === n.type;)i = n.value, o = n.next, (0 === i.length || M.test(i)) && (n.remove(), n = o), n = o;
                                    if (n = b.lastChild, n && 3 === n.type)if (i = n.value.replace(D, ""), i.length > 0)n.value = i, n = n.prev; else for (o = n.prev, n.remove(), n = o; n && 3 === n.type;)i = n.value, o = n.prev, (0 === i.length || M.test(i)) && (n.remove(), n = o), n = o
                                }
                                if (B && H[t] && (B = !1), (r.removeEmpty || r.paddEmpty) && b.isEmpty(O))if (r.paddEmpty)b.empty().append(new e("#text", "3")).value = "\xa0"; else if (!b.attributes.map.name && !b.attributes.map.id)return a = b.parent, b.unwrap(), void(b = a);
                                b = b.parent
                            }
                        }
                    }, l), y = b = new e(o.context || r.root_name, 11), v.parse(t), S && A.length && (o.context ? o.invalid = !0 : c(A)), I && ("body" == y.name || o.isRootContent) && a(), !o.invalid) {
                    for (k in p) {
                        for (E = d[k], C = p[k], _ = C.length; _--;)C[_].parent || C.splice(_, 1);
                        for (x = 0, w = E.length; w > x; x++)E[x](C, k, o)
                    }
                    for (x = 0, w = f.length; w > x; x++)if (E = f[x], E.name in m) {
                        for (C = m[E.name], _ = C.length; _--;)C[_].parent || C.splice(_, 1);
                        for (_ = 0, N = E.callbacks.length; N > _; _++)E.callbacks[_](C, E.name, o)
                    }
                }
                return y
            }, r.remove_trailing_brs && u.addNodeFilter("br", function (t) {
                var n, r = t.length, i, o = s({}, l.getBlockElements()), a = l.getNonEmptyElements(), c, u, d, f, p, m;
                for (o.body = 1, n = 0; r > n; n++)if (i = t[n], c = i.parent, o[i.parent.name] && i === c.lastChild) {
                    for (d = i.prev; d;) {
                        if (f = d.name, "span" !== f || "bookmark" !== d.attr("data-mce-type")) {
                            if ("br" !== f)break;
                            if ("br" === f) {
                                i = null;
                                break
                            }
                        }
                        d = d.prev
                    }
                    i && (i.remove(), c.isEmpty(a) && (p = l.getElementRule(c.name), p && (p.removeEmpty ? c.remove() : p.paddEmpty && (c.empty().append(new e("#text", 3)).value = "\xa0"))))
                } else {
                    for (u = i; c && c.firstChild === u && c.lastChild === u && (u = c, !o[c.name]);)c = c.parent;
                    u === c && (m = new e("#text", 3), m.value = "\xa0", i.replace(m))
                }
            }), r.allow_html_in_named_anchor || u.addAttributeFilter("id,name", function (e) {
                for (var t = e.length, n, r, i, o; t--;)if (o = e[t], "a" === o.name && o.firstChild && !o.attr("href")) {
                    i = o.parent, n = o.lastChild;
                    do r = n.prev, i.insert(n, o), n = r; while (n)
                }
            }), r.validate && l.getValidClasses() && u.addAttributeFilter("class", function (e) {
                for (var t = e.length, n, r, i, o, a, s = l.getValidClasses(), c, u; t--;) {
                    for (n = e[t], r = n.attr("class").split(" "), a = "", i = 0; i < r.length; i++)o = r[i], u = !1, c = s["*"], c && c[o] && (u = !0), c = s[n.name], u || !c || c[o] || (u = !0), u && (a && (a += " "), a += o);
                    a.length || (a = null), n.attr("class", a)
                }
            })
        }
    }), r(E, [h, p], function (e, t) {
        var n = t.makeMap;
        return function (t) {
            var r = [], i, o, a, s, l;
            return t = t || {}, i = t.indent, o = n(t.indent_before || ""), a = n(t.indent_after || ""), s = e.getEncodeFunc(t.entity_encoding || "raw", t.entities), l = "html" == t.element_format, {
                start: function (e, t, n) {
                    var c, u, d, f;
                    if (i && o[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n")), r.push("<", e), t)for (c = 0, u = t.length; u > c; c++)d = t[c], r.push(" ", d.name, '="', s(d.value, !0), '"');
                    r[r.length] = !n || l ? ">" : " />", n && i && a[e] && r.length > 0 && (f = r[r.length - 1], f.length > 0 && "\n" !== f && r.push("\n"))
                }, end: function (e) {
                    var t;
                    r.push("</", e, ">"), i && a[e] && r.length > 0 && (t = r[r.length - 1], t.length > 0 && "\n" !== t && r.push("\n"))
                }, text: function (e, t) {
                    e.length > 0 && (r[r.length] = t ? e : s(e))
                }, cdata: function (e) {
                    r.push("<![CDATA[", e, "]]>")
                }, comment: function (e) {
                    r.push("<!--", e, "-->")
                }, pi: function (e, t) {
                    t ? r.push("<?", e, " ", t, "?>") : r.push("<?", e, "?>"), i && r.push("\n")
                }, doctype: function (e) {
                    r.push("<!DOCTYPE", e, ">", i ? "\n" : "")
                }, reset: function () {
                    r.length = 0
                }, getContent: function () {
                    return r.join("").replace(/\n$/, "")
                }
            }
        }
    }), r(k, [E, w], function (e, t) {
        return function (n, r) {
            var i = this, o = new e(n);
            n = n || {}, n.validate = "validate" in n ? n.validate : !0, i.schema = r = r || new t, i.writer = o, i.serialize = function (e) {
                function t(e) {
                    var n = i[e.type], s, l, c, u, d, f, p, m, h;
                    if (n)n(e); else {
                        if (s = e.name, l = e.shortEnded, c = e.attributes, a && c && c.length > 1) {
                            for (f = [], f.map = {}, h = r.getElementRule(e.name), p = 0, m = h.attributesOrder.length; m > p; p++)u = h.attributesOrder[p], u in c.map && (d = c.map[u], f.map[u] = d, f.push({
                                name: u,
                                value: d
                            }));
                            for (p = 0, m = c.length; m > p; p++)u = c[p].name, u in f.map || (d = c.map[u], f.map[u] = d, f.push({
                                name: u,
                                value: d
                            }));
                            c = f
                        }
                        if (o.start(e.name, c, l), !l) {
                            if (e = e.firstChild)do t(e); while (e = e.next);
                            o.end(s)
                        }
                    }
                }

                var i, a;
                return a = n.validate, i = {
                    3: function (e) {
                        o.text(e.value, e.raw)
                    }, 8: function (e) {
                        o.comment(e.value)
                    }, 7: function (e) {
                        o.pi(e.name, e.value)
                    }, 10: function (e) {
                        o.doctype(e.value)
                    }, 4: function (e) {
                        o.cdata(e.value)
                    }, 11: function (e) {
                        if (e = e.firstChild)do t(e); while (e = e.next)
                    }
                }, o.reset(), 1 != e.type || n.inner ? i[11](e) : t(e), o.getContent()
            }
        }
    }), r(S, [y, N, h, k, x, w, g, p], function (e, t, n, r, i, o, a, s) {
        var l = s.each, c = s.trim, u = e.DOM;
        return function (e, i) {
            var s, d, f;
            return i && (s = i.dom, d = i.schema), s = s || u, d = d || new o(e), e.entity_encoding = e.entity_encoding || "named", e.remove_trailing_brs = "remove_trailing_brs" in e ? e.remove_trailing_brs : !0, f = new t(e, d), f.addAttributeFilter("data-mce-tabindex", function (e, t) {
                for (var n = e.length, r; n--;)r = e[n], r.attr("tabindex", r.attributes.map["data-mce-tabindex"]), r.attr(t, null)
            }), f.addAttributeFilter("src,href,style", function (t, n) {
                for (var r = t.length, i, o, a = "data-mce-" + n, l = e.url_converter, c = e.url_converter_scope, u; r--;)i = t[r], o = i.attributes.map[a], o !== u ? (i.attr(n, o.length > 0 ? o : null), i.attr(a, null)) : (o = i.attributes.map[n], "style" === n ? o = s.serializeStyle(s.parseStyle(o), i.name) : l && (o = l.call(c, o, n, i.name)), i.attr(n, o.length > 0 ? o : null))
            }), f.addAttributeFilter("class", function (e) {
                for (var t = e.length, n, r; t--;)n = e[t], r = n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, ""), n.attr("class", r.length > 0 ? r : null)
            }), f.addAttributeFilter("data-mce-type", function (e, t, n) {
                for (var r = e.length, i; r--;)i = e[r], "bookmark" !== i.attributes.map["data-mce-type"] || n.cleanup || i.remove()
            }), f.addNodeFilter("noscript", function (e) {
                for (var t = e.length, r; t--;)r = e[t].firstChild, r && (r.value = n.decode(r.value))
            }), f.addNodeFilter("script,style", function (e, t) {
                function n(e) {
                    return e.replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n").replace(/^[\r\n]*|[\r\n]*$/g, "").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi, "").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g, "")
                }

                for (var r = e.length, i, o, a; r--;)i = e[r], o = i.firstChild ? i.firstChild.value : "", "script" === t ? (a = i.attr("type"), a && i.attr("type", "mce-no/type" == a ? null : a.replace(/^mce\-/, "")), o.length > 0 && (i.firstChild.value = "// <![CDATA[\n" + n(o) + "\n// ]]>")) : o.length > 0 && (i.firstChild.value = "<!--\n" + n(o) + "\n-->")
            }), f.addNodeFilter("#comment", function (e) {
                for (var t = e.length, n; t--;)n = e[t], 0 === n.value.indexOf("[CDATA[") ? (n.name = "#cdata", n.type = 4, n.value = n.value.replace(/^\[CDATA\[|\]\]$/g, "")) : 0 === n.value.indexOf("mce:protected ") && (n.name = "#text", n.type = 3, n.raw = !0, n.value = unescape(n.value).substr(14))
            }), f.addNodeFilter("xml:namespace,input", function (e, t) {
                for (var n = e.length, r; n--;)r = e[n], 7 === r.type ? r.remove() : 1 === r.type && ("input" !== t || "type" in r.attributes.map || r.attr("type", "text"))
            }), e.fix_list_elements && f.addNodeFilter("ul,ol", function (e) {
                for (var t = e.length, n, r; t--;)n = e[t], r = n.parent, ("ul" === r.name || "ol" === r.name) && n.prev && "li" === n.prev.name && n.prev.append(n)
            }), f.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize", function (e, t) {
                for (var n = e.length; n--;)e[n].attr(t, null)
            }), {
                schema: d,
                addNodeFilter: f.addNodeFilter,
                addAttributeFilter: f.addAttributeFilter,
                serialize: function (t, n) {
                    var i = this, o, u, p, m, h;
                    return a.ie && s.select("script,style,select,map").length > 0 ? (h = t.innerHTML, t = t.cloneNode(!1), s.setHTML(t, h)) : t = t.cloneNode(!0), o = t.ownerDocument.implementation, o.createHTMLDocument && (u = o.createHTMLDocument(""), l("BODY" == t.nodeName ? t.childNodes : [t], function (e) {
                        u.body.appendChild(u.importNode(e, !0))
                    }), t = "BODY" != t.nodeName ? u.body.firstChild : u.body, p = s.doc, s.doc = u), n = n || {}, n.format = n.format || "html", n.selection && (n.forced_root_block = ""), n.no_events || (n.node = t, i.onPreProcess(n)), m = new r(e, d), n.content = m.serialize(f.parse(c(n.getInner ? t.innerHTML : s.getOuterHTML(t)), n)), n.cleanup || (n.content = n.content.replace(/\uFEFF/g, "")), n.no_events || i.onPostProcess(n), p && (s.doc = p), n.node = null, n.content
                },
                addRules: function (e) {
                    d.addValidElements(e)
                },
                setRules: function (e) {
                    d.setValidElements(e)
                },
                onPreProcess: function (e) {
                    i && i.fire("PreProcess", e)
                },
                onPostProcess: function (e) {
                    i && i.fire("PostProcess", e)
                }
            }
        }
    }), r(T, [], function () {
        function e(e) {
            function t(t, n) {
                var r, i = 0, o, a, s, l, c, u, d = -1, f;
                if (r = t.duplicate(), r.collapse(n), f = r.parentElement(), f.ownerDocument === e.dom.doc) {
                    for (; "false" === f.contentEditable;)f = f.parentNode;
                    if (!f.hasChildNodes())return {node: f, inside: 1};
                    for (s = f.children, o = s.length - 1; o >= i;)if (u = Math.floor((i + o) / 2), l = s[u], r.moveToElementText(l), d = r.compareEndPoints(n ? "StartToStart" : "EndToEnd", t), d > 0)o = u - 1; else {
                        if (!(0 > d))return {node: l};
                        i = u + 1
                    }
                    if (0 > d)for (l ? r.collapse(!1) : (r.moveToElementText(f), r.collapse(!0), l = f, a = !0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", 1) && f == r.parentElement();)c++; else for (r.collapse(!0), c = 0; 0 !== r.compareEndPoints(n ? "StartToStart" : "StartToEnd", t) && 0 !== r.move("character", -1) && f == r.parentElement();)c++;
                    return {node: l, position: d, offset: c, inside: a}
                }
            }

            function n() {
                function n(e) {
                    var n = t(o, e), r, i, s = 0, l, c, u;
                    if (r = n.node, i = n.offset, n.inside && !r.hasChildNodes())return void a[e ? "setStart" : "setEnd"](r, 0);
                    if (i === c)return void a[e ? "setStartBefore" : "setEndAfter"](r);
                    if (n.position < 0) {
                        if (l = n.inside ? r.firstChild : r.nextSibling, !l)return void a[e ? "setStartAfter" : "setEndAfter"](r);
                        if (!i)return void(3 == l.nodeType ? a[e ? "setStart" : "setEnd"](l, 0) : a[e ? "setStartBefore" : "setEndBefore"](l));
                        for (; l;) {
                            if (3 == l.nodeType && (u = l.nodeValue, s += u.length, s >= i)) {
                                r = l, s -= i, s = u.length - s;
                                break
                            }
                            l = l.nextSibling
                        }
                    } else {
                        if (l = r.previousSibling, !l)return a[e ? "setStartBefore" : "setEndBefore"](r);
                        if (!i)return void(3 == r.nodeType ? a[e ? "setStart" : "setEnd"](l, r.nodeValue.length) : a[e ? "setStartAfter" : "setEndAfter"](l));
                        for (; l;) {
                            if (3 == l.nodeType && (s += l.nodeValue.length, s >= i)) {
                                r = l, s -= i;
                                break
                            }
                            l = l.previousSibling
                        }
                    }
                    a[e ? "setStart" : "setEnd"](r, s)
                }

                var o = e.getRng(), a = i.createRng(), s, l, c, u, d;
                if (s = o.item ? o.item(0) : o.parentElement(), s.ownerDocument != i.doc)return a;
                if (l = e.isCollapsed(), o.item)return a.setStart(s.parentNode, i.nodeIndex(s)), a.setEnd(a.startContainer, a.startOffset + 1), a;
                try {
                    n(!0), l || n()
                } catch (f) {
                    if (-2147024809 != f.number)throw f;
                    d = r.getBookmark(2), c = o.duplicate(), c.collapse(!0), s = c.parentElement(), l || (c = o.duplicate(), c.collapse(!1), u = c.parentElement(), u.innerHTML = u.innerHTML), s.innerHTML = s.innerHTML, r.moveToBookmark(d), o = e.getRng(), n(!0), l || n()
                }
                return a
            }

            var r = this, i = e.dom, o = !1;
            this.getBookmark = function (n) {
                function r(e) {
                    var t, n, r, o, a = [];
                    for (t = e.parentNode, n = i.getRoot().parentNode; t != n && 9 !== t.nodeType;) {
                        for (r = t.children, o = r.length; o--;)if (e === r[o]) {
                            a.push(o);
                            break
                        }
                        e = t, t = t.parentNode
                    }
                    return a
                }

                function o(e) {
                    var n;
                    return n = t(a, e), n ? {
                        position: n.position,
                        offset: n.offset,
                        indexes: r(n.node),
                        inside: n.inside
                    } : void 0
                }

                var a = e.getRng(), s = {};
                return 2 === n && (a.item ? s.start = {
                    ctrl: !0,
                    indexes: r(a.item(0))
                } : (s.start = o(!0), e.isCollapsed() || (s.end = o()))), s
            }, this.moveToBookmark = function (e) {
                function t(e) {
                    var t, n, r, o;
                    for (t = i.getRoot(), n = e.length - 1; n >= 0; n--)o = t.children, r = e[n], r <= o.length - 1 && (t = o[r]);
                    return t
                }

                function n(n) {
                    var i = e[n ? "start" : "end"], a, s, l, c;
                    i && (a = i.position > 0, s = o.createTextRange(), s.moveToElementText(t(i.indexes)), c = i.offset, c !== l ? (s.collapse(i.inside || a), s.moveStart("character", a ? -c : c)) : s.collapse(n), r.setEndPoint(n ? "StartToStart" : "EndToStart", s), n && r.collapse(!0))
                }

                var r, o = i.doc.body;
                e.start && (e.start.ctrl ? (r = o.createControlRange(), r.addElement(t(e.start.indexes)), r.select()) : (r = o.createTextRange(), n(!0), n(), r.select()))
            }, this.addRange = function (t) {
                function n(e) {
                    var t, n, a, d, m;
                    a = i.create("a"), t = e ? s : c, n = e ? l : u, d = r.duplicate(), (t == f || t == f.documentElement) && (t = p, n = 0), 3 == t.nodeType ? (t.parentNode.insertBefore(a, t), d.moveToElementText(a), d.moveStart("character", n), i.remove(a), r.setEndPoint(e ? "StartToStart" : "EndToEnd", d)) : (m = t.childNodes, m.length ? (n >= m.length ? i.insertAfter(a, m[m.length - 1]) : t.insertBefore(a, m[n]), d.moveToElementText(a)) : t.canHaveHTML && (t.innerHTML = "<span>&#xFEFF;</span>", a = t.firstChild, d.moveToElementText(a), d.collapse(o)), r.setEndPoint(e ? "StartToStart" : "EndToEnd", d), i.remove(a))
                }

                var r, a, s, l, c, u, d, f = e.dom.doc, p = f.body, m, h;
                if (s = t.startContainer, l = t.startOffset, c = t.endContainer, u = t.endOffset, r = p.createTextRange(), s == c && 1 == s.nodeType) {
                    if (l == u && !s.hasChildNodes()) {
                        if (s.canHaveHTML)return d = s.previousSibling, d && !d.hasChildNodes() && i.isBlock(d) ? d.innerHTML = "&#xFEFF;" : d = null, s.innerHTML = "<span>&#xFEFF;</span><span>&#xFEFF;</span>", r.moveToElementText(s.lastChild), r.select(), i.doc.selection.clear(), s.innerHTML = "", void(d && (d.innerHTML = ""));
                        l = i.nodeIndex(s), s = s.parentNode
                    }
                    if (l == u - 1)try {
                        if (h = s.childNodes[l], a = p.createControlRange(), a.addElement(h), a.select(), m = e.getRng(), m.item && h === m.item(0))return
                    } catch (g) {
                    }
                }
                n(!0), n(), r.select()
            }, this.getRangeAt = n
        }

        return e
    }), r(R, [g], function (e) {
        return {
            BACKSPACE: 8,
            DELETE: 46,
            DOWN: 40,
            ENTER: 13,
            LEFT: 37,
            RIGHT: 39,
            SPACEBAR: 32,
            TAB: 9,
            UP: 38,
            modifierPressed: function (e) {
                return e.shiftKey || e.ctrlKey || e.altKey
            },
            metaKeyPressed: function (t) {
                return e.mac ? t.metaKey : t.ctrlKey && !t.altKey
            }
        }
    }), r(A, [R, p, g], function (e, t, n) {
        return function (r, i) {
            function o(e) {
                var t = i.settings.object_resizing;
                return t === !1 || n.iOS ? !1 : ("string" != typeof t && (t = "table,img,div"), "false" === e.getAttribute("data-mce-resize") ? !1 : i.dom.is(e, t))
            }

            function a(t) {
                var n, r;
                n = t.screenX - S, r = t.screenY - T, H = n * E[2] + B, P = r * E[3] + D, H = 5 > H ? 5 : H, P = 5 > P ? 5 : P, (e.modifierPressed(t) || "IMG" == w.nodeName && E[2] * E[3] !== 0) && (H = Math.round(P / L), P = Math.round(H * L)), C.setStyles(_, {
                    width: H,
                    height: P
                }), E[2] < 0 && _.clientWidth <= H && C.setStyle(_, "left", R + (B - H)), E[3] < 0 && _.clientHeight <= P && C.setStyle(_, "top", A + (D - P)), M || (i.fire("ObjectResizeStart", {
                    target: w,
                    width: B,
                    height: D
                }), M = !0)
            }

            function s() {
                function e(e, t) {
                    t && (w.style[e] || !i.schema.isValid(w.nodeName.toLowerCase(), e) ? C.setStyle(w, e, t) : C.setAttrib(w, e, t))
                }

                M = !1, e("width", H), e("height", P), C.unbind(O, "mousemove", a), C.unbind(O, "mouseup", s), I != O && (C.unbind(I, "mousemove", a), C.unbind(I, "mouseup", s)), C.remove(_), F && "TABLE" != w.nodeName || l(w), i.fire("ObjectResized", {
                    target: w,
                    width: H,
                    height: P
                }), i.nodeChanged()
            }

            function l(e, t, r) {
                var l, u, d, f, p, m = i.getBody();
                g(), l = C.getPos(e, m), R = l.x, A = l.y, p = e.getBoundingClientRect(), u = p.width || p.right - p.left, d = p.height || p.bottom - p.top, w != e && (h(), w = e, H = P = 0), f = i.fire("ObjectSelected", {target: e}), o(e) && !f.isDefaultPrevented() ? x(N, function (e, o) {
                    function l(t) {
                        S = t.screenX, T = t.screenY, B = w.clientWidth, D = w.clientHeight, L = D / B, E = e, _ = w.cloneNode(!0), C.addClass(_, "mce-clonedresizable"), _.contentEditable = !1, _.unSelectabe = !0, C.setStyles(_, {
                            left: R,
                            top: A,
                            margin: 0
                        }), _.removeAttribute("data-mce-selected"), i.getBody().appendChild(_), C.bind(O, "mousemove", a), C.bind(O, "mouseup", s), I != O && (C.bind(I, "mousemove", a), C.bind(I, "mouseup", s))
                    }

                    var c, f;
                    return t ? void(o == t && l(r)) : (c = C.get("mceResizeHandle" + o), c ? C.show(c) : (f = i.getBody(), c = C.add(f, "div", {
                        id: "mceResizeHandle" + o,
                        "data-mce-bogus": !0,
                        "class": "mce-resizehandle",
                        unselectable: !0,
                        style: "cursor:" + o + "-resize; margin:0; padding:0"
                    }), n.ie && (c.contentEditable = !1)), e.elm || (C.bind(c, "mousedown", function (e) {
                        e.stopImmediatePropagation(), e.preventDefault(), l(e)
                    }), e.elm = c), void C.setStyles(c, {
                        left: u * e[0] + R - c.offsetWidth / 2,
                        top: d * e[1] + A - c.offsetHeight / 2
                    }))
                }) : c(), w.setAttribute("data-mce-selected", "1")
            }

            function c() {
                var e, t;
                g(), w && w.removeAttribute("data-mce-selected");
                for (e in N)t = C.get("mceResizeHandle" + e), t && (C.unbind(t), C.remove(t))
            }

            function u(e) {
                function t(e, t) {
                    if (e)do if (e === t)return !0; while (e = e.parentNode)
                }

                var n;
                return x(C.select("img[data-mce-selected],hr[data-mce-selected]"), function (e) {
                    e.removeAttribute("data-mce-selected")
                }), n = "mousedown" == e.type ? e.target : r.getNode(), n = C.getParent(n, F ? "table" : "table,img,hr"), t(n, i.getBody()) && (v(), t(r.getStart(), n) && t(r.getEnd(), n) && (!F || n != r.getStart() && "IMG" !== r.getStart().nodeName)) ? void l(n) : void c()
            }

            function d(e, t, n) {
                e && e.attachEvent && e.attachEvent("on" + t, n)
            }

            function f(e, t, n) {
                e && e.detachEvent && e.detachEvent("on" + t, n)
            }

            function p(e) {
                var t = e.srcElement, n, r, o, a, s, c, u;
                n = t.getBoundingClientRect(), c = k.clientX - n.left, u = k.clientY - n.top;
                for (r in N)if (o = N[r], a = t.offsetWidth * o[0], s = t.offsetHeight * o[1], Math.abs(a - c) < 8 && Math.abs(s - u) < 8) {
                    E = o;
                    break
                }
                M = !0, i.getDoc().selection.empty(), l(t, r, k)
            }

            function m(e) {
                var t = e.srcElement;
                if (t != w) {
                    if (h(), 0 === t.id.indexOf("mceResizeHandle"))return void(e.returnValue = !1);
                    ("IMG" == t.nodeName || "TABLE" == t.nodeName) && (c(), w = t, d(t, "resizestart", p))
                }
            }

            function h() {
                f(w, "resizestart", p)
            }

            function g() {
                for (var e in N) {
                    var t = N[e];
                    t.elm && (C.unbind(t.elm), delete t.elm)
                }
            }

            function v() {
                try {
                    i.getDoc().execCommand("enableObjectResizing", !1, !1)
                } catch (e) {
                }
            }

            function y(e) {
                var t;
                if (F) {
                    t = O.body.createControlRange();
                    try {
                        return t.addElement(e), t.select(), !0
                    } catch (n) {
                    }
                }
            }

            function b() {
                w = _ = null, F && (h(), f(i.getBody(), "controlselect", m))
            }

            var C = i.dom, x = t.each, w, _, N, E, k, S, T, R, A, B, D, L, M, H, P, O = i.getDoc(), I = document, F = n.ie && n.ie < 11;
            N = {
                n: [.5, 0, 0, -1],
                e: [1, .5, 1, 0],
                s: [.5, 1, 0, 1],
                w: [0, .5, -1, 0],
                nw: [0, 0, -1, -1],
                ne: [1, 0, 1, -1],
                se: [1, 1, 1, 1],
                sw: [0, 1, -1, 1]
            };
            var z = ".mce-content-body";
            return i.contentStyles.push(z + " div.mce-resizehandle {position: absolute;border: 1px solid black;background: #FFF;width: 5px;height: 5px;z-index: 10000}" + z + " .mce-resizehandle:hover {background: #000}" + z + " img[data-mce-selected], hr[data-mce-selected] {outline: 1px solid black;resize: none}" + z + " .mce-clonedresizable {position: absolute;" + (n.gecko ? "" : "outline: 1px dashed black;") + "opacity: .5;filter: alpha(opacity=50);z-index: 10000}"), i.on("init", function () {
                F ? (i.on("ObjectResized", function (e) {
                    "TABLE" != e.target.nodeName && (c(), y(e.target))
                }), d(i.getBody(), "controlselect", m), i.on("mousedown", function (e) {
                    k = e
                })) : (v(), n.ie >= 11 && (i.on("mouseup", function (e) {
                    var t = e.target.nodeName;
                    /^(TABLE|IMG|HR)$/.test(t) && (i.selection.select(e.target, "TABLE" == t), i.nodeChanged())
                }), i.dom.bind(i.getBody(), "mscontrolselect", function (e) {
                    /^(TABLE|IMG|HR)$/.test(e.target.nodeName) && (e.preventDefault(), "IMG" == e.target.tagName && window.setTimeout(function () {
                        i.selection.select(e.target)
                    }, 0))
                }))), i.on("nodechange mousedown mouseup ResizeEditor", u), i.on("keydown keyup", function (e) {
                    w && "TABLE" == w.nodeName && u(e)
                }), i.on("hide", c)
            }), i.on("remove", g), {
                isResizable: o,
                showResizeRect: l,
                hideResizeRect: c,
                updateResizeRect: u,
                controlSelect: y,
                destroy: b
            }
        }
    }), r(B, [p, f], function (e, t) {
        function n(e, t) {
            var n = e.childNodes;
            return t--, t > n.length - 1 ? t = n.length - 1 : 0 > t && (t = 0), n[t] || e
        }

        function r(e) {
            this.walk = function (t, r) {
                function o(e) {
                    var t;
                    return t = e[0], 3 === t.nodeType && t === c && u >= t.nodeValue.length && e.splice(0, 1), t = e[e.length - 1], 0 === f && e.length > 0 && t === d && 3 === t.nodeType && e.splice(e.length - 1, 1), e
                }

                function a(e, t, n) {
                    for (var r = []; e && e != n; e = e[t])r.push(e);
                    return r
                }

                function s(e, t) {
                    do {
                        if (e.parentNode == t)return e;
                        e = e.parentNode
                    } while (e)
                }

                function l(e, t, n) {
                    var i = n ? "nextSibling" : "previousSibling";
                    for (g = e, v = g.parentNode; g && g != t; g = v)v = g.parentNode, y = a(g == e ? g : g[i], i), y.length && (n || y.reverse(), r(o(y)))
                }

                var c = t.startContainer, u = t.startOffset, d = t.endContainer, f = t.endOffset, p, m, h, g, v, y, b;
                if (b = e.select("td.mce-item-selected,th.mce-item-selected"), b.length > 0)return void i(b, function (e) {
                    r([e])
                });
                if (1 == c.nodeType && c.hasChildNodes() && (c = c.childNodes[u]), 1 == d.nodeType && d.hasChildNodes() && (d = n(d, f)), c == d)return r(o([c]));
                for (p = e.findCommonAncestor(c, d), g = c; g; g = g.parentNode) {
                    if (g === d)return l(c, p, !0);
                    if (g === p)break
                }
                for (g = d; g; g = g.parentNode) {
                    if (g === c)return l(d, p);
                    if (g === p)break
                }
                m = s(c, p) || c, h = s(d, p) || d, l(c, m, !0), y = a(m == c ? m : m.nextSibling, "nextSibling", h == d ? h.nextSibling : h), y.length && r(o(y)), l(d, h)
            }, this.split = function (e) {
                function t(e, t) {
                    return e.splitText(t)
                }

                var n = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset;
                return n == i && 3 == n.nodeType ? r > 0 && r < n.nodeValue.length && (i = t(n, r), n = i.previousSibling, o > r ? (o -= r, n = i = t(i, o).previousSibling, o = i.nodeValue.length, r = 0) : o = 0) : (3 == n.nodeType && r > 0 && r < n.nodeValue.length && (n = t(n, r), r = 0), 3 == i.nodeType && o > 0 && o < i.nodeValue.length && (i = t(i, o).previousSibling, o = i.nodeValue.length)), {
                    startContainer: n,
                    startOffset: r,
                    endContainer: i,
                    endOffset: o
                }
            }, this.normalize = function (n) {
                function r(r) {
                    function a(n, r) {
                        for (var i = new t(n, e.getParent(n.parentNode, e.isBlock) || f); n = i[r ? "prev" : "next"]();)if ("BR" === n.nodeName)return !0
                    }

                    function s(e, t) {
                        return e.previousSibling && e.previousSibling.nodeName == t
                    }

                    function l(n, r) {
                        var a, s, l;
                        if (r = r || c, l = e.getParent(r.parentNode, e.isBlock) || f, n && "BR" == r.nodeName && g && e.isEmpty(l))return c = r.parentNode, u = e.nodeIndex(r), void(i = !0);
                        for (a = new t(r, l); p = a[n ? "prev" : "next"]();) {
                            if ("false" === e.getContentEditableParent(p))return;
                            if (3 === p.nodeType && p.nodeValue.length > 0)return c = p, u = n ? p.nodeValue.length : 0, void(i = !0);
                            if (e.isBlock(p) || m[p.nodeName.toLowerCase()])return;
                            s = p
                        }
                        o && s && (c = s, i = !0, u = 0)
                    }

                    var c, u, d, f = e.getRoot(), p, m, h, g;
                    if (c = n[(r ? "start" : "end") + "Container"], u = n[(r ? "start" : "end") + "Offset"], g = 1 == c.nodeType && u === c.childNodes.length, m = e.schema.getNonEmptyElements(), h = r, 1 == c.nodeType && u > c.childNodes.length - 1 && (h = !1), 9 === c.nodeType && (c = e.getRoot(), u = 0), c === f) {
                        if (h && (p = c.childNodes[u > 0 ? u - 1 : 0], p && (m[p.nodeName] || "TABLE" == p.nodeName)))return;
                        if (c.hasChildNodes() && (u = Math.min(!h && u > 0 ? u - 1 : u, c.childNodes.length - 1), c = c.childNodes[u], u = 0, c.hasChildNodes() && !/TABLE/.test(c.nodeName))) {
                            p = c, d = new t(c, f);
                            do {
                                if (3 === p.nodeType && p.nodeValue.length > 0) {
                                    u = h ? 0 : p.nodeValue.length, c = p, i = !0;
                                    break
                                }
                                if (m[p.nodeName.toLowerCase()]) {
                                    u = e.nodeIndex(p), c = p.parentNode, "IMG" != p.nodeName || h || u++, i = !0;
                                    break
                                }
                            } while (p = h ? d.next() : d.prev())
                        }
                    }
                    o && (3 === c.nodeType && 0 === u && l(!0), 1 === c.nodeType && (p = c.childNodes[u], p || (p = c.childNodes[u - 1]), !p || "BR" !== p.nodeName || s(p, "A") || a(p) || a(p, !0) || l(!0, p))), h && !o && 3 === c.nodeType && u === c.nodeValue.length && l(!1), i && n["set" + (r ? "Start" : "End")](c, u)
                }

                var i, o;
                return o = n.collapsed, r(!0), o || r(), i && o && n.collapse(!0), i
            }
        }

        var i = e.each;
        return r.compareRanges = function (e, t) {
            if (e && t) {
                if (!e.item && !e.duplicate)return e.startContainer == t.startContainer && e.startOffset == t.startOffset;
                if (e.item && t.item && e.item(0) === t.item(0))return !0;
                if (e.isEqual && t.isEqual && t.isEqual(e))return !0
            }
            return !1
        }, r
    }), r(D, [g, p], function (e, t) {
        function n(n) {
            var r = n.dom;
            this.getBookmark = function (e, i) {
                function o(e, n) {
                    var i = 0;
                    return t.each(r.select(e), function (e, t) {
                        e == n && (i = t)
                    }), i
                }

                function a(e) {
                    function t(t) {
                        var n, r, i, o = t ? "start" : "end";
                        n = e[o + "Container"], r = e[o + "Offset"], 1 == n.nodeType && "TR" == n.nodeName && (i = n.childNodes, n = i[Math.min(t ? r : r - 1, i.length - 1)], n && (r = t ? 0 : n.childNodes.length, e["set" + (t ? "Start" : "End")](n, r)))
                    }

                    return t(!0), t(), e
                }

                function s() {
                    function e(e, t) {
                        var n = e[t ? "startContainer" : "endContainer"], a = e[t ? "startOffset" : "endOffset"], s = [], l, c, u = 0;
                        if (3 == n.nodeType) {
                            if (i)for (l = n.previousSibling; l && 3 == l.nodeType; l = l.previousSibling)a += l.nodeValue.length;
                            s.push(a)
                        } else c = n.childNodes, a >= c.length && c.length && (u = 1, a = Math.max(0, c.length - 1)), s.push(r.nodeIndex(c[a], i) + u);
                        for (; n && n != o; n = n.parentNode)s.push(r.nodeIndex(n, i));
                        return s
                    }

                    var t = n.getRng(!0), o = r.getRoot(), a = {};
                    return a.start = e(t, !0), n.isCollapsed() || (a.end = e(t)), a
                }

                var l, c, u, d, f, p, m = "&#xFEFF;", h;
                if (2 == e)return p = n.getNode(), f = p ? p.nodeName : null, "IMG" == f ? {
                    name: f,
                    index: o(f, p)
                } : n.tridentSel ? n.tridentSel.getBookmark(e) : s();
                if (e)return {rng: n.getRng()};
                if (l = n.getRng(), u = r.uniqueId(), d = n.isCollapsed(), h = "overflow:hidden;line-height:0px", l.duplicate || l.item) {
                    if (l.item)return p = l.item(0), f = p.nodeName, {name: f, index: o(f, p)};
                    c = l.duplicate();
                    try {
                        l.collapse(), l.pasteHTML('<span data-mce-type="bookmark" id="' + u + '_start" style="' + h + '">' + m + "</span>"), d || (c.collapse(!1), l.moveToElementText(c.parentElement()), 0 === l.compareEndPoints("StartToEnd", c) && c.move("character", -1), c.pasteHTML('<span data-mce-type="bookmark" id="' + u + '_end" style="' + h + '">' + m + "</span>"))
                    } catch (g) {
                        return null
                    }
                } else {
                    if (p = n.getNode(), f = p.nodeName, "IMG" == f)return {name: f, index: o(f, p)};
                    c = a(l.cloneRange()), d || (c.collapse(!1), c.insertNode(r.create("span", {
                        "data-mce-type": "bookmark",
                        id: u + "_end",
                        style: h
                    }, m))), l = a(l), l.collapse(!0), l.insertNode(r.create("span", {
                        "data-mce-type": "bookmark",
                        id: u + "_start",
                        style: h
                    }, m))
                }
                return n.moveToBookmark({id: u, keep: 1}), {id: u}
            }, this.moveToBookmark = function (i) {
                function o(e) {
                    var t = i[e ? "start" : "end"], n, r, o, a;
                    if (t) {
                        for (o = t[0], r = c, n = t.length - 1; n >= 1; n--) {
                            if (a = r.childNodes, t[n] > a.length - 1)return;
                            r = a[t[n]]
                        }
                        3 === r.nodeType && (o = Math.min(t[0], r.nodeValue.length)), 1 === r.nodeType && (o = Math.min(t[0], r.childNodes.length)), e ? l.setStart(r, o) : l.setEnd(r, o)
                    }
                    return !0
                }

                function a(n) {
                    var o = r.get(i.id + "_" + n), a, s, l, c, m = i.keep;
                    if (o && (a = o.parentNode, "start" == n ? (m ? (a = o.firstChild, s = 1) : s = r.nodeIndex(o), u = d = a, f = p = s) : (m ? (a = o.firstChild, s = 1) : s = r.nodeIndex(o), d = a, p = s), !m)) {
                        for (c = o.previousSibling, l = o.nextSibling, t.each(t.grep(o.childNodes), function (e) {
                            3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""))
                        }); o = r.get(i.id + "_" + n);)r.remove(o, 1);
                        c && l && c.nodeType == l.nodeType && 3 == c.nodeType && !e.opera && (s = c.nodeValue.length, c.appendData(l.nodeValue), r.remove(l), "start" == n ? (u = d = c, f = p = s) : (d = c, p = s))
                    }
                }

                function s(t) {
                    return !r.isBlock(t) || t.innerHTML || e.ie || (t.innerHTML = '<br data-mce-bogus="1" />'), t
                }

                var l, c, u, d, f, p;
                if (i)if (i.start) {
                    if (l = r.createRng(), c = r.getRoot(), n.tridentSel)return n.tridentSel.moveToBookmark(i);
                    o(!0) && o() && n.setRng(l)
                } else i.id ? (a("start"), a("end"), u && (l = r.createRng(), l.setStart(s(u), f), l.setEnd(s(d), p), n.setRng(l))) : i.name ? n.select(r.select(i.name)[i.index]) : i.rng && n.setRng(i.rng)
            }
        }

        return n.isBookmarkNode = function (e) {
            return e && "SPAN" === e.tagName && "bookmark" === e.getAttribute("data-mce-type")
        }, n
    }), r(L, [f, T, A, B, D, g, p], function (e, n, r, i, o, a, s) {
        function l(e, t, i, a) {
            var s = this;
            s.dom = e, s.win = t, s.serializer = i, s.editor = a, s.bookmarkManager = new o(s), s.controlSelection = new r(s, a), s.win.getSelection || (s.tridentSel = new n(s))
        }

        var c = s.each, u = s.trim, d = a.ie;
        return l.prototype = {
            setCursorLocation: function (e, t) {
                var n = this, r = n.dom.createRng();
                e ? (r.setStart(e, t), r.setEnd(e, t), n.setRng(r), n.collapse(!1)) : (n._moveEndPoint(r, n.editor.getBody(), !0), n.setRng(r))
            }, getContent: function (e) {
                var n = this, r = n.getRng(), i = n.dom.create("body"), o = n.getSel(), a, s, l;
                return e = e || {}, a = s = "", e.get = !0, e.format = e.format || "html", e.selection = !0, n.editor.fire("BeforeGetContent", e), "text" == e.format ? n.isCollapsed() ? "" : r.text || (o.toString ? o.toString() : "") : (r.cloneContents ? (l = r.cloneContents(), l && i.appendChild(l)) : r.item !== t || r.htmlText !== t ? (i.innerHTML = "<br>" + (r.item ? r.item(0).outerHTML : r.htmlText), i.removeChild(i.firstChild)) : i.innerHTML = r.toString(), /^\s/.test(i.innerHTML) && (a = " "), /\s+$/.test(i.innerHTML) && (s = " "), e.getInner = !0, e.content = n.isCollapsed() ? "" : a + n.serializer.serialize(i, e) + s, n.editor.fire("GetContent", e), e.content)
            }, setContent: function (e, t) {
                var n = this, r = n.getRng(), i, o = n.win.document, a, s;
                if (t = t || {format: "html"}, t.set = !0, t.selection = !0, e = t.content = e, t.no_events || n.editor.fire("BeforeSetContent", t), e = t.content, r.insertNode) {
                    e += '<span id="__caret">_</span>', r.startContainer == o && r.endContainer == o ? o.body.innerHTML = e : (r.deleteContents(), 0 === o.body.childNodes.length ? o.body.innerHTML = e : r.createContextualFragment ? r.insertNode(r.createContextualFragment(e)) : (a = o.createDocumentFragment(), s = o.createElement("div"), a.appendChild(s), s.outerHTML = e, r.insertNode(a))), i = n.dom.get("__caret"), r = o.createRange(), r.setStartBefore(i), r.setEndBefore(i), n.setRng(r), n.dom.remove("__caret");
                    try {
                        n.setRng(r)
                    } catch (l) {
                    }
                } else r.item && (o.execCommand("Delete", !1, null), r = n.getRng()), /^\s+/.test(e) ? (r.pasteHTML('<span id="__mce_tmp">_</span>' + e), n.dom.remove("__mce_tmp")) : r.pasteHTML(e);
                t.no_events || n.editor.fire("SetContent", t)
            }, getStart: function () {
                var e = this, t = e.getRng(), n, r, i, o;
                if (t.duplicate || t.item) {
                    if (t.item)return t.item(0);
                    for (i = t.duplicate(), i.collapse(1), n = i.parentElement(), n.ownerDocument !== e.dom.doc && (n = e.dom.getRoot()), r = o = t.parentElement(); o = o.parentNode;)if (o == n) {
                        n = r;
                        break
                    }
                    return n
                }
                return n = t.startContainer, 1 == n.nodeType && n.hasChildNodes() && (n = n.childNodes[Math.min(n.childNodes.length - 1, t.startOffset)]), n && 3 == n.nodeType ? n.parentNode : n
            }, getEnd: function () {
                var e = this, t = e.getRng(), n, r;
                return t.duplicate || t.item ? t.item ? t.item(0) : (t = t.duplicate(), t.collapse(0), n = t.parentElement(), n.ownerDocument !== e.dom.doc && (n = e.dom.getRoot()), n && "BODY" == n.nodeName ? n.lastChild || n : n) : (n = t.endContainer, r = t.endOffset, 1 == n.nodeType && n.hasChildNodes() && (n = n.childNodes[r > 0 ? r - 1 : r]), n && 3 == n.nodeType ? n.parentNode : n)
            }, getBookmark: function (e, t) {
                return this.bookmarkManager.getBookmark(e, t)
            }, moveToBookmark: function (e) {
                return this.bookmarkManager.moveToBookmark(e)
            }, select: function (e, t) {
                var n = this, r = n.dom, i = r.createRng(), o;
                if (n.lastFocusBookmark = null, e) {
                    if (!t && n.controlSelection.controlSelect(e))return;
                    o = r.nodeIndex(e), i.setStart(e.parentNode, o), i.setEnd(e.parentNode, o + 1), t && (n._moveEndPoint(i, e, !0), n._moveEndPoint(i, e)), n.setRng(i)
                }
                return e
            }, isCollapsed: function () {
                var e = this, t = e.getRng(), n = e.getSel();
                return !t || t.item ? !1 : t.compareEndPoints ? 0 === t.compareEndPoints("StartToEnd", t) : !n || t.collapsed
            }, collapse: function (e) {
                var t = this, n = t.getRng(), r;
                n.item && (r = n.item(0), n = t.win.document.body.createTextRange(), n.moveToElementText(r)), n.collapse(!!e), t.setRng(n)
            }, getSel: function () {
                var e = this.win;
                return e.getSelection ? e.getSelection() : e.document.selection
            }, getRng: function (e) {
                function t(e, t, n) {
                    try {
                        return t.compareBoundaryPoints(e, n)
                    } catch (r) {
                        return -1
                    }
                }

                var n = this, r, i, o, a = n.win.document, s;
                if (!e && n.lastFocusBookmark) {
                    var l = n.lastFocusBookmark;
                    return l.startContainer ? (i = a.createRange(), i.setStart(l.startContainer, l.startOffset), i.setEnd(l.endContainer, l.endOffset)) : i = l, i
                }
                if (e && n.tridentSel)return n.tridentSel.getRangeAt(0);
                try {
                    (r = n.getSel()) && (i = r.rangeCount > 0 ? r.getRangeAt(0) : r.createRange ? r.createRange() : a.createRange())
                } catch (c) {
                }
                if (d && i && i.setStart && a.selection) {
                    try {
                        s = a.selection.createRange()
                    } catch (c) {
                    }
                    s && s.item && (o = s.item(0), i = a.createRange(), i.setStartBefore(o), i.setEndAfter(o))
                }
                return i || (i = a.createRange ? a.createRange() : a.body.createTextRange()), i.setStart && 9 === i.startContainer.nodeType && i.collapsed && (o = n.dom.getRoot(), i.setStart(o, 0), i.setEnd(o, 0)), n.selectedRange && n.explicitRange && (0 === t(i.START_TO_START, i, n.selectedRange) && 0 === t(i.END_TO_END, i, n.selectedRange) ? i = n.explicitRange : (n.selectedRange = null, n.explicitRange = null)), i
            }, setRng: function (e, t) {
                var n = this, r;
                if (e.select)try {
                    e.select()
                } catch (i) {
                } else if (n.tridentSel) {
                    if (e.cloneRange)try {
                        return void n.tridentSel.addRange(e)
                    } catch (i) {
                    }
                } else if (r = n.getSel()) {
                    n.explicitRange = e;
                    try {
                        r.removeAllRanges(), r.addRange(e)
                    } catch (i) {
                    }
                    t === !1 && r.extend && (r.collapse(e.endContainer, e.endOffset), r.extend(e.startContainer, e.startOffset)), n.selectedRange = r.rangeCount > 0 ? r.getRangeAt(0) : null
                }
            }, setNode: function (e) {
                var t = this;
                return t.setContent(t.dom.getOuterHTML(e)), e
            }, getNode: function () {
                function e(e, t) {
                    for (var n = e; e && 3 === e.nodeType && 0 === e.length;)e = t ? e.nextSibling : e.previousSibling;
                    return e || n
                }

                var t = this, n = t.getRng(), r, i = n.startContainer, o = n.endContainer, a = n.startOffset, s = n.endOffset, l = t.dom.getRoot();
                return n ? n.setStart ? (r = n.commonAncestorContainer, !n.collapsed && (i == o && 2 > s - a && i.hasChildNodes() && (r = i.childNodes[a]), 3 === i.nodeType && 3 === o.nodeType && (i = i.length === a ? e(i.nextSibling, !0) : i.parentNode, o = 0 === s ? e(o.previousSibling, !1) : o.parentNode, i && i === o)) ? i : r && 3 == r.nodeType ? r.parentNode : r) : (r = n.item ? n.item(0) : n.parentElement(), r.ownerDocument !== t.win.document && (r = l), r) : l
            }, getSelectedBlocks: function (t, n) {
                var r = this, i = r.dom, o, a, s = [];
                if (a = i.getRoot(), t = i.getParent(t || r.getStart(), i.isBlock), n = i.getParent(n || r.getEnd(), i.isBlock), t && t != a && s.push(t), t && n && t != n) {
                    o = t;
                    for (var l = new e(t, a); (o = l.next()) && o != n;)i.isBlock(o) && s.push(o)
                }
                return n && t != n && n != a && s.push(n), s
            }, isForward: function () {
                var e = this.dom, t = this.getSel(), n, r;
                return t && t.anchorNode && t.focusNode ? (n = e.createRng(), n.setStart(t.anchorNode, t.anchorOffset), n.collapse(!0), r = e.createRng(), r.setStart(t.focusNode, t.focusOffset), r.collapse(!0), n.compareBoundaryPoints(n.START_TO_START, r) <= 0) : !0
            }, normalize: function () {
                var e = this, t = e.getRng();
                return !d && new i(e.dom).normalize(t) && e.setRng(t, e.isForward()), t
            }, selectorChanged: function (e, t) {
                var n = this, r;
                return n.selectorChangedData || (n.selectorChangedData = {}, r = {}, n.editor.on("NodeChange", function (e) {
                    var t = e.element, i = n.dom, o = i.getParents(t, null, i.getRoot()), a = {};
                    c(n.selectorChangedData, function (e, t) {
                        c(o, function (n) {
                            return i.is(n, t) ? (r[t] || (c(e, function (e) {
                                e(!0, {node: n, selector: t, parents: o})
                            }), r[t] = e), a[t] = e, !1) : void 0
                        })
                    }), c(r, function (e, n) {
                        a[n] || (delete r[n], c(e, function (e) {
                            e(!1, {node: t, selector: n, parents: o})
                        }))
                    })
                })), n.selectorChangedData[e] || (n.selectorChangedData[e] = []), n.selectorChangedData[e].push(t), n
            }, getScrollContainer: function () {
                for (var e, t = this.dom.getRoot(); t && "BODY" != t.nodeName;) {
                    if (t.scrollHeight > t.clientHeight) {
                        e = t;
                        break
                    }
                    t = t.parentNode
                }
                return e
            }, scrollIntoView: function (e) {
                function t(e) {
                    for (var t = 0, n = 0, r = e; r && r.nodeType;)t += r.offsetLeft || 0, n += r.offsetTop || 0, r = r.offsetParent;
                    return {x: t, y: n}
                }

                var n, r, i = this, o = i.dom, a = o.getRoot(), s, l;
                if ("BODY" != a.nodeName) {
                    var c = i.getScrollContainer();
                    if (c)return n = t(e).y - t(c).y, l = c.clientHeight, s = c.scrollTop, void((s > n || n + 25 > s + l) && (c.scrollTop = s > n ? n : n - l + 25))
                }
                r = o.getViewPort(i.editor.getWin()), n = o.getPos(e).y, s = r.y, l = r.h, (n < r.y || n + 25 > s + l) && i.editor.getWin().scrollTo(0, s > n ? n : n - l + 25)
            }, _moveEndPoint: function (t, n, r) {
                var i = n, o = new e(n, i), s = this.dom.schema.getNonEmptyElements();
                do {
                    if (3 == n.nodeType && 0 !== u(n.nodeValue).length)return void(r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length));
                    if (s[n.nodeName])return void(r ? t.setStartBefore(n) : "BR" == n.nodeName ? t.setEndBefore(n) : t.setEndAfter(n));
                    if (a.ie && a.ie < 11 && this.dom.isBlock(n) && this.dom.isEmpty(n))return void(r ? t.setStart(n, 0) : t.setEnd(n, 0))
                } while (n = r ? o.next() : o.prev());
                "BODY" == i.nodeName && (r ? t.setStart(i, 0) : t.setEnd(i, i.childNodes.length))
            }, destroy: function () {
                this.win = null, this.controlSelection.destroy()
            }
        }, l
    }), r(M, [D, p], function (e, t) {
        function n(t) {
            this.compare = function (n, i) {
                function o(e) {
                    var n = {};
                    return r(t.getAttribs(e), function (r) {
                        var i = r.nodeName.toLowerCase();
                        0 !== i.indexOf("_") && "style" !== i && "data-mce-style" !== i && (n[i] = t.getAttrib(e, i))
                    }), n
                }

                function a(e, t) {
                    var n, r;
                    for (r in e)if (e.hasOwnProperty(r)) {
                        if (n = t[r], "undefined" == typeof n)return !1;
                        if (e[r] != n)return !1;
                        delete t[r]
                    }
                    for (r in t)if (t.hasOwnProperty(r))return !1;
                    return !0
                }

                return n.nodeName != i.nodeName ? !1 : a(o(n), o(i)) && a(t.parseStyle(t.getAttrib(n, "style")), t.parseStyle(t.getAttrib(i, "style"))) ? !e.isBookmarkNode(n) && !e.isBookmarkNode(i) : !1
            }
        }

        var r = t.each;
        return n
    }), r(H, [p], function (e) {
        function t(e, t) {
            function r(e) {
                return e.replace(/%(\w+)/g, "")
            }

            var i, o, a = e.dom, s = "", l, c;
            if (c = e.settings.preview_styles, c === !1)return "";
            if (c || (c = "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"), "string" == typeof t) {
                if (t = e.formatter.get(t), !t)return;
                t = t[0]
            }
            return i = t.block || t.inline || "span", o = a.create(i), n(t.styles, function (e, t) {
                e = r(e), e && a.setStyle(o, t, e)
            }), n(t.attributes, function (e, t) {
                e = r(e), e && a.setAttrib(o, t, e)
            }), n(t.classes, function (e) {
                e = r(e), a.hasClass(o, e) || a.addClass(o, e)
            }), e.fire("PreviewFormats"), a.setStyles(o, {
                position: "absolute",
                left: -65535
            }), e.getBody().appendChild(o), l = a.getStyle(e.getBody(), "fontSize", !0), l = /px$/.test(l) ? parseInt(l, 10) : 0, n(c.split(" "), function (t) {
                var n = a.getStyle(o, t, !0);
                if (!("background-color" == t && /transparent|rgba\s*\([^)]+,\s*0\)/.test(n) && (n = a.getStyle(e.getBody(), t, !0), "#ffffff" == a.toHex(n).toLowerCase()) || "color" == t && "#000000" == a.toHex(n).toLowerCase())) {
                    if ("font-size" == t && /em|%$/.test(n)) {
                        if (0 === l)return;
                        n = parseFloat(n, 10) / (/%$/.test(n) ? 100 : 1), n = n * l + "px"
                    }
                    "border" == t && n && (s += "padding:0 2px;"), s += t + ":" + n + ";"
                }
            }), e.fire("AfterPreviewFormats"), a.remove(o), s
        }

        var n = e.each;
        return {getCssText: t}
    }), r(P, [f, B, D, M, p, H], function (e, t, n, r, i, o) {
        return function (a) {
            function s(e) {
                return e.nodeType && (e = e.nodeName), !!a.schema.getTextBlockElements()[e.toLowerCase()]
            }

            function l(e, t) {
                return W.getParents(e, t, W.getRoot())
            }

            function c(e) {
                return 1 === e.nodeType && "_mce_caret" === e.id
            }

            function u() {
                p({
                    valigntop: [{selector: "td,th", styles: {verticalAlign: "top"}}],
                    valignmiddle: [{selector: "td,th", styles: {verticalAlign: "middle"}}],
                    valignbottom: [{selector: "td,th", styles: {verticalAlign: "bottom"}}],
                    alignleft: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {textAlign: "left"},
                        defaultBlock: "div"
                    }, {selector: "img,table", collapsed: !1, styles: {"float": "left"}}],
                    aligncenter: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {textAlign: "center"},
                        defaultBlock: "div"
                    }, {
                        selector: "img",
                        collapsed: !1,
                        styles: {display: "block", marginLeft: "auto", marginRight: "auto"}
                    }, {selector: "table", collapsed: !1, styles: {marginLeft: "auto", marginRight: "auto"}}],
                    alignright: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {textAlign: "right"},
                        defaultBlock: "div"
                    }, {selector: "img,table", collapsed: !1, styles: {"float": "right"}}],
                    alignjustify: [{
                        selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                        styles: {textAlign: "justify"},
                        defaultBlock: "div"
                    }],
                    bold: [{inline: "strong", remove: "all"}, {
                        inline: "span",
                        styles: {fontWeight: "bold"}
                    }, {inline: "b", remove: "all"}],
                    italic: [{inline: "em", remove: "all"}, {
                        inline: "span",
                        styles: {fontStyle: "italic"}
                    }, {inline: "i", remove: "all"}],
                    underline: [{inline: "span", styles: {textDecoration: "underline"}, exact: !0}, {
                        inline: "u",
                        remove: "all"
                    }],
                    strikethrough: [{
                        inline: "span",
                        styles: {textDecoration: "line-through"},
                        exact: !0
                    }, {inline: "strike", remove: "all"}],
                    forecolor: {inline: "span", styles: {color: "%value"}, wrap_links: !1},
                    hilitecolor: {inline: "span", styles: {backgroundColor: "%value"}, wrap_links: !1},
                    fontname: {inline: "span", styles: {fontFamily: "%value"}},
                    fontsize: {inline: "span", styles: {fontSize: "%value"}},
                    fontsize_class: {inline: "span", attributes: {"class": "%value"}},
                    blockquote: {block: "blockquote", wrapper: 1, remove: "all"},
                    subscript: {inline: "sub"},
                    superscript: {inline: "sup"},
                    code: {inline: "code"},
                    link: {
                        inline: "a", selector: "a", remove: "all", split: !0, deep: !0, onmatch: function () {
                            return !0
                        }, onformat: function (e, t, n) {
                            it(n, function (t, n) {
                                W.setAttrib(e, n, t)
                            })
                        }
                    },
                    removeformat: [{
                        selector: "b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q",
                        remove: "all",
                        split: !0,
                        expand: !1,
                        block_expand: !0,
                        deep: !0
                    }, {
                        selector: "span",
                        attributes: ["style", "class"],
                        remove: "empty",
                        split: !0,
                        expand: !1,
                        deep: !0
                    }, {selector: "*", attributes: ["style", "class"], split: !1, expand: !1, deep: !0}]
                }), it("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/), function (e) {
                    p(e, {block: e, remove: "all"})
                }), p(a.settings.formats)
            }

            function d() {
                a.addShortcut("ctrl+b", "bold_desc", "Bold"), a.addShortcut("ctrl+i", "italic_desc", "Italic"), a.addShortcut("ctrl+u", "underline_desc", "Underline");
                for (var e = 1; 6 >= e; e++)a.addShortcut("ctrl+" + e, "", ["FormatBlock", !1, "h" + e]);
                a.addShortcut("ctrl+7", "", ["FormatBlock", !1, "p"]), a.addShortcut("ctrl+8", "", ["FormatBlock", !1, "div"]), a.addShortcut("ctrl+9", "", ["FormatBlock", !1, "address"])
            }

            function f(e) {
                return e ? z[e] : z
            }

            function p(e, t) {
                e && ("string" != typeof e ? it(e, function (e, t) {
                    p(t, e)
                }) : (t = t.length ? t : [t], it(t, function (e) {
                    e.deep === Z && (e.deep = !e.selector), e.split === Z && (e.split = !e.selector || e.inline), e.remove === Z && e.selector && !e.inline && (e.remove = "none"), e.selector && e.inline && (e.mixed = !0, e.block_expand = !0), "string" == typeof e.classes && (e.classes = e.classes.split(/\s+/))
                }), z[e] = t))
            }

            function m(e) {
                var t;
                return a.dom.getParent(e, function (e) {
                    return t = a.dom.getStyle(e, "text-decoration"), t && "none" !== t
                }), t
            }

            function h(e) {
                var t;
                1 === e.nodeType && e.parentNode && 1 === e.parentNode.nodeType && (t = m(e.parentNode), a.dom.getStyle(e, "color") && t ? a.dom.setStyle(e, "text-decoration", t) : a.dom.getStyle(e, "textdecoration") === t && a.dom.setStyle(e, "text-decoration", null))
            }

            function g(t, n, r) {
                function i(e, t) {
                    if (t = t || p, e) {
                        if (t.onformat && t.onformat(e, t, n, r), it(t.styles, function (t, r) {
                                W.setStyle(e, r, R(t, n))
                            }), t.styles) {
                            var i = W.getAttrib(e, "style");
                            i && e.setAttribute("data-mce-style", i)
                        }
                        it(t.attributes, function (t, r) {
                            W.setAttrib(e, r, R(t, n))
                        }), it(t.classes, function (t) {
                            t = R(t, n), W.hasClass(e, t) || W.addClass(e, t)
                        })
                    }
                }

                function o() {
                    function t(t, n) {
                        var i = new e(n);
                        for (r = i.current(); r; r = i.prev())if (r.childNodes.length > 1 || r == t || "BR" == r.tagName)return r
                    }

                    var n = a.selection.getRng(), i = n.startContainer, o = n.endContainer;
                    if (i != o && 0 === n.endOffset) {
                        var s = t(i, o), l = 3 == s.nodeType ? s.length : s.childNodes.length;
                        n.setEnd(s, l)
                    }
                    return n
                }

                function l(e, t, n, r, i) {
                    var o = [], a = -1, s, l = -1, c = -1, u;
                    return it(e.childNodes, function (e, t) {
                        return "UL" === e.nodeName || "OL" === e.nodeName ? (a = t, s = e, !1) : void 0
                    }), it(e.childNodes, function (e, n) {
                        rt(e) && (e.id == t.id + "_start" ? l = n : e.id == t.id + "_end" && (c = n))
                    }), 0 >= a || a > l && c > a ? (it(ot(e.childNodes), i), 0) : (u = W.clone(n, X), it(ot(e.childNodes), function (e, t) {
                        (a > l && a > t || l > a && t > a) && (o.push(e), e.parentNode.removeChild(e))
                    }), a > l ? e.insertBefore(u, s) : l > a && e.insertBefore(u, s.nextSibling), r.push(u), it(o, function (e) {
                        u.appendChild(e)
                    }), u)
                }

                function u(e, r, o) {
                    var a = [], u, f, m = !0;
                    u = p.inline || p.block, f = W.create(u), i(f), U.walk(e, function (e) {
                        function h(e) {
                            var v, C, x, w, _;
                            return _ = m, v = e.nodeName.toLowerCase(), C = e.parentNode.nodeName.toLowerCase(), 1 === e.nodeType && et(e) && (_ = m, m = "true" === et(e), w = !0), k(v, "br") ? (g = 0, void(p.block && W.remove(e))) : p.wrapper && b(e, t, n) ? void(g = 0) : m && !w && p.block && !p.wrapper && s(v) && q(C, u) ? (e = W.rename(e, u), i(e), a.push(e), void(g = 0)) : p.selector && (it(d, function (t) {
                                "collapsed" in t && t.collapsed !== y || W.is(e, t.selector) && !c(e) && (i(e, t), x = !0)
                            }), !p.inline || x) ? void(g = 0) : void(!m || w || !q(u, v) || !q(C, u) || !o && 3 === e.nodeType && 1 === e.nodeValue.length && 65279 === e.nodeValue.charCodeAt(0) || c(e) || p.inline && $(e) ? "li" == v && r ? g = l(e, r, f, a, h) : (g = 0, it(ot(e.childNodes), h), w && (m = _), g = 0) : (g || (g = W.clone(f, X), e.parentNode.insertBefore(g, e), a.push(g)), g.appendChild(e)))
                        }

                        var g;
                        it(e, h)
                    }), p.wrap_links === !1 && it(a, function (e) {
                        function t(e) {
                            var n, r, i;
                            if ("A" === e.nodeName) {
                                for (r = W.clone(f, X), a.push(r), i = ot(e.childNodes), n = 0; n < i.length; n++)r.appendChild(i[n]);
                                e.appendChild(r)
                            }
                            it(ot(e.childNodes), t)
                        }

                        t(e)
                    }), it(a, function (e) {
                        function r(e) {
                            var t = 0;
                            return it(e.childNodes, function (e) {
                                A(e) || rt(e) || t++
                            }), t
                        }

                        function o(e) {
                            var t, n;
                            return it(e.childNodes, function (e) {
                                return 1 != e.nodeType || rt(e) || c(e) ? void 0 : (t = e, X)
                            }), t && !rt(t) && E(t, p) && (n = W.clone(t, X), i(n), W.replace(n, e, J), W.remove(t, 1)), n || e
                        }

                        var s;
                        if (s = r(e), (a.length > 1 || !$(e)) && 0 === s)return void W.remove(e, 1);
                        if (p.inline || p.wrapper) {
                            if (p.exact || 1 !== s || (e = o(e)), it(d, function (t) {
                                    it(W.select(t.inline, e), function (e) {
                                        var r;
                                        if (!rt(e)) {
                                            if (t.wrap_links === !1) {
                                                r = e.parentNode;
                                                do if ("A" === r.nodeName)return; while (r = r.parentNode)
                                            }
                                            L(t, n, e, t.exact ? e : null)
                                        }
                                    })
                                }), b(e.parentNode, t, n))return W.remove(e, 1), e = 0, J;
                            p.merge_with_parents && W.getParent(e.parentNode, function (r) {
                                return b(r, t, n) ? (W.remove(e, 1), e = 0, J) : void 0
                            }), e && p.merge_siblings !== !1 && (e = P(H(e), e), e = P(e, H(e, J)))
                        }
                    })
                }

                var d = f(t), p = d[0], m, v, y = !r && V.isCollapsed();
                if (p)if (r)r.nodeType ? (v = W.createRng(), v.setStartBefore(r), v.setEndAfter(r), u(D(v, d), null, !0)) : u(r, null, !0); else if (y && p.inline && !W.select("td.mce-item-selected,th.mce-item-selected").length)I("apply", t, n); else {
                    var C = a.selection.getNode();
                    j || !d[0].defaultBlock || W.getParent(C, W.isBlock) || g(d[0].defaultBlock), a.selection.setRng(o()), m = V.getBookmark(), u(D(V.getRng(J), d), m), p.styles && (p.styles.color || p.styles.textDecoration) && (at(C, h, "childNodes"), h(C)), V.moveToBookmark(m), F(V.getRng(J)), a.nodeChanged()
                }
            }

            function v(e, t, n) {
                function r(e) {
                    var n, i, o, a, s;
                    if (1 === e.nodeType && et(e) && (a = v, v = "true" === et(e), s = !0), n = ot(e.childNodes), v && !s)for (i = 0, o = d.length; o > i && !L(d[i], t, e, e); i++);
                    if (p.deep && n.length) {
                        for (i = 0, o = n.length; o > i; i++)r(n[i]);
                        s && (v = a)
                    }
                }

                function i(n) {
                    var r;
                    return it(l(n.parentNode).reverse(), function (n) {
                        var i;
                        r || "_start" == n.id || "_end" == n.id || (i = b(n, e, t), i && i.split !== !1 && (r = n))
                    }), r
                }

                function o(e, n, r, i) {
                    var o, a, s, l, c, u;
                    if (e) {
                        for (u = e.parentNode, o = n.parentNode; o && o != u; o = o.parentNode) {
                            for (a = W.clone(o, X), c = 0; c < d.length; c++)if (L(d[c], t, a, a)) {
                                a = 0;
                                break
                            }
                            a && (s && a.appendChild(s), l || (l = a), s = a)
                        }
                        !i || p.mixed && $(e) || (n = W.split(e, n)), s && (r.parentNode.insertBefore(s, r), l.appendChild(r))
                    }
                    return n
                }

                function s(e) {
                    return o(i(e), e, e, !0)
                }

                function c(e) {
                    var t = W.get(e ? "_start" : "_end"), n = t[e ? "firstChild" : "lastChild"];
                    return rt(n) && (n = n[e ? "firstChild" : "lastChild"]), W.remove(t, !0), n
                }

                function u(e) {
                    var t, n, i = e.commonAncestorContainer;
                    e = D(e, d, J), p.split && (t = O(e, J), n = O(e), t != n ? (/^(TR|TH|TD)$/.test(t.nodeName) && t.firstChild && (t = "TR" == t.nodeName ? t.firstChild.firstChild || t : t.firstChild || t), i && /^T(HEAD|BODY|FOOT|R)$/.test(i.nodeName) && /^(TH|TD)$/.test(n.nodeName) && n.firstChild && (n = n.firstChild || n), t = B(t, "span", {
                        id: "_start",
                        "data-mce-type": "bookmark"
                    }), n = B(n, "span", {
                        id: "_end",
                        "data-mce-type": "bookmark"
                    }), s(t), s(n), t = c(J), n = c()) : t = n = s(t), e.startContainer = t.parentNode, e.startOffset = K(t), e.endContainer = n.parentNode, e.endOffset = K(n) + 1), U.walk(e, function (e) {
                        it(e, function (e) {
                            r(e), 1 === e.nodeType && "underline" === a.dom.getStyle(e, "text-decoration") && e.parentNode && "underline" === m(e.parentNode) && L({
                                deep: !1,
                                exact: !0,
                                inline: "span",
                                styles: {textDecoration: "underline"}
                            }, null, e)
                        })
                    })
                }

                var d = f(e), p = d[0], h, g, v = !0;
                return n ? void(n.nodeType ? (g = W.createRng(), g.setStartBefore(n), g.setEndAfter(n), u(g)) : u(n)) : void(V.isCollapsed() && p.inline && !W.select("td.mce-item-selected,th.mce-item-selected").length ? I("remove", e, t) : (h = V.getBookmark(), u(V.getRng(J)), V.moveToBookmark(h), p.inline && C(e, t, V.getStart()) && F(V.getRng(!0)), a.nodeChanged()))
            }

            function y(e, t, n) {
                var r = f(e);
                !C(e, t, n) || "toggle" in r[0] && !r[0].toggle ? g(e, t, n) : v(e, t, n)
            }

            function b(e, t, n, r) {
                function i(e, t, i) {
                    var o, a, s = t[i], l;
                    if (t.onmatch)return t.onmatch(e, t, i);
                    if (s)if (s.length === Z) {
                        for (o in s)if (s.hasOwnProperty(o)) {
                            if (a = "attributes" === i ? W.getAttrib(e, o) : S(e, o), r && !a && !t.exact)return;
                            if ((!r || t.exact) && !k(a, T(R(s[o], n), o)))return
                        }
                    } else for (l = 0; l < s.length; l++)if ("attributes" === i ? W.getAttrib(e, s[l]) : S(e, s[l]))return t;
                    return t
                }

                var o = f(t), a, s, l;
                if (o && e)for (s = 0; s < o.length; s++)if (a = o[s], E(e, a) && i(e, a, "attributes") && i(e, a, "styles")) {
                    if (l = a.classes)for (s = 0; s < l.length; s++)if (!W.hasClass(e, l[s]))return;
                    return a
                }
            }

            function C(e, t, n) {
                function r(n) {
                    var r = W.getRoot();
                    return n === r ? !1 : (n = W.getParent(n, function (n) {
                        return n.parentNode === r || !!b(n, e, t, !0)
                    }), b(n, e, t))
                }

                var i;
                return n ? r(n) : (n = V.getNode(), r(n) ? J : (i = V.getStart(), i != n && r(i) ? J : X))
            }

            function x(e, t) {
                var n, r = [], i = {};
                return n = V.getStart(), W.getParent(n, function (n) {
                    var o, a;
                    for (o = 0; o < e.length; o++)a = e[o], !i[a] && b(n, a, t) && (i[a] = !0, r.push(a))
                }, W.getRoot()), r
            }

            function w(e) {
                var t = f(e), n, r, i, o, a;
                if (t)for (n = V.getStart(), r = l(n), o = t.length - 1; o >= 0; o--) {
                    if (a = t[o].selector, !a || t[o].defaultBlock)return J;
                    for (i = r.length - 1; i >= 0; i--)if (W.is(r[i], a))return J
                }
                return X
            }

            function _(e, t, n) {
                var r;
                return Q || (Q = {}, r = {}, a.on("NodeChange", function (e) {
                    var t = l(e.element), n = {};
                    it(Q, function (e, i) {
                        it(t, function (o) {
                            return b(o, i, {}, e.similar) ? (r[i] || (it(e, function (e) {
                                e(!0, {node: o, format: i, parents: t})
                            }), r[i] = e), n[i] = e, !1) : void 0
                        })
                    }), it(r, function (i, o) {
                        n[o] || (delete r[o], it(i, function (n) {
                            n(!1, {node: e.element, format: o, parents: t})
                        }))
                    })
                })), it(e.split(","), function (e) {
                    Q[e] || (Q[e] = [], Q[e].similar = n), Q[e].push(t)
                }), this
            }

            function N(e) {
                return o.getCssText(a, e)
            }

            function E(e, t) {
                return k(e, t.inline) ? J : k(e, t.block) ? J : t.selector ? 1 == e.nodeType && W.is(e, t.selector) : void 0
            }

            function k(e, t) {
                return e = e || "", t = t || "", e = "" + (e.nodeName || e), t = "" + (t.nodeName || t), e.toLowerCase() == t.toLowerCase()
            }

            function S(e, t) {
                return T(W.getStyle(e, t), t)
            }

            function T(e, t) {
                return ("color" == t || "backgroundColor" == t) && (e = W.toHex(e)), "fontWeight" == t && 700 == e && (e = "bold"), "fontFamily" == t && (e = e.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")), "" + e
            }

            function R(e, t) {
                return "string" != typeof e ? e = e(t) : t && (e = e.replace(/%(\w+)/g, function (e, n) {
                    return t[n] || e
                })), e
            }

            function A(e) {
                return e && 3 === e.nodeType && /^([\t \r\n]+|)$/.test(e.nodeValue)
            }

            function B(e, t, n) {
                var r = W.create(t, n);
                return e.parentNode.insertBefore(r, e), r.appendChild(e), r
            }

            function D(t, n, r) {
                function i(e) {
                    function t(e) {
                        return "BR" == e.nodeName && e.getAttribute("data-mce-bogus") && !e.nextSibling
                    }

                    var r, i, o, a, s;
                    if (r = i = e ? g : y, a = e ? "previousSibling" : "nextSibling", s = W.getRoot(), 3 == r.nodeType && !A(r) && (e ? v > 0 : b < r.nodeValue.length))return r;
                    for (; ;) {
                        if (!n[0].block_expand && $(i))return i;
                        for (o = i[a]; o; o = o[a])if (!rt(o) && !A(o) && !t(o))return i;
                        if (i.parentNode == s) {
                            r = i;
                            break
                        }
                        i = i.parentNode
                    }
                    return r
                }

                function o(e, t) {
                    for (t === Z && (t = 3 === e.nodeType ? e.length : e.childNodes.length); e && e.hasChildNodes();)e = e.childNodes[t], e && (t = 3 === e.nodeType ? e.length : e.childNodes.length);
                    return {node: e, offset: t}
                }

                function c(e) {
                    for (var t = e; t;) {
                        if (1 === t.nodeType && et(t))return "false" === et(t) ? t : e;
                        t = t.parentNode
                    }
                    return e
                }

                function u(t, n, i) {
                    function o(e, t) {
                        var n, o, a = e.nodeValue;
                        return "undefined" == typeof t && (t = i ? a.length : 0), i ? (n = a.lastIndexOf(" ", t), o = a.lastIndexOf("\xa0", t), n = n > o ? n : o, -1 === n || r || n++) : (n = a.indexOf(" ", t), o = a.indexOf("\xa0", t), n = -1 !== n && (-1 === o || o > n) ? n : o), n
                    }

                    var s, l, c, u;
                    if (3 === t.nodeType) {
                        if (c = o(t, n), -1 !== c)return {container: t, offset: c};
                        u = t
                    }
                    for (s = new e(t, W.getParent(t, $) || a.getBody()); l = s[i ? "prev" : "next"]();)if (3 === l.nodeType) {
                        if (u = l, c = o(l), -1 !== c)return {container: l, offset: c}
                    } else if ($(l))break;
                    return u ? (n = i ? 0 : u.length, {container: u, offset: n}) : void 0
                }

                function d(e, r) {
                    var i, o, a, s;
                    for (3 == e.nodeType && 0 === e.nodeValue.length && e[r] && (e = e[r]), i = l(e), o = 0; o < i.length; o++)for (a = 0; a < n.length; a++)if (s = n[a], !("collapsed" in s && s.collapsed !== t.collapsed) && W.is(i[o], s.selector))return i[o];
                    return e
                }

                function f(e, t) {
                    var r, i = W.getRoot();
                    if (n[0].wrapper || (r = W.getParent(e, n[0].block, i)), r || (r = W.getParent(3 == e.nodeType ? e.parentNode : e, function (e) {
                            return e != i && s(e)
                        })), r && n[0].wrapper && (r = l(r, "ul,ol").reverse()[0] || r), !r)for (r = e; r[t] && !$(r[t]) && (r = r[t], !k(r, "br")););
                    return r || e
                }

                var p, m, h, g = t.startContainer, v = t.startOffset, y = t.endContainer, b = t.endOffset;
                if (1 == g.nodeType && g.hasChildNodes() && (p = g.childNodes.length - 1, g = g.childNodes[v > p ? p : v], 3 == g.nodeType && (v = 0)), 1 == y.nodeType && y.hasChildNodes() && (p = y.childNodes.length - 1, y = y.childNodes[b > p ? p : b - 1], 3 == y.nodeType && (b = y.nodeValue.length)), g = c(g), y = c(y), (rt(g.parentNode) || rt(g)) && (g = rt(g) ? g : g.parentNode, g = g.nextSibling || g, 3 == g.nodeType && (v = 0)), (rt(y.parentNode) || rt(y)) && (y = rt(y) ? y : y.parentNode, y = y.previousSibling || y, 3 == y.nodeType && (b = y.length)), n[0].inline && (t.collapsed && (h = u(g, v, !0), h && (g = h.container, v = h.offset), h = u(y, b), h && (y = h.container, b = h.offset)), m = o(y, b), m.node)) {
                    for (; m.node && 0 === m.offset && m.node.previousSibling;)m = o(m.node.previousSibling);
                    m.node && m.offset > 0 && 3 === m.node.nodeType && " " === m.node.nodeValue.charAt(m.offset - 1) && m.offset > 1 && (y = m.node, y.splitText(m.offset - 1))
                }
                return (n[0].inline || n[0].block_expand) && (n[0].inline && 3 == g.nodeType && 0 !== v || (g = i(!0)), n[0].inline && 3 == y.nodeType && b !== y.nodeValue.length || (y = i())), n[0].selector && n[0].expand !== X && !n[0].inline && (g = d(g, "previousSibling"), y = d(y, "nextSibling")), (n[0].block || n[0].selector) && (g = f(g, "previousSibling"), y = f(y, "nextSibling"), n[0].block && ($(g) || (g = i(!0)), $(y) || (y = i()))), 1 == g.nodeType && (v = K(g), g = g.parentNode), 1 == y.nodeType && (b = K(y) + 1, y = y.parentNode), {
                    startContainer: g,
                    startOffset: v,
                    endContainer: y,
                    endOffset: b
                }
            }

            function L(e, t, n, r) {
                var i, o, a;
                if (!E(n, e))return X;
                if ("all" != e.remove)for (it(e.styles, function (e, i) {
                    e = T(R(e, t), i), "number" == typeof i && (i = e, r = 0), (!r || k(S(r, i), e)) && W.setStyle(n, i, ""), a = 1
                }), a && "" === W.getAttrib(n, "style") && (n.removeAttribute("style"), n.removeAttribute("data-mce-style")), it(e.attributes, function (e, i) {
                    var o;
                    if (e = R(e, t), "number" == typeof i && (i = e, r = 0), !r || k(W.getAttrib(r, i), e)) {
                        if ("class" == i && (e = W.getAttrib(n, i), e && (o = "", it(e.split(/\s+/), function (e) {
                                /mce\w+/.test(e) && (o += (o ? " " : "") + e)
                            }), o)))return void W.setAttrib(n, i, o);
                        "class" == i && n.removeAttribute("className"), Y.test(i) && n.removeAttribute("data-mce-" + i), n.removeAttribute(i)
                    }
                }), it(e.classes, function (e) {
                    e = R(e, t), (!r || W.hasClass(r, e)) && W.removeClass(n, e)
                }), o = W.getAttribs(n), i = 0; i < o.length; i++)if (0 !== o[i].nodeName.indexOf("_"))return X;
                return "none" != e.remove ? (M(n, e), J) : void 0
            }

            function M(e, t) {
                function n(e, t, n) {
                    return e = H(e, t, n), !e || "BR" == e.nodeName || $(e)
                }

                var r = e.parentNode, i;
                t.block && (j ? r == W.getRoot() && (t.list_block && k(e, t.list_block) || it(ot(e.childNodes), function (e) {
                    q(j, e.nodeName.toLowerCase()) ? i ? i.appendChild(e) : (i = B(e, j), W.setAttribs(i, a.settings.forced_root_block_attrs)) : i = 0
                })) : $(e) && !$(r) && (n(e, X) || n(e.firstChild, J, 1) || e.insertBefore(W.create("br"), e.firstChild), n(e, J) || n(e.lastChild, X, 1) || e.appendChild(W.create("br")))), t.selector && t.inline && !k(t.inline, e) || W.remove(e, 1)
            }

            function H(e, t, n) {
                if (e)for (t = t ? "nextSibling" : "previousSibling", e = n ? e : e[t]; e; e = e[t])if (1 == e.nodeType || !A(e))return e
            }

            function P(e, t) {
                function n(e, t) {
                    for (i = e; i; i = i[t]) {
                        if (3 == i.nodeType && 0 !== i.nodeValue.length)return e;
                        if (1 == i.nodeType && !rt(i))return i
                    }
                    return e
                }

                var i, o, a = new r(W);
                if (e && t && (e = n(e, "previousSibling"), t = n(t, "nextSibling"), a.compare(e, t))) {
                    for (i = e.nextSibling; i && i != t;)o = i, i = i.nextSibling, e.appendChild(o);
                    return W.remove(t), it(ot(t.childNodes), function (t) {
                        e.appendChild(t)
                    }), e
                }
                return t
            }

            function O(t, n) {
                var r, i, o;
                return r = t[n ? "startContainer" : "endContainer"], i = t[n ? "startOffset" : "endOffset"], 1 == r.nodeType && (o = r.childNodes.length - 1, !n && i && i--, r = r.childNodes[i > o ? o : i]), 3 === r.nodeType && n && i >= r.nodeValue.length && (r = new e(r, a.getBody()).next() || r), 3 !== r.nodeType || n || 0 !== i || (r = new e(r, a.getBody()).prev() || r), r
            }

            function I(t, n, r) {
                function i(e) {
                    var t = W.create("span", {id: h, "data-mce-bogus": !0, style: y ? "color:red" : ""});
                    return e && t.appendChild(a.getDoc().createTextNode(G)), t
                }

                function o(e, t) {
                    for (; e;) {
                        if (3 === e.nodeType && e.nodeValue !== G || e.childNodes.length > 1)return !1;
                        t && 1 === e.nodeType && t.push(e), e = e.firstChild
                    }
                    return !0
                }

                function l(e) {
                    for (; e;) {
                        if (e.id === h)return e;
                        e = e.parentNode
                    }
                }

                function c(t) {
                    var n;
                    if (t)for (n = new e(t, t), t = n.current(); t; t = n.next())if (3 === t.nodeType)return t
                }

                function u(e, t) {
                    var n, r;
                    if (e)r = V.getRng(!0), o(e) ? (t !== !1 && (r.setStartBefore(e), r.setEndBefore(e)), W.remove(e)) : (n = c(e), n.nodeValue.charAt(0) === G && (n = n.deleteData(0, 1)), W.remove(e, 1)), V.setRng(r); else if (e = l(V.getStart()), !e)for (; e = W.get(h);)u(e, !1)
                }

                function d() {
                    var e, t, o, a, s, u, d;
                    e = V.getRng(!0), a = e.startOffset, u = e.startContainer, d = u.nodeValue, t = l(V.getStart()), t && (o = c(t)), d && a > 0 && a < d.length && /\w/.test(d.charAt(a)) && /\w/.test(d.charAt(a - 1)) ? (s = V.getBookmark(), e.collapse(!0), e = D(e, f(n)), e = U.split(e), g(n, r, e), V.moveToBookmark(s)) : (t && o.nodeValue === G ? g(n, r, t) : (t = i(!0), o = t.firstChild, e.insertNode(t), a = 1, g(n, r, t)), V.setCursorLocation(o, a))
                }

                function p() {
                    var e = V.getRng(!0), t, o, a, l, c, u, d = [], p, m;
                    for (t = e.startContainer, o = e.startOffset, c = t, 3 == t.nodeType && (o != t.nodeValue.length && (l = !0), c = c.parentNode); c;) {
                        if (b(c, n, r)) {
                            u = c;
                            break
                        }
                        c.nextSibling && (l = !0), d.push(c), c = c.parentNode
                    }
                    if (u)if (l)a = V.getBookmark(), e.collapse(!0), e = D(e, f(n), !0), e = U.split(e), v(n, r, e), V.moveToBookmark(a); else {
                        for (m = i(), c = m, p = d.length - 1; p >= 0; p--)c.appendChild(W.clone(d[p], !1)), c = c.firstChild;
                        c.appendChild(W.doc.createTextNode(G)), c = c.firstChild;
                        var h = W.getParent(u, s);
                        h && W.isEmpty(h) ? u.parentNode.replaceChild(m, u) : W.insertAfter(m, u), V.setCursorLocation(c, 1), W.isEmpty(u) && W.remove(u)
                    }
                }

                function m() {
                    var e;
                    e = l(V.getStart()), e && !W.isEmpty(e) && at(e, function (e) {
                        1 != e.nodeType || e.id === h || W.isEmpty(e) || W.setAttrib(e, "data-mce-bogus", null)
                    }, "childNodes")
                }

                var h = "_mce_caret", y = a.settings.caret_debug;
                a._hasCaretEvents || (nt = function () {
                    var e = [], t;
                    if (o(l(V.getStart()), e))for (t = e.length; t--;)W.setAttrib(e[t], "data-mce-bogus", "1")
                }, tt = function (e) {
                    var t = e.keyCode;
                    u(), (8 == t || 37 == t || 39 == t) && u(l(V.getStart())), m()
                }, a.on("SetContent", function (e) {
                    e.selection && m()
                }), a._hasCaretEvents = !0), "apply" == t ? d() : p()
            }

            function F(t) {
                var n = t.startContainer, r = t.startOffset, i, o, a, s, l;
                if (3 == n.nodeType && r >= n.nodeValue.length && (r = K(n), n = n.parentNode, i = !0), 1 == n.nodeType)for (s = n.childNodes, n = s[Math.min(r, s.length - 1)], o = new e(n, W.getParent(n, W.isBlock)), (r > s.length - 1 || i) && o.next(), a = o.current(); a; a = o.next())if (3 == a.nodeType && !A(a))return l = W.create("a", null, G), a.parentNode.insertBefore(l, a), t.setStart(a, 0), V.setRng(t), void W.remove(l)
            }

            var z = {}, W = a.dom, V = a.selection, U = new t(W), q = a.schema.isValidChild, $ = W.isBlock, j = a.settings.forced_root_block, K = W.nodeIndex, G = "\ufeff", Y = /^(src|href|style)$/, X = !1, J = !0, Q, Z, et = W.getContentEditable, tt, nt, rt = n.isBookmarkNode, it = i.each, ot = i.grep, at = i.walk, st = i.extend;
            st(this, {
                get: f,
                register: p,
                apply: g,
                remove: v,
                toggle: y,
                match: C,
                matchAll: x,
                matchNode: b,
                canApply: w,
                formatChanged: _,
                getCssText: N
            }), u(), d(), a.on("BeforeGetContent", function () {
                nt && nt()
            }), a.on("mouseup keydown", function (e) {
                tt && tt(e)
            })
        }
    }), r(O, [g, p], function (e, t) {
        var n = t.trim, r;
        return r = new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>", "<div[^>]+data-mce-bogus[^>]+><\\/div>", '\\s?data-mce-selected="[^"]+"'].join("|"), "gi"), function (t) {
            function i() {
                return n(t.getContent({format: "raw", no_events: 1}).replace(r, ""))
            }

            function o(e) {
                a.typing = !1, a.add({}, e)
            }

            var a = this, s = 0, l = [], c, u, d = 0;
            return t.on("init", function () {
                a.add()
            }), t.on("BeforeExecCommand", function (e) {
                var t = e.command;
                "Undo" != t && "Redo" != t && "mceRepaint" != t && a.beforeChange()
            }), t.on("ExecCommand", function (e) {
                var t = e.command;
                "Undo" != t && "Redo" != t && "mceRepaint" != t && o(e)
            }), t.on("ObjectResizeStart", function () {
                a.beforeChange()
            }), t.on("SaveContent ObjectResized blur", o), t.on("DragEnd", o), t.on("KeyUp", function (n) {
                var r = n.keyCode;
                (r >= 33 && 36 >= r || r >= 37 && 40 >= r || 45 == r || 13 == r || n.ctrlKey) && (o(), t.nodeChanged()), (46 == r || 8 == r || e.mac && (91 == r || 93 == r)) && t.nodeChanged(), u && a.typing && (t.isDirty() || (t.isNotDirty = !l[0] || i() == l[0].content, t.isNotDirty || t.fire("change", {
                    level: l[0],
                    lastLevel: null
                })), t.fire("TypingUndo"), u = !1, t.nodeChanged())
            }), t.on("KeyDown", function (e) {
                var t = e.keyCode;
                return t >= 33 && 36 >= t || t >= 37 && 40 >= t || 45 == t ? void(a.typing && o(e)) : void((16 > t || t > 20) && 224 != t && 91 != t && !a.typing && (a.beforeChange(), a.typing = !0, a.add({}, e), u = !0))
            }), t.on("MouseDown", function (e) {
                a.typing && o(e)
            }), t.addShortcut("ctrl+z", "", "Undo"), t.addShortcut("ctrl+y,ctrl+shift+z", "", "Redo"), t.on("AddUndo Undo Redo ClearUndos MouseUp", function (e) {
                e.isDefaultPrevented() || t.nodeChanged()
            }), a = {
                data: l, typing: !1, beforeChange: function () {
                    d || (c = t.selection.getBookmark(2, !0))
                }, add: function (e, n) {
                    var r, o = t.settings, a;
                    if (e = e || {}, e.content = i(), d || t.removed)return null;
                    if (a = l[s], t.fire("BeforeAddUndo", {
                            level: e,
                            lastLevel: a,
                            originalEvent: n
                        }).isDefaultPrevented())return null;
                    if (a && a.content == e.content)return null;
                    if (l[s] && (l[s].beforeBookmark = c), o.custom_undo_redo_levels && l.length > o.custom_undo_redo_levels) {
                        for (r = 0; r < l.length - 1; r++)l[r] = l[r + 1];
                        l.length--, s = l.length
                    }
                    e.bookmark = t.selection.getBookmark(2, !0), s < l.length - 1 && (l.length = s + 1), l.push(e), s = l.length - 1;
                    var u = {level: e, lastLevel: a, originalEvent: n};
                    return t.fire("AddUndo", u), s > 0 && (t.isNotDirty = !1, t.fire("change", u)), e
                }, undo: function () {
                    var e;
                    return a.typing && (a.add(), a.typing = !1), s > 0 && (e = l[--s], 0 === s && (t.isNotDirty = !0), t.setContent(e.content, {format: "raw"}), t.selection.moveToBookmark(e.beforeBookmark), t.fire("undo", {level: e})), e
                }, redo: function () {
                    var e;
                    return s < l.length - 1 && (e = l[++s], t.setContent(e.content, {format: "raw"}), t.selection.moveToBookmark(e.bookmark), t.fire("redo", {level: e})), e
                }, clear: function () {
                    l = [], s = 0, a.typing = !1, t.fire("ClearUndos")
                }, hasUndo: function () {
                    return s > 0 || a.typing && l[0] && i() != l[0].content
                }, hasRedo: function () {
                    return s < l.length - 1 && !this.typing
                }, transact: function (e) {
                    a.beforeChange();
                    try {
                        d++, e()
                    } finally {
                        d--
                    }
                    a.add()
                }
            }
        }
    }), r(I, [f, B, g], function (e, t, n) {
        var r = n.ie && n.ie < 11;
        return function (i) {
            function o(o) {
                function f(e) {
                    return e && a.isBlock(e) && !/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName) && !/^(fixed|absolute)/i.test(e.style.position) && "true" !== a.getContentEditable(e)
                }

                function p(e) {
                    var t;
                    a.isBlock(e) && (t = s.getRng(), e.appendChild(a.create("span", null, "\xa0")), s.select(e), e.lastChild.outerHTML = "", s.setRng(t))
                }

                function m(e) {
                    var t = e, n = [], r;
                    if (t) {
                        for (; t = t.firstChild;) {
                            if (a.isBlock(t))return;
                            1 != t.nodeType || d[t.nodeName.toLowerCase()] || n.push(t)
                        }
                        for (r = n.length; r--;)t = n[r], !t.hasChildNodes() || t.firstChild == t.lastChild && "" === t.firstChild.nodeValue ? a.remove(t) : "A" == t.nodeName && " " === (t.innerText || t.textContent) && a.remove(t)
                    }
                }

                function h(t) {
                    function r(e) {
                        for (; e;) {
                            if (1 == e.nodeType || 3 == e.nodeType && e.data && /[\r\n\s]/.test(e.data))return e;
                            e = e.nextSibling
                        }
                    }

                    var i, o, l, c = t, u;
                    if (t) {
                        if (n.ie && n.ie < 9 && B && B.firstChild && B.firstChild == B.lastChild && "BR" == B.firstChild.tagName && a.remove(B.firstChild), /^(LI|DT|DD)$/.test(t.nodeName)) {
                            var f = r(t.firstChild);
                            f && /^(UL|OL|DL)$/.test(f.nodeName) && t.insertBefore(a.doc.createTextNode("\xa0"), t.firstChild)
                        }
                        if (l = a.createRng(), n.ie || t.normalize(), t.hasChildNodes()) {
                            for (i = new e(t, t); o = i.current();) {
                                if (3 == o.nodeType) {
                                    l.setStart(o, 0), l.setEnd(o, 0);
                                    break
                                }
                                if (d[o.nodeName.toLowerCase()]) {
                                    l.setStartBefore(o), l.setEndBefore(o);
                                    break
                                }
                                c = o, o = i.next()
                            }
                            o || (l.setStart(c, 0), l.setEnd(c, 0))
                        } else"BR" == t.nodeName ? t.nextSibling && a.isBlock(t.nextSibling) ? ((!D || 9 > D) && (u = a.create("br"), t.parentNode.insertBefore(u, t)), l.setStartBefore(t), l.setEndBefore(t)) : (l.setStartAfter(t), l.setEndAfter(t)) : (l.setStart(t, 0), l.setEnd(t, 0));
                        s.setRng(l), a.remove(u), s.scrollIntoView(t)
                    }
                }

                function g(e) {
                    var t = l.forced_root_block;
                    t && t.toLowerCase() === e.tagName.toLowerCase() && a.setAttribs(e, l.forced_root_block_attrs)
                }

                function v(e) {
                    var t = R, n, i, o, s = u.getTextInlineElements();
                    if (e || "TABLE" == O ? (n = a.create(e || F), g(n)) : n = B.cloneNode(!1), o = n, l.keep_styles !== !1)do if (s[t.nodeName]) {
                        if ("_mce_caret" == t.id)continue;
                        i = t.cloneNode(!1), a.setAttrib(i, "id", ""), n.hasChildNodes() ? (i.appendChild(n.firstChild), n.appendChild(i)) : (o = i, n.appendChild(i))
                    } while (t = t.parentNode);
                    return r || (o.innerHTML = '<br data-mce-bogus="1">'), n
                }

                function y(t) {
                    var n, r, i;
                    if (3 == R.nodeType && (t ? A > 0 : A < R.nodeValue.length))return !1;
                    if (R.parentNode == B && z && !t)return !0;
                    if (t && 1 == R.nodeType && R == B.firstChild)return !0;
                    if ("TABLE" === R.nodeName || R.previousSibling && "TABLE" == R.previousSibling.nodeName)return z && !t || !z && t;
                    for (n = new e(R, B), 3 == R.nodeType && (t && 0 === A ? n.prev() : t || A != R.nodeValue.length || n.next()); r = n.current();) {
                        if (1 === r.nodeType) {
                            if (!r.getAttribute("data-mce-bogus") && (i = r.nodeName.toLowerCase(), d[i] && "br" !== i))return !1
                        } else if (3 === r.nodeType && !/^[ \t\r\n]*$/.test(r.nodeValue))return !1;
                        t ? n.prev() : n.next()
                    }
                    return !0
                }

                function b(e, t) {
                    var n, r, o, s, l, c, d = F || "P";
                    if (r = a.getParent(e, a.isBlock), c = i.getBody().nodeName.toLowerCase(), !r || !f(r)) {
                        if (r = r || T, !r.hasChildNodes())return n = a.create(d), g(n), r.appendChild(n), k.setStart(n, 0), k.setEnd(n, 0), n;
                        for (s = e; s.parentNode != r;)s = s.parentNode;
                        for (; s && !a.isBlock(s);)o = s, s = s.previousSibling;
                        if (o && u.isValidChild(c, d.toLowerCase())) {
                            for (n = a.create(d), g(n), o.parentNode.insertBefore(n, o), s = o; s && !a.isBlock(s);)l = s.nextSibling, n.appendChild(s), s = l;
                            k.setStart(e, t), k.setEnd(e, t)
                        }
                    }
                    return e
                }

                function C() {
                    function e(e) {
                        for (var t = P[e ? "firstChild" : "lastChild"]; t && 1 != t.nodeType;)t = t[e ? "nextSibling" : "previousSibling"];
                        return t === B
                    }

                    function t() {
                        var e = P.parentNode;
                        return /^(LI|DT|DD)$/.test(e.nodeName) ? e : P
                    }

                    var n = P.parentNode.nodeName;
                    /^(OL|UL|LI)$/.test(n) && (F = "LI"), M = F ? v(F) : a.create("BR"), e(!0) && e() ? "LI" == n ? a.insertAfter(M, t()) : a.replace(M, P) : e(!0) ? "LI" == n ? (a.insertAfter(M, t()), M.appendChild(a.doc.createTextNode(" ")), M.appendChild(P)) : P.parentNode.insertBefore(M, P) : e() ? (a.insertAfter(M, t()), p(M)) : (P = t(), S = k.cloneRange(), S.setStartAfter(B), S.setEndAfter(P), H = S.extractContents(), "LI" == F && "LI" == H.firstChild.nodeName ? (M = H.firstChild, a.insertAfter(H, P)) : (a.insertAfter(H, P), a.insertAfter(M, P))), a.remove(B), h(M), c.add()
                }

                function x() {
                    for (var t = new e(R, B), n; n = t.next();)if (d[n.nodeName.toLowerCase()] || n.length > 0)return !0
                }

                function w() {
                    var e, t, n;
                    R && 3 == R.nodeType && A >= R.nodeValue.length && (r || x() || (e = a.create("br"), k.insertNode(e), k.setStartAfter(e), k.setEndAfter(e), t = !0)), e = a.create("br"), k.insertNode(e), r && "PRE" == O && (!D || 8 > D) && e.parentNode.insertBefore(a.doc.createTextNode("\r"), e), n = a.create("span", {}, "&nbsp;"), e.parentNode.insertBefore(n, e), s.scrollIntoView(n), a.remove(n), t ? (k.setStartBefore(e), k.setEndBefore(e)) : (k.setStartAfter(e), k.setEndAfter(e)), s.setRng(k), c.add()
                }

                function _(e) {
                    do 3 === e.nodeType && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")), e = e.firstChild; while (e)
                }

                function N(e) {
                    var t = a.getRoot(), n, r;
                    for (n = e; n !== t && "false" !== a.getContentEditable(n);)"true" === a.getContentEditable(n) && (r = n), n = n.parentNode;
                    return n !== t ? r : t
                }

                function E(e) {
                    var t;
                    r || (e.normalize(), t = e.lastChild, (!t || /^(left|right)$/gi.test(a.getStyle(t, "float", !0))) && a.add(e, "br"))
                }

                var k, S, T, R, A, B, D, L, M, H, P, O, I, F, z;
                if (k = s.getRng(!0), !o.isDefaultPrevented()) {
                    if (!k.collapsed)return void i.execCommand("Delete");
                    if (new t(a).normalize(k), R = k.startContainer, A = k.startOffset, F = (l.force_p_newlines ? "p" : "") || l.forced_root_block, F = F ? F.toUpperCase() : "", D = a.doc.documentMode, L = o.shiftKey, 1 == R.nodeType && R.hasChildNodes() && (z = A > R.childNodes.length - 1, R = R.childNodes[Math.min(A, R.childNodes.length - 1)] || R, A = z && 3 == R.nodeType ? R.nodeValue.length : 0), T = N(R)) {
                        if (c.beforeChange(), !a.isBlock(T) && T != a.getRoot())return void((!F || L) && w());
                        if ((F && !L || !F && L) && (R = b(R, A)), B = a.getParent(R, a.isBlock), P = B ? a.getParent(B.parentNode, a.isBlock) : null, O = B ? B.nodeName.toUpperCase() : "", I = P ? P.nodeName.toUpperCase() : "", "LI" != I || o.ctrlKey || (B = P, O = I), /^(LI|DT|DD)$/.test(O)) {
                            if (!F && L)return void w();
                            if (a.isEmpty(B))return void C()
                        }
                        if ("PRE" == O && l.br_in_pre !== !1) {
                            if (!L)return void w()
                        } else if (!F && !L && "LI" != O || F && L)return void w();
                        F && B === i.getBody() || (F = F || "P", y() ? (M = /^(H[1-6]|PRE|FIGURE)$/.test(O) && "HGROUP" != I ? v(F) : v(), l.end_container_on_empty_block && f(P) && a.isEmpty(B) ? M = a.split(P, B) : a.insertAfter(M, B), h(M)) : y(!0) ? (M = B.parentNode.insertBefore(v(), B), p(M), h(B)) : (S = k.cloneRange(), S.setEndAfter(B), H = S.extractContents(), _(H), M = H.firstChild, a.insertAfter(H, B), m(M), E(B), h(M)), a.setAttrib(M, "id", ""), i.fire("NewBlock", {newBlock: M}), c.add())
                    }
                }
            }

            var a = i.dom, s = i.selection, l = i.settings, c = i.undoManager, u = i.schema, d = u.getNonEmptyElements();
            i.on("keydown", function (e) {
                13 == e.keyCode && o(e) !== !1 && e.preventDefault()
            })
        }
    }), r(F, [], function () {
        return function (e) {
            function t() {
                var t = i.getStart(), s = e.getBody(), l, c, u, d, f, p, m, h = -16777215, g, v, y, b, C;
                if (C = n.forced_root_block, t && 1 === t.nodeType && C) {
                    for (; t && t != s;) {
                        if (a[t.nodeName])return;
                        t = t.parentNode
                    }
                    if (l = i.getRng(), l.setStart) {
                        c = l.startContainer, u = l.startOffset, d = l.endContainer, f = l.endOffset;
                        try {
                            v = e.getDoc().activeElement === s
                        } catch (x) {
                        }
                    } else l.item && (t = l.item(0), l = e.getDoc().body.createTextRange(), l.moveToElementText(t)), v = l.parentElement().ownerDocument === e.getDoc(), y = l.duplicate(), y.collapse(!0), u = -1 * y.move("character", h), y.collapsed || (y = l.duplicate(), y.collapse(!1), f = -1 * y.move("character", h) - u);
                    for (t = s.firstChild, b = s.nodeName.toLowerCase(); t;)if ((3 === t.nodeType || 1 == t.nodeType && !a[t.nodeName]) && o.isValidChild(b, C.toLowerCase())) {
                        if (3 === t.nodeType && 0 === t.nodeValue.length) {
                            m = t, t = t.nextSibling, r.remove(m);
                            continue
                        }
                        p || (p = r.create(C, e.settings.forced_root_block_attrs), t.parentNode.insertBefore(p, t), g = !0), m = t, t = t.nextSibling, p.appendChild(m)
                    } else p = null, t = t.nextSibling;
                    if (g && v) {
                        if (l.setStart)l.setStart(c, u), l.setEnd(d, f), i.setRng(l); else try {
                            l = e.getDoc().body.createTextRange(), l.moveToElementText(s), l.collapse(!0), l.moveStart("character", u), f > 0 && l.moveEnd("character", f), l.select()
                        } catch (x) {
                        }
                        e.nodeChanged()
                    }
                }
            }

            var n = e.settings, r = e.dom, i = e.selection, o = e.schema, a = o.getBlockElements();
            n.forced_root_block && e.on("NodeChange", t)
        }
    }), r(z, [k, g, p, M], function (e, n, r, i) {
        var o = r.each, a = r.extend, s = r.map, l = r.inArray, c = r.explode, u = n.gecko, d = n.ie, f = !0, p = !1;
        return function (r) {
            function m(e, t, n) {
                var r;
                return e = e.toLowerCase(), (r = E.exec[e]) ? (r(e, t, n), f) : p
            }

            function h(e) {
                var t;
                return e = e.toLowerCase(), (t = E.state[e]) ? t(e) : -1
            }

            function g(e) {
                var t;
                return e = e.toLowerCase(), (t = E.value[e]) ? t(e) : p
            }

            function v(e, t) {
                t = t || "exec", o(e, function (e, n) {
                    o(n.toLowerCase().split(","), function (n) {
                        E[t][n] = e
                    })
                })
            }

            function y(e, n, i) {
                return n === t && (n = p), i === t && (i = null), r.getDoc().execCommand(e, n, i)
            }

            function b(e) {
                return S.match(e)
            }

            function C(e, n) {
                S.toggle(e, n ? {value: n} : t), r.nodeChanged()
            }

            function x(e) {
                T = N.getBookmark(e)
            }

            function w() {
                N.moveToBookmark(T)
            }

            var _ = r.dom, N = r.selection, E = {state: {}, exec: {}, value: {}}, k = r.settings, S = r.formatter, T;
            a(this, {execCommand: m, queryCommandState: h, queryCommandValue: g, addCommands: v}), v({
                "mceResetDesignMode,mceBeginUndoLevel": function () {
                }, "mceEndUndoLevel,mceAddUndoLevel": function () {
                    r.undoManager.add()
                }, "Cut,Copy,Paste": function (e) {
                    var t = r.getDoc(), i;
                    try {
                        y(e)
                    } catch (o) {
                        i = f
                    }
                    if (i || !t.queryCommandSupported(e)) {
                        var a = r.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");
                        n.mac && (a = a.replace(/Ctrl\+/g, "\u2318+")), r.windowManager.alert(a)
                    }
                }, unlink: function () {
                    if (N.isCollapsed()) {
                        var e = N.getNode();
                        return void("A" == e.tagName && r.dom.remove(e, !0))
                    }
                    S.remove("link")
                }, "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function (e) {
                    var t = e.substring(7);
                    "full" == t && (t = "justify"), o("left,center,right,justify".split(","), function (e) {
                        t != e && S.remove("align" + e)
                    }), C("align" + t), m("mceRepaint")
                }, "InsertUnorderedList,InsertOrderedList": function (e) {
                    var t, n;
                    y(e), t = _.getParent(N.getNode(), "ol,ul"), t && (n = t.parentNode, /^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName) && (x(), _.split(n, t), w()))
                }, "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                    C(e)
                }, "ForeColor,HiliteColor,FontName": function (e, t, n) {
                    C(e, n)
                }, FontSize: function (e, t, n) {
                    var r, i;
                    n >= 1 && 7 >= n && (i = c(k.font_size_style_values), r = c(k.font_size_classes), n = r ? r[n - 1] || n : i[n - 1] || n), C(e, n)
                }, RemoveFormat: function (e) {
                    S.remove(e)
                }, mceBlockQuote: function () {
                    C("blockquote")
                }, FormatBlock: function (e, t, n) {
                    return C(n || "p")
                }, mceCleanup: function () {
                    var e = N.getBookmark();
                    r.setContent(r.getContent({cleanup: f}), {cleanup: f}), N.moveToBookmark(e)
                }, mceRemoveNode: function (e, t, n) {
                    var i = n || N.getNode();
                    i != r.getBody() && (x(), r.dom.remove(i, f), w())
                }, mceSelectNodeDepth: function (e, t, n) {
                    var i = 0;
                    _.getParent(N.getNode(), function (e) {
                        return 1 == e.nodeType && i++ == n ? (N.select(e), p) : void 0
                    }, r.getBody())
                }, mceSelectNode: function (e, t, n) {
                    N.select(n)
                }, mceInsertContent: function (t, n, a) {
                    function s(e) {
                        function t(e) {
                            return r[e] && 3 == r[e].nodeType
                        }

                        var n, r, i;
                        return n = N.getRng(!0), r = n.startContainer, i = n.startOffset, 3 == r.nodeType && (i > 0 ? e = e.replace(/^&nbsp;/, " ") : t("previousSibling") || (e = e.replace(/^ /, "&nbsp;")), i < r.length ? e = e.replace(/&nbsp;(<br>|)$/, " ") : t("nextSibling") || (e = e.replace(/(&nbsp;| )(<br>|)$/, "&nbsp;"))), e
                    }

                    function l(e) {
                        if (w)for (b = e.firstChild; b; b = b.walk(!0))E[b.name] && b.attr("data-mce-new", "true")
                    }

                    function c() {
                        if (w) {
                            var e = r.getBody(), t = new i(_);
                            o(_.select("*[data-mce-new]"), function (n) {
                                n.removeAttribute("data-mce-new");
                                for (var r = n.parentNode; r && r != e; r = r.parentNode)t.compare(r, n) && _.remove(n, !0)
                            })
                        }
                    }

                    var u, f, p, m, h, g, v, y, b, C, x, w, E = r.schema.getTextInlineElements();
                    "string" != typeof a && (w = a.merge, a = a.content), /^ | $/.test(a) && (a = s(a)), u = r.parser, f = new e({}, r.schema), x = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#200B;</span>', g = {
                        content: a,
                        format: "html",
                        selection: !0
                    }, r.fire("BeforeSetContent", g), a = g.content, -1 == a.indexOf("{$caret}") && (a += "{$caret}"), a = a.replace(/\{\$caret\}/, x), y = N.getRng();
                    var k = y.startContainer || (y.parentElement ? y.parentElement() : null), S = r.getBody();
                    k === S && N.isCollapsed() && _.isBlock(S.firstChild) && _.isEmpty(S.firstChild) && (y = _.createRng(), y.setStart(S.firstChild, 0), y.setEnd(S.firstChild, 0), N.setRng(y)), N.isCollapsed() || r.getDoc().execCommand("Delete", !1, null), p = N.getNode();
                    var T = {context: p.nodeName.toLowerCase()};
                    if (h = u.parse(a, T), l(h), b = h.lastChild, "mce_marker" == b.attr("id"))for (v = b, b = b.prev; b; b = b.walk(!0))if (3 == b.type || !_.isBlock(b.name)) {
                        b.parent.insert(v, b, "br" === b.name);
                        break
                    }
                    if (T.invalid) {
                        for (N.setContent(x), p = N.getNode(), m = r.getBody(), 9 == p.nodeType ? p = b = m : b = p; b !== m;)p = b, b = b.parentNode;
                        a = p == m ? m.innerHTML : _.getOuterHTML(p), a = f.serialize(u.parse(a.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i, function () {
                            return f.serialize(h)
                        }))), p == m ? _.setHTML(m, a) : _.setOuterHTML(p, a)
                    } else a = f.serialize(h), b = p.firstChild, C = p.lastChild, !b || b === C && "BR" === b.nodeName ? _.setHTML(p, a) : N.setContent(a);
                    c(), v = _.get("mce_marker"), N.scrollIntoView(v), y = _.createRng(), b = v.previousSibling, b && 3 == b.nodeType ? (y.setStart(b, b.nodeValue.length), d || (C = v.nextSibling, C && 3 == C.nodeType && (b.appendData(C.data), C.parentNode.removeChild(C)))) : (y.setStartBefore(v), y.setEndBefore(v)), _.remove(v), N.setRng(y), r.fire("SetContent", g), r.addVisual()
                }, mceInsertRawHTML: function (e, t, n) {
                    N.setContent("tiny_mce_marker"), r.setContent(r.getContent().replace(/tiny_mce_marker/g, function () {
                        return n
                    }))
                }, mceToggleFormat: function (e, t, n) {
                    C(n)
                }, mceSetContent: function (e, t, n) {
                    r.setContent(n)
                }, "Indent,Outdent": function (e) {
                    var t, n, i;
                    t = k.indentation, n = /[a-z%]+$/i.exec(t), t = parseInt(t, 10), h("InsertUnorderedList") || h("InsertOrderedList") ? y(e) : (k.forced_root_block || _.getParent(N.getNode(), _.isBlock) || S.apply("div"), o(N.getSelectedBlocks(), function (o) {
                        if ("LI" != o.nodeName) {
                            var a = r.getParam("indent_use_margin", !1) ? "margin" : "padding";
                            a += "rtl" == _.getStyle(o, "direction", !0) ? "Right" : "Left", "outdent" == e ? (i = Math.max(0, parseInt(o.style[a] || 0, 10) - t), _.setStyle(o, a, i ? i + n : "")) : (i = parseInt(o.style[a] || 0, 10) + t + n, _.setStyle(o, a, i))
                        }
                    }))
                }, mceRepaint: function () {
                    if (u)try {
                        x(f), N.getSel() && N.getSel().selectAllChildren(r.getBody()), N.collapse(f), w()
                    } catch (e) {
                    }
                }, InsertHorizontalRule: function () {
                    r.execCommand("mceInsertContent", !1, "<hr />")
                }, mceToggleVisualAid: function () {
                    r.hasVisual = !r.hasVisual, r.addVisual()
                }, mceReplaceContent: function (e, t, n) {
                    r.execCommand("mceInsertContent", !1, n.replace(/\{\$selection\}/g, N.getContent({format: "text"})))
                }, mceInsertLink: function (e, t, n) {
                    var r;
                    "string" == typeof n && (n = {href: n}), r = _.getParent(N.getNode(), "a"), n.href = n.href.replace(" ", "%20"), r && n.href || S.remove("link"), n.href && S.apply("link", n, r)
                }, selectAll: function () {
                    var e = _.getRoot(), t;
                    N.getRng().setStart ? (t = _.createRng(), t.setStart(e, 0), t.setEnd(e, e.childNodes.length), N.setRng(t)) : (t = N.getRng(), t.item || (t.moveToElementText(e), t.select()))
                }, "delete": function () {
                    y("Delete");
                    var e = r.getBody();
                    _.isEmpty(e) && (r.setContent(""), e.firstChild && _.isBlock(e.firstChild) ? r.selection.setCursorLocation(e.firstChild, 0) : r.selection.setCursorLocation(e, 0))
                }, mceNewDocument: function () {
                    r.setContent("")
                }
            }), v({
                "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull": function (e) {
                    var t = "align" + e.substring(7), n = N.isCollapsed() ? [_.getParent(N.getNode(), _.isBlock)] : N.getSelectedBlocks(), r = s(n, function (e) {
                        return !!S.matchNode(e, t)
                    });
                    return -1 !== l(r, f)
                }, "Bold,Italic,Underline,Strikethrough,Superscript,Subscript": function (e) {
                    return b(e)
                }, mceBlockQuote: function () {
                    return b("blockquote")
                }, Outdent: function () {
                    var e;
                    if (k.inline_styles) {
                        if ((e = _.getParent(N.getStart(), _.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0)return f;
                        if ((e = _.getParent(N.getEnd(), _.isBlock)) && parseInt(e.style.paddingLeft, 10) > 0)return f
                    }
                    return h("InsertUnorderedList") || h("InsertOrderedList") || !k.inline_styles && !!_.getParent(N.getNode(), "BLOCKQUOTE")
                }, "InsertUnorderedList,InsertOrderedList": function (e) {
                    var t = _.getParent(N.getNode(), "ul,ol");
                    return t && ("insertunorderedlist" === e && "UL" === t.tagName || "insertorderedlist" === e && "OL" === t.tagName)
                }
            }, "state"), v({
                "FontSize,FontName": function (e) {
                    var t = 0, n;
                    return (n = _.getParent(N.getNode(), "span")) && (t = "fontsize" == e ? n.style.fontSize : n.style.fontFamily.replace(/, /g, ",").replace(/[\'\"]/g, "").toLowerCase()), t
                }
            }, "value"), v({
                Undo: function () {
                    r.undoManager.undo()
                }, Redo: function () {
                    r.undoManager.redo()
                }
            })
        }
    }), r(W, [p], function (e) {
        function t(e, i) {
            var o = this, a, s;
            if (e = r(e), i = o.settings = i || {}, a = i.base_uri, /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e))return void(o.source = e);
            var l = 0 === e.indexOf("//");
            0 !== e.indexOf("/") || l || (e = (a ? a.protocol || "http" : "http") + "://mce_host" + e), /^[\w\-]*:?\/\//.test(e) || (s = i.base_uri ? i.base_uri.path : new t(location.href).directory, "" === i.base_uri.protocol ? e = "//mce_host" + o.toAbsPath(s, e) : (e = /([^#?]*)([#?]?.*)/.exec(e), e = (a && a.protocol || "http") + "://mce_host" + o.toAbsPath(s, e[1]) + e[2])), e = e.replace(/@@/g, "(mce_at)"), e = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e), n(["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"], function (t, n) {
                var r = e[n];
                r && (r = r.replace(/\(mce_at\)/g, "@@")), o[t] = r
            }), a && (o.protocol || (o.protocol = a.protocol), o.userInfo || (o.userInfo = a.userInfo), o.port || "mce_host" !== o.host || (o.port = a.port), o.host && "mce_host" !== o.host || (o.host = a.host), o.source = ""), l && (o.protocol = "")
        }

        var n = e.each, r = e.trim, i = {ftp: 21, http: 80, https: 443, mailto: 25};
        return t.prototype = {
            setPath: function (e) {
                var t = this;
                e = /^(.*?)\/?(\w+)?$/.exec(e), t.path = e[0], t.directory = e[1], t.file = e[2], t.source = "", t.getURI()
            }, toRelative: function (e) {
                var n = this, r;
                if ("./" === e)return e;
                if (e = new t(e, {base_uri: n}), "mce_host" != e.host && n.host != e.host && e.host || n.port != e.port || n.protocol != e.protocol && "" !== e.protocol)return e.getURI();
                var i = n.getURI(), o = e.getURI();
                return i == o || "/" == i.charAt(i.length - 1) && i.substr(0, i.length - 1) == o ? i : (r = n.toRelPath(n.path, e.path), e.query && (r += "?" + e.query), e.anchor && (r += "#" + e.anchor), r)
            }, toAbsolute: function (e, n) {
                return e = new t(e, {base_uri: this}), e.getURI(n && this.isSameOrigin(e))
            }, isSameOrigin: function (e) {
                if (this.host == e.host && this.protocol == e.protocol) {
                    if (this.port == e.port)return !0;
                    var t = i[this.protocol];
                    if (t && (this.port || t) == (e.port || t))return !0
                }
                return !1
            }, toRelPath: function (e, t) {
                var n, r = 0, i = "", o, a;
                if (e = e.substring(0, e.lastIndexOf("/")), e = e.split("/"), n = t.split("/"), e.length >= n.length)for (o = 0, a = e.length; a > o; o++)if (o >= n.length || e[o] != n[o]) {
                    r = o + 1;
                    break
                }
                if (e.length < n.length)for (o = 0, a = n.length; a > o; o++)if (o >= e.length || e[o] != n[o]) {
                    r = o + 1;
                    break
                }
                if (1 === r)return t;
                for (o = 0, a = e.length - (r - 1); a > o; o++)i += "../";
                for (o = r - 1, a = n.length; a > o; o++)i += o != r - 1 ? "/" + n[o] : n[o];
                return i
            }, toAbsPath: function (e, t) {
                var r, i = 0, o = [], a, s;
                for (a = /\/$/.test(t) ? "/" : "", e = e.split("/"), t = t.split("/"), n(e, function (e) {
                    e && o.push(e)
                }), e = o, r = t.length - 1, o = []; r >= 0; r--)0 !== t[r].length && "." !== t[r] && (".." !== t[r] ? i > 0 ? i-- : o.push(t[r]) : i++);
                return r = e.length - i, s = 0 >= r ? o.reverse().join("/") : e.slice(0, r).join("/") + "/" + o.reverse().join("/"), 0 !== s.indexOf("/") && (s = "/" + s), a && s.lastIndexOf("/") !== s.length - 1 && (s += a), s
            }, getURI: function (e) {
                var t, n = this;
                return (!n.source || e) && (t = "", e || (t += n.protocol ? n.protocol + "://" : "//", n.userInfo && (t += n.userInfo + "@"), n.host && (t += n.host), n.port && (t += ":" + n.port)), n.path && (t += n.path), n.query && (t += "?" + n.query), n.anchor && (t += "#" + n.anchor), n.source = t), n.source
            }
        }, t
    }), r(V, [p], function (e) {
        function t() {
        }

        var n = e.each, r = e.extend, i, o;
        return t.extend = i = function (e) {
            function t() {
                var e, t, n, r = this;
                if (!o && (r.init && r.init.apply(r, arguments), t = r.Mixins))for (e = t.length; e--;)n = t[e], n.init && n.init.apply(r, arguments)
            }

            function a() {
                return this
            }

            function s(e, t) {
                return function () {
                    var n = this, r = n._super, i;
                    return n._super = c[e], i = t.apply(n, arguments), n._super = r, i
                }
            }

            var l = this, c = l.prototype, u, d, f;
            o = !0, u = new l, o = !1, e.Mixins && (n(e.Mixins, function (t) {
                t = t;
                for (var n in t)"init" !== n && (e[n] = t[n])
            }), c.Mixins && (e.Mixins = c.Mixins.concat(e.Mixins))), e.Methods && n(e.Methods.split(","), function (t) {
                e[t] = a
            }), e.Properties && n(e.Properties.split(","), function (t) {
                var n = "_" + t;
                e[t] = function (e) {
                    var t = this, r;
                    return e !== r ? (t[n] = e, t) : t[n]
                }
            }), e.Statics && n(e.Statics, function (e, n) {
                t[n] = e
            }), e.Defaults && c.Defaults && (e.Defaults = r({}, c.Defaults, e.Defaults));
            for (d in e)f = e[d], u[d] = "function" == typeof f && c[d] ? s(d, f) : f;
            return t.prototype = u, t.constructor = t, t.extend = i, t
        }, t
    }), r(U, [p], function (e) {
        function t(e) {
            function t() {
                return !1
            }

            function n() {
                return !0
            }

            function r(r, i) {
                var o, a, s, u;
                if (r = r.toLowerCase(), i = i || {}, i.type = r, i.target || (i.target = l), i.preventDefault || (i.preventDefault = function () {
                        i.isDefaultPrevented = n
                    }, i.stopPropagation = function () {
                        i.isPropagationStopped = n
                    }, i.stopImmediatePropagation = function () {
                        i.isImmediatePropagationStopped = n
                    }, i.isDefaultPrevented = t, i.isPropagationStopped = t, i.isImmediatePropagationStopped = t), e.beforeFire && e.beforeFire(i), o = c[r])for (a = 0, s = o.length; s > a; a++) {
                    if (o[a] = u = o[a], i.isImmediatePropagationStopped())return i.stopPropagation(), i;
                    if (u.call(l, i) === !1)return i.preventDefault(), i
                }
                return i
            }

            function i(e, n, r) {
                var i, o, a;
                if (n === !1 && (n = t), n)for (o = e.toLowerCase().split(" "), a = o.length; a--;)e = o[a], i = c[e], i || (i = c[e] = [], u(e, !0)), r ? i.unshift(n) : i.push(n);
                return s
            }

            function o(e, t) {
                var n, r, i, o, a;
                if (e)for (o = e.toLowerCase().split(" "), n = o.length; n--;) {
                    if (e = o[n], r = c[e], !e) {
                        for (i in c)u(i, !1), delete c[i];
                        return s
                    }
                    if (r) {
                        if (t)for (a = r.length; a--;)r[a] === t && r.splice(a, 1); else r.length = 0;
                        r.length || (u(e, !1), delete c[e])
                    }
                } else {
                    for (e in c)u(e, !1);
                    c = {}
                }
                return s
            }

            function a(e) {
                return e = e.toLowerCase(), !(!c[e] || 0 === c[e].length)
            }

            var s = this, l, c = {}, u;
            e = e || {}, l = e.scope || s, u = e.toggleEvent || t, s.fire = r, s.on = i, s.off = o, s.has = a
        }

        var n = e.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate", " ");
        return t.isNative = function (e) {
            return !!n[e.toLowerCase()]
        }, t
    }), r(q, [V], function (e) {
        function t(e) {
            for (var t = [], n = e.length, r; n--;)r = e[n], r.__checked || (t.push(r), r.__checked = 1);
            for (n = t.length; n--;)delete t[n].__checked;
            return t
        }

        var n = /^([\w\\*]+)?(?:#([\w\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i, r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g, i = /^\s*|\s*$/g, o, a = e.extend({
            init: function (e) {
                function t(e) {
                    return e ? (e = e.toLowerCase(), function (t) {
                        return "*" === e || t.type === e
                    }) : void 0
                }

                function o(e) {
                    return e ? function (t) {
                        return t._name === e
                    } : void 0
                }

                function a(e) {
                    return e ? (e = e.split("."), function (t) {
                        for (var n = e.length; n--;)if (!t.hasClass(e[n]))return !1;
                        return !0
                    }) : void 0
                }

                function s(e, t, n) {
                    return e ? function (r) {
                        var i = r[e] ? r[e]() : "";
                        return t ? "=" === t ? i === n : "*=" === t ? i.indexOf(n) >= 0 : "~=" === t ? (" " + i + " ").indexOf(" " + n + " ") >= 0 : "!=" === t ? i != n : "^=" === t ? 0 === i.indexOf(n) : "$=" === t ? i.substr(i.length - n.length) === n : !1 : !!n
                    } : void 0
                }

                function l(e) {
                    var t;
                    return e ? (e = /(?:not\((.+)\))|(.+)/i.exec(e), e[1] ? (t = u(e[1], []), function (e) {
                        return !d(e, t)
                    }) : (e = e[2], function (t, n, r) {
                        return "first" === e ? 0 === n : "last" === e ? n === r - 1 : "even" === e ? n % 2 === 0 : "odd" === e ? n % 2 === 1 : t[e] ? t[e]() : !1
                    })) : void 0
                }

                function c(e, r, c) {
                    function u(e) {
                        e && r.push(e)
                    }

                    var d;
                    return d = n.exec(e.replace(i, "")), u(t(d[1])), u(o(d[2])), u(a(d[3])), u(s(d[4], d[5], d[6])), u(l(d[7])), r.psuedo = !!d[7], r.direct = c, r
                }

                function u(e, t) {
                    var n = [], i, o, a;
                    do if (r.exec(""), o = r.exec(e), o && (e = o[3], n.push(o[1]), o[2])) {
                        i = o[3];
                        break
                    } while (o);
                    for (i && u(i, t), e = [], a = 0; a < n.length; a++)">" != n[a] && e.push(c(n[a], [], ">" === n[a - 1]));
                    return t.push(e), t
                }

                var d = this.match;
                this._selectors = u(e, [])
            }, match: function (e, t) {
                var n, r, i, o, a, s, l, c, u, d, f, p, m;
                for (t = t || this._selectors, n = 0, r = t.length; r > n; n++) {
                    for (a = t[n], o = a.length, m = e, p = 0, i = o - 1; i >= 0; i--)for (c = a[i]; m;) {
                        if (c.psuedo)for (f = m.parent().items(), u = d = f.length; u-- && f[u] !== m;);
                        for (s = 0, l = c.length; l > s; s++)if (!c[s](m, u, d)) {
                            s = l + 1;
                            break
                        }
                        if (s === l) {
                            p++;
                            break
                        }
                        if (i === o - 1)break;
                        m = m.parent()
                    }
                    if (p === o)return !0
                }
                return !1
            }, find: function (e) {
                function n(e, t, i) {
                    var o, a, s, l, c, u = t[i];
                    for (o = 0, a = e.length; a > o; o++) {
                        for (c = e[o], s = 0, l = u.length; l > s; s++)if (!u[s](c, o, a)) {
                            s = l + 1;
                            break
                        }
                        if (s === l)i == t.length - 1 ? r.push(c) : c.items && n(c.items(), t, i + 1); else if (u.direct)return;
                        c.items && n(c.items(), t, i)
                    }
                }

                var r = [], i, s, l = this._selectors;
                if (e.items) {
                    for (i = 0, s = l.length; s > i; i++)n(e.items(), l[i], 0);
                    s > 1 && (r = t(r))
                }
                return o || (o = a.Collection), new o(r)
            }
        });
        return a
    }), r($, [p, q, V], function (e, t, n) {
        var r, i, o = Array.prototype.push, a = Array.prototype.slice;
        return i = {
            length: 0, init: function (e) {
                e && this.add(e)
            }, add: function (t) {
                var n = this;
                return e.isArray(t) ? o.apply(n, t) : t instanceof r ? n.add(t.toArray()) : o.call(n, t), n
            }, set: function (e) {
                var t = this, n = t.length, r;
                for (t.length = 0, t.add(e), r = t.length; n > r; r++)delete t[r];
                return t
            }, filter: function (e) {
                var n = this, i, o, a = [], s, l;
                for ("string" == typeof e ? (e = new t(e), l = function (t) {
                    return e.match(t)
                }) : l = e, i = 0, o = n.length; o > i; i++)s = n[i], l(s) && a.push(s);
                return new r(a)
            }, slice: function () {
                return new r(a.apply(this, arguments))
            }, eq: function (e) {
                return -1 === e ? this.slice(e) : this.slice(e, +e + 1)
            }, each: function (t) {
                return e.each(this, t), this
            }, toArray: function () {
                return e.toArray(this)
            }, indexOf: function (e) {
                for (var t = this, n = t.length; n-- && t[n] !== e;);
                return n
            }, reverse: function () {
                return new r(e.toArray(this).reverse())
            }, hasClass: function (e) {
                return this[0] ? this[0].hasClass(e) : !1
            }, prop: function (e, t) {
                var n = this, r, i;
                return t !== r ? (n.each(function (n) {
                    n[e] && n[e](t)
                }), n) : (i = n[0], i && i[e] ? i[e]() : void 0)
            }, exec: function (t) {
                var n = this, r = e.toArray(arguments).slice(1);
                return n.each(function (e) {
                    e[t] && e[t].apply(e, r)
                }), n
            }, remove: function () {
                for (var e = this.length; e--;)this[e].remove();
                return this
            }
        }, e.each("fire on off show hide addClass removeClass append prepend before after reflow".split(" "), function (t) {
            i[t] = function () {
                var n = e.toArray(arguments);
                return this.each(function (e) {
                    t in e && e[t].apply(e, n)
                }), this
            }
        }), e.each("text name disabled active selected checked visible parent value data".split(" "), function (e) {
            i[e] = function (t) {
                return this.prop(e, t)
            }
        }), r = n.extend(i), t.Collection = r, r
    }), r(j, [p, y], function (e, t) {
        var n = 0;
        return {
            id: function () {
                return "mceu_" + n++
            }, createFragment: function (e) {
                return t.DOM.createFragment(e)
            }, getWindowSize: function () {
                return t.DOM.getViewPort()
            }, getSize: function (e) {
                var t, n;
                if (e.getBoundingClientRect) {
                    var r = e.getBoundingClientRect();
                    t = Math.max(r.width || r.right - r.left, e.offsetWidth), n = Math.max(r.height || r.bottom - r.bottom, e.offsetHeight)
                } else t = e.offsetWidth, n = e.offsetHeight;
                return {width: t, height: n}
            }, getPos: function (e, n) {
                return t.DOM.getPos(e, n)
            }, getViewPort: function (e) {
                return t.DOM.getViewPort(e)
            }, get: function (e) {
                return document.getElementById(e)
            }, addClass: function (e, n) {
                return t.DOM.addClass(e, n)
            }, removeClass: function (e, n) {
                return t.DOM.removeClass(e, n)
            }, hasClass: function (e, n) {
                return t.DOM.hasClass(e, n)
            }, toggleClass: function (e, n, r) {
                return t.DOM.toggleClass(e, n, r)
            }, css: function (e, n, r) {
                return t.DOM.setStyle(e, n, r)
            }, on: function (e, n, r, i) {
                return t.DOM.bind(e, n, r, i)
            }, off: function (e, n, r) {
                return t.DOM.unbind(e, n, r)
            }, fire: function (e, n, r) {
                return t.DOM.fire(e, n, r)
            }, innerHtml: function (e, n) {
                t.DOM.setHTML(e, n)
            }
        }
    }), r(K, [V, p, U, $, j], function (e, t, n, r, i) {
        function o(e) {
            return e._eventDispatcher || (e._eventDispatcher = new n({
                scope: e, toggleEvent: function (t, r) {
                    r && n.isNative(t) && (e._nativeEvents || (e._nativeEvents = {}), e._nativeEvents[t] = !0, e._rendered && e.bindPendingEvents())
                }
            })), e._eventDispatcher
        }

        var a = {}, s = "onmousewheel" in document, l = !1, c = "mce-", u = e.extend({
            Statics: {
                elementIdCache: a,
                classPrefix: c
            },
            isRtl: function () {
                return u.rtl
            },
            classPrefix: c,
            init: function (e) {
                var n = this, r, o;
                if (n.settings = e = t.extend({}, n.Defaults, e), n._id = e.id || i.id(), n._text = n._name = "", n._width = n._height = 0, n._aria = {role: e.role}, r = e.classes)for (r = r.split(" "), r.map = {}, o = r.length; o--;)r.map[r[o]] = !0;
                n._classes = r || [], n.visible(!0), t.each("title text width height name classes visible disabled active value".split(" "), function (t) {
                    var r = e[t], i;
                    r !== i ? n[t](r) : n["_" + t] === i && (n["_" + t] = !1)
                }), n.on("click", function () {
                    return n.disabled() ? !1 : void 0
                }), e.classes && t.each(e.classes.split(" "), function (e) {
                    n.addClass(e)
                }), n.settings = e, n._borderBox = n.parseBox(e.border), n._paddingBox = n.parseBox(e.padding), n._marginBox = n.parseBox(e.margin), e.hidden && n.hide()
            },
            Properties: "parent,title,text,width,height,disabled,active,name,value",
            Methods: "renderHtml",
            getContainerElm: function () {
                return document.body
            },
            getParentCtrl: function (e) {
                for (var t, n = this.getRoot().controlIdLookup; e && n && !(t = n[e.id]);)e = e.parentNode;
                return t
            },
            parseBox: function (e) {
                var t, n = 10;
                if (e)return "number" == typeof e ? (e = e || 0, {
                    top: e,
                    left: e,
                    bottom: e,
                    right: e
                }) : (e = e.split(" "), t = e.length, 1 === t ? e[1] = e[2] = e[3] = e[0] : 2 === t ? (e[2] = e[0], e[3] = e[1]) : 3 === t && (e[3] = e[1]), {
                    top: parseInt(e[0], n) || 0,
                    right: parseInt(e[1], n) || 0,
                    bottom: parseInt(e[2], n) || 0,
                    left: parseInt(e[3], n) || 0
                })
            },
            borderBox: function () {
                return this._borderBox
            },
            paddingBox: function () {
                return this._paddingBox
            },
            marginBox: function () {
                return this._marginBox
            },
            measureBox: function (e, t) {
                function n(t) {
                    var n = document.defaultView;
                    return n ? (t = t.replace(/[A-Z]/g, function (e) {
                        return "-" + e
                    }), n.getComputedStyle(e, null).getPropertyValue(t)) : e.currentStyle[t]
                }

                function r(e) {
                    var t = parseFloat(n(e), 10);
                    return isNaN(t) ? 0 : t
                }

                return {
                    top: r(t + "TopWidth"),
                    right: r(t + "RightWidth"),
                    bottom: r(t + "BottomWidth"),
                    left: r(t + "LeftWidth")
                }
            },
            initLayoutRect: function () {
                var e = this, t = e.settings, n, r, o = e.getEl(), a, s, l, c, u, d, f, p;
                n = e._borderBox = e._borderBox || e.measureBox(o, "border"), e._paddingBox = e._paddingBox || e.measureBox(o, "padding"), e._marginBox = e._marginBox || e.measureBox(o, "margin"), p = i.getSize(o), d = t.minWidth, f = t.minHeight, l = d || p.width, c = f || p.height, a = t.width, s = t.height, u = t.autoResize, u = "undefined" != typeof u ? u : !a && !s, a = a || l, s = s || c;
                var m = n.left + n.right, h = n.top + n.bottom, g = t.maxWidth || 65535, v = t.maxHeight || 65535;
                return e._layoutRect = r = {
                    x: t.x || 0,
                    y: t.y || 0,
                    w: a,
                    h: s,
                    deltaW: m,
                    deltaH: h,
                    contentW: a - m,
                    contentH: s - h,
                    innerW: a - m,
                    innerH: s - h,
                    startMinWidth: d || 0,
                    startMinHeight: f || 0,
                    minW: Math.min(l, g),
                    minH: Math.min(c, v),
                    maxW: g,
                    maxH: v,
                    autoResize: u,
                    scrollW: 0
                }, e._lastLayoutRect = {}, r
            },
            layoutRect: function (e) {
                var t = this, n = t._layoutRect, r, i, o, a, s, l;
                return n || (n = t.initLayoutRect()), e ? (o = n.deltaW, a = n.deltaH, e.x !== s && (n.x = e.x), e.y !== s && (n.y = e.y), e.minW !== s && (n.minW = e.minW), e.minH !== s && (n.minH = e.minH), i = e.w, i !== s && (i = i < n.minW ? n.minW : i, i = i > n.maxW ? n.maxW : i, n.w = i, n.innerW = i - o), i = e.h, i !== s && (i = i < n.minH ? n.minH : i, i = i > n.maxH ? n.maxH : i, n.h = i, n.innerH = i - a), i = e.innerW, i !== s && (i = i < n.minW - o ? n.minW - o : i, i = i > n.maxW - o ? n.maxW - o : i, n.innerW = i, n.w = i + o), i = e.innerH, i !== s && (i = i < n.minH - a ? n.minH - a : i, i = i > n.maxH - a ? n.maxH - a : i, n.innerH = i, n.h = i + a), e.contentW !== s && (n.contentW = e.contentW), e.contentH !== s && (n.contentH = e.contentH), r = t._lastLayoutRect, (r.x !== n.x || r.y !== n.y || r.w !== n.w || r.h !== n.h) && (l = u.repaintControls, l && l.map && !l.map[t._id] && (l.push(t), l.map[t._id] = !0), r.x = n.x, r.y = n.y, r.w = n.w, r.h = n.h), t) : n
            },
            repaint: function () {
                var e = this, t, n, r, i, o = 0, a = 0, s, l;
                l = document.createRange ? function (e) {
                    return e
                } : Math.round, t = e.getEl().style, r = e._layoutRect, s = e._lastRepaintRect || {}, i = e._borderBox, o = i.left + i.right, a = i.top + i.bottom, r.x !== s.x && (t.left = l(r.x) + "px", s.x = r.x), r.y !== s.y && (t.top = l(r.y) + "px", s.y = r.y), r.w !== s.w && (t.width = l(r.w - o) + "px", s.w = r.w), r.h !== s.h && (t.height = l(r.h - a) + "px", s.h = r.h), e._hasBody && r.innerW !== s.innerW && (n = e.getEl("body").style, n.width = l(r.innerW) + "px", s.innerW = r.innerW), e._hasBody && r.innerH !== s.innerH && (n = n || e.getEl("body").style, n.height = l(r.innerH) + "px", s.innerH = r.innerH), e._lastRepaintRect = s, e.fire("repaint", {}, !1)
            },
            on: function (e, t) {
                function n(e) {
                    var t, n;
                    return "string" != typeof e ? e : function (i) {
                        return t || r.parentsAndSelf().each(function (r) {
                            var i = r.settings.callbacks;
                            return i && (t = i[e]) ? (n = r, !1) : void 0
                        }), t.call(n, i)
                    }
                }

                var r = this;
                return o(r).on(e, n(t)), r
            },
            off: function (e, t) {
                return o(this).off(e, t), this
            },
            fire: function (e, t, n) {
                var r = this;
                if (t = t || {}, t.control || (t.control = r), t = o(r).fire(e, t), n !== !1 && r.parent)for (var i = r.parent(); i && !t.isPropagationStopped();)i.fire(e, t, !1), i = i.parent();
                return t
            },
            hasEventListeners: function (e) {
                return o(this).has(e)
            },
            parents: function (e) {
                var t = this, n, i = new r;
                for (n = t.parent(); n; n = n.parent())i.add(n);
                return e && (i = i.filter(e)), i
            },
            parentsAndSelf: function (e) {
                return new r(this).add(this.parents(e))
            },
            next: function () {
                var e = this.parent().items();
                return e[e.indexOf(this) + 1]
            },
            prev: function () {
                var e = this.parent().items();
                return e[e.indexOf(this) - 1]
            },
            findCommonAncestor: function (e, t) {
                for (var n; e;) {
                    for (n = t; n && e != n;)n = n.parent();
                    if (e == n)break;
                    e = e.parent()
                }
                return e
            },
            hasClass: function (e, t) {
                var n = this._classes[t || "control"];
                return e = this.classPrefix + e, n && !!n.map[e]
            },
            addClass: function (e, t) {
                var n = this, r, i;
                return e = this.classPrefix + e, r = n._classes[t || "control"], r || (r = [], r.map = {}, n._classes[t || "control"] = r), r.map[e] || (r.map[e] = e, r.push(e), n._rendered && (i = n.getEl(t), i && (i.className = r.join(" ")))), n
            },
            removeClass: function (e, t) {
                var n = this, r, i, o;
                if (e = this.classPrefix + e, r = n._classes[t || "control"], r && r.map[e])for (delete r.map[e], i = r.length; i--;)r[i] === e && r.splice(i, 1);
                return n._rendered && (o = n.getEl(t), o && (o.className = r.join(" "))), n
            },
            toggleClass: function (e, t, n) {
                var r = this;
                return t ? r.addClass(e, n) : r.removeClass(e, n), r
            },
            classes: function (e) {
                var t = this._classes[e || "control"];
                return t ? t.join(" ") : ""
            },
            innerHtml: function (e) {
                return i.innerHtml(this.getEl(), e), this
            },
            getEl: function (e, t) {
                var n, r = e ? this._id + "-" + e : this._id;
                return n = a[r] = (t === !0 ? null : a[r]) || i.get(r)
            },
            visible: function (e) {
                var t = this, n;
                return "undefined" != typeof e ? (t._visible !== e && (t._rendered && (t.getEl().style.display = e ? "" : "none"), t._visible = e, n = t.parent(), n && (n._lastRect = null), t.fire(e ? "show" : "hide")), t) : t._visible
            },
            show: function () {
                return this.visible(!0)
            },
            hide: function () {
                return this.visible(!1)
            },
            focus: function () {
                try {
                    this.getEl().focus()
                } catch (e) {
                }
                return this
            },
            blur: function () {
                return this.getEl().blur(), this
            },
            aria: function (e, t) {
                var n = this, r = n.getEl(n.ariaTarget);
                return "undefined" == typeof t ? n._aria[e] : (n._aria[e] = t, n._rendered && r.setAttribute("role" == e ? e : "aria-" + e, t), n)
            },
            encode: function (e, t) {
                return t !== !1 && (e = this.translate(e)), (e || "").replace(/[&<>"]/g, function (e) {
                    return "&#" + e.charCodeAt(0) + ";"
                })
            },
            translate: function (e) {
                return u.translate ? u.translate(e) : e
            },
            before: function (e) {
                var t = this, n = t.parent();
                return n && n.insert(e, n.items().indexOf(t), !0), t
            },
            after: function (e) {
                var t = this, n = t.parent();
                return n && n.insert(e, n.items().indexOf(t)), t
            },
            remove: function () {
                var e = this, t = e.getEl(), n = e.parent(), r, o;
                if (e.items) {
                    var s = e.items().toArray();
                    for (o = s.length; o--;)s[o].remove()
                }
                n && n.items && (r = [], n.items().each(function (t) {
                    t !== e && r.push(t)
                }), n.items().set(r), n._lastRect = null), e._eventsRoot && e._eventsRoot == e && i.off(t);
                var l = e.getRoot().controlIdLookup;
                if (l && delete l[e._id], delete a[e._id], t && t.parentNode) {
                    var c = t.getElementsByTagName("*");
                    for (o = c.length; o--;)delete a[c[o].id];
                    t.parentNode.removeChild(t)
                }
                return e._rendered = !1, e
            },
            renderBefore: function (e) {
                var t = this;
                return e.parentNode.insertBefore(i.createFragment(t.renderHtml()), e), t.postRender(), t
            },
            renderTo: function (e) {
                var t = this;
                return e = e || t.getContainerElm(), e.appendChild(i.createFragment(t.renderHtml())), t.postRender(), t
            },
            postRender: function () {
                var e = this, t = e.settings, n, r, o, a, s;
                for (a in t)0 === a.indexOf("on") && e.on(a.substr(2), t[a]);
                if (e._eventsRoot) {
                    for (o = e.parent(); !s && o; o = o.parent())s = o._eventsRoot;
                    if (s)for (a in s._nativeEvents)e._nativeEvents[a] = !0
                }
                e.bindPendingEvents(), t.style && (n = e.getEl(), n && (n.setAttribute("style", t.style), n.style.cssText = t.style)), e._visible || i.css(e.getEl(), "display", "none"), e.settings.border && (r = e.borderBox(), i.css(e.getEl(), {
                    "border-top-width": r.top,
                    "border-right-width": r.right,
                    "border-bottom-width": r.bottom,
                    "border-left-width": r.left
                }));
                var l = e.getRoot();
                l.controlIdLookup || (l.controlIdLookup = {}), l.controlIdLookup[e._id] = e;
                for (var c in e._aria)e.aria(c, e._aria[c]);
                e.fire("postrender", {}, !1)
            },
            scrollIntoView: function (e) {
                function t(e, t) {
                    var n, r, i = e;
                    for (n = r = 0; i && i != t && i.nodeType;)n += i.offsetLeft || 0, r += i.offsetTop || 0, i = i.offsetParent;
                    return {x: n, y: r}
                }

                var n = this.getEl(), r = n.parentNode, i, o, a, s, l, c, u = t(n, r);
                return i = u.x, o = u.y, a = n.offsetWidth, s = n.offsetHeight, l = r.clientWidth, c = r.clientHeight, "end" == e ? (i -= l - a, o -= c - s) : "center" == e && (i -= l / 2 - a / 2, o -= c / 2 - s / 2), r.scrollLeft = i, r.scrollTop = o, this
            },
            bindPendingEvents: function () {
                function e(e) {
                    var t = o.getParentCtrl(e.target);
                    t && t.fire(e.type, e)
                }

                function t() {
                    var e = d._lastHoverCtrl;
                    e && (e.fire("mouseleave", {target: e.getEl()}), e.parents().each(function (e) {
                        e.fire("mouseleave", {target: e.getEl()})
                    }), d._lastHoverCtrl = null)
                }

                function n(e) {
                    var t = o.getParentCtrl(e.target), n = d._lastHoverCtrl, r = 0, i, a, s;
                    if (t !== n) {
                        if (d._lastHoverCtrl = t, a = t.parents().toArray().reverse(), a.push(t), n) {
                            for (s = n.parents().toArray().reverse(), s.push(n), r = 0; r < s.length && a[r] === s[r]; r++);
                            for (i = s.length - 1; i >= r; i--)n = s[i], n.fire("mouseleave", {target: n.getEl()})
                        }
                        for (i = r; i < a.length; i++)t = a[i], t.fire("mouseenter", {target: t.getEl()})
                    }
                }

                function r(e) {
                    e.preventDefault(), "mousewheel" == e.type ? (e.deltaY = -1 / 40 * e.wheelDelta, e.wheelDeltaX && (e.deltaX = -1 / 40 * e.wheelDeltaX)) : (e.deltaX = 0, e.deltaY = e.detail), e = o.fire("wheel", e)
                }

                var o = this, a, c, u, d, f, p;
                if (o._rendered = !0, f = o._nativeEvents) {
                    for (u = o.parents().toArray(), u.unshift(o), a = 0, c = u.length; !d && c > a; a++)d = u[a]._eventsRoot;
                    for (d || (d = u[u.length - 1] || o), o._eventsRoot = d, c = a, a = 0; c > a; a++)u[a]._eventsRoot = d;
                    var m = d._delegates;
                    m || (m = d._delegates = {});
                    for (p in f) {
                        if (!f)return !1;
                        "wheel" !== p || l ? ("mouseenter" === p || "mouseleave" === p ? d._hasMouseEnter || (i.on(d.getEl(), "mouseleave", t), i.on(d.getEl(), "mouseover", n), d._hasMouseEnter = 1) : m[p] || (i.on(d.getEl(), p, e), m[p] = !0), f[p] = !1) : s ? i.on(o.getEl(), "mousewheel", r) : i.on(o.getEl(), "DOMMouseScroll", r)
                    }
                }
            },
            getRoot: function () {
                for (var e = this, t, n = []; e;) {
                    if (e.rootControl) {
                        t = e.rootControl;
                        break
                    }
                    n.push(e), t = e, e = e.parent()
                }
                t || (t = this);
                for (var r = n.length; r--;)n[r].rootControl = t;
                return t
            },
            reflow: function () {
                return this.repaint(), this
            }
        });
        return u
    }), r(G, [], function () {
        var e = {}, t;
        return {
            add: function (t, n) {
                e[t.toLowerCase()] = n
            }, has: function (t) {
                return !!e[t.toLowerCase()]
            }, create: function (n, r) {
                var i, o, a;
                if (!t) {
                    a = tinymce.ui;
                    for (o in a)e[o.toLowerCase()] = a[o];
                    t = !0
                }
                if ("string" == typeof n ? (r = r || {}, r.type = n) : (r = n, n = r.type), n = n.toLowerCase(), i = e[n], !i)throw new Error("Could not find control by type: " + n);
                return i = new i(r), i.type = n, i
            }
        }
    }), r(Y, [], function () {
        return function (e) {
            function t(e) {
                return e = e || b, e && e.getAttribute("role")
            }

            function n(e) {
                for (var n, r = e || b; r = r.parentNode;)if (n = t(r))return n
            }

            function r(e) {
                var t = b;
                return t ? t.getAttribute("aria-" + e) : void 0
            }

            function i(e) {
                var t = e.tagName.toUpperCase();
                return "INPUT" == t || "TEXTAREA" == t
            }

            function o(e) {
                return i(e) && !e.hidden ? !0 : /^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell)$/.test(t(e)) ? !0 : !1
            }

            function a(e) {
                function t(e) {
                    if (1 == e.nodeType && "none" != e.style.display) {
                        o(e) && n.push(e);
                        for (var r = 0; r < e.childNodes.length; r++)t(e.childNodes[r])
                    }
                }

                var n = [];
                return t(e || y.getEl()), n
            }

            function s(e) {
                var t, n;
                e = e || C, n = e.parents().toArray(), n.unshift(e);
                for (var r = 0; r < n.length && (t = n[r], !t.settings.ariaRoot); r++);
                return t
            }

            function l(e) {
                var t = s(e), n = a(t.getEl());
                t.settings.ariaRemember && "lastAriaIndex" in t ? c(t.lastAriaIndex, n) : c(0, n)
            }

            function c(e, t) {
                return 0 > e ? e = t.length - 1 : e >= t.length && (e = 0), t[e] && t[e].focus(), e
            }

            function u(e, t) {
                var n = -1, r = s();
                t = t || a(r.getEl());
                for (var i = 0; i < t.length; i++)t[i] === b && (n = i);
                n += e, r.lastAriaIndex = c(n, t)
            }

            function d() {
                var e = n();
                "tablist" == e ? u(-1, a(b.parentNode)) : C.parent().submenu ? g() : u(-1)
            }

            function f() {
                var e = t(), i = n();
                "tablist" == i ? u(1, a(b.parentNode)) : "menuitem" == e && "menu" == i && r("haspopup") ? v() : u(1)
            }

            function p() {
                u(-1)
            }

            function m() {
                var e = t(), i = n();
                "menuitem" == e && "menubar" == i ? v() : "button" == e && r("haspopup") ? v({key: "down"}) : u(1)
            }

            function h(e) {
                var t = n();
                if ("tablist" == t) {
                    var r = a(C.getEl("body"))[0];
                    r && r.focus()
                } else u(e.shiftKey ? -1 : 1)
            }

            function g() {
                C.fire("cancel")
            }

            function v(e) {
                e = e || {}, C.fire("click", {target: b, aria: e})
            }

            var y = e.root, b, C;
            return b = document.activeElement, C = y.getParentCtrl(b), y.on("keydown", function (e) {
                function t(e, t) {
                    i(b) || t(e) !== !1 && e.preventDefault()
                }

                if (!e.isDefaultPrevented())switch (e.keyCode) {
                    case 37:
                        t(e, d);
                        break;
                    case 39:
                        t(e, f);
                        break;
                    case 38:
                        t(e, p);
                        break;
                    case 40:
                        t(e, m);
                        break;
                    case 27:
                        g();
                        break;
                    case 14:
                    case 13:
                    case 32:
                        t(e, v);
                        break;
                    case 9:
                        h(e) !== !1 && e.preventDefault()
                }
            }), y.on("focusin", function (e) {
                b = e.target, C = e.control
            }), {focusFirst: l}
        }
    }), r(X, [K, $, q, G, Y, p, j], function (e, t, n, r, i, o, a) {
        var s = {};
        return e.extend({
            layout: "", innerClass: "container-inner", init: function (e) {
                var n = this;
                n._super(e), e = n.settings, n._fixed = e.fixed, n._items = new t, n.isRtl() && n.addClass("rtl"), n.addClass("container"), n.addClass("container-body", "body"), e.containerCls && n.addClass(e.containerCls), n._layout = r.create((e.layout || n.layout) + "layout"), n.settings.items && n.add(n.settings.items), n._hasBody = !0
            }, items: function () {
                return this._items
            }, find: function (e) {
                return e = s[e] = s[e] || new n(e), e.find(this)
            }, add: function (e) {
                var t = this;
                return t.items().add(t.create(e)).parent(t), t
            }, focus: function (e) {
                var t = this, n, r, i;
                return e && (r = t.keyboardNav || t.parents().eq(-1)[0].keyboardNav) ? void r.focusFirst(t) : (i = t.find("*"), t.statusbar && i.add(t.statusbar.items()), i.each(function (e) {
                    return e.settings.autofocus ? (n = null, !1) : void(e.canFocus && (n = n || e))
                }), n && n.focus(), t)
            }, replace: function (e, t) {
                for (var n, r = this.items(), i = r.length; i--;)if (r[i] === e) {
                    r[i] = t;
                    break
                }
                i >= 0 && (n = t.getEl(), n && n.parentNode.removeChild(n), n = e.getEl(), n && n.parentNode.removeChild(n)), t.parent(this)
            }, create: function (t) {
                var n = this, i, a = [];
                return o.isArray(t) || (t = [t]), o.each(t, function (t) {
                    t && (t instanceof e || ("string" == typeof t && (t = {type: t}), i = o.extend({}, n.settings.defaults, t), t.type = i.type = i.type || t.type || n.settings.defaultType || (i.defaults ? i.defaults.type : null), t = r.create(i)), a.push(t))
                }), a
            }, renderNew: function () {
                var e = this;
                return e.items().each(function (t, n) {
                    var r, i;
                    t.parent(e), t._rendered || (r = e.getEl("body"), i = a.createFragment(t.renderHtml()), r.hasChildNodes() && n <= r.childNodes.length - 1 ? r.insertBefore(i, r.childNodes[n]) : r.appendChild(i), t.postRender())
                }), e._layout.applyClasses(e), e._lastRect = null, e
            }, append: function (e) {
                return this.add(e).renderNew()
            }, prepend: function (e) {
                var t = this;
                return t.items().set(t.create(e).concat(t.items().toArray())), t.renderNew()
            }, insert: function (e, t, n) {
                var r = this, i, o, a;
                return e = r.create(e), i = r.items(), !n && t < i.length - 1 && (t += 1), t >= 0 && t < i.length && (o = i.slice(0, t).toArray(), a = i.slice(t).toArray(), i.set(o.concat(e, a))), r.renderNew()
            }, fromJSON: function (e) {
                var t = this;
                for (var n in e)t.find("#" + n).value(e[n]);
                return t
            }, toJSON: function () {
                var e = this, t = {};
                return e.find("*").each(function (e) {
                    var n = e.name(), r = e.value();
                    n && "undefined" != typeof r && (t[n] = r)
                }), t
            }, preRender: function () {
            }, renderHtml: function () {
                var e = this, t = e._layout, n = this.settings.role;
                return e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '"' + (n ? ' role="' + this.settings.role + '"' : "") + '><div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }, postRender: function () {
                var e = this, t;
                return e.items().exec("postRender"), e._super(), e._layout.postRender(e), e._rendered = !0, e.settings.style && a.css(e.getEl(), e.settings.style), e.settings.border && (t = e.borderBox(), a.css(e.getEl(), {
                    "border-top-width": t.top,
                    "border-right-width": t.right,
                    "border-bottom-width": t.bottom,
                    "border-left-width": t.left
                })), e.parent() || (e.keyboardNav = new i({root: e})), e
            }, initLayoutRect: function () {
                var e = this, t = e._super();
                return e._layout.recalc(e), t
            }, recalc: function () {
                var e = this, t = e._layoutRect, n = e._lastRect;
                return n && n.w == t.w && n.h == t.h ? void 0 : (e._layout.recalc(e), t = e.layoutRect(), e._lastRect = {
                    x: t.x,
                    y: t.y,
                    w: t.w,
                    h: t.h
                }, !0)
            }, reflow: function () {
                var t;
                if (this.visible()) {
                    for (e.repaintControls = [], e.repaintControls.map = {}, this.recalc(), t = e.repaintControls.length; t--;)e.repaintControls[t].repaint();
                    "flow" !== this.settings.layout && "stack" !== this.settings.layout && this.repaint(), e.repaintControls = []
                }
                return this
            }
        })
    }), r(J, [j], function (e) {
        function t() {
            var e = document, t, n, r, i, o, a, s, l, c = Math.max;
            return t = e.documentElement, n = e.body, r = c(t.scrollWidth, n.scrollWidth), i = c(t.clientWidth, n.clientWidth), o = c(t.offsetWidth, n.offsetWidth), a = c(t.scrollHeight, n.scrollHeight), s = c(t.clientHeight, n.clientHeight), l = c(t.offsetHeight, n.offsetHeight), {
                width: o > r ? i : r,
                height: l > a ? s : a
            }
        }

        return function (n, r) {
            function i() {
                return a.getElementById(r.handle || n)
            }

            var o, a = document, s, l, c, u, d, f;
            r = r || {}, l = function (n) {
                var l = t(), p, m;
                n.preventDefault(), s = n.button, p = i(), d = n.screenX, f = n.screenY, m = window.getComputedStyle ? window.getComputedStyle(p, null).getPropertyValue("cursor") : p.runtimeStyle.cursor, o = a.createElement("div"), e.css(o, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: l.width,
                    height: l.height,
                    zIndex: 2147483647,
                    opacity: 1e-4,
                    background: "red",
                    cursor: m
                }), a.body.appendChild(o), e.on(a, "mousemove", u), e.on(a, "mouseup", c), r.start(n)
            }, u = function (e) {
                return e.button !== s ? c(e) : (e.deltaX = e.screenX - d, e.deltaY = e.screenY - f, e.preventDefault(), void r.drag(e))
            }, c = function (t) {
                e.off(a, "mousemove", u), e.off(a, "mouseup", c), o.parentNode.removeChild(o), r.stop && r.stop(t)
            }, this.destroy = function () {
                e.off(i())
            }, e.on(i(), "mousedown", l)
        }
    }), r(Q, [j, J], function (e, t) {
        return {
            init: function () {
                var e = this;
                e.on("repaint", e.renderScroll)
            }, renderScroll: function () {
                function n() {
                    function t(t, a, s, l, c, u) {
                        var d, f, p, m, h, g, v, y, b;
                        if (f = i.getEl("scroll" + t)) {
                            if (y = a.toLowerCase(), b = s.toLowerCase(), i.getEl("absend") && e.css(i.getEl("absend"), y, i.layoutRect()[l] - 1), !c)return void e.css(f, "display", "none");
                            e.css(f, "display", "block"), d = i.getEl("body"), p = i.getEl("scroll" + t + "t"), m = d["client" + s] - 2 * o, m -= n && r ? f["client" + u] : 0, h = d["scroll" + s], g = m / h, v = {}, v[y] = d["offset" + a] + o, v[b] = m, e.css(f, v), v = {}, v[y] = d["scroll" + a] * g, v[b] = m * g, e.css(p, v)
                        }
                    }

                    var n, r, a;
                    a = i.getEl("body"), n = a.scrollWidth > a.clientWidth, r = a.scrollHeight > a.clientHeight, t("h", "Left", "Width", "contentW", n, "Height"), t("v", "Top", "Height", "contentH", r, "Width")
                }

                function r() {
                    function n(n, r, a, s, l) {
                        var c, u = i._id + "-scroll" + n, d = i.classPrefix;
                        i.getEl().appendChild(e.createFragment('<div id="' + u + '" class="' + d + "scrollbar " + d + "scrollbar-" + n + '"><div id="' + u + 't" class="' + d + 'scrollbar-thumb"></div></div>')), i.draghelper = new t(u + "t", {
                            start: function () {
                                c = i.getEl("body")["scroll" + r], e.addClass(e.get(u), d + "active")
                            }, drag: function (e) {
                                var t, u, d, f, p = i.layoutRect();
                                u = p.contentW > p.innerW, d = p.contentH > p.innerH, f = i.getEl("body")["client" + a] - 2 * o, f -= u && d ? i.getEl("scroll" + n)["client" + l] : 0, t = f / i.getEl("body")["scroll" + a], i.getEl("body")["scroll" + r] = c + e["delta" + s] / t
                            }, stop: function () {
                                e.removeClass(e.get(u), d + "active")
                            }
                        })
                    }

                    i.addClass("scroll"), n("v", "Top", "Height", "Y", "Width"), n("h", "Left", "Width", "X", "Height")
                }

                var i = this, o = 2;
                i.settings.autoScroll && (i._hasScroll || (i._hasScroll = !0, r(), i.on("wheel", function (e) {
                    var t = i.getEl("body");
                    t.scrollLeft += 10 * (e.deltaX || 0), t.scrollTop += 10 * e.deltaY, n()
                }), e.on(i.getEl("body"), "scroll", n)), n())
            }
        }
    }), r(Z, [X, Q], function (e, t) {
        return e.extend({
            Defaults: {layout: "fit", containerCls: "panel"}, Mixins: [t], renderHtml: function () {
                var e = this, t = e._layout, n = e.settings.html;
                return e.preRender(), t.preRender(e), "undefined" == typeof n ? n = '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + t.renderHtml(e) + "</div>" : ("function" == typeof n && (n = n.call(e)), e._hasBody = !1), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1" role="group">' + (e._preBodyHtml || "") + n + "</div>"
            }
        })
    }), r(et, [j], function (e) {
        function t(t, n, r) {
            var i, o, a, s, l, c, u, d, f, p;
            return f = e.getViewPort(), o = e.getPos(n), a = o.x, s = o.y, t._fixed && (a -= f.x, s -= f.y), i = t.getEl(), p = e.getSize(i), l = p.width, c = p.height, p = e.getSize(n), u = p.width, d = p.height, r = (r || "").split(""), "b" === r[0] && (s += d), "r" === r[1] && (a += u), "c" === r[0] && (s += Math.round(d / 2)), "c" === r[1] && (a += Math.round(u / 2)), "b" === r[3] && (s -= c), "r" === r[4] && (a -= l), "c" === r[3] && (s -= Math.round(c / 2)), "c" === r[4] && (a -= Math.round(l / 2)), {
                x: a,
                y: s,
                w: l,
                h: c
            }
        }

        return {
            testMoveRel: function (n, r) {
                for (var i = e.getViewPort(), o = 0; o < r.length; o++) {
                    var a = t(this, n, r[o]);
                    if (this._fixed) {
                        if (a.x > 0 && a.x + a.w < i.w && a.y > 0 && a.y + a.h < i.h)return r[o]
                    } else if (a.x > i.x && a.x + a.w < i.w + i.x && a.y > i.y && a.y + a.h < i.h + i.y)return r[o]
                }
                return r[0]
            }, moveRel: function (e, n) {
                "string" != typeof n && (n = this.testMoveRel(e, n));
                var r = t(this, e, n);
                return this.moveTo(r.x, r.y)
            }, moveBy: function (e, t) {
                var n = this, r = n.layoutRect();
                return n.moveTo(r.x + e, r.y + t), n
            }, moveTo: function (t, n) {
                function r(e, t, n) {
                    return 0 > e ? 0 : e + n > t ? (e = t - n, 0 > e ? 0 : e) : e
                }

                var i = this;
                if (i.settings.constrainToViewport) {
                    var o = e.getViewPort(window), a = i.layoutRect();
                    t = r(t, o.w + o.x, a.w), n = r(n, o.h + o.y, a.h)
                }
                return i._rendered ? i.layoutRect({
                    x: t,
                    y: n
                }).repaint() : (i.settings.x = t, i.settings.y = n), i.fire("move", {x: t, y: n}), i
            }
        }
    }), r(tt, [j], function (e) {
        return {
            resizeToContent: function () {
                this._layoutRect.autoResize = !0, this._lastRect = null, this.reflow()
            }, resizeTo: function (t, n) {
                if (1 >= t || 1 >= n) {
                    var r = e.getWindowSize();
                    t = 1 >= t ? t * r.w : t, n = 1 >= n ? n * r.h : n
                }
                return this._layoutRect.autoResize = !1, this.layoutRect({minW: t, minH: n, w: t, h: n}).reflow()
            }, resizeBy: function (e, t) {
                var n = this, r = n.layoutRect();
                return n.resizeTo(r.w + e, r.h + t)
            }
        }
    }), r(nt, [Z, et, tt, j], function (e, t, n, r) {
        function i() {
            function e(e, t) {
                for (; e;) {
                    if (e == t)return !0;
                    e = e.parent()
                }
            }

            c || (c = function (t) {
                if (2 != t.button)for (var n = f.length; n--;) {
                    var r = f[n], i = r.getParentCtrl(t.target);
                    if (r.settings.autohide) {
                        if (i && (e(i, r) || r.parent() === i))continue;
                        t = r.fire("autohide", {target: t.target}), t.isDefaultPrevented() || r.hide()
                    }
                }
            }, r.on(document, "click", c))
        }

        function o() {
            u || (u = function () {
                var e;
                for (e = f.length; e--;)s(f[e])
            }, r.on(window, "scroll", u))
        }

        function a() {
            d || (d = function () {
                h.hideAll()
            }, r.on(window, "resize", d))
        }

        function s(e) {
            function t(t, n) {
                for (var r, i = 0; i < f.length; i++)if (f[i] != e)for (r = f[i].parent(); r && (r = r.parent());)r == e && f[i].fixed(t).moveBy(0, n).repaint()
            }

            var n = r.getViewPort().y;
            e.settings.autofix && (e._fixed ? e._autoFixY > n && (e.fixed(!1).layoutRect({y: e._autoFixY}).repaint(), t(!1, e._autoFixY - n)) : (e._autoFixY = e.layoutRect().y, e._autoFixY < n && (e.fixed(!0).layoutRect({y: 0}).repaint(), t(!0, n - e._autoFixY))))
        }

        function l(e) {
            var t;
            for (t = f.length; t--;)f[t] === e && f.splice(t, 1);
            for (t = p.length; t--;)p[t] === e && p.splice(t, 1)
        }

        var c, u, d, f = [], p = [], m, h = e.extend({
            Mixins: [t, n], init: function (e) {
                function t() {
                    var e, t = h.zIndex || 65535, i;
                    if (p.length)for (e = 0; e < p.length; e++)p[e].modal && (t++, i = p[e]), p[e].getEl().style.zIndex = t, p[e].zIndex = t, t++;
                    var o = document.getElementById(n.classPrefix + "modal-block");
                    i ? r.css(o, "z-index", i.zIndex - 1) : o && (o.parentNode.removeChild(o), m = !1), h.currentZIndex = t
                }

                var n = this;
                n._super(e), n._eventsRoot = n, n.addClass("floatpanel"), e.autohide && (i(), a(), f.push(n)), e.autofix && (o(), n.on("move", function () {
                    s(this)
                })), n.on("postrender show", function (e) {
                    if (e.control == n) {
                        var i, o = n.classPrefix;
                        n.modal && !m && (i = r.createFragment('<div id="' + o + 'modal-block" class="' + o + "reset " + o + 'fade"></div>'), i = i.firstChild, n.getContainerElm().appendChild(i), setTimeout(function () {
                            r.addClass(i, o + "in"), r.addClass(n.getEl(), o + "in")
                        }, 0), m = !0), p.push(n), t()
                    }
                }), n.on("close hide", function (e) {
                    if (e.control == n) {
                        for (var r = p.length; r--;)p[r] === n && p.splice(r, 1);
                        t()
                    }
                }), n.on("show", function () {
                    n.parents().each(function (e) {
                        return e._fixed ? (n.fixed(!0), !1) : void 0
                    })
                }), e.popover && (n._preBodyHtml = '<div class="' + n.classPrefix + 'arrow"></div>', n.addClass("popover").addClass("bottom").addClass(n.isRtl() ? "end" : "start"))
            }, fixed: function (e) {
                var t = this;
                if (t._fixed != e) {
                    if (t._rendered) {
                        var n = r.getViewPort();
                        e ? t.layoutRect().y -= n.y : t.layoutRect().y += n.y
                    }
                    t.toggleClass("fixed", e), t._fixed = e
                }
                return t
            }, show: function () {
                var e = this, t, n = e._super();
                for (t = f.length; t-- && f[t] !== e;);
                return -1 === t && f.push(e), n
            }, hide: function () {
                return l(this), this._super()
            }, hideAll: function () {
                h.hideAll()
            }, close: function () {
                var e = this;
                return e.fire("close"), e.remove()
            }, remove: function () {
                l(this), this._super()
            }, postRender: function () {
                var e = this;
                return e.settings.bodyRole && this.getEl("body").setAttribute("role", e.settings.bodyRole), e._super()
            }
        });
        return h.hideAll = function () {
            for (var e = f.length; e--;) {
                var t = f[e];
                t && t.settings.autohide && (t.hide(), f.splice(e, 1))
            }
        }, h
    }), r(rt, [nt, Z, j, J], function (e, t, n, r) {
        var i = e.extend({
            modal: !0,
            Defaults: {
                border: 1,
                layout: "flex",
                containerCls: "panel",
                role: "dialog",
                callbacks: {
                    submit: function () {
                        this.fire("submit", {data: this.toJSON()})
                    }, close: function () {
                        this.close()
                    }
                }
            },
            init: function (e) {
                var n = this;
                n._super(e), n.isRtl() && n.addClass("rtl"), n.addClass("window"), n._fixed = !0, e.buttons && (n.statusbar = new t({
                    layout: "flex",
                    border: "1 0 0 0",
                    spacing: 3,
                    padding: 10,
                    align: "center",
                    pack: n.isRtl() ? "start" : "end",
                    defaults: {type: "button"},
                    items: e.buttons
                }), n.statusbar.addClass("foot"), n.statusbar.parent(n)), n.on("click", function (e) {
                    -1 != e.target.className.indexOf(n.classPrefix + "close") && n.close()
                }), n.on("cancel", function () {
                    n.close()
                }), n.aria("describedby", n.describedBy || n._id + "-none"), n.aria("label", e.title), n._fullscreen = !1
            },
            recalc: function () {
                var e = this, t = e.statusbar, r, i, o, a;
                e._fullscreen && (e.layoutRect(n.getWindowSize()), e.layoutRect().contentH = e.layoutRect().innerH), e._super(), r = e.layoutRect(), e.settings.title && !e._fullscreen && (i = r.headerW, i > r.w && (o = r.x - Math.max(0, i / 2), e.layoutRect({
                    w: i,
                    x: o
                }), a = !0)), t && (t.layoutRect({w: e.layoutRect().innerW}).recalc(), i = t.layoutRect().minW + r.deltaW, i > r.w && (o = r.x - Math.max(0, i - r.w), e.layoutRect({
                    w: i,
                    x: o
                }), a = !0)), a && e.recalc()
            },
            initLayoutRect: function () {
                var e = this, t = e._super(), r = 0, i;
                if (e.settings.title && !e._fullscreen) {
                    i = e.getEl("head");
                    var o = n.getSize(i);
                    t.headerW = o.width, t.headerH = o.height, r += t.headerH
                }
                e.statusbar && (r += e.statusbar.layoutRect().h), t.deltaH += r, t.minH += r, t.h += r;
                var a = n.getWindowSize();
                return t.x = Math.max(0, a.w / 2 - t.w / 2), t.y = Math.max(0, a.h / 2 - t.h / 2), t
            },
            renderHtml: function () {
                var e = this, t = e._layout, n = e._id, r = e.classPrefix, i = e.settings, o = "", a = "", s = i.html;
                return e.preRender(), t.preRender(e), i.title && (o = '<div id="' + n + '-head" class="' + r + 'window-head"><div id="' + n + '-title" class="' + r + 'title">' + e.encode(i.title) + '</div><button type="button" class="' + r + 'close" aria-hidden="true">\xd7</button><div id="' + n + '-dragh" class="' + r + 'dragh"></div></div>'), i.url && (s = '<iframe src="' + i.url + '" tabindex="-1"></iframe>'), "undefined" == typeof s && (s = t.renderHtml(e)), e.statusbar && (a = e.statusbar.renderHtml()), '<div id="' + n + '" class="' + e.classes() + '" hidefocus="1"><div class="' + e.classPrefix + 'reset" role="application">' + o + '<div id="' + n + '-body" class="' + e.classes("body") + '">' + s + "</div>" + a + "</div></div>"
            },
            fullscreen: function (e) {
                var t = this, r = document.documentElement, i, o = t.classPrefix, a;
                if (e != t._fullscreen)if (n.on(window, "resize", function () {
                        var e;
                        if (t._fullscreen)if (i)t._timer || (t._timer = setTimeout(function () {
                            var e = n.getWindowSize();
                            t.moveTo(0, 0).resizeTo(e.w, e.h), t._timer = 0
                        }, 50)); else {
                            e = (new Date).getTime();
                            var r = n.getWindowSize();
                            t.moveTo(0, 0).resizeTo(r.w, r.h), (new Date).getTime() - e > 50 && (i = !0)
                        }
                    }), a = t.layoutRect(), t._fullscreen = e, e) {
                    t._initial = {
                        x: a.x,
                        y: a.y,
                        w: a.w,
                        h: a.h
                    }, t._borderBox = t.parseBox("0"), t.getEl("head").style.display = "none", a.deltaH -= a.headerH + 2, n.addClass(r, o + "fullscreen"), n.addClass(document.body, o + "fullscreen"), t.addClass("fullscreen");
                    var s = n.getWindowSize();
                    t.moveTo(0, 0).resizeTo(s.w, s.h)
                } else t._borderBox = t.parseBox(t.settings.border), t.getEl("head").style.display = "", a.deltaH += a.headerH, n.removeClass(r, o + "fullscreen"), n.removeClass(document.body, o + "fullscreen"), t.removeClass("fullscreen"), t.moveTo(t._initial.x, t._initial.y).resizeTo(t._initial.w, t._initial.h);
                return t.reflow()
            },
            postRender: function () {
                var e = this, t;
                setTimeout(function () {
                    e.addClass("in")
                }, 0), e._super(), e.statusbar && e.statusbar.postRender(), e.focus(), this.dragHelper = new r(e._id + "-dragh", {
                    start: function () {
                        t = {x: e.layoutRect().x, y: e.layoutRect().y}
                    }, drag: function (n) {
                        e.moveTo(t.x + n.deltaX, t.y + n.deltaY)
                    }
                }), e.on("submit", function (t) {
                    t.isDefaultPrevented() || e.close()
                })
            },
            submit: function () {
                return this.fire("submit", {data: this.toJSON()})
            },
            remove: function () {
                var e = this, t = e.classPrefix;
                e.dragHelper.destroy(), e._super(), e.statusbar && this.statusbar.remove(), e._fullscreen && (n.removeClass(document.documentElement, t + "fullscreen"), n.removeClass(document.body, t + "fullscreen"))
            },
            getContentWindow: function () {
                var e = this.getEl().getElementsByTagName("iframe")[0];
                return e ? e.contentWindow : null
            }
        });
        return i
    }), r(it, [rt], function (e) {
        var t = e.extend({
            init: function (e) {
                e = {
                    border: 1,
                    padding: 20,
                    layout: "flex",
                    pack: "center",
                    align: "center",
                    containerCls: "panel",
                    autoScroll: !0,
                    buttons: {type: "button", text: "Ok", action: "ok"},
                    items: {type: "label", multiline: !0, maxWidth: 500, maxHeight: 200}
                }, this._super(e)
            }, Statics: {
                OK: 1, OK_CANCEL: 2, YES_NO: 3, YES_NO_CANCEL: 4, msgBox: function (n) {
                    var r, i = n.callback || function () {
                        };
                    switch (n.buttons) {
                        case t.OK_CANCEL:
                            r = [{
                                type: "button", text: "Ok", subtype: "primary", onClick: function (e) {
                                    e.control.parents()[1].close(), i(!0)
                                }
                            }, {
                                type: "button", text: "Cancel", onClick: function (e) {
                                    e.control.parents()[1].close(), i(!1)
                                }
                            }];
                            break;
                        case t.YES_NO:
                            r = [{
                                type: "button", text: "Ok", subtype: "primary", onClick: function (e) {
                                    e.control.parents()[1].close(), i(!0)
                                }
                            }];
                            break;
                        case t.YES_NO_CANCEL:
                            r = [{
                                type: "button", text: "Ok", subtype: "primary", onClick: function (e) {
                                    e.control.parents()[1].close()
                                }
                            }];
                            break;
                        default:
                            r = [{
                                type: "button", text: "Ok", subtype: "primary", onClick: function (e) {
                                    e.control.parents()[1].close(), i(!0)
                                }
                            }]
                    }
                    return new e({
                        padding: 20,
                        x: n.x,
                        y: n.y,
                        minWidth: 300,
                        minHeight: 100,
                        layout: "flex",
                        pack: "center",
                        align: "center",
                        buttons: r,
                        title: n.title,
                        role: "alertdialog",
                        items: {type: "label", multiline: !0, maxWidth: 500, maxHeight: 200, text: n.text},
                        onPostRender: function () {
                            this.aria("describedby", this.items()[0]._id)
                        },
                        onClose: n.onClose,
                        onCancel: function () {
                            i(!1)
                        }
                    }).renderTo(document.body).reflow()
                }, alert: function (e, n) {
                    return "string" == typeof e && (e = {text: e}), e.callback = n, t.msgBox(e)
                }, confirm: function (e, n) {
                    return "string" == typeof e && (e = {text: e}), e.callback = n, e.buttons = t.OK_CANCEL, t.msgBox(e)
                }
            }
        });
        return t
    }), r(ot, [rt, it], function (e, t) {
        return function (n) {
            function r() {
                return o.length ? o[o.length - 1] : void 0
            }

            var i = this, o = [];
            i.windows = o, i.open = function (t, r) {
                var i;
                return n.editorManager.activeEditor = n, t.title = t.title || " ", t.url = t.url || t.file, t.url && (t.width = parseInt(t.width || 320, 10), t.height = parseInt(t.height || 240, 10)), t.body && (t.items = {
                    defaults: t.defaults,
                    type: t.bodyType || "form",
                    items: t.body
                }), t.url || t.buttons || (t.buttons = [{
                    text: "Ok", subtype: "primary", onclick: function () {
                        i.find("form")[0].submit()
                    }
                }, {
                    text: "Cancel", onclick: function () {
                        i.close()
                    }
                }]), i = new e(t), o.push(i), i.on("close", function () {
                    for (var e = o.length; e--;)o[e] === i && o.splice(e, 1);
                    n.focus()
                }), t.data && i.on("postRender", function () {
                    this.find("*").each(function (e) {
                        var n = e.name();
                        n in t.data && e.value(t.data[n])
                    })
                }), i.features = t || {}, i.params = r || {}, n.nodeChanged(), i.renderTo().reflow()
            }, i.alert = function (e, r, i) {
                t.alert(e, function () {
                    r ? r.call(i || this) : n.focus()
                })
            }, i.confirm = function (e, n, r) {
                t.confirm(e, function (e) {
                    n.call(r || this, e)
                })
            }, i.close = function () {
                r() && r().close()
            }, i.getParams = function () {
                return r() ? r().params : null
            }, i.setParams = function (e) {
                r() && (r().params = e)
            }, i.getWindows = function () {
                return o
            }
        }
    }), r(at, [R, B, x, h, g, p], function (e, t, n, r, i, o) {
        return function (a) {
            function s(e, t) {
                try {
                    a.getDoc().execCommand(e, !1, t)
                } catch (n) {
                }
            }

            function l() {
                var e = a.getDoc().documentMode;
                return e ? e : 6
            }

            function c(e) {
                return e.isDefaultPrevented()
            }

            function u() {
                function t(e) {
                    var t = new i(function () {
                    });
                    o.each(a.getBody().getElementsByTagName("*"), function (e) {
                        "SPAN" == e.tagName && e.setAttribute("mce-data-marked", 1), !e.hasAttribute("data-mce-style") && e.hasAttribute("style") && a.dom.setAttrib(e, "style", e.getAttribute("style"))
                    }), t.observe(a.getDoc(), {
                        childList: !0,
                        attributes: !0,
                        subtree: !0,
                        attributeFilter: ["style"]
                    }), a.getDoc().execCommand(e ? "ForwardDelete" : "Delete", !1, null);
                    var n = a.selection.getRng(), r = n.startContainer.parentNode;
                    o.each(t.takeRecords(), function (e) {
                        if (q.isChildOf(e.target, a.getBody())) {
                            if ("style" == e.attributeName) {
                                var t = e.target.getAttribute("data-mce-style");
                                t ? e.target.setAttribute("style", t) : e.target.removeAttribute("style")
                            }
                            o.each(e.addedNodes, function (e) {
                                if ("SPAN" == e.nodeName && !e.getAttribute("mce-data-marked")) {
                                    var t, i;
                                    e == r && (t = n.startOffset, i = e.firstChild), q.remove(e, !0), i && (n.setStart(i, t), n.setEnd(i, t), a.selection.setRng(n))
                                }
                            })
                        }
                    }), t.disconnect(), o.each(a.dom.select("span[mce-data-marked]"), function (e) {
                        e.removeAttribute("mce-data-marked")
                    })
                }

                var n = a.getDoc(), r = "data:text/mce-internal,", i = window.MutationObserver, s, l;
                i || (s = !0, i = function () {
                    function e(e) {
                        var t = e.relatedNode || e.target;
                        n.push({target: t, addedNodes: [t]})
                    }

                    function t(e) {
                        var t = e.relatedNode || e.target;
                        n.push({target: t, attributeName: e.attrName})
                    }

                    var n = [], r;
                    this.observe = function (n) {
                        r = n, r.addEventListener("DOMSubtreeModified", e, !1), r.addEventListener("DOMNodeInsertedIntoDocument", e, !1), r.addEventListener("DOMNodeInserted", e, !1), r.addEventListener("DOMAttrModified", t, !1)
                    }, this.disconnect = function () {
                        r.removeEventListener("DOMSubtreeModified", e, !1), r.removeEventListener("DOMNodeInsertedIntoDocument", e, !1), r.removeEventListener("DOMNodeInserted", e, !1), r.removeEventListener("DOMAttrModified", t, !1)
                    }, this.takeRecords = function () {
                        return n
                    }
                }), a.on("keydown", function (n) {
                    var r = n.keyCode == U, i = e.metaKeyPressed(n);
                    if (!c(n) && (r || n.keyCode == V)) {
                        var o = a.selection.getRng(), s = o.startContainer, l = o.startOffset;
                        if (!i && o.collapsed && 3 == s.nodeType && (r ? l < s.data.length : l > 0))return;
                        n.preventDefault(), i && a.selection.getSel().modify("extend", r ? "forward" : "backward", "word"), t(r)
                    }
                }), a.on("keypress", function (n) {
                    c(n) || $.isCollapsed() || !n.charCode || e.metaKeyPressed(n) || (n.preventDefault(), t(!0), a.selection.setContent(String.fromCharCode(n.charCode)))
                }), a.addCommand("Delete", function () {
                    t()
                }), a.addCommand("ForwardDelete", function () {
                    t(!0)
                }), s || (a.on("dragstart", function (e) {
                    var t;
                    a.selection.isCollapsed() && "IMG" == e.target.tagName && $.select(e.target), l = $.getRng(), t = a.selection.getContent(), t.length > 0 && e.dataTransfer.setData("URL", "data:text/mce-internal," + escape(t))
                }), a.on("drop", function (e) {
                    if (!c(e)) {
                        var i = e.dataTransfer.getData("URL");
                        if (!i || -1 == i.indexOf(r) || !n.caretRangeFromPoint)return;
                        i = unescape(i.substr(r.length)), n.caretRangeFromPoint && (e.preventDefault(), window.setTimeout(function () {
                            var r = n.caretRangeFromPoint(e.x, e.y);
                            l && ($.setRng(l), l = null), t(), $.setRng(r), a.insertContent(i)
                        }, 0))
                    }
                }), a.on("cut", function (e) {
                    !c(e) && e.clipboardData && (e.preventDefault(), e.clipboardData.clearData(), e.clipboardData.setData("text/html", a.selection.getContent()), e.clipboardData.setData("text/plain", a.selection.getContent({format: "text"})), t(!0))
                }))
            }

            function d() {
                function e(e) {
                    var t = q.create("body"), n = e.cloneContents();
                    return t.appendChild(n), $.serializer.serialize(t, {format: "html"})
                }

                function n(n) {
                    if (!n.setStart) {
                        if (n.item)return !1;
                        var r = n.duplicate();
                        return r.moveToElementText(a.getBody()), t.compareRanges(n, r)
                    }
                    var i = e(n), o = q.createRng();
                    o.selectNode(a.getBody());
                    var s = e(o);
                    return i === s
                }

                a.on("keydown", function (e) {
                    var t = e.keyCode, r, i;
                    if (!c(e) && (t == U || t == V)) {
                        if (r = a.selection.isCollapsed(), i = a.getBody(), r && !q.isEmpty(i))return;
                        if (!r && !n(a.selection.getRng()))return;
                        e.preventDefault(), a.setContent(""), i.firstChild && q.isBlock(i.firstChild) ? a.selection.setCursorLocation(i.firstChild, 0) : a.selection.setCursorLocation(i, 0), a.nodeChanged()
                    }
                })
            }

            function f() {
                a.on("keydown", function (t) {
                    !c(t) && 65 == t.keyCode && e.metaKeyPressed(t) && (t.preventDefault(), a.execCommand("SelectAll"))
                })
            }

            function p() {
                a.settings.content_editable || (q.bind(a.getDoc(), "focusin", function () {
                    $.setRng($.getRng())
                }), q.bind(a.getDoc(), "mousedown", function (e) {
                    e.target == a.getDoc().documentElement && (a.getBody().focus(), $.setRng($.getRng()))
                }))
            }

            function m() {
                a.on("keydown", function (e) {
                    if (!c(e) && e.keyCode === V && $.isCollapsed() && 0 === $.getRng(!0).startOffset) {
                        var t = $.getNode(), n = t.previousSibling;
                        if ("HR" == t.nodeName)return q.remove(t), void e.preventDefault();
                        n && n.nodeName && "hr" === n.nodeName.toLowerCase() && (q.remove(n), e.preventDefault())
                    }
                })
            }

            function h() {
                window.Range.prototype.getClientRects || a.on("mousedown", function (e) {
                    if (!c(e) && "HTML" === e.target.nodeName) {
                        var t = a.getBody();
                        t.blur(), setTimeout(function () {
                            t.focus()
                        }, 0)
                    }
                })
            }

            function g() {
                a.on("click", function (e) {
                    e = e.target, /^(IMG|HR)$/.test(e.nodeName) && $.getSel().setBaseAndExtent(e, 0, e, 1), "A" == e.nodeName && q.hasClass(e, "mce-item-anchor") && $.select(e), a.nodeChanged()
                })
            }

            function v() {
                function e() {
                    var e = q.getAttribs($.getStart().cloneNode(!1));
                    return function () {
                        var t = $.getStart();
                        t !== a.getBody() && (q.setAttrib(t, "style", null), W(e, function (e) {
                            t.setAttributeNode(e.cloneNode(!0))
                        }))
                    }
                }

                function t() {
                    return !$.isCollapsed() && q.getParent($.getStart(), q.isBlock) != q.getParent($.getEnd(), q.isBlock)
                }

                a.on("keypress", function (n) {
                    var r;
                    return c(n) || 8 != n.keyCode && 46 != n.keyCode || !t() ? void 0 : (r = e(), a.getDoc().execCommand("delete", !1, null), r(), n.preventDefault(), !1)
                }), q.bind(a.getDoc(), "cut", function (n) {
                    var r;
                    !c(n) && t() && (r = e(), setTimeout(function () {
                        r()
                    }, 0))
                })
            }

            function y() {
                var e, n;
                a.on("selectionchange", function () {
                    n && (clearTimeout(n), n = 0), n = window.setTimeout(function () {
                        if (!a.removed) {
                            var n = $.getRng();
                            e && t.compareRanges(n, e) || (a.nodeChanged(), e = n)
                        }
                    }, 50)
                })
            }

            function b() {
                document.body.setAttribute("role", "application")
            }

            function C() {
                a.on("keydown", function (e) {
                    if (!c(e) && e.keyCode === V && $.isCollapsed() && 0 === $.getRng(!0).startOffset) {
                        var t = $.getNode().previousSibling;
                        if (t && t.nodeName && "table" === t.nodeName.toLowerCase())return e.preventDefault(), !1
                    }
                })
            }

            function x() {
                l() > 7 || (s("RespectVisibilityInDesign", !0), a.contentStyles.push(".mceHideBrInPre pre br {display: none}"), q.addClass(a.getBody(), "mceHideBrInPre"), K.addNodeFilter("pre", function (e) {
                    for (var t = e.length, r, i, o, a; t--;)for (r = e[t].getAll("br"), i = r.length; i--;)o = r[i], a = o.prev, a && 3 === a.type && "\n" != a.value.charAt(a.value - 1) ? a.value += "\n" : o.parent.insert(new n("#text", 3), o, !0).value = "\n"
                }), G.addNodeFilter("pre", function (e) {
                    for (var t = e.length, n, r, i, o; t--;)for (n = e[t].getAll("br"), r = n.length; r--;)i = n[r], o = i.prev, o && 3 == o.type && (o.value = o.value.replace(/\r?\n$/, ""))
                }))
            }

            function w() {
                q.bind(a.getBody(), "mouseup", function () {
                    var e, t = $.getNode();
                    "IMG" == t.nodeName && ((e = q.getStyle(t, "width")) && (q.setAttrib(t, "width", e.replace(/[^0-9%]+/g, "")), q.setStyle(t, "width", "")), (e = q.getStyle(t, "height")) && (q.setAttrib(t, "height", e.replace(/[^0-9%]+/g, "")), q.setStyle(t, "height", "")))
                })
            }

            function _() {
                a.on("keydown", function (t) {
                    var n, r, i, o, s;
                    if (!c(t) && t.keyCode == e.BACKSPACE && (n = $.getRng(), r = n.startContainer, i = n.startOffset, o = q.getRoot(), s = r, n.collapsed && 0 === i)) {
                        for (; s && s.parentNode && s.parentNode.firstChild == s && s.parentNode != o;)s = s.parentNode;
                        "BLOCKQUOTE" === s.tagName && (a.formatter.toggle("blockquote", null, s), n = q.createRng(), n.setStart(r, 0), n.setEnd(r, 0), $.setRng(n))
                    }
                })
            }

            function N() {
                function e() {
                    a._refreshContentEditable(), s("StyleWithCSS", !1), s("enableInlineTableEditing", !1), j.object_resizing || s("enableObjectResizing", !1)
                }

                j.readonly || a.on("BeforeExecCommand MouseDown", e)
            }

            function E() {
                function e() {
                    W(q.select("a"), function (e) {
                        var t = e.parentNode, n = q.getRoot();
                        if (t.lastChild === e) {
                            for (; t && !q.isBlock(t);) {
                                if (t.parentNode.lastChild !== t || t === n)return;
                                t = t.parentNode
                            }
                            q.add(t, "br", {"data-mce-bogus": 1})
                        }
                    })
                }

                a.on("SetContent ExecCommand", function (t) {
                    ("setcontent" == t.type || "mceInsertLink" === t.command) && e()
                })
            }

            function k() {
                j.forced_root_block && a.on("init", function () {
                    s("DefaultParagraphSeparator", j.forced_root_block)
                })
            }

            function S() {
                a.on("Undo Redo SetContent", function (e) {
                    e.initial || a.execCommand("mceRepaint")
                })
            }

            function T() {
                a.on("keydown", function (e) {
                    var t;
                    c(e) || e.keyCode != V || (t = a.getDoc().selection.createRange(), t && t.item && (e.preventDefault(), a.undoManager.beforeChange(), q.remove(t.item(0)), a.undoManager.add()))
                })
            }

            function R() {
                var e;
                l() >= 10 && (e = "", W("p div h1 h2 h3 h4 h5 h6".split(" "), function (t, n) {
                    e += (n > 0 ? "," : "") + t + ":empty"
                }), a.contentStyles.push(e + "{padding-right: 1px !important}"))
            }

            function A() {
                l() < 9 && (K.addNodeFilter("noscript", function (e) {
                    for (var t = e.length, n, r; t--;)n = e[t], r = n.firstChild, r && n.attr("data-mce-innertext", r.value)
                }), G.addNodeFilter("noscript", function (e) {
                    for (var t = e.length, i, o, a; t--;)i = e[t], o = e[t].firstChild, o ? o.value = r.decode(o.value) : (a = i.attributes.map["data-mce-innertext"], a && (i.attr("data-mce-innertext", null), o = new n("#text", 3), o.value = a, o.raw = !0, i.append(o)))
                }))
            }

            function B() {
                function e(e, t) {
                    var n = i.createTextRange();
                    try {
                        n.moveToPoint(e, t)
                    } catch (r) {
                        n = null
                    }
                    return n
                }

                function t(t) {
                    var r;
                    t.button ? (r = e(t.x, t.y), r && (r.compareEndPoints("StartToStart", a) > 0 ? r.setEndPoint("StartToStart", a) : r.setEndPoint("EndToEnd", a), r.select())) : n()
                }

                function n() {
                    var e = r.selection.createRange();
                    a && !e.item && 0 === e.compareEndPoints("StartToEnd", e) && a.select(), q.unbind(r, "mouseup", n), q.unbind(r, "mousemove", t), a = o = 0
                }

                var r = q.doc, i = r.body, o, a, s;
                r.documentElement.unselectable = !0, q.bind(r, "mousedown contextmenu", function (i) {
                    if ("HTML" === i.target.nodeName) {
                        if (o && n(), s = r.documentElement, s.scrollHeight > s.clientHeight)return;
                        o = 1, a = e(i.x, i.y), a && (q.bind(r, "mouseup", n), q.bind(r, "mousemove", t), q.getRoot().focus(), a.select())
                    }
                })
            }

            function D() {
                a.on("keyup focusin mouseup", function (t) {
                    65 == t.keyCode && e.metaKeyPressed(t) || $.normalize()
                }, !0)
            }

            function L() {
                a.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")
            }

            function M() {
                a.inline || a.on("keydown", function () {
                    document.activeElement == document.body && a.getWin().focus()
                })
            }

            function H() {
                a.inline || (a.contentStyles.push("body {min-height: 150px}"), a.on("click", function (e) {
                    "HTML" == e.target.nodeName && (a.getBody().focus(), a.selection.normalize(), a.nodeChanged())
                }))
            }

            function P() {
                i.mac && a.on("keydown", function (t) {
                    !e.metaKeyPressed(t) || 37 != t.keyCode && 39 != t.keyCode || (t.preventDefault(), a.selection.getSel().modify("move", 37 == t.keyCode ? "backward" : "forward", "word"))
                })
            }

            function O() {
                s("AutoUrlDetect", !1)
            }

            function I() {
                a.inline || a.on("focus blur beforegetcontent", function () {
                    var e = a.dom.create("br");
                    a.getBody().appendChild(e), e.parentNode.removeChild(e)
                }, !0)
            }

            function F() {
                a.on("click", function (e) {
                    var t = e.target;
                    do if ("A" === t.tagName)return void e.preventDefault(); while (t = t.parentNode)
                }), a.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")
            }

            function z() {
                a.on("init", function () {
                    a.dom.bind(a.getBody(), "submit", function (e) {
                        e.preventDefault()
                    })
                })
            }

            var W = o.each, V = e.BACKSPACE, U = e.DELETE, q = a.dom, $ = a.selection, j = a.settings, K = a.parser, G = a.serializer, Y = i.gecko, X = i.ie, J = i.webkit;
            C(), _(), d(), D(), J && (u(), p(), g(), k(), z(), i.iOS ? (y(), M(), H(), F()) : f()), X && i.ie < 11 && (m(), b(), x(), w(), T(), R(), A(), B()), i.ie >= 11 && (H(), I()), i.ie && (f(), O()), Y && (m(), h(), v(), N(), E(), S(), L(), P())
        }
    }), r(st, [U], function (e) {
        function t(t) {
            return t._eventDispatcher || (t._eventDispatcher = new e({
                scope: t, toggleEvent: function (n, r) {
                    e.isNative(n) && t.toggleNativeEvent && t.toggleNativeEvent(n, r)
                }
            })), t._eventDispatcher
        }

        return {
            fire: function (e, n, r) {
                var i = this;
                if (i.removed && "remove" !== e)return n;
                if (n = t(i).fire(e, n, r), r !== !1 && i.parent)for (var o = i.parent(); o && !n.isPropagationStopped();)o.fire(e, n, !1), o = o.parent();
                return n
            }, on: function (e, n, r) {
                return t(this).on(e, n, r)
            }, off: function (e, n) {
                return t(this).off(e, n)
            }, hasEventListeners: function (e) {
                return t(this).has(e)
            }
        }
    }), r(lt, [st, y, p], function (e, t, n) {
        function r(e, t) {
            return "selectionchange" == t ? e.getDoc() : !e.inline && /^mouse|click|contextmenu|drop/.test(t) ? e.getDoc() : e.getBody()
        }

        function i(e, t) {
            var n = e.settings.event_root, i = e.editorManager, a = i.eventRootElm || r(e, t);
            if (n) {
                if (i.rootEvents || (i.rootEvents = {}, i.on("RemoveEditor", function () {
                        i.activeEditor || (o.unbind(a), delete i.rootEvents)
                    })), i.rootEvents[t])return;
                a == e.getBody() && (a = o.select(n)[0], i.eventRootElm = a), i.rootEvents[t] = !0, o.bind(a, t, function (e) {
                    for (var n = e.target, r = i.editors, a = r.length; a--;) {
                        var s = r[a].getBody();
                        (s === n || o.isChildOf(n, s)) && (r[a].hidden || r[a].fire(t, e))
                    }
                })
            } else e.dom.bind(a, t, function (n) {
                e.hidden || e.fire(t, n)
            })
        }

        var o = t.DOM, a = {
            bindPendingEventDelegates: function () {
                var e = this;
                n.each(e._pendingNativeEvents, function (t) {
                    i(e, t)
                })
            }, toggleNativeEvent: function (e, t) {
                var n = this;
                n.settings.readonly || "focus" != e && "blur" != e && (t ? n.initialized ? i(n, e) : n._pendingNativeEvents ? n._pendingNativeEvents.push(e) : n._pendingNativeEvents = [e] : n.initialized && n.dom.unbind(r(n, e), e))
            }
        };
        return a = n.extend({}, e, a)
    }), r(ct, [p, g], function (e, t) {
        var n = e.each, r = e.explode, i = {f9: 120, f10: 121, f11: 122};
        return function (o) {
            var a = this, s = {};
            o.on("keyup keypress keydown", function (e) {
                (e.altKey || e.ctrlKey || e.metaKey) && n(s, function (n) {
                    var r = t.mac ? e.metaKey : e.ctrlKey;
                    if (n.ctrl == r && n.alt == e.altKey && n.shift == e.shiftKey)return e.keyCode == n.keyCode || e.charCode && e.charCode == n.charCode ? (e.preventDefault(), "keydown" == e.type && n.func.call(n.scope), !0) : void 0
                })
            }), a.add = function (t, a, l, c) {
                var u;
                return u = l, "string" == typeof l ? l = function () {
                    o.execCommand(u, !1, null)
                } : e.isArray(u) && (l = function () {
                    o.execCommand(u[0], u[1], u[2])
                }), n(r(t.toLowerCase()), function (e) {
                    var t = {func: l, scope: c || o, desc: o.translate(a), alt: !1, ctrl: !1, shift: !1};
                    n(r(e, "+"), function (e) {
                        switch (e) {
                            case"alt":
                            case"ctrl":
                            case"shift":
                                t[e] = !0;
                                break;
                            default:
                                /^[0-9]{2,}$/.test(e) ? t.keyCode = parseInt(e, 10) : (t.charCode = e.charCodeAt(0), t.keyCode = i[e] || e.toUpperCase().charCodeAt(0))
                        }
                    }), s[(t.ctrl ? "ctrl" : "") + "," + (t.alt ? "alt" : "") + "," + (t.shift ? "shift" : "") + "," + t.keyCode] = t
                }), !0
            }
        }
    }), r(ut, [y, C, x, S, k, L, P, O, I, F, z, W, b, l, ot, w, N, at, g, p, lt, ct], function (e, n, r, i, o, a, s, l, c, u, d, f, p, m, h, g, v, y, b, C, x, w) {
        function _(e, t, r) {
            var i = this, o, a;
            o = i.documentBaseUrl = r.documentBaseURL, a = r.baseURI, i.settings = t = S({
                id: e,
                theme: "modern",
                delta_width: 0,
                delta_height: 0,
                popup_css: "",
                plugins: "",
                document_base_url: o,
                add_form_submit_trigger: !0,
                submit_patch: !0,
                add_unload_trigger: !0,
                convert_urls: !0,
                relative_urls: !0,
                remove_script_host: !0,
                object_resizing: !0,
                doctype: "<!DOCTYPE html>",
                visual: !0,
                font_size_style_values: "xx-small,x-small,small,medium,large,x-large,xx-large",
                font_size_legacy_values: "xx-small,small,medium,large,x-large,xx-large,300%",
                forced_root_block: "p",
                hidden_input: !0,
                padd_empty_editor: !0,
                render_ui: !0,
                indentation: "30px",
                inline_styles: !0,
                convert_fonts_to_spans: !0,
                indent: "simple",
                indent_before: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",
                indent_after: "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,ul,li,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,option,optgroup,datalist",
                validate: !0,
                entity_encoding: "named",
                url_converter: i.convertURL,
                url_converter_scope: i,
                ie7_compat: !0
            }, t), n.language = t.language || "en", n.languageLoad = t.language_load, n.baseURL = r.baseURL, i.id = t.id = e, i.isNotDirty = !0, i.plugins = {}, i.documentBaseURI = new f(t.document_base_url || o, {base_uri: a}), i.baseURI = a, i.contentCSS = [], i.contentStyles = [], i.shortcuts = new w(i), i.execCommands = {}, i.queryStateCommands = {}, i.queryValueCommands = {}, i.loadedCSS = {}, i.suffix = r.suffix, i.editorManager = r, i.inline = t.inline, r.fire("SetupEditor", i), i.execCallback("setup", i)
        }

        var N = e.DOM, E = n.ThemeManager, k = n.PluginManager, S = C.extend, T = C.each, R = C.explode, A = C.inArray, B = C.trim, D = C.resolve, L = m.Event, M = b.gecko, H = b.ie;
        return _.prototype = {
            render: function () {
                function e() {
                    N.unbind(window, "ready", e), n.render()
                }

                function t() {
                    var e = p.ScriptLoader;
                    if (r.language && "en" != r.language && !r.language_url && (r.language_url = n.editorManager.baseURL + "/langs/" + r.language + ".js"), r.language_url && e.add(r.language_url), r.theme && "function" != typeof r.theme && "-" != r.theme.charAt(0) && !E.urls[r.theme]) {
                        var t = r.theme_url;
                        t = t ? n.documentBaseURI.toAbsolute(t) : "themes/" + r.theme + "/theme" + o + ".js", E.load(r.theme, t)
                    }
                    C.isArray(r.plugins) && (r.plugins = r.plugins.join(" ")), T(r.external_plugins, function (e, t) {
                        k.load(t, e), r.plugins += " " + t
                    }), T(r.plugins.split(/[ ,]/), function (e) {
                        if (e = B(e), e && !k.urls[e])if ("-" == e.charAt(0)) {
                            e = e.substr(1, e.length);
                            var t = k.dependencies(e);
                            T(t, function (e) {
                                var t = {prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js"};
                                e = k.createUrl(t, e), k.load(e.resource, e)
                            })
                        } else k.load(e, {prefix: "plugins/", resource: e, suffix: "/plugin" + o + ".js"})
                    }), e.loadQueue(function () {
                        n.removed || n.init()
                    })
                }

                var n = this, r = n.settings, i = n.id, o = n.suffix;
                if (!L.domLoaded)return void N.bind(window, "ready", e);
                if (n.getElement() && b.contentEditable) {
                    r.inline ? n.inline = !0 : (n.orgVisibility = n.getElement().style.visibility, n.getElement().style.visibility = "hidden");
                    var a = n.getElement().form || N.getParent(i, "form");
                    a && (n.formElement = a, r.hidden_input && !/TEXTAREA|INPUT/i.test(n.getElement().nodeName) && (N.insertAfter(N.create("input", {
                        type: "hidden",
                        name: i
                    }), i), n.hasHiddenInput = !0), n.formEventDelegate = function (e) {
                        n.fire(e.type, e)
                    }, N.bind(a, "submit reset", n.formEventDelegate), n.on("reset", function () {
                        n.setContent(n.startContent, {format: "raw"})
                    }), !r.submit_patch || a.submit.nodeType || a.submit.length || a._mceOldSubmit || (a._mceOldSubmit = a.submit, a.submit = function () {
                        return n.editorManager.triggerSave(), n.isNotDirty = !0, a._mceOldSubmit(a)
                    })), n.windowManager = new h(n), "xml" == r.encoding && n.on("GetContent", function (e) {
                        e.save && (e.content = N.encode(e.content))
                    }), r.add_form_submit_trigger && n.on("submit", function () {
                        n.initialized && n.save()
                    }), r.add_unload_trigger && (n._beforeUnload = function () {
                        !n.initialized || n.destroyed || n.isHidden() || n.save({
                            format: "raw",
                            no_events: !0,
                            set_dirty: !1
                        })
                    }, n.editorManager.on("BeforeUnload", n._beforeUnload)), t()
                }
            }, init: function () {
                function e(n) {
                    var r = k.get(n), i, o;
                    i = k.urls[n] || t.documentBaseUrl.replace(/\/$/, ""), n = B(n), r && -1 === A(h, n) && (T(k.dependencies(n), function (t) {
                        e(t)
                    }), o = new r(t, i), t.plugins[n] = o, o.init && (o.init(t, i), h.push(n)))
                }

                var t = this, n = t.settings, r = t.getElement(), i, o, a, s, l, c, u, d, f, p, m, h = [];
                if (t.rtl = this.editorManager.i18n.rtl, t.editorManager.add(t), n.aria_label = n.aria_label || N.getAttrib(r, "aria-label", t.getLang("aria.rich_text_area")), n.theme && ("function" != typeof n.theme ? (n.theme = n.theme.replace(/-/, ""), c = E.get(n.theme), t.theme = new c(t, E.urls[n.theme]), t.theme.init && t.theme.init(t, E.urls[n.theme] || t.documentBaseUrl.replace(/\/$/, ""))) : t.theme = n.theme), T(n.plugins.replace(/\-/g, "").split(/[ ,]/), e), n.render_ui && t.theme && (t.orgDisplay = r.style.display, "function" != typeof n.theme ? (i = n.width || r.style.width || r.offsetWidth, o = n.height || r.style.height || r.offsetHeight, a = n.min_height || 100, p = /^[0-9\.]+(|px)$/i, p.test("" + i) && (i = Math.max(parseInt(i, 10), 100)), p.test("" + o) && (o = Math.max(parseInt(o, 10), a)), l = t.theme.renderUI({
                        targetNode: r,
                        width: i,
                        height: o,
                        deltaWidth: n.delta_width,
                        deltaHeight: n.delta_height
                    }), n.content_editable || (N.setStyles(l.sizeContainer || l.editorContainer, {
                        wi2dth: i,
                        h2eight: o
                    }), o = (l.iframeHeight || o) + ("number" == typeof o ? l.deltaHeight || 0 : ""), a > o && (o = a))) : (l = n.theme(t, r), l.editorContainer.nodeType && (l.editorContainer = l.editorContainer.id = l.editorContainer.id || t.id + "_parent"), l.iframeContainer.nodeType && (l.iframeContainer = l.iframeContainer.id = l.iframeContainer.id || t.id + "_iframecontainer"), o = l.iframeHeight || r.offsetHeight), t.editorContainer = l.editorContainer), n.content_css && T(R(n.content_css), function (e) {
                        t.contentCSS.push(t.documentBaseURI.toAbsolute(e))
                    }), n.content_style && t.contentStyles.push(n.content_style), n.content_editable)return r = s = l = null, t.initContentBody();
                for (t.iframeHTML = n.doctype + "<html><head>", n.document_base_url != t.documentBaseUrl && (t.iframeHTML += '<base href="' + t.documentBaseURI.getURI() + '" />'), !b.caretAfter && n.ie7_compat && (t.iframeHTML += '<meta http-equiv="X-UA-Compatible" content="IE=7" />'), t.iframeHTML += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />', m = 0; m < t.contentCSS.length; m++) {
                    var g = t.contentCSS[m];
                    t.iframeHTML += '<link type="text/css" rel="stylesheet" href="' + g + '" />', t.loadedCSS[g] = !0
                }
                d = n.body_id || "tinymce", -1 != d.indexOf("=") && (d = t.getParam("body_id", "", "hash"), d = d[t.id] || d), f = n.body_class || "", -1 != f.indexOf("=") && (f = t.getParam("body_class", "", "hash"), f = f[t.id] || ""), t.iframeHTML += '</head><body id="' + d + '" class="mce-content-body ' + f + '" onload="window.parent.tinymce.get(\'' + t.id + "').fire('load');\"><br></body></html>";
                var v = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var ed = window.parent.tinymce.get("' + t.id + '");document.write(ed.iframeHTML);document.close();ed.initContentBody(true);})()';
                if (document.domain != location.hostname && (u = v), s = N.add(l.iframeContainer, "iframe", {
                        id: t.id + "_ifr",
                        src: u || 'javascript:""',
                        frameBorder: "0",
                        allowTransparency: "true",
                        title: t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),
                        style: {width: "100%", height: o, display: "block"}
                    }), H)try {
                    t.getDoc()
                } catch (y) {
                    s.src = u = v
                }
                t.contentAreaContainer = l.iframeContainer, l.editorContainer && (N.get(l.editorContainer).style.display = t.orgDisplay), N.get(t.id).style.display = "none", N.setAttrib(t.id, "aria-hidden", !0), u || t.initContentBody(), r = s = l = null
            }, initContentBody: function (t) {
                var n = this, o = n.settings, f = N.get(n.id), p = n.getDoc(), m, h;
                o.inline || (n.getElement().style.visibility = n.orgVisibility), t || o.content_editable || (p.open(), p.write(n.iframeHTML), p.close()), o.content_editable && (n.on("remove", function () {
                    var e = this.getBody();
                    N.removeClass(e, "mce-content-body"), N.removeClass(e, "mce-edit-focus"), N.setAttrib(e, "contentEditable", null)
                }), N.addClass(f, "mce-content-body"), n.contentDocument = p = o.content_document || document, n.contentWindow = o.content_window || window, n.bodyElement = f, o.content_document = o.content_window = null, o.root_name = f.nodeName.toLowerCase()), m = n.getBody(), m.disabled = !0, o.readonly || (n.inline && "static" == N.getStyle(m, "position", !0) && (m.style.position = "relative"), m.contentEditable = n.getParam("content_editable_state", !0)), m.disabled = !1, n.schema = new g(o), n.dom = new e(p, {
                    keep_values: !0,
                    url_converter: n.convertURL,
                    url_converter_scope: n,
                    hex_colors: o.force_hex_style_colors,
                    class_filter: o.class_filter,
                    update_styles: !0,
                    root_element: o.content_editable ? n.id : null,
                    collect: o.content_editable,
                    schema: n.schema,
                    onSetAttrib: function (e) {
                        n.fire("SetAttrib", e)
                    }
                }), n.parser = new v(o, n.schema), n.parser.addAttributeFilter("src,href,style,tabindex", function (e, t) {
                    for (var r = e.length, i, o = n.dom, a, s; r--;)i = e[r], a = i.attr(t), s = "data-mce-" + t, i.attributes.map[s] || ("style" === t ? (a = o.serializeStyle(o.parseStyle(a), i.name), a.length || (a = null), i.attr(s, a), i.attr(t, a)) : "tabindex" === t ? (i.attr(s, a), i.attr(t, null)) : i.attr(s, n.convertURL(a, t, i.name)))
                }), n.parser.addNodeFilter("script", function (e) {
                    for (var t = e.length, n; t--;)n = e[t], n.attr("type", "mce-" + (n.attr("type") || "no/type"))
                }), n.parser.addNodeFilter("#cdata", function (e) {
                    for (var t = e.length, n; t--;)n = e[t], n.type = 8, n.name = "#comment", n.value = "[CDATA[" + n.value + "]]"
                }), n.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
                    for (var t = e.length, i, o = n.schema.getNonEmptyElements(); t--;)i = e[t], i.isEmpty(o) && (i.empty().append(new r("br", 1)).shortEnded = !0)
                }), n.serializer = new i(o, n), n.selection = new a(n.dom, n.getWin(), n.serializer, n), n.formatter = new s(n), n.undoManager = new l(n), n.forceBlocks = new u(n), n.enterKey = new c(n), n.editorCommands = new d(n), n.fire("PreInit"), o.browser_spellcheck || o.gecko_spellcheck || (p.body.spellcheck = !1, N.setAttrib(m, "spellcheck", "false")), n.fire("PostRender"), n.quirks = y(n), o.directionality && (m.dir = o.directionality), o.nowrap && (m.style.whiteSpace = "nowrap"), o.protect && n.on("BeforeSetContent", function (e) {
                    T(o.protect, function (t) {
                        e.content = e.content.replace(t, function (e) {
                            return "<!--mce:protected " + escape(e) + "-->"
                        })
                    })
                }), n.on("SetContent", function () {
                    n.addVisual(n.getBody())
                }), o.padd_empty_editor && n.on("PostProcess", function (e) {
                    e.content = e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/, "")
                }), n.load({
                    initial: !0,
                    format: "html"
                }), n.startContent = n.getContent({format: "raw"}), n.initialized = !0, n.bindPendingEventDelegates(), n.fire("init"), n.focus(!0), n.nodeChanged({initial: !0}), n.execCallback("init_instance_callback", n), n.contentStyles.length > 0 && (h = "", T(n.contentStyles, function (e) {
                    h += e + "\r\n"
                }), n.dom.addStyle(h)), T(n.contentCSS, function (e) {
                    n.loadedCSS[e] || (n.dom.loadCSS(e), n.loadedCSS[e] = !0)
                }), o.auto_focus && setTimeout(function () {
                    var e = n.editorManager.get(o.auto_focus);
                    e.selection.select(e.getBody(), 1), e.selection.collapse(1), e.getBody().focus(), e.getWin().focus()
                }, 100), f = p = m = null
            }, focus: function (e) {
                var t, n = this, r = n.selection, i = n.settings.content_editable, o, a, s = n.getDoc(), l;
                if (!e) {
                    if (o = r.getRng(), o.item && (a = o.item(0)), n._refreshContentEditable(), i || (b.opera || n.getBody().focus(), n.getWin().focus()), M || i) {
                        if (l = n.getBody(), l.setActive)try {
                            l.setActive()
                        } catch (c) {
                            l.focus()
                        } else l.focus();
                        i && r.normalize()
                    }
                    a && a.ownerDocument == s && (o = s.body.createControlRange(), o.addElement(a), o.select())
                }
                n.editorManager.activeEditor != n && ((t = n.editorManager.activeEditor) && t.fire("deactivate", {relatedTarget: n}), n.fire("activate", {relatedTarget: t})), n.editorManager.activeEditor = n
            }, execCallback: function (e) {
                var t = this, n = t.settings[e], r;
                if (n)return t.callbackLookup && (r = t.callbackLookup[e]) && (n = r.func, r = r.scope), "string" == typeof n && (r = n.replace(/\.\w+$/, ""), r = r ? D(r) : 0, n = D(n), t.callbackLookup = t.callbackLookup || {}, t.callbackLookup[e] = {
                    func: n,
                    scope: r
                }), n.apply(r || t, Array.prototype.slice.call(arguments, 1))
            }, translate: function (e) {
                var t = this.settings.language || "en", n = this.editorManager.i18n;
                return e ? n.data[t + "." + e] || e.replace(/\{\#([^\}]+)\}/g, function (e, r) {
                    return n.data[t + "." + r] || "{#" + r + "}"
                }) : ""
            }, getLang: function (e, n) {
                return this.editorManager.i18n.data[(this.settings.language || "en") + "." + e] || (n !== t ? n : "{#" + e + "}")
            }, getParam: function (e, t, n) {
                var r = e in this.settings ? this.settings[e] : t, i;
                return "hash" === n ? (i = {}, "string" == typeof r ? T(r.split(r.indexOf("=") > 0 ? /[;,](?![^=;,]*(?:[;,]|$))/ : ","), function (e) {
                    e = e.split("="), i[B(e[0])] = B(e.length > 1 ? e[1] : e)
                }) : i = r, i) : r
            }, nodeChanged: function () {
                var e = this, t = e.selection, n, r, i;
                !e.initialized || e.settings.disable_nodechange || e.settings.readonly || (i = e.getBody(), n = t.getStart() || i, n = H && n.ownerDocument != e.getDoc() ? e.getBody() : n, "IMG" == n.nodeName && t.isCollapsed() && (n = n.parentNode), r = [], e.dom.getParent(n, function (e) {
                    return e === i ? !0 : void r.push(e)
                }), e.fire("NodeChange", {element: n, parents: r}))
            }, addButton: function (e, t) {
                var n = this;
                t.cmd && (t.onclick = function () {
                    n.execCommand(t.cmd)
                }), t.text || t.icon || (t.icon = e), n.buttons = n.buttons || {}, t.tooltip = t.tooltip || t.title, n.buttons[e] = t
            }, addMenuItem: function (e, t) {
                var n = this;
                t.cmd && (t.onclick = function () {
                    n.execCommand(t.cmd)
                }), n.menuItems = n.menuItems || {}, n.menuItems[e] = t
            }, addCommand: function (e, t, n) {
                this.execCommands[e] = {func: t, scope: n || this}
            }, addQueryStateHandler: function (e, t, n) {
                this.queryStateCommands[e] = {func: t, scope: n || this}
            }, addQueryValueHandler: function (e, t, n) {
                this.queryValueCommands[e] = {func: t, scope: n || this}
            }, addShortcut: function (e, t, n, r) {
                this.shortcuts.add(e, t, n, r)
            }, execCommand: function (e, t, n, r) {
                var i = this, o = 0, a;
                if (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e) || r && r.skip_focus || i.focus(), r = S({}, r), r = i.fire("BeforeExecCommand", {
                        command: e,
                        ui: t,
                        value: n
                    }), r.isDefaultPrevented())return !1;
                if ((a = i.execCommands[e]) && a.func.call(a.scope, t, n) !== !0)return i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0;
                if (T(i.plugins, function (r) {
                        return r.execCommand && r.execCommand(e, t, n) ? (i.fire("ExecCommand", {
                            command: e,
                            ui: t,
                            value: n
                        }), o = !0, !1) : void 0
                    }), o)return o;
                if (i.theme && i.theme.execCommand && i.theme.execCommand(e, t, n))return i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0;
                if (i.editorCommands.execCommand(e, t, n))return i.fire("ExecCommand", {
                    command: e,
                    ui: t,
                    value: n
                }), !0;
                try {
                    o = i.getDoc().execCommand(e, t, n)
                } catch (s) {
                }
                return o ? (i.fire("ExecCommand", {command: e, ui: t, value: n}), !0) : !1
            }, queryCommandState: function (e) {
                var t = this, n, r;
                if (!t._isHidden()) {
                    if ((n = t.queryStateCommands[e]) && (r = n.func.call(n.scope), r === !0 || r === !1))return r;
                    if (r = t.editorCommands.queryCommandState(e), -1 !== r)return r;
                    try {
                        return t.getDoc().queryCommandState(e)
                    } catch (i) {
                    }
                }
            }, queryCommandValue: function (e) {
                var n = this, r, i;
                if (!n._isHidden()) {
                    if ((r = n.queryValueCommands[e]) && (i = r.func.call(r.scope), i !== !0))return i;
                    if (i = n.editorCommands.queryCommandValue(e), i !== t)return i;
                    try {
                        return n.getDoc().queryCommandValue(e)
                    } catch (o) {
                    }
                }
            }, show: function () {
                var e = this;
                e.hidden && (e.hidden = !1, e.inline ? e.getBody().contentEditable = !0 : (N.show(e.getContainer()), N.hide(e.id)), e.load(), e.fire("show"))
            }, hide: function () {
                var e = this, t = e.getDoc();
                e.hidden || (H && t && !e.inline && t.execCommand("SelectAll"), e.save(), e.inline ? (e.getBody().contentEditable = !1, e == e.editorManager.focusedEditor && (e.editorManager.focusedEditor = null)) : (N.hide(e.getContainer()), N.setStyle(e.id, "display", e.orgDisplay)), e.hidden = !0, e.fire("hide"))
            }, isHidden: function () {
                return !!this.hidden
            }, setProgressState: function (e, t) {
                this.fire("ProgressState", {state: e, time: t})
            }, load: function (e) {
                var n = this, r = n.getElement(), i;
                return r ? (e = e || {}, e.load = !0, i = n.setContent(r.value !== t ? r.value : r.innerHTML, e), e.element = r, e.no_events || n.fire("LoadContent", e), e.element = r = null, i) : void 0
            }, save: function (e) {
                var t = this, n = t.getElement(), r, i;
                if (n && t.initialized)return e = e || {}, e.save = !0, e.element = n, r = e.content = t.getContent(e), e.no_events || t.fire("SaveContent", e), r = e.content, /TEXTAREA|INPUT/i.test(n.nodeName) ? n.value = r : (t.inline || (n.innerHTML = r), (i = N.getParent(t.id, "form")) && T(i.elements, function (e) {
                    return e.name == t.id ? (e.value = r, !1) : void 0
                })), e.element = n = null, e.set_dirty !== !1 && (t.isNotDirty = !0), r
            }, setContent: function (e, t) {
                var n = this, r = n.getBody(), i;
                return t = t || {}, t.format = t.format || "html", t.set = !0, t.content = e, t.no_events || n.fire("BeforeSetContent", t), e = t.content, 0 === e.length || /^\s+$/.test(e) ? (i = n.settings.forced_root_block, i && n.schema.isValidChild(r.nodeName.toLowerCase(), i.toLowerCase()) ? (e = H && 11 > H ? "" : '<br data-mce-bogus="1">', e = n.dom.createHTML(i, n.settings.forced_root_block_attrs, e)) : H || (e = '<br data-mce-bogus="1">'), r.innerHTML = e, n.fire("SetContent", t)) : ("raw" !== t.format && (e = new o({}, n.schema).serialize(n.parser.parse(e, {isRootContent: !0}))), t.content = B(e), n.dom.setHTML(r, t.content), t.no_events || n.fire("SetContent", t)), t.content
            }, getContent: function (e) {
                var t = this, n, r = t.getBody();
                return e = e || {}, e.format = e.format || "html", e.get = !0, e.getInner = !0, e.no_events || t.fire("BeforeGetContent", e), n = "raw" == e.format ? r.innerHTML : "text" == e.format ? r.innerText || r.textContent : t.serializer.serialize(r, e), e.content = "text" != e.format ? B(n) : n, e.no_events || t.fire("GetContent", e), e.content
            }, insertContent: function (e, t) {
                t && (e = S({content: e}, t)), this.execCommand("mceInsertContent", !1, e)
            }, isDirty: function () {
                return !this.isNotDirty
            }, getContainer: function () {
                var e = this;
                return e.container || (e.container = N.get(e.editorContainer || e.id + "_parent")), e.container
            }, getContentAreaContainer: function () {
                return this.contentAreaContainer
            }, getElement: function () {
                return N.get(this.settings.content_element || this.id)
            }, getWin: function () {
                var e = this, t;
                return e.contentWindow || (t = N.get(e.id + "_ifr"), t && (e.contentWindow = t.contentWindow)), e.contentWindow
            }, getDoc: function () {
                var e = this, t;
                return e.contentDocument || (t = e.getWin(), t && (e.contentDocument = t.document)), e.contentDocument
            }, getBody: function () {
                return this.bodyElement || this.getDoc().body
            }, convertURL: function (e, t, n) {
                var r = this, i = r.settings;
                return i.urlconverter_callback ? r.execCallback("urlconverter_callback", e, n, !0, t) : !i.convert_urls || n && "LINK" == n.nodeName || 0 === e.indexOf("file:") || 0 === e.length ? e : i.relative_urls ? r.documentBaseURI.toRelative(e) : e = r.documentBaseURI.toAbsolute(e, i.remove_script_host)
            }, addVisual: function (e) {
                var n = this, r = n.settings, i = n.dom, o;
                e = e || n.getBody(), n.hasVisual === t && (n.hasVisual = r.visual), T(i.select("table,a", e), function (e) {
                    var t;
                    switch (e.nodeName) {
                        case"TABLE":
                            return o = r.visual_table_class || "mce-item-table", t = i.getAttrib(e, "border"), void(t && "0" != t || (n.hasVisual ? i.addClass(e, o) : i.removeClass(e, o)));
                        case"A":
                            return void(i.getAttrib(e, "href", !1) || (t = i.getAttrib(e, "name") || e.id, o = r.visual_anchor_class || "mce-item-anchor", t && (n.hasVisual ? i.addClass(e, o) : i.removeClass(e, o))))
                    }
                }), n.fire("VisualAid", {element: e, hasVisual: n.hasVisual})
            }, remove: function () {
                var e = this;
                if (!e.removed) {
                    e.removed = 1, e.save(), e.hasHiddenInput && N.remove(e.getElement().nextSibling), e.inline || (H && 10 > H && e.getDoc().execCommand("SelectAll", !1, null), N.setStyle(e.id, "display", e.orgDisplay), e.getBody().onload = null, L.unbind(e.getWin()), L.unbind(e.getDoc()));
                    var t = e.getContainer();
                    L.unbind(e.getBody()), L.unbind(t), e.fire("remove"), e.editorManager.remove(e), N.remove(t), e.destroy()
                }
            }, destroy: function (e) {
                var t = this, n;
                if (!t.destroyed) {
                    if (!e && !t.removed)return void t.remove();
                    e && M && (L.unbind(t.getDoc()), L.unbind(t.getWin()), L.unbind(t.getBody())), e || (t.editorManager.off("beforeunload", t._beforeUnload), t.theme && t.theme.destroy && t.theme.destroy(), t.selection.destroy(), t.dom.destroy()), n = t.formElement, n && (n._mceOldSubmit && (n.submit = n._mceOldSubmit, n._mceOldSubmit = null), N.unbind(n, "submit reset", t.formEventDelegate)), t.contentAreaContainer = t.formElement = t.container = t.editorContainer = null, t.settings.content_element = t.bodyElement = t.contentDocument = t.contentWindow = null, t.selection && (t.selection = t.selection.win = t.selection.dom = t.selection.dom.doc = null), t.destroyed = 1
                }
            }, _refreshContentEditable: function () {
                var e = this, t, n;
                e._isHidden() && (t = e.getBody(), n = t.parentNode, n.removeChild(t), n.appendChild(t), t.focus())
            }, _isHidden: function () {
                var e;
                return M ? (e = this.selection.getSel(), !e || !e.rangeCount || 0 === e.rangeCount) : 0
            }
        }, S(_.prototype, x), _
    }), r(dt, [], function () {
        var e = {};
        return {
            rtl: !1, add: function (t, n) {
                for (var r in n)e[r] = n[r];
                this.rtl = this.rtl || "rtl" === e._dir
            }, translate: function (t) {
                if ("undefined" == typeof t)return t;
                if ("string" != typeof t && t.raw)return t.raw;
                if (t.push) {
                    var n = t.slice(1);
                    t = (e[t[0]] || t[0]).replace(/\{([^\}]+)\}/g, function (e, t) {
                        return n[t]
                    })
                }
                return e[t] || t
            }, data: e
        }
    }), r(ft, [y, g], function (e, t) {
        function n(e) {
            function s() {
                try {
                    return document.activeElement
                } catch (e) {
                    return document.body
                }
            }

            function l(e, t) {
                if (t && t.startContainer) {
                    if (!e.isChildOf(t.startContainer, e.getRoot()) || !e.isChildOf(t.endContainer, e.getRoot()))return;
                    return {
                        startContainer: t.startContainer,
                        startOffset: t.startOffset,
                        endContainer: t.endContainer,
                        endOffset: t.endOffset
                    }
                }
                return t
            }

            function c(e, t) {
                var n;
                return t.startContainer ? (n = e.getDoc().createRange(), n.setStart(t.startContainer, t.startOffset), n.setEnd(t.endContainer, t.endOffset)) : n = t, n
            }

            function u(e) {
                return !!a.getParent(e, n.isEditorUIElement)
            }

            function d(n) {
                var d = n.editor;
                d.on("init", function () {
                    (d.inline || t.ie) && (d.on("nodechange keyup", function () {
                        var e = document.activeElement;
                        e && e.id == d.id + "_ifr" && (e = d.getBody()), d.dom.isChildOf(e, d.getBody()) && (d.lastRng = d.selection.getRng())
                    }), t.webkit && !r && (r = function () {
                        var t = e.activeEditor;
                        if (t && t.selection) {
                            var n = t.selection.getRng();
                            n && !n.collapsed && (d.lastRng = n)
                        }
                    }, a.bind(document, "selectionchange", r)))
                }), d.on("setcontent", function () {
                    d.lastRng = null
                }), d.on("mousedown", function () {
                    d.selection.lastFocusBookmark = null
                }), d.on("focusin", function () {
                    var t = e.focusedEditor;
                    d.selection.lastFocusBookmark && (d.selection.setRng(c(d, d.selection.lastFocusBookmark)), d.selection.lastFocusBookmark = null), t != d && (t && t.fire("blur", {focusedEditor: d}), e.activeEditor = d, e.focusedEditor = d, d.fire("focus", {blurredEditor: t}), d.focus(!0)), d.lastRng = null
                }), d.on("focusout", function () {
                    window.setTimeout(function () {
                        var t = e.focusedEditor;
                        u(s()) || t != d || (d.fire("blur", {focusedEditor: null}), e.focusedEditor = null, d.selection && (d.selection.lastFocusBookmark = null))
                    }, 0)
                }), i || (i = function (t) {
                    var n = e.activeEditor;
                    n && t.target.ownerDocument == document && (n.selection && (n.selection.lastFocusBookmark = l(n.dom, n.lastRng)), u(t.target) || e.focusedEditor != n || (n.fire("blur", {focusedEditor: null}), e.focusedEditor = null))
                }, a.bind(document, "focusin", i)), d.inline && !o && (o = function (t) {
                    var n = e.activeEditor;
                    if (n.inline && !n.dom.isChildOf(t.target, n.getBody())) {
                        var r = n.selection.getRng();
                        r.collapsed || (n.lastRng = r)
                    }
                }, a.bind(document, "mouseup", o))
            }

            function f(t) {
                e.focusedEditor == t.editor && (e.focusedEditor = null), e.activeEditor || (a.unbind(document, "selectionchange", r), a.unbind(document, "focusin", i), a.unbind(document, "mouseup", o), r = i = o = null)
            }

            e.on("AddEditor", d), e.on("RemoveEditor", f)
        }

        var r, i, o, a = e.DOM;
        return n.isEditorUIElement = function (e) {
            return -1 !== e.className.toString().indexOf("mce-")
        }, n
    }), r(pt, [ut, y, W, g, p, st, dt, ft], function (e, t, n, r, i, o, a, s) {
        function l(e) {
            var t = g.editors, n;
            delete t[e.id];
            for (var r = 0; r < t.length; r++)if (t[r] == e) {
                t.splice(r, 1), n = !0;
                break
            }
            return g.activeEditor == e && (g.activeEditor = t[0]), g.focusedEditor == e && (g.focusedEditor = null), n
        }

        function c(e) {
            return e && !(e.getContainer() || e.getBody()).parentNode && (l(e), e.destroy(!0), e = null), e
        }

        var u = t.DOM, d = i.explode, f = i.each, p = i.extend, m = 0, h, g;
        return g = {
            majorVersion: "4",
            minorVersion: "0.28",
            releaseDate: "2014-05-27",
            editors: [],
            i18n: a,
            activeEditor: null,
            setup: function () {
                var e = this, t, r, i = "", o, a;
                if (r = document.location.href, /^[^:]+:\/\/[^\/]+\//.test(r) && (r = r.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, ""), /[\/\\]$/.test(r) || (r += "/")), o = window.tinymce || window.tinyMCEPreInit)t = o.base || o.baseURL, i = o.suffix; else {
                    for (var l = document.getElementsByTagName("script"), c = 0; c < l.length; c++)if (a = l[c].src, /tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)) {
                        -1 != a.indexOf(".min") && (i = ".min"), t = a.substring(0, a.lastIndexOf("/"));
                        break
                    }
                    !t && document.currentScript && (a = document.currentScript.src, -1 != a.indexOf(".min") && (i = ".min"), t = a.substring(0, a.lastIndexOf("/")))
                }
                e.baseURL = new n(r).toAbsolute(t), e.documentBaseURL = r, e.baseURI = new n(e.baseURL), e.suffix = i, e.focusManager = new s(e)
            },
            init: function (t) {
                function n(e) {
                    var t = e.id;
                    return t || (t = e.name, t = t && !u.get(t) ? e.name : u.uniqueId(), e.setAttribute("id", t)), t
                }

                function r(t, n) {
                    if (!c(s.get(t))) {
                        var r = new e(t, n, s);
                        l.push(r), r.render()
                    }
                }

                function i(e, t, n) {
                    var r = e[t];
                    if (r)return r.apply(n || this, Array.prototype.slice.call(arguments, 2))
                }

                function o(e, t) {
                    return t.constructor === RegExp ? t.test(e.className) : u.hasClass(e, t)
                }

                function a() {
                    var c, g;
                    if (u.unbind(window, "ready", a), i(t, "onpageload"), t.types)return void f(t.types, function (e) {
                        f(u.select(e.selector), function (i) {
                            r(n(i), p({}, t, e))
                        })
                    });
                    if (t.selector)return void f(u.select(t.selector), function (e) {
                        r(n(e), t)
                    });
                    switch (t.mode) {
                        case"exact":
                            c = t.elements || "", c.length > 0 && f(d(c), function (n) {
                                u.get(n) ? (h = new e(n, t, s), l.push(h), h.render()) : f(document.forms, function (e) {
                                    f(e.elements, function (e) {
                                        e.name === n && (n = "mce_editor_" + m++, u.setAttrib(e, "id", n), r(n, t))
                                    })
                                })
                            });
                            break;
                        case"textareas":
                        case"specific_textareas":
                            f(u.select("textarea"), function (e) {
                                t.editor_deselector && o(e, t.editor_deselector) || (!t.editor_selector || o(e, t.editor_selector)) && r(n(e), t)
                            })
                    }
                    t.oninit && (c = g = 0, f(l, function (e) {
                        g++, e.initialized ? c++ : e.on("init", function () {
                            c++, c == g && i(t, "oninit")
                        }), c == g && i(t, "oninit")
                    }))
                }

                var s = this, l = [], h;
                s.settings = t, u.bind(window, "ready", a)
            },
            get: function (e) {
                return arguments.length ? e in this.editors ? this.editors[e] : null : this.editors
            },
            add: function (e) {
                var t = this, n = t.editors;
                return n[e.id] = e, n.push(e), t.activeEditor = e, t.fire("AddEditor", {editor: e}), h || (h = function () {
                    t.fire("BeforeUnload")
                }, u.bind(window, "beforeunload", h)), e
            },
            createEditor: function (t, n) {
                return this.add(new e(t, n, this))
            },
            remove: function (e) {
                var t = this, n, r = t.editors, i;
                {
                    if (e)return "string" == typeof e ? (e = e.selector || e, void f(u.select(e), function (e) {
                        t.remove(r[e.id])
                    })) : (i = e, r[i.id] ? (l(i) && t.fire("RemoveEditor", {editor: i}), r.length || u.unbind(window, "beforeunload", h), i.remove(), i) : null);
                    for (n = r.length - 1; n >= 0; n--)t.remove(r[n])
                }
            },
            execCommand: function (t, n, r) {
                var i = this, o = i.get(r);
                switch (t) {
                    case"mceAddEditor":
                        return i.get(r) || new e(r, i.settings, i).render(), !0;
                    case"mceRemoveEditor":
                        return o && o.remove(), !0;
                    case"mceToggleEditor":
                        return o ? (o.isHidden() ? o.show() : o.hide(), !0) : (i.execCommand("mceAddEditor", 0, r), !0)
                }
                return i.activeEditor ? i.activeEditor.execCommand(t, n, r) : !1
            },
            triggerSave: function () {
                f(this.editors, function (e) {
                    e.save()
                })
            },
            addI18n: function (e, t) {
                a.add(e, t)
            },
            translate: function (e) {
                return a.translate(e)
            }
        }, p(g, o), g.setup(), window.tinymce = window.tinyMCE = g, g
    }), r(mt, [pt, p], function (e, t) {
        var n = t.each, r = t.explode;
        e.on("AddEditor", function (e) {
            var t = e.editor;
            t.on("preInit", function () {
                function e(e, t) {
                    n(t, function (t, n) {
                        t && s.setStyle(e, n, t)
                    }), s.rename(e, "span")
                }

                function i(e) {
                    s = t.dom, l.convert_fonts_to_spans && n(s.select("font,u,strike", e.node), function (e) {
                        o[e.nodeName.toLowerCase()](s, e)
                    })
                }

                var o, a, s, l = t.settings;
                l.inline_styles && (a = r(l.font_size_legacy_values), o = {
                    font: function (t, n) {
                        e(n, {
                            backgroundColor: n.style.backgroundColor,
                            color: n.color,
                            fontFamily: n.face,
                            fontSize: a[parseInt(n.size, 10) - 1]
                        })
                    }, u: function (t, n) {
                        e(n, {textDecoration: "underline"})
                    }, strike: function (t, n) {
                        e(n, {textDecoration: "line-through"})
                    }
                }, t.on("PreProcess SetContent", i))
            })
        })
    }), r(ht, [], function () {
        return {
            send: function (e) {
                function t() {
                    !e.async || 4 == n.readyState || r++ > 1e4 ? (e.success && 1e4 > r && 200 == n.status ? e.success.call(e.success_scope, "" + n.responseText, n, e) : e.error && e.error.call(e.error_scope, r > 1e4 ? "TIMED_OUT" : "GENERAL", n, e), n = null) : setTimeout(t, 10)
                }

                var n, r = 0;
                if (e.scope = e.scope || this, e.success_scope = e.success_scope || e.scope, e.error_scope = e.error_scope || e.scope, e.async = e.async === !1 ? !1 : !0, e.data = e.data || "", n = new XMLHttpRequest) {
                    if (n.overrideMimeType && n.overrideMimeType(e.content_type), n.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async), e.content_type && n.setRequestHeader("Content-Type", e.content_type), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(e.data), !e.async)return t();
                    setTimeout(t, 10)
                }
            }
        }
    }), r(gt, [], function () {
        function e(t, n) {
            var r, i, o, a;
            if (n = n || '"', null === t)return "null";
            if (o = typeof t, "string" == o)return i = "\bb	t\nn\ff\rr\"\"''\\\\", n + t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g, function (e, t) {
                return '"' === n && "'" === e ? e : (r = i.indexOf(t), r + 1 ? "\\" + i.charAt(r + 1) : (e = t.charCodeAt().toString(16), "\\u" + "0000".substring(e.length) + e))
            }) + n;
            if ("object" == o) {
                if (t.hasOwnProperty && "[object Array]" === Object.prototype.toString.call(t)) {
                    for (r = 0, i = "["; r < t.length; r++)i += (r > 0 ? "," : "") + e(t[r], n);
                    return i + "]"
                }
                i = "{";
                for (a in t)t.hasOwnProperty(a) && (i += "function" != typeof t[a] ? (i.length > 1 ? "," + n : n) + a + n + ":" + e(t[a], n) : "");
                return i + "}"
            }
            return "" + t
        }

        return {
            serialize: e, parse: function (e) {
                try {
                    return window[String.fromCharCode(101) + "val"]("(" + e + ")")
                } catch (t) {
                }
            }
        }
    }), r(vt, [gt, ht, p], function (e, t, n) {
        function r(e) {
            this.settings = i({}, e), this.count = 0
        }

        var i = n.extend;
        return r.sendRPC = function (e) {
            return (new r).send(e)
        }, r.prototype = {
            send: function (n) {
                var r = n.error, o = n.success;
                n = i(this.settings, n), n.success = function (t, i) {
                    t = e.parse(t), "undefined" == typeof t && (t = {error: "JSON Parse error."}), t.error ? r.call(n.error_scope || n.scope, t.error, i) : o.call(n.success_scope || n.scope, t.result)
                }, n.error = function (e, t) {
                    r && r.call(n.error_scope || n.scope, e, t)
                }, n.data = e.serialize({
                    id: n.id || "c" + this.count++,
                    method: n.method,
                    params: n.params
                }), n.content_type = "application/json", t.send(n)
            }
        }, r
    }), r(yt, [y], function (e) {
        return {
            callbacks: {}, count: 0, send: function (n) {
                var r = this, i = e.DOM, o = n.count !== t ? n.count : r.count, a = "tinymce_jsonp_" + o;
                r.callbacks[o] = function (e) {
                    i.remove(a), delete r.callbacks[o], n.callback(e)
                }, i.add(i.doc.body, "script", {id: a, src: n.url, type: "text/javascript"}), r.count++
            }
        }
    }), r(bt, [], function () {
        function e() {
            s = [];
            for (var e in a)s.push(e);
            i.length = s.length
        }

        function n() {
            function n(e) {
                var n, r;
                return r = e !== t ? u + e : i.indexOf(",", u), -1 === r || r > i.length ? null : (n = i.substring(u, r), u = r + 1, n)
            }

            var r, i, s, u = 0;
            if (a = {}, c) {
                o.load(l), i = o.getAttribute(l) || "";
                do {
                    var d = n();
                    if (null === d)break;
                    if (r = n(parseInt(d, 32) || 0), null !== r) {
                        if (d = n(), null === d)break;
                        s = n(parseInt(d, 32) || 0), r && (a[r] = s)
                    }
                } while (null !== r);
                e()
            }
        }

        function r() {
            var t, n = "";
            if (c) {
                for (var r in a)t = a[r], n += (n ? "," : "") + r.length.toString(32) + "," + r + "," + t.length.toString(32) + "," + t;
                o.setAttribute(l, n);
                try {
                    o.save(l)
                } catch (i) {
                }
                e()
            }
        }

        var i, o, a, s, l, c;
        try {
            if (window.localStorage)return localStorage
        } catch (u) {
        }
        return l = "tinymce", o = document.documentElement, c = !!o.addBehavior, c && o.addBehavior("#default#userData"), i = {
            key: function (e) {
                return s[e]
            }, getItem: function (e) {
                return e in a ? a[e] : null
            }, setItem: function (e, t) {
                a[e] = "" + t, r()
            }, removeItem: function (e) {
                delete a[e], r()
            }, clear: function () {
                a = {}, r()
            }
        }, n(), i
    }), r(Ct, [y, l, b, C, p, g], function (e, t, n, r, i, o) {
        var a = window.tinymce;
        return a.DOM = e.DOM, a.ScriptLoader = n.ScriptLoader, a.PluginManager = r.PluginManager, a.ThemeManager = r.ThemeManager, a.dom = a.dom || {}, a.dom.Event = t.Event, i.each(i, function (e, t) {
            a[t] = e
        }), i.each("isOpera isWebKit isIE isGecko isMac".split(" "), function (e) {
            a[e] = o[e.substr(2).toLowerCase()]
        }), {}
    }), r(xt, [V, p], function (e, t) {
        return e.extend({
            Defaults: {firstControlClass: "first", lastControlClass: "last"}, init: function (e) {
                this.settings = t.extend({}, this.Defaults, e)
            }, preRender: function (e) {
                e.addClass(this.settings.containerClass, "body")
            }, applyClasses: function (e) {
                var t = this, n = t.settings, r, i, o;
                r = e.items().filter(":visible"), i = n.firstControlClass, o = n.lastControlClass, r.each(function (e) {
                    e.removeClass(i).removeClass(o), n.controlClass && e.addClass(n.controlClass)
                }), r.eq(0).addClass(i), r.eq(-1).addClass(o)
            }, renderHtml: function (e) {
                var t = this, n = t.settings, r, i = "";
                return r = e.items(), r.eq(0).addClass(n.firstControlClass), r.eq(-1).addClass(n.lastControlClass), r.each(function (e) {
                    n.controlClass && e.addClass(n.controlClass), i += e.renderHtml()
                }), i
            }, recalc: function () {
            }, postRender: function () {
            }
        })
    }), r(wt, [xt], function (e) {
        return e.extend({
            Defaults: {containerClass: "abs-layout", controlClass: "abs-layout-item"},
            recalc: function (e) {
                e.items().filter(":visible").each(function (e) {
                    var t = e.settings;
                    e.layoutRect({x: t.x, y: t.y, w: t.w, h: t.h}), e.recalc && e.recalc()
                })
            },
            renderHtml: function (e) {
                return '<div id="' + e._id + '-absend" class="' + e.classPrefix + 'abs-end"></div>' + this._super(e)
            }
        })
    }), r(_t, [K, et], function (e, t) {
        return e.extend({
            Mixins: [t], Defaults: {classes: "widget tooltip tooltip-n"}, text: function (e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t._rendered && (t.getEl().lastChild.innerHTML = t.encode(e)), t) : t._value
            }, renderHtml: function () {
                var e = this, t = e.classPrefix;
                return '<div id="' + e._id + '" class="' + e.classes() + '" role="presentation"><div class="' + t + 'tooltip-arrow"></div><div class="' + t + 'tooltip-inner">' + e.encode(e._text) + "</div></div>"
            }, repaint: function () {
                var e = this, t, n;
                t = e.getEl().style, n = e._layoutRect, t.left = n.x + "px", t.top = n.y + "px", t.zIndex = 131070
            }
        })
    }), r(Nt, [K, _t], function (e, t) {
        var n, r = e.extend({
            init: function (e) {
                var t = this;
                t._super(e), e = t.settings, t.canFocus = !0, e.tooltip && r.tooltips !== !1 && (t.on("mouseenter", function (n) {
                    var r = t.tooltip().moveTo(-65535);
                    if (n.control == t) {
                        var i = r.text(e.tooltip).show().testMoveRel(t.getEl(), ["bc-tc", "bc-tl", "bc-tr"]);
                        r.toggleClass("tooltip-n", "bc-tc" == i), r.toggleClass("tooltip-nw", "bc-tl" == i), r.toggleClass("tooltip-ne", "bc-tr" == i), r.moveRel(t.getEl(), i)
                    } else r.hide()
                }), t.on("mouseleave mousedown click", function () {
                    t.tooltip().hide()
                })), t.aria("label", e.ariaLabel || e.tooltip)
            }, tooltip: function () {
                return n || (n = new t({type: "tooltip"}), n.renderTo()), n
            }, active: function (e) {
                var t = this, n;
                return e !== n && (t.aria("pressed", e), t.toggleClass("active", e)), t._super(e)
            }, disabled: function (e) {
                var t = this, n;
                return e !== n && (t.aria("disabled", e), t.toggleClass("disabled", e)), t._super(e)
            }, postRender: function () {
                var e = this, t = e.settings;
                e._rendered = !0, e._super(), e.parent() || !t.width && !t.height || (e.initLayoutRect(), e.repaint()), t.autofocus && e.focus()
            }, remove: function () {
                this._super(), n && (n.remove(), n = null)
            }
        });
        return r
    }), r(Et, [Nt], function (e) {
        return e.extend({
            Defaults: {classes: "widget btn", role: "button"}, init: function (e) {
                var t = this, n;
                t.on("click mousedown", function (e) {
                    e.preventDefault()
                }), t._super(e), n = e.size, e.subtype && t.addClass(e.subtype), n && t.addClass("btn-" + n)
            }, icon: function (e) {
                var t = this, n = t.classPrefix;
                if ("undefined" == typeof e)return t.settings.icon;
                if (t.settings.icon = e, e = e ? n + "ico " + n + "i-" + t.settings.icon : "", t._rendered) {
                    var r = t.getEl().firstChild, i = r.getElementsByTagName("i")[0];
                    e ? (i && i == r.firstChild || (i = document.createElement("i"), r.insertBefore(i, r.firstChild)), i.className = e) : i && r.removeChild(i), t.text(t._text)
                }
                return t
            }, repaint: function () {
                var e = this.getEl().firstChild.style;
                e.width = e.height = "100%", this._super()
            }, text: function (e) {
                var t = this;
                if (t._rendered) {
                    var n = t.getEl().lastChild.lastChild;
                    n && (n.data = t.translate(e))
                }
                return t._super(e)
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.classPrefix, r = e.settings.icon, i;
                return i = e.settings.image, i ? (r = "none", "string" != typeof i && (i = window.getSelection ? i[0] : i[1]), i = " style=\"background-image: url('" + i + "')\"") : i = "", r = e.settings.icon ? n + "ico " + n + "i-" + r : "", '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1" aria-labelledby="' + t + '"><button role="presentation" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + (e._text ? (r ? "\xa0" : "") + e.encode(e._text) : "") + "</button></div>"
            }
        })
    }), r(kt, [X], function (e) {
        return e.extend({
            Defaults: {defaultType: "button", role: "group"}, renderHtml: function () {
                var e = this, t = e._layout;
                return e.addClass("btn-group"), e.preRender(), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '"><div id="' + e._id + '-body">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }
        })
    }), r(St, [Nt], function (e) {
        return e.extend({
            Defaults: {classes: "checkbox", role: "checkbox", checked: !1}, init: function (e) {
                var t = this;
                t._super(e), t.on("click mousedown", function (e) {
                    e.preventDefault()
                }), t.on("click", function (e) {
                    e.preventDefault(), t.disabled() || t.checked(!t.checked())
                }), t.checked(t.settings.checked)
            }, checked: function (e) {
                var t = this;
                return "undefined" != typeof e ? (e ? t.addClass("checked") : t.removeClass("checked"), t._checked = e, t.aria("checked", e), t) : t._checked
            }, value: function (e) {
                return this.checked(e)
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.classPrefix;
                return '<div id="' + t + '" class="' + e.classes() + '" unselectable="on" aria-labelledby="' + t + '-al" tabindex="-1"><i class="' + n + "ico " + n + 'i-checkbox"></i><span id="' + t + '-al" class="' + n + 'label">' + e.encode(e._text) + "</span></div>"
            }
        })
    }), r(Tt, [Et, nt], function (e, t) {
        return e.extend({
            showPanel: function () {
                var e = this, n = e.settings;
                if (e.active(!0), e.panel)e.panel.show(); else {
                    var r = n.panel;
                    r.type && (r = {
                        layout: "grid",
                        items: r
                    }), r.role = r.role || "dialog", r.popover = !0, r.autohide = !0, r.ariaRoot = !0, e.panel = new t(r).on("hide", function () {
                        e.active(!1)
                    }).on("cancel", function (t) {
                        t.stopPropagation(), e.focus(), e.hidePanel()
                    }).parent(e).renderTo(e.getContainerElm()), e.panel.fire("show"), e.panel.reflow()
                }
                e.panel.moveRel(e.getEl(), n.popoverAlign || (e.isRtl() ? ["bc-tr", "bc-tc"] : ["bc-tl", "bc-tc"]))
            }, hidePanel: function () {
                var e = this;
                e.panel && e.panel.hide()
            }, postRender: function () {
                var e = this;
                return e.aria("haspopup", !0), e.on("click", function (t) {
                    t.control === e && (e.panel && e.panel.visible() ? e.hidePanel() : (e.showPanel(), e.panel.focus(!!t.aria)))
                }), e._super()
            }
        })
    }), r(Rt, [Tt, y], function (e, t) {
        var n = t.DOM;
        return e.extend({
            init: function (e) {
                this._super(e), this.addClass("colorbutton")
            }, color: function (e) {
                return e ? (this._color = e, this.getEl("preview").style.backgroundColor = e, this) : this._color
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.classPrefix, r = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "", i = e.settings.image ? " style=\"background-image: url('" + e.settings.image + "')\"" : "";
                return '<div id="' + t + '" class="' + e.classes() + '" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">' + (r ? '<i class="' + r + '"' + i + "></i>" : "") + '<span id="' + t + '-preview" class="' + n + 'preview"></span>' + (e._text ? (r ? " " : "") + e._text : "") + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1"> <i class="' + n + 'caret"></i></button></div>'
            }, postRender: function () {
                var e = this, t = e.settings.onclick;
                return e.on("click", function (r) {
                    r.aria && "down" == r.aria.key || r.control != e || n.getParent(r.target, "." + e.classPrefix + "open") || (r.stopImmediatePropagation(), t.call(e, r))
                }), delete e.settings.onclick, e._super()
            }
        })
    }), r(At, [Nt, G, j], function (e, t, n) {
        return e.extend({
            init: function (e) {
                var t = this;
                t._super(e), t.addClass("combobox"), t.subinput = !0, t.ariaTarget = "inp", e = t.settings, e.menu = e.menu || e.values, e.menu && (e.icon = "caret"), t.on("click", function (n) {
                    for (var r = n.target, i = t.getEl(); r && r != i;)r.id && -1 != r.id.indexOf("-open") && (t.fire("action"), e.menu && (t.showMenu(), n.aria && t.menu.items()[0].focus())), r = r.parentNode
                }), t.on("keydown", function (e) {
                    "INPUT" == e.target.nodeName && 13 == e.keyCode && t.parents().reverse().each(function (n) {
                        return e.preventDefault(), t.fire("change"), n.hasEventListeners("submit") && n.toJSON ? (n.fire("submit", {data: n.toJSON()}), !1) : void 0
                    })
                }), e.placeholder && (t.addClass("placeholder"), t.on("focusin", function () {
                    t._hasOnChange || (n.on(t.getEl("inp"), "change", function () {
                        t.fire("change")
                    }), t._hasOnChange = !0), t.hasClass("placeholder") && (t.getEl("inp").value = "", t.removeClass("placeholder"))
                }), t.on("focusout", function () {
                    0 === t.value().length && (t.getEl("inp").value = e.placeholder, t.addClass("placeholder"))
                }))
            }, showMenu: function () {
                var e = this, n = e.settings, r;
                e.menu || (r = n.menu || [], r.length ? r = {
                    type: "menu",
                    items: r
                } : r.type = r.type || "menu", e.menu = t.create(r).parent(e).renderTo(e.getContainerElm()), e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function (t) {
                    t.control === e.menu && e.focus()
                }), e.menu.on("show hide", function (t) {
                    t.control.items().each(function (t) {
                        t.active(t.value() == e.value())
                    })
                }).fire("show"), e.menu.on("select", function (t) {
                    e.value(t.control.value())
                }), e.on("focusin", function (t) {
                    "INPUT" == t.target.tagName.toUpperCase() && e.menu.hide()
                }), e.aria("expanded", !0)), e.menu.show(), e.menu.layoutRect({w: e.layoutRect().w}), e.menu.moveRel(e.getEl(), e.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"])
            }, value: function (e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t.removeClass("placeholder"), t._rendered && (t.getEl("inp").value = e), t) : t._rendered ? (e = t.getEl("inp").value, e != t.settings.placeholder ? e : "") : t._value
            }, disabled: function (e) {
                var t = this;
                return t._rendered && "undefined" != typeof e && (t.getEl("inp").disabled = e), t._super(e)
            }, focus: function () {
                this.getEl("inp").focus()
            }, repaint: function () {
                var e = this, t = e.getEl(), r = e.getEl("open"), i = e.layoutRect(), o, a;
                o = r ? i.w - n.getSize(r).width - 10 : i.w - 10;
                var s = document;
                return s.all && (!s.documentMode || s.documentMode <= 8) && (a = e.layoutRect().h - 2 + "px"), n.css(t.firstChild, {
                    width: o,
                    lineHeight: a
                }), e._super(), e
            }, postRender: function () {
                var e = this;
                return n.on(this.getEl("inp"), "change", function () {
                    e.fire("change")
                }), e._super()
            }, remove: function () {
                n.off(this.getEl("inp")), this._super()
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.settings, r = e.classPrefix, i = n.value || n.placeholder || "", o, a, s = "", l = "";
                return "spellcheck" in n && (l += ' spellcheck="' + n.spellcheck + '"'), n.maxLength && (l += ' maxlength="' + n.maxLength + '"'), n.size && (l += ' size="' + n.size + '"'), n.subtype && (l += ' type="' + n.subtype + '"'), e.disabled() && (l += ' disabled="disabled"'), o = n.icon, o && "caret" != o && (o = r + "ico " + r + "i-" + n.icon), a = e._text, (o || a) && (s = '<div id="' + t + '-open" class="' + r + "btn " + r + 'open" tabIndex="-1" role="button"><button id="' + t + '-action" type="button" hidefocus="1" tabindex="-1">' + ("caret" != o ? '<i class="' + o + '"></i>' : '<i class="' + r + 'caret"></i>') + (a ? (o ? " " : "") + a : "") + "</button></div>", e.addClass("has-open")), '<div id="' + t + '" class="' + e.classes() + '"><input id="' + t + '-inp" class="' + r + "textbox " + r + 'placeholder" value="' + i + '" hidefocus="1"' + l + " />" + s + "</div>"
            }
        })
    }), r(Bt, [Nt], function (e) {
        return e.extend({
            init: function (e) {
                var t = this;
                e.delimiter || (e.delimiter = "\xbb"), t._super(e), t.addClass("path"), t.canFocus = !0, t.on("click", function (e) {
                    var n, r = e.target;
                    (n = r.getAttribute("data-index")) && t.fire("select", {value: t.data()[n], index: n})
                })
            }, focus: function () {
                var e = this;
                return e.getEl().firstChild.focus(), e
            }, data: function (e) {
                var t = this;
                return "undefined" != typeof e ? (t._data = e, t.update(), t) : t._data
            }, update: function () {
                this.innerHtml(this._getPathHtml())
            }, postRender: function () {
                var e = this;
                e._super(), e.data(e.settings.data)
            }, renderHtml: function () {
                var e = this;
                return '<div id="' + e._id + '" class="' + e.classes() + '">' + e._getPathHtml() + "</div>"
            }, _getPathHtml: function () {
                var e = this, t = e._data || [], n, r, i = "", o = e.classPrefix;
                for (n = 0, r = t.length; r > n; n++)i += (n > 0 ? '<div class="' + o + 'divider" aria-hidden="true"> ' + e.settings.delimiter + " </div>" : "") + '<div role="button" class="' + o + "path-item" + (n == r - 1 ? " " + o + "last" : "") + '" data-index="' + n + '" tabindex="-1" id="' + e._id + "-" + n + '" aria-level="' + n + '">' + t[n].name + "</div>";
                return i || (i = '<div class="' + o + 'path-item">\xa0</div>'), i
            }
        })
    }), r(Dt, [Bt, pt], function (e, t) {
        return e.extend({
            postRender: function () {
                function e(e) {
                    if (1 === e.nodeType) {
                        if ("BR" == e.nodeName || e.getAttribute("data-mce-bogus"))return !0;
                        if ("bookmark" === e.getAttribute("data-mce-type"))return !0
                    }
                    return !1
                }

                var n = this, r = t.activeEditor;
                return n.on("select", function (t) {
                    var n = [], i, o = r.getBody();
                    for (r.focus(), i = r.selection.getStart(); i && i != o;)e(i) || n.push(i), i = i.parentNode;
                    r.selection.select(n[n.length - 1 - t.index]), r.nodeChanged()
                }), r.on("nodeChange", function (t) {
                    for (var i = [], o = t.parents, a = o.length; a--;)if (1 == o[a].nodeType && !e(o[a])) {
                        var s = r.fire("ResolveName", {name: o[a].nodeName.toLowerCase(), target: o[a]});
                        i.push({name: s.name})
                    }
                    n.data(i)
                }), n._super()
            }
        })
    }), r(Lt, [X], function (e) {
        return e.extend({
            Defaults: {layout: "flex", align: "center", defaults: {flex: 1}}, renderHtml: function () {
                var e = this, t = e._layout, n = e.classPrefix;
                return e.addClass("formitem"), t.preRender(e), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<div id="' + e._id + '-title" class="' + n + 'title">' + e.settings.title + "</div>" : "") + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></div>"
            }
        })
    }), r(Mt, [X, Lt], function (e, t) {
        return e.extend({
            Defaults: {
                containerCls: "form",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: 20,
                labelGap: 30,
                spacing: 10,
                callbacks: {
                    submit: function () {
                        this.submit()
                    }
                }
            }, preRender: function () {
                var e = this, n = e.items();
                n.each(function (n) {
                    var r, i = n.settings.label;
                    i && (r = new t({
                        layout: "flex",
                        autoResize: "overflow",
                        defaults: {flex: 1},
                        items: [{
                            type: "label",
                            id: n._id + "-l",
                            text: i,
                            flex: 0,
                            forId: n._id,
                            disabled: n.disabled()
                        }]
                    }), r.type = "formitem", n.aria("labelledby", n._id + "-l"), "undefined" == typeof n.settings.flex && (n.settings.flex = 1), e.replace(n, r), r.add(n))
                })
            }, recalcLabels: function () {
                var e = this, t = 0, n = [], r, i, o;
                if (e.settings.labelGapCalc !== !1)for (o = "children" == e.settings.labelGapCalc ? e.find("formitem") : e.items(), o.filter("formitem").each(function (e) {
                    var r = e.items()[0], i = r.getEl().clientWidth;
                    t = i > t ? i : t, n.push(r)
                }), i = e.settings.labelGap || 0, r = n.length; r--;)n[r].settings.minWidth = t + i
            }, visible: function (e) {
                var t = this._super(e);
                return e === !0 && this._rendered && this.recalcLabels(), t
            }, submit: function () {
                return this.fire("submit", {data: this.toJSON()})
            }, postRender: function () {
                var e = this;
                e._super(), e.recalcLabels(), e.fromJSON(e.settings.data)
            }
        })
    }), r(Ht, [Mt], function (e) {
        return e.extend({
            Defaults: {
                containerCls: "fieldset",
                layout: "flex",
                direction: "column",
                align: "stretch",
                flex: 1,
                padding: "25 15 5 15",
                labelGap: 30,
                spacing: 10,
                border: 1
            }, renderHtml: function () {
                var e = this, t = e._layout, n = e.classPrefix;
                return e.preRender(), t.preRender(e), '<fieldset id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1">' + (e.settings.title ? '<legend id="' + e._id + '-title" class="' + n + 'fieldset-title">' + e.settings.title + "</legend>" : "") + '<div id="' + e._id + '-body" class="' + e.classes("body") + '">' + (e.settings.html || "") + t.renderHtml(e) + "</div></fieldset>"
            }
        })
    }), r(Pt, [At, p], function (e, t) {
        return e.extend({
            init: function (e) {
                var n = this, r = tinymce.activeEditor, i, o;
                e.spellcheck = !1, o = r.settings.file_browser_callback_types, o && (o = t.makeMap(o, /[, ]/)), i = r.settings.file_browser_callback, !i || o && !o[e.filetype] || (e.icon = "browse", e.onaction = function () {
                    i(n.getEl("inp").id, n.getEl("inp").value, e.filetype, window)
                }), n._super(e)
            }
        })
    }), r(Ot, [wt], function (e) {
        return e.extend({
            recalc: function (e) {
                var t = e.layoutRect(), n = e.paddingBox();
                e.items().filter(":visible").each(function (e) {
                    e.layoutRect({
                        x: n.left,
                        y: n.top,
                        w: t.innerW - n.right - n.left,
                        h: t.innerH - n.top - n.bottom
                    }), e.recalc && e.recalc()
                })
            }
        })
    }), r(It, [wt], function (e) {
        return e.extend({
            recalc: function (e) {
                var t, n, r, i, o, a, s, l, c, u, d, f, p, m, h, g, v = [], y, b, C, x, w, _, N, E, k, S, T, R, A, B, D, L, M, H, P, O, I, F, z = Math.max, W = Math.min;
                for (r = e.items().filter(":visible"), i = e.layoutRect(), o = e._paddingBox, a = e.settings, f = e.isRtl() ? a.direction || "row-reversed" : a.direction, s = a.align, l = e.isRtl() ? a.pack || "end" : a.pack, c = a.spacing || 0, ("row-reversed" == f || "column-reverse" == f) && (r = r.set(r.toArray().reverse()), f = f.split("-")[0]), "column" == f ? (k = "y", N = "h", E = "minH", S = "maxH", R = "innerH", T = "top", A = "deltaH", B = "contentH", P = "left", M = "w", D = "x", L = "innerW", H = "minW", O = "right", I = "deltaW", F = "contentW") : (k = "x", N = "w", E = "minW", S = "maxW", R = "innerW", T = "left", A = "deltaW", B = "contentW", P = "top", M = "h", D = "y", L = "innerH", H = "minH", O = "bottom", I = "deltaH", F = "contentH"), d = i[R] - o[T] - o[T], _ = u = 0, t = 0, n = r.length; n > t; t++)p = r[t], m = p.layoutRect(), h = p.settings, g = h.flex, d -= n - 1 > t ? c : 0, g > 0 && (u += g, m[S] && v.push(p), m.flex = g), d -= m[E], y = o[P] + m[H] + o[O], y > _ && (_ = y);
                if (x = {}, x[E] = 0 > d ? i[E] - d + i[A] : i[R] - d + i[A], x[H] = _ + i[I], x[B] = i[R] - d, x[F] = _, x.minW = W(x.minW, i.maxW), x.minH = W(x.minH, i.maxH), x.minW = z(x.minW, i.startMinWidth), x.minH = z(x.minH, i.startMinHeight), !i.autoResize || x.minW == i.minW && x.minH == i.minH) {
                    for (C = d / u, t = 0, n = v.length; n > t; t++)p = v[t], m = p.layoutRect(), b = m[S], y = m[E] + m.flex * C, y > b ? (d -= m[S] - m[E], u -= m.flex, m.flex = 0, m.maxFlexSize = b) : m.maxFlexSize = 0;
                    for (C = d / u, w = o[T], x = {}, 0 === u && ("end" == l ? w = d + o[T] : "center" == l ? (w = Math.round(i[R] / 2 - (i[R] - d) / 2) + o[T], 0 > w && (w = o[T])) : "justify" == l && (w = o[T], c = Math.floor(d / (r.length - 1)))), x[D] = o[P], t = 0, n = r.length; n > t; t++)p = r[t], m = p.layoutRect(), y = m.maxFlexSize || m[E], "center" === s ? x[D] = Math.round(i[L] / 2 - m[M] / 2) : "stretch" === s ? (x[M] = z(m[H] || 0, i[L] - o[P] - o[O]), x[D] = o[P]) : "end" === s && (x[D] = i[L] - m[M] - o.top), m.flex > 0 && (y += m.flex * C), x[N] = y, x[k] = w, p.layoutRect(x), p.recalc && p.recalc(), w += y + c
                } else if (x.w = x.minW, x.h = x.minH, e.layoutRect(x), this.recalc(e), null === e._lastRect) {
                    var V = e.parent();
                    V && (V._lastRect = null, V.recalc())
                }
            }
        })
    }), r(Ft, [xt], function (e) {
        return e.extend({
            Defaults: {containerClass: "flow-layout", controlClass: "flow-layout-item", endClass: "break"},
            recalc: function (e) {
                e.items().filter(":visible").each(function (e) {
                    e.recalc && e.recalc()
                })
            }
        })
    }), r(zt, [K, Nt, nt, p, pt, g], function (e, t, n, r, i, o) {
        function a(e) {
            function t(t, n) {
                return function () {
                    var r = this;
                    e.on("nodeChange", function (i) {
                        var o = e.formatter, a = null;
                        s(i.parents, function (e) {
                            return s(t, function (t) {
                                return n ? o.matchNode(e, n, {value: t.value}) && (a = t.value) : o.matchNode(e, t.value) && (a = t.value), a ? !1 : void 0
                            }), a ? !1 : void 0
                        }), r.value(a)
                    })
                }
            }

            function r(e) {
                e = e.replace(/;$/, "").split(";");
                for (var t = e.length; t--;)e[t] = e[t].split("=");
                return e
            }

            function i() {
                function t(e) {
                    var n = [];
                    if (e)return s(e, function (e) {
                        var o = {text: e.title, icon: e.icon};
                        if (e.items)o.menu = t(e.items); else {
                            var a = e.format || "custom" + r++;
                            e.format || (e.name = a, i.push(e)), o.format = a, o.cmd = e.cmd
                        }
                        n.push(o)
                    }), n
                }

                function n() {
                    var n;
                    return n = t(e.settings.style_formats_merge ? e.settings.style_formats ? o.concat(e.settings.style_formats) : o : e.settings.style_formats || o)
                }

                var r = 0, i = [], o = [{
                    title: "Headings",
                    items: [{title: "Heading 1", format: "h1"}, {title: "Heading 2", format: "h2"}, {
                        title: "Heading 3",
                        format: "h3"
                    }, {title: "Heading 4", format: "h4"}, {title: "Heading 5", format: "h5"}, {
                        title: "Heading 6",
                        format: "h6"
                    }]
                }, {
                    title: "Inline",
                    items: [{title: "Bold", icon: "bold", format: "bold"}, {
                        title: "Italic",
                        icon: "italic",
                        format: "italic"
                    }, {title: "Underline", icon: "underline", format: "underline"}, {
                        title: "Strikethrough",
                        icon: "strikethrough",
                        format: "strikethrough"
                    }, {title: "Superscript", icon: "superscript", format: "superscript"}, {
                        title: "Subscript",
                        icon: "subscript",
                        format: "subscript"
                    }, {title: "Code", icon: "code", format: "code"}]
                }, {
                    title: "Blocks",
                    items: [{title: "Paragraph", format: "p"}, {
                        title: "Blockquote",
                        format: "blockquote"
                    }, {title: "Div", format: "div"}, {title: "Pre", format: "pre"}]
                }, {
                    title: "Alignment",
                    items: [{title: "Left", icon: "alignleft", format: "alignleft"}, {
                        title: "Center",
                        icon: "aligncenter",
                        format: "aligncenter"
                    }, {title: "Right", icon: "alignright", format: "alignright"}, {
                        title: "Justify",
                        icon: "alignjustify",
                        format: "alignjustify"
                    }]
                }];
                return e.on("init", function () {
                    s(i, function (t) {
                        e.formatter.register(t.name, t)
                    })
                }), {
                    type: "menu", items: n(), onPostRender: function (t) {
                        e.fire("renderFormatsMenu", {control: t.control})
                    }, itemDefaults: {
                        preview: !0, textStyle: function () {
                            return this.settings.format ? e.formatter.getCssText(this.settings.format) : void 0
                        }, onPostRender: function () {
                            var t = this;
                            t.parent().on("show", function () {
                                var n, r;
                                n = t.settings.format, n && (t.disabled(!e.formatter.canApply(n)), t.active(e.formatter.match(n))), r = t.settings.cmd, r && t.active(e.queryCommandState(r))
                            })
                        }, onclick: function () {
                            this.settings.format && l(this.settings.format), this.settings.cmd && e.execCommand(this.settings.cmd)
                        }
                    }
                }
            }

            function o(t) {
                return function () {
                    function n() {
                        return e.undoManager ? e.undoManager[t]() : !1
                    }

                    var r = this;
                    t = "redo" == t ? "hasRedo" : "hasUndo", r.disabled(!n()), e.on("Undo Redo AddUndo TypingUndo ClearUndos", function () {
                        r.disabled(!n())
                    })
                }
            }

            function a() {
                var t = this;
                e.on("VisualAid", function (e) {
                    t.active(e.hasVisual)
                }), t.active(e.hasVisual)
            }

            function l(t) {
                t.control && (t = t.control.value()), t && e.execCommand("mceToggleFormat", !1, t)
            }

            var c;
            c = i(), s({
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                strikethrough: "Strikethrough",
                subscript: "Subscript",
                superscript: "Superscript"
            }, function (t, n) {
                e.addButton(n, {
                    tooltip: t, onPostRender: function () {
                        var t = this;
                        e.formatter ? e.formatter.formatChanged(n, function (e) {
                            t.active(e)
                        }) : e.on("init", function () {
                            e.formatter.formatChanged(n, function (e) {
                                t.active(e)
                            })
                        })
                    }, onclick: function () {
                        l(n)
                    }
                })
            }), s({
                outdent: ["Decrease indent", "Outdent"],
                indent: ["Increase indent", "Indent"],
                cut: ["Cut", "Cut"],
                copy: ["Copy", "Copy"],
                paste: ["Paste", "Paste"],
                help: ["Help", "mceHelp"],
                selectall: ["Select all", "SelectAll"],
                hr: ["Insert horizontal rule", "InsertHorizontalRule"],
                removeformat: ["Clear formatting", "RemoveFormat"],
                visualaid: ["Visual aids", "mceToggleVisualAid"],
                newdocument: ["New document", "mceNewDocument"]
            }, function (t, n) {
                e.addButton(n, {tooltip: t[0], cmd: t[1]})
            }), s({
                blockquote: ["Blockquote", "mceBlockQuote"],
                numlist: ["Numbered list", "InsertOrderedList"],
                bullist: ["Bullet list", "InsertUnorderedList"],
                subscript: ["Subscript", "Subscript"],
                superscript: ["Superscript", "Superscript"],
                alignleft: ["Align left", "JustifyLeft"],
                aligncenter: ["Align center", "JustifyCenter"],
                alignright: ["Align right", "JustifyRight"],
                alignjustify: ["Justify", "JustifyFull"]
            }, function (t, n) {
                e.addButton(n, {
                    tooltip: t[0], cmd: t[1], onPostRender: function () {
                        var t = this;
                        e.formatter ? e.formatter.formatChanged(n, function (e) {
                            t.active(e)
                        }) : e.on("init", function () {
                            e.formatter.formatChanged(n, function (e) {
                                t.active(e)
                            })
                        })
                    }
                })
            }), e.addButton("undo", {
                tooltip: "Undo",
                onPostRender: o("undo"),
                cmd: "undo"
            }), e.addButton("redo", {
                tooltip: "Redo",
                onPostRender: o("redo"),
                cmd: "redo"
            }), e.addMenuItem("newdocument", {
                text: "New document",
                shortcut: "Ctrl+N",
                icon: "newdocument",
                cmd: "mceNewDocument"
            }), e.addMenuItem("undo", {
                text: "Undo",
                icon: "undo",
                shortcut: "Ctrl+Z",
                onPostRender: o("undo"),
                cmd: "undo"
            }), e.addMenuItem("redo", {
                text: "Redo",
                icon: "redo",
                shortcut: "Ctrl+Y",
                onPostRender: o("redo"),
                cmd: "redo"
            }), e.addMenuItem("visualaid", {
                text: "Visual aids",
                selectable: !0,
                onPostRender: a,
                cmd: "mceToggleVisualAid"
            }), s({
                cut: ["Cut", "Cut", "Ctrl+X"],
                copy: ["Copy", "Copy", "Ctrl+C"],
                paste: ["Paste", "Paste", "Ctrl+V"],
                selectall: ["Select all", "SelectAll", "Ctrl+A"],
                bold: ["Bold", "Bold", "Ctrl+B"],
                italic: ["Italic", "Italic", "Ctrl+I"],
                underline: ["Underline", "Underline"],
                strikethrough: ["Strikethrough", "Strikethrough"],
                subscript: ["Subscript", "Subscript"],
                superscript: ["Superscript", "Superscript"],
                removeformat: ["Clear formatting", "RemoveFormat"]
            }, function (t, n) {
                e.addMenuItem(n, {text: t[0], icon: n, shortcut: t[2], cmd: t[1]})
            }), e.on("mousedown", function () {
                n.hideAll()
            }), e.addButton("styleselect", {
                type: "menubutton",
                text: "Formats",
                menu: c
            }), e.addButton("formatselect", function () {
                var n = [], i = r(e.settings.block_formats || "Paragraph=p;Address=address;Pre=pre;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6");
                return s(i, function (t) {
                    n.push({
                        text: t[0], value: t[1], textStyle: function () {
                            return e.formatter.getCssText(t[1])
                        }
                    })
                }), {type: "listbox", text: i[0][0], values: n, fixedWidth: !0, onselect: l, onPostRender: t(n)}
            }), e.addButton("fontselect", function () {
                var n = "Andale Mono=andale mono,times;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier;Georgia=georgia,palatino;Helvetica=helvetica;Impact=impact,chicago;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Trebuchet MS=trebuchet ms,geneva;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats", i = [], o = r(e.settings.font_formats || n);
                return s(o, function (e) {
                    i.push({
                        text: {raw: e[0]},
                        value: e[1],
                        textStyle: -1 == e[1].indexOf("dings") ? "font-family:" + e[1] : ""
                    })
                }), {
                    type: "listbox",
                    text: "Font Family",
                    tooltip: "Font Family",
                    values: i,
                    fixedWidth: !0,
                    onPostRender: t(i, "fontname"),
                    onselect: function (t) {
                        t.control.settings.value && e.execCommand("FontName", !1, t.control.settings.value)
                    }
                }
            }), e.addButton("fontsizeselect", function () {
                var n = [], r = "8pt 10pt 12pt 14pt 18pt 24pt 36pt", i = e.settings.fontsize_formats || r;
                return s(i.split(" "), function (e) {
                    var t = e, r = e, i = e.split("=");
                    i.length > 1 && (t = i[0], r = i[1]), n.push({text: t, value: r})
                }), {
                    type: "listbox",
                    text: "Font Sizes",
                    tooltip: "Font Sizes",
                    values: n,
                    fixedWidth: !0,
                    onPostRender: t(n, "fontsize"),
                    onclick: function (t) {
                        t.control.settings.value && e.execCommand("FontSize", !1, t.control.settings.value)
                    }
                }
            }), e.addMenuItem("formats", {text: "Formats", menu: c})
        }

        var s = r.each;
        i.on("AddEditor", function (t) {
            t.editor.rtl && (e.rtl = !0), a(t.editor)
        }), e.translate = function (e) {
            return i.translate(e)
        }, t.tooltips = !o.iOS
    }), r(Wt, [wt], function (e) {
        return e.extend({
            recalc: function (e) {
                var t = e.settings, n, r, i, o, a, s, l, c, u, d, f, p, m, h, g, v, y, b, C, x, w, _, N = [], E = [], k, S, T, R;
                for (t = e.settings, i = e.items().filter(":visible"), o = e.layoutRect(), r = t.columns || Math.ceil(Math.sqrt(i.length)), n = Math.ceil(i.length / r), y = t.spacingH || t.spacing || 0, b = t.spacingV || t.spacing || 0, C = t.alignH || t.align, x = t.alignV || t.align, g = e._paddingBox, C && "string" == typeof C && (C = [C]), x && "string" == typeof x && (x = [x]), d = 0; r > d; d++)N.push(0);
                for (f = 0; n > f; f++)E.push(0);
                for (f = 0; n > f; f++)for (d = 0; r > d && (u = i[f * r + d], u); d++)c = u.layoutRect(), k = c.minW, S = c.minH, N[d] = k > N[d] ? k : N[d], E[f] = S > E[f] ? S : E[f];
                for (T = o.innerW - g.left - g.right, w = 0, d = 0; r > d; d++)w += N[d] + (d > 0 ? y : 0), T -= (d > 0 ? y : 0) + N[d];
                for (R = o.innerH - g.top - g.bottom, _ = 0, f = 0; n > f; f++)_ += E[f] + (f > 0 ? b : 0), R -= (f > 0 ? b : 0) + E[f];
                if (w += g.left + g.right, _ += g.top + g.bottom, l = {}, l.minW = w + (o.w - o.innerW), l.minH = _ + (o.h - o.innerH), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH, l.minW = Math.min(l.minW, o.maxW), l.minH = Math.min(l.minH, o.maxH), l.minW = Math.max(l.minW, o.startMinWidth), l.minH = Math.max(l.minH, o.startMinHeight), !o.autoResize || l.minW == o.minW && l.minH == o.minH) {
                    o.autoResize && (l = e.layoutRect(l), l.contentW = l.minW - o.deltaW, l.contentH = l.minH - o.deltaH);
                    var A;
                    A = "start" == t.packV ? 0 : R > 0 ? Math.floor(R / n) : 0;
                    var B = 0, D = t.flexWidths;
                    if (D)for (d = 0; d < D.length; d++)B += D[d]; else B = r;
                    var L = T / B;
                    for (d = 0; r > d; d++)N[d] += D ? D[d] * L : L;
                    for (m = g.top, f = 0; n > f; f++) {
                        for (p = g.left, s = E[f] + A, d = 0; r > d && (u = i[f * r + d], u); d++)h = u.settings, c = u.layoutRect(), a = Math.max(N[d], c.startMinWidth), c.x = p, c.y = m, v = h.alignH || (C ? C[d] || C[0] : null), "center" == v ? c.x = p + a / 2 - c.w / 2 : "right" == v ? c.x = p + a - c.w : "stretch" == v && (c.w = a), v = h.alignV || (x ? x[d] || x[0] : null), "center" == v ? c.y = m + s / 2 - c.h / 2 : "bottom" == v ? c.y = m + s - c.h : "stretch" == v && (c.h = s), u.layoutRect(c), p += a + y, u.recalc && u.recalc();
                        m += s + b
                    }
                } else if (l.w = l.minW, l.h = l.minH, e.layoutRect(l), this.recalc(e), null === e._lastRect) {
                    var M = e.parent();
                    M && (M._lastRect = null, M.recalc())
                }
            }
        })
    }), r(Vt, [Nt], function (e) {
        return e.extend({
            renderHtml: function () {
                var e = this;
                return e.addClass("iframe"), e.canFocus = !1, '<iframe id="' + e._id + '" class="' + e.classes() + '" tabindex="-1" src="' + (e.settings.url || "javascript:''") + '" frameborder="0"></iframe>'
            }, src: function (e) {
                this.getEl().src = e
            }, html: function (e, t) {
                var n = this, r = this.getEl().contentWindow.document.body;
                return r ? (r.innerHTML = e, t && t()) : setTimeout(function () {
                    n.html(e)
                }, 0), this
            }
        })
    }), r(Ut, [Nt, j], function (e, t) {
        return e.extend({
            init: function (e) {
                var t = this;
                t._super(e), t.addClass("widget"), t.addClass("label"), t.canFocus = !1, e.multiline && t.addClass("autoscroll"), e.strong && t.addClass("strong")
            }, initLayoutRect: function () {
                var e = this, n = e._super();
                if (e.settings.multiline) {
                    var r = t.getSize(e.getEl());
                    r.width > n.maxW && (n.minW = n.maxW, e.addClass("multiline")), e.getEl().style.width = n.minW + "px", n.startMinH = n.h = n.minH = Math.min(n.maxH, t.getSize(e.getEl()).height)
                }
                return n
            }, repaint: function () {
                var e = this;
                return e.settings.multiline || (e.getEl().style.lineHeight = e.layoutRect().h + "px"), e._super()
            }, text: function (e) {
                var t = this;
                return t._rendered && e && this.innerHtml(t.encode(e)), t._super(e)
            }, renderHtml: function () {
                var e = this, t = e.settings.forId;
                return '<label id="' + e._id + '" class="' + e.classes() + '"' + (t ? ' for="' + t + '"' : "") + ">" + e.encode(e._text) + "</label>"
            }
        })
    }), r(qt, [X], function (e) {
        return e.extend({
            Defaults: {role: "toolbar", layout: "flow"}, init: function (e) {
                var t = this;
                t._super(e), t.addClass("toolbar")
            }, postRender: function () {
                var e = this;
                return e.items().addClass("toolbar-item"), e._super()
            }
        })
    }), r($t, [qt], function (e) {
        return e.extend({
            Defaults: {
                role: "menubar",
                containerCls: "menubar",
                ariaRoot: !0,
                defaults: {type: "menubutton"}
            }
        })
    }), r(jt, [Et, G, $t], function (e, t, n) {
        function r(e, t) {
            for (; e;) {
                if (t === e)return !0;
                e = e.parentNode
            }
            return !1
        }

        var i = e.extend({
            init: function (e) {
                var t = this;
                t._renderOpen = !0, t._super(e), t.addClass("menubtn"), e.fixedWidth && t.addClass("fixed-width"), t.aria("haspopup", !0), t.hasPopup = !0
            }, showMenu: function () {
                var e = this, n = e.settings, r;
                return e.menu && e.menu.visible() ? e.hideMenu() : (e.menu || (r = n.menu || [], r.length ? r = {
                    type: "menu",
                    items: r
                } : r.type = r.type || "menu", e.menu = t.create(r).parent(e).renderTo(), e.fire("createmenu"), e.menu.reflow(), e.menu.on("cancel", function (t) {
                    t.control.parent() === e.menu && (t.stopPropagation(), e.focus(), e.hideMenu())
                }), e.menu.on("select", function () {
                    e.focus()
                }), e.menu.on("show hide", function (t) {
                    t.control == e.menu && e.activeMenu("show" == t.type), e.aria("expanded", "show" == t.type)
                }).fire("show")), e.menu.show(), e.menu.layoutRect({w: e.layoutRect().w}), void e.menu.moveRel(e.getEl(), e.isRtl() ? ["br-tr", "tr-br"] : ["bl-tl", "tl-bl"]))
            }, hideMenu: function () {
                var e = this;
                e.menu && (e.menu.items().each(function (e) {
                    e.hideMenu && e.hideMenu()
                }), e.menu.hide())
            }, activeMenu: function (e) {
                this.toggleClass("active", e)
            }, renderHtml: function () {
                var e = this, t = e._id, r = e.classPrefix, i = e.settings.icon ? r + "ico " + r + "i-" + e.settings.icon : "";
                return e.aria("role", e.parent() instanceof n ? "menuitem" : "button"), '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1" aria-labelledby="' + t + '"><button id="' + t + '-open" role="presentation" type="button" tabindex="-1">' + (i ? '<i class="' + i + '"></i>' : "") + "<span>" + (e._text ? (i ? "\xa0" : "") + e.encode(e._text) : "") + '</span> <i class="' + r + 'caret"></i></button></div>'
            }, postRender: function () {
                var e = this;
                return e.on("click", function (t) {
                    t.control === e && r(t.target, e.getEl()) && (e.showMenu(), t.aria && e.menu.items()[0].focus())
                }), e.on("mouseenter", function (t) {
                    var n = t.control, r = e.parent(), o;
                    n && r && n instanceof i && n.parent() == r && (r.items().filter("MenuButton").each(function (e) {
                        e.hideMenu && e != n && (e.menu && e.menu.visible() && (o = !0), e.hideMenu())
                    }), o && (n.focus(), n.showMenu()))
                }), e._super()
            }, text: function (e) {
                var t = this, n, r;
                if (t._rendered)for (r = t.getEl("open").getElementsByTagName("span"), n = 0; n < r.length; n++)r[n].innerHTML = (t.settings.icon && e ? "\xa0" : "") + t.encode(e);
                return this._super(e)
            }, remove: function () {
                this._super(), this.menu && this.menu.remove()
            }
        });
        return i
    }), r(Kt, [jt], function (e) {
        return e.extend({
            init: function (e) {
                function t(r) {
                    for (var a = 0; a < r.length; a++) {
                        if (i = r[a].selected || e.value === r[a].value) {
                            o = o || r[a].text, n._value = r[a].value;
                            break
                        }
                        r[a].menu && t(r[a].menu)
                    }
                }

                var n = this, r, i, o, a;
                n._values = r = e.values, r && (t(r), !i && r.length > 0 && (o = r[0].text, n._value = r[0].value), e.menu = r), e.text = e.text || o || r[0].text, n._super(e), n.addClass("listbox"), n.on("select", function (t) {
                    var r = t.control;
                    a && (t.lastControl = a), e.multiple ? r.active(!r.active()) : n.value(t.control.settings.value), a = r
                })
            }, value: function (e) {
                function t(e, n) {
                    e.items().each(function (e) {
                        i = e.value() === n, i && (o = o || e.text()), e.active(i), e.menu && t(e.menu, n)
                    })
                }

                function n(t) {
                    for (var r = 0; r < t.length; r++)i = t[r].value == e, i && (o = o || t[r].text), t[r].active = i, t[r].menu && n(t[r].menu)
                }

                var r = this, i, o, a;
                return "undefined" != typeof e && (r.menu ? t(r.menu, e) : (a = r.settings.menu, n(a)), r.text(o || this.settings.text)), r._super(e)
            }
        })
    }), r(Gt, [Nt, G, g], function (e, t, n) {
        return e.extend({
            Defaults: {border: 0, role: "menuitem"}, init: function (e) {
                var t = this;
                t.hasPopup = !0, t._super(e), e = t.settings, t.addClass("menu-item"), e.menu && t.addClass("menu-item-expand"), e.preview && t.addClass("menu-item-preview"), ("-" === t._text || "|" === t._text) && (t.addClass("menu-item-sep"), t.aria("role", "separator"), t._text = "-"), e.selectable && (t.aria("role", "menuitemcheckbox"), t.addClass("menu-item-checkbox"), e.icon = "selected"), e.preview || e.selectable || t.addClass("menu-item-normal"), t.on("mousedown", function (e) {
                    e.preventDefault()
                }), e.menu && !e.ariaHideMenu && t.aria("haspopup", !0)
            }, hasMenus: function () {
                return !!this.settings.menu
            }, showMenu: function () {
                var e = this, n = e.settings, r, i = e.parent();
                if (i.items().each(function (t) {
                        t !== e && t.hideMenu()
                    }), n.menu) {
                    r = e.menu, r ? r.show() : (r = n.menu, r.length ? r = {
                        type: "menu",
                        items: r
                    } : r.type = r.type || "menu", i.settings.itemDefaults && (r.itemDefaults = i.settings.itemDefaults), r = e.menu = t.create(r).parent(e).renderTo(), r.reflow(), r.on("cancel", function (t) {
                        t.stopPropagation(), e.focus(), r.hide()
                    }), r.on("show hide", function (e) {
                        e.control.items().each(function (e) {
                            e.active(e.settings.selected)
                        })
                    }).fire("show"), r.on("hide", function (t) {
                        t.control === r && e.removeClass("selected")
                    }), r.submenu = !0), r._parentMenu = i, r.addClass("menu-sub");
                    var o = r.testMoveRel(e.getEl(), e.isRtl() ? ["tl-tr", "bl-br", "tr-tl", "br-bl"] : ["tr-tl", "br-bl", "tl-tr", "bl-br"]);
                    r.moveRel(e.getEl(), o), r.rel = o, o = "menu-sub-" + o, r.removeClass(r._lastRel), r.addClass(o), r._lastRel = o, e.addClass("selected"), e.aria("expanded", !0)
                }
            }, hideMenu: function () {
                var e = this;
                return e.menu && (e.menu.items().each(function (e) {
                    e.hideMenu && e.hideMenu()
                }), e.menu.hide(), e.aria("expanded", !1)), e
            }, renderHtml: function () {
                var e = this, t = e._id, r = e.settings, i = e.classPrefix, o = e.encode(e._text), a = e.settings.icon, s = "", l = r.shortcut;
                return a && e.parent().addClass("menu-has-icons"), r.image && (a = "none", s = " style=\"background-image: url('" + r.image + "')\""), l && n.mac && (l = l.replace(/ctrl\+alt\+/i, "&#x2325;&#x2318;"), l = l.replace(/ctrl\+/i, "&#x2318;"), l = l.replace(/alt\+/i, "&#x2325;"), l = l.replace(/shift\+/i, "&#x21E7;")), a = i + "ico " + i + "i-" + (e.settings.icon || "none"), '<div id="' + t + '" class="' + e.classes() + '" tabindex="-1">' + ("-" !== o ? '<i class="' + a + '"' + s + "></i>\xa0" : "") + ("-" !== o ? '<span id="' + t + '-text" class="' + i + 'text">' + o + "</span>" : "") + (l ? '<div id="' + t + '-shortcut" class="' + i + 'menu-shortcut">' + l + "</div>" : "") + (r.menu ? '<div class="' + i + 'caret"></div>' : "") + "</div>"
            }, postRender: function () {
                var e = this, t = e.settings, n = t.textStyle;
                if ("function" == typeof n && (n = n.call(this)), n) {
                    var r = e.getEl("text");
                    r && r.setAttribute("style", n)
                }
                return e.on("mouseenter click", function (n) {
                    n.control === e && (t.menu || "click" !== n.type ? (e.showMenu(), n.aria && e.menu.focus(!0)) : (e.fire("select"), e.parent().hideAll()))
                }), e._super(), e
            }, active: function (e) {
                return "undefined" != typeof e && this.aria("checked", e), this._super(e)
            }, remove: function () {
                this._super(), this.menu && this.menu.remove()
            }
        })
    }), r(Yt, [nt, Gt, p], function (e, t, n) {
        var r = e.extend({
            Defaults: {
                defaultType: "menuitem",
                border: 1,
                layout: "stack",
                role: "application",
                bodyRole: "menu",
                ariaRoot: !0
            }, init: function (e) {
                var t = this;
                if (e.autohide = !0, e.constrainToViewport = !0, e.itemDefaults)for (var r = e.items, i = r.length; i--;)r[i] = n.extend({}, e.itemDefaults, r[i]);
                t._super(e), t.addClass("menu")
            }, repaint: function () {
                return this.toggleClass("menu-align", !0), this._super(), this.getEl().style.height = "", this.getEl("body").style.height = "", this
            }, cancel: function () {
                var e = this;
                e.hideAll(), e.fire("select")
            }, hideAll: function () {
                var e = this;
                return this.find("menuitem").exec("hideMenu"), e._super()
            }, preRender: function () {
                var e = this;
                return e.items().each(function (t) {
                    var n = t.settings;
                    return n.icon || n.selectable ? (e._hasIcons = !0, !1) : void 0
                }), e._super()
            }
        });
        return r
    }), r(Xt, [St], function (e) {
        return e.extend({Defaults: {classes: "radio", role: "radio"}})
    }), r(Jt, [Nt, J], function (e, t) {
        return e.extend({
            renderHtml: function () {
                var e = this, t = e.classPrefix;
                return e.addClass("resizehandle"), "both" == e.settings.direction && e.addClass("resizehandle-both"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes() + '"><i class="' + t + "ico " + t + 'i-resize"></i></div>'
            }, postRender: function () {
                var e = this;
                e._super(), e.resizeDragHelper = new t(this._id, {
                    start: function () {
                        e.fire("ResizeStart")
                    }, drag: function (t) {
                        "both" != e.settings.direction && (t.deltaX = 0), e.fire("Resize", t)
                    }, stop: function () {
                        e.fire("ResizeEnd")
                    }
                })
            }, remove: function () {
                return this.resizeDragHelper && this.resizeDragHelper.destroy(), this._super()
            }
        })
    }), r(Qt, [Nt], function (e) {
        return e.extend({
            renderHtml: function () {
                var e = this;
                return e.addClass("spacer"), e.canFocus = !1, '<div id="' + e._id + '" class="' + e.classes() + '"></div>'
            }
        })
    }), r(Zt, [jt, j], function (e, t) {
        return e.extend({
            Defaults: {classes: "widget btn splitbtn", role: "button"}, repaint: function () {
                var e = this, n = e.getEl(), r = e.layoutRect(), i, o;
                return e._super(), i = n.firstChild, o = n.lastChild, t.css(i, {
                    width: r.w - t.getSize(o).width,
                    height: r.h - 2
                }), t.css(o, {height: r.h - 2}), e
            }, activeMenu: function (e) {
                var n = this;
                t.toggleClass(n.getEl().lastChild, n.classPrefix + "active", e)
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.classPrefix, r = e.settings.icon ? n + "ico " + n + "i-" + e.settings.icon : "";
                return '<div id="' + t + '" class="' + e.classes() + '" role="button" tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">' + (r ? '<i class="' + r + '"></i>' : "") + (e._text ? (r ? " " : "") + e._text : "") + '</button><button type="button" class="' + n + 'open" hidefocus="1" tabindex="-1">' + (e._menuBtnText ? (r ? "\xa0" : "") + e._menuBtnText : "") + ' <i class="' + n + 'caret"></i></button></div>'
            }, postRender: function () {
                var e = this, t = e.settings.onclick;
                return e.on("click", function (e) {
                    var n = e.target;
                    if (e.control == this)for (; n;) {
                        if (e.aria && "down" != e.aria.key || "BUTTON" == n.nodeName && -1 == n.className.indexOf("open"))return e.stopImmediatePropagation(), void t.call(this, e);
                        n = n.parentNode
                    }
                }), delete e.settings.onclick, e._super()
            }
        })
    }), r(en, [Ft], function (e) {
        return e.extend({
            Defaults: {
                containerClass: "stack-layout",
                controlClass: "stack-layout-item",
                endClass: "break"
            }
        })
    }),r(tn, [Z, j], function (e, t) {
        return e.extend({
            lastIdx: 0,
            Defaults: {layout: "absolute", defaults: {type: "panel"}},
            activateTab: function (e) {
                var n;
                this.activeTabId && (n = this.getEl(this.activeTabId), t.removeClass(n, this.classPrefix + "active"), n.setAttribute("aria-selected", "false")), this.activeTabId = "t" + e, n = this.getEl("t" + e), n.setAttribute("aria-selected", "true"), t.addClass(n, this.classPrefix + "active"), e != this.lastIdx && (this.items()[this.lastIdx].hide(), this.lastIdx = e), this.items()[e].show().fire("showtab"), this.reflow()
            },
            renderHtml: function () {
                var e = this, t = e._layout, n = "", r = e.classPrefix;
                return e.preRender(), t.preRender(e), e.items().each(function (t, i) {
                    var o = e._id + "-t" + i;
                    t.aria("role", "tabpanel"), t.aria("labelledby", o), n += '<div id="' + o + '" class="' + r + 'tab" unselectable="on" role="tab" aria-controls="' + t._id + '" aria-selected="false" tabIndex="-1">' + e.encode(t.settings.title) + "</div>"
                }), '<div id="' + e._id + '" class="' + e.classes() + '" hidefocus="1" tabindex="-1"><div id="' + e._id + '-head" class="' + r + 'tabs" role="tablist">' + n + '</div><div id="' + e._id + '-body" class="' + e.classes("body") + '">' + t.renderHtml(e) + "</div></div>"
            },
            postRender: function () {
                var e = this;
                e._super(), e.settings.activeTab = e.settings.activeTab || 0, e.activateTab(e.settings.activeTab), this.on("click", function (t) {
                    var n = t.target.parentNode;
                    if (t.target.parentNode.id == e._id + "-head")for (var r = n.childNodes.length; r--;)n.childNodes[r] == t.target && e.activateTab(r)
                })
            },
            initLayoutRect: function () {
                var e = this, n, r, i;
                r = t.getSize(e.getEl("head")).width, r = 0 > r ? 0 : r, i = 0, e.items().each(function (t, n) {
                    r = Math.max(r, t.layoutRect().minW), i = Math.max(i, t.layoutRect().minH), e.settings.activeTab != n && t.hide()
                }), e.items().each(function (e) {
                    e.settings.x = 0, e.settings.y = 0, e.settings.w = r, e.settings.h = i, e.layoutRect({
                        x: 0,
                        y: 0,
                        w: r,
                        h: i
                    })
                });
                var o = t.getSize(e.getEl("head")).height;
                return e.settings.minWidth = r, e.settings.minHeight = i + o, n = e._super(), n.deltaH += o, n.innerH = n.h - n.deltaH, n
            }
        })
    }),r(nn, [Nt, j], function (e, t) {
        return e.extend({
            init: function (e) {
                var t = this;
                t._super(e), t._value = e.value || "", t.addClass("textbox"), e.multiline ? t.addClass("multiline") : t.on("keydown", function (e) {
                    13 == e.keyCode && t.parents().reverse().each(function (t) {
                        return e.preventDefault(), t.hasEventListeners("submit") && t.toJSON ? (t.fire("submit", {data: t.toJSON()}), !1) : void 0
                    })
                })
            }, disabled: function (e) {
                var t = this;
                return t._rendered && "undefined" != typeof e && (t.getEl().disabled = e), t._super(e)
            }, value: function (e) {
                var t = this;
                return "undefined" != typeof e ? (t._value = e, t._rendered && (t.getEl().value = e), t) : t._rendered ? t.getEl().value : t._value
            }, repaint: function () {
                var e = this, t, n, r, i = 0, o = 0, a;
                t = e.getEl().style, n = e._layoutRect, a = e._lastRepaintRect || {};
                var s = document;
                return !e.settings.multiline && s.all && (!s.documentMode || s.documentMode <= 8) && (t.lineHeight = n.h - o + "px"), r = e._borderBox, i = r.left + r.right + 8, o = r.top + r.bottom + (e.settings.multiline ? 8 : 0), n.x !== a.x && (t.left = n.x + "px", a.x = n.x), n.y !== a.y && (t.top = n.y + "px", a.y = n.y), n.w !== a.w && (t.width = n.w - i + "px", a.w = n.w), n.h !== a.h && (t.height = n.h - o + "px", a.h = n.h), e._lastRepaintRect = a, e.fire("repaint", {}, !1), e
            }, renderHtml: function () {
                var e = this, t = e._id, n = e.settings, r = e.encode(e._value, !1), i = "";
                return "spellcheck" in n && (i += ' spellcheck="' + n.spellcheck + '"'), n.maxLength && (i += ' maxlength="' + n.maxLength + '"'), n.size && (i += ' size="' + n.size + '"'), n.subtype && (i += ' type="' + n.subtype + '"'), e.disabled() && (i += ' disabled="disabled"'), n.multiline ? '<textarea id="' + t + '" class="' + e.classes() + '" ' + (n.rows ? ' rows="' + n.rows + '"' : "") + ' hidefocus="1"' + i + ">" + r + "</textarea>" : '<input id="' + t + '" class="' + e.classes() + '" value="' + r + '" hidefocus="1"' + i + " />"
            }, postRender: function () {
                var e = this;
                return t.on(e.getEl(), "change", function (t) {
                    e.fire("change", t)
                }), e._super()
            }, remove: function () {
                t.off(this.getEl()), this._super()
            }
        })
    }),r(rn, [j, K], function (e, t) {
        return function (n, r) {
            var i = this, o, a = t.classPrefix;
            i.show = function (t) {
                return i.hide(), o = !0, window.setTimeout(function () {
                    o && n.appendChild(e.createFragment('<div class="' + a + "throbber" + (r ? " " + a + "throbber-inline" : "") + '"></div>'))
                }, t || 0), i
            }, i.hide = function () {
                var e = n.lastChild;
                return e && -1 != e.className.indexOf("throbber") && e.parentNode.removeChild(e), o = !1, i
            }
        }
    }),a([l, c, u, d, f, p, m, h, g, y, b, C, x, w, _, N, E, k, S, T, R, A, D, L, M, P, O, I, F, z, W, V, U, q, $, j, K, G, Y, X, J, Q, Z, et, tt, nt, rt, it, ot, at, st, lt, ct, ut, dt, ft, pt, mt, ht, gt, vt, yt, bt, Ct, xt, wt, _t, Nt, Et, kt, St, Tt, Rt, At, Bt, Dt, Lt, Mt, Ht, Pt, Ot, It, Ft, zt, Wt, Vt, Ut, qt, $t, jt, Kt, Gt, Yt, Xt, Jt, Qt, Zt, en, tn, nn, rn])
}(this);
tinymce.PluginManager.add("advlist", function (t) {
    function e(t, e) {
        var n = [];
        return tinymce.each(e.split(/[ ,]/), function (t) {
            n.push({
                text: t.replace(/\-/g, " ").replace(/\b\w/g, function (t) {
                    return t.toUpperCase()
                }), data: "default" == t ? "" : t
            })
        }), n
    }

    function n(e, n) {
        var o, l = t.dom, a = t.selection;
        o = l.getParent(a.getNode(), "ol,ul"), o && o.nodeName == e && n !== !1 || t.execCommand("UL" == e ? "InsertUnorderedList" : "InsertOrderedList"), n = n === !1 ? i[e] : n, i[e] = n, o = l.getParent(a.getNode(), "ol,ul"), o && (l.setStyle(o, "listStyleType", n), o.removeAttribute("data-mce-style")), t.focus()
    }

    function o(e) {
        var n = t.dom.getStyle(t.dom.getParent(t.selection.getNode(), "ol,ul"), "listStyleType") || "";
        e.control.items().each(function (t) {
            t.active(t.settings.data === n)
        })
    }

    var l, a, i = {};
    l = e("OL", t.getParam("advlist_number_styles", "default,lower-alpha,lower-greek,lower-roman,upper-alpha,upper-roman")), a = e("UL", t.getParam("advlist_bullet_styles", "default,circle,disc,square")), t.addButton("numlist", {
        type: "splitbutton",
        tooltip: "Numbered list",
        menu: l,
        onshow: o,
        onselect: function (t) {
            n("OL", t.control.settings.data)
        },
        onclick: function () {
            n("OL", !1)
        }
    }), t.addButton("bullist", {
        type: "splitbutton",
        tooltip: "Bullet list",
        menu: a,
        onshow: o,
        onselect: function (t) {
            n("UL", t.control.settings.data)
        },
        onclick: function () {
            n("UL", !1)
        }
    })
});
tinymce.PluginManager.add("anchor", function (n) {
    function e() {
        var e = n.selection.getNode();
        n.windowManager.open({
            title: "Anchor",
            body: {type: "textbox", name: "name", size: 40, label: "Name", value: e.name || e.id},
            onsubmit: function (e) {
                n.execCommand("mceInsertContent", !1, n.dom.createHTML("a", {id: e.data.name}))
            }
        })
    }

    n.addButton("anchor", {
        icon: "anchor",
        tooltip: "Anchor",
        onclick: e,
        stateSelector: "a:not([href])"
    }), n.addMenuItem("anchor", {icon: "anchor", text: "Anchor", context: "insert", onclick: e})
});
tinymce.PluginManager.add("autolink", function (t) {
    function n(t) {
        o(t, -1, "(", !0)
    }

    function e(t) {
        o(t, 0, "", !0)
    }

    function i(t) {
        o(t, -1, "", !1)
    }

    function o(t, n, e) {
        function i(t, n) {
            if (0 > n && (n = 0), 3 == t.nodeType) {
                var e = t.data.length;
                n > e && (n = e)
            }
            return n
        }

        function o(t, n) {
            f.setStart(t, i(t, n))
        }

        function r(t, n) {
            f.setEnd(t, i(t, n))
        }

        var f, d, a, s, c, l, u, g, h;
        if (f = t.selection.getRng(!0).cloneRange(), f.startOffset < 5) {
            if (g = f.endContainer.previousSibling, !g) {
                if (!f.endContainer.firstChild || !f.endContainer.firstChild.nextSibling)return;
                g = f.endContainer.firstChild.nextSibling
            }
            if (h = g.length, o(g, h), r(g, h), f.endOffset < 5)return;
            d = f.endOffset, s = g
        } else {
            if (s = f.endContainer, 3 != s.nodeType && s.firstChild) {
                for (; 3 != s.nodeType && s.firstChild;)s = s.firstChild;
                3 == s.nodeType && (o(s, 0), r(s, s.nodeValue.length))
            }
            d = 1 == f.endOffset ? 2 : f.endOffset - 1 - n
        }
        a = d;
        do o(s, d >= 2 ? d - 2 : 0), r(s, d >= 1 ? d - 1 : 0), d -= 1; while (" " != f.toString() && "" !== f.toString() && 160 != f.toString().charCodeAt(0) && d - 2 >= 0 && f.toString() != e);
        f.toString() == e || 160 == f.toString().charCodeAt(0) ? (o(s, d), r(s, a), d += 1) : 0 === f.startOffset ? (o(s, 0), r(s, a)) : (o(s, d), r(s, a)), l = f.toString(), "." == l.charAt(l.length - 1) && r(s, a - 1), l = f.toString(), u = l.match(/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i), u && ("www." == u[1] ? u[1] = "http://www." : /@$/.test(u[1]) && !/^mailto:/.test(u[1]) && (u[1] = "mailto:" + u[1]), c = t.selection.getBookmark(), t.selection.setRng(f), t.execCommand("createlink", !1, u[1] + u[2]), t.selection.moveToBookmark(c), t.nodeChanged())
    }

    var r;
    return t.on("keydown", function (n) {
        return 13 == n.keyCode ? i(t) : void 0
    }), tinymce.Env.ie ? void t.on("focus", function () {
        if (!r) {
            r = !0;
            try {
                t.execCommand("AutoUrlDetect", !1, !0)
            } catch (n) {
            }
        }
    }) : (t.on("keypress", function (e) {
        return 41 == e.keyCode ? n(t) : void 0
    }), void t.on("keyup", function (n) {
        return 32 == n.keyCode ? e(t) : void 0
    }))
});
tinymce.PluginManager.add("autoresize", function (e) {
    function t() {
        return e.plugins.fullscreen && e.plugins.fullscreen.isFullscreen()
    }

    function i(n) {
        var s, r, g, u, l, m, h, d, f = tinymce.DOM;
        if (r = e.getDoc()) {
            if (g = r.body, u = r.documentElement, l = o.autoresize_min_height, !g || n && "setcontent" === n.type && n.initial || t())return void(g && u && (g.style.overflowY = "auto", u.style.overflowY = "auto"));
            h = e.dom.getStyle(g, "margin-top", !0), d = e.dom.getStyle(g, "margin-bottom", !0), m = g.offsetHeight + parseInt(h, 10) + parseInt(d, 10), (isNaN(m) || 0 >= m) && (m = tinymce.Env.ie ? g.scrollHeight : tinymce.Env.webkit && 0 === g.clientHeight ? 0 : g.offsetHeight), m > o.autoresize_min_height && (l = m), o.autoresize_max_height && m > o.autoresize_max_height ? (l = o.autoresize_max_height, g.style.overflowY = "auto", u.style.overflowY = "auto") : (g.style.overflowY = "hidden", u.style.overflowY = "hidden", g.scrollTop = 0), l !== a && (s = l - a, f.setStyle(f.get(e.id + "_ifr"), "height", l + "px"), a = l, tinymce.isWebKit && 0 > s && i(n))
        }
    }

    function n(e, t, o) {
        setTimeout(function () {
            i({}), e-- ? n(e, t, o) : o && o()
        }, t)
    }

    var o = e.settings, a = 0;
    e.settings.inline || (o.autoresize_min_height = parseInt(e.getParam("autoresize_min_height", e.getElement().offsetHeight), 10), o.autoresize_max_height = parseInt(e.getParam("autoresize_max_height", 0), 10), e.on("init", function () {
        var t = e.getParam("autoresize_overflow_padding", 1);
        e.dom.setStyles(e.getBody(), {
            paddingBottom: e.getParam("autoresize_bottom_margin", 50),
            paddingLeft: t,
            paddingRight: t
        })
    }), e.on("nodechange setcontent keyup FullscreenStateChanged", i), e.getParam("autoresize_on_init", !0) && e.on("init", function () {
        n(20, 100, function () {
            n(5, 1e3)
        })
    }), e.addCommand("mceAutoResize", i))
});
tinymce.PluginManager.add("autosave", function (e) {
    function t(e, t) {
        var n = {s: 1e3, m: 6e4};
        return e = /^(\d+)([ms]?)$/.exec("" + (e || t)), (e[2] ? n[e[2]] : 1) * parseInt(e, 10)
    }

    function n() {
        var e = parseInt(l.getItem(d + "time"), 10) || 0;
        return (new Date).getTime() - e > v.autosave_retention ? (a(!1), !1) : !0
    }

    function a(t) {
        l.removeItem(d + "draft"), l.removeItem(d + "time"), t !== !1 && e.fire("RemoveDraft")
    }

    function r() {
        !c() && e.isDirty() && (l.setItem(d + "draft", e.getContent({
            format: "raw",
            no_events: !0
        })), l.setItem(d + "time", (new Date).getTime()), e.fire("StoreDraft"))
    }

    function o() {
        n() && (e.setContent(l.getItem(d + "draft"), {format: "raw"}), e.fire("RestoreDraft"))
    }

    function i() {
        m || (setInterval(function () {
            e.removed || r()
        }, v.autosave_interval), m = !0)
    }

    function s() {
        var t = this;
        t.disabled(!n()), e.on("StoreDraft RestoreDraft RemoveDraft", function () {
            t.disabled(!n())
        }), i()
    }

    function u() {
        e.undoManager.beforeChange(), o(), a(), e.undoManager.add()
    }

    function f() {
        var e;
        return tinymce.each(tinymce.editors, function (t) {
            t.plugins.autosave && t.plugins.autosave.storeDraft(), !e && t.isDirty() && t.getParam("autosave_ask_before_unload", !0) && (e = t.translate("You have unsaved changes are you sure you want to navigate away?"))
        }), e
    }

    function c(t) {
        var n = e.settings.forced_root_block;
        return t = tinymce.trim("undefined" == typeof t ? e.getBody().innerHTML : t), "" === t || new RegExp("^<" + n + "[^>]*>(( |&nbsp;|[ 	]|<br[^>]*>)+?|)</" + n + ">|<br>$", "i").test(t)
    }

    var d, m, v = e.settings, l = tinymce.util.LocalStorage;
    d = v.autosave_prefix || "tinymce-autosave-{path}{query}-{id}-", d = d.replace(/\{path\}/g, document.location.pathname), d = d.replace(/\{query\}/g, document.location.search), d = d.replace(/\{id\}/g, e.id), v.autosave_interval = t(v.autosave_interval, "30s"), v.autosave_retention = t(v.autosave_retention, "20m"), e.addButton("restoredraft", {
        title: "Restore last draft",
        onclick: u,
        onPostRender: s
    }), e.addMenuItem("restoredraft", {
        text: "Restore last draft",
        onclick: u,
        onPostRender: s,
        context: "file"
    }), e.settings.autosave_restore_when_empty !== !1 && (e.on("init", function () {
        n() && c() && o()
    }), e.on("saveContent", function () {
        a()
    })), window.onbeforeunload = f, this.hasDraft = n, this.storeDraft = r, this.restoreDraft = o, this.removeDraft = a, this.isEmpty = c
});
!function () {
    tinymce.create("tinymce.plugins.BBCodePlugin", {
        init: function (o) {
            var e = this, t = o.getParam("bbcode_dialect", "punbb").toLowerCase();
            o.on("beforeSetContent", function (o) {
                o.content = e["_" + t + "_bbcode2html"](o.content)
            }), o.on("postProcess", function (o) {
                o.set && (o.content = e["_" + t + "_bbcode2html"](o.content)), o.get && (o.content = e["_" + t + "_html2bbcode"](o.content))
            })
        }, getInfo: function () {
            return {
                longname: "BBCode Plugin",
                author: "Moxiecode Systems AB",
                authorurl: "http://www.tinymce.com",
                infourl: "http://www.tinymce.com/wiki.php/Plugin:bbcode"
            }
        }, _punbb_html2bbcode: function (o) {
            function e(e, t) {
                o = o.replace(e, t)
            }

            return o = tinymce.trim(o), e(/<a.*?href=\"(.*?)\".*?>(.*?)<\/a>/gi, "[url=$1]$2[/url]"), e(/<font.*?color=\"(.*?)\".*?class=\"codeStyle\".*?>(.*?)<\/font>/gi, "[code][color=$1]$2[/color][/code]"), e(/<font.*?color=\"(.*?)\".*?class=\"quoteStyle\".*?>(.*?)<\/font>/gi, "[quote][color=$1]$2[/color][/quote]"), e(/<font.*?class=\"codeStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi, "[code][color=$1]$2[/color][/code]"), e(/<font.*?class=\"quoteStyle\".*?color=\"(.*?)\".*?>(.*?)<\/font>/gi, "[quote][color=$1]$2[/color][/quote]"), e(/<span style=\"color: ?(.*?);\">(.*?)<\/span>/gi, "[color=$1]$2[/color]"), e(/<font.*?color=\"(.*?)\".*?>(.*?)<\/font>/gi, "[color=$1]$2[/color]"), e(/<span style=\"font-size:(.*?);\">(.*?)<\/span>/gi, "[size=$1]$2[/size]"), e(/<font>(.*?)<\/font>/gi, "$1"), e(/<img.*?src=\"(.*?)\".*?\/>/gi, "[img]$1[/img]"), e(/<span class=\"codeStyle\">(.*?)<\/span>/gi, "[code]$1[/code]"), e(/<span class=\"quoteStyle\">(.*?)<\/span>/gi, "[quote]$1[/quote]"), e(/<strong class=\"codeStyle\">(.*?)<\/strong>/gi, "[code][b]$1[/b][/code]"), e(/<strong class=\"quoteStyle\">(.*?)<\/strong>/gi, "[quote][b]$1[/b][/quote]"), e(/<em class=\"codeStyle\">(.*?)<\/em>/gi, "[code][i]$1[/i][/code]"), e(/<em class=\"quoteStyle\">(.*?)<\/em>/gi, "[quote][i]$1[/i][/quote]"), e(/<u class=\"codeStyle\">(.*?)<\/u>/gi, "[code][u]$1[/u][/code]"), e(/<u class=\"quoteStyle\">(.*?)<\/u>/gi, "[quote][u]$1[/u][/quote]"), e(/<\/(strong|b)>/gi, "[/b]"), e(/<(strong|b)>/gi, "[b]"), e(/<\/(em|i)>/gi, "[/i]"), e(/<(em|i)>/gi, "[i]"), e(/<\/u>/gi, "[/u]"), e(/<span style=\"text-decoration: ?underline;\">(.*?)<\/span>/gi, "[u]$1[/u]"), e(/<u>/gi, "[u]"), e(/<blockquote[^>]*>/gi, "[quote]"), e(/<\/blockquote>/gi, "[/quote]"), e(/<br \/>/gi, "\n"), e(/<br\/>/gi, "\n"), e(/<br>/gi, "\n"), e(/<p>/gi, ""), e(/<\/p>/gi, "\n"), e(/&nbsp;|\u00a0/gi, " "), e(/&quot;/gi, '"'), e(/&lt;/gi, "<"), e(/&gt;/gi, ">"), e(/&amp;/gi, "&"), o
        }, _punbb_bbcode2html: function (o) {
            function e(e, t) {
                o = o.replace(e, t)
            }

            return o = tinymce.trim(o), e(/\n/gi, "<br />"), e(/\[b\]/gi, "<strong>"), e(/\[\/b\]/gi, "</strong>"), e(/\[i\]/gi, "<em>"), e(/\[\/i\]/gi, "</em>"), e(/\[u\]/gi, "<u>"), e(/\[\/u\]/gi, "</u>"), e(/\[url=([^\]]+)\](.*?)\[\/url\]/gi, '<a href="$1">$2</a>'), e(/\[url\](.*?)\[\/url\]/gi, '<a href="$1">$1</a>'), e(/\[img\](.*?)\[\/img\]/gi, '<img src="$1" />'), e(/\[color=(.*?)\](.*?)\[\/color\]/gi, '<font color="$1">$2</font>'), e(/\[code\](.*?)\[\/code\]/gi, '<span class="codeStyle">$1</span>&nbsp;'), e(/\[quote.*?\](.*?)\[\/quote\]/gi, '<span class="quoteStyle">$1</span>&nbsp;'), o
        }
    }), tinymce.PluginManager.add("bbcode", tinymce.plugins.BBCodePlugin)
}();
tinymce.PluginManager.add("charmap", function (e) {
    function a() {
        function a(e) {
            for (; e;) {
                if ("TD" == e.nodeName)return e;
                e = e.parentNode
            }
        }

        var t, r, o, n;
        t = '<table role="presentation" cellspacing="0" class="mce-charmap"><tbody>';
        var l = 25;
        for (o = 0; 10 > o; o++) {
            for (t += "<tr>", r = 0; l > r; r++) {
                var s = i[o * l + r];
                t += '<td title="' + s[1] + '"><div tabindex="-1" title="' + s[1] + '" role="button">' + (s ? String.fromCharCode(parseInt(s[0], 10)) : "&nbsp;") + "</div></td>"
            }
            t += "</tr>"
        }
        t += "</tbody></table>";
        var c = {
            type: "container", html: t, onclick: function (a) {
                var i = a.target;
                "TD" == i.tagName && (i = i.firstChild), "DIV" == i.tagName && (e.execCommand("mceInsertContent", !1, i.firstChild.data), a.ctrlKey || n.close())
            }, onmouseover: function (e) {
                var i = a(e.target);
                i && n.find("#preview").text(i.firstChild.firstChild.data)
            }
        };
        n = e.windowManager.open({
            title: "Special character",
            spacing: 10,
            padding: 10,
            items: [c, {
                type: "label",
                name: "preview",
                text: " ",
                style: "font-size: 40px; text-align: center",
                border: 1,
                minWidth: 100,
                minHeight: 80
            }],
            buttons: [{
                text: "Close", onclick: function () {
                    n.close()
                }
            }]
        })
    }

    var i = [["160", "no-break space"], ["38", "ampersand"], ["34", "quotation mark"], ["162", "cent sign"], ["8364", "euro sign"], ["163", "pound sign"], ["165", "yen sign"], ["169", "copyright sign"], ["174", "registered sign"], ["8482", "trade mark sign"], ["8240", "per mille sign"], ["181", "micro sign"], ["183", "middle dot"], ["8226", "bullet"], ["8230", "three dot leader"], ["8242", "minutes / feet"], ["8243", "seconds / inches"], ["167", "section sign"], ["182", "paragraph sign"], ["223", "sharp s / ess-zed"], ["8249", "single left-pointing angle quotation mark"], ["8250", "single right-pointing angle quotation mark"], ["171", "left pointing guillemet"], ["187", "right pointing guillemet"], ["8216", "left single quotation mark"], ["8217", "right single quotation mark"], ["8220", "left double quotation mark"], ["8221", "right double quotation mark"], ["8218", "single low-9 quotation mark"], ["8222", "double low-9 quotation mark"], ["60", "less-than sign"], ["62", "greater-than sign"], ["8804", "less-than or equal to"], ["8805", "greater-than or equal to"], ["8211", "en dash"], ["8212", "em dash"], ["175", "macron"], ["8254", "overline"], ["164", "currency sign"], ["166", "broken bar"], ["168", "diaeresis"], ["161", "inverted exclamation mark"], ["191", "turned question mark"], ["710", "circumflex accent"], ["732", "small tilde"], ["176", "degree sign"], ["8722", "minus sign"], ["177", "plus-minus sign"], ["247", "division sign"], ["8260", "fraction slash"], ["215", "multiplication sign"], ["185", "superscript one"], ["178", "superscript two"], ["179", "superscript three"], ["188", "fraction one quarter"], ["189", "fraction one half"], ["190", "fraction three quarters"], ["402", "function / florin"], ["8747", "integral"], ["8721", "n-ary sumation"], ["8734", "infinity"], ["8730", "square root"], ["8764", "similar to"], ["8773", "approximately equal to"], ["8776", "almost equal to"], ["8800", "not equal to"], ["8801", "identical to"], ["8712", "element of"], ["8713", "not an element of"], ["8715", "contains as member"], ["8719", "n-ary product"], ["8743", "logical and"], ["8744", "logical or"], ["172", "not sign"], ["8745", "intersection"], ["8746", "union"], ["8706", "partial differential"], ["8704", "for all"], ["8707", "there exists"], ["8709", "diameter"], ["8711", "backward difference"], ["8727", "asterisk operator"], ["8733", "proportional to"], ["8736", "angle"], ["180", "acute accent"], ["184", "cedilla"], ["170", "feminine ordinal indicator"], ["186", "masculine ordinal indicator"], ["8224", "dagger"], ["8225", "double dagger"], ["192", "A - grave"], ["193", "A - acute"], ["194", "A - circumflex"], ["195", "A - tilde"], ["196", "A - diaeresis"], ["197", "A - ring above"], ["198", "ligature AE"], ["199", "C - cedilla"], ["200", "E - grave"], ["201", "E - acute"], ["202", "E - circumflex"], ["203", "E - diaeresis"], ["204", "I - grave"], ["205", "I - acute"], ["206", "I - circumflex"], ["207", "I - diaeresis"], ["208", "ETH"], ["209", "N - tilde"], ["210", "O - grave"], ["211", "O - acute"], ["212", "O - circumflex"], ["213", "O - tilde"], ["214", "O - diaeresis"], ["216", "O - slash"], ["338", "ligature OE"], ["352", "S - caron"], ["217", "U - grave"], ["218", "U - acute"], ["219", "U - circumflex"], ["220", "U - diaeresis"], ["221", "Y - acute"], ["376", "Y - diaeresis"], ["222", "THORN"], ["224", "a - grave"], ["225", "a - acute"], ["226", "a - circumflex"], ["227", "a - tilde"], ["228", "a - diaeresis"], ["229", "a - ring above"], ["230", "ligature ae"], ["231", "c - cedilla"], ["232", "e - grave"], ["233", "e - acute"], ["234", "e - circumflex"], ["235", "e - diaeresis"], ["236", "i - grave"], ["237", "i - acute"], ["238", "i - circumflex"], ["239", "i - diaeresis"], ["240", "eth"], ["241", "n - tilde"], ["242", "o - grave"], ["243", "o - acute"], ["244", "o - circumflex"], ["245", "o - tilde"], ["246", "o - diaeresis"], ["248", "o slash"], ["339", "ligature oe"], ["353", "s - caron"], ["249", "u - grave"], ["250", "u - acute"], ["251", "u - circumflex"], ["252", "u - diaeresis"], ["253", "y - acute"], ["254", "thorn"], ["255", "y - diaeresis"], ["913", "Alpha"], ["914", "Beta"], ["915", "Gamma"], ["916", "Delta"], ["917", "Epsilon"], ["918", "Zeta"], ["919", "Eta"], ["920", "Theta"], ["921", "Iota"], ["922", "Kappa"], ["923", "Lambda"], ["924", "Mu"], ["925", "Nu"], ["926", "Xi"], ["927", "Omicron"], ["928", "Pi"], ["929", "Rho"], ["931", "Sigma"], ["932", "Tau"], ["933", "Upsilon"], ["934", "Phi"], ["935", "Chi"], ["936", "Psi"], ["937", "Omega"], ["945", "alpha"], ["946", "beta"], ["947", "gamma"], ["948", "delta"], ["949", "epsilon"], ["950", "zeta"], ["951", "eta"], ["952", "theta"], ["953", "iota"], ["954", "kappa"], ["955", "lambda"], ["956", "mu"], ["957", "nu"], ["958", "xi"], ["959", "omicron"], ["960", "pi"], ["961", "rho"], ["962", "final sigma"], ["963", "sigma"], ["964", "tau"], ["965", "upsilon"], ["966", "phi"], ["967", "chi"], ["968", "psi"], ["969", "omega"], ["8501", "alef symbol"], ["982", "pi symbol"], ["8476", "real part symbol"], ["978", "upsilon - hook symbol"], ["8472", "Weierstrass p"], ["8465", "imaginary part"], ["8592", "leftwards arrow"], ["8593", "upwards arrow"], ["8594", "rightwards arrow"], ["8595", "downwards arrow"], ["8596", "left right arrow"], ["8629", "carriage return"], ["8656", "leftwards double arrow"], ["8657", "upwards double arrow"], ["8658", "rightwards double arrow"], ["8659", "downwards double arrow"], ["8660", "left right double arrow"], ["8756", "therefore"], ["8834", "subset of"], ["8835", "superset of"], ["8836", "not a subset of"], ["8838", "subset of or equal to"], ["8839", "superset of or equal to"], ["8853", "circled plus"], ["8855", "circled times"], ["8869", "perpendicular"], ["8901", "dot operator"], ["8968", "left ceiling"], ["8969", "right ceiling"], ["8970", "left floor"], ["8971", "right floor"], ["9001", "left-pointing angle bracket"], ["9002", "right-pointing angle bracket"], ["9674", "lozenge"], ["9824", "black spade suit"], ["9827", "black club suit"], ["9829", "black heart suit"], ["9830", "black diamond suit"], ["8194", "en space"], ["8195", "em space"], ["8201", "thin space"], ["8204", "zero width non-joiner"], ["8205", "zero width joiner"], ["8206", "left-to-right mark"], ["8207", "right-to-left mark"], ["173", "soft hyphen"]];
    e.addButton("charmap", {
        icon: "charmap",
        tooltip: "Special character",
        onclick: a
    }), e.addMenuItem("charmap", {icon: "charmap", text: "Special character", onclick: a, context: "insert"})
});
tinymce.PluginManager.add("code", function (e) {
    function o() {
        e.windowManager.open({
            title: "Source code",
            body: {
                type: "textbox",
                name: "code",
                multiline: !0,
                minWidth: e.getParam("code_dialog_width", 600),
                minHeight: e.getParam("code_dialog_height", Math.min(tinymce.DOM.getViewPort().h - 200, 500)),
                value: e.getContent({source_view: !0}),
                spellcheck: !1,
                style: "direction: ltr; text-align: left"
            },
            onSubmit: function (o) {
                e.focus(), e.undoManager.transact(function () {
                    e.setContent(o.data.code)
                }), e.selection.setCursorLocation(), e.nodeChanged()
            }
        })
    }

    e.addCommand("mceCodeEditor", o), e.addButton("code", {
        icon: "code",
        tooltip: "Source code",
        onclick: o
    }), e.addMenuItem("code", {icon: "code", text: "Source code", context: "tools", onclick: o})
});
tinymce.PluginManager.add("contextmenu", function (e) {
    var n, t = e.settings.contextmenu_never_use_native;
    e.on("contextmenu", function (i) {
        var o;
        if (!i.ctrlKey || t) {
            if (i.preventDefault(), o = e.settings.contextmenu || "link image inserttable | cell row column deletetable", n)n.show(); else {
                var c = [];
                tinymce.each(o.split(/[ ,]/), function (n) {
                    var t = e.menuItems[n];
                    "|" == n && (t = {text: n}), t && (t.shortcut = "", c.push(t))
                });
                for (var a = 0; a < c.length; a++)"|" == c[a].text && (0 === a || a == c.length - 1) && c.splice(a, 1);
                n = new tinymce.ui.Menu({
                    items: c,
                    context: "contextmenu"
                }).addClass("contextmenu").renderTo(), e.on("remove", function () {
                    n.remove(), n = null
                })
            }
            var l = {x: i.pageX, y: i.pageY};
            e.inline || (l = tinymce.DOM.getPos(e.getContentAreaContainer()), l.x += i.clientX, l.y += i.clientY), n.moveTo(l.x, l.y)
        }
    })
});
tinymce.PluginManager.add("directionality", function (t) {
    function e(e) {
        var i, n = t.dom, r = t.selection.getSelectedBlocks();
        r.length && (i = n.getAttrib(r[0], "dir"), tinymce.each(r, function (t) {
            n.getParent(t.parentNode, "*[dir='" + e + "']", n.getRoot()) || (i != e ? n.setAttrib(t, "dir", e) : n.setAttrib(t, "dir", null))
        }), t.nodeChanged())
    }

    function i(t) {
        var e = [];
        return tinymce.each("h1 h2 h3 h4 h5 h6 div p".split(" "), function (i) {
            e.push(i + "[dir=" + t + "]")
        }), e.join(",")
    }

    t.addCommand("mceDirectionLTR", function () {
        e("ltr")
    }), t.addCommand("mceDirectionRTL", function () {
        e("rtl")
    }), t.addButton("ltr", {
        title: "Left to right",
        cmd: "mceDirectionLTR",
        stateSelector: i("ltr")
    }), t.addButton("rtl", {title: "Right to left", cmd: "mceDirectionRTL", stateSelector: i("rtl")})
});
tinymce.PluginManager.add("emoticons", function (t, e) {
    function a() {
        var t;
        return t = '<table role="list" class="mce-grid">', tinymce.each(i, function (a) {
            t += "<tr>", tinymce.each(a, function (a) {
                var i = e + "/img/smiley-" + a + ".gif";
                t += '<td><a href="#" data-mce-url="' + i + '" data-mce-alt="' + a + '" tabindex="-1" role="option" aria-label="' + a + '"><img src="' + i + '" style="width: 18px; height: 18px" role="presentation" /></a></td>'
            }), t += "</tr>"
        }), t += "</table>"
    }

    var i = [["cool", "cry", "embarassed", "foot-in-mouth"], ["frown", "innocent", "kiss", "laughing"], ["money-mouth", "sealed", "smile", "surprised"], ["tongue-out", "undecided", "wink", "yell"]];
    t.addButton("emoticons", {
        type: "panelbutton",
        panel: {
            role: "application", autohide: !0, html: a, onclick: function (e) {
                var a = t.dom.getParent(e.target, "a");
                a && (t.insertContent('<img src="' + a.getAttribute("data-mce-url") + '" alt="' + a.getAttribute("data-mce-alt") + '" />'), this.hide())
            }
        },
        tooltip: "Emoticons"
    })
});
tinymce.PluginManager.add("fullpage", function (e) {
    function t() {
        var t = n();
        e.windowManager.open({
            title: "Document properties",
            data: t,
            defaults: {type: "textbox", size: 40},
            body: [{name: "title", label: "Title"}, {name: "keywords", label: "Keywords"}, {
                name: "description",
                label: "Description"
            }, {name: "robots", label: "Robots"}, {name: "author", label: "Author"}, {
                name: "docencoding",
                label: "Encoding"
            }],
            onSubmit: function (e) {
                l(tinymce.extend(t, e.data))
            }
        })
    }

    function n() {
        function t(e, t) {
            var n = e.attr(t);
            return n || ""
        }

        var n, l, a = i(), r = {};
        return r.fontface = e.getParam("fullpage_default_fontface", ""), r.fontsize = e.getParam("fullpage_default_fontsize", ""), n = a.firstChild, 7 == n.type && (r.xml_pi = !0, l = /encoding="([^"]+)"/.exec(n.value), l && (r.docencoding = l[1])), n = a.getAll("#doctype")[0], n && (r.doctype = "<!DOCTYPE" + n.value + ">"), n = a.getAll("title")[0], n && n.firstChild && (r.title = n.firstChild.value), s(a.getAll("meta"), function (e) {
            var t, n = e.attr("name"), l = e.attr("http-equiv");
            n ? r[n.toLowerCase()] = e.attr("content") : "Content-Type" == l && (t = /charset\s*=\s*(.*)\s*/gi.exec(e.attr("content")), t && (r.docencoding = t[1]))
        }), n = a.getAll("html")[0], n && (r.langcode = t(n, "lang") || t(n, "xml:lang")), r.stylesheets = [], tinymce.each(a.getAll("link"), function (e) {
            "stylesheet" == e.attr("rel") && r.stylesheets.push(e.attr("href"))
        }), n = a.getAll("body")[0], n && (r.langdir = t(n, "dir"), r.style = t(n, "style"), r.visited_color = t(n, "vlink"), r.link_color = t(n, "link"), r.active_color = t(n, "alink")), r
    }

    function l(t) {
        function n(e, t, n) {
            e.attr(t, n ? n : void 0)
        }

        function l(e) {
            r.firstChild ? r.insert(e, r.firstChild) : r.append(e)
        }

        var a, r, o, c, u, f = e.dom;
        a = i(), r = a.getAll("head")[0], r || (c = a.getAll("html")[0], r = new m("head", 1), c.firstChild ? c.insert(r, c.firstChild, !0) : c.append(r)), c = a.firstChild, t.xml_pi ? (u = 'version="1.0"', t.docencoding && (u += ' encoding="' + t.docencoding + '"'), 7 != c.type && (c = new m("xml", 7), a.insert(c, a.firstChild, !0)), c.value = u) : c && 7 == c.type && c.remove(), c = a.getAll("#doctype")[0], t.doctype ? (c || (c = new m("#doctype", 10), t.xml_pi ? a.insert(c, a.firstChild) : l(c)), c.value = t.doctype.substring(9, t.doctype.length - 1)) : c && c.remove(), c = null, s(a.getAll("meta"), function (e) {
            "Content-Type" == e.attr("http-equiv") && (c = e)
        }), t.docencoding ? (c || (c = new m("meta", 1), c.attr("http-equiv", "Content-Type"), c.shortEnded = !0, l(c)), c.attr("content", "text/html; charset=" + t.docencoding)) : c.remove(), c = a.getAll("title")[0], t.title ? (c ? c.empty() : (c = new m("title", 1), l(c)), c.append(new m("#text", 3)).value = t.title) : c && c.remove(), s("keywords,description,author,copyright,robots".split(","), function (e) {
            var n, i, r = a.getAll("meta"), o = t[e];
            for (n = 0; n < r.length; n++)if (i = r[n], i.attr("name") == e)return void(o ? i.attr("content", o) : i.remove());
            o && (c = new m("meta", 1), c.attr("name", e), c.attr("content", o), c.shortEnded = !0, l(c))
        });
        var g = {};
        tinymce.each(a.getAll("link"), function (e) {
            "stylesheet" == e.attr("rel") && (g[e.attr("href")] = e)
        }), tinymce.each(t.stylesheets, function (e) {
            g[e] || (c = new m("link", 1), c.attr({
                rel: "stylesheet",
                text: "text/css",
                href: e
            }), c.shortEnded = !0, l(c)), delete g[e]
        }), tinymce.each(g, function (e) {
            e.remove()
        }), c = a.getAll("body")[0], c && (n(c, "dir", t.langdir), n(c, "style", t.style), n(c, "vlink", t.visited_color), n(c, "link", t.link_color), n(c, "alink", t.active_color), f.setAttribs(e.getBody(), {
            style: t.style,
            dir: t.dir,
            vLink: t.visited_color,
            link: t.link_color,
            aLink: t.active_color
        })), c = a.getAll("html")[0], c && (n(c, "lang", t.langcode), n(c, "xml:lang", t.langcode)), r.firstChild || r.remove(), o = new tinymce.html.Serializer({
            validate: !1,
            indent: !0,
            apply_source_formatting: !0,
            indent_before: "head,html,body,meta,title,script,link,style",
            indent_after: "head,html,body,meta,title,script,link,style"
        }).serialize(a), d = o.substring(0, o.indexOf("</body>"))
    }

    function i() {
        return new tinymce.html.DomParser({validate: !1, root_name: "#document"}).parse(d)
    }

    function a(t) {
        function n(e) {
            return e.replace(/<\/?[A-Z]+/g, function (e) {
                return e.toLowerCase()
            })
        }

        var l, a, o, m, u = t.content, f = "", g = e.dom;
        if (!t.selection && !("raw" == t.format && d || t.source_view && e.getParam("fullpage_hide_in_source_view"))) {
            u = u.replace(/<(\/?)BODY/gi, "<$1body"), l = u.indexOf("<body"), -1 != l ? (l = u.indexOf(">", l), d = n(u.substring(0, l + 1)), a = u.indexOf("</body", l), -1 == a && (a = u.length), t.content = u.substring(l + 1, a), c = n(u.substring(a))) : (d = r(), c = "\n</body>\n</html>"), o = i(), s(o.getAll("style"), function (e) {
                e.firstChild && (f += e.firstChild.value)
            }), m = o.getAll("body")[0], m && g.setAttribs(e.getBody(), {
                style: m.attr("style") || "",
                dir: m.attr("dir") || "",
                vLink: m.attr("vlink") || "",
                link: m.attr("link") || "",
                aLink: m.attr("alink") || ""
            }), g.remove("fullpage_styles");
            var y = e.getDoc().getElementsByTagName("head")[0];
            f && (g.add(y, "style", {id: "fullpage_styles"}, f), m = g.get("fullpage_styles"), m.styleSheet && (m.styleSheet.cssText = f));
            var h = {};
            tinymce.each(y.getElementsByTagName("link"), function (e) {
                "stylesheet" == e.rel && e.getAttribute("data-mce-fullpage") && (h[e.href] = e)
            }), tinymce.each(o.getAll("link"), function (e) {
                var t = e.attr("href");
                h[t] || "stylesheet" != e.attr("rel") || g.add(y, "link", {
                    rel: "stylesheet",
                    text: "text/css",
                    href: t,
                    "data-mce-fullpage": "1"
                }), delete h[t]
            }), tinymce.each(h, function (e) {
                e.parentNode.removeChild(e)
            })
        }
    }

    function r() {
        var t, n = "", l = "";
        return e.getParam("fullpage_default_xml_pi") && (n += '<?xml version="1.0" encoding="' + e.getParam("fullpage_default_encoding", "ISO-8859-1") + '" ?>\n'), n += e.getParam("fullpage_default_doctype", "<!DOCTYPE html>"), n += "\n<html>\n<head>\n", (t = e.getParam("fullpage_default_title")) && (n += "<title>" + t + "</title>\n"), (t = e.getParam("fullpage_default_encoding")) && (n += '<meta http-equiv="Content-Type" content="text/html; charset=' + t + '" />\n'), (t = e.getParam("fullpage_default_font_family")) && (l += "font-family: " + t + ";"), (t = e.getParam("fullpage_default_font_size")) && (l += "font-size: " + t + ";"), (t = e.getParam("fullpage_default_text_color")) && (l += "color: " + t + ";"), n += "</head>\n<body" + (l ? ' style="' + l + '"' : "") + ">\n"
    }

    function o(t) {
        t.selection || t.source_view && e.getParam("fullpage_hide_in_source_view") || (t.content = tinymce.trim(d) + "\n" + tinymce.trim(t.content) + "\n" + tinymce.trim(c))
    }

    var d, c, s = tinymce.each, m = tinymce.html.Node;
    e.addCommand("mceFullPageProperties", t), e.addButton("fullpage", {
        title: "Document properties",
        cmd: "mceFullPageProperties"
    }), e.addMenuItem("fullpage", {
        text: "Document properties",
        cmd: "mceFullPageProperties",
        context: "file"
    }), e.on("BeforeSetContent", a), e.on("GetContent", o)
});
tinymce.PluginManager.add("fullscreen", function (e) {
    function t() {
        var e, t, n = window, i = document, l = i.body;
        return l.offsetWidth && (e = l.offsetWidth, t = l.offsetHeight), n.innerWidth && n.innerHeight && (e = n.innerWidth, t = n.innerHeight), {
            w: e,
            h: t
        }
    }

    function n() {
        function n() {
            d.setStyle(a, "height", t().h - (h.clientHeight - a.clientHeight))
        }

        var u, h, a, f, m = document.body, g = document.documentElement;
        s = !s, h = e.getContainer(), u = h.style, a = e.getContentAreaContainer().firstChild, f = a.style, s ? (i = f.width, l = f.height, f.width = f.height = "100%", c = u.width, o = u.height, u.width = u.height = "", d.addClass(m, "mce-fullscreen"), d.addClass(g, "mce-fullscreen"), d.addClass(h, "mce-fullscreen"), d.bind(window, "resize", n), n(), r = n) : (f.width = i, f.height = l, c && (u.width = c), o && (u.height = o), d.removeClass(m, "mce-fullscreen"), d.removeClass(g, "mce-fullscreen"), d.removeClass(h, "mce-fullscreen"), d.unbind(window, "resize", r)), e.fire("FullscreenStateChanged", {state: s})
    }

    var i, l, r, c, o, s = !1, d = tinymce.DOM;
    return e.settings.inline ? void 0 : (e.on("init", function () {
        e.addShortcut("Ctrl+Alt+F", "", n)
    }), e.on("remove", function () {
        r && d.unbind(window, "resize", r)
    }), e.addCommand("mceFullScreen", n), e.addMenuItem("fullscreen", {
        text: "Fullscreen",
        shortcut: "Ctrl+Alt+F",
        selectable: !0,
        onClick: n,
        onPostRender: function () {
            var t = this;
            e.on("FullscreenStateChanged", function (e) {
                t.active(e.state)
            })
        },
        context: "view"
    }), e.addButton("fullscreen", {
        tooltip: "Fullscreen",
        shortcut: "Ctrl+Alt+F",
        onClick: n,
        onPostRender: function () {
            var t = this;
            e.on("FullscreenStateChanged", function (e) {
                t.active(e.state)
            })
        }
    }), {
        isFullscreen: function () {
            return s
        }
    })
});
tinymce.PluginManager.add("hr", function (n) {
    n.addCommand("InsertHorizontalRule", function () {
        n.execCommand("mceInsertContent", !1, "<hr />")
    }), n.addButton("hr", {
        icon: "hr",
        tooltip: "Horizontal line",
        cmd: "InsertHorizontalRule"
    }), n.addMenuItem("hr", {icon: "hr", text: "Horizontal line", cmd: "InsertHorizontalRule", context: "insert"})
});
tinymce.PluginManager.add("image", function (e) {
    function t(e, t) {
        function n(e, n) {
            i.parentNode && i.parentNode.removeChild(i), t({width: e, height: n})
        }

        var i = document.createElement("img");
        i.onload = function () {
            n(i.clientWidth, i.clientHeight)
        }, i.onerror = function () {
            n()
        };
        var a = i.style;
        a.visibility = "hidden", a.position = "fixed", a.bottom = a.left = 0, a.width = a.height = "auto", document.body.appendChild(i), i.src = e
    }

    function n(t) {
        return tinymce.each(t, function (t) {
            t.textStyle = function () {
                return e.formatter.getCssText({inline: "img", classes: [t.value]})
            }
        }), t
    }

    function i(t) {
        return function () {
            var n = e.settings.image_list;
            "string" == typeof n ? tinymce.util.XHR.send({
                url: n, success: function (e) {
                    t(tinymce.util.JSON.parse(e))
                }
            }) : "function" == typeof n ? n(t) : t(n)
        }
    }

    function a(i) {
        function a(t, n, i) {
            var a, l = [];
            return tinymce.each(e.settings[t] || i, function (e) {
                var t = {text: e.text || e.title, value: e.value};
                l.push(t), (f[n] === e.value || !a && e.selected) && (a = t)
            }), a && !f[n] && (f[n] = a.value, a.selected = !0), l
        }

        function l() {
            function t(n, i) {
                return i = i || [], tinymce.each(n, function (n) {
                    var a = {text: n.text || n.title};
                    n.menu ? a.menu = t(n.menu) : a.value = e.convertURL(n.value || n.url, "src"), i.push(a)
                }), i
            }

            return t(i, [{text: "None", value: ""}])
        }

        function o() {
            var e, t, n, i;
            e = u.find("#width")[0], t = u.find("#height")[0], n = e.value(), i = t.value(), u.find("#constrain")[0].checked() && g && h && n && i && (g != n ? (i = Math.round(n / g * i), t.value(i)) : (n = Math.round(i / h * n), e.value(n))), g = n, h = i
        }

        function s() {
            function t(t) {
                function n() {
                    t.onload = t.onerror = null, e.selection.select(t), e.nodeChanged()
                }

                t.onload = function () {
                    f.width || f.height || y.setAttribs(t, {width: t.clientWidth, height: t.clientHeight}), n()
                }, t.onerror = n
            }

            d(), o(), f = tinymce.extend(f, u.toJSON()), f.alt || (f.alt = ""), "" === f.width && (f.width = null), "" === f.height && (f.height = null), f.style || (f.style = null), f = {
                src: f.src,
                alt: f.alt,
                width: f.width,
                height: f.height,
                style: f.style,
                "class": f["class"]
            }, f["class"] || delete f["class"], e.undoManager.transact(function () {
                return f.src ? (v ? y.setAttribs(v, f) : (f.id = "__mcenew", e.focus(), e.selection.setContent(y.createHTML("img", f)), v = y.get("__mcenew"), y.setAttrib(v, "id", null)), void t(v)) : void(v && (y.remove(v), e.focus(), e.nodeChanged()))
            })
        }

        function r(e) {
            return e && (e = e.replace(/px$/, "")), e
        }

        function c() {
            m && m.value(e.convertURL(this.value(), "src")), t(this.value(), function (e) {
                e.width && e.height && (g = e.width, h = e.height, u.find("#width").value(g), u.find("#height").value(h))
            })
        }

        function d() {
            function t(e) {
                return e.length > 0 && /^[0-9]+$/.test(e) && (e += "px"), e
            }

            if (e.settings.image_advtab) {
                var n = u.toJSON(), i = y.parseStyle(n.style);
                delete i.margin, i["margin-top"] = i["margin-bottom"] = t(n.vspace), i["margin-left"] = i["margin-right"] = t(n.hspace), i["border-width"] = t(n.border), u.find("#style").value(y.serializeStyle(y.parseStyle(y.serializeStyle(i))))
            }
        }

        var u, g, h, m, p, f = {}, y = e.dom, v = e.selection.getNode();
        g = y.getAttrib(v, "width"), h = y.getAttrib(v, "height"), "IMG" != v.nodeName || v.getAttribute("data-mce-object") || v.getAttribute("data-mce-placeholder") ? v = null : f = {
            src: y.getAttrib(v, "src"),
            alt: y.getAttrib(v, "alt"),
            "class": y.getAttrib(v, "class"),
            width: g,
            height: h
        }, i && (m = {
            type: "listbox",
            label: "Image list",
            values: l(),
            value: f.src && e.convertURL(f.src, "src"),
            onselect: function (e) {
                var t = u.find("#alt");
                (!t.value() || e.lastControl && t.value() == e.lastControl.text()) && t.value(e.control.text()), u.find("#src").value(e.control.value()).fire("change")
            },
            onPostRender: function () {
                m = this
            }
        }), e.settings.image_class_list && (p = {
            name: "class",
            type: "listbox",
            label: "Class",
            values: n(a("image_class_list", "class"))
        });
        var b = [{name: "src", type: "filepicker", filetype: "image", label: "Source", autofocus: !0, onchange: c}, m];
        e.settings.image_description !== !1 && b.push({
            name: "alt",
            type: "textbox",
            label: "Image description"
        }), e.settings.image_dimensions !== !1 && b.push({
            type: "container",
            label: "Dimensions",
            layout: "flex",
            direction: "row",
            align: "center",
            spacing: 5,
            items: [{
                name: "width",
                type: "textbox",
                maxLength: 5,
                size: 3,
                onchange: o,
                ariaLabel: "Width"
            }, {type: "label", text: "x"}, {
                name: "height",
                type: "textbox",
                maxLength: 5,
                size: 3,
                onchange: o,
                ariaLabel: "Height"
            }, {name: "constrain", type: "checkbox", checked: !0, text: "Constrain proportions"}]
        }), b.push(p), e.settings.image_advtab ? (v && (f.hspace = r(v.style.marginLeft || v.style.marginRight), f.vspace = r(v.style.marginTop || v.style.marginBottom), f.border = r(v.style.borderWidth), f.style = e.dom.serializeStyle(e.dom.parseStyle(e.dom.getAttrib(v, "style")))), u = e.windowManager.open({
            title: "Insert/edit image",
            data: f,
            bodyType: "tabpanel",
            body: [{title: "General", type: "form", items: b}, {
                title: "Advanced",
                type: "form",
                pack: "start",
                items: [{label: "Style", name: "style", type: "textbox"}, {
                    type: "form",
                    layout: "grid",
                    packV: "start",
                    columns: 2,
                    padding: 0,
                    alignH: ["left", "right"],
                    defaults: {type: "textbox", maxWidth: 50, onchange: d},
                    items: [{label: "Vertical space", name: "vspace"}, {
                        label: "Horizontal space",
                        name: "hspace"
                    }, {label: "Border", name: "border"}]
                }]
            }],
            onSubmit: s
        })) : u = e.windowManager.open({title: "Insert/edit image", data: f, body: b, onSubmit: s})
    }

    e.addButton("image", {
        icon: "image",
        tooltip: "Insert/edit image",
        onclick: i(a),
        stateSelector: "img:not([data-mce-object],[data-mce-placeholder])"
    }), e.addMenuItem("image", {
        icon: "image",
        text: "Insert image",
        onclick: i(a),
        context: "insert",
        prependToContext: !0
    })
});
tinymce.PluginManager.add("importcss", function (t) {
    function e(t) {
        return "string" == typeof t ? function (e) {
            return -1 !== e.indexOf(t)
        } : t instanceof RegExp ? function (e) {
            return t.test(e)
        } : t
    }

    function n(e, n) {
        function i(t, e) {
            var c, o = t.href;
            if (o && n(o, e)) {
                s(t.imports, function (t) {
                    i(t, !0)
                });
                try {
                    c = t.cssRules || t.rules
                } catch (a) {
                }
                s(c, function (t) {
                    t.styleSheet ? i(t.styleSheet, !0) : t.selectorText && s(t.selectorText.split(","), function (t) {
                        r.push(tinymce.trim(t))
                    })
                })
            }
        }

        var r = [], c = {};
        s(t.contentCSS, function (t) {
            c[t] = !0
        }), n || (n = function (t, e) {
            return e || c[t]
        });
        try {
            s(e.styleSheets, function (t) {
                i(t)
            })
        } catch (o) {
        }
        return r
    }

    function i(e) {
        var n, i = /^(?:([a-z0-9\-_]+))?(\.[a-z0-9_\-\.]+)$/i.exec(e);
        if (i) {
            var r = i[1], s = i[2].substr(1).split(".").join(" "), c = tinymce.makeMap("a,img");
            return i[1] ? (n = {title: e}, t.schema.getTextBlockElements()[r] ? n.block = r : t.schema.getBlockElements()[r] || c[r.toLowerCase()] ? n.selector = r : n.inline = r) : i[2] && (n = {
                inline: "span",
                title: e.substr(1),
                classes: s
            }), t.settings.importcss_merge_classes !== !1 ? n.classes = s : n.attributes = {"class": s}, n
        }
    }

    var r = this, s = tinymce.each;
    t.on("renderFormatsMenu", function (c) {
        var o = t.settings, a = {}, l = o.importcss_selector_converter || i, f = e(o.importcss_selector_filter), m = c.control;
        t.settings.importcss_append || m.items().remove();
        var u = [];
        tinymce.each(o.importcss_groups, function (t) {
            t = tinymce.extend({}, t), t.filter = e(t.filter), u.push(t)
        }), s(n(c.doc || t.getDoc(), e(o.importcss_file_filter)), function (e) {
            if (-1 === e.indexOf(".mce-") && !a[e] && (!f || f(e))) {
                var n, i = l.call(r, e);
                if (i) {
                    var s = i.name || tinymce.DOM.uniqueId();
                    if (u)for (var c = 0; c < u.length; c++)if (!u[c].filter || u[c].filter(e)) {
                        u[c].item || (u[c].item = {text: u[c].title, menu: []}), n = u[c].item.menu;
                        break
                    }
                    t.formatter.register(s, i);
                    var o = tinymce.extend({}, m.settings.itemDefaults, {text: i.title, format: s});
                    n ? n.push(o) : m.add(o)
                }
                a[e] = !0
            }
        }), s(u, function (t) {
            m.add(t.item)
        }), c.control.renderNew()
    }), r.convertSelectorToFormat = i
});
tinymce.PluginManager.add("insertdatetime", function (e) {
    function t(t, a) {
        function n(e, t) {
            if (e = "" + e, e.length < t)for (var a = 0; a < t - e.length; a++)e = "0" + e;
            return e
        }

        return a = a || new Date, t = t.replace("%D", "%m/%d/%Y"), t = t.replace("%r", "%I:%M:%S %p"), t = t.replace("%Y", "" + a.getFullYear()), t = t.replace("%y", "" + a.getYear()), t = t.replace("%m", n(a.getMonth() + 1, 2)), t = t.replace("%d", n(a.getDate(), 2)), t = t.replace("%H", "" + n(a.getHours(), 2)), t = t.replace("%M", "" + n(a.getMinutes(), 2)), t = t.replace("%S", "" + n(a.getSeconds(), 2)), t = t.replace("%I", "" + ((a.getHours() + 11) % 12 + 1)), t = t.replace("%p", "" + (a.getHours() < 12 ? "AM" : "PM")), t = t.replace("%B", "" + e.translate(m[a.getMonth()])), t = t.replace("%b", "" + e.translate(c[a.getMonth()])), t = t.replace("%A", "" + e.translate(d[a.getDay()])), t = t.replace("%a", "" + e.translate(i[a.getDay()])), t = t.replace("%%", "%")
    }

    function a(a) {
        var n = t(a);
        if (e.settings.insertdatetime_element) {
            var r;
            r = t(/%[HMSIp]/.test(a) ? "%Y-%m-%dT%H:%M" : "%Y-%m-%d"), n = '<time datetime="' + r + '">' + n + "</time>";
            var i = e.dom.getParent(e.selection.getStart(), "time");
            if (i)return void e.dom.setOuterHTML(i, n)
        }
        e.insertContent(n)
    }

    var n, r, i = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "), d = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "), c = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), m = "January February March April May June July August September October November December".split(" "), u = [];
    e.addCommand("mceInsertDate", function () {
        a(e.getParam("insertdatetime_dateformat", e.translate("%Y-%m-%d")))
    }), e.addCommand("mceInsertTime", function () {
        a(e.getParam("insertdatetime_timeformat", e.translate("%H:%M:%S")))
    }), e.addButton("insertdatetime", {
        type: "splitbutton", title: "Insert date/time", onclick: function () {
            a(n || r)
        }, menu: u
    }), tinymce.each(e.settings.insertdatetime_formats || ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D"], function (e) {
        r || (r = e), u.push({
            text: t(e), onclick: function () {
                n = e, a(e)
            }
        })
    }), e.addMenuItem("insertdatetime", {icon: "date", text: "Insert date/time", menu: u, context: "insert"})
});
!function (e) {
    e.on("AddEditor", function (e) {
        e.editor.settings.inline_styles = !1
    }), e.PluginManager.add("legacyoutput", function (t) {
        t.on("init", function () {
            var i = "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img", n = e.explode(t.settings.font_size_style_values), l = t.schema;
            t.formatter.register({
                alignleft: {selector: i, attributes: {align: "left"}},
                aligncenter: {selector: i, attributes: {align: "center"}},
                alignright: {selector: i, attributes: {align: "right"}},
                alignjustify: {selector: i, attributes: {align: "justify"}},
                bold: [{inline: "b", remove: "all"}, {inline: "strong", remove: "all"}, {
                    inline: "span",
                    styles: {fontWeight: "bold"}
                }],
                italic: [{inline: "i", remove: "all"}, {inline: "em", remove: "all"}, {
                    inline: "span",
                    styles: {fontStyle: "italic"}
                }],
                underline: [{inline: "u", remove: "all"}, {
                    inline: "span",
                    styles: {textDecoration: "underline"},
                    exact: !0
                }],
                strikethrough: [{inline: "strike", remove: "all"}, {
                    inline: "span",
                    styles: {textDecoration: "line-through"},
                    exact: !0
                }],
                fontname: {inline: "font", attributes: {face: "%value"}},
                fontsize: {
                    inline: "font", attributes: {
                        size: function (t) {
                            return e.inArray(n, t.value) + 1
                        }
                    }
                },
                forecolor: {inline: "font", attributes: {color: "%value"}},
                hilitecolor: {inline: "font", styles: {backgroundColor: "%value"}}
            }), e.each("b,i,u,strike".split(","), function (e) {
                l.addValidElements(e + "[*]")
            }), l.getElementRule("font") || l.addValidElements("font[face|size|color|style]"), e.each(i.split(","), function (e) {
                var t = l.getElementRule(e);
                t && (t.attributes.align || (t.attributes.align = {}, t.attributesOrder.push("align")))
            })
        })
    })
}(tinymce);
tinymce.PluginManager.add("link", function (t) {
    function e(e) {
        return function () {
            var n = t.settings.link_list;
            "string" == typeof n ? tinymce.util.XHR.send({
                url: n, success: function (t) {
                    e(tinymce.util.JSON.parse(t))
                }
            }) : "function" == typeof n ? n(e) : e(n)
        }
    }

    function n(e) {
        function n(t) {
            var e = d.find("#text");
            (!e.value() || t.lastControl && e.value() == t.lastControl.text()) && e.value(t.control.text()), d.find("#href").value(t.control.value())
        }

        function l() {
            function n(e, l) {
                return l = l || [], tinymce.each(e, function (e) {
                    var i = {text: e.text || e.title};
                    e.menu ? i.menu = n(e.menu) : i.value = t.convertURL(e.value || e.url, "href"), l.push(i)
                }), l
            }

            return n(e, [{text: "None", value: ""}])
        }

        function i(e) {
            return tinymce.each(e, function (e) {
                e.textStyle = function () {
                    return t.formatter.getCssText({inline: "a", classes: [e.value]})
                }
            }), e
        }

        function a(e, n, l) {
            var i, a = [];
            return tinymce.each(t.settings[e] || l, function (t) {
                var e = {text: t.text || t.title, value: t.value};
                a.push(e), (b[n] === t.value || !i && t.selected) && (i = e)
            }), i && !b[n] && (b[n] = i.value, i.selected = !0), a
        }

        function r(e) {
            var l = [];
            return tinymce.each(t.dom.select("a:not([href])"), function (t) {
                var n = t.name || t.id;
                n && l.push({text: n, value: "#" + n, selected: -1 != e.indexOf("#" + n)})
            }), l.length ? (l.unshift({text: "None", value: ""}), {
                name: "anchor",
                type: "listbox",
                label: "Anchors",
                values: l,
                onselect: n
            }) : void 0
        }

        function o() {
            h && h.value(t.convertURL(this.value(), "href")), !f && 0 === b.text.length && x && this.parent().parent().find("#text")[0].value(this.value())
        }

        function s(t) {
            var e = k.getContent();
            if (/</.test(e) && (!/^<a [^>]+>[^<]+<\/a>$/.test(e) || -1 == e.indexOf("href=")))return !1;
            if (t) {
                var n, l = t.childNodes;
                if (0 === l.length)return !1;
                for (n = l.length - 1; n >= 0; n--)if (3 != l[n].nodeType)return !1
            }
            return !0
        }

        var u, c, f, d, x, v, h, g, m, p, y, b = {}, k = t.selection, w = t.dom;
        u = k.getNode(), c = w.getParent(u, "a[href]"), x = s(), b.text = f = c ? c.innerText || c.textContent : k.getContent({format: "text"}), b.href = c ? w.getAttrib(c, "href") : "", b.target = c ? w.getAttrib(c, "target") : t.settings.default_link_target || null, b.rel = c ? w.getAttrib(c, "rel") : null, b["class"] = c ? w.getAttrib(c, "class") : null, b.title = c ? w.getAttrib(c, "title") : "", x && (v = {
            name: "text",
            type: "textbox",
            size: 40,
            label: "Text to display",
            onchange: function () {
                b.text = this.value()
            }
        }), e && (h = {
            type: "listbox",
            label: "Link list",
            values: l(),
            onselect: n,
            value: t.convertURL(b.href, "href"),
            onPostRender: function () {
                h = this
            }
        }), t.settings.target_list !== !1 && (m = {
            name: "target",
            type: "listbox",
            label: "Target",
            values: a("target_list", "target", [{text: "None", value: ""}, {text: "New window", value: "_blank"}])
        }), t.settings.rel_list && (g = {
            name: "rel",
            type: "listbox",
            label: "Rel",
            values: a("rel_list", "rel", [{text: "None", value: ""}])
        }), t.settings.link_class_list && (p = {
            name: "class",
            type: "listbox",
            label: "Class",
            values: i(a("link_class_list", "class"))
        }), t.settings.link_title !== !1 && (y = {
            name: "title",
            type: "textbox",
            label: "Title",
            value: b.title
        }), d = t.windowManager.open({
            title: "Insert link",
            data: b,
            body: [{
                name: "href",
                type: "filepicker",
                filetype: "file",
                size: 40,
                autofocus: !0,
                label: "Url",
                onchange: o,
                onkeyup: o
            }, v, y, r(b.href), h, g, m, p],
            onSubmit: function (e) {
                function n(e, n) {
                    var l = t.selection.getRng();
                    window.setTimeout(function () {
                        t.windowManager.confirm(e, function (e) {
                            t.selection.setRng(l), n(e)
                        })
                    }, 0)
                }

                function l() {
                    var e = {
                        href: i,
                        target: b.target ? b.target : null,
                        rel: b.rel ? b.rel : null,
                        "class": b["class"] ? b["class"] : null,
                        title: b.title ? b.title : null
                    };
                    c ? (t.focus(), x && b.text != f && ("innerText" in c ? c.innerText = b.text : c.textContent = b.text), w.setAttribs(c, e), k.select(c), t.undoManager.add()) : x ? t.insertContent(w.createHTML("a", e, w.encode(b.text))) : t.execCommand("mceInsertLink", !1, e)
                }

                var i;
                return b = tinymce.extend(b, e.data), (i = b.href) ? i.indexOf("@") > 0 && -1 == i.indexOf("//") && -1 == i.indexOf("mailto:") ? void n("The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?", function (t) {
                    t && (i = "mailto:" + i), l()
                }) : /^\s*www\./i.test(i) ? void n("The URL you entered seems to be an external link. Do you want to add the required http:// prefix?", function (t) {
                    t && (i = "http://" + i), l()
                }) : void l() : void t.execCommand("unlink")
            }
        })
    }

    t.addButton("link", {
        icon: "link",
        tooltip: "Insert/edit link",
        shortcut: "Ctrl+K",
        onclick: e(n),
        stateSelector: "a[href]"
    }), t.addButton("unlink", {
        icon: "unlink",
        tooltip: "Remove link",
        cmd: "unlink",
        stateSelector: "a[href]"
    }), t.addShortcut("Ctrl+K", "", e(n)), this.showDialog = n, t.addMenuItem("link", {
        icon: "link",
        text: "Insert link",
        shortcut: "Ctrl+K",
        onclick: e(n),
        stateSelector: "a[href]",
        context: "insert",
        prependToContext: !0
    })
});
tinymce.PluginManager.add("lists", function (e) {
    function t(e) {
        return e && /^(OL|UL|DL)$/.test(e.nodeName)
    }

    function n(e) {
        return e.parentNode.firstChild == e
    }

    function r(e) {
        return e.parentNode.lastChild == e
    }

    function a(t) {
        return t && !!e.schema.getTextBlockElements()[t.nodeName]
    }

    var o = this;
    e.on("init", function () {
        function i(e) {
            function t(t) {
                var r, a, o;
                a = e[t ? "startContainer" : "endContainer"], o = e[t ? "startOffset" : "endOffset"], 1 == a.nodeType && (r = y.create("span", {"data-mce-type": "bookmark"}), a.hasChildNodes() ? (o = Math.min(o, a.childNodes.length - 1), t ? a.insertBefore(r, a.childNodes[o]) : y.insertAfter(r, a.childNodes[o])) : a.appendChild(r), a = r, o = 0), n[t ? "startContainer" : "endContainer"] = a, n[t ? "startOffset" : "endOffset"] = o
            }

            var n = {};
            return t(!0), e.collapsed || t(), n
        }

        function d(e) {
            function t(t) {
                function n(e) {
                    for (var t = e.parentNode.firstChild, n = 0; t;) {
                        if (t == e)return n;
                        (1 != t.nodeType || "bookmark" != t.getAttribute("data-mce-type")) && n++, t = t.nextSibling
                    }
                    return -1
                }

                var r, a, o;
                r = o = e[t ? "startContainer" : "endContainer"], a = e[t ? "startOffset" : "endOffset"], r && (1 == r.nodeType && (a = n(r), r = r.parentNode, y.remove(o)), e[t ? "startContainer" : "endContainer"] = r, e[t ? "startOffset" : "endOffset"] = a)
            }

            t(!0), t();
            var n = y.createRng();
            n.setStart(e.startContainer, e.startOffset), e.endContainer && n.setEnd(e.endContainer, e.endOffset), k.setRng(n)
        }

        function s(t, n) {
            var r, a, o, i = y.createFragment(), d = e.schema.getBlockElements();
            if (e.settings.forced_root_block && (n = n || e.settings.forced_root_block), n && (a = y.create(n), a.tagName === e.settings.forced_root_block && y.setAttribs(a, e.settings.forced_root_block_attrs), i.appendChild(a)), t)for (; r = t.firstChild;) {
                var s = r.nodeName;
                o || "SPAN" == s && "bookmark" == r.getAttribute("data-mce-type") || (o = !0), d[s] ? (i.appendChild(r), a = null) : n ? (a || (a = y.create(n), i.appendChild(a)), a.appendChild(r)) : i.appendChild(r)
            }
            return e.settings.forced_root_block ? o || tinymce.Env.ie && !(tinymce.Env.ie > 10) || a.appendChild(y.create("br", {"data-mce-bogus": "1"})) : i.appendChild(y.create("br")), i
        }

        function f() {
            return tinymce.grep(k.getSelectedBlocks(), function (e) {
                return /^(LI|DT|DD)$/.test(e.nodeName)
            })
        }

        function l(e, t, n) {
            var r, a, o = y.select('span[data-mce-type="bookmark"]', e);
            n = n || s(t), r = y.createRng(), r.setStartAfter(t), r.setEndAfter(e), a = r.extractContents(), y.isEmpty(a) || y.insertAfter(a, e), y.insertAfter(n, e), y.isEmpty(t.parentNode) && (tinymce.each(o, function (e) {
                t.parentNode.parentNode.insertBefore(e, t.parentNode)
            }), y.remove(t.parentNode)), y.remove(t)
        }

        function c(e) {
            var n, r;
            if (n = e.nextSibling, n && t(n) && n.nodeName == e.nodeName) {
                for (; r = n.firstChild;)e.appendChild(r);
                y.remove(n)
            }
            if (n = e.previousSibling, n && t(n) && n.nodeName == e.nodeName) {
                for (; r = n.firstChild;)e.insertBefore(r, e.firstChild);
                y.remove(n)
            }
        }

        function p(e) {
            tinymce.each(tinymce.grep(y.select("ol,ul", e)), function (e) {
                var n, r = e.parentNode;
                "LI" == r.nodeName && r.firstChild == e && (n = r.previousSibling, n && "LI" == n.nodeName && (n.appendChild(e), y.isEmpty(r) && y.remove(r))), t(r) && (n = r.previousSibling, n && "LI" == n.nodeName && n.appendChild(e))
            })
        }

        function m(e) {
            function a(e) {
                y.isEmpty(e) && y.remove(e)
            }

            var o, i = e.parentNode, d = i.parentNode;
            return "DD" == e.nodeName ? (y.rename(e, "DT"), !0) : n(e) && r(e) ? ("LI" == d.nodeName ? (y.insertAfter(e, d), a(d), y.remove(i)) : t(d) ? y.remove(i, !0) : (d.insertBefore(s(e), i), y.remove(i)), !0) : n(e) ? ("LI" == d.nodeName ? (y.insertAfter(e, d), e.appendChild(i), a(d)) : t(d) ? d.insertBefore(e, i) : (d.insertBefore(s(e), i), y.remove(e)), !0) : r(e) ? ("LI" == d.nodeName ? y.insertAfter(e, d) : t(d) ? y.insertAfter(e, i) : (y.insertAfter(s(e), i), y.remove(e)), !0) : ("LI" == d.nodeName ? (i = d, o = s(e, "LI")) : o = t(d) ? s(e, "LI") : s(e), l(i, e, o), p(i.parentNode), !0)
        }

        function u(e) {
            function n(n, r) {
                var a;
                if (t(n)) {
                    for (; a = e.lastChild.firstChild;)r.appendChild(a);
                    y.remove(n)
                }
            }

            var r, a;
            return "DT" == e.nodeName ? (y.rename(e, "DD"), !0) : (r = e.previousSibling, r && t(r) ? (r.appendChild(e), !0) : r && "LI" == r.nodeName && t(r.lastChild) ? (r.lastChild.appendChild(e), n(e.lastChild, r.lastChild), !0) : (r = e.nextSibling, r && t(r) ? (r.insertBefore(e, r.firstChild), !0) : r && "LI" == r.nodeName && t(e.lastChild) ? !1 : (r = e.previousSibling, r && "LI" == r.nodeName ? (a = y.create(e.parentNode.nodeName), r.appendChild(a), a.appendChild(e), n(e.lastChild, a), !0) : !1)))
        }

        function h() {
            var t = f();
            if (t.length) {
                for (var n = i(k.getRng(!0)), r = 0; r < t.length && (u(t[r]) || 0 !== r); r++);
                return d(n), e.nodeChanged(), !0
            }
        }

        function v() {
            var t = f();
            if (t.length) {
                var n, r, a = i(k.getRng(!0)), o = e.getBody();
                for (n = t.length; n--;)for (var s = t[n].parentNode; s && s != o;) {
                    for (r = t.length; r--;)if (t[r] === s) {
                        t.splice(n, 1);
                        break
                    }
                    s = s.parentNode
                }
                for (n = 0; n < t.length && (m(t[n]) || 0 !== n); n++);
                return d(a), e.nodeChanged(), !0
            }
        }

        function C(n) {
            function r() {
                function t(e) {
                    var t, n;
                    for (t = o[e ? "startContainer" : "endContainer"], n = o[e ? "startOffset" : "endOffset"], 1 == t.nodeType && (t = t.childNodes[Math.min(n, t.childNodes.length - 1)] || t); t.parentNode != i;) {
                        if (a(t))return t;
                        if (/^(TD|TH)$/.test(t.parentNode.nodeName))return t;
                        t = t.parentNode
                    }
                    return t
                }

                for (var n, r = [], i = e.getBody(), d = t(!0), s = t(), f = [], l = d; l && (f.push(l), l != s); l = l.nextSibling);
                return tinymce.each(f, function (e) {
                    if (a(e))return r.push(e), void(n = null);
                    if (y.isBlock(e) || "BR" == e.nodeName)return "BR" == e.nodeName && y.remove(e), void(n = null);
                    var t = e.nextSibling;
                    return tinymce.dom.BookmarkManager.isBookmarkNode(e) && (a(t) || !t && e.parentNode == i) ? void(n = null) : (n || (n = y.create("p"), e.parentNode.insertBefore(n, e), r.push(n)), void n.appendChild(e))
                }), r
            }

            var o = k.getRng(!0), s = i(o), f = "LI";
            n = n.toUpperCase(), "DL" == n && (f = "DT"), tinymce.each(r(), function (e) {
                var r, a;
                a = e.previousSibling, a && t(a) && a.nodeName == n ? (r = a, e = y.rename(e, f), a.appendChild(e)) : (r = y.create(n), e.parentNode.insertBefore(r, e), r.appendChild(e), e = y.rename(e, f)), c(r)
            }), d(s)
        }

        function g() {
            var n = i(k.getRng(!0)), r = e.getBody();
            tinymce.each(f(), function (e) {
                var n, a;
                if (y.isEmpty(e))return void m(e);
                for (n = e; n && n != r; n = n.parentNode)t(n) && (a = n);
                l(a, e)
            }), d(n)
        }

        function N(e) {
            var t = y.getParent(k.getStart(), "OL,UL,DL");
            if (t)if (t.nodeName == e)g(e); else {
                var n = i(k.getRng(!0));
                c(y.rename(t, e)), d(n)
            } else C(e)
        }

        function L(t) {
            return function () {
                var n = y.getParent(e.selection.getStart(), "UL,OL,DL");
                return n && n.nodeName == t
            }
        }

        var y = e.dom, k = e.selection;
        o.backspaceDelete = function (e) {
            function n(e, t) {
                var n = e.startContainer, r = e.startOffset;
                if (3 == n.nodeType && (t ? r < n.data.length : r > 0))return n;
                for (var a = new tinymce.dom.TreeWalker(e.startContainer); n = a[t ? "next" : "prev"]();)if (3 == n.nodeType && n.data.length > 0)return n
            }

            function r(e, n) {
                var r, a, o = e.parentNode;
                for (t(n.lastChild) && (a = n.lastChild), r = n.lastChild, r && "BR" == r.nodeName && e.hasChildNodes() && y.remove(r); r = e.firstChild;)n.appendChild(r);
                a && n.appendChild(a), y.remove(e), y.isEmpty(o) && y.remove(o)
            }

            if (k.isCollapsed()) {
                var a = y.getParent(k.getStart(), "LI");
                if (a) {
                    var o = k.getRng(!0), s = y.getParent(n(o, e), "LI");
                    if (s && s != a) {
                        var f = i(o);
                        return e ? r(s, a) : r(a, s), d(f), !0
                    }
                    if (!s && !e && g(a.parentNode.nodeName))return !0
                }
            }
        }, e.addCommand("Indent", function () {
            return h() ? void 0 : !0
        }), e.addCommand("Outdent", function () {
            return v() ? void 0 : !0
        }), e.addCommand("InsertUnorderedList", function () {
            N("UL")
        }), e.addCommand("InsertOrderedList", function () {
            N("OL")
        }), e.addCommand("InsertDefinitionList", function () {
            N("DL")
        }), e.addQueryStateHandler("InsertUnorderedList", L("UL")), e.addQueryStateHandler("InsertOrderedList", L("OL")), e.addQueryStateHandler("InsertDefinitionList", L("DL")), e.on("keydown", function (t) {
            9 == t.keyCode && e.dom.getParent(e.selection.getStart(), "LI,DT,DD") && (t.preventDefault(), t.shiftKey ? v() : h())
        })
    }), e.addButton("indent", {
        icon: "indent", title: "Increase indent", cmd: "Indent", onPostRender: function () {
            var t = this;
            e.on("nodechange", function () {
                for (var r = e.selection.getSelectedBlocks(), a = !1, o = 0, i = r.length; !a && i > o; o++) {
                    var d = r[o].nodeName;
                    a = "LI" == d && n(r[o]) || "UL" == d || "OL" == d || "DD" == d
                }
                t.disabled(a)
            })
        }
    }), e.on("keydown", function (e) {
        e.keyCode == tinymce.util.VK.BACKSPACE ? o.backspaceDelete() && e.preventDefault() : e.keyCode == tinymce.util.VK.DELETE && o.backspaceDelete(!0) && e.preventDefault()
    })
});
tinymce.PluginManager.add("media", function (e, t) {
    function i(e) {
        return -1 != e.indexOf(".mp3") ? "audio/mpeg" : -1 != e.indexOf(".wav") ? "audio/wav" : -1 != e.indexOf(".mp4") ? "video/mp4" : -1 != e.indexOf(".webm") ? "video/webm" : -1 != e.indexOf(".ogg") ? "video/ogg" : -1 != e.indexOf(".swf") ? "application/x-shockwave-flash" : ""
    }

    function r(t) {
        var i = e.settings.media_scripts;
        if (i)for (var r = 0; r < i.length; r++)if (-1 !== t.indexOf(i[r].filter))return i[r]
    }

    function o() {
        function t(e) {
            var t, a, c, s;
            t = i.find("#width")[0], a = i.find("#height")[0], c = t.value(), s = a.value(), i.find("#constrain")[0].checked() && r && o && c && s && (e.control == t ? (s = Math.round(c / r * s), a.value(s)) : (c = Math.round(s / o * c), t.value(c))), r = c, o = s
        }

        var i, r, o, m, u = [{
            name: "source1",
            type: "filepicker",
            filetype: "media",
            size: 40,
            autofocus: !0,
            label: "Source"
        }];
        e.settings.media_alt_source !== !1 && u.push({
            name: "source2",
            type: "filepicker",
            filetype: "media",
            size: 40,
            label: "Alternative source"
        }), e.settings.media_poster !== !1 && u.push({
            name: "poster",
            type: "filepicker",
            filetype: "image",
            size: 40,
            label: "Poster"
        }), e.settings.media_dimensions !== !1 && u.push({
            type: "container",
            label: "Dimensions",
            layout: "flex",
            align: "center",
            spacing: 5,
            items: [{name: "width", type: "textbox", maxLength: 3, size: 3, onchange: t}, {
                type: "label",
                text: "x"
            }, {name: "height", type: "textbox", maxLength: 3, size: 3, onchange: t}, {
                name: "constrain",
                type: "checkbox",
                checked: !0,
                text: "Constrain proportions"
            }]
        }), m = n(e.selection.getNode()), r = m.width, o = m.height, i = e.windowManager.open({
            title: "Insert/edit video",
            data: m,
            bodyType: "tabpanel",
            body: [{
                title: "General", type: "form", onShowTab: function () {
                    m = s(this.next().find("#embed").value()), this.fromJSON(m)
                }, items: u
            }, {
                title: "Embed",
                type: "panel",
                layout: "flex",
                direction: "column",
                align: "stretch",
                padding: 10,
                spacing: 10,
                onShowTab: function () {
                    this.find("#embed").value(c(this.parent().toJSON()))
                },
                items: [{
                    type: "label",
                    text: "Paste your embed code below:",
                    forId: "mcemediasource"
                }, {
                    id: "mcemediasource",
                    type: "textbox",
                    flex: 1,
                    name: "embed",
                    value: a(),
                    multiline: !0,
                    label: "Source"
                }]
            }],
            onSubmit: function () {
                e.insertContent(c(this.toJSON()))
            }
        })
    }

    function a() {
        var t = e.selection.getNode();
        return t.getAttribute("data-mce-object") ? e.selection.getContent() : void 0
    }

    function c(o) {
        var a = "";
        if (!o.source1 && (tinymce.extend(o, s(o.embed)), !o.source1))return "";
        if (o.source2 || (o.source2 = ""), o.poster || (o.poster = ""), o.source1 = e.convertURL(o.source1, "source"), o.source2 = e.convertURL(o.source2, "source"), o.source1mime = i(o.source1), o.source2mime = i(o.source2), o.poster = e.convertURL(o.poster, "poster"), o.flashPlayerUrl = e.convertURL(t + "/moxieplayer.swf", "movie"), tinymce.each(u, function (e) {
                var t, i, r;
                if (t = e.regex.exec(o.source1)) {
                    for (r = e.url, i = 0; t[i]; i++)r = r.replace("$" + i, function () {
                        return t[i]
                    });
                    o.source1 = r, o.type = e.type, o.width = o.width || e.w, o.height = o.height || e.h
                }
            }), o.embed)a = m(o.embed, o, !0); else {
            var c = r(o.source1);
            c && (o.type = "script", o.width = c.width, o.height = c.height), o.width = o.width || 300, o.height = o.height || 150, tinymce.each(o, function (t, i) {
                o[i] = e.dom.encode(t)
            }), "iframe" == o.type ? a += '<iframe src="' + o.source1 + '" width="' + o.width + '" height="' + o.height + '"></iframe>' : "application/x-shockwave-flash" == o.source1mime ? (a += '<object data="' + o.source1 + '" width="' + o.width + '" height="' + o.height + '" type="application/x-shockwave-flash">', o.poster && (a += '<img src="' + o.poster + '" width="' + o.width + '" height="' + o.height + '" />'), a += "</object>") : -1 != o.source1mime.indexOf("audio") ? e.settings.audio_template_callback ? a = e.settings.audio_template_callback(o) : a += '<audio controls="controls" src="' + o.source1 + '">' + (o.source2 ? '\n<source src="' + o.source2 + '"' + (o.source2mime ? ' type="' + o.source2mime + '"' : "") + " />\n" : "") + "</audio>" : "script" == o.type ? a += '<script src="' + o.source1 + '"></script>' : a = e.settings.video_template_callback ? e.settings.video_template_callback(o) : '<video width="' + o.width + '" height="' + o.height + '"' + (o.poster ? ' poster="' + o.poster + '"' : "") + ' controls="controls">\n<source src="' + o.source1 + '"' + (o.source1mime ? ' type="' + o.source1mime + '"' : "") + " />\n" + (o.source2 ? '<source src="' + o.source2 + '"' + (o.source2mime ? ' type="' + o.source2mime + '"' : "") + " />\n" : "") + "</video>"
        }
        return a
    }

    function s(e) {
        var t = {};
        return new tinymce.html.SaxParser({
            validate: !1,
            allow_conditional_comments: !0,
            special: "script,noscript",
            start: function (e, i) {
                if (t.source1 || "param" != e || (t.source1 = i.map.movie), ("iframe" == e || "object" == e || "embed" == e || "video" == e || "audio" == e) && (t.type || (t.type = e), t = tinymce.extend(i.map, t)), "script" == e) {
                    var o = r(i.map.src);
                    if (!o)return;
                    t = {type: "script", source1: i.map.src, width: o.width, height: o.height}
                }
                "source" == e && (t.source1 ? t.source2 || (t.source2 = i.map.src) : t.source1 = i.map.src), "img" != e || t.poster || (t.poster = i.map.src)
            }
        }).parse(e), t.source1 = t.source1 || t.src || t.data, t.source2 = t.source2 || "", t.poster = t.poster || "", t
    }

    function n(t) {
        return t.getAttribute("data-mce-object") ? s(e.serializer.serialize(t, {selection: !0})) : {}
    }

    function m(e, t, i) {
        function r(e, t) {
            var i, r, o, a;
            for (i in t)if (o = "" + t[i], e.map[i])for (r = e.length; r--;)a = e[r], a.name == i && (o ? (e.map[i] = o, a.value = o) : (delete e.map[i], e.splice(r, 1))); else o && (e.push({
                name: i,
                value: o
            }), e.map[i] = o)
        }

        var o, a = new tinymce.html.Writer, c = 0;
        return new tinymce.html.SaxParser({
            validate: !1,
            allow_conditional_comments: !0,
            special: "script,noscript",
            comment: function (e) {
                a.comment(e)
            },
            cdata: function (e) {
                a.cdata(e)
            },
            text: function (e, t) {
                a.text(e, t)
            },
            start: function (e, s, n) {
                switch (e) {
                    case"video":
                    case"object":
                    case"embed":
                    case"img":
                    case"iframe":
                        r(s, {width: t.width, height: t.height})
                }
                if (i)switch (e) {
                    case"video":
                        r(s, {poster: t.poster, src: ""}), t.source2 && r(s, {src: ""});
                        break;
                    case"iframe":
                        r(s, {src: t.source1});
                        break;
                    case"source":
                        if (c++, 2 >= c && (r(s, {
                                src: t["source" + c],
                                type: t["source" + c + "mime"]
                            }), !t["source" + c]))return;
                        break;
                    case"img":
                        if (!t.poster)return;
                        o = !0
                }
                a.start(e, s, n)
            },
            end: function (e) {
                if ("video" == e && i)for (var s = 1; 2 >= s; s++)if (t["source" + s]) {
                    var n = [];
                    n.map = {}, s > c && (r(n, {
                        src: t["source" + s],
                        type: t["source" + s + "mime"]
                    }), a.start("source", n, !0))
                }
                if (t.poster && "object" == e && i && !o) {
                    var m = [];
                    m.map = {}, r(m, {src: t.poster, width: t.width, height: t.height}), a.start("img", m, !0)
                }
                a.end(e)
            }
        }, new tinymce.html.Schema({})).parse(e), a.getContent()
    }

    var u = [{
        regex: /youtu\.be\/([\w\-.]+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: "//www.youtube.com/embed/$1"
    }, {
        regex: /youtube\.com(.+)v=([^&]+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: "//www.youtube.com/embed/$2"
    }, {
        regex: /vimeo\.com\/([0-9]+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: "//player.vimeo.com/video/$1?title=0&byline=0&portrait=0&color=8dc7dc"
    }, {
        regex: /maps\.google\.([a-z]{2,3})\/maps\/(.+)msid=(.+)/,
        type: "iframe",
        w: 425,
        h: 350,
        url: '//maps.google.com/maps/ms?msid=$2&output=embed"'
    }];
    e.on("ResolveName", function (e) {
        var t;
        1 == e.target.nodeType && (t = e.target.getAttribute("data-mce-object")) && (e.name = t)
    }), e.on("preInit", function () {
        var t = e.schema.getSpecialElements();
        tinymce.each("video audio iframe object".split(" "), function (e) {
            t[e] = new RegExp("</" + e + "[^>]*>", "gi")
        });
        var i = e.schema.getBoolAttrs();
        tinymce.each("webkitallowfullscreen mozallowfullscreen allowfullscreen".split(" "), function (e) {
            i[e] = {}
        }), e.parser.addNodeFilter("iframe,video,audio,object,embed,script", function (t, i) {
            for (var o, a, c, s, n, m, u, d, l = t.length; l--;)if (a = t[l], a.parent && ("script" != a.name || (d = r(a.attr("src"))))) {
                for (c = new tinymce.html.Node("img", 1), c.shortEnded = !0, d && (d.width && a.attr("width", d.width.toString()), d.height && a.attr("height", d.height.toString())), m = a.attributes, o = m.length; o--;)s = m[o].name, n = m[o].value, "width" !== s && "height" !== s && "style" !== s && (("data" == s || "src" == s) && (n = e.convertURL(n, s)), c.attr("data-mce-p-" + s, n));
                u = a.firstChild && a.firstChild.value, u && (c.attr("data-mce-html", escape(u)), c.firstChild = null), c.attr({
                    width: a.attr("width") || "300",
                    height: a.attr("height") || ("audio" == i ? "30" : "150"),
                    style: a.attr("style"),
                    src: tinymce.Env.transparentSrc,
                    "data-mce-object": i,
                    "class": "mce-object mce-object-" + i
                }), a.replace(c)
            }
        }), e.serializer.addAttributeFilter("data-mce-object", function (e, t) {
            for (var i, r, o, a, c, s, n, m = e.length; m--;)if (i = e[m], i.parent) {
                for (n = i.attr(t), r = new tinymce.html.Node(n, 1), "audio" != n && "script" != n && r.attr({
                    width: i.attr("width"),
                    height: i.attr("height")
                }), r.attr({style: i.attr("style")}), a = i.attributes, o = a.length; o--;) {
                    var u = a[o].name;
                    0 === u.indexOf("data-mce-p-") && r.attr(u.substr(11), a[o].value)
                }
                "script" == n && r.attr("type", "text/javascript"), c = i.attr("data-mce-html"), c && (s = new tinymce.html.Node("#text", 3), s.raw = !0, s.value = unescape(c), r.append(s)), i.replace(r)
            }
        })
    }), e.on("ObjectSelected", function (e) {
        var t = e.target.getAttribute("data-mce-object");
        ("audio" == t || "script" == t) && e.preventDefault()
    }), e.on("objectResized", function (e) {
        var t, i = e.target;
        i.getAttribute("data-mce-object") && (t = i.getAttribute("data-mce-html"), t && (t = unescape(t), i.setAttribute("data-mce-html", escape(m(t, {
            width: e.width,
            height: e.height
        })))))
    }), e.addButton("media", {
        tooltip: "Insert/edit video",
        onclick: o,
        stateSelector: ["img[data-mce-object=video]", "img[data-mce-object=iframe]"]
    }), e.addMenuItem("media", {
        icon: "media",
        text: "Insert video",
        onclick: o,
        context: "insert",
        prependToContext: !0
    })
});
tinymce.PluginManager.add("nonbreaking", function (n) {
    var e = n.getParam("nonbreaking_force_tab");
    if (n.addCommand("mceNonBreaking", function () {
            n.insertContent(n.plugins.visualchars && n.plugins.visualchars.state ? '<span class="mce-nbsp">&nbsp;</span>' : "&nbsp;"), n.dom.setAttrib(n.dom.select("span.mce-nbsp"), "data-mce-bogus", "1")
        }), n.addButton("nonbreaking", {
            title: "Insert nonbreaking space",
            cmd: "mceNonBreaking"
        }), n.addMenuItem("nonbreaking", {text: "Nonbreaking space", cmd: "mceNonBreaking", context: "insert"}), e) {
        var a = +e > 1 ? +e : 3;
        n.on("keydown", function (e) {
            if (9 == e.keyCode) {
                if (e.shiftKey)return;
                e.preventDefault();
                for (var t = 0; a > t; t++)n.execCommand("mceNonBreaking")
            }
        })
    }
});
tinymce.PluginManager.add("noneditable", function (e) {
    function t(e) {
        var t;
        if (1 === e.nodeType) {
            if (t = e.getAttribute(u), t && "inherit" !== t)return t;
            if (t = e.contentEditable, "inherit" !== t)return t
        }
        return null
    }

    function n(e) {
        for (var n; e;) {
            if (n = t(e))return "false" === n ? e : null;
            e = e.parentNode
        }
    }

    function r() {
        function r(e) {
            for (; e;) {
                if (e.id === g)return e;
                e = e.parentNode
            }
        }

        function a(e) {
            var t;
            if (e)for (t = new f(e, e), e = t.current(); e; e = t.next())if (3 === e.nodeType)return e
        }

        function i(n, r) {
            var a, i;
            return "false" === t(n) && u.isBlock(n) ? void s.select(n) : (i = u.createRng(), "true" === t(n) && (n.firstChild || n.appendChild(e.getDoc().createTextNode(" ")), n = n.firstChild, r = !0), a = u.create("span", {
                id: g,
                "data-mce-bogus": !0
            }, m), r ? n.parentNode.insertBefore(a, n) : u.insertAfter(a, n), i.setStart(a.firstChild, 1), i.collapse(!0), s.setRng(i), a)
        }

        function o(e) {
            var t, n, i, o;
            if (e)t = s.getRng(!0), t.setStartBefore(e), t.setEndBefore(e), n = a(e), n && n.nodeValue.charAt(0) == m && (n = n.deleteData(0, 1)), u.remove(e, !0), s.setRng(t); else for (i = r(s.getStart()); (e = u.get(g)) && e !== o;)i !== e && (n = a(e), n && n.nodeValue.charAt(0) == m && (n = n.deleteData(0, 1)), u.remove(e, !0)), o = e
        }

        function l() {
            function e(e, n) {
                var r, a, i, o, l;
                if (r = d.startContainer, a = d.startOffset, 3 == r.nodeType) {
                    if (l = r.nodeValue.length, a > 0 && l > a || (n ? a == l : 0 === a))return
                } else {
                    if (!(a < r.childNodes.length))return n ? null : e;
                    var u = !n && a > 0 ? a - 1 : a;
                    r = r.childNodes[u], r.hasChildNodes() && (r = r.firstChild)
                }
                for (i = new f(r, e); o = i[n ? "prev" : "next"]();) {
                    if (3 === o.nodeType && o.nodeValue.length > 0)return;
                    if ("true" === t(o))return o
                }
                return e
            }

            var r, a, l, d, u;
            o(), l = s.isCollapsed(), r = n(s.getStart()), a = n(s.getEnd()), (r || a) && (d = s.getRng(!0), l ? (r = r || a, (u = e(r, !0)) ? i(u, !0) : (u = e(r, !1)) ? i(u, !1) : s.select(r)) : (d = s.getRng(!0), r && d.setStartBefore(r), a && d.setEndAfter(a), s.setRng(d)))
        }

        function d(a) {
            function i(e, t) {
                for (; e = e[t ? "previousSibling" : "nextSibling"];)if (3 !== e.nodeType || e.nodeValue.length > 0)return e
            }

            function d(e, t) {
                s.select(e), s.collapse(t)
            }

            function g(a) {
                function i(e) {
                    for (var t = d; t;) {
                        if (t === e)return;
                        t = t.parentNode
                    }
                    u.remove(e), l()
                }

                function o() {
                    var r, o, l = e.schema.getNonEmptyElements();
                    for (o = new tinymce.dom.TreeWalker(d, e.getBody()); (r = a ? o.prev() : o.next()) && !l[r.nodeName.toLowerCase()] && !(3 === r.nodeType && tinymce.trim(r.nodeValue).length > 0);)if ("false" === t(r))return i(r), !0;
                    return n(r) ? !0 : !1
                }

                var f, d, c, g;
                if (s.isCollapsed()) {
                    if (f = s.getRng(!0), d = f.startContainer, c = f.startOffset, d = r(d) || d, g = n(d))return i(g), !1;
                    if (3 == d.nodeType && (a ? c > 0 : c < d.nodeValue.length))return !0;
                    if (1 == d.nodeType && (d = d.childNodes[c] || d), o())return !1
                }
                return !0
            }

            var m, p, v, E, h = a.keyCode;
            if (v = s.getStart(), E = s.getEnd(), m = n(v) || n(E), m && (112 > h || h > 124) && h != c.DELETE && h != c.BACKSPACE) {
                if ((tinymce.isMac ? a.metaKey : a.ctrlKey) && (67 == h || 88 == h || 86 == h))return;
                if (a.preventDefault(), h == c.LEFT || h == c.RIGHT) {
                    var y = h == c.LEFT;
                    if (e.dom.isBlock(m)) {
                        var T = y ? m.previousSibling : m.nextSibling, C = new f(T, T), b = y ? C.prev() : C.next();
                        d(b, !y)
                    } else d(m, y)
                }
            } else if (h == c.LEFT || h == c.RIGHT || h == c.BACKSPACE || h == c.DELETE) {
                if (p = r(v)) {
                    if (h == c.LEFT || h == c.BACKSPACE)if (m = i(p, !0), m && "false" === t(m)) {
                        if (a.preventDefault(), h != c.LEFT)return void u.remove(m);
                        d(m, !0)
                    } else o(p);
                    if (h == c.RIGHT || h == c.DELETE)if (m = i(p), m && "false" === t(m)) {
                        if (a.preventDefault(), h != c.RIGHT)return void u.remove(m);
                        d(m, !1)
                    } else o(p)
                }
                if ((h == c.BACKSPACE || h == c.DELETE) && !g(h == c.BACKSPACE))return a.preventDefault(), !1
            }
        }

        var u = e.dom, s = e.selection, g = "mce_noneditablecaret", m = "�?";
        e.on("mousedown", function (n) {
            var r = e.selection.getNode();
            "false" === t(r) && r == n.target && l()
        }), e.on("mouseup keyup", l), e.on("keydown", d)
    }

    function a(t) {
        var n = l.length, r = t.content, a = tinymce.trim(o);
        if ("raw" != t.format) {
            for (; n--;)r = r.replace(l[n], function (t) {
                var n = arguments, i = n[n.length - 2];
                return i > 0 && '"' == r.charAt(i - 1) ? t : '<span class="' + a + '" data-mce-content="' + e.dom.encode(n[0]) + '">' + e.dom.encode("string" == typeof n[1] ? n[1] : n[0]) + "</span>"
            });
            t.content = r
        }
    }

    var i, o, l, f = tinymce.dom.TreeWalker, d = "contenteditable", u = "data-mce-" + d, c = tinymce.util.VK;
    i = " " + tinymce.trim(e.getParam("noneditable_editable_class", "mceEditable")) + " ", o = " " + tinymce.trim(e.getParam("noneditable_noneditable_class", "mceNonEditable")) + " ", l = e.getParam("noneditable_regexp"), l && !l.length && (l = [l]), e.on("PreInit", function () {
        r(), l && e.on("BeforeSetContent", a), e.parser.addAttributeFilter("class", function (e) {
            for (var t, n, r = e.length; r--;)n = e[r], t = " " + n.attr("class") + " ", -1 !== t.indexOf(i) ? n.attr(u, "true") : -1 !== t.indexOf(o) && n.attr(u, "false")
        }), e.serializer.addAttributeFilter(u, function (e) {
            for (var t, n = e.length; n--;)t = e[n], l && t.attr("data-mce-content") ? (t.name = "#text", t.type = 3, t.raw = !0, t.value = t.attr("data-mce-content")) : (t.attr(d, null), t.attr(u, null))
        }), e.parser.addAttributeFilter(d, function (e) {
            for (var t, n = e.length; n--;)t = e[n], t.attr(u, t.attr(d)), t.attr(d, null)
        })
    }), e.on("drop", function (e) {
        n(e.target) && e.preventDefault()
    })
});
tinymce.PluginManager.add("pagebreak", function (e) {
    var a = "mce-pagebreak", t = e.getParam("pagebreak_separator", "<!-- pagebreak -->"), n = new RegExp(t.replace(/[\?\.\*\[\]\(\)\{\}\+\^\$\:]/g, function (e) {
        return "\\" + e
    }), "gi"), r = '<img src="' + tinymce.Env.transparentSrc + '" class="' + a + '" data-mce-resize="false" />';
    e.addCommand("mcePageBreak", function () {
        e.insertContent(e.settings.pagebreak_split_block ? "<p>" + r + "</p>" : r)
    }), e.addButton("pagebreak", {
        title: "Page break",
        cmd: "mcePageBreak"
    }), e.addMenuItem("pagebreak", {
        text: "Page break",
        icon: "pagebreak",
        cmd: "mcePageBreak",
        context: "insert"
    }), e.on("ResolveName", function (t) {
        "IMG" == t.target.nodeName && e.dom.hasClass(t.target, a) && (t.name = "pagebreak")
    }), e.on("click", function (t) {
        t = t.target, "IMG" === t.nodeName && e.dom.hasClass(t, a) && e.selection.select(t)
    }), e.on("BeforeSetContent", function (e) {
        e.content = e.content.replace(n, r)
    }), e.on("PreInit", function () {
        e.serializer.addNodeFilter("img", function (a) {
            for (var n, r, c = a.length; c--;)if (n = a[c], r = n.attr("class"), r && -1 !== r.indexOf("mce-pagebreak")) {
                var o = n.parent;
                if (e.schema.getBlockElements()[o.name] && e.settings.pagebreak_split_block) {
                    o.type = 3, o.value = t, o.raw = !0, n.remove();
                    continue
                }
                n.type = 3, n.value = t, n.raw = !0
            }
        })
    })
});
!function (e, t) {
    "use strict";
    function n(e, t) {
        for (var n, r = [], i = 0; i < e.length; ++i) {
            if (n = s[e[i]] || o(e[i]), !n)throw"module definition dependecy not found: " + e[i];
            r.push(n)
        }
        t.apply(null, r)
    }

    function r(e, r, i) {
        if ("string" != typeof e)throw"invalid module definition, module id must be defined and be a string";
        if (r === t)throw"invalid module definition, dependencies must be specified";
        if (i === t)throw"invalid module definition, definition function must be specified";
        n(r, function () {
            s[e] = i.apply(null, arguments)
        })
    }

    function i(e) {
        return !!s[e]
    }

    function o(t) {
        for (var n = e, r = t.split(/[.\/]/), i = 0; i < r.length; ++i) {
            if (!n[r[i]])return;
            n = n[r[i]]
        }
        return n
    }

    function a(n) {
        for (var r = 0; r < n.length; r++) {
            for (var i = e, o = n[r], a = o.split(/[.\/]/), l = 0; l < a.length - 1; ++l)i[a[l]] === t && (i[a[l]] = {}), i = i[a[l]];
            i[a[a.length - 1]] = s[o]
        }
    }

    var s = {}, l = "tinymce/pasteplugin/Utils", c = "tinymce/util/Tools", d = "tinymce/html/DomParser", u = "tinymce/html/Schema", f = "tinymce/pasteplugin/Clipboard", p = "tinymce/Env", m = "tinymce/util/VK", h = "tinymce/pasteplugin/WordFilter", g = "tinymce/html/Serializer", v = "tinymce/html/Node", y = "tinymce/pasteplugin/Quirks", b = "tinymce/pasteplugin/Plugin", C = "tinymce/PluginManager";
    r(l, [c, d, u], function (e, t, n) {
        function r(t, n) {
            return e.each(n, function (e) {
                t = e.constructor == RegExp ? t.replace(e, "") : t.replace(e[0], e[1])
            }), t
        }

        function i(r) {
            function i(e) {
                var t = e.name, n = e;
                if ("br" === t)return void(s += "\n");
                if (l[t] && (s += " "), c[t])return void(s += " ");
                if (3 == e.type && (s += e.value), !e.shortEnded && (e = e.firstChild))do i(e); while (e = e.next);
                d[t] && n.next && (s += "\n", "p" == t && (s += "\n"))
            }

            var o = new n, a = new t({}, o), s = "", l = o.getShortEndedElements(), c = e.makeMap("script noscript style textarea video audio iframe object", " "), d = o.getBlockElements();
            return i(a.parse(r)), s
        }

        function o(e) {
            return e = r(e, [/^[\s\S]*<body[^>]*>\s*|\s*<\/body[^>]*>[\s\S]*$/g, /<!--StartFragment-->|<!--EndFragment-->/g, [/<span class="Apple-converted-space">\u00a0<\/span>/g, "\xa0"], /<br>$/i])
        }

        return {filter: r, innerText: i, trimHtml: o}
    }), r(f, [p, m, l], function (e, t, n) {
        return function (r) {
            function i(e) {
                var t, n = r.dom;
                if (t = r.fire("BeforePastePreProcess", {content: e}), t = r.fire("PastePreProcess", t), e = t.content, !t.isDefaultPrevented()) {
                    if (r.hasEventListeners("PastePostProcess") && !t.isDefaultPrevented()) {
                        var i = n.add(r.getBody(), "div", {style: "display:none"}, e);
                        t = r.fire("PastePostProcess", {node: i}), n.remove(i), e = t.node.innerHTML
                    }
                    t.isDefaultPrevented() || r.insertContent(e, {merge: r.settings.paste_merge_formats !== !1})
                }
            }

            function o(e) {
                e = r.dom.encode(e).replace(/\r\n/g, "\n");
                var t = r.dom.getParent(r.selection.getStart(), r.dom.isBlock), o = r.settings.forced_root_block, a;
                o && (a = r.dom.createHTML(o, r.settings.forced_root_block_attrs), a = a.substr(0, a.length - 3) + ">"), t && /^(PRE|DIV)$/.test(t.nodeName) || !o ? e = n.filter(e, [[/\n/g, "<br>"]]) : (e = n.filter(e, [[/\n\n/g, "</p>" + a], [/^(.*<\/p>)(<p>)$/, a + "$1"], [/\n/g, "<br />"]]), -1 != e.indexOf("<p>") && (e = a + e)), i(e)
            }

            function a() {
                var t = r.dom, n = r.getBody(), i = r.dom.getViewPort(r.getWin()), o = i.y, a = 20, s;
                if (b = r.selection.getRng(), r.inline && (s = r.selection.getScrollContainer(), s && s.scrollTop > 0 && (o = s.scrollTop)), b.getClientRects) {
                    var l = b.getClientRects();
                    if (l.length)a = o + (l[0].top - t.getPos(n).y); else {
                        a = o;
                        var c = b.startContainer;
                        c && (3 == c.nodeType && c.parentNode != n && (c = c.parentNode), 1 == c.nodeType && (a = t.getPos(c, s || n).y))
                    }
                }
                y = t.add(r.getBody(), "div", {
                    id: "mcepastebin",
                    contentEditable: !0,
                    "data-mce-bogus": "1",
                    style: "position: absolute; top: " + a + "px;width: 10px; height: 10px; overflow: hidden; opacity: 0"
                }, x), (e.ie || e.gecko) && t.setStyle(y, "left", "rtl" == t.getStyle(n, "direction", !0) ? 65535 : -65535), t.bind(y, "beforedeactivate focusin focusout", function (e) {
                    e.stopPropagation()
                }), y.focus(), r.selection.select(y, !0)
            }

            function s() {
                if (y) {
                    for (var e; e = r.dom.get("mcepastebin");)r.dom.remove(e), r.dom.unbind(e);
                    b && r.selection.setRng(b)
                }
                y = b = null
            }

            function l() {
                var e = x, t, n;
                for (t = r.dom.select("div[id=mcepastebin]"), n = t.length; n--;) {
                    var i = t[n].innerHTML;
                    e == x && (e = ""), i.length > e.length && (e = i)
                }
                return e
            }

            function c(e) {
                var t = {};
                if (e && e.types) {
                    var n = e.getData("Text");
                    n && n.length > 0 && (t["text/plain"] = n);
                    for (var r = 0; r < e.types.length; r++) {
                        var i = e.types[r];
                        t[i] = e.getData(i)
                    }
                }
                return t
            }

            function d(e) {
                return c(e.clipboardData || r.getDoc().dataTransfer)
            }

            function u(e, t) {
                function n(e) {
                    if ("image/png" == o[a].type) {
                        var t = new FileReader;
                        return t.onload = function () {
                            i('<img src="' + t.result + '">')
                        }, t.readAsDataURL(e.getAsFile()), !0
                    }
                }

                if (!(!r.settings.paste_data_images || "text/html" in t || "text/plain" in t) && e.clipboardData) {
                    var o = e.clipboardData.items;
                    if (o)for (var a = 0; a < o.length; a++)if (n(o[a]))return !0
                }
            }

            function f(e) {
                var t = e.clipboardData;
                return -1 != navigator.userAgent.indexOf("Android") && t && t.items && 0 === t.items.length
            }

            function p(e) {
                var t = r.getDoc(), n;
                if (t.caretPositionFromPoint) {
                    var i = t.caretPositionFromPoint(e.clientX, e.clientY);
                    n = t.createRange(), n.setStart(i.offsetNode, i.offset), n.collapse(!0)
                } else t.caretRangeFromPoint && (n = t.caretRangeFromPoint(e.clientX, e.clientY));
                return n
            }

            function m(e, t) {
                return t in e && e[t].length > 0
            }

            function h(e) {
                return t.metaKeyPressed(e) && 86 == e.keyCode || e.shiftKey && 45 == e.keyCode
            }

            function g() {
                r.on("keydown", function (t) {
                    if (h(t) && !t.isDefaultPrevented()) {
                        if (w = t.shiftKey && 86 == t.keyCode, w && e.webkit && -1 != navigator.userAgent.indexOf("Version/"))return;
                        if (t.stopImmediatePropagation(), C = (new Date).getTime(), e.ie && w)return t.preventDefault(), void r.fire("paste", {ieFake: !0});
                        s(), a()
                    }
                }), r.on("keyup", function (e) {
                    h(e) && !e.isDefaultPrevented() && s()
                }), r.on("paste", function (t) {
                    var c = d(t), p = (new Date).getTime() - C < 1e3, h = "text" == v.pasteFormat || w;
                    return w = !1, t.isDefaultPrevented() || f(t) ? void s() : u(t, c) ? void s() : (p || t.preventDefault(), !e.ie || p && !t.ieFake || (a(), r.dom.bind(y, "paste", function (e) {
                        e.stopPropagation()
                    }), r.getDoc().execCommand("Paste", !1, null), c["text/html"] = l()), void setTimeout(function () {
                        var e;
                        return m(c, "text/html") ? e = c["text/html"] : (e = l(), e == x && (h = !0)), e = n.trimHtml(l()), y && y.firstChild && "mcepastebin" === y.firstChild.id && (h = !0), s(), h && (e = m(c, "text/plain") && -1 == e.indexOf("</p>") ? c["text/plain"] : n.innerText(e)), e == x ? void(p || r.windowManager.alert("Please use Ctrl+V/Cmd+V keyboard shortcuts to paste contents.")) : void(h ? o(e) : i(e))
                    }, 0))
                }), r.on("dragstart", function (e) {
                    if (e.dataTransfer.types)try {
                        e.dataTransfer.setData("mce-internal", r.selection.getContent())
                    } catch (t) {
                    }
                }), r.on("drop", function (e) {
                    var t = p(e);
                    if (t && !e.isDefaultPrevented()) {
                        var n = c(e.dataTransfer), a = n["mce-internal"] || n["text/html"] || n["text/plain"];
                        a && (e.preventDefault(), r.undoManager.transact(function () {
                            n["mce-internal"] && r.execCommand("Delete"), r.selection.setRng(t), n["text/html"] ? i(a) : o(a)
                        }))
                    }
                })
            }

            var v = this, y, b, C = 0, x = "%MCEPASTEBIN%", w;
            v.pasteHtml = i, v.pasteText = o, r.on("preInit", function () {
                g(), r.parser.addNodeFilter("img", function (t) {
                    if (!r.settings.paste_data_images)for (var n = t.length; n--;) {
                        var i = t[n].attributes.map.src;
                        i && 0 === i.indexOf("data:image") && (t[n].attr("data-mce-object") || i === e.transparentSrc || t[n].remove())
                    }
                })
            }), r.on("BeforeAddUndo", function (e) {
                e.level.content && (e.level.content = e.level.content.replace(/<div id="?mcepastebin"?[^>]+>%MCEPASTEBIN%<\/div>/gi, ""))
            })
        }
    }), r(h, [c, d, u, g, v, l], function (e, t, n, r, i, o) {
        function a(e) {
            return /<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(e) || /class="OutlineElement/.test(e) || /id="?docs\-internal\-guid\-/.test(e)
        }

        function s(s) {
            var l = s.settings;
            s.on("BeforePastePreProcess", function (c) {
                function d(e) {
                    function t(e, t, a, s) {
                        var l = e._listLevel || o;
                        l != o && (o > l ? n && (n = n.parent.parent) : (r = n, n = null)), n && n.name == a ? n.append(e) : (r = r || n, n = new i(a, 1), s > 1 && n.attr("start", "" + s), e.wrap(n)), e.name = "li", t.value = "";
                        var c = t.next;
                        c && 3 == c.type && (c.value = c.value.replace(/^\u00a0+/, "")), l > o && r && r.lastChild.append(n), o = l
                    }

                    for (var n, r, o = 1, a = e.getAll("p"), s = 0; s < a.length; s++)if (e = a[s], "p" == e.name && e.firstChild) {
                        for (var l = "", c = e.firstChild; c && !(l = c.value);)c = c.firstChild;
                        if (/^\s*[\u2022\u00b7\u00a7\u00d8\u25CF]\s*$/.test(l)) {
                            t(e, c, "ul");
                            continue
                        }
                        if (/^\s*\w+\.$/.test(l)) {
                            var d = /([0-9])\./.exec(l), u = 1;
                            d && (u = parseInt(d[1], 10)), t(e, c, "ol", u);
                            continue
                        }
                        n = null
                    }
                }

                function u(t, n) {
                    var r = {}, o = s.dom.parseStyle(n);
                    if ("p" === t.name) {
                        var a = /mso-list:\w+ \w+([0-9]+)/.exec(n);
                        a && (t._listLevel = parseInt(a[1], 10))
                    }
                    return e.each(o, function (e, n) {
                        switch (n) {
                            case"horiz-align":
                                n = "text-align";
                                break;
                            case"vert-align":
                                n = "vertical-align";
                                break;
                            case"font-color":
                            case"mso-foreground":
                                n = "color";
                                break;
                            case"mso-background":
                            case"mso-highlight":
                                n = "background";
                                break;
                            case"font-weight":
                            case"font-style":
                                return void("normal" != e && (r[n] = e));
                            case"mso-element":
                                if (/^(comment|comment-list)$/i.test(e))return void t.remove()
                        }
                        return 0 === n.indexOf("mso-comment") ? void t.remove() : void(0 !== n.indexOf("mso-") && ("all" == p || m && m[n]) && (r[n] = e))
                    }), /(bold)/i.test(r["font-weight"]) && (delete r["font-weight"], t.wrap(new i("b", 1))), /(italic)/i.test(r["font-style"]) && (delete r["font-style"], t.wrap(new i("i", 1))), r = s.dom.serializeStyle(r, t.name), r ? r : null
                }

                var f = c.content, p, m;
                if (p = l.paste_retain_style_properties, p && (m = e.makeMap(p.split(/[, ]/))), l.paste_enable_default_filters !== !1 && a(c.content)) {
                    c.wordContent = !0, f = o.filter(f, [/<!--[\s\S]+?-->/gi, /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi, [/<(\/?)s>/gi, "<$1strike>"], [/&nbsp;/gi, "\xa0"], [/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi, function (e, t) {
                        return t.length > 0 ? t.replace(/./, " ").slice(Math.floor(t.length / 2)).split("").join("\xa0") : ""
                    }]]);
                    var h = l.paste_word_valid_elements;
                    h || (h = "-strong/b,-em/i,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-table[width],-tr,-td[colspan|rowspan|width],-th,-thead,-tfoot,-tbody,-a[href|name],sub,sup,strike,br,del");
                    var g = new n({valid_elements: h, valid_children: "-li[p]"});
                    e.each(g.elements, function (e) {
                        e.attributes["class"] || (e.attributes["class"] = {}, e.attributesOrder.push("class")), e.attributes.style || (e.attributes.style = {}, e.attributesOrder.push("style"))
                    });
                    var v = new t({}, g);
                    v.addAttributeFilter("style", function (e) {
                        for (var t = e.length, n; t--;)n = e[t], n.attr("style", u(n, n.attr("style"))), "span" == n.name && n.parent && !n.attributes.length && n.unwrap()
                    }), v.addAttributeFilter("class", function (e) {
                        for (var t = e.length, n, r; t--;)n = e[t], r = n.attr("class"), /^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(r) && n.remove(), n.attr("class", null)
                    }), v.addNodeFilter("del", function (e) {
                        for (var t = e.length; t--;)e[t].remove()
                    }), v.addNodeFilter("a", function (e) {
                        for (var t = e.length, n, r, i; t--;)if (n = e[t], r = n.attr("href"), i = n.attr("name"), r && -1 != r.indexOf("#_msocom_"))n.remove(); else if (r && 0 === r.indexOf("file://") && (r = r.split("#")[1], r && (r = "#" + r)), r || i) {
                            if (i && !/^_?(?:toc|edn|ftn)/i.test(i)) {
                                n.unwrap();
                                continue
                            }
                            n.attr({href: r, name: i})
                        } else n.unwrap()
                    });
                    var y = v.parse(f);
                    d(y), c.content = new r({}, g).serialize(y)
                }
            })
        }

        return s.isWordContent = a, s
    }), r(y, [p, c, h, l], function (e, t, n, r) {
        return function (i) {
            function o(e) {
                i.on("BeforePastePreProcess", function (t) {
                    t.content = e(t.content)
                })
            }

            function a(e) {
                if (!n.isWordContent(e))return e;
                var o = [];
                t.each(i.schema.getBlockElements(), function (e, t) {
                    o.push(t)
                });
                var a = new RegExp("(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*(<\\/?(" + o.join("|") + ")[^>]*>)(?:<br>&nbsp;[\\s\\r\\n]+|<br>)*", "g");
                return e = r.filter(e, [[a, "$1"]]), e = r.filter(e, [[/<br><br>/g, "<BR><BR>"], [/<br>/g, " "], [/<BR><BR>/g, "<br>"]])
            }

            function s(e) {
                if (n.isWordContent(e))return e;
                var t = i.settings.paste_webkit_styles;
                if (i.settings.paste_remove_styles_if_webkit === !1 || "all" == t)return e;
                if (t && (t = t.split(/[, ]/)), t) {
                    var r = i.dom, o = i.selection.getNode();
                    e = e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, function (e, n, i, a) {
                        var s = r.parseStyle(i, "span"), l = {};
                        if ("none" === t)return n + a;
                        for (var c = 0; c < t.length; c++) {
                            var d = s[t[c]], u = r.getStyle(o, t[c], !0);
                            /color/.test(t[c]) && (d = r.toHex(d), u = r.toHex(u)), u != d && (l[t[c]] = d)
                        }
                        return l = r.serializeStyle(l, "span"), l ? n + ' style="' + l + '"' + a : ""
                    })
                } else e = e.replace(/(<[^>]+) style="([^"]*)"([^>]*>)/gi, "$1$3");
                return e = e.replace(/(<[^>]+) data-mce-style="([^"]+)"([^>]*>)/gi, function (e, t, n, r) {
                    return t + ' style="' + n + '"' + r
                })
            }

            e.webkit && o(s), e.ie && o(a)
        }
    }), r(b, [C, f, h, y], function (e, t, n, r) {
        var i;
        e.add("paste", function (e) {
            function o() {
                "text" == s.pasteFormat ? (this.active(!1), s.pasteFormat = "html") : (s.pasteFormat = "text", this.active(!0), i || (e.windowManager.alert("Paste is now in plain text mode. Contents will now be pasted as plain text until you toggle this option off."), i = !0))
            }

            var a = this, s, l = e.settings;
            a.clipboard = s = new t(e), a.quirks = new r(e), a.wordFilter = new n(e), e.settings.paste_as_text && (a.clipboard.pasteFormat = "text"), l.paste_preprocess && e.on("PastePreProcess", function (e) {
                l.paste_preprocess.call(a, a, e)
            }), l.paste_postprocess && e.on("PastePostProcess", function (e) {
                l.paste_postprocess.call(a, a, e)
            }), e.addCommand("mceInsertClipboardContent", function (e, t) {
                t.content && a.clipboard.pasteHtml(t.content), t.text && a.clipboard.pasteText(t.text)
            }), e.paste_block_drop && e.on("dragend dragover draggesture dragdrop drop drag", function (e) {
                e.preventDefault(), e.stopPropagation()
            }), e.settings.paste_data_images || e.on("drop", function (e) {
                var t = e.dataTransfer;
                t && t.files && t.files.length > 0 && e.preventDefault()
            }), e.addButton("pastetext", {
                icon: "pastetext",
                tooltip: "Paste as text",
                onclick: o,
                active: "text" == a.clipboard.pasteFormat
            }), e.addMenuItem("pastetext", {text: "Paste as text", selectable: !0, active: s.pasteFormat, onclick: o})
        })
    }), a([l, h])
}(this);
tinymce.PluginManager.add("preview", function (e) {
    var t = e.settings, i = !tinymce.Env.ie;
    e.addCommand("mcePreview", function () {
        e.windowManager.open({
            title: "Preview",
            width: parseInt(e.getParam("plugin_preview_width", "650"), 10),
            height: parseInt(e.getParam("plugin_preview_height", "500"), 10),
            html: '<iframe src="javascript:\'\'" frameborder="0"' + (i ? ' sandbox="allow-scripts"' : "") + "></iframe>",
            buttons: {
                text: "Close", onclick: function () {
                    this.parent().parent().close()
                }
            },
            onPostRender: function () {
                var n, a = "";
                a += '<base href="' + e.documentBaseURI.getURI() + '">', tinymce.each(e.contentCSS, function (t) {
                    a += '<link type="text/css" rel="stylesheet" href="' + e.documentBaseURI.toAbsolute(t) + '">'
                });
                var r = t.body_id || "tinymce";
                -1 != r.indexOf("=") && (r = e.getParam("body_id", "", "hash"), r = r[e.id] || r);
                var d = t.body_class || "";
                -1 != d.indexOf("=") && (d = e.getParam("body_class", "", "hash"), d = d[e.id] || "");
                var o = e.settings.directionality ? ' dir="' + e.settings.directionality + '"' : "";
                if (n = "<!DOCTYPE html><html><head>" + a + '</head><body id="' + r + '" class="mce-content-body ' + d + '"' + o + ">" + e.getContent() + "</body></html>", i)this.getEl("body").firstChild.src = "data:text/html;charset=utf-8," + encodeURIComponent(n); else {
                    var s = this.getEl("body").firstChild.contentWindow.document;
                    s.open(), s.write(n), s.close()
                }
            }
        })
    }), e.addButton("preview", {title: "Preview", cmd: "mcePreview"}), e.addMenuItem("preview", {
        text: "Preview",
        cmd: "mcePreview",
        context: "view"
    })
});
tinymce.PluginManager.add("print", function (t) {
    t.addCommand("mcePrint", function () {
        t.getWin().print()
    }), t.addButton("print", {
        title: "Print",
        cmd: "mcePrint"
    }), t.addShortcut("Ctrl+P", "", "mcePrint"), t.addMenuItem("print", {
        text: "Print",
        cmd: "mcePrint",
        icon: "print",
        shortcut: "Ctrl+P",
        context: "file"
    })
});
tinymce.PluginManager.add("save", function (e) {
    function a() {
        var a;
        return a = tinymce.DOM.getParent(e.id, "form"), !e.getParam("save_enablewhendirty", !0) || e.isDirty() ? (tinymce.triggerSave(), e.getParam("save_onsavecallback") ? void(e.execCallback("save_onsavecallback", e) && (e.startContent = tinymce.trim(e.getContent({format: "raw"})), e.nodeChanged())) : void(a ? (e.isNotDirty = !0, (!a.onsubmit || a.onsubmit()) && ("function" == typeof a.submit ? a.submit() : e.windowManager.alert("Error: Form submit field collision.")), e.nodeChanged()) : e.windowManager.alert("Error: No form element found."))) : void 0
    }

    function n() {
        var a = tinymce.trim(e.startContent);
        return e.getParam("save_oncancelcallback") ? void e.execCallback("save_oncancelcallback", e) : (e.setContent(a), e.undoManager.clear(), void e.nodeChanged())
    }

    function t() {
        var a = this;
        e.on("nodeChange", function () {
            a.disabled(e.getParam("save_enablewhendirty", !0) && !e.isDirty())
        })
    }

    e.addCommand("mceSave", a), e.addCommand("mceCancel", n), e.addButton("save", {
        icon: "save",
        text: "Save",
        cmd: "mceSave",
        disabled: !0,
        onPostRender: t
    }), e.addButton("cancel", {
        text: "Cancel",
        icon: !1,
        cmd: "mceCancel",
        disabled: !0,
        onPostRender: t
    }), e.addShortcut("ctrl+s", "", "mceSave")
});
!function () {
    function e(e, t, n, a, r) {
        function i(e, t) {
            if (t = t || 0, !e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";
            var n = e.index;
            if (t > 0) {
                var a = e[t];
                if (!a)throw"Invalid capture group";
                n += e[0].indexOf(a), e[0] = a
            }
            return [n, n + e[0].length, [e[0]]]
        }

        function d(e) {
            var t;
            if (3 === e.nodeType)return e.data;
            if (h[e.nodeName] && !u[e.nodeName])return "";
            if (t = "", (u[e.nodeName] || m[e.nodeName]) && (t += "\n"), e = e.firstChild)do t += d(e); while (e = e.nextSibling);
            return t
        }

        function o(e, t, n) {
            var a, r, i, d, o = [], l = 0, c = e, s = t.shift(), f = 0;
            e:for (; ;) {
                if ((u[c.nodeName] || m[c.nodeName]) && l++, 3 === c.nodeType && (!r && c.length + l >= s[1] ? (r = c, d = s[1] - l) : a && o.push(c), !a && c.length + l > s[0] && (a = c, i = s[0] - l), l += c.length), a && r) {
                    if (c = n({
                            startNode: a,
                            startNodeIndex: i,
                            endNode: r,
                            endNodeIndex: d,
                            innerNodes: o,
                            match: s[2],
                            matchIndex: f
                        }), l -= r.length - d, a = null, r = null, o = [], s = t.shift(), f++, !s)break
                } else {
                    if ((!h[c.nodeName] || u[c.nodeName]) && c.firstChild) {
                        c = c.firstChild;
                        continue
                    }
                    if (c.nextSibling) {
                        c = c.nextSibling;
                        continue
                    }
                }
                for (; ;) {
                    if (c.nextSibling) {
                        c = c.nextSibling;
                        break
                    }
                    if (c.parentNode === e)break e;
                    c = c.parentNode
                }
            }
        }

        function l(e) {
            var t;
            if ("function" != typeof e) {
                var n = e.nodeType ? e : f.createElement(e);
                t = function (e, t) {
                    var a = n.cloneNode(!1);
                    return a.setAttribute("data-mce-index", t), e && a.appendChild(f.createTextNode(e)), a
                }
            } else t = e;
            return function (e) {
                var n, a, r, i = e.startNode, d = e.endNode, o = e.matchIndex;
                if (i === d) {
                    var l = i;
                    r = l.parentNode, e.startNodeIndex > 0 && (n = f.createTextNode(l.data.substring(0, e.startNodeIndex)), r.insertBefore(n, l));
                    var c = t(e.match[0], o);
                    return r.insertBefore(c, l), e.endNodeIndex < l.length && (a = f.createTextNode(l.data.substring(e.endNodeIndex)), r.insertBefore(a, l)), l.parentNode.removeChild(l), c
                }
                n = f.createTextNode(i.data.substring(0, e.startNodeIndex)), a = f.createTextNode(d.data.substring(e.endNodeIndex));
                for (var s = t(i.data.substring(e.startNodeIndex), o), u = [], h = 0, m = e.innerNodes.length; m > h; ++h) {
                    var g = e.innerNodes[h], p = t(g.data, o);
                    g.parentNode.replaceChild(p, g), u.push(p)
                }
                var x = t(d.data.substring(0, e.endNodeIndex), o);
                return r = i.parentNode, r.insertBefore(n, i), r.insertBefore(s, i), r.removeChild(i), r = d.parentNode, r.insertBefore(x, d), r.insertBefore(a, d), r.removeChild(d), x
            }
        }

        var c, s, f, u, h, m, g = [], p = 0;
        if (f = t.ownerDocument, u = r.getBlockElements(), h = r.getWhiteSpaceElements(), m = r.getShortEndedElements(), s = d(t)) {
            if (e.global)for (; c = e.exec(s);)g.push(i(c, a)); else c = s.match(e), g.push(i(c, a));
            return g.length && (p = g.length, o(t, g, l(n))), p
        }
    }

    function t(t) {
        function n() {
            function e() {
                r.statusbar.find("#next").disabled(!d(s + 1).length), r.statusbar.find("#prev").disabled(!d(s - 1).length)
            }

            function n() {
                tinymce.ui.MessageBox.alert("Could not find the specified string.", function () {
                    r.find("#find")[0].focus()
                })
            }

            var a = {}, r = tinymce.ui.Factory.create({
                type: "window",
                layout: "flex",
                pack: "center",
                align: "center",
                onClose: function () {
                    t.focus(), c.done()
                },
                onSubmit: function (t) {
                    var i, o, l, f;
                    return t.preventDefault(), o = r.find("#case").checked(), f = r.find("#words").checked(), l = r.find("#find").value(), l.length ? a.text == l && a.caseState == o && a.wholeWord == f ? 0 === d(s + 1).length ? void n() : (c.next(), void e()) : (i = c.find(l, o, f), i || n(), r.statusbar.items().slice(1).disabled(0 === i), e(), void(a = {
                        text: l,
                        caseState: o,
                        wholeWord: f
                    })) : (c.done(!1), void r.statusbar.items().slice(1).disabled(!0))
                },
                buttons: [{
                    text: "Find", onclick: function () {
                        r.submit()
                    }
                }, {
                    text: "Replace", disabled: !0, onclick: function () {
                        c.replace(r.find("#replace").value()) || (r.statusbar.items().slice(1).disabled(!0), s = -1, a = {})
                    }
                }, {
                    text: "Replace all", disabled: !0, onclick: function () {
                        c.replace(r.find("#replace").value(), !0, !0), r.statusbar.items().slice(1).disabled(!0), a = {}
                    }
                }, {type: "spacer", flex: 1}, {
                    text: "Prev", name: "prev", disabled: !0, onclick: function () {
                        c.prev(), e()
                    }
                }, {
                    text: "Next", name: "next", disabled: !0, onclick: function () {
                        c.next(), e()
                    }
                }],
                title: "Find and replace",
                items: {
                    type: "form",
                    padding: 20,
                    labelGap: 30,
                    spacing: 10,
                    items: [{
                        type: "textbox",
                        name: "find",
                        size: 40,
                        label: "Find",
                        value: t.selection.getNode().src
                    }, {type: "textbox", name: "replace", size: 40, label: "Replace with"}, {
                        type: "checkbox",
                        name: "case",
                        text: "Match case",
                        label: " "
                    }, {type: "checkbox", name: "words", text: "Whole words", label: " "}]
                }
            }).renderTo().reflow()
        }

        function a(e) {
            var t = e.getAttribute("data-mce-index");
            return "number" == typeof t ? "" + t : t
        }

        function r(n) {
            var a, r;
            return r = t.dom.create("span", {"data-mce-bogus": 1}), r.className = "mce-match-marker", a = t.getBody(), c.done(!1), e(n, a, r, !1, t.schema)
        }

        function i(e) {
            var t = e.parentNode;
            e.firstChild && t.insertBefore(e.firstChild, e), e.parentNode.removeChild(e)
        }

        function d(e) {
            var n, r = [];
            if (n = tinymce.toArray(t.getBody().getElementsByTagName("span")), n.length)for (var i = 0; i < n.length; i++) {
                var d = a(n[i]);
                null !== d && d.length && d === e.toString() && r.push(n[i])
            }
            return r
        }

        function o(e) {
            var n = s, a = t.dom;
            e = e !== !1, e ? n++ : n--, a.removeClass(d(s), "mce-match-marker-selected");
            var r = d(n);
            return r.length ? (a.addClass(d(n), "mce-match-marker-selected"), t.selection.scrollIntoView(r[0]), n) : -1
        }

        function l(e) {
            e.parentNode.removeChild(e)
        }

        var c = this, s = -1;
        c.init = function (e) {
            e.addMenuItem("searchreplace", {
                text: "Find and replace",
                shortcut: "Ctrl+F",
                onclick: n,
                separator: "before",
                context: "edit"
            }), e.addButton("searchreplace", {
                tooltip: "Find and replace",
                shortcut: "Ctrl+F",
                onclick: n
            }), e.addCommand("SearchReplace", n), e.shortcuts.add("Ctrl+F", "", n)
        }, c.find = function (e, t, n) {
            e = e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), e = n ? "\\b" + e + "\\b" : e;
            var a = r(new RegExp(e, t ? "g" : "gi"));
            return a && (s = -1, s = o(!0)), a
        }, c.next = function () {
            var e = o(!0);
            -1 !== e && (s = e)
        }, c.prev = function () {
            var e = o(!1);
            -1 !== e && (s = e)
        }, c.replace = function (e, n, r) {
            var o, f, u, h, m, g, p = s;
            for (n = n !== !1, u = t.getBody(), f = tinymce.toArray(u.getElementsByTagName("span")), o = 0; o < f.length; o++) {
                var x = a(f[o]);
                if (null !== x && x.length)if (h = m = parseInt(x, 10), r || h === s) {
                    for (e.length ? (f[o].firstChild.nodeValue = e, i(f[o])) : l(f[o]); f[++o];)if (h = a(f[o]), null !== x && x.length) {
                        if (h !== m) {
                            o--;
                            break
                        }
                        l(f[o])
                    }
                    n && p--
                } else m > s && f[o].setAttribute("data-mce-index", m - 1)
            }
            return t.undoManager.add(), s = p, n ? (g = d(p + 1).length > 0, c.next()) : (g = d(p - 1).length > 0, c.prev()), !r && g
        }, c.done = function (e) {
            var n, r, d, o;
            for (r = tinymce.toArray(t.getBody().getElementsByTagName("span")), n = 0; n < r.length; n++) {
                var l = a(r[n]);
                null !== l && l.length && (l === s.toString() && (d || (d = r[n].firstChild), o = r[n].firstChild), i(r[n]))
            }
            if (d && o) {
                var c = t.dom.createRng();
                return c.setStart(d, 0), c.setEnd(o, o.data.length), e !== !1 && t.selection.setRng(c), c
            }
        }
    }

    tinymce.PluginManager.add("searchreplace", t)
}();
!function (e, t) {
    "use strict";
    function n(e, t) {
        for (var n, r = [], o = 0; o < e.length; ++o) {
            if (n = c[e[o]] || i(e[o]), !n)throw"module definition dependecy not found: " + e[o];
            r.push(n)
        }
        t.apply(null, r)
    }

    function r(e, r, o) {
        if ("string" != typeof e)throw"invalid module definition, module id must be defined and be a string";
        if (r === t)throw"invalid module definition, dependencies must be specified";
        if (o === t)throw"invalid module definition, definition function must be specified";
        n(r, function () {
            c[e] = o.apply(null, arguments)
        })
    }

    function o(e) {
        return !!c[e]
    }

    function i(t) {
        for (var n = e, r = t.split(/[.\/]/), o = 0; o < r.length; ++o) {
            if (!n[r[o]])return;
            n = n[r[o]]
        }
        return n
    }

    function a(n) {
        for (var r = 0; r < n.length; r++) {
            for (var o = e, i = n[r], a = i.split(/[.\/]/), l = 0; l < a.length - 1; ++l)o[a[l]] === t && (o[a[l]] = {}), o = o[a[l]];
            o[a[a.length - 1]] = c[i]
        }
    }

    var c = {}, l = "tinymce/spellcheckerplugin/DomTextMatcher", s = "tinymce/spellcheckerplugin/Plugin", d = "tinymce/PluginManager", u = "tinymce/util/Tools", f = "tinymce/ui/Menu", h = "tinymce/dom/DOMUtils", g = "tinymce/util/XHR", m = "tinymce/util/URI", p = "tinymce/util/JSON";
    r(l, [], function () {
        return function (e, t) {
            function n(e, t) {
                if (!e[0])throw"findAndReplaceDOMText cannot handle zero-length matches";
                return {start: e.index, end: e.index + e[0].length, text: e[0], data: t}
            }

            function r(e) {
                var t;
                if (3 === e.nodeType)return e.data;
                if (T[e.nodeName] && !S[e.nodeName])return "";
                if (t = "", (S[e.nodeName] || B[e.nodeName]) && (t += "\n"), e = e.firstChild)do t += r(e); while (e = e.nextSibling);
                return t
            }

            function o(e, t, n) {
                var r, o, i, a, c = [], l = 0, s = e, d, u = 0;
                t = t.slice(0), t.sort(function (e, t) {
                    return e.start - t.start
                }), d = t.shift();
                e:for (; ;) {
                    if ((S[s.nodeName] || B[s.nodeName]) && l++, 3 === s.nodeType && (!o && s.length + l >= d.end ? (o = s, a = d.end - l) : r && c.push(s), !r && s.length + l > d.start && (r = s, i = d.start - l), l += s.length), r && o) {
                        if (s = n({
                                startNode: r,
                                startNodeIndex: i,
                                endNode: o,
                                endNodeIndex: a,
                                innerNodes: c,
                                match: d.text,
                                matchIndex: u
                            }), l -= o.length - a, r = null, o = null, c = [], d = t.shift(), u++, !d)break
                    } else {
                        if ((!T[s.nodeName] || S[s.nodeName]) && s.firstChild) {
                            s = s.firstChild;
                            continue
                        }
                        if (s.nextSibling) {
                            s = s.nextSibling;
                            continue
                        }
                    }
                    for (; ;) {
                        if (s.nextSibling) {
                            s = s.nextSibling;
                            break
                        }
                        if (s.parentNode === e)break e;
                        s = s.parentNode
                    }
                }
            }

            function i(e) {
                function t(t, n) {
                    var r = w[n];
                    r.stencil || (r.stencil = e(r));
                    var o = r.stencil.cloneNode(!1);
                    return o.setAttribute("data-mce-index", n), t && o.appendChild(b.doc.createTextNode(t)), o
                }

                return function (e) {
                    var n, r, o, i = e.startNode, a = e.endNode, c = e.matchIndex, l = b.doc;
                    if (i === a) {
                        var s = i;
                        o = s.parentNode, e.startNodeIndex > 0 && (n = l.createTextNode(s.data.substring(0, e.startNodeIndex)), o.insertBefore(n, s));
                        var d = t(e.match, c);
                        return o.insertBefore(d, s), e.endNodeIndex < s.length && (r = l.createTextNode(s.data.substring(e.endNodeIndex)), o.insertBefore(r, s)), s.parentNode.removeChild(s), d
                    }
                    n = l.createTextNode(i.data.substring(0, e.startNodeIndex)), r = l.createTextNode(a.data.substring(e.endNodeIndex));
                    for (var u = t(i.data.substring(e.startNodeIndex), c), f = [], h = 0, g = e.innerNodes.length; g > h; ++h) {
                        var m = e.innerNodes[h], p = t(m.data, c);
                        m.parentNode.replaceChild(p, m), f.push(p)
                    }
                    var v = t(a.data.substring(0, e.endNodeIndex), c);
                    return o = i.parentNode, o.insertBefore(n, i), o.insertBefore(u, i), o.removeChild(i), o = a.parentNode, o.insertBefore(v, a), o.insertBefore(r, a), o.removeChild(a), v
                }
            }

            function a(e) {
                var t = e.parentNode;
                t.insertBefore(e.firstChild, e), e.parentNode.removeChild(e)
            }

            function c(t) {
                var n = e.getElementsByTagName("*"), r = [];
                t = "number" == typeof t ? "" + t : null;
                for (var o = 0; o < n.length; o++) {
                    var i = n[o], a = i.getAttribute("data-mce-index");
                    null !== a && a.length && (a === t || null === t) && r.push(i)
                }
                return r
            }

            function l(e) {
                for (var t = w.length; t--;)if (w[t] === e)return t;
                return -1
            }

            function s(e) {
                var t = [];
                return d(function (n, r) {
                    e(n, r) && t.push(n)
                }), w = t, this
            }

            function d(e) {
                for (var t = 0, n = w.length; n > t && e(w[t], t) !== !1; t++);
                return this
            }

            function u(t) {
                return w.length && o(e, w, i(t)), this
            }

            function f(e, t) {
                if (y && e.global)for (; k = e.exec(y);)w.push(n(k, t));
                return this
            }

            function h(e) {
                var t, n = c(e ? l(e) : null);
                for (t = n.length; t--;)a(n[t]);
                return this
            }

            function g(e) {
                return w[e.getAttribute("data-mce-index")]
            }

            function m(e) {
                return c(l(e))[0]
            }

            function p(e, t, n) {
                return w.push({start: e, end: e + t, text: y.substr(e, t), data: n}), this
            }

            function v(e) {
                var n = c(l(e)), r = t.dom.createRng();
                return r.setStartBefore(n[0]), r.setEndAfter(n[n.length - 1]), r
            }

            function x(e, n) {
                var r = v(e);
                return r.deleteContents(), n.length > 0 && r.insertNode(t.dom.doc.createTextNode(n)), r
            }

            function N() {
                return w.splice(0, w.length), h(), this
            }

            var k, w = [], y, b = t.dom, S, T, B;
            return S = t.schema.getBlockElements(), T = t.schema.getWhiteSpaceElements(), B = t.schema.getShortEndedElements(), y = r(e), {
                text: y,
                matches: w,
                each: d,
                filter: s,
                reset: N,
                matchFromElement: g,
                elementFromMatch: m,
                find: f,
                add: p,
                wrap: u,
                unwrap: h,
                replace: x,
                rangeFromMatch: v,
                indexOf: l
            }
        }
    }), r(s, [l, d, u, f, h, g, m, p], function (e, t, n, r, o, i, a, c) {
        t.add("spellchecker", function (t, l) {
            function s() {
                return T.textMatcher || (T.textMatcher = new e(t.getBody(), t)), T.textMatcher
            }

            function d(e, t) {
                var r = [];
                return n.each(t, function (e) {
                    r.push({selectable: !0, text: e.name, data: e.value})
                }), r
            }

            function u(e) {
                for (var t in e)return !1;
                return !0
            }

            function f(e, i) {
                var a = [], c = B[e];
                n.each(c, function (e) {
                    a.push({
                        text: e, onclick: function () {
                            t.insertContent(t.dom.encode(e)), t.dom.remove(i), v()
                        }
                    })
                }), a.push({text: "-"}), E && a.push({
                    text: "Add to Dictionary", onclick: function () {
                        x(e, i)
                    }
                }), a.push.apply(a, [{
                    text: "Ignore", onclick: function () {
                        N(e, i)
                    }
                }, {
                    text: "Ignore all", onclick: function () {
                        N(e, i, !0)
                    }
                }, {text: "Finish", onclick: k}]), I = new r({
                    items: a,
                    context: "contextmenu",
                    onautohide: function (e) {
                        -1 != e.target.className.indexOf("spellchecker") && e.preventDefault()
                    },
                    onhide: function () {
                        I.remove(), I = null
                    }
                }), I.renderTo(document.body);
                var l = o.DOM.getPos(t.getContentAreaContainer()), s = t.dom.getPos(i[0]), d = t.dom.getRoot();
                "BODY" == d.nodeName ? (s.x -= d.ownerDocument.documentElement.scrollLeft || d.scrollLeft, s.y -= d.ownerDocument.documentElement.scrollTop || d.scrollTop) : (s.x -= d.scrollLeft, s.y -= d.scrollTop), l.x += s.x, l.y += s.y, I.moveTo(l.x, l.y + i[0].offsetHeight)
            }

            function h() {
                return t.getParam("spellchecker_wordchar_pattern") || new RegExp('[^\\s!"#$%&()*+,-./:;<=>?@[\\]^_{|}`\xa7\xa9\xab\xae\xb1\xb6\xb7\xb8\xbb\xbc\xbd\xbe\xbf\xd7\xf7\xa4\u201d\u201c\u201e]+', "g")
            }

            function g(e, t, r, o) {
                var s = {method: e}, d = "";
                "spellcheck" == e && (s.text = t, s.lang = M.spellchecker_language), "addToDictionary" == e && (s.word = t), n.each(s, function (e, t) {
                    d && (d += "&"), d += t + "=" + encodeURIComponent(e)
                }), i.send({
                    url: new a(l).toAbsolute(M.spellchecker_rpc_url),
                    type: "post",
                    content_type: "application/x-www-form-urlencoded",
                    data: d,
                    success: function (e) {
                        e = c.parse(e), e ? e.error ? o(e.error) : r(e) : o("Sever response wasn't proper JSON.")
                    },
                    error: function (e, t) {
                        o("Spellchecker request error: " + t.status)
                    }
                })
            }

            function m(e, t, n, r) {
                var o = M.spellchecker_callback || g;
                o.call(T, e, t, n, r)
            }

            function p() {
                function e(e) {
                    var n;
                    return e.words ? (E = !!e.dictionary, n = e.words) : n = e, t.setProgressState(!1), u(n) ? (t.windowManager.alert("No misspellings found"), void(C = !1)) : (B = n, s().find(h()).filter(function (e) {
                        return !!n[e.text]
                    }).wrap(function (e) {
                        return t.dom.create("span", {
                            "class": "mce-spellchecker-word",
                            "data-mce-bogus": 1,
                            "data-mce-word": e.text
                        })
                    }), void t.fire("SpellcheckStart"))
                }

                function n(e) {
                    t.windowManager.alert(e), t.setProgressState(!1), k()
                }

                return C ? void k() : (k(), C = !0, t.setProgressState(!0), m("spellcheck", s().text, e, n), void t.focus())
            }

            function v() {
                t.dom.select("span.mce-spellchecker-word").length || k()
            }

            function x(e, n) {
                t.setProgressState(!0), m("addToDictionary", e, function () {
                    t.setProgressState(!1), t.dom.remove(n, !0), v()
                }, function (e) {
                    t.windowManager.alert(e), t.setProgressState(!1)
                })
            }

            function N(e, r, o) {
                t.selection.collapse(), o ? n.each(t.dom.select("span.mce-spellchecker-word"), function (n) {
                    n.getAttribute("data-mce-word") == e && t.dom.remove(n, !0)
                }) : t.dom.remove(r, !0), v()
            }

            function k() {
                s().reset(), T.textMatcher = null, C && (C = !1, t.fire("SpellcheckEnd"))
            }

            function w(e) {
                var t = e.getAttribute("data-mce-index");
                return "number" == typeof t ? "" + t : t
            }

            function y(e) {
                var r, o = [];
                if (r = n.toArray(t.getBody().getElementsByTagName("span")), r.length)for (var i = 0; i < r.length; i++) {
                    var a = w(r[i]);
                    null !== a && a.length && a === e.toString() && o.push(r[i])
                }
                return o
            }

            function b(e) {
                var t = M.spellchecker_language;
                e.control.items().each(function (e) {
                    e.active(e.settings.data === t)
                })
            }

            var S, T = this, B, C, I, M = t.settings, E, P = M.spellchecker_languages || "English=en,Danish=da,Dutch=nl,Finnish=fi,French=fr_FR,German=de,Italian=it,Polish=pl,Portuguese=pt_BR,Spanish=es,Swedish=sv";
            S = d("Language", n.map(P.split(","), function (e) {
                var t = e.split("=");
                return {name: t[0], value: t[1]}
            })), t.on("click", function (e) {
                var n = e.target;
                if ("mce-spellchecker-word" == n.className) {
                    e.preventDefault();
                    var r = y(w(n));
                    if (r.length > 0) {
                        var o = t.dom.createRng();
                        o.setStartBefore(r[0]), o.setEndAfter(r[r.length - 1]), t.selection.setRng(o), f(n.getAttribute("data-mce-word"), r)
                    }
                }
            }), t.addMenuItem("spellchecker", {
                text: "Spellcheck",
                context: "tools",
                onclick: p,
                selectable: !0,
                onPostRender: function () {
                    var e = this;
                    t.on("SpellcheckStart SpellcheckEnd", function () {
                        e.active(C)
                    })
                }
            });
            var _ = {
                tooltip: "Spellcheck", onclick: p, onPostRender: function () {
                    var e = this;
                    t.on("SpellcheckStart SpellcheckEnd", function () {
                        e.active(C)
                    })
                }
            };
            S.length > 1 && (_.type = "splitbutton", _.menu = S, _.onshow = b, _.onselect = function (e) {
                M.spellchecker_language = e.control.settings.data
            }), t.addButton("spellchecker", _), t.addCommand("mceSpellCheck", p), t.on("remove", function () {
                I && (I.remove(), I = null)
            }), t.on("change", v), this.getTextMatcher = s, this.getWordCharPattern = h, this.getLanguage = function () {
                return M.spellchecker_language
            }, M.spellchecker_language = M.spellchecker_language || M.language || "en"
        })
    }), a([l, s])
}(this);
tinymce.PluginManager.add("tabfocus", function (e) {
    function n(e) {
        9 !== e.keyCode || e.ctrlKey || e.altKey || e.metaKey || e.preventDefault()
    }

    function t(n) {
        function t(n) {
            function t(e) {
                return "BODY" === e.nodeName || "hidden" != e.type && "none" != e.style.display && "hidden" != e.style.visibility && t(e.parentNode)
            }

            function r(e) {
                return e.tabIndex || "INPUT" == e.nodeName || "TEXTAREA" == e.nodeName
            }

            function c(e) {
                return !r(e) && "-1" != e.getAttribute("tabindex") && t(e)
            }

            if (u = i.select(":input:enabled,*[tabindex]:not(iframe)"), o(u, function (n, t) {
                    return n.id == e.id ? (a = t, !1) : void 0
                }), n > 0) {
                for (d = a + 1; d < u.length; d++)if (c(u[d]))return u[d]
            } else for (d = a - 1; d >= 0; d--)if (c(u[d]))return u[d];
            return null
        }

        var a, u, c, d;
        if (!(9 !== n.keyCode || n.ctrlKey || n.altKey || n.metaKey) && (c = r(e.getParam("tab_focus", e.getParam("tabfocus_elements", ":prev,:next"))), 1 == c.length && (c[1] = c[0], c[0] = ":prev"), u = n.shiftKey ? ":prev" == c[0] ? t(-1) : i.get(c[0]) : ":next" == c[1] ? t(1) : i.get(c[1]))) {
            var y = tinymce.get(u.id || u.name);
            u.id && y ? y.focus() : window.setTimeout(function () {
                tinymce.Env.webkit || window.focus(), u.focus()
            }, 10), n.preventDefault()
        }
    }

    var i = tinymce.DOM, o = tinymce.each, r = tinymce.explode;
    e.on("init", function () {
        e.inline && tinymce.DOM.setAttrib(e.getBody(), "tabIndex", null)
    }), e.on("keyup", n), tinymce.Env.gecko ? e.on("keypress keydown", t) : e.on("keydown", t)
});
!function (e, t) {
    "use strict";
    function n(e, t) {
        for (var n, o = [], a = 0; a < e.length; ++a) {
            if (n = i[e[a]] || l(e[a]), !n)throw"module definition dependecy not found: " + e[a];
            o.push(n)
        }
        t.apply(null, o)
    }

    function o(e, o, a) {
        if ("string" != typeof e)throw"invalid module definition, module id must be defined and be a string";
        if (o === t)throw"invalid module definition, dependencies must be specified";
        if (a === t)throw"invalid module definition, definition function must be specified";
        n(o, function () {
            i[e] = a.apply(null, arguments)
        })
    }

    function a(e) {
        return !!i[e]
    }

    function l(t) {
        for (var n = e, o = t.split(/[.\/]/), a = 0; a < o.length; ++a) {
            if (!n[o[a]])return;
            n = n[o[a]]
        }
        return n
    }

    function r(n) {
        for (var o = 0; o < n.length; o++) {
            for (var a = e, l = n[o], r = l.split(/[.\/]/), s = 0; s < r.length - 1; ++s)a[r[s]] === t && (a[r[s]] = {}), a = a[r[s]];
            a[r[r.length - 1]] = i[l]
        }
    }

    var i = {}, s = "tinymce/tableplugin/TableGrid", c = "tinymce/util/Tools", d = "tinymce/Env", u = "tinymce/tableplugin/Quirks", m = "tinymce/util/VK", f = "tinymce/tableplugin/CellSelection", g = "tinymce/dom/TreeWalker", p = "tinymce/tableplugin/Plugin", h = "tinymce/PluginManager";
    o(s, [c, d], function (e, n) {
        function o(e, t) {
            return parseInt(e.getAttribute(t) || 1, 10)
        }

        var a = e.each;
        return function (l, r) {
            function i() {
                var e = 0;
                M = [], _ = 0, a(["thead", "tbody", "tfoot"], function (t) {
                    var n = H.select("> " + t + " tr", r);
                    a(n, function (n, l) {
                        l += e, a(H.select("> td, > th", n), function (e, n) {
                            var a, r, i, s;
                            if (M[l])for (; M[l][n];)n++;
                            for (i = o(e, "rowspan"), s = o(e, "colspan"), r = l; l + i > r; r++)for (M[r] || (M[r] = []), a = n; n + s > a; a++)M[r][a] = {
                                part: t,
                                real: r == l && a == n,
                                elm: e,
                                rowspan: i,
                                colspan: s
                            };
                            _ = Math.max(_, n + 1)
                        })
                    }), e += n.length
                })
            }

            function s(e, t) {
                return e = e.cloneNode(t), e.removeAttribute("id"), e
            }

            function c(e, t) {
                var n;
                return n = M[t], n ? n[e] : void 0
            }

            function d(e, t, n) {
                e && (n = parseInt(n, 10), 1 === n ? e.removeAttribute(t, 1) : e.setAttribute(t, n, 1))
            }

            function u(e) {
                return e && (H.hasClass(e.elm, "mce-item-selected") || e == E)
            }

            function m() {
                var e = [];
                return a(r.rows, function (t) {
                    a(t.cells, function (n) {
                        return H.hasClass(n, "mce-item-selected") || E && n == E.elm ? (e.push(t), !1) : void 0
                    })
                }), e
            }

            function f() {
                var e = H.createRng();
                e.setStartAfter(r), e.setEndAfter(r), L.setRng(e), H.remove(r)
            }

            function g(t) {
                var o, r = {};
                return l.settings.table_clone_elements !== !1 && (r = e.makeMap((l.settings.table_clone_elements || "strong em b i span font h1 h2 h3 h4 h5 h6 p div").toUpperCase(), /[ ,]/)), e.walk(t, function (e) {
                    var l;
                    return 3 == e.nodeType ? (a(H.getParents(e.parentNode, null, t).reverse(), function (e) {
                        r[e.nodeName] && (e = s(e, !1), o ? l && l.appendChild(e) : o = l = e, l = e)
                    }), l && (l.innerHTML = n.ie ? "&nbsp;" : '<br data-mce-bogus="1" />'), !1) : void 0
                }, "childNodes"), t = s(t, !1), d(t, "rowSpan", 1), d(t, "colSpan", 1), o ? t.appendChild(o) : (!n.ie || n.ie > 10) && (t.innerHTML = '<br data-mce-bogus="1" />'), t
            }

            function p() {
                var e = H.createRng(), t;
                return a(H.select("tr", r), function (e) {
                    0 === e.cells.length && H.remove(e)
                }), 0 === H.select("tr", r).length ? (e.setStartBefore(r), e.setEndBefore(r), L.setRng(e), void H.remove(r)) : (a(H.select("thead,tbody,tfoot", r), function (e) {
                    0 === e.rows.length && H.remove(e)
                }), i(), void(D && (t = M[Math.min(M.length - 1, D.y)], t && (L.select(t[Math.min(t.length - 1, D.x)].elm, !0), L.collapse(!0)))))
            }

            function h(e, t, n, o) {
                var a, l, r, i, s;
                for (a = M[t][e].elm.parentNode, r = 1; n >= r; r++)if (a = H.getNext(a, "tr")) {
                    for (l = e; l >= 0; l--)if (s = M[t + r][l].elm, s.parentNode == a) {
                        for (i = 1; o >= i; i++)H.insertAfter(g(s), s);
                        break
                    }
                    if (-1 == l)for (i = 1; o >= i; i++)a.insertBefore(g(a.cells[0]), a.cells[0])
                }
            }

            function b() {
                a(M, function (e, t) {
                    a(e, function (e, n) {
                        var a, l, r;
                        if (u(e) && (e = e.elm, a = o(e, "colspan"), l = o(e, "rowspan"), a > 1 || l > 1)) {
                            for (d(e, "rowSpan", 1), d(e, "colSpan", 1), r = 0; a - 1 > r; r++)H.insertAfter(g(e), e);
                            h(n, t, l - 1, a)
                        }
                    })
                })
            }

            function v(t, n, o) {
                var l, r, s, m, f, g, h, v, x, y, w;
                if (t ? (l = T(t), r = l.x, s = l.y, m = r + (n - 1), f = s + (o - 1)) : (D = I = null, a(M, function (e, t) {
                        a(e, function (e, n) {
                            u(e) && (D || (D = {x: n, y: t}), I = {x: n, y: t})
                        })
                    }), D && (r = D.x, s = D.y, m = I.x, f = I.y)), v = c(r, s), x = c(m, f), v && x && v.part == x.part) {
                    for (b(), i(), v = c(r, s).elm, d(v, "colSpan", m - r + 1), d(v, "rowSpan", f - s + 1), h = s; f >= h; h++)for (g = r; m >= g; g++)M[h] && M[h][g] && (t = M[h][g].elm, t != v && (y = e.grep(t.childNodes), a(y, function (e) {
                        v.appendChild(e)
                    }), y.length && (y = e.grep(v.childNodes), w = 0, a(y, function (e) {
                        "BR" == e.nodeName && H.getAttrib(e, "data-mce-bogus") && w++ < y.length - 1 && v.removeChild(e)
                    })), H.remove(t)));
                    p()
                }
            }

            function x(e) {
                var n, l, r, i, c, m, f, p, h;
                if (a(M, function (t, o) {
                        return a(t, function (t) {
                            return u(t) && (t = t.elm, c = t.parentNode, m = s(c, !1), n = o, e) ? !1 : void 0
                        }), e ? !n : void 0
                    }), n !== t) {
                    for (i = 0; i < M[0].length; i++)if (M[n][i] && (l = M[n][i].elm, l != r)) {
                        if (e) {
                            if (n > 0 && M[n - 1][i] && (p = M[n - 1][i].elm, h = o(p, "rowSpan"), h > 1)) {
                                d(p, "rowSpan", h + 1);
                                continue
                            }
                        } else if (h = o(l, "rowspan"), h > 1) {
                            d(l, "rowSpan", h + 1);
                            continue
                        }
                        f = g(l), d(f, "colSpan", l.colSpan), m.appendChild(f), r = l
                    }
                    m.hasChildNodes() && (e ? c.parentNode.insertBefore(m, c) : H.insertAfter(m, c))
                }
            }

            function y(e) {
                var t, n;
                a(M, function (n) {
                    return a(n, function (n, o) {
                        return u(n) && (t = o, e) ? !1 : void 0
                    }), e ? !t : void 0
                }), a(M, function (a, l) {
                    var r, i, s;
                    a[t] && (r = a[t].elm, r != n && (s = o(r, "colspan"), i = o(r, "rowspan"), 1 == s ? e ? (r.parentNode.insertBefore(g(r), r), h(t, l, i - 1, s)) : (H.insertAfter(g(r), r), h(t, l, i - 1, s)) : d(r, "colSpan", r.colSpan + 1), n = r))
                })
            }

            function w() {
                var t = [];
                a(M, function (n) {
                    a(n, function (n, l) {
                        u(n) && -1 === e.inArray(t, l) && (a(M, function (e) {
                            var t = e[l].elm, n;
                            n = o(t, "colSpan"), n > 1 ? d(t, "colSpan", n - 1) : H.remove(t)
                        }), t.push(l))
                    })
                }), p()
            }

            function C() {
                function e(e) {
                    var t, n;
                    a(e.cells, function (e) {
                        var n = o(e, "rowSpan");
                        n > 1 && (d(e, "rowSpan", n - 1), t = T(e), h(t.x, t.y, 1, 1))
                    }), t = T(e.cells[0]), a(M[t.y], function (e) {
                        var t;
                        e = e.elm, e != n && (t = o(e, "rowSpan"), 1 >= t ? H.remove(e) : d(e, "rowSpan", t - 1), n = e)
                    })
                }

                var t;
                t = m(), a(t.reverse(), function (t) {
                    e(t)
                }), p()
            }

            function R() {
                var e = m();
                return H.remove(e), p(), e
            }

            function N() {
                var e = m();
                return a(e, function (t, n) {
                    e[n] = s(t, !0)
                }), e
            }

            function S(e, t) {
                var n = m(), o = n[t ? 0 : n.length - 1], l = o.cells.length;
                e && (a(M, function (e) {
                    var t;
                    return l = 0, a(e, function (e) {
                        e.real && (l += e.colspan), e.elm.parentNode == o && (t = 1)
                    }), t ? !1 : void 0
                }), t || e.reverse(), a(e, function (e) {
                    var n, a = e.cells.length, r;
                    for (n = 0; a > n; n++)r = e.cells[n], d(r, "colSpan", 1), d(r, "rowSpan", 1);
                    for (n = a; l > n; n++)e.appendChild(g(e.cells[a - 1]));
                    for (n = l; a > n; n++)H.remove(e.cells[n]);
                    t ? o.parentNode.insertBefore(e, o) : H.insertAfter(e, o)
                }), H.removeClass(H.select("td.mce-item-selected,th.mce-item-selected"), "mce-item-selected"))
            }

            function T(e) {
                var t;
                return a(M, function (n, o) {
                    return a(n, function (n, a) {
                        return n.elm == e ? (t = {x: a, y: o}, !1) : void 0
                    }), !t
                }), t
            }

            function P(e) {
                D = T(e)
            }

            function A() {
                var e, t;
                return e = t = 0, a(M, function (n, o) {
                    a(n, function (n, a) {
                        var l, r;
                        u(n) && (n = M[o][a], a > e && (e = a), o > t && (t = o), n.real && (l = n.colspan - 1, r = n.rowspan - 1, l && a + l > e && (e = a + l), r && o + r > t && (t = o + r)))
                    })
                }), {x: e, y: t}
            }

            function k(e) {
                var t, n, o, a, l, r, i, s, c, d;
                if (I = T(e), D && I) {
                    for (t = Math.min(D.x, I.x), n = Math.min(D.y, I.y), o = Math.max(D.x, I.x), a = Math.max(D.y, I.y), l = o, r = a, d = n; r >= d; d++)e = M[d][t], e.real || t - (e.colspan - 1) < t && (t -= e.colspan - 1);
                    for (c = t; l >= c; c++)e = M[n][c], e.real || n - (e.rowspan - 1) < n && (n -= e.rowspan - 1);
                    for (d = n; a >= d; d++)for (c = t; o >= c; c++)e = M[d][c], e.real && (i = e.colspan - 1, s = e.rowspan - 1, i && c + i > l && (l = c + i), s && d + s > r && (r = d + s));
                    for (H.removeClass(H.select("td.mce-item-selected,th.mce-item-selected"), "mce-item-selected"), d = n; r >= d; d++)for (c = t; l >= c; c++)M[d][c] && H.addClass(M[d][c].elm, "mce-item-selected")
                }
            }

            function B(e, t) {
                var n, o, a;
                n = T(e), o = n.y * _ + n.x;
                do {
                    if (o += t, a = c(o % _, Math.floor(o / _)), !a)break;
                    if (a.elm != e)return L.select(a.elm, !0), H.isEmpty(a.elm) && L.collapse(!0), !0
                } while (a.elm == e);
                return !1
            }

            var M, _, D, I, E, L = l.selection, H = L.dom;
            r = r || H.getParent(L.getStart(), "table"), i(), E = H.getParent(L.getStart(), "th,td"), E && (D = T(E), I = A(), E = c(D.x, D.y)), e.extend(this, {
                deleteTable: f,
                split: b,
                merge: v,
                insertRow: x,
                insertCol: y,
                deleteCols: w,
                deleteRows: C,
                cutRows: R,
                copyRows: N,
                pasteRows: S,
                getPos: T,
                setStartCell: P,
                setEndCell: k,
                moveRelIdx: B,
                refresh: i
            })
        }
    }), o(u, [m, d, c], function (e, t, n) {
        function o(e, t) {
            return parseInt(e.getAttribute(t) || 1, 10)
        }

        var a = n.each;
        return function (n) {
            function l() {
                function t(t) {
                    function l(e, o) {
                        var a = e ? "previousSibling" : "nextSibling", l = n.dom.getParent(o, "tr"), i = l[a];
                        if (i)return h(n, o, i, e), t.preventDefault(), !0;
                        var d = n.dom.getParent(l, "table"), u = l.parentNode, m = u.nodeName.toLowerCase();
                        if ("tbody" === m || m === (e ? "tfoot" : "thead")) {
                            var f = r(e, d, u, "tbody");
                            if (null !== f)return s(e, f, o)
                        }
                        return c(e, l, a, d)
                    }

                    function r(e, t, o, a) {
                        var l = n.dom.select(">" + a, t), r = l.indexOf(o);
                        if (e && 0 === r || !e && r === l.length - 1)return i(e, t);
                        if (-1 === r) {
                            var s = "thead" === o.tagName.toLowerCase() ? 0 : l.length - 1;
                            return l[s]
                        }
                        return l[r + (e ? -1 : 1)]
                    }

                    function i(e, t) {
                        var o = e ? "thead" : "tfoot", a = n.dom.select(">" + o, t);
                        return 0 !== a.length ? a[0] : null
                    }

                    function s(e, o, a) {
                        var l = d(o, e);
                        return l && h(n, a, l, e), t.preventDefault(), !0
                    }

                    function c(e, o, a, r) {
                        var i = r[a];
                        if (i)return u(i), !0;
                        var s = n.dom.getParent(r, "td,th");
                        if (s)return l(e, s, t);
                        var c = d(o, !e);
                        return u(c), t.preventDefault(), !1
                    }

                    function d(e, t) {
                        var o = e && e[t ? "lastChild" : "firstChild"];
                        return o && "BR" === o.nodeName ? n.dom.getParent(o, "td,th") : o
                    }

                    function u(e) {
                        n.selection.setCursorLocation(e, 0)
                    }

                    function m() {
                        return x == e.UP || x == e.DOWN
                    }

                    function f(e) {
                        var t = e.selection.getNode(), n = e.dom.getParent(t, "tr");
                        return null !== n
                    }

                    function g(e) {
                        for (var t = 0, n = e; n.previousSibling;)n = n.previousSibling, t += o(n, "colspan");
                        return t
                    }

                    function p(e, t) {
                        var n = 0, l = 0;
                        return a(e.children, function (e, a) {
                            return n += o(e, "colspan"), l = a, n > t ? !1 : void 0
                        }), l
                    }

                    function h(e, t, o, a) {
                        var l = g(n.dom.getParent(t, "td,th")), r = p(o, l), i = o.childNodes[r], s = d(i, a);
                        u(s || i)
                    }

                    function b(e) {
                        var t = n.selection.getNode(), o = n.dom.getParent(t, "td,th"), a = n.dom.getParent(e, "td,th");
                        return o && o !== a && v(o, a)
                    }

                    function v(e, t) {
                        return n.dom.getParent(e, "TABLE") === n.dom.getParent(t, "TABLE")
                    }

                    var x = t.keyCode;
                    if (m() && f(n)) {
                        var y = n.selection.getNode();
                        setTimeout(function () {
                            b(y) && l(!t.shiftKey && x === e.UP, y, t)
                        }, 0)
                    }
                }

                n.on("KeyDown", function (e) {
                    t(e)
                })
            }

            function r() {
                function e(e, t) {
                    var n = t.ownerDocument, o = n.createRange(), a;
                    return o.setStartBefore(t), o.setEnd(e.endContainer, e.endOffset), a = n.createElement("body"), a.appendChild(o.cloneContents()), 0 === a.innerHTML.replace(/<(br|img|object|embed|input|textarea)[^>]*>/gi, "-").replace(/<[^>]+>/g, "").length
                }

                n.on("KeyDown", function (t) {
                    var o, a, l = n.dom;
                    (37 == t.keyCode || 38 == t.keyCode) && (o = n.selection.getRng(), a = l.getParent(o.startContainer, "table"), a && n.getBody().firstChild == a && e(o, a) && (o = l.createRng(), o.setStartBefore(a), o.setEndBefore(a), n.selection.setRng(o), t.preventDefault()))
                })
            }

            function i() {
                n.on("KeyDown SetContent VisualAid", function () {
                    var e;
                    for (e = n.getBody().lastChild; e; e = e.previousSibling)if (3 == e.nodeType) {
                        if (e.nodeValue.length > 0)break
                    } else if (1 == e.nodeType && ("BR" == e.tagName || !e.getAttribute("data-mce-bogus")))break;
                    e && "TABLE" == e.nodeName && (n.settings.forced_root_block ? n.dom.add(n.getBody(), n.settings.forced_root_block, n.settings.forced_root_block_attrs, t.ie && t.ie < 11 ? "&nbsp;" : '<br data-mce-bogus="1" />') : n.dom.add(n.getBody(), "br", {"data-mce-bogus": "1"}))
                }), n.on("PreProcess", function (e) {
                    var t = e.node.lastChild;
                    t && ("BR" == t.nodeName || 1 == t.childNodes.length && ("BR" == t.firstChild.nodeName || "\xa0" == t.firstChild.nodeValue)) && t.previousSibling && "TABLE" == t.previousSibling.nodeName && n.dom.remove(t)
                })
            }

            function s() {
                function e(e, t, n, o) {
                    var a = 3, l = e.dom.getParent(t.startContainer, "TABLE"), r, i, s;
                    return l && (r = l.parentNode), i = t.startContainer.nodeType == a && 0 === t.startOffset && 0 === t.endOffset && o && ("TR" == n.nodeName || n == r), s = ("TD" == n.nodeName || "TH" == n.nodeName) && !o, i || s
                }

                function t() {
                    var t = n.selection.getRng(), o = n.selection.getNode(), a = n.dom.getParent(t.startContainer, "TD,TH");
                    if (e(n, t, o, a)) {
                        a || (a = o);
                        for (var l = a.lastChild; l.lastChild;)l = l.lastChild;
                        3 == l.nodeType && (t.setEnd(l, l.data.length), n.selection.setRng(t))
                    }
                }

                n.on("KeyDown", function () {
                    t()
                }), n.on("MouseDown", function (e) {
                    2 != e.button && t()
                })
            }

            function c() {
                n.on("keydown", function (t) {
                    if ((t.keyCode == e.DELETE || t.keyCode == e.BACKSPACE) && !t.isDefaultPrevented()) {
                        var o = n.dom.getParent(n.selection.getStart(), "table");
                        if (o) {
                            for (var a = n.dom.select("td,th", o), l = a.length; l--;)if (!n.dom.hasClass(a[l], "mce-item-selected"))return;
                            t.preventDefault(), n.execCommand("mceTableDelete")
                        }
                    }
                })
            }

            c(), t.webkit && (l(), s()), t.gecko && (r(), i()), t.ie > 10 && (r(), i())
        }
    }), o(f, [s, g, c], function (e, t, n) {
        return function (o) {
            function a() {
                o.getBody().style.webkitUserSelect = "", d && (o.dom.removeClass(o.dom.select("td.mce-item-selected,th.mce-item-selected"), "mce-item-selected"), d = !1)
            }

            function l(t) {
                var n, a, l = t.target;
                if (s && (i || l != s) && ("TD" == l.nodeName || "TH" == l.nodeName)) {
                    a = r.getParent(l, "table"), a == c && (i || (i = new e(o, a), i.setStartCell(s), o.getBody().style.webkitUserSelect = "none"), i.setEndCell(l), d = !0), n = o.selection.getSel();
                    try {
                        n.removeAllRanges ? n.removeAllRanges() : n.empty()
                    } catch (u) {
                    }
                    t.preventDefault()
                }
            }

            var r = o.dom, i, s, c, d = !0;
            return o.on("MouseDown", function (e) {
                2 != e.button && (a(), s = r.getParent(e.target, "td,th"), c = r.getParent(s, "table"))
            }), o.on("mouseover", l), o.on("remove", function () {
                r.unbind(o.getDoc(), "mouseover", l)
            }), o.on("MouseUp", function () {
                function e(e, o) {
                    var l = new t(e, e);
                    do {
                        if (3 == e.nodeType && 0 !== n.trim(e.nodeValue).length)return void(o ? a.setStart(e, 0) : a.setEnd(e, e.nodeValue.length));
                        if ("BR" == e.nodeName)return void(o ? a.setStartBefore(e) : a.setEndBefore(e))
                    } while (e = o ? l.next() : l.prev())
                }

                var a, l = o.selection, d, u, m, f;
                if (s) {
                    if (i && (o.getBody().style.webkitUserSelect = ""), d = r.select("td.mce-item-selected,th.mce-item-selected"), d.length > 0) {
                        a = r.createRng(), m = d[0], a.setStartBefore(m), a.setEndAfter(m), e(m, 1), u = new t(m, r.getParent(d[0], "table"));
                        do if ("TD" == m.nodeName || "TH" == m.nodeName) {
                            if (!r.hasClass(m, "mce-item-selected"))break;
                            f = m
                        } while (m = u.next());
                        e(f), l.setRng(a)
                    }
                    o.nodeChanged(), s = i = c = null
                }
            }), o.on("KeyUp Drop", function () {
                a(), s = i = c = null
            }), {clear: a}
        }
    }), o(p, [s, u, f, c, g, d, h], function (e, t, n, o, a, l, r) {
        function i(a) {
            function r(e) {
                return e ? e.replace(/px$/, "") : ""
            }

            function i(e) {
                return /^[0-9]+$/.test(e) && (e += "px"), e
            }

            function c(e) {
                s("left center right".split(" "), function (t) {
                    a.formatter.remove("align" + t, {}, e)
                })
            }

            function d(e) {
                s("top middle bottom".split(" "), function (t) {
                    a.formatter.remove("valign" + t, {}, e)
                })
            }

            function u(e, t) {
                return o.each(t, function (t) {
                    t.textStyle = function () {
                        return a.formatter.getCssText({block: e, classes: [t.value]})
                    }
                }), t
            }

            function m(e, t, n, l) {
                var r, i = [];
                return o.each(a.settings[t] || l, function (t) {
                    var o = {text: t.text || t.title, value: t.value};
                    i.push(o), (e[n] === t.value || !r && t.selected) && (r = o)
                }), r && (e[n] = r.value, r.selected = !0), i
            }

            function f() {
                var e = a.dom, t, n, d, f, g;
                t = e.getParent(a.selection.getStart(), "table"), g = {
                    width: r(e.getStyle(t, "width") || e.getAttrib(t, "width")),
                    height: r(e.getStyle(t, "height") || e.getAttrib(t, "height")),
                    cellspacing: t ? e.getAttrib(t, "cellspacing") : "",
                    cellpadding: t ? e.getAttrib(t, "cellpadding") : "",
                    border: t ? e.getAttrib(t, "border") : "",
                    caption: !!e.select("caption", t)[0],
                    "class": e.getAttrib(t, "class")
                }, s("left center right".split(" "), function (e) {
                    a.formatter.matchNode(t, "align" + e) && (g.align = e)
                }), t || (n = {label: "Cols", name: "cols"}, d = {
                    label: "Rows",
                    name: "rows"
                }), a.settings.table_class_list && (g["class"] && (g["class"] = g["class"].replace(/\s*mce\-item\-table\s*/g, "")), f = {
                    name: "class",
                    type: "listbox",
                    label: "Class",
                    values: u("table", m(g, "table_class_list", "class"))
                }), a.windowManager.open({
                    title: "Table properties",
                    items: {
                        type: "form",
                        layout: "flex",
                        direction: "column",
                        labelGapCalc: "children",
                        items: [{
                            type: "form",
                            labelGapCalc: !1,
                            padding: 0,
                            layout: "grid",
                            columns: 2,
                            data: g,
                            defaults: {type: "textbox", maxWidth: 50},
                            items: [n, d, {label: "Width", name: "width"}, {
                                label: "Height",
                                name: "height"
                            }, {label: "Cell spacing", name: "cellspacing"}, {
                                label: "Cell padding",
                                name: "cellpadding"
                            }, {label: "Border", name: "border"}, {label: "Caption", name: "caption", type: "checkbox"}]
                        }, {
                            label: "Alignment",
                            name: "align",
                            type: "listbox",
                            text: "None",
                            values: [{text: "None", value: ""}, {text: "Left", value: "left"}, {
                                text: "Center",
                                value: "center"
                            }, {text: "Right", value: "right"}]
                        }, f]
                    },
                    onsubmit: function () {
                        var n;
                        g = o.extend(g, this.toJSON()), a.undoManager.transact(function () {
                            t || (t = v(g.cols || 1, g.rows || 1)), a.dom.setAttribs(t, {
                                cellspacing: g.cellspacing,
                                cellpadding: g.cellpadding,
                                border: g.border,
                                "class": g["class"]
                            }), a.dom.setStyles(t, {
                                width: i(g.width),
                                height: i(g.height)
                            }), n = e.select("caption", t)[0], n && !g.caption && e.remove(n), !n && g.caption && (n = e.create("caption"), n.innerHTML = l.ie ? "\xa0" : '<br data-mce-bogus="1"/>', t.insertBefore(n, t.firstChild)), c(t), g.align && a.formatter.apply("align" + g.align, {}, t), a.focus(), a.addVisual()
                        })
                    }
                })
            }

            function g(e, t) {
                a.windowManager.open({
                    title: "Merge cells",
                    body: [{label: "Cols", name: "cols", type: "textbox", value: "1", size: 10}, {
                        label: "Rows",
                        name: "rows",
                        type: "textbox",
                        value: "1",
                        size: 10
                    }],
                    onsubmit: function () {
                        var n = this.toJSON();
                        a.undoManager.transact(function () {
                            e.merge(t, n.cols, n.rows)
                        })
                    }
                })
            }

            function p() {
                var e = a.dom, t, n, l, f = [];
                f = a.dom.select("td.mce-item-selected,th.mce-item-selected"), t = a.dom.getParent(a.selection.getStart(), "td,th"), !f.length && t && f.push(t), t = t || f[0], t && (n = {
                    width: r(e.getStyle(t, "width") || e.getAttrib(t, "width")),
                    height: r(e.getStyle(t, "height") || e.getAttrib(t, "height")),
                    scope: e.getAttrib(t, "scope"),
                    "class": e.getAttrib(t, "class")
                }, n.type = t.nodeName.toLowerCase(), s("left center right".split(" "), function (e) {
                    a.formatter.matchNode(t, "align" + e) && (n.align = e)
                }), s("top middle bottom".split(" "), function (e) {
                    a.formatter.matchNode(t, "valign" + e) && (n.valign = e)
                }), a.settings.table_cell_class_list && (l = {
                    name: "class",
                    type: "listbox",
                    label: "Class",
                    values: u("td", m(n, "table_cell_class_list", "class"))
                }), a.windowManager.open({
                    title: "Cell properties",
                    items: {
                        type: "form",
                        layout: "flex",
                        direction: "column",
                        labelGapCalc: "children",
                        items: [{
                            type: "form",
                            data: n,
                            layout: "grid",
                            columns: 2,
                            labelGapCalc: !1,
                            padding: 0,
                            defaults: {type: "textbox", maxWidth: 50},
                            items: [{label: "Width", name: "width"}, {
                                label: "Height",
                                name: "height"
                            }, {
                                label: "Cell type",
                                name: "type",
                                type: "listbox",
                                text: "None",
                                minWidth: 90,
                                maxWidth: null,
                                values: [{text: "Cell", value: "td"}, {text: "Header cell", value: "th"}]
                            }, {
                                label: "Scope",
                                name: "scope",
                                type: "listbox",
                                text: "None",
                                minWidth: 90,
                                maxWidth: null,
                                values: [{text: "None", value: ""}, {text: "Row", value: "row"}, {
                                    text: "Column",
                                    value: "col"
                                }, {text: "Row group", value: "rowgroup"}, {text: "Column group", value: "colgroup"}]
                            }, {
                                label: "H Align",
                                name: "align",
                                type: "listbox",
                                text: "None",
                                minWidth: 90,
                                maxWidth: null,
                                values: [{text: "None", value: ""}, {text: "Left", value: "left"}, {
                                    text: "Center",
                                    value: "center"
                                }, {text: "Right", value: "right"}]
                            }, {
                                label: "V Align",
                                name: "valign",
                                type: "listbox",
                                text: "None",
                                minWidth: 90,
                                maxWidth: null,
                                values: [{text: "None", value: ""}, {text: "Top", value: "top"}, {
                                    text: "Middle",
                                    value: "middle"
                                }, {text: "Bottom", value: "bottom"}]
                            }]
                        }, l]
                    },
                    onsubmit: function () {
                        n = o.extend(n, this.toJSON()), a.undoManager.transact(function () {
                            s(f, function (t) {
                                a.dom.setAttribs(t, {
                                    scope: n.scope,
                                    "class": n["class"]
                                }), a.dom.setStyles(t, {
                                    width: i(n.width),
                                    height: i(n.height)
                                }), n.type && t.nodeName.toLowerCase() != n.type && (t = e.rename(t, n.type)), c(t), n.align && a.formatter.apply("align" + n.align, {}, t), d(t), n.valign && a.formatter.apply("valign" + n.valign, {}, t)
                            }), a.focus()
                        })
                    }
                }))
            }

            function h() {
                var e = a.dom, t, n, l, d, f, g = [];
                t = a.dom.getParent(a.selection.getStart(), "table"), n = a.dom.getParent(a.selection.getStart(), "td,th"), s(t.rows, function (t) {
                    s(t.cells, function (o) {
                        return e.hasClass(o, "mce-item-selected") || o == n ? (g.push(t), !1) : void 0
                    })
                }), l = g[0], l && (f = {
                    height: r(e.getStyle(l, "height") || e.getAttrib(l, "height")),
                    scope: e.getAttrib(l, "scope"),
                    "class": e.getAttrib(l, "class")
                }, f.type = l.parentNode.nodeName.toLowerCase(), s("left center right".split(" "), function (e) {
                    a.formatter.matchNode(l, "align" + e) && (f.align = e)
                }), a.settings.table_row_class_list && (d = {
                    name: "class",
                    type: "listbox",
                    label: "Class",
                    values: u("tr", m(f, "table_row_class_list", "class"))
                }), a.windowManager.open({
                    title: "Row properties",
                    items: {
                        type: "form",
                        data: f,
                        columns: 2,
                        defaults: {type: "textbox"},
                        items: [{
                            type: "listbox",
                            name: "type",
                            label: "Row type",
                            text: "None",
                            maxWidth: null,
                            values: [{text: "Header", value: "thead"}, {text: "Body", value: "tbody"}, {
                                text: "Footer",
                                value: "tfoot"
                            }]
                        }, {
                            type: "listbox",
                            name: "align",
                            label: "Alignment",
                            text: "None",
                            maxWidth: null,
                            values: [{text: "None", value: ""}, {text: "Left", value: "left"}, {
                                text: "Center",
                                value: "center"
                            }, {text: "Right", value: "right"}]
                        }, {label: "Height", name: "height"}, d]
                    },
                    onsubmit: function () {
                        var t, n, l;
                        f = o.extend(f, this.toJSON()), a.undoManager.transact(function () {
                            var o = f.type;
                            s(g, function (r) {
                                a.dom.setAttribs(r, {
                                    scope: f.scope,
                                    "class": f["class"]
                                }), a.dom.setStyles(r, {height: i(f.height)}), o != r.parentNode.nodeName.toLowerCase() && (t = e.getParent(r, "table"), n = r.parentNode, l = e.select(o, t)[0], l || (l = e.create(o), t.firstChild ? t.insertBefore(l, t.firstChild) : t.appendChild(l)), l.appendChild(r), n.hasChildNodes() || e.remove(n)), c(r), f.align && a.formatter.apply("align" + f.align, {}, r)
                            }), a.focus()
                        })
                    }
                }))
            }

            function b(e) {
                return function () {
                    a.execCommand(e)
                }
            }

            function v(e, t) {
                var n, o, r;
                for (r = '<table id="__mce"><tbody>', n = 0; t > n; n++) {
                    for (r += "<tr>", o = 0; e > o; o++)r += "<td>" + (l.ie ? " " : "<br>") + "</td>";
                    r += "</tr>"
                }
                r += "</tbody></table>", a.insertContent(r);
                var i = a.dom.get("__mce");
                return a.dom.setAttrib(i, "id", null), a.dom.setAttribs(i, a.settings.table_default_attributes || {}), a.dom.setStyles(i, a.settings.table_default_styles || {}), i
            }

            function x(e, t) {
                function n() {
                    e.disabled(!a.dom.getParent(a.selection.getStart(), t)), a.selection.selectorChanged(t, function (t) {
                        e.disabled(!t)
                    })
                }

                a.initialized ? n() : a.on("init", n)
            }

            function y() {
                x(this, "table")
            }

            function w() {
                x(this, "td,th")
            }

            function C() {
                var e = "";
                e = '<table role="grid" class="mce-grid mce-grid-border" aria-readonly="true">';
                for (var t = 0; 10 > t; t++) {
                    e += "<tr>";
                    for (var n = 0; 10 > n; n++)e += '<td role="gridcell" tabindex="-1"><a id="mcegrid' + (10 * t + n) + '" href="#" data-mce-x="' + n + '" data-mce-y="' + t + '"></a></td>';
                    e += "</tr>"
                }
                return e += "</table>", e += '<div class="mce-text-center" role="presentation">1 x 1</div>'
            }

            function R(e, t, n) {
                var o = n.getEl().getElementsByTagName("table")[0], l, r, i, s, c, d = n.isRtl() || "tl-tr" == n.parent().rel;
                for (o.nextSibling.innerHTML = e + 1 + " x " + (t + 1), d && (e = 9 - e), r = 0; 10 > r; r++)for (l = 0; 10 > l; l++)s = o.rows[r].childNodes[l].firstChild, c = (d ? l >= e : e >= l) && t >= r, a.dom.toggleClass(s, "mce-active", c), c && (i = s);
                return i.parentNode
            }

            var N, S = this;
            a.settings.table_grid === !1 ? a.addMenuItem("inserttable", {
                text: "Insert table",
                icon: "table",
                context: "table",
                onclick: f
            }) : a.addMenuItem("inserttable", {
                text: "Insert table",
                icon: "table",
                context: "table",
                ariaHideMenu: !0,
                onclick: function (e) {
                    e.aria && (this.parent().hideAll(), e.stopImmediatePropagation(), f())
                },
                onshow: function () {
                    R(0, 0, this.menu.items()[0])
                },
                onhide: function () {
                    var e = this.menu.items()[0].getEl().getElementsByTagName("a");
                    a.dom.removeClass(e, "mce-active"), a.dom.addClass(e[0], "mce-active")
                },
                menu: [{
                    type: "container", html: C(), onPostRender: function () {
                        this.lastX = this.lastY = 0
                    }, onmousemove: function (e) {
                        var t = e.target, n, o;
                        "A" == t.tagName.toUpperCase() && (n = parseInt(t.getAttribute("data-mce-x"), 10), o = parseInt(t.getAttribute("data-mce-y"), 10), (this.isRtl() || "tl-tr" == this.parent().rel) && (n = 9 - n), (n !== this.lastX || o !== this.lastY) && (R(n, o, e.control), this.lastX = n, this.lastY = o))
                    }, onkeydown: function (e) {
                        var t = this.lastX, n = this.lastY, o;
                        switch (e.keyCode) {
                            case 37:
                                t > 0 && (t--, o = !0);
                                break;
                            case 39:
                                o = !0, 9 > t && t++;
                                break;
                            case 38:
                                o = !0, n > 0 && n--;
                                break;
                            case 40:
                                o = !0, 9 > n && n++
                        }
                        o && (e.preventDefault(), e.stopPropagation(), R(t, n, e.control).focus(), this.lastX = t, this.lastY = n)
                    }, onclick: function (e) {
                        var t = this;
                        "A" == e.target.tagName.toUpperCase() && (e.preventDefault(), e.stopPropagation(), t.parent().cancel(), a.undoManager.transact(function () {
                            v(t.lastX + 1, t.lastY + 1)
                        }), a.addVisual())
                    }
                }]
            }), a.addMenuItem("tableprops", {
                text: "Table properties",
                context: "table",
                onPostRender: y,
                onclick: f
            }), a.addMenuItem("deletetable", {
                text: "Delete table",
                context: "table",
                onPostRender: y,
                cmd: "mceTableDelete"
            }), a.addMenuItem("cell", {
                separator: "before",
                text: "Cell",
                context: "table",
                menu: [{
                    text: "Cell properties",
                    onclick: b("mceTableCellProps"),
                    onPostRender: w
                }, {text: "Merge cells", onclick: b("mceTableMergeCells"), onPostRender: w}, {
                    text: "Split cell",
                    onclick: b("mceTableSplitCells"),
                    onPostRender: w
                }]
            }), a.addMenuItem("row", {
                text: "Row",
                context: "table",
                menu: [{
                    text: "Insert row before",
                    onclick: b("mceTableInsertRowBefore"),
                    onPostRender: w
                }, {
                    text: "Insert row after",
                    onclick: b("mceTableInsertRowAfter"),
                    onPostRender: w
                }, {text: "Delete row", onclick: b("mceTableDeleteRow"), onPostRender: w}, {
                    text: "Row properties",
                    onclick: b("mceTableRowProps"),
                    onPostRender: w
                }, {text: "-"}, {text: "Cut row", onclick: b("mceTableCutRow"), onPostRender: w}, {
                    text: "Copy row",
                    onclick: b("mceTableCopyRow"),
                    onPostRender: w
                }, {
                    text: "Paste row before",
                    onclick: b("mceTablePasteRowBefore"),
                    onPostRender: w
                }, {text: "Paste row after", onclick: b("mceTablePasteRowAfter"), onPostRender: w}]
            }), a.addMenuItem("column", {
                text: "Column",
                context: "table",
                menu: [{
                    text: "Insert column before",
                    onclick: b("mceTableInsertColBefore"),
                    onPostRender: w
                }, {
                    text: "Insert column after",
                    onclick: b("mceTableInsertColAfter"),
                    onPostRender: w
                }, {text: "Delete column", onclick: b("mceTableDeleteCol"), onPostRender: w}]
            });
            var T = [];
            s("inserttable tableprops deletetable | cell row column".split(" "), function (e) {
                T.push("|" == e ? {text: "-"} : a.menuItems[e])
            }), a.addButton("table", {
                type: "menubutton",
                title: "Table",
                menu: T
            }), l.isIE || a.on("click", function (e) {
                e = e.target, "TABLE" === e.nodeName && (a.selection.select(e), a.nodeChanged())
            }), S.quirks = new t(a), a.on("Init", function () {
                S.cellSelection = new n(a)
            }), s({
                mceTableSplitCells: function (e) {
                    e.split()
                }, mceTableMergeCells: function (e) {
                    var t;
                    t = a.dom.getParent(a.selection.getStart(), "th,td"), a.dom.select("td.mce-item-selected,th.mce-item-selected").length ? e.merge() : g(e, t)
                }, mceTableInsertRowBefore: function (e) {
                    e.insertRow(!0)
                }, mceTableInsertRowAfter: function (e) {
                    e.insertRow()
                }, mceTableInsertColBefore: function (e) {
                    e.insertCol(!0)
                }, mceTableInsertColAfter: function (e) {
                    e.insertCol()
                }, mceTableDeleteCol: function (e) {
                    e.deleteCols()
                }, mceTableDeleteRow: function (e) {
                    e.deleteRows()
                }, mceTableCutRow: function (e) {
                    N = e.cutRows()
                }, mceTableCopyRow: function (e) {
                    N = e.copyRows()
                }, mceTablePasteRowBefore: function (e) {
                    e.pasteRows(N, !0)
                }, mceTablePasteRowAfter: function (e) {
                    e.pasteRows(N)
                }, mceTableDelete: function (e) {
                    e.deleteTable()
                }
            }, function (t, n) {
                a.addCommand(n, function () {
                    var n = new e(a);
                    n && (t(n), a.execCommand("mceRepaint"), S.cellSelection.clear())
                })
            }), s({
                mceInsertTable: function () {
                    f()
                }, mceTableRowProps: h, mceTableCellProps: p
            }, function (e, t) {
                a.addCommand(t, function (t, n) {
                    e(n)
                })
            }), a.settings.table_tab_navigation !== !1 && a.on("keydown", function (t) {
                var n, o, l;
                9 == t.keyCode && (n = a.dom.getParent(a.selection.getStart(), "th,td"), n && (t.preventDefault(), o = new e(a), l = t.shiftKey ? -1 : 1, a.undoManager.transact(function () {
                    !o.moveRelIdx(n, l) && l > 0 && (o.insertRow(), o.refresh(), o.moveRelIdx(n, l))
                })))
            })
        }

        var s = o.each;
        r.add("table", i)
    }), r([])
}(this);
tinymce.PluginManager.add("template", function (e) {
    function t(t) {
        return function () {
            var a = e.settings.templates;
            "string" == typeof a ? tinymce.util.XHR.send({
                url: a, success: function (e) {
                    t(tinymce.util.JSON.parse(e))
                }
            }) : t(a)
        }
    }

    function a(t) {
        function a(t) {
            function a(t) {
                if (-1 == t.indexOf("<html>")) {
                    var a = "";
                    tinymce.each(e.contentCSS, function (t) {
                        a += '<link type="text/css" rel="stylesheet" href="' + e.documentBaseURI.toAbsolute(t) + '">'
                    }), t = "<!DOCTYPE html><html><head>" + a + "</head><body>" + t + "</body></html>"
                }
                t = r(t, "template_preview_replace_values");
                var l = n.find("iframe")[0].getEl().contentWindow.document;
                l.open(), l.write(t), l.close()
            }

            var c = t.control.value();
            c.url ? tinymce.util.XHR.send({
                url: c.url, success: function (e) {
                    l = e, a(l)
                }
            }) : (l = c.content, a(l)), n.find("#description")[0].text(t.control.value().description)
        }

        var n, l, i = [];
        return t && 0 !== t.length ? (tinymce.each(t, function (e) {
            i.push({
                selected: !i.length,
                text: e.title,
                value: {url: e.url, content: e.content, description: e.description}
            })
        }), n = e.windowManager.open({
            title: "Insert template",
            layout: "flex",
            direction: "column",
            align: "stretch",
            padding: 15,
            spacing: 10,
            items: [{
                type: "form",
                flex: 0,
                padding: 0,
                items: [{
                    type: "container",
                    label: "Templates",
                    items: {type: "listbox", label: "Templates", name: "template", values: i, onselect: a}
                }]
            }, {type: "label", name: "description", label: "Description", text: " "}, {
                type: "iframe",
                flex: 1,
                border: 1
            }],
            onsubmit: function () {
                c(!1, l)
            },
            width: e.getParam("template_popup_width", 600),
            height: e.getParam("template_popup_height", 500)
        }), void n.find("listbox")[0].fire("select")) : void e.windowManager.alert("No templates defined")
    }

    function n(t, a) {
        function n(e, t) {
            if (e = "" + e, e.length < t)for (var a = 0; a < t - e.length; a++)e = "0" + e;
            return e
        }

        var l = "Sun Mon Tue Wed Thu Fri Sat Sun".split(" "), r = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday Sunday".split(" "), c = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), i = "January February March April May June July August September October November December".split(" ");
        return a = a || new Date, t = t.replace("%D", "%m/%d/%Y"), t = t.replace("%r", "%I:%M:%S %p"), t = t.replace("%Y", "" + a.getFullYear()), t = t.replace("%y", "" + a.getYear()), t = t.replace("%m", n(a.getMonth() + 1, 2)), t = t.replace("%d", n(a.getDate(), 2)), t = t.replace("%H", "" + n(a.getHours(), 2)), t = t.replace("%M", "" + n(a.getMinutes(), 2)), t = t.replace("%S", "" + n(a.getSeconds(), 2)), t = t.replace("%I", "" + ((a.getHours() + 11) % 12 + 1)), t = t.replace("%p", "" + (a.getHours() < 12 ? "AM" : "PM")), t = t.replace("%B", "" + e.translate(i[a.getMonth()])), t = t.replace("%b", "" + e.translate(c[a.getMonth()])), t = t.replace("%A", "" + e.translate(r[a.getDay()])), t = t.replace("%a", "" + e.translate(l[a.getDay()])), t = t.replace("%%", "%")
    }

    function l(t) {
        var a = e.dom, n = e.getParam("template_replace_values");
        i(a.select("*", t), function (e) {
            i(n, function (t, l) {
                a.hasClass(e, l) && "function" == typeof n[l] && n[l](e)
            })
        })
    }

    function r(t, a) {
        return i(e.getParam(a), function (e, a) {
            "function" != typeof e && (t = t.replace(new RegExp("\\{\\$" + a + "\\}", "g"), e))
        }), t
    }

    function c(t, a) {
        function c(e, t) {
            return new RegExp("\\b" + t + "\\b", "g").test(e.className)
        }

        var o, s, p = e.dom, m = e.selection.getContent();
        a = r(a, "template_replace_values"), o = p.create("div", null, a), s = p.select(".mceTmpl", o), s && s.length > 0 && (o = p.create("div", null), o.appendChild(s[0].cloneNode(!0))), i(p.select("*", o), function (t) {
            c(t, e.getParam("template_cdate_classes", "cdate").replace(/\s+/g, "|")) && (t.innerHTML = n(e.getParam("template_cdate_format", e.getLang("template.cdate_format")))), c(t, e.getParam("template_mdate_classes", "mdate").replace(/\s+/g, "|")) && (t.innerHTML = n(e.getParam("template_mdate_format", e.getLang("template.mdate_format")))), c(t, e.getParam("template_selected_content_classes", "selcontent").replace(/\s+/g, "|")) && (t.innerHTML = m)
        }), l(o), e.execCommand("mceInsertContent", !1, o.innerHTML), e.addVisual()
    }

    var i = tinymce.each;
    e.addCommand("mceInsertTemplate", c), e.addButton("template", {
        title: "Insert template",
        onclick: t(a)
    }), e.addMenuItem("template", {
        text: "Insert template",
        onclick: t(a),
        context: "insert"
    }), e.on("PreProcess", function (t) {
        var a = e.dom;
        i(a.select("div", t.node), function (t) {
            a.hasClass(t, "mceTmpl") && (i(a.select("*", t), function (t) {
                a.hasClass(t, e.getParam("template_mdate_classes", "mdate").replace(/\s+/g, "|")) && (t.innerHTML = n(e.getParam("template_mdate_format", e.getLang("template.mdate_format"))))
            }), l(t))
        })
    })
});
tinymce.PluginManager.add("textcolor", function (e) {
    function t() {
        var t, o, l = [];
        for (o = e.settings.textcolor_map || ["000000", "Black", "993300", "Burnt orange", "333300", "Dark olive", "003300", "Dark green", "003366", "Dark azure", "000080", "Navy Blue", "333399", "Indigo", "333333", "Very dark gray", "800000", "Maroon", "FF6600", "Orange", "808000", "Olive", "008000", "Green", "008080", "Teal", "0000FF", "Blue", "666699", "Grayish blue", "808080", "Gray", "FF0000", "Red", "FF9900", "Amber", "99CC00", "Yellow green", "339966", "Sea green", "33CCCC", "Turquoise", "3366FF", "Royal blue", "800080", "Purple", "999999", "Medium gray", "FF00FF", "Magenta", "FFCC00", "Gold", "FFFF00", "Yellow", "00FF00", "Lime", "00FFFF", "Aqua", "00CCFF", "Sky blue", "993366", "Red violet", "C0C0C0", "Silver", "FF99CC", "Pink", "FFCC99", "Peach", "FFFF99", "Light yellow", "CCFFCC", "Pale green", "CCFFFF", "Pale cyan", "99CCFF", "Light sky blue", "CC99FF", "Plum", "FFFFFF", "White"], t = 0; t < o.length; t += 2)l.push({
            text: o[t + 1],
            color: o[t]
        });
        return l
    }

    function o() {
        var o, l, r, a, c, i, n, F, d, s = this;
        for (o = t(), r = '<table class="mce-grid mce-grid-border mce-colorbutton-grid" role="list" cellspacing="0"><tbody>', a = o.length - 1, c = e.settings.textcolor_rows || 5, i = e.settings.textcolor_cols || 8, F = 0; c > F; F++) {
            for (r += "<tr>", n = 0; i > n; n++)d = F * i + n, d > a ? r += "<td></td>" : (l = o[d], r += '<td><div id="' + s._id + "-" + d + '" data-mce-color="' + l.color + '" role="option" tabIndex="-1" style="' + (l ? "background-color: #" + l.color : "") + '" title="' + l.text + '"></div></td>');
            r += "</tr>"
        }
        return r += "</tbody></table>"
    }

    function l(t) {
        var o, l = this.parent();
        (o = t.target.getAttribute("data-mce-color")) && (this.lastId && document.getElementById(this.lastId).setAttribute("aria-selected", !1), t.target.setAttribute("aria-selected", !0), this.lastId = t.target.id, l.hidePanel(), o = "#" + o, l.color(o), e.execCommand(l.settings.selectcmd, !1, o))
    }

    function r() {
        var t = this;
        t._color && e.execCommand(t.settings.selectcmd, !1, t._color)
    }

    e.addButton("forecolor", {
        type: "colorbutton",
        tooltip: "Text color",
        selectcmd: "ForeColor",
        panel: {role: "application", ariaRemember: !0, html: o, onclick: l},
        onclick: r
    }), e.addButton("backcolor", {
        type: "colorbutton",
        tooltip: "Background color",
        selectcmd: "HiliteColor",
        panel: {role: "application", ariaRemember: !0, html: o, onclick: l},
        onclick: r
    })
});
tinymce.PluginManager.add("visualblocks", function (e, s) {
    function o() {
        var s = this;
        s.active(a), e.on("VisualBlocks", function () {
            s.active(e.dom.hasClass(e.getBody(), "mce-visualblocks"))
        })
    }

    var l, t, a;
    window.NodeList && (e.addCommand("mceVisualBlocks", function () {
        var o, c = e.dom;
        l || (l = c.uniqueId(), o = c.create("link", {
            id: l,
            rel: "stylesheet",
            href: s + "/css/visualblocks.css"
        }), e.getDoc().getElementsByTagName("head")[0].appendChild(o)), e.on("PreviewFormats AfterPreviewFormats", function (s) {
            a && c.toggleClass(e.getBody(), "mce-visualblocks", "afterpreviewformats" == s.type)
        }), c.toggleClass(e.getBody(), "mce-visualblocks"), a = e.dom.hasClass(e.getBody(), "mce-visualblocks"), t && t.active(c.hasClass(e.getBody(), "mce-visualblocks")), e.fire("VisualBlocks")
    }), e.addButton("visualblocks", {
        title: "Show blocks",
        cmd: "mceVisualBlocks",
        onPostRender: o
    }), e.addMenuItem("visualblocks", {
        text: "Show blocks",
        cmd: "mceVisualBlocks",
        onPostRender: o,
        selectable: !0,
        context: "view",
        prependToContext: !0
    }), e.on("init", function () {
        e.settings.visualblocks_default_state && e.execCommand("mceVisualBlocks", !1, null, {skip_focus: !0})
    }), e.on("remove", function () {
        e.dom.removeClass(e.getBody(), "mce-visualblocks")
    }))
});
tinymce.PluginManager.add("visualchars", function (e) {
    function a(a) {
        var t, s, i, r, c, d, l = e.getBody(), m = e.selection;
        if (n = !n, o.state = n, e.fire("VisualChars", {state: n}), a && (d = m.getBookmark()), n)for (s = [], tinymce.walk(l, function (e) {
            3 == e.nodeType && e.nodeValue && -1 != e.nodeValue.indexOf(" ") && s.push(e)
        }, "childNodes"), i = 0; i < s.length; i++) {
            for (r = s[i].nodeValue, r = r.replace(/(\u00a0)/g, '<span data-mce-bogus="1" class="mce-nbsp">$1</span>'), c = e.dom.create("div", null, r); t = c.lastChild;)e.dom.insertAfter(t, s[i]);
            e.dom.remove(s[i])
        } else for (s = e.dom.select("span.mce-nbsp", l), i = s.length - 1; i >= 0; i--)e.dom.remove(s[i], 1);
        m.moveToBookmark(d)
    }

    function t() {
        var a = this;
        e.on("VisualChars", function (e) {
            a.active(e.state)
        })
    }

    var n, o = this;
    e.addCommand("mceVisualChars", a), e.addButton("visualchars", {
        title: "Show invisible characters",
        cmd: "mceVisualChars",
        onPostRender: t
    }), e.addMenuItem("visualchars", {
        text: "Show invisible characters",
        cmd: "mceVisualChars",
        onPostRender: t,
        selectable: !0,
        context: "view",
        prependToContext: !0
    }), e.on("beforegetcontent", function (e) {
        n && "raw" != e.format && !e.draft && (n = !0, a(!1))
    })
});
tinymce.PluginManager.add("wordcount", function (e) {
    function t() {
        e.theme.panel.find("#wordcount").text(["Words: {0}", a.getCount()])
    }

    var n, o, a = this;
    n = e.getParam("wordcount_countregex", /[\w\u2019\x27\-\u00C0-\u1FFF]+/g), o = e.getParam("wordcount_cleanregex", /[0-9.(),;:!?%#$?\x27\x22_+=\\\/\-]*/g), e.on("init", function () {
        var n = e.theme.panel && e.theme.panel.find("#statusbar")[0];
        n && window.setTimeout(function () {
            n.insert({
                type: "label",
                name: "wordcount",
                text: ["Words: {0}", a.getCount()],
                classes: "wordcount",
                disabled: e.settings.readonly
            }, 0), e.on("setcontent beforeaddundo", t), e.on("keyup", function (e) {
                32 == e.keyCode && t()
            })
        }, 0)
    }), a.getCount = function () {
        var t = e.getContent({format: "raw"}), a = 0;
        if (t) {
            t = t.replace(/\.\.\./g, " "), t = t.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " "), t = t.replace(/(\w+)(&#?[a-z0-9]+;)+(\w+)/i, "$1$3").replace(/&.+?;/g, " "), t = t.replace(o, "");
            var r = t.match(n);
            r && (a = r.length)
        }
        return a
    }
});
tinymce.ThemeManager.add("modern", function (e) {
    function t() {
        function t(t) {
            var n, o = [];
            if (t)return d(t.split(/[ ,]/), function (t) {
                function i() {
                    var i = e.selection;
                    "bullist" == r && i.selectorChanged("ul > li", function (e, i) {
                        for (var n, o = i.parents.length; o-- && (n = i.parents[o].nodeName, "OL" != n && "UL" != n););
                        t.active(e && "UL" == n)
                    }), "numlist" == r && i.selectorChanged("ol > li", function (e, i) {
                        for (var n, o = i.parents.length; o-- && (n = i.parents[o].nodeName, "OL" != n && "UL" != n););
                        t.active(e && "OL" == n)
                    }), t.settings.stateSelector && i.selectorChanged(t.settings.stateSelector, function (e) {
                        t.active(e)
                    }, !0), t.settings.disabledStateSelector && i.selectorChanged(t.settings.disabledStateSelector, function (e) {
                        t.disabled(e)
                    })
                }

                var r;
                "|" == t ? n = null : c.has(t) ? (t = {type: t}, u.toolbar_items_size && (t.size = u.toolbar_items_size), o.push(t), n = null) : (n || (n = {
                    type: "buttongroup",
                    items: []
                }, o.push(n)), e.buttons[t] && (r = t, t = e.buttons[r], "function" == typeof t && (t = t()), t.type = t.type || "button", u.toolbar_items_size && (t.size = u.toolbar_items_size), t = c.create(t), n.items.push(t), e.initialized ? i() : e.on("init", i)))
            }), i.push({type: "toolbar", layout: "flow", items: o}), !0
        }

        var i = [];
        if (tinymce.isArray(u.toolbar)) {
            if (0 === u.toolbar.length)return;
            tinymce.each(u.toolbar, function (e, t) {
                u["toolbar" + (t + 1)] = e
            }), delete u.toolbar
        }
        for (var n = 1; 10 > n && t(u["toolbar" + n]); n++);
        return i.length || u.toolbar === !1 || t(u.toolbar || f), i.length ? {
            type: "panel",
            layout: "stack",
            classes: "toolbar-grp",
            ariaRoot: !0,
            ariaRemember: !0,
            items: i
        } : void 0
    }

    function i() {
        function t(t) {
            var i;
            return "|" == t ? {text: "|"} : i = e.menuItems[t]
        }

        function i(i) {
            var n, o, r, a, s;
            if (s = tinymce.makeMap((u.removed_menuitems || "").split(/[ ,]/)), u.menu ? (o = u.menu[i], a = !0) : o = h[i], o) {
                n = {text: o.title}, r = [], d((o.items || "").split(/[ ,]/), function (e) {
                    var i = t(e);
                    i && !s[e] && r.push(t(e))
                }), a || d(e.menuItems, function (e) {
                    e.context == i && ("before" == e.separator && r.push({text: "|"}), e.prependToContext ? r.unshift(e) : r.push(e), "after" == e.separator && r.push({text: "|"}))
                });
                for (var l = 0; l < r.length; l++)"|" == r[l].text && (0 === l || l == r.length - 1) && r.splice(l, 1);
                if (n.menu = r, !n.menu.length)return null
            }
            return n
        }

        var n, o = [], r = [];
        if (u.menu)for (n in u.menu)r.push(n); else for (n in h)r.push(n);
        for (var a = "string" == typeof u.menubar ? u.menubar.split(/[ ,]/) : r, s = 0; s < a.length; s++) {
            var l = a[s];
            l = i(l), l && o.push(l)
        }
        return o
    }

    function n(t) {
        function i(e) {
            var i = t.find(e)[0];
            i && i.focus(!0)
        }

        e.shortcuts.add("Alt+F9", "", function () {
            i("menubar")
        }), e.shortcuts.add("Alt+F10", "", function () {
            i("toolbar")
        }), e.shortcuts.add("Alt+F11", "", function () {
            i("elementpath")
        }), t.on("cancel", function () {
            e.focus()
        })
    }

    function o(t, i) {
        function n(e) {
            return {width: e.clientWidth, height: e.clientHeight}
        }

        var o, r, a, s;
        o = e.getContainer(), r = e.getContentAreaContainer().firstChild, a = n(o), s = n(r), null !== t && (t = Math.max(u.min_width || 100, t), t = Math.min(u.max_width || 65535, t), m.css(o, "width", t + (a.width - s.width)), m.css(r, "width", t)), i = Math.max(u.min_height || 100, i), i = Math.min(u.max_height || 65535, i), m.css(r, "height", i), e.fire("ResizeEditor")
    }

    function r(t, i) {
        var n = e.getContentAreaContainer();
        l.resizeTo(n.clientWidth + t, n.clientHeight + i)
    }

    function a(o) {
        function r() {
            if (h && h.moveRel && h.visible() && !h._fixed) {
                var t = e.selection.getScrollContainer(), i = e.getBody(), n = 0, o = 0;
                if (t) {
                    var r = m.getPos(i), a = m.getPos(t);
                    n = Math.max(0, a.x - r.x), o = Math.max(0, a.y - r.y)
                }
                h.fixed(!1).moveRel(i, e.rtl ? ["tr-br", "br-tr"] : ["tl-bl", "bl-tl"]).moveBy(n, o)
            }
        }

        function a() {
            h && (h.show(), r(), m.addClass(e.getBody(), "mce-edit-focus"))
        }

        function s() {
            h && (h.hide(), m.removeClass(e.getBody(), "mce-edit-focus"))
        }

        function d() {
            return h ? void(h.visible() || a()) : (h = l.panel = c.create({
                type: f ? "panel" : "floatpanel",
                role: "application",
                classes: "tinymce tinymce-inline",
                layout: "flex",
                direction: "column",
                align: "stretch",
                autohide: !1,
                autofix: !0,
                fixed: !!f,
                border: 1,
                items: [u.menubar === !1 ? null : {type: "menubar", border: "0 0 1 0", items: i()}, t()]
            }), e.fire("BeforeRenderUI"), h.renderTo(f || document.body).reflow(), n(h), a(), e.on("nodeChange", r), e.on("activate", a), e.on("deactivate", s), void e.nodeChanged())
        }

        var h, f;
        return u.fixed_toolbar_container && (f = m.select(u.fixed_toolbar_container)[0]), u.content_editable = !0, e.on("focus", function () {
            o.skinUiCss ? tinymce.DOM.styleSheetLoader.load(o.skinUiCss, d, d) : d()
        }), e.on("blur hide", s), e.on("remove", function () {
            h && (h.remove(), h = null)
        }), o.skinUiCss && tinymce.DOM.styleSheetLoader.load(o.skinUiCss), {}
    }

    function s(r) {
        var a, s, d;
        return r.skinUiCss && tinymce.DOM.loadCSS(r.skinUiCss), a = l.panel = c.create({
            type: "panel",
            role: "application",
            classes: "tinymce",
            style: "visibility: hidden",
            layout: "stack",
            border: 1,
            items: [u.menubar === !1 ? null : {type: "menubar", border: "0 0 1 0", items: i()}, t(), {
                type: "panel",
                name: "iframe",
                layout: "stack",
                classes: "edit-area",
                html: "",
                border: "1 0 0 0"
            }]
        }), u.resize !== !1 && (s = {
            type: "resizehandle", direction: u.resize, onResizeStart: function () {
                var t = e.getContentAreaContainer().firstChild;
                d = {width: t.clientWidth, height: t.clientHeight}
            }, onResize: function (e) {
                "both" == u.resize ? o(d.width + e.deltaX, d.height + e.deltaY) : o(null, d.height + e.deltaY)
            }
        }), u.statusbar !== !1 && a.add({
            type: "panel",
            name: "statusbar",
            classes: "statusbar",
            layout: "flow",
            border: "1 0 0 0",
            ariaRoot: !0,
            items: [{type: "elementpath"}, s]
        }), u.readonly && a.find("*").disabled(!0), e.fire("BeforeRenderUI"), a.renderBefore(r.targetNode).reflow(), u.width && tinymce.DOM.setStyle(a.getEl(), "width", u.width), e.on("remove", function () {
            a.remove(), a = null
        }), n(a), {iframeContainer: a.find("#iframe")[0].getEl(), editorContainer: a.getEl()}
    }

    var l = this, u = e.settings, c = tinymce.ui.Factory, d = tinymce.each, m = tinymce.DOM, h = {
        file: {
            title: "File",
            items: "newdocument"
        },
        edit: {title: "Edit", items: "undo redo | cut copy paste pastetext | selectall"},
        insert: {title: "Insert", items: "|"},
        view: {title: "View", items: "visualaid |"},
        format: {
            title: "Format",
            items: "bold italic underline strikethrough superscript subscript | formats | removeformat"
        },
        table: {title: "Table"},
        tools: {title: "Tools"}
    }, f = "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image";
    l.renderUI = function (t) {
        var i = u.skin !== !1 ? u.skin || "lightgray" : !1;
        if (i) {
            var n = u.skin_url;
            n = n ? e.documentBaseURI.toAbsolute(n) : tinymce.baseURL + "/skins/" + i, t.skinUiCss = tinymce.Env.documentMode <= 7 ? n + "/skin.ie7.min.css" : n + "/skin.min.css", e.contentCSS.push(n + "/content" + (e.inline ? ".inline" : "") + ".min.css")
        }
        return e.on("ProgressState", function (e) {
            l.throbber = l.throbber || new tinymce.ui.Throbber(l.panel.getEl("body")), e.state ? l.throbber.show(e.time) : l.throbber.hide()
        }), u.inline ? a(t) : s(t)
    }, l.resizeTo = o, l.resizeBy = r
});
window.console && window.console.warn && window.console.warn('Update your TinyMCE CDN url to: //cdn.tinymce.com/4/tinymce.min.js');