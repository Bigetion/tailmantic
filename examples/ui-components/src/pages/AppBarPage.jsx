import { AppBar, Button } from '@tailmantic/ui-components';
import { Bell, Check, ChevronDown, Command, Menu, Search, Settings, X } from 'lucide-react';
import { useState } from 'react';
import '@tailmantic/ui-components/button/styles';
import '@tailmantic/ui-components/app-bar/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('app-bar');
const APP_BAR_STYLES_NOTE =
  'AppBar and its example layout styles are provided by @tailmantic/ui-components/app-bar/styles.';
const USAGE_CODE = `import { AppBar } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/app-bar/styles';

<AppBar position="sticky" elevation={1}>
  <Brand />
  <Navigation />
  <Actions />
</AppBar>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/AppBarPage.jsx',
    'Interactive examples for workspace navigation, search, and responsive controls.',
  ],
  [
    'Component',
    'packages/ui-components/src/app-bar/AppBar.jsx',
    'Semantic application header with static, sticky, or fixed positioning and elevation.',
  ],
  [
    'Styles',
    'packages/ui-components/src/app-bar/app-bar.styles.js',
    'Package-owned AppBar variants and example layout styles.',
  ],
];
const ITEMS = ['Overview', 'Projects', 'Team'];

function Brand({ subtitle }) {
  return (
    <div className="tm-app-bar-example-brand">
      <span className="tm-app-bar-example-brand-mark">T</span>
      <span className="tm-app-bar-example-brand-copy">
        <strong>Tailmantic UI</strong>
        <small>{subtitle}</small>
      </span>
    </div>
  );
}

function AppBarExample({ variant }) {
  const isSearch = variant === 'search';
  const isResponsive = variant === 'responsive';
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [selected, setSelected] = useState('Overview');
  const [notice, setNotice] = useState('');

  const filteredItems = ITEMS.filter((item) => item.toLowerCase().includes(query.toLowerCase()));

  function selectItem(item) {
    setSelected(item);
    setMenuOpen(false);
    setNotice(`${item} selected.`);
  }

  function toggleNotifications() {
    const nextEnabled = !notifications;
    setNotifications(nextEnabled);
    setNotice(nextEnabled ? 'Notifications enabled.' : 'Notifications muted.');
  }

  return (
    <div className="tm-app-bar-example">
      <div className="tm-app-bar-example-preview">
        <AppBar
          className="tm-app-bar-example-header"
          aria-label="Workspace navigation"
          position="static"
          elevation={1}
        >
          {isResponsive && (
            <Button
              className="tm-app-bar-example-mobile-menu"
              variant="text"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </Button>
          )}
          <Brand subtitle={isResponsive ? selected : 'Design workspace'} />
          <nav className="tm-app-bar-example-nav" aria-label="Workspace">
            {ITEMS.map((item) => (
              <Button
                className={`tm-app-bar-example-nav-link${selected === item ? ' tm-app-bar-example-nav-link-active' : ''}`}
                key={item}
                variant="text"
                aria-current={selected === item ? 'page' : undefined}
                onClick={() => selectItem(item)}
              >
                {item}
              </Button>
            ))}
          </nav>
          {isSearch && (
            <div
              className={`tm-app-bar-example-search${searchOpen ? ' tm-app-bar-example-search-open' : ''}`}
            >
              <Search size={14} aria-hidden="true" />
              <input
                aria-label="Search workspace"
                placeholder="Search workspace"
                value={query}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setSearchOpen(false)}
                onChange={(event) => setQuery(event.target.value)}
              />
              <kbd>
                <Command size={10} aria-hidden="true" /> K
              </kbd>
              {searchOpen && query && (
                <div
                  className="tm-app-bar-example-search-results"
                  role="listbox"
                  aria-label="Navigation results"
                >
                  {filteredItems.length ? (
                    filteredItems.map((item) => (
                      <Button
                        className="tm-app-bar-example-search-result"
                        key={item}
                        variant="text"
                        role="option"
                        aria-selected={selected === item}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => {
                          selectItem(item);
                          setQuery('');
                          setSearchOpen(false);
                        }}
                      >
                        <Search size={12} aria-hidden="true" /> {item}
                      </Button>
                    ))
                  ) : (
                    <span>No matching sections</span>
                  )}
                </div>
              )}
            </div>
          )}
          <span className="tm-app-bar-example-spacer" />
          <Button
            className={`tm-app-bar-example-icon-button${notifications ? '' : ' tm-app-bar-example-icon-button-muted'}`}
            variant="text"
            aria-label={notifications ? 'Mute notifications' : 'Enable notifications'}
            aria-pressed={notifications}
            onClick={toggleNotifications}
          >
            <Bell size={15} />
            {notifications && <i className="tm-app-bar-example-notification-dot" />}
          </Button>
          <Button
            className="tm-app-bar-example-settings"
            variant="outlined"
            aria-label="Workspace settings"
            onClick={() => setNotice('Workspace settings opened.')}
          >
            <Settings size={15} />
            <span>Settings</span>
          </Button>
          <Button
            className="tm-app-bar-example-account"
            variant="text"
            aria-label="Account: Jordan Lee"
            onClick={() => setNotice('Signed in as Jordan Lee.')}
          >
            <span className="tm-app-bar-example-avatar">JL</span>
            <ChevronDown size={12} aria-hidden="true" />
          </Button>
        </AppBar>
        {isResponsive && menuOpen && (
          <nav className="tm-app-bar-example-mobile-panel" aria-label="Mobile workspace">
            {ITEMS.map((item) => (
              <Button
                className={`tm-app-bar-example-mobile-link${selected === item ? ' tm-app-bar-example-mobile-link-active' : ''}`}
                key={item}
                variant="text"
                onClick={() => selectItem(item)}
              >
                {item}
                {selected === item && <Check size={13} aria-hidden="true" />}
              </Button>
            ))}
          </nav>
        )}
        <div className="tm-app-bar-example-content">
          <span className="tm-app-bar-example-eyebrow">WORKSPACE / {selected.toUpperCase()}</span>
          <strong>{selected === 'Overview' ? 'Good morning, Jordan' : selected}</strong>
          <span>Your team’s latest updates and activity appear here.</span>
        </div>
      </div>
      <div className="tm-app-bar-example-footer">
        <span className="preview-note" role="status" aria-live="polite">
          {notice || `Current section: ${selected}`}
        </span>
        {isSearch && (
          <span className="preview-note" aria-live="polite">
            {filteredItems.length} matching sections
          </span>
        )}
        {isResponsive && (
          <span className="tm-app-bar-example-breakpoint-note">
            Resize to preview compact navigation.
          </span>
        )}
      </div>
    </div>
  );
}

export default function AppBarPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Combine workspace branding, navigation, and actions in the package AppBar."
      usageDescription="AppBar renders a semantic application header with static, sticky, or fixed positioning and configurable elevation."
    >
      <div className="component-showcase component-showcase-app-bar">
        <DemoPanel
          title="Workspace toolbar"
          caption="Keep the current destination and primary actions visible in a balanced application bar."
          code={APP_BAR_STYLES_NOTE}
        >
          <AppBarExample variant="default" />
        </DemoPanel>
        <DemoPanel
          title="Search and actions"
          caption="Integrate an expandable search field and action buttons without crowding the toolbar."
          code={APP_BAR_STYLES_NOTE}
        >
          <AppBarExample variant="search" />
        </DemoPanel>
        <DemoPanel
          title="Responsive navigation"
          caption="Adapt the toolbar at narrow widths and expose a compact navigation menu."
          code={APP_BAR_STYLES_NOTE}
        >
          <AppBarExample variant="responsive" />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
