import { useState } from 'react';
import { ArrowUpRight, ExternalLink, FileText, Link as LinkIcon } from 'lucide-react';
import { Link } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('link');

const DEMOS = {
  link: {
    title: 'Inline links',
    caption: 'Use links to navigate to related content while preserving familiar browser behavior.',
  },
  'link-variants': {
    title: 'Semantic link styles',
    caption: 'Apply subtle, primary, and external-link treatments without changing the anchor semantics.',
  },
  'link-accessibility': {
    title: 'Keyboard and disabled states',
    caption: 'Keep links discoverable to keyboard users and represent unavailable destinations clearly.',
  },
};

function preventNavigation(event, setNotice, destination) {
  event.preventDefault();
  setNotice(`Link activated: ${destination}.`);
}

function InlineLinksDemo() {
  const [notice, setNotice] = useState('');

  return (
    <div className="link-demo">
      <div className="link-content-card">
        <span className="link-content-icon"><FileText size={16} aria-hidden="true" /></span>
        <div className="link-copy">
          <strong>Keep exploring</strong>
          <p>Browse the workspace guide or visit the project overview to learn more about your team.</p>
          <div className="link-inline-row">
            <Link href="#workspace-guide" onClick={(event) => preventNavigation(event, setNotice, 'Workspace guide')}>
              Workspace guide <ArrowUpRight size={12} aria-hidden="true" />
            </Link>
            <span className="link-inline-divider" aria-hidden="true" />
            <Link href="#project-overview" onClick={(event) => preventNavigation(event, setNotice, 'Project overview')}>
              Project overview
            </Link>
          </div>
        </div>
      </div>
      <span className="preview-note" role="status">{notice || 'Activate a link to preview its destination.'}</span>
    </div>
  );
}

function LinkVariantsDemo() {
  const [notice, setNotice] = useState('');

  return (
    <div className="link-demo">
      <div className="link-variant-list">
        <div className="link-variant-row">
          <span>Default</span>
          <Link href="#default-destination" onClick={(event) => preventNavigation(event, setNotice, 'Default destination')}>
            Default destination
          </Link>
        </div>
        <div className="link-variant-row">
          <span>Underlined</span>
          <Link href="#underlined-destination" underline="always" onClick={(event) => preventNavigation(event, setNotice, 'Underlined destination')}>
            Underlined destination
          </Link>
        </div>
        <div className="link-variant-row">
          <span>Subtle</span>
          <Link href="#subtle-destination" className="tm-link-subtle" onClick={(event) => preventNavigation(event, setNotice, 'Subtle destination')}>
            Subtle destination
          </Link>
        </div>
        <div className="link-variant-row">
          <span>External</span>
          <Link href="#external-documentation" className="tm-link-external" onClick={(event) => preventNavigation(event, setNotice, 'External documentation')}>
            External documentation
            <ExternalLink size={12} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </div>
      </div>
      <span className="preview-note" role="status">{notice || 'Link emphasis can change independently from its destination.'}</span>
    </div>
  );
}

function LinkAccessibilityDemo() {
  const [notice, setNotice] = useState('');
  const [available, setAvailable] = useState(true);

  return (
    <div className="link-demo">
      <div className="link-accessibility-card">
        <span className="link-content-icon"><LinkIcon size={16} aria-hidden="true" /></span>
        <div className="link-copy">
          <strong>Keyboard-friendly navigation</strong>
          <p>Use Tab to focus each available link. Focus styling remains visible and the unavailable destination is not focusable.</p>
          <div className="link-accessibility-row">
            <Link href="#accessibility-guide" underline="always" onClick={(event) => preventNavigation(event, setNotice, 'Accessibility guide')}>
              Read accessibility guide <ArrowUpRight size={12} aria-hidden="true" />
            </Link>
            {available && (
              <a className="tm-link-disabled" href="#coming-soon" aria-disabled="true" tabIndex={-1} onClick={(event) => event.preventDefault()}>
                Coming soon
              </a>
            )}
            {!available && <span className="tm-link-disabled" aria-disabled="true">Unavailable</span>}
          </div>
        </div>
      </div>
      <div className="link-demo-footer">
        <span className="preview-note" role="status">{notice || 'A disabled destination remains readable but does not act like a normal link.'}</span>
        <button className="link-toggle-button" type="button" aria-pressed={!available} onClick={() => setAvailable((value) => !value)}>
          Toggle availability
        </button>
      </div>
    </div>
  );
}

function LinkDemoContent({ demoId }) {
  if (demoId === 'link-variants') return <LinkVariantsDemo />;
  if (demoId === 'link-accessibility') return <LinkAccessibilityDemo />;
  return <InlineLinksDemo />;
}

export default function LinkPage() {
  const styleSource = getStyleSource('link');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <LinkDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
