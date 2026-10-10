import { forwardRef } from 'react';
import { cx } from 'tailmantic';

const IconButton = forwardRef(function IconButton(
  {
    children,
    className,
    color = 'primary',
    icon: Icon,
    selected = false,
    size = 19,
    strokeWidth = 1.8,
    type = 'button',
    ...props
  },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      className={cx('ui-icon-button', selected && 'ui-icon-button-selected', className)}
      type={type}
      aria-pressed={selected}
    >
      <span className={cx('ui-icon-button-symbol', `ui-icon-button-symbol-${color}`)}>
        <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" />
      </span>
      <span>{children}</span>
    </button>
  );
});

export default IconButton;
