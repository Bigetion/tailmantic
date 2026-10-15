import { Tooltip } from '@tailmantic/ui-components';
import { Check, CircleHelp, Keyboard, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cx } from 'tailmantic';
import '@tailmantic/ui-components/tooltip/styles';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('tooltip');
const PLACEMENTS = ['top', 'right', 'bottom', 'left'];
const TOOLTIP_STYLES_NOTE =
  'Tooltip and its example layout styles are provided by @tailmantic/ui-components/tooltip/styles.';
const USAGE_CODE = `import Tooltip from '@tailmantic/ui-components/tooltip';
import '@tailmantic/ui-components/tooltip/styles';

<Tooltip content="Helpful information" placement="top">
  <button type="button">Hover or focus me</button>
</Tooltip>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/TooltipPage.jsx',
    'Dedicated examples for accessible help, placement, and rich tooltip content.',
  ],
  [
    'Component',
    'packages/ui-components/src/tooltip/Tooltip.jsx',
    'Accessible tooltip wrapper with hover/focus behavior and four placement options.',
  ],
  [
    'Styles',
    'packages/ui-components/src/tooltip/tooltip.styles.js',
    'Package-owned tooltip variants and example layout styles.',
  ],
];

function BasicTooltip() {
  return (
    <div className="tm-tooltip-example">
      <Tooltip
        className="tm-tooltip-example-root"
        content="Helpful information appears on hover or focus."
        placement="top"
      >
        <button className="tm-tooltip-example-trigger" type="button">
          Hover or focus me
        </button>
      </Tooltip>
      <span className="preview-note">Try hovering or focusing the button with Tab.</span>
    </div>
  );
}

function PlacementTooltips() {
  const [placement, setPlacement] = useState('top');

  return (
    <div className="tm-tooltip-example tm-tooltip-example-placement">
      <div className="tm-tooltip-example-placement-picker" role="group" aria-label="Tooltip placement">
        {PLACEMENTS.map((item) => (
          <button
            className={cx(
              'tm-tooltip-example-placement-button',
              placement === item && 'tm-tooltip-example-placement-active',
            )}
            key={item}
            type="button"
            aria-pressed={placement === item}
            onClick={() => setPlacement(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <Tooltip
        className="tm-tooltip-example-root"
        content={`Tooltip positioned ${placement}`}
        placement={placement}
      >
        <button className="tm-tooltip-example-trigger" type="button">Hover to preview</button>
      </Tooltip>
      <span className="preview-note" role="status" aria-live="polite">
        Current placement: {placement}
      </span>
    </div>
  );
}

function RichTooltip() {
  const [open, setOpen] = useState(undefined);
  const toggleOpen = () => setOpen((current) => current !== true);
  const dismissOnEscape = (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };
  const reopenOnInteraction = () => {
    setOpen((current) => (current === false ? undefined : current));
  };

  return (
    <div className="tm-tooltip-example">
      <Tooltip
        className="tm-tooltip-example-root tm-tooltip-example-root-rich"
        content={(
          <span className="tm-tooltip-example-rich-content">
            <span className="tm-tooltip-example-rich-icon"><Sparkles size={15} aria-hidden="true" /></span>
            <span className="tm-tooltip-example-rich-copy">
              <strong>Smart suggestions</strong>
              <small>Use shortcuts to finish common tasks faster.</small>
              <span className="tm-tooltip-example-shortcut">
                <Keyboard size={11} aria-hidden="true" /> Press <kbd>⌘</kbd><kbd>K</kbd> to search
              </span>
            </span>
            <Check className="tm-tooltip-example-rich-check" size={14} aria-hidden="true" />
          </span>
        )}
        open={open}
        placement="top"
        onFocus={reopenOnInteraction}
        onMouseEnter={reopenOnInteraction}
        onKeyDown={dismissOnEscape}
      >
        <button className="tm-tooltip-example-trigger tm-tooltip-example-trigger-rich" type="button" onClick={toggleOpen}>
          <CircleHelp size={15} aria-hidden="true" /> Click or hover for details
        </button>
      </Tooltip>
      <span className="preview-note">Opens on hover or focus; click to toggle and press Escape to dismiss.</span>
    </div>
  );
}

export default function TooltipPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Wrap a trigger with Tooltip and provide its content and placement."
      usageDescription="The package Tooltip connects the trigger and tooltip with accessible descriptions and reveals the content on hover or keyboard focus."
    >
      <div className="component-showcase component-showcase-tooltip">
        <DemoPanel
          title="Accessible helper"
          caption="Reveal concise supporting information on hover or keyboard focus."
          code={TOOLTIP_STYLES_NOTE}
        >
          <BasicTooltip />
        </DemoPanel>
        <DemoPanel
          title="Placement controls"
          caption="Preview top, right, bottom, and left placements using the package Tooltip."
          code={TOOLTIP_STYLES_NOTE}
        >
          <PlacementTooltips />
        </DemoPanel>
        <DemoPanel
          title="Contextual tooltip"
          caption="Add richer guidance with keyboard and click interactions."
          code={TOOLTIP_STYLES_NOTE}
          className="demo-card-overflow-visible"
        >
          <RichTooltip />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
