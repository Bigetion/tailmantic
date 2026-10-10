import { Check, ChevronDown, Command, Search, X } from 'lucide-react';
import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import FloatingSurface, { useClickAway } from './FloatingSurface.jsx';

const OPTIONS = [
  { label: 'React', detail: 'User interface library', group: 'Frontend', mark: 'R' },
  { label: 'Vue', detail: 'Progressive JavaScript framework', group: 'Frontend', mark: 'V' },
  { label: 'Angular', detail: 'Web application platform', group: 'Frontend', mark: 'A' },
  { label: 'Svelte', detail: 'Compiler-based UI framework', group: 'Frontend', mark: 'S' },
  { label: 'Solid', detail: 'Reactive UI library', group: 'Frontend', mark: 'So' },
  { label: 'Astro', detail: 'Content-driven web framework', group: 'Frontend', mark: 'As' },
];
const MODIFIERS = [
  { name: 'offset', options: { offset: [0, 6] } },
  { name: 'flip', options: { fallbackPlacements: ['top-start'] } },
  { name: 'preventOverflow', options: { padding: 8 } },
];

export default function Autocomplete() {
  const id = useId();
  const listboxId = `${id}-options`;
  const anchorRef = useRef(null);
  const fieldRef = useRef(null);
  const inputRef = useRef(null);
  const floatingRef = useRef(null);
  const [mode, setMode] = useState('single');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [announcement, setAnnouncement] = useState('');
  const multiple = mode === 'multiple';
  const freeSolo = mode === 'free-solo';
  const options = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    return OPTIONS.filter((option) => {
      const matches =
        !normalized ||
        `${option.label} ${option.detail} ${option.group}`.toLocaleLowerCase().includes(normalized);
      return matches && (!multiple || !selected.some((item) => item.label === option.label));
    });
  }, [multiple, query, selected]);
  const exactMatch = options.some(
    (option) => option.label.toLocaleLowerCase() === query.trim().toLocaleLowerCase(),
  );
  const canCreate = freeSolo && Boolean(query.trim()) && !exactMatch;
  const optionCount = options.length + Number(canCreate);
  const dismiss = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);
  useClickAway(open, anchorRef, floatingRef, dismiss);

  useEffect(() => {
    if (!open || activeIndex < 0) return;
    document.getElementById(`${listboxId}-${activeIndex}`)?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex, listboxId, open]);

  function select(option) {
    if (multiple) {
      setSelected((current) => [...current, option]);
      setQuery('');
      setActiveIndex(-1);
      setOpen(true);
      setAnnouncement(`${option.label} added.`);
      inputRef.current?.focus();
      return;
    }
    setSelected([option]);
    setQuery(option.label);
    setAnnouncement(`${option.label} selected.`);
    dismiss();
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) =>
        optionCount === 0 ? -1 : (current + 1 + optionCount) % optionCount,
      );
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) =>
        optionCount === 0 ? -1 : current <= 0 ? optionCount - 1 : current - 1,
      );
    } else if (event.key === 'Enter' && open) {
      event.preventDefault();
      if (activeIndex >= 0 && activeIndex < options.length) select(options[activeIndex]);
      else if (canCreate && (activeIndex === options.length || activeIndex === -1)) {
        select({ label: query.trim(), detail: 'Custom value', group: 'Custom' });
      } else if (activeIndex === -1 && options.length) select(options[0]);
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      dismiss();
    } else if (event.key === 'Backspace' && multiple && !query && selected.length) {
      setSelected((current) => current.slice(0, -1));
    }
  }

  function changeMode(nextMode) {
    setMode(nextMode);
    setSelected([]);
    setQuery('');
    setAnnouncement('');
    dismiss();
  }

  return (
    <section className="demo-section">
      <span className="demo-section-title">Search, select, and create values</span>
      <fieldset className="demo-autocomplete-modes">
        <legend className="sr-only">Autocomplete mode</legend>
        {[
          ['single', 'Single select'],
          ['multiple', 'Multiple select'],
          ['free-solo', 'Free solo'],
        ].map(([value, label]) => (
          <button
            className={
              mode === value
                ? 'demo-autocomplete-mode demo-autocomplete-mode-active'
                : 'demo-autocomplete-mode'
            }
            type="button"
            aria-pressed={mode === value}
            key={value}
            onClick={() => changeMode(value)}
          >
            {label}
          </button>
        ))}
      </fieldset>
      <div className="demo-autocomplete" ref={anchorRef}>
        <label className="demo-autocomplete-label" htmlFor={`${id}-input`}>
          {multiple ? 'Frameworks' : freeSolo ? 'Framework or custom value' : 'Framework'}
        </label>
        <div className="demo-autocomplete-field" ref={fieldRef}>
          <Search size={15} aria-hidden="true" />
          {selected.length > 0 && multiple && (
            <div className="demo-autocomplete-tags">
              {selected.map((option) => (
                <span className="demo-autocomplete-tag" key={option.label}>
                  {option.label}
                  <button
                    type="button"
                    aria-label={`Remove ${option.label}`}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      setSelected((current) =>
                        current.filter((item) => item.label !== option.label),
                      );
                      setAnnouncement(
                        `${option.label} removed. ${Math.max(selected.length - 1, 0)} selected.`,
                      );
                    }}
                  >
                    <X size={11} />
                  </button>
                </span>
              ))}
            </div>
          )}
          <input
            id={`${id}-input`}
            ref={inputRef}
            className="demo-autocomplete-input"
            role="combobox"
            aria-expanded={open}
            aria-controls={listboxId}
            aria-activedescendant={
              open && activeIndex >= 0 ? `${listboxId}-${activeIndex}` : undefined
            }
            aria-autocomplete="list"
            autoComplete="off"
            placeholder={
              multiple
                ? 'Choose frameworks...'
                : freeSolo
                  ? 'Search or enter a framework...'
                  : 'Search frameworks...'
            }
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              if (!multiple) setSelected([]);
              setActiveIndex(-1);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onBlur={(event) => {
              const nextTarget = event.relatedTarget;
              if (
                nextTarget instanceof Node &&
                (anchorRef.current?.contains(nextTarget) ||
                  floatingRef.current?.contains(nextTarget))
              ) {
                return;
              }
              dismiss();
            }}
            onKeyDown={handleKeyDown}
          />
          {query || selected.length ? (
            <button
              type="button"
              className="demo-autocomplete-clear"
              aria-label="Clear selection"
              onClick={() => {
                setQuery('');
                setSelected([]);
                inputRef.current?.focus();
                setOpen(true);
              }}
            >
              <X size={14} />
            </button>
          ) : (
            <ChevronDown size={15} aria-hidden="true" />
          )}
        </div>
        <span className="demo-autocomplete-hint">
          {multiple
            ? 'Select one or more options.'
            : freeSolo
              ? 'Pick a suggestion or add your own.'
              : 'Start typing to filter the list.'}
          <span>
            <Command size={10} /> Enter
          </span>
        </span>
        <span className="sr-only" role="status" aria-live="polite">
          {announcement}
        </span>
        <FloatingSurface
          open={open}
          referenceRef={fieldRef}
          floatingRef={floatingRef}
          placement="bottom-start"
          modifiers={MODIFIERS}
          className="demo-autocomplete-options"
          role="listbox"
          onEscape={() => {
            dismiss();
            inputRef.current?.focus();
          }}
        >
          {options.map((option, index) => (
            <button
              id={`${listboxId}-${index}`}
              className={
                activeIndex === index
                  ? 'demo-autocomplete-option demo-autocomplete-option-active'
                  : 'demo-autocomplete-option'
              }
              type="button"
              role="option"
              aria-selected={selected.some((item) => item.label === option.label)}
              key={option.label}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => select(option)}
            >
              <span className="demo-autocomplete-option-mark">{option.mark}</span>
              <span className="demo-autocomplete-option-copy">
                <strong>{option.label}</strong>
                <small>{option.detail}</small>
              </span>
              <span className="demo-autocomplete-option-group">{option.group}</span>
              {selected.some((item) => item.label === option.label) && <Check size={15} />}
            </button>
          ))}
          {canCreate && (
            <button
              id={`${listboxId}-${options.length}`}
              className={
                activeIndex === options.length
                  ? 'demo-autocomplete-option demo-autocomplete-option-active'
                  : 'demo-autocomplete-option'
              }
              type="button"
              role="option"
              aria-selected={false}
              onMouseEnter={() => setActiveIndex(options.length)}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() =>
                select({
                  label: query.trim(),
                  detail: 'Custom value',
                  group: 'Custom',
                  mark: query.trim().slice(0, 2).toUpperCase(),
                })
              }
            >
              <span className="demo-autocomplete-option-mark">+</span>
              <span className="demo-autocomplete-option-copy">
                <strong>Add “{query.trim()}”</strong>
                <small>Create a custom value</small>
              </span>
              <Command size={13} aria-hidden="true" />
            </button>
          )}
          {options.length === 0 && !canCreate && (
            <div className="demo-autocomplete-empty">
              <strong>No matching frameworks</strong>
              <span>Try another search term.</span>
            </div>
          )}
        </FloatingSurface>
      </div>
      <span className="demo-note" role="status" aria-live="polite">
        {selected.length
          ? `Selected: ${selected.map((item) => item.label).join(', ')}`
          : 'Suggestions are positioned with Popper.js.'}
      </span>
    </section>
  );
}
