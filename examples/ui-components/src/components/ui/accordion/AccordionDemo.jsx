import Accordion, { AccordionGroup } from '@tailmantic/ui-components/accordion';

const sections = [
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

function renderSections(disabledIndex = -1) {
  return sections.map((section, index) => (
    <Accordion
      key={section.title}
      index={index}
      title={section.title}
      disabled={index === disabledIndex}
      disabledLabel={index === disabledIndex ? 'Unavailable' : undefined}
    >
      <p>{section.content}</p>
    </Accordion>
  ));
}

export default function AccordionDemo({ demoId }) {
  if (demoId === 'accordion-controlled') {
    return (
      <AccordionGroup
        multiple
        defaultExpanded={0}
        label="Workspace help"
        showExpandAll
      >
        {renderSections()}
      </AccordionGroup>
    );
  }

  if (demoId === 'accordion-disabled') {
    return (
      <AccordionGroup
        defaultExpanded={0}
        helperText="The second panel is disabled and cannot be opened."
      >
        {renderSections(1)}
      </AccordionGroup>
    );
  }

  return (
    <AccordionGroup
      defaultExpanded={0}
      helperText="Select a section to reveal its details."
    >
      {renderSections()}
    </AccordionGroup>
  );
}
