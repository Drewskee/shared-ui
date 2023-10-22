import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setup.ts', './vitest.setup.ts'],
    deps: {
      inline: ['vitest-canvas-mock'],
    },
    coverage: {
      // the goal is 80 for all coverage line items - we have work to do!
      lines: 0,
      branches: 0,
      functions: 0,
      statements: 0,
      reporter: ['text', 'json-summary', 'json'],
    },
  },
});
