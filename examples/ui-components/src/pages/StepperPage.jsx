import { useState } from 'react';
import { Check, CreditCard, MapPin, PackageCheck, UserRound } from 'lucide-react';
import { cx } from 'tailmantic';
import { Stepper, Step } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('stepper');

const DEMOS = {
  stepper: {
    title: 'Horizontal stepper',
    caption: 'Guide a checkout flow through ordered steps, showing progress and the active section.',
  },
  'stepper-vertical': {
    title: 'Vertical stepper',
    caption: 'Keep step details and controls together in a compact, expandable vertical flow.',
  },
  'stepper-alternative': {
    title: 'Alternative labels',
    caption: 'Place labels beneath step indicators and allow direct navigation between milestones.',
  },
};

const STEPS = [
  { label: 'Account', Icon: UserRound, detail: 'Create your workspace profile.' },
  { label: 'Address', Icon: MapPin, detail: 'Add a billing and delivery address.' },
  { label: 'Payment', Icon: CreditCard, detail: 'Choose a payment method.' },
  { label: 'Review', Icon: PackageCheck, detail: 'Review the details before finishing.' },
];

function StepIcon({ index, activeStep, Icon, alternative = false }) {
  const completed = index < activeStep;
  const active = index === activeStep;

  return (
    <span className={cx('stepper-icon', completed && 'stepper-icon-complete', active && 'stepper-icon-active', alternative && 'stepper-icon-alternative')}>
      {completed ? <Check size={13} aria-hidden="true" /> : alternative ? <Icon size={13} aria-hidden="true" /> : index + 1}
    </span>
  );
}

function StepperActions({ step, onBack, onNext, onFinish, onReset, lastStep, completed = false }) {
  return (
    <div className="stepper-actions">
      <button className="stepper-text-button" type="button" disabled={step === 0} onClick={onBack}>Back</button>
      {completed ? (
        <button className="stepper-primary-button" type="button" onClick={onReset}>Start over</button>
      ) : step < lastStep ? (
        <button className="stepper-primary-button" type="button" onClick={onNext}>Continue</button>
      ) : (
        <button className="stepper-primary-button" type="button" onClick={onFinish}>Finish</button>
      )}
    </div>
  );
}

function HorizontalStepperDemo() {
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  function advance() {
    if (step === STEPS.length - 1) setComplete(true);
    else setStep((value) => value + 1);
  }

  function reset() {
    setStep(0);
    setComplete(false);
  }

  return (
    <div className="stepper-showcase">
      <Stepper activeStep={step} orientation="horizontal" aria-label="Checkout steps">
        {STEPS.map(({ label, Icon }, index) => (
          <Step key={label} label={
            <>
              <span className="stepper-indicator">
                <StepIcon index={index} activeStep={step} Icon={Icon} />
                {index < STEPS.length - 1 && <i className={cx('stepper-connector', index < step && 'stepper-connector-complete')} />}
              </span>
              <span className={cx('stepper-label', index === step && 'stepper-label-active', index < step && 'stepper-label-complete')}>{label}</span>
            </>
          } />
        ))}
      </Stepper>
      <div className="stepper-content">
        {complete ? (
          <div className="stepper-complete-message" role="status"><span><Check size={14} aria-hidden="true" /></span><strong>Checkout ready</strong><small>Your information has been reviewed.</small></div>
        ) : (
          <>
            <span className="stepper-content-eyebrow">STEP {step + 1} OF {STEPS.length}</span>
            <strong>{STEPS[step].label}</strong>
            <span>{STEPS[step].detail}</span>
          </>
        )}
      </div>
      <StepperActions
        step={step}
        onBack={() => { setComplete(false); setStep((value) => Math.max(0, value - 1)); }}
        onNext={advance}
        onFinish={() => setComplete(true)}
        onReset={reset}
        lastStep={STEPS.length - 1}
        completed={complete}
      />
    </div>
  );
}

