import { Autocomplete } from '@tailmantic/ui-components';
import { Check, ChevronDown, Command, CornerDownLeft, Search, X } from 'lucide-react';
import { useState } from 'react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('autocomplete');
const AUTOCOMPLETE_STYLES_NOTE =
  'Base component styles are provided by @tailmantic/ui-components/autocomplete/styles.';
const OPTIONS = [
  { label: 'React', detail: 'User interface library', group: 'Frontend', mark: 'R' },
  { label: 'Vue', detail: 'Progressive JavaScript framework', group: 'Frontend', mark: 'V' },
  { label: 'Angular', detail: 'Web application platform', group: 'Frontend', mark: 'A' },
  { label: 'Svelte', detail: 'Compiler-based UI framework', group: 'Frontend', mark: 'S' },
  { label: 'Solid', detail: 'Reactive UI library', group: 'Frontend', mark: 'So' },
  { label: 'Astro', detail: 'Content-driven web framework', group: 'Frontend', mark: 'As' },
];

function filterFrameworks(options, query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return options.filter((option) =>
    `${option.label} ${option.detail ?? ''} ${option.group ?? ''}`
      .toLocaleLowerCase()
      .includes(normalizedQuery),
  );
}

function renderOption(option, { isSelected }) {
  return (
    <>
      <span className="autocomplete-option-icon">{option.mark}</span>
      <span className="autocomplete-option-copy">
        <span className="autocomplete-option-title">{option.label}</span>
        <span className="autocomplete-option-description">{option.detail}</span>
      </span>
      <span className="autocomplete-count">{option.group}</span>
      {isSelected && <Check size={14} aria-hidden="true" />}
    </>
  );
}

const renderCreateOption = (value) => (
  <>
    <span className="autocomplete-option-icon">+</span>
    <span className="autocomplete-option-copy">
      <span className="autocomplete-option-title">Add “{value}”</span>
      <span className="autocomplete-option-description">Create a custom value</span>
    </span>
    <CornerDownLeft size={14} aria-hidden="true" />
  </>
);

const renderEmpty = (
  <div className="autocomplete-empty">
    <strong>No matching frameworks</strong>
    <span className="autocomplete-option-description">Try another search term.</span>
  </div>
);

const hint = (content) => (
  <>
    <span>{content}</span>
    <span className="autocomplete-shortcut">
      <Command size={10} /> Enter
    </span>
  </>
);

const USAGE_CODE = `import { Autocomplete } from '@tailmantic/ui-components';

<Autocomplete
  options={frameworks}
  value={framework}
  onValueChange={setFramework}
  label="Framework"
  hint="Start typing to filter the list."
/>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/AutocompletePage.jsx',
    'Self-contained page with interactive Autocomplete examples.',
  ],
  [
    'Component',
    'packages/ui-components/src/autocomplete/Autocomplete.jsx',
    'Reusable filtering, selection, keyboard navigation, and free-solo behavior.',
  ],
  [
    'Styles',
    'packages/ui-components/src/autocomplete/autocomplete.styles.js',
    'Tailmantic styles bundled with the Autocomplete package.',
  ],
];

function AutocompleteExample({ multiple = false, freeSolo = false }) {
  const [value, setValue] = useState('');
  const [selectedValues, setSelectedValues] = useState([]);
  const label = multiple ? 'Frameworks' : freeSolo ? 'Framework or custom value' : 'Framework';
  const hintText = multiple
    ? 'Select one or more options.'
    : freeSolo
      ? 'Pick a suggestion or add your own.'
      : 'Start typing to filter the list.';
  const placeholder = multiple
    ? selectedValues.length
      ? 'Add another framework…'
      : 'Choose frameworks…'
    : freeSolo
      ? 'Search or enter a framework…'
      : 'Search frameworks…';

  return (
    <Autocomplete
      aria-label={label}
      options={OPTIONS}
      filterOptions={filterFrameworks}
      value={multiple ? undefined : value}
      onValueChange={multiple ? undefined : setValue}
      multiple={multiple}
      selectedValues={multiple ? selectedValues : undefined}
      onSelectedValuesChange={multiple ? setSelectedValues : undefined}
      freeSolo={freeSolo}
      label={label}
      hint={hint(hintText)}
      leadingAdornment={
        <Search className="autocomplete-leading-icon" size={15} aria-hidden="true" />
      }
      trailingAdornment={<ChevronDown size={15} aria-hidden="true" />}
      clearAdornment={<X size={14} />}
      removeAdornment={<X size={11} />}
      renderOption={renderOption}
      renderCreateOption={renderCreateOption}
      renderEmpty={renderEmpty}
      placeholder={placeholder}
    />
  );
}

export default function AutocompletePage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Use the package component for filtered selection, multiple values, and custom entries."
      usageDescription="Autocomplete behavior and styles are provided by the reusable package component."
    >
      <div className="component-showcase component-showcase-autocomplete">
        <DemoPanel
          title="Search and select"
          caption="Filter a curated list and select one framework with keyboard or pointer."
          code={AUTOCOMPLETE_STYLES_NOTE}
        >
          <AutocompleteExample />
        </DemoPanel>
        <DemoPanel
          title="Multiple selection"
          caption="Build a compact selection of frameworks with removable tags."
          code={AUTOCOMPLETE_STYLES_NOTE}
        >
          <AutocompleteExample multiple />
        </DemoPanel>
        <DemoPanel
          title="Free solo"
          caption="Choose a suggestion or create a custom value that is not in the list."
          code={AUTOCOMPLETE_STYLES_NOTE}
        >
          <AutocompleteExample freeSolo />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
