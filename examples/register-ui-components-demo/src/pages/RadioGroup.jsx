import { useState } from 'react';

function RadioGroup({ label, options, value, onChange, name, orientation = 'vertical' }) {
  return (
    <fieldset className={`demo-radio-group demo-radio-group-${orientation}`}>
      <legend className="demo-radio-group-legend">{label}</legend>
      {options.map((option) => (
        <label className="demo-radio-group-option" key={option.value}>
          <input
            className="demo-radio-group-input"
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            disabled={option.disabled}
            onChange={(event) => onChange(event.target.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </fieldset>
  );
}

export default function RadioGroupDemo() {
  const [selected, setSelected] = useState('starter');
  const [density, setDensity] = useState('comfortable');
  return (
    <div className="demo-col">
      <RadioGroup
        label="Choose a plan"
        name="plan"
        value={selected}
        onChange={setSelected}
        options={[
          { label: 'Starter', value: 'starter' },
          { label: 'Team', value: 'team' },
          { label: 'Enterprise', value: 'enterprise', disabled: true },
        ]}
      />
      <RadioGroup
        label="Layout density"
        name="density"
        orientation="horizontal"
        value={density}
        onChange={setDensity}
        options={[
          { label: 'Comfortable', value: 'comfortable' },
          { label: 'Compact', value: 'compact' },
        ]}
      />
    </div>
  );
}
