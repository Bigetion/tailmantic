import { useState } from 'react';
import { Accordion, AccordionItem, AccordionHelper, AccordionToolbar } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

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

function SingleAccordion() {
  const [expanded, setExpanded] = useState(0);

  return (
    <Accordion>
      {SECTIONS.map((section, index) => (
        <AccordionItem
          key={section.title}
          title={section.title}
          index={index}
          expanded={expanded === index}
          onChange={() => setExpanded((current) => (current === index ? -1 : index))}
        >
          {section.content}
        </AccordionItem>
      ))}
      <AccordionHelper>Select a section to reveal its details.</AccordionHelper>
    </Accordion>
  );
}

function MultipleAccordion() {
  const [expanded, setExpanded] = useState([0]);
  const allExpanded = expanded.length === SECTIONS.length;

  function togglePanel(index) {
    setExpanded((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  return (
    <Accordion>
      <AccordionToolbar>
        <span>Workspace help</span>
        <button
          type="button"
          onClick={() => setExpanded(allExpanded ? [] : SECTIONS.map((_, i) => i))}
        >
          {allExpanded ? 'Collapse all' : 'Expand all'}
        </button>
      </AccordionToolbar>
      {SECTIONS.map((section, index) => (
        <AccordionItem
          key={section.title}
          title={section.title}
          index={index}
          expanded={expanded.includes(index)}
          onChange={() => togglePanel(index)}
        >
          {section.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function DisabledAccordion() {
  const [expanded, setExpanded] = useState(0);

  return (
    <Accordion>
      {SECTIONS.map((section, index) => (
        <AccordionItem
          key={section.title}
          title={section.title}
          index={index}
          expanded={expanded === index}
          disabled={index === 1}
          onChange={() => setExpanded((current) => (current === index ? -1 : index))}
        >
          {section.content}
        </AccordionItem>
      ))}
      <AccordionHelper>The second panel is disabled and cannot be opened.</AccordionHelper>
    </Accordion>
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
