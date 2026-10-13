import { Button, Skeleton } from '@tailmantic/ui-components';
import { Check, Image, RotateCcw, UserRound } from 'lucide-react';
import { useState } from 'react';
import '@tailmantic/ui-components/skeleton/styles';
import '@tailmantic/ui-components/button/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('skeleton');
const SKELETON_STYLES_NOTE =
  'Skeleton and its example layout styles are provided by @tailmantic/ui-components/skeleton/styles.';
const USAGE_CODE = `import { Skeleton } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/skeleton/styles';

<Skeleton variant="text" width={160} animation="wave" />`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/SkeletonPage.jsx',
    'Dedicated examples for loading content, placeholder shapes, and animation modes.',
  ],
  [
    'Component',
    'packages/ui-components/src/skeleton/Skeleton.jsx',
    'Accessible text, rectangular, or circular placeholders with pulse, wave, or no animation.',
  ],
  [
    'Styles',
    'packages/ui-components/src/skeleton/skeleton.styles.js',
    'Package-owned skeleton animations and example layout styles.',
  ],
];

function ProfileCard({ loaded = false, animation = 'pulse' }) {
  return (
    <article className="rgi-skeleton-example-profile" aria-busy={!loaded}>
      {loaded ? (
        <>
          <div className="rgi-skeleton-example-avatar rgi-skeleton-example-avatar-loaded">
            <UserRound size={20} aria-hidden="true" />
          </div>
          <div className="rgi-skeleton-example-profile-copy">
            <strong>Jordan Lee</strong>
            <span>Product designer · 8 projects</span>
            <p>Building thoughtful tools for teams that do their best work together.</p>
          </div>
          <span className="rgi-skeleton-example-loaded-badge">
            <Check size={12} aria-hidden="true" /> Loaded
          </span>
        </>
      ) : (
        <>
          <Skeleton
            className="rgi-skeleton-example-avatar"
            variant="circular"
            animation={animation}
            width={40}
            height={40}
          />
          <div className="rgi-skeleton-example-profile-copy" aria-hidden="true">
            <Skeleton
              className="rgi-skeleton-example-title"
              variant="text"
              animation={animation}
              width={128}
            />
            <Skeleton
              className="rgi-skeleton-example-subtitle"
              variant="text"
              animation={animation}
              width={176}
            />
            <Skeleton
              className="rgi-skeleton-example-copy"
              variant="text"
              animation={animation}
              width="100%"
            />
            <Skeleton
              className="rgi-skeleton-example-copy rgi-skeleton-example-copy-short"
              variant="text"
              animation={animation}
              width="75%"
            />
          </div>
          <Skeleton
            className="rgi-skeleton-example-action"
            variant="rectangular"
            animation={animation}
            width={64}
            height={28}
          />
        </>
      )}
    </article>
  );
}

function ProfileSkeletonExample() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="rgi-skeleton-example-stack">
      <div className="rgi-skeleton-example-surface">
        <ProfileCard loaded={loaded} />
      </div>
      <div className="rgi-skeleton-example-controls">
        <Button variant="outlined" size="small" onClick={() => setLoaded((current) => !current)}>
          {loaded ? (
            <>
              <RotateCcw size={13} aria-hidden="true" /> Show loading state
            </>
          ) : (
            <>
              <Check size={13} aria-hidden="true" /> Load profile
            </>
          )}
        </Button>
        <span className="preview-note" role="status" aria-live="polite">
          {loaded ? 'Profile content is ready.' : 'Loading profile details…'}
        </span>
      </div>
    </div>
  );
}

function SkeletonVariantsExample() {
  return (
    <div className="rgi-skeleton-example-stack">
      <div className="rgi-skeleton-example-variant-grid">
        <div className="rgi-skeleton-example-variant-card">
          <div className="rgi-skeleton-example-variant-image">
            <Image size={18} aria-hidden="true" />
            <span>Image</span>
          </div>
          <Skeleton className="rgi-skeleton-example-variant-title" variant="text" width={112} />
          <Skeleton className="rgi-skeleton-example-variant-line" variant="text" width="100%" />
          <Skeleton className="rgi-skeleton-example-variant-line" variant="text" width="68%" />
        </div>
        <div className="rgi-skeleton-example-variant-card rgi-skeleton-example-horizontal">
          <Skeleton
            className="rgi-skeleton-example-variant-circle"
            variant="circular"
            width={40}
            height={40}
          />
          <div className="rgi-skeleton-example-variant-copy">
            <Skeleton className="rgi-skeleton-example-variant-title" variant="text" width={112} />
            <Skeleton className="rgi-skeleton-example-variant-line" variant="text" width="100%" />
            <Skeleton className="rgi-skeleton-example-variant-line" variant="text" width="68%" />
          </div>
        </div>
        <div className="rgi-skeleton-example-variant-card rgi-skeleton-example-list">
          {[0, 1, 2].map((item) => (
            <div className="rgi-skeleton-example-row" key={item}>
              <Skeleton
                className="rgi-skeleton-example-list-icon"
                variant="rectangular"
                width={28}
                height={28}
              />
              <div className="rgi-skeleton-example-variant-copy">
                <Skeleton
                  className="rgi-skeleton-example-variant-title"
                  variant="text"
                  width={112}
                />
                <Skeleton
                  className="rgi-skeleton-example-variant-line"
                  variant="text"
                  width="68%"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="preview-note">
        Match placeholder shapes to the layout of the content being loaded.
      </span>
    </div>
  );
}

function SkeletonAnimationExample() {
  const [animation, setAnimation] = useState('pulse');

  return (
    <div className="rgi-skeleton-example-stack">
      <fieldset className="rgi-skeleton-example-animation-controls">
        <legend className="rgi-skeleton-example-animation-label">Skeleton animation</legend>
        {[
          ['pulse', 'Pulse'],
          ['wave', 'Wave'],
          ['none', 'None'],
        ].map(([value, label]) => (
          <Button
            key={value}
            className="rgi-skeleton-example-animation-option"
            variant={animation === value ? 'contained' : 'text'}
            size="small"
            aria-pressed={animation === value}
            onClick={() => setAnimation(value)}
          >
            {label}
          </Button>
        ))}
      </fieldset>
      <div className="rgi-skeleton-example-surface">
        <ProfileCard animation={animation} />
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {animation === 'none'
          ? 'Animation is disabled.'
          : `${animation === 'pulse' ? 'Pulse' : 'Wave'} animation is active.`}
      </span>
    </div>
  );
}

export default function SkeletonPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Choose a text, rectangular, or circular placeholder and an animation that suits the loading state."
      usageDescription="Skeleton provides accessible decorative placeholders with pulse and wave animations, or no animation for reduced motion."
    >
      <div className="component-showcase component-showcase-skeleton">
        <DemoPanel
          title="Loading profile card"
          caption="Preview a content placeholder while profile data is loading, then reveal the finished content."
          code={SKELETON_STYLES_NOTE}
        >
          <ProfileSkeletonExample />
        </DemoPanel>
        <DemoPanel
          title="Shape and content variants"
          caption="Combine text, circular, and rectangular placeholders to match the content being loaded."
          code={SKELETON_STYLES_NOTE}
        >
          <SkeletonVariantsExample />
        </DemoPanel>
        <DemoPanel
          title="Animation styles"
          caption="Compare pulse and wave motion, or disable animation to reduce visual movement."
          code={SKELETON_STYLES_NOTE}
        >
          <SkeletonAnimationExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
