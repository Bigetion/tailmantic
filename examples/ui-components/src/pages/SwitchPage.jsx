import { Switch } from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('switch');
const USAGE_CODE = `import { Switch } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/switch/styles';

<Switch
  label="Push notifications"
  checked={enabled}
  onChange={(event) => setEnabled(event.target.checked)}
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/SwitchPage.jsx',
    'Dedicated page with interactive state, semantic color, and descriptive label examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/switch/Switch.jsx',
    'Accessible native checkbox switch with controlled and uncontrolled state.',
  ],
  [
    'Styles',
    'packages/ui-components/src/switch/switch.styles.js',
    'Tailmantic base, disabled, focus, and semantic variant styles bundled with the package.',
  ],
];

function SwitchStates() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="preview-stack">
      <div className="selection-list-vertical">
        <Switch
          label={`Push notifications ${enabled ? 'on' : 'off'}`}
          checked={enabled}
          onChange={(event) => setEnabled(event.target.checked)}
        />
        <Switch label="Managed by your administrator" defaultChecked disabled />
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        Push notifications are {enabled ? 'on' : 'off'}.
      </span>
    </div>
  );
}

function SwitchColors() {
  const [values, setValues] = useState({ blue: true, green: true, orange: false });

  function update(key, checked) {
    setValues((current) => ({ ...current, [key]: checked }));
  }

  return (
    <div className="preview-stack">
      <div className="selection-list-vertical">
        <Switch
          label="Default blue"
          checked={values.blue}
          onChange={(event) => update('blue', event.target.checked)}
        />
        <Switch
          label="Success green"
          checked={values.green}
          inputClassName="tm-switch-success"
          onChange={(event) => update('green', event.target.checked)}
        />
        <Switch
          label="Warning orange"
          checked={values.orange}
          inputClassName="tm-switch-warning"
          onChange={(event) => update('orange', event.target.checked)}
        />
      </div>
      <span className="preview-note">
        Use semantic colors only when they communicate a meaningful state.
      </span>
    </div>
  );
}

function SwitchLabels() {
  const [settings, setSettings] = useState({ email: true, product: false });

  function update(key, checked) {
    setSettings((current) => ({ ...current, [key]: checked }));
  }

  return (
    <div className="preview-stack">
      <div className="selection-list-vertical">
        <Switch
          label={
            <span className="selection-copy">
              <span>Email notifications</span>
              <span className="preview-note">Receive updates about your account activity.</span>
            </span>
          }
          checked={settings.email}
          onChange={(event) => update('email', event.target.checked)}
        />
        <Switch
          label={
            <span className="selection-copy">
              <span>Product announcements</span>
              <span className="preview-note">Hear about new features and improvements.</span>
            </span>
          }
          checked={settings.product}
          onChange={(event) => update('product', event.target.checked)}
        />
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {Object.values(settings).filter(Boolean).length} notification settings enabled.
      </span>
    </div>
  );
}

const EXAMPLES = [
  {
    id: 'switch',
    title: 'Switch states',
    caption: 'Toggle a setting on or off and distinguish disabled controls clearly.',
    component: SwitchStates,
  },
  {
    id: 'switch-colors',
    title: 'Semantic colors',
    caption: 'Use restrained color variants to communicate meaningful switch states.',
    component: SwitchColors,
  },
  {
    id: 'switch-labels',
    title: 'Labeled settings',
    caption: 'Pair switches with concise setting names and useful supporting text.',
    component: SwitchLabels,
  },
];

export default function SwitchPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import Switch from the package and connect it to controlled application state."
      usageDescription="Switch retains native checkbox behavior, exposes accessible switch semantics, and uses styles from the component package."
    >
      <div className="component-showcase component-showcase-switch">
        {EXAMPLES.map(({ id, title, caption, component: Example }) => (
          <DemoPanel key={id} title={title} caption={caption} code={getExampleCode(component.slug, title)}>
            <Example />
          </DemoPanel>
        ))}
      </div>
    </ComponentPageLayout>
  );
}
