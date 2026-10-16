import { ArrowRight, MousePointer2 } from 'lucide-react';
import { Link, useOutletContext } from 'react-router-dom';
import { componentGroups } from '../data/components.js';

export default function HomePage() {
  const { query } = useOutletContext();
  const filteredGroups = componentGroups
    .map(({ group, items }) => ({
      group,
      items: items.filter((item) =>
        `${item.name} ${item.description}`.toLowerCase().includes(query.toLowerCase()),
      ),
    }))
    .filter(({ items }) => items.length > 0);

  return (
    <div className="content-width playground-home">
      <section className="playground-hero">
        <p className="component-count">
          <MousePointer2 size={13} aria-hidden="true" />
          LIVE COMPONENT TEST BENCH
        </p>
        <h1 className="page-heading">Try every component.</h1>
        <p className="page-intro">
          Interact with the local workspace package <code>@tailmantic/ui-components</code>. Open a
          component to test its live examples, states, and controls.
        </p>
        <div className="playground-summary">
          <span className="playground-status-dot" />
          <strong>
            {componentGroups.reduce((count, group) => count + group.items.length, 0)} components
          </strong>
          <span>loaded from local package</span>
        </div>
      </section>

      <div className="playground-categories">
        {filteredGroups.map(({ group, items }) => (
          <section className="playground-category" key={group}>
            <div className="docs-section-heading">
              <h2>{group}</h2>
              <span>{items.length} components</span>
            </div>
            <div className="component-index-grid">
              {items.map(({ name, description, slug }) => (
                <Link className="component-index-card" key={slug} to={`/components/${slug}`}>
                  <strong>{name}</strong>
                  <span>{description}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </section>
        ))}
        {filteredGroups.length === 0 && (
          <p className="empty-search">No components match “{query}”.</p>
        )}
      </div>
    </div>
  );
}
