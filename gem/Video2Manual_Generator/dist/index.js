import ot, { useState as J, useRef as _e, useEffect as Xe, useCallback as tt } from "react";
import { Layout as bt, Upload as rt, FileJson as nt, Loader2 as Be, BookOpen as vt, MoreVertical as yt, Crop as wt, Sparkles as jt, Image as _t, X as Rt, Save as Et, MousePointer2 as Nt, Brain as St } from "lucide-react";
var $e = { exports: {} }, Re = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function Ct() {
  if (at) return Re;
  at = 1;
  var ge = ot, ce = Symbol.for("react.element"), A = Symbol.for("react.fragment"), Z = Object.prototype.hasOwnProperty, N = ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(B, w, U) {
    var C, F = {}, H = null, te = null;
    U !== void 0 && (H = "" + U), w.key !== void 0 && (H = "" + w.key), w.ref !== void 0 && (te = w.ref);
    for (C in w) Z.call(w, C) && !W.hasOwnProperty(C) && (F[C] = w[C]);
    if (B && B.defaultProps) for (C in w = B.defaultProps, w) F[C] === void 0 && (F[C] = w[C]);
    return { $$typeof: ce, type: B, key: H, ref: te, props: F, _owner: N.current };
  }
  return Re.Fragment = A, Re.jsx = T, Re.jsxs = T, Re;
}
var Ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function Tt() {
  return st || (st = 1, process.env.NODE_ENV !== "production" && (function() {
    var ge = ot, ce = Symbol.for("react.element"), A = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), N = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), B = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), D = Symbol.iterator, ue = "@@iterator";
    function S(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = D && e[D] || e[ue];
      return typeof t == "function" ? t : null;
    }
    var k = ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function h(e) {
      {
        for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), u = 1; u < t; u++)
          s[u - 1] = arguments[u];
        xe("error", e, s);
      }
    }
    function xe(e, t, s) {
      {
        var u = k.ReactDebugCurrentFrame, x = u.getStackAddendum();
        x !== "" && (t += "%s", s = s.concat([x]));
        var b = s.map(function(m) {
          return String(m);
        });
        b.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var Ae = !1, de = !1, Ne = !1, Se = !1, P = !1, pe;
    pe = Symbol.for("react.module.reference");
    function Ce(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === Z || e === W || P || e === N || e === U || e === C || Se || e === te || Ae || de || Ne || typeof e == "object" && e !== null && (e.$$typeof === H || e.$$typeof === F || e.$$typeof === T || e.$$typeof === B || e.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === pe || e.getModuleId !== void 0));
    }
    function L(e, t, s) {
      var u = e.displayName;
      if (u)
        return u;
      var x = t.displayName || t.name || "";
      return x !== "" ? s + "(" + x + ")" : s;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function I(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Z:
          return "Fragment";
        case A:
          return "Portal";
        case W:
          return "Profiler";
        case N:
          return "StrictMode";
        case U:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case B:
            var t = e;
            return fe(t) + ".Consumer";
          case T:
            var s = e;
            return fe(s._context) + ".Provider";
          case w:
            return L(e, e.render, "ForwardRef");
          case F:
            var u = e.displayName || null;
            return u !== null ? u : I(e.type) || "Memo";
          case H: {
            var x = e, b = x._payload, m = x._init;
            try {
              return I(m(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, re = 0, be, Te, ke, ve, Pe, ye, Oe;
    function Me() {
    }
    Me.__reactDisabledLog = !0;
    function De() {
      {
        if (re === 0) {
          be = console.log, Te = console.info, ke = console.warn, ve = console.error, Pe = console.group, ye = console.groupCollapsed, Oe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Me,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        re++;
      }
    }
    function Fe() {
      {
        if (re--, re === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, e, {
              value: be
            }),
            info: R({}, e, {
              value: Te
            }),
            warn: R({}, e, {
              value: ke
            }),
            error: R({}, e, {
              value: ve
            }),
            group: R({}, e, {
              value: Pe
            }),
            groupCollapsed: R({}, e, {
              value: ye
            }),
            groupEnd: R({}, e, {
              value: Oe
            })
          });
        }
        re < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var p = k.ReactCurrentDispatcher, n;
    function a(e, t, s) {
      {
        if (n === void 0)
          try {
            throw Error();
          } catch (x) {
            var u = x.stack.trim().match(/\n( *(at )?)/);
            n = u && u[1] || "";
          }
        return `
` + n + e;
      }
    }
    var o = !1, d;
    {
      var i = typeof WeakMap == "function" ? WeakMap : Map;
      d = new i();
    }
    function v(e, t) {
      if (!e || o)
        return "";
      {
        var s = d.get(e);
        if (s !== void 0)
          return s;
      }
      var u;
      o = !0;
      var x = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = p.current, p.current = null, De();
      try {
        if (t) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch ($) {
              u = $;
            }
            Reflect.construct(e, [], m);
          } else {
            try {
              m.call();
            } catch ($) {
              u = $;
            }
            e.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            u = $;
          }
          e();
        }
      } catch ($) {
        if ($ && u && typeof $.stack == "string") {
          for (var f = $.stack.split(`
`), M = u.stack.split(`
`), _ = f.length - 1, E = M.length - 1; _ >= 1 && E >= 0 && f[_] !== M[E]; )
            E--;
          for (; _ >= 1 && E >= 0; _--, E--)
            if (f[_] !== M[E]) {
              if (_ !== 1 || E !== 1)
                do
                  if (_--, E--, E < 0 || f[_] !== M[E]) {
                    var Y = `
` + f[_].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && d.set(e, Y), Y;
                  }
                while (_ >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        o = !1, p.current = b, Fe(), Error.prepareStackTrace = x;
      }
      var me = e ? e.displayName || e.name : "", le = me ? a(me) : "";
      return typeof e == "function" && d.set(e, le), le;
    }
    function c(e, t, s) {
      return v(e, !1);
    }
    function j(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function l(e, t, s) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return v(e, j(e));
      if (typeof e == "string")
        return a(e);
      switch (e) {
        case U:
          return a("Suspense");
        case C:
          return a("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            return c(e.render);
          case F:
            return l(e.type, t, s);
          case H: {
            var u = e, x = u._payload, b = u._init;
            try {
              return l(b(x), t, s);
            } catch {
            }
          }
        }
      return "";
    }
    var g = Object.prototype.hasOwnProperty, y = {}, G = k.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var t = e._owner, s = l(e.type, e._source, t ? t.type : null);
        G.setExtraStackFrame(s);
      } else
        G.setExtraStackFrame(null);
    }
    function X(e, t, s, u, x) {
      {
        var b = Function.call.bind(g);
        for (var m in e)
          if (b(e, m)) {
            var f = void 0;
            try {
              if (typeof e[m] != "function") {
                var M = Error((u || "React class") + ": " + s + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              f = e[m](t, m, u, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              f = _;
            }
            f && !(f instanceof Error) && (V(x), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", s, m, typeof f), V(null)), f instanceof Error && !(f.message in y) && (y[f.message] = !0, V(x), h("Failed %s type: %s", s, f.message), V(null));
          }
      }
    }
    var q = Array.isArray;
    function z(e) {
      return q(e);
    }
    function ne(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, s = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s;
      }
    }
    function O(e) {
      try {
        return Q(e), !1;
      } catch {
        return !0;
      }
    }
    function Q(e) {
      return "" + e;
    }
    function K(e) {
      if (O(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ne(e)), Q(e);
    }
    var ae = k.ReactCurrentOwner, Ie = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, se, ie;
    function Le(e) {
      if (g.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (g.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function we(e, t) {
      typeof e.ref == "string" && ae.current;
    }
    function oe(e, t) {
      {
        var s = function() {
          se || (se = !0, h("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function Ye(e, t) {
      {
        var s = function() {
          ie || (ie = !0, h("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        s.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var We = function(e, t, s, u, x, b, m) {
      var f = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: ce,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: s,
        props: m,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(f, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(f, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: x
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    };
    function Ue(e, t, s, u, x) {
      {
        var b, m = {}, f = null, M = null;
        s !== void 0 && (K(s), f = "" + s), He(t) && (K(t.key), f = "" + t.key), Le(t) && (M = t.ref, we(t, x));
        for (b in t)
          g.call(t, b) && !Ie.hasOwnProperty(b) && (m[b] = t[b]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (b in _)
            m[b] === void 0 && (m[b] = _[b]);
        }
        if (f || M) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          f && oe(m, E), M && Ye(m, E);
        }
        return We(e, f, M, x, u, ae.current, m);
      }
    }
    var he = k.ReactCurrentOwner, je = k.ReactDebugCurrentFrame;
    function ee(e) {
      if (e) {
        var t = e._owner, s = l(e.type, e._source, t ? t.type : null);
        je.setExtraStackFrame(s);
      } else
        je.setExtraStackFrame(null);
    }
    var ze;
    ze = !1;
    function Je(e) {
      return typeof e == "object" && e !== null && e.$$typeof === ce;
    }
    function qe() {
      {
        if (he.current) {
          var e = I(he.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function lt(e) {
      return "";
    }
    var Ke = {};
    function ct(e) {
      {
        var t = qe();
        if (!t) {
          var s = typeof e == "string" ? e : e.displayName || e.name;
          s && (t = `

Check the top-level render call using <` + s + ">.");
        }
        return t;
      }
    }
    function Ze(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var s = ct(t);
        if (Ke[s])
          return;
        Ke[s] = !0;
        var u = "";
        e && e._owner && e._owner !== he.current && (u = " It was passed a child from " + I(e._owner.type) + "."), ee(e), h('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, u), ee(null);
      }
    }
    function Ge(e, t) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var s = 0; s < e.length; s++) {
            var u = e[s];
            Je(u) && Ze(u, t);
          }
        else if (Je(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var x = S(e);
          if (typeof x == "function" && x !== e.entries)
            for (var b = x.call(e), m; !(m = b.next()).done; )
              Je(m.value) && Ze(m.value, t);
        }
      }
    }
    function ut(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var s;
        if (typeof t == "function")
          s = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === F))
          s = t.propTypes;
        else
          return;
        if (s) {
          var u = I(t);
          X(s, e.props, "prop", u, e);
        } else if (t.PropTypes !== void 0 && !ze) {
          ze = !0;
          var x = I(t);
          h("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", x || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && h("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dt(e) {
      {
        for (var t = Object.keys(e.props), s = 0; s < t.length; s++) {
          var u = t[s];
          if (u !== "children" && u !== "key") {
            ee(e), h("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), ee(null);
            break;
          }
        }
        e.ref !== null && (ee(e), h("Invalid attribute `ref` supplied to `React.Fragment`."), ee(null));
      }
    }
    var Qe = {};
    function et(e, t, s, u, x, b) {
      {
        var m = Ce(e);
        if (!m) {
          var f = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (f += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = lt();
          M ? f += M : f += qe();
          var _;
          e === null ? _ = "null" : z(e) ? _ = "array" : e !== void 0 && e.$$typeof === ce ? (_ = "<" + (I(e.type) || "Unknown") + " />", f = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, h("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, f);
        }
        var E = Ue(e, t, s, x, b);
        if (E == null)
          return E;
        if (m) {
          var Y = t.children;
          if (Y !== void 0)
            if (u)
              if (z(Y)) {
                for (var me = 0; me < Y.length; me++)
                  Ge(Y[me], e);
                Object.freeze && Object.freeze(Y);
              } else
                h("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(Y, e);
        }
        if (g.call(t, "key")) {
          var le = I(e), $ = Object.keys(t).filter(function(pt) {
            return pt !== "key";
          }), Ve = $.length > 0 ? "{key: someKey, " + $.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qe[le + Ve]) {
            var xt = $.length > 0 ? "{" + $.join(": ..., ") + ": ...}" : "{}";
            h(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ve, le, xt, le), Qe[le + Ve] = !0;
          }
        }
        return e === Z ? dt(E) : ut(E), E;
      }
    }
    function ft(e, t, s) {
      return et(e, t, s, !0);
    }
    function ht(e, t, s) {
      return et(e, t, s, !1);
    }
    var mt = ht, gt = ft;
    Ee.Fragment = Z, Ee.jsx = mt, Ee.jsxs = gt;
  })()), Ee;
}
var it;
function kt() {
  return it || (it = 1, process.env.NODE_ENV === "production" ? $e.exports = Ct() : $e.exports = Tt()), $e.exports;
}
var r = kt();
function Mt({ initialSteps: ge = [] }) {
  const [A, Z] = J(null), [N, W] = J(ge), [T, B] = J(null), [w, U] = J(!1), [C, F] = J(null), [H, te] = J(!1), [D, ue] = J(!1), [S, k] = J(null), [h, xe] = J(null), [Ae, de] = J("default"), [Ne, Se] = J(null), P = _e(null), pe = _e(null), Ce = _e(null), L = _e(null);
  _e(null), Xe(() => {
    if (window.JSZip)
      te(!0);
    else {
      const n = document.createElement("script");
      n.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js", n.async = !0, n.onload = () => te(!0), document.body.appendChild(n);
    }
  }, []);
  const fe = tt(() => {
    if (!P.current) return null;
    const n = document.createElement("canvas");
    n.width = P.current.videoWidth, n.height = P.current.videoHeight;
    const a = n.getContext("2d");
    return a ? (a.drawImage(P.current, 0, 0, n.width, n.height), n.toDataURL("image/png")) : null;
  }, []), I = tt(async (n) => {
    const a = N.find((o) => o.step_id === n);
    if (!(!a || !P.current)) {
      if (B(n), ue(!1), a.capturedImage) {
        F(a.capturedImage);
        return;
      }
      if (A) {
        P.current.currentTime = a.timestamp_seconds, await new Promise((d) => setTimeout(d, 300));
        const o = fe();
        F(o), W((d) => d.map((i) => i.step_id === n ? { ...i, previewImage: o || void 0 } : i));
      }
    }
  }, [N, A, fe]);
  Xe(() => {
    A && N.length > 0 && T === null && I(N[0].step_id);
  }, [A, N, T, I]);
  const R = 10, re = (n, a) => {
    n.stopPropagation(), Se(null), I(a), setTimeout(() => {
      ue(!0);
    }, 100);
  };
  Xe(() => {
    if (D && T && L.current) {
      const n = N.find((a) => a.step_id === T);
      if (n && L.current) {
        const { width: a, height: o } = L.current.getBoundingClientRect(), [d, i, v, c] = n.ui_coordinates;
        c > 0 && v > 0 ? k({
          x: i / 1e3 * a,
          y: d / 1e3 * o,
          width: (c - i) / 1e3 * a,
          height: (v - d) / 1e3 * o
        }) : k({
          x: a * 0.25,
          y: o * 0.4,
          width: a * 0.5,
          height: o * 0.2
        });
      }
    }
  }, [D, T, N]);
  const be = (n, a, o) => {
    if (!o) return null;
    const { x: d, y: i, width: v, height: c } = o;
    return Math.abs(n - d) <= R && Math.abs(a - i) <= R ? "nw" : Math.abs(n - (d + v)) <= R && Math.abs(a - i) <= R ? "ne" : Math.abs(n - d) <= R && Math.abs(a - (i + c)) <= R ? "sw" : Math.abs(n - (d + v)) <= R && Math.abs(a - (i + c)) <= R ? "se" : n > d + R && n < d + v - R && a > i + R && a < i + c - R ? "move" : null;
  }, Te = (n) => {
    if (!D || !L.current) return;
    const a = L.current.getBoundingClientRect(), o = n.clientX - a.left, d = n.clientY - a.top, i = be(o, d, S);
    i && S ? xe({
      type: i === "move" ? "move" : "resize",
      handle: i,
      startX: o,
      startY: d,
      initialRect: { ...S }
    }) : (k({ x: o, y: d, width: 0, height: 0 }), xe({
      type: "create",
      startX: o,
      startY: d,
      initialRect: null
    }));
  }, ke = (n) => {
    if (!D || !L.current) return;
    const a = L.current.getBoundingClientRect(), o = n.clientX - a.left, d = n.clientY - a.top, i = Math.max(0, Math.min(o, a.width)), v = Math.max(0, Math.min(d, a.height));
    if (h) {
      if (h.type === "create")
        k({
          x: Math.min(h.startX, i),
          y: Math.min(h.startY, v),
          width: Math.abs(i - h.startX),
          height: Math.abs(v - h.startY)
        });
      else if (h.type === "move" && h.initialRect) {
        const c = i - h.startX, j = v - h.startY;
        k({
          ...h.initialRect,
          x: h.initialRect.x + c,
          y: h.initialRect.y + j
        });
      } else if (h.type === "resize" && h.initialRect) {
        const { initialRect: c, handle: j } = h;
        let l = { ...c };
        const g = i - h.startX, y = v - h.startY;
        j === "se" ? (l.width = c.width + g, l.height = c.height + y) : j === "sw" ? (l.x = c.x + g, l.width = c.width - g, l.height = c.height + y) : j === "ne" ? (l.y = c.y + y, l.width = c.width + g, l.height = c.height - y) : j === "nw" && (l.x = c.x + g, l.y = c.y + y, l.width = c.width - g, l.height = c.height - y), l.width < 0 && (l.x += l.width, l.width = Math.abs(l.width)), l.height < 0 && (l.y += l.height, l.height = Math.abs(l.height)), k(l);
      }
    } else {
      const c = be(o, d, S);
      de(c === "move" ? "move" : c === "nw" || c === "se" ? "nwse-resize" : c === "ne" || c === "sw" ? "nesw-resize" : "crosshair");
    }
  }, ve = () => {
    xe(null);
  }, Pe = () => {
    if (T && S && L.current) {
      const { width: n, height: a } = L.current.getBoundingClientRect(), o = Math.round(S.x / n * 1e3), d = Math.round(S.y / a * 1e3), i = Math.round((S.x + S.width) / n * 1e3), v = Math.round((S.y + S.height) / a * 1e3), c = (l) => Math.max(0, Math.min(1e3, l));
      let j = C;
      if (!j && P.current) {
        const l = document.createElement("canvas");
        l.width = P.current.videoWidth, l.height = P.current.videoHeight;
        const g = l.getContext("2d");
        g && (g.drawImage(P.current, 0, 0), j = l.toDataURL("image/png"));
      }
      W((l) => l.map((g) => g.step_id === T ? {
        ...g,
        ui_coordinates: [c(d), c(o), c(v), c(i)],
        status: "success",
        capturedImage: j || void 0
      } : g)), ue(!1), k(null);
    }
  }, ye = async (n) => {
    var d, i, v, c, j;
    const a = N.find((l) => l.step_id === n);
    if (!a) return;
    let o = a.capturedImage || a.previewImage;
    if (!o && P.current && (P.current.currentTime = a.timestamp_seconds, await new Promise((l) => setTimeout(l, 300)), o = fe() || void 0), !o) {
      alert("画像の取得に失敗しました。動画を確認してください。");
      return;
    }
    W((l) => l.map((g) => g.step_id === n ? { ...g, status: "analyzing" } : g));
    try {
      const l = o.split(",")[1], y = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: `
        Return JSON only. No markdown.
        Detect the bounding box of the UI element described by the user.
        Coordinate system: 0-1000 normalized [ymin, xmin, ymax, xmax].
        Schema: { "boxes": [ { "ymin": int, "xmin": int, "ymax": int, "xmax": int, "label": string } ] }
      ` + `
Target: ${a.target_label}
Hint: ${a.visual_description}` },
                { inlineData: { mimeType: "image/png", data: l } }
              ]
            }],
            generationConfig: { responseMimeType: "application/json" }
          })
        }
      );
      if (!y.ok) throw new Error(`API Error: ${y.status}`);
      const V = (j = (c = (v = (i = (d = (await y.json()).candidates) == null ? void 0 : d[0]) == null ? void 0 : i.content) == null ? void 0 : v.parts) == null ? void 0 : c[0]) == null ? void 0 : j.text, X = JSON.parse(V);
      if (X.boxes && X.boxes.length > 0) {
        const q = X.boxes[0];
        W((z) => z.map((ne) => ne.step_id === n ? {
          ...ne,
          ui_coordinates: [q.ymin, q.xmin, q.ymax, q.xmax],
          status: "success",
          capturedImage: o
        } : ne));
      } else
        throw new Error("Not found");
    } catch (l) {
      console.error(l), alert(`エラーが発生しました: ${l.message}`), W((g) => g.map((y) => y.step_id === n ? { ...y, status: "error" } : y));
    }
  }, Oe = async () => {
    U(!0);
    for (const n of N)
      await I(n.step_id), await ye(n.step_id), await new Promise((a) => setTimeout(a, 800));
    U(!1);
  }, Me = () => {
    const n = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(N, null, 2)), a = document.createElement("a");
    a.href = n, a.download = "result.json", a.click();
  }, De = async (n) => !n.capturedImage || !n.ui_coordinates ? null : new Promise((a) => {
    const o = new Image();
    o.onload = () => {
      const d = document.createElement("canvas");
      d.width = o.width, d.height = o.height;
      const i = d.getContext("2d");
      if (!i) {
        a(null);
        return;
      }
      i.drawImage(o, 0, 0);
      const [v, c, j, l] = n.ui_coordinates;
      if (l > 0 && j > 0) {
        const g = c / 1e3 * o.width, y = v / 1e3 * o.height, G = (l - c) / 1e3 * o.width, V = (j - v) / 1e3 * o.height, X = Math.max(2, o.width * 35e-4), q = X * 2;
        i.strokeStyle = "#ef4444", i.lineWidth = X, i.beginPath(), i.roundRect ? i.roundRect(g, y, G, V, q) : i.rect(g, y, G, V), i.stroke();
        let z = `Step ${n.step_id}`;
        const ne = 12;
        let O = Math.max(16, o.width * 0.025);
        i.font = `bold ${O}px sans-serif`;
        let Q = i.measureText(z), K = O * 0.6;
        const ae = G, Ie = Q.width + K * 2;
        if (Ie > ae) {
          const Ue = ae / Ie;
          let he = Math.floor(O * Ue);
          if (he < ne) {
            z = `${n.step_id}`, O = Math.max(16, o.width * 0.025), K = O * 0.6, i.font = `bold ${O}px sans-serif`, Q = i.measureText(z);
            const je = Q.width + K * 2;
            if (je > ae) {
              const ee = ae / je;
              O = Math.max(10, Math.floor(O * ee));
            }
          } else
            O = he;
        }
        i.font = `bold ${O}px sans-serif`, Q = i.measureText(z), K = O * 0.6;
        const se = Q.width + K * 2, ie = O + K * 2, Le = y < o.height / 2, we = g + G / 2 - se / 2;
        let oe;
        Le ? oe = y + V + X : oe = y - ie - X, i.fillStyle = "#ef4444", i.beginPath(), i.roundRect ? i.roundRect(we, oe, se, ie, q) : i.rect(we, oe, se, ie), i.fill(), i.fillStyle = "white", i.textAlign = "center", i.textBaseline = "middle";
        const Ye = we + se / 2, We = oe + ie / 2;
        i.fillText(z, Ye, We + O * 0.05);
      }
      d.toBlob((g) => a(g), "image/png");
    }, o.src = n.capturedImage;
  }), Fe = async () => {
    if (!window.JSZip || !H) {
      alert("ZIPライブラリの準備中です。数秒待ってから再試行してください。");
      return;
    }
    U(!0);
    try {
      const n = new window.JSZip(), a = n.folder("images");
      let o = `# 操作マニュアル

自動生成された操作手順書です。

`;
      for (const c of N) {
        if (o += `### Step ${c.step_id} : ${c.target_label}
`, o += `${c.instruction_text}

`, c.status === "success" && c.capturedImage) {
          const j = await De(c);
          if (j) {
            const l = `step${c.step_id}.png`;
            a == null || a.file(l, j), o += `![Step ${c.step_id}](./images/${l})

`;
          }
        } else
          o += `> *(画像なし)*

`;
        o += `---

`;
      }
      n.file("manual.md", o);
      const d = await n.generateAsync({ type: "blob" }), i = URL.createObjectURL(d), v = document.createElement("a");
      v.href = i, v.download = "manual_package.zip", v.click(), URL.revokeObjectURL(i);
    } catch (n) {
      console.error(n), alert("マニュアル作成中にエラーが発生しました。");
    } finally {
      U(!1);
    }
  }, p = N.find((n) => n.step_id === T);
  return /* @__PURE__ */ r.jsxs("div", { className: "min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col", children: [
    /* @__PURE__ */ r.jsx("video", { ref: P, src: A || void 0, className: "hidden", muted: !0, playsInline: !0 }),
    /* @__PURE__ */ r.jsx("input", { type: "file", accept: "video/*", ref: pe, className: "hidden", onChange: (n) => {
      var a;
      (a = n.target.files) != null && a[0] && Z(URL.createObjectURL(n.target.files[0]));
    } }),
    /* @__PURE__ */ r.jsx("input", { type: "file", accept: ".json", ref: Ce, className: "hidden", onChange: (n) => {
      var a;
      if ((a = n.target.files) != null && a[0]) {
        const o = new FileReader();
        o.onload = (d) => {
          var i;
          return W(JSON.parse((i = d.target) == null ? void 0 : i.result));
        }, o.readAsText(n.target.files[0]);
      }
    } }),
    /* @__PURE__ */ r.jsxs("header", { className: "bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ r.jsx("div", { className: "bg-blue-600 text-white p-1.5 rounded-lg", children: /* @__PURE__ */ r.jsx(bt, { className: "w-5 h-5" }) }),
        /* @__PURE__ */ r.jsx("h1", { className: "font-bold text-lg hidden sm:block", children: "UIキャプチャ・スタジオ" })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2 relative", children: [
        !A && /* @__PURE__ */ r.jsxs("button", { onClick: () => {
          var n;
          return (n = pe.current) == null ? void 0 : n.click();
        }, className: "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors", children: [
          /* @__PURE__ */ r.jsx(rt, { className: "w-4 h-4" }),
          " 動画を選択"
        ] }),
        A && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("button", { onClick: () => {
            var n;
            return (n = Ce.current) == null ? void 0 : n.click();
          }, className: "p-2 text-gray-600 hover:bg-gray-100 rounded-lg border border-gray-200", title: "JSON読込", children: /* @__PURE__ */ r.jsx(nt, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ r.jsx("div", { className: "h-8 w-px bg-gray-300 mx-1" }),
          /* @__PURE__ */ r.jsxs("button", { onClick: Me, className: "flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transition-colors", children: [
            /* @__PURE__ */ r.jsx(nt, { className: "w-4 h-4" }),
            " ",
            /* @__PURE__ */ r.jsx("span", { className: "hidden sm:inline", children: "JSON" })
          ] }),
          /* @__PURE__ */ r.jsxs("button", { onClick: Fe, disabled: w, className: "flex items-center gap-2 px-4 py-2 bg-indigo-900 hover:bg-indigo-800 text-white rounded-lg font-medium text-sm transition-colors shadow-sm", children: [
            w ? /* @__PURE__ */ r.jsx(Be, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ r.jsx(vt, { className: "w-4 h-4" }),
            /* @__PURE__ */ r.jsx("span", { children: "マニュアル保存 (ZIP)" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ r.jsxs("main", { className: "flex-1 flex flex-col md:flex-row overflow-hidden", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "w-full md:w-80 bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col h-1/3 md:h-full shrink-0", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "p-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center", children: [
          /* @__PURE__ */ r.jsx("span", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider", children: "Timeline Steps" }),
          /* @__PURE__ */ r.jsx("span", { className: "bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full", children: N.length })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "flex-1 overflow-y-auto p-2 space-y-2", children: N.map((n) => /* @__PURE__ */ r.jsxs("div", { className: `group relative rounded-xl border transition-all duration-200 ${T === n.step_id ? "bg-blue-50 border-blue-200 shadow-sm ring-1 ring-blue-200" : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200"}`, children: [
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              onClick: () => I(n.step_id),
              className: "w-full text-left p-3 flex items-start gap-3",
              children: [
                /* @__PURE__ */ r.jsx("div", { className: `mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${n.status === "success" ? "bg-green-100 text-green-700" : n.status === "error" ? "bg-red-100 text-red-700" : T === n.step_id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"}`, children: n.step_id }),
                /* @__PURE__ */ r.jsxs("div", { className: "min-w-0 flex-1", children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "flex justify-between items-center mb-0.5", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "text-xs font-medium text-gray-900 truncate", children: n.target_label }),
                    /* @__PURE__ */ r.jsx("span", { className: "text-[10px] text-gray-400 font-mono", children: n.timestamp_str })
                  ] }),
                  /* @__PURE__ */ r.jsx("p", { className: "text-[10px] text-gray-500 line-clamp-1", children: n.instruction_text })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "absolute top-2 right-2", children: [
            /* @__PURE__ */ r.jsx(
              "button",
              {
                onClick: (a) => {
                  a.stopPropagation(), Se(Ne === n.step_id ? null : n.step_id);
                },
                className: "p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200",
                children: /* @__PURE__ */ r.jsx(yt, { className: "w-4 h-4" })
              }
            ),
            Ne === n.step_id && /* @__PURE__ */ r.jsx("div", { className: "absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100", children: /* @__PURE__ */ r.jsxs(
              "button",
              {
                onClick: (a) => re(a, n.step_id),
                className: "w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2",
                children: [
                  /* @__PURE__ */ r.jsx(wt, { className: "w-4 h-4" }),
                  "手動で座標を修正"
                ]
              }
            ) })
          ] })
        ] }, n.step_id)) }),
        /* @__PURE__ */ r.jsx("div", { className: "p-4 border-t border-gray-200 bg-gray-50", children: /* @__PURE__ */ r.jsxs("button", { onClick: Oe, disabled: w || !A, className: "w-full py-2.5 bg-white border border-gray-300 hover:border-blue-300 hover:text-blue-600 text-gray-700 rounded-lg text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50", children: [
          w ? /* @__PURE__ */ r.jsx(Be, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ r.jsx(jt, { className: "w-4 h-4 text-yellow-500" }),
          " AI一括解析"
        ] }) })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "flex-1 bg-gray-100 flex flex-col h-2/3 md:h-full relative overflow-y-auto", children: A ? /* @__PURE__ */ r.jsxs("div", { className: "p-4 md:p-8 flex flex-col gap-6 max-w-5xl mx-auto w-full h-full", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0 relative", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "p-4 border-b border-gray-100 flex justify-between items-center", children: [
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ r.jsx(_t, { className: "w-4 h-4 text-gray-400" }),
              /* @__PURE__ */ r.jsxs("span", { className: "text-sm font-bold text-gray-700", children: [
                "Preview: ",
                p == null ? void 0 : p.timestamp_str
              ] }),
              D && /* @__PURE__ */ r.jsx("span", { className: "bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-bold animate-pulse", children: "Manual Edit Mode" })
            ] }),
            p && !D && /* @__PURE__ */ r.jsx("button", { onClick: () => ye(p.step_id), disabled: w, className: "text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium hover:bg-blue-100 transition-colors", children: p.status === "analyzing" ? "解析中..." : "AI再解析" }),
            D && /* @__PURE__ */ r.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ r.jsxs("button", { onClick: () => {
                ue(!1), k(null);
              }, className: "text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center gap-1", children: [
                /* @__PURE__ */ r.jsx(Rt, { className: "w-3 h-3" }),
                " キャンセル"
              ] }),
              /* @__PURE__ */ r.jsxs("button", { onClick: Pe, className: "text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-1 shadow-sm", children: [
                /* @__PURE__ */ r.jsx(Et, { className: "w-3 h-3" }),
                " 変更を保存"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "flex-1 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-gray-50 relative flex items-center justify-center overflow-hidden p-4 select-none",
              onMouseDown: Te,
              onMouseMove: ke,
              onMouseUp: ve,
              onMouseLeave: ve,
              style: { cursor: Ae },
              children: C ? /* @__PURE__ */ r.jsxs("div", { className: "relative shadow-xl max-w-full max-h-full inline-block", children: [
                /* @__PURE__ */ r.jsx(
                  "img",
                  {
                    ref: L,
                    src: C,
                    alt: "Step Preview",
                    className: "max-w-full max-h-full object-contain rounded pointer-events-none select-none block",
                    draggable: !1
                  }
                ),
                !D && (p == null ? void 0 : p.ui_coordinates) && p.ui_coordinates[2] > 0 && /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: "absolute border-red-500 shadow-[0_0_0_2px_rgba(255,255,255,0.2)] pointer-events-none flex items-center justify-center",
                    style: {
                      top: `${p.ui_coordinates[0] / 10}%`,
                      left: `${p.ui_coordinates[1] / 10}%`,
                      height: `${(p.ui_coordinates[2] - p.ui_coordinates[0]) / 10}%`,
                      width: `${(p.ui_coordinates[3] - p.ui_coordinates[1]) / 10}%`,
                      borderWidth: "3px",
                      borderRadius: "6px"
                    },
                    children: /* @__PURE__ */ r.jsxs("div", { className: "bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm whitespace-nowrap overflow-hidden max-w-full text-ellipsis", children: [
                      "Step ",
                      p.step_id
                    ] })
                  }
                ),
                D && S && /* @__PURE__ */ r.jsxs(
                  "div",
                  {
                    className: "absolute border-2 border-white z-50 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] cursor-move",
                    style: {
                      left: S.x,
                      top: S.y,
                      width: S.width,
                      height: S.height
                    },
                    children: [
                      /* @__PURE__ */ r.jsx("div", { className: "absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-black cursor-nwse-resize" }),
                      /* @__PURE__ */ r.jsx("div", { className: "absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-black cursor-nesw-resize" }),
                      /* @__PURE__ */ r.jsx("div", { className: "absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-black cursor-nesw-resize" }),
                      /* @__PURE__ */ r.jsx("div", { className: "absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-black cursor-nwse-resize" })
                    ]
                  }
                )
              ] }) : /* @__PURE__ */ r.jsxs("div", { className: "flex flex-col items-center gap-2 text-gray-400", children: [
                /* @__PURE__ */ r.jsx(Be, { className: "w-8 h-8 animate-spin" }),
                /* @__PURE__ */ r.jsx("span", { className: "text-sm", children: "Generating Preview..." })
              ] })
            }
          )
        ] }),
        p && !D && /* @__PURE__ */ r.jsx("div", { className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200 shrink-0", children: /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("label", { className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block", children: "Target UI Element" }),
            /* @__PURE__ */ r.jsxs("div", { className: "flex items-center gap-2 text-lg font-bold text-gray-800", children: [
              /* @__PURE__ */ r.jsx(Nt, { className: "w-5 h-5 text-blue-500" }),
              p.target_label
            ] }),
            /* @__PURE__ */ r.jsx("p", { className: "text-sm text-gray-600 mt-2 bg-gray-50 p-3 rounded-lg border border-gray-100", children: p.instruction_text })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { children: [
            /* @__PURE__ */ r.jsx("label", { className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block", children: "AI Hint / Status" }),
            /* @__PURE__ */ r.jsxs("p", { className: "text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-yellow-800 flex gap-2 items-start", children: [
              /* @__PURE__ */ r.jsx(St, { className: "w-4 h-4 shrink-0 mt-0.5" }),
              p.visual_description
            ] }),
            /* @__PURE__ */ r.jsxs("div", { className: "mt-4 flex items-center gap-2", children: [
              /* @__PURE__ */ r.jsxs("div", { className: `text-xs px-2 py-1 rounded font-mono border ${p.status === "success" ? "bg-green-50 border-green-200 text-green-700" : "bg-gray-100 border-gray-200 text-gray-500"}`, children: [
                "Status: ",
                p.status || "Pending"
              ] }),
              /* @__PURE__ */ r.jsxs("div", { className: "text-xs font-mono text-gray-400", children: [
                "Coords: [",
                p.ui_coordinates.join(","),
                "]"
              ] })
            ] })
          ] })
        ] }) })
      ] }) : /* @__PURE__ */ r.jsxs("div", { className: "flex-1 flex flex-col items-center justify-center text-gray-400 p-8", children: [
        /* @__PURE__ */ r.jsx("div", { className: "w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4", children: /* @__PURE__ */ r.jsx(rt, { className: "w-8 h-8 text-gray-400" }) }),
        /* @__PURE__ */ r.jsx("p", { className: "text-lg font-medium text-gray-500", children: "動画ファイルを読み込んで開始" })
      ] }) })
    ] })
  ] });
}
export {
  Mt as default
};
