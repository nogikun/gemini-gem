import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Copy, Check } from 'lucide-react'

// Dynamic import of all canvas.tsx files in the gem directory
// The glob pattern assumes the structure: ../../gem/[GemName]/canvas.tsx
const gemModules = import.meta.glob('../../gem/*/canvas.tsx', { eager: true, import: 'default' }) as Record<string, React.ComponentType>

// Extract routes from the file paths
const routes = Object.keys(gemModules).map((path) => {
  // path example: "../../gem/Video2Manual_Generator/canvas.tsx"
  const match = path.match(/\.\.\/\.\.\/gem\/(.+)\/canvas\.tsx$/)
  const gemName = match ? match[1] : null
  if (!gemName) return null
  
  return {
    path: `/gem/${gemName}`,
    name: gemName,
    Component: gemModules[path]
  }
}).filter((r): r is { path: string, name: string, Component: React.ComponentType } => r !== null)

function GemCard({ route }: { route: typeof routes[0] }) {
  const [copied, setCopied] = useState(false)
  const cdnUrl = `https://cdn.jsdelivr.net/gh/nogikun/gemini-gem@main/gem/${route.name}/dist/index.umd.js`
  const importCode = `// --- Option A: React (Vite/Next.js) ---
const App = React.lazy(async () => {
  await import("${cdnUrl}");
  // @ts-ignore
  return { default: window.${route.name} };
});

// --- Option B: HTML / UMD (Browser) ---
// 1. Load React & ReactDOM (Required)
// <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
//
// 2. Load Gem
// <script src="${cdnUrl}"></script>
//
// 3. Use Global
// const App = window.${route.name};

export default function Canvas() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <App initialSteps={DEFAULT_STEPS} />
    </React.Suspense>
  );
}`

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(importCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="border rounded-lg overflow-hidden hover:border-blue-500 transition-colors">
      <Link 
        to={route.path}
        className="block p-4 bg-white hover:bg-slate-50"
      >
        <h2 className="font-semibold text-lg text-blue-600">{route.name}</h2>
        <p className="text-sm text-gray-500 mb-2">Path: {route.path}</p>
      </Link>
      <div className="bg-slate-100 p-3 border-t group relative">
        <div className="flex justify-between items-center mb-1">
          <p className="text-xs font-semibold text-gray-500">CDN Import:</p>
          {copied && <span className="text-xs text-green-600 font-bold fade-out">Copied!</span>}
        </div>
        
        <div 
          className="relative bg-[#1e1e1e] rounded cursor-pointer font-mono"
          onClick={handleCopy}
          title="Click to copy"
        >
          <pre className="text-xs text-[#d4d4d4] p-3 pr-8 whitespace-pre-wrap break-all">
            <code>
              <span className="text-[#c586c0]">import</span>{' '}
              <span className="text-[#9cdcfe]">App</span>{' '}
              <span className="text-[#c586c0]">from</span>{' '}
              <span className="text-[#ce9178]">"{cdnUrl}"</span>;
            </code>
          </pre>
          <div className="absolute top-2 right-2 p-1 bg-slate-700/80 rounded text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </div>
        </div>
      </div>
    </div>
  )
}


function GemList() {
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Gemini Canvas Simulator</h1>
      <div className="grid gap-4">
        {routes.length === 0 ? (
          <p className="text-gray-500">No gems found in ../gem directory.</p>
        ) : (
          routes.map((route) => (
            <GemCard key={route.path} route={route} />
          ))
        )}
      </div>
    </div>
  )
}



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GemList />} />
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.Component />} />
        ))}
        {/* Fallback for specific requested path if needed, though dynamic route covers it */}
      </Routes>
    </BrowserRouter>
  )
}

export default App


