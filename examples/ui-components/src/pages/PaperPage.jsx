import { useState } from 'react';
import { Layers, Plus } from 'lucide-react';
import { cx } from 'tailmantic';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('paper');

const DEMOS = {
  paper: {
    title: 'Surface elevation',
    caption: 'Compare how subtle elevation levels separate content while keeping the same base surface.',
  },
  'paper-elevation': {
    title: 'Elevation scale',
    caption: 'Choose an elevation level to compare how shadow and surface contrast establish hierarchy.',
  },
  'paper-variants': {
    title: 'Surface variants',
    caption: 'Compare a contained surface, an outlined panel, and a softly raised content area.',
  },
};

const LEVELS = [0, 1, 2, 3, 4, 6, 8, 12, 16, 24];

function SurfaceContent({ label = 'Surface content' }) {
  return (
    <div className="paper-content">
      <span className="paper-content-icon"><Layers size={15} aria-hidden="true" /></span>
      <span><strong>{label}</strong><small>Reusable content container</small></span>
    </div>
  );
}

function SurfaceElevationDemo() {
  return (
    <div className="paper-demo">
      <div className="paper-elevation-grid">
        {[0, 1, 3].map((level) => (
          <div className="paper-elevation-example" key={level}>
            <div className={`rgi-paper paper-elevation-${level}`}><SurfaceContent label={`Elevation ${level}`} /></div>
            <span>Level {level}</span>
          </div>
        ))}
      </div>
      <span className="preview-note">Elevation adds separation without changing the content structure.</span>
    </div>
  );
}

function ElevationScaleDemo() {
  const [level, setLevel] = useState(4);

  return (
    <div className="paper-demo">
      <div className="paper-scale-controls">
        {LEVELS.map((item) => (
          <button
            key={item}
            className={cx('paper-level-button', level === item && 'paper-level-button-active')}
            type="button"
            aria-pressed={level === item}
            onClick={() => setLevel(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="paper-scale-stage">
        <div className={cx('rgi-paper', 'paper-selected-elevation')} style={{ '--paper-level': level }}>
          <SurfaceContent label={`Elevation ${level}`} />
        </div>
      </div>
      <span className="preview-note" role="status">Selected elevation: {level}</span>
    </div>
  );
}

function PaperVariantsDemo() {
  const [count, setCount] = useState(2);

  return (
    <div className="paper-demo">
      <div className="paper-variants-grid">
        <div className="rgi-paper paper-contained">
          <span className="paper-variant-label">CONTAINED</span>
          <SurfaceContent label="Default surface" />
        </div>
        <div className="rgi-paper paper-outlined">
          <span className="paper-variant-label">OUTLINED</span>
          <SurfaceContent label="Border emphasis" />
        </div>
        <div className="rgi-paper paper-nested">
          <span className="paper-variant-label">NESTED</span>
          <p>Use layered surfaces to group related sections.</p>
          <div className="paper-nested-inner"><SurfaceContent label="Nested panel" /></div>
          <button className="paper-add-button" type="button" onClick={() => setCount((value) => value + 1)}>
            <Plus size={13} aria-hidden="true" /> Add item <span>{count}</span>
          </button>
        </div>
      </div>
      <span className="preview-note">Containment, borders, and nesting create hierarchy with the same surface primitive.</span>
    </div>
  );
}

function PaperDemoContent({ demoId }) {
  if (demoId === 'paper-elevation') return <ElevationScaleDemo />;
  if (demoId === 'paper-variants') return <PaperVariantsDemo />;
  return <SurfaceElevationDemo />;
}

export default function PaperPage() {
  const styleSource = getStyleSource('paper');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <PaperDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
