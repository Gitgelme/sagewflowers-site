import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // ← bu Vercel'de CSS yolu hatasını çözer
  build: {
    outDir: 'dist', // ← çıktının nereye yazılacağını belirt
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
