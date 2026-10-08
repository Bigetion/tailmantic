import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tailmantic } from 'tailmantic/vite';

export default defineConfig({
  plugins: [
    react(),
    tailmantic({
      entry: 'src/tailmantics/index.js',
      // Also watch the local ui-components package so edits to *.styles.js
      // files inside packages/ui-components/src trigger a recompile.
      watch: '../../packages/ui-components/src',
    }),
  ],
  server: { port: 3005, open: true },
});
