import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './button.styles.js';

function LoadingIndicator({ indicator }) {
  return indicator ?? (
    <svg
      className="rgi-button-spinner"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity=".25" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

const Button = forwardRef(function Button(
  {
    children,
    className,
    color = 'primary',
    iconOnly = false,
    loading = false,
    loadingIndicator,
    size = 'medium',
    uppercase = true,
    variant = 'contained',
    disabled = false,
    'aria-busy': ariaBusy,
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      aria-busy={loading || ariaBusy || undefined}
      disabled={disabled || loading}
      className={cx(
        'rgi-button',
        `rgi-button-${variant}`,
        size !== 'medium' && `rgi-button-${size}`,
        color !== 'primary' && `rgi-button-color-${color}`,
        !uppercase && 'rgi-button-normal-case',
        iconOnly && 'rgi-button-icon-only',
        className,
      )}
      ref={ref}
    >
      {loading && <LoadingIndicator indicator={loadingIndicator} />}
      {children}
    </button>
  );
});

export default Button;
