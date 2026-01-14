import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const gemName = process.env.GEM_NAME

if (!gemName) {
    throw new Error('GEM_NAME environment variable is required. Usage: GEM_NAME=YourGemName npm run build:gem')
}

export default defineConfig({
    plugins: [react({ jsxRuntime: 'classic' })],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production')
    },
    build: {
        outDir: resolve(__dirname, `../gem/${gemName}/dist`),
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, `../gem/${gemName}/app.tsx`),
            name: gemName,
            fileName: (format) => format === 'es' ? 'index.js' : `index.${format}.js`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                }
            }
        }
    },
    resolve: {
        alias: {
            '@gem': resolve(__dirname, '../gem')
        }
    }
})
