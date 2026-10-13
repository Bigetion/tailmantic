import { Card } from '@tailmantic/ui-components';
import { ArrowUpRight, Bookmark, Check, Heart, Image, MoreHorizontal, Users } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('card');
const CARD_STYLES_NOTE =
  'Card component and example styles are provided by @tailmantic/ui-components/card/styles.';
const USAGE_CODE = `import { Card } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/card/styles';

<Card variant="outlined" elevation={0}>
  <h2>Project overview</h2>
  <p>Keep related information and actions together.</p>
</Card>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/CardPage.jsx',
    'Dedicated project, action, and media examples using the package Card.',
  ],
  [
    'Component',
    'packages/ui-components/src/card/Card.jsx',
    'Composable surface with elevated, outlined, and flat variants.',
  ],
  [
    'Styles',
    'packages/ui-components/src/card/card.styles.js',
    'Package-owned Card variants and example layout styles.',
  ],
];

function ProjectCard() {
  return (
    <Card className="rgi-card-example rgi-card-example-project" elevation={2} interactive>
      <div className="rgi-card-example-project-top">
        <span className="rgi-card-example-project-icon">
          <Image size={18} aria-hidden="true" />
        </span>
        <button className="rgi-card-example-more" type="button" aria-label="More project actions">
          <MoreHorizontal size={19} aria-hidden="true" />
        </button>
      </div>
      <div className="rgi-card-example-copy">
        <span className="rgi-card-example-eyebrow">PRODUCT DESIGN</span>
        <h3>Website refresh</h3>
        <p>A new look and feel for the customer workspace, from first sketch to final handoff.</p>
      </div>
      <div className="rgi-card-example-project-meta">
        <span className="rgi-card-example-status">
          <i /> In progress
        </span>
        <span className="rgi-card-example-team">
          <Users size={15} aria-hidden="true" /> 4 members
        </span>
      </div>
      <div className="rgi-card-example-project-footer">
        <ul className="rgi-card-example-avatar-stack" aria-label="Project team: Jordan, Sam, Alex">
          <li>JL</li>
          <li>SC</li>
          <li>AK</li>
          <li>+1</li>
        </ul>
        <button className="rgi-card-example-open" type="button">
          Open project <ArrowUpRight size={15} aria-hidden="true" />
        </button>
      </div>
    </Card>
  );
}

function ActionCard() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <Card className="rgi-card-example rgi-card-example-action" variant="outlined" elevation={0}>
      <div className="rgi-card-example-author">
        <span className="rgi-card-example-author-avatar">AM</span>
        <span className="rgi-card-example-author-details">
          <strong>Alex Morgan</strong>
          <small>Product design · 2 hours ago</small>
        </span>
        <button className="rgi-card-example-more" type="button" aria-label="More post actions">
          <MoreHorizontal size={19} aria-hidden="true" />
        </button>
      </div>
      <div className="rgi-card-example-copy rgi-card-example-action-copy">
        <h3>Introducing the new workspace</h3>
        <p>
          We’ve brought projects, updates, and team conversations together in one calmer place.
          Here’s a first look at what’s new.
        </p>
      </div>
      <div className="rgi-card-example-tags">
        <span>Product update</span>
        <span>3 min read</span>
      </div>
      <div className="rgi-card-example-actions">
        <button
          className={`rgi-card-example-action-button${liked ? ' is-active' : ''}`}
          type="button"
          aria-pressed={liked}
          onClick={() => setLiked((value) => !value)}
        >
          <Heart size={17} fill={liked ? 'currentColor' : 'none'} aria-hidden="true" />
          {liked ? 'Liked · 25' : 'Like · 24'}
        </button>
        <button
          className={`rgi-card-example-action-button${saved ? ' is-active' : ''}`}
          type="button"
          aria-pressed={saved}
          onClick={() => setSaved((value) => !value)}
        >
          {saved ? (
            <Check size={17} aria-hidden="true" />
          ) : (
            <Bookmark size={17} aria-hidden="true" />
          )}
          {saved ? 'Saved' : 'Save'}
        </button>
      </div>
    </Card>
  );
}

function MediaCard() {
  return (
    <Card className="rgi-card-example rgi-card-example-media" variant="flat" elevation={0}>
      <div className="rgi-card-example-media-visual">
        <div className="rgi-card-example-media-orbit rgi-card-example-media-orbit-one" />
        <div className="rgi-card-example-media-orbit rgi-card-example-media-orbit-two" />
        <div className="rgi-card-example-media-art">
          <Image size={28} aria-hidden="true" />
        </div>
        <span className="rgi-card-example-media-label">FIELD NOTES · 04</span>
      </div>
      <div className="rgi-card-example-media-content">
        <div className="rgi-card-example-media-heading">
          <span>DESIGN SYSTEMS</span>
          <span>8 min read</span>
        </div>
        <h3>Building a more thoughtful interface</h3>
        <p>Small, consistent decisions help every screen feel like part of the same product.</p>
        <div className="rgi-card-example-media-footer">
          <span className="rgi-card-example-media-author">
            <span className="rgi-card-example-author-avatar">JL</span>
            Jordan Lee
          </span>
          <button
            className="rgi-card-example-more"
            type="button"
            aria-label="Open article by Jordan Lee"
          >
            <ArrowUpRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </Card>
  );
}

export default function CardPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Use Card to group information about one subject and choose the surface treatment that fits its hierarchy."
      usageDescription="Card supports elevated, outlined, and flat variants, configurable elevation, custom element types, and an interactive focus/hover treatment."
    >
      <div className="component-showcase component-showcase-card">
        <DemoPanel
          title="Project overview"
          caption="Group a project summary, status, and a useful action into one interactive surface."
          code={CARD_STYLES_NOTE}
        >
          <ProjectCard />
        </DemoPanel>
        <DemoPanel
          title="Interactive actions"
          caption="Add contextual actions and expose their current state accessibly."
          code={CARD_STYLES_NOTE}
        >
          <ActionCard />
        </DemoPanel>
        <DemoPanel
          title="Media and content"
          caption="Combine a visual header with supporting text and a compact metadata row."
          code={CARD_STYLES_NOTE}
        >
          <MediaCard />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
