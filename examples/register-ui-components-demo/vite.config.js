import react from '@vitejs/plugin-react';
import { tailmantic } from 'tailmantic/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailmantic()],
  server: { port: 3005, open: true },
});
