import {
  Accordion,
  AccordionHelper,
  AccordionItem,
  AccordionToolbar,
  Card,
} from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('accordion');
const BASIC_CODE = `import { Accordion, AccordionItem } from '@tailmantic/ui-components';

<Accordion>
  <AccordionItem title="How do I reset my password?" defaultExpanded>
    Select “Forgot password” on the sign-in page and enter your email address.
  </AccordionItem>
</Accordion>`;
const MULTIPLE_CODE = `import { useState } from 'react';
import { Accordion, AccordionItem } from '@tailmantic/ui-components';

const items = [
  { title: 'Privacy & security', content: 'Manage account security and privacy settings.' },
  { title: 'Billing & subscription', content: 'Review your plan and payment details.' },
];

function Example() {
  const [expanded, setExpanded] = useState([0]);
  function toggleItem(index) {
    setExpanded((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  }

  return (
    <Accordion>
      {items.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          expanded={expanded.includes(index)}
          onChange={() => toggleItem(index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}`;
const DISABLED_CODE = `import { Accordion, AccordionItem } from '@tailmantic/ui-components';

<Accordion>
  <AccordionItem title="Premium feature information" disabled>
    This content is currently unavailable.
  </AccordionItem>
</Accordion>`;
const BORDERS_CODE = `import { Accordion, AccordionItem } from '@tailmantic/ui-components';

<Accordion className="tm-accordion-example-bordered">
  <AccordionItem title="How does billing work?">
    Billing details appear in your account settings.
  </AccordionItem>
</Accordion>`;
const CARD_CODE = `import { Accordion, AccordionItem, Card } from '@tailmantic/ui-components';

<Card variant="outlined">
  <Accordion>
    <AccordionItem title="Subscription & Billing">
      Manage your account, plan, payments, and cancellations.
    </AccordionItem>
  </Accordion>
</Card>`;
const RTL_CODE = `import { Accordion, AccordionItem } from '@tailmantic/ui-components';

<div dir="rtl">
  <Accordion>
    <AccordionItem title="كيف يمكنني إعادة تعيين كلمة المرور؟">
      أدخل بريدك الإلكتروني وسنرسل إليك رابطًا آمنًا لإعادة التعيين.
    </AccordionItem>
  </Accordion>
</div>`;
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
    title: 'How do I reset my password?',
    content:
      'Select “Forgot password” on the sign-in page and enter your email address. We will send a secure reset link that expires after 24 hours.',
  },
  {
    title: 'Can I change my subscription plan?',
    content:
      'You can update your plan at any time from Billing settings. Changes take effect at the start of your next billing period.',
  },
  {
    title: 'What payment methods do you accept?',
    content:
      'We accept major credit and debit cards. Available payment methods may vary by region.',
  },
];

function SingleAccordion({ className, sections = SECTIONS }) {
  const [expanded, setExpanded] = useState(0);

  return (
    <Accordion className={className}>
      {sections.map((section, index) => (
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
        <span>Notification settings</span>
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

function CardAccordion() {
  return (
    <Card className="accordion-card-example" variant="outlined">
      <strong>Subscription &amp; Billing</strong>
      <p>Common questions about your account, plans, payments and cancellations.</p>
      <Accordion>
        <AccordionItem title="What subscription plans do you offer?" defaultExpanded>
          We offer three subscription tiers: Starter, Pro, and Enterprise. Each plan includes
          increasing storage limits, API access, and support options.
        </AccordionItem>
        <AccordionItem title="How does billing work?">
          Billing happens monthly and can be managed from your account settings.
        </AccordionItem>
        <AccordionItem title="How do I cancel my subscription?">
          You can cancel any time from the billing page.
        </AccordionItem>
      </Accordion>
    </Card>
  );
}

function RtlAccordion() {
  const sections = [
    {
      title: 'كيف يمكنني إعادة تعيين كلمة المرور؟',
      content: 'أدخل بريدك الإلكتروني وسنرسل إليك رابطًا آمنًا لإعادة التعيين.',
    },
    {
      title: 'ما طرق الدفع التي تقبلونها؟',
      content: 'نقبل بطاقات الائتمان والخصم الرئيسية.',
    },
    {
      title: 'كيف أتواصل مع الدعم؟',
      content: 'يمكنك التواصل مع فريق الدعم عبر البريد الإلكتروني.',
    },
  ];

  return (
    <div dir="rtl" className="accordion-rtl-example">
      <SingleAccordion sections={sections} />
    </div>
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
          title="Basic"
          caption="Expand one section at a time and collapse the open section when it is activated again."
          code={BASIC_CODE}
        >
          <SingleAccordion />
        </DemoPanel>
        <DemoPanel
          title="Multiple"
          caption="Open several sections independently and use the controls to expand or collapse all panels."
          code={MULTIPLE_CODE}
        >
          <MultipleAccordion />
        </DemoPanel>
        <DemoPanel
          title="Disabled"
          caption="Keep unavailable content visible in the list while communicating that it cannot be expanded."
          code={DISABLED_CODE}
        >
          <DisabledAccordion />
        </DemoPanel>
        <DemoPanel
          title="Borders"
          caption="Use the bordered treatment when the accordion needs more separation from surrounding content."
          code={BORDERS_CODE}
        >
          <SingleAccordion className="tm-accordion-example-bordered" />
        </DemoPanel>
        <DemoPanel
          title="Card"
          caption="Place related questions and answers in a card surface."
          code={CARD_CODE}
        >
          <CardAccordion />
        </DemoPanel>
        <DemoPanel
          title="Right-to-left"
          caption="Accordion content follows the direction of its surrounding layout."
          code={RTL_CODE}
        >
          <RtlAccordion />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
