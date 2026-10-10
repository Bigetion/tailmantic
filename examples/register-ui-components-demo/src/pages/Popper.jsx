import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, X } from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import FloatingSurface, { useClickAway } from '../components/FloatingSurface.jsx';

const PLACEMENTS = [
  ['top', ArrowUp],
  ['right', ArrowRight],
  ['bottom', ArrowDown],
  ['left', ArrowLeft],
];
const FALLBACKS = ['top', 'right', 'bottom', 'left'];

export default function Popper() {
  const referenceRef = useRef(null);
  const floatingRef = useRef(null);
  const [placement, setPlacement] = useState('bottom');
  const [skidding, setSkidding] = useState(0);
  const [distance, setDistance] = useState(12);
  const [actualPlacement, setActualPlacement] = useState('');
  const [open, setOpen] = useState(false);
  const modifiers = useMemo(
    () => [
      { name: 'offset', options: { offset: [skidding, distance] } },
      { name: 'flip', options: { fallbackPlacements: FALLBACKS } },
      { name: 'preventOverflow', options: { padding: 8 } },
    ],
    [distance, skidding],
  );
  const dismiss = useCallback(() => setOpen(false), []);
  useClickAway(open, referenceRef, floatingRef, dismiss);

  useEffect(() => {
    if (!open || !floatingRef.current) return undefined;
    const surface = floatingRef.current;
    const observer = new MutationObserver(() => {
      const value = surface.getAttribute('data-popper-placement');
      if (value) setActualPlacement(value);
    });
    observer.observe(surface, { attributes: true, attributeFilter: ['data-popper-placement'] });
    return () => observer.disconnect();
  }, [open]);

  return (
    <section className="demo-section">
      <span className="demo-section-title">Positioning, collision handling, and offsets</span>
      <fieldset className="demo-popper-controls">
        <legend className="sr-only">Popper placement</legend>
        {PLACEMENTS.map(([value, Icon]) => (
          <button
            className={
              placement === value
                ? 'demo-popper-control demo-popper-control-active'
                : 'demo-popper-control'
            }
            key={value}
            type="button"
            aria-pressed={placement === value}
            onClick={() => {
              setPlacement(value);
              setActualPlacement('');
              setOpen(true);
            }}
          >
            <Icon size={13} /> {value}
          </button>
        ))}
      </fieldset>
      <div className="demo-popper-offsets">
        <label>
          <span>
            Skidding <output>{skidding}px</output>
          </span>
          <input
            type="range"
            min="-32"
            max="32"
            value={skidding}
            aria-label="Skidding offset"
            onChange={(event) => setSkidding(Number(event.target.value))}
          />
        </label>
        <label>
          <span>
            Distance <output>{distance}px</output>
          </span>
          <input
            type="range"
            min="0"
            max="32"
            value={distance}
            aria-label="Distance offset"
            onChange={(event) => setDistance(Number(event.target.value))}
          />
        </label>
      </div>
      <div className="demo-popper-stage">
        <button
          type="button"
          className="demo-popper-anchor"
          ref={referenceRef}
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Reference element
        </button>
        <span className="demo-note" role="status">
          {open
            ? `Actual placement: ${actualPlacement || 'calculating'} · offset [${skidding}, ${distance}]px`
            : 'Select a direction or open the anchored surface.'}
        </span>
      </div>
      <FloatingSurface
        open={open}
        referenceRef={referenceRef}
        floatingRef={floatingRef}
        placement={placement}
        modifiers={modifiers}
        className="demo-popper-surface"
        role="dialog"
        onEscape={dismiss}
      >
        <strong>{actualPlacement || placement}</strong>
        <span>Popper.js flips the surface when viewport space is limited.</span>
        <button type="button" aria-label="Close floating surface" onClick={dismiss}>
          <X size={14} />
        </button>
      </FloatingSurface>
    </section>
  );
}
