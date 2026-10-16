import { Check, Code2, Copy } from 'lucide-react';
import { useState } from 'react';
import { useComponentDocs } from './ComponentDocsContext.jsx';
import { getExampleCode } from './exampleCode.js';

function getAnchorId(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function DemoPanel({ title, caption, code, children, className }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const docs = useComponentDocs();
  const snippet = code ?? (docs ? getExampleCode(docs.slug, title) ?? '' : '');
  const panelId = docs ? `${docs.slug}-example-${getAnchorId(title)}` : undefined;

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(snippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      console.error('Could not copy example code:', error);
    }
  }

  return (
    <section
      className={`demo-card${className ? ` ${className}` : ''}`}
      id={panelId}
      aria-labelledby={panelId ? `${panelId}-title` : undefined}
    >
      <header className="demo-card-header">
        <div>
          <h3 className="demo-title" id={panelId ? `${panelId}-title` : undefined}>{title}</h3>
          {caption && <p className="demo-caption">{caption}</p>}
        </div>
      </header>
      <div className="demo-content">
        <div className="demo-canvas">{children}</div>
      </div>
      {showCode && (
        <div className="code-block">
          <pre>{snippet}</pre>
          <button className="copy-button" type="button" onClick={copyCode}>
            {copied ? <Check size={13} /> : <Copy size={13} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      )}
      <footer className="demo-footer">
        <span />
        <button
          className="code-toggle"
          type="button"
          onClick={() => setShowCode((value) => !value)}
          aria-expanded={showCode}
        >
          <Code2 size={13} /> {showCode ? 'Hide code' : 'View code'}
        </button>
      </footer>
    </section>
  );
}
