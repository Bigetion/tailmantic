import { forwardRef, useId } from 'react';
import { cx } from 'tailmantic';
import './text-field.styles.js';

const TextField = forwardRef(function TextField(
  {
    'aria-describedby': describedBy,
    'aria-invalid': ariaInvalid,
    className,
    error = false,
    errorText,
    endAdornment,
    helperText,
    inputClassName,
    label,
    startAdornment,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const id = props.id ?? generatedId;
  const message = errorText ?? helperText;
  const messageId = `${id}-message`;
  const description =
    [describedBy, message != null ? messageId : undefined].filter(Boolean).join(' ') || undefined;
  const hasError = error || errorText != null;
  const hasStartAdornment = startAdornment != null;
  const hasEndAdornment = endAdornment != null;

  const input = (
    <input
      {...props}
      ref={ref}
      id={id}
      className={cx(
        'rgi-text-field-control',
        hasError && 'rgi-text-field-error',
        hasStartAdornment && 'rgi-text-field-control-leading',
        hasEndAdornment && 'rgi-text-field-control-trailing',
        inputClassName,
      )}
      aria-describedby={description}
      aria-invalid={hasError || ariaInvalid || undefined}
    />
  );

  return (
    <div className={cx('rgi-text-field', className)}>
      {label != null && (
        <label className="rgi-text-field-label" htmlFor={id}>
          {label}
        </label>
      )}
      {hasStartAdornment || hasEndAdornment ? (
        <div className="rgi-text-field-shell">
          {hasStartAdornment && (
            <span className="rgi-text-field-adornment-start">{startAdornment}</span>
          )}
          {input}
          {hasEndAdornment && (
            <span className="rgi-text-field-adornment-end">{endAdornment}</span>
          )}
        </div>
      ) : (
        input
      )}
      {message != null && (
        <span
          className={cx('rgi-text-field-message', hasError && 'rgi-text-field-message-error')}
          id={messageId}
        >
          {message}
        </span>
      )}
    </div>
  );
});

export default TextField;
