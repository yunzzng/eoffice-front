import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      /** [Browser]
       * fetch("/api/signin")
       * fetch("/api/signup")
       * fetch("/api/profile")
       * [Client] /api/~ ====> [Back] http://localhost:8080/api/~
       * fetch("/api/")
       */
      '/api': {
        target: 'http://localhost:8080',
        // http://localhost:8080/signin ===> api/signin
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
