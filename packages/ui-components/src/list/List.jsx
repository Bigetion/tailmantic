import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './list.styles.js';

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
        'tm-list',
        dense && 'tm-list-dense',
        disablePadding && 'tm-list-no-padding',
        className,
      )}
    >
      {children}
    </Tag>
  );
});

export const ListItem = forwardRef(function ListItem(
  { children, className, divider = false, disableGutters = false, ...props },
  ref,
) {
  return (
    <li
      {...props}
      ref={ref}
      className={cx(
        'tm-list-item',
        divider && 'tm-list-item-divider',
        disableGutters && 'tm-list-item-no-gutters',
        className,
      )}
    >
      {children}
    </li>
  );
});

export const ListItemText = forwardRef(function ListItemText(
  { className, primary, secondary, ...props },
  ref,
) {
  return (
    <span {...props} ref={ref} className={cx('tm-list-item-text', className)}>
      {primary != null && <span className="tm-list-primary">{primary}</span>}
      {secondary != null && <span className="tm-list-secondary">{secondary}</span>}
    </span>
  );
});

export default List;
