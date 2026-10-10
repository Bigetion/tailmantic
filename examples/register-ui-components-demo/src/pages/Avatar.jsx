import { useState } from 'react';
import Avatar from '../components/Avatar.jsx';

const AVATAR_IMAGE = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" fill="#8caaff"/><text x="50%" y="58%" text-anchor="middle" font-size="14" fill="#1a2332">TS</text></svg>')}`;

export default function AvatarPage() {
  const [showFallback, setShowFallback] = useState(false);
  const sizes = ['xs', 'small', 'medium', 'large', 'xl'];

  return (
    <div className="demo-col">
      <div className="demo-row">
        {sizes.map((size) => (
          <Avatar key={size} size={size} alt={`${size} avatar`}>
            {size.slice(0, 2).toUpperCase()}
          </Avatar>
        ))}
      </div>
      <fieldset className="demo-avatar-group">
        <legend className="sr-only">Project collaborators</legend>
        <Avatar color="primary" alt="Alex Lee">
          AL
        </Avatar>
        <Avatar color="success" alt="Jordan Miller">
          JM
        </Avatar>
        <Avatar color="warning" alt="Rina Khan">
          RK
        </Avatar>
        <Avatar alt="Four more collaborators">+4</Avatar>
      </fieldset>
      <div className="demo-row">
        <Avatar alt="Taylor Smith" size="large" src={showFallback ? undefined : AVATAR_IMAGE}>
          TS
        </Avatar>
        <button
          type="button"
          className="demo-avatar-control"
          aria-pressed={showFallback}
          onClick={() => setShowFallback((value) => !value)}
        >
          {showFallback ? 'Show image example' : 'Show initials fallback'}
        </button>
      </div>
      <span className="demo-note">
        Initials provide an accessible fallback when an image is unavailable.
      </span>
    </div>
  );
}
