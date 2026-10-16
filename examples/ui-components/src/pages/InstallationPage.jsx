import { Link } from 'react-router-dom';
import GuideLayout from '../components/GuideLayout.jsx';

const INSTALL = `npm install @tailmantic/ui-components tailmantic react react-dom
npm install -D vite @vitejs/plugin-react`;
const VITE_CONFIG = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { tailmantic } from 'tailmantic/vite';

export default defineConfig({
  plugins: [
    react(),
    tailmantic({ entry: 'src/tailmantics/index.js' }),
  ],
});`;
const STYLES = `// src/tailmantics/index.js
import { getManifest } from 'tailmantic/collector';
import '@tailmantic/ui-components/tokens/light';
import '@tailmantic/ui-components/styles';

export default getManifest();`;
const ENTRY = `import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'virtual:tailmantic.css';

createRoot(document.getElementById('root')).render(<App />);`;

export default function InstallationPage() {
  return (
    <GuideLayout
      eyebrow="GETTING STARTED"
      title="Installation"
      description="Install the React component package and connect its Tailmantic styles to your Vite application."
    >
      <section className="docs-section">
        <h2>1. Install dependencies</h2>
        <p>
          Tailmantic UI requires React 18 or newer and Tailmantic. Components that position floating
          content also require Popper.
        </p>
        <pre className="docs-code">
          <code>{INSTALL}</code>
        </pre>
        <p className="docs-callout">
          Install <code>@popperjs/core</code> if your app uses Autocomplete, Menu, Popover, Popper,
          Select, or Tooltip.
        </p>
      </section>
      <section className="docs-section">
        <h2>2. Configure the Vite plugin</h2>
        <p>
          Point the plugin at a Tailmantic manifest. The plugin generates the stylesheet consumed by
          your app.
        </p>
        <pre className="docs-code">
          <code>{VITE_CONFIG}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>3. Register component styles and a theme</h2>
        <p>
          Import a token theme and the package styles in the manifest. For a smaller bundle, replace
          the all-components import with the specific component style modules your app uses.
        </p>
        <pre className="docs-code">
          <code>{STYLES}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>4. Load the generated stylesheet</h2>
        <p>Import the virtual stylesheet once from your application entry point.</p>
        <pre className="docs-code">
          <code>{ENTRY}</code>
        </pre>
      </section>
      <section className="docs-section">
        <h2>Next steps</h2>
        <p>
          Start with the <Link to="/components/button">Button</Link> or browse the{' '}
          <Link to="/components">component reference</Link>. Learn about root and subpath imports in
          the <Link to="/getting-started/usage">usage guide</Link>.
        </p>
      </section>
    </GuideLayout>
  );
}
