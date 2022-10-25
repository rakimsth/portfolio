import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // omit this if you want you site to load in main page
  plugins: [react()],
});
