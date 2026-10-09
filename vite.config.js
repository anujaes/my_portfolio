import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Output to /build so firebase.json ("public": "build") keeps working.
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'build' },
});
