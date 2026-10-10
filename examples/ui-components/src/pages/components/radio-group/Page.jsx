import { useState } from 'react';
import { RadioGroup } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import DemoPanel from '../../../components/DemoPanel.jsx';
import { getStyleSource } from '../../../lib/useStyleSource.js';

const component = getComponentBySlug('radio-group');

const DEMOS = {
  'radio-group': {
    title: 'Single selection',
    caption: 'Present related options with clear supporting details and one selected value.',
  },
  'radio-group-row': {
    title: 'Horizontal layout',
    caption: 'Arrange short choices in a row when there is enough room.',
  },
  'radio-group-disabled': {
    title: 'Disabled option',
    caption: 'Communicate when an option is unavailable without making it selectable.',
  },
};

const PLANS = [
  { id: 'starter', label: 'Starter', description: 'For personal projects' },
  { id: 'team', label: 'Team', description: 'For growing teams' },
  { id: 'business', label: 'Business', description: 'For larger organizations' },
];

const DENSITIES = [
  { id: 'compact', label: 'Compact' },
  { id: 'comfortable', label: 'Comfortable' },
  { id: 'spacious', label: 'Spacious' },
];

function RadioGroupDemoContent({ demoId }) {
  const isRow = demoId === 'radio-group-row';
  const isDisabled = demoId === 'radio-group-disabled';
  const options = isRow ? DENSITIES : PLANS;
  const [selected, setSelected] = useState(isRow ? 'comfortable' : 'team');
  const disabledOption = isDisabled ? 'business' : '';
  const legend = isRow
    ? 'Interface density'
    : isDisabled
      ? 'Choose a workspace plan'
      : 'Select a plan';

  return (
    <div className="preview-stack">
      <RadioGroup
        className="radio-preview-group"
        legend={legend}
        orientation={isRow ? 'horizontal' : 'vertical'}
        options={options.map(({ id, ...option }) => ({
          ...option,
          value: id,
          disabled: id === disabledOption,
        }))}
        value={selected}
        onChange={(event) => setSelected(event.target.value)}
      />
      <span className="preview-note" role="status" aria-live="polite">
        {selected
          ? `${options.find((option) => option.id === selected)?.label} selected.`
          : 'Choose an option.'}
      </span>
    </div>
  );
}

export default function RadioGroupPage() {
  const styleSource = getStyleSource('radio-group');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <RadioGroupDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
