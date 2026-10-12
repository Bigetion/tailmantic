import { Rating } from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('rating');
const RATING_STYLES_NOTE =
  'Base component styles are provided by @tailmantic/ui-components/rating/styles.';
const USAGE_CODE = `import { Rating } from '@tailmantic/ui-components';

<Rating
  label="Rate your experience"
  value={rating}
  onChange={setRating}
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/RatingPage.jsx',
    'Self-contained page with interactive Rating examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/rating/Rating.jsx',
    'Accessible rating control with keyboard, precision, and read-only modes.',
  ],
  [
    'Styles',
    'packages/ui-components/src/rating/rating.styles.js',
    'Tailmantic styles bundled with the Rating package.',
  ],
];

function InteractiveRating() {
  const [rating, setRating] = useState(4);

  return (
    <div className="preview-stack">
      <Rating label="Rate your experience" value={rating} onChange={setRating} />
      <span className="preview-note" role="status" aria-live="polite">
        {rating.toFixed(1)} / 5 — choose a rating
      </span>
    </div>
  );
}

function PrecisionRating() {
  const [rating, setRating] = useState(3.5);

  return (
    <div className="preview-stack">
      <Rating precision={0.5} label="Rating" value={rating} onChange={setRating} />
      <span className="preview-note" role="status" aria-live="polite">
        {rating.toFixed(1)} / 5 — adjust in half-star steps
      </span>
    </div>
  );
}

function ReadOnlyRating() {
  return (
    <div className="preview-stack">
      <Rating readOnly value={4} label="Rating" />
      <span className="preview-note">4.0 / 5 — read only</span>
    </div>
  );
}

const EXAMPLES = [
  {
    id: 'rating',
    title: 'Interactive rating',
    caption: 'Collect a single star rating with pointer or keyboard input.',
    Component: InteractiveRating,
  },
  {
    id: 'rating-precision',
    title: 'Half-star precision',
    caption: 'Allow ratings in half-star increments for more nuanced feedback.',
    Component: PrecisionRating,
  },
  {
    id: 'rating-readonly',
    title: 'Read-only rating',
    caption: 'Present an existing rating without implying that it can be changed.',
    Component: ReadOnlyRating,
  },
];

export default function RatingPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import Rating from the package, then provide a controlled value or a default value."
      usageDescription="The package component provides accessible keyboard interaction, optional precision, read-only display, and Tailmantic styles."
    >
      <div className="component-showcase component-showcase-rating">
        {EXAMPLES.map(({ id, title, caption, Component }) => (
          <DemoPanel key={id} title={title} caption={caption} code={RATING_STYLES_NOTE}>
            <Component />
          </DemoPanel>
        ))}
      </div>
    </ComponentPageLayout>
  );
}
