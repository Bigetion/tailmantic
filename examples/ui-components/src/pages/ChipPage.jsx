import { useState } from 'react';
import { Check, Clock3, Code2, X } from 'lucide-react';
import { Chip, Button } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('chip');

const DEMOS = {
  chip: {
    title: 'Chip variants',
    caption: 'Use compact labels with leading icons to communicate status and context.',
  },
  'chip-colors': {
    title: 'Selectable filters',
    caption: 'Toggle related filter chips on and off while keeping selection accessible.',
  },
  'chip-deletable': {
    title: 'Removable tags',
    caption: 'Let users remove individual chips and restore the original set.',
  },
};

function ChipVariants() {
  return (
    <div className="preview-stack">
      <div className="chip-examples" role="group" aria-label="Chip variants">
        <Chip variant="outlined">Outlined</Chip>
        <Chip>Filled</Chip>
        <Chip color="primary" icon={Code2}>React</Chip>
        <Chip color="success" icon={Check}>Build passed</Chip>
        <Chip color="warning" icon={Clock3}>In review</Chip>
        <Chip size="small">Compact</Chip>
      </div>
      <span className="preview-note">Use a leading icon and color to add context without increasing visual weight.</span>
    </div>
  );
}

function ChipColors() {
  const [selected, setSelected] = useState(['Design']);
  const filters = ['Design', 'Engineering', 'Product', 'Research'];

  const toggle = (filter) => {
    setSelected((current) => (
      current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter]
    ));
  };

  return (
    <div className="preview-stack">
      <div className="chip-examples" role="group" aria-label="Filter by team">
        {filters.map((filter) => (
          <Chip key={filter} color="primary" selected={selected.includes(filter)} onClick={() => toggle(filter)}>
            {filter}
          </Chip>
        ))}
      </div>
      <span className="preview-note" role="status" aria-live="polite">
        Selected: {selected.length ? selected.join(', ') : 'none'}
      </span>
    </div>
  );
}

function ChipDeletable() {
  const [tags, setTags] = useState(['Design system', 'React', 'Accessibility']);

  return (
    <div className="preview-stack">
      <div className="chip-examples" role="group" aria-label="Removable tags">
        {tags.map((tag) => (
          <Chip key={tag} variant="outlined" deleteIcon={<X size={13} aria-hidden="true" />} onDelete={() => setTags((current) => current.filter((item) => item !== tag))}>
            {tag}
          </Chip>
        ))}
        {!tags.length && <span className="preview-note">All tags removed.</span>}
      </div>
      <div className="chip-actions">
        <span className="preview-note" role="status" aria-live="polite">{tags.length} tags remaining</span>
        <Button variant="text" onClick={() => setTags(['Design system', 'React', 'Accessibility'])} disabled={tags.length === 3}>
          Restore tags
        </Button>
      </div>
    </div>
  );
}

function ChipDemoContent({ demoId }) {
  if (demoId === 'chip-colors') return <ChipColors />;
  if (demoId === 'chip-deletable') return <ChipDeletable />;
  return <ChipVariants />;
}

export default function ChipPage() {
  const styleSource = getStyleSource('chip');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <ChipDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
