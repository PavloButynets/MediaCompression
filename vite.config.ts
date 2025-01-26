import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path'

export default defineConfig({
  plugins: [
    react()
  ],
  optimizeDeps: {
    exclude: [],
  },
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
  base: '/MediaCompression/',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
      '~scss': path.resolve(__dirname, 'src/scss/'),
      '~components': path.resolve(
        __dirname,
        'src/components/'
      )
      
    }
  },
});