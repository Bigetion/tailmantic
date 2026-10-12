import { useCallback, useState } from 'react';
import { Bell, BriefcaseBusiness, ChevronDown, FileText, FolderKanban, Home, Layers, Settings, Users, X } from 'lucide-react';
import { cx } from 'tailmantic';
import { Drawer } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('drawer');

const DEMOS = {
  drawer: {
    title: 'Temporary navigation drawer',
    caption: 'Open a modal side panel for primary destinations and dismiss it with Escape or a backdrop click.',
  },
  'drawer-temporary': {
    title: 'Temporary drawer with sections',
    caption: 'Group related navigation destinations and close the drawer after selecting a page.',
  },
  'drawer-permanent': {
    title: 'Permanent navigation drawer',
    caption: 'Keep navigation visible beside the main content in a persistent application layout.',
  },
};

const BASIC_ITEMS = [
  { label: 'Overview', Icon: Home },
  { label: 'Projects', Icon: FolderKanban },
  { label: 'Team', Icon: Users },
  { label: 'Documents', Icon: FileText },
];

const SECTION_ITEMS = [
  {
    heading: 'WORKSPACE',
    items: [
      { label: 'Home', Icon: Home },
      { label: 'Projects', Icon: FolderKanban, badge: '8' },
      { label: 'Team', Icon: Users },
    ],
  },
  {
    heading: 'PREFERENCES',
    items: [
      { label: 'Notifications', Icon: Bell },
      { label: 'Settings', Icon: Settings },
    ],
  },
];

function DrawerBrand({ dense = false }) {
  return (
    <div className={cx('drawer-brand', dense && 'drawer-brand-dense')}>
      <span className="drawer-brand-mark"><BriefcaseBusiness size={15} aria-hidden="true" /></span>
      <span><strong>Northstar</strong><small>Design workspace</small></span>
    </div>
  );
}

function NavigationItems({ items, selected, onSelect }) {
  return items.map(({ label, Icon, badge }) => (
    <button
      className={cx('drawer-nav-item', selected === label && 'drawer-nav-item-active')}
      key={label}
      type="button"
      aria-current={selected === label ? 'page' : undefined}
      onClick={() => onSelect(label)}
    >
      <Icon size={15} aria-hidden="true" />
      <span>{label}</span>
      {badge && <small>{badge}</small>}
    </button>
  ));
}

function TemporaryDrawerDemo({ sections = false }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(sections ? 'Projects' : 'Overview');
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="drawer-demo">
      <div className="drawer-preview-shell">
        <header className="drawer-preview-topbar">
          <span className="drawer-preview-mark">N</span>
          <strong>Northstar</strong>
          <span className="drawer-preview-topbar-spacer" />
          <span className="drawer-preview-crumb">Workspace <ChevronDown size={11} aria-hidden="true" /></span>
        </header>
        <div className="drawer-preview-content">
          <span className="drawer-preview-eyebrow">YOUR WORKSPACE</span>
          <strong>{selected}</strong>
          <span>Open navigation to switch destinations.</span>
          <button className="tm-button tm-button-outlined" type="button" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(true)}>
            <Layers size={13} aria-hidden="true" /> Open navigation
          </button>
        </div>
      </div>
      <div className="drawer-demo-footer">
        <span className="preview-note" role="status">Current destination: <strong>{selected}</strong></span>
        <span className="preview-note">{open ? 'Drawer is open.' : 'Drawer is closed.'}</span>
      </div>
      <Drawer open={open} onClose={close} anchor="left" variant="temporary" aria-label="Workspace navigation">
        <div className="drawer-panel-header">
          <DrawerBrand dense={sections} />
          <button className="drawer-close" type="button" aria-label="Close navigation drawer" onClick={close}>
            <X size={15} aria-hidden="true" />
          </button>
        </div>
        {sections ? (
          <div className="drawer-section-list">
            {SECTION_ITEMS.map(({ heading, items }) => (
              <div className="drawer-section" key={heading}>
                <span className="drawer-section-heading">{heading}</span>
                <NavigationItems items={items} selected={selected} onSelect={(label) => { setSelected(label); close(); }} />
              </div>
            ))}
          </div>
        ) : (
          <nav className="drawer-nav" aria-label="Workspace destinations">
            <span className="drawer-section-heading">NAVIGATION</span>
            <NavigationItems items={BASIC_ITEMS} selected={selected} onSelect={(label) => { setSelected(label); close(); }} />
          </nav>
        )}
        <div className="drawer-account">
          <span className="drawer-account-avatar">JL</span>
          <span><strong>Jordan Lee</strong><small>jordan@northstar.design</small></span>
          <ChevronDown size={13} aria-hidden="true" />
        </div>
      </Drawer>
    </div>
  );
}

function PermanentDrawerDemo() {
  const [selected, setSelected] = useState('Overview');

  return (
    <div className="drawer-demo">
      <div className="drawer-permanent-shell">
        <Drawer variant="permanent" anchor="left" aria-label="Workspace navigation">
          <DrawerBrand dense />
          <nav className="drawer-permanent-nav" aria-label="Workspace destinations">
            <span className="drawer-section-heading">WORKSPACE</span>
            <NavigationItems items={BASIC_ITEMS} selected={selected} onSelect={setSelected} />
          </nav>
          <div className="drawer-account drawer-account-permanent">
            <span className="drawer-account-avatar">JL</span>
            <span><strong>Jordan Lee</strong><small>Admin</small></span>
            <ChevronDown size={12} aria-hidden="true" />
          </div>
        </Drawer>
        <main className="drawer-permanent-content">
          <div className="drawer-permanent-topline"><span>Northstar / {selected}</span><button type="button" aria-label="Notifications"><Bell size={14} /></button></div>
          <span className="drawer-preview-eyebrow">WORKSPACE</span>
          <strong>{selected}</strong>
          <p>The permanent drawer keeps primary destinations in reach while content changes alongside it.</p>
          <span className="drawer-permanent-status"><i /> Navigation stays visible</span>
        </main>
      </div>
      <div className="drawer-demo-footer">
        <span className="preview-note" role="status">Current destination: <strong>{selected}</strong></span>
        <span className="preview-note">Persistent navigation</span>
      </div>
    </div>
  );
}

function DrawerDemoContent({ demoId }) {
  if (demoId === 'drawer-permanent') return <PermanentDrawerDemo />;
  return <TemporaryDrawerDemo sections={demoId === 'drawer-temporary'} />;
}

export default function DrawerPage() {
  const styleSource = getStyleSource('drawer');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <DrawerDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
