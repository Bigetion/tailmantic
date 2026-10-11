import { useState } from 'react';
import { Check, Image, RotateCcw, UserRound } from 'lucide-react';
import { cx } from 'tailmantic';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('skeleton');

const DEMOS = {
  skeleton: {
    title: 'Loading profile card',
    caption: 'Preview a content placeholder while profile data is loading, then reveal the finished content.',
  },
  'skeleton-variants': {
    title: 'Shape and content variants',
    caption: 'Combine text, circular, and rectangular placeholders to match the content being loaded.',
  },
  'skeleton-animation': {
    title: 'Animation styles',
    caption: 'Compare pulse and wave motion, or disable animation to reduce visual movement.',
  },
};

function SkeletonShape({ className = '' }) {
  return <span className={cx('skeleton-block', className)} aria-hidden="true" />;
}

function ProfileCard({ loaded = false }) {
  return (
    <article className={cx('skeleton-profile-card', loaded && 'skeleton-profile-card-loaded')} aria-busy={!loaded}>
      {loaded ? (
        <>
          <div className="skeleton-profile-avatar skeleton-profile-avatar-loaded"><UserRound size={20} aria-hidden="true" /></div>
          <div className="skeleton-profile-copy">
            <strong>Jordan Lee</strong>
            <span>Product designer · 8 projects</span>
            <p>Building thoughtful tools for teams that do their best work together.</p>
          </div>
          <span className="skeleton-loaded-badge"><Check size={12} aria-hidden="true" /> Loaded</span>
        </>
      ) : (
        <>
          <div className="skeleton-profile-avatar"><SkeletonShape className="skeleton-avatar" /></div>
          <div className="skeleton-profile-copy" aria-hidden="true">
            <SkeletonShape className="skeleton-title" />
            <SkeletonShape className="skeleton-subtitle" />
            <SkeletonShape className="skeleton-copy" />
            <SkeletonShape className="skeleton-copy skeleton-copy-short" />
          </div>
          <span className="skeleton-block skeleton-profile-action" aria-hidden="true" />
        </>
      )}
    </article>
  );
}

function ProfileSkeletonDemo() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="skeleton-demo">
      <div className="skeleton-preview-surface skeleton-animation-pulse">
        <ProfileCard loaded={loaded} />
      </div>
      <div className="skeleton-controls">
        <button className="rgi-button rgi-button-outlined" type="button" onClick={() => setLoaded((current) => !current)}>
          {loaded ? <><RotateCcw size={13} aria-hidden="true" /> Show loading state</> : <><Check size={13} aria-hidden="true" /> Load profile</>}
        </button>
        <span className="preview-note" role="status">{loaded ? 'Profile content is ready.' : 'Loading profile details…'}</span>
      </div>
    </div>
  );
}

function SkeletonVariantsDemo() {
  return (
    <div className="skeleton-demo">
      <div className="skeleton-variant-grid skeleton-animation-pulse">
        <div className="skeleton-variant-card">
          <div className="skeleton-variant-image"><Image size={18} aria-hidden="true" /><span>Image</span></div>
          <SkeletonShape className="skeleton-variant-title" />
          <SkeletonShape className="skeleton-variant-line" />
          <SkeletonShape className="skeleton-variant-line skeleton-variant-line-short" />
        </div>
        <div className="skeleton-variant-card skeleton-variant-horizontal">
          <SkeletonShape className="skeleton-variant-circle" />
          <div className="skeleton-variant-copy">
            <SkeletonShape className="skeleton-variant-title" />
            <SkeletonShape className="skeleton-variant-line" />
            <SkeletonShape className="skeleton-variant-line skeleton-variant-line-short" />
          </div>
        </div>
        <div className="skeleton-variant-card skeleton-variant-list">
          {[0, 1, 2].map((item) => (
            <div className="skeleton-variant-row" key={item}>
              <SkeletonShape className="skeleton-variant-list-icon" />
              <div className="skeleton-variant-copy">
                <SkeletonShape className="skeleton-variant-title" />
                <SkeletonShape className="skeleton-variant-line skeleton-variant-line-short" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="preview-note">Match placeholder shapes to the layout of the content being loaded.</span>
    </div>
  );
}

function SkeletonAnimationDemo() {
  const [animation, setAnimation] = useState('pulse');

  return (
    <div className="skeleton-demo">
      <style>{'@keyframes registyle-skeleton-wave { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }'}</style>
      <div className="skeleton-animation-controls" role="group" aria-label="Skeleton animation">
        {[
          ['pulse', 'Pulse'],
          ['wave', 'Wave'],
          ['none', 'None'],
        ].map(([value, label]) => (
          <button
            className={cx('skeleton-animation-option', animation === value && 'skeleton-animation-option-active')}
            type="button"
            aria-pressed={animation === value}
            key={value}
            onClick={() => setAnimation(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={`skeleton-preview-surface skeleton-animation-${animation}`}>
        <ProfileCard />
      </div>
      <span className="preview-note" role="status">
        {animation === 'none' ? 'Animation is disabled.' : `${animation === 'pulse' ? 'Pulse' : 'Wave'} animation is active.`}
      </span>
    </div>
  );
}

function SkeletonDemoContent({ demoId }) {
  if (demoId === 'skeleton-variants') return <SkeletonVariantsDemo />;
  if (demoId === 'skeleton-animation') return <SkeletonAnimationDemo />;
  return <ProfileSkeletonDemo />;
}

export default function SkeletonPage() {
  const styleSource = getStyleSource('skeleton');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <SkeletonDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
