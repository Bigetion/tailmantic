import { forwardRef, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { cx } from 'tailmantic';
import Popper from '../popper/Popper.jsx';
import './autocomplete.styles.js';

const AUTOCOMPLETE_FALLBACK_PLACEMENTS = ['top-start'];

function getOption(option) {
  if (typeof option === 'string') return { label: option, value: option };
  return {
    ...option,
    value: option.value ?? option.label,
    description: option.description ?? option.detail,
  };
}

const Autocomplete = forwardRef(function Autocomplete(
  {
    className,
    options = [],
    value,
    defaultValue,
    onValueChange,
    multiple = false,
    selectedValues: controlledSelectedValues,
    defaultSelectedValues = [],
    onSelectedValuesChange,
    freeSolo = false,
    onChange,
    inputValue,
    defaultInputValue,
    onInputValueChange,
    filterOptions,
    name,
    id,
    label,
    hint,
    leadingAdornment,
    trailingAdornment,
    clearAdornment,
    removeAdornment,
    createAdornment,
    renderOption,
    renderCreateOption,
    renderEmpty,
    disabled = false,
    ...inputProps
  },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const listboxId = `${inputId}-listbox`;
  const hintId = `${inputId}-hint`;
  const anchorRef = useRef(null);
  const fieldRef = useRef(null);
  const surfaceRef = useRef(null);
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const [internalSelectedValues, setInternalSelectedValues] = useState(defaultSelectedValues);
  const optionNodes = useMemo(() => options.map(getOption), [options]);
  const selected = value ?? internalValue;
  const selectedValues = controlledSelectedValues ?? internalSelectedValues;
  const selectedOption = optionNodes.find((option) => option.value === selected);
  const [internalInput, setInternalInput] = useState(
    defaultInputValue ?? selectedOption?.label ?? selected,
  );
  const query = inputValue ?? internalInput;
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [announcement, setAnnouncement] = useState('');
  const previousValue = useRef(selected);
  const preserveInputValue = useRef(undefined);
  const filteredOptions = useMemo(() => {
    const filtered = filterOptions
      ? filterOptions(optionNodes, query)
      : optionNodes.filter((option) =>
          option.label.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()),
        );
    return multiple
      ? filtered.filter((option) => !selectedValues.includes(option.value))
      : filtered;
  }, [filterOptions, multiple, optionNodes, query, selectedValues]);
  const exactMatch = optionNodes.some(
    (option) => option.label.toLocaleLowerCase() === query.trim().toLocaleLowerCase(),
  );
  const canCreate = freeSolo && Boolean(query.trim()) && !exactMatch;
  const optionCount = filteredOptions.length + Number(canCreate);

  useEffect(() => {
    if (previousValue.current !== selected) {
      previousValue.current = selected;
      if (inputValue === undefined && !multiple) {
        if (preserveInputValue.current !== selected) {
          const nextOption = optionNodes.find((option) => option.value === selected);
          setInternalInput(nextOption?.label ?? selected);
        }
        preserveInputValue.current = undefined;
      }
    }
  }, [inputValue, multiple, optionNodes, selected]);

  const dismiss = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    function handlePointerDown(event) {
      if (anchorRef.current?.contains(event.target)) return;
      if (surfaceRef.current?.contains(event.target)) return;
      dismiss();
    }
    function handleDocumentKeyDown(event) {
      if (event.key === 'Escape') dismiss();
    }
    document.addEventListener('pointerdown', handlePointerDown, true);
    document.addEventListener('keydown', handleDocumentKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
      document.removeEventListener('keydown', handleDocumentKeyDown);
    };
  }, [dismiss, open]);

  function updateInput(nextValue, event) {
    if (inputValue === undefined) setInternalInput(nextValue);
    onInputValueChange?.(nextValue, event);
    if (event) onChange?.(event);
  }

  function updateSelectedValues(nextValues, changedOption) {
    if (controlledSelectedValues === undefined) setInternalSelectedValues(nextValues);
    onSelectedValuesChange?.(nextValues, changedOption);
  }

  function selectOption(option) {
    if (multiple) {
      const nextValues = [...selectedValues, option.value];
      updateSelectedValues(nextValues, option);
      updateInput('', undefined);
      setAnnouncement(`${option.label} added. ${nextValues.length} selected.`);
      setActiveIndex(-1);
      setOpen(true);
      return;
    }

    if (value === undefined) setInternalValue(option.value);
    onValueChange?.(option.value, option);
    if (inputValue === undefined) setInternalInput(option.label);
    onInputValueChange?.(option.label);
    setAnnouncement(`${option.label} selected.`);
    dismiss();
  }

  function createOption() {
    const labelValue = query.trim();
    if (!labelValue) return;
    selectOption({ label: labelValue, value: labelValue, description: 'Custom value' });
  }

  function removeOption(valueToRemove) {
    const nextValues = selectedValues.filter((item) => item !== valueToRemove);
    updateSelectedValues(nextValues, null);
    const option = optionNodes.find((item) => item.value === valueToRemove);
    setAnnouncement(`${option?.label ?? valueToRemove} removed.`);
  }

  function clearValue() {
    updateInput('', undefined);
    if (multiple) {
      updateSelectedValues([], null);
    } else {
      if (value === undefined) setInternalValue('');
      if (selected !== '') {
        preserveInputValue.current = '';
        onValueChange?.('', null);
      }
    }
    setActiveIndex(-1);
    setAnnouncement('Selection cleared.');
    setOpen(true);
    anchorRef.current?.querySelector('input[role="combobox"]')?.focus();
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
      event.preventDefault();
      if (activeIndex >= 0 && activeIndex < filteredOptions.length) {
        selectOption(filteredOptions[activeIndex]);
      } else if (activeIndex === filteredOptions.length && canCreate) {
        createOption();
      } else if (filteredOptions.length) {
        selectOption(filteredOptions[0]);
      } else if (canCreate) {
        createOption();
      }
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      dismiss();
    } else if (event.key === 'Backspace' && multiple && !query && selectedValues.length) {
      removeOption(selectedValues[selectedValues.length - 1]);
    }
  }

  const selectedOptionValues = multiple ? selectedValues : selected ? [selected] : [];
  const hasSelection = selectedOptionValues.length > 0;

  return (
    <div className={cx('autocomplete', className)} ref={anchorRef}>
      {label && (
        <label className="autocomplete-label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div
        className={cx('autocomplete-field', open && 'autocomplete-field-open')}
        ref={fieldRef}
      >
        {leadingAdornment}
        {multiple && selectedValues.length > 0 && (
          <div className="autocomplete-tags">
            {selectedValues.map((selectedValue) => {
              const option = optionNodes.find((item) => item.value === selectedValue);
              const selectedLabel = option?.label ?? selectedValue;
              return (
                <span className="autocomplete-tag" key={selectedValue}>
                  {selectedLabel}
                  <button
                    className="autocomplete-tag-remove"
                    type="button"
                    aria-label={`Remove ${selectedLabel}`}
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => removeOption(selectedValue)}
                  >
                    {removeAdornment ?? clearAdornment}
                  </button>
                </span>
              );
            })}
          </div>
        )}
        <input
          {...inputProps}
          ref={ref}
          id={inputId}
          className="autocomplete-input"
          type="text"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-activedescendant={
            open && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
          }
          aria-describedby={hint ? hintId : undefined}
          autoComplete={inputProps.autoComplete ?? 'off'}
          disabled={disabled}
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
              if (selected !== '') {
                preserveInputValue.current = '';
                onValueChange?.('', null);
              }
            }
            setActiveIndex(-1);
            setOpen(true);
          }}
          onKeyDown={(event) => {
            handleKeyDown(event);
            inputProps.onKeyDown?.(event);
          }}
        />
        <div className="autocomplete-actions">
          {query || hasSelection ? (
            <button
              className="autocomplete-action"
              type="button"
              aria-label="Clear selection"
              onMouseDown={(event) => event.preventDefault()}
              onClick={clearValue}
            >
              {clearAdornment}
            </button>
          ) : (
            trailingAdornment
          )}
        </div>
      </div>
      {name &&
        (multiple ? (
          selectedValues.map((selectedValue) => (
            <input key={selectedValue} type="hidden" name={name} value={selectedValue} />
          ))
        ) : (
          <input type="hidden" name={name} value={selected ?? ''} />
        ))}
      {hint && (
        <p className="autocomplete-hint" id={hintId}>
          {hint}
        </p>
      )}
      <span className="sr-only" role="status" aria-live="polite">
        {announcement}
      </span>
      <Popper
        open={open && !disabled}
        anchorRef={fieldRef}
        placement="bottom-start"
        fallbackPlacements={AUTOCOMPLETE_FALLBACK_PLACEMENTS}
        className="autocomplete-popover"
        role="listbox"
        id={listboxId}
        aria-multiselectable={multiple || undefined}
        ref={surfaceRef}
      >
        {filteredOptions.length > 0
          ? filteredOptions.map((option, index) => {
              const isActive = activeIndex === index;
              const isSelected = selectedOptionValues.includes(option.value);
              return (
                <button
                  className={cx('autocomplete-option', isActive && 'autocomplete-option-active')}
                  id={`${listboxId}-option-${index}`}
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onMouseMove={() => setActiveIndex(index)}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => selectOption(option)}
                >
                  {renderOption ? renderOption(option, { isActive, isSelected }) : option.label}
                </button>
              );
            })
          : !canCreate &&
            (renderEmpty ?? (
              <div className="autocomplete-empty">
                <strong>No matching options</strong>
                <span>Try another search term.</span>
              </div>
            ))}
        {canCreate && (
          <div className="autocomplete-create">
            <button
              className={cx(
                'autocomplete-option',
                activeIndex === filteredOptions.length && 'autocomplete-option-active',
              )}
              id={`${listboxId}-option-${filteredOptions.length}`}
              type="button"
              role="option"
              aria-selected={false}
              onMouseMove={() => setActiveIndex(filteredOptions.length)}
              onMouseDown={(event) => event.preventDefault()}
              onClick={createOption}
            >
              {renderCreateOption ? renderCreateOption(query.trim()) : `Add “${query.trim()}”`}
            </button>
          </div>
        )}
      </Popper>
    </div>
  );
});

export default Autocomplete;
