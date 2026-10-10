import { useState } from 'react';
import { cx } from 'tailmantic';

function Checkbox({ label, indeterminate = false, ...props }) {
  const [internalChecked, setInternalChecked] = useState(props.defaultChecked ?? false);
  const checked = props.checked ?? internalChecked;
  return (
    <label className="demo-checkbox">
      <input
        {...props}
        className="demo-checkbox-input"
        type="checkbox"
        checked={props.checked}
        onChange={(event) => {
          if (props.checked === undefined) setInternalChecked(event.target.checked);
          props.onChange?.(event);
        }}
        ref={(node) => {
          if (node) node.indeterminate = indeterminate;
        }}
      />
      <span
        className={cx(
          'demo-checkbox-box',
          checked && 'demo-checkbox-box-checked',
          indeterminate && 'demo-checkbox-box-indeterminate',
        )}
        aria-hidden="true"
      >
        {indeterminate ? '−' : checked ? '✓' : ''}
      </span>
      <span>{label}</span>
    </label>
  );
}

export default function CheckboxDemo() {
  const [checked, setChecked] = useState(true);
  const [selected, setSelected] = useState(['Email']);
  const groupOptions = ['Email', 'Push', 'Weekly digest'];
  const allSelected = selected.length === groupOptions.length;
  return (
    <div className="demo-col">
      <Checkbox
        label="Enable notifications"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
      />
      <Checkbox label="Required setting" defaultChecked disabled />
      <fieldset className="demo-checkbox-group">
        <legend>Notification channels</legend>
        <Checkbox
          label="Select all channels"
          checked={allSelected}
          indeterminate={selected.length > 0 && !allSelected}
          onChange={(event) => setSelected(event.target.checked ? groupOptions : [])}
        />
        {groupOptions.map((option) => (
          <Checkbox
            key={option}
            label={option}
            checked={selected.includes(option)}
            onChange={(event) =>
              setSelected((current) =>
                event.target.checked
                  ? [...current, option]
                  : current.filter((item) => item !== option),
              )
            }
          />
        ))}
      </fieldset>
    </div>
  );
}
