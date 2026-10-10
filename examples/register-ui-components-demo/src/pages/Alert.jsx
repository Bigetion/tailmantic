import { useState } from 'react';
import Alert from '../components/Alert.jsx';

export default function AlertPage() {
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
      <Alert severity="info" variant="outlined" title="Outlined alert">
        This variant emphasizes the border over the filled background.
      </Alert>
      {!dismissed ? (
        <Alert
          severity="success"
          title="Deployment complete"
          action={
            <button type="button" className="demo-alert-action" onClick={() => setRestored(true)}>
              {restored ? 'Restored' : 'View deployment'}
            </button>
          }
          onClose={() => setDismissed(true)}
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
