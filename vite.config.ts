import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: true, // Allow external access
    port: 5173, // Use default port or specify a custom one
    strictPort: true, // Prevent port switching
    allowedHosts: ["todo-front-zkmf.onrender.com"], // Add your Render frontend domain
  },
  preview: {
    host: true, 
    port: 5173, 
    allowedHosts: ["todo-front-zkmf.onrender.com"],
  }, // React plugin (if you're using React)
   build: {
    outDir: 'dist',
    sourcemap: true
  }
})