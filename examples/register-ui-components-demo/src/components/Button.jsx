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
        'demo-button',
        `demo-button-${variant}`,
        size !== 'medium' && `demo-button-${size}`,
        color !== 'primary' && `demo-button-color-${color}`,
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
