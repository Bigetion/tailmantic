import { Bell, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import AppBarComponent from '../components/AppBar.jsx';

export default function AppBarPage() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');
  const [section, setSection] = useState('Overview');
  const sections = ['Overview', 'Projects', 'Reports'].filter((item) =>
    item.toLowerCase().includes(query.trim().toLowerCase()),
  );
  return (
    <section className="demo-section">
      <span className="demo-section-title">Responsive application toolbar</span>
      <div className="demo-row">
        <button
          type="button"
          className="demo-app-bar-control"
          aria-pressed={compact}
          onClick={() => setCompact((value) => !value)}
        >
          {compact ? 'Use full navigation' : 'Use compact navigation'}
        </button>
      </div>
      <AppBarComponent
        aria-label="Workspace toolbar"
        className={`demo-app-bar-preview${compact ? ' demo-app-bar-compact' : ''}`}
      >
        <button
          className="demo-app-bar-icon"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <strong className="demo-app-bar-title">Workspace</strong>
        <nav
          className={`demo-app-bar-nav${menuOpen ? ' demo-app-bar-nav-open' : ''}${compact && !menuOpen ? ' demo-app-bar-nav-compact' : ''}`}
          aria-label="Workspace"
        >
          {sections.length > 0 ? (
            sections.map((item) => (
              <button
                type="button"
                className={section === item ? 'demo-app-bar-nav-active' : ''}
                key={item}
                onClick={() => {
                  setSection(item);
                  setMenuOpen(false);
                  setNotice(`${item} section selected.`);
                }}
              >
                {item}
              </button>
            ))
          ) : (
            <span className="demo-app-bar-empty">No sections found</span>
          )}
        </nav>
        <div className="demo-app-bar-actions">
          <button
            className="demo-app-bar-icon"
            type="button"
            aria-label={searchOpen ? 'Close search' : 'Search'}
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((value) => !value)}
          >
            <Search size={17} />
          </button>
          {searchOpen && (
            <input
              className="demo-app-bar-search"
              aria-label="Search workspace"
              placeholder="Search workspace"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          )}
          <button
            className="demo-app-bar-icon"
            type="button"
            aria-label="Notifications"
            onClick={() => setNotice('You are all caught up.')}
          >
            <Bell size={17} />
          </button>
          <span className="demo-app-bar-avatar" role="img" aria-label="User profile">
            JD
          </span>
        </div>
      </AppBarComponent>
      {notice && (
        <span className="demo-note" role="status">
          {notice}
        </span>
      )}
    </section>
  );
}
