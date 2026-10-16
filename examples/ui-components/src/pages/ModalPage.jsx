import { Button, Modal } from '@tailmantic/ui-components';
import { Check, FileText, FolderKanban, ShieldCheck, X } from 'lucide-react';
import { useId, useState } from 'react';
import '@tailmantic/ui-components/button/styles';
import '@tailmantic/ui-components/modal/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('modal');
const USAGE_CODE = `import { useState } from 'react';
import { Modal } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/modal/styles';

const [open, setOpen] = useState(false);

<button type="button" onClick={() => setOpen(true)}>Open modal</button>
<Modal
  open={open}
  aria-labelledby="modal-title"
  onClose={() => setOpen(false)}
>
  <h2 id="modal-title">Project details</h2>
  <p>Review project information.</p>
</Modal>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/ModalPage.jsx',
    'Examples for project preview, backdrop behavior, and keyboard accessibility.',
  ],
  [
    'Component',
    'packages/ui-components/src/modal/Modal.jsx',
    'Portal modal with Escape/backdrop handling, focus containment, and focus restoration.',
  ],
  [
    'Styles',
    'packages/ui-components/src/modal/modal.styles.js',
    'Package-owned modal surface and example layout styles.',
  ],
];

function ModalHeading({ title, description, icon: Icon, titleId, descriptionId, onClose }) {
  return (
    <header className="modal-demo-heading">
      <span className="modal-demo-icon">
        <Icon size={15} aria-hidden="true" />
      </span>
      <span className="modal-demo-heading-copy">
        <strong id={titleId}>{title}</strong>
        <small id={descriptionId}>{description}</small>
      </span>
      <Button
        className="modal-demo-close"
        variant="text"
        aria-label="Close modal"
        onClick={onClose}
      >
        <X size={14} aria-hidden="true" />
      </Button>
    </header>
  );
}

function ProjectPreview() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const titleId = useId();
  const descriptionId = useId();

  function closeWithMessage(text) {
    setOpen(false);
    setMessage(text);
  }

  return (
    <div className="modal-demo">
      <div className="modal-demo-stage">
        <div className="modal-demo-stage-copy">
          <span className="modal-demo-eyebrow">PORTAL MODAL</span>
          <strong>Keep important details in focus</strong>
          <span>Open a centered surface above the current page.</span>
        </div>
        <Button
          onClick={() => {
            setMessage('');
            setOpen(true);
          }}
        >
          Preview project
        </Button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {message || 'The modal is rendered in a portal and locks background scrolling.'}
      </span>
      <Modal
        className="modal-demo-surface"
        open={open}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClose={() => setOpen(false)}
      >
        <ModalHeading
          title="Website refresh"
          description="A shared project for the new customer workspace experience."
          icon={FolderKanban}
          titleId={titleId}
          descriptionId={descriptionId}
          onClose={() => setOpen(false)}
        />
        <div className="modal-demo-project">
          <span className="modal-demo-project-status">
            <i /> In progress
          </span>
          <span>Updated 12 minutes ago</span>
        </div>
        <div className="modal-demo-actions">
          <Button
            className="modal-demo-text-button"
            variant="text"
            onClick={() => closeWithMessage('Project preview dismissed.')}
          >
            Close
          </Button>
          <Button onClick={() => closeWithMessage('Website refresh opened.')}>Open project</Button>
        </div>
      </Modal>
    </div>
  );
}

function BackdropBehavior() {
  const [open, setOpen] = useState(false);
  const [closeOnBackdrop, setCloseOnBackdrop] = useState(true);
  const [message, setMessage] = useState('');
  const titleId = useId();
  const descriptionId = useId();

  return (
    <div className="modal-demo">
      <div className="modal-backdrop-controls">
        <label className="modal-backdrop-toggle">
          <input
            type="checkbox"
            checked={closeOnBackdrop}
            onChange={(event) => setCloseOnBackdrop(event.target.checked)}
          />
          <span className="modal-toggle-track">
            <i />
          </span>
          Close on backdrop click
        </label>
        <Button
          variant="outlined"
          onClick={() => {
            setMessage('');
            setOpen(true);
          }}
        >
          Open modal
        </Button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {message || `Backdrop dismissal is ${closeOnBackdrop ? 'enabled' : 'disabled'}.`}
      </span>
      <Modal
        className="modal-demo-surface"
        open={open}
        closeOnBackdrop={closeOnBackdrop}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClose={() => setOpen(false)}
      >
        <ModalHeading
          title="Backdrop behavior"
          description="Click inside this surface to keep it open."
          icon={FolderKanban}
          titleId={titleId}
          descriptionId={descriptionId}
          onClose={() => setOpen(false)}
        />
        <div className="modal-demo-callout">
          <span className="modal-demo-callout-icon">
            <Check size={13} aria-hidden="true" />
          </span>
          <span>Clicks inside the modal never count as backdrop clicks.</span>
        </div>
        <div className="modal-demo-actions">
          <Button
            className="modal-demo-text-button"
            variant="text"
            onClick={() => {
              setOpen(false);
              setMessage('Closed from the modal action.');
            }}
          >
            Close modal
          </Button>
        </div>
      </Modal>
    </div>
  );
}

function KeyboardAccessibility() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const titleId = useId();
  const descriptionId = useId();

  return (
    <div className="modal-demo">
      <div className="modal-accessibility-stage">
        <span className="modal-accessibility-icon">
          <ShieldCheck size={15} aria-hidden="true" />
        </span>
        <span>
          <strong>Keyboard-ready modal</strong>
          <small>Focus moves in, stays inside, and returns to the trigger.</small>
        </span>
        <Button
          variant="outlined"
          onClick={() => {
            setMessage('');
            setOpen(true);
          }}
        >
          Open accessible modal
        </Button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {message || 'Try Tab, Shift + Tab, and Escape.'}
      </span>
      <Modal
        className="modal-demo-surface"
        open={open}
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        onClose={(_event, reason) => {
          setOpen(false);
          setMessage(
            reason === 'escapeKeyDown'
              ? 'Escape closed the modal and restored focus.'
              : 'Modal closed and focus returned to the trigger.',
          );
        }}
      >
        <ModalHeading
          title="Accessibility settings"
          description="Update these preferences for your workspace."
          icon={FileText}
          titleId={titleId}
          descriptionId={descriptionId}
          onClose={() => setOpen(false)}
        />
        <div className="modal-accessibility-options">
          <label>
            <input type="checkbox" defaultChecked /> Reduce motion
            <small>Use fewer animated transitions.</small>
          </label>
          <label>
            <input type="checkbox" /> High contrast
            <small>Increase contrast for text and controls.</small>
          </label>
        </div>
        <div className="modal-demo-actions">
          <Button className="modal-demo-text-button" variant="text" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              setOpen(false);
              setMessage('Accessibility preferences saved.');
            }}
          >
            Save preferences
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default function ModalPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Control visibility with open/onClose and label the modal surface for assistive technology."
      usageDescription="Modal renders through a portal, locks background scrolling, traps and restores focus, and supports Escape and backdrop dismissal."
    >
      <div className="component-showcase component-showcase-modal">
        <DemoPanel
          title="Project preview"
          caption="Present focused content above the page and return users to their context when it closes."
          code={getExampleCode(component.slug, 'Project preview')}
        >
          <ProjectPreview />
        </DemoPanel>
        <DemoPanel
          title="Backdrop behavior"
          caption="Choose whether clicking the backdrop dismisses the modal; interactions inside remain contained."
          code={getExampleCode(component.slug, 'Backdrop behavior')}
        >
          <BackdropBehavior />
        </DemoPanel>
        <DemoPanel
          title="Keyboard accessibility"
          caption="Keep keyboard focus inside the modal, support Escape, and restore focus when it closes."
          code={getExampleCode(component.slug, 'Keyboard accessibility')}
        >
          <KeyboardAccessibility />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
