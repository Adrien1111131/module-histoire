import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  // Ajoutez cette ligne pour le déploiement sur GitHub Pages
  // Remplacez 'module-histoire' par le nom de votre dépôt GitHub
  base: '/module-histoire/'
})
