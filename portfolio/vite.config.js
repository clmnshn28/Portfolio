import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: '/src/pages',
      layouts: '/src/layouts',
      routes: '/src/routes',
      components: '/src/components',
      stores: '/src/stores',
      helpers: '/src/helpers',
      assets: '/src/assets',
    },
  },
})
