import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { cx } from 'tailmantic';

const BottomNavigation = forwardRef(function BottomNavigation(
  { 'aria-label': ariaLabel = 'Bottom navigation', children, className, value, onChange, ...props },
  ref,
) {
  return (
    <nav
      {...props}
      ref={ref}
      aria-label={ariaLabel}
      className={cx('ui-bottom-navigation', className)}
    >
      {Children.map(children, (child) =>
        isValidElement(child) && child.props.value !== undefined
          ? cloneElement(child, {
              selected: child.props.selected ?? child.props.value === value,
              onSelect: child.props.onSelect ?? onChange,
            })
          : child,
      )}
    </nav>
  );
});

const BottomNavigationItem = forwardRef(function BottomNavigationItem(
  {
    'aria-label': ariaLabel,
    children,
    className,
    icon,
    label,
    onSelect,
    onClick,
    selected = false,
    value,
    ...props
  },
  ref,
) {
  const itemLabel = label ?? children;

  return (
    <button
      {...props}
      ref={ref}
      type="button"
      className={cx(
        'ui-bottom-navigation-item',
        selected && 'ui-bottom-navigation-item-selected',
        className,
      )}
      aria-label={ariaLabel ?? (typeof itemLabel === 'string' ? itemLabel : undefined)}
      aria-current={selected ? 'page' : undefined}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) onSelect?.(event, value);
      }}
    >
      {icon && (
        <span className="ui-bottom-navigation-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="ui-bottom-navigation-label">{itemLabel}</span>
    </button>
  );
});

export { BottomNavigationItem };
export default BottomNavigation;
