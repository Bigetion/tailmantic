import { Check } from 'lucide-react';
import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import { cx } from 'tailmantic';

const Checkbox = forwardRef(function Checkbox(
  {
    checked,
    className,
    defaultChecked = false,
    description,
    disabled = false,
    indeterminate = false,
    inputClassName,
    label,
    onChange,
    ...inputProps
  },
  forwardedRef,
) {
  const descriptionId = useId();
  const labelId = useId();
  const inputRef = useRef(null);
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked ?? internalChecked;

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  function setInputRef(node) {
    inputRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  function handleChange(event) {
    if (checked === undefined) setInternalChecked(event.currentTarget.checked);
    onChange?.(event);
  }

  const describedBy = [inputProps['aria-describedby'], description && descriptionId]
    .filter(Boolean)
    .join(' ');

  return (
    <label className={cx('ui-checkbox', disabled && 'ui-checkbox-disabled', className)}>
      <span className="ui-checkbox-control">
        <input
          {...inputProps}
          ref={setInputRef}
          className={cx('ui-checkbox-input', inputClassName)}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          aria-labelledby={labelId}
          aria-checked={indeterminate ? 'mixed' : isChecked}
          aria-describedby={describedBy || undefined}
          onChange={handleChange}
        />
        <span
          className={cx(
            'ui-checkbox-indicator',
            isChecked && 'ui-checkbox-checked',
            indeterminate && 'ui-checkbox-indeterminate',
          )}
          aria-hidden="true"
        >
          {indeterminate ? (
            <span className="ui-checkbox-dash" />
          ) : isChecked ? (
            <Check size={13} strokeWidth={2.5} aria-hidden="true" />
          ) : null}
        </span>
      </span>
      <span className="ui-checkbox-copy">
        <span className="ui-checkbox-label" id={labelId}>
          {label}
        </span>
        {description && (
          <span className="ui-checkbox-description" id={descriptionId}>
            {description}
          </span>
        )}
      </span>
    </label>
  );
});

export default Checkbox;
