import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        proxy: {
            '/auth': {
                target: 'https://tempx-back.onrender.com/',
                changeOrigin: true
            },
            '/email': {
                target: 'https://tempx-back.onrender.com/',
                changeOrigin: true
            }
        }
    }
})
