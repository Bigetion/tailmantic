import { useState } from 'react';
import Accordion from '../components/Accordion.jsx';
import AccordionGroup from '../components/AccordionGroup.jsx';

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

function AccordionShowcaseGroup({ multiple = false, disabledIndex = -1, label }) {
  const [expanded, setExpanded] = useState([0]);
  const enabledItems = ITEMS.map((_, index) => index).filter((index) => index !== disabledIndex);
  const allExpanded = enabledItems.every((index) => expanded.includes(index));

  function toggle(index, isExpanded) {
    setExpanded((current) => {
      if (multiple) {
        return isExpanded ? [...current, index] : current.filter((item) => item !== index);
      }
      return isExpanded ? [index] : [];
    });
  }

  return (
    <div className="demo-accordion-example">
      {multiple && (
        <div className="demo-accordion-toolbar">
          <span>{label}</span>
          <button type="button" onClick={() => setExpanded(allExpanded ? [] : enabledItems)}>
            {allExpanded ? 'Collapse all' : 'Expand all'}
          </button>
        </div>
      )}
      <AccordionGroup>
        {ITEMS.map((item, index) => {
          const disabled = disabledIndex === index;
          return (
            <Accordion
              key={item.title}
              title={
                <>
                  <span className="demo-accordion-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{item.title}</span>
                  {disabled && <span className="demo-accordion-unavailable">Unavailable</span>}
                </>
              }
              expanded={expanded.includes(index)}
              disabled={disabled}
              onChange={(_, isExpanded) => toggle(index, isExpanded)}
            >
              {item.content}
            </Accordion>
          );
        })}
      </AccordionGroup>
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

export default function AccordionPage() {
  return (
    <>
      <section className="demo-section">
        <span className="demo-section-title">Standalone component</span>
        <AccordionGroup>
          <Accordion title="What is Tailmantic?" defaultExpanded>
            Tailmantic compiles registered Tailwind utilities into reusable component styles.
          </Accordion>
        </AccordionGroup>
        <span className="demo-note">
          This instance manages its own expanded state with the defaultExpanded prop.
        </span>
      </section>
      <section className="demo-section">
        <span className="demo-section-title">Single-panel group</span>
        <AccordionShowcaseGroup />
      </section>
      <section className="demo-section">
        <span className="demo-section-title">Multiple panels</span>
        <AccordionShowcaseGroup multiple label="Workspace help" />
      </section>
      <section className="demo-section">
        <span className="demo-section-title">Disabled state</span>
        <AccordionShowcaseGroup disabledIndex={1} />
      </section>
    </>
  );
}
