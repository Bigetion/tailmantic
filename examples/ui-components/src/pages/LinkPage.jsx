import { Link } from '@tailmantic/ui-components';
import { ArrowUpRight, ExternalLink, FileText, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('link');
const LINK_STYLES_NOTE =
  'Link component and example styles are provided by @tailmantic/ui-components/link/styles.';
const USAGE_CODE = `import { Link } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/link/styles';

<Link href="/workspace/guide" underline="hover" color="primary">
  Workspace guide
</Link>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/LinkPage.jsx',
    'Dedicated inline, visual variant, external, and keyboard accessibility examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/link/Link.jsx',
    'Anchor component with underline modes, semantic colors, and native link behavior.',
  ],
  [
    'Styles',
    'packages/ui-components/src/link/link.styles.js',
    'Package-owned link states and example layout styles.',
  ],
];

function activatePreview(event, setNotice, destination) {
  event.preventDefault();
  setNotice(`Link activated: ${destination}.`);
}

function InlineLinksExample() {
  const [notice, setNotice] = useState('');

  return (
    <div className="rgi-link-example">
      <div className="rgi-link-example-card">
        <span className="rgi-link-example-icon">
          <FileText size={19} aria-hidden="true" />
        </span>
        <div className="rgi-link-example-copy">
          <strong>Keep exploring</strong>
          <p>
            Browse the workspace guide or visit the project overview to learn more about your team.
          </p>
          <div className="rgi-link-example-inline-row">
            <Link
              href="#workspace-guide"
              onClick={(event) => activatePreview(event, setNotice, 'Workspace guide')}
            >
              Workspace guide <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            <span className="rgi-link-example-divider" aria-hidden="true" />
            <Link
              href="#project-overview"
              onClick={(event) => activatePreview(event, setNotice, 'Project overview')}
            >
              Project overview
            </Link>
          </div>
        </div>
      </div>
      <span className="rgi-link-example-status" role="status" aria-live="polite">
        {notice || 'Activate a link to preview its destination.'}
      </span>
    </div>
  );
}

function LinkVariantsExample() {
  const [notice, setNotice] = useState('');
  const variants = [
    {
      label: 'Hover underline',
      destination: 'Default destination',
      underline: 'hover',
      color: 'primary',
    },
    {
      label: 'Always underlined',
      destination: 'Underlined destination',
      underline: 'always',
      color: 'primary',
    },
    {
      label: 'Secondary color',
      destination: 'Subtle destination',
      underline: 'none',
      color: 'secondary',
    },
  ];

  return (
    <div className="rgi-link-example">
      <div className="rgi-link-example-variants">
        {variants.map(({ label, destination, underline, color }) => (
          <div className="rgi-link-example-variant-row" key={label}>
            <span>{label}</span>
            <Link
              href={`#${destination.toLowerCase().replaceAll(' ', '-')}`}
              underline={underline}
              color={color}
              onClick={(event) => activatePreview(event, setNotice, destination)}
            >
              {destination}
            </Link>
          </div>
        ))}
        <div className="rgi-link-example-variant-row">
          <span>External destination</span>
          <Link
            className="rgi-link-example-external"
            href="https://tailmantic.dev"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => activatePreview(event, setNotice, 'External documentation')}
          >
            External documentation <ExternalLink size={14} aria-hidden="true" />
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </div>
      </div>
      <span className="rgi-link-example-status" role="status" aria-live="polite">
        {notice || 'Link emphasis can change independently from its destination.'}
      </span>
    </div>
  );
}

function LinkAccessibilityExample() {
  const [notice, setNotice] = useState('');
  const [available, setAvailable] = useState(true);

  return (
    <div className="rgi-link-example">
      <div className="rgi-link-example-card">
        <span className="rgi-link-example-icon">
          <LinkIcon size={19} aria-hidden="true" />
        </span>
        <div className="rgi-link-example-copy">
          <strong>Keyboard-friendly navigation</strong>
          <p>
            Use Tab to focus each available link. Focus styling remains visible, and the unavailable
            destination is not focusable.
          </p>
          <div className="rgi-link-example-accessibility-row">
            <Link
              href="#accessibility-guide"
              underline="always"
              onClick={(event) => activatePreview(event, setNotice, 'Accessibility guide')}
            >
              Read accessibility guide <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
            {available ? (
              <Link
                className="rgi-link-example-disabled"
                href="#coming-soon"
                aria-disabled="true"
                tabIndex={-1}
                onClick={(event) => event.preventDefault()}
              >
                Coming soon
              </Link>
            ) : (
              <span className="rgi-link-example-disabled" aria-disabled="true">
                Unavailable
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="rgi-link-example-footer">
        <span className="rgi-link-example-status" role="status" aria-live="polite">
          {notice || 'A disabled destination remains readable but does not act like a normal link.'}
        </span>
        <button
          className="rgi-link-example-toggle"
          type="button"
          aria-pressed={!available}
          onClick={() => setAvailable((value) => !value)}
        >
          Toggle availability
        </button>
      </div>
    </div>
  );
}

export default function LinkPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Use Link for navigation and select underline and color options without changing anchor semantics."
      usageDescription="Link supports hover, always, and no-underline modes; primary, secondary, and inherited colors; and native anchor attributes such as target and rel."
    >
      <div className="component-showcase component-showcase-link">
        <DemoPanel
          title="Inline links"
          caption="Use links to navigate to related content while preserving familiar browser behavior."
          code={LINK_STYLES_NOTE}
        >
          <InlineLinksExample />
        </DemoPanel>
        <DemoPanel
          title="Semantic link styles"
          caption="Change emphasis independently from the destination and identify external navigation."
          code={LINK_STYLES_NOTE}
        >
          <LinkVariantsExample />
        </DemoPanel>
        <DemoPanel
          title="Keyboard and disabled states"
          caption="Keep links discoverable to keyboard users and represent unavailable destinations clearly."
          code={LINK_STYLES_NOTE}
        >
          <LinkAccessibilityExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
