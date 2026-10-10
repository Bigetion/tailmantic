import { useState } from 'react';
import { cx } from 'tailmantic';

function Switch({
  label,
  description,
  color = 'primary',
  defaultChecked = false,
  disabled = false,
  onChange,
}) {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <label className={cx('demo-switch', `demo-switch-${color}`, checked && 'demo-switch-checked')}>
      <input
        className="demo-switch-input"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => {
          setChecked(event.target.checked);
          onChange?.(event);
        }}
      />
      <span className="demo-switch-track" aria-hidden="true">
        <span className="demo-switch-thumb" />
      </span>
      <span className="demo-switch-copy">
        <span>{label}</span>
        {description && <small>{description}</small>}
      </span>
    </label>
  );
}

export default function SwitchDemo() {
  return (
    <div className="demo-col">
      <Switch
        label="Email notifications"
        description="Receive updates about your account."
        defaultChecked
      />
      <Switch
        label="Weekly summary"
        description="A digest of activity every Monday."
        color="success"
      />
      <Switch
        label="Delete workspace"
        description="Destructive action warning example."
        color="danger"
      />
      <Switch label="Unavailable option" disabled />
    </div>
  );
}
