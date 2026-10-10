import { Check } from 'lucide-react';
import { useState } from 'react';

const STEPS = ['Details', 'Review', 'Complete'];

export default function Stepper() {
  const [active, setActive] = useState(0);
  const [layout, setLayout] = useState('horizontal');
  const completed = active === STEPS.length - 1;

  return (
    <section className="demo-section">
      <span className="demo-section-title">Three-step setup</span>
      <label className="demo-stepper-control">
        Layout
        <select value={layout} onChange={(event) => setLayout(event.target.value)}>
          <option value="horizontal">Horizontal</option>
          <option value="vertical">Vertical</option>
          <option value="alternative">Alternative labels</option>
        </select>
      </label>
      <ol className={`demo-stepper demo-stepper-${layout}`}>
        {STEPS.map((step, index) => (
          <li className={index <= active ? 'demo-step demo-step-active' : 'demo-step'} key={step}>
            <span className="demo-step-marker">
              {index < active ? <Check size={14} /> : index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <div className="demo-stepper-content">
        <strong>{STEPS[active]}</strong>
        <span>
          {active === 0
            ? 'Add the workspace details to get started.'
            : active === 1
              ? 'Check your choices before finishing.'
              : 'Your setup is ready to use.'}
        </span>
      </div>
      <div className="demo-stepper-actions">
        <span className="demo-note">
          {completed ? 'Setup complete.' : `Step ${active + 1} of ${STEPS.length}`}
        </span>
        <button
          type="button"
          disabled={completed}
          onClick={() => setActive((step) => Math.min(step + 1, STEPS.length - 1))}
        >
          {completed ? 'Finished' : 'Continue'}
        </button>
      </div>
    </section>
  );
}
