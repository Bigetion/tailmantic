import { Menu, MenuItem } from '@tailmantic/ui-components';
import {
  Check,
  ChevronDown,
  Copy,
  Download,
  MoreHorizontal,
  Pencil,
  Settings,
  Share2,
  Trash2,
} from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('menu');
const PLACEMENTS = ['bottom-start', 'bottom-end', 'top-start', 'top-end'];
const SORT_OPTIONS = ['Recently updated', 'Name A to Z', 'Created date'];
const MENU_STYLES_NOTE =
  'Menu and MenuItem component and example styles are provided by @tailmantic/ui-components/menu/styles.';
const USAGE_CODE = `import { useState } from 'react';
import { Menu, MenuItem } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/menu/styles';

const [open, setOpen] = useState(false);
const [anchorEl, setAnchorEl] = useState(null);

<button ref={setAnchorEl} onClick={() => setOpen(true)}>Actions</button>
<Menu
  open={open}
  anchorEl={anchorEl}
  placement="bottom-start"
  onClose={() => setOpen(false)}
>
  <MenuItem onClick={() => setOpen(false)}>Edit</MenuItem>
</Menu>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/MenuPage.jsx',
    'Dedicated context action, placement, and selectable menu examples.',
  ],
  [
    'Components',
    'packages/ui-components/src/menu/',
    'Anchored Menu and MenuItem with keyboard navigation and dismissal support.',
  ],
  [
    'Styles',
    'packages/ui-components/src/menu/menu.styles.js',
    'Package-owned menu surface, item states, and example layout styles.',
  ],
];

const CONTEXT_ACTIONS = [
  { label: 'Edit project', Icon: Pencil },
  { label: 'Duplicate', Icon: Copy },
  { label: 'Share', Icon: Share2 },
  { label: 'Download', Icon: Download },
  { label: 'Settings', Icon: Settings },
  { label: 'Delete', Icon: Trash2, danger: true },
];
const PLACEMENT_ACTIONS = [{ label: 'Open' }, { label: 'Rename' }, { label: 'Archive' }];

function ContextMenuExample() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const dismiss = useCallback(() => setOpen(false), []);
  const dismissAndRestoreFocus = useCallback(() => {
    setOpen(false);
    anchorRef.current?.focus();
  }, []);

  return (
    <div className={open ? 'tm-menu-example tm-menu-example-context-open' : 'tm-menu-example'}>
      <div className="tm-menu-example-card">
        <span className="tm-menu-example-icon">
          <Settings size={18} aria-hidden="true" />
        </span>
        <span className="tm-menu-example-copy">
          <strong>Website refresh</strong>
          <span>Updated 12 minutes ago · 4 members</span>
        </span>
        <button
          className="tm-menu-example-trigger"
          type="button"
          ref={anchorRef}
          aria-label={open ? 'Close project actions' : 'Open project actions'}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => {
            setNotice('');
            setOpen((value) => !value);
          }}
        >
          <MoreHorizontal size={19} aria-hidden="true" />
        </button>
      </div>
      <div className="tm-menu-example-note" role="status">
        {notice || 'Open the project action menu.'}
      </div>
      <span className="tm-menu-example-footer">
        {open
          ? 'Use arrow keys to navigate; press Escape to close.'
          : 'Click away or press Escape to dismiss.'}
      </span>
      <Menu
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-end"
        aria-label="Project actions"
        className="tm-menu-example-menu"
        onClose={dismissAndRestoreFocus}
      >
        {CONTEXT_ACTIONS.map(({ label, Icon, danger }) => (
          <MenuItem
            key={label}
            className={danger ? 'tm-menu-item-danger' : undefined}
            onClick={() => {
              setNotice(`${label} selected for Website refresh.`);
              dismiss();
              anchorRef.current?.focus();
            }}
          >
            <Icon size={16} aria-hidden="true" />
            <span>{label}</span>
          </MenuItem>
        ))}
        <MenuItem disabled>
          <Download size={16} aria-hidden="true" />
          <span>Unavailable action</span>
        </MenuItem>
      </Menu>
    </div>
  );
}

function PlacementMenuExample() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('bottom-start');
  const [actualPlacement, setActualPlacement] = useState('');
  const [notice, setNotice] = useState('');
  const dismissAndRestoreFocus = useCallback(() => {
    setOpen(false);
    anchorRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const updatePlacement = () => {
      const actual = document
        .querySelector('.tm-menu-positioner')
        ?.getAttribute('data-popper-placement');
      if (actual) setActualPlacement(actual);
    };
    const observer = new MutationObserver(updatePlacement);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-popper-placement'],
      subtree: true,
    });
    updatePlacement();
    return () => observer.disconnect();
  }, [open]);

  return (
    <div className="tm-menu-example">
      <fieldset className="tm-menu-example-controls">
        <legend className="sr-only">Menu placement</legend>
        {PLACEMENTS.map((value) => (
          <button
            className={[
              'tm-menu-example-placement-option',
              value === placement && 'tm-menu-example-placement-option-active',
            ]
              .filter(Boolean)
              .join(' ')}
            key={value}
            type="button"
            aria-pressed={value === placement}
            onClick={() => {
              setPlacement(value);
              setActualPlacement('');
              setNotice('');
              setOpen(true);
            }}
          >
            {value.replace('-', ' ')}
          </button>
        ))}
      </fieldset>
      <div className="tm-menu-example-stage">
        <button
          className="tm-menu-example-sort-trigger"
          type="button"
          ref={anchorRef}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          Anchor menu <ChevronDown size={15} aria-hidden="true" />
        </button>
        <span className="tm-menu-example-status" role="status">
          {notice ||
            (actualPlacement
              ? `Actual placement: ${actualPlacement}`
              : 'Choose a placement to preview.')}
        </span>
      </div>
      <Menu
        open={open}
        anchorEl={anchorRef.current}
        placement={placement}
        aria-label="Placement example menu"
        className="tm-menu-example-menu"
        onClose={dismissAndRestoreFocus}
      >
        {PLACEMENT_ACTIONS.map(({ label }) => (
          <MenuItem
            key={label}
            onClick={() => {
              setNotice(`${label} selected.`);
              setOpen(false);
              anchorRef.current?.focus();
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

function SelectionMenuExample() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(SORT_OPTIONS[0]);
  const dismissAndRestoreFocus = useCallback(() => {
    setOpen(false);
    anchorRef.current?.focus();
  }, []);

  return (
    <div className="tm-menu-example">
      <div className="tm-menu-example-selection-card">
        <span className="tm-menu-example-icon">
          <Settings size={18} aria-hidden="true" />
        </span>
        <span className="tm-menu-example-selection-copy">
          <strong>Project sorting</strong>
          <small>Choose how projects are ordered in this view.</small>
        </span>
        <button
          className="tm-menu-example-sort-trigger"
          type="button"
          ref={anchorRef}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {selected} <ChevronDown size={15} aria-hidden="true" />
        </button>
      </div>
      <span className="tm-menu-example-status" role="status" aria-live="polite">
        Current sort order: <strong>{selected}</strong>
      </span>
      <Menu
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-end"
        aria-label="Sort projects"
        className="tm-menu-example-menu"
        onClose={dismissAndRestoreFocus}
      >
        {SORT_OPTIONS.map((item) => (
          <MenuItem
            key={item}
            role="menuitemradio"
            aria-checked={selected === item}
            onClick={() => {
              setSelected(item);
              setOpen(false);
              anchorRef.current?.focus();
            }}
          >
            <span>{item}</span>
            {selected === item && <Check size={16} aria-hidden="true" />}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default function MenuPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Anchor a Menu to its trigger and let MenuItem handle keyboard focus, disabled states, and selection."
      usageDescription="Menu supports Popper placement, click-away and Escape dismissal, arrow/Home/End navigation, disabled items, and menuitemradio selection semantics."
    >
      <div className="component-showcase component-showcase-menu">
        <DemoPanel
          title="Context actions"
          caption="Open a compact action list anchored to its trigger and dismiss it with Escape or a click away."
          code={MENU_STYLES_NOTE}
        >
          <ContextMenuExample />
        </DemoPanel>
        <DemoPanel
          title="Placement options"
          caption="Position a menu around its trigger and let Popper keep it within the available viewport."
          code={MENU_STYLES_NOTE}
        >
          <PlacementMenuExample />
        </DemoPanel>
        <DemoPanel
          title="Selectable options"
          caption="Choose a sort order from a keyboard-accessible menu and reflect the current selection."
          code={MENU_STYLES_NOTE}
        >
          <SelectionMenuExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
