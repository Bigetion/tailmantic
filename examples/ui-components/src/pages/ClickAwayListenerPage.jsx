import { ClickAwayListener } from '@tailmantic/ui-components';
import { Check, MousePointer2, MousePointerClick, Touchpad, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('click-away-listener');
const CLICK_AWAY_STYLES_NOTE =
  'ClickAwayListener component and example styles are provided by @tailmantic/ui-components/click-away-listener/styles.';
const USAGE_CODE = `import { useState } from 'react';
import { ClickAwayListener } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/click-away-listener/styles';

const [open, setOpen] = useState(false);

<ClickAwayListener onClickAway={() => open && setOpen(false)}>
  <div>
    <button type="button" onClick={() => setOpen((value) => !value)}>
      Toggle panel
    </button>
    {open && <div>Clicks inside stay open.</div>}
  </div>
</ClickAwayListener>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/ClickAwayListenerPage.jsx',
    'Interactive outside-click, portal-boundary, and touch-event examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/click-away-listener/',
    'Document-level click and touch listeners with composed-path containment checks.',
  ],
  [
    'Styles',
    'packages/ui-components/src/click-away-listener/click-away-listener.styles.js',
    'Package-owned ClickAwayListener and example layout styles.',
  ],
];

function PanelContent({ portal = false, insideCount, onInteract }) {
  return (
    <>
      <div className="rgi-click-away-example-panel-heading">
        <span className="rgi-click-away-example-panel-icon">
          <MousePointer2 size={15} aria-hidden="true" />
        </span>
        <span>
          <strong>{portal ? 'Portaled content' : 'Inside the panel'}</strong>
          <small>
            {portal ? 'This panel is rendered under document.body.' : 'Clicks here stay inside.'}
          </small>
        </span>
      </div>
      <button className="rgi-click-away-example-inside-action" type="button" onClick={onInteract}>
        <Check size={14} aria-hidden="true" />
        Interact inside
        <span>{insideCount}</span>
      </button>
    </>
  );
}

function ClickAwayExample({ variant }) {
  const [open, setOpen] = useState(false);
  const [insideCount, setInsideCount] = useState(0);
  const [message, setMessage] = useState('');
  const portalRef = useRef(null);
  const isPortal = variant === 'portal';
  const isTouch = variant === 'touch';

  function handleClickAway(event) {
    if (!open) return;
    const portal = portalRef.current;
    const eventPath = event.composedPath?.();
    if (portal && (eventPath?.includes(portal) || portal.contains(event.target))) return;

    setOpen(false);
    setMessage(
      `${event.type.startsWith('touch') ? 'Touch' : 'Click'} outside detected. Panel dismissed.`,
    );
  }

  function toggle() {
    setOpen((current) => !current);
    setMessage('');
  }

  function interactInside() {
    setInsideCount((current) => current + 1);
    setMessage('Interaction inside detected. Panel stays open.');
  }

  const portalPanel =
    isPortal && open
      ? createPortal(
          <div className="rgi-click-away-example-portal" ref={(node) => (portalRef.current = node)}>
            <PanelContent portal insideCount={insideCount} onInteract={interactInside} />
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="rgi-click-away-example">
      <div className="rgi-click-away-example-stage">
        <div className="rgi-click-away-example-copy">
          <span className="rgi-click-away-example-eyebrow">
            {isPortal ? 'PORTALED SURFACE' : isTouch ? 'MOUSE AND TOUCH' : 'OUTSIDE INTERACTION'}
          </span>
          <strong>
            {isPortal
              ? 'Extend the boundary to portal content'
              : isTouch
                ? 'Dismiss on click or touch'
                : 'Dismiss on outside click'}
          </strong>
          <span>
            {isPortal
              ? 'A portal sits outside the DOM wrapper, so the callback checks its event path before dismissing.'
              : isTouch
                ? 'The component listens for clicks and touch events and suppresses the synthetic mouse event after a touch.'
                : 'Interact inside the panel, then use the outside target or click elsewhere.'}
          </span>
        </div>
        <ClickAwayListener
          className="rgi-click-away-example-boundary"
          mouseEvent={isTouch ? 'click' : undefined}
          onClickAway={handleClickAway}
          touchEvent={isTouch ? 'touchend' : undefined}
        >
          <button
            className="rgi-click-away-example-trigger"
            type="button"
            aria-expanded={open}
            onClick={toggle}
          >
            {open ? 'Close panel' : 'Open panel'}
            {open ? (
              <X size={14} aria-hidden="true" />
            ) : isTouch ? (
              <Touchpad size={14} aria-hidden="true" />
            ) : (
              <MousePointerClick size={14} aria-hidden="true" />
            )}
          </button>
          {open && !isPortal && (
            <section className="rgi-click-away-example-panel" aria-label="Inside panel">
              <PanelContent insideCount={insideCount} onInteract={interactInside} />
            </section>
          )}
        </ClickAwayListener>
        <button className="rgi-click-away-example-outside" type="button">
          Click outside this boundary
        </button>
        {portalPanel}
      </div>
      <div className="rgi-click-away-example-feedback" role="status" aria-live="polite">
        <span
          className={`rgi-click-away-example-dot${open ? ' rgi-click-away-example-dot-open' : ''}`}
        />
        <span>
          {message ||
            (open
              ? 'Listener is active. Try an inside interaction, then click outside.'
              : 'Panel closed. Open it to test click-away behavior.')}
        </span>
      </div>
    </div>
  );
}

export default function ClickAwayListenerPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Wrap the trigger and in-tree surface, then close it from onClickAway when it is open."
      usageDescription="ClickAwayListener detects clicks and touch events outside its DOM boundary. For portal content, include that node in your callback's boundary check."
    >
      <div className="component-showcase component-showcase-click-away-listener">
        <DemoPanel
          title="Outside click"
          caption="Keep a panel open during in-boundary interactions and dismiss it from outside."
          code={CLICK_AWAY_STYLES_NOTE}
        >
          <ClickAwayExample variant="basic" />
        </DemoPanel>
        <DemoPanel
          title="Portaled content"
          caption="Extend the outside check to a portal node so interacting with portaled content does not dismiss it."
          code={CLICK_AWAY_STYLES_NOTE}
        >
          <ClickAwayExample variant="portal" />
        </DemoPanel>
        <DemoPanel
          title="Mouse and touch"
          caption="Use the component's click and touch listeners together without double handling a touch."
          code={CLICK_AWAY_STYLES_NOTE}
        >
          <ClickAwayExample variant="touch" />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
