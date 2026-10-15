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
        'tm-text-field-control',
        hasError && 'tm-text-field-error',
        hasStartAdornment && 'tm-text-field-control-leading',
        hasEndAdornment && 'tm-text-field-control-trailing',
        inputClassName,
      )}
      aria-describedby={description}
      aria-invalid={hasError || ariaInvalid || undefined}
    />
  );

  return (
    <div className={cx('tm-text-field', className)}>
      {label != null && (
        <label className="tm-text-field-label" htmlFor={id}>
          {label}
        </label>
      )}
      {hasStartAdornment || hasEndAdornment ? (
        <div className="tm-text-field-shell">
          {hasStartAdornment && (
            <span className="tm-text-field-adornment-start">{startAdornment}</span>
          )}
          {input}
          {hasEndAdornment && (
            <span className="tm-text-field-adornment-end">{endAdornment}</span>
          )}
        </div>
      ) : (
        input
      )}
      {message != null && (
        <span
          className={cx('tm-text-field-message', hasError && 'tm-text-field-message-error')}
          id={messageId}
        >
          {message}
        </span>
      )}
    </div>
  );
});

export default TextField;
