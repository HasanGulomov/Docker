import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Mana shu qator Docker bilan bog'lanish uchun shart!
    port: 5173,
    watch: {
      usePolling: true, // Fayllardagi o'zgarishlarni Dockerda tezroq sezish uchun
    },
  },
})