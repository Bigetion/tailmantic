import { List, ListItem, ListItemText } from '@tailmantic/ui-components';
import {
  Bell,
  ChevronRight,
  CreditCard,
  FileText,
  Folder,
  HelpCircle,
  Mail,
  Settings,
  ShieldCheck,
} from 'lucide-react';
import { useState } from 'react';
import { cx } from 'tailmantic';
import '@tailmantic/ui-components/list/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('list');
const NAVIGATION_ITEMS = [
  [Folder, 'Projects', '12 active projects'],
  [FileText, 'Documents', 'Recently updated'],
  [Settings, 'Preferences', 'Manage your workspace'],
  [HelpCircle, 'Help center', 'Guides and support'],
];
const MESSAGES = [
  ['AC', 'Ava Chen', 'Shared the Q3 product brief', '2m', 'tm-list-example-avatar-blue'],
  ['JM', 'Jordan Miller', 'Left a comment on your draft', '18m', 'tm-list-example-avatar-violet'],
  ['SK', 'Sam Kim', 'Invited you to Design review', '1h', 'tm-list-example-avatar-green'],
];
const SETTINGS = [
  [Bell, 'Product updates', 'New features and release notes', 'product'],
  [ShieldCheck, 'Security alerts', 'Important account activity', 'security'],
  [CreditCard, 'Billing reminders', 'Invoices and payment updates', 'billing'],
];
const USAGE_CODE = `import List, { ListItem, ListItemText } from '@tailmantic/ui-components/list';
import '@tailmantic/ui-components/list/styles';

<List aria-label="Recent updates">
  <ListItem divider>
    <ListItemText primary="Project update" secondary="A new task was added" />
  </ListItem>
</List>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/ListPage.jsx',
    'Dedicated examples for navigation, secondary content, and interactive preferences.',
  ],
  [
    'Component',
    'packages/ui-components/src/list/List.jsx',
    'Composable semantic list, list item, and primary/secondary text components.',
  ],
  [
    'Styles',
    'packages/ui-components/src/list/list.styles.js',
    'Package-owned list variants and example layout styles.',
  ],
];

function ListNavigation() {
  const [active, setActive] = useState('Projects');

  return (
    <div className="preview-stack">
      <nav aria-label="Workspace navigation">
        <List className="tm-list-example" disablePadding>
          {NAVIGATION_ITEMS.map(([Icon, label, description]) => (
            <ListItem className="tm-list-example-navigation-item" divider key={label}>
              <button
                className={cx(
                  'tm-list-example-navigation-button',
                  active === label && 'tm-list-example-navigation-button-active',
                )}
                type="button"
                aria-current={active === label ? 'page' : undefined}
                onClick={() => setActive(label)}
              >
                <span className="tm-list-example-icon"><Icon size={17} aria-hidden="true" /></span>
                <ListItemText primary={label} secondary={description} />
                <ChevronRight className="tm-list-example-trailing" size={15} aria-hidden="true" />
              </button>
            </ListItem>
          ))}
        </List>
      </nav>
      <span className="preview-note" role="status" aria-live="polite">Current section: {active}</span>
    </div>
  );
}

function ListSecondary() {
  return (
    <div className="tm-list-example tm-list-example-messages">
      <List aria-label="Recent messages" disablePadding>
        {MESSAGES.map(([initials, name, message, time, tone]) => (
          <ListItem className="tm-list-example-message-item" divider key={name}>
            <span className={cx('tm-list-example-avatar', tone)} aria-hidden="true">{initials}</span>
            <ListItemText primary={name} secondary={message} />
            <time className="tm-list-example-time">{time}</time>
          </ListItem>
        ))}
      </List>
      <div className="tm-list-example-footer">
        <Mail size={13} aria-hidden="true" /> Showing your latest conversations
      </div>
    </div>
  );
}

function ListInteractive() {
  const [enabled, setEnabled] = useState({ product: true, security: true, billing: false });
  const [notice, setNotice] = useState('Choose which updates you want to receive.');

  const toggle = (key) => {
    setEnabled((current) => {
      const next = { ...current, [key]: !current[key] };
      const enabledCount = Object.values(next).filter(Boolean).length;
      setNotice(`${enabledCount} of ${SETTINGS.length} notification types enabled.`);
      return next;
    });
  };

  return (
    <div className="preview-stack">
      <List className="tm-list-example" aria-label="Notification preferences" disablePadding>
        {SETTINGS.map(([Icon, title, description, key]) => (
          <ListItem className="tm-list-example-setting-item" divider key={key}>
            <button
              className="tm-list-example-setting-button"
              type="button"
              aria-pressed={enabled[key]}
              onClick={() => toggle(key)}
            >
              <span className="tm-list-example-icon"><Icon size={17} aria-hidden="true" /></span>
              <ListItemText primary={title} secondary={description} />
              <span className={cx('tm-list-example-switch', enabled[key] && 'tm-list-example-switch-on')} aria-hidden="true">
                <i />
              </span>
            </button>
          </ListItem>
        ))}
      </List>
      <span className="preview-note" role="status" aria-live="polite">{notice}</span>
    </div>
  );
}

export default function ListPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Compose a semantic list from List, ListItem, and ListItemText."
      usageDescription="Use ListItem for individual rows and ListItemText to keep primary and supporting text consistently grouped. Add interaction semantics to a nested button when a row is actionable."
    >
      <div className="component-showcase component-showcase-list">
        <DemoPanel
          title="Workspace navigation"
          caption="Use a clear leading icon, descriptive label, and active state for section navigation."
          code={getExampleCode(component.slug, 'Workspace navigation')}
        >
          <ListNavigation />
        </DemoPanel>
        <DemoPanel
          title="Secondary content"
          caption="Pair primary labels with supporting details and compact timestamps."
          code={getExampleCode(component.slug, 'Secondary content')}
        >
          <ListSecondary />
        </DemoPanel>
        <DemoPanel
          title="Interactive preferences"
          caption="Make each row an accessible control and reflect its state immediately."
          code={getExampleCode(component.slug, 'Interactive preferences')}
        >
          <ListInteractive />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
