import { Alert, Button } from '@tailmantic/ui-components';
import { Check, CircleX, Info, RotateCcw, TriangleAlert } from 'lucide-react';
import { useState } from 'react';
import '@tailmantic/ui-components/alert/styles';
import '@tailmantic/ui-components/button/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('alert');
const USAGE_CODE = `import { Alert } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/alert/styles';

<Alert severity="success" title="Changes saved">
  Your project settings have been updated.
</Alert>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/AlertPage.jsx',
    'Dedicated examples for semantic severity, outlined styling, and dismissible alerts.',
  ],
  [
    'Component',
    'packages/ui-components/src/alert/Alert.jsx',
    'Accessible alert with severity, standard/outlined variants, optional icon, and dismissal.',
  ],
  [
    'Styles',
    'packages/ui-components/src/alert/alert.styles.js',
    'Package-owned alert variants and example layout styles.',
  ],
];

const ALERTS = [
  ['info', Info, 'New update available', 'A refreshed workspace is ready to explore.'],
  ['success', Check, 'Changes saved', 'Your project settings have been updated.'],
  ['warning', TriangleAlert, 'Storage almost full', 'You have used 85% of your available storage.'],
  ['error', CircleX, 'Sync paused', 'Check your connection, then try syncing again.'],
];

function SeverityAlerts({ variant = 'standard' }) {
  return (
    <div className="tm-alert-example-stack">
      {ALERTS.map(([severity, Icon, title, message]) => (
        <Alert
          className="tm-alert-example"
          key={severity}
          severity={severity}
          variant={variant}
          icon={<Icon size={16} aria-hidden="true" />}
          title={title}
        >
          {message}
        </Alert>
      ))}
    </div>
  );
}

function AlertActions() {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState('');

  function restore() {
    setVisible(true);
    setMessage('');
  }

  return (
    <div className="preview-stack">
      {visible ? (
        <Alert
          className="tm-alert-example"
          severity="success"
          title="Draft published"
          icon={<Check size={16} aria-hidden="true" />}
          closeLabel="Dismiss published announcement"
          onClose={() => {
            setVisible(false);
            setMessage('Announcement dismissed.');
          }}
        >
          <span>Your announcement is now visible to workspace members.</span>
          <div className="tm-alert-example-actions">
            <Button
              className="tm-alert-example-action"
              size="small"
              variant="text"
              onClick={() => setMessage('Publication reverted.')}
            >
              Undo
            </Button>
            <Button
              className="tm-alert-example-action"
              size="small"
              variant="text"
              aria-label="Restore default message"
              onClick={() => setMessage('')}
            >
              <RotateCcw size={13} aria-hidden="true" />
            </Button>
          </div>
        </Alert>
      ) : (
        <div className="tm-alert-example-empty">
          <span>{message || 'Alert dismissed.'}</span>
          <Button size="small" variant="outlined" onClick={restore}>
            Restore alert
          </Button>
        </div>
      )}
      {message && (
        <span className="preview-note" role="status" aria-live="polite">
          {message}
        </span>
      )}
    </div>
  );
}

export default function AlertPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Use severity and an optional title to announce a concise message with the package Alert."
      usageDescription="Alert provides semantic roles, four severity levels, standard or outlined presentation, and optional icon and dismissal controls."
    >
      <div className="component-showcase component-showcase-alert">
        <DemoPanel
          title="Semantic severity"
          caption="Communicate informational, successful, warning, and error states with a clear icon and message."
          code={getExampleCode(component.slug, 'Semantic severity')}
        >
          <SeverityAlerts />
        </DemoPanel>
        <DemoPanel
          title="Outlined alerts"
          caption="Keep the same semantic color cues with a lighter, transparent surface."
          code={getExampleCode(component.slug, 'Outlined alerts')}
        >
          <SeverityAlerts variant="outlined" />
        </DemoPanel>
        <DemoPanel
          title="Actions and dismissal"
          caption="Offer a useful follow-up action and let users dismiss or restore the message."
          code={getExampleCode(component.slug, 'Actions and dismissal')}
        >
          <AlertActions />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
