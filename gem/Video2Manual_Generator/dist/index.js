import e, { useState as w, useRef as U, useEffect as F, useCallback as oe } from "react";
import { Layout as Ce, Upload as ce, FileJson as de, Loader2 as V, BookOpen as Ie, MoreVertical as je, Crop as ze, Sparkles as $e, Image as Pe, X as Te, Save as Le, MousePointer2 as Ue, Brain as Xe } from "lucide-react";
function Be({ initialSteps: me = [] }) {
  const [N, ue] = w(null), [x, S] = w(me), [y, ge] = w(null), [I, X] = w(!1), [W, G] = w(null), [he, K] = w(!1), [v, A] = w(!1), [h, _] = w(null), [g, D] = w(null), [xe, J] = w("default"), [q, Q] = w(null), f = U(null), ee = U(null), te = U(null), E = U(null);
  U(null), F(() => {
    if (window.JSZip)
      K(!0);
    else {
      const t = document.createElement("script");
      t.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js", t.async = !0, t.onload = () => K(!0), document.body.appendChild(t);
    }
  }, []);
  const H = oe(() => {
    if (!f.current) return null;
    const t = document.createElement("canvas");
    t.width = f.current.videoWidth, t.height = f.current.videoHeight;
    const a = t.getContext("2d");
    return a ? (a.drawImage(f.current, 0, 0, t.width, t.height), t.toDataURL("image/png")) : null;
  }, []), j = oe(async (t) => {
    const a = x.find((r) => r.step_id === t);
    if (!(!a || !f.current)) {
      if (ge(t), A(!1), a.capturedImage) {
        G(a.capturedImage);
        return;
      }
      if (N) {
        f.current.currentTime = a.timestamp_seconds, await new Promise((i) => setTimeout(i, 300));
        const r = H();
        G(r), S((i) => i.map((n) => n.step_id === t ? { ...n, previewImage: r || void 0 } : n));
      }
    }
  }, [x, N, H]);
  F(() => {
    N && x.length > 0 && y === null && j(x[0].step_id);
  }, [N, x, y, j]);
  const b = 10, fe = (t, a) => {
    t.stopPropagation(), Q(null), j(a), setTimeout(() => {
      A(!0);
    }, 100);
  };
  F(() => {
    if (v && y && E.current) {
      const t = x.find((a) => a.step_id === y);
      if (t && E.current) {
        const { width: a, height: r } = E.current.getBoundingClientRect(), [i, n, d, l] = t.ui_coordinates;
        l > 0 && d > 0 ? _({
          x: n / 1e3 * a,
          y: i / 1e3 * r,
          width: (l - n) / 1e3 * a,
          height: (d - i) / 1e3 * r
        }) : _({
          x: a * 0.25,
          y: r * 0.4,
          width: a * 0.5,
          height: r * 0.2
        });
      }
    }
  }, [v, y, x]);
  const ae = (t, a, r) => {
    if (!r) return null;
    const { x: i, y: n, width: d, height: l } = r;
    return Math.abs(t - i) <= b && Math.abs(a - n) <= b ? "nw" : Math.abs(t - (i + d)) <= b && Math.abs(a - n) <= b ? "ne" : Math.abs(t - i) <= b && Math.abs(a - (n + l)) <= b ? "sw" : Math.abs(t - (i + d)) <= b && Math.abs(a - (n + l)) <= b ? "se" : t > i + b && t < i + d - b && a > n + b && a < n + l - b ? "move" : null;
  }, pe = (t) => {
    if (!v || !E.current) return;
    const a = E.current.getBoundingClientRect(), r = t.clientX - a.left, i = t.clientY - a.top, n = ae(r, i, h);
    n && h ? D({
      type: n === "move" ? "move" : "resize",
      handle: n,
      startX: r,
      startY: i,
      initialRect: { ...h }
    }) : (_({ x: r, y: i, width: 0, height: 0 }), D({
      type: "create",
      startX: r,
      startY: i,
      initialRect: null
    }));
  }, be = (t) => {
    if (!v || !E.current) return;
    const a = E.current.getBoundingClientRect(), r = t.clientX - a.left, i = t.clientY - a.top, n = Math.max(0, Math.min(r, a.width)), d = Math.max(0, Math.min(i, a.height));
    if (g) {
      if (g.type === "create")
        _({
          x: Math.min(g.startX, n),
          y: Math.min(g.startY, d),
          width: Math.abs(n - g.startX),
          height: Math.abs(d - g.startY)
        });
      else if (g.type === "move" && g.initialRect) {
        const l = n - g.startX, u = d - g.startY;
        _({
          ...g.initialRect,
          x: g.initialRect.x + l,
          y: g.initialRect.y + u
        });
      } else if (g.type === "resize" && g.initialRect) {
        const { initialRect: l, handle: u } = g;
        let s = { ...l };
        const o = n - g.startX, m = d - g.startY;
        u === "se" ? (s.width = l.width + o, s.height = l.height + m) : u === "sw" ? (s.x = l.x + o, s.width = l.width - o, s.height = l.height + m) : u === "ne" ? (s.y = l.y + m, s.width = l.width + o, s.height = l.height - m) : u === "nw" && (s.x = l.x + o, s.y = l.y + m, s.width = l.width - o, s.height = l.height - m), s.width < 0 && (s.x += s.width, s.width = Math.abs(s.width)), s.height < 0 && (s.y += s.height, s.height = Math.abs(s.height)), _(s);
      }
    } else {
      const l = ae(r, i, h);
      J(l === "move" ? "move" : l === "nw" || l === "se" ? "nwse-resize" : l === "ne" || l === "sw" ? "nesw-resize" : "crosshair");
    }
  }, ne = () => {
    D(null);
  }, we = () => {
    if (y && h && E.current) {
      const { width: t, height: a } = E.current.getBoundingClientRect(), r = Math.round(h.x / t * 1e3), i = Math.round(h.y / a * 1e3), n = Math.round((h.x + h.width) / t * 1e3), d = Math.round((h.y + h.height) / a * 1e3), l = (s) => Math.max(0, Math.min(1e3, s));
      let u = W;
      if (!u && f.current) {
        const s = document.createElement("canvas");
        s.width = f.current.videoWidth, s.height = f.current.videoHeight;
        const o = s.getContext("2d");
        o && (o.drawImage(f.current, 0, 0), u = s.toDataURL("image/png"));
      }
      S((s) => s.map((o) => o.step_id === y ? {
        ...o,
        ui_coordinates: [l(i), l(r), l(d), l(n)],
        status: "success",
        capturedImage: u || void 0
      } : o)), A(!1), _(null);
    }
  }, re = async (t) => {
    var i, n, d, l, u;
    const a = x.find((s) => s.step_id === t);
    if (!a) return;
    let r = a.capturedImage || a.previewImage;
    if (!r && f.current && (f.current.currentTime = a.timestamp_seconds, await new Promise((s) => setTimeout(s, 300)), r = H() || void 0), !r) {
      alert("画像の取得に失敗しました。動画を確認してください。");
      return;
    }
    S((s) => s.map((o) => o.step_id === t ? { ...o, status: "analyzing" } : o));
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
      const $ = (u = (l = (d = (n = (i = (await m.json()).candidates) == null ? void 0 : i[0]) == null ? void 0 : n.content) == null ? void 0 : d.parts) == null ? void 0 : l[0]) == null ? void 0 : u.text, M = JSON.parse($);
      if (M.boxes && M.boxes.length > 0) {
        const k = M.boxes[0];
        S((R) => R.map((P) => P.step_id === t ? {
          ...P,
          ui_coordinates: [k.ymin, k.xmin, k.ymax, k.xmax],
          status: "success",
          capturedImage: r
        } : P));
      } else
        throw new Error("Not found");
    } catch (s) {
      console.error(s), alert(`エラーが発生しました: ${s.message}`), S((o) => o.map((m) => m.step_id === t ? { ...m, status: "error" } : m));
    }
  }, ye = async () => {
    X(!0);
    for (const t of x)
      await j(t.step_id), await re(t.step_id), await new Promise((a) => setTimeout(a, 800));
    X(!1);
  }, ve = () => {
    const t = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(x, null, 2)), a = document.createElement("a");
    a.href = t, a.download = "result.json", a.click();
  }, Ee = async (t) => !t.capturedImage || !t.ui_coordinates ? null : new Promise((a) => {
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
      const [d, l, u, s] = t.ui_coordinates;
      if (s > 0 && u > 0) {
        const o = l / 1e3 * r.width, m = d / 1e3 * r.height, z = (s - l) / 1e3 * r.width, $ = (u - d) / 1e3 * r.height, M = Math.max(2, r.width * 35e-4), k = M * 2;
        n.strokeStyle = "#ef4444", n.lineWidth = M, n.beginPath(), n.roundRect ? n.roundRect(o, m, z, $, k) : n.rect(o, m, z, $), n.stroke();
        let R = `Step ${t.step_id}`;
        const P = 12;
        let p = Math.max(16, r.width * 0.025);
        n.font = `bold ${p}px sans-serif`;
        let T = n.measureText(R), C = p * 0.6;
        const O = z, se = T.width + C * 2;
        if (se > O) {
          const Re = O / se;
          let le = Math.floor(p * Re);
          if (le < P) {
            R = `${t.step_id}`, p = Math.max(16, r.width * 0.025), C = p * 0.6, n.font = `bold ${p}px sans-serif`, T = n.measureText(R);
            const ie = T.width + C * 2;
            if (ie > O) {
              const Se = O / ie;
              p = Math.max(10, Math.floor(p * Se));
            }
          } else
            p = le;
        }
        n.font = `bold ${p}px sans-serif`, T = n.measureText(R), C = p * 0.6;
        const Y = T.width + C * 2, B = p + C * 2, _e = m < r.height / 2, Z = o + z / 2 - Y / 2;
        let L;
        _e ? L = m + $ + M : L = m - B - M, n.fillStyle = "#ef4444", n.beginPath(), n.roundRect ? n.roundRect(Z, L, Y, B, k) : n.rect(Z, L, Y, B), n.fill(), n.fillStyle = "white", n.textAlign = "center", n.textBaseline = "middle";
        const Me = Z + Y / 2, ke = L + B / 2;
        n.fillText(R, Me, ke + p * 0.05);
      }
      i.toBlob((o) => a(o), "image/png");
    }, r.src = t.capturedImage;
  }), Ne = async () => {
    if (!window.JSZip || !he) {
      alert("ZIPライブラリの準備中です。数秒待ってから再試行してください。");
      return;
    }
    X(!0);
    try {
      const t = new window.JSZip(), a = t.folder("images");
      let r = `# 操作マニュアル

自動生成された操作手順書です。

`;
      for (const l of x) {
        if (r += `### Step ${l.step_id} : ${l.target_label}
`, r += `${l.instruction_text}

`, l.status === "success" && l.capturedImage) {
          const u = await Ee(l);
          if (u) {
            const s = `step${l.step_id}.png`;
            a == null || a.file(s, u), r += `![Step ${l.step_id}](./images/${s})

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
      X(!1);
    }
  }, c = x.find((t) => t.step_id === y);
  return /* @__PURE__ */ e.createElement("div", { className: "min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col" }, /* @__PURE__ */ e.createElement("video", { ref: f, src: N || void 0, className: "hidden", muted: !0, playsInline: !0 }), /* @__PURE__ */ e.createElement("input", { type: "file", accept: "video/*", ref: ee, className: "hidden", onChange: (t) => {
    var a;
    (a = t.target.files) != null && a[0] && ue(URL.createObjectURL(t.target.files[0]));
  } }), /* @__PURE__ */ e.createElement("input", { type: "file", accept: ".json", ref: te, className: "hidden", onChange: (t) => {
    var a;
    if ((a = t.target.files) != null && a[0]) {
      const r = new FileReader();
      r.onload = (i) => {
        var n;
        return S(JSON.parse((n = i.target) == null ? void 0 : n.result));
      }, r.readAsText(t.target.files[0]);
    }
  } }), /* @__PURE__ */ e.createElement("header", { className: "bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm" }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ e.createElement("div", { className: "bg-blue-600 text-white p-1.5 rounded-lg" }, /* @__PURE__ */ e.createElement(Ce, { className: "w-5 h-5" })), /* @__PURE__ */ e.createElement("h1", { className: "font-bold text-lg hidden sm:block" }, "UIキャプチャ・スタジオ")), /* @__PURE__ */ e.createElement("div", { className: "flex gap-2 relative" }, !N && /* @__PURE__ */ e.createElement("button", { onClick: () => {
    var t;
    return (t = ee.current) == null ? void 0 : t.click();
  }, className: "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors" }, /* @__PURE__ */ e.createElement(ce, { className: "w-4 h-4" }), " 動画を選択"), N && /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("button", { onClick: () => {
    var t;
    return (t = te.current) == null ? void 0 : t.click();
  }, className: "p-2 text-gray-600 hover:bg-gray-100 rounded-lg border border-gray-200", title: "JSON読込" }, /* @__PURE__ */ e.createElement(de, { className: "w-5 h-5" })), /* @__PURE__ */ e.createElement("div", { className: "h-8 w-px bg-gray-300 mx-1" }), /* @__PURE__ */ e.createElement("button", { onClick: ve, className: "flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transition-colors" }, /* @__PURE__ */ e.createElement(de, { className: "w-4 h-4" }), " ", /* @__PURE__ */ e.createElement("span", { className: "hidden sm:inline" }, "JSON")), /* @__PURE__ */ e.createElement("button", { onClick: Ne, disabled: I, className: "flex items-center gap-2 px-4 py-2 bg-indigo-900 hover:bg-indigo-800 text-white rounded-lg font-medium text-sm transition-colors shadow-sm" }, I ? /* @__PURE__ */ e.createElement(V, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ e.createElement(Ie, { className: "w-4 h-4" }), /* @__PURE__ */ e.createElement("span", null, "マニュアル保存 (ZIP)"))))), /* @__PURE__ */ e.createElement("main", { className: "flex-1 flex flex-col md:flex-row overflow-hidden" }, /* @__PURE__ */ e.createElement("div", { className: "w-full md:w-80 bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col h-1/3 md:h-full shrink-0" }, /* @__PURE__ */ e.createElement("div", { className: "p-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center" }, /* @__PURE__ */ e.createElement("span", { className: "text-xs font-bold text-gray-500 uppercase tracking-wider" }, "Timeline Steps"), /* @__PURE__ */ e.createElement("span", { className: "bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full" }, x.length)), /* @__PURE__ */ e.createElement("div", { className: "flex-1 overflow-y-auto p-2 space-y-2" }, x.map((t) => /* @__PURE__ */ e.createElement("div", { key: t.step_id, className: `group relative rounded-xl border transition-all duration-200 ${y === t.step_id ? "bg-blue-50 border-blue-200 shadow-sm ring-1 ring-blue-200" : "bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200"}` }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => j(t.step_id),
      className: "w-full text-left p-3 flex items-start gap-3"
    },
    /* @__PURE__ */ e.createElement("div", { className: `mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${t.status === "success" ? "bg-green-100 text-green-700" : t.status === "error" ? "bg-red-100 text-red-700" : y === t.step_id ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"}` }, t.step_id),
    /* @__PURE__ */ e.createElement("div", { className: "min-w-0 flex-1" }, /* @__PURE__ */ e.createElement("div", { className: "flex justify-between items-center mb-0.5" }, /* @__PURE__ */ e.createElement("span", { className: "text-xs font-medium text-gray-900 truncate" }, t.target_label), /* @__PURE__ */ e.createElement("span", { className: "text-[10px] text-gray-400 font-mono" }, t.timestamp_str)), /* @__PURE__ */ e.createElement("p", { className: "text-[10px] text-gray-500 line-clamp-1" }, t.instruction_text))
  ), /* @__PURE__ */ e.createElement("div", { className: "absolute top-2 right-2" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: (a) => {
        a.stopPropagation(), Q(q === t.step_id ? null : t.step_id);
      },
      className: "p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200"
    },
    /* @__PURE__ */ e.createElement(je, { className: "w-4 h-4" })
  ), q === t.step_id && /* @__PURE__ */ e.createElement("div", { className: "absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: (a) => fe(a, t.step_id),
      className: "w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
    },
    /* @__PURE__ */ e.createElement(ze, { className: "w-4 h-4" }),
    "手動で座標を修正"
  )))))), /* @__PURE__ */ e.createElement("div", { className: "p-4 border-t border-gray-200 bg-gray-50" }, /* @__PURE__ */ e.createElement("button", { onClick: ye, disabled: I || !N, className: "w-full py-2.5 bg-white border border-gray-300 hover:border-blue-300 hover:text-blue-600 text-gray-700 rounded-lg text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50" }, I ? /* @__PURE__ */ e.createElement(V, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ e.createElement($e, { className: "w-4 h-4 text-yellow-500" }), " AI一括解析"))), /* @__PURE__ */ e.createElement("div", { className: "flex-1 bg-gray-100 flex flex-col h-2/3 md:h-full relative overflow-y-auto" }, N ? /* @__PURE__ */ e.createElement("div", { className: "p-4 md:p-8 flex flex-col gap-6 max-w-5xl mx-auto w-full h-full" }, /* @__PURE__ */ e.createElement("div", { className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0 relative" }, /* @__PURE__ */ e.createElement("div", { className: "p-4 border-b border-gray-100 flex justify-between items-center" }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ e.createElement(Pe, { className: "w-4 h-4 text-gray-400" }), /* @__PURE__ */ e.createElement("span", { className: "text-sm font-bold text-gray-700" }, "Preview: ", c == null ? void 0 : c.timestamp_str), v && /* @__PURE__ */ e.createElement("span", { className: "bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-bold animate-pulse" }, "Manual Edit Mode")), c && !v && /* @__PURE__ */ e.createElement("button", { onClick: () => re(c.step_id), disabled: I, className: "text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium hover:bg-blue-100 transition-colors" }, c.status === "analyzing" ? "解析中..." : "AI再解析"), v && /* @__PURE__ */ e.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ e.createElement("button", { onClick: () => {
    A(!1), _(null);
  }, className: "text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center gap-1" }, /* @__PURE__ */ e.createElement(Te, { className: "w-3 h-3" }), " キャンセル"), /* @__PURE__ */ e.createElement("button", { onClick: we, className: "text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-1 shadow-sm" }, /* @__PURE__ */ e.createElement(Le, { className: "w-3 h-3" }), " 変更を保存"))), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "flex-1 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-gray-50 relative flex items-center justify-center overflow-hidden p-4 select-none",
      onMouseDown: pe,
      onMouseMove: be,
      onMouseUp: ne,
      onMouseLeave: ne,
      style: { cursor: xe }
    },
    W ? /* @__PURE__ */ e.createElement("div", { className: "relative shadow-xl max-w-full max-h-full inline-block" }, /* @__PURE__ */ e.createElement(
      "img",
      {
        ref: E,
        src: W,
        alt: "Step Preview",
        className: "max-w-full max-h-full object-contain rounded pointer-events-none select-none block",
        draggable: !1
      }
    ), !v && (c == null ? void 0 : c.ui_coordinates) && c.ui_coordinates[2] > 0 && /* @__PURE__ */ e.createElement(
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
    ), v && h && /* @__PURE__ */ e.createElement(
      "div",
      {
        className: "absolute border-2 border-white z-50 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] cursor-move",
        style: {
          left: h.x,
          top: h.y,
          width: h.width,
          height: h.height
        }
      },
      /* @__PURE__ */ e.createElement("div", { className: "absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-black cursor-nwse-resize" }),
      /* @__PURE__ */ e.createElement("div", { className: "absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-black cursor-nesw-resize" }),
      /* @__PURE__ */ e.createElement("div", { className: "absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-black cursor-nesw-resize" }),
      /* @__PURE__ */ e.createElement("div", { className: "absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-black cursor-nwse-resize" })
    )) : /* @__PURE__ */ e.createElement("div", { className: "flex flex-col items-center gap-2 text-gray-400" }, /* @__PURE__ */ e.createElement(V, { className: "w-8 h-8 animate-spin" }), /* @__PURE__ */ e.createElement("span", { className: "text-sm" }, "Generating Preview..."))
  )), c && !v && /* @__PURE__ */ e.createElement("div", { className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200 shrink-0" }, /* @__PURE__ */ e.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block" }, "Target UI Element"), /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2 text-lg font-bold text-gray-800" }, /* @__PURE__ */ e.createElement(Ue, { className: "w-5 h-5 text-blue-500" }), c.target_label), /* @__PURE__ */ e.createElement("p", { className: "text-sm text-gray-600 mt-2 bg-gray-50 p-3 rounded-lg border border-gray-100" }, c.instruction_text)), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("label", { className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block" }, "AI Hint / Status"), /* @__PURE__ */ e.createElement("p", { className: "text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-yellow-800 flex gap-2 items-start" }, /* @__PURE__ */ e.createElement(Xe, { className: "w-4 h-4 shrink-0 mt-0.5" }), c.visual_description), /* @__PURE__ */ e.createElement("div", { className: "mt-4 flex items-center gap-2" }, /* @__PURE__ */ e.createElement("div", { className: `text-xs px-2 py-1 rounded font-mono border ${c.status === "success" ? "bg-green-50 border-green-200 text-green-700" : "bg-gray-100 border-gray-200 text-gray-500"}` }, "Status: ", c.status || "Pending"), /* @__PURE__ */ e.createElement("div", { className: "text-xs font-mono text-gray-400" }, "Coords: [", c.ui_coordinates.join(","), "]")))))) : /* @__PURE__ */ e.createElement("div", { className: "flex-1 flex flex-col items-center justify-center text-gray-400 p-8" }, /* @__PURE__ */ e.createElement("div", { className: "w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4" }, /* @__PURE__ */ e.createElement(ce, { className: "w-8 h-8 text-gray-400" })), /* @__PURE__ */ e.createElement("p", { className: "text-lg font-medium text-gray-500" }, "動画ファイルを読み込んで開始")))));
}
export {
  Be as default
};
