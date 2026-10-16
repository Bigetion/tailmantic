import { Select } from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('select');
const OPTIONS = [
  { value: 'engineering', label: 'Engineering', detail: 'Product and platform teams' },
  { value: 'design', label: 'Design', detail: 'Research and user experience' },
  { value: 'product', label: 'Product', detail: 'Planning and delivery' },
  { value: 'support', label: 'Customer support', detail: 'Customer operations' },
  { value: 'research', label: 'Research', detail: 'Not currently available', disabled: true },
];
const USAGE_CODE = `import { Select } from '@tailmantic/ui-components';

<Select
  label="Department"
  options={options}
  value={department}
  onValueChange={setDepartment}
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/SelectPage.jsx',
    'Dedicated page with single and multiple Select examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/select/Select.jsx',
    'Accessible custom combobox with controlled and uncontrolled single or multiple selection.',
  ],
  [
    'Styles',
    'packages/ui-components/src/select/select.styles.js',
    'Tailmantic styles bundled with the Select package.',
  ],
];
const EXAMPLES = [
  {
    id: 'select',
    title: 'Single selection',
    caption: 'Choose one available option with pointer or keyboard input.',
  },
  {
    id: 'select-multiple',
    title: 'Multiple selection',
    caption: 'Choose several related options and remove selections individually.',
  },
];

function SingleSelection() {
  const [department, setDepartment] = useState('engineering');

  return (
    <div className="preview-stack">
      <Select
        label="Department"
        options={OPTIONS}
        value={department}
        onValueChange={setDepartment}
        helperText="Choose the team you work with."
      />
      <span className="preview-note" role="status" aria-live="polite">
        {OPTIONS.find((option) => option.value === department)?.label ?? 'No department'} selected.
      </span>
    </div>
  );
}

function MultipleSelection() {
  const [teams, setTeams] = useState(['design', 'product']);
  const selectedLabels = teams
    .map((value) => OPTIONS.find((option) => option.value === value)?.label)
    .filter(Boolean);

  return (
    <div className="preview-stack">
      <Select
        label="Project teams"
        options={OPTIONS}
        multiple
        selectedValues={teams}
        onSelectedValuesChange={setTeams}
        helperText="Choose one or more teams."
      />
      <span className="preview-note" role="status" aria-live="polite">
        {selectedLabels.length ? selectedLabels.join(', ') : 'No teams'} selected.
      </span>
    </div>
  );
}

export default function SelectPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import Select from the package and provide labeled options with a selected value."
      usageDescription="The package component supports accessible keyboard interaction, disabled options, single or multiple selection, removable chips, and Tailmantic styles."
    >
      <div className="component-showcase component-showcase-select">
        {EXAMPLES.map(({ id, title, caption }) => {
          const Example = id === 'select' ? SingleSelection : MultipleSelection;
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
