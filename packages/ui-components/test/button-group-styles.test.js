import assert from 'node:assert/strict';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { getManifest, resetManifest } from 'tailmantic/collector';
import { compile } from '../../../compile.js';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

test('ButtonGroup joins adjacent button borders and styles vertical groups', async () => {
  resetManifest();
  await import('../src/button-group/button-group.styles.js?button-group-test');

  const css = await compile(getManifest(), { baseDir: packageRoot });

  assert.match(
    css,
    /:is\(\.tm-button-group:not\(\.tm-button-group-vertical\) > \.tm-button \+ \.tm-button\)\s*\{[^}]*border-left-width:\s*0(?:px)?/s,
  );
  assert.match(css, /\.tm-button-group-vertical\s*\{[^}]*flex-direction:\s*column/s);
  assert.doesNotMatch(css, /\.tm-button-group-:not/);
});
