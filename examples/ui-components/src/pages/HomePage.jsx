import { ArrowRight, Blocks, BookOpen, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import GuideLayout from '../components/GuideLayout.jsx';
import { componentCatalog, componentGroups } from '../data/components.js';

const QUICK_START = `npm install @tailmantic/ui-components tailmantic react react-dom`;
const COMPONENT_SETUP = `// src/tailmantics/index.js
import { getManifest } from 'tailmantic/collector';
import '@tailmantic/ui-components/tokens/light';
import '@tailmantic/ui-components/styles';

export default getManifest();`;
const COMPONENT_USAGE = `import { Button } from '@tailmantic/ui-components';

export function SaveButton() {
  return <Button variant="contained">Save changes</Button>;
}`;

export default function HomePage() {
  return (
    <GuideLayout
      eyebrow="REACT COMPONENT LIBRARY"
      title="Build interfaces with Tailmantic UI"
      description="Accessible, reusable React components styled with Tailmantic. Install the package, register the styles once, and use the components directly in your app."
    >
      <section className="docs-section docs-quickstart">
        <div>
          <p className="component-count">START HERE</p>
          <h2>From install to first component</h2>
          <p>
            Add the package, connect Tailmantic's Vite plugin, and import the components you need.
            The library owns the component styles; your app only chooses a theme.
          </p>
          <div className="docs-actions">
            <Link className="docs-primary-link" to="/getting-started/installation">
              Install the library <ArrowRight size={15} />
            </Link>
            <Link className="docs-secondary-link" to="/components/button">
              Browse components
            </Link>
          </div>
        </div>
        <pre className="docs-code">
          <code>{QUICK_START}</code>
        </pre>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <div>
            <p className="component-count">QUICK START</p>
            <h2>Register the library styles</h2>
          </div>
          <Link to="/getting-started/installation">
            Full setup guide <ArrowRight size={14} />
          </Link>
        </div>
        <pre className="docs-code">
          <code>{COMPONENT_SETUP}</code>
        </pre>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <div>
            <p className="component-count">IN YOUR APP</p>
            <h2>Use components like regular React</h2>
          </div>
          <Link to="/getting-started/usage">
            Usage guide <ArrowRight size={14} />
          </Link>
        </div>
        <pre className="docs-code">
          <code>{COMPONENT_USAGE}</code>
        </pre>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <div>
            <p className="component-count">THE LIBRARY</p>
            <h2>{componentCatalog.length} components, organized for your workflow</h2>
          </div>
          <Link to="/components/button">
            Explore all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="docs-feature-grid">
          <div>
            <Blocks size={18} />
            <strong>Ready-to-use APIs</strong>
            <span>Controlled state, native props, and typed component interfaces.</span>
          </div>
          <div>
            <BookOpen size={18} />
            <strong>Usage-first docs</strong>
            <span>Copyable examples, behavior notes, and links to each component API.</span>
          </div>
          <div>
            <Layers3 size={18} />
            <strong>Tailmantic styling</strong>
            <span>Theme tokens and component styles compile through your Tailmantic setup.</span>
          </div>
        </div>
        <div className="docs-category-list">
          {componentGroups.map(({ group, items }) => (
            <section key={group} aria-label={group}>
              <h3>{group}</h3>
              <div>
                {items.map((item) => (
                  <Link key={item.slug} to={`/components/${item.slug}`}>
                    {item.name}
                    <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </GuideLayout>
  );
}
