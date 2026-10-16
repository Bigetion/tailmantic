import assert from 'node:assert/strict';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { getManifest, resetManifest } from 'tailmantic/collector';
import { compile } from '../../../compile.js';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

test('Badge dot dimensions override the standard badge dimensions', async () => {
  resetManifest();
  await import('../src/badge/badge.styles.js?badge-dot-test');

  const css = await compile(getManifest(), { baseDir: packageRoot });
  const dotRules = [...css.matchAll(/\.tm-badge-dot\s*\{([^}]+)\}/g)].map((match) => match[1]);
  const dotDeclarations = dotRules.join('\n');

  assert.match(dotDeclarations, /width:\s*[^;]+!important/);
  assert.match(dotDeclarations, /height:\s*[^;]+!important/);
  assert.match(dotDeclarations, /min-width:\s*0(?:px)?\s*!important/);
  assert.match(dotDeclarations, /border-width:\s*0(?:px)?\s*!important/);
  assert.match(dotDeclarations, /padding:\s*0(?:px)?\s*!important/);
});
