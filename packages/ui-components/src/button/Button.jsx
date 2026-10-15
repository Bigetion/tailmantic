import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './button.styles.js';

const Button = forwardRef(function Button(
  { children, className, color = 'primary', size = 'medium', variant = 'contained', ...props },
  ref,
) {
  return (
    <button
      {...props}
      className={cx(
        'tm-button',
        `tm-button-${variant}`,
        size !== 'medium' && `tm-button-${size}`,
        color !== 'primary' && `tm-button-color-${color}`,
        className,
      )}
      ref={ref}
    >
      {children}
    </button>
  );
});

export default Button;
