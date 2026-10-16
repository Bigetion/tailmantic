import {
  ArrowLeft,
  ArrowRight,
  Check,
  Component as ComponentIcon,
  Copy,
  ExternalLink,
} from 'lucide-react';
import { Children, isValidElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { componentCatalog } from '../data/components.js';
import { ComponentDocsProvider } from './ComponentDocsContext.jsx';
import DemoPanel from './DemoPanel.jsx';

function getExamplePanels(children) {
  const panels = [];
  function visit(nodes) {
    Children.forEach(nodes, (node) => {
      if (!isValidElement(node)) return;
      if (node.type === DemoPanel) {
        panels.push(node.props);
        return;
      }
      if (node.props?.children) visit(node.props.children);
    });
  }
  visit(children);
  return panels;
}

function getAnchorId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function ComponentPageLayout({
  component,
  children,
  usageCode,
  usageCaption,
  usageDescription,
}) {
  const [packageManager, setPackageManager] = useState('npm');
  const [copied, setCopied] = useState(false);
  const index = componentCatalog.findIndex((item) => item.slug === component.slug);
  const previous =
    componentCatalog[(index - 1 + componentCatalog.length) % componentCatalog.length];
  const next = componentCatalog[(index + 1) % componentCatalog.length];
  const importName = component.name.replace(/\s+/g, '');
  const importCode =
    usageCode ??
    `import { ${importName} } from '@tailmantic/ui-components';\n\nexport default function ${importName}Example() {\n  return <${importName} />;\n}`;
  const propsType = `${importName}Props`;
  const declarationPath = `packages/ui-components/src/${component.slug}/${component.slug}.d.ts`;
  const declarationUrl = `https://github.com/Bigetion/tailmantic/blob/main/${declarationPath}`;
  const examples = getExamplePanels(children);
  const installCommands = {
    npm: `npm install @tailmantic/ui-components tailmantic`,
    pnpm: `pnpm add @tailmantic/ui-components tailmantic`,
    yarn: `yarn add @tailmantic/ui-components tailmantic`,
    bun: `bun add @tailmantic/ui-components tailmantic`,
  };
  const copyPage = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      console.error('Could not copy component page URL:', error);
    }
  };

  return (
    <div className="content-width component-page">
      <header className="component-page-heading">
        <div>
          <p className="component-eyebrow"><ComponentIcon size={13} /> {component.group}</p>
          <h1 className="page-heading">{component.name}</h1>
          <p className="page-intro">{component.description}</p>
        </div>
        <div className="component-page-actions">
          <button className="component-copy-button" type="button" onClick={copyPage}>
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? 'Copied' : 'Copy page'}
          </button>
          <Link to={`/components/${previous.slug}`} aria-label={`Previous: ${previous.name}`}>
            <ArrowLeft size={15} />
          </Link>
          <Link to={`/components/${next.slug}`} aria-label={`Next: ${next.name}`}>
            <ArrowRight size={15} />
          </Link>
        </div>
      </header>

      <nav className="component-tabs" aria-label={`${component.name} sections`}>
        <a href="#installation">Installation</a>
        <a href="#usage">Usage</a>
        {component.slug === 'accordion' && <a href="#composition">Composition</a>}
        <a href="#examples">Examples</a>
        <a href="#api-reference">API reference</a>
      </nav>

      <section className="docs-section component-doc-section" id="installation">
        <h2>Installation</h2>
        <div className="package-manager-tabs" role="group" aria-label="Package manager">
          {Object.keys(installCommands).map((manager) => (
            <button
              aria-pressed={packageManager === manager}
              className={packageManager === manager ? 'package-manager-active' : ''}
              key={manager}
              onClick={() => setPackageManager(manager)}
              type="button"
            >
              {manager}
            </button>
          ))}
        </div>
        <div className="component-code-block">
          <code>{installCommands[packageManager]}</code>
          <button
            className="component-code-copy"
            type="button"
            aria-label="Copy installation command"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(installCommands[packageManager]);
              } catch (error) {
                console.error('Could not copy installation command:', error);
              }
            }}
          >
            <Copy size={13} />
          </button>
        </div>
      </section>

      <section className="docs-section component-doc-section" id="usage">
        <h2>Usage</h2>
        <p>{usageCaption ?? `Import ${component.name} and compose it in your React application.`}</p>
        <pre className="component-code-block component-usage-code"><code>{importCode}</code></pre>
        {usageDescription && <p>{usageDescription}</p>}
      </section>

      {component.slug === 'accordion' && (
        <section className="docs-section component-doc-section" id="composition">
          <h2>Composition</h2>
          <p>
            Compose the root with one or more items. Add a toolbar for group actions or helper text
            for additional guidance.
          </p>
          <pre className="component-code-block component-usage-code"><code>{`Accordion
├── AccordionItem
├── AccordionItem
├── AccordionToolbar (optional)
└── AccordionHelper (optional)`}</code></pre>
        </section>
      )}

      <section className="docs-section component-doc-section" id="examples">
        <h2>Examples</h2>
        <p>Explore common patterns and interact with each example.</p>
        <ComponentDocsProvider value={{ slug: component.slug, usageCode: importCode }}>
          {children}
        </ComponentDocsProvider>
      </section>

      <section className="docs-section component-doc-section" id="api-reference">
        <h2 id={`${component.slug}-api-heading`}>{component.name} API</h2>
        <div className="docs-api-card">
          <div><span>Props type</span><code>{propsType}</code></div>
          <div><span>Package import</span><code>@tailmantic/ui-components/{component.slug}</code></div>
          <a href={declarationUrl} target="_blank" rel="noreferrer">
            View all props, event handlers, and TypeScript types <ExternalLink size={14} />
          </a>
          <p>The declaration extends native React attributes where supported.</p>
        </div>
      </section>

      <aside className="component-page-toc" aria-label="On this page">
        <span>On this page</span>
        <a href="#installation">Installation</a>
        <a href="#usage">Usage</a>
        {component.slug === 'accordion' && <a href="#composition">Composition</a>}
        <a href="#examples">Examples</a>
        <div className="component-toc-examples">
          {examples.map(({ title }) => (
            <a href={`#${component.slug}-example-${getAnchorId(title)}`} key={title}>
              {title}
            </a>
          ))}
        </div>
        <a href="#api-reference">API reference</a>
        <div className="component-toc-promo">
          <strong>Deploy your project</strong>
          <p>Build with Tailmantic UI components and Tailmantic styling.</p>
          <a href="https://github.com/Bigetion/tailmantic" target="_blank" rel="noreferrer">
            Explore on GitHub <ExternalLink size={11} />
          </a>
        </div>
      </aside>

      <footer className="page-footer" id="tailmantic-source">
        <div className="footer-brand"><span className="brand-mark brand-mark-small">T</span><span>Tailmantic UI</span></div>
        <span>React components, styled with Tailmantic.</span>
      </footer>
    </div>
  );
}
