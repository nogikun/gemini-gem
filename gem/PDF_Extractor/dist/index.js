import e, { forwardRef as we, createElement as pe, useState as m, useRef as ae, useEffect as Z, useCallback as Re } from "react";
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const je = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), ye = (...n) => n.filter((s, t, i) => !!s && s.trim() !== "" && i.indexOf(s) === t).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ie = {
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
const Se = we(
  ({
    color: n = "currentColor",
    size: s = 24,
    strokeWidth: t = 2,
    absoluteStrokeWidth: i,
    className: v = "",
    children: D,
    iconNode: f,
    ...S
  }, B) => pe(
    "svg",
    {
      ref: B,
      ...Ie,
      width: s,
      height: s,
      stroke: n,
      strokeWidth: i ? Number(t) * 24 / Number(s) : t,
      className: ye("lucide", v),
      ...S
    },
    [
      ...f.map(([T, F]) => pe(T, F)),
      ...Array.isArray(D) ? D : [D]
    ]
  )
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y = (n, s) => {
  const t = we(
    ({ className: i, ...v }, D) => pe(Se, {
      ref: D,
      iconNode: s,
      className: ye(`lucide-${je(n)}`, i),
      ...v
    })
  );
  return t.displayName = `${n}`, t;
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fe = y("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = y("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ae = y("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const He = y("Copy", [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xe = y("Download", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
  ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ve = y("FileText", [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = y("Folder", [
  [
    "path",
    {
      d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
      key: "1kt360"
    }
  ]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Oe = y("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = y("Image", [
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
const re = y("LoaderCircle", [
  ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = y("Moon", [
  ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _e = y("PanelsTopLeft", [
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
const Ee = y("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = y("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const be = y("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = y("Upload", [
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
const ke = y("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Ye = [
  {
    name: "arXiv:2004.08531 (StyleGAN2-ADA)",
    url: "https://arxiv.org/pdf/2004.08531.pdf",
    description: "Training Generative Adversarial Networks with Limited Data"
  },
  {
    name: "MEXT Report (Example)",
    url: "https://www.mext.go.jp/content/20250715-mxt_soseisk01-000043715_01.pdf",
    description: "文部科学省サンプルPDF"
  },
  {
    name: "Mozilla PDF.js Sample",
    url: "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf",
    description: "CORS対応確認用サンプル"
  }
], ue = (n) => new Promise((s, t) => {
  if (document.querySelector(`script[src="${n}"]`)) {
    s(!0);
    return;
  }
  const i = document.createElement("script");
  i.src = n, i.onload = () => s(!0), i.onerror = () => t(new Error(`Failed to load script: ${n}`)), document.head.appendChild(i);
}), Ze = (n, s) => [
  n[0] * s[0] + n[1] * s[2],
  n[0] * s[1] + n[1] * s[3],
  n[2] * s[0] + n[3] * s[2],
  n[2] * s[1] + n[3] * s[3],
  n[4] * s[0] + n[5] * s[2] + s[4],
  n[4] * s[1] + n[5] * s[3] + s[5]
], xe = (n, s) => {
  if (!n) return "";
  let t = n;
  for (const i in s)
    t = t.replace(`{${i}}`, String(s[i]));
  return t;
}, Je = {
  en: {
    appTitle: "PDF Workspace",
    newProject: "New Project",
    projects: "Projects",
    uploadTab: "Local File",
    urlTab: "Web URL",
    dropFile: "Drop PDF file here",
    clickToBrowse: "or click to browse",
    enterUrl: "Enter PDF URL",
    loadUrl: "Load URL",
    presets: "Presets / Examples",
    corsWarning: "Note: Some URLs may require a proxy or manual download due to CORS.",
    corsError: "Could not load PDF via any available method. Please download the file and upload it manually.",
    processing: "Processing PDF...",
    scanning: "Scanning page {current} of {total}",
    imagesCollected: "{count} images",
    reset: "Close Project",
    downloadAll: "Download All",
    tabGallery: "Gallery",
    tabManual: "Manual Crop",
    tabOCR: "References",
    noImages: "No images collected",
    switchTabHint: 'Switch to "Manual Crop" to extract images manually',
    addToGallery: "Add to Gallery",
    dragHint: "Drag to create. Drag corners to resize. Drag inside to move.",
    showDetected: "Show detected images",
    blueOutlineHint: "Blue outlines show automatically detected images.",
    manualBadge: "MANUAL",
    pagePrefix: "P.",
    locateTooltip: "Locate in PDF",
    downloadTooltip: "Download",
    deleteTooltip: "Delete",
    copyTooltip: "Copy",
    copySuccess: "Copied!",
    copyFail: "Failed to copy.",
    ocrStart: "Start OCR",
    ocrStop: "Stop",
    ocrResultTitle: "References ({count})",
    ocrRawText: "Raw Text",
    downloadMarkdown: "MD Download",
    copyMarkdown: "Copy MD",
    ocrHint: "Scans for DOIs, arXiv IDs, and URLs.",
    generating: "Processing...",
    errorFileType: "Please select a PDF file.",
    errorParse: "Error parsing PDF.",
    errorNoImages: "No images found automatically.",
    errorLoad: "Failed to load libraries.",
    deleteProject: "Delete Project",
    noProjects: "No projects yet. Create one to get started!",
    untitled: "Untitled Project",
    urlPlaceholder: "https://example.com/file.pdf"
  },
  ja: {
    appTitle: "PDFワークスペース",
    newProject: "新規プロジェクト",
    projects: "プロジェクト",
    uploadTab: "ローカルファイル",
    urlTab: "Web URL",
    dropFile: "PDFファイルをドロップ",
    clickToBrowse: "またはクリックして選択",
    enterUrl: "PDFのURLを入力",
    loadUrl: "URLから読み込む",
    presets: "プリセット / サンプル",
    corsWarning: "注意: Web上のPDFはセキュリティ制限により直接読み込めない場合があります(自動的に複数のプロキシを試行します)。",
    corsError: "PDFを読み込めませんでした。手動でダウンロードしてアップロードしてください。",
    processing: "PDFを処理中...",
    scanning: "{total} ページ中 {current} ページ目をスキャン中",
    imagesCollected: "{count} 枚の画像",
    reset: "閉じる",
    downloadAll: "一括保存",
    tabGallery: "ギャラリー",
    tabManual: "手動切り抜き",
    tabOCR: "参考文献",
    noImages: "画像が見つかりません",
    switchTabHint: "「手動切り抜き」タブから画像を追加してください",
    addToGallery: "ギャラリーに追加",
    dragHint: "ドラッグで範囲選択。四隅でサイズ変更、内部ドラッグで移動。",
    showDetected: "抽出済みの画像を表示",
    blueOutlineHint: "自動検出された画像の位置を青枠で表示します。",
    manualBadge: "手動",
    pagePrefix: "P.",
    locateTooltip: "PDF内の位置を確認",
    downloadTooltip: "ダウンロード",
    deleteTooltip: "削除",
    copyTooltip: "コピー",
    copySuccess: "コピーしました！",
    copyFail: "コピーに失敗しました。",
    ocrStart: "OCR解析開始",
    ocrStop: "停止",
    ocrResultTitle: "参考文献 ({count})",
    ocrRawText: "解析テキスト",
    downloadMarkdown: "MD保存",
    copyMarkdown: "MDコピー",
    ocrHint: "DOI, arXiv ID, URLを検索してリスト化します。",
    generating: "処理中...",
    errorFileType: "PDFファイルを選択してください。",
    errorParse: "PDFの解析中にエラーが発生しました。",
    errorNoImages: "自動抽出で画像が見つかりませんでした。",
    errorLoad: "ライブラリの読み込みに失敗しました。",
    deleteProject: "プロジェクトを削除",
    noProjects: "プロジェクトがありません。新規作成してください。",
    untitled: "無題のプロジェクト",
    urlPlaceholder: "https://example.com/file.pdf"
  }
};
function tt() {
  const [n, s] = m(!1), [t, i] = m(!0), [v, D] = m("ja"), [f, S] = m(!1), B = ae(null), [T, F] = m([]), [R, W] = m(null), [O, N] = m(!0), [G, z] = m("local"), [_, ie] = m(""), [J, h] = m(!1), [j, b] = m(""), u = Je[v];
  Z(() => {
    (async () => {
      try {
        await ue("https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"), await ue("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"), await ue("https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js"), window.pdfjsLib && (window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"), s(!0);
      } catch {
        b(u.errorLoad);
      }
    })();
  }, [u.errorLoad]);
  const ne = (o, p) => {
    const w = {
      id: `proj-${Date.now()}`,
      name: p || u.untitled,
      data: o,
      createdAt: /* @__PURE__ */ new Date(),
      // 以下はプロジェクトごとのステートとして保持
      extractedImages: [],
      ocrPages: [],
      detectedLinks: [],
      processed: !1
      // 初期抽出が完了したか
    };
    return F((U) => [...U, w]), W(w.id), w.id;
  }, de = (o, p) => {
    o.stopPropagation(), F((w) => w.filter((U) => U.id !== p)), R === p && W(null);
  }, K = async (o) => {
    if (o.type !== "application/pdf") {
      b(u.errorFileType);
      return;
    }
    try {
      const p = await o.arrayBuffer();
      ne(p, o.name), b("");
    } catch (p) {
      console.error(p), b(u.errorParse);
    }
  }, le = async (o) => {
    const p = o || _;
    if (p) {
      h(!0), b("");
      try {
        let w = null;
        try {
          const P = await fetch(p);
          P.ok && (w = await P.blob());
        } catch {
          console.log("Direct fetch failed, trying Proxy 1...");
        }
        if (!w)
          try {
            const P = `https://api.allorigins.win/raw?url=${encodeURIComponent(p)}`, $ = await fetch(P);
            $.ok && (w = await $.blob());
          } catch {
            console.log("Proxy 1 failed, trying Proxy 2...");
          }
        if (!w)
          try {
            const P = `https://corsproxy.io/?${encodeURIComponent(p)}`, $ = await fetch(P);
            $.ok && (w = await $.blob());
          } catch {
            console.log("Proxy 2 failed.");
          }
        if (!w)
          throw new Error("All fetch methods failed");
        const U = await w.arrayBuffer();
        let q = "downloaded.pdf";
        try {
          const $ = new URL(p).pathname.split("/"), oe = $[$.length - 1];
          oe && oe.toLowerCase().endsWith(".pdf") ? q = decodeURIComponent(oe) : q = "web-document.pdf";
        } catch {
        }
        ne(U, q);
      } catch (w) {
        console.warn("URL Load Error (Expected for CORS):", w), b(u.corsError);
      } finally {
        h(!1);
      }
    }
  }, me = Re((o) => {
    F((p) => p.map(
      (w) => w.id === R ? { ...w, ...o } : w
    ));
  }, [R]), Q = T.find((o) => o.id === R), g = {
    bg: t ? "bg-zinc-950" : "bg-zinc-50",
    text: t ? "text-zinc-50" : "text-zinc-900",
    textMuted: t ? "text-zinc-400" : "text-zinc-500",
    border: t ? "border-zinc-800" : "border-zinc-300",
    card: t ? "bg-zinc-900" : "bg-white",
    cardHover: t ? "hover:bg-zinc-800" : "hover:bg-zinc-100",
    primary: t ? "bg-zinc-100 text-zinc-900 hover:bg-white" : "bg-zinc-900 text-zinc-50 hover:bg-zinc-800",
    secondary: t ? "bg-zinc-800 text-zinc-200 hover:bg-zinc-700" : "bg-white text-zinc-700 border border-zinc-300 hover:bg-zinc-50",
    accent: "text-blue-500"
  };
  return Z(() => {
    const o = (p) => {
      B.current && !B.current.contains(p.target) && S(!1);
    };
    return document.addEventListener("mousedown", o), () => document.removeEventListener("mousedown", o);
  }, []), n ? /* @__PURE__ */ e.createElement("div", { className: `h-screen flex flex-col font-sans overflow-hidden transition-colors duration-300 ${g.bg} ${g.text}` }, /* @__PURE__ */ e.createElement("header", { className: `h-14 shrink-0 border-b ${g.border} flex items-center justify-between px-4 ${g.card}` }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ e.createElement("button", { onClick: () => N(!O), className: "p-2 rounded-lg hover:bg-zinc-200/50 dark:hover:bg-zinc-800" }, /* @__PURE__ */ e.createElement(_e, { className: "w-5 h-5" })), /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ e.createElement("div", { className: `p-1.5 rounded-lg ${t ? "bg-zinc-800" : "bg-zinc-100"}` }, /* @__PURE__ */ e.createElement(Ge, { className: "w-5 h-5" })), /* @__PURE__ */ e.createElement("h1", { className: "font-bold text-lg hidden md:block" }, u.appTitle))), /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ e.createElement("div", { className: "relative", ref: B }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => S(!f),
      className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${g.border} hover:bg-zinc-200/50 dark:hover:bg-zinc-800`
    },
    /* @__PURE__ */ e.createElement(Oe, { className: "w-3.5 h-3.5" }),
    v === "en" ? "EN" : "JA"
  ), f && /* @__PURE__ */ e.createElement("div", { className: `absolute right-0 mt-2 w-32 rounded-lg shadow-xl border overflow-hidden z-50 ${t ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"}` }, /* @__PURE__ */ e.createElement("button", { onClick: () => {
    D("en"), S(!1);
  }, className: `w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 ${v === "en" ? "font-bold text-blue-500" : ""}` }, "English"), /* @__PURE__ */ e.createElement("button", { onClick: () => {
    D("ja"), S(!1);
  }, className: `w-full text-left px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 ${v === "ja" ? "font-bold text-blue-500" : ""}` }, "日本語"))), /* @__PURE__ */ e.createElement("button", { onClick: () => i(!t), className: `p-2 rounded-full border ${g.border} hover:bg-zinc-200/50 dark:hover:bg-zinc-800` }, t ? /* @__PURE__ */ e.createElement(qe, { className: "w-4 h-4" }) : /* @__PURE__ */ e.createElement(We, { className: "w-4 h-4" })))), /* @__PURE__ */ e.createElement("div", { className: "flex-1 flex overflow-hidden" }, /* @__PURE__ */ e.createElement("div", { className: `${O ? "w-64" : "w-0"} shrink-0 border-r ${g.border} ${g.card} transition-all duration-300 flex flex-col overflow-hidden` }, /* @__PURE__ */ e.createElement("div", { className: "p-4" }, /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: () => W(null),
      className: `w-full py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-colors ${g.primary}`
    },
    /* @__PURE__ */ e.createElement(Ee, { className: "w-4 h-4" }),
    " ",
    u.newProject
  )), /* @__PURE__ */ e.createElement("div", { className: "flex-1 overflow-y-auto px-2 pb-4 space-y-1" }, /* @__PURE__ */ e.createElement("div", { className: `px-3 py-2 text-xs font-semibold ${g.textMuted}` }, u.projects), T.map((o) => /* @__PURE__ */ e.createElement(
    "div",
    {
      key: o.id,
      onClick: () => W(o.id),
      className: `group flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors ${R === o.id ? t ? "bg-zinc-800 text-white" : "bg-zinc-200 text-zinc-900" : `text-zinc-500 hover:${g.text} hover:bg-zinc-100 dark:hover:bg-zinc-800/50`}`
    },
    /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-3 overflow-hidden" }, /* @__PURE__ */ e.createElement(Be, { className: `w-4 h-4 shrink-0 ${R === o.id ? "text-blue-500" : ""}` }), /* @__PURE__ */ e.createElement("span", { className: "truncate" }, o.name)),
    /* @__PURE__ */ e.createElement(
      "button",
      {
        onClick: (p) => de(p, o.id),
        className: "opacity-0 group-hover:opacity-100 p-1.5 rounded-md hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-500 hover:text-red-500 transition-all",
        title: u.deleteProject
      },
      /* @__PURE__ */ e.createElement(ke, { className: "w-3.5 h-3.5" })
    )
  )), T.length === 0 && /* @__PURE__ */ e.createElement("div", { className: `px-4 py-8 text-center text-xs ${g.textMuted}` }, u.noProjects))), /* @__PURE__ */ e.createElement("div", { className: `flex-1 overflow-hidden relative ${g.bg}` }, Q ? /* @__PURE__ */ e.createElement(
    Ke,
    {
      key: Q.id,
      project: Q,
      updateProjectData: me,
      theme: g,
      t: u,
      isDarkMode: t,
      closeProject: () => W(null)
    }
  ) : (
    /* New Project / Empty State */
    /* @__PURE__ */ e.createElement("div", { className: "h-full flex flex-col items-center justify-center p-6 overflow-y-auto" }, /* @__PURE__ */ e.createElement("div", { className: "max-w-2xl w-full space-y-8" }, /* @__PURE__ */ e.createElement("div", { className: "text-center space-y-2" }, /* @__PURE__ */ e.createElement("h2", { className: "text-3xl font-bold" }, u.newProject), /* @__PURE__ */ e.createElement("p", { className: g.textMuted }, u.appTitle, "へようこそ。PDFを追加して始めましょう。")), /* @__PURE__ */ e.createElement("div", { className: `flex p-1 rounded-xl ${t ? "bg-zinc-900" : "bg-zinc-200"}` }, /* @__PURE__ */ e.createElement("button", { onClick: () => z("local"), className: `flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${G === "local" ? t ? "bg-zinc-800 shadow" : "bg-white shadow" : "text-zinc-500"}` }, u.uploadTab), /* @__PURE__ */ e.createElement("button", { onClick: () => z("url"), className: `flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${G === "url" ? t ? "bg-zinc-800 shadow" : "bg-white shadow" : "text-zinc-500"}` }, u.urlTab)), /* @__PURE__ */ e.createElement("div", { className: `min-h-[300px] rounded-2xl border ${g.border} ${g.card} p-8` }, G === "local" ? /* @__PURE__ */ e.createElement(
      "div",
      {
        className: `
                            h-full min-h-[250px] border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors
                            ${g.border} hover:border-zinc-400 dark:hover:border-zinc-500
                          `,
        onClick: () => document.getElementById("file-upload").click(),
        onDragOver: (o) => o.preventDefault(),
        onDrop: (o) => {
          o.preventDefault(), o.dataTransfer.files[0] && K(o.dataTransfer.files[0]);
        }
      },
      /* @__PURE__ */ e.createElement("input", { id: "file-upload", type: "file", accept: "application/pdf", className: "hidden", onChange: (o) => o.target.files && K(o.target.files[0]) }),
      /* @__PURE__ */ e.createElement("div", { className: `p-4 rounded-full ${t ? "bg-zinc-800" : "bg-zinc-100"}` }, /* @__PURE__ */ e.createElement(Ve, { className: "w-8 h-8 opacity-50" })),
      /* @__PURE__ */ e.createElement("div", { className: "text-center" }, /* @__PURE__ */ e.createElement("p", { className: "font-semibold" }, u.dropFile), /* @__PURE__ */ e.createElement("p", { className: `text-sm ${g.textMuted}` }, u.clickToBrowse))
    ) : /* @__PURE__ */ e.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ e.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ e.createElement("label", { className: "text-sm font-medium ml-1" }, u.enterUrl), /* @__PURE__ */ e.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ e.createElement(
      "input",
      {
        type: "text",
        value: _,
        onChange: (o) => ie(o.target.value),
        placeholder: u.urlPlaceholder,
        className: `flex-1 px-4 py-2.5 rounded-lg border ${g.border} bg-transparent outline-none focus:ring-2 ring-blue-500/50`
      }
    ), /* @__PURE__ */ e.createElement(
      "button",
      {
        onClick: () => le(),
        disabled: !_ || J,
        className: `px-6 rounded-lg font-medium text-sm disabled:opacity-50 flex items-center gap-2 ${g.primary}`
      },
      J && /* @__PURE__ */ e.createElement(re, { className: "w-4 h-4 animate-spin" }),
      u.loadUrl
    )), /* @__PURE__ */ e.createElement("p", { className: "text-xs text-yellow-600 dark:text-yellow-500 flex items-center gap-1.5 mt-2" }, /* @__PURE__ */ e.createElement(be, { className: "w-3.5 h-3.5" }), u.corsWarning)), /* @__PURE__ */ e.createElement("div", { className: "space-y-3 pt-4 border-t border-dashed border-zinc-700/50" }, /* @__PURE__ */ e.createElement("h3", { className: `text-xs font-bold uppercase tracking-wider ${g.textMuted}` }, u.presets), /* @__PURE__ */ e.createElement("div", { className: "grid gap-2" }, Ye.map((o, p) => /* @__PURE__ */ e.createElement(
      "button",
      {
        key: p,
        onClick: () => le(o.url),
        disabled: J,
        className: `text-left p-3 rounded-lg border ${g.border} hover:border-blue-500 hover:bg-blue-500/5 transition-all group`
      },
      /* @__PURE__ */ e.createElement("div", { className: "font-medium text-sm group-hover:text-blue-500 flex items-center gap-2" }, /* @__PURE__ */ e.createElement(ve, { className: "w-4 h-4" }), o.name),
      /* @__PURE__ */ e.createElement("div", { className: `text-xs mt-1 ${g.textMuted}` }, o.url)
    )))))), j && /* @__PURE__ */ e.createElement("div", { className: "p-4 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 text-sm flex items-center gap-3" }, /* @__PURE__ */ e.createElement(be, { className: "w-5 h-5 shrink-0" }), j)))
  )))) : /* @__PURE__ */ e.createElement("div", { className: `min-h-screen flex items-center justify-center ${t ? "bg-zinc-950 text-zinc-400" : "bg-white text-zinc-500"}` }, /* @__PURE__ */ e.createElement("div", { className: "text-center" }, /* @__PURE__ */ e.createElement(re, { className: "w-8 h-8 animate-spin mx-auto mb-2" }), /* @__PURE__ */ e.createElement("p", null, "Initializing System...")));
}
function Ke({ project: n, updateProjectData: s, theme: t, t: i, isDarkMode: v, closeProject: D }) {
  const [f, S] = m(null), [B, T] = m(!1), [F, R] = m({ current: 0, total: 0 }), [W, O] = m(""), [N, G] = m("auto"), [z, _] = m(1), [ie, J] = m(null), [h, j] = m(null), [b, u] = m(null), [ne, de] = m("default"), [K, le] = m(!0), [me, Q] = m(1), [g, o] = m(null), [p, w] = m(!1), [U, q] = m(!1), [P, $] = m({ current: 0, total: 0 }), [oe, Qe] = m(null), L = ae(null), Ne = ae(null), ze = ae(null);
  ae(null);
  const [ce, he] = m(null);
  Z(() => {
    if (ce) {
      const a = setTimeout(() => he(null), 3e3);
      return () => clearTimeout(a);
    }
  }, [ce]), Z(() => {
    let a = !0;
    return (async () => {
      if (n.data && !(n.processed && f)) {
        T(!0), O("");
        try {
          const l = await window.pdfjsLib.getDocument({ data: n.data.slice(0) }).promise;
          if (!a) return;
          S(l), n.processed ? T(!1) : await Pe(l);
        } catch (r) {
          console.error(r), O(i.errorParse), T(!1);
        }
      }
    })(), () => {
      a = !1;
    };
  }, [n.id]);
  const Pe = async (a) => {
    const c = a.numPages;
    R({ current: 0, total: c });
    const r = [];
    for (let l = 1; l <= c; l++) {
      R((d) => ({ ...d, current: l }));
      try {
        const d = await a.getPage(l), E = await d.getOperatorList(), k = E.fnArray, ee = E.argsArray, M = window.pdfjsLib.OPS;
        let A = [1, 0, 0, 1, 0, 0];
        const V = [], Y = async (x, H, se) => {
          try {
            if (!x || !x.width || !x.height) return null;
            const I = document.createElement("canvas");
            I.width = x.width, I.height = x.height;
            const X = I.getContext("2d");
            if (x.bitmap)
              X.drawImage(x.bitmap, 0, 0);
            else if (x.data) {
              const te = X.createImageData(x.width, x.height);
              x.data.length === x.width * x.height * 4 ? te.data.set(x.data) : (X.fillStyle = "gray", X.fillRect(0, 0, x.width, x.height)), X.putImageData(te, 0, 0);
            }
            return {
              id: `${l}-${H}-${Math.random().toString(36).substr(2, 5)}`,
              src: I.toDataURL("image/png"),
              page: l,
              width: x.width,
              height: x.height,
              size: (I.toDataURL("image/png").length * 0.75 / 1024).toFixed(1),
              type: H,
              pdfTransform: se
            };
          } catch {
            return null;
          }
        };
        for (let x = 0; x < k.length; x++) {
          const H = k[x], se = ee[x];
          if (H === M.save) V.push(A.slice());
          else if (H === M.restore)
            V.length && (A = V.pop());
          else if (H === M.transform) A = Ze(se, A);
          else if (H === M.paintImageXObject || H === M.paintJpegXObject)
            try {
              const I = se[0], X = await d.objs.get(I);
              if (X) {
                const te = await Y(X, "xobject", A.slice());
                te && r.push(te);
              }
            } catch {
            }
        }
      } catch (d) {
        console.warn(d);
      }
    }
    s({
      extractedImages: r,
      processed: !0
    }), T(!1), r.length === 0 && O(i.errorNoImages);
  };
  Z(() => {
    N === "manual" && f && L.current && Ce(z);
  }, [N, z, f]), Z(() => {
    if (!L.current || N !== "manual") return;
    const a = () => {
      const r = L.current;
      r && r.width > 0 && Q(r.clientWidth / r.width);
    };
    a();
    const c = new ResizeObserver(a);
    return c.observe(L.current), () => c.disconnect();
  }, [N, ie]);
  const Ce = async (a) => {
    if (!f) return;
    const c = await f.getPage(a), r = c.getViewport({ scale: 1.5 });
    J(r);
    const l = L.current, d = l.getContext("2d");
    l.height = r.height, l.width = r.width, d.fillStyle = "white", d.fillRect(0, 0, l.width, l.height), await c.render({ canvasContext: d, viewport: r }).promise, j(null);
  }, C = 10, ge = (a, c, r) => {
    if (!r) return null;
    const { x: l, y: d, width: E, height: k } = r;
    return Math.abs(a - l) <= C && Math.abs(c - d) <= C ? "nw" : Math.abs(a - (l + E)) <= C && Math.abs(c - d) <= C ? "ne" : Math.abs(a - l) <= C && Math.abs(c - (d + k)) <= C ? "sw" : Math.abs(a - (l + E)) <= C && Math.abs(c - (d + k)) <= C ? "se" : a > l + C && a < l + E - C && c > d + C && c < d + k - C ? "move" : null;
  }, Me = (a) => {
    if (!L.current) return;
    const c = L.current.getBoundingClientRect(), r = a.clientX - c.left, l = a.clientY - c.top, d = ge(r, l, h);
    d ? u({ type: d === "move" ? "move" : "resize", handle: d, startX: r, startY: l, initialCrop: { ...h } }) : (j({ x: r, y: l, width: 0, height: 0 }), u({ type: "create", startX: r, startY: l }));
  }, $e = (a) => {
    if (!L.current) return;
    const c = L.current.getBoundingClientRect(), r = a.clientX - c.left, l = a.clientY - c.top;
    if (b) {
      if (b.type === "create")
        j({
          x: Math.min(b.startX, r),
          y: Math.min(b.startY, l),
          width: Math.abs(r - b.startX),
          height: Math.abs(l - b.startY)
        });
      else if (b.type === "move") {
        const d = r - b.startX, E = l - b.startY;
        j({ ...b.initialCrop, x: b.initialCrop.x + d, y: b.initialCrop.y + E });
      } else if (b.type === "resize") {
        const { initialCrop: d, handle: E } = b, k = r - b.startX, ee = l - b.startY;
        let M = { ...d };
        E === "se" && (M.width += k, M.height += ee), j(M);
      }
    } else {
      const d = ge(r, l, h);
      de(d && d === "move" ? "move" : "crosshair");
    }
  }, fe = () => u(null), Le = async () => {
    if (!(!h || h.width === 0)) {
      w(!0);
      try {
        const a = L.current, c = document.createElement("canvas"), r = 1 / me;
        c.width = h.width * r, c.height = h.height * r, c.getContext("2d").drawImage(a, h.x * r, h.y * r, h.width * r, h.height * r, 0, 0, c.width, c.height);
        const l = {
          id: `man-${Date.now()}`,
          src: c.toDataURL(),
          page: z,
          width: Math.floor(c.width),
          height: Math.floor(c.height),
          size: "0",
          type: "manual",
          cropRect: { x: h.x * r, y: h.y * r, width: h.width * r, height: h.height * r }
        };
        s({ extractedImages: [...n.extractedImages, l] }), j(null);
      } catch (a) {
        console.error(a);
      } finally {
        w(!1);
      }
    }
  }, De = async () => {
    if (!f || !window.Tesseract) return;
    q(!0), $({ current: 0, total: f.numPages });
    const a = await window.Tesseract.createWorker("eng", 1);
    ze.current = a;
    const c = [], r = [];
    try {
      for (let l = 1; l <= f.numPages; l++) {
        $((Y) => ({ ...Y, current: l }));
        const d = await f.getPage(l), E = d.getViewport({ scale: 2 }), k = document.createElement("canvas"), ee = k.getContext("2d");
        k.width = E.width, k.height = E.height, await d.render({ canvasContext: ee, viewport: E }).promise;
        const { data: { text: M } } = await a.recognize(k.toDataURL()), A = [], V = M.match(/https?:\/\/[^\s]+/g);
        V && V.forEach((Y) => A.push({ type: "URL", value: Y, url: Y, page: l })), c.push({ page: l, text: M }), r.push(...A);
      }
      s({
        ocrPages: c,
        detectedLinks: r
      });
    } catch (l) {
      console.error(l), O("OCR Error");
    } finally {
      a.terminate(), q(!1);
    }
  };
  if (B)
    return /* @__PURE__ */ e.createElement("div", { className: "h-full flex flex-col items-center justify-center p-8 text-center space-y-4" }, /* @__PURE__ */ e.createElement(re, { className: "w-10 h-10 animate-spin text-blue-500" }), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h3", { className: "text-lg font-bold" }, i.processing), /* @__PURE__ */ e.createElement("p", { className: t.textMuted }, xe(i.scanning, { current: F.current, total: F.total }))));
  const Te = n.extractedImages.filter((a) => a.page === z && (a.type === "manual" || K));
  return /* @__PURE__ */ e.createElement("div", { className: "h-full flex flex-col" }, /* @__PURE__ */ e.createElement("div", { className: `p-3 shrink-0 border-b ${t.border} flex items-center justify-between gap-4 ${t.card}` }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-3 overflow-hidden" }, /* @__PURE__ */ e.createElement("div", { className: `p-2 rounded-lg ${v ? "bg-zinc-800" : "bg-zinc-100"}` }, /* @__PURE__ */ e.createElement(ve, { className: "w-4 h-4" })), /* @__PURE__ */ e.createElement("div", { className: "truncate" }, /* @__PURE__ */ e.createElement("h2", { className: "font-bold text-sm truncate" }, n.name), /* @__PURE__ */ e.createElement("p", { className: `text-xs ${t.textMuted}` }, xe(i.imagesCollected, { count: n.extractedImages.length })))), /* @__PURE__ */ e.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ e.createElement("div", { className: `flex p-1 rounded-lg ${v ? "bg-zinc-800" : "bg-zinc-100"}` }, /* @__PURE__ */ e.createElement("button", { onClick: () => G("auto"), className: `px-3 py-1.5 rounded-md text-xs font-medium ${N === "auto" ? v ? "bg-zinc-700 shadow text-white" : "bg-white shadow text-black" : "text-zinc-500"}` }, i.tabGallery), /* @__PURE__ */ e.createElement("button", { onClick: () => G("manual"), className: `px-3 py-1.5 rounded-md text-xs font-medium ${N === "manual" ? v ? "bg-zinc-700 shadow text-white" : "bg-white shadow text-black" : "text-zinc-500"}` }, i.tabManual), /* @__PURE__ */ e.createElement("button", { onClick: () => G("ocr"), className: `px-3 py-1.5 rounded-md text-xs font-medium ${N === "ocr" ? v ? "bg-zinc-700 shadow text-white" : "bg-white shadow text-black" : "text-zinc-500"}` }, i.tabOCR)), /* @__PURE__ */ e.createElement("div", { className: "w-px h-6 bg-zinc-300 dark:bg-zinc-700 mx-1" }), /* @__PURE__ */ e.createElement("button", { onClick: D, className: "p-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500", title: i.reset }, /* @__PURE__ */ e.createElement(ke, { className: "w-4 h-4" })))), ce && /* @__PURE__ */ e.createElement("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-emerald-600 text-white rounded-full shadow-lg text-sm flex items-center gap-2" }, /* @__PURE__ */ e.createElement(Fe, { className: "w-4 h-4" }), " ", ce.message), /* @__PURE__ */ e.createElement("div", { className: "flex-1 overflow-auto bg-zinc-100/50 dark:bg-zinc-950/50 p-4" }, N === "auto" && /* @__PURE__ */ e.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4" }, n.extractedImages.length > 0 ? n.extractedImages.map((a, c) => /* @__PURE__ */ e.createElement("div", { key: a.id, className: `group relative aspect-square rounded-xl border ${t.border} ${t.card} overflow-hidden hover:ring-2 ring-blue-500 transition-all` }, /* @__PURE__ */ e.createElement("div", { className: `absolute top-2 left-2 text-[10px] font-bold px-1.5 py-0.5 rounded text-white z-10 ${a.type === "manual" ? "bg-emerald-500" : "bg-blue-500"}` }, "#", c + 1), /* @__PURE__ */ e.createElement("img", { src: a.src, className: "w-full h-full object-contain p-2" }), /* @__PURE__ */ e.createElement("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2" }, /* @__PURE__ */ e.createElement("button", { onClick: () => {
    navigator.clipboard.writeText("dummy"), he({ message: i.copySuccess });
  }, className: "p-2 bg-white text-black rounded-lg hover:bg-zinc-200" }, /* @__PURE__ */ e.createElement(He, { className: "w-4 h-4" })), /* @__PURE__ */ e.createElement("button", { onClick: () => {
    const r = document.createElement("a");
    r.href = a.src, r.download = `img_${c}.png`, r.click();
  }, className: "p-2 bg-white text-black rounded-lg hover:bg-zinc-200" }, /* @__PURE__ */ e.createElement(Xe, { className: "w-4 h-4" }))))) : /* @__PURE__ */ e.createElement("div", { className: "col-span-full py-20 text-center text-zinc-500" }, i.noImages)), N === "manual" && /* @__PURE__ */ e.createElement("div", { className: "flex flex-col lg:flex-row gap-6 h-full" }, /* @__PURE__ */ e.createElement("div", { className: "lg:w-64 shrink-0 flex flex-col gap-4" }, /* @__PURE__ */ e.createElement("div", { className: `p-4 rounded-xl border ${t.border} ${t.card} space-y-4` }, /* @__PURE__ */ e.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ e.createElement("button", { onClick: () => _(Math.max(1, z - 1)), disabled: z <= 1, className: `p-2 rounded border ${t.border}` }, /* @__PURE__ */ e.createElement(Ue, { className: "w-4 h-4" })), /* @__PURE__ */ e.createElement("span", { className: "font-mono" }, z, " / ", f == null ? void 0 : f.numPages), /* @__PURE__ */ e.createElement("button", { onClick: () => _(Math.min(f == null ? void 0 : f.numPages, z + 1)), disabled: z >= (f == null ? void 0 : f.numPages), className: `p-2 rounded border ${t.border}` }, /* @__PURE__ */ e.createElement(Ae, { className: "w-4 h-4" }))), /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: Le,
      disabled: !h || p,
      className: `w-full py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 ${h ? t.primary : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400"}`
    },
    p ? /* @__PURE__ */ e.createElement(re, { className: "w-4 h-4 animate-spin" }) : /* @__PURE__ */ e.createElement(Ee, { className: "w-4 h-4" }),
    " ",
    i.addToGallery
  ), /* @__PURE__ */ e.createElement("div", { className: `text-xs p-2 rounded bg-zinc-100 dark:bg-zinc-800 ${t.textMuted}` }, i.dragHint)), /* @__PURE__ */ e.createElement("div", { className: `p-4 rounded-xl border ${t.border} ${t.card}` }, /* @__PURE__ */ e.createElement("label", { className: "flex items-center gap-2 text-sm cursor-pointer" }, /* @__PURE__ */ e.createElement("input", { type: "checkbox", checked: K, onChange: (a) => le(a.target.checked) }), i.showDetected))), /* @__PURE__ */ e.createElement("div", { className: "flex-1 overflow-auto flex justify-center p-4 bg-zinc-200/50 dark:bg-zinc-900/50 rounded-xl border border-zinc-200 dark:border-zinc-800" }, /* @__PURE__ */ e.createElement("div", { className: "relative shadow-2xl inline-block", ref: Ne, style: { cursor: ne } }, /* @__PURE__ */ e.createElement("canvas", { ref: L, onMouseDown: Me, onMouseMove: $e, onMouseUp: fe, onMouseLeave: fe }), h && /* @__PURE__ */ e.createElement("div", { className: "absolute border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] pointer-events-none", style: { left: h.x, top: h.y, width: h.width, height: h.height } }), Te.map((a, c) => null)))), N === "ocr" && /* @__PURE__ */ e.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 h-full" }, /* @__PURE__ */ e.createElement("div", { className: `flex flex-col rounded-xl border ${t.border} ${t.card}` }, /* @__PURE__ */ e.createElement("div", { className: "p-3 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center" }, /* @__PURE__ */ e.createElement("h3", { className: "font-bold text-sm" }, i.ocrResultTitle)), /* @__PURE__ */ e.createElement("div", { className: "flex-1 overflow-auto p-4 space-y-2" }, n.detectedLinks.length > 0 ? n.detectedLinks.map((a, c) => /* @__PURE__ */ e.createElement("div", { key: c, className: `p-3 rounded border ${t.border} text-sm` }, /* @__PURE__ */ e.createElement("div", { className: "text-blue-500 font-mono text-xs" }, a.type), /* @__PURE__ */ e.createElement("a", { href: a.url, target: "_blank", rel: "noreferrer", className: "block truncate hover:underline" }, a.value))) : /* @__PURE__ */ e.createElement("div", { className: "text-center py-10 text-zinc-500" }, i.ocrHint))), /* @__PURE__ */ e.createElement("div", { className: `flex flex-col rounded-xl border ${t.border} ${t.card}` }, /* @__PURE__ */ e.createElement("div", { className: "p-3 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center" }, /* @__PURE__ */ e.createElement("h3", { className: "font-bold text-sm" }, i.ocrRawText), /* @__PURE__ */ e.createElement("button", { onClick: De, disabled: U, className: `px-3 py-1 rounded text-xs font-bold ${t.primary}` }, U ? /* @__PURE__ */ e.createElement(re, { className: "w-3 h-3 animate-spin" }) : i.ocrStart)), /* @__PURE__ */ e.createElement("div", { className: "flex-1 overflow-auto p-4 font-mono text-xs whitespace-pre-wrap" }, n.ocrPages.map((a) => /* @__PURE__ */ e.createElement("div", { key: a.page, className: "mb-4 pb-4 border-b border-zinc-200 dark:border-zinc-800" }, /* @__PURE__ */ e.createElement("div", { className: "font-bold mb-1 opacity-50" }, "Page ", a.page), a.text)))))));
}
export {
  tt as default
};
