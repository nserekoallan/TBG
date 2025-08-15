import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TBG/',
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  build: {
    target: 'es2015',
    minify: 'terser',
    rollupOptions: {
      output: {
        // Simplified chunking strategy
        manualChunks: undefined, // Let Vite handle chunking automatically
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    chunkSizeWarningLimit: 200,
    reportCompressedSize: false,
    sourcemap: false,
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom', 
      'react-router-dom', 
      'framer-motion', 
      'recharts',
      'es-toolkit/compat',
      '@tanstack/react-query',
      'react-helmet-async',
      'react-error-boundary'
    ],
    exclude: [],
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
})
