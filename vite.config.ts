import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginTs from 'vite-plugin-ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginTs(),],
  // build: {
  //   outDir: 'build',
  // }
})

