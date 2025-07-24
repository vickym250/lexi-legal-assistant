import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/lexi-legal-assistant/", // 👈 यह जोड़ना जरूरी है
  plugins: [react(), tailwindcss()],
})
