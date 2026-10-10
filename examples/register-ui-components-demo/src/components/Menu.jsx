import { Children, cloneElement, forwardRef, isValidElement, useCallback, useRef } from 'react';
import { cx } from 'tailmantic';
import FloatingSurface, { useClickAway } from './FloatingSurface.jsx';

const Menu = forwardRef(function Menu(
  {
    anchorRef,
    children,
    className,
    onClose,
    open = false,
    placement = 'bottom-start',
    restoreFocusOnEscape = true,
    ...props
  },
  ref,
) {
  const floatingRef = useRef(null);
  const setRef = (node) => {
    floatingRef.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  useClickAway(open, anchorRef, floatingRef, onClose);

  const focusFirstItem = useCallback(() => {
    floatingRef.current?.querySelector('[role="menuitem"]:not([aria-disabled="true"])')?.focus();
  }, []);

  function handleKeyDown(event) {
    props.onKeyDown?.(event);
    if (event.defaultPrevented) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      onClose?.(event);
      if (restoreFocusOnEscape) anchorRef?.current?.focus();
      return;
    }

    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;

    const items = [
      ...event.currentTarget.querySelectorAll('[role="menuitem"]:not([aria-disabled="true"])'),
    ];
    if (items.length === 0) return;

    event.preventDefault();
    const current = items.indexOf(document.activeElement);
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? items.length - 1
          : current < 0
            ? event.key === 'ArrowDown'
              ? 0
              : items.length - 1
            : (current + (event.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length;
    items[nextIndex].focus();
  }

  return (
    <FloatingSurface
      open={open}
      referenceRef={anchorRef}
      floatingRef={setRef}
      placement={placement}
      className={cx('ui-menu', className)}
      onPositioned={focusFirstItem}
    >
      <div {...props} role="menu" onKeyDown={handleKeyDown}>
        {Children.map(children, (child) =>
          isValidElement(child)
            ? cloneElement(child, { onClose: child.props.onClose ?? onClose })
            : child,
        )}
      </div>
    </FloatingSurface>
  );
});

export const MenuItem = forwardRef(function MenuItem(
  { children, className, danger = false, disabled = false, onClick, onClose, ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type="button"
      role="menuitem"
      aria-disabled={disabled || undefined}
      tabIndex={-1}
      className={cx('ui-menu-item', danger && 'ui-menu-item-danger', className)}
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

export default Menu;
