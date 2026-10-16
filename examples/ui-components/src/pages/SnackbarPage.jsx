import { Button, Snackbar } from '@tailmantic/ui-components';
import { RotateCcw, Undo2 } from 'lucide-react';
import { useCallback, useState } from 'react';
import '@tailmantic/ui-components/snackbar/styles';
import '@tailmantic/ui-components/button/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('snackbar');
const USAGE_CODE = `import { Snackbar } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/snackbar/styles';

<Snackbar open severity="success" autoHideDuration={5000} onClose={handleClose}>
  Changes saved successfully.
</Snackbar>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/SnackbarPage.jsx',
    'Interactive examples for dismissible, actionable, and positioned notifications.',
  ],
  [
    'Component',
    'packages/ui-components/src/snackbar/Snackbar.jsx',
    'Accessible severity notification with an optional action, close button, and auto-hide timer.',
  ],
  [
    'Styles',
    'packages/ui-components/src/snackbar/snackbar.styles.js',
    'Package-owned severity styles and example layout styles.',
  ],
];

function useSnackbar(initialMessage) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(initialMessage);
  const [notice, setNotice] = useState('');

  const handleClose = useCallback((reason) => {
    setOpen(false);
    setNotice(
      reason === 'timeout' ? 'Notification dismissed automatically.' : 'Notification dismissed.',
    );
  }, []);

  function show(nextMessage = initialMessage) {
    setMessage(nextMessage);
    setNotice('');
    setOpen(true);
  }

  return { open, message, notice, handleClose, show, setOpen, setMessage, setNotice };
}

function DismissibleSnackbarExample() {
  const notification = useSnackbar('Project settings saved.');

  return (
    <div className="tm-snackbar-example-stack">
      <div className="tm-snackbar-example-stage">
        <Snackbar
          open={notification.open}
          severity="success"
          autoHideDuration={5000}
          onClose={notification.handleClose}
        >
          {notification.message}
        </Snackbar>
        {!notification.open && (
          <span className="tm-snackbar-example-placeholder">
            Your notification will appear here.
          </span>
        )}
      </div>
      <div className="tm-snackbar-example-controls">
        <Button variant="contained" size="small" onClick={() => notification.show()}>
          Show notification
        </Button>
        <span className="preview-note">
          {notification.open
            ? 'Automatically dismisses after 5 seconds.'
            : notification.notice || 'Ready to show.'}
        </span>
      </div>
    </div>
  );
}

function ActionSnackbarExample() {
  const notification = useSnackbar('Changes saved successfully.');

  function undoSave() {
    notification.setOpen(false);
    notification.setMessage('Save undone.');
    notification.setNotice('The previous version has been restored.');
  }

  function restoreSave() {
    notification.setMessage('Changes saved successfully.');
    notification.setNotice('');
    notification.setOpen(true);
  }

  return (
    <div className="tm-snackbar-example-stack">
      <div className="tm-snackbar-example-stage">
        <Snackbar
          open={notification.open}
          severity="success"
          autoHideDuration={5000}
          onClose={notification.handleClose}
          action={
            notification.message === 'Changes saved successfully.' ? (
              <Button
                className="tm-snackbar-example-action"
                variant="text"
                size="small"
                onClick={undoSave}
              >
                <Undo2 size={13} aria-hidden="true" />
                Undo
              </Button>
            ) : undefined
          }
        >
          {notification.message}
        </Snackbar>
        {!notification.open && (
          <span className="tm-snackbar-example-placeholder">
            {notification.notice || 'Your notification will appear here.'}
          </span>
        )}
      </div>
      <div className="tm-snackbar-example-controls">
        <Button variant="contained" size="small" onClick={() => notification.show()}>
          Show notification
        </Button>
        {notification.message === 'Save undone.' && (
          <Button variant="outlined" size="small" onClick={restoreSave}>
            <RotateCcw size={13} aria-hidden="true" />
            Restore saved state
          </Button>
        )}
        <span className="preview-note" role="status" aria-live="polite">
          {notification.open ? 'Undo is available for 5 seconds.' : notification.notice}
        </span>
      </div>
    </div>
  );
}

function PositionSnackbarExample() {
  const notification = useSnackbar('Workspace preferences updated.');
  const [position, setPosition] = useState('center');

  function choosePosition(nextPosition) {
    setPosition(nextPosition);
    notification.show();
  }

  return (
    <div className="tm-snackbar-example-stack">
      <fieldset className="tm-snackbar-example-position-controls">
        <legend className="tm-snackbar-example-position-label">Snackbar position</legend>
        {['start', 'center', 'end'].map((item) => (
          <Button
            key={item}
            className="tm-snackbar-example-position-option"
            variant={position === item ? 'contained' : 'text'}
            size="small"
            aria-pressed={position === item}
            onClick={() => choosePosition(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Button>
        ))}
      </fieldset>
      <div className={`tm-snackbar-example-stage tm-snackbar-example-stage-${position}`}>
        <Snackbar
          open={notification.open}
          severity="info"
          autoHideDuration={5000}
          onClose={notification.handleClose}
        >
          {notification.message}
        </Snackbar>
        {!notification.open && (
          <span className="tm-snackbar-example-placeholder">
            Choose a position to preview the notification.
          </span>
        )}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {notification.open
          ? `Showing at ${position}. Automatically dismisses after 5 seconds.`
          : notification.notice}
      </span>
    </div>
  );
}

export default function SnackbarPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Render a Snackbar while it is open and close it when its action or auto-hide timeout completes."
      usageDescription="Snackbar communicates concise, non-blocking feedback with four semantic severities, an optional action, a close button, and configurable auto-hide timing."
    >
      <div className="component-showcase component-showcase-snackbar">
        <DemoPanel
          title="Dismissible notification"
          caption="Show a brief status message, then dismiss it or let it disappear automatically."
          code={getExampleCode(component.slug, 'Dismissible notification')}
        >
          <DismissibleSnackbarExample />
        </DemoPanel>
        <DemoPanel
          title="Snackbar with action"
          caption="Offer a quick, reversible action while keeping the message concise and non-blocking."
          code={getExampleCode(component.slug, 'Snackbar with action')}
        >
          <ActionSnackbarExample />
        </DemoPanel>
        <DemoPanel
          title="Placement options"
          caption="Compare start, center, and end placement within a notification area."
          code={getExampleCode(component.slug, 'Placement options')}
        >
          <PositionSnackbarExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
