import { Check } from 'lucide-react';
import { useState } from 'react';
import Chip from '../components/Chip.jsx';

export default function ChipDemo() {
  const [filters, setFilters] = useState(['Design']);
  const [tags, setTags] = useState(['Accessibility', 'Tokens']);
  function toggleFilter(filter) {
    setFilters((current) =>
      current.includes(filter) ? current.filter((item) => item !== filter) : [...current, filter],
    );
  }
  return (
    <div className="demo-col">
      <div className="demo-row">
        <Chip color="primary">Design</Chip>
        <Chip color="success">Ready</Chip>
        <Chip variant="outlined">Outlined</Chip>
        <Chip disabled>Disabled</Chip>
      </div>
      <fieldset className="demo-chip-group">
        <legend className="sr-only">Filter chips</legend>
        {['Design', 'Engineering', 'Product'].map((filter) => (
          <Chip
            key={filter}
            color="primary"
            selected={filters.includes(filter)}
            onClick={() => toggleFilter(filter)}
            icon={filters.includes(filter) ? <Check size={12} /> : null}
          >
            {filter}
          </Chip>
        ))}
      </fieldset>
      <fieldset className="demo-chip-group">
        <legend className="sr-only">Removable tags</legend>
        {tags.map((tag) => (
          <Chip
            key={tag}
            onDelete={() => setTags((current) => current.filter((item) => item !== tag))}
          >
            {tag}
          </Chip>
        ))}
        <Chip color="success" icon={<Check size={12} />}>
          Compact
        </Chip>
      </fieldset>
    </div>
  );
}
