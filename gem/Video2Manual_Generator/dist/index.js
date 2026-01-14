import e, { forwardRef as fe, createElement as te, useState as N, useRef as J, useEffect as Q, useCallback as ge } from "react";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = (k) => k.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), be = (...k) => k.filter((M, p, I) => !!M && M.trim() !== "" && I.indexOf(M) === p).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Pe = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = fe(
  ({
    color: k = "currentColor",
    size: M = 24,
    strokeWidth: p = 2,
    absoluteStrokeWidth: I,
    className: u = "",
    children: w,
    iconNode: v,
    ...D
  }, j) => te(
    "svg",
    {
      ref: j,
      ...Pe,
      width: M,
      height: M,
      stroke: k,
      strokeWidth: I ? Number(p) * 24 / Number(M) : p,
      className: be("lucide", u),
      ...D
    },
    [
      ...v.map(([L, A]) => te(L, A)),
      ...Array.isArray(w) ? w : [w]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y = (k, M) => {
  const p = fe(
    ({ className: I, ...u }, w) => te(Ae, {
      ref: w,
      iconNode: M,
      className: be(`lucide-${Le(k)}`, I),
      ...u
    })
  );
  return p.displayName = `${k}`, p;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = y("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = y("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = y("Crop", [
  ["path", { d: "M6 2v14a2 2 0 0 0 2 2h14", key: "ron5a4" }],
  ["path", { d: "M18 22V8a2 2 0 0 0-2-2H2", key: "7s9ehn" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = y("EllipsisVertical", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "12", cy: "5", r: "1", key: "gxeob9" }],
  ["circle", { cx: "12", cy: "19", r: "1", key: "lyex9k" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pe = y("FileJson", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  [
    "path",
    { d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1", key: "1oajmo" }
  ],
  [
    "path",
    { d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1", key: "mpwhp6" }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = y("Image", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ee = y("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = y("MousePointer2", [
  [
    "path",
    {
      d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z",
      key: "edeuup"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Je = y("PanelsTopLeft", [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
  ["path", { d: "M3 9h18", key: "1pudct" }],
  ["path", { d: "M9 21V9", key: "1oto5p" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = y("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ye = y("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx"
    }
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xe = y("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = y("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function De({ initialSteps: k = [] }) {
  const [p, I] = N(null), [u, w] = N(k), [v, D] = N(null), [j, L] = N(!1), [A, ae] = N(null), [ye, ne] = N(!1), [_, Z] = N(!1), [x, S] = N(null), [g, F] = N(null), [we, Y] = N("default"), [re, se] = N(null), f = J(null), le = J(null), ie = J(null), C = J(null);
  J(null), Q(() => {
    if (window.JSZip)
      ne(!0);
    else {
      const t = document.createElement("script");
      t.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js", t.async = !0, t.onload = () => ne(!0), document.body.appendChild(t);
    }
  }, []);
  const K = ge(() => {
    if (!f.current) return null;
    const t = document.createElement("canvas");
    t.width = f.current.videoWidth, t.height = f.current.videoHeight;
    const a = t.getContext("2d");
    return a ? (a.drawImage(f.current, 0, 0, t.width, t.height), t.toDataURL("image/png")) : null;
  }, []), T = ge(async (t) => {
    const a = u.find((r) => r.step_id === t);
    if (!(!a || !f.current)) {
      if (D(t), Z(!1), a.capturedImage) {
        ae(a.capturedImage);
        return;
      }
      if (p) {
        f.current.currentTime = a.timestamp_seconds, await new Promise((i) => setTimeout(i, 300));
        const r = K();
        ae(r), w((i) => i.map((n) => n.step_id === t ? { ...n, previewImage: r || void 0 } : n));
      }
    }
  }, [u, p, K]);
  Q(() => {
    p && u.length > 0 && v === null && T(u[0].step_id);
  }, [p, u, v, T]);
  const E = 10, ve = (t, a) => {
    t.stopPropagation(), se(null), T(a), setTimeout(() => {
      Z(!0);
    }, 100);
  };
  Q(() => {
    if (_ && v && C.current) {
      const t = u.find((a) => a.step_id === v);
      if (t && C.current) {
        const { width: a, height: r } = C.current.getBoundingClientRect(), [i, n, d, l] = t.ui_coordinates;
        l > 0 && d > 0 ? S({
          x: n / 1e3 * a,
          y: i / 1e3 * r,
          width: (l - n) / 1e3 * a,
          height: (d - i) / 1e3 * r
        }) : S({
          x: a * 0.25,
          y: r * 0.4,
          width: a * 0.5,
          height: r * 0.2
        });
      }
    }
  }, [_, v, u]);
  const oe = (t, a, r) => {
    if (!r) return null;
    const { x: i, y: n, width: d, height: l } = r;
    return Math.abs(t - i) <= E && Math.abs(a - n) <= E ? "nw" : Math.abs(t - (i + d)) <= E && Math.abs(a - n) <= E ? "ne" : Math.abs(t - i) <= E && Math.abs(a - (n + l)) <= E ? "sw" : Math.abs(t - (i + d)) <= E && Math.abs(a - (n + l)) <= E ? "se" : t > i + E && t < i + d - E && a > n + E && a < n + l - E ? "move" : null;
  }, Ee = (t) => {
    if (!_ || !C.current) return;
    const a = C.current.getBoundingClientRect(), r = t.clientX - a.left, i = t.clientY - a.top, n = oe(r, i, x);
    n && x ? F({
      type: n === "move" ? "move" : "resize",
      handle: n,
      startX: r,
      startY: i,
      initialRect: { ...x }
    }) : (S({ x: r, y: i, width: 0, height: 0 }), F({
      type: "create",
      startX: r,
      startY: i,
      initialRect: null
    }));
  }, Ne = (t) => {
    if (!_ || !C.current) return;
    const a = C.current.getBoundingClientRect(), r = t.clientX - a.left, i = t.clientY - a.top, n = Math.max(0, Math.min(r, a.width)), d = Math.max(0, Math.min(i, a.height));
    if (g) {
      if (g.type === "create")
        S({
          x: Math.min(g.startX, n),
          y: Math.min(g.startY, d),
          width: Math.abs(n - g.startX),
          height: Math.abs(d - g.startY)
        });
      else if (g.type === "move" && g.initialRect) {
        const l = n - g.startX, h = d - g.startY;
        S({
          ...g.initialRect,
          x: g.initialRect.x + l,
          y: g.initialRect.y + h
        });
      } else if (g.type === "resize" && g.initialRect) {
        const { initialRect: l, handle: h } = g;
        let s = { ...l };
        const o = n - g.startX, m = d - g.startY;
        h === "se" ? (s.width = l.width + o, s.height = l.height + m) : h === "sw" ? (s.x = l.x + o, s.width = l.width - o, s.height = l.height + m) : h === "ne" ? (s.y = l.y + m, s.width = l.width + o, s.height = l.height - m) : h === "nw" && (s.x = l.x + o, s.y = l.y + m, s.width = l.width - o, s.height = l.height - m), s.width < 0 && (s.x += s.width, s.width = Math.abs(s.width)), s.height < 0 && (s.y += s.height, s.height = Math.abs(s.height)), S(s);
      }
    } else {
      const l = oe(r, i, x);
      Y(l === "move" ? "move" : l === "nw" || l === "se" ? "nwse-resize" : l === "ne" || l === "sw" ? "nesw-resize" : "crosshair");
    }
  }, ce = () => {
    F(null);
  }, ke = () => {
    if (v && x && C.current) {
      const { width: t, height: a } = C.current.getBoundingClientRect(), r = Math.round(x.x / t * 1e3), i = Math.round(x.y / a * 1e3), n = Math.round((x.x + x.width) / t * 1e3), d = Math.round((x.y + x.height) / a * 1e3), l = (s) => Math.max(0, Math.min(1e3, s));
      let h = A;
      if (!h && f.current) {
        const s = document.createElement("canvas");
        s.width = f.current.videoWidth, s.height = f.current.videoHeight;
        const o = s.getContext("2d");
        o && (o.drawImage(f.current, 0, 0), h = s.toDataURL("image/png"));
      }
      w((s) => s.map((o) => o.step_id === v ? {
        ...o,
        ui_coordinates: [l(i), l(r), l(d), l(n)],
        status: "success",
        capturedImage: h || void 0
      } : o)), Z(!1), S(null);
    }
  }, de = async (t) => {
    var i, n, d, l, h;
    const a = u.find((s) => s.step_id === t);
    if (!a) return;
    let r = a.capturedImage || a.previewImage;
    if (!r && f.current && (f.current.currentTime = a.timestamp_seconds, await new Promise((s) => setTimeout(s, 300)), r = K() || void 0), !r) {
      alert("画像の取得に失敗しました。動画を確認してください。");
      return;
    }
    w((s) => s.map((o) => o.step_id === t ? { ...o, status: "analyzing" } : o));
    try {
      const s = r.split(",")[1], m = await fetch(
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
                { inlineData: { mimeType: "image/png", data: s } }
              ]
            }],
            generationConfig: { responseMimeType: "application/json" }
          })
        }
      );
      if (!m.ok) throw new Error(`API Error: ${m.status}`);
      const X = (h = (l = (d = (n = (i = (await m.json()).candidates) == null ? void 0 : i[0]) == null ? void 0 : n.content) == null ? void 0 : d.parts) == null ? void 0 : l[0]) == null ? void 0 : h.text, R = JSON.parse(X);
      if (R.boxes && R.boxes.length > 0) {
        const z = R.boxes[0];
        w(($) => $.map((H) => H.step_id === t ? {
          ...H,
          ui_coordinates: [z.ymin, z.xmin, z.ymax, z.xmax],
          status: "success",
          capturedImage: r
        } : H));
      } else
        throw new Error("Not found");
    } catch (s) {
      console.error(s), alert(`エラーが発生しました: ${s.message}`), w((o) => o.map((m) => m.step_id === t ? { ...m, status: "error" } : m));
    }
  }, Me = async () => {
    L(!0);
    for (const t of u)
      await T(t.step_id), await de(t.step_id), await new Promise((a) => setTimeout(a, 800));
    L(!1);
  }, _e = () => {
    const t = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(u, null, 2)), a = document.createElement("a");
    a.href = t, a.download = "result.json", a.click();
  }, Ce = async (t) => !t.capturedImage || !t.ui_coordinates ? null : new Promise((a) => {
    const r = new Image();
    r.onload = () => {
      const i = document.createElement("canvas");
      i.width = r.width, i.height = r.height;
      const n = i.getContext("2d");
      if (!n) {
        a(null);
        return;
      }
      n.drawImage(r, 0, 0);
      const [d, l, h, s] = t.ui_coordinates;
      if (s > 0 && h > 0) {
        const o = l / 1e3 * r.width, m = d / 1e3 * r.height, U = (s - l) / 1e3 * r.width, X = (h - d) / 1e3 * r.height, R = Math.max(2, r.width * 35e-4), z = R * 2;
        n.strokeStyle = "#ef4444", n.lineWidth = R, n.beginPath(), n.roundRect ? n.roundRect(o, m, U, X, z) : n.rect(o, m, U, X), n.stroke();
        let $ = `Step ${t.step_id}`;
        const H = 12;
        let b = Math.max(16, r.width * 0.025);
        n.font = `bold ${b}px sans-serif`;
        let O = n.measureText($), P = b * 0.6;
        const V = U, me = O.width + P * 2;
        if (me > V) {
          const ze = V / me;
          let he = Math.floor(b * ze);
          if (he < H) {
            $ = `${t.step_id}`, b = Math.max(16, r.width * 0.025), P = b * 0.6, n.font = `bold ${b}px sans-serif`, O = n.measureText($);
            const ue = O.width + P * 2;
            if (ue > V) {
              const $e = V / ue;
              b = Math.max(10, Math.floor(b * $e));
            }
          } else
            b = he;
        }
        n.font = `bold ${b}px sans-serif`, O = n.measureText($), P = b * 0.6;
        const W = O.width + P * 2, q = b + P * 2, Re = m < r.height / 2, G = o + U / 2 - W / 2;
        let B;
        Re ? B = m + X + R : B = m - q - R, n.fillStyle = "#ef4444", n.beginPath(), n.roundRect ? n.roundRect(G, B, W, q, z) : n.rect(G, B, W, q), n.fill(), n.fillStyle = "white", n.textAlign = "center", n.textBaseline = "middle";
        const Ie = G + W / 2, je = B + q / 2;
        n.fillText($, Ie, je + b * 0.05);
      }
      i.toBlob((o) => a(o), "image/png");
    }, r.src = t.capturedImage;
  }), Se = async () => {
    if (!window.JSZip || !ye) {
      alert("ZIPライブラリの準備中です。数秒待ってから再試行してください。");
      return;
    }
    L(!0);
    try {
      const t = new window.JSZip(), a = t.folder("images");
      let r = `# 操作マニュアル

自動生成された操作手順書です。

`;
      for (const l of u) {
        if (r += `### Step ${l.step_id} : ${l.target_label}
`, r += `${l.instruction_text}

`, l.status === "success" && l.capturedImage) {
          const h = await Ce(l);
          if (h) {
            const s = `step${l.step_id}.png`;
            a == null || a.file(s, h), r += `![Step ${l.step_id}](./images/${s})

`;
          }
        } else
          r += `> *(画像なし)*

`;
        r += `---

`;
      }
      t.file("manual.md", r);
      const i = await t.generateAsync({ type: "blob" }), n = URL.createObjectURL(i), d = document.createElement("a");
      d.href = n, d.download = "manual_package.zip", d.click(), URL.revokeObjectURL(n);
    } catch (t) {
      console.error(t), alert("マニュアル作成中にエラーが発生しました。");
    } finally {
      L(!1);
    }
  }, c = u.find((t) => t.step_id === v);
  return /* @__PURE__ */ e.createElement("div", { className: "min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col" }, /* @__PURE__ */ e.createElement("video", { ref: f, src: p || void 0, className: "hidden", muted: !0, playsInline: !0 }), /* @__PURE__ */ e.createElement("input", { type: "file", accept: "video/*", ref: le, className: "hidden", onChange: (t) => {
    var a;
    (a = t.target.files) != null && a[0] && I(URL.createObjectURL(t.target.files[0]));
  } }), /* @__PURE__ */ e.createElement("input", { type: "file", accept: ".json", ref: ie, className: "hidden", onChange: (t) => {
    var a;
    if ((a = t.target.files) != null && a[0]) {
      const r = new FileReader();
      r.onload = (i) => {
        var n;
        return w(JSON.parse((n = i.target) == null ? void 0 : n.result));
      }, r.readAsText(t.target.files[0]);
    }
  } }), /* @__PURE__ */ e.createElement("header", { className: "bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm" }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ e.createElement("div", { className: "bg-blue-600 text-white p-1.5 rounded-lg" }, /* @__PURE__ */ e.createElement(Je, { className: "w-5 h-5" })), /* @__PURE__ */ e.createElement("h1", { className: "font-bold text-lg hidden sm:block" }, "UIキャプチャ・スタジオ")), /* @__PURE__ */ e.createElement("div", { className: "flex gap-2 relative" }, !p && /* @__PURE__ */ e.createElement("button", { onClick: () => {
    var t;
    return (t = le.current) == null ? void 0 : t.click();
  }, className: "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors" }, /* @__PURE__ */ e.createElement(xe, { className: "w-4 h-4" }), " 動画を選択"), p && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", { onClick: () => {
    var t;
    return (t = ie.current) == null ? void 0 : t.click();
  }, className: "p-2 text-gray-600 hover:bg-gray-100 rounded-lg border border-gray-200", title: "JSON読込" }, /* @__PURE__ */ e.createElement(pe, { className: "w-5 h-5" })), /* @__PURE__ */ e.createElement("div", { className: "h-8 w-px bg-gray-300 mx-1" }), /* @__PURE__ */ e.createElement("button", { onClick: _e, className: "flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transition-colors" }, /* @__PURE__ */ e.createElement(pe, { className: "w-4 h-4" }), " ", /* @__PURE__ */ e.createElement("span", { className: "hidden sm:inline" }, "JSON")), /* @__PURE__ */ e.createElement("button", { onClick: Se, disabled: j, className: "flex items-center gap-2 px-4 py-2 bg-indigo-900 hover:bg-indigo-800 text-white rounded-lg font-medium text-sm transition-colors shadow-sm" }, j ? /* @__PURE__ */ e.createElement(ee, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ e.createElement(Te, { className: "w-4 h-4" }), /* @__PURE__ */ e.createElement("span", null, "マニュアル保存 (ZIP)"))))), /* @__PURE__ */ e.createElement("main", { className: "flex-1 flex flex-col md:flex-row overflow-hidden" }, /* @__PURE__ */ e.createElement("div", { className: "w-full md:w-80 bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col h-1/3 md:h-full shrink-0" }, /* @__PURE__ */ e.createElement("div", { className: "p-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center" }, /* @__PURE__ */ e.createElement("span", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Timeline Steps"), /* @__PURE__ */ e.createElement("span", { className: "bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full" }, u.length)), /* @__PURE__ */ e.createElement("div", { className: "flex-1 overflow-y-auto p-2 space-y-2" }, u.map((t) => /* @__PURE__ */ e.createElement("div", { key: t.step_id, className: `group relative rounded-xl border transition-all duration-200 ${v === t.step_id ? "bg-blue-50 border-blue-200 shadow-sm ring-1 ring-blue-200" : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200"}` }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => T(t.step_id),
      className: "w-full text-left p-3 flex items-start gap-3"
    },
    /* @__PURE__ */ e.createElement("div", { className: `mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${t.status === "success" ? "bg-green-100 text-green-700" : t.status === "error" ? "bg-red-100 text-red-700" : v === t.step_id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"}` }, t.step_id),
    /* @__PURE__ */ e.createElement("div", { className: "min-w-0 flex-1" }, /* @__PURE__ */ e.createElement("div", { className: "flex justify-between items-center mb-0.5" }, /* @__PURE__ */ e.createElement("span", { className: "text-xs font-medium text-gray-900 truncate" }, t.target_label), /* @__PURE__ */ e.createElement("span", { className: "text-[10px] text-gray-400 font-mono" }, t.timestamp_str)), /* @__PURE__ */ e.createElement("p", { className: "text-[10px] text-gray-500 line-clamp-1" }, t.instruction_text))
  ), /* @__PURE__ */ e.createElement("div", { className: "absolute top-2 right-2" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: (a) => {
        a.stopPropagation(), se(re === t.step_id ? null : t.step_id);
      },
      className: "p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200"
    },
    /* @__PURE__ */ e.createElement(He, { className: "w-4 h-4" })
  ), re === t.step_id && /* @__PURE__ */ e.createElement("div", { className: "absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: (a) => ve(a, t.step_id),
      className: "w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
    },
    /* @__PURE__ */ e.createElement(Xe, { className: "w-4 h-4" }),
    "手動で座標を修正"
  )))))), /* @__PURE__ */ e.createElement("div", { className: "p-4 border-t border-gray-200 bg-gray-50" }, /* @__PURE__ */ e.createElement("button", { onClick: Me, disabled: j || !p, className: "w-full py-2.5 bg-white border border-gray-300 hover:border-blue-300 hover:text-blue-600 text-gray-700 rounded-lg text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50" }, j ? /* @__PURE__ */ e.createElement(ee, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ e.createElement(Ye, { className: "w-4 h-4 text-yellow-500" }), " AI一括解析"))), /* @__PURE__ */ e.createElement("div", { className: "flex-1 bg-gray-100 flex flex-col h-2/3 md:h-full relative overflow-y-auto" }, p ? /* @__PURE__ */ e.createElement("div", { className: "p-4 md:p-8 flex flex-col gap-6 max-w-5xl mx-auto w-full h-full" }, /* @__PURE__ */ e.createElement("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0 relative" }, /* @__PURE__ */ e.createElement("div", { className: "p-4 border-b border-gray-100 flex justify-between items-center" }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ e.createElement(Oe, { className: "w-4 h-4 text-gray-400" }), /* @__PURE__ */ e.createElement("span", { className: "text-sm font-bold text-gray-700" }, "Preview: ", c == null ? void 0 : c.timestamp_str), _ && /* @__PURE__ */ e.createElement("span", { className: "bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-bold animate-pulse" }, "Manual Edit Mode")), c && !_ && /* @__PURE__ */ e.createElement("button", { onClick: () => de(c.step_id), disabled: j, className: "text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium hover:bg-blue-100 transition-colors" }, c.status === "analyzing" ? "解析中..." : "AI再解析"), _ && /* @__PURE__ */ e.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ e.createElement("button", { onClick: () => {
    Z(!1), S(null);
  }, className: "text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center gap-1" }, /* @__PURE__ */ e.createElement(Ve, { className: "w-3 h-3" }), " キャンセル"), /* @__PURE__ */ e.createElement("button", { onClick: ke, className: "text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-1 shadow-sm" }, /* @__PURE__ */ e.createElement(Ze, { className: "w-3 h-3" }), " 変更を保存"))), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "flex-1 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-gray-50 relative flex items-center justify-center overflow-hidden p-4 select-none",
      onMouseDown: Ee,
      onMouseMove: Ne,
      onMouseUp: ce,
      onMouseLeave: ce,
      style: { cursor: we }
    },
    A ? /* @__PURE__ */ e.createElement("div", { className: "relative shadow-xl max-w-full max-h-full inline-block" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        ref: C,
        src: A,
        alt: "Step Preview",
        className: "max-w-full max-h-full object-contain rounded pointer-events-none select-none block",
        draggable: !1
      }
    ), !_ && (c == null ? void 0 : c.ui_coordinates) && c.ui_coordinates[2] > 0 && /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "absolute border-red-500 shadow-[0_0_0_2px_rgba(255,255,255,0.2)] pointer-events-none flex items-center justify-center",
        style: {
          top: `${c.ui_coordinates[0] / 10}%`,
          left: `${c.ui_coordinates[1] / 10}%`,
          height: `${(c.ui_coordinates[2] - c.ui_coordinates[0]) / 10}%`,
          width: `${(c.ui_coordinates[3] - c.ui_coordinates[1]) / 10}%`,
          borderWidth: "3px",
          borderRadius: "6px"
        }
      },
      /* @__PURE__ */ e.createElement("div", { className: "bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm whitespace-nowrap overflow-hidden max-w-full text-ellipsis" }, "Step ", c.step_id)
    ), _ && x && /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "absolute border-2 border-white z-50 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] cursor-move",
        style: {
          left: x.x,
          top: x.y,
          width: x.width,
          height: x.height
        }
      },
      /* @__PURE__ */ e.createElement("div", { className: "absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-black cursor-nwse-resize" }),
      /* @__PURE__ */ e.createElement("div", { className: "absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-black cursor-nesw-resize" }),
      /* @__PURE__ */ e.createElement("div", { className: "absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-black cursor-nesw-resize" }),
      /* @__PURE__ */ e.createElement("div", { className: "absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-black cursor-nwse-resize" })
    )) : /* @__PURE__ */ e.createElement("div", { className: "flex flex-col items-center gap-2 text-gray-400" }, /* @__PURE__ */ e.createElement(ee, { className: "w-8 h-8 animate-spin" }), /* @__PURE__ */ e.createElement("span", { className: "text-sm" }, "Generating Preview..."))
  )), c && !_ && /* @__PURE__ */ e.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200 shrink-0" }, /* @__PURE__ */ e.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block" }, "Target UI Element"), /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2 text-lg font-bold text-gray-800" }, /* @__PURE__ */ e.createElement(Be, { className: "w-5 h-5 text-blue-500" }), c.target_label), /* @__PURE__ */ e.createElement("p", { className: "text-sm text-gray-600 mt-2 bg-gray-50 p-3 rounded-lg border border-gray-100" }, c.instruction_text)), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block" }, "AI Hint / Status"), /* @__PURE__ */ e.createElement("p", { className: "text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-yellow-800 flex gap-2 items-start" }, /* @__PURE__ */ e.createElement(Ue, { className: "w-4 h-4 shrink-0 mt-0.5" }), c.visual_description), /* @__PURE__ */ e.createElement("div", { className: "mt-4 flex items-center gap-2" }, /* @__PURE__ */ e.createElement("div", { className: `text-xs px-2 py-1 rounded font-mono border ${c.status === "success" ? "bg-green-50 border-green-200 text-green-700" : "bg-gray-100 border-gray-200 text-gray-500"}` }, "Status: ", c.status || "Pending"), /* @__PURE__ */ e.createElement("div", { className: "text-xs font-mono text-gray-400" }, "Coords: [", c.ui_coordinates.join(","), "]")))))) : /* @__PURE__ */ e.createElement("div", { className: "flex-1 flex flex-col items-center justify-center text-gray-400 p-8" }, /* @__PURE__ */ e.createElement("div", { className: "w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4" }, /* @__PURE__ */ e.createElement(xe, { className: "w-8 h-8 text-gray-400" })), /* @__PURE__ */ e.createElement("p", { className: "text-lg font-medium text-gray-500" }, "動画ファイルを読み込んで開始")))));
}
export {
  De as default
};
