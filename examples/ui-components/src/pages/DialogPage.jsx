import { Button, Dialog } from '@tailmantic/ui-components';
import { AlertTriangle, Check, FileText } from 'lucide-react';
import { useState } from 'react';
import '@tailmantic/ui-components/dialog/styles';
import '@tailmantic/ui-components/button/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('dialog');
const DIALOG_STYLES_NOTE =
  'Dialog and its example layout styles are provided by @tailmantic/ui-components/dialog/styles.';
const USAGE_CODE = `import { Button, Dialog } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/dialog/styles';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open dialog</Button>
<Dialog
  open={open}
  title="Save your changes?"
  description="You have unsaved changes. Save them before leaving this page."
  onClose={() => setOpen(false)}
  actions={<Button onClick={() => setOpen(false)}>Save changes</Button>}
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/DialogPage.jsx',
    'Dedicated examples for confirmation, destructive action, and fullscreen composition.',
  ],
  [
    'Component',
    'packages/ui-components/src/dialog/Dialog.jsx',
    'Accessible modal dialog with focus trapping/restoration, Escape, backdrop dismissal, and action slot.',
  ],
  [
    'Styles',
    'packages/ui-components/src/dialog/dialog.styles.js',
    'Package-owned dialog variants and example layout styles.',
  ],
];

function ConfirmationDialog({ destructive = false }) {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const title = destructive ? 'Delete project?' : 'Save your changes?';
  const description = destructive
    ? 'This will permanently delete the project and its contents. This action cannot be undone.'
    : 'You have unsaved changes. Save them before leaving this page.';
  const headingIcon = destructive ? (
    <AlertTriangle size={17} aria-hidden="true" />
  ) : (
    <Check size={17} aria-hidden="true" />
  );

  function finish(message) {
    setOpen(false);
    setNotice(message);
  }

  return (
    <div className="rgi-dialog-example-trigger-area">
      <Button
        className="rgi-dialog-example-trigger"
        variant={destructive ? 'outlined' : 'contained'}
        color={destructive ? 'danger' : 'primary'}
        onClick={() => {
          setNotice('');
          setOpen(true);
        }}
      >
        {destructive ? 'Delete project' : 'Open dialog'}
      </Button>
      <Dialog
        className={
          destructive
            ? 'rgi-dialog-example-surface rgi-dialog-example-surface-danger'
            : 'rgi-dialog-example-surface'
        }
        open={open}
        title={(
          <>
            <span className="rgi-dialog-example-heading-icon" aria-hidden="true">{headingIcon}</span>
            <span>{title}</span>
          </>
        )}
        description={description}
        onClose={() => setOpen(false)}
        actions={(
          <>
            <Button variant="text" onClick={() => finish(destructive ? 'Project kept.' : 'Changes discarded.')}>
              {destructive ? 'Keep project' : 'Discard'}
            </Button>
            <Button
              color={destructive ? 'danger' : 'primary'}
              onClick={() => finish(destructive ? 'Project deleted.' : 'Changes saved.')}
            >
              {destructive ? 'Delete project' : 'Save changes'}
            </Button>
          </>
        )}
      />
      <span className="preview-note">
        {notice || 'Press Escape or click the backdrop to close.'}
      </span>
    </div>
  );
}

function AnnouncementDialog() {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState('');

  function publish(event) {
    event.preventDefault();
    setOpen(false);
    setNotice('Announcement published to your workspace.');
  }

  return (
    <div className="rgi-dialog-example-trigger-area">
      <Button
        className="rgi-dialog-example-trigger"
        onClick={() => {
          setNotice('');
          setOpen(true);
        }}
      >
        Compose announcement
      </Button>
      <Dialog
        className="rgi-dialog-example-surface rgi-dialog-example-surface-fullscreen"
        open={open}
        title={(
          <>
            <span className="rgi-dialog-example-heading-icon" aria-hidden="true">
              <FileText size={17} />
            </span>
            <span>Create announcement</span>
          </>
        )}
        description="Write a short update to share with your workspace."
        onClose={() => setOpen(false)}
        actions={(
          <>
            <Button variant="text" onClick={() => setOpen(false)}>Cancel</Button>
            <Button form="rgi-dialog-announcement-form" type="submit">
              Publish announcement
            </Button>
          </>
        )}
      >
        <form
          className="rgi-dialog-example-form"
          id="rgi-dialog-announcement-form"
          onSubmit={publish}
        >
          <label className="rgi-dialog-example-field">
            <span>Announcement title</span>
            <input required placeholder="What should your team know?" />
          </label>
          <label className="rgi-dialog-example-field">
            <span>Message</span>
            <textarea required rows={5} placeholder="Share a quick update..." />
          </label>
          <div className="rgi-dialog-example-audience">
            <span aria-hidden="true" />
            Visible to <strong>All workspace members</strong>
          </div>
        </form>
      </Dialog>
      {notice && <span className="preview-note" role="status" aria-live="polite">{notice}</span>}
    </div>
  );
}

export default function DialogPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Control a Dialog with open/onClose and compose its title, description, content, and actions."
      usageDescription="The package Dialog renders in a portal, traps and restores focus, closes with Escape or backdrop interaction, and exposes accessible labeling."
    >
      <div className="component-showcase component-showcase-dialog">
        <DemoPanel
          title="Confirmation dialog"
          caption="Help users confirm whether to save or discard pending changes."
          code={DIALOG_STYLES_NOTE}
        >
          <ConfirmationDialog />
        </DemoPanel>
        <DemoPanel
          title="Destructive confirmation"
          caption="Clearly explain an irreversible action and distinguish the destructive choice."
          code={DIALOG_STYLES_NOTE}
        >
          <ConfirmationDialog destructive />
        </DemoPanel>
        <DemoPanel
          title="Focused composition"
          caption="Use a larger dialog for a short multi-field task without navigating away."
          code={DIALOG_STYLES_NOTE}
        >
          <AnnouncementDialog />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
