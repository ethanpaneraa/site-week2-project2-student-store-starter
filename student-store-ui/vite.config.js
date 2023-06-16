import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig((envConfig) => ({
  base:"/site-week2-project2-student-store-starter", 
  plugins: [react()],
  server: {
    open: true,
    host: true,
  },
}))
