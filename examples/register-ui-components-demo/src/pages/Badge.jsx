import { useState } from 'react';
import Badge from '../components/Badge.jsx';

export default function BadgePage() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="demo-col">
      <section className="demo-section">
        <span className="demo-section-title">Status badges</span>
        <div className="demo-row">
          <Badge>New</Badge>
          <Badge color="success">Published</Badge>
          <Badge color="warning">Review</Badge>
          <Badge color="danger">Blocked</Badge>
        </div>
      </section>
      <section className="demo-section">
        <span className="demo-section-title">Badges anchored to content</span>
        <div className="demo-row">
          <Badge
            className="demo-badge-anchor"
            badgeContent={visible ? 4 : null}
            badgeLabel={visible ? '4 unread messages' : undefined}
          >
            Inbox
          </Badge>
          <Badge
            className="demo-badge-anchor"
            color="danger"
            badgeContent={visible ? 120 : null}
            badgeLabel={visible ? '120 alerts' : undefined}
            max={99}
          >
            Alerts
          </Badge>
          <Badge
            className="demo-badge-anchor"
            color="danger"
            variant="dot"
            badgeLabel={visible ? 'Online' : undefined}
            invisible={!visible}
          >
            Online
          </Badge>
          <Badge
            className="demo-badge-anchor"
            color="warning"
            badgeContent={visible ? 0 : null}
            badgeLabel={visible ? '0 notifications' : undefined}
            showZero
          >
            Empty
          </Badge>
        </div>
        <button
          className="demo-badge-control"
          type="button"
          aria-pressed={visible}
          onClick={() => setVisible((value) => !value)}
        >
          {visible ? 'Hide anchored badges' : 'Show anchored badges'}
        </button>
      </section>
    </div>
  );
}
