import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({ registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      } }),
  ],
  server: {
    //https: false,
    https: {
      key: fs.readFileSync('./key.pem'), // ou key.pem
      cert: fs.readFileSync('./cert.pem'),   // ou cert.pem
    },
  },
})
