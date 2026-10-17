import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { tailmantic } from 'tailmantic/vite';
import { defineConfig } from 'vite';

const dependency = (name) => fileURLToPath(new URL(`./node_modules/${name}`, import.meta.url));
const uiComponentsPath = dependency('@tailmantic/ui-components');
const uiComponentsPackage = JSON.parse(
  readFileSync(join(uiComponentsPath, 'package.json'), 'utf8'),
);
const uiComponentAliases = Object.entries(uiComponentsPackage.exports).flatMap(
  ([subpath, condition]) => {
    const target = typeof condition === 'string' ? condition : condition.import;
    if (!target) return [];
    const packageImport =
      subpath === '.'
        ? '@tailmantic/ui-components'
        : `@tailmantic/ui-components/${subpath.slice(2)}`;
    return [
      {
        find: new RegExp(`^${packageImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`),
        replacement: resolve(uiComponentsPath, target),
      },
    ];
  },
);

export default defineConfig({
  plugins: [
    react(),
    tailmantic({
      entry: 'src/tailmantics/index.js',
      ssr: {
        noExternal: ['tailmantic', '@tailmantic/ui-components'],
      },
    }),
  ],
  resolve: {
    alias: [
      ...uiComponentAliases,
      { find: /^@popperjs\/core(?=\/|$)/, replacement: dependency('@popperjs/core') },
      { find: /^react(?=\/|$)/, replacement: dependency('react') },
      { find: /^react-dom(?=\/|$)/, replacement: dependency('react-dom') },
      { find: /^lucide-react(?=\/|$)/, replacement: dependency('lucide-react') },
      { find: /^tailmantic(?=\/|$)/, replacement: dependency('tailmantic') },
    ],
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
