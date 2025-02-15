import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Render serves static sites from 'dist'
    assetsDir: 'assets', // Stores static assets like CSS, images, JS
    emptyOutDir: true, // Clears the folder before each build
  },
  server: {
    port: 3000, // Ensure Vite runs on port 3000 (Render supports it)
  },
});