function VerticalStepperDemo() {
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  function advance() {
    if (step === STEPS.length - 1) setComplete(true);
    else setStep((value) => value + 1);
  }

  function reset() {
    setStep(0);
    setComplete(false);
  }

  return (
    <div className="stepper-showcase stepper-vertical-showcase">
      <Stepper orientation="vertical" activeStep={complete ? STEPS.length : step} aria-label="Setup steps">
        {STEPS.map(({ label, detail, Icon }, index) => (
          <Step
            key={label}
            onClick={() => { setComplete(false); setStep(index); }}
            label={
              <>
                <button
                  className={cx('stepper-vertical-heading', index === step && !complete && 'stepper-vertical-heading-active', index < step && 'stepper-vertical-heading-complete')}
                  type="button"
                  aria-current={index === step && !complete ? 'step' : undefined}
                  aria-expanded={index === step && !complete}
                  tabIndex={-1}
                >
                  <StepIcon index={index} activeStep={complete ? STEPS.length : step} Icon={Icon} />
                  <span>{label}</span>
                </button>
                <i className={cx('stepper-vertical-connector', index < step && 'stepper-vertical-connector-complete')} aria-hidden="true" />
                {index === step && !complete && (
                  <div className="stepper-vertical-content">
                    <p>{detail}</p>
                    <StepperActions step={step} onBack={() => setStep((value) => Math.max(0, value - 1))} onNext={advance} onReset={reset} lastStep={STEPS.length - 1} />
                  </div>
                )}
              </>
            }
          />
        ))}
      </Stepper>
      {complete && (
        <div className="stepper-vertical-success" role="status">
          <Check size={13} /> Setup complete. Your workspace is ready.
          <button className="stepper-text-button" type="button" onClick={reset}>Start over</button>
        </div>
      )}
    </div>
  );
}

function AlternativeStepperDemo() {
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState(false);

  function changeStep(next) {
    setComplete(false);
    setStep(Math.max(0, Math.min(STEPS.length - 1, next)));
  }

  function finish() {
    setComplete(true);
  }

  return (
    <div className="stepper-showcase stepper-alternative-showcase">
      <Stepper alternativeLabel activeStep={step} aria-label="Project launch milestones" onStepClick={(event, index) => changeStep(index)}>
        {STEPS.map(({ label, Icon }, index) => (
          <Step
            key={label}
            label={
              <>
                <StepIcon index={index} activeStep={step} Icon={Icon} alternative />
                <span className={cx('stepper-label', index === step && 'stepper-label-active', index < step && 'stepper-label-complete')}>{label}</span>
                {index < STEPS.length - 1 && <i className={cx('stepper-connector', index < step && 'stepper-connector-complete')} aria-hidden="true" />}
              </>
            }
          />
        ))}
      </Stepper>
      <div className="stepper-alternative-summary">
        <span className="stepper-content-eyebrow">MILESTONE {step + 1} / {STEPS.length}</span>
        <strong>{complete ? 'Project ready to launch' : STEPS[step].label}</strong>
        <span>{complete ? 'All launch milestones are complete.' : `Select a milestone above or use the controls to ${step === STEPS.length - 1 ? 'finish' : 'continue'}.`}</span>
      </div>
      <div className="stepper-actions">
        <button className="stepper-text-button" type="button" disabled={step === 0} onClick={() => changeStep(step - 1)}>Back</button>
        {complete ? (
          <button className="stepper-primary-button" type="button" onClick={() => { setComplete(false); setStep(0); }}>Start over</button>
        ) : (
          <button className="stepper-primary-button" type="button" onClick={() => step === STEPS.length - 1 ? finish() : changeStep(step + 1)}>{step === STEPS.length - 1 ? 'Finish' : 'Continue'}</button>
        )}
      </div>
    </div>
  );
}

function StepperDemoContent({ demoId }) {
  if (demoId === 'stepper-vertical') return <VerticalStepperDemo />;
  if (demoId === 'stepper-alternative') return <AlternativeStepperDemo />;
  return <HorizontalStepperDemo />;
}

export default function StepperPage() {
  const styleSource = getStyleSource('stepper');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <StepperDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
