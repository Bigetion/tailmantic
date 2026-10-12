import { Badge, Button } from '@tailmantic/ui-components';
import { Bell, Mail, MessageCircle, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('badge');
const BADGE_STYLES_NOTE =
  'Badge styles are provided by @tailmantic/ui-components/badge/styles.';
const USAGE_CODE = `import { Badge } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/badge/styles';

<Badge badgeContent={unreadCount} badgeLabel={\`\${unreadCount} unread notifications\`}>
  <Bell aria-hidden="true" />
</Badge>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/BadgePage.jsx',
    'Dedicated examples for notification counts, visibility, colors, and status dots.',
  ],
  [
    'Component',
    'packages/ui-components/src/badge/Badge.jsx',
    'Badge with max count, zero visibility, semantic color, overlap, dot, and hidden states.',
  ],
  [
    'Styles',
    'packages/ui-components/src/badge/badge.styles.js',
    'Package-owned badge positioning, colors, dot, and example layout styles.',
  ],
];

function BadgeCounts() {
  const [unread, setUnread] = useState(4);
  const [messages, setMessages] = useState(104);

  return (
    <div className="preview-stack">
      <div className="rgi-badge-examples" role="group" aria-label="Notification badge counts">
        <Badge badgeContent={unread} badgeLabel={`${unread} unread notifications`}>
          <span className="rgi-badge-anchor">
            <Bell size={21} aria-hidden="true" />
          </span>
        </Badge>
        <Badge badgeContent={messages} badgeLabel="99 plus unread messages">
          <span className="rgi-badge-anchor">
            <Mail size={21} aria-hidden="true" />
          </span>
        </Badge>
        <Badge
          badgeContent={0}
          badgeLabel="No unread messages"
          color="default"
          showZero
        >
          <span className="rgi-badge-anchor">
            <MessageCircle size={21} aria-hidden="true" />
          </span>
        </Badge>
      </div>
      <div className="rgi-badge-actions">
        <Button variant="outlined" onClick={() => setUnread((count) => Math.max(0, count - 1))}>
          Mark one read
        </Button>
        <Button variant="outlined" onClick={() => setMessages((count) => Math.min(120, count + 1))}>
          Add message
        </Button>
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        {unread} unread notifications · {messages} total messages
      </span>
    </div>
  );
}

function BadgeVisibility() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="preview-stack">
      <div className="rgi-badge-examples" role="group" aria-label="Badge visibility and color">
        <Badge
          badgeContent={8}
          badgeLabel={visible ? '8 unread notifications' : undefined}
          invisible={!visible}
        >
          <span className="rgi-badge-anchor">
            <Bell size={21} aria-hidden="true" />
          </span>
        </Badge>
        <Badge badgeContent={3} badgeLabel="3 tasks remaining" color="success">
          <span className="rgi-badge-task-anchor">Tasks</span>
        </Badge>
        <Badge badgeContent={5} badgeLabel="5 urgent issues" color="danger">
          <span className="rgi-badge-task-anchor">Issues</span>
        </Badge>
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

function BadgeDots() {
  const [online, setOnline] = useState(true);
  const [cartItems, setCartItems] = useState(2);

  return (
    <div className="preview-stack">
      <div className="rgi-badge-examples" role="group" aria-label="Dot and compact badges">
        <Badge
          variant="dot"
          color="success"
          badgeLabel={`Morgan Kim is ${online ? 'online' : 'offline'}`}
          invisible={!online}
          overlap="rectangular"
        >
          <span className="rgi-badge-avatar" aria-hidden="true">
            MK
          </span>
        </Badge>
        <Badge
          badgeContent={cartItems}
          badgeLabel={`Shopping cart with ${cartItems} ${cartItems === 1 ? 'item' : 'items'}`}
          overlap="rectangular"
        >
          <span className="rgi-badge-anchor">
            <ShoppingCart size={21} aria-hidden="true" />
          </span>
        </Badge>
      </div>
      <div className="rgi-badge-actions">
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

export default function BadgePage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Wrap an icon or label with Badge and provide a concise accessible label for its content."
      usageDescription="Badge supports capped counts, optional zero values, semantic colors, visibility control, rectangular overlap, and status dots."
    >
      <div className="component-showcase component-showcase-badge">
        <DemoPanel
          title="Notification counts"
          caption="Show unread counts clearly, including zero and capped large values."
          code={BADGE_STYLES_NOTE}
        >
          <BadgeCounts />
        </DemoPanel>
        <DemoPanel
          title="Visibility and emphasis"
          caption="Control when a badge appears and vary its emphasis for secondary counts."
          code={BADGE_STYLES_NOTE}
        >
          <BadgeVisibility />
        </DemoPanel>
        <DemoPanel
          title="Status and compact badges"
          caption="Use a dot for presence and a count badge for compact action indicators."
          code={BADGE_STYLES_NOTE}
        >
          <BadgeDots />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
