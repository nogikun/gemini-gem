import React, { useState, useRef, useEffect, useCallback } from 'react';
import { 
  Upload, Image as ImageIcon, Loader2, FileJson, 
  Brain, MousePointer2, Layout, Sparkles,
  BookOpen, MoreVertical, 
  Save, X, Crop
} from 'lucide-react';

// --- 型定義 ---
export interface OperationStep {
  step_id: number;
  timestamp_str: string;
  timestamp_seconds: number;
  action_type: "click" | "double_click" | "type" | "drag" | "scroll";
  target_label: string;
  ui_coordinates: [number, number, number, number]; // [ymin, xmin, ymax, xmax] 0-1000正規化座標
  instruction_text: string;
  visual_description: string;
  status?: 'pending' | 'analyzing' | 'success' | 'error';
  capturedImage?: string; // Base64 (解析済み/保存用)
  previewImage?: string;  // Base64 (一時プレビュー用)
}

// グローバルなJSZip型の定義
declare global {
  interface Window {
    JSZip: any;
  }
}

export default function VideoCaptureTool({ initialSteps = [] }: { initialSteps?: OperationStep[] }) {
  const apiKey = ""; // Environment provides the key at runtime
  
  // State
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [steps, setSteps] = useState<OperationStep[]>(initialSteps);

  const [selectedStepId, setSelectedStepId] = useState<number | null>(null);
  const [globalLoading, setGlobalLoading] = useState(false);
  const [currentPreview, setCurrentPreview] = useState<string | null>(null);
  const [isZipReady, setIsZipReady] = useState(false);

  // Manual Edit State
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingRect, setEditingRect] = useState<{x: number, y: number, width: number, height: number} | null>(null);
  const [dragAction, setDragAction] = useState<{type: string, startX: number, startY: number, initialRect: any, handle?: string} | null>(null);
  const [cursorStyle, setCursorStyle] = useState('default');
  const [activeMenuStepId, setActiveMenuStepId] = useState<number | null>(null);

  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const jsonInputRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const _containerRef = useRef<HTMLDivElement>(null);

  // --- Initialize JSZip ---
  useEffect(() => {
    if (!window.JSZip) {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
      script.async = true;
      script.onload = () => setIsZipReady(true);
      document.body.appendChild(script);
    } else {
      setIsZipReady(true);
    }
  }, []);

  // --- Core Logic: Capture Frame on Seek ---
  const captureFrame = useCallback((): string | null => {
    if (!videoRef.current) return null;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL('image/png');
  }, []);

  const selectStep = useCallback(async (stepId: number) => {
    const step = steps.find((s: OperationStep) => s.step_id === stepId);
    if (!step || !videoRef.current) return;

    setSelectedStepId(stepId);
    setIsEditMode(false); // Reset edit mode on step change

    if (step.capturedImage) {
      setCurrentPreview(step.capturedImage);
      return;
    }

    if (videoSrc) {
      videoRef.current.currentTime = step.timestamp_seconds;
      await new Promise(resolve => setTimeout(resolve, 300));
      const frame = captureFrame();
      setCurrentPreview(frame);
      setSteps((prev: OperationStep[]) => prev.map((s: OperationStep) => s.step_id === stepId ? { ...s, previewImage: frame || undefined } : s));
    }
  }, [steps, videoSrc, captureFrame]);

  useEffect(() => {
    if (videoSrc && steps.length > 0 && selectedStepId === null) {
      selectStep(steps[0].step_id);
    }
  }, [videoSrc, steps, selectedStepId, selectStep]);

  // --- Manual Edit Logic ---
  const HANDLE_SIZE = 10;

  // 編集モード開始
  const startManualEdit = (e: React.MouseEvent, stepId: number) => {
    e.stopPropagation();
    setActiveMenuStepId(null);
    selectStep(stepId);
    setTimeout(() => {
        setIsEditMode(true);
    }, 100);
  };

  // 編集モード初期化
  useEffect(() => {
    if (isEditMode && selectedStepId && imageRef.current) {
        const step = steps.find((s: OperationStep) => s.step_id === selectedStepId);
        if (step && imageRef.current) {
            const { width, height } = imageRef.current.getBoundingClientRect();
            const [ymin, xmin, ymax, xmax] = step.ui_coordinates;
            
            if (xmax > 0 && ymax > 0) {
                setEditingRect({
                    x: (xmin / 1000) * width,
                    y: (ymin / 1000) * height,
                    width: ((xmax - xmin) / 1000) * width,
                    height: ((ymax - ymin) / 1000) * height
                });
            } else {
                setEditingRect({
                    x: width * 0.25,
                    y: height * 0.4,
                    width: width * 0.5,
                    height: height * 0.2
                });
            }
        }
    }
  }, [isEditMode, selectedStepId, steps]);

  // マウス操作ヘルパー
  const getResizeHandle = (x: number, y: number, rect: any) => {
    if (!rect) return null;
    const { x: cx, y: cy, width: w, height: h } = rect;
    
    if (Math.abs(x - cx) <= HANDLE_SIZE && Math.abs(y - cy) <= HANDLE_SIZE) return 'nw';
    if (Math.abs(x - (cx + w)) <= HANDLE_SIZE && Math.abs(y - cy) <= HANDLE_SIZE) return 'ne';
    if (Math.abs(x - cx) <= HANDLE_SIZE && Math.abs(y - (cy + h)) <= HANDLE_SIZE) return 'sw';
    if (Math.abs(x - (cx + w)) <= HANDLE_SIZE && Math.abs(y - (cy + h)) <= HANDLE_SIZE) return 'se';
    
    if (x > cx + HANDLE_SIZE && x < cx + w - HANDLE_SIZE && y > cy + HANDLE_SIZE && y < cy + h - HANDLE_SIZE) return 'move';
    
    return null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isEditMode || !imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const handle = getResizeHandle(x, y, editingRect);

    if (handle && editingRect) {
      setDragAction({
        type: handle === 'move' ? 'move' : 'resize',
        handle: handle,
        startX: x,
        startY: y,
        initialRect: { ...editingRect }
      });
    } else {
      setEditingRect({ x, y, width: 0, height: 0 });
      setDragAction({
        type: 'create',
        startX: x,
        startY: y,
        initialRect: null
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isEditMode || !imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clampedX = Math.max(0, Math.min(x, rect.width));
    const clampedY = Math.max(0, Math.min(y, rect.height));

    if (dragAction) {
      if (dragAction.type === 'create') {
        setEditingRect({
          x: Math.min(dragAction.startX, clampedX),
          y: Math.min(dragAction.startY, clampedY),
          width: Math.abs(clampedX - dragAction.startX),
          height: Math.abs(clampedY - dragAction.startY)
        });
      } else if (dragAction.type === 'move' && dragAction.initialRect) {
        const dx = clampedX - dragAction.startX;
        const dy = clampedY - dragAction.startY;
        setEditingRect({
          ...dragAction.initialRect,
          x: dragAction.initialRect.x + dx,
          y: dragAction.initialRect.y + dy
        });
      } else if (dragAction.type === 'resize' && dragAction.initialRect) {
        const { initialRect, handle } = dragAction;
        let newRect = { ...initialRect };
        const dx = clampedX - dragAction.startX;
        const dy = clampedY - dragAction.startY;

        if (handle === 'se') {
          newRect.width = initialRect.width + dx;
          newRect.height = initialRect.height + dy;
        } else if (handle === 'sw') {
          newRect.x = initialRect.x + dx;
          newRect.width = initialRect.width - dx;
          newRect.height = initialRect.height + dy;
        } else if (handle === 'ne') {
          newRect.y = initialRect.y + dy;
          newRect.width = initialRect.width + dx;
          newRect.height = initialRect.height - dy;
        } else if (handle === 'nw') {
          newRect.x = initialRect.x + dx;
          newRect.y = initialRect.y + dy;
          newRect.width = initialRect.width - dx;
          newRect.height = initialRect.height - dy;
        }

        if (newRect.width < 0) {
          newRect.x += newRect.width;
          newRect.width = Math.abs(newRect.width);
        }
        if (newRect.height < 0) {
          newRect.y += newRect.height;
          newRect.height = Math.abs(newRect.height);
        }

        setEditingRect(newRect);
      }
    } else {
      const handle = getResizeHandle(x, y, editingRect);
      if (handle === 'move') setCursorStyle('move');
      else if (handle === 'nw' || handle === 'se') setCursorStyle('nwse-resize');
      else if (handle === 'ne' || handle === 'sw') setCursorStyle('nesw-resize');
      else setCursorStyle('crosshair');
    }
  };

  const handleMouseUp = () => {
    setDragAction(null);
  };

  // 編集内容を保存
  const saveManualCorrection = () => {
    if (selectedStepId && editingRect && imageRef.current) {
        const { width, height } = imageRef.current.getBoundingClientRect();
        
        const xmin = Math.round((editingRect.x / width) * 1000);
        const ymin = Math.round((editingRect.y / height) * 1000);
        const xmax = Math.round(((editingRect.x + editingRect.width) / width) * 1000);
        const ymax = Math.round(((editingRect.y + editingRect.height) / height) * 1000);

        const clamp = (n: number) => Math.max(0, Math.min(1000, n));

        let imageToSave = currentPreview;
        if (!imageToSave && videoRef.current) {
             const canvas = document.createElement('canvas');
             canvas.width = videoRef.current.videoWidth;
             canvas.height = videoRef.current.videoHeight;
             const ctx = canvas.getContext('2d');
             if(ctx) {
                 ctx.drawImage(videoRef.current, 0, 0);
                 imageToSave = canvas.toDataURL('image/png');
             }
        }

        setSteps((prev: OperationStep[]) => prev.map((s: OperationStep) => s.step_id === selectedStepId ? {
            ...s,
            ui_coordinates: [clamp(ymin), clamp(xmin), clamp(ymax), clamp(xmax)],
            status: 'success',
            capturedImage: imageToSave || undefined
        } : s));

        setIsEditMode(false);
        setEditingRect(null);
    }
  };

  // --- Gemini API Logic ---
  const analyzeSingleStep = async (stepId: number) => {
    const step = steps.find((s: OperationStep) => s.step_id === stepId);
    if (!step) return;

    let base64Image: string | undefined = step.capturedImage || step.previewImage;
    if (!base64Image && videoRef.current) {
      videoRef.current.currentTime = step.timestamp_seconds;
      await new Promise(resolve => setTimeout(resolve, 300));
      base64Image = captureFrame() || undefined;
    }

    if (!base64Image) {
      alert("画像の取得に失敗しました。動画を確認してください。");
      return;
    }

    setSteps((prev: OperationStep[]) => prev.map((s: OperationStep) => s.step_id === stepId ? { ...s, status: 'analyzing' } : s));

    try {
      const rawBase64 = base64Image.split(',')[1];
      const systemPrompt = `
        Return JSON only. No markdown.
        Detect the bounding box of the UI element described by the user.
        Coordinate system: 0-1000 normalized [ymin, xmin, ymax, xmax].
        Schema: { "boxes": [ { "ymin": int, "xmin": int, "ymax": int, "xmax": int, "label": string } ] }
      `;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: systemPrompt + `\nTarget: ${step.target_label}\nHint: ${step.visual_description}` },
                { inlineData: { mimeType: "image/png", data: rawBase64 } }
              ]
            }],
            generationConfig: { responseMimeType: "application/json" }
          }),
        }
      );

      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      const data = await response.json();
      const textResult = data.candidates?.[0]?.content?.parts?.[0]?.text;
      const parsed = JSON.parse(textResult);

      if (parsed.boxes && parsed.boxes.length > 0) {
        const box = parsed.boxes[0];
        setSteps((prev: OperationStep[]) => prev.map((s: OperationStep) => s.step_id === stepId ? {
          ...s,
          ui_coordinates: [box.ymin, box.xmin, box.ymax, box.xmax],
          status: 'success',
          capturedImage: base64Image 
        } : s));
      } else {
        throw new Error("Not found");
      }
    } catch (e: any) {
      console.error(e);
      alert(`エラーが発生しました: ${e.message}`);
      setSteps((prev: OperationStep[]) => prev.map((s: OperationStep) => s.step_id === stepId ? { ...s, status: 'error' } : s));
    }
  };

  const runAutoPilot = async () => {
    setGlobalLoading(true);
    for (const step of steps) {
      await selectStep(step.step_id); 
      await analyzeSingleStep(step.step_id);
      await new Promise(r => setTimeout(r, 800)); 
    }
    setGlobalLoading(false);
  };

  const handleJsonExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(steps, null, 2));
    const a = document.createElement('a');
    a.href = dataStr;
    a.download = "result.json";
    a.click();
  };

  // --- Image Render Logic (Customized) ---
  const renderAnnotatedImage = async (step: OperationStep): Promise<Blob | null> => {
    if (!step.capturedImage || !step.ui_coordinates) return null;

    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) { resolve(null); return; }

        ctx.drawImage(img, 0, 0);

        const [ymin, xmin, ymax, xmax] = step.ui_coordinates;
        if (xmax > 0 && ymax > 0) {
          const x = (xmin / 1000) * img.width;
          const y = (ymin / 1000) * img.height;
          const w = ((xmax - xmin) / 1000) * img.width;
          const h = ((ymax - ymin) / 1000) * img.height;

          // 1. 線の太さを 2/3 (0.005 -> 0.0035) に
          const lineWidth = Math.max(2, img.width * 0.0035);
          const cornerRadius = lineWidth * 2;
          
          ctx.strokeStyle = '#ef4444'; 
          ctx.lineWidth = lineWidth;
          
          // 2. 角丸矩形の描画
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(x, y, w, h, cornerRadius);
          } else {
            ctx.rect(x, y, w, h);
          }
          ctx.stroke();

          // 3. ラベル描画ロジック (スマートリサイズ & 中央配置 & 数字フォールバック)
          let text = `Step ${step.step_id}`;
          const minFontSize = 12; // 最小フォントサイズ
          
          // 初期フォントサイズ (画像幅の2.5%くらい)
          let fontSize = Math.max(16, img.width * 0.025); 
          ctx.font = `bold ${fontSize}px sans-serif`;
          
          let textMetrics = ctx.measureText(text);
          let padding = fontSize * 0.6; 
          
          // 幅チェックの基準: ボックスの幅 (w) に収める
          const maxLabelWidth = w;
          const currentLabelWidth = textMetrics.width + (padding * 2);

          // テキストがボックス幅を超える場合の調整
          if (currentLabelWidth > maxLabelWidth) {
             // 収まるように比率計算
             const ratio = maxLabelWidth / currentLabelWidth;
             let newFontSize = Math.floor(fontSize * ratio);
             
             // フォントが小さくなりすぎる場合 -> 数字のみに変更して再計算
             if (newFontSize < minFontSize) {
                text = `${step.step_id}`;
                // フォントサイズをリセットして再計算
                fontSize = Math.max(16, img.width * 0.025);
                padding = fontSize * 0.6;
                ctx.font = `bold ${fontSize}px sans-serif`;
                textMetrics = ctx.measureText(text);
                
                // それでもはみ出るなら縮小
                const numLabelWidth = textMetrics.width + (padding * 2);
                if (numLabelWidth > maxLabelWidth) {
                    const ratio2 = maxLabelWidth / numLabelWidth;
                    fontSize = Math.max(10, Math.floor(fontSize * ratio2)); // 絶対最小サイズ10
                }
             } else {
                fontSize = newFontSize;
             }
          }

          // 最終的な設定で再計測
          ctx.font = `bold ${fontSize}px sans-serif`;
          textMetrics = ctx.measureText(text);
          padding = fontSize * 0.6; // フォントサイズ依存で再計算
          
          const labelWidth = textMetrics.width + (padding * 2);
          const labelHeight = fontSize + (padding * 2);

          // 4. 配置位置決定 (Height/2 を基準に上下)
          const isTopHalf = y < (img.height / 2);
          
          // ラベルのX座標: ボックスの中央に配置
          const boxCenterX = x + w / 2;
          const labelX = boxCenterX - labelWidth / 2;
          
          let labelY;
          if (isTopHalf) {
             // 画面上半分にある -> ボックスの下に配置
             labelY = y + h + lineWidth; 
          } else {
             // 画面下半分にある -> ボックスの上に配置
             labelY = y - labelHeight - lineWidth;
          }

          // ラベル背景（角丸）
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          if (ctx.roundRect) {
             ctx.roundRect(labelX, labelY, labelWidth, labelHeight, cornerRadius);
          } else {
             ctx.rect(labelX, labelY, labelWidth, labelHeight);
          }
          ctx.fill();
          
          // テキスト描画 (Box Center Middle)
          ctx.fillStyle = 'white';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // ラベル矩形の中心座標
          const labelCenterX = labelX + labelWidth / 2;
          const labelCenterY = labelY + labelHeight / 2;
          
          // baseline調整 (middle指定なのでY中心でOKだが、微調整)
          ctx.fillText(text, labelCenterX, labelCenterY + (fontSize * 0.05));
        }

        canvas.toBlob((blob) => resolve(blob), 'image/png');
      };
      img.src = step.capturedImage!;
    });
  };

  const handleManualExport = async () => {
    if (!window.JSZip || !isZipReady) {
      alert("ZIPライブラリの準備中です。数秒待ってから再試行してください。");
      return;
    }

    setGlobalLoading(true);
    try {
      const zip = new window.JSZip();
      const imgFolder = zip.folder("images");
      let markdownContent = "# 操作マニュアル\n\n自動生成された操作手順書です。\n\n";

      for (const step of steps) {
        markdownContent += `### Step ${step.step_id} : ${step.target_label}\n`;
        markdownContent += `${step.instruction_text}\n\n`;

        if (step.status === 'success' && step.capturedImage) {
          const blob = await renderAnnotatedImage(step);
          if (blob) {
            const fileName = `step${step.step_id}.png`;
            imgFolder?.file(fileName, blob);
            markdownContent += `![Step ${step.step_id}](./images/${fileName})\n\n`;
          }
        } else {
          markdownContent += `> *(画像なし)*\n\n`;
        }
        markdownContent += `---\n\n`;
      }

      zip.file("manual.md", markdownContent);

      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = "manual_package.zip";
      a.click();
      URL.revokeObjectURL(url);
      
    } catch (e) {
      console.error(e);
      alert("マニュアル作成中にエラーが発生しました。");
    } finally {
      setGlobalLoading(false);
    }
  };

  const currentStep = steps.find((s: OperationStep) => s.step_id === selectedStepId);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
      <video ref={videoRef} src={videoSrc || undefined} className="hidden" muted playsInline />
      <input type="file" accept="video/*" ref={fileInputRef} className="hidden" onChange={e => {
        if(e.target.files?.[0]) setVideoSrc(URL.createObjectURL(e.target.files[0]));
      }} />
      <input type="file" accept=".json" ref={jsonInputRef} className="hidden" onChange={e => {
        if(e.target.files?.[0]) {
          const r = new FileReader();
          r.onload = ev => setSteps(JSON.parse(ev.target?.result as string));
          r.readAsText(e.target.files[0]);
        }
      }} />

      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-20 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white p-1.5 rounded-lg">
            <Layout className="w-5 h-5" />
          </div>
          <h1 className="font-bold text-lg hidden sm:block">UIキャプチャ・スタジオ</h1>
        </div>
        <div className="flex gap-2 relative">
          {!videoSrc && (
            <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition-colors">
              <Upload className="w-4 h-4" /> 動画を選択
            </button>
          )}
          {videoSrc && (
            <>
              <button onClick={() => jsonInputRef.current?.click()} className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg border border-gray-200" title="JSON読込"><FileJson className="w-5 h-5" /></button>
              <div className="h-8 w-px bg-gray-300 mx-1"></div>
              <button onClick={handleJsonExport} className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 rounded-lg font-medium text-sm transition-colors"><FileJson className="w-4 h-4" /> <span className="hidden sm:inline">JSON</span></button>
              <button onClick={handleManualExport} disabled={globalLoading} className="flex items-center gap-2 px-4 py-2 bg-indigo-900 hover:bg-indigo-800 text-white rounded-lg font-medium text-sm transition-colors shadow-sm">{globalLoading ? <Loader2 className="w-4 h-4 animate-spin"/> : <BookOpen className="w-4 h-4" />}<span>マニュアル保存 (ZIP)</span></button>
            </>
          )}
        </div>
      </header>

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Left: Step List */}
        <div className="w-full md:w-80 bg-white border-b md:border-b-0 md:border-r border-gray-200 flex flex-col h-1/3 md:h-full shrink-0">
          <div className="p-3 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Timeline Steps</span>
            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">{steps.length}</span>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {steps.map((step: OperationStep) => (
              <div key={step.step_id} className={`group relative rounded-xl border transition-all duration-200 ${selectedStepId === step.step_id ? 'bg-blue-50 border-blue-200 shadow-sm ring-1 ring-blue-200' : 'bg-white border-gray-100 hover:bg-gray-50 hover:border-gray-200'}`}>
                <button
                  onClick={() => selectStep(step.step_id)}
                  className="w-full text-left p-3 flex items-start gap-3"
                >
                  <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${step.status === 'success' ? 'bg-green-100 text-green-700' : step.status === 'error' ? 'bg-red-100 text-red-700' : selectedStepId === step.step_id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {step.step_id}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-xs font-medium text-gray-900 truncate">{step.target_label}</span>
                      <span className="text-[10px] text-gray-400 font-mono">{step.timestamp_str}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 line-clamp-1">{step.instruction_text}</p>
                  </div>
                </button>
                
                {/* 3-dot Menu */}
                <div className="absolute top-2 right-2">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setActiveMenuStepId(activeMenuStepId === step.step_id ? null : step.step_id); }}
                    className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                  {activeMenuStepId === step.step_id && (
                    <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                      <button 
                        onClick={(e) => startManualEdit(e, step.step_id)}
                        className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
                      >
                        <Crop className="w-4 h-4" />
                        手動で座標を修正
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <button onClick={runAutoPilot} disabled={globalLoading || !videoSrc} className="w-full py-2.5 bg-white border border-gray-300 hover:border-blue-300 hover:text-blue-600 text-gray-700 rounded-lg text-sm font-bold shadow-sm transition-all flex items-center justify-center gap-2 disabled:opacity-50">
              {globalLoading ? <Loader2 className="w-4 h-4 animate-spin"/> : <Sparkles className="w-4 h-4 text-yellow-500"/>} AI一括解析
            </button>
          </div>
        </div>

        {/* Right: Preview Area */}
        <div className="flex-1 bg-gray-100 flex flex-col h-2/3 md:h-full relative overflow-y-auto">
          {!videoSrc ? (
            <div className="flex-1 flex flex-col items-center justify-center text-gray-400 p-8">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4"><Upload className="w-8 h-8 text-gray-400" /></div>
              <p className="text-lg font-medium text-gray-500">動画ファイルを読み込んで開始</p>
            </div>
          ) : (
            <div className="p-4 md:p-8 flex flex-col gap-6 max-w-5xl mx-auto w-full h-full">
              
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex-1 flex flex-col min-h-0 relative">
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-bold text-gray-700">Preview: {currentStep?.timestamp_str}</span>
                    {isEditMode && <span className="bg-orange-100 text-orange-600 text-xs px-2 py-0.5 rounded-full font-bold animate-pulse">Manual Edit Mode</span>}
                  </div>
                  {currentStep && !isEditMode && (
                    <button onClick={() => analyzeSingleStep(currentStep.step_id)} disabled={globalLoading} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium hover:bg-blue-100 transition-colors">
                      {currentStep.status === 'analyzing' ? '解析中...' : 'AI再解析'}
                    </button>
                  )}
                  {isEditMode && (
                    <div className="flex gap-2">
                        <button onClick={() => { setIsEditMode(false); setEditingRect(null); }} className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg font-bold hover:bg-gray-200 transition-colors flex items-center gap-1"><X className="w-3 h-3"/> キャンセル</button>
                        <button onClick={saveManualCorrection} className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-1 shadow-sm"><Save className="w-3 h-3"/> 変更を保存</button>
                    </div>
                  )}
                </div>
                
                <div 
                    className="flex-1 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-gray-50 relative flex items-center justify-center overflow-hidden p-4 select-none"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{ cursor: cursorStyle }}
                >
                  {currentPreview ? (
                    <div className="relative shadow-xl max-w-full max-h-full inline-block">
                      <img 
                        ref={imageRef}
                        src={currentPreview} 
                        alt="Step Preview" 
                        className="max-w-full max-h-full object-contain rounded pointer-events-none select-none block"
                        draggable={false}
                      />
                      
                      {/* 通常時の表示（AI検出結果 + プレビューオーバーレイ） */}
                      {!isEditMode && currentStep?.ui_coordinates && currentStep.ui_coordinates[2] > 0 && (
                        <div 
                          className="absolute border-red-500 shadow-[0_0_0_2px_rgba(255,255,255,0.2)] pointer-events-none flex items-center justify-center"
                          style={{
                            top: `${currentStep.ui_coordinates[0] / 10}%`,
                            left: `${currentStep.ui_coordinates[1] / 10}%`,
                            height: `${(currentStep.ui_coordinates[2] - currentStep.ui_coordinates[0]) / 10}%`,
                            width: `${(currentStep.ui_coordinates[3] - currentStep.ui_coordinates[1]) / 10}%`,
                            borderWidth: '3px',
                            borderRadius: '6px'
                          }}
                        >
                           {/* プレビュー用簡易バッジ */}
                           <div className="bg-red-500 text-white px-2 py-0.5 rounded text-[10px] font-bold shadow-sm whitespace-nowrap overflow-hidden max-w-full text-ellipsis">
                             Step {currentStep.step_id}
                           </div>
                        </div>
                      )}

                      {/* 編集モード時の表示（操作用矩形） */}
                      {isEditMode && editingRect && (
                        <div 
                            className="absolute border-2 border-white z-50 shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] cursor-move" 
                            style={{ 
                                left: editingRect.x, 
                                top: editingRect.y, 
                                width: editingRect.width, 
                                height: editingRect.height 
                            }}
                        >
                            {/* Resize Handles */}
                            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-black cursor-nwse-resize" />
                            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-black cursor-nesw-resize" />
                            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-black cursor-nesw-resize" />
                            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-black cursor-nwse-resize" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <Loader2 className="w-8 h-8 animate-spin" />
                      <span className="text-sm">Generating Preview...</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Detail Info Card */}
              {currentStep && !isEditMode && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Target UI Element</label>
                      <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
                        <MousePointer2 className="w-5 h-5 text-blue-500" />
                        {currentStep.target_label}
                      </div>
                      <p className="text-sm text-gray-600 mt-2 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        {currentStep.instruction_text}
                      </p>
                    </div>
                    <div>
                       <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">AI Hint / Status</label>
                       <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-yellow-800 flex gap-2 items-start">
                         <Brain className="w-4 h-4 shrink-0 mt-0.5" />
                         {currentStep.visual_description}
                       </p>
                       <div className="mt-4 flex items-center gap-2">
                         <div className={`text-xs px-2 py-1 rounded font-mono border ${currentStep.status === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-gray-100 border-gray-200 text-gray-500'}`}>
                           Status: {currentStep.status || 'Pending'}
                         </div>
                         <div className="text-xs font-mono text-gray-400">
                           Coords: [{currentStep.ui_coordinates.join(',')}]
                         </div>
                       </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}