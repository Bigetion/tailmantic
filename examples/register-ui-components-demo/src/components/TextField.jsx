import { AtSign, Search, X } from 'lucide-react';
import { useState } from 'react';

function TextField({ label, helperText, errorText, error = false, ...props }) {
  const { startAdornment, endAdornment, ...inputProps } = props;
  return (
    <label className="demo-field">
      <span className="demo-field-label">{label}</span>
      <span className="demo-field-control">
        {startAdornment && <span className="demo-field-adornment">{startAdornment}</span>}
        <input
          {...inputProps}
          className={`demo-field-input${error ? ' demo-field-input-error' : ''}`}
        />
        {endAdornment && <span className="demo-field-adornment">{endAdornment}</span>}
      </span>
      {(error ? errorText : helperText) && (
        <span className={`demo-field-message${error ? ' demo-field-message-error' : ''}`}>
          {error ? errorText : helperText}
        </span>
      )}
    </label>
  );
}

export default function TextFieldDemo() {
  const [query, setQuery] = useState('');
  return (
    <div className="demo-col">
      <TextField
        label="Email address"
        type="email"
        placeholder="you@example.com"
        helperText="We'll only use this for account updates."
      />
      <TextField
        label="Project name"
        defaultValue="Tailmantic"
        error
        errorText="This name is already in use."
      />
      <TextField label="Disabled field" defaultValue="Read only" disabled />
      <TextField
        label="Search projects"
        type="search"
        placeholder="Search"
        startAdornment={<Search size={16} aria-hidden="true" />}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        endAdornment={
          query && (
            <button
              type="button"
              className="demo-field-clear"
              aria-label="Clear search"
              onClick={() => setQuery('')}
            >
              <X size={14} />
            </button>
          )
        }
        helperText="Search by project name or owner."
      />
      <TextField
        label="Budget"
        type="number"
        min="0"
        step="1"
        startAdornment={<span aria-hidden="true">$</span>}
        helperText="Numbers and icons can be used as input adornments."
      />
      <TextField
        label="Account handle"
        startAdornment={<AtSign size={15} aria-hidden="true" />}
        defaultValue="tailmantic"
      />
    </div>
  );
}
