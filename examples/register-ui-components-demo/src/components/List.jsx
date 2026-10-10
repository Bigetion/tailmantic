import { forwardRef } from 'react';
import { cx } from 'tailmantic';

const List = forwardRef(function List(
  {
    children,
    className,
    component,
    dense = false,
    disablePadding = false,
    ordered = false,
    ...props
  },
  ref,
) {
  const Tag = component ?? (ordered ? 'ol' : 'ul');

  return (
    <Tag
      {...props}
      ref={ref}
      className={cx(
        'ui-list',
        dense && 'ui-list-dense',
        disablePadding && 'ui-list-no-padding',
        className,
      )}
    >
      {children}
    </Tag>
  );
});

export const ListItem = forwardRef(function ListItem(
  { children, className, divider = true, disableGutters = false, ...props },
  ref,
) {
  return (
    <li
      {...props}
      ref={ref}
      className={cx(
        'ui-list-item',
        divider && 'ui-list-item-divider',
        disableGutters && 'ui-list-item-no-gutters',
        className,
      )}
    >
      {children}
    </li>
  );
});

export const ListItemButton = forwardRef(function ListItemButton(
  { children, className, selected = false, type = 'button', ...props },
  ref,
) {
  return (
    <button
      {...props}
      ref={ref}
      type={type}
      className={cx('ui-list-item-button', selected && 'ui-list-item-button-selected', className)}
      aria-current={selected ? 'true' : undefined}
    >
      {children}
    </button>
  );
});

export const ListItemText = forwardRef(function ListItemText(
  { className, primary, secondary, ...props },
  ref,
) {
  return (
    <span {...props} ref={ref} className={cx('ui-list-item-text', className)}>
      {primary != null && <span className="ui-list-primary">{primary}</span>}
      {secondary != null && <span className="ui-list-secondary">{secondary}</span>}
    </span>
  );
});

export default List;
