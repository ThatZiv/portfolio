import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const buildDate = new Date().toLocaleDateString(undefined, {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  esbuild: {
    jsx: 'automatic'
  },
  base: '/',
  define: {
    __BUILD_DATE__: JSON.stringify(buildDate)
  }
})
