import { useCallback, useState } from 'react';
import { AlertTriangle, Check, FileText } from 'lucide-react';
import { Dialog, Button } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('dialog');

const DEMOS = {
  dialog: {
    title: 'Confirmation dialog',
    caption: 'Help users confirm whether to save or discard pending changes.',
  },
  'dialog-confirmation': {
    title: 'Destructive confirmation',
    caption: 'Clearly explain an irreversible action and distinguish the destructive choice.',
  },
  'dialog-fullscreen': {
    title: 'Focused composition',
    caption: 'Use a larger dialog for a short multi-field task without navigating away.',
  },
};

function DialogDemoContent({ demoId }) {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const isFullscreen = demoId === 'dialog-fullscreen';
  const isConfirmation = demoId === 'dialog-confirmation';
  const close = useCallback(() => setOpen(false), []);

  const title = isFullscreen
    ? 'Create announcement'
    : isConfirmation
      ? 'Delete project?'
      : 'Save your changes?';
  const description = isFullscreen
    ? 'Write a short update to share with your workspace.'
    : isConfirmation
      ? 'This will permanently delete the project and its contents. This action cannot be undone.'
      : 'You have unsaved changes. Save them before leaving this page.';

  const titleIcon = isConfirmation
    ? <AlertTriangle size={17} aria-hidden="true" />
    : isFullscreen
      ? <FileText size={17} aria-hidden="true" />
      : <Check size={17} aria-hidden="true" />;

  return (
    <div className="dialog-demo">
      {notice && (
        <span className="preview-note" role="status" aria-live="polite">{notice}</span>
      )}
      <Button
        variant="contained"
        type="button"
        onClick={() => { setNotice(''); setOpen(true); }}
      >
        {isFullscreen ? 'Compose announcement' : isConfirmation ? 'Delete project' : 'Open dialog'}
      </Button>
      <Dialog
        open={open}
        onClose={(_, reason) => {
          if (reason === 'backdropClick' || reason === 'escapeKeyDown' || reason === 'closeButtonClick') {
            close();
          }
        }}
        title={
          <span className="dialog-heading">
            <span className={`dialog-heading-icon${isConfirmation ? ' dialog-heading-icon-danger' : ''}`}>
              {titleIcon}
            </span>
            <span className="dialog-heading-copy">{title}</span>
          </span>
        }
        description={description}
        className={`${isFullscreen ? 'dialog-box-fullscreen' : ''} ${isConfirmation ? 'dialog-box-danger' : ''}`.trim() || undefined}
        actions={
          isFullscreen ? (
            <div className="dialog-editor">
              <label className="dialog-field">
                <span>Announcement title</span>
                <input placeholder="What should your team know?" />
              </label>
              <label className="dialog-field">
                <span>Message</span>
                <textarea rows={5} placeholder="Share a quick update..." />
              </label>
              <div className="dialog-audience">
                <span className="dialog-audience-dot" /> Visible to{' '}
                <strong>All workspace members</strong>
              </div>
              <div className="dialog-actions">
                <Button variant="text" type="button" onClick={close}>Cancel</Button>
                <Button
                  variant="contained"
                  type="button"
                  onClick={() => { close(); setNotice('Announcement published to your workspace.'); }}
                >
                  Publish announcement
                </Button>
              </div>
            </div>
          ) : (
            <>
              <Button
                variant="text"
                type="button"
                onClick={() => { close(); setNotice(isConfirmation ? 'Project kept.' : 'Changes discarded.'); }}
              >
                {isConfirmation ? 'Keep project' : 'Discard'}
              </Button>
              <Button
                variant={isConfirmation ? 'outlined' : 'contained'}
                color={isConfirmation ? 'danger' : 'primary'}
                type="button"
                onClick={() => { close(); setNotice(isConfirmation ? 'Project deleted.' : 'Changes saved.'); }}
              >
                {isConfirmation ? 'Delete project' : 'Save changes'}
              </Button>
            </>
          )
        }
      />
      <span className="preview-note">
        {isFullscreen
          ? 'Escape or close to dismiss. Tab stays within the dialog.'
          : 'Press Escape or click the backdrop to close.'}
      </span>
    </div>
  );
}

export default function DialogPage() {
  const styleSource = getStyleSource('dialog');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <DialogDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
