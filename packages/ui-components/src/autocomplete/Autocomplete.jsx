import { forwardRef, useEffect, useId, useMemo, useRef, useState } from 'react';
import { cx } from 'tailmantic';
import Popper from '../popper/Popper.jsx';
import './autocomplete.styles.js';

function getOption(option) {
  if (typeof option === 'string') return { label: option, value: option };
  return { ...option, value: option.value ?? option.label };
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12 4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const Autocomplete = forwardRef(function Autocomplete(
  {
    className,
    options = [],
    value,
    defaultValue,
    onValueChange,
    onChange,
    inputValue,
    defaultInputValue,
    onInputValueChange,
    filterOptions,
    name,
    id,
    label,
    helperText,
    leadingIcon,
    placeholder,
    multiple = false,
    selectedValues,
    defaultSelectedValues = [],
    onSelectedValuesChange,
    freeSolo = false,
    emptyLabel = 'No matching options',
    emptyDescription = 'Try another search term.',
    createOptionLabel,
    clearButtonLabel = 'Clear selection',
    disabled = false,
    ...inputProps
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const listboxId = `${inputId}-listbox`;
  const helperId = helperText != null ? `${inputId}-hint` : undefined;
  const rootRef = useRef(null);
  const popperRef = useRef(null);
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const optionNodes = useMemo(() => options.map(getOption), [options]);
  const selected = value ?? internalValue;
  const previousValue = useRef(selected);
  const selectedOption = optionNodes.find((option) => option.value === selected);
  const [internalInput, setInternalInput] = useState(
    defaultInputValue ?? selectedOption?.label ?? selected,
  );
  const query = inputValue ?? internalInput;
  const [internalSelectedValues, setInternalSelectedValues] = useState(defaultSelectedValues);
  const selectedItems = multiple ? (selectedValues ?? internalSelectedValues) : [];
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [announcement, setAnnouncement] = useState('');
  const filteredOptions = useMemo(() => {
    if (filterOptions) return filterOptions(optionNodes, query);
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return optionNodes.filter((option) =>
      `${option.label} ${option.description ?? ''} ${option.group ?? ''}`
        .toLocaleLowerCase()
        .includes(normalizedQuery),
    );
  }, [filterOptions, optionNodes, query]);
  const visibleOptions = multiple
    ? filteredOptions.filter((option) => !selectedItems.includes(option.value))
    : filteredOptions;
  const exactMatch = optionNodes.some(
    (option) => option.label.trim().toLocaleLowerCase() === query.trim().toLocaleLowerCase(),
  );
  const canCreate = freeSolo && Boolean(query.trim()) && !exactMatch;
  const optionCount = visibleOptions.length + (canCreate ? 1 : 0);

  useEffect(() => {
    function handlePointerDown(event) {
      if (rootRef.current?.contains(event.target) || popperRef.current?.contains(event.target)) return;
      setOpen(false);
      setActiveIndex(-1);
    }

    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => document.removeEventListener('pointerdown', handlePointerDown, true);
  }, []);

  useEffect(() => {
    if (previousValue.current === selected) return;
    previousValue.current = selected;
    if (inputValue !== undefined) return;
    const nextOption = optionNodes.find((option) => option.value === selected);
    setInternalInput(nextOption?.label ?? selected);
  }, [inputValue, optionNodes, selected]);

  function updateInput(nextValue, event) {
    if (inputValue === undefined) setInternalInput(nextValue);
    onInputValueChange?.(nextValue, event);
    if (event) onChange?.(event);
  }

  function updateSelectedValues(nextValues) {
    if (selectedValues === undefined) setInternalSelectedValues(nextValues);
    onSelectedValuesChange?.(
      nextValues,
      nextValues.map((nextValue) =>
        optionNodes.find((option) => option.value === nextValue)
        ?? { label: nextValue, value: nextValue },
      ),
    );
  }

  function selectOption(option) {
    if (multiple) {
      const nextValues = [...selectedItems, option.value];
      updateSelectedValues(nextValues);
      updateInput('', undefined);
      setAnnouncement(`${option.label} added. ${nextValues.length} selected.`);
      setActiveIndex(-1);
      setOpen(true);
      return;
    }

    if (value === undefined) setInternalValue(option.value);
    onValueChange?.(option.value, option);
    updateInput(option.label, undefined);
    setOpen(false);
    setActiveIndex(-1);
    setAnnouncement(`${option.label} selected.`);
  }

  function createOption() {
    const labelText = query.trim();
    if (!labelText) return;
    selectOption({
      label: labelText,
      value: labelText,
      description: 'Custom value',
      group: 'Custom',
      mark: labelText.slice(0, 2).toUpperCase(),
    });
  }

  function removeValue(nextValue) {
    const nextValues = selectedItems.filter((selectedValue) => selectedValue !== nextValue);
    updateSelectedValues(nextValues);
    setAnnouncement(`${nextValue} removed.`);
  }

  function clearValue() {
    updateInput('', undefined);
    if (multiple) {
      updateSelectedValues([]);
    } else {
      if (value === undefined) setInternalValue('');
      onValueChange?.('', null);
    }
    setActiveIndex(-1);
    setAnnouncement('Selection cleared.');
    rootRef.current?.querySelector('input[role="combobox"]')?.focus();
    setOpen(true);
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => {
        if (!optionCount) return -1;
        return event.key === 'ArrowDown'
          ? (current + 1) % optionCount
          : current <= 0
            ? optionCount - 1
            : current - 1;
      });
    } else if (event.key === 'Enter' && open) {
      if (activeIndex >= 0 && activeIndex < visibleOptions.length) {
        event.preventDefault();
        selectOption(visibleOptions[activeIndex]);
      } else if (activeIndex === visibleOptions.length && canCreate) {
        event.preventDefault();
        createOption();
      } else if (activeIndex === -1 && visibleOptions.length) {
        event.preventDefault();
        selectOption(visibleOptions[0]);
      } else if (activeIndex === -1 && canCreate) {
        event.preventDefault();
        createOption();
      }
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      setOpen(false);
      setActiveIndex(-1);
    } else if (event.key === 'Backspace' && multiple && !query && selectedItems.length) {
      removeValue(selectedItems[selectedItems.length - 1]);
    }
  }

  const selectedLabels = selectedItems.map((selectedValue) =>
    optionNodes.find((option) => option.value === selectedValue)?.label ?? selectedValue,
  );
  const showClear = Boolean(query || selectedItems.length || (!multiple && selected));

  return (
    <div
      ref={rootRef}
      className={cx('rgi-autocomplete', className)}
      data-open={open || undefined}
    >
      {label != null && (
        <label className="rgi-autocomplete-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={cx('rgi-autocomplete-field', open && 'rgi-autocomplete-field-open')}>
        <span className="rgi-autocomplete-leading-icon" aria-hidden="true">
          {leadingIcon ?? <SearchIcon />}
        </span>
        {multiple && selectedLabels.length > 0 && (
          <div className="rgi-autocomplete-tags" aria-label="Selected values">
            {selectedLabels.map((selectedLabel, index) => (
              <span className="rgi-autocomplete-tag" key={`${selectedItems[index]}-${index}`}>
                {selectedLabel}
                <button
                  className="rgi-autocomplete-tag-remove"
                  type="button"
                  aria-label={`Remove ${selectedLabel}`}
                  disabled={disabled}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => removeValue(selectedItems[index])}
                >
                  <ClearIcon />
                </button>
              </span>
            ))}
          </div>
        )}
        <input
          {...inputProps}
          ref={ref}
          id={inputId}
          className="rgi-autocomplete-input"
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-activedescendant={
            open && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
          }
          aria-describedby={[inputProps['aria-describedby'], helperId].filter(Boolean).join(' ') || undefined}
          autoComplete={inputProps.autoComplete ?? 'off'}
          disabled={disabled}
          placeholder={placeholder ?? (multiple ? 'Choose options…' : 'Search options…')}
          value={query}
          onFocus={(event) => {
            setOpen(true);
            inputProps.onFocus?.(event);
          }}
          onBlur={(event) => {
            setOpen(false);
            setActiveIndex(-1);
            inputProps.onBlur?.(event);
          }}
          onChange={(event) => {
            updateInput(event.currentTarget.value, event);
            if (!multiple) {
              if (value === undefined) setInternalValue('');
              if (selected !== '') onValueChange?.('', null);
            }
            setActiveIndex(-1);
            setOpen(true);
          }}
          onKeyDown={(event) => {
            handleKeyDown(event);
            inputProps.onKeyDown?.(event);
          }}
        />
        <div className="rgi-autocomplete-actions">
          {showClear ? (
            <button
              className="rgi-autocomplete-action"
              type="button"
              aria-label={clearButtonLabel}
              disabled={disabled}
              onMouseDown={(event) => event.preventDefault()}
              onClick={clearValue}
            >
              <ClearIcon />
            </button>
          ) : (
            <span className="rgi-autocomplete-chevron"><ChevronIcon /></span>
          )}
        </div>
      </div>
      {name && (multiple
        ? selectedItems.map((selectedValue, index) => (
            <input key={`${selectedValue}-${index}`} type="hidden" name={name} value={selectedValue} />
          ))
        : <input type="hidden" name={name} value={selected ?? ''} />)}
      {helperText != null && (
        <p className="rgi-autocomplete-hint" id={helperId}>
          <span>{helperText}</span>
          <span className="rgi-autocomplete-shortcut">
            <kbd>⌘</kbd> Enter
          </span>
        </p>
      )}
      <span className="rgi-autocomplete-status" role="status" aria-live="polite">
        {announcement}
      </span>
      <Popper
        ref={popperRef}
        open={open && !disabled}
        anchorRef={rootRef}
        placement="bottom-start"
        fallbackPlacements={['top-start']}
        className="rgi-autocomplete-popover"
        id={listboxId}
        role="listbox"
      >
        {visibleOptions.length > 0 ? (
          visibleOptions.map((option, index) => (
            <div
              className={cx(
                'rgi-autocomplete-option',
                activeIndex === index && 'rgi-autocomplete-option-active',
              )}
              id={`${listboxId}-option-${index}`}
              key={option.value}
              role="option"
              aria-selected={multiple
                ? selectedItems.includes(option.value)
                : option.value === selected}
              onMouseDown={(event) => event.preventDefault()}
              onMouseMove={() => setActiveIndex(index)}
              onClick={() => selectOption(option)}
            >
              {option.mark != null && (
                <span className="rgi-autocomplete-option-icon">{option.mark}</span>
              )}
              <span className="rgi-autocomplete-option-copy">
                <span className="rgi-autocomplete-option-title">{option.label}</span>
                {option.description && (
                  <span className="rgi-autocomplete-option-description">{option.description}</span>
                )}
              </span>
              {option.group && (
                <span className="rgi-autocomplete-count">{option.group}</span>
              )}
              {!multiple && option.value === selected && <CheckIcon />}
            </div>
          ))
        ) : !canCreate ? (
          <div className="rgi-autocomplete-empty">
            <strong>{emptyLabel}</strong>
            <span className="rgi-autocomplete-option-description">{emptyDescription}</span>
          </div>
        ) : null}
        {canCreate && (
          <div className="rgi-autocomplete-create">
            <div
              className={cx(
                'rgi-autocomplete-option',
                activeIndex === visibleOptions.length && 'rgi-autocomplete-option-active',
              )}
              id={`${listboxId}-option-${visibleOptions.length}`}
              role="option"
              aria-selected={activeIndex === visibleOptions.length}
              onMouseDown={(event) => event.preventDefault()}
              onMouseMove={() => setActiveIndex(visibleOptions.length)}
              onClick={createOption}
            >
              <span className="rgi-autocomplete-option-icon">+</span>
              <span className="rgi-autocomplete-option-copy">
                <span className="rgi-autocomplete-option-title">
                  {createOptionLabel?.(query.trim()) ?? `Add “${query.trim()}”`}
                </span>
                <span className="rgi-autocomplete-option-description">Create a custom value</span>
              </span>
              <span className="rgi-autocomplete-create-shortcut">↵</span>
            </div>
          </div>
        )}
      </Popper>
    </div>
  );
});

export default Autocomplete;
