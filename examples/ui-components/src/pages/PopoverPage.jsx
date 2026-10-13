import { Button, Popover } from '@tailmantic/ui-components';
import { ArrowUpRight, Check, ChevronDown, FolderKanban, Layers, X } from 'lucide-react';
import { useId, useRef, useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('popover');
const PLACEMENTS = ['top', 'right', 'bottom', 'left'];
const COLORS = [
  ['indigo', 'Indigo', '#8baeff'],
  ['teal', 'Teal', '#5bc7b0'],
  ['amber', 'Amber', '#e8b968'],
  ['rose', 'Rose', '#e992a8'],
];
const POPOVER_STYLES_NOTE =
  'Popover component and example styles are provided by @tailmantic/ui-components/popover/styles.';
const USAGE_CODE = `import { useState } from 'react';
import Popover from '@tailmantic/ui-components/popover';
import '@tailmantic/ui-components/popover/styles';

const [anchorEl, setAnchorEl] = useState(null);
const open = Boolean(anchorEl);

<button type="button" onClick={(event) => setAnchorEl(event.currentTarget)}>
  Open details
</button>
<Popover
  anchorEl={anchorEl}
  open={open}
  label="Project details"
  onClose={() => setAnchorEl(null)}
>
  Project content
</Popover>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/PopoverPage.jsx',
    'Dedicated project, placement, and interactive color examples using package Popover.',
  ],
  [
    'Component',
    'packages/ui-components/src/popover/Popover.jsx',
    'Anchored, portaled surface with click-away and Escape dismissal.',
  ],
  [
    'Styles',
    'packages/ui-components/src/popover/popover.styles.js',
    'Package-owned Popover surface and example styles.',
  ],
];

function PopoverExample({ mode }) {
  const anchorRef = useRef(null);
  const popoverId = useId();
  const headingId = useId();
  const isPlacement = mode === 'placement';
  const isInteractive = mode === 'interactive';
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('bottom');
  const [selectedColor, setSelectedColor] = useState('indigo');
  const [notice, setNotice] = useState('');

  function closePopover() {
    setOpen(false);
  }

  function togglePopover() {
    setNotice('');
    setOpen((current) => !current);
  }

  function selectColor(color) {
    setSelectedColor(color);
    setNotice(`${color.charAt(0).toUpperCase() + color.slice(1)} workspace color selected.`);
    closePopover();
  }

  const selectedColorValue = COLORS.find(([name]) => name === selectedColor)?.[2];

  return (
    <div className={`rgi-popover-example rgi-popover-example-${mode}`}>
      {isPlacement && (
        <div className="rgi-popover-example-placement-picker">
          <span>Placement</span>
          <div className="rgi-popover-example-placement-options">
            {PLACEMENTS.map((item) => (
              <button
                className={`rgi-popover-example-placement-option${placement === item ? ' is-active' : ''}`}
                key={item}
                type="button"
                aria-pressed={placement === item}
                onClick={() => {
                  setPlacement(item);
                  setOpen(true);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="rgi-popover-example-stage">
        <Button
          ref={anchorRef}
          className="rgi-popover-example-trigger"
          variant="outlined"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls={popoverId}
          onClick={togglePopover}
        >
          {isInteractive
            ? 'Choose workspace color'
            : isPlacement
              ? `${placement.charAt(0).toUpperCase()}${placement.slice(1)} placement`
              : 'View project details'}
          <ChevronDown size={16} aria-hidden="true" />
        </Button>
      </div>
      <Popover
        id={popoverId}
        anchorEl={anchorRef.current}
        open={open}
        placement={placement}
        className="rgi-popover-example-surface"
        labelledBy={headingId}
        onClose={closePopover}
      >
        {isInteractive ? (
          <div className="rgi-popover-example-content">
            <div className="rgi-popover-example-heading">
              <span className="rgi-popover-example-heading-icon">
                <Layers size={18} aria-hidden="true" />
              </span>
              <span className="rgi-popover-example-heading-copy">
                <strong id={headingId}>Workspace color</strong>
                <small>Choose an accent for this space.</small>
              </span>
              <button
                className="rgi-popover-example-close"
                type="button"
                aria-label="Close popover"
                onClick={closePopover}
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>
            <fieldset className="rgi-popover-example-color-list">
              <legend>Workspace colors</legend>
              {COLORS.map(([name, label, color]) => (
                <button
                  className="rgi-popover-example-color-option"
                  key={name}
                  type="button"
                  aria-pressed={selectedColor === name}
                  onClick={() => selectColor(name)}
                >
                  <i style={{ backgroundColor: color }} />
                  {label}
                  {selectedColor === name && <Check size={16} aria-hidden="true" />}
                </button>
              ))}
            </fieldset>
          </div>
        ) : isPlacement ? (
          <div className="rgi-popover-example-content">
            <div className="rgi-popover-example-heading">
              <span className="rgi-popover-example-heading-icon">
                <Layers size={18} aria-hidden="true" />
              </span>
              <span className="rgi-popover-example-heading-copy">
                <strong id={headingId}>
                  {placement.charAt(0).toUpperCase() + placement.slice(1)} placement
                </strong>
                <small>Anchored to the selected trigger.</small>
              </span>
              <button
                className="rgi-popover-example-close"
                type="button"
                aria-label="Close popover"
                onClick={closePopover}
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>
            <p className="rgi-popover-example-note">
              The surface flips automatically when space is limited.
            </p>
          </div>
        ) : (
          <div className="rgi-popover-example-content">
            <div className="rgi-popover-example-heading">
              <span className="rgi-popover-example-heading-icon">
                <FolderKanban size={18} aria-hidden="true" />
              </span>
              <span className="rgi-popover-example-heading-copy">
                <strong id={headingId}>Website refresh</strong>
                <small>Updated 12 minutes ago</small>
              </span>
              <button
                className="rgi-popover-example-close"
                type="button"
                aria-label="Close popover"
                onClick={closePopover}
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>
            <p className="rgi-popover-example-description">
              A shared project for the new customer workspace experience.
            </p>
            <div className="rgi-popover-example-project-meta">
              <span>
                <i /> In progress
              </span>
              <span>4 members</span>
            </div>
            <button
              className="rgi-popover-example-open-project"
              type="button"
              onClick={() => {
                setNotice('Website refresh project opened.');
                closePopover();
              }}
            >
              Open project <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        )}
      </Popover>
      <div className="rgi-popover-example-footer">
        <span className="rgi-popover-example-status" role="status">
          {notice ||
            (open
              ? 'Click outside or press Escape to dismiss.'
              : `Selected color: ${selectedColor}.`)}
        </span>
        {isInteractive && (
          <span className="rgi-popover-example-color-preview">
            <i style={{ backgroundColor: selectedColorValue }} />
            {selectedColor}
          </span>
        )}
      </div>
    </div>
  );
}

export default function PopoverPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Anchor a Popover to a trigger to show focused contextual content without leaving the current page."
      usageDescription="Popover uses Popper for placement, renders in a portal, and supports click-away and Escape dismissal."
    >
      <div className="component-showcase component-showcase-popover">
        <DemoPanel
          title="Project details"
          caption="Show a focused summary and action next to the control that opened it."
          code={POPOVER_STYLES_NOTE}
        >
          <PopoverExample mode="project" />
        </DemoPanel>
        <DemoPanel
          title="Placement controls"
          caption="Preview the four primary placements and see the surface stay anchored to its trigger."
          code={POPOVER_STYLES_NOTE}
        >
          <PopoverExample mode="placement" />
        </DemoPanel>
        <DemoPanel
          title="Interactive options"
          caption="Let users change a workspace accent and immediately see the selected value."
          code={POPOVER_STYLES_NOTE}
        >
          <PopoverExample mode="interactive" />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
