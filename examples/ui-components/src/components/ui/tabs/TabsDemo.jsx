import { Activity, Bell, FileText, LayoutDashboard, Settings, Users } from 'lucide-react';
import { cx } from 'tailmantic';
import Tabs from '@tailmantic/ui-components/tabs';

const WORKSPACE_TABS = [
  {
    label: 'Overview',
    value: 'overview',
    icon: <LayoutDashboard size={13} aria-hidden="true" />,
    content: (
      <div className="tabs-overview-card">
        <span className={cx('tabs-overview-icon', 'tabs-overview-icon-blue')}>
          <LayoutDashboard size={15} aria-hidden="true" />
        </span>
        <div className="tabs-overview-copy">
          <strong>Workspace overview</strong>
          <span>A quick look at the work happening across your team.</span>
        </div>
        <div className="tabs-overview-metric">
          <strong>12 active projects</strong>
          <span>+18%</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Activity',
    value: 'activity',
    icon: <Activity size={13} aria-hidden="true" />,
    content: (
      <div className="tabs-overview-card">
        <span className={cx('tabs-overview-icon', 'tabs-overview-icon-green')}>
          <Activity size={15} aria-hidden="true" />
        </span>
        <div className="tabs-overview-copy">
          <strong>Team activity</strong>
          <span>Recent updates from projects you follow.</span>
        </div>
        <div className="tabs-overview-metric">
          <strong>48 updates this week</strong>
          <span>+6%</span>
        </div>
      </div>
    ),
  },
  {
    label: 'Members',
    value: 'members',
    icon: <Users size={13} aria-hidden="true" />,
    content: (
      <div className="tabs-overview-card">
        <span className={cx('tabs-overview-icon', 'tabs-overview-icon-purple')}>
          <Users size={15} aria-hidden="true" />
        </span>
        <div className="tabs-overview-copy">
          <strong>Workspace members</strong>
          <span>Manage collaborators and their access.</span>
        </div>
        <div className="tabs-overview-metric">
          <strong>24 teammates</strong>
          <span>3 pending</span>
        </div>
      </div>
    ),
  },
];

const SCROLLABLE_TABS = [
  { label: 'All projects', value: 'all', badge: '12', content: null },
  { label: 'In progress', value: 'in-progress', badge: '4', content: null },
  { label: 'In review', value: 'in-review', badge: '3', content: null },
  { label: 'Completed', value: 'completed', badge: '5', content: null },
  { label: 'At risk', value: 'at-risk', badge: '2', content: null },
  { label: 'Archived', value: 'archived', badge: '8', content: null },
  { label: 'Drafts', value: 'drafts', badge: '6', content: null },
].map((tab) => ({
  ...tab,
  content: (
    <div className="tabs-filter-panel">
      <span className="tabs-filter-icon"><FileText size={15} aria-hidden="true" /></span>
      <span>
        <strong>{tab.label}</strong>
        <small>{tab.badge} projects match this filter.</small>
      </span>
      <span className="tabs-filter-count">{tab.badge}</span>
    </div>
  ),
}));

const SETTINGS_TABS = [
  {
    label: 'Profile',
    value: 'profile',
    icon: <Users size={13} aria-hidden="true" />,
    detail: 'Update your name, profile image, and personal details.',
  },
  {
    label: 'Notifications',
    value: 'notifications',
    icon: <Bell size={13} aria-hidden="true" />,
    detail: 'Choose which workspace updates you want to receive.',
  },
  {
    label: 'Preferences',
    value: 'preferences',
    icon: <Settings size={13} aria-hidden="true" />,
    detail: 'Set your language, appearance, and accessibility options.',
  },
].map((tab) => ({
  ...tab,
  content: (
    <div className="tabs-centered-panel">
      <span className="tabs-centered-icon">
        {tab.icon}
      </span>
      <strong>{tab.label} settings</strong>
      <p>{tab.detail}</p>
    </div>
  ),
}));

function WorkspaceOverviewDemo() {
  return (
    <div className="tabs-showcase">
      <Tabs
        tabs={WORKSPACE_TABS}
        ariaLabel="Workspace views"
        variant="standard"
        size="md"
      />
    </div>
  );
}

function ScrollableTabsDemo() {
  return (
    <div className="tabs-showcase">
      <Tabs
        tabs={SCROLLABLE_TABS}
        ariaLabel="Project filters"
        variant="scrollable"
        size="sm"
      />
    </div>
  );
}

function CenteredTabsDemo() {
  return (
    <div className="tabs-showcase tabs-centered-showcase">
      <Tabs
        tabs={SETTINGS_TABS}
        ariaLabel="Settings sections"
        variant="centered"
        size="md"
      />
    </div>
  );
}

export default function TabsDemo({ demoId }) {
  if (demoId === 'tabs-scrollable') return <ScrollableTabsDemo />;
  if (demoId === 'tabs-centered') return <CenteredTabsDemo />;
  return <WorkspaceOverviewDemo />;
}
