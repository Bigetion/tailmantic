import { Children, cloneElement, forwardRef, isValidElement, useId, useState } from 'react';
import { cx } from 'tailmantic';
import './accordion.styles.js';

function normalizeExpanded(expanded) {
  if (expanded === undefined) return [];
  return Array.isArray(expanded) ? expanded : [expanded];
}

const AccordionGroup = forwardRef(function AccordionGroup(
  {
    children,
    className,
    defaultExpanded = [],
    expanded,
    helperText,
    label,
    multiple = false,
    onChange,
    showExpandAll = false,
    ...props
  },
  ref,
) {
  const [internalExpanded, setInternalExpanded] = useState(() => normalizeExpanded(defaultExpanded));
  const expandedItems = expanded === undefined ? internalExpanded : normalizeExpanded(expanded);
  const items = Children.toArray(children);
  const id = useId();
  const itemsId = `${id}-items`;
  const expandableIndexes = items.flatMap((child, index) =>
    isValidElement(child) && !child.props.disabled ? [index] : [],
  );
  const allExpanded = expandableIndexes.length > 0
    && expandableIndexes.every((index) => expandedItems.includes(index));

  function updateExpanded(event, index, nextItemExpanded) {
    const nextExpanded = nextItemExpanded
      ? multiple
        ? [...expandedItems, index]
        : [index]
      : expandedItems.filter((item) => item !== index);

    if (expanded === undefined) setInternalExpanded(nextExpanded);
    onChange?.(event, nextExpanded);
  }

  function toggleAll(event) {
    const nextExpanded = allExpanded ? [] : expandableIndexes;
    if (expanded === undefined) setInternalExpanded(nextExpanded);
    onChange?.(event, nextExpanded);
  }

  return (
    <section
      {...props}
      ref={ref}
      className={cx('rgi-accordion-group', className)}
      role="group"
      aria-labelledby={label != null ? `${id}-label` : undefined}
    >
      {label != null || showExpandAll ? (
        <div className="rgi-accordion-group-toolbar">
          {label != null && <span id={`${id}-label`} className="rgi-accordion-group-label">{label}</span>}
          {showExpandAll && multiple && (
            <button
              className="rgi-accordion-group-toggle"
              type="button"
              aria-expanded={allExpanded}
              aria-controls={itemsId}
              onClick={toggleAll}
            >
              {allExpanded ? 'Collapse all' : 'Expand all'}
            </button>
          )}
        </div>
      ) : null}
      <div id={itemsId} className="rgi-accordion-group-items">
        {items.map((child, index) => (
          isValidElement(child)
            ? cloneElement(child, {
                expanded: expandedItems.includes(index),
                onChange: (event, nextItemExpanded) => updateExpanded(event, index, nextItemExpanded),
                index: child.props.index ?? index,
              })
            : child
        ))}
      </div>
      {helperText != null && (
        <span className="rgi-accordion-group-helper">{helperText}</span>
      )}
    </section>
  );
});

const Accordion = forwardRef(function Accordion(
  {
    children,
    className,
    defaultExpanded = false,
    disabled = false,
    disabledLabel,
    expandIcon,
    index,
    onChange,
    expanded,
    title,
    ...props
  },
  ref,
) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isExpanded = expanded ?? internalExpanded;
  const id = useId();
  const summaryId = `${id}-summary`;
  const panelId = `${id}-panel`;

  function toggle(event) {
    const nextExpanded = !isExpanded;
    if (expanded === undefined) setInternalExpanded(nextExpanded);
    onChange?.(event, nextExpanded);
  }

  return (
    <section
      {...props}
      ref={ref}
      className={cx(
        'rgi-accordion',
        isExpanded && 'rgi-accordion-expanded',
        disabled && 'rgi-accordion-disabled',
        className,
      )}
    >
      <h3 className="rgi-accordion-heading">
        <button
          id={summaryId}
          className="rgi-accordion-trigger"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          disabled={disabled}
          onClick={toggle}
        >
          {index !== undefined && (
            <span className="rgi-accordion-index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
          )}
          <span className="rgi-accordion-title">{title}</span>
          {disabled && disabledLabel != null && (
            <span className="rgi-accordion-unavailable">{disabledLabel}</span>
          )}
          <span className="rgi-accordion-icon" aria-hidden="true">
            {expandIcon ?? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        </button>
      </h3>
      <section
        id={panelId}
        className="rgi-accordion-panel"
        aria-labelledby={summaryId}
        hidden={!isExpanded}
      >
        <div className="rgi-accordion-content">{children}</div>
      </section>
    </section>
  );
});

export { AccordionGroup };
export default Accordion;
