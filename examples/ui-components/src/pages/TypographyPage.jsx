import { Typography } from '@tailmantic/ui-components';
import { AlignCenter, AlignLeft, AlignRight, Check } from 'lucide-react';
import { useState } from 'react';
import { cx } from 'tailmantic';
import '@tailmantic/ui-components/typography/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('typography');
const WEIGHTS = [
  ['Regular', 400, 'regular'],
  ['Medium', 500, 'medium'],
  ['Semibold', 600, 'medium'],
  ['Bold', 700, 'bold'],
];
const COLORS = [
  ['Primary', 'primary', 'primary'],
  ['Secondary', 'secondary', 'secondary'],
  ['Muted', 'muted', 'muted'],
  ['Success', 'success', 'success'],
  ['Warning', 'warning', 'warning'],
];
const TYPOGRAPHY_STYLES_NOTE =
  'Typography and its example layout styles are provided by @tailmantic/ui-components/typography/styles.';
const USAGE_CODE = `import Typography from '@tailmantic/ui-components/typography';
import '@tailmantic/ui-components/typography/styles';

<Typography variant="h2" weight="bold">A clear hierarchy</Typography>
<Typography variant="body2" color="secondary">Supporting text</Typography>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/TypographyPage.jsx',
    'Dedicated examples for the type scale, font weights, colors, and alignment.',
  ],
  [
    'Component',
    'packages/ui-components/src/typography/Typography.jsx',
    'Semantic typography element with variant, weight, alignment, and color props.',
  ],
  [
    'Styles',
    'packages/ui-components/src/typography/typography.styles.js',
    'Package-owned typography variants and example layout styles.',
  ],
];

function TypographyScale() {
  const samples = [
    ['Display', 'h1', 'Build better products', '20 / 25 · 700', 20, 25, 'bold'],
    ['Heading 1', 'h2', 'A clear hierarchy', '17 / 21 · 600', 17, 21, 'semibold'],
    ['Heading 2', 'h3', 'Designed for people', '14 / 19 · 600', 14, 19, 'semibold'],
    ['Body', 'body1', 'Thoughtful type makes every interaction easier to understand.', '11 / 18 · 400', 11, 18, 'regular'],
    ['Caption', 'caption', 'Updated just now · visible to your team', '9 / 15 · 400', 9, 15, 'regular'],
  ];

  return (
    <div className="tm-typography-example-scale">
      {samples.map(([label, variant, text, spec, fontSize, lineHeight, weight]) => (
        <div className="tm-typography-example-scale-row" key={label}>
          <span className="tm-typography-example-scale-label">{label}</span>
          <Typography
            className="tm-typography-example-sample"
            component="span"
            variant={variant}
            weight={weight === 'bold' ? 'bold' : weight === 'regular' ? 'regular' : 'medium'}
            style={{ fontSize, lineHeight: `${lineHeight}px`, fontWeight: weight === 'semibold' ? 600 : undefined }}
          >
            {text}
          </Typography>
          <span className="tm-typography-example-spec">{spec}</span>
        </div>
      ))}
    </div>
  );
}

function TypographyWeights() {
  const [weight, setWeight] = useState(500);
  const selected = WEIGHTS.find(([, value]) => value === weight)?.[0];
  const weightProp = WEIGHTS.find(([, value]) => value === weight)?.[2];

  return (
    <div className="preview-stack">
      <div className="tm-typography-example-weight-picker" role="group" aria-label="Font weight">
        {WEIGHTS.map(([label, value]) => (
          <button
            className={cx(
              'tm-typography-example-weight-button',
              weight === value && 'tm-typography-example-weight-active',
            )}
            key={value}
            type="button"
            aria-pressed={weight === value}
            onClick={() => setWeight(value)}
          >
            {label}<span>{value}</span>
          </button>
        ))}
      </div>
      <div className="tm-typography-example-weight-preview">
        <span className="tm-typography-example-weight-meta">INTERFACE LABEL · {selected.toUpperCase()}</span>
        <Typography
          component="strong"
          variant="subtitle1"
          weight={weightProp}
          style={{ fontWeight: weight }}
        >
          Make the important things easy to find.
        </Typography>
        <Typography component="p" variant="body2" weight={weightProp} style={{ fontWeight: weight }}>
          Good typography builds hierarchy through consistent weight, size, and spacing.
        </Typography>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        Selected weight: {weight} ({selected})
      </span>
    </div>
  );
}

function TypographyColors() {
  const [tone, setTone] = useState('primary');
  const [alignment, setAlignment] = useState('left');
  const selectedColor = COLORS.find(([, value]) => value === tone)?.[0];
  const componentColor = COLORS.find(([, value]) => value === tone)?.[2];

  return (
    <div className="preview-stack">
      <div className="tm-typography-example-controls">
        <div className="tm-typography-example-tone-picker" role="group" aria-label="Text color">
          {COLORS.map(([label, value]) => (
            <button
              className={cx(
                'tm-typography-example-tone-button',
                `tm-typography-example-tone-${value}`,
                tone === value && 'tm-typography-example-tone-active',
              )}
              key={label}
              type="button"
              aria-pressed={tone === value}
              onClick={() => setTone(value)}
            >
              {tone === value && <Check size={11} aria-hidden="true" />}{label}
            </button>
          ))}
        </div>
        <div className="tm-typography-example-alignment-picker" role="group" aria-label="Text alignment">
          {[
            ['left', AlignLeft],
            ['center', AlignCenter],
            ['right', AlignRight],
          ].map(([value, AlignmentIcon]) => (
            <button
              className={cx(
                'tm-typography-example-alignment-button',
                alignment === value && 'tm-typography-example-alignment-active',
              )}
              key={value}
              type="button"
              aria-label={`Align ${value}`}
              aria-pressed={alignment === value}
              onClick={() => setAlignment(value)}
            >
              <AlignmentIcon size={13} aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
      <div className={cx('tm-typography-example-color-preview', `tm-typography-example-align-${alignment}`)}>
        <Typography className="tm-typography-example-eyebrow" variant="overline" color={componentColor}>
          PROJECT UPDATE
        </Typography>
        <Typography className="tm-typography-example-title" variant="h3" color={componentColor} weight="medium">
          Everything is moving in the right direction.
        </Typography>
        <Typography className="tm-typography-example-copy" variant="body2" color="secondary">
          Your team completed the latest milestone. Keep the message readable and use color to add meaning—not decoration.
        </Typography>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        Text tone: {selectedColor} · Alignment: {alignment}
      </span>
    </div>
  );
}

export default function TypographyPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Choose semantic variants, weight, color, and alignment with Typography."
      usageDescription="Typography renders an appropriate semantic element by default, and lets you override the element when the document structure requires it."
    >
      <div className="component-showcase component-showcase-typography">
        <DemoPanel
          title="Type scale"
          caption="Build a clear hierarchy from display text through headings, body copy, and captions."
          code={TYPOGRAPHY_STYLES_NOTE}
        >
          <TypographyScale />
        </DemoPanel>
        <DemoPanel
          title="Font weights"
          caption="Compare regular through bold weights while keeping size and spacing consistent."
          code={TYPOGRAPHY_STYLES_NOTE}
        >
          <TypographyWeights />
        </DemoPanel>
        <DemoPanel
          title="Color and alignment"
          caption="Pair semantic text colors with alignment controls while preserving readability."
          code={TYPOGRAPHY_STYLES_NOTE}
        >
          <TypographyColors />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
