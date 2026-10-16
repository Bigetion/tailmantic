import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GuideLayout from '../components/GuideLayout.jsx';
import { componentGroups } from '../data/components.js';

export default function ComponentsPage() {
  return (
    <GuideLayout
      eyebrow="COMPONENTS"
      title="Component library"
      description="Browse the React components by category. Each reference includes usage examples and links to its public TypeScript API."
    >
      {componentGroups.map(({ group, items }) => (
        <section className="docs-section component-index-section" key={group}>
          <div className="docs-section-heading">
            <div>
              <p className="component-count">COMPONENTS</p>
              <h2>{group}</h2>
            </div>
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
    </GuideLayout>
  );
}
