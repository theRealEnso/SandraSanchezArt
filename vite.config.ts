import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginTs from 'vite-plugin-ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginTs(),],
  define: {
    'process.env.VITE_REACT_APP_AWS_REGION': process.env.VITE_REACT_APP_AWS_REGION,
    'process.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY_ID': process.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY_ID,
    'process.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY': process.env.VITE_REACT_APP_AWS_SECRET_ACCESS_KEY,
  }
  // build: {
  //   outDir: 'build',
  // }
})

