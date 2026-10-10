import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';
import { cx } from 'tailmantic';

const ITEMS = [
  {
    title: 'What is Tailmantic?',
    content: 'Tailmantic compiles registered Tailwind utilities into reusable component styles.',
  },
  {
    title: 'How are styles collected?',
    content: 'The Vite plugin collects registrations and compiles the matching utilities.',
  },
  {
    title: 'Can I customize the theme?',
    content: 'Override the design tokens in your Tailmantic registration files.',
  },
];

function AccordionGroup({ multiple = false, disabledIndex = -1, label }) {
  const id = useId();
  const [expanded, setExpanded] = useState(multiple ? [0] : [0]);
  const allExpanded = expanded.length === ITEMS.length - (disabledIndex >= 0 ? 1 : 0);

  function toggle(index) {
    if (multiple) {
      setExpanded((current) =>
        current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
      );
    } else {
      setExpanded((current) => (current.includes(index) ? [] : [index]));
    }
  }

  return (
    <div className="demo-accordion-example">
      {multiple && (
        <div className="demo-accordion-toolbar">
          <span>{label}</span>
          <button
            type="button"
            onClick={() =>
              setExpanded(
                allExpanded
                  ? []
                  : ITEMS.map((_, index) => index).filter((index) => index !== disabledIndex),
              )
            }
          >
            {allExpanded ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
      )}
      <div className="demo-accordion">
        {ITEMS.map((item, index) => {
          const open = expanded.includes(index);
          const disabled = disabledIndex === index;
          const triggerId = `${id}-trigger-${index}`;
          const panelId = `${id}-panel-${index}`;
          return (
            <section
              className={cx('demo-accordion-item', disabled && 'demo-accordion-item-disabled')}
              key={item.title}
            >
              <h3 className="demo-accordion-heading">
                <button
                  type="button"
                  className="demo-accordion-trigger"
                  id={triggerId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  disabled={disabled}
                  onClick={() => toggle(index)}
                >
                  <span className="demo-accordion-index">{String(index + 1).padStart(2, '0')}</span>
                  <span>{item.title}</span>
                  {disabled ? (
                    <span className="demo-accordion-unavailable">Unavailable</span>
                  ) : (
                    <ChevronDown
                      className={cx('demo-accordion-icon', open && 'demo-accordion-icon-open')}
                      size={16}
                      aria-hidden="true"
                    />
                  )}
                </button>
              </h3>
              <section
                className="demo-accordion-panel"
                id={panelId}
                aria-labelledby={triggerId}
                hidden={!open}
              >
                {item.content}
              </section>
            </section>
          );
        })}
      </div>
      <span className="demo-note">
        {disabledIndex >= 0
          ? 'The middle panel is disabled and cannot be opened.'
          : multiple
            ? 'Multiple panels can stay open at the same time.'
            : 'Only one panel can be open at a time.'}
      </span>
    </div>
  );
}

export default function AccordionDemo() {
  return (
    <>
      <section className="demo-section">
        <span className="demo-section-title">Single panel</span>
        <AccordionGroup />
      </section>
      <section className="demo-section">
        <span className="demo-section-title">Controlled multiple panels</span>
        <AccordionGroup multiple label="Workspace help" />
      </section>
      <section className="demo-section">
        <span className="demo-section-title">Disabled state</span>
        <AccordionGroup disabledIndex={1} />
      </section>
    </>
  );
}
