import { Button } from '@tailmantic/ui-components';
import Portal from '@tailmantic/ui-components/portal';
import { ArrowUpRight, Layers, MousePointer2, X } from 'lucide-react';
import { useRef, useState } from 'react';
import '@tailmantic/ui-components/button/styles';
import '@tailmantic/ui-components/portal/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('portal');
const PORTAL_STYLES_NOTE =
  'Portal and its example layout styles are provided by @tailmantic/ui-components/portal/styles.';
const USAGE_CODE = `import { Portal } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/portal/styles';

<Portal>
  <aside role="status">Rendered under document.body</aside>
</Portal>

<Portal container={() => document.querySelector('#overlay-root')}>
  <aside>Rendered into a custom target</aside>
</Portal>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/PortalPage.jsx',
    'Examples for the body target, custom target, and escaping a clipping parent.',
  ],
  [
    'Component',
    'packages/ui-components/src/portal/Portal.jsx',
    'React portal with a configurable container and a server-rendering fallback.',
  ],
  [
    'Styles',
    'packages/ui-components/src/portal/portal.styles.js',
    'Package-owned portal wrapper and example layout styles.',
  ],
];

function BodyTargetDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rgi-portal-example">
      <div className="rgi-portal-example-stage">
        <div className="rgi-portal-example-copy">
          <span className="rgi-portal-example-eyebrow">RENDER OUTSIDE THE PARENT</span>
          <strong>Move content to document.body</strong>
          <span>
            The Portal component stays here while its notification mounts elsewhere in the DOM.
          </span>
        </div>
        <Button variant="outlined" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? 'Hide notification' : 'Show notification'}
          <ArrowUpRight size={13} aria-hidden="true" />
        </Button>
      </div>
      <div className="rgi-portal-example-feedback" role="status">
        {open
          ? 'Notification is rendered directly inside document.body.'
          : 'Show the notification to inspect its portal destination.'}
      </div>
      {open && (
        <Portal>
          <aside className="rgi-portal-body-notice" role="status">
            <span className="rgi-portal-example-icon">
              <Layers size={14} aria-hidden="true" />
            </span>
            <span>
              <strong>Portal notification</strong>
              <small>Rendered into document.body</small>
            </span>
            <Button variant="text" aria-label="Dismiss notification" onClick={() => setOpen(false)}>
              <X size={13} aria-hidden="true" />
            </Button>
          </aside>
        </Portal>
      )}
    </div>
  );
}

function CustomTargetDemo() {
  const targetRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [bubbledClicks, setBubbledClicks] = useState(0);

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: Counts clicks bubbling through the React tree from portal content.
    // biome-ignore lint/a11y/useKeyWithClickEvents: This parent observes bubbled clicks; it is not itself interactive.
    <div
      className="rgi-portal-example rgi-portal-custom-demo"
      onClick={() => setBubbledClicks((count) => count + 1)}
    >
      <div className="rgi-portal-example-stage rgi-portal-custom-stage">
        <div className="rgi-portal-example-copy">
          <span className="rgi-portal-example-eyebrow">CUSTOM MOUNT NODE</span>
          <strong>Choose where portal content mounts</strong>
          <span>
            Send content into a specific target while React events still follow the component tree.
          </span>
        </div>
        <Button variant="outlined" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? 'Unmount content' : 'Mount content'}
        </Button>
        <div className="rgi-portal-custom-target" ref={targetRef}>
          <span className="rgi-portal-target-label">Custom portal target</span>
          {open && targetRef.current && (
            <Portal container={targetRef.current}>
              <div className="rgi-portal-target-content">
                <MousePointer2 size={14} aria-hidden="true" />
                <span>
                  <strong>Mounted here</strong>
                  <small>Clicks bubble through React.</small>
                </span>
                <Button
                  variant="text"
                  aria-label="Close custom portal"
                  onClick={() => setOpen(false)}
                >
                  <X size={12} aria-hidden="true" />
                </Button>
              </div>
            </Portal>
          )}
        </div>
      </div>
      <div className="rgi-portal-example-feedback" role="status">
        {`React parent received ${bubbledClicks} ${bubbledClicks === 1 ? 'click' : 'clicks'}${open ? ' · portal mounted in the custom target' : ''}.`}
      </div>
    </div>
  );
}

function ClippingDemo() {
  const [open, setOpen] = useState(false);

  return (
    <div className="rgi-portal-example">
      <div className="rgi-portal-clipping-frame">
        <span className="rgi-portal-example-eyebrow">CLIPPING CONTAINER · OVERFLOW HIDDEN</span>
        <p>This frame clips anything rendered inside its bounds.</p>
        <Button variant="outlined" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? 'Close escaped layer' : 'Open escaped layer'}
          <ArrowUpRight size={13} aria-hidden="true" />
        </Button>
      </div>
      <div className="rgi-portal-example-feedback" role="status">
        {open
          ? 'The layer is outside the clipping frame in document.body.'
          : 'Open the layer to see a portal escape its clipping parent.'}
      </div>
      {open && (
        <Portal>
          <aside className="rgi-portal-escaped-layer" role="status">
            <span className="rgi-portal-example-icon">
              <Layers size={13} aria-hidden="true" />
            </span>
            <span>
              <strong>Outside the frame</strong>
              <small>Portaled to document.body</small>
            </span>
            <Button variant="text" aria-label="Close escaped layer" onClick={() => setOpen(false)}>
              <X size={12} aria-hidden="true" />
            </Button>
          </aside>
        </Portal>
      )}
    </div>
  );
}

export default function PortalPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Render children through Portal and optionally choose a container element or resolver."
      usageDescription="Portal mounts content under document.body by default, supports custom DOM targets, and preserves React event propagation."
    >
      <div className="component-showcase component-showcase-portal">
        <DemoPanel
          title="Portal to document.body"
          caption="Render a notification outside its React parent and inspect its DOM destination."
          code={PORTAL_STYLES_NOTE}
        >
          <BodyTargetDemo />
        </DemoPanel>
        <DemoPanel
          title="Custom portal target"
          caption="Mount content into a chosen DOM node while React events continue to bubble through the component tree."
          code={PORTAL_STYLES_NOTE}
        >
          <CustomTargetDemo />
        </DemoPanel>
        <DemoPanel
          title="Escape clipping"
          caption="Render a floating layer outside an overflow-hidden parent so it remains visible."
          code={PORTAL_STYLES_NOTE}
        >
          <ClippingDemo />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
