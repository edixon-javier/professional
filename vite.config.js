import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'https://edixon-javier.github.io/professional',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
