import { FloatingActionButton } from '@tailmantic/ui-components';
import { FileText, Heart, Image, Mail, Plus, X } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('floating-action-button');
const ACTIONS = [
  { label: 'Upload image', Icon: Image },
  { label: 'New document', Icon: FileText },
  { label: 'Send email', Icon: Mail },
];
const USAGE_CODE = `import { FloatingActionButton } from '@tailmantic/ui-components';

<FloatingActionButton aria-label="Create item">
  <Plus aria-hidden="true" />
</FloatingActionButton>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/FloatingActionButtonPage.jsx',
    'Self-contained page with interactive Floating Action Button examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/floating-action-button/FloatingActionButton.jsx',
    'Reusable floating action button with size, variant, label, and native button props.',
  ],
  [
    'Styles',
    'packages/ui-components/src/floating-action-button/floating-action-button.styles.js',
    'Tailmantic styles bundled with the Floating Action Button package.',
  ],
];

function FloatingActions() {
  return (
    <fieldset
      className="preview-row"
      aria-label="Floating actions"
      style={{ border: 0, margin: 0, minWidth: 0, padding: 0 }}
    >
      <FloatingActionButton aria-label="Create item">
        <Plus size={21} aria-hidden="true" />
      </FloatingActionButton>
      <FloatingActionButton aria-label="Add to favorites" variant="secondary">
        <Heart size={18} aria-hidden="true" />
      </FloatingActionButton>
      <FloatingActionButton variant="extended" aria-label="Compose a message">
        <Mail size={16} aria-hidden="true" />
        Compose
      </FloatingActionButton>
    </fieldset>
  );
}

function FloatingActionSizes() {
  return (
    <fieldset
      className="preview-row"
      aria-label="Floating action button sizes"
      style={{ border: 0, margin: 0, minWidth: 0, padding: 0 }}
    >
      <FloatingActionButton aria-label="Create, small size" size="small">
        <Plus size={17} aria-hidden="true" />
      </FloatingActionButton>
      <FloatingActionButton aria-label="Create, default size">
        <Plus size={21} aria-hidden="true" />
      </FloatingActionButton>
      <FloatingActionButton aria-label="Create, large size" size="large">
        <Plus size={25} aria-hidden="true" />
      </FloatingActionButton>
      <span className="preview-note">Small · Default · Large</span>
    </fieldset>
  );
}

function QuickActionGroup() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('');

  return (
    <div className="preview-stack">
      <fieldset
        className="preview-row"
        aria-label="Quick actions"
        style={{ border: 0, margin: 0, minWidth: 0, padding: 0 }}
      >
        <FloatingActionButton
          aria-label={open ? 'Close quick actions' : 'Open quick actions'}
          aria-expanded={open}
          aria-controls="fab-quick-actions"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Plus size={21} aria-hidden="true" />}
        </FloatingActionButton>
        {open && (
          <fieldset
            className="preview-row"
            id="fab-quick-actions"
            aria-label="Available quick actions"
            style={{ border: 0, margin: 0, minWidth: 0, padding: 0 }}
          >
            {ACTIONS.map(({ label, Icon }) => (
              <FloatingActionButton
                key={label}
                aria-label={label}
                variant="action"
                size="small"
                onClick={() => {
                  setSelected(label);
                  setOpen(false);
                }}
              >
                <Icon size={16} aria-hidden="true" />
              </FloatingActionButton>
            ))}
          </fieldset>
        )}
      </fieldset>
      <span className="preview-note" role="status" aria-live="polite">
        {selected
          ? `${selected} selected.`
          : open
            ? 'Choose a quick action.'
            : 'Open the action menu.'}
      </span>
    </div>
  );
}

export default function FloatingActionButtonPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Import FloatingActionButton from the package and choose the size and visual variant for your primary action."
      usageDescription="The package component provides the button semantics, accessible labeling, and Tailmantic styles."
    >
      <div className="component-showcase component-showcase-floating-action-button">
        <DemoPanel
          title="Floating actions"
          caption="Keep the screen’s primary action easy to reach and visually distinct."
          code={getExampleCode(component.slug, 'Floating actions')}
        >
          <FloatingActions />
        </DemoPanel>
        <DemoPanel
          title="FAB sizes"
          caption="Choose a control size that fits the action’s prominence and available space."
          code={getExampleCode(component.slug, 'FAB sizes')}
        >
          <FloatingActionSizes />
        </DemoPanel>
        <DemoPanel
          title="Quick action group"
          caption="Reveal secondary actions from one compact floating action button."
          code={getExampleCode(component.slug, 'Quick action group')}
        >
          <QuickActionGroup />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
