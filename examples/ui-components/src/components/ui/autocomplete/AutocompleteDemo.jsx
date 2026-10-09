import Autocomplete from '@tailmantic/ui-components/autocomplete';

const options = [
  { label: 'React', description: 'User interface library', group: 'Frontend', mark: 'R' },
  { label: 'Vue', description: 'Progressive JavaScript framework', group: 'Frontend', mark: 'V' },
  { label: 'Angular', description: 'Web application platform', group: 'Frontend', mark: 'A' },
  { label: 'Svelte', description: 'Compiler-based UI framework', group: 'Frontend', mark: 'S' },
  { label: 'Solid', description: 'Reactive UI library', group: 'Frontend', mark: 'So' },
  { label: 'Astro', description: 'Content-driven web framework', group: 'Frontend', mark: 'As' },
];

export default function AutocompleteDemo({ demoId }) {
  const multiple = demoId === 'autocomplete-multiple';
  const freeSolo = demoId === 'autocomplete-free';

  return (
    <Autocomplete
      options={options}
      label={multiple ? 'Frameworks' : freeSolo ? 'Framework or custom value' : 'Framework'}
      helperText={
        multiple
          ? 'Select one or more options.'
          : freeSolo
            ? 'Pick a suggestion or add your own.'
            : 'Start typing to filter the list.'
      }
      multiple={multiple}
      freeSolo={freeSolo}
      placeholder={
        multiple
          ? 'Choose frameworks…'
          : freeSolo
            ? 'Search or enter a framework…'
            : 'Search frameworks…'
      }
      emptyLabel="No matching frameworks"
      emptyDescription="Try another search term."
    />
  );
}
