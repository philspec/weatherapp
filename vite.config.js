import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // This line is necessary for Vite to replace `process.env` references in your code
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
})
