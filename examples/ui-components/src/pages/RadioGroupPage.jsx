import { RadioGroup } from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('radio-group');
const RADIO_GROUP_STYLES_NOTE =
  'Base component styles are provided by @tailmantic/ui-components/radio-group/styles.';
const PLANS = [
  { value: 'starter', label: 'Starter', description: 'For personal projects' },
  { value: 'team', label: 'Team', description: 'For growing teams' },
  { value: 'business', label: 'Business', description: 'For larger organizations' },
];
const DENSITIES = [
  { value: 'compact', label: 'Compact' },
  { value: 'comfortable', label: 'Comfortable' },
  { value: 'spacious', label: 'Spacious' },
];
const USAGE_CODE = `import { RadioGroup } from '@tailmantic/ui-components';

<RadioGroup
  legend="Select a plan"
  options={plans}
  value={selectedPlan}
  onChange={(event) => setSelectedPlan(event.target.value)}
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/RadioGroupPage.jsx',
    'Self-contained page with interactive Radio Group examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/radio-group/RadioGroup.jsx',
    'Accessible native radio options with controlled and uncontrolled state.',
  ],
  [
    'Styles',
    'packages/ui-components/src/radio-group/radio-group.styles.js',
    'Tailmantic styles bundled with the Radio Group package.',
  ],
];

function PlanSelection() {
  const [selected, setSelected] = useState('team');

  return (
    <div className="preview-stack">
      <RadioGroup
        legend="Select a plan"
        options={PLANS}
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      />
      <span className="preview-note" role="status" aria-live="polite">
        {PLANS.find((plan) => plan.value === selected)?.label} selected.
      </span>
    </div>
  );
}

function HorizontalDensity() {
  const [selected, setSelected] = useState('comfortable');

  return (
    <div className="preview-stack">
      <RadioGroup
        legend="Interface density"
        orientation="horizontal"
        options={DENSITIES}
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      />
      <span className="preview-note" role="status" aria-live="polite">
        {DENSITIES.find((density) => density.value === selected)?.label} selected.
      </span>
    </div>
  );
}

function DisabledOption() {
  const [selected, setSelected] = useState('starter');
  const options = PLANS.map((plan) => ({
    ...plan,
    disabled: plan.value === 'business',
  }));

  return (
    <div className="preview-stack">
      <RadioGroup
        legend="Choose a workspace plan"
        options={options}
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      />
      <span className="preview-note" role="status" aria-live="polite">
        {PLANS.find((plan) => plan.value === selected)?.label} selected. Business is unavailable.
      </span>
    </div>
  );
}

const EXAMPLES = [
  {
    id: 'radio-group',
    title: 'Single selection',
    caption: 'Present related options with clear supporting details and one selected value.',
    Component: PlanSelection,
  },
  {
    id: 'radio-group-row',
    title: 'Horizontal layout',
    caption: 'Arrange short choices in a row when there is enough room.',
    Component: HorizontalDensity,
  },
  {
    id: 'radio-group-disabled',
    title: 'Disabled option',
    caption: 'Communicate when an option is unavailable without making it selectable.',
    Component: DisabledOption,
  },
];

export default function RadioGroupPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import RadioGroup from the package and provide labeled options with a selected value."
      usageDescription="The package component provides native radio semantics, orientation, disabled options, and Tailmantic styles."
    >
      <div className="component-showcase component-showcase-radio-group">
        {EXAMPLES.map(({ id, title, caption, Component }) => (
          <DemoPanel key={id} title={title} caption={caption} code={RADIO_GROUP_STYLES_NOTE}>
            <Component />
          </DemoPanel>
        ))}
      </div>
    </ComponentPageLayout>
  );
}
