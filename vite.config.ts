import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: true,  // Allows access from network
    port: 10000, // Explicit port
    strictPort: true, // Prevents Vite from switching to another port
  }, // React plugin (if you're using React)
   build: {
    outDir: 'dist',
    sourcemap: true
  }
})