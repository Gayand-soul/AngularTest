import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/AngularTest/', // Replace with your GitHub repo name (e.g., 'AngularTest')
  plugins: [react()],
});
