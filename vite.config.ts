import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@assets', replacement: fileURLToPath(new URL('./app/assets', import.meta.url)) },
      { find: '@utils', replacement: fileURLToPath(new URL('./app/utils', import.meta.url)) },
      { find: '@ui', replacement: fileURLToPath(new URL('./app/components/ui', import.meta.url)) },
      { find: '@state', replacement: fileURLToPath(new URL('./app/state', import.meta.url)) }
    ]
  }
})
