import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './toggle-button.styles.js';

const ToggleButton = forwardRef(function ToggleButton(
  { className, selected = false, size = 'medium', type = 'button', ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      className={cx(
        'tm-toggle-button',
        size === 'small' && 'tm-toggle-button-small',
        selected && 'tm-toggle-button-selected',
        className,
      )}
      type={type}
      aria-pressed={selected}
    />
  );
});

export default ToggleButton;
