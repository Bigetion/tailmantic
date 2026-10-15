import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './menu.styles.js';

const MenuItem = forwardRef(function MenuItem(
  { children, className, disabled = false, onClick, onClose, role = 'menuitem', ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type="button"
      role={role}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      className={cx('tm-menu-item', disabled && 'tm-menu-item-disabled', className)}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
        if (!event.defaultPrevented) onClose?.(event);
      }}
    >
      {children}
    </button>
  );
});

export { MenuItem };
