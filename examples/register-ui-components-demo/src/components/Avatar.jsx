import { useState } from 'react';

const AVATAR_IMAGE = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" fill="#8caaff"/><text x="50%" y="58%" text-anchor="middle" font-size="14" fill="#1a2332">TS</text></svg>')}`;

function Avatar({ children, color = 'default', size = 'medium', imageError = false }) {
  const [loadFailed, setLoadFailed] = useState(false);
  const failed = imageError || loadFailed;
  const src = typeof children === 'object' ? children.src : undefined;
  const label = typeof children === 'object' ? children.label : children;
  return (
    <span
      className={`demo-avatar demo-avatar-${color} demo-avatar-${size}`}
      role="img"
      aria-label={label}
    >
      {src && !failed ? <img src={src} alt="" onError={() => setLoadFailed(true)} /> : label}
    </span>
  );
}

export default function AvatarDemo() {
  const [simulateFailure, setSimulateFailure] = useState(false);
  const sizes = ['xs', 'small', 'medium', 'large', 'xl'];
  return (
    <div className="demo-col">
      <div className="demo-row">
        {sizes.map((size) => (
          <Avatar key={size} size={size}>
            {size.slice(0, 2).toUpperCase()}
          </Avatar>
        ))}
      </div>
      <fieldset className="demo-avatar-group">
        <legend className="sr-only">Project collaborators</legend>
        <Avatar color="primary">AL</Avatar>
        <Avatar color="success">JM</Avatar>
        <Avatar color="warning">RK</Avatar>
        <Avatar>+4</Avatar>
      </fieldset>
      <div className="demo-row">
        <Avatar imageError={simulateFailure} size="large">
          {simulateFailure ? 'TS' : { src: AVATAR_IMAGE, label: 'Taylor Smith' }}
        </Avatar>
        <button
          type="button"
          className="demo-avatar-control"
          aria-pressed={simulateFailure}
          onClick={() => setSimulateFailure((value) => !value)}
        >
          {simulateFailure ? 'Show image example' : 'Simulate image fallback'}
        </button>
      </div>
      <span className="demo-note">
        Initials provide an accessible fallback when an image is unavailable.
      </span>
    </div>
  );
}
