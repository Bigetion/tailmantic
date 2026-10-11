import { useId, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { cx } from 'tailmantic';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('number-field');

const DEMOS = {
  'number-field': {
    title: 'Stepped quantity',
    caption: 'Adjust a whole-number value with keyboard input or increment controls.',
  },
  'number-field-steps': {
    title: 'Custom step size',
    caption: 'Use fractional steps when a value needs more precise adjustments.',
  },
  'number-field-limits': {
    title: 'Minimum and maximum',
    caption: 'Keep changes inside an allowed range and disable controls at its limits.',
  },
};

function clamp(value, min, max) {
  return Math.min(max ?? Infinity, Math.max(min ?? -Infinity, value));
}

function roundToStep(value, step) {
  const precision = Math.min(8, (String(step).split('.')[1] ?? '').length);
  return Number(value.toFixed(precision));
}

function NumberFieldControl({ id, label, value, onChange, step = 1, min, max, unit, unitPosition = 'end' }) {
  const numericValue = value === '' ? NaN : Number(value);
  const atMin = Number.isFinite(numericValue) && min !== undefined && numericValue <= min;
  const atMax = Number.isFinite(numericValue) && max !== undefined && numericValue >= max;
  const stepPosition = (numericValue - (min ?? 0)) / step;
  const stepMismatch = Number.isFinite(numericValue)
    && Math.abs(stepPosition - Math.round(stepPosition)) > 1e-8;
  const invalid = value !== '' && (
    !Number.isFinite(numericValue)
    || (min !== undefined && numericValue < min)
    || (max !== undefined && numericValue > max)
    || stepMismatch
  );

  function changeBy(direction) {
    const current = Number.isFinite(numericValue) ? numericValue : min ?? 0;
    const next = clamp(roundToStep(current + step * direction, step), min, max);
    onChange(String(next));
  }

  return (
    <div className="preview-stack">
      <label className="rgi-label" htmlFor={id}>{label}</label>
      <div className={cx('number-field', invalid && 'number-field-invalid')}>
        {unit && unitPosition === 'start' && <span className="number-field-unit">{unit}</span>}
        <button
          className={cx('number-field-button', 'number-field-decrement')}
          type="button"
          aria-label={`Decrease ${label}`}
          aria-controls={id}
          disabled={atMin}
          onClick={() => changeBy(-1)}
        >
          <Minus size={14} />
        </button>
        <input
          className="number-field-input"
          id={id}
          type="number"
          inputMode="decimal"
          value={value}
          step={step}
          min={min}
          max={max}
          aria-label={label}
          aria-invalid={invalid}
          onChange={(event) => onChange(event.target.value)}
        />
        <button
          className={cx('number-field-button', 'number-field-increment')}
          type="button"
          aria-label={`Increase ${label}`}
          aria-controls={id}
          disabled={atMax}
          onClick={() => changeBy(1)}
        >
          <Plus size={14} />
        </button>
        {unit && unitPosition === 'end' && <span className="number-field-unit">{unit}</span>}
      </div>
      {invalid && (
        <span className="input-helper" role="status">
          {stepMismatch ? `Use increments of ${step}.` : `Enter a value between ${min ?? '−∞'} and ${max ?? '∞'}.`}
        </span>
      )}
    </div>
  );
}

function NumberFieldDemoContent({ demoId }) {
  const id = useId();
  const isSteps = demoId === 'number-field-steps';
  const isLimits = demoId === 'number-field-limits';
  const [quantity, setQuantity] = useState(isSteps ? '12.5' : isLimits ? '10' : '3');

  const settings = isSteps
    ? { label: 'Amount', step: 0.25, min: 0, max: 25, unit: '$', unitPosition: 'start' }
    : isLimits
      ? { label: 'Items', step: 1, min: 1, max: 10, unit: 'items' }
      : { label: 'Quantity', step: 1, min: 0, max: 20 };

  return (
    <div className="preview-stack">
      <NumberFieldControl
        id={`${id}-input`}
        {...settings}
        value={quantity}
        onChange={setQuantity}
      />
      <span className="preview-note" role="status" aria-live="polite">
        {quantity === ''
          ? 'Enter a number.'
          : `${settings.label}: ${settings.unitPosition === 'start' ? settings.unit ?? '' : ''}${quantity}${settings.unit && settings.unitPosition !== 'start' ? ` ${settings.unit}` : ''}`}
      </span>
    </div>
  );
}

export default function NumberFieldPage() {
  const styleSource = getStyleSource('number-field');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <NumberFieldDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
