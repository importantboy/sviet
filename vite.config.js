import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts:[
      '790cd805-305c-4b9d-8c43-5553455e1441-00-2pf3ir50jmo0x.pike.replit.dev'
    ]
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@":path.resolve(__dirname,"./src")
    }
  }
})
