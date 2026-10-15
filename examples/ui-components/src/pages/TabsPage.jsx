import { Tabs } from '@tailmantic/ui-components';
import { Activity, Bell, FileText, LayoutDashboard, Settings, Users } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('tabs');
const TAB_STYLES_NOTE =
  'Tabs component and example styles are provided by @tailmantic/ui-components/tabs/styles.';
const USAGE_CODE = `import { Tabs } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/tabs/styles';

<Tabs
  ariaLabel="Workspace views"
  tabs={[
    { label: 'Overview', value: 'overview', content: <Overview /> },
    { label: 'Activity', value: 'activity', content: <Activity /> },
  ]}
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/TabsPage.jsx',
    'Interactive workspace, project-filter, and settings tab examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/tabs/',
    'Accessible tab lists and panels with keyboard navigation and scrollable variants.',
  ],
  [
    'Styles',
    'packages/ui-components/src/tabs/tabs.styles.js',
    'Package-owned Tabs states and example layout styles.',
  ],
];

const WORKSPACE_TABS = [
  {
    label: 'Overview',
    value: 'overview',
    icon: <LayoutDashboard size={14} aria-hidden="true" />,
    content: (
      <div className="tm-tabs-example-card">
        <span className="tm-tabs-example-icon tm-tabs-example-icon-blue">
          <LayoutDashboard size={17} aria-hidden="true" />
        </span>
        <div className="tm-tabs-example-copy">
          <strong>Workspace overview</strong>
          <span>A quick look at the work happening across your team.</span>
        </div>
        <div className="tm-tabs-example-metric">
          <strong>12 active projects</strong>
          <span>+18% this month</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Activity',
    value: 'activity',
    icon: <Activity size={14} aria-hidden="true" />,
    content: (
      <div className="tm-tabs-example-card">
        <span className="tm-tabs-example-icon tm-tabs-example-icon-green">
          <Activity size={17} aria-hidden="true" />
        </span>
        <div className="tm-tabs-example-copy">
          <strong>Team activity</strong>
          <span>Recent updates from projects you follow.</span>
        </div>
        <div className="tm-tabs-example-metric">
          <strong>48 updates</strong>
          <span>+6% this week</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Members',
    value: 'members',
    icon: <Users size={14} aria-hidden="true" />,
    content: (
      <div className="tm-tabs-example-card">
        <span className="tm-tabs-example-icon tm-tabs-example-icon-purple">
          <Users size={17} aria-hidden="true" />
        </span>
        <div className="tm-tabs-example-copy">
          <strong>Workspace members</strong>
          <span>Manage collaborators and their access.</span>
        </div>
        <div className="tm-tabs-example-metric">
          <strong>24 teammates</strong>
          <span>3 pending invites</span>
        </div>
      </div>
    ),
  },
];

const PROJECT_FILTERS = [
  { label: 'All projects', value: 'all', count: 12 },
  { label: 'In progress', value: 'in-progress', count: 4 },
  { label: 'In review', value: 'in-review', count: 3 },
  { label: 'Completed', value: 'completed', count: 5 },
  { label: 'At risk', value: 'at-risk', count: 2 },
  { label: 'Archived', value: 'archived', count: 8 },
  { label: 'Drafts', value: 'drafts', count: 6 },
].map(({ label, value, count }) => ({
  label,
  value,
  badge: count,
  content: (
    <div className="tm-tabs-example-filter">
      <span className="tm-tabs-example-icon tm-tabs-example-icon-blue">
        <FileText size={17} aria-hidden="true" />
      </span>
      <div className="tm-tabs-example-copy">
        <strong>{label}</strong>
        <span>{count} projects match this filter.</span>
      </div>
      <span className="tm-tabs-example-count">{count}</span>
    </div>
  ),
}));

const SETTINGS_TABS = [
  {
    label: 'Profile',
    value: 'profile',
    icon: <Users size={14} aria-hidden="true" />,
    detail: 'Update your name, profile image, and personal details.',
  },
  {
    label: 'Notifications',
    value: 'notifications',
    icon: <Bell size={14} aria-hidden="true" />,
    detail: 'Choose which workspace updates you want to receive.',
  },
  {
    label: 'Preferences',
    value: 'preferences',
    icon: <Settings size={14} aria-hidden="true" />,
    detail: 'Set your language, appearance, and accessibility options.',
  },
].map(({ label, value, icon, detail }) => ({
  label,
  value,
  icon,
  content: (
    <div className="tm-tabs-example-settings">
      <span className="tm-tabs-example-icon tm-tabs-example-icon-blue">{icon}</span>
      <strong>{label} settings</strong>
      <p>{detail}</p>
    </div>
  ),
}));

function WorkspaceTabsExample() {
  const [value, setValue] = useState('overview');

  return (
    <div className="tm-tabs-example">
      <Tabs
        ariaLabel="Workspace views"
        onChange={(_event, nextValue) => setValue(nextValue)}
        tabs={WORKSPACE_TABS}
        value={value}
      />
      <span className="tm-tabs-example-status" role="status">
        Showing the {WORKSPACE_TABS.find((tab) => tab.value === value)?.label.toLowerCase()} view.
      </span>
    </div>
  );
}

function ScrollableTabsExample() {
  const [value, setValue] = useState('all');

  return (
    <div className="tm-tabs-example">
      <Tabs
        ariaLabel="Project filters"
        onChange={(_event, nextValue) => setValue(nextValue)}
        size="sm"
        tabs={PROJECT_FILTERS}
        value={value}
        variant="scrollable"
      />
      <span className="tm-tabs-example-status" role="status">
        Showing {PROJECT_FILTERS.find((tab) => tab.value === value)?.label.toLowerCase()}.
      </span>
    </div>
  );
}

function CenteredTabsExample() {
  const [value, setValue] = useState('profile');

  return (
    <div className="tm-tabs-example tm-tabs-example-centered">
      <Tabs
        ariaLabel="Settings sections"
        onChange={(_event, nextValue) => setValue(nextValue)}
        tabs={SETTINGS_TABS}
        value={value}
        variant="centered"
      />
      <span className="tm-tabs-example-status" role="status">
        Updating {SETTINGS_TABS.find((tab) => tab.value === value)?.label.toLowerCase()} settings.
      </span>
    </div>
  );
}

export default function TabsPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Provide each tab's label and panel content, then choose controlled state or let Tabs manage selection."
      usageDescription="Tabs supports accessible keyboard navigation, icons and badges, four list variants, and horizontal or vertical orientation."
    >
      <div className="component-showcase component-showcase-tabs">
        <DemoPanel
          title="Workspace views"
          caption="Switch between related sections while keeping each panel connected to its selected tab."
          code={TAB_STYLES_NOTE}
        >
          <WorkspaceTabsExample />
        </DemoPanel>
        <DemoPanel
          title="Scrollable project filters"
          caption="Browse a longer filter list with scroll controls and a live count on every tab."
          code={TAB_STYLES_NOTE}
        >
          <ScrollableTabsExample />
        </DemoPanel>
        <DemoPanel
          title="Centered settings"
          caption="Center a compact set of settings tabs and keep the active panel easy to scan."
          code={TAB_STYLES_NOTE}
        >
          <CenteredTabsExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
