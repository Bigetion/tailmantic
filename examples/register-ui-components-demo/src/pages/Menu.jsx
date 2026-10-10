import { Check, ChevronDown, Copy, Pencil, Settings, Share2, Trash2 } from 'lucide-react';
import { useCallback, useRef, useState } from 'react';
import UIMenu, { MenuItem } from '../components/Menu.jsx';

const PLACEMENTS = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];

export default function Menu() {
  const anchorRef = useRef(null);
  const [mode, setMode] = useState('actions');
  const [open, setOpen] = useState(false);
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
      <UIMenu
        open={open}
        anchorRef={anchorRef}
        placement={mode === 'placement' ? placement : 'bottom-end'}
        className="ui-menu-surface"
        onClose={dismiss}
      >
        {items.map(({ label, icon: Icon, danger }) => (
          <MenuItem key={label} danger={danger} onClick={() => select(label)}>
            {Icon && <Icon size={14} aria-hidden="true" />}
            <span>{label}</span>
            {selected === label && <Check size={14} aria-hidden="true" />}
          </MenuItem>
        ))}
      </UIMenu>
    </section>
  );
}
