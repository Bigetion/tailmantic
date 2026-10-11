import { useState } from 'react';
import { Switch } from '@tailmantic/ui-components';
import { cx } from 'tailmantic';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('switch');

const DEMOS = {
  switch: {
    title: 'Switch states',
    caption: 'Toggle a setting on or off and distinguish disabled controls clearly.',
  },
  'switch-colors': {
    title: 'Semantic colors',
    caption: 'Use restrained color variants to communicate meaningful switch states.',
  },
  'switch-labels': {
    title: 'Labeled settings',
    caption: 'Pair switches with concise setting names and useful supporting text.',
  },
};

function SwitchControl({ id, label, checked, onChange, variant, disabled = false }) {
  return (
    <Switch
      className={cx('selection-option', disabled && 'is-disabled')}
      inputClassName={variant}
      id={id}
      label={label}
      checked={checked}
      disabled={disabled}
      onChange={(event) => onChange?.(event.target.checked)}
    />
  );
}

function SwitchStates() {
  const [enabled, setEnabled] = useState(true);
  const disabledValue = true;

  return (
    <div className="preview-stack">
      <div className="selection-list">
        <SwitchControl
          id="switch-push-notifications"
          label={`Push notifications ${enabled ? 'on' : 'off'}`}
          checked={enabled}
          onChange={setEnabled}
        />
        <SwitchControl
          id="switch-disabled"
          label="Managed by your administrator"
          checked={disabledValue}
          disabled
        />
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
      <div className="selection-list">
        <SwitchControl
          id="switch-color-blue"
          label="Default blue"
          checked={values.blue}
          onChange={(checked) => update('blue', checked)}
        />
        <SwitchControl
          id="switch-color-green"
          label="Success green"
          checked={values.green}
          onChange={(checked) => update('green', checked)}
          variant="tm-switch-success"
        />
        <SwitchControl
          id="switch-color-orange"
          label="Warning orange"
          checked={values.orange}
          onChange={(checked) => update('orange', checked)}
          variant="tm-switch-warning"
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
      <div className="selection-list selection-list-vertical">
        <Switch
          className="selection-option"
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
          className="selection-option"
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

function SwitchDemoContent({ demoId }) {
  if (demoId === 'switch-colors') return <SwitchColors />;
  if (demoId === 'switch-labels') return <SwitchLabels />;
  return <SwitchStates />;
}

export default function SwitchPage() {
  const styleSource = getStyleSource('switch');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <SwitchDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
