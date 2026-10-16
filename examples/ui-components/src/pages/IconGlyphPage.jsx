import { IconGlyph } from '@tailmantic/ui-components';
import { useState } from 'react';
import { cx } from 'tailmantic';
import '@tailmantic/ui-components/icon-glyph/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('icon-glyph');
const GLYPHS = [
  ['home', 'Home'],
  ['search', 'Search'],
  ['account', 'Account'],
  ['notifications', 'Notifications'],
  ['favorite', 'Favorite'],
  ['star', 'Star'],
  ['mail', 'Mail'],
  ['cart', 'Cart'],
  ['settings', 'Settings'],
  ['info', 'Info'],
  ['warning', 'Warning'],
  ['verified', 'Verified'],
  ['add', 'Add'],
  ['back', 'Back'],
  ['share', 'Share'],
  ['delete', 'Delete'],
];
const USAGE_CODE = `import IconGlyph from '@tailmantic/ui-components/icon-glyph';
import '@tailmantic/ui-components/icon-glyph/styles';

<IconGlyph name="search" size={20} />
<IconGlyph name="verified" title="Verified account" color="currentColor" />`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/IconGlyphPage.jsx',
    'Dedicated examples for the glyph collection, sizing, and accessible icon actions.',
  ],
  [
    'Component',
    'packages/ui-components/src/icon-glyph/IconGlyph.jsx',
    'Fixed set of common interface SVG glyphs with accessible titles and forwarded refs.',
  ],
  [
    'Styles',
    'packages/ui-components/src/icon-glyph/icon-glyph.styles.js',
    'Package-owned base glyph and example layout styles.',
  ],
];

function IconGlyphCollection() {
  const [selected, setSelected] = useState('home');
  const selectedLabel = GLYPHS.find(([name]) => name === selected)?.[1];

  return (
    <div className="preview-stack">
      <div className="tm-icon-glyph-grid" role="group" aria-label="Common interface icon collection">
        {GLYPHS.map(([name, label]) => (
          <button
            className={cx('tm-icon-glyph-tile', selected === name && 'tm-icon-glyph-tile-selected')}
            key={name}
            type="button"
            aria-pressed={selected === name}
            onClick={() => setSelected(name)}
          >
            <span className="tm-icon-glyph-symbol">
              <IconGlyph name={name} size={21} strokeWidth={1.9} title="" />
            </span>
            <span>{label}</span>
          </button>
        ))}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        Selected glyph: {selectedLabel}
      </span>
      <span className="tm-icon-glyph-selection" aria-hidden="true">
        <IconGlyph name={selected} size={18} title="" />
        {selectedLabel}
      </span>
    </div>
  );
}

function IconGlyphSizes() {
  const sizes = [
    ['Small', 16, 'Dense controls'],
    ['Standard', 20, 'Default actions'],
    ['Large', 24, 'Prominent controls'],
    ['Display', 32, 'Illustrative use'],
  ];

  return (
    <div className="tm-icon-glyph-size-list">
      {sizes.map(([label, size, use]) => (
        <div className="tm-icon-glyph-size-item" key={label}>
          <span className="tm-icon-glyph-size-symbol">
            <IconGlyph name="home" size={size} strokeWidth={1.9} title="" />
          </span>
          <span><strong>{label}</strong><small>{use}</small></span>
          <code>{size}px</code>
        </div>
      ))}
    </div>
  );
}

function IconGlyphActions() {
  const [cartCount, setCartCount] = useState(2);
  const [favorite, setFavorite] = useState(false);
  const [message, setMessage] = useState('Ready for an action');

  return (
    <div className="preview-stack">
      <div className="tm-icon-glyph-toolbar" role="group" aria-label="Icon actions">
        <button type="button" aria-label="Go back" onClick={() => setMessage('Back action selected')}>
          <IconGlyph name="back" size={19} title="" />
        </button>
        <button type="button" aria-label="Search" onClick={() => setMessage('Search action selected')}>
          <IconGlyph name="search" size={19} title="" />
        </button>
        <button
          className={cx(favorite && 'tm-icon-glyph-action-active')}
          type="button"
          aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={favorite}
          onClick={() => {
            setFavorite((value) => !value);
            setMessage(favorite ? 'Removed from favorites' : 'Added to favorites');
          }}
        >
          <IconGlyph name="favorite" size={19} fill={favorite ? 'currentColor' : 'none'} title="" />
        </button>
        <button
          className="tm-icon-glyph-cart"
          type="button"
          aria-label={`Shopping cart, ${cartCount} items`}
          onClick={() => {
            setCartCount((count) => count + 1);
            setMessage('Added one item to cart');
          }}
        >
          <IconGlyph name="cart" size={19} title="" />
          <span>{cartCount}</span>
        </button>
        <button type="button" aria-label="Notifications" onClick={() => setMessage('Notifications opened')}>
          <IconGlyph name="notifications" size={19} title="" />
        </button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">{message}</span>
    </div>
  );
}

export default function IconGlyphPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Choose a named built-in glyph and size it consistently across controls."
      usageDescription="IconGlyph provides a fixed set of common interface symbols, with accessible names by default and title overrides when a more descriptive label is needed."
    >
      <div className="component-showcase component-showcase-icon-glyph">
        <DemoPanel
          title="Icon glyphs"
          caption="Browse familiar interface symbols presented in a consistent icon tile system."
          code={getExampleCode(component.slug, 'Icon glyphs')}
        >
          <IconGlyphCollection />
        </DemoPanel>
        <DemoPanel
          title="Icon sizing"
          caption="Choose a consistent glyph size for dense controls, default actions, and display use."
          code={getExampleCode(component.slug, 'Icon sizing')}
        >
          <IconGlyphSizes />
        </DemoPanel>
        <DemoPanel
          title="Icon action toolbar"
          caption="Combine recognizable glyphs with accessible action labels and live state."
          code={getExampleCode(component.slug, 'Icon action toolbar')}
        >
          <IconGlyphActions />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
