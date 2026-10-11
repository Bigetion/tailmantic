import { useRef, useState } from 'react';
import { FilePlus2, Image, Mail, Plus, Share2, X } from 'lucide-react';
import { cx } from 'tailmantic';
import { SpeedDial } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('speed-dial');

const DEMOS = {
  'speed-dial': {
    title: 'Quick actions',
    caption: 'Group related shortcuts behind one floating action button and choose an action from the expanded dial.',
  },
  'speed-dial-directions': {
    title: 'Expansion directions',
    caption: 'Preview actions expanding up, right, down, or left from the primary floating button.',
  },
  'speed-dial-open': {
    title: 'Expanded actions',
    caption: 'Show an expanded speed dial with labeled, discoverable actions and a clear close control.',
  },
};

const ACTIONS_DATA = [
  { name: 'Upload image', Icon: Image },
  { name: 'New document', Icon: FilePlus2 },
  { name: 'Send email', Icon: Mail },
];

const DIRECTIONS = ['up', 'right', 'down', 'left'];

function StandardSpeedDialDemo() {
  const fabRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const actions = ACTIONS_DATA.map(({ name, Icon }) => ({
    name,
    icon: (
      <>
        <Icon size={15} aria-hidden="true" />
        <span className="speed-dial-action-tooltip">{name}</span>
      </>
    ),
    onClick: () => {
      setMessage(`${name} selected.`);
      setOpen(false);
      fabRef.current?.focus();
    },
  }));

  return (
    <div className="speed-dial-showcase">
      <div className="speed-dial-stage">
        <div className="speed-dial-stage-copy">
          <span className="speed-dial-kicker">WORKSPACE SHORTCUTS</span>
          <strong>What would you like to create?</strong>
          <span>Open the speed dial to get started.</span>
        </div>
        <SpeedDial
          ref={fabRef}
          actions={actions}
          open={open}
          icon={open ? <X size={19} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
          onOpen={() => { setMessage(''); setOpen(true); }}
          onClose={() => setOpen(false)}
          ariaLabel="Quick actions"
        />
      </div>
      <span className="preview-note" role="status">{message || (open ? 'Choose an action or close the speed dial.' : 'Quick actions are grouped behind one floating button.')}</span>
    </div>
  );
}

function DirectionSpeedDialDemo() {
  const [direction, setDirection] = useState('up');
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState('');

  const actions = ACTIONS_DATA.map(({ name, Icon }) => ({
    name,
    icon: (
      <>
        <Icon size={15} aria-hidden="true" />
        <span className="speed-dial-action-tooltip">{name}</span>
      </>
    ),
    onClick: () => {
      setMessage(`${name} selected.`);
      setOpen(false);
    },
  }));

  return (
    <div className="speed-dial-showcase">
      <div className="speed-dial-direction-controls" role="group" aria-label="Speed dial direction">
        {DIRECTIONS.map((item) => (
          <button
            className={cx('speed-dial-direction-option', direction === item && 'speed-dial-direction-option-active')}
            type="button"
            key={item}
            aria-pressed={direction === item}
            onClick={() => { setDirection(item); setOpen(true); setMessage(''); }}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="speed-dial-direction-stage">
        <SpeedDial
          actions={actions}
          open={open}
          direction={direction}
          icon={open ? <X size={19} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          ariaLabel="Open directional actions"
        />
        <span className="preview-note" role="status">{message || `Actions expand ${direction} from the floating button.`}</span>
      </div>
    </div>
  );
}

function AlwaysOpenSpeedDialDemo() {
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(true);

  const actions = ACTIONS_DATA.map(({ name, Icon }) => ({
    name,
    icon: (
      <>
        <Icon size={15} aria-hidden="true" />
        <span className="speed-dial-action-tooltip">{name}</span>
      </>
    ),
    onClick: () => {
      setMessage(`${name} selected.`);
      setOpen(false);
    },
  }));

  return (
    <div className="speed-dial-showcase">
      <div className="speed-dial-open-stage">
        <div className="speed-dial-open-header">
          <span className="speed-dial-open-icon"><Share2 size={15} aria-hidden="true" /></span>
          <span><strong>Share this workspace</strong><small>Invite a teammate or share a link.</small></span>
        </div>
        <SpeedDial
          actions={actions}
          open={open}
          icon={open ? <X size={19} aria-hidden="true" /> : <Plus size={20} aria-hidden="true" />}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          ariaLabel="Open sharing actions"
        />
      </div>
      <span className="preview-note" role="status">{message || (open ? 'The actions are expanded and ready to select.' : 'Open the speed dial to show the available actions.')}</span>
    </div>
  );
}

function SpeedDialDemoContent({ demoId }) {
  if (demoId === 'speed-dial-directions') return <DirectionSpeedDialDemo />;
  if (demoId === 'speed-dial-open') return <AlwaysOpenSpeedDialDemo />;
  return <StandardSpeedDialDemo />;
}

export default function SpeedDialPage() {
  const styleSource = getStyleSource('speed-dial');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <SpeedDialDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
