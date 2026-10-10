import { Check, CircleHelp, Keyboard, Sparkles } from 'lucide-react';
import { useCallback, useMemo, useRef, useState } from 'react';
import FloatingSurface from './FloatingSurface.jsx';

const PLACEMENTS = ['top', 'right', 'bottom', 'left'];

export default function Tooltip() {
  const referenceRef = useRef(null);
  const [mode, setMode] = useState('basic');
  const [placement, setPlacement] = useState('top');
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [clicked, setClicked] = useState(false);
  const open = hovered || focused || clicked;
  const dismiss = useCallback(() => {
    setHovered(false);
    setFocused(false);
    setClicked(false);
  }, []);
  const label =
    mode === 'interactive'
      ? 'Smart suggestions: Use shortcuts to finish common tasks faster.'
      : mode === 'placement'
        ? `Tooltip positioned ${placement}.`
        : 'Helpful information appears on hover or focus.';
  const modifiers = useMemo(
    () => [
      { name: 'offset', options: { offset: [0, 8] } },
      { name: 'flip', options: { fallbackPlacements: ['top', 'right', 'bottom', 'left'] } },
      { name: 'preventOverflow', options: { padding: 8 } },
    ],
    [],
  );

  return (
    <section className="demo-section">
      <span className="demo-section-title">Hover, focus, click, and placement</span>
      <fieldset className="demo-tooltip-modes">
        <legend className="sr-only">Tooltip example</legend>
        {[
          ['basic', 'Hover or focus'],
          ['placement', 'Placement'],
          ['interactive', 'Rich tooltip'],
        ].map(([value, title]) => (
          <button
            type="button"
            key={value}
            className={
              mode === value ? 'demo-tooltip-mode demo-tooltip-mode-active' : 'demo-tooltip-mode'
            }
            aria-pressed={mode === value}
            onClick={() => {
              setMode(value);
              setHovered(false);
              setFocused(false);
              setClicked(false);
            }}
          >
            {title}
          </button>
        ))}
      </fieldset>
      {mode === 'placement' && (
        <fieldset className="demo-tooltip-modes">
          <legend className="sr-only">Tooltip placement</legend>
          {PLACEMENTS.map((value) => (
            <button
              type="button"
              key={value}
              className={
                placement === value
                  ? 'demo-tooltip-mode demo-tooltip-mode-active'
                  : 'demo-tooltip-mode'
              }
              aria-pressed={placement === value}
              onClick={() => setPlacement(value)}
            >
              {value}
            </button>
          ))}
        </fieldset>
      )}
      <div className="demo-tooltip-stage">
        <button
          type="button"
          className="demo-tooltip-trigger"
          ref={referenceRef}
          aria-describedby={open ? 'demo-tooltip-content' : undefined}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onClick={() => {
            if (mode === 'interactive') setClicked((value) => !value);
          }}
        >
          {mode === 'interactive' ? (
            <>
              <CircleHelp size={15} /> Click or hover for details
            </>
          ) : (
            'Hover or focus me'
          )}
        </button>
        <FloatingSurface
          open={open}
          referenceRef={referenceRef}
          placement={placement}
          modifiers={modifiers}
          className={
            mode === 'interactive'
              ? 'demo-tooltip-surface demo-tooltip-surface-rich'
              : 'demo-tooltip-surface'
          }
          role="tooltip"
          onEscape={dismiss}
        >
          {mode === 'interactive' ? (
            <span className="demo-tooltip-rich-content" id="demo-tooltip-content">
              <Sparkles size={16} />
              <span>
                <strong>Smart suggestions</strong>
                <small>Use shortcuts to finish common tasks faster.</small>
                <span className="demo-tooltip-shortcut">
                  <Keyboard size={11} /> Press <kbd>Ctrl</kbd>
                  <kbd>K</kbd> to search
                </span>
              </span>
              <Check size={14} />
            </span>
          ) : (
            <span id="demo-tooltip-content">{label}</span>
          )}
        </FloatingSurface>
      </div>
      <span className="demo-note">
        Popper.js keeps the tooltip visible near its trigger;{' '}
        {mode === 'interactive'
          ? 'click or hover to open, Escape closes it.'
          : 'try hovering or using Tab to focus.'}
      </span>
    </section>
  );
}
