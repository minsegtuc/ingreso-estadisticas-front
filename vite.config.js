import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  //base: '/controldegestion/examenes/',
  base: '/examenes/',
  // server: {
  //   host: '0.0.0.0',
  // }
})
