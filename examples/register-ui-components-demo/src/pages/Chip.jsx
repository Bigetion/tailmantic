import { Check, X } from 'lucide-react';
import { useState } from 'react';

function Chip({
  children,
  color = 'default',
  outlined = false,
  disabled = false,
  selected,
  onClick,
  onDelete,
  leading,
}) {
  return (
    <span
      className={`demo-chip demo-chip-${color}${outlined ? ' demo-chip-outlined' : ''}${disabled ? ' demo-chip-disabled' : ''}${selected ? ' demo-chip-selected' : ''}`}
    >
      {leading}
      {onClick ? (
        <button
          type="button"
          className="demo-chip-select"
          disabled={disabled}
          aria-pressed={selected}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        children
      )}
      {onDelete && (
        <button
          type="button"
          className="demo-chip-delete"
          aria-label={`Remove ${children}`}
          onClick={onDelete}
        >
          <X size={12} />
        </button>
      )}
    </span>
  );
}

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
        <Chip outlined>Outlined</Chip>
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
          >
            {filters.includes(filter) && <Check size={12} />}
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
        <Chip color="success" leading={<Check size={12} />}>
          Compact
        </Chip>
      </fieldset>
    </div>
  );
}
