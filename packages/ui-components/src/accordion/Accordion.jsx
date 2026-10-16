import { forwardRef, useId, useState } from 'react';
import { cx } from 'tailmantic';
import ChevronIcon from '../internal/ChevronIcon.jsx';
import './accordion.styles.js';

const Accordion = forwardRef(function Accordion({ children, className, ...props }, ref) {
  return (
    <div {...props} ref={ref} className={cx('tm-accordion', className)}>
      {children}
    </div>
  );
});

const AccordionItem = forwardRef(function AccordionItem(
  {
    title,
    index,
    children,
    className,
    expanded: controlledExpanded,
    defaultExpanded = false,
    disabled = false,
    onChange,
    ...props
  },
  ref,
) {
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
      {...props}
      ref={ref}
      className={cx(
        'tm-accordion-item',
        isExpanded && 'tm-accordion-item-expanded',
        disabled && 'tm-accordion-item-disabled',
        className,
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
            <ChevronIcon className="tm-accordion-chevron" size={16} />
          )}
        </button>
      </h3>
      <section
        id={panelId}
        className="tm-accordion-panel"
        aria-labelledby={triggerId}
        hidden={!isExpanded}
      >
        {children}
      </section>
    </section>
  );
});

const AccordionHelper = forwardRef(function AccordionHelper(
  { children, className, ...props },
  ref,
) {
  return (
    <span {...props} ref={ref} className={cx('tm-accordion-helper', className)}>
      {children}
    </span>
  );
});

const AccordionToolbar = forwardRef(function AccordionToolbar(
  { children, className, ...props },
  ref,
) {
  return (
    <div {...props} ref={ref} className={cx('tm-accordion-toolbar', className)}>
      {children}
    </div>
  );
});

export { AccordionHelper, AccordionItem, AccordionToolbar };
export default Accordion;
