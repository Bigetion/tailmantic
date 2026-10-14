import { Button, Popper } from '@tailmantic/ui-components';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Check, Layers, Move } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import '@tailmantic/ui-components/button/styles';
import '@tailmantic/ui-components/popper/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('popper');
const POPPER_STYLES_NOTE =
  'Popper and its example layout styles are provided by @tailmantic/ui-components/popper/styles.';
const PLACEMENTS = [
  ['top', ArrowUp],
  ['right', ArrowRight],
  ['bottom', ArrowDown],
  ['left', ArrowLeft],
];
const FALLBACK_PLACEMENTS = ['top', 'right', 'bottom', 'left'];
const USAGE_CODE = `import { useRef, useState } from 'react';
import { Popper } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/popper/styles';

const anchorRef = useRef(null);
const [open, setOpen] = useState(false);

<button ref={anchorRef} onClick={() => setOpen((value) => !value)}>
  Toggle details
</button>
<Popper
  open={open}
  anchorRef={anchorRef}
  placement="bottom-start"
  offset={8}
>
  <div>Positioned content</div>
</Popper>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/PopperPage.jsx',
    'Examples for anchored content, placement fallback, and offset modifiers.',
  ],
  [
    'Component',
    'packages/ui-components/src/popper/Popper.jsx',
    'Popper.js positioning with portal rendering, flip fallback, and overflow prevention.',
  ],
  [
    'Styles',
    'packages/ui-components/src/popper/popper.styles.js',
    'Package-owned base positioning styles; surface styling is supplied by the example.',
  ],
];

function useActualPlacement(popperRef, open, placement) {
  const [actualPlacement, setActualPlacement] = useState('');

  useEffect(() => {
    if (!open || !popperRef.current) {
      setActualPlacement('');
      return undefined;
    }

    const popper = popperRef.current;
    const update = () => {
      setActualPlacement(popper.getAttribute('data-popper-placement') || placement);
    };
    const observer = new MutationObserver(update);
    observer.observe(popper, { attributes: true, attributeFilter: ['data-popper-placement'] });
    update();

    return () => observer.disconnect();
  }, [open, placement, popperRef]);

  return actualPlacement || placement;
}

function AnchoredSurface() {
  const anchorRef = useRef(null);
  const popperRef = useRef(null);
  const [open, setOpen] = useState(false);
  const actualPlacement = useActualPlacement(popperRef, open, 'bottom-start');

  return (
    <div className="rgi-popper-example">
      <div className="rgi-popper-example-stage">
        <div className="rgi-popper-example-copy">
          <span className="rgi-popper-example-eyebrow">ANCHORED FLOATING UI</span>
          <strong>Position content relative to a trigger</strong>
          <span>The floating surface is portaled and aligned with its reference element.</span>
        </div>
        <Button
          ref={anchorRef}
          variant="outlined"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close details' : 'Open details'}
          <Move size={13} aria-hidden="true" />
        </Button>
      </div>
      <span className="rgi-popper-example-status" role="status">
        {open
          ? `Open at ${actualPlacement}; use the surface action to close it.`
          : 'The Popper surface renders in a portal.'}
      </span>
      <Popper
        ref={popperRef}
        className="rgi-popper-example-surface"
        open={open}
        anchorRef={anchorRef}
        placement="bottom-start"
        role="dialog"
        aria-label="Anchored content preview"
      >
        <div className="rgi-popper-example-content">
          <span className="rgi-popper-example-icon">
            <Layers size={15} aria-hidden="true" />
          </span>
          <div>
            <strong>Anchored surface</strong>
            <span>Positioned with Popper.js</span>
          </div>
          <Button
            className="rgi-popper-example-action"
            variant="text"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
          <p>Popper keeps this content next to its reference element as the page changes.</p>
        </div>
      </Popper>
    </div>
  );
}

function PlacementPreview() {
  const anchorRef = useRef(null);
  const popperRef = useRef(null);
  const [placement, setPlacement] = useState('bottom');
  const [open, setOpen] = useState(false);
  const actualPlacement = useActualPlacement(popperRef, open, placement);

  return (
    <div className="rgi-popper-example">
      <fieldset className="rgi-popper-placement-controls">
        <legend className="sr-only">Choose Popper placement</legend>
        {PLACEMENTS.map(([value, Icon]) => (
          <Button
            key={value}
            className={
              placement === value
                ? 'rgi-popper-placement-option rgi-popper-placement-option-active'
                : 'rgi-popper-placement-option'
            }
            variant="outlined"
            aria-pressed={placement === value}
            onClick={() => {
              setPlacement(value);
              setOpen(true);
            }}
          >
            <Icon size={12} aria-hidden="true" />
            {value}
          </Button>
        ))}
      </fieldset>
      <div className="rgi-popper-placement-stage">
        <span className="rgi-popper-example-eyebrow">LIVE PLACEMENT PREVIEW</span>
        <Button
          ref={anchorRef}
          variant="outlined"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Reference element
        </Button>
        <span className="rgi-popper-example-status" role="status">
          {open
            ? `Actual placement: ${actualPlacement}${actualPlacement === placement ? '' : ` (flipped from ${placement})`}`
            : 'Choose a direction to preview placement and fallback behavior.'}
        </span>
      </div>
      <Popper
        ref={popperRef}
        className="rgi-popper-example-surface rgi-popper-placement-surface"
        open={open}
        anchorRef={anchorRef}
        placement={placement}
        fallbackPlacements={FALLBACK_PLACEMENTS}
        role="dialog"
        aria-label="Popper placement preview"
      >
        <div className="rgi-popper-placement-content">
          <strong>{actualPlacement}</strong>
          <span>Popper chooses a visible position when space is limited.</span>
          <Button
            className="rgi-popper-example-action"
            variant="text"
            onClick={() => setOpen(false)}
          >
            Close preview
          </Button>
        </div>
      </Popper>
    </div>
  );
}

function OffsetPreview() {
  const anchorRef = useRef(null);
  const popperRef = useRef(null);
  const [skidding, setSkidding] = useState(0);
  const [distance, setDistance] = useState(12);
  const [open, setOpen] = useState(false);
  const modifiers = useMemo(
    () => [{ name: 'offset', options: { offset: [skidding, distance] } }],
    [distance, skidding],
  );

  return (
    <div className="rgi-popper-example">
      <div className="rgi-popper-offset-controls">
        <label className="rgi-popper-range-control">
          <span>
            <strong>Skidding</strong>
            <output>{skidding}px</output>
          </span>
          <input
            type="range"
            min="-32"
            max="32"
            step="1"
            value={skidding}
            aria-label="Skidding offset"
            onChange={(event) => {
              setSkidding(Number(event.target.value));
              setOpen(true);
            }}
          />
          <small>Shift along the reference edge.</small>
        </label>
        <label className="rgi-popper-range-control">
          <span>
            <strong>Distance</strong>
            <output>{distance}px</output>
          </span>
          <input
            type="range"
            min="0"
            max="32"
            step="1"
            value={distance}
            aria-label="Distance offset"
            onChange={(event) => {
              setDistance(Number(event.target.value));
              setOpen(true);
            }}
          />
          <small>Move away from the reference element.</small>
        </label>
      </div>
      <div className="rgi-popper-offset-stage">
        <span className="rgi-popper-example-eyebrow">OFFSET MODIFIER</span>
        <Button
          ref={anchorRef}
          variant="outlined"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Reference element
        </Button>
        <span className="rgi-popper-example-status" role="status">
          {open
            ? `Offset modifier: [${skidding}, ${distance}]px`
            : 'Adjust an offset or open the preview.'}
        </span>
      </div>
      <Popper
        ref={popperRef}
        className="rgi-popper-example-surface rgi-popper-offset-surface"
        open={open}
        anchorRef={anchorRef}
        placement="bottom"
        fallbackPlacements={['top', 'right', 'left']}
        modifiers={modifiers}
        role="dialog"
        aria-label="Popper offset preview"
      >
        <div className="rgi-popper-offset-content">
          <span className="rgi-popper-example-icon">
            <Check size={14} aria-hidden="true" />
          </span>
          <div>
            <strong>Offset applied</strong>
            <span>
              Skidding {skidding}px · distance {distance}px
            </span>
          </div>
        </div>
      </Popper>
    </div>
  );
}

export default function PopperPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Give Popper a reference element and use placement, offset, and modifiers to control positioning."
      usageDescription="Popper renders content in a portal by default, positions it with Popper.js, flips when needed, and prevents viewport overflow."
    >
      <div className="component-showcase component-showcase-popper">
        <DemoPanel
          title="Anchored surface"
          caption="Position content relative to a reference element and render it in a portal."
          code={POPPER_STYLES_NOTE}
        >
          <AnchoredSurface />
        </DemoPanel>
        <DemoPanel
          title="Placement controls"
          caption="Compare top, right, bottom, and left placements and see when Popper flips to stay in view."
          code={POPPER_STYLES_NOTE}
        >
          <PlacementPreview />
        </DemoPanel>
        <DemoPanel
          title="Offset modifier"
          caption="Adjust skidding and distance to control how far the floating surface sits from its reference."
          code={POPPER_STYLES_NOTE}
        >
          <OffsetPreview />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
