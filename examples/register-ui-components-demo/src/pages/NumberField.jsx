import { Minus, Plus } from 'lucide-react';
import { useId, useState } from 'react';

function NumberFieldControl({
  label,
  initialValue,
  step = 1,
  min,
  max,
  unit,
  unitPosition = 'end',
}) {
  const inputId = useId();
  const [value, setValue] = useState(String(initialValue));
  const numeric = value === '' ? NaN : Number(value);
  const stepPosition = (numeric - (min ?? 0)) / step;
  const stepMismatch =
    Number.isFinite(numeric) && Math.abs(stepPosition - Math.round(stepPosition)) > 1e-8;
  const invalid =
    value !== '' &&
    (!Number.isFinite(numeric) ||
      (min !== undefined && numeric < min) ||
      (max !== undefined && numeric > max) ||
      stepMismatch);
  const atMin = min !== undefined && Number.isFinite(numeric) && numeric <= min;
  const atMax = max !== undefined && Number.isFinite(numeric) && numeric >= max;

  function increment(direction) {
    const base = Number.isFinite(numeric) ? numeric : (min ?? 0);
    const precision = Math.min(8, (String(step).split('.')[1] ?? '').length);
    const next = Number((base + step * direction).toFixed(precision));
    setValue(String(Math.min(max ?? Infinity, Math.max(min ?? -Infinity, next))));
  }

  return (
    <div className="demo-number-field-control">
      <label htmlFor={inputId}>{label}</label>
      <div
        className={invalid ? 'demo-number-field demo-number-field-invalid' : 'demo-number-field'}
      >
        {unit && unitPosition === 'start' && <span>{unit}</span>}
        <button
          type="button"
          aria-label={`Decrease ${label}`}
          aria-controls={inputId}
          disabled={atMin}
          onClick={() => increment(-1)}
        >
          <Minus size={14} />
        </button>
        <input
          id={inputId}
          type="number"
          inputMode="decimal"
          value={value}
          step={step}
          min={min}
          max={max}
          aria-invalid={invalid}
          onChange={(event) => setValue(event.target.value)}
        />
        <button
          type="button"
          aria-label={`Increase ${label}`}
          aria-controls={inputId}
          disabled={atMax}
          onClick={() => increment(1)}
        >
          <Plus size={14} />
        </button>
        {unit && unitPosition === 'end' && <span>{unit}</span>}
      </div>
      {invalid && (
        <span className="demo-number-field-error" role="status">
          {stepMismatch
            ? `Use increments of ${step}.`
            : `Enter a value between ${min ?? '−∞'} and ${max ?? '∞'}.`}
        </span>
      )}
      <span className="demo-note" role="status" aria-live="polite">
        {value === ''
          ? 'Enter a number.'
          : `${label}: ${unitPosition === 'start' ? (unit ?? '') : ''}${value}${unit && unitPosition !== 'start' ? ` ${unit}` : ''}`}
      </span>
    </div>
  );
}

export default function NumberField() {
  return (
    <>
      <section className="demo-section">
        <span className="demo-section-title">Whole number with bounds</span>
        <NumberFieldControl label="Quantity" initialValue={3} min={0} max={20} />
      </section>
      <section className="demo-section">
        <span className="demo-section-title">Decimal step and leading unit</span>
        <NumberFieldControl
          label="Amount"
          initialValue={12.5}
          step={0.25}
          min={0}
          max={25}
          unit="$"
          unitPosition="start"
        />
      </section>
      <section className="demo-section">
        <span className="demo-section-title">Limits and trailing unit</span>
        <NumberFieldControl label="Items" initialValue={10} min={1} max={10} unit="items" />
      </section>
    </>
  );
}
