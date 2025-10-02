import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [mdx(), react()],
  base: './', // Use relative paths for GitHub Pages
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
      '~/': path.resolve(__dirname, 'src') + '/',
    },
  },
  server: {
    host: true,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
