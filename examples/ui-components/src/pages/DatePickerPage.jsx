import { DatePicker } from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('date-picker');
const USAGE_CODE = `import { useState } from 'react';
import { DatePicker } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/date-picker/styles';

function Example() {
  const [date, setDate] = useState('2026-10-17');

  return (
    <DatePicker
      label="Due date"
      value={date}
      onChange={setDate}
      dateFormat="dd/MM/yyyy"
    />
  );
}`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/DatePickerPage.jsx',
    'Dedicated page with custom formatting and optional month/year dropdowns.',
  ],
  [
    'Component',
    'packages/ui-components/src/date-picker/DatePicker.jsx',
    'Accessible calendar date picker with controlled and uncontrolled values.',
  ],
  [
    'Styles',
    'packages/ui-components/src/date-picker/date-picker.styles.js',
    'Tailmantic trigger, calendar, and popover styles bundled with the package.',
  ],
];

function ControlledDatePicker() {
  const [date, setDate] = useState('2026-10-17');

  return (
    <div className="preview-stack">
      <DatePicker
        label="Due date"
        value={date}
        onChange={setDate}
        dateFormat="dd/MM/yyyy"
        helperText="Choose a date for this task."
      />
      <span className="preview-note" role="status" aria-live="polite">
        Selected date: {date}
      </span>
    </div>
  );
}

function BoundedDatePicker() {
  const [date, setDate] = useState('2026-10-17');

  return (
    <div className="preview-stack">
      <DatePicker
        label="Planning window"
        value={date}
        onChange={setDate}
        dateFormat="dd/MM/yyyy"
        showMonthYearSelect
        minDate="2025-01-01"
        maxDate="2028-12-31"
        helperText="Select any date from 2025 through 2028."
      />
      <span className="preview-note" role="status" aria-live="polite">
        Selected date: {date}
      </span>
    </div>
  );
}

const EXAMPLES = [
  {
    id: 'date-picker',
    title: 'Controlled date',
    caption: 'Select a date and keep the value in application state.',
    component: ControlledDatePicker,
  },
  {
    id: 'date-picker-bounds',
    title: 'Date range',
    caption: 'Restrict selectable dates and navigate with the keyboard.',
    component: BoundedDatePicker,
  },
];

export default function DatePickerPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Set dateFormat to choose how the selected date is displayed."
      usageDescription="DatePicker supports custom date formats, optional month/year dropdowns, minimum and maximum dates, and keyboard-accessible calendar navigation."
    >
      <div className="component-showcase component-showcase-date-picker">
        {EXAMPLES.map(({ id, title, caption, component: Example }) => (
          <DemoPanel
            key={id}
            title={title}
            caption={caption}
            code={getExampleCode(component.slug, title)}
          >
            <Example />
          </DemoPanel>
        ))}
      </div>
    </ComponentPageLayout>
  );
}
