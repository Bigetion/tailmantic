import { forwardRef } from 'react';
import { cx } from 'tailmantic';

const FloatingActionButton = forwardRef(function FloatingActionButton(
  {
    children,
    className,
    label,
    size = 'medium',
    variant = 'primary',
    type = 'button',
    'aria-label': ariaLabel,
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      aria-label={ariaLabel ?? label}
      className={cx(
        'ui-floating-action-button',
        `ui-floating-action-button-${variant}`,
        size !== 'medium' && `ui-floating-action-button-${size}`,
        className,
      )}
    >
      {children}
    </button>
  );
});

export default FloatingActionButton;
