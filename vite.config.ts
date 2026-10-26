import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// NOTE: no API key is placed in the browser code any more.
// The Gemini key lives only on the server (api/chat.js).
export default defineConfig({
  server: { port: 3000, host: '0.0.0.0' },
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, '.') } },
});
