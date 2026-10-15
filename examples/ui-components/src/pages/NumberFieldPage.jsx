import { NumberField } from '@tailmantic/ui-components';
import { useId, useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('number-field');
const NUMBER_FIELD_STYLES_NOTE =
  'Base component styles are provided by @tailmantic/ui-components/number-field/styles.';
const USAGE_CODE = `import { NumberField } from '@tailmantic/ui-components';

<label htmlFor="quantity">Quantity</label>
<NumberField
  id="quantity"
  min={0}
  max={20}
  value={quantity}
  onValueChange={setQuantity}
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/NumberFieldPage.jsx',
    'Self-contained page with interactive Number Field examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/number-field/NumberField.jsx',
    'Reusable numeric input with increment/decrement controls and unit support.',
  ],
  [
    'Styles',
    'packages/ui-components/src/number-field/number-field.styles.js',
    'Tailmantic styles bundled with the Number Field package.',
  ],
];

const DEMOS = {
  'number-field': {
    label: 'Quantity',
    initialValue: '3',
    min: 0,
    max: 20,
    title: 'Stepped quantity',
    caption: 'Adjust a whole-number value with keyboard input or increment controls.',
  },
  'number-field-steps': {
    label: 'Amount',
    initialValue: '12.5',
    step: 0.25,
    min: 0,
    max: 25,
    unit: '$',
    unitPosition: 'start',
    title: 'Custom step size',
    caption: 'Use fractional steps when a value needs more precise adjustments.',
  },
  'number-field-limits': {
    label: 'Items',
    initialValue: '10',
    min: 1,
    max: 10,
    unit: 'items',
    title: 'Minimum and maximum',
    caption: 'Keep changes inside an allowed range and disable controls at their limits.',
  },
};

function NumberFieldExample({ demo }) {
  const inputId = useId();
  const step = demo.step ?? 1;
  const [value, setValue] = useState(demo.initialValue);
  const numericValue = value === '' ? NaN : Number(value);
  const stepPosition = (numericValue - (demo.min ?? 0)) / step;
  const stepMismatch =
    Number.isFinite(numericValue) && Math.abs(stepPosition - Math.round(stepPosition)) > 1e-8;
  const invalid =
    value !== '' &&
    (!Number.isFinite(numericValue) ||
      (demo.min !== undefined && numericValue < demo.min) ||
      (demo.max !== undefined && numericValue > demo.max) ||
      stepMismatch);

  return (
    <div className="preview-stack">
      <label className="tm-label" htmlFor={inputId}>
        {demo.label}
      </label>
      <NumberField
        id={inputId}
        aria-label={demo.label}
        aria-invalid={invalid}
        className={invalid ? 'tm-number-field-invalid' : undefined}
        value={value}
        step={step}
        min={demo.min}
        max={demo.max}
        unit={demo.unit}
        unitPosition={demo.unitPosition}
        decrementLabel={`Decrease ${demo.label}`}
        incrementLabel={`Increase ${demo.label}`}
        onValueChange={setValue}
      />
      {invalid && (
        <span className="tm-number-field-error" role="status">
          {stepMismatch
            ? `Use increments of ${step}.`
            : `Enter a value between ${demo.min ?? '−∞'} and ${demo.max ?? '∞'}.`}
        </span>
      )}
      <span className="preview-note" role="status" aria-live="polite">
        {value === ''
          ? 'Enter a number.'
          : `${demo.label}: ${demo.unitPosition === 'start' ? (demo.unit ?? '') : ''}${value}${demo.unit && demo.unitPosition !== 'start' ? ` ${demo.unit}` : ''}`}
      </span>
    </div>
  );
}

export default function NumberFieldPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import NumberField from the package, then control its value and numeric limits."
      usageDescription="The package component provides the numeric input, increment controls, unit support, and Tailmantic styles."
    >
      <div className="component-showcase component-showcase-number-field">
        {component.demos.map((demoId) => {
          const demo = DEMOS[demoId];
          return (
            <DemoPanel
              key={demoId}
              title={demo.title}
              caption={demo.caption}
              code={NUMBER_FIELD_STYLES_NOTE}
            >
              <NumberFieldExample demo={demo} />
            </DemoPanel>
          );
        })}
      </div>
    </ComponentPageLayout>
  );
}
