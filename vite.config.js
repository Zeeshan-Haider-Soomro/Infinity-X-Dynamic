import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
        tailwindcss(),
  ],
    base: "https://infinityxdynamics.com", // Use "/" for custom domains or "/repo-name/" for default 
})
