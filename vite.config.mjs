import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

const buildDate = new Date().toLocaleDateString(undefined, {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

// npm run build -- --mode analyze
// or npm run analyze (then serve dist/stats.html)
// ^^ FOR STATS ^^

export default defineConfig(({ mode }) => {
  const isAnalyze = mode === 'analyze' || process.env.ANALYZE === 'true'

  return {
    plugins: [
      react(),
      ...(isAnalyze
        ? [
            visualizer({
              filename: 'dist/stats.html',
              gzipSize: true,
              brotliSize: true
            })
          ]
        : [])
    ],
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
  }
})
