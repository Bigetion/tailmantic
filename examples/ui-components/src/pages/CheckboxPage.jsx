import { Checkbox } from '@tailmantic/ui-components';
import { useId, useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('checkbox');
const PREFERENCES = [
  { id: 'product', label: 'Product updates', description: 'News about features and releases.' },
  {
    id: 'guides',
    label: 'Tips and guides',
    description: 'Occasional advice to help you get more out of the product.',
  },
  {
    id: 'events',
    label: 'Events and webinars',
    description: 'Invitations to product sessions and community events.',
  },
];
const USAGE_CODE = `import { Checkbox } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/checkbox/styles';

<label>
  <Checkbox checked={enabled} onChange={(event) => setEnabled(event.target.checked)} />
  Enable product updates
</label>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/CheckboxPage.jsx',
    'Self-contained page with interactive Checkbox examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/checkbox/Checkbox.jsx',
    'Accessible native checkbox input with checked and indeterminate states.',
  ],
  [
    'Styles',
    'packages/ui-components/src/checkbox/checkbox.styles.js',
    'Tailmantic styles bundled with the Checkbox package.',
  ],
];

function CheckboxControl({
  id,
  label,
  description,
  checked,
  disabled = false,
  indeterminate = false,
  onChange,
}) {
  return (
    <label className="selection-option" htmlFor={id}>
      <Checkbox
        id={id}
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
        onChange={onChange}
      />
      <span className="selection-copy">
        <span>{label}</span>
        {description && <span className="preview-note">{description}</span>}
      </span>
    </label>
  );
}

function CheckboxStates() {
  const instanceId = useId();
  const [basicChecked, setBasicChecked] = useState(true);
  const [newsletterChecked, setNewsletterChecked] = useState(true);

  return (
    <div className="preview-stack">
      <div className="selection-list">
        <CheckboxControl
          id={`${instanceId}-updates`}
          label="Send me product updates"
          description="A short email when something useful ships."
          checked={basicChecked}
          onChange={(event) => setBasicChecked(event.target.checked)}
        />
        <CheckboxControl
          id={`${instanceId}-newsletter`}
          label="Subscribe to the monthly newsletter"
          description="A monthly round-up of product news and tips."
          checked={newsletterChecked}
          onChange={(event) => setNewsletterChecked(event.target.checked)}
        />
        <CheckboxControl
          id={`${instanceId}-unavailable`}
          label="SMS notifications"
          description="Unavailable for this workspace."
          checked={false}
          disabled
        />
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {basicChecked ? 'Product updates enabled.' : 'Product updates disabled.'}
      </span>
    </div>
  );
}

function SelectAllCheckboxes() {
  const instanceId = useId();
  const [selected, setSelected] = useState(['product']);
  const selectedCount = selected.length;
  const allSelected = selectedCount === PREFERENCES.length;
  const partlySelected = selectedCount > 0 && !allSelected;

  function toggleAll() {
    setSelected(allSelected ? [] : PREFERENCES.map(({ id }) => id));
  }

  function togglePreference(id) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <div className="preview-stack">
      <div>
        <div>
          <strong>Notification preferences</strong>
          <p className="preview-note">Choose the updates you want to receive.</p>
        </div>
        <span className="preview-note">
          {selectedCount} of {PREFERENCES.length} selected
        </span>
      </div>
      <fieldset
        className="preview-stack"
        aria-label="Notification preferences"
        style={{ border: 0, margin: 0, minWidth: 0, padding: 0 }}
      >
        <CheckboxControl
          id={`${instanceId}-all`}
          label="Select all preferences"
          checked={allSelected}
          indeterminate={partlySelected}
          onChange={toggleAll}
        />
        {PREFERENCES.map((preference) => (
          <CheckboxControl
            key={preference.id}
            id={`${instanceId}-${preference.id}`}
            {...preference}
            checked={selected.includes(preference.id)}
            onChange={() => togglePreference(preference.id)}
          />
        ))}
      </fieldset>
      <span className="preview-note" role="status" aria-live="polite">
        {selectedCount === 0
          ? 'No preferences selected.'
          : `${selectedCount} ${selectedCount === 1 ? 'preference' : 'preferences'} selected.`}
      </span>
    </div>
  );
}

function CheckboxGroup() {
  const instanceId = useId();
  const [selected, setSelected] = useState(['product']);
  const selectedCount = selected.length;

  function togglePreference(id) {
    setSelected((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <fieldset
      className="preview-stack"
      aria-label="Choose your interests"
      style={{ border: 0, margin: 0, minWidth: 0, padding: 0 }}
    >
      <div>
        <strong>Choose your interests</strong>
        <p className="preview-note">Select all topics you would like to hear about.</p>
      </div>
      <div className="selection-list">
        {PREFERENCES.map((preference) => (
          <CheckboxControl
            key={preference.id}
            id={`${instanceId}-${preference.id}`}
            {...preference}
            checked={selected.includes(preference.id)}
            onChange={() => togglePreference(preference.id)}
          />
        ))}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {selectedCount === 0
          ? 'Nothing selected yet.'
          : `Selected: ${PREFERENCES.filter(({ id }) => selected.includes(id))
              .map(({ label }) => label)
              .join(', ')}`}
      </span>
    </fieldset>
  );
}

export default function CheckboxPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import Checkbox from the package and connect it to controlled application state."
      usageDescription="The reusable Checkbox provides native input behavior, indeterminate state, and Tailmantic styles."
    >
      <div className="component-showcase component-showcase-checkbox">
        <DemoPanel
          title="Checkbox states"
          caption="Make independent choices clear with checked, unchecked, and disabled states."
          code={getExampleCode(component.slug, 'Checkbox states')}
        >
          <CheckboxStates />
        </DemoPanel>
        <DemoPanel
          title="Select all and indeterminate"
          caption="Show partial selection clearly and let one control update a related set."
          code={getExampleCode(component.slug, 'Select all and indeterminate')}
        >
          <SelectAllCheckboxes />
        </DemoPanel>
        <DemoPanel
          title="Checkbox group"
          caption="Collect multiple related choices and summarize the current selection."
          code={getExampleCode(component.slug, 'Checkbox group')}
        >
          <CheckboxGroup />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
