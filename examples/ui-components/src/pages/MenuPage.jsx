import { useCallback, useRef, useState } from 'react';
import { Check, ChevronDown, Copy, Download, MoreHorizontal, Pencil, Settings, Share2, Trash2 } from 'lucide-react';
import { Menu, MenuItem } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('menu');

const DEMOS = {
  menu: {
    title: 'Context actions',
    caption: 'Open a compact action list anchored to its trigger and dismiss it with Escape or a click away.',
  },
  'menu-placements': {
    title: 'Placement options',
    caption: 'Position a menu around its trigger and let Popper keep it within the available viewport.',
  },
  'menu-selection': {
    title: 'Selectable options',
    caption: 'Choose a sort order from a keyboard-accessible menu and reflect the current selection.',
  },
};

const SORT_OPTIONS = ['Recently updated', 'Name A to Z', 'Created date'];
const PLACEMENTS = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];

function ContextMenuDemo() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const items = [
    { label: 'Edit project', Icon: Pencil },
    { label: 'Duplicate', Icon: Copy },
    { label: 'Share', Icon: Share2 },
    { label: 'Download', Icon: Download },
    { label: 'Settings', Icon: Settings },
    { label: 'Delete', Icon: Trash2, danger: true },
  ];
  const dismiss = useCallback(() => {
    setOpen(false);
    anchorRef.current?.focus();
  }, []);

  function select(item) {
    setOpen(false);
    setNotice(`${item} selected for Website refresh.`);
    anchorRef.current?.focus();
  }

  return (
    <div className="menu-demo">
      <div className="menu-preview-shell">
        <div className="menu-preview-card">
          <div className="menu-preview-icon"><Settings size={15} aria-hidden="true" /></div>
          <div className="menu-preview-copy"><strong>Website refresh</strong><span>Updated 12 minutes ago · 4 members</span></div>
          <button
            className="menu-trigger"
            type="button"
            ref={anchorRef}
            aria-label={open ? 'Close project actions' : 'Open project actions'}
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => { setNotice(''); setOpen((value) => !value); }}
          >
            <MoreHorizontal size={17} aria-hidden="true" />
          </button>
        </div>
        <div className="menu-preview-note">{notice || 'Open the project action menu.'}</div>
      </div>
      <span className="preview-note">{open ? 'Use ↑ ↓ to move, Home / End to jump, and Escape to close.' : 'Click away or press Escape to dismiss.'}</span>
      <Menu
        anchorEl={anchorRef.current}
        open={open}
        onClose={dismiss}
        placement="bottom-end"
        aria-label="Project actions"
      >
        {items.map(({ label, Icon, danger = false }) => (
          <MenuItem
            key={label}
            className={danger ? 'rgi-menu-item-danger' : undefined}
            onClick={() => select(label)}
          >
            <Icon size={14} aria-hidden="true" />
            <span>{label}</span>
            {danger && <span className="menu-item-hint">⌫</span>}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

function PlacementMenuDemo() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('bottom-start');
  const [notice, setNotice] = useState('');
  const dismiss = useCallback(() => {
    setOpen(false);
    anchorRef.current?.focus();
  }, []);

  function choosePlacement(value) {
    setPlacement(value);
    setNotice('');
    setOpen(true);
  }

  function select(item) {
    setNotice(`${item} selected.`);
    dismiss();
  }

  return (
    <div className="menu-demo">
      <div className="menu-placement-controls" role="group" aria-label="Menu placement">
        {PLACEMENTS.map((value) => (
          <button
            className={`menu-placement-option${value === placement ? ' menu-placement-option-active' : ''}`}
            key={value}
            type="button"
            aria-pressed={value === placement}
            onClick={() => choosePlacement(value)}
          >
            {value.replace('-', ' ')}
          </button>
        ))}
      </div>
      <div className="menu-placement-stage">
        <button
          className="rgi-button rgi-button-outlined"
          type="button"
          ref={anchorRef}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Anchor menu <ChevronDown size={13} aria-hidden="true" />
        </button>
        <span className="preview-note">{notice || `Placement: ${placement}`}</span>
      </div>
      <Menu
        anchorEl={anchorRef.current}
        open={open}
        onClose={dismiss}
        placement={placement}
        aria-label="Placement example menu"
      >
        {['Open', 'Rename', 'Archive'].map((label) => (
          <MenuItem key={label} onClick={() => select(label)}>
            <span>{label}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

function SelectionMenuDemo() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(SORT_OPTIONS[0]);
  const dismiss = useCallback(() => {
    setOpen(false);
    anchorRef.current?.focus();
  }, []);

  function select(item) {
    setSelected(item);
    setOpen(false);
    anchorRef.current?.focus();
  }

  return (
    <div className="menu-demo">
      <div className="menu-selection-card">
        <span className="menu-selection-icon"><Settings size={15} aria-hidden="true" /></span>
        <span className="menu-selection-copy"><strong>Project sorting</strong><small>Choose how projects are ordered in this view.</small></span>
        <button
          className="menu-sort-trigger"
          type="button"
          ref={anchorRef}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {selected} <ChevronDown size={13} aria-hidden="true" />
        </button>
      </div>
      <span className="preview-note" role="status">Current sort order: <strong>{selected}</strong></span>
      <Menu
        anchorEl={anchorRef.current}
        open={open}
        onClose={dismiss}
        placement="bottom-end"
        aria-label="Sort projects"
      >
        {SORT_OPTIONS.map((item) => (
          <MenuItem
            key={item}
            role="menuitemradio"
            aria-checked={selected === item}
            onClick={() => select(item)}
          >
            <span>{item}</span>
            {selected === item && <Check size={13} aria-hidden="true" />}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

function MenuDemoContent({ demoId }) {
  if (demoId === 'menu-placements') return <PlacementMenuDemo />;
  if (demoId === 'menu-selection') return <SelectionMenuDemo />;
  return <ContextMenuDemo />;
}

export default function MenuPage() {
  const styleSource = getStyleSource('menu');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <MenuDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
