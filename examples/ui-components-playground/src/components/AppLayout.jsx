import { Blocks, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { cx } from 'tailmantic';
import { componentGroups } from '../data/components.js';

export default function AppLayout() {
  const [query, setQuery] = useState('');
  const filteredGroups = useMemo(
    () =>
      componentGroups
        .map(({ group, items }) => ({
          group,
          items: items.filter((item) =>
            `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase()),
          ),
        }))
        .filter(({ items }) => items.length > 0),
    [query],
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link
          className="brand-lockup playground-brand"
          to="/"
          aria-label="Tailmantic component playground home"
        >
          <span className="brand-mark" aria-hidden="true">
            <Blocks size={17} />
          </span>
          <span className="brand-name">Component Playground</span>
        </Link>
        <span className="topbar-spacer" />
        <span className="version-badge">local · @tailmantic/ui-components@0.2.2</span>
      </header>
      <div className="app-layout">
        <aside className="sidebar" aria-label="Component catalog">
          <div className="sidebar-intro">
            <span className="sidebar-label">Interactive test bench</span>
          </div>
          <label className="search-box playground-search">
            <Search size={14} aria-hidden="true" />
            <input
              type="search"
              aria-label="Filter components"
              placeholder="Filter components…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <nav className="sidebar-scroll" aria-label="Component groups">
            {filteredGroups.map(({ group, items }) => (
              <section className="nav-section" key={group}>
                <h2 className="nav-heading">
                  <span>{group}</span>
                  <span className="nav-group-count">{items.length}</span>
                </h2>
                {items.map(({ name, slug }) => (
                  <NavLink
                    className={({ isActive }) => cx(isActive ? 'nav-link-active' : 'nav-link')}
                    key={slug}
                    to={`/components/${slug}`}
                  >
                    <span>{name}</span>
                  </NavLink>
                ))}
              </section>
            ))}
            {filteredGroups.length === 0 && (
              <p className="empty-search">No components match “{query}”.</p>
            )}
          </nav>
        </aside>
        <main className="main-content">
          <Outlet context={{ query }} />
        </main>
      </div>
    </div>
  );
}
