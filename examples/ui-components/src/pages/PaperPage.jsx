import { Paper } from '@tailmantic/ui-components';
import { Layers, Plus } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('paper');
const LEVELS = [0, 1, 2, 3, 4, 5];
const PAPER_STYLES_NOTE =
  'Paper component and example styles are provided by @tailmantic/ui-components/paper/styles.';
const USAGE_CODE = `import Paper from '@tailmantic/ui-components/paper';
import '@tailmantic/ui-components/paper/styles';

<Paper elevation={2}>
  <h2>Surface content</h2>
  <p>Reusable content container</p>
</Paper>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/PaperPage.jsx',
    'Dedicated elevation, elevation scale, and surface variant examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/paper/Paper.jsx',
    'Surface primitive with configurable elevation and square corners.',
  ],
  [
    'Styles',
    'packages/ui-components/src/paper/paper.styles.js',
    'Package-owned Paper and example layout styles.',
  ],
];

function SurfaceContent({ label = 'Surface content' }) {
  return (
    <div className="paper-content">
      <span className="paper-content-icon">
        <Layers size={18} aria-hidden="true" />
      </span>
      <span>
        <strong>{label}</strong>
        <small>Reusable content container</small>
      </span>
    </div>
  );
}

function SurfaceElevationDemo() {
  const elevations = [
    { level: 0, label: 'Base layer', description: 'A quiet, grounded surface.' },
    { level: 2, label: 'Raised panel', description: 'A little more separation.' },
    { level: 5, label: 'Floating panel', description: 'The strongest emphasis.' },
  ];

  return (
    <div className="paper-demo">
      <div className="paper-elevation-grid">
        {elevations.map(({ level, label, description }) => (
          <div className="paper-elevation-example" key={level}>
            <span className="paper-example-overline">ELEVATION {level}</span>
            <div className={`paper-elevation-stage paper-elevation-stage-${level}`}>
              <Paper
                className={`paper-elevation-sample paper-elevation-sample-${level}`}
                elevation={level}
              >
                <SurfaceContent label={label} />
              </Paper>
            </div>
            <span className="paper-example-description">{description}</span>
          </div>
        ))}
      </div>
      <p className="paper-demo-hint">
        Higher elevation brings a surface forward while keeping its content unchanged.
      </p>
    </div>
  );
}

function ElevationScaleDemo() {
  const [level, setLevel] = useState(4);

  return (
    <div className="paper-demo paper-demo-scale">
      <fieldset className="paper-scale-controls">
        <legend>Elevation</legend>
        {LEVELS.map((item) => (
          <button
            key={item}
            className={`paper-level-button${level === item ? ' paper-level-button-active' : ''}`}
            type="button"
            aria-pressed={level === item}
            onClick={() => setLevel(item)}
          >
            {item}
          </button>
        ))}
      </fieldset>
      <div className="paper-scale-stage">
        <Paper className="paper-selected-elevation" elevation={level}>
          <span className="paper-example-overline">ACTIVE SURFACE</span>
          <SurfaceContent label={`Elevation ${level}`} />
          <span className="paper-selected-description">
            {level === 0
              ? 'Sits flush with the page.'
              : level < 3
                ? 'A subtle lift for grouped content.'
                : 'A stronger lift for focused content.'}
          </span>
        </Paper>
      </div>
      <p className="paper-demo-hint" role="status">
        <span className="paper-level-indicator" /> Elevation {level} of 5
      </p>
    </div>
  );
}

function PaperVariantsDemo() {
  const [sections, setSections] = useState(['Account details', 'Team members']);

  return (
    <div className="paper-demo">
      <div className="paper-variants-grid">
        <Paper className="paper-variant-sample paper-contained" elevation={1}>
          <span className="paper-variant-label">DEFAULT</span>
          <SurfaceContent label="Workspace overview" />
          <p className="paper-variant-description">A soft surface for related content.</p>
        </Paper>
        <Paper className="paper-variant-sample paper-outlined" elevation={0}>
          <span className="paper-variant-label">OUTLINED</span>
          <SurfaceContent label="Usage summary" />
          <p className="paper-variant-description">
            Use a border to define the edge without a shadow.
          </p>
        </Paper>
        <Paper className="paper-variant-sample paper-nested">
          <span className="paper-variant-label">NESTED CONTENT</span>
          <p className="paper-variant-description">
            Add sections inside a surface to show a clear parent-child relationship.
          </p>
          <Paper className="paper-nested-inner" elevation={0}>
            <div className="paper-section-list" aria-live="polite">
              {sections.map((section) => (
                <div className="paper-section-row" key={section}>
                  <Layers size={15} aria-hidden="true" />
                  <span>{section}</span>
                </div>
              ))}
            </div>
          </Paper>
          <button
            className="paper-add-button"
            type="button"
            onClick={() => setSections((items) => [...items, `New section ${items.length - 1}`])}
          >
            <Plus size={16} aria-hidden="true" /> Add section
            <span>{sections.length}</span>
          </button>
        </Paper>
      </div>
      <p className="paper-demo-hint">
        Choose a surface treatment that supports the content hierarchy, not competes with it.
      </p>
    </div>
  );
}

export default function PaperPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Use Paper as a neutral surface for content and adjust its elevation to establish hierarchy."
      usageDescription="Paper provides elevations 0–5 and an optional square treatment while forwarding standard div attributes and refs."
    >
      <div className="component-showcase component-showcase-paper">
        <DemoPanel
          title="Surface elevation"
          caption="See how distance from the page changes the prominence of a surface."
          code={PAPER_STYLES_NOTE}
        >
          <SurfaceElevationDemo />
        </DemoPanel>
        <DemoPanel
          title="Elevation scale"
          caption="Choose a level to preview the elevation values supported by Paper."
          code={PAPER_STYLES_NOTE}
        >
          <ElevationScaleDemo />
        </DemoPanel>
        <DemoPanel
          title="Surface variants"
          caption="Compare subtle, outlined, and nested treatments for different content needs."
          code={PAPER_STYLES_NOTE}
        >
          <PaperVariantsDemo />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
