import { SpeedDial } from '@tailmantic/ui-components';
import { FilePlus2, Image, Mail, Plus, Share2, Users } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('speed-dial');
const DIRECTIONS = ['up', 'right', 'down', 'left'];
const QUICK_ACTIONS = [
  { name: 'Upload image', icon: <Image size={17} aria-hidden="true" /> },
  { name: 'New document', icon: <FilePlus2 size={17} aria-hidden="true" /> },
  { name: 'Send email', icon: <Mail size={17} aria-hidden="true" /> },
];
const SHARE_ACTIONS = [
  { name: 'Invite teammate', icon: <Users size={17} aria-hidden="true" /> },
  { name: 'Share link', icon: <Share2 size={17} aria-hidden="true" /> },
  { name: 'Send email', icon: <Mail size={17} aria-hidden="true" /> },
];
const SPEED_DIAL_STYLES_NOTE =
  'SpeedDial component and example styles are provided by @tailmantic/ui-components/speed-dial/styles.';
const USAGE_CODE = `import { useState } from 'react';
import { SpeedDial } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/speed-dial/styles';

const [message, setMessage] = useState('');

<SpeedDial
  ariaLabel="Open quick actions"
  direction="up"
  actions={[
    { name: 'Upload image', icon: <ImageIcon /> },
    { name: 'New document', icon: <DocumentIcon /> },
  ]}
  onActionClick={(_event, action) => setMessage(\`\${action.name} selected.\`)}
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/SpeedDialPage.jsx',
    'Dedicated quick action, expansion direction, and sharing examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/speed-dial/',
    'Expandable action group with controlled and uncontrolled open state.',
  ],
  [
    'Styles',
    'packages/ui-components/src/speed-dial/speed-dial.styles.js',
    'Package-owned SpeedDial states and example layout styles.',
  ],
];

function QuickActionsExample() {
  const [message, setMessage] = useState('');

  return (
    <div className="rgi-speed-dial-example">
      <div className="rgi-speed-dial-example-stage">
        <div className="rgi-speed-dial-example-copy">
          <span className="rgi-speed-dial-example-kicker">WORKSPACE SHORTCUTS</span>
          <strong>What would you like to create?</strong>
          <span>Open the speed dial to get started.</span>
        </div>
        <SpeedDial
          ariaLabel="Open quick actions"
          actions={QUICK_ACTIONS}
          onActionClick={(_event, action) => setMessage(`${action.name} selected.`)}
        />
      </div>
      <span className="rgi-speed-dial-example-status" role="status" aria-live="polite">
        {message || 'Quick actions are grouped behind one floating button.'}
      </span>
    </div>
  );
}

function DirectionExample() {
  const [direction, setDirection] = useState('up');
  const [message, setMessage] = useState('');

  return (
    <div className="rgi-speed-dial-example">
      <fieldset className="rgi-speed-dial-example-directions">
        <legend className="sr-only">Speed dial direction</legend>
        {DIRECTIONS.map((value) => (
          <button
            className="rgi-speed-dial-example-direction"
            key={value}
            type="button"
            aria-pressed={direction === value}
            onClick={() => {
              setDirection(value);
              setMessage('');
            }}
          >
            {value}
          </button>
        ))}
      </fieldset>
      <div className="rgi-speed-dial-example-direction-stage">
        <SpeedDial
          ariaLabel="Open directional actions"
          actions={QUICK_ACTIONS}
          defaultOpen
          direction={direction}
          onActionClick={(_event, action) => setMessage(`${action.name} selected.`)}
        />
        <span className="rgi-speed-dial-example-direction-note" role="status">
          {message || `Actions expand ${direction} from the floating button.`}
        </span>
      </div>
    </div>
  );
}

function SharingExample() {
  const [message, setMessage] = useState('');

  return (
    <div className="rgi-speed-dial-example">
      <div className="rgi-speed-dial-example-share-card">
        <span className="rgi-speed-dial-example-share-icon">
          <Share2 size={18} aria-hidden="true" />
        </span>
        <span className="rgi-speed-dial-example-share-copy">
          <strong>Share this workspace</strong>
          <span>Invite a teammate or share a link.</span>
        </span>
        <SpeedDial
          ariaLabel="Open sharing actions"
          actions={SHARE_ACTIONS}
          defaultOpen
          icon={<Plus size={20} aria-hidden="true" />}
          onActionClick={(_event, action) => setMessage(`${action.name} selected.`)}
        />
      </div>
      <span className="rgi-speed-dial-example-status" role="status" aria-live="polite">
        {message || 'The sharing actions are expanded and ready to select.'}
      </span>
    </div>
  );
}

export default function SpeedDialPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Group related shortcuts into one expandable control and handle each action from onActionClick."
      usageDescription="SpeedDial supports four expansion directions, controlled or default open state, disabled actions, and action selection callbacks."
    >
      <div className="component-showcase component-showcase-speed-dial">
        <DemoPanel
          title="Quick actions"
          caption="Group common workspace tasks behind one floating button."
          code={SPEED_DIAL_STYLES_NOTE}
        >
          <QuickActionsExample />
        </DemoPanel>
        <DemoPanel
          title="Expansion directions"
          caption="Choose whether actions expand above, below, or to either side of the trigger."
          code={SPEED_DIAL_STYLES_NOTE}
        >
          <DirectionExample />
        </DemoPanel>
        <DemoPanel
          title="Expanded actions"
          caption="Keep sharing shortcuts visible beside the content they act on."
          code={SPEED_DIAL_STYLES_NOTE}
        >
          <SharingExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
