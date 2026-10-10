import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Check,
  Info,
  Plus,
  Trash2,
} from 'lucide-react';
import { Button } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import DemoPanel from '../../../components/DemoPanel.jsx';
import { getStyleSource } from '../../../lib/useStyleSource.js';

const component = getComponentBySlug('button');

const DEMOS = {
  button: {
    title: 'Button variants',
    caption: 'Choose the right visual weight for each action in your interface.',
  },
  'button-colors': {
    title: 'Semantic colors',
    caption: 'Use color to reinforce intent without changing the button behavior.',
  },
  'button-sizes': {
    title: 'Button sizes',
    caption: 'Balance compact controls with comfortable, prominent actions.',
  },
  'button-icons': {
    title: 'Icons and actions',
    caption: 'Pair icons with labels to make common actions easier to scan.',
  },
  'button-loading': {
    title: 'Loading and disabled',
    caption: 'Give feedback while an action is running and prevent duplicate submissions.',
  },
};

function ButtonDemoContent({ demoId }) {
  const [loading, setLoading] = useState(false);
  const [pressed, setPressed] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  if (demoId === 'button-colors') {
    return (
      <div className="button-example-section">
        <span className="button-example-label">Semantic variants</span>
        <div className="button-example-row">
          <Button color="success"><Check size={14} /> Success</Button>
          <Button color="warning"><Info size={14} /> Warning</Button>
          <Button color="danger"><Trash2 size={14} /> Delete</Button>
        </div>
        <span className="preview-note">Reserve semantic colors for actions where intent matters.</span>
      </div>
    );
  }

  if (demoId === 'button-sizes') {
    return (
      <div className="button-example-section">
        <span className="button-example-label">Adjust the visual density</span>
        <div className="button-example-row">
          <Button variant="text" size="small">Small</Button>
          <Button variant="outlined">Medium</Button>
          <Button size="large">Large action</Button>
        </div>
        <span className="preview-note">Use one consistent size within a related control group.</span>
      </div>
    );
  }

  if (demoId === 'button-icons') {
    return (
      <div className="button-example-section">
        <span className="button-example-label">Icon placement</span>
        <div className="button-example-row">
          <Button><Plus size={15} /> Create project</Button>
          <Button variant="outlined">Continue <ArrowRight size={15} /></Button>
          <button className="button-example-icon-button" type="button" aria-label="Add item"><Plus size={17} /></button>
        </div>
        <span className="preview-note">Icon-only actions include an accessible label.</span>
      </div>
    );
  }

  if (demoId === 'button-loading') {
    return (
      <div className="button-example-section">
        <span className="button-example-label">Async action state</span>
        <div className="button-example-row">
          <Button
            type="button"
            disabled={loading}
            aria-busy={loading}
            onClick={() => {
              setLoading(true);
              timerRef.current = window.setTimeout(() => {
                setLoading(false);
                setPressed(true);
              }, 1000);
            }}
          >
            {loading ? <Activity className="spin" size={14} /> : <Check size={14} />}
            {loading ? 'Saving changes…' : pressed ? 'Saved' : 'Save changes'}
          </Button>
          <span className="button-example-status" role="status">
            {loading ? 'Please wait while your changes are saved.' : pressed ? 'Your changes are saved.' : 'Click to preview a pending action.'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="button-example-section">
      <span className="button-example-label">Choose a visual hierarchy</span>
      <div className="button-example-row">
        <Button onClick={() => setPressed(true)}>Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text button</Button>
        <Button disabled>Disabled</Button>
      </div>
      {pressed && <span className="preview-note" role="status">Button action selected.</span>}
    </div>
  );
}

export default function ButtonPage() {
  const styleSource = getStyleSource('button');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <ButtonDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
