import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@img': path.resolve(__dirname, './src/assets/img'),
      '@js': path.resolve(__dirname, './src/assets/js'),
      '@vendor': path.resolve(__dirname, './src/assets/vendor'),
      '@css': path.resolve(__dirname, './src/assets/css'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  },
  server: {
    // 로컬호스트 변경
    host: 'localhost',
    port: 80,
  },
  build: {
    chunkSizeWarningLimit: 1600,
    manifest: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
      },
    },
  },
})
