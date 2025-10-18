// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // The crucial line to fix Tomcat deployment:
  base: '/hospital-ui/', 
  
  plugins: [react()],
  // ...
})
