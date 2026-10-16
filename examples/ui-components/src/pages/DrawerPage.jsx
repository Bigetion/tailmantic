import { Drawer } from '@tailmantic/ui-components';
import {
  Bell,
  BriefcaseBusiness,
  ChevronDown,
  FileText,
  FolderKanban,
  Home,
  Layers,
  Settings,
  Users,
  X,
} from 'lucide-react';
import { useCallback, useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('drawer');
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
const USAGE_CODE = `import { useState } from 'react';
import { Drawer } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/drawer/styles';

const [open, setOpen] = useState(false);

<Drawer
  open={open}
  variant="temporary"
  aria-label="Workspace navigation"
  onClose={() => setOpen(false)}
>
  <nav aria-label="Workspace destinations">...</nav>
</Drawer>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/DrawerPage.jsx',
    'Dedicated temporary, sectioned, and permanent navigation examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/drawer/Drawer.jsx',
    'Drawer surface with variants, anchors, Escape/backdrop dismissal, and focus handling.',
  ],
  [
    'Styles',
    'packages/ui-components/src/drawer/drawer.styles.js',
    'Package-owned drawer behavior styles and example layouts.',
  ],
];

function DrawerBrand() {
  return (
    <div className="tm-drawer-example-brand">
      <span className="tm-drawer-example-brand-mark">
        <BriefcaseBusiness size={18} aria-hidden="true" />
      </span>
      <span>
        <strong>Northstar</strong>
        <small>Design workspace</small>
      </span>
    </div>
  );
}

function NavigationItems({ items, selected, onSelect }) {
  return items.map(({ label, Icon, badge }) => (
    <button
      className={[
        'tm-drawer-example-nav-item',
        selected === label && 'tm-drawer-example-nav-item-active',
      ]
        .filter(Boolean)
        .join(' ')}
      key={label}
      type="button"
      aria-current={selected === label ? 'page' : undefined}
      onClick={() => onSelect(label)}
    >
      <Icon size={17} aria-hidden="true" />
      <span>{label}</span>
      {badge && <small>{badge}</small>}
    </button>
  ));
}

function DrawerContents({ onClose, onSelect, selected, sections = false }) {
  return (
    <>
      <div className="tm-drawer-example-panel-header">
        <DrawerBrand />
        <button
          className="tm-drawer-example-close"
          type="button"
          aria-label="Close navigation drawer"
          onClick={onClose}
        >
          <X size={17} aria-hidden="true" />
        </button>
      </div>
      {sections ? (
        <div className="tm-drawer-example-section-list">
          {SECTION_ITEMS.map(({ heading, items }) => (
            <div className="tm-drawer-example-section" key={heading}>
              <span className="tm-drawer-example-section-heading">{heading}</span>
              <NavigationItems
                items={items}
                selected={selected}
                onSelect={(label) => {
                  onSelect(label);
                  onClose();
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <nav className="tm-drawer-example-nav" aria-label="Workspace destinations">
          <span className="tm-drawer-example-section-heading">NAVIGATION</span>
          <NavigationItems
            items={BASIC_ITEMS}
            selected={selected}
            onSelect={(label) => {
              onSelect(label);
              onClose();
            }}
          />
        </nav>
      )}
      <div className="tm-drawer-example-account">
        <span className="tm-drawer-example-account-avatar">JL</span>
        <span className="tm-drawer-example-account-info">
          <strong>Jordan Lee</strong>
          <small>jordan@northstar.design</small>
        </span>
        <ChevronDown size={15} aria-hidden="true" />
      </div>
    </>
  );
}

function TemporaryDrawerExample({ sections = false }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(sections ? 'Projects' : 'Overview');
  const close = useCallback(() => setOpen(false), []);

  return (
    <div className="tm-drawer-example">
      <div className="tm-drawer-example-shell">
        <header className="tm-drawer-example-topbar">
          <span className="tm-drawer-example-mark">N</span>
          <strong>Northstar</strong>
          <span className="tm-drawer-example-spacer" />
          <span className="tm-drawer-example-trigger">
            Workspace <ChevronDown size={14} aria-hidden="true" />
          </span>
        </header>
        <div className="tm-drawer-example-content">
          <span className="tm-drawer-example-eyebrow">YOUR WORKSPACE</span>
          <strong className="tm-drawer-example-title">{selected}</strong>
          <span className="tm-drawer-example-description">
            Open navigation to switch destinations.
          </span>
          <button
            className="tm-drawer-example-trigger"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Layers size={16} aria-hidden="true" /> Open navigation
          </button>
        </div>
      </div>
      <div className="tm-drawer-example-footer" role="status">
        <span>
          Current destination: <strong>{selected}</strong>
        </span>
        <span>Drawer is {open ? 'open' : 'closed'}.</span>
      </div>
      <Drawer
        open={open}
        variant="temporary"
        aria-label="Workspace navigation"
        className="tm-drawer-example-panel"
        onClose={close}
      >
        <DrawerContents
          onClose={close}
          onSelect={setSelected}
          selected={selected}
          sections={sections}
        />
      </Drawer>
    </div>
  );
}

function PermanentDrawerExample() {
  const [selected, setSelected] = useState('Overview');

  return (
    <div className="tm-drawer-example">
      <div className="tm-drawer-example-permanent-shell">
        <Drawer
          variant="permanent"
          aria-label="Workspace navigation"
          className="tm-drawer-example-permanent-panel"
        >
          <DrawerBrand />
          <nav className="tm-drawer-example-nav" aria-label="Workspace destinations">
            <span className="tm-drawer-example-section-heading">WORKSPACE</span>
            <NavigationItems items={BASIC_ITEMS} selected={selected} onSelect={setSelected} />
          </nav>
          <div className="tm-drawer-example-account">
            <span className="tm-drawer-example-account-avatar">JL</span>
            <span className="tm-drawer-example-account-info">
              <strong>Jordan Lee</strong>
              <small>Admin</small>
            </span>
            <ChevronDown size={14} aria-hidden="true" />
          </div>
        </Drawer>
        <main className="tm-drawer-example-permanent-content">
          <div className="tm-drawer-example-permanent-topline">
            <span>Northstar / {selected}</span>
            <button type="button" aria-label="Notifications">
              <Bell size={16} aria-hidden="true" />
            </button>
          </div>
          <span className="tm-drawer-example-eyebrow">WORKSPACE</span>
          <strong className="tm-drawer-example-title">{selected}</strong>
          <p className="tm-drawer-example-description">
            The permanent drawer keeps primary destinations in reach while content changes alongside
            it.
          </p>
          <span className="tm-drawer-example-permanent-status">
            <i /> Navigation stays visible
          </span>
        </main>
      </div>
      <div className="tm-drawer-example-footer" role="status">
        <span>
          Current destination: <strong>{selected}</strong>
        </span>
        <span>Persistent navigation</span>
      </div>
    </div>
  );
}

export default function DrawerPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Choose a temporary drawer for modal navigation or a permanent variant for always-visible destinations."
      usageDescription="Drawer supports temporary, persistent, and permanent variants, four anchors, Escape and backdrop dismissal, and focus management for temporary navigation."
    >
      <div className="component-showcase component-showcase-drawer">
        <DemoPanel
          title="Temporary navigation drawer"
          caption="Open a modal side panel for primary destinations and dismiss it with Escape or a backdrop click."
          code={getExampleCode(component.slug, 'Temporary navigation drawer')}
        >
          <TemporaryDrawerExample />
        </DemoPanel>
        <DemoPanel
          title="Temporary drawer with sections"
          caption="Group related navigation destinations and close the drawer after selecting a page."
          code={getExampleCode(component.slug, 'Temporary drawer with sections')}
        >
          <TemporaryDrawerExample sections />
        </DemoPanel>
        <DemoPanel
          title="Permanent navigation drawer"
          caption="Keep navigation visible beside the main content in a persistent application layout."
          code={getExampleCode(component.slug, 'Permanent navigation drawer')}
        >
          <PermanentDrawerExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
