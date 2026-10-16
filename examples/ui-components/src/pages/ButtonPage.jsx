import { Button } from '@tailmantic/ui-components';
import { Activity, ArrowRight, Check, Info, Plus, Trash2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('button');
const USAGE_CODE = `import { Button } from '@tailmantic/ui-components';

<Button variant="contained" color="primary">
  Save changes
</Button>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/ButtonPage.jsx',
    'Self-contained page with interactive Button examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/button/Button.jsx',
    'Reusable Button component with native button attributes and ref support.',
  ],
  [
    'Styles',
    'packages/ui-components/src/button/button.styles.js',
    'Tailmantic styles bundled with the Button package.',
  ],
];

function ButtonVariants() {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="button-example-section">
      <span className="button-example-label">Choose a visual hierarchy</span>
      <div className="button-example-row">
        <Button onClick={() => setPressed(true)}>Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text button</Button>
        <Button disabled>Disabled</Button>
      </div>
      {pressed && (
        <span className="preview-note" role="status">
          Button action selected.
        </span>
      )}
    </div>
  );
}

function ButtonColors() {
  return (
    <div className="button-example-section">
      <span className="button-example-label">Semantic variants</span>
      <div className="button-example-row">
        <Button color="success">
          <Check size={14} /> Success
        </Button>
        <Button color="warning">
          <Info size={14} /> Warning
        </Button>
        <Button color="danger">
          <Trash2 size={14} /> Delete
        </Button>
      </div>
      <span className="preview-note">
        Reserve semantic colors for actions where intent matters.
      </span>
    </div>
  );
}

function ButtonSizes() {
  return (
    <div className="button-example-section">
      <span className="button-example-label">Adjust the visual density</span>
      <div className="button-example-row">
        <Button variant="text" size="small">
          Small
        </Button>
        <Button variant="outlined">Medium</Button>
        <Button size="large">Large action</Button>
      </div>
      <span className="preview-note">Use one consistent size within a related control group.</span>
    </div>
  );
}

function ButtonIcons() {
  return (
    <div className="button-example-section">
      <span className="button-example-label">Icon placement</span>
      <div className="button-example-row">
        <Button>
          <Plus size={15} /> Create project
        </Button>
        <Button variant="outlined">
          Continue <ArrowRight size={15} />
        </Button>
        <button className="button-example-icon-button" type="button" aria-label="Add item">
          <Plus size={17} />
        </button>
      </div>
      <span className="preview-note">Icon-only actions include an accessible label.</span>
    </div>
  );
}

function ButtonLoading() {
  const [loading, setLoading] = useState(false);
  const [pressed, setPressed] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

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
          {loading
            ? 'Please wait while your changes are saved.'
            : pressed
              ? 'Your changes are saved.'
              : 'Click to preview a pending action.'}
        </span>
      </div>
    </div>
  );
}

export default function ButtonPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import Button from the package and choose its visual variant, semantic color, and size."
      usageDescription="Native button behavior and Tailmantic styles are provided by the reusable package component."
    >
      <div className="component-showcase component-showcase-button">
        <DemoPanel
          title="Button variants"
          caption="Choose the right visual weight for each action in your interface."
          code={getExampleCode(component.slug, 'Button variants')}
        >
          <ButtonVariants />
        </DemoPanel>
        <DemoPanel
          title="Semantic colors"
          caption="Use color to reinforce intent without changing the button behavior."
          code={getExampleCode(component.slug, 'Semantic colors')}
        >
          <ButtonColors />
        </DemoPanel>
        <DemoPanel
          title="Button sizes"
          caption="Balance compact controls with comfortable, prominent actions."
          code={getExampleCode(component.slug, 'Button sizes')}
        >
          <ButtonSizes />
        </DemoPanel>
        <DemoPanel
          title="Icons and actions"
          caption="Pair icons with labels to make common actions easier to scan."
          code={getExampleCode(component.slug, 'Icons and actions')}
        >
          <ButtonIcons />
        </DemoPanel>
        <DemoPanel
          title="Loading and disabled"
          caption="Give feedback while an action is running and prevent duplicate submissions."
          code={getExampleCode(component.slug, 'Loading and disabled')}
        >
          <ButtonLoading />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
