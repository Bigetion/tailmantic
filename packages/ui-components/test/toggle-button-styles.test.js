import assert from 'node:assert/strict';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { getManifest, resetManifest } from 'tailmantic/collector';
import { compile } from '../../../compile.js';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

test('ToggleButton has compact sizing and a distinct selected state', async () => {
  resetManifest();
  await import('../src/toggle-button/toggle-button.styles.js?toggle-button-test');

  const css = await compile(getManifest(), { baseDir: packageRoot });

  assert.match(css, /\.tm-toggle-button\s*\{[^}]*width:\s*fit-content/s);
  assert.match(css, /\.tm-toggle-button\s*\{[^}]*justify-self:\s*flex-start/s);
  assert.match(css, /\.tm-toggle-button-selected\s*\{[^}]*border-color:\s*#6484d2/s);
  assert.match(css, /\.tm-toggle-button-selected\s*\{[^}]*background-color:\s*#243653/s);
});
