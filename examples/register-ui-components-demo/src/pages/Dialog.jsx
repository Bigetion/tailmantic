import { useState } from 'react';
import { Button } from '../components/Button.jsx';
import DialogComponent from '../components/Dialog.jsx';

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
      <DialogComponent
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
        onClose={() => setOpen(false)}
        actions={
          <>
            <Button variant="text" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                setNotice(
                  mode === 'confirmation' ? 'Changes discarded.' : 'Dialog action confirmed.',
                );
              }}
            >
              {mode === 'confirmation' ? 'Discard' : 'Continue'}
            </Button>
          </>
        }
      />
      <span className="demo-note" role="status">
        {notice || 'Press Escape or use the dialog actions to close.'}
      </span>
    </div>
  );
}
