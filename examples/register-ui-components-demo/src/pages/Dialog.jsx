import { X } from 'lucide-react';
import { useEffect, useId, useState } from 'react';
import { Button } from '../components/Button.jsx';

function Dialog({
  open,
  title,
  description,
  onClose,
  className = '',
  actionLabel = 'Discard',
  onConfirm,
}) {
  const id = useId();
  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="demo-dialog-backdrop" role="presentation">
      <section
        className={`demo-dialog ${className}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${id}-title`}
        aria-describedby={`${id}-description`}
      >
        <button
          type="button"
          className="demo-dialog-close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          <X size={16} aria-hidden="true" />
        </button>
        <h2 className="demo-dialog-title" id={`${id}-title`}>
          {title}
        </h2>
        <p className="demo-dialog-description" id={`${id}-description`}>
          {description}
        </p>
        <div className="demo-dialog-actions">
          <Button variant="text" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onConfirm ?? onClose}>{actionLabel}</Button>
        </div>
      </section>
    </div>
  );
}

export default function DialogDemo() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('confirmation');
  const [notice, setNotice] = useState('');
  return (
    <div className="demo-dialog-demo">
      <fieldset className="demo-dialog-modes">
        <legend className="sr-only">Dialog type</legend>
        {[
          ['basic', 'Basic'],
          ['confirmation', 'Confirmation'],
          ['fullscreen', 'Fullscreen'],
        ].map(([value, label]) => (
          <button
            type="button"
            key={value}
            className={
              mode === value ? 'demo-dialog-mode demo-dialog-mode-active' : 'demo-dialog-mode'
            }
            aria-pressed={mode === value}
            onClick={() => {
              setMode(value);
              setNotice('');
            }}
          >
            {label}
          </button>
        ))}
      </fieldset>
      <Button onClick={() => setOpen(true)}>
        {mode === 'basic'
          ? 'Open dialog'
          : mode === 'fullscreen'
            ? 'Open fullscreen dialog'
            : 'Review changes'}
      </Button>
      <Dialog
        open={open}
        className={mode === 'fullscreen' ? 'demo-dialog-fullscreen' : ''}
        title={
          mode === 'basic'
            ? 'Project details'
            : mode === 'fullscreen'
              ? 'Full-screen workflow'
              : 'Discard changes?'
        }
        description={
          mode === 'basic'
            ? 'This dialog presents focused information without leaving the current page.'
            : mode === 'fullscreen'
              ? 'A spacious surface can host a focused multi-step task.'
              : 'Your unsaved edits will be lost.'
        }
        actionLabel={mode === 'confirmation' ? 'Discard' : 'Continue'}
        onConfirm={() => {
          setOpen(false);
          setNotice(mode === 'confirmation' ? 'Changes discarded.' : 'Dialog action confirmed.');
        }}
        onClose={() => setOpen(false)}
      />
      <span className="demo-note" role="status">
        {notice || 'Press Escape or use the dialog actions to close.'}
      </span>
    </div>
  );
}
