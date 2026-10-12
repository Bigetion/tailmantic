import {
  Accordion,
  AccordionHelper,
  AccordionItem,
  AccordionToolbar,
} from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('accordion');
const ACCORDION_STYLES_NOTE =
  'Base component styles are provided by @tailmantic/ui-components/accordion/styles.';
const USAGE_CODE = `import { Accordion, AccordionItem } from '@tailmantic/ui-components';

<Accordion>
  <AccordionItem title="Section title" defaultExpanded>
    Section content goes here.
  </AccordionItem>
</Accordion>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/AccordionPage.jsx',
    'Self-contained page with interactive Accordion examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/accordion/Accordion.jsx',
    'Compound Accordion implementation and behavior.',
  ],
  [
    'Styles',
    'packages/ui-components/src/accordion/accordion.styles.js',
    'Tailmantic styles bundled with the Accordion package.',
  ],
];

const SECTIONS = [
  {
    title: 'What is Tailmantic?',
    content:
      'Tailmantic compiles registered Tailwind CSS utilities into reusable, semantic component styles for your application.',
  },
  {
    title: 'How does style collection work?',
    content:
      'Register a component name once, then use that name in your markup. Tailmantic collects the matching utility styles into your generated stylesheet.',
  },
  {
    title: 'Can I customize the theme?',
    content:
      'Yes. Use your own design tokens and utility values to make each component match the rest of your product interface.',
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
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  }

  return (
    <Accordion>
      <AccordionToolbar>
        <span>Workspace help</span>
        <button
          type="button"
          onClick={() => setExpanded(allExpanded ? [] : SECTIONS.map((_, index) => index))}
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

export default function AccordionPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import the package's compound Accordion components and compose them around your content."
      usageDescription="Accordion behavior and styling are provided by the reusable package components."
    >
      <div className="component-showcase component-showcase-accordion">
        <DemoPanel
          title="Single panel expansion"
          caption="Expand one section at a time and collapse the open section when it is activated again."
          code={ACCORDION_STYLES_NOTE}
        >
          <SingleAccordion />
        </DemoPanel>
        <DemoPanel
          title="Multiple panel expansion"
          caption="Open several sections independently and use the controls to expand or collapse all panels."
          code={ACCORDION_STYLES_NOTE}
        >
          <MultipleAccordion />
        </DemoPanel>
        <DemoPanel
          title="Disabled panel"
          caption="Keep unavailable content visible in the list while communicating that it cannot be expanded."
          code={ACCORDION_STYLES_NOTE}
        >
          <DisabledAccordion />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
