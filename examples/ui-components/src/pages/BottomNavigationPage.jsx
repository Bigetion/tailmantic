import { BottomNavigation, BottomNavigationItem } from '@tailmantic/ui-components';
import { Bell, Bookmark, Compass, Home, Search, UserRound } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('bottom-navigation');
const DESTINATIONS = [
  { value: 'home', label: 'Home', Icon: Home },
  { value: 'explore', label: 'Explore', Icon: Compass },
  { value: 'saved', label: 'Saved', Icon: Bookmark },
  { value: 'profile', label: 'Profile', Icon: UserRound },
];
const DESTINATION_CONTENT = {
  home: ['Your workspace', 'A quick look at what matters today.', Home],
  explore: ['Discover something new', 'Browse projects and ideas from your team.', Search],
  saved: ['Saved for later', 'Your bookmarked updates are ready when you are.', Bookmark],
  profile: ['Your profile', 'Manage your account and personal preferences.', UserRound],
};
const BOTTOM_NAVIGATION_STYLES_NOTE =
  'Bottom Navigation component and example styles are provided by @tailmantic/ui-components/bottom-navigation/styles.';
const USAGE_CODE = `import { useState } from 'react';
import { BottomNavigation, BottomNavigationItem } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/bottom-navigation/styles';

const [value, setValue] = useState('home');

<BottomNavigation value={value} onChange={(_event, nextValue) => setValue(nextValue)}>
  <BottomNavigationItem value="home" label="Home" icon={<Home />} />
  <BottomNavigationItem value="saved" label="Saved" icon={<Bookmark />} />
</BottomNavigation>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/BottomNavigationPage.jsx',
    'Dedicated destination, label behavior, and badge examples using package components.',
  ],
  [
    'Components',
    'packages/ui-components/src/bottom-navigation/',
    'Controlled BottomNavigation and BottomNavigationItem with selection callbacks.',
  ],
  [
    'Styles',
    'packages/ui-components/src/bottom-navigation/bottom-navigation.styles.js',
    'Package-owned navigation surface, item states, and example layout styles.',
  ],
];

function NavigationContent({ value }) {
  const [title, description, Icon] = DESTINATION_CONTENT[value];

  return (
    <div className="rgi-bottom-navigation-example-content">
      <span className="rgi-bottom-navigation-example-content-icon">
        <Icon size={20} aria-hidden="true" />
      </span>
      <span className="rgi-bottom-navigation-example-content-copy">
        <strong>{title}</strong>
        <small>{description}</small>
      </span>
      {value === 'saved' && (
        <span className="rgi-bottom-navigation-example-unread">
          <Bell size={14} aria-hidden="true" /> 2 new
        </span>
      )}
    </div>
  );
}

function DevicePreview({ mode }) {
  const [value, setValue] = useState('home');
  const compactLabels = mode === 'labels';
  const iconsOnly = mode === 'badges';
  const items = DESTINATIONS.map(({ value: itemValue, label, Icon }) => (
    <BottomNavigationItem
      key={itemValue}
      value={itemValue}
      label={label}
      icon={<Icon size={20} />}
      className={[
        'rgi-bottom-navigation-example-item',
        compactLabels && 'rgi-bottom-navigation-example-compact-item',
        iconsOnly && 'rgi-bottom-navigation-example-icon-item',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-label={label}
    >
      {itemValue === 'saved' && iconsOnly && (
        <span className="rgi-bottom-navigation-example-badge" aria-hidden="true">
          2
        </span>
      )}
    </BottomNavigationItem>
  ));

  return (
    <div className={`rgi-bottom-navigation-example rgi-bottom-navigation-example-${mode}`}>
      <div className="rgi-bottom-navigation-example-device">
        <div className="rgi-bottom-navigation-example-device-top">
          <span>
            <i /> Workspace
          </span>
          <time>9:41</time>
        </div>
        <NavigationContent value={value} />
        <BottomNavigation
          className={[
            'rgi-bottom-navigation-example-bar',
            compactLabels && 'rgi-bottom-navigation-example-compact',
            iconsOnly && 'rgi-bottom-navigation-example-icons-only',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-label="Primary navigation"
          value={value}
          onChange={(_event, nextValue) => setValue(String(nextValue))}
        >
          {items}
        </BottomNavigation>
        <div className="rgi-bottom-navigation-example-home-indicator" aria-hidden="true">
          <span />
        </div>
      </div>
      <div className="rgi-bottom-navigation-example-footer">
        <span className="rgi-bottom-navigation-example-status" role="status">
          Selected destination: <strong>{DESTINATION_CONTENT[value][0]}</strong>
        </span>
        {compactLabels && (
          <span className="rgi-bottom-navigation-example-hint">
            Inactive labels stay hidden until selected.
          </span>
        )}
        {iconsOnly && (
          <span className="rgi-bottom-navigation-example-hint">
            <Bell size={14} aria-hidden="true" /> 2 new items in Saved
          </span>
        )}
      </div>
    </div>
  );
}

export default function BottomNavigationPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Control the active destination with BottomNavigation and let each item report its value."
      usageDescription="BottomNavigation supports controlled values and change callbacks; BottomNavigationItem provides labels, icons, and accessible current-page state."
    >
      <div className="component-showcase component-showcase-bottom-navigation">
        <DemoPanel
          title="Primary destinations"
          caption="Switch between top-level sections and reflect the active destination."
          code={BOTTOM_NAVIGATION_STYLES_NOTE}
        >
          <DevicePreview mode="standard" />
        </DemoPanel>
        <DemoPanel
          title="Compact labels"
          caption="Keep inactive destinations compact and reveal the label for the current section."
          code={BOTTOM_NAVIGATION_STYLES_NOTE}
        >
          <DevicePreview mode="labels" />
        </DemoPanel>
        <DemoPanel
          title="Badges and icon states"
          caption="Pair a notification count with clear selected and unread states."
          code={BOTTOM_NAVIGATION_STYLES_NOTE}
        >
          <DevicePreview mode="badges" />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
