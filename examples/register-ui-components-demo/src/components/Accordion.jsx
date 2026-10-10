import { ChevronDown } from 'lucide-react';
import { forwardRef, useId, useState } from 'react';
import { cx } from 'tailmantic';

const Accordion = forwardRef(function Accordion(
  {
    children,
    className,
    defaultExpanded = false,
    disabled = false,
    expandIcon,
    expanded,
    onChange,
    title,
    ...props
  },
  ref,
) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isExpanded = expanded ?? internalExpanded;
  const id = useId();
  const triggerId = `${id}-trigger`;
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
      className={cx('ui-accordion-item', disabled && 'ui-accordion-item-disabled', className)}
    >
      <h3 className="ui-accordion-heading">
        <button
          type="button"
          className="ui-accordion-trigger"
          id={triggerId}
          aria-expanded={isExpanded}
          aria-controls={panelId}
          disabled={disabled}
          onClick={toggle}
        >
          <span className="ui-accordion-title">{title}</span>
          {expandIcon ?? (
            <ChevronDown
              className={cx('ui-accordion-icon', isExpanded && 'ui-accordion-icon-open')}
              size={16}
              aria-hidden="true"
            />
          )}
        </button>
      </h3>
      <section
        className="ui-accordion-panel"
        id={panelId}
        aria-labelledby={triggerId}
        hidden={!isExpanded}
      >
        {children}
      </section>
    </section>
  );
});

export default Accordion;
