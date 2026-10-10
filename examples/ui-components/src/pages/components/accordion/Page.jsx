import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cx } from 'tailmantic';
import { getComponentBySlug } from '../../../data/components.js';
import ComponentPageLayout from '../../../components/ComponentPageLayout.jsx';
import DemoPanel from '../../../components/DemoPanel.jsx';
import { getStyleSource } from '../../../lib/useStyleSource.js';

const component = getComponentBySlug('accordion');

const DEMOS = {
  accordion: {
    title: 'Single panel expansion',
    caption: 'Expand one section at a time and collapse the open section when it is activated again.',
  },
  'accordion-controlled': {
    title: 'Multiple panel expansion',
    caption: 'Open several sections independently and use the controls to expand or collapse all panels.',
  },
  'accordion-disabled': {
    title: 'Disabled panel',
    caption: 'Keep unavailable content visible in the list while communicating that it cannot be expanded.',
  },
};

const SECTIONS = [
  {
    title: 'What is Tailmantic?',
    content: 'Tailmantic compiles registered Tailwind CSS utilities into reusable, semantic component styles for your application.',
  },
  {
    title: 'How does style collection work?',
    content: 'Register a component name once, then use that name in your markup. Tailmantic collects the matching utility styles into your generated stylesheet.',
  },
  {
    title: 'Can I customize the theme?',
    content: 'Yes. Use your own design tokens and utility values to make each component match the rest of your product interface.',
  },
];

function AccordionItem({ section, index, expanded, disabled = false, onToggle }) {
  const panelId = useId();
  const triggerId = `${panelId}-trigger`;

  return (
    <section className={cx('accordion-item', expanded && 'accordion-item-expanded', disabled && 'accordion-item-disabled')}>
      <h3 className="accordion-heading">
        <button
          className="accordion-trigger"
          id={triggerId}
          type="button"
          aria-expanded={expanded}
          aria-controls={panelId}
          disabled={disabled}
          onClick={onToggle}
        >
          <span className="accordion-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="accordion-title">{section.title}</span>
          {disabled ? (
            <span className="accordion-unavailable">Unavailable</span>
          ) : (
            <ChevronDown className="accordion-chevron" size={16} aria-hidden="true" />
          )}
        </button>
      </h3>
      <div className="accordion-panel" id={panelId} role="region" aria-labelledby={triggerId} hidden={!expanded}>
        <p>{section.content}</p>
      </div>
    </section>
  );
}

function SingleAccordion() {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="accordion-demo">
      {SECTIONS.map((section, index) => (
        <AccordionItem
          key={section.title}
          section={section}
          index={index}
          expanded={expanded === index}
          onToggle={() => setExpanded((current) => current === index ? -1 : index)}
        />
      ))}
      <span className="accordion-helper">Select a section to reveal its details.</span>
    </div>
  );
}

function MultipleAccordion() {
  const [expanded, setExpanded] = useState([0]);
  const allExpanded = expanded.length === SECTIONS.length;

  function togglePanel(index) {
    setExpanded((current) => current.includes(index)
      ? current.filter((item) => item !== index)
      : [...current, index]);
  }

  return (
    <div className="accordion-demo">
      <div className="accordion-toolbar">
        <span>Workspace help</span>
        <button type="button" onClick={() => setExpanded(allExpanded ? [] : SECTIONS.map((_, index) => index))}>
          {allExpanded ? 'Collapse all' : 'Expand all'}
        </button>
      </div>
      {SECTIONS.map((section, index) => (
        <AccordionItem
          key={section.title}
          section={section}
          index={index}
          expanded={expanded.includes(index)}
          onToggle={() => togglePanel(index)}
        />
      ))}
    </div>
  );
}

function DisabledAccordion() {
  const [expanded, setExpanded] = useState(0);

  return (
    <div className="accordion-demo">
      {SECTIONS.map((section, index) => (
        <AccordionItem
          key={section.title}
          section={section}
          index={index}
          expanded={expanded === index}
          disabled={index === 1}
          onToggle={() => setExpanded((current) => current === index ? -1 : index)}
        />
      ))}
      <span className="accordion-helper">The second panel is disabled and cannot be opened.</span>
    </div>
  );
}

function AccordionDemoContent({ demoId }) {
  if (demoId === 'accordion-controlled') return <MultipleAccordion />;
  if (demoId === 'accordion-disabled') return <DisabledAccordion />;
  return <SingleAccordion />;
}

export default function AccordionPage() {
  const styleSource = getStyleSource('accordion');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <AccordionDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
