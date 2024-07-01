import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/react-dictionary-merriam-webster/',
  build:{
    rollupOptions:{
      input:'public/index.html'
    }
  },
  server:{
    historyApiFallback:true,
  }
})
