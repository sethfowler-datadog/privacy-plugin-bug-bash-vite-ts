import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { datadogVitePlugin } from '@datadog/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    datadogVitePlugin({
      rum: {
        privacy: {
          disabled: false,
        }
      }
    }),
    react(),
  ],
})
