import { Bookmark, Heart } from 'lucide-react';
import { useState } from 'react';

function Card({ children, variant = 'elevated' }) {
  return <article className={`demo-card demo-card-${variant}`}>{children}</article>;
}

export default function CardDemo() {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  return (
    <div className="demo-grid">
      <Card>
        <h2>Project overview</h2>
        <p>Reusable interface components with consistent styles.</p>
        <div className="demo-row">
          <span className="demo-chip demo-chip-success">Active</span>
          <span className="demo-badge demo-badge-primary">12 updates</span>
        </div>
      </Card>
      <Card variant="outlined">
        <h2>Card variants</h2>
        <p>Elevated and outlined surfaces built with local Tailmantic styles.</p>
      </Card>
      <Card>
        <div className="demo-card-media" role="img" aria-label="Abstract blue landscape" />
        <span className="demo-note">FIELD NOTES · 5 MIN READ</span>
        <h2>Building a design system that scales</h2>
        <p>Practical patterns for teams growing their component library.</p>
        <div className="demo-row">
          <button
            type="button"
            className={`demo-card-action${liked ? ' demo-card-action-active' : ''}`}
            aria-pressed={liked}
            onClick={() => setLiked((value) => !value)}
          >
            <Heart size={15} fill={liked ? 'currentColor' : 'none'} /> {liked ? 'Liked' : 'Like'}
          </button>
          <button
            type="button"
            className={`demo-card-action${saved ? ' demo-card-action-active' : ''}`}
            aria-pressed={saved}
            onClick={() => setSaved((value) => !value)}
          >
            <Bookmark size={15} fill={saved ? 'currentColor' : 'none'} /> {saved ? 'Saved' : 'Save'}
          </button>
        </div>
      </Card>
    </div>
  );
}
