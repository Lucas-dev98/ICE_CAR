import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    // Target modern browsers
    target: 'esnext',
    // CSS code splitting
    cssCodeSplit: true,
    // Source maps in production for error tracking
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500,
  },
})
