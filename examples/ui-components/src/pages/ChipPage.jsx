import { Button, Chip } from '@tailmantic/ui-components';
import { Check, Clock3, Code2, X } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('chip');
const CHIP_STYLES_NOTE =
  'Chip and example layout styles are provided by @tailmantic/ui-components/chip/styles.';
const ORIGINAL_TAGS = ['Design system', 'React', 'Accessibility'];
const USAGE_CODE = `import { Chip } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/chip/styles';

<Chip color="primary" selected={selected} onClick={toggleFilter}>
  Design
</Chip>

<Chip variant="outlined" onDelete={removeTag}>
  React
</Chip>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/ChipPage.jsx',
    'Dedicated examples for chip variants, selectable filters, and removable tags.',
  ],
  [
    'Component',
    'packages/ui-components/src/chip/Chip.jsx',
    'Chip with semantic colors, selected state, sizes, and optional delete action.',
  ],
  [
    'Styles',
    'packages/ui-components/src/chip/chip.styles.js',
    'Package-owned chip appearance, delete control, and example layout styles.',
  ],
];

function ChipVariants() {
  return (
    <div className="preview-stack">
      <div className="tm-chip-examples" role="group" aria-label="Chip variants">
        <Chip variant="outlined">Outlined</Chip>
        <Chip>Filled</Chip>
        <Chip color="primary" icon={Code2}>
          React
        </Chip>
        <Chip color="success" icon={Check}>
          Build passed
        </Chip>
        <Chip color="warning" icon={Clock3}>
          In review
        </Chip>
        <Chip size="small">Compact</Chip>
      </div>
      <span className="preview-note">
        Use a leading icon and color to add context without increasing visual weight.
      </span>
    </div>
  );
}

function SelectableFilters() {
  const [selected, setSelected] = useState(['Design']);
  const filters = ['Design', 'Engineering', 'Product', 'Research'];

  function toggleFilter(filter) {
    setSelected((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter],
    );
  }

  return (
    <div className="preview-stack">
      <div className="tm-chip-examples" role="group" aria-label="Filter by team">
        {filters.map((filter) => (
          <Chip
            key={filter}
            color="primary"
            selected={selected.includes(filter)}
            onClick={() => toggleFilter(filter)}
          >
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

function RemovableTags() {
  const [tags, setTags] = useState(ORIGINAL_TAGS);

  function removeTag(tag) {
    setTags((current) => current.filter((item) => item !== tag));
  }

  return (
    <div className="preview-stack">
      <div className="tm-chip-examples" role="group" aria-label="Removable tags">
        {tags.map((tag) => (
          <Chip
            key={tag}
            variant="outlined"
            deleteIcon={<X size={13} aria-hidden="true" />}
            onDelete={() => removeTag(tag)}
          >
            {tag}
          </Chip>
        ))}
        {!tags.length && <span className="preview-note">All tags removed.</span>}
      </div>
      <div className="tm-chip-actions">
        <span className="preview-note" role="status" aria-live="polite">
          {tags.length} tags remaining
        </span>
        <Button
          variant="text"
          onClick={() => setTags(ORIGINAL_TAGS)}
          disabled={tags.length === ORIGINAL_TAGS.length}
        >
          Restore tags
        </Button>
      </div>
    </div>
  );
}

export default function ChipPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Use Chip to represent compact attributes, selectable filters, and removable tags."
      usageDescription="Chip supports filled and outlined styles, semantic colors, a compact size, accessible selected state, and a separate keyboard-operable delete action."
    >
      <div className="component-showcase component-showcase-chip">
        <DemoPanel
          title="Chip variants"
          caption="Use compact labels with leading icons to communicate status and context."
          code={CHIP_STYLES_NOTE}
        >
          <ChipVariants />
        </DemoPanel>
        <DemoPanel
          title="Selectable filters"
          caption="Toggle related filter chips on and off while keeping selection accessible."
          code={CHIP_STYLES_NOTE}
        >
          <SelectableFilters />
        </DemoPanel>
        <DemoPanel
          title="Removable tags"
          caption="Let users remove individual chips and restore the original set."
          code={CHIP_STYLES_NOTE}
        >
          <RemovableTags />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
