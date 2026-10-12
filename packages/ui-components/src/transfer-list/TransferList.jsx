import { useEffect, useId, useRef, useState } from 'react';
import { cx } from 'tailmantic';
import './transfer-list.styles.js';

function TransferCheckbox({
  id,
  label,
  checked,
  indeterminate = false,
  disabled = false,
  onChange,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <span className={cx('rgi-transfer-checkbox', disabled && 'rgi-transfer-checkbox-disabled')}>
      <input
        ref={inputRef}
        id={id}
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-label={label}
        checked={checked}
        className="rgi-transfer-checkbox-input"
        disabled={disabled}
        onChange={onChange}
        type="checkbox"
      />
      <span
        className={cx(
          'rgi-transfer-checkbox-indicator',
          checked && 'rgi-transfer-checkbox-checked',
          indeterminate && 'rgi-transfer-checkbox-indeterminate',
        )}
        aria-hidden="true"
      >
        {indeterminate ? (
          <span className="rgi-transfer-checkbox-dash" />
        ) : checked ? (
          <svg aria-hidden="true" viewBox="0 0 12 12" width="11" height="11" fill="none">
            <path d="m2 6 2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        ) : null}
      </span>
    </span>
  );
}

function TransferActionIcon({ direction, all = false }) {
  const path = all
    ? direction === 'right'
      ? 'M1 4l4 4-4 4M7 4l4 4-4 4'
      : 'M11 4 7 8l4 4M5 4 1 8l4 4'
    : direction === 'right'
      ? 'M1 8h10M7 4l4 4-4 4'
      : 'M11 8H1m4-4L1 8l4 4';

  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    >
      <path d={path} />
    </svg>
  );
}

function TransferList({
  className,
  defaultValue = [],
  items = [],
  onChange,
  showAllActions = false,
  showSelectAll = false,
  sourceTitle = 'Available',
  targetTitle = 'Selected',
  value,
}) {
  const generatedId = useId();
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [sourceSelection, setSourceSelection] = useState([]);
  const [targetSelection, setTargetSelection] = useState([]);
  const [announcement, setAnnouncement] = useState('');
  const selectedIds = value ?? internalValue;
  const selectedSet = new Set(selectedIds);
  const sourceItems = items.filter(({ id }) => !selectedSet.has(id));
  const targetItems = items.filter(({ id }) => selectedSet.has(id));

  function commit(nextValue, movedItems, destinationTitle) {
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue, movedItems);
    setAnnouncement(
      `${movedItems.length} ${movedItems.length === 1 ? 'item' : 'items'} moved to ${destinationTitle}.`,
    );
  }

  function moveSelected(fromItems, selection, toTitle, toTarget) {
    const moving = fromItems.filter(({ id }) => selection.includes(id));
    if (!moving.length) return;
    const movingIds = new Set(moving.map(({ id }) => id));
    const nextValue = toTarget
      ? [...selectedIds, ...moving.map(({ id }) => id)]
      : selectedIds.filter((id) => !movingIds.has(id));
    commit(nextValue, moving, toTitle);
    if (toTarget) setSourceSelection([]);
    else setTargetSelection([]);
  }

  function moveAll(fromItems, toTitle, toTarget) {
    if (!fromItems.length) return;
    const movingIds = new Set(fromItems.map(({ id }) => id));
    const nextValue = toTarget
      ? [...selectedIds, ...fromItems.map(({ id }) => id)]
      : selectedIds.filter((id) => !movingIds.has(id));
    commit(nextValue, fromItems, toTitle);
    if (toTarget) setSourceSelection([]);
    else setTargetSelection([]);
  }

  function toggleSelection(id, selected, setter) {
    setter((current) =>
      selected
        ? current.includes(id)
          ? current
          : [...current, id]
        : current.filter((itemId) => itemId !== id),
    );
  }

  function renderItems(sideItems, selection, setSelection, side, sideId) {
    if (!sideItems.length) return <p className="rgi-transfer-list-empty">No items</p>;

    return sideItems.map((item, index) => {
      const { id, label, description } = item;
      const checked = selection.includes(id);
      const inputId = `${generatedId}-${sideId}-${index}`;
      return (
        <label
          className={cx('rgi-transfer-item', checked && 'rgi-transfer-item-selected')}
          htmlFor={inputId}
          key={id}
        >
          <TransferCheckbox
            id={inputId}
            label={`${label} ${side}`}
            checked={checked}
            onChange={(event) => toggleSelection(id, event.currentTarget.checked, setSelection)}
          />
          <span className="rgi-transfer-item-copy">
            <span className="rgi-transfer-item-label">{label}</span>
            {description != null && (
              <span className="rgi-transfer-item-description">{description}</span>
            )}
          </span>
        </label>
      );
    });
  }

  function renderSelectAll(sideItems, selection, setSelection, title, inputId) {
    if (!showSelectAll) return null;
    const allSelected = sideItems.length > 0 && sideItems.every(({ id }) => selection.includes(id));
    const partiallySelected = !allSelected && sideItems.some(({ id }) => selection.includes(id));

    return (
      <label
        className={cx(
          'rgi-transfer-select-all',
          !sideItems.length && 'rgi-transfer-select-all-disabled',
        )}
        htmlFor={inputId}
      >
        <TransferCheckbox
          id={inputId}
          label={`Select all ${title.toLowerCase()} items`}
          checked={allSelected}
          indeterminate={partiallySelected}
          disabled={!sideItems.length}
          onChange={(event) =>
            setSelection(event.currentTarget.checked ? sideItems.map(({ id }) => id) : [])
          }
        />
        <span>Select all</span>
      </label>
    );
  }

  return (
    <div className={cx('rgi-transfer-list', className)}>
      <section className="rgi-transfer-panel" aria-labelledby={`${generatedId}-source`}>
        <h3 className="rgi-transfer-heading" id={`${generatedId}-source`}>
          {sourceTitle}
          <span className="rgi-transfer-count">{sourceItems.length}</span>
        </h3>
        {renderSelectAll(
          sourceItems,
          sourceSelection,
          setSourceSelection,
          sourceTitle,
          `${generatedId}-select-all-source`,
        )}
        <fieldset className="rgi-transfer-items" aria-label={sourceTitle}>
          {renderItems(sourceItems, sourceSelection, setSourceSelection, sourceTitle, 'source')}
        </fieldset>
      </section>

      <fieldset className="rgi-transfer-actions" aria-label="Move items">
        <button
          className="rgi-transfer-action"
          type="button"
          aria-label={`Move selected to ${targetTitle}`}
          disabled={!sourceSelection.some((id) => sourceItems.some((item) => item.id === id))}
          onClick={() => moveSelected(sourceItems, sourceSelection, targetTitle, true)}
        >
          <TransferActionIcon direction="right" />
        </button>
        {showAllActions && (
          <button
            className="rgi-transfer-action rgi-transfer-action-all"
            type="button"
            aria-label={`Move all to ${targetTitle}`}
            disabled={!sourceItems.length}
            onClick={() => moveAll(sourceItems, targetTitle, true)}
          >
            <TransferActionIcon direction="right" all />
          </button>
        )}
        {showAllActions && (
          <button
            className="rgi-transfer-action rgi-transfer-action-all"
            type="button"
            aria-label={`Move all to ${sourceTitle}`}
            disabled={!targetItems.length}
            onClick={() => moveAll(targetItems, sourceTitle, false)}
          >
            <TransferActionIcon direction="left" all />
          </button>
        )}
        <button
          className="rgi-transfer-action"
          type="button"
          aria-label={`Move selected to ${sourceTitle}`}
          disabled={!targetSelection.some((id) => targetItems.some((item) => item.id === id))}
          onClick={() => moveSelected(targetItems, targetSelection, sourceTitle, false)}
        >
          <TransferActionIcon direction="left" />
        </button>
      </fieldset>

      <section className="rgi-transfer-panel" aria-labelledby={`${generatedId}-target`}>
        <h3 className="rgi-transfer-heading" id={`${generatedId}-target`}>
          {targetTitle}
          <span className="rgi-transfer-count">{targetItems.length}</span>
        </h3>
        {renderSelectAll(
          targetItems,
          targetSelection,
          setTargetSelection,
          targetTitle,
          `${generatedId}-select-all-target`,
        )}
        <fieldset className="rgi-transfer-items" aria-label={targetTitle}>
          {renderItems(targetItems, targetSelection, setTargetSelection, targetTitle, 'target')}
        </fieldset>
      </section>
      <span className="rgi-transfer-status" role="status" aria-live="polite">
        {announcement || `${sourceItems.length} available, ${targetItems.length} selected.`}
      </span>
    </div>
  );
}

export default TransferList;
