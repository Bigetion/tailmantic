import { cx } from 'tailmantic';

export function DemoButton({
  children,
  className,
  color = 'primary',
  disabled = false,
  size = 'medium',
  type = 'button',
  variant = 'contained',
  ...props
}) {
  return (
    <button
      {...props}
      className={cx(
        'ui-button',
        `ui-button-${variant}`,
        size !== 'medium' && `ui-button-${size}`,
        color !== 'primary' && `ui-button-color-${color}`,
        className,
      )}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export const Button = DemoButton;

export default Button;
