
// Version 1.11.2 sunburst-chart - https://github.com/vasturiano/sunburst-chart
!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((t = "undefined" != typeof globalThis ? globalThis : t || self).Sunburst = n())
})(this, function () {
  "use strict"
  !(function (t, n) {
    void 0 === n && (n = {})
    var e = n.insertAt
    if (t && "undefined" != typeof document) {
      var r = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("style")
      ;(i.type = "text/css"),
        "top" === e && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i),
        i.styleSheet ? (i.styleSheet.cssText = t) : i.appendChild(document.createTextNode(t))
    }
  })(
    ".sunburst-viz .slice path {\n  cursor: pointer;\n}\n\n.sunburst-viz text {\n  font-family: sans-serif;\n  font-size: 20px;\n  dominant-baseline: middle;\n  text-anchor: middle;\n  pointer-events: none;\n  fill: #222;\n}\n\n.sunburst-viz text .text-contour {\n  fill: none;\n  stroke: white;\n  stroke-width: 5;\n  stroke-linejoin: 'round';\n}\n\n.sunburst-viz .main-arc {\n  stroke: white;\n  stroke-width: 1px;\n  transition: opacity .4s;\n}\n\n.sunburst-viz .main-arc:hover {\n  opacity: 0.85;\n  transition: opacity .05s;\n}\n\n.sunburst-viz .hidden-arc {\n  fill: none;\n}\n\n.sunburst-viz {\n  position: relative;\n}\n\n.sunburst-tooltip {\n  display: none;\n  position: absolute;\n  max-width: 100%;\n  white-space: nowrap;\n  padding: 5px;\n  border-radius: 3px;\n  font: 12px sans-serif;\n  color: #fff;\n  background: rgba(0,0,0,0.65);\n  pointer-events: none;\n}\n\n.sunburst-tooltip .tooltip-title {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 5px;\n font-size: 20px\n}\n"
  )
  var t = "http://www.w3.org/1999/xhtml",
    n = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: t,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    }
  function e(t) {
    var e = (t += ""),
      r = e.indexOf(":")
    return (
      r >= 0 && "xmlns" !== (e = t.slice(0, r)) && (t = t.slice(r + 1)),
      n.hasOwnProperty(e) ? { space: n[e], local: t } : t
    )
  }
  function r(n) {
    return function () {
      var e = this.ownerDocument,
        r = this.namespaceURI
      return r === t && e.documentElement.namespaceURI === t
        ? e.createElement(n)
        : e.createElementNS(r, n)
    }
  }
  function i(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local)
    }
  }
  function o(t) {
    var n = e(t)
    return (n.local ? i : r)(n)
  }
  function a() {}
  function u(t) {
    return null == t
      ? a
      : function () {
          return this.querySelector(t)
        }
  }
  function s() {
    return []
  }
  function l(t) {
    return null == t
      ? s
      : function () {
          return this.querySelectorAll(t)
        }
  }
  function c(t) {
    return function () {
      return this.matches(t)
    }
  }
  function h(t) {
    return new Array(t.length)
  }
  function f(t, n) {
    ;(this.ownerDocument = t.ownerDocument),
      (this.namespaceURI = t.namespaceURI),
      (this._next = null),
      (this._parent = t),
      (this.__data__ = n)
  }
  f.prototype = {
    constructor: f,
    appendChild: function (t) {
      return this._parent.insertBefore(t, this._next)
    },
    insertBefore: function (t, n) {
      return this._parent.insertBefore(t, n)
    },
    querySelector: function (t) {
      return this._parent.querySelector(t)
    },
    querySelectorAll: function (t) {
      return this._parent.querySelectorAll(t)
    },
  }
  function p(t, n, e, r, i, o) {
    for (var a, u = 0, s = n.length, l = o.length; u < l; ++u)
      (a = n[u]) ? ((a.__data__ = o[u]), (r[u] = a)) : (e[u] = new f(t, o[u]))
    for (; u < s; ++u) (a = n[u]) && (i[u] = a)
  }
  function d(t, n, e, r, i, o, a) {
    var u,
      s,
      l,
      c = {},
      h = n.length,
      p = o.length,
      d = new Array(h)
    for (u = 0; u < h; ++u)
      (s = n[u]) &&
        ((d[u] = l = "$" + a.call(s, s.__data__, u, n)), l in c ? (i[u] = s) : (c[l] = s))
    for (u = 0; u < p; ++u)
      (s = c[(l = "$" + a.call(t, o[u], u, o))])
        ? ((r[u] = s), (s.__data__ = o[u]), (c[l] = null))
        : (e[u] = new f(t, o[u]))
    for (u = 0; u < h; ++u) (s = n[u]) && c[d[u]] === s && (i[u] = s)
  }
  function v(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
  }
  function y(t) {
    return function () {
      this.removeAttribute(t)
    }
  }
  function g(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local)
    }
  }
  function m(t, n) {
    return function () {
      this.setAttribute(t, n)
    }
  }
  function _(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n)
    }
  }
  function w(t, n) {
    return function () {
      var e = n.apply(this, arguments)
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
    }
  }
  function x(t, n) {
    return function () {
      var e = n.apply(this, arguments)
      null == e
        ? this.removeAttributeNS(t.space, t.local)
        : this.setAttributeNS(t.space, t.local, e)
    }
  }
  function b(t) {
    return (
      (t.ownerDocument && t.ownerDocument.defaultView) || (t.document && t) || t.defaultView
    )
  }
  function M(t) {
    return function () {
      this.style.removeProperty(t)
    }
  }
  function A(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e)
    }
  }
  function N(t, n, e) {
    return function () {
      var r = n.apply(this, arguments)
      null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
    }
  }
  function k(t, n) {
    return t.style.getPropertyValue(n) || b(t).getComputedStyle(t, null).getPropertyValue(n)
  }
  function S(t) {
    return function () {
      delete this[t]
    }
  }
  function E(t, n) {
    return function () {
      this[t] = n
    }
  }
  function T(t, n) {
    return function () {
      var e = n.apply(this, arguments)
      null == e ? delete this[t] : (this[t] = e)
    }
  }
  function C(t) {
    return t.trim().split(/^|\s+/)
  }
  function P(t) {
    return t.classList || new R(t)
  }
  function R(t) {
    ;(this._node = t), (this._names = C(t.getAttribute("class") || ""))
  }
  function O(t, n) {
    for (var e = P(t), r = -1, i = n.length; ++r < i; ) e.add(n[r])
  }
  function q(t, n) {
    for (var e = P(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r])
  }
  function j(t) {
    return function () {
      O(this, t)
    }
  }
  function z(t) {
    return function () {
      q(this, t)
    }
  }
  function L(t, n) {
    return function () {
      ;(n.apply(this, arguments) ? O : q)(this, t)
    }
  }
  function I() {
    this.textContent = ""
  }
  function D(t) {
    return function () {
      this.textContent = t
    }
  }
  function B(t) {
    return function () {
      var n = t.apply(this, arguments)
      this.textContent = null == n ? "" : n
    }
  }
  function X() {
    this.innerHTML = ""
  }
  function H(t) {
    return function () {
      this.innerHTML = t
    }
  }
  function V(t) {
    return function () {
      var n = t.apply(this, arguments)
      this.innerHTML = null == n ? "" : n
    }
  }
  function $() {
    this.nextSibling && this.parentNode.appendChild(this)
  }
  function U() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
  }
  function Y() {
    return null
  }
  function F() {
    var t = this.parentNode
    t && t.removeChild(this)
  }
  function G() {
    var t = this.cloneNode(!1),
      n = this.parentNode
    return n ? n.insertBefore(t, this.nextSibling) : t
  }
  function Z() {
    var t = this.cloneNode(!0),
      n = this.parentNode
    return n ? n.insertBefore(t, this.nextSibling) : t
  }
  R.prototype = {
    add: function (t) {
      this._names.indexOf(t) < 0 &&
        (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
    },
    remove: function (t) {
      var n = this._names.indexOf(t)
      n >= 0 &&
        (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
    },
    contains: function (t) {
      return this._names.indexOf(t) >= 0
    },
  }
  var Q = {},
    W = null
  "undefined" != typeof document &&
    ("onmouseenter" in document.documentElement ||
      (Q = { mouseenter: "mouseover", mouseleave: "mouseout" }))
  function J(t, n, e) {
    return (
      (t = K(t, n, e)),
      function (n) {
        var e = n.relatedTarget
        ;(e && (e === this || 8 & e.compareDocumentPosition(this))) || t.call(this, n)
      }
    )
  }
  function K(t, n, e) {
    return function (r) {
      var i = W
      W = r
      try {
        t.call(this, this.__data__, n, e)
      } finally {
        W = i
      }
    }
  }
  function tt(t) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var n = "",
          e = t.indexOf(".")
        return e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))), { type: t, name: n }
      })
  }
  function nt(t) {
    return function () {
      var n = this.__on
      if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
          (e = n[r]),
            (t.type && e.type !== t.type) || e.name !== t.name
              ? (n[++i] = e)
              : this.removeEventListener(e.type, e.listener, e.capture)
        ++i ? (n.length = i) : delete this.__on
      }
    }
  }
  function et(t, n, e) {
    var r = Q.hasOwnProperty(t.type) ? J : K
    return function (i, o, a) {
      var u,
        s = this.__on,
        l = r(n, o, a)
      if (s)
        for (var c = 0, h = s.length; c < h; ++c)
          if ((u = s[c]).type === t.type && u.name === t.name)
            return (
              this.removeEventListener(u.type, u.listener, u.capture),
              this.addEventListener(u.type, (u.listener = l), (u.capture = e)),
              void (u.value = n)
            )
      this.addEventListener(t.type, l, e),
        (u = { type: t.type, name: t.name, value: n, listener: l, capture: e }),
        s ? s.push(u) : (this.__on = [u])
    }
  }
  function rt(t, n, e) {
    var r = b(t),
      i = r.CustomEvent
    "function" == typeof i
      ? (i = new i(n, e))
      : ((i = r.document.createEvent("Event")),
        e
          ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
          : i.initEvent(n, !1, !1)),
      t.dispatchEvent(i)
  }
  function it(t, n) {
    return function () {
      return rt(this, t, n)
    }
  }
  function ot(t, n) {
    return function () {
      return rt(this, t, n.apply(this, arguments))
    }
  }
  var at = [null]
  function ut(t, n) {
    ;(this._groups = t), (this._parents = n)
  }
  function st() {
    return new ut([[document.documentElement]], at)
  }
  function lt() {
    for (var t, n = W; (t = n.sourceEvent); ) n = t
    return n
  }
  function ct(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN
  }
  ut.prototype = st.prototype = {
    constructor: ut,
    select: function (t) {
      "function" != typeof t && (t = u(t))
      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
        for (var o, a, s = n[i], l = s.length, c = (r[i] = new Array(l)), h = 0; h < l; ++h)
          (o = s[h]) &&
            (a = t.call(o, o.__data__, h, s)) &&
            ("__data__" in o && (a.__data__ = o.__data__), (c[h] = a))
      return new ut(r, this._parents)
    },
    selectAll: function (t) {
      "function" != typeof t && (t = l(t))
      for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
        for (var a, u = n[o], s = u.length, c = 0; c < s; ++c)
          (a = u[c]) && (r.push(t.call(a, a.__data__, c, u)), i.push(a))
      return new ut(r, i)
    },
    filter: function (t) {
      "function" != typeof t && (t = c(t))
      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
        for (var o, a = n[i], u = a.length, s = (r[i] = []), l = 0; l < u; ++l)
          (o = a[l]) && t.call(o, o.__data__, l, a) && s.push(o)
      return new ut(r, this._parents)
    },
    data: function (t, n) {
      if (!t)
        return (
          (y = new Array(this.size())),
          (c = -1),
          this.each(function (t) {
            y[++c] = t
          }),
          y
        )
      var e,
        r = n ? d : p,
        i = this._parents,
        o = this._groups
      "function" != typeof t &&
        ((e = t),
        (t = function () {
          return e
        }))
      for (
        var a = o.length, u = new Array(a), s = new Array(a), l = new Array(a), c = 0;
        c < a;
        ++c
      ) {
        var h = i[c],
          f = o[c],
          v = f.length,
          y = t.call(h, h && h.__data__, c, i),
          g = y.length,
          m = (s[c] = new Array(g)),
          _ = (u[c] = new Array(g))
        r(h, f, m, _, (l[c] = new Array(v)), y, n)
        for (var w, x, b = 0, M = 0; b < g; ++b)
          if ((w = m[b])) {
            for (b >= M && (M = b + 1); !(x = _[M]) && ++M < g; );
            w._next = x || null
          }
      }
      return ((u = new ut(u, i))._enter = s), (u._exit = l), u
    },
    enter: function () {
      return new ut(this._enter || this._groups.map(h), this._parents)
    },
    exit: function () {
      return new ut(this._exit || this._groups.map(h), this._parents)
    },
    join: function (t, n, e) {
      var r = this.enter(),
        i = this,
        o = this.exit()
      return (
        (r = "function" == typeof t ? t(r) : r.append(t + "")),
        null != n && (i = n(i)),
        null == e ? o.remove() : e(o),
        r && i ? r.merge(i).order() : i
      )
    },
    merge: function (t) {
      for (
        var n = this._groups,
          e = t._groups,
          r = n.length,
          i = e.length,
          o = Math.min(r, i),
          a = new Array(r),
          u = 0;
        u < o;
        ++u
      )
        for (
          var s, l = n[u], c = e[u], h = l.length, f = (a[u] = new Array(h)), p = 0;
          p < h;
          ++p
        )
          (s = l[p] || c[p]) && (f[p] = s)
      for (; u < r; ++u) a[u] = n[u]
      return new ut(a, this._parents)
    },
    order: function () {
      for (var t = this._groups, n = -1, e = t.length; ++n < e; )
        for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; )
          (r = i[o]) &&
            (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), (a = r))
      return this
    },
    sort: function (t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e
      }
      t || (t = v)
      for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var a, u = e[o], s = u.length, l = (i[o] = new Array(s)), c = 0; c < s; ++c)
          (a = u[c]) && (l[c] = a)
        l.sort(n)
      }
      return new ut(i, this._parents).order()
    },
    call: function () {
      var t = arguments[0]
      return (arguments[0] = this), t.apply(null, arguments), this
    },
    nodes: function () {
      var t = new Array(this.size()),
        n = -1
      return (
        this.each(function () {
          t[++n] = this
        }),
        t
      )
    },
    node: function () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var a = r[i]
          if (a) return a
        }
      return null
    },
    size: function () {
      var t = 0
      return (
        this.each(function () {
          ++t
        }),
        t
      )
    },
    empty: function () {
      return !this.node()
    },
    each: function (t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
        for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)
          (i = o[a]) && t.call(i, i.__data__, a, o)
      return this
    },
    attr: function (t, n) {
      var r = e(t)
      if (arguments.length < 2) {
        var i = this.node()
        return r.local ? i.getAttributeNS(r.space, r.local) : i.getAttribute(r)
      }
      return this.each(
        (null == n
          ? r.local
            ? g
            : y
          : "function" == typeof n
          ? r.local
            ? x
            : w
          : r.local
          ? _
          : m)(r, n)
      )
    },
    style: function (t, n, e) {
      return arguments.length > 1
        ? this.each((null == n ? M : "function" == typeof n ? N : A)(t, n, null == e ? "" : e))
        : k(this.node(), t)
    },
    property: function (t, n) {
      return arguments.length > 1
        ? this.each((null == n ? S : "function" == typeof n ? T : E)(t, n))
        : this.node()[t]
    },
    classed: function (t, n) {
      var e = C(t + "")
      if (arguments.length < 2) {
        for (var r = P(this.node()), i = -1, o = e.length; ++i < o; )
          if (!r.contains(e[i])) return !1
        return !0
      }
      return this.each(("function" == typeof n ? L : n ? j : z)(e, n))
    },
    text: function (t) {
      return arguments.length
        ? this.each(null == t ? I : ("function" == typeof t ? B : D)(t))
        : this.node().textContent
    },
    html: function (t) {
      return arguments.length
        ? this.each(null == t ? X : ("function" == typeof t ? V : H)(t))
        : this.node().innerHTML
    },
    raise: function () {
      return this.each($)
    },
    lower: function () {
      return this.each(U)
    },
    append: function (t) {
      var n = "function" == typeof t ? t : o(t)
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments))
      })
    },
    insert: function (t, n) {
      var e = "function" == typeof t ? t : o(t),
        r = null == n ? Y : "function" == typeof n ? n : u(n)
      return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
      })
    },
    remove: function () {
      return this.each(F)
    },
    clone: function (t) {
      return this.select(t ? Z : G)
    },
    datum: function (t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__
    },
    on: function (t, n, e) {
      var r,
        i,
        o = tt(t + ""),
        a = o.length
      if (!(arguments.length < 2)) {
        for (u = n ? et : nt, null == e && (e = !1), r = 0; r < a; ++r) this.each(u(o[r], n, e))
        return this
      }
      var u = this.node().__on
      if (u)
        for (var s, l = 0, c = u.length; l < c; ++l)
          for (r = 0, s = u[l]; r < a; ++r)
            if ((i = o[r]).type === s.type && i.name === s.name) return s.value
    },
    dispatch: function (t, n) {
      return this.each(("function" == typeof n ? ot : it)(t, n))
    },
  }
  var ht,
    ft,
    pt = (1 === (ht = ct).length &&
      ((ft = ht),
      (ht = function (t, n) {
        return ct(ft(t), n)
      })),
    {
      left: function (t, n, e, r) {
        for (null == e && (e = 0), null == r && (r = t.length); e < r; ) {
          var i = (e + r) >>> 1
          ht(t[i], n) < 0 ? (e = i + 1) : (r = i)
        }
        return e
      },
      right: function (t, n, e, r) {
        for (null == e && (e = 0), null == r && (r = t.length); e < r; ) {
          var i = (e + r) >>> 1
          ht(t[i], n) > 0 ? (r = i) : (e = i + 1)
        }
        return e
      },
    }).right,
    dt = Math.sqrt(50),
    vt = Math.sqrt(10),
    yt = Math.sqrt(2)
  function gt(t, n, e) {
    var r = (n - t) / Math.max(0, e),
      i = Math.floor(Math.log(r) / Math.LN10),
      o = r / Math.pow(10, i)
    return i >= 0
      ? (o >= dt ? 10 : o >= vt ? 5 : o >= yt ? 2 : 1) * Math.pow(10, i)
      : -Math.pow(10, -i) / (o >= dt ? 10 : o >= vt ? 5 : o >= yt ? 2 : 1)
  }
  function mt(t, n) {
    switch (arguments.length) {
      case 0:
        break
      case 1:
        this.range(t)
        break
      default:
        this.range(n).domain(t)
    }
    return this
  }
  function _t(t, n, e) {
    ;(t.prototype = n.prototype = e), (e.constructor = t)
  }
  function wt(t, n) {
    var e = Object.create(t.prototype)
    for (var r in n) e[r] = n[r]
    return e
  }
  function xt() {}
  var bt = "\\s*([+-]?\\d+)\\s*",
    Mt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    At = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    Nt = /^#([0-9a-f]{3,8})$/,
    kt = new RegExp("^rgb\\(" + [bt, bt, bt] + "\\)$"),
    St = new RegExp("^rgb\\(" + [At, At, At] + "\\)$"),
    Et = new RegExp("^rgba\\(" + [bt, bt, bt, Mt] + "\\)$"),
    Tt = new RegExp("^rgba\\(" + [At, At, At, Mt] + "\\)$"),
    Ct = new RegExp("^hsl\\(" + [Mt, At, At] + "\\)$"),
    Pt = new RegExp("^hsla\\(" + [Mt, At, At, Mt] + "\\)$"),
    Rt = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    }
  function Ot() {
    return this.rgb().formatHex()
  }
  function qt() {
    return this.rgb().formatRgb()
  }
  function jt(t) {
    var n, e
    return (
      (t = (t + "").trim().toLowerCase()),
      (n = Nt.exec(t))
        ? ((e = n[1].length),
          (n = parseInt(n[1], 16)),
          6 === e
            ? zt(n)
            : 3 === e
            ? new Bt(
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                ((15 & n) << 4) | (15 & n),
                1
              )
            : 8 === e
            ? Lt((n >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, (255 & n) / 255)
            : 4 === e
            ? Lt(
                ((n >> 12) & 15) | ((n >> 8) & 240),
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                (((15 & n) << 4) | (15 & n)) / 255
              )
            : null)
        : (n = kt.exec(t))
        ? new Bt(n[1], n[2], n[3], 1)
        : (n = St.exec(t))
        ? new Bt((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
        : (n = Et.exec(t))
        ? Lt(n[1], n[2], n[3], n[4])
        : (n = Tt.exec(t))
        ? Lt((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
        : (n = Ct.exec(t))
        ? $t(n[1], n[2] / 100, n[3] / 100, 1)
        : (n = Pt.exec(t))
        ? $t(n[1], n[2] / 100, n[3] / 100, n[4])
        : Rt.hasOwnProperty(t)
        ? zt(Rt[t])
        : "transparent" === t
        ? new Bt(NaN, NaN, NaN, 0)
        : null
    )
  }
  function zt(t) {
    return new Bt((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1)
  }
  function Lt(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new Bt(t, n, e, r)
  }
  function It(t) {
    return (
      t instanceof xt || (t = jt(t)),
      t ? new Bt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Bt()
    )
  }
  function Dt(t, n, e, r) {
    return 1 === arguments.length ? It(t) : new Bt(t, n, e, null == r ? 1 : r)
  }
  function Bt(t, n, e, r) {
    ;(this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r)
  }
  function Xt() {
    return "#" + Vt(this.r) + Vt(this.g) + Vt(this.b)
  }
  function Ht() {
    var t = this.opacity
    return (
      (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") +
      Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
      ", " +
      Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
      ", " +
      Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
      (1 === t ? ")" : ", " + t + ")")
    )
  }
  function Vt(t) {
    return (
      ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
    )
  }
  function $t(t, n, e, r) {
    return (
      r <= 0 ? (t = n = e = NaN) : e <= 0 || e >= 1 ? (t = n = NaN) : n <= 0 && (t = NaN),
      new Yt(t, n, e, r)
    )
  }
  function Ut(t) {
    if (t instanceof Yt) return new Yt(t.h, t.s, t.l, t.opacity)
    if ((t instanceof xt || (t = jt(t)), !t)) return new Yt()
    if (t instanceof Yt) return t
    var n = (t = t.rgb()).r / 255,
      e = t.g / 255,
      r = t.b / 255,
      i = Math.min(n, e, r),
      o = Math.max(n, e, r),
      a = NaN,
      u = o - i,
      s = (o + i) / 2
    return (
      u
        ? ((a =
            n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4),
          (u /= s < 0.5 ? o + i : 2 - o - i),
          (a *= 60))
        : (u = s > 0 && s < 1 ? 0 : a),
      new Yt(a, u, s, t.opacity)
    )
  }
  function Yt(t, n, e, r) {
    ;(this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r)
  }
  function Ft(t, n, e) {
    return (
      255 *
      (t < 60
        ? n + ((e - n) * t) / 60
        : t < 180
        ? e
        : t < 240
        ? n + ((e - n) * (240 - t)) / 60
        : n)
    )
  }
  function Gt(t) {
    return function () {
      return t
    }
  }
  function Zt(t) {
    return 1 == (t = +t)
      ? Qt
      : function (n, e) {
          return e - n
            ? (function (t, n, e) {
                return (
                  (t = Math.pow(t, e)),
                  (n = Math.pow(n, e) - t),
                  (e = 1 / e),
                  function (r) {
                    return Math.pow(t + r * n, e)
                  }
                )
              })(n, e, t)
            : Gt(isNaN(n) ? e : n)
        }
  }
  function Qt(t, n) {
    var e = n - t
    return e
      ? (function (t, n) {
          return function (e) {
            return t + e * n
          }
        })(t, e)
      : Gt(isNaN(t) ? n : t)
  }
  _t(xt, jt, {
    copy: function (t) {
      return Object.assign(new this.constructor(), this, t)
    },
    displayable: function () {
      return this.rgb().displayable()
    },
    hex: Ot,
    formatHex: Ot,
    formatHsl: function () {
      return Ut(this).formatHsl()
    },
    formatRgb: qt,
    toString: qt,
  }),
    _t(
      Bt,
      Dt,
      wt(xt, {
        brighter: function (t) {
          return (
            (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
            new Bt(this.r * t, this.g * t, this.b * t, this.opacity)
          )
        },
        darker: function (t) {
          return (
            (t = null == t ? 0.7 : Math.pow(0.7, t)),
            new Bt(this.r * t, this.g * t, this.b * t, this.opacity)
          )
        },
        rgb: function () {
          return this
        },
        displayable: function () {
          return (
            -0.5 <= this.r &&
            this.r < 255.5 &&
            -0.5 <= this.g &&
            this.g < 255.5 &&
            -0.5 <= this.b &&
            this.b < 255.5 &&
            0 <= this.opacity &&
            this.opacity <= 1
          )
        },
        hex: Xt,
        formatHex: Xt,
        formatRgb: Ht,
        toString: Ht,
      })
    ),
    _t(
      Yt,
      function (t, n, e, r) {
        return 1 === arguments.length ? Ut(t) : new Yt(t, n, e, null == r ? 1 : r)
      },
      wt(xt, {
        brighter: function (t) {
          return (
            (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
            new Yt(this.h, this.s, this.l * t, this.opacity)
          )
        },
        darker: function (t) {
          return (
            (t = null == t ? 0.7 : Math.pow(0.7, t)),
            new Yt(this.h, this.s, this.l * t, this.opacity)
          )
        },
        rgb: function () {
          var t = (this.h % 360) + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < 0.5 ? e : 1 - e) * n,
            i = 2 * e - r
          return new Bt(
            Ft(t >= 240 ? t - 240 : t + 120, i, r),
            Ft(t, i, r),
            Ft(t < 120 ? t + 240 : t - 120, i, r),
            this.opacity
          )
        },
        displayable: function () {
          return (
            ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
            0 <= this.l &&
            this.l <= 1 &&
            0 <= this.opacity &&
            this.opacity <= 1
          )
        },
        formatHsl: function () {
          var t = this.opacity
          return (
            (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "hsl(" : "hsla(") +
            (this.h || 0) +
            ", " +
            100 * (this.s || 0) +
            "%, " +
            100 * (this.l || 0) +
            "%" +
            (1 === t ? ")" : ", " + t + ")")
          )
        },
      })
    )
  var Wt = (function t(n) {
    var e = Zt(n)
    function r(t, n) {
      var r = e((t = Dt(t)).r, (n = Dt(n)).r),
        i = e(t.g, n.g),
        o = e(t.b, n.b),
        a = Qt(t.opacity, n.opacity)
      return function (n) {
        return (t.r = r(n)), (t.g = i(n)), (t.b = o(n)), (t.opacity = a(n)), t + ""
      }
    }
    return (r.gamma = t), r
  })(1)
  function Jt(t, n) {
    n || (n = [])
    var e,
      r = t ? Math.min(n.length, t.length) : 0,
      i = n.slice()
    return function (o) {
      for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o
      return i
    }
  }
  function Kt(t, n) {
    var e,
      r = n ? n.length : 0,
      i = t ? Math.min(r, t.length) : 0,
      o = new Array(i),
      a = new Array(r)
    for (e = 0; e < i; ++e) o[e] = un(t[e], n[e])
    for (; e < r; ++e) a[e] = n[e]
    return function (t) {
      for (e = 0; e < i; ++e) a[e] = o[e](t)
      return a
    }
  }
  function tn(t, n) {
    var e = new Date()
    return (
      (t = +t),
      (n = +n),
      function (r) {
        return e.setTime(t * (1 - r) + n * r), e
      }
    )
  }
  function nn(t, n) {
    return (
      (t = +t),
      (n = +n),
      function (e) {
        return t * (1 - e) + n * e
      }
    )
  }
  function en(t, n) {
    var e,
      r = {},
      i = {}
    for (e in ((null !== t && "object" == typeof t) || (t = {}),
    (null !== n && "object" == typeof n) || (n = {}),
    n))
      e in t ? (r[e] = un(t[e], n[e])) : (i[e] = n[e])
    return function (t) {
      for (e in r) i[e] = r[e](t)
      return i
    }
  }
  var rn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    on = new RegExp(rn.source, "g")
  function an(t, n) {
    var e,
      r,
      i,
      o = (rn.lastIndex = on.lastIndex = 0),
      a = -1,
      u = [],
      s = []
    for (t += "", n += ""; (e = rn.exec(t)) && (r = on.exec(n)); )
      (i = r.index) > o && ((i = n.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
        (e = e[0]) === (r = r[0])
          ? u[a]
            ? (u[a] += r)
            : (u[++a] = r)
          : ((u[++a] = null), s.push({ i: a, x: nn(e, r) })),
        (o = on.lastIndex)
    return (
      o < n.length && ((i = n.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
      u.length < 2
        ? s[0]
          ? (function (t) {
              return function (n) {
                return t(n) + ""
              }
            })(s[0].x)
          : (function (t) {
              return function () {
                return t
              }
            })(n)
        : ((n = s.length),
          function (t) {
            for (var e, r = 0; r < n; ++r) u[(e = s[r]).i] = e.x(t)
            return u.join("")
          })
    )
  }
  function un(t, n) {
    var e,
      r,
      i = typeof n
    return null == n || "boolean" === i
      ? Gt(n)
      : ("number" === i
          ? nn
          : "string" === i
          ? (e = jt(n))
            ? ((n = e), Wt)
            : an
          : n instanceof jt
          ? Wt
          : n instanceof Date
          ? tn
          : ((r = n),
            !ArrayBuffer.isView(r) || r instanceof DataView
              ? Array.isArray(n)
                ? Kt
                : ("function" != typeof n.valueOf && "function" != typeof n.toString) ||
                  isNaN(n)
                ? en
                : nn
              : Jt))(t, n)
  }
  function sn(t, n) {
    return (
      (t = +t),
      (n = +n),
      function (e) {
        return Math.round(t * (1 - e) + n * e)
      }
    )
  }
  var ln,
    cn,
    hn,
    fn,
    pn = 180 / Math.PI,
    dn = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 }
  function vn(t, n, e, r, i, o) {
    var a, u, s
    return (
      (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
      (s = t * e + n * r) && ((e -= t * s), (r -= n * s)),
      (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (s /= u)),
      t * r < n * e && ((t = -t), (n = -n), (s = -s), (a = -a)),
      {
        translateX: i,
        translateY: o,
        rotate: Math.atan2(n, t) * pn,
        skewX: Math.atan(s) * pn,
        scaleX: a,
        scaleY: u,
      }
    )
  }
  function yn(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : ""
    }
    return function (o, a) {
      var u = [],
        s = []
      return (
        (o = t(o)),
        (a = t(a)),
        (function (t, r, i, o, a, u) {
          if (t !== i || r !== o) {
            var s = a.push("translate(", null, n, null, e)
            u.push({ i: s - 4, x: nn(t, i) }, { i: s - 2, x: nn(r, o) })
          } else (i || o) && a.push("translate(" + i + n + o + e)
        })(o.translateX, o.translateY, a.translateX, a.translateY, u, s),
        (function (t, n, e, o) {
          t !== n
            ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
              o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: nn(t, n) }))
            : n && e.push(i(e) + "rotate(" + n + r)
        })(o.rotate, a.rotate, u, s),
        (function (t, n, e, o) {
          t !== n
            ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: nn(t, n) })
            : n && e.push(i(e) + "skewX(" + n + r)
        })(o.skewX, a.skewX, u, s),
        (function (t, n, e, r, o, a) {
          if (t !== e || n !== r) {
            var u = o.push(i(o) + "scale(", null, ",", null, ")")
            a.push({ i: u - 4, x: nn(t, e) }, { i: u - 2, x: nn(n, r) })
          } else (1 === e && 1 === r) || o.push(i(o) + "scale(" + e + "," + r + ")")
        })(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, s),
        (o = a = null),
        function (t) {
          for (var n, e = -1, r = s.length; ++e < r; ) u[(n = s[e]).i] = n.x(t)
          return u.join("")
        }
      )
    }
  }
  var gn = yn(
      function (t) {
        return "none" === t
          ? dn
          : (ln ||
              ((ln = document.createElement("DIV")),
              (cn = document.documentElement),
              (hn = document.defaultView)),
            (ln.style.transform = t),
            (t = hn.getComputedStyle(cn.appendChild(ln), null).getPropertyValue("transform")),
            cn.removeChild(ln),
            vn(+(t = t.slice(7, -1).split(","))[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
      },
      "px, ",
      "px)",
      "deg)"
    ),
    mn = yn(
      function (t) {
        return null == t
          ? dn
          : (fn || (fn = document.createElementNS("http://www.w3.org/2000/svg", "g")),
            fn.setAttribute("transform", t),
            (t = fn.transform.baseVal.consolidate())
              ? vn((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
              : dn)
      },
      ", ",
      ")",
      ")"
    )
  function _n(t) {
    return +t
  }
  var wn = [0, 1]
  function xn(t) {
    return t
  }
  function bn(t, n) {
    return (n -= t = +t)
      ? function (e) {
          return (e - t) / n
        }
      : ((e = isNaN(n) ? NaN : 0.5),
        function () {
          return e
        })
    var e
  }
  function Mn(t, n, e) {
    var r = t[0],
      i = t[1],
      o = n[0],
      a = n[1]
    return (
      i < r ? ((r = bn(i, r)), (o = e(a, o))) : ((r = bn(r, i)), (o = e(o, a))),
      function (t) {
        return o(r(t))
      }
    )
  }
  function An(t, n, e) {
    var r = Math.min(t.length, n.length) - 1,
      i = new Array(r),
      o = new Array(r),
      a = -1
    for (t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse())); ++a < r; )
      (i[a] = bn(t[a], t[a + 1])), (o[a] = e(n[a], n[a + 1]))
    return function (n) {
      var e = pt(t, n, 1, r) - 1
      return o[e](i[e](n))
    }
  }
  function Nn(t, n) {
    return n
      .domain(t.domain())
      .range(t.range())
      .interpolate(t.interpolate())
      .clamp(t.clamp())
      .unknown(t.unknown())
  }
  function kn() {
    var t,
      n,
      e,
      r,
      i,
      o,
      a = wn,
      u = wn,
      s = un,
      l = xn
    function c() {
      var t,
        n,
        e,
        s = Math.min(a.length, u.length)
      return (
        l !== xn &&
          ((t = a[0]),
          (n = a[s - 1]),
          t > n && ((e = t), (t = n), (n = e)),
          (l = function (e) {
            return Math.max(t, Math.min(n, e))
          })),
        (r = s > 2 ? An : Mn),
        (i = o = null),
        h
      )
    }
    function h(n) {
      return isNaN((n = +n)) ? e : (i || (i = r(a.map(t), u, s)))(t(l(n)))
    }
    return (
      (h.invert = function (e) {
        return l(n((o || (o = r(u, a.map(t), nn)))(e)))
      }),
      (h.domain = function (t) {
        return arguments.length ? ((a = Array.from(t, _n)), c()) : a.slice()
      }),
      (h.range = function (t) {
        return arguments.length ? ((u = Array.from(t)), c()) : u.slice()
      }),
      (h.rangeRound = function (t) {
        return (u = Array.from(t)), (s = sn), c()
      }),
      (h.clamp = function (t) {
        return arguments.length ? ((l = !!t || xn), c()) : l !== xn
      }),
      (h.interpolate = function (t) {
        return arguments.length ? ((s = t), c()) : s
      }),
      (h.unknown = function (t) {
        return arguments.length ? ((e = t), h) : e
      }),
      function (e, r) {
        return (t = e), (n = r), c()
      }
    )
  }
  function Sn() {
    return kn()(xn, xn)
  }
  function En(t, n) {
    if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null
    var e,
      r = t.slice(0, e)
    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
  }
  function Tn(t) {
    return (t = En(Math.abs(t))) ? t[1] : NaN
  }
  var Cn,
    Pn = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
  function Rn(t) {
    if (!(n = Pn.exec(t))) throw new Error("invalid format: " + t)
    var n
    return new On({
      fill: n[1],
      align: n[2],
      sign: n[3],
      symbol: n[4],
      zero: n[5],
      width: n[6],
      comma: n[7],
      precision: n[8] && n[8].slice(1),
      trim: n[9],
      type: n[10],
    })
  }
  function On(t) {
    ;(this.fill = void 0 === t.fill ? " " : t.fill + ""),
      (this.align = void 0 === t.align ? ">" : t.align + ""),
      (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
      (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
      (this.zero = !!t.zero),
      (this.width = void 0 === t.width ? void 0 : +t.width),
      (this.comma = !!t.comma),
      (this.precision = void 0 === t.precision ? void 0 : +t.precision),
      (this.trim = !!t.trim),
      (this.type = void 0 === t.type ? "" : t.type + "")
  }
  function qn(t, n) {
    var e = En(t, n)
    if (!e) return t + ""
    var r = e[0],
      i = e[1]
    return i < 0
      ? "0." + new Array(-i).join("0") + r
      : r.length > i + 1
      ? r.slice(0, i + 1) + "." + r.slice(i + 1)
      : r + new Array(i - r.length + 2).join("0")
  }
  ;(Rn.prototype = On.prototype),
    (On.prototype.toString = function () {
      return (
        this.fill +
        this.align +
        this.sign +
        this.symbol +
        (this.zero ? "0" : "") +
        (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
        (this.comma ? "," : "") +
        (void 0 === this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
        (this.trim ? "~" : "") +
        this.type
      )
    })
  var jn = {
    "%": function (t, n) {
      return (100 * t).toFixed(n)
    },
    b: function (t) {
      return Math.round(t).toString(2)
    },
    c: function (t) {
      return t + ""
    },
    d: function (t) {
      return Math.round(t).toString(10)
    },
    e: function (t, n) {
      return t.toExponential(n)
    },
    f: function (t, n) {
      return t.toFixed(n)
    },
    g: function (t, n) {
      return t.toPrecision(n)
    },
    o: function (t) {
      return Math.round(t).toString(8)
    },
    p: function (t, n) {
      return qn(100 * t, n)
    },
    r: qn,
    s: function (t, n) {
      var e = En(t, n)
      if (!e) return t + ""
      var r = e[0],
        i = e[1],
        o = i - (Cn = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
        a = r.length
      return o === a
        ? r
        : o > a
        ? r + new Array(o - a + 1).join("0")
        : o > 0
        ? r.slice(0, o) + "." + r.slice(o)
        : "0." + new Array(1 - o).join("0") + En(t, Math.max(0, n + o - 1))[0]
    },
    X: function (t) {
      return Math.round(t).toString(16).toUpperCase()
    },
    x: function (t) {
      return Math.round(t).toString(16)
    },
  }
  function zn(t) {
    return t
  }
  var Ln,
    In,
    Dn,
    Bn = Array.prototype.map,
    Xn = ["y", "z", "a", "f", "p", "n", "??", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"]
  function Hn(t) {
    var n,
      e,
      r =
        void 0 === t.grouping || void 0 === t.thousands
          ? zn
          : ((n = Bn.call(t.grouping, Number)),
            (e = t.thousands + ""),
            function (t, r) {
              for (
                var i = t.length, o = [], a = 0, u = n[0], s = 0;
                i > 0 &&
                u > 0 &&
                (s + u + 1 > r && (u = Math.max(1, r - s)),
                o.push(t.substring((i -= u), i + u)),
                !((s += u + 1) > r));

              )
                u = n[(a = (a + 1) % n.length)]
              return o.reverse().join(e)
            }),
      i = void 0 === t.currency ? "" : t.currency[0] + "",
      o = void 0 === t.currency ? "" : t.currency[1] + "",
      a = void 0 === t.decimal ? "." : t.decimal + "",
      u =
        void 0 === t.numerals
          ? zn
          : (function (t) {
              return function (n) {
                return n.replace(/[0-9]/g, function (n) {
                  return t[+n]
                })
              }
            })(Bn.call(t.numerals, String)),
      s = void 0 === t.percent ? "%" : t.percent + "",
      l = void 0 === t.minus ? "-" : t.minus + "",
      c = void 0 === t.nan ? "NaN" : t.nan + ""
    function h(t) {
      var n = (t = Rn(t)).fill,
        e = t.align,
        h = t.sign,
        f = t.symbol,
        p = t.zero,
        d = t.width,
        v = t.comma,
        y = t.precision,
        g = t.trim,
        m = t.type
      "n" === m
        ? ((v = !0), (m = "g"))
        : jn[m] || (void 0 === y && (y = 12), (g = !0), (m = "g")),
        (p || ("0" === n && "=" === e)) && ((p = !0), (n = "0"), (e = "="))
      var _ = "$" === f ? i : "#" === f && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "",
        w = "$" === f ? o : /[%p]/.test(m) ? s : "",
        x = jn[m],
        b = /[defgprs%]/.test(m)
      function M(t) {
        var i,
          o,
          s,
          f = _,
          M = w
        if ("c" === m) (M = x(t) + M), (t = "")
        else {
          var A = (t = +t) < 0 || 1 / t < 0
          if (
            ((t = isNaN(t) ? c : x(Math.abs(t), y)),
            g &&
              (t = (function (t) {
                t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                  switch (t[r]) {
                    case ".":
                      i = n = r
                      break
                    case "0":
                      0 === i && (i = r), (n = r)
                      break
                    default:
                      if (!+t[r]) break t
                      i > 0 && (i = 0)
                  }
                return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t
              })(t)),
            A && 0 == +t && "+" !== h && (A = !1),
            (f = (A ? ("(" === h ? h : l) : "-" === h || "(" === h ? "" : h) + f),
            (M = ("s" === m ? Xn[8 + Cn / 3] : "") + M + (A && "(" === h ? ")" : "")),
            b)
          )
            for (i = -1, o = t.length; ++i < o; )
              if (48 > (s = t.charCodeAt(i)) || s > 57) {
                ;(M = (46 === s ? a + t.slice(i + 1) : t.slice(i)) + M), (t = t.slice(0, i))
                break
              }
        }
        v && !p && (t = r(t, 1 / 0))
        var N = f.length + t.length + M.length,
          k = N < d ? new Array(d - N + 1).join(n) : ""
        switch ((v && p && ((t = r(k + t, k.length ? d - M.length : 1 / 0)), (k = "")), e)) {
          case "<":
            t = f + t + M + k
            break
          case "=":
            t = f + k + t + M
            break
          case "^":
            t = k.slice(0, (N = k.length >> 1)) + f + t + M + k.slice(N)
            break
          default:
            t = k + f + t + M
        }
        return u(t)
      }
      return (
        (y =
          void 0 === y
            ? 6
            : /[gprs]/.test(m)
            ? Math.max(1, Math.min(21, y))
            : Math.max(0, Math.min(20, y))),
        (M.toString = function () {
          return t + ""
        }),
        M
      )
    }
    return {
      format: h,
      formatPrefix: function (t, n) {
        var e = h((((t = Rn(t)).type = "f"), t)),
          r = 3 * Math.max(-8, Math.min(8, Math.floor(Tn(n) / 3))),
          i = Math.pow(10, -r),
          o = Xn[8 + r / 3]
        return function (t) {
          return e(i * t) + o
        }
      },
    }
  }
  function Vn(t, n, e, r) {
    var i,
      o = (function (t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
          i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
          o = r / i
        return o >= dt ? (i *= 10) : o >= vt ? (i *= 5) : o >= yt && (i *= 2), n < t ? -i : i
      })(t, n, e)
    switch ((r = Rn(null == r ? ",f" : r)).type) {
      case "s":
        var a = Math.max(Math.abs(t), Math.abs(n))
        return (
          null != r.precision ||
            isNaN(
              (i = (function (t, n) {
                return Math.max(
                  0,
                  3 * Math.max(-8, Math.min(8, Math.floor(Tn(n) / 3))) - Tn(Math.abs(t))
                )
              })(o, a))
            ) ||
            (r.precision = i),
          Dn(r, a)
        )
      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        null != r.precision ||
          isNaN(
            (i = (function (t, n) {
              return (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, Tn(n) - Tn(t)) + 1
            })(o, Math.max(Math.abs(t), Math.abs(n))))
          ) ||
          (r.precision = i - ("e" === r.type))
        break
      case "f":
      case "%":
        null != r.precision ||
          isNaN(
            (i = (function (t) {
              return Math.max(0, -Tn(Math.abs(t)))
            })(o))
          ) ||
          (r.precision = i - 2 * ("%" === r.type))
    }
    return In(r)
  }
  function $n(t) {
    var n = t.domain
    return (
      (t.ticks = function (t) {
        var e = n()
        return (function (t, n, e) {
          var r,
            i,
            o,
            a,
            u = -1
          if (((e = +e), (t = +t) === (n = +n) && e > 0)) return [t]
          if (
            ((r = n < t) && ((i = t), (t = n), (n = i)),
            0 === (a = gt(t, n, e)) || !isFinite(a))
          )
            return []
          if (a > 0)
            for (
              t = Math.ceil(t / a),
                n = Math.floor(n / a),
                o = new Array((i = Math.ceil(n - t + 1)));
              ++u < i;

            )
              o[u] = (t + u) * a
          else
            for (
              t = Math.floor(t * a),
                n = Math.ceil(n * a),
                o = new Array((i = Math.ceil(t - n + 1)));
              ++u < i;

            )
              o[u] = (t - u) / a
          return r && o.reverse(), o
        })(e[0], e[e.length - 1], null == t ? 10 : t)
      }),
      (t.tickFormat = function (t, e) {
        var r = n()
        return Vn(r[0], r[r.length - 1], null == t ? 10 : t, e)
      }),
      (t.nice = function (e) {
        null == e && (e = 10)
        var r,
          i = n(),
          o = 0,
          a = i.length - 1,
          u = i[o],
          s = i[a]
        return (
          s < u && ((r = u), (u = s), (s = r), (r = o), (o = a), (a = r)),
          (r = gt(u, s, e)) > 0
            ? (r = gt((u = Math.floor(u / r) * r), (s = Math.ceil(s / r) * r), e))
            : r < 0 && (r = gt((u = Math.ceil(u * r) / r), (s = Math.floor(s * r) / r), e)),
          r > 0
            ? ((i[o] = Math.floor(u / r) * r), (i[a] = Math.ceil(s / r) * r), n(i))
            : r < 0 && ((i[o] = Math.ceil(u * r) / r), (i[a] = Math.floor(s * r) / r), n(i)),
          t
        )
      }),
      t
    )
  }
  function Un() {
    var t = Sn()
    return (
      (t.copy = function () {
        return Nn(t, Un())
      }),
      mt.apply(t, arguments),
      $n(t)
    )
  }
  function Yn(t) {
    return function (n) {
      return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t)
    }
  }
  function Fn(t) {
    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t)
  }
  function Gn(t) {
    return t < 0 ? -t * t : t * t
  }
  function Zn(t) {
    var n = t(xn, xn),
      e = 1
    function r() {
      return 1 === e ? t(xn, xn) : 0.5 === e ? t(Fn, Gn) : t(Yn(e), Yn(1 / e))
    }
    return (
      (n.exponent = function (t) {
        return arguments.length ? ((e = +t), r()) : e
      }),
      $n(n)
    )
  }
  function Qn(t) {
    var n = 0,
      e = t.children,
      r = e && e.length
    if (r) for (; --r >= 0; ) n += e[r].value
    else n = 1
    t.value = n
  }
  function Wn(t, n) {
    var e,
      r,
      i,
      o,
      a,
      u = new ne(t),
      s = +t.value && (u.value = t.value),
      l = [u]
    for (null == n && (n = Jn); (e = l.pop()); )
      if ((s && (e.value = +e.data.value), (i = n(e.data)) && (a = i.length)))
        for (e.children = new Array(a), o = a - 1; o >= 0; --o)
          l.push((r = e.children[o] = new ne(i[o]))), (r.parent = e), (r.depth = e.depth + 1)
    return u.eachBefore(te)
  }
  function Jn(t) {
    return t.children
  }
  function Kn(t) {
    t.data = t.data.data
  }
  function te(t) {
    var n = 0
    do {
      t.height = n
    } while ((t = t.parent) && t.height < ++n)
  }
  function ne(t) {
    ;(this.data = t), (this.depth = this.height = 0), (this.parent = null)
  }
  function ee(t) {
    ;(t.x0 = Math.round(t.x0)),
      (t.y0 = Math.round(t.y0)),
      (t.x1 = Math.round(t.x1)),
      (t.y1 = Math.round(t.y1))
  }
  function re() {
    var t = 1,
      n = 1,
      e = 0,
      r = !1
    function i(i) {
      var o = i.height + 1
      return (
        (i.x0 = i.y0 = e),
        (i.x1 = t),
        (i.y1 = n / o),
        i.eachBefore(
          (function (t, n) {
            return function (r) {
              r.children &&
                (function (t, n, e, r, i) {
                  for (
                    var o,
                      a = t.children,
                      u = -1,
                      s = a.length,
                      l = t.value && (r - n) / t.value;
                    ++u < s;

                  )
                    ((o = a[u]).y0 = e), (o.y1 = i), (o.x0 = n), (o.x1 = n += o.value * l)
                })(r, r.x0, (t * (r.depth + 1)) / n, r.x1, (t * (r.depth + 2)) / n)
              var i = r.x0,
                o = r.y0,
                a = r.x1 - e,
                u = r.y1 - e
              a < i && (i = a = (i + a) / 2),
                u < o && (o = u = (o + u) / 2),
                (r.x0 = i),
                (r.y0 = o),
                (r.x1 = a),
                (r.y1 = u)
            }
          })(n, o)
        ),
        r && i.eachBefore(ee),
        i
      )
    }
    return (
      (i.round = function (t) {
        return arguments.length ? ((r = !!t), i) : r
      }),
      (i.size = function (e) {
        return arguments.length ? ((t = +e[0]), (n = +e[1]), i) : [t, n]
      }),
      (i.padding = function (t) {
        return arguments.length ? ((e = +t), i) : e
      }),
      i
    )
  }
  ;(Ln = Hn({ decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""], minus: "-" })),
    (In = Ln.format),
    (Dn = Ln.formatPrefix),
    (ne.prototype = Wn.prototype = {
      constructor: ne,
      count: function () {
        return this.eachAfter(Qn)
      },
      each: function (t) {
        var n,
          e,
          r,
          i,
          o = this,
          a = [o]
        do {
          for (n = a.reverse(), a = []; (o = n.pop()); )
            if ((t(o), (e = o.children))) for (r = 0, i = e.length; r < i; ++r) a.push(e[r])
        } while (a.length)
        return this
      },
      eachAfter: function (t) {
        for (var n, e, r, i = this, o = [i], a = []; (i = o.pop()); )
          if ((a.push(i), (n = i.children))) for (e = 0, r = n.length; e < r; ++e) o.push(n[e])
        for (; (i = a.pop()); ) t(i)
        return this
      },
      eachBefore: function (t) {
        for (var n, e, r = this, i = [r]; (r = i.pop()); )
          if ((t(r), (n = r.children))) for (e = n.length - 1; e >= 0; --e) i.push(n[e])
        return this
      },
      sum: function (t) {
        return this.eachAfter(function (n) {
          for (var e = +t(n.data) || 0, r = n.children, i = r && r.length; --i >= 0; )
            e += r[i].value
          n.value = e
        })
      },
      sort: function (t) {
        return this.eachBefore(function (n) {
          n.children && n.children.sort(t)
        })
      },
      path: function (t) {
        for (
          var n = this,
            e = (function (t, n) {
              if (t === n) return t
              var e = t.ancestors(),
                r = n.ancestors(),
                i = null
              ;(t = e.pop()), (n = r.pop())
              for (; t === n; ) (i = t), (t = e.pop()), (n = r.pop())
              return i
            })(n, t),
            r = [n];
          n !== e;

        )
          (n = n.parent), r.push(n)
        for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent)
        return r
      },
      ancestors: function () {
        for (var t = this, n = [t]; (t = t.parent); ) n.push(t)
        return n
      },
      descendants: function () {
        var t = []
        return (
          this.each(function (n) {
            t.push(n)
          }),
          t
        )
      },
      leaves: function () {
        var t = []
        return (
          this.eachBefore(function (n) {
            n.children || t.push(n)
          }),
          t
        )
      },
      links: function () {
        var t = this,
          n = []
        return (
          t.each(function (e) {
            e !== t && n.push({ source: e.parent, target: e })
          }),
          n
        )
      },
      copy: function () {
        return Wn(this).eachBefore(Kn)
      },
    })
  var ie = Math.PI,
    oe = 2 * ie,
    ae = oe - 1e-6
  function ue() {
    ;(this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "")
  }
  function se() {
    return new ue()
  }
  function le(t) {
    return function () {
      return t
    }
  }
  ue.prototype = se.prototype = {
    constructor: ue,
    moveTo: function (t, n) {
      this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
    },
    closePath: function () {
      null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"))
    },
    lineTo: function (t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
    },
    quadraticCurveTo: function (t, n, e, r) {
      this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
    },
    bezierCurveTo: function (t, n, e, r, i, o) {
      this._ +=
        "C" +
        +t +
        "," +
        +n +
        "," +
        +e +
        "," +
        +r +
        "," +
        (this._x1 = +i) +
        "," +
        (this._y1 = +o)
    },
    arcTo: function (t, n, e, r, i) {
      ;(t = +t), (n = +n), (e = +e), (r = +r), (i = +i)
      var o = this._x1,
        a = this._y1,
        u = e - t,
        s = r - n,
        l = o - t,
        c = a - n,
        h = l * l + c * c
      if (i < 0) throw new Error("negative radius: " + i)
      if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n)
      else if (h > 1e-6)
        if (Math.abs(c * u - s * l) > 1e-6 && i) {
          var f = e - o,
            p = r - a,
            d = u * u + s * s,
            v = f * f + p * p,
            y = Math.sqrt(d),
            g = Math.sqrt(h),
            m = i * Math.tan((ie - Math.acos((d + h - v) / (2 * y * g))) / 2),
            _ = m / g,
            w = m / y
          Math.abs(_ - 1) > 1e-6 && (this._ += "L" + (t + _ * l) + "," + (n + _ * c)),
            (this._ +=
              "A" +
              i +
              "," +
              i +
              ",0,0," +
              +(c * f > l * p) +
              "," +
              (this._x1 = t + w * u) +
              "," +
              (this._y1 = n + w * s))
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n)
      else;
    },
    arc: function (t, n, e, r, i, o) {
      ;(t = +t), (n = +n), (o = !!o)
      var a = (e = +e) * Math.cos(r),
        u = e * Math.sin(r),
        s = t + a,
        l = n + u,
        c = 1 ^ o,
        h = o ? r - i : i - r
      if (e < 0) throw new Error("negative radius: " + e)
      null === this._x1
        ? (this._ += "M" + s + "," + l)
        : (Math.abs(this._x1 - s) > 1e-6 || Math.abs(this._y1 - l) > 1e-6) &&
          (this._ += "L" + s + "," + l),
        e &&
          (h < 0 && (h = (h % oe) + oe),
          h > ae
            ? (this._ +=
                "A" +
                e +
                "," +
                e +
                ",0,1," +
                c +
                "," +
                (t - a) +
                "," +
                (n - u) +
                "A" +
                e +
                "," +
                e +
                ",0,1," +
                c +
                "," +
                (this._x1 = s) +
                "," +
                (this._y1 = l))
            : h > 1e-6 &&
              (this._ +=
                "A" +
                e +
                "," +
                e +
                ",0," +
                +(h >= ie) +
                "," +
                c +
                "," +
                (this._x1 = t + e * Math.cos(i)) +
                "," +
                (this._y1 = n + e * Math.sin(i))))
    },
    rect: function (t, n, e, r) {
      this._ +=
        "M" +
        (this._x0 = this._x1 = +t) +
        "," +
        (this._y0 = this._y1 = +n) +
        "h" +
        +e +
        "v" +
        +r +
        "h" +
        -e +
        "Z"
    },
    toString: function () {
      return this._
    },
  }
  var ce = Math.abs,
    he = Math.atan2,
    fe = Math.cos,
    pe = Math.max,
    de = Math.min,
    ve = Math.sin,
    ye = Math.sqrt,
    ge = Math.PI,
    me = ge / 2,
    _e = 2 * ge
  function we(t) {
    return t > 1 ? 0 : t < -1 ? ge : Math.acos(t)
  }
  function xe(t) {
    return t >= 1 ? me : t <= -1 ? -me : Math.asin(t)
  }
  function be(t) {
    return t.innerRadius
  }
  function Me(t) {
    return t.outerRadius
  }
  function Ae(t) {
    return t.startAngle
  }
  function Ne(t) {
    return t.endAngle
  }
  function ke(t) {
    return t && t.padAngle
  }
  function Se(t, n, e, r, i, o, a, u) {
    var s = e - t,
      l = r - n,
      c = a - i,
      h = u - o,
      f = h * s - c * l
    if (!(f * f < 1e-12)) return [t + (f = (c * (n - o) - h * (t - i)) / f) * s, n + f * l]
  }
  function Ee(t, n, e, r, i, o, a) {
    var u = t - e,
      s = n - r,
      l = (a ? o : -o) / ye(u * u + s * s),
      c = l * s,
      h = -l * u,
      f = t + c,
      p = n + h,
      d = e + c,
      v = r + h,
      y = (f + d) / 2,
      g = (p + v) / 2,
      m = d - f,
      _ = v - p,
      w = m * m + _ * _,
      x = i - o,
      b = f * v - d * p,
      M = (_ < 0 ? -1 : 1) * ye(pe(0, x * x * w - b * b)),
      A = (b * _ - m * M) / w,
      N = (-b * m - _ * M) / w,
      k = (b * _ + m * M) / w,
      S = (-b * m + _ * M) / w,
      E = A - y,
      T = N - g,
      C = k - y,
      P = S - g
    return (
      E * E + T * T > C * C + P * P && ((A = k), (N = S)),
      { cx: A, cy: N, x01: -c, y01: -h, x11: A * (i / x - 1), y11: N * (i / x - 1) }
    )
  }
  var Te = { value: function () {} }
  function Ce() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t))
        throw new Error("illegal type: " + t)
      r[t] = []
    }
    return new Pe(r)
  }
  function Pe(t) {
    this._ = t
  }
  function Re(t, n) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var e = "",
          r = t.indexOf(".")
        if ((r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))), t && !n.hasOwnProperty(t)))
          throw new Error("unknown type: " + t)
        return { type: t, name: e }
      })
  }
  function Oe(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r) if ((e = t[r]).name === n) return e.value
  }
  function qe(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r)
      if (t[r].name === n) {
        ;(t[r] = Te), (t = t.slice(0, r).concat(t.slice(r + 1)))
        break
      }
    return null != e && t.push({ name: n, value: e }), t
  }
  Pe.prototype = Ce.prototype = {
    constructor: Pe,
    on: function (t, n) {
      var e,
        r = this._,
        i = Re(t + "", r),
        o = -1,
        a = i.length
      if (!(arguments.length < 2)) {
        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n)
        for (; ++o < a; )
          if ((e = (t = i[o]).type)) r[e] = qe(r[e], t.name, n)
          else if (null == n) for (e in r) r[e] = qe(r[e], t.name, null)
        return this
      }
      for (; ++o < a; ) if ((e = (t = i[o]).type) && (e = Oe(r[e], t.name))) return e
    },
    copy: function () {
      var t = {},
        n = this._
      for (var e in n) t[e] = n[e].slice()
      return new Pe(t)
    },
    call: function (t, n) {
      if ((e = arguments.length - 2) > 0)
        for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2]
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t)
      for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
    },
    apply: function (t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t)
      for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
    },
  }
  var je,
    ze,
    Le = 0,
    Ie = 0,
    De = 0,
    Be = 0,
    Xe = 0,
    He = 0,
    Ve = "object" == typeof performance && performance.now ? performance : Date,
    $e =
      "object" == typeof window && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (t) {
            setTimeout(t, 17)
          }
  function Ue() {
    return Xe || ($e(Ye), (Xe = Ve.now() + He))
  }
  function Ye() {
    Xe = 0
  }
  function Fe() {
    this._call = this._time = this._next = null
  }
  function Ge(t, n, e) {
    var r = new Fe()
    return r.restart(t, n, e), r
  }
  function Ze() {
    ;(Xe = (Be = Ve.now()) + He), (Le = Ie = 0)
    try {
      !(function () {
        Ue(), ++Le
        for (var t, n = je; n; ) (t = Xe - n._time) >= 0 && n._call.call(null, t), (n = n._next)
        --Le
      })()
    } finally {
      ;(Le = 0),
        (function () {
          var t,
            n,
            e = je,
            r = 1 / 0
          for (; e; )
            e._call
              ? (r > e._time && (r = e._time), (t = e), (e = e._next))
              : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (je = n)))
          ;(ze = t), We(r)
        })(),
        (Xe = 0)
    }
  }
  function Qe() {
    var t = Ve.now(),
      n = t - Be
    n > 1e3 && ((He -= n), (Be = t))
  }
  function We(t) {
    Le ||
      (Ie && (Ie = clearTimeout(Ie)),
      t - Xe > 24
        ? (t < 1 / 0 && (Ie = setTimeout(Ze, t - Ve.now() - He)),
          De && (De = clearInterval(De)))
        : (De || ((Be = Ve.now()), (De = setInterval(Qe, 1e3))), (Le = 1), $e(Ze)))
  }
  function Je(t, n, e) {
    var r = new Fe()
    return (
      (n = null == n ? 0 : +n),
      r.restart(
        function (e) {
          r.stop(), t(e + n)
        },
        n,
        e
      ),
      r
    )
  }
  Fe.prototype = Ge.prototype = {
    constructor: Fe,
    restart: function (t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function")
      ;(e = (null == e ? Ue() : +e) + (null == n ? 0 : +n)),
        this._next || ze === this || (ze ? (ze._next = this) : (je = this), (ze = this)),
        (this._call = t),
        (this._time = e),
        We()
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), We())
    },
  }
  var Ke = Ce("start", "end", "cancel", "interrupt"),
    tr = []
  function nr(t, n, e, r, i, o) {
    var a = t.__transition
    if (a) {
      if (e in a) return
    } else t.__transition = {}
    !(function (t, n, e) {
      var r,
        i = t.__transition
      function o(s) {
        var l, c, h, f
        if (1 !== e.state) return u()
        for (l in i)
          if ((f = i[l]).name === e.name) {
            if (3 === f.state) return Je(o)
            4 === f.state
              ? ((f.state = 6),
                f.timer.stop(),
                f.on.call("interrupt", t, t.__data__, f.index, f.group),
                delete i[l])
              : +l < n &&
                ((f.state = 6),
                f.timer.stop(),
                f.on.call("cancel", t, t.__data__, f.index, f.group),
                delete i[l])
          }
        if (
          (Je(function () {
            3 === e.state && ((e.state = 4), e.timer.restart(a, e.delay, e.time), a(s))
          }),
          (e.state = 2),
          e.on.call("start", t, t.__data__, e.index, e.group),
          2 === e.state)
        ) {
          for (e.state = 3, r = new Array((h = e.tween.length)), l = 0, c = -1; l < h; ++l)
            (f = e.tween[l].value.call(t, t.__data__, e.index, e.group)) && (r[++c] = f)
          r.length = c + 1
        }
      }
      function a(n) {
        for (
          var i =
              n < e.duration
                ? e.ease.call(null, n / e.duration)
                : (e.timer.restart(u), (e.state = 5), 1),
            o = -1,
            a = r.length;
          ++o < a;

        )
          r[o].call(t, i)
        5 === e.state && (e.on.call("end", t, t.__data__, e.index, e.group), u())
      }
      function u() {
        for (var r in ((e.state = 6), e.timer.stop(), delete i[n], i)) return
        delete t.__transition
      }
      ;(i[n] = e),
        (e.timer = Ge(
          function (t) {
            ;(e.state = 1), e.timer.restart(o, e.delay, e.time), e.delay <= t && o(t - e.delay)
          },
          0,
          e.time
        ))
    })(t, e, {
      name: n,
      index: r,
      group: i,
      on: Ke,
      tween: tr,
      time: o.time,
      delay: o.delay,
      duration: o.duration,
      ease: o.ease,
      timer: null,
      state: 0,
    })
  }
  function er(t, n) {
    var e = ir(t, n)
    if (e.state > 0) throw new Error("too late; already scheduled")
    return e
  }
  function rr(t, n) {
    var e = ir(t, n)
    if (e.state > 3) throw new Error("too late; already running")
    return e
  }
  function ir(t, n) {
    var e = t.__transition
    if (!e || !(e = e[n])) throw new Error("transition not found")
    return e
  }
  function or(t, n) {
    var e, r
    return function () {
      var i = rr(this, t),
        o = i.tween
      if (o !== e)
        for (var a = 0, u = (r = e = o).length; a < u; ++a)
          if (r[a].name === n) {
            ;(r = r.slice()).splice(a, 1)
            break
          }
      i.tween = r
    }
  }
  function ar(t, n, e) {
    var r, i
    if ("function" != typeof e) throw new Error()
    return function () {
      var o = rr(this, t),
        a = o.tween
      if (a !== r) {
        i = (r = a).slice()
        for (var u = { name: n, value: e }, s = 0, l = i.length; s < l; ++s)
          if (i[s].name === n) {
            i[s] = u
            break
          }
        s === l && i.push(u)
      }
      o.tween = i
    }
  }
  function ur(t, n, e) {
    var r = t._id
    return (
      t.each(function () {
        var t = rr(this, r)
        ;(t.value || (t.value = {}))[n] = e.apply(this, arguments)
      }),
      function (t) {
        return ir(t, r).value[n]
      }
    )
  }
  function sr(t, n) {
    var e
    return ("number" == typeof n
      ? nn
      : n instanceof jt
      ? Wt
      : (e = jt(n))
      ? ((n = e), Wt)
      : an)(t, n)
  }
  function lr(t) {
    return function () {
      this.removeAttribute(t)
    }
  }
  function cr(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local)
    }
  }
  function hr(t, n, e) {
    var r,
      i,
      o = e + ""
    return function () {
      var a = this.getAttribute(t)
      return a === o ? null : a === r ? i : (i = n((r = a), e))
    }
  }
  function fr(t, n, e) {
    var r,
      i,
      o = e + ""
    return function () {
      var a = this.getAttributeNS(t.space, t.local)
      return a === o ? null : a === r ? i : (i = n((r = a), e))
    }
  }
  function pr(t, n, e) {
    var r, i, o
    return function () {
      var a,
        u,
        s = e(this)
      if (null != s)
        return (a = this.getAttribute(t)) === (u = s + "")
          ? null
          : a === r && u === i
          ? o
          : ((i = u), (o = n((r = a), s)))
      this.removeAttribute(t)
    }
  }
  function dr(t, n, e) {
    var r, i, o
    return function () {
      var a,
        u,
        s = e(this)
      if (null != s)
        return (a = this.getAttributeNS(t.space, t.local)) === (u = s + "")
          ? null
          : a === r && u === i
          ? o
          : ((i = u), (o = n((r = a), s)))
      this.removeAttributeNS(t.space, t.local)
    }
  }
  function vr(t, n) {
    return function (e) {
      this.setAttribute(t, n.call(this, e))
    }
  }
  function yr(t, n) {
    return function (e) {
      this.setAttributeNS(t.space, t.local, n.call(this, e))
    }
  }
  function gr(t, n) {
    var e, r
    function i() {
      var i = n.apply(this, arguments)
      return i !== r && (e = (r = i) && yr(t, i)), e
    }
    return (i._value = n), i
  }
  function mr(t, n) {
    var e, r
    function i() {
      var i = n.apply(this, arguments)
      return i !== r && (e = (r = i) && vr(t, i)), e
    }
    return (i._value = n), i
  }
  function _r(t, n) {
    return function () {
      er(this, t).delay = +n.apply(this, arguments)
    }
  }
  function wr(t, n) {
    return (
      (n = +n),
      function () {
        er(this, t).delay = n
      }
    )
  }
  function xr(t, n) {
    return function () {
      rr(this, t).duration = +n.apply(this, arguments)
    }
  }
  function br(t, n) {
    return (
      (n = +n),
      function () {
        rr(this, t).duration = n
      }
    )
  }
  function Mr(t, n) {
    if ("function" != typeof n) throw new Error()
    return function () {
      rr(this, t).ease = n
    }
  }
  function Ar(t, n, e) {
    var r,
      i,
      o = (function (t) {
        return (t + "")
          .trim()
          .split(/^|\s+/)
          .every(function (t) {
            var n = t.indexOf(".")
            return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
          })
      })(n)
        ? er
        : rr
    return function () {
      var a = o(this, t),
        u = a.on
      u !== r && (i = (r = u).copy()).on(n, e), (a.on = i)
    }
  }
  var Nr = st.prototype.constructor
  function kr(t) {
    return function () {
      this.style.removeProperty(t)
    }
  }
  function Sr(t, n, e) {
    return function (r) {
      this.style.setProperty(t, n.call(this, r), e)
    }
  }
  function Er(t, n, e) {
    var r, i
    function o() {
      var o = n.apply(this, arguments)
      return o !== i && (r = (i = o) && Sr(t, o, e)), r
    }
    return (o._value = n), o
  }
  function Tr(t) {
    return function (n) {
      this.textContent = t.call(this, n)
    }
  }
  function Cr(t) {
    var n, e
    function r() {
      var r = t.apply(this, arguments)
      return r !== e && (n = (e = r) && Tr(r)), n
    }
    return (r._value = t), r
  }
  var Pr = 0
  function Rr(t, n, e, r) {
    ;(this._groups = t), (this._parents = n), (this._name = e), (this._id = r)
  }
  function Or(t) {
    return st().transition(t)
  }
  function qr() {
    return ++Pr
  }
  var jr = st.prototype
  Rr.prototype = Or.prototype = {
    constructor: Rr,
    select: function (t) {
      var n = this._name,
        e = this._id
      "function" != typeof t && (t = u(t))
      for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
        for (var s, l, c = r[a], h = c.length, f = (o[a] = new Array(h)), p = 0; p < h; ++p)
          (s = c[p]) &&
            (l = t.call(s, s.__data__, p, c)) &&
            ("__data__" in s && (l.__data__ = s.__data__),
            (f[p] = l),
            nr(f[p], n, e, p, f, ir(s, e)))
      return new Rr(o, this._parents, n, e)
    },
    selectAll: function (t) {
      var n = this._name,
        e = this._id
      "function" != typeof t && (t = l(t))
      for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u)
        for (var s, c = r[u], h = c.length, f = 0; f < h; ++f)
          if ((s = c[f])) {
            for (
              var p, d = t.call(s, s.__data__, f, c), v = ir(s, e), y = 0, g = d.length;
              y < g;
              ++y
            )
              (p = d[y]) && nr(p, n, e, y, d, v)
            o.push(d), a.push(s)
          }
      return new Rr(o, a, n, e)
    },
    filter: function (t) {
      "function" != typeof t && (t = c(t))
      for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
        for (var o, a = n[i], u = a.length, s = (r[i] = []), l = 0; l < u; ++l)
          (o = a[l]) && t.call(o, o.__data__, l, a) && s.push(o)
      return new Rr(r, this._parents, this._name, this._id)
    },
    merge: function (t) {
      if (t._id !== this._id) throw new Error()
      for (
        var n = this._groups,
          e = t._groups,
          r = n.length,
          i = e.length,
          o = Math.min(r, i),
          a = new Array(r),
          u = 0;
        u < o;
        ++u
      )
        for (
          var s, l = n[u], c = e[u], h = l.length, f = (a[u] = new Array(h)), p = 0;
          p < h;
          ++p
        )
          (s = l[p] || c[p]) && (f[p] = s)
      for (; u < r; ++u) a[u] = n[u]
      return new Rr(a, this._parents, this._name, this._id)
    },
    selection: function () {
      return new Nr(this._groups, this._parents)
    },
    transition: function () {
      for (
        var t = this._name, n = this._id, e = qr(), r = this._groups, i = r.length, o = 0;
        o < i;
        ++o
      )
        for (var a, u = r[o], s = u.length, l = 0; l < s; ++l)
          if ((a = u[l])) {
            var c = ir(a, n)
            nr(a, t, e, l, u, {
              time: c.time + c.delay + c.duration,
              delay: 0,
              duration: c.duration,
              ease: c.ease,
            })
          }
      return new Rr(r, this._parents, t, e)
    },
    call: jr.call,
    nodes: jr.nodes,
    node: jr.node,
    size: jr.size,
    empty: jr.empty,
    each: jr.each,
    on: function (t, n) {
      var e = this._id
      return arguments.length < 2 ? ir(this.node(), e).on.on(t) : this.each(Ar(e, t, n))
    },
    attr: function (t, n) {
      var r = e(t),
        i = "transform" === r ? mn : sr
      return this.attrTween(
        t,
        "function" == typeof n
          ? (r.local ? dr : pr)(r, i, ur(this, "attr." + t, n))
          : null == n
          ? (r.local ? cr : lr)(r)
          : (r.local ? fr : hr)(r, i, n)
      )
    },
    attrTween: function (t, n) {
      var r = "attr." + t
      if (arguments.length < 2) return (r = this.tween(r)) && r._value
      if (null == n) return this.tween(r, null)
      if ("function" != typeof n) throw new Error()
      var i = e(t)
      return this.tween(r, (i.local ? gr : mr)(i, n))
    },
    style: function (t, n, e) {
      var r = "transform" == (t += "") ? gn : sr
      return null == n
        ? this.styleTween(
            t,
            (function (t, n) {
              var e, r, i
              return function () {
                var o = k(this, t),
                  a = (this.style.removeProperty(t), k(this, t))
                return o === a ? null : o === e && a === r ? i : (i = n((e = o), (r = a)))
              }
            })(t, r)
          ).on("end.style." + t, kr(t))
        : "function" == typeof n
        ? this.styleTween(
            t,
            (function (t, n, e) {
              var r, i, o
              return function () {
                var a = k(this, t),
                  u = e(this),
                  s = u + ""
                return (
                  null == u && (this.style.removeProperty(t), (s = u = k(this, t))),
                  a === s ? null : a === r && s === i ? o : ((i = s), (o = n((r = a), u)))
                )
              }
            })(t, r, ur(this, "style." + t, n))
          ).each(
            (function (t, n) {
              var e,
                r,
                i,
                o,
                a = "style." + n,
                u = "end." + a
              return function () {
                var s = rr(this, t),
                  l = s.on,
                  c = null == s.value[a] ? o || (o = kr(n)) : void 0
                ;(l === e && i === c) || (r = (e = l).copy()).on(u, (i = c)), (s.on = r)
              }
            })(this._id, t)
          )
        : this.styleTween(
            t,
            (function (t, n, e) {
              var r,
                i,
                o = e + ""
              return function () {
                var a = k(this, t)
                return a === o ? null : a === r ? i : (i = n((r = a), e))
              }
            })(t, r, n),
            e
          ).on("end.style." + t, null)
    },
    styleTween: function (t, n, e) {
      var r = "style." + (t += "")
      if (arguments.length < 2) return (r = this.tween(r)) && r._value
      if (null == n) return this.tween(r, null)
      if ("function" != typeof n) throw new Error()
      return this.tween(r, Er(t, n, null == e ? "" : e))
    },
    text: function (t) {
      return this.tween(
        "text",
        "function" == typeof t
          ? (function (t) {
              return function () {
                var n = t(this)
                this.textContent = null == n ? "" : n
              }
            })(ur(this, "text", t))
          : (function (t) {
              return function () {
                this.textContent = t
              }
            })(null == t ? "" : t + "")
      )
    },
    textTween: function (t) {
      var n = "text"
      if (arguments.length < 1) return (n = this.tween(n)) && n._value
      if (null == t) return this.tween(n, null)
      if ("function" != typeof t) throw new Error()
      return this.tween(n, Cr(t))
    },
    remove: function () {
      return this.on(
        "end.remove",
        (function (t) {
          return function () {
            var n = this.parentNode
            for (var e in this.__transition) if (+e !== t) return
            n && n.removeChild(this)
          }
        })(this._id)
      )
    },
    tween: function (t, n) {
      var e = this._id
      if (((t += ""), arguments.length < 2)) {
        for (var r, i = ir(this.node(), e).tween, o = 0, a = i.length; o < a; ++o)
          if ((r = i[o]).name === t) return r.value
        return null
      }
      return this.each((null == n ? or : ar)(e, t, n))
    },
    delay: function (t) {
      var n = this._id
      return arguments.length
        ? this.each(("function" == typeof t ? _r : wr)(n, t))
        : ir(this.node(), n).delay
    },
    duration: function (t) {
      var n = this._id
      return arguments.length
        ? this.each(("function" == typeof t ? xr : br)(n, t))
        : ir(this.node(), n).duration
    },
    ease: function (t) {
      var n = this._id
      return arguments.length ? this.each(Mr(n, t)) : ir(this.node(), n).ease
    },
    end: function () {
      var t,
        n,
        e = this,
        r = e._id,
        i = e.size()
      return new Promise(function (o, a) {
        var u = { value: a },
          s = {
            value: function () {
              0 == --i && o()
            },
          }
        e.each(function () {
          var e = rr(this, r),
            i = e.on
          i !== t &&
            ((n = (t = i).copy())._.cancel.push(u), n._.interrupt.push(u), n._.end.push(s)),
            (e.on = n)
        })
      })
    },
  }
  var zr = {
    time: null,
    delay: 0,
    duration: 250,
    ease: function (t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
    },
  }
  function Lr(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]); )
      if (!(t = t.parentNode)) return (zr.time = Ue()), zr
    return e
  }
  function Ir(t, n, e) {
    var r, i, o, a, u
    function s() {
      var l = Date.now() - a
      l < n && l >= 0
        ? (r = setTimeout(s, n - l))
        : ((r = null), e || ((u = t.apply(o, i)), (o = i = null)))
    }
    null == n && (n = 100)
    var l = function () {
      ;(o = this), (i = arguments), (a = Date.now())
      var l = e && !r
      return r || (r = setTimeout(s, n)), l && ((u = t.apply(o, i)), (o = i = null)), u
    }
    return (
      (l.clear = function () {
        r && (clearTimeout(r), (r = null))
      }),
      (l.flush = function () {
        r && ((u = t.apply(o, i)), (o = i = null), clearTimeout(r), (r = null))
      }),
      l
    )
  }
  ;(st.prototype.interrupt = function (t) {
    return this.each(function () {
      !(function (t, n) {
        var e,
          r,
          i,
          o = t.__transition,
          a = !0
        if (o) {
          for (i in ((n = null == n ? null : n + ""), o))
            (e = o[i]).name === n
              ? ((r = e.state > 2 && e.state < 5),
                (e.state = 6),
                e.timer.stop(),
                e.on.call(r ? "interrupt" : "cancel", t, t.__data__, e.index, e.group),
                delete o[i])
              : (a = !1)
          a && delete t.__transition
        }
      })(this, t)
    })
  }),
    (st.prototype.transition = function (t) {
      var n, e
      t instanceof Rr
        ? ((n = t._id), (t = t._name))
        : ((n = qr()), ((e = zr).time = Ue()), (t = null == t ? null : t + ""))
      for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
        for (var a, u = r[o], s = u.length, l = 0; l < s; ++l)
          (a = u[l]) && nr(a, t, n, l, u, e || Lr(a, n))
      return new Rr(r, this._parents, t, n)
    }),
    (Ir.debounce = Ir)
  var Dr = Ir
  function Br(t, n) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t
      })(t) ||
      (function (t, n) {
        if (
          !(Symbol.iterator in Object(t)) &&
          "[object Arguments]" !== Object.prototype.toString.call(t)
        )
          return
        var e = [],
          r = !0,
          i = !1,
          o = void 0
        try {
          for (
            var a, u = t[Symbol.iterator]();
            !(r = (a = u.next()).done) && (e.push(a.value), !n || e.length !== n);
            r = !0
          );
        } catch (t) {
          ;(i = !0), (o = t)
        } finally {
          try {
            r || null == u.return || u.return()
          } finally {
            if (i) throw o
          }
        }
        return e
      })(t, n) ||
      (function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
      })()
    )
  }
  var Xr = function t(n, e) {
    var r = e.default,
      i = void 0 === r ? null : r,
      o = e.triggerUpdate,
      a = void 0 === o || o,
      u = e.onChange,
      s = void 0 === u ? function (t, n) {} : u
    !(function (t, n) {
      if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
    })(this, t),
      (this.name = n),
      (this.defaultVal = i),
      (this.triggerUpdate = a),
      (this.onChange = s)
  }
  var Hr,
    Vr,
    $r,
    Ur,
    Yr,
    Fr,
    Gr,
    Zr,
    Qr,
    Wr,
    Jr,
    Kr,
    ti,
    ni,
    ei = function (t) {
      return t instanceof Function
        ? t
        : "string" == typeof t
        ? function (n) {
            return n[t]
          }
        : function (n) {
            return t
          }
    }
  return (
    (Hr = {
      props: {
        width: { default: window.innerWidth },
        height: { default: window.innerHeight },
        data: {
          onChange: function (t, n) {
            n.needsReparse = !0
          },
        },
        children: {
          default: "children",
          onChange: function (t, n) {
            n.needsReparse = !0
          },
        },
        sort: {
          onChange: function (t, n) {
            n.needsReparse = !0
          },
        },
        label: {
          default: function (t) {
            return t.name
          },
        },
        size: {
          default: "value",
          onChange: function (t, n) {
            n.needsReparse = !0
          },
        },
        color: {
          default: function (t) {
            return "lightgrey"
          },
        },
        minSliceAngle: { default: 0.2 },
        maxLevels: {},
        excludeRoot: {
          default: !1,
          onChange: function (t, n) {
            n.needsReparse = !0
          },
        },
        centerRadius: { default: 0.1 },
        radiusScaleExponent: { default: 0.5 },
        showLabels: { default: !0 },
        tooltipContent: {
          default: function (t) {
            return ""
          },
          triggerUpdate: !1,
        },
        tooltipTitle: { default: null, triggerUpdate: !1 },
        showTooltip: {
          default: function (t) {
            return !0
          },
          triggerUpdate: !1,
        },
        focusOnNode: {
          onChange: function (t, n) {
            t &&
              n.initialised &&
              (function t(e) {
                n.svg
                  .selectAll(".slice")
                  .filter(function (t) {
                    return t === e
                  })
                  .each(function (n) {
                    this.parentNode.appendChild(this), n.parent && t(n.parent)
                  })
              })(t.__dataNode)
          },
        },
        onClick: { triggerUpdate: !1 },
        onHover: { triggerUpdate: !1 },
      },
      methods: {
        _parseData: function (t) {
          if (t.data) {
            var n = Wn(t.data, ei(t.children)).sum(ei(t.size))
            if ((t.sort && n.sort(t.sort), re().padding(0)(n), t.excludeRoot)) {
              var e = Un().domain([n.y1 - n.y0, 1])
              n.descendants().forEach(function (t) {
                ;(t.y0 = e(t.y0)), (t.y1 = e(t.y1))
              })
            }
            n.descendants().forEach(function (t, n) {
              ;(t.id = n), (t.data.__dataNode = t)
            }),
              (t.layoutData = n.descendants())
          }
        },
      },
      aliases: { onNodeClick: "onClick" },
      init: function (t, n) {
        var e = this
        ;(n.chartId = Math.round(1e12 * Math.random())),
          (n.radiusScale = (function t() {
            var n = Zn(kn())
            return (
              (n.copy = function () {
                return Nn(n, t()).exponent(n.exponent())
              }),
              mt.apply(n, arguments),
              n
            )
          })()),
          (n.angleScale = Un()
            .domain([0, 10])
            .range([0, 2 * Math.PI])
            .clamp(!0)),
          (n.arc = (function () {
            var t = be,
              n = Me,
              e = le(0),
              r = null,
              i = Ae,
              o = Ne,
              a = ke,
              u = null
            function s() {
              var s,
                l,
                c = +t.apply(this, arguments),
                h = +n.apply(this, arguments),
                f = i.apply(this, arguments) - me,
                p = o.apply(this, arguments) - me,
                d = ce(p - f),
                v = p > f
              if ((u || (u = s = se()), h < c && ((l = h), (h = c), (c = l)), h > 1e-12))
                if (d > _e - 1e-12)
                  u.moveTo(h * fe(f), h * ve(f)),
                    u.arc(0, 0, h, f, p, !v),
                    c > 1e-12 && (u.moveTo(c * fe(p), c * ve(p)), u.arc(0, 0, c, p, f, v))
                else {
                  var y,
                    g,
                    m = f,
                    _ = p,
                    w = f,
                    x = p,
                    b = d,
                    M = d,
                    A = a.apply(this, arguments) / 2,
                    N = A > 1e-12 && (r ? +r.apply(this, arguments) : ye(c * c + h * h)),
                    k = de(ce(h - c) / 2, +e.apply(this, arguments)),
                    S = k,
                    E = k
                  if (N > 1e-12) {
                    var T = xe((N / c) * ve(A)),
                      C = xe((N / h) * ve(A))
                    ;(b -= 2 * T) > 1e-12
                      ? ((w += T *= v ? 1 : -1), (x -= T))
                      : ((b = 0), (w = x = (f + p) / 2)),
                      (M -= 2 * C) > 1e-12
                        ? ((m += C *= v ? 1 : -1), (_ -= C))
                        : ((M = 0), (m = _ = (f + p) / 2))
                  }
                  var P = h * fe(m),
                    R = h * ve(m),
                    O = c * fe(x),
                    q = c * ve(x)
                  if (k > 1e-12) {
                    var j,
                      z = h * fe(_),
                      L = h * ve(_),
                      I = c * fe(w),
                      D = c * ve(w)
                    if (d < ge && (j = Se(P, R, I, D, z, L, O, q))) {
                      var B = P - j[0],
                        X = R - j[1],
                        H = z - j[0],
                        V = L - j[1],
                        $ =
                          1 /
                          ve(we((B * H + X * V) / (ye(B * B + X * X) * ye(H * H + V * V))) / 2),
                        U = ye(j[0] * j[0] + j[1] * j[1])
                      ;(S = de(k, (c - U) / ($ - 1))), (E = de(k, (h - U) / ($ + 1)))
                    }
                  }
                  M > 1e-12
                    ? E > 1e-12
                      ? ((y = Ee(I, D, P, R, h, E, v)),
                        (g = Ee(z, L, O, q, h, E, v)),
                        u.moveTo(y.cx + y.x01, y.cy + y.y01),
                        E < k
                          ? u.arc(y.cx, y.cy, E, he(y.y01, y.x01), he(g.y01, g.x01), !v)
                          : (u.arc(y.cx, y.cy, E, he(y.y01, y.x01), he(y.y11, y.x11), !v),
                            u.arc(
                              0,
                              0,
                              h,
                              he(y.cy + y.y11, y.cx + y.x11),
                              he(g.cy + g.y11, g.cx + g.x11),
                              !v
                            ),
                            u.arc(g.cx, g.cy, E, he(g.y11, g.x11), he(g.y01, g.x01), !v)))
                      : (u.moveTo(P, R), u.arc(0, 0, h, m, _, !v))
                    : u.moveTo(P, R),
                    c > 1e-12 && b > 1e-12
                      ? S > 1e-12
                        ? ((y = Ee(O, q, z, L, c, -S, v)),
                          (g = Ee(P, R, I, D, c, -S, v)),
                          u.lineTo(y.cx + y.x01, y.cy + y.y01),
                          S < k
                            ? u.arc(y.cx, y.cy, S, he(y.y01, y.x01), he(g.y01, g.x01), !v)
                            : (u.arc(y.cx, y.cy, S, he(y.y01, y.x01), he(y.y11, y.x11), !v),
                              u.arc(
                                0,
                                0,
                                c,
                                he(y.cy + y.y11, y.cx + y.x11),
                                he(g.cy + g.y11, g.cx + g.x11),
                                v
                              ),
                              u.arc(g.cx, g.cy, S, he(g.y11, g.x11), he(g.y01, g.x01), !v)))
                        : u.arc(0, 0, c, x, w, v)
                      : u.lineTo(O, q)
                }
              else u.moveTo(0, 0)
              if ((u.closePath(), s)) return (u = null), s + "" || null
            }
            return (
              (s.centroid = function () {
                var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                  r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - ge / 2
                return [fe(r) * e, ve(r) * e]
              }),
              (s.innerRadius = function (n) {
                return arguments.length ? ((t = "function" == typeof n ? n : le(+n)), s) : t
              }),
              (s.outerRadius = function (t) {
                return arguments.length ? ((n = "function" == typeof t ? t : le(+t)), s) : n
              }),
              (s.cornerRadius = function (t) {
                return arguments.length ? ((e = "function" == typeof t ? t : le(+t)), s) : e
              }),
              (s.padRadius = function (t) {
                return arguments.length
                  ? ((r = null == t ? null : "function" == typeof t ? t : le(+t)), s)
                  : r
              }),
              (s.startAngle = function (t) {
                return arguments.length ? ((i = "function" == typeof t ? t : le(+t)), s) : i
              }),
              (s.endAngle = function (t) {
                return arguments.length ? ((o = "function" == typeof t ? t : le(+t)), s) : o
              }),
              (s.padAngle = function (t) {
                return arguments.length ? ((a = "function" == typeof t ? t : le(+t)), s) : a
              }),
              (s.context = function (t) {
                return arguments.length ? ((u = null == t ? null : t), s) : u
              }),
              s
            )
          })()
            .startAngle(function (t) {
              return n.angleScale(t.x0)
            })
            .endAngle(function (t) {
              return n.angleScale(t.x1)
            })
            .innerRadius(function (t) {
              return Math.max(0, n.radiusScale(t.y0))
            })
            .outerRadius(function (t) {
              return Math.max(0, n.radiusScale(t.y1))
            }))
        var r = (function (t) {
          return "string" == typeof t
            ? new ut([[document.querySelector(t)]], [document.documentElement])
            : new ut([[t]], at)
        })(t)
          .append("div")
          .attr("class", "sunburst-viz")
        ;(n.svg = r.append("svg")),
          (n.canvas = n.svg.append("g")),
          (n.tooltip = r.append("div").attr("class", "sunburst-tooltip")),
          r.on("mousemove", function () {
            var t = (function (t) {
              var n = lt()
              return (
                n.changedTouches && (n = n.changedTouches[0]),
                (function (t, n) {
                  var e = t.ownerSVGElement || t
                  if (e.createSVGPoint) {
                    var r = e.createSVGPoint()
                    return (
                      (r.x = n.clientX),
                      (r.y = n.clientY),
                      [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                    )
                  }
                  var i = t.getBoundingClientRect()
                  return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
                })(t, n)
              )
            })(this)
            n.tooltip
              .style("left", t[0] + "px")
              .style("top", t[1] + "px")
              .style("transform", "translate(-".concat((t[0] / n.width) * 100, "%, 21px)"))
          }),
          n.svg
            .on("click", function () {
              return (n.onClick || e.focusOnNode)(null)
            })
            .on("mouseover", function () {
              return n.onHover && n.onHover(null)
            })
      },
      update: function (t) {
        var n = this
        t.needsReparse && (this._parseData(), (t.needsReparse = !1))
        var e = Math.min(t.width, t.height) / 2
        if (
          (t.radiusScale.range([e * Math.max(0, Math.min(1, t.centerRadius)), e]),
          t.radiusScaleExponent > 0 && t.radiusScale.exponent(t.radiusScaleExponent),
          t.svg
            .style("width", t.width + "px")
            .style("height", t.height + "px")
            .attr(
              "viewBox",
              ""
                .concat(-t.width / 2, " ")
                .concat(-t.height / 2, " ")
                .concat(t.width, " ")
                .concat(t.height)
            ),
          t.layoutData)
        ) {
          var r = (t.focusOnNode &&
              t.focusOnNode.__dataNode.y0 >= 0 &&
              t.focusOnNode.__dataNode) || { x0: 0, x1: 1, y0: 0, y1: 1 },
            i = t.canvas.selectAll(".slice").data(
              t.layoutData.filter(function (n) {
                return (
                  n.x1 >= r.x0 &&
                  n.x0 <= r.x1 &&
                  (n.x1 - n.x0) / (r.x1 - r.x0) > t.minSliceAngle / 360 &&
                  (!t.maxLevels ||
                    n.depth - (r.depth || (t.excludeRoot ? 1 : 0)) < t.maxLevels) &&
                  (n.y0 >= 0 || r.parent)
                )
              }),
              function (t) {
                return t.id
              }
            ),
            o = ei(t.label),
            a = ei(t.color),
            u = Or().duration(750),
            s = t.layoutData[0].y1 - t.layoutData[0].y0,
            l = Math.min(
              1,
              r.y0 +
                s *
                  Math.min(
                    r.hasOwnProperty("height") ? r.height + 1 : 1 / 0,
                    t.maxLevels || 1 / 0
                  )
            )
          t.svg.transition(u).tween("scale", function () {
            var n = un(t.angleScale.domain(), [r.x0, r.x1]),
              e = un(t.radiusScale.domain(), [r.y0, l])
            return function (r) {
              t.angleScale.domain(n(r)), t.radiusScale.domain(e(r))
            }
          })
          var c = i.exit().transition(u).style("opacity", 0).remove()
          c.select("path.main-arc").attrTween("d", function (n) {
            return function () {
              return t.arc(n)
            }
          }),
            c.select("path.hidden-arc").attrTween("d", function (t) {
              return function () {
                return d(t)
              }
            })
          var h = i
            .enter()
            .append("g")
            .attr("class", "slice")
            .style("opacity", 0)
            .on("click", function (e) {
              W.stopPropagation(), (t.onClick || n.focusOnNode)(e.data)
            })
            .on("mouseover", function (n) {
              W.stopPropagation(),
                t.onHover && t.onHover(n.data),
                t.tooltip.style("display", t.showTooltip(n.data, n) ? "inline" : "none"),
                t.tooltip.html(
                  '<div class="tooltip-title">'
                    .concat(
                      t.tooltipTitle
                        ? t.tooltipTitle(n.data, n)
                        : (function (t) {
                            for (var n = [], e = t; e; ) n.unshift(e), (e = e.parent)
                            return n
                          })(n)
                            .slice(t.excludeRoot ? 1 : 0)
                            .map(function (t) {
                              return o(t.data)
                            })
                            .join(" &rarr; "),
                      "</div>"
                    )
                    .concat(t.tooltipContent(n.data, n))
                )
            })
            .on("mouseout", function () {
              t.tooltip.style("display", "none")
            })
          h
            .append("path")
            .attr("class", "main-arc")
            .style("fill", function (t) {
              return a(t.data, t.parent)
            }),
            h
              .append("path")
              .attr("class", "hidden-arc")
              .attr("id", function (n) {
                return "hidden-arc-".concat(t.chartId, "-").concat(n.id)
              })

          console.log(h)

          // h.append("image").attr("xlink:href", "https://upload.wikimedia.org/wikipedia/commons/e/e2/Southern_right_whale.jpg")

          var f = h.append("text").attr("class", "path-label")
          f
            .append("textPath")
            .attr("class", "text-contour")
            .attr("startOffset", "50%")
            .attr("xlink:href", function (n) {
              return "#hidden-arc-".concat(t.chartId, "-").concat(n.id)
            }),
            f
              .append("textPath")
              .attr("class", "text-stroke")
              .attr("startOffset", "50%")
              .attr("xlink:href", function (n) {
                return "#hidden-arc-".concat(t.chartId, "-").concat(n.id)
              })

          var p = i.merge(h)

          // p._groups[0][0].append("image").attr("xlink:href", "https://upload.wikimedia.org/wikipedia/commons/e/e2/Southern_right_whale.jpg")

          p.style("opacity", 1),
            p
              .select("path.main-arc")
              .transition(u)
              .attrTween("d", function (n) {
                return function () {
                  return t.arc(n)
                }
              })
              .style("fill", function (t) {
                return a(t.data, t.parent)
              }),
            p
              .select("path.hidden-arc")
              .transition(u)
              .attrTween("d", function (t) {
                return function () {
                  return d(t)
                }
              }),
            p
              .select(".path-label")
              .transition(u)
              .styleTween("display", function (n) {
                return function () {
                  return t.showLabels &&
                    (function (n) {
                      var e = t.angleScale(n.x1) - t.angleScale(n.x0),
                        r = Math.max(0, (t.radiusScale(n.y0) + t.radiusScale(n.y1)) / 2) * e
                      return 6 * o(n.data).toString().length < r
                    })(n)
                    ? null
                    : "none"
                }
              }),
            p.selectAll("text.path-label").select("textPath.text-contour"),
            p.selectAll("text.path-label").select("textPath.text-stroke"),
            p
              .selectAll("text.path-label")
              .selectAll("textPath")
              .text(function (t) {
                return o(t.data)
              })

          // p.append("image").attr("xlink:href", "https://upload.wikimedia.org/wikipedia/commons/e/e2/Southern_right_whale.jpg")
        }
        function d(n) {
          var e = Math.PI / 2,
            r = [t.angleScale(n.x0) - e, t.angleScale(n.x1) - e],
            i = Math.max(0, (t.radiusScale(n.y0) + t.radiusScale(n.y1)) / 2)
          if (!(i && r[1] - r[0])) return ""
          var o = (r[1] + r[0]) / 2,
            a = o > 0 && o < Math.PI
          a && r.reverse()
          var u = se()
          return u.arc(0, 0, i, r[0], r[1], a), u.toString()
        }
      },
    }),
    (Vr = Hr.stateInit),
    ($r =
      void 0 === Vr
        ? function () {
            return {}
          }
        : Vr),
    (Ur = Hr.props),
    (Yr = void 0 === Ur ? {} : Ur),
    (Fr = Hr.methods),
    (Gr = void 0 === Fr ? {} : Fr),
    (Zr = Hr.aliases),
    (Qr = void 0 === Zr ? {} : Zr),
    (Wr = Hr.init),
    (Jr = void 0 === Wr ? function () {} : Wr),
    (Kr = Hr.update),
    (ti = void 0 === Kr ? function () {} : Kr),
    (ni = Object.keys(Yr).map(function (t) {
      return new Xr(t, Yr[t])
    })),
    function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = Object.assign({}, $r instanceof Function ? $r(t) : $r, { initialised: !1 }),
        e = {}
      function r(n) {
        return i(n, t), o(), r
      }
      var i = function (t, e) {
          Jr.call(r, t, n, e), (n.initialised = !0)
        },
        o = Dr(function () {
          n.initialised && (ti.call(r, n, e), (e = {}))
        }, 1)
      return (
        ni.forEach(function (t) {
          r[t.name] = (function (t) {
            var i = t.name,
              a = t.triggerUpdate,
              u = void 0 !== a && a,
              s = t.onChange,
              l = void 0 === s ? function (t, n) {} : s,
              c = t.defaultVal,
              h = void 0 === c ? null : c
            return function (t) {
              var a = n[i]
              if (!arguments.length) return a
              var s = void 0 === t ? h : t
              return (
                (n[i] = s), l.call(r, s, n, a), !e.hasOwnProperty(i) && (e[i] = a), u && o(), r
              )
            }
          })(t)
        }),
        Object.keys(Gr).forEach(function (t) {
          r[t] = function () {
            for (var e, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
              o[a] = arguments[a]
            return (e = Gr[t]).call.apply(e, [r, n].concat(o))
          }
        }),
        Object.entries(Qr).forEach(function (t) {
          var n = Br(t, 2),
            e = n[0],
            i = n[1]
          return (r[e] = r[i])
        }),
        (r.resetProps = function () {
          return (
            ni.forEach(function (t) {
              r[t.name](t.defaultVal)
            }),
            r
          )
        }),
        r.resetProps(),
        (n._rerender = o),
        r
      )
    }
  )
})
