import { ButtonGroup } from '@tailmantic/ui-components';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ChevronDown,
  Code2,
  Eye,
  History,
  Save,
} from 'lucide-react';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { useClickAway } from '../components/Popper.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('button-group');
const VIEWS = [
  { label: 'Preview', Icon: Eye },
  { label: 'Source', Icon: Code2 },
  { label: 'History', Icon: History },
];
const ALIGNMENTS = [
  { label: 'Align left', Icon: AlignLeft },
  { label: 'Align center', Icon: AlignCenter },
  { label: 'Align right', Icon: AlignRight },
];
const USAGE_CODE = `import { Button, ButtonGroup } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/button/styles';
import '@tailmantic/ui-components/button-group/styles';

<ButtonGroup aria-label="Editor view">
  <Button variant="text" aria-pressed={view === 'Preview'}>
    Preview
  </Button>
  <Button variant="text" aria-pressed={view === 'Source'}>
    Source
  </Button>
</ButtonGroup>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/ButtonGroupPage.jsx',
    'Self-contained page with interactive ButtonGroup examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/button-group/ButtonGroup.jsx',
    'Reusable semantic group wrapper with horizontal and vertical orientations.',
  ],
  [
    'Styles',
    'packages/ui-components/src/button-group/button-group.styles.js',
    'Tailmantic styles bundled with the ButtonGroup package.',
  ],
];

function SegmentedChoices() {
  const [view, setView] = useState('Preview');

  return (
    <div className="button-group-demo">
      <ButtonGroup className="button-group" aria-label="Editor view">
        {VIEWS.map(({ label, Icon }) => (
          <button
            className={`button-group-button${view === label ? ' button-group-selected' : ''}`}
            key={label}
            type="button"
            aria-pressed={view === label}
            onClick={() => setView(label)}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </ButtonGroup>
      <span className="button-group-status" role="status">
        {view} view selected
      </span>
    </div>
  );
}

function VerticalControls() {
  const [alignment, setAlignment] = useState('Align left');

  return (
    <div className="button-group-demo">
      <ButtonGroup
        className="button-group button-group-vertical"
        orientation="vertical"
        aria-label="Text alignment"
      >
        {ALIGNMENTS.map(({ label, Icon }) => (
          <button
            className={`button-group-button${alignment === label ? ' button-group-selected' : ''}`}
            key={label}
            type="button"
            aria-label={label}
            aria-pressed={alignment === label}
            onClick={() => setAlignment(label)}
          >
            <Icon size={15} />
          </button>
        ))}
      </ButtonGroup>
      <span className="button-group-status" role="status">
        {alignment} selected
      </span>
    </div>
  );
}

function SplitAction() {
  const menuId = useId();
  const groupRef = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const dismiss = useCallback(() => setExpanded(false), []);

  useClickAway(expanded, groupRef, menuRef, dismiss);

  useEffect(() => {
    if (!expanded) return undefined;
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        dismiss();
        toggleRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [dismiss, expanded]);

  return (
    <div className="button-group-demo">
      <ButtonGroup
        className="button-group button-group-split"
        aria-label="Save actions"
        ref={groupRef}
      >
        <button
          className="button-group-button button-group-primary"
          type="button"
          onClick={() => {
            setExpanded(false);
            setAnnouncement('Draft saved.');
          }}
        >
          <Save size={14} />
          Save draft
        </button>
        <button
          className="button-group-button button-group-split-toggle"
          type="button"
          aria-label="More save options"
          aria-expanded={expanded}
          aria-controls={menuId}
          ref={toggleRef}
          onClick={() => setExpanded((current) => !current)}
        >
          <ChevronDown size={14} />
        </button>
        {expanded && (
          <fieldset
            className="button-group-menu"
            id={menuId}
            ref={menuRef}
            aria-label="More save options"
          >
            <legend className="button-group-menu-legend">More save options</legend>
            {['Publish now', 'Schedule publish'].map((action) => (
              <button
                className="button-group-menu-item"
                key={action}
                type="button"
                onClick={() => {
                  setAnnouncement(`${action} selected.`);
                  setExpanded(false);
                }}
              >
                {action}
              </button>
            ))}
          </fieldset>
        )}
      </ButtonGroup>
      <span className="button-group-status" role="status" aria-live="polite">
        {announcement || 'Save now or choose another publishing action.'}
      </span>
    </div>
  );
}

export default function ButtonGroupPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Use ButtonGroup to semantically group related Button controls, with both component styles imported."
      usageDescription="ButtonGroup provides the accessible group wrapper and orientation; compose its children to match your interaction."
    >
      <div className="component-showcase component-showcase-button-group">
        <DemoPanel
          title="Segmented choices"
          caption="Keep a small set of mutually exclusive views in one compact control."
          code={getExampleCode(component.slug, 'Segmented choices')}
        >
          <SegmentedChoices />
        </DemoPanel>
        <DemoPanel
          title="Vertical controls"
          caption="Change orientation while keeping related actions visually connected."
          code={getExampleCode(component.slug, 'Vertical controls')}
        >
          <VerticalControls />
        </DemoPanel>
        <DemoPanel
          title="Split action"
          caption="Pair a primary action with clearly discoverable alternatives."
          code={getExampleCode(component.slug, 'Split action')}
        >
          <SplitAction />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
