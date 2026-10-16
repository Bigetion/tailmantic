import assert from 'node:assert/strict';
import { dirname, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { getManifest, resetManifest } from 'tailmantic/collector';
import { compile } from '../../../compile.js';

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');

test('components with padded width constraints use border-box sizing', async () => {
  resetManifest();
  await import('../src/tailmantics/index.js?box-sizing-test');

  const css = await compile(getManifest(), { baseDir: packageRoot });
  const selectors = [
    'tm-accordion',
    'tm-accordion-trigger',
    'tm-alert',
    'tm-app-bar',
    'tm-bottom-navigation',
    'autocomplete-field',
    'autocomplete-option',
    'autocomplete-popover',
    'tm-select-trigger',
    'tm-select-options',
    'tm-select-option',
    'tm-text-field-control',
    'tm-dialog',
    'tm-drawer',
    'tm-icon-glyph-size-list',
    'tm-icons-search',
    'tm-menu',
    'tm-menu-item',
    'tm-modal',
    'tm-pagination-button',
    'tm-popover',
    'tm-snackbar',
    'tm-tooltip-content',
  ];

  for (const className of selectors) {
    assert.ok(
      [...css.matchAll(/([^{}]+)\{([^{}]*)\}/g)].some(([_, selectors, declarations]) => {
        return (
          selectors.split(',').some((selector) => selector.trim() === `.${className}`) &&
          /box-sizing:\s*border-box/.test(declarations)
        );
      }),
      `.${className} should apply border-box sizing`,
    );
  }
});
