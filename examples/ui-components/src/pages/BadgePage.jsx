import { useState } from 'react';
import { Bell, Mail, MessageCircle, ShoppingCart } from 'lucide-react';
import { Badge, Button } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('badge');

const DEMOS = {
  badge: {
    title: 'Notification counts',
    caption: 'Show unread counts clearly, including zero and capped large values.',
  },
  'badge-colors': {
    title: 'Visibility and emphasis',
    caption: 'Control when a badge appears and vary its emphasis for secondary counts.',
  },
  'badge-dot': {
    title: 'Status and compact badges',
    caption: 'Use a dot for presence and a count badge for compact action indicators.',
  },
};

function BadgeCounts() {
  const [unread, setUnread] = useState(4);
  const [messages, setMessages] = useState(104);

  return (
    <div className="preview-stack">
      <div className="badge-examples" role="group" aria-label="Notification badge counts">
        <span className="badge-anchor">
          <Badge badgeContent={unread} badgeLabel={`${unread} unread notifications`}>
            <Bell size={21} aria-hidden="true" />
          </Badge>
        </span>
        <span className="badge-anchor">
          <Badge badgeContent={messages} max={99} badgeLabel="99 plus unread messages">
            <Mail size={21} aria-hidden="true" />
          </Badge>
        </span>
        <span className="badge-anchor">
          <Badge badgeContent={0} showZero badgeLabel="No unread messages">
            <MessageCircle size={21} aria-hidden="true" />
          </Badge>
        </span>
      </div>
      <div className="badge-actions">
        <Button variant="outlined" onClick={() => setUnread((count) => Math.max(0, count - 1))}>Mark one read</Button>
        <Button variant="outlined" onClick={() => setMessages((count) => Math.min(120, count + 1))}>Add message</Button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {unread} unread notifications · {messages} total messages
      </span>
    </div>
  );
}

function BadgeDots() {
  const [online, setOnline] = useState(true);
  const [cartItems, setCartItems] = useState(2);

  return (
    <div className="preview-stack">
      <div className="badge-examples" role="group" aria-label="Dot and compact badges">
        <span className="badge-anchor">
          <Badge
            variant="dot"
            color="success"
            badgeLabel={`Morgan Kim is ${online ? 'online' : 'offline'}`}
            overlap="rectangular"
          >
            <span className="badge-avatar" aria-hidden="true">MK</span>
          </Badge>
        </span>
        <span className="badge-anchor">
          <Badge
            badgeContent={cartItems}
            badgeLabel={`Shopping cart with ${cartItems} ${cartItems === 1 ? 'item' : 'items'}`}
            overlap="rectangular"
          >
            <ShoppingCart size={21} aria-hidden="true" />
          </Badge>
        </span>
      </div>
      <div className="badge-actions">
        <Button variant="outlined" onClick={() => setOnline((value) => !value)}>
          Set {online ? 'offline' : 'online'}
        </Button>
        <Button variant="outlined" onClick={() => setCartItems((count) => count + 1)}>
          Add to cart
        </Button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        Morgan is {online ? 'online' : 'offline'} · {cartItems} items in cart
      </span>
    </div>
  );
}

function BadgeVisibility() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="preview-stack">
      <div className="badge-examples" role="group" aria-label="Badge visibility examples">
        <span className="badge-anchor">
          <Badge
            badgeContent={8}
            invisible={!visible}
            badgeLabel={visible ? '8 unread notifications' : 'Notifications badge hidden'}
          >
            <Bell size={21} aria-hidden="true" />
          </Badge>
        </span>
        <span className="badge-anchor">
          <Badge badgeContent={3} color="default" badgeLabel="3 tasks remaining" overlap="rectangular">
            <span className="badge-task-anchor" aria-hidden="true">Tasks</span>
          </Badge>
        </span>
      </div>
      <Button variant="outlined" onClick={() => setVisible((value) => !value)}>
        {visible ? 'Hide notification badge' : 'Show notification badge'}
      </Button>
      <span className="preview-note" role="status" aria-live="polite">
        Notification badge {visible ? 'visible' : 'hidden'}.
      </span>
    </div>
  );
}

function BadgeDemoContent({ demoId }) {
  if (demoId === 'badge-dot') return <BadgeDots />;
  if (demoId === 'badge-colors') return <BadgeVisibility />;
  return <BadgeCounts />;
}

export default function BadgePage() {
  const styleSource = getStyleSource('badge');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <BadgeDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
