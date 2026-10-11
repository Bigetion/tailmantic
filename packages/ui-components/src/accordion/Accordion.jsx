import { useId, useState } from 'react';
import { cx } from 'tailmantic';
import './accordion.styles.js';

/** Inline SVG chevron — avoids any icon-library dependency in the package. */
function ChevronDownIcon({ className, size = 16, 'aria-hidden': ariaHidden }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaHidden}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/**
 * Accordion container — wraps one or more AccordionItem components.
 */
function Accordion({ children }) {
  return <div className="tm-accordion-demo">{children}</div>;
}

/**
 * AccordionItem — a single collapsible panel inside an Accordion.
 */
function AccordionItem({
  title,
  index,
  children,
  expanded: controlledExpanded,
  defaultExpanded = false,
  disabled = false,
  onChange,
}) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isExpanded = controlledExpanded !== undefined ? controlledExpanded : internalExpanded;

  const id = useId();
  const triggerId = `${id}-trigger`;
  const panelId = `${id}-panel`;

  function handleClick() {
    if (disabled) return;
    const next = !isExpanded;
    if (controlledExpanded === undefined) setInternalExpanded(next);
    onChange?.(next);
  }

  return (
    <section
      className={cx(
        'tm-accordion-item',
        isExpanded && 'tm-accordion-item-expanded',
        disabled && 'tm-accordion-item-disabled',
      )}
    >
      <h3 className="tm-accordion-heading">
        <button
          id={triggerId}
          className="tm-accordion-trigger"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={panelId}
          disabled={disabled}
          onClick={handleClick}
        >
          {index !== undefined && (
            <span className="tm-accordion-index">{String(index + 1).padStart(2, '0')}</span>
          )}
          <span className="tm-accordion-title">{title}</span>
          {disabled ? (
            <span className="tm-accordion-unavailable">Unavailable</span>
          ) : (
            <ChevronDownIcon className="tm-accordion-chevron" size={16} aria-hidden="true" />
          )}
        </button>
      </h3>
      <div
        id={panelId}
        className="tm-accordion-panel"
        role="region"
        aria-labelledby={triggerId}
        hidden={!isExpanded}
      >
        <p>{children}</p>
      </div>
    </section>
  );
}

/**
 * AccordionHelper — helper text rendered below the accordion items.
 */
function AccordionHelper({ children }) {
  return <span className="tm-accordion-helper">{children}</span>;
}

/**
 * AccordionToolbar — toolbar rendered above the accordion items (e.g. expand/collapse all).
 */
function AccordionToolbar({ children }) {
  return <div className="tm-accordion-toolbar">{children}</div>;
}

export { AccordionItem, AccordionHelper, AccordionToolbar };
export default Accordion;
