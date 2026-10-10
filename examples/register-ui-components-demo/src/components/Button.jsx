import { cx } from 'tailmantic';

export function Button({
  children,
  variant = 'contained',
  size = 'medium',
  disabled = false,
  onClick,
}) {
  return (
    <button
      type="button"
      className={cx('demo-button', `demo-button-${variant}`, `demo-button-${size}`)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function ButtonDemo() {
  return (
    <div className="demo-section">
      <span className="demo-section-title">Variants and sizes</span>
      <div className="demo-row">
        <Button>Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
        <Button size="small">Small</Button>
        <Button size="large">Large</Button>
        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
}
