import { forwardRef, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { cx } from 'tailmantic';
import Popper from '../popper/Popper.jsx';
import './select.styles.js';

const SELECT_FALLBACK_PLACEMENTS = ['top-start'];

function getOption(option) {
  if (typeof option === 'string') return { label: option, value: option };
  return {
    ...option,
    value: option.value ?? option.label,
    detail: option.detail ?? option.description,
  };
}

const Select = forwardRef(function Select(
  {
    'aria-describedby': describedBy,
    'aria-invalid': ariaInvalid,
    className,
    defaultSelectedValues = [],
    defaultValue,
    disabled = false,
    error = false,
    helperText,
    id,
    label,
    multiple = false,
    name,
    onSelectedValuesChange,
    onValueChange,
    options = [],
    placeholder,
    required = false,
    renderOption,
    selectedValues: controlledSelectedValues,
    value: controlledValue,
    ...triggerProps
  },
  ref,
) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const listboxId = `${selectId}-listbox`;
  const helperId = `${selectId}-helper`;
  const statusId = `${selectId}-status`;
  const anchorRef = useRef(null);
  const popperRef = useRef(null);
  const optionNodes = useMemo(() => options.map(getOption), [options]);
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');
  const [internalSelectedValues, setInternalSelectedValues] = useState(defaultSelectedValues);
  const selectedValue = controlledValue ?? internalValue;
  const selectedValues = controlledSelectedValues ?? internalSelectedValues;
  const selectedOption = optionNodes.find((option) => option.value === selectedValue);
  const selectedOptions = multiple
    ? selectedValues
        .map((value) => optionNodes.find((option) => option.value === value))
        .filter(Boolean)
    : [];
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [announcement, setAnnouncement] = useState('');
  const description =
    [describedBy, helperText != null ? helperId : undefined].filter(Boolean).join(' ') || undefined;
  const enabledIndexes = optionNodes.reduce((indexes, option, index) => {
    if (!option.disabled) indexes.push(index);
    return indexes;
  }, []);

  const dismiss = useCallback(() => {
    setOpen(false);
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    function handlePointerDown(event) {
      if (anchorRef.current?.contains(event.target)) return;
      if (popperRef.current?.contains(event.target)) return;
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

  function openAt(index) {
    const firstUnselected = enabledIndexes.find(
      (optionIndex) => !selectedValues.includes(optionNodes[optionIndex].value),
    );
    setActiveIndex(index >= 0 ? index : (firstUnselected ?? enabledIndexes[0] ?? -1));
    setOpen(true);
  }

  function moveActive(direction) {
    const currentPosition = enabledIndexes.indexOf(activeIndex);
    const nextPosition =
      currentPosition < 0
        ? direction > 0
          ? 0
          : enabledIndexes.length - 1
        : (currentPosition + direction + enabledIndexes.length) % enabledIndexes.length;
    setActiveIndex(enabledIndexes[nextPosition] ?? -1);
  }

  function chooseOption(option) {
    if (disabled || option.disabled) return;
    if (multiple) {
      const nextValues = selectedValues.includes(option.value)
        ? selectedValues.filter((value) => value !== option.value)
        : [...selectedValues, option.value];
      if (controlledSelectedValues === undefined) setInternalSelectedValues(nextValues);
      onSelectedValuesChange?.(nextValues, option);
      setAnnouncement(
        `${option.label} ${nextValues.includes(option.value) ? 'selected' : 'removed'}. ${nextValues.length} selected.`,
      );
      setActiveIndex(optionNodes.findIndex((item) => item.value === option.value));
      return;
    }
    if (controlledValue === undefined) setInternalValue(option.value);
    onValueChange?.(option.value, option);
    setAnnouncement(`${option.label} selected.`);
    dismiss();
  }

  function removeOption(option) {
    const nextValues = selectedValues.filter((value) => value !== option.value);
    if (controlledSelectedValues === undefined) setInternalSelectedValues(nextValues);
    onSelectedValuesChange?.(nextValues, null);
    setAnnouncement(`${option.label} removed. ${nextValues.length} selected.`);
  }

  function handleKeyDown(event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (!open) {
        openAt(optionNodes.findIndex((option) => option.value === selectedValue));
      } else {
        moveActive(event.key === 'ArrowDown' ? 1 : -1);
      }
      return;
    }
    if ((event.key === 'Home' || event.key === 'End') && open) {
      event.preventDefault();
      setActiveIndex(
        event.key === 'Home' ? (enabledIndexes[0] ?? -1) : (enabledIndexes.at(-1) ?? -1),
      );
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!open) {
        openAt(optionNodes.findIndex((option) => option.value === selectedValue));
      } else if (activeIndex >= 0) {
        chooseOption(optionNodes[activeIndex]);
      }
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      dismiss();
    } else if (event.key === 'Tab' && open) {
      dismiss();
    }
  }

  const triggerValue = multiple
    ? selectedValues.length
      ? `${selectedValues.length} ${selectedValues.length === 1 ? 'option' : 'options'} selected`
      : (placeholder ?? 'Choose options')
    : (selectedOption?.label ?? placeholder ?? 'Choose an option');

  return (
    <div className={cx('tm-select', className)}>
      {label != null && (
        <label className="tm-select-label" id={`${selectId}-label`} htmlFor={selectId}>
          {label}
        </label>
      )}
      <div className="tm-select-control" ref={anchorRef}>
        <button
          {...triggerProps}
          ref={ref}
          id={selectId}
          className={cx(
            'tm-select-trigger',
            open && 'tm-select-trigger-open',
            error && 'tm-select-trigger-error',
          )}
          type="button"
          role="combobox"
          aria-labelledby={
            label != null ? `${selectId}-label ${selectId}-value` : `${selectId}-value`
          }
          aria-label={triggerProps['aria-label']}
          aria-describedby={description}
          aria-invalid={error || ariaInvalid || undefined}
          aria-required={required || undefined}
          aria-disabled={disabled || undefined}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-activedescendant={
            open && activeIndex >= 0 ? `${listboxId}-option-${activeIndex}` : undefined
          }
          disabled={disabled}
          onClick={(event) => {
            triggerProps.onClick?.(event);
            if (event.defaultPrevented) return;
            if (open) dismiss();
            else openAt(optionNodes.findIndex((option) => option.value === selectedValue));
          }}
          onKeyDown={(event) => {
            handleKeyDown(event);
            triggerProps.onKeyDown?.(event);
          }}
        >
          <span className="tm-select-value" id={`${selectId}-value`}>
            {triggerValue}
          </span>
          <span
            className={cx('tm-select-icon', open && 'tm-select-icon-open')}
            aria-hidden="true"
          />
        </button>
        {multiple && selectedOptions.length > 0 && (
          <div className="tm-select-tags">
            {selectedOptions.map((option) => (
              <span className="tm-select-tag" key={option.value}>
                {option.label}
                <button
                  className="tm-select-tag-remove"
                  type="button"
                  aria-label={`Remove ${option.label}`}
                  disabled={disabled}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    removeOption(option);
                    anchorRef.current?.querySelector('[role="combobox"]')?.focus();
                  }}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
      {name &&
        (multiple ? (
          selectedValues.map((value) => (
            <input key={value} type="hidden" name={name} value={value} disabled={disabled} />
          ))
        ) : (
          <input type="hidden" name={name} value={selectedValue} disabled={disabled} />
        ))}
      {helperText != null && (
        <span className={cx('tm-select-helper', error && 'tm-select-helper-error')} id={helperId}>
          {helperText}
        </span>
      )}
      <span className="sr-only" id={statusId} role="status" aria-live="polite">
        {announcement}
      </span>
      <Popper
        open={open && !disabled}
        anchorRef={anchorRef}
        placement="bottom-start"
        fallbackPlacements={SELECT_FALLBACK_PLACEMENTS}
        className="tm-select-options"
        role="listbox"
        id={listboxId}
        aria-labelledby={label != null ? `${selectId}-label` : undefined}
        aria-multiselectable={multiple || undefined}
        ref={popperRef}
      >
        {optionNodes.map((option, index) => {
          const isSelected = multiple
            ? selectedValues.includes(option.value)
            : option.value === selectedValue;
          const isActive = index === activeIndex;
          return (
            <button
              className={cx(
                'tm-select-option',
                isActive && 'tm-select-option-active',
                isSelected && 'tm-select-option-selected',
                option.disabled && 'tm-select-option-disabled',
              )}
              id={`${listboxId}-option-${index}`}
              key={option.value}
              type="button"
              role="option"
              aria-selected={isSelected}
              aria-disabled={option.disabled || undefined}
              disabled={option.disabled}
              onMouseMove={() => !option.disabled && setActiveIndex(index)}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => chooseOption(option)}
            >
              <span className="tm-select-option-copy">
                <span className="tm-select-option-label">
                  {renderOption ? renderOption(option, { isActive, isSelected }) : option.label}
                </span>
                {option.detail != null && (
                  <span className="tm-select-option-detail">{option.detail}</span>
                )}
              </span>
              {isSelected && (
                <span className="tm-select-option-check" aria-hidden="true">
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </Popper>
    </div>
  );
});

export default Select;
