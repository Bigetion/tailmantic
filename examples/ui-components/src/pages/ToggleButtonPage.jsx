import { ButtonGroup, ToggleButton } from '@tailmantic/ui-components';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Grid2X2,
  List,
  Map as MapIcon,
} from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('toggle-button');
const VIEWS = [
  { id: 'list', label: 'List', Icon: List },
  { id: 'grid', label: 'Grid', Icon: Grid2X2 },
];
const ALIGNMENTS = [
  { id: 'left', label: 'Align left', Icon: AlignLeft },
  { id: 'center', label: 'Align center', Icon: AlignCenter },
  { id: 'right', label: 'Align right', Icon: AlignRight },
];
const USAGE_CODE = `import { ButtonGroup, ToggleButton } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/button-group/styles';
import '@tailmantic/ui-components/toggle-button/styles';

<ButtonGroup className="tm-toggle-button-group" aria-label="Choose a view">
  {['list', 'grid'].map((option) => (
    <ToggleButton
      className="tm-toggle-button-group-button"
      key={option}
      selected={view === option}
      onClick={() => setView(option)}
    >
      {option}
    </ToggleButton>
  ))}
</ButtonGroup>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/ToggleButtonPage.jsx',
    'Dedicated page with exclusive, clearable, and compact ToggleButton examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/toggle-button/ToggleButton.jsx',
    'Accessible controlled toggle button with selected and size props.',
  ],
  [
    'Styles',
    'packages/ui-components/src/toggle-button/toggle-button.styles.js',
    'Standalone and segmented ToggleButton styles provided by the package.',
  ],
];

function ToggleButtonChoices({ label, options, value, onChange, iconOnly = false }) {
  return (
    <ButtonGroup className="tm-toggle-button-group" aria-label={label}>
      {options.map(({ id, label: optionLabel, Icon }) => (
        <ToggleButton
          className={`tm-toggle-button-group-button${iconOnly ? ' tm-toggle-button-group-icon' : ''}`}
          key={id}
          aria-label={iconOnly ? optionLabel : undefined}
          selected={value === id}
          onClick={() => onChange(id)}
        >
          <Icon size={iconOnly ? 16 : 14} aria-hidden="true" />
          {!iconOnly && <span>{optionLabel}</span>}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

function ViewSelection() {
  const [view, setView] = useState('list');

  return (
    <div className="preview-stack">
      <ToggleButtonChoices
        label="Choose a view"
        options={VIEWS}
        value={view}
        onChange={setView}
      />
      <span className="preview-note" role="status" aria-live="polite">
        {view === 'list' ? 'List' : 'Grid'} view selected.
      </span>
    </div>
  );
}

function ClearableAlignment() {
  const [alignment, setAlignment] = useState(null);

  return (
    <div className="preview-stack">
      <ButtonGroup className="tm-toggle-button-group" aria-label="Text alignment">
        {ALIGNMENTS.map(({ id, label, Icon }) => (
          <ToggleButton
            className="tm-toggle-button-group-button"
            key={id}
            aria-label={label}
            selected={alignment === id}
            onClick={() => setAlignment((current) => (current === id ? null : id))}
          >
            <Icon size={15} aria-hidden="true" />
          </ToggleButton>
        ))}
      </ButtonGroup>
      <span className="preview-note" role="status" aria-live="polite">
        {alignment
          ? `${alignment.charAt(0).toUpperCase() + alignment.slice(1)} alignment selected.`
          : 'No alignment selected. Select the active option again to clear it.'}
      </span>
    </div>
  );
}

function CompactIconControls() {
  const [view, setView] = useState('map');
  const options = [
    { id: 'map', label: 'Map', Icon: MapIcon },
    { id: 'grid', label: 'Grid', Icon: Grid2X2 },
  ];

  return (
    <div className="preview-stack">
      <span className="preview-note">Compact icon-only controls</span>
      <ToggleButtonChoices
        label="Map display"
        options={options}
        value={view}
        onChange={setView}
        iconOnly
      />
      <span className="preview-note" role="status" aria-live="polite">
        {view === 'map' ? 'Map view selected.' : 'Grid view selected.'}
      </span>
    </div>
  );
}

export default function ToggleButtonPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Control each ToggleButton with selected state, and group related controls with ButtonGroup."
      usageDescription="ToggleButton exposes its pressed state accessibly; package styles also support compact segmented groups and icon-only controls."
    >
      <div className="component-showcase component-showcase-toggle-button">
        <DemoPanel
          title="View selection"
          caption="Switch between related content views with an exclusive pressed state."
          code={getExampleCode(component.slug, 'View selection')}
        >
          <ViewSelection />
        </DemoPanel>
        <DemoPanel
          title="Clearable selection"
          caption="Allow an active toggle to be pressed again to clear the selection."
          code={getExampleCode(component.slug, 'Clearable selection')}
        >
          <ClearableAlignment />
        </DemoPanel>
        <DemoPanel
          title="Compact icon controls"
          caption="Use concise icon-only toggles with accessible labels when space is limited."
          code={getExampleCode(component.slug, 'Compact icon controls')}
        >
          <CompactIconControls />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
