import { useState } from 'react';
import { Activity, Check, Info, RotateCcw, X } from 'lucide-react';
import { Alert, Button } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('alert');

const DEMOS = {
  alert: {
    title: 'Semantic severity',
    caption: 'Communicate informational, successful, warning, and error states with a clear icon and message.',
  },
  'alert-outlined': {
    title: 'Outlined alerts',
    caption: 'Keep the same semantic color cues with a lighter, transparent surface.',
  },
  'alert-actions': {
    title: 'Actions and dismissal',
    caption: 'Offer a useful follow-up action and let users dismiss or restore the message.',
  },
};

const ALERTS = [
  ['info', Info, 'New update available', 'A refreshed workspace is ready to explore.'],
  ['success', Check, 'Changes saved', 'Your project settings have been updated.'],
  ['warning', Activity, 'Storage almost full', 'You have used 85% of your available storage.'],
  ['error', X, 'Sync paused', 'Check your connection, then try syncing again.'],
];

function AlertVariants({ outlined = false }) {
  return (
    <div className="alert-stack">
      {ALERTS.map(([severity, Icon, title, description]) => (
        <Alert
          key={severity}
          severity={severity}
          variant={outlined ? 'outlined' : 'standard'}
          icon={<Icon className="alert-icon" size={17} aria-hidden="true" />}
          title={title}
        >
          <span className="alert-copy">
            <small>{description}</small>
          </span>
        </Alert>
      ))}
    </div>
  );
}

function AlertActions() {
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState('');

  return (
    <div className="preview-stack">
      {visible ? (
        <Alert
          severity="success"
          icon={<Check className="alert-icon" size={17} aria-hidden="true" />}
          title="Draft published"
          onClose={() => {
            setVisible(false);
            setMessage('Announcement dismissed.');
          }}
          closeLabel="Dismiss Draft published alert"
        >
          <span className="alert-copy">
            <small>Your announcement is now visible to workspace members.</small>
          </span>
          <div className="alert-actions">
            <button
              className="alert-action-link"
              type="button"
              onClick={() => setMessage('Publication reverted.')}
            >
              Undo
            </button>
            <button
              className="alert-action-link alert-action-icon"
              type="button"
              aria-label="Restore default message"
              onClick={() => setMessage('')}
            >
              <RotateCcw size={13} aria-hidden="true" />
            </button>
          </div>
        </Alert>
      ) : (
        <div className="alert-empty">
          <span>{message || 'Alert dismissed.'}</span>
          <Button
            variant="text"
            type="button"
            onClick={() => { setVisible(true); setMessage(''); }}
          >
            Restore alert
          </Button>
        </div>
      )}
      {message && visible && (
        <span className="preview-note" role="status" aria-live="polite">{message}</span>
      )}
      {!visible && (
        <span className="preview-note" role="status" aria-live="polite">{message}</span>
      )}
    </div>
  );
}

function AlertDemoContent({ demoId }) {
  if (demoId === 'alert-outlined') return <AlertVariants outlined />;
  if (demoId === 'alert-actions') return <AlertActions />;
  return <AlertVariants />;
}

export default function AlertPage() {
  const styleSource = getStyleSource('alert');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <AlertDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
