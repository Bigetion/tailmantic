function Alert({ children, severity = 'info', title, outlined = false, action, onDismiss }) {
  const icon = { info: 'i', success: '✓', warning: '!', error: '×' }[severity];
  return (
    <div
      className={`demo-alert demo-alert-${severity}${outlined ? ' demo-alert-outlined' : ''}`}
      role="status"
    >
      <span className="demo-alert-icon" aria-hidden="true">
        {icon}
      </span>
      <div className="demo-alert-copy">
        {title && <strong className="demo-alert-title">{title}</strong>}
        <span>{children}</span>
        {action && (
          <button type="button" className="demo-alert-action" onClick={action.onClick}>
            {action.label}
          </button>
        )}
      </div>
      {onDismiss && (
        <button
          type="button"
          className="demo-alert-dismiss"
          aria-label="Dismiss alert"
          onClick={onDismiss}
        >
          ×
        </button>
      )}
    </div>
  );
}

export default function AlertDemo() {
  const [dismissed, setDismissed] = useState(false);
  const [restored, setRestored] = useState(false);
  return (
    <div className="demo-col">
      <Alert severity="info">A new version is available.</Alert>
      <Alert severity="success" title="Changes saved">
        Your work is up to date.
      </Alert>
      <Alert severity="warning">Review your workspace settings.</Alert>
      <Alert severity="error">The request could not be completed.</Alert>
      <Alert severity="info" outlined title="Outlined alert">
        This variant emphasizes the border over the filled background.
      </Alert>
      {!dismissed ? (
        <Alert
          severity="success"
          title="Deployment complete"
          action={{
            label: restored ? 'Restored' : 'View deployment',
            onClick: () => setRestored(true),
          }}
          onDismiss={() => setDismissed(true)}
        >
          {restored ? 'Deployment details are open.' : 'Your latest changes are live.'}
        </Alert>
      ) : (
        <button type="button" className="demo-alert-restore" onClick={() => setDismissed(false)}>
          Restore dismissed alert
        </button>
      )}
    </div>
  );
}

import { useState } from 'react';
