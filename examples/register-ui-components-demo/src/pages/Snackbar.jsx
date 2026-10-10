import { Check, RotateCcw, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Snackbar() {
  const [mode, setMode] = useState('auto');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('Your changes have been saved.');
  const [position, setPosition] = useState('bottom');

  useEffect(() => {
    if (!open || mode === 'persistent') return undefined;
    const timer = window.setTimeout(() => setOpen(false), 5000);
    return () => window.clearTimeout(timer);
  }, [mode, open]);

  function showSnackbar() {
    setMessage('Your changes have been saved.');
    setOpen(true);
  }

  return (
    <section className="demo-section">
      <span className="demo-section-title">Auto-hide, action, and position</span>
      <fieldset className="demo-snackbar-modes">
        <legend className="sr-only">Snackbar behavior</legend>
        {[
          ['auto', 'Auto-hide'],
          ['action', 'Undo action'],
          ['persistent', 'Persistent'],
        ].map(([value, label]) => (
          <button
            type="button"
            className={
              mode === value ? 'demo-snackbar-mode demo-snackbar-mode-active' : 'demo-snackbar-mode'
            }
            aria-pressed={mode === value}
            key={value}
            onClick={() => {
              setMode(value);
              setOpen(false);
            }}
          >
            {label}
          </button>
        ))}
      </fieldset>
      <fieldset className="demo-snackbar-modes">
        <legend className="sr-only">Snackbar position</legend>
        {['bottom', 'top'].map((value) => (
          <button
            type="button"
            className={
              position === value
                ? 'demo-snackbar-mode demo-snackbar-mode-active'
                : 'demo-snackbar-mode'
            }
            aria-pressed={position === value}
            key={value}
            onClick={() => setPosition(value)}
          >
            {value}
          </button>
        ))}
      </fieldset>
      <button type="button" className="demo-snackbar-show" onClick={showSnackbar}>
        Show notification
      </button>
      <div className={`demo-snackbar-stage demo-snackbar-stage-${position}`}>
        {open && (
          <div className="demo-snackbar" role="status">
            <Check size={16} className="demo-snackbar-icon" />
            <span>{message}</span>
            {mode === 'action' && (
              <button
                type="button"
                className="demo-snackbar-action"
                onClick={() => {
                  setMessage('Action undone.');
                }}
              >
                <RotateCcw size={13} /> Undo
              </button>
            )}
            <button
              type="button"
              className="demo-snackbar-close"
              aria-label="Dismiss notification"
              onClick={() => setOpen(false)}
            >
              <X size={15} />
            </button>
          </div>
        )}
      </div>
      <span className="demo-note">
        {mode === 'persistent'
          ? 'This notification remains until dismissed.'
          : 'Notifications dismiss automatically after five seconds.'}
      </span>
    </section>
  );
}
