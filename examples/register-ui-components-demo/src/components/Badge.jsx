import { useState } from 'react';

function Badge({ children, color = 'primary' }) {
  return <span className={`demo-badge demo-badge-${color}`}>{children}</span>;
}

export default function BadgeDemo() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="demo-col">
      <div className="demo-row">
        <Badge>New</Badge>
        <Badge color="success">Published</Badge>
        <Badge color="warning">Review</Badge>
        <Badge color="danger">Blocked</Badge>
      </div>
      <div className="demo-row">
        <span className="demo-badge-anchor">
          <span aria-hidden="true">Inbox</span>
          {visible && <Badge>4</Badge>}
        </span>
        <span className="demo-badge-anchor">
          <span aria-hidden="true">Alerts</span>
          {visible && <Badge color="danger">99+</Badge>}
        </span>
        <span className="demo-badge-anchor">
          <span aria-hidden="true">Online</span>
          {visible && <span className="demo-badge-dot" role="img" aria-label="Online" />}
        </span>
        <span className="demo-badge-anchor">
          <span aria-hidden="true">Empty</span>
          {visible && <Badge color="warning">0</Badge>}
        </span>
      </div>
      <button
        className="demo-badge-control"
        type="button"
        aria-pressed={visible}
        onClick={() => setVisible((value) => !value)}
      >
        {visible ? 'Hide anchored badges' : 'Show anchored badges'}
      </button>
    </div>
  );
}
