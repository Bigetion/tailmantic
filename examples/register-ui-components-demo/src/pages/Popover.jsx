import { Check, FolderKanban, Layers, X } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import FloatingSurface, { useClickAway } from '../components/FloatingSurface.jsx';

const COLORS = [
  ['indigo', 'Indigo', '#8baeff'],
  ['teal', 'Teal', '#5bc7b0'],
  ['amber', 'Amber', '#e8b968'],
  ['rose', 'Rose', '#e992a8'],
];
const PLACEMENTS = ['top', 'right', 'bottom', 'left'];

export default function Popover() {
  const referenceRef = useRef(null);
  const floatingRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('bottom');
  const [mode, setMode] = useState('project');
  const [selectedColor, setSelectedColor] = useState('indigo');
  const [notice, setNotice] = useState('');
  const dismiss = useCallback(() => setOpen(false), []);
  useClickAway(open, referenceRef, floatingRef, dismiss);

  function selectColor(color) {
    setSelectedColor(color);
    setNotice(`${color[0].toUpperCase()}${color.slice(1)} workspace color selected.`);
    dismiss();
  }

  return (
    <section className="demo-section">
      <span className="demo-section-title">
        Anchored content, placements, and interactive actions
      </span>
      <fieldset className="demo-popover-controls">
        <legend className="sr-only">Popover demonstration mode</legend>
        {[
          ['project', 'Project details'],
          ['placement', 'Placement'],
          ['interactive', 'Choose color'],
        ].map(([value, label]) => (
          <button
            className={
              mode === value ? 'demo-popover-mode demo-popover-mode-active' : 'demo-popover-mode'
            }
            key={value}
            type="button"
            aria-pressed={mode === value}
            onClick={() => {
              setMode(value);
              setNotice('');
              if (value === 'placement') setOpen(true);
            }}
          >
            {label}
          </button>
        ))}
      </fieldset>
      {mode === 'placement' && (
        <fieldset className="demo-popover-controls">
          <legend className="sr-only">Popover placement</legend>
          {PLACEMENTS.map((value) => (
            <button
              className={
                placement === value
                  ? 'demo-popover-placement demo-popover-placement-active'
                  : 'demo-popover-placement'
              }
              key={value}
              type="button"
              aria-pressed={placement === value}
              onClick={() => {
                setPlacement(value);
                setOpen(true);
              }}
            >
              {value}
            </button>
          ))}
        </fieldset>
      )}
      <div className="demo-popover-anchor-wrap">
        <button
          type="button"
          className="demo-popover-trigger"
          ref={referenceRef}
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => {
            setNotice('');
            setOpen((value) => !value);
          }}
        >
          {mode === 'interactive'
            ? 'Choose workspace color'
            : mode === 'placement'
              ? `${placement} placement preview`
              : 'View project details'}
        </button>
      </div>
      <FloatingSurface
        open={open}
        referenceRef={referenceRef}
        floatingRef={floatingRef}
        placement={placement}
        className="demo-popover-surface"
        role="dialog"
        onEscape={dismiss}
      >
        <header className="demo-popover-heading">
          {mode === 'interactive' ? <Layers size={16} /> : <FolderKanban size={16} />}
          <span>
            <strong>
              {mode === 'interactive'
                ? 'Workspace color'
                : mode === 'placement'
                  ? `${placement} placement`
                  : 'Website refresh'}
            </strong>
            <small>
              {mode === 'interactive'
                ? 'Choose an accent for this space.'
                : mode === 'placement'
                  ? 'Positioned with Popper.js.'
                  : 'Updated 12 minutes ago'}
            </small>
          </span>
          <button type="button" aria-label="Close popover" onClick={dismiss}>
            <X size={14} />
          </button>
        </header>
        {mode === 'interactive' ? (
          <div className="demo-popover-colors">
            {COLORS.map(([name, label, color]) => (
              <button
                type="button"
                key={name}
                aria-pressed={selectedColor === name}
                onClick={() => selectColor(name)}
              >
                <span style={{ backgroundColor: color }} /> {label}
                {selectedColor === name && <Check size={14} />}
              </button>
            ))}
          </div>
        ) : (
          <>
            <p className="demo-popover-description">
              {mode === 'placement'
                ? 'Popper.js flips the surface when viewport space is limited.'
                : 'A shared project for the new customer workspace experience.'}
            </p>
            {mode === 'project' && (
              <span className="demo-popover-status">In progress · 4 members</span>
            )}
          </>
        )}
      </FloatingSurface>
      <span className="demo-note" role="status" aria-live="polite">
        {notice ||
          (open
            ? 'Click outside or press Escape to dismiss.'
            : `Selected color: ${selectedColor}.`)}
      </span>
    </section>
  );
}
