import { Bell, LockKeyhole, UserRound } from 'lucide-react';
import { Divider } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('divider');

const DEMOS = {
  divider: {
    title: 'Horizontal dividers',
    caption: 'Separate related sections with a subtle, full-width rule.',
  },
  'divider-vertical': {
    title: 'Vertical divider',
    caption: 'Group controls in a horizontal toolbar without adding visual noise.',
  },
  'divider-inset': {
    title: 'Inset divider',
    caption: 'Align a separator with list content while leaving leading icons clear.',
  },
};

function DividerHorizontal() {
  return (
    <div className="divider-demo">
      <span className="divider-label">Account settings</span>
      <Divider />
      <span className="divider-label">Privacy &amp; security</span>
      <Divider />
      <span className="divider-label">Notifications</span>
    </div>
  );
}

function DividerVertical() {
  return (
    <div className="divider-toolbar" role="group" aria-label="Account navigation">
      <button type="button"><UserRound size={15} aria-hidden="true" /> Profile</button>
      <Divider orientation="vertical" />
      <button type="button"><LockKeyhole size={15} aria-hidden="true" /> Security</button>
      <Divider orientation="vertical" />
      <button type="button"><Bell size={15} aria-hidden="true" /> Alerts</button>
    </div>
  );
}

function DividerInset() {
  return (
    <div className="divider-list" aria-label="Settings list">
      <div className="divider-list-item">
        <span className="divider-list-icon"><UserRound size={16} aria-hidden="true" /></span>
        <span className="divider-list-copy"><strong>Personal details</strong><small>Name, email, and profile</small></span>
      </div>
      <Divider inset />
      <div className="divider-list-item">
        <span className="divider-list-icon"><LockKeyhole size={16} aria-hidden="true" /></span>
        <span className="divider-list-copy"><strong>Sign-in and security</strong><small>Password and two-step verification</small></span>
      </div>
    </div>
  );
}

function DividerDemoContent({ demoId }) {
  if (demoId === 'divider-vertical') return <DividerVertical />;
  if (demoId === 'divider-inset') return <DividerInset />;
  return <DividerHorizontal />;
}

export default function DividerPage() {
  const styleSource = getStyleSource('divider');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <DividerDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
