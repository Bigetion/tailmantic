import { Step, Stepper } from '@tailmantic/ui-components';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('stepper');
const STEPS = [
  { label: 'Account', detail: 'Create your workspace profile.' },
  { label: 'Address', detail: 'Add a billing and delivery address.' },
  { label: 'Payment', detail: 'Choose a payment method.' },
  { label: 'Review', detail: 'Review the details before finishing.' },
];
const USAGE_CODE = `import { Step, Stepper } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/stepper/styles';

<Stepper activeStep={1} aria-label="Checkout steps">
  <Step label="Account" />
  <Step label="Address" />
  <Step label="Payment" />
</Stepper>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/StepperPage.jsx',
    'Interactive checkout, vertical setup, and alternative-label examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/stepper/',
    'Composable Step and Stepper components with orientation and navigation states.',
  ],
  [
    'Styles',
    'packages/ui-components/src/stepper/stepper.styles.js',
    'Package-owned component and example styles.',
  ],
];

function StepperControls({ activeStep, complete, onBack, onContinue, onReset }) {
  return (
    <div className="tm-stepper-example-actions">
      <button
        className="tm-stepper-example-secondary"
        type="button"
        disabled={activeStep === 0 || complete}
        onClick={onBack}
      >
        Back
      </button>
      {complete ? (
        <button className="tm-stepper-example-primary" type="button" onClick={onReset}>
          Start over
        </button>
      ) : (
        <button className="tm-stepper-example-primary" type="button" onClick={onContinue}>
          {activeStep === STEPS.length - 1 ? 'Finish' : 'Continue'}
        </button>
      )}
    </div>
  );
}

function StepperExample({ variant }) {
  const [activeStep, setActiveStep] = useState(variant === 'alternative' ? 1 : 0);
  const [complete, setComplete] = useState(false);
  const isVertical = variant === 'vertical';
  const isAlternative = variant === 'alternative';
  const isHorizontal = !isVertical && !isAlternative;
  const stepIndex = complete ? STEPS.length : activeStep;
  const className = [
    'tm-stepper-example',
    isHorizontal && 'tm-stepper-example-horizontal',
    isVertical && 'tm-stepper-example-vertical',
    isAlternative && 'tm-stepper-example-alternative',
  ]
    .filter(Boolean)
    .join(' ');
  const completionTitle = isVertical
    ? 'Workspace ready'
    : isAlternative
      ? 'Project ready to launch'
      : 'Checkout ready';

  function changeStep(index) {
    setComplete(false);
    setActiveStep(index);
  }

  function advance() {
    if (activeStep === STEPS.length - 1) {
      setComplete(true);
      return;
    }
    setActiveStep((current) => current + 1);
  }

  function reset() {
    setActiveStep(0);
    setComplete(false);
  }

  return (
    <div className={className}>
      <Stepper
        activeStep={stepIndex}
        alternativeLabel={isAlternative}
        aria-label={
          isVertical
            ? 'Workspace setup steps'
            : isAlternative
              ? 'Project launch milestones'
              : 'Checkout steps'
        }
        nonLinear={isVertical || isAlternative}
        onStepClick={(_event, index) => changeStep(index)}
        orientation={isVertical ? 'vertical' : 'horizontal'}
      >
        {STEPS.map(({ label, detail }) => (
          <Step key={label} label={label} description={isVertical ? detail : undefined} />
        ))}
      </Stepper>
      <div className="tm-stepper-example-content" aria-live="polite">
        <span className="tm-stepper-example-eyebrow">
          {complete
            ? 'ALL STEPS COMPLETE'
            : isAlternative
              ? `MILESTONE ${activeStep + 1} / ${STEPS.length}`
              : `STEP ${activeStep + 1} OF ${STEPS.length}`}
        </span>
        <strong>{complete ? completionTitle : STEPS[activeStep].label}</strong>
        <span>
          {complete ? 'Everything is complete and ready to go.' : STEPS[activeStep].detail}
        </span>
      </div>
      <StepperControls
        activeStep={activeStep}
        complete={complete}
        onBack={() => changeStep(Math.max(0, activeStep - 1))}
        onContinue={advance}
        onReset={reset}
      />
    </div>
  );
}

export default function StepperPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Compose Step items inside Stepper and keep the current step in your application state."
      usageDescription="Stepper supports horizontal and vertical layouts, alternative labels, linear or direct step navigation, and active/completed states."
    >
      <div className="component-showcase component-showcase-stepper">
        <DemoPanel
          title="Horizontal checkout"
          caption="Move through a linear checkout and see completed, current, and upcoming steps."
          code={getExampleCode(component.slug, 'Horizontal checkout')}
        >
          <StepperExample variant="horizontal" />
        </DemoPanel>
        <DemoPanel
          title="Vertical setup"
          caption="Show supporting details beside each step and allow people to revisit earlier sections."
          code={getExampleCode(component.slug, 'Vertical setup')}
        >
          <StepperExample variant="vertical" />
        </DemoPanel>
        <DemoPanel
          title="Alternative labels"
          caption="Place step labels below their indicators and jump directly between project milestones."
          code={getExampleCode(component.slug, 'Alternative labels')}
        >
          <StepperExample variant="alternative" />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
