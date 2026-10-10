import { useState } from 'react';

function Skeleton({ variant = 'text', width, height, animated = true }) {
  return (
    <span
      className={`demo-skeleton demo-skeleton-${variant}${animated ? '' : ' demo-skeleton-static'}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}

export default function SkeletonDemo() {
  const [loading, setLoading] = useState(true);
  const [animated, setAnimated] = useState(true);
  return (
    <section className="demo-section">
      <div className="demo-row">
        <button
          type="button"
          className="demo-skeleton-control"
          aria-pressed={loading}
          onClick={() => setLoading((value) => !value)}
        >
          {loading ? 'Show loaded content' : 'Show loading placeholders'}
        </button>
        <label className="demo-skeleton-toggle">
          <input
            type="checkbox"
            checked={animated}
            onChange={(event) => setAnimated(event.target.checked)}
          />{' '}
          Animate
        </label>
      </div>
      {loading ? (
        <section className="demo-col" aria-label="Loading content" aria-busy="true">
          <Skeleton width="60%" animated={animated} />
          <Skeleton width="85%" animated={animated} />
          <div className="demo-row">
            <Skeleton variant="circular" width={44} height={44} animated={animated} />
            <Skeleton variant="rectangular" width={180} height={64} animated={animated} />
          </div>
        </section>
      ) : (
        <article className="demo-skeleton-loaded">
          <strong>Workspace loaded</strong>
          <span>Project activity and team updates are ready.</span>
        </article>
      )}
    </section>
  );
}
