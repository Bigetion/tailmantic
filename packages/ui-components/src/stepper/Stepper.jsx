import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { cx } from 'tailmantic';
import './stepper.styles.js';

const Step = forwardRef(function Step(
  {
    children,
    className,
    label,
    description,
    index = 0,
    active = false,
    completed = false,
    disabled = false,
    onClick,
    ...props
  },
  ref,
) {
  const content = label ?? children;
  return (
    <li
      {...props}
      ref={ref}
      className={cx(
        'tm-step',
        active && 'tm-step-active',
        completed && 'tm-step-completed',
        disabled && 'tm-step-disabled',
        className,
      )}
      aria-current={active ? 'step' : undefined}
    >
      {onClick ? (
        <button type="button" className="tm-step-button" disabled={disabled} onClick={onClick}>
          <span className="tm-step-indicator" aria-hidden="true">
            {completed ? '✓' : index + 1}
          </span>
          <span className="tm-step-copy">
            <span className="tm-step-label">{content}</span>
            {description && <span className="tm-step-description">{description}</span>}
          </span>
        </button>
      ) : (
        <span className="tm-step-content">
          <span className="tm-step-indicator" aria-hidden="true">
            {completed ? '✓' : index + 1}
          </span>
          <span className="tm-step-copy">
            <span className="tm-step-label">{content}</span>
            {description && <span className="tm-step-description">{description}</span>}
          </span>
        </span>
      )}
    </li>
  );
});

const Stepper = forwardRef(function Stepper(
  {
    children,
    className,
    activeStep = 0,
    orientation = 'horizontal',
    alternativeLabel = false,
    nonLinear = false,
    onStepClick,
    ...props
  },
  ref,
) {
  const steps = Children.toArray(children);
  return (
    <ol
      {...props}
      ref={ref}
      className={cx(
        'tm-stepper',
        `tm-stepper-${orientation}`,
        alternativeLabel && 'tm-stepper-alternative',
        className,
      )}
    >
      {steps.map((step, index) =>
        isValidElement(step) ? (
          cloneElement(step, {
            index,
            active: step.props.active ?? index === activeStep,
            completed: step.props.completed ?? index < activeStep,
            disabled: step.props.disabled ?? (!nonLinear && index > activeStep),
            onClick:
              step.props.onClick ??
              (onStepClick ? (event) => onStepClick(event, index) : undefined),
          })
        ) : (
          <Step key={String(step)} index={index}>
            {step}
          </Step>
        ),
      )}
    </ol>
  );
});

export { Step };
export default Stepper;
