import { forwardRef, useState } from 'react';
import { cx } from 'tailmantic';

const Breadcrumbs = forwardRef(function Breadcrumbs(
  {
    'aria-label': ariaLabel = 'Breadcrumb',
    className,
    collapsible = false,
    expanded,
    items = [],
    maxItems = 3,
    onExpand,
    separator = '/',
    ...props
  },
  ref,
) {
  const [internalExpanded, setInternalExpanded] = useState(false);
  const isExpanded = expanded ?? internalExpanded;
  const shouldCollapse = collapsible && !isExpanded && items.length > maxItems;
  const visibleItems = shouldCollapse
    ? [items[0], { collapsed: true }, ...items.slice(-(maxItems - 1))]
    : items;

  const expand = () => {
    setInternalExpanded(true);
    onExpand?.();
  };

  return (
    <nav {...props} ref={ref} aria-label={ariaLabel} className={cx('ui-breadcrumbs', className)}>
      <ol className="ui-breadcrumbs-list">
        {visibleItems.map((item, index) => {
          const isCurrent = index === visibleItems.length - 1;
          const key = item.collapsed ? 'collapsed' : `${item.href ?? item.label}-${index}`;

          return (
            <li className="ui-breadcrumbs-item" key={key}>
              {item.collapsed ? (
                <button
                  type="button"
                  className="ui-breadcrumbs-ellipsis"
                  aria-label="Expand breadcrumb path"
                  onClick={expand}
                >
                  <span aria-hidden="true">…</span>
                </button>
              ) : isCurrent ? (
                <span className="ui-breadcrumbs-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a className="ui-breadcrumbs-link" href={item.href}>
                  {item.label}
                </a>
              )}
              {!isCurrent && (
                <span className="ui-breadcrumbs-separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
});

export default Breadcrumbs;
