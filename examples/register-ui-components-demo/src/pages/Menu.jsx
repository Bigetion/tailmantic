import { Check, ChevronDown, Copy, Pencil, Settings, Share2, Trash2 } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import FloatingSurface, { useClickAway } from '../components/FloatingSurface.jsx';

const PLACEMENTS = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];

export default function Menu() {
  const anchorRef = useRef(null);
  const floatingRef = useRef(null);
  const itemRefs = useRef([]);
  const [mode, setMode] = useState('actions');
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [placement, setPlacement] = useState('bottom-end');
  const [selected, setSelected] = useState('');
  const actions = [
    { label: 'Edit project', icon: Pencil },
    { label: 'Duplicate', icon: Copy },
    { label: 'Share', icon: Share2 },
    { label: 'Settings', icon: Settings },
    { label: 'Delete', icon: Trash2, danger: true },
  ];
  const items =
    mode === 'selection'
      ? ['Recently updated', 'Name A to Z', 'Created date'].map((label) => ({ label }))
      : actions;
  const dismiss = useCallback(() => setOpen(false), []);
  useClickAway(open, anchorRef, floatingRef, dismiss);

  useEffect(() => {
    if (!open) return undefined;
    const current = Math.min(focusedIndex, items.length - 1);
    itemRefs.current[current]?.focus();
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismiss();
        anchorRef.current?.focus();
      } else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
        event.preventDefault();
        const active = itemRefs.current.indexOf(document.activeElement);
        const next =
          event.key === 'Home'
            ? 0
            : event.key === 'End'
              ? items.length - 1
              : (active + (event.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length;
        setFocusedIndex(next);
        itemRefs.current[next]?.focus();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dismiss, focusedIndex, items.length, open]);

  function select(label) {
    setSelected(label);
    dismiss();
    anchorRef.current?.focus();
  }

  return (
    <section className="demo-section">
      <span className="demo-section-title">Action, selection, and placement menus</span>
      <fieldset className="demo-menu-modes">
        <legend className="sr-only">Menu example</legend>
        {[
          ['actions', 'Project actions'],
          ['selection', 'Sort options'],
          ['placement', 'Placements'],
        ].map(([value, label]) => (
          <button
            type="button"
            className={mode === value ? 'demo-menu-mode demo-menu-mode-active' : 'demo-menu-mode'}
            key={value}
            aria-pressed={mode === value}
            onClick={() => {
              setMode(value);
              setOpen(value === 'placement');
              setFocusedIndex(0);
            }}
          >
            {label}
          </button>
        ))}
      </fieldset>
      {mode === 'placement' && (
        <fieldset className="demo-menu-modes">
          <legend className="sr-only">Menu placement</legend>
          {PLACEMENTS.map((value) => (
            <button
              type="button"
              className={
                placement === value ? 'demo-menu-mode demo-menu-mode-active' : 'demo-menu-mode'
              }
              key={value}
              aria-pressed={placement === value}
              onClick={() => {
                setPlacement(value);
                setOpen(true);
              }}
            >
              {value.replace('-', ' ')}
            </button>
          ))}
        </fieldset>
      )}
      <div className="demo-menu-stage">
        <div className="demo-menu-project">
          <div>
            <strong>Website refresh</strong>
            <span>Updated 12 minutes ago · 4 members</span>
          </div>
          <button
            type="button"
            className="demo-menu-trigger"
            ref={anchorRef}
            aria-label={open ? 'Close project menu' : 'Open project menu'}
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <ChevronDown size={16} />
          </button>
        </div>
        <span className="demo-note" role="status">
          {selected
            ? `${selected} selected.`
            : open
              ? 'Use arrow keys to navigate; Escape closes and restores focus.'
              : 'Open the menu to choose an action.'}
        </span>
      </div>
      <FloatingSurface
        open={open}
        referenceRef={anchorRef}
        floatingRef={floatingRef}
        placement={mode === 'placement' ? placement : 'bottom-end'}
        className="demo-menu-surface"
        role="menu"
      >
        {items.map(({ label, icon: Icon, danger }, index) => (
          <button
            type="button"
            role="menuitem"
            tabIndex={focusedIndex === index ? 0 : -1}
            className={danger ? 'demo-menu-item demo-menu-item-danger' : 'demo-menu-item'}
            key={label}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            onFocus={() => setFocusedIndex(index)}
            onClick={() => select(label)}
          >
            {Icon && <Icon size={14} />}
            <span>{label}</span>
            {selected === label && <Check size={14} />}
          </button>
        ))}
      </FloatingSurface>
    </section>
  );
}
