import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const gemsDir = path.resolve(__dirname, '../../gem');

const gems = fs.readdirSync(gemsDir).filter(gem => {
  return fs.statSync(path.join(gemsDir, gem)).isDirectory() &&
    fs.existsSync(path.join(gemsDir, gem, 'app.tsx'));
});

console.log(`Found gems: ${gems.join(', ')}`);

gems.forEach(gem => {
  console.log(`Building ${gem}...`);
  try {
    // Execute Vite build with the gem name environment variable
    execSync(`npx vite build -c vite.config.gem.ts`, {
      stdio: 'inherit',
      env: { ...process.env, GEM_NAME: gem },
      cwd: path.resolve(__dirname, '..')
    });

    // Generate dist/canvas.txt for CDN usage reference
    const canvasPath = path.join(gemsDir, gem, 'canvas.tsx');
    if (fs.existsSync(canvasPath)) {
      let content = fs.readFileSync(canvasPath, 'utf-8');
      const cdnUrl = `https://cdn.jsdelivr.net/gh/nogikun/gemini-gem@main/gem/${gem}/dist/index.umd.js`;

      const replacement = `import React from 'react';
import { OperationStep } from './app';

// CDN Import with Cache Bursting
const cdnUrl = "${cdnUrl}";

const App = React.lazy(async () => {
  // Check Globals before import (Debug)
  console.log("Globals Check:", { 
    React: !!window.React, 
    ReactDOM: !!window.ReactDOM,
    antd: !!window.antd 
  });

  await import(cdnUrl);
  // @ts-ignore
  return { default: window.${gem} };
});`;

      // Replace local import with CDN import pattern
      content = content.replace(/import\s+App.*from\s+['"]\.\/app['"];?/, replacement);

      const distDir = path.join(gemsDir, gem, 'dist');
      if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
      fs.writeFileSync(path.join(distDir, 'canvas.txt'), content);
    }
  } catch (e) {
    console.error(`Failed to build ${gem}`, e);
    process.exit(1);
  }
});
