import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tailmantic } from 'tailmantic/vite';

export default defineConfig({
  plugins: [react(), tailmantic({ entry: 'src/registyles/index.js' })],
  server: { port: 3005, open: true },
});
