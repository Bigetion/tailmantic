import { Slider } from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('slider');
const MARKS = [0, 25, 50, 75, 100];
const USAGE_CODE = `import { Slider } from '@tailmantic/ui-components';

<Slider
  aria-label="Volume"
  min={0}
  max={100}
  value={volume}
  onChange={(event) => setVolume(Number(event.target.value))}
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/SliderPage.jsx',
    'Dedicated page with continuous, range, and marked Slider examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/slider/Slider.jsx',
    'Styled, accessible native range input with forwarded ref and native constraints.',
  ],
  [
    'Styles',
    'packages/ui-components/src/slider/slider.styles.js',
    'Tailmantic styles bundled with the Slider package.',
  ],
];
const EXAMPLES = [
  {
    id: 'slider',
    title: 'Continuous value',
    caption: 'Adjust a value smoothly across a range with pointer or keyboard input.',
  },
  {
    id: 'slider-range',
    title: 'Range selection',
    caption: 'Set minimum and maximum values while keeping the selected range valid.',
  },
  {
    id: 'slider-marks',
    title: 'Discrete steps',
    caption: 'Snap to labeled values when only specific increments are meaningful.',
  },
];

function ContinuousSlider() {
  const [value, setValue] = useState(40);

  return (
    <div className="preview-stack">
      <label className="tm-label" htmlFor="slider-volume">
        Volume
      </label>
      <Slider
        id="slider-volume"
        aria-label="Volume"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <output className="preview-note" htmlFor="slider-volume">
        {value}%
      </output>
    </div>
  );
}

function RangeSlider() {
  const [range, setRange] = useState([25, 70]);

  return (
    <div className="preview-stack">
      <span className="tm-label">Price range</span>
      <output className="preview-note">
        ${range[0]} – ${range[1]}
      </output>
      <Slider
        aria-label="Minimum price"
        min={0}
        max={range[1]}
        value={range[0]}
        onChange={(event) => setRange(([, high]) => [Number(event.target.value), high])}
      />
      <Slider
        aria-label="Maximum price"
        min={range[0]}
        max={100}
        value={range[1]}
        onChange={(event) => setRange(([low]) => [low, Number(event.target.value)])}
      />
      <span className="preview-note" aria-hidden="true">
        $0 — $100
      </span>
      <span className="sr-only" role="status" aria-live="polite">
        Price range: ${range[0]} to ${range[1]}.
      </span>
    </div>
  );
}

function MarkedSlider() {
  const [value, setValue] = useState(50);

  return (
    <div className="preview-stack">
      <label className="tm-label" htmlFor="slider-zoom">
        Zoom level
      </label>
      <output className="preview-note" htmlFor="slider-zoom">
        {value}%
      </output>
      <Slider
        id="slider-zoom"
        aria-label="Zoom level"
        min={0}
        max={100}
        step={25}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <div className="preview-row" aria-hidden="true">
        {MARKS.map((mark) => (
          <span className="preview-note" key={mark}>
            {mark}
          </span>
        ))}
      </div>
      <span className="sr-only" role="status" aria-live="polite">
        Zoom level: {value}%.
      </span>
    </div>
  );
}

const EXAMPLE_COMPONENTS = {
  slider: ContinuousSlider,
  'slider-range': RangeSlider,
  'slider-marks': MarkedSlider,
};

export default function SliderPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import Slider from the package and pass native range input props."
      usageDescription="Slider retains native range input behavior and constraints while applying the package's Tailmantic track and thumb styles."
    >
      <div className="component-showcase component-showcase-slider">
        {EXAMPLES.map(({ id, title, caption }) => {
          const Example = EXAMPLE_COMPONENTS[id];
          return (
            <DemoPanel key={id} title={title} caption={caption} code={getExampleCode(component.slug, title)}>
              <Example />
            </DemoPanel>
          );
        })}
      </div>
    </ComponentPageLayout>
  );
}
