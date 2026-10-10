import { Activity, ArrowRight, Check, Plus, Trash2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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

export default function ButtonDemo() {
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function saveChanges() {
    setLoading(true);
    setSaved(false);
    timerRef.current = window.setTimeout(() => {
      setLoading(false);
      setSaved(true);
    }, 900);
  }

  return (
    <div className="demo-stage">
      <section className="demo-button-example-section">
        <span className="demo-button-example-label">Visual variants</span>
        <div className="demo-row">
          <DemoButton>Contained</DemoButton>
          <DemoButton variant="outlined">Outlined</DemoButton>
          <DemoButton variant="text">Text button</DemoButton>
        </div>
      </section>

      <section className="demo-button-example-section">
        <span className="demo-button-example-label">Sizes and semantic colors</span>
        <div className="demo-row">
          <DemoButton variant="text" size="small">
            Small
          </DemoButton>
          <DemoButton variant="outlined">Medium</DemoButton>
          <DemoButton size="large">Large action</DemoButton>
          <DemoButton color="success">
            <Check size={14} aria-hidden="true" />
            Success
          </DemoButton>
          <DemoButton color="warning">Warning</DemoButton>
          <DemoButton color="danger">Delete</DemoButton>
        </div>
        <span className="demo-note">
          Use one consistent size in a related group, and reserve semantic colors for actions where
          intent matters.
        </span>
      </section>

      <section className="demo-button-example-section">
        <span className="demo-button-example-label">Icons and icon-only actions</span>
        <div className="demo-row">
          <DemoButton>
            <Plus size={15} aria-hidden="true" />
            Create project
          </DemoButton>
          <DemoButton variant="outlined">
            Continue
            <ArrowRight size={15} aria-hidden="true" />
          </DemoButton>
          <DemoButton className="demo-button-icon-only" variant="outlined" aria-label="Delete item">
            <Trash2 size={16} aria-hidden="true" />
          </DemoButton>
          <DemoButton disabled>Disabled</DemoButton>
        </div>
        <span className="demo-note">Icon-only buttons need an accessible label.</span>
      </section>

      <section className="demo-button-example-section">
        <span className="demo-button-example-label">Async action state</span>
        <div className="demo-row">
          <DemoButton disabled={loading} aria-busy={loading} onClick={saveChanges}>
            {loading ? (
              <Activity className="demo-button-spinner" size={14} aria-hidden="true" />
            ) : (
              <Check size={14} aria-hidden="true" />
            )}
            {loading ? 'Saving changes...' : saved ? 'Saved' : 'Save changes'}
          </DemoButton>
          <span className="demo-button-example-status" role="status" aria-live="polite">
            {loading
              ? 'Please wait while your changes are saved.'
              : saved
                ? 'Your changes are saved.'
                : 'Click to preview a pending action.'}
          </span>
        </div>
      </section>
    </div>
  );
}
