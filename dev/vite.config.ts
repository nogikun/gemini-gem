import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@gem': path.resolve(__dirname, '../gem'),
            // Alias dependencies so gem imports resolve from dev's node_modules
            'react': path.resolve(__dirname, 'node_modules/react'),
            'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
            'lucide-react': path.resolve(__dirname, 'node_modules/lucide-react')
        }
    },
    server: {
        fs: {
            // Allow serving files from gem directory
            allow: ['..']
        }
    }
})

