import { Check } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { cx } from 'tailmantic';

const PREFERENCES = [
  {
    id: 'product',
    label: 'Product updates',
    description: 'News about useful features and releases.',
  },
  {
    id: 'guides',
    label: 'Tips and guides',
    description: 'Occasional advice to get more out of the product.',
  },
  {
    id: 'events',
    label: 'Events and webinars',
    description: 'Invitations to product sessions and community events.',
  },
];

function Checkbox({
  checked,
  className,
  defaultChecked = false,
  description,
  disabled = false,
  indeterminate = false,
  label,
  onChange,
}) {
  const descriptionId = useId();
  const inputRef = useRef(null);
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked ?? internalChecked;

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  function handleChange(event) {
    if (checked === undefined) setInternalChecked(event.currentTarget.checked);
    onChange?.(event);
  }

  return (
    <label className={cx('demo-checkbox', disabled && 'demo-checkbox-disabled', className)}>
      <span className="demo-checkbox-control">
        <input
          ref={inputRef}
          className="demo-checkbox-input"
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          aria-label={label}
          aria-describedby={description ? descriptionId : undefined}
          aria-checked={indeterminate ? 'mixed' : isChecked}
          onChange={handleChange}
        />
        <span
          className={cx(
            'demo-checkbox-indicator',
            isChecked && 'demo-checkbox-checked',
            indeterminate && 'demo-checkbox-indeterminate',
          )}
          aria-hidden="true"
        >
          {indeterminate ? (
            <span className="demo-checkbox-dash" />
          ) : isChecked ? (
            <Check size={13} strokeWidth={2.5} aria-hidden="true" />
          ) : null}
        </span>
      </span>
      <span className="demo-checkbox-copy">
        <span className="demo-checkbox-label">{label}</span>
        {description && (
          <span className="demo-checkbox-description" id={descriptionId}>
            {description}
          </span>
        )}
      </span>
    </label>
  );
}

export default function CheckboxDemo() {
  const [basicChecked, setBasicChecked] = useState(true);
  const [newsletterChecked, setNewsletterChecked] = useState(true);
  const [selected, setSelected] = useState(['product']);
  const selectedCount = selected.length;
  const allSelected = selectedCount === PREFERENCES.length;
  const partlySelected = selectedCount > 0 && !allSelected;

  function togglePreference(id) {
    setSelected((current) =>
      current.includes(id) ? current.filter((value) => value !== id) : [...current, id],
    );
  }

  function toggleAll() {
    setSelected(allSelected ? [] : PREFERENCES.map(({ id }) => id));
  }

  return (
    <div className="demo-stage">
      <section className="demo-section">
        <span className="demo-section-title">Checkbox states</span>
        <div className="demo-checkbox-list">
          <Checkbox
            label="Send me product updates"
            description="A short email when something useful ships."
            checked={basicChecked}
            onChange={(event) => setBasicChecked(event.currentTarget.checked)}
          />
          <Checkbox
            label="Subscribe to the monthly newsletter"
            description="A monthly round-up of product news and tips."
            checked={newsletterChecked}
            onChange={(event) => setNewsletterChecked(event.currentTarget.checked)}
          />
          <Checkbox
            label="SMS notifications"
            description="Unavailable for this workspace."
            disabled
          />
        </div>
        <span className="demo-note" role="status" aria-live="polite">
          {basicChecked ? 'Product updates enabled.' : 'Product updates disabled.'}
        </span>
      </section>

      <section className="demo-section">
        <span className="demo-section-title">Select all and indeterminate</span>
        <div className="demo-checkbox-panel">
          <div className="demo-checkbox-panel-heading">
            <div>
              <strong>Notification preferences</strong>
              <span>Choose the updates you want to receive.</span>
            </div>
            <span className="demo-checkbox-count">
              {selectedCount} of {PREFERENCES.length}
            </span>
          </div>
          <fieldset className="demo-checkbox-list">
            <legend className="sr-only">Notification preferences</legend>
            <Checkbox
              label="Select all preferences"
              checked={allSelected}
              indeterminate={partlySelected}
              onChange={toggleAll}
            />
            <div className="demo-checkbox-divider" aria-hidden="true" />
            {PREFERENCES.map((preference) => (
              <Checkbox
                key={preference.id}
                label={preference.label}
                description={preference.description}
                checked={selected.includes(preference.id)}
                onChange={() => togglePreference(preference.id)}
              />
            ))}
          </fieldset>
          <span className="demo-note" role="status" aria-live="polite">
            {selectedCount === 0
              ? 'No preferences selected.'
              : `${selectedCount} ${selectedCount === 1 ? 'preference' : 'preferences'} selected.`}
          </span>
        </div>
      </section>

      <section className="demo-section">
        <span className="demo-section-title">Checkbox group</span>
        <fieldset className="demo-checkbox-fieldset">
          <legend>Choose your interests</legend>
          <span className="demo-checkbox-description">
            Select all topics you would like to hear about.
          </span>
          <div className="demo-checkbox-list">
            {PREFERENCES.map((preference) => (
              <Checkbox
                key={preference.id}
                label={preference.label}
                description={preference.description}
                checked={selected.includes(preference.id)}
                onChange={() => togglePreference(preference.id)}
              />
            ))}
          </div>
        </fieldset>
        <span className="demo-note" role="status" aria-live="polite">
          {selectedCount === 0
            ? 'Nothing selected yet.'
            : `Selected: ${PREFERENCES.filter(({ id }) => selected.includes(id))
                .map(({ label }) => label)
                .join(', ')}`}
        </span>
      </section>
    </div>
  );
}
