import { Divider } from '@tailmantic/ui-components';
import { Bell, LockKeyhole, UserRound } from 'lucide-react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('divider');
const DIVIDER_STYLES_NOTE =
  'Divider and example layout styles are provided by @tailmantic/ui-components/divider/styles.';
const USAGE_CODE = `import { Divider } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/divider/styles';

<Divider />
<Divider orientation="vertical" flexItem />
<Divider inset />`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/DividerPage.jsx',
    'Dedicated examples for horizontal, vertical, and inset dividers.',
  ],
  [
    'Component',
    'packages/ui-components/src/divider/Divider.jsx',
    'Semantic horizontal/vertical separators with optional inset and text alignment.',
  ],
  [
    'Styles',
    'packages/ui-components/src/divider/divider.styles.js',
    'Package-owned Divider variants and example layout styles.',
  ],
];

function HorizontalDividers() {
  return (
    <div className="tm-divider-example">
      <span className="tm-divider-example-label">Account settings</span>
      <Divider />
      <span className="tm-divider-example-label">Privacy &amp; security</span>
      <Divider />
      <span className="tm-divider-example-label">Notifications</span>
    </div>
  );
}

function VerticalDivider() {
  return (
    <div className="tm-divider-toolbar" role="group" aria-label="Account navigation">
      <button type="button">
        <UserRound size={15} aria-hidden="true" /> Profile
      </button>
      <Divider orientation="vertical" flexItem />
      <button type="button">
        <LockKeyhole size={15} aria-hidden="true" /> Security
      </button>
      <Divider orientation="vertical" flexItem />
      <button type="button">
        <Bell size={15} aria-hidden="true" /> Alerts
      </button>
    </div>
  );
}

function InsetDivider() {
  return (
    <div className="tm-divider-list" aria-label="Settings list">
      <div className="tm-divider-list-item">
        <span className="tm-divider-list-icon">
          <UserRound size={16} aria-hidden="true" />
        </span>
        <span className="tm-divider-list-copy">
          <strong>Personal details</strong>
          <small>Name, email, and profile</small>
        </span>
      </div>
      <Divider inset />
      <div className="tm-divider-list-item">
        <span className="tm-divider-list-icon">
          <LockKeyhole size={16} aria-hidden="true" />
        </span>
        <span className="tm-divider-list-copy">
          <strong>Sign-in and security</strong>
          <small>Password and two-step verification</small>
        </span>
      </div>
    </div>
  );
}

export default function DividerPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Separate related content with a semantic horizontal, vertical, or inset Divider."
      usageDescription="Use orientation for vertical separators, flexItem when the line sits in a flex toolbar, and inset to align a separator with list content."
    >
      <div className="component-showcase component-showcase-divider">
        <DemoPanel
          title="Horizontal dividers"
          caption="Separate related sections with a subtle, full-width rule."
          code={DIVIDER_STYLES_NOTE}
        >
          <HorizontalDividers />
        </DemoPanel>
        <DemoPanel
          title="Vertical divider"
          caption="Group controls in a horizontal toolbar without adding visual noise."
          code={DIVIDER_STYLES_NOTE}
        >
          <VerticalDivider />
        </DemoPanel>
        <DemoPanel
          title="Inset divider"
          caption="Align a separator with list content while leaving leading icons clear."
          code={DIVIDER_STYLES_NOTE}
        >
          <InsetDivider />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
