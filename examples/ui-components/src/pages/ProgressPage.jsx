import { Button, Progress } from '@tailmantic/ui-components';
import { Check, CloudUpload, Database, Film } from 'lucide-react';
import { useState } from 'react';
import '@tailmantic/ui-components/progress/styles';
import '@tailmantic/ui-components/button/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('progress');
const PROGRESS_STYLES_NOTE =
  'Progress and its example layout styles are provided by @tailmantic/ui-components/progress/styles.';
const USAGE_CODE = `import Progress from '@tailmantic/ui-components/progress';
import '@tailmantic/ui-components/progress/styles';

<Progress label="Project file upload" value={58} />`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/ProgressPage.jsx',
    'Dedicated examples for linear, circular, indeterminate, and buffered progress.',
  ],
  [
    'Component',
    'packages/ui-components/src/progress/Progress.jsx',
    'Accessible linear or circular progress with determinate and indeterminate states.',
  ],
  [
    'Styles',
    'packages/ui-components/src/progress/progress.styles.js',
    'Package-owned progress indicators and example layout styles.',
  ],
];

function ProgressCard({ icon: Icon, title, description, value, children }) {
  return (
    <div className="tm-progress-example-card">
      <div className="tm-progress-example-heading">
        <span className="tm-progress-example-icon" aria-hidden="true">
          <Icon size={15} />
        </span>
        <div className="tm-progress-example-copy">
          <strong>{title}</strong>
          <span>{description}</span>
        </div>
        {value != null && <span className="tm-progress-example-value">{value}%</span>}
      </div>
      {children}
    </div>
  );
}

function LinearProgressExample() {
  const [value, setValue] = useState(60);

  return (
    <div className="tm-progress-example-stack">
      <ProgressCard
        icon={CloudUpload}
        title="Uploading project files"
        description={`${Math.round(value / 5)} of 20 files uploaded`}
        value={value}
      >
        <Progress
          className="tm-progress-example-linear"
          label="Project file upload"
          value={value}
        />
        <div className="tm-progress-example-actions">
          <Button
            variant="outlined"
            size="small"
            disabled={value === 0}
            onClick={() => setValue((current) => Math.max(0, current - 10))}
          >
            − 10%
          </Button>
          <Button
            variant="outlined"
            size="small"
            disabled={value === 100}
            onClick={() => setValue((current) => Math.min(100, current + 10))}
          >
            + 10%
          </Button>
        </div>
      </ProgressCard>
      <ProgressCard
        icon={Database}
        title="Connecting to workspace"
        description="Completion time is not available"
      >
        <Progress className="tm-progress-example-linear" label="Connecting to workspace" />
      </ProgressCard>
      <span className="preview-note" role="status" aria-live="polite">
        Upload progress: {value}%.
      </span>
    </div>
  );
}

function CircularProgressExample() {
  const [value, setValue] = useState(72);

  return (
    <div className="tm-progress-example-stack">
      <div className="tm-progress-example-circular-grid">
        <div className="tm-progress-example-circular-item">
          <div className="tm-progress-example-circular-meter">
            <Progress
              label="File processing progress"
              max={100}
              size={48}
              value={value}
              variant="circular"
            />
            <span aria-hidden="true">{value}%</span>
          </div>
          <div className="tm-progress-example-copy">
            <strong>{value}% processed</strong>
            <span>File processing</span>
          </div>
        </div>
        <div className="tm-progress-example-circular-item">
          <Progress
            className="tm-progress-example-spinner"
            label="Loading account data"
            size={48}
            variant="circular"
          />
          <div className="tm-progress-example-copy">
            <strong>Loading account</strong>
            <span>Waiting for a response</span>
          </div>
        </div>
      </div>
      <div className="tm-progress-example-actions">
        <Button
          variant="outlined"
          size="small"
          disabled={value === 0}
          onClick={() => setValue((current) => Math.max(0, current - 10))}
        >
          − 10%
        </Button>
        <Button
          variant="outlined"
          size="small"
          disabled={value === 100}
          onClick={() => setValue((current) => Math.min(100, current + 10))}
        >
          + 10%
        </Button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        File processing: {value}%.
      </span>
    </div>
  );
}

function BufferedProgressExample() {
  const [value, setValue] = useState(42);
  const [buffer, setBuffer] = useState(76);

  function receiveChunk() {
    setValue((current) => Math.min(buffer, current + 12));
    setBuffer((current) => Math.min(100, current + 12));
  }

  function reset() {
    setValue(42);
    setBuffer(76);
  }

  return (
    <div className="tm-progress-example-stack">
      <ProgressCard
        icon={Film}
        title="Streaming video"
        description={`${value}% played · ${buffer}% buffered`}
        value={value}
      >
        <div className="tm-progress-example-buffer-track">
          <Progress
            className="tm-progress-example-buffer"
            label="Video buffered"
            value={buffer}
            aria-hidden="true"
          />
          <Progress
            className="tm-progress-example-played"
            label="Video playback"
            value={value}
            aria-valuetext={`${value}% played, ${buffer}% buffered`}
          />
        </div>
        <div className="tm-progress-example-legend">
          <span>
            <i className="tm-progress-example-legend-played" /> Played
          </span>
          <span>
            <i className="tm-progress-example-legend-buffered" /> Buffered
          </span>
        </div>
      </ProgressCard>
      <div className="tm-progress-example-actions">
        <Button variant="contained" size="small" disabled={value === 100} onClick={receiveChunk}>
          <Check size={13} aria-hidden="true" /> Buffer next segment
        </Button>
        <Button variant="outlined" size="small" onClick={reset}>
          Reset
        </Button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {value}% played and {buffer}% buffered.
      </span>
    </div>
  );
}

export default function ProgressPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Render determinate progress with a numeric value, or omit it for an indeterminate indicator."
      usageDescription="Progress supports linear and circular variants, custom maximums and accessible labels, and exposes the current value to assistive technology."
    >
      <div className="component-showcase component-showcase-progress">
        <DemoPanel
          title="Linear progress"
          caption="Show completed work and work without a predictable completion time."
          code={PROGRESS_STYLES_NOTE}
        >
          <LinearProgressExample />
        </DemoPanel>
        <DemoPanel
          title="Circular progress"
          caption="Use a compact circular indicator for a known value or ongoing work."
          code={PROGRESS_STYLES_NOTE}
        >
          <CircularProgressExample />
        </DemoPanel>
        <DemoPanel
          title="Buffered progress"
          caption="Distinguish the portion already played from content that is ready to process."
          code={PROGRESS_STYLES_NOTE}
        >
          <BufferedProgressExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
