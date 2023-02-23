import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  define: {
    "global": {},
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
      'jss-plugin-{}': 'jss-plugin-global'
    },
  },
  plugins: [
    react()
  ]
})
