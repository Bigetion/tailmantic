import { forwardRef, useState } from 'react';
import { cx } from 'tailmantic';
import './rating.styles.js';

const Rating = forwardRef(function Rating(
  {
    className,
    value,
    defaultValue = 0,
    onChange,
    max = 5,
    precision,
    name,
    label = 'Rating',
    disabled = false,
    readOnly = false,
    ...props
  },
  ref,
) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState(null);
  const safeMax = Number.isInteger(max) && max > 0 ? max : 5;
  const step = Number.isFinite(precision) && precision > 0 ? precision : 1;
  const precisionDigits = Math.min(8, (String(step).split('.')[1] ?? '').length);
  const rating = Math.min(safeMax, Math.max(0, value ?? internalValue));

  function choose(nextValue) {
    if (disabled || readOnly) return;
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue);
  }

  function handleKeyDown(event, currentValue) {
    let nextValue;
    if (event.key === 'ArrowRight' || event.key === 'ArrowUp')
      nextValue = Math.min(safeMax, currentValue + step);
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown')
      nextValue = Math.max(precision === undefined ? 1 : 0, currentValue - step);
    else if (event.key === 'Home') nextValue = precision === undefined ? 1 : 0;
    else if (event.key === 'End') nextValue = safeMax;
    else return;
    event.preventDefault();
    nextValue = Number(
      Math.min(safeMax, Math.max(precision === undefined ? 1 : 0, nextValue)).toFixed(
        precisionDigits,
      ),
    );
    choose(nextValue);
    if (precision !== undefined) setHoverValue(null);
    if (precision === undefined) {
      event.currentTarget.parentElement
        ?.querySelector(`[data-rating-value="${nextValue}"]`)
        ?.focus();
    }
  }

  if (precision !== undefined && !readOnly) {
    const activeRating = hoverValue ?? rating;

    function valueFromPointer(event) {
      const star = event.target.closest('[data-rating-star]');
      if (!star) return null;
      const bounds = star.getBoundingClientRect();
      const position = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
      const fraction = Math.max(step, Math.ceil(position / step) * step);
      const nextValue = Number(
        (Number(star.dataset.ratingStar) - 1 + fraction).toFixed(precisionDigits),
      );
      return Math.min(safeMax, nextValue);
    }

    return (
      <div
        {...props}
        ref={ref}
        className={cx('rgi-rating-precision', disabled && 'rgi-rating-disabled', className)}
        role="slider"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={safeMax}
        aria-valuenow={activeRating}
        aria-valuetext={`${activeRating.toFixed(Math.max(1, precisionDigits))} out of ${safeMax} stars`}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : 0}
        onPointerMove={(event) => {
          const nextValue = valueFromPointer(event);
          if (nextValue !== null) setHoverValue(nextValue);
        }}
        onPointerLeave={() => setHoverValue(null)}
        onPointerDown={(event) => {
          const nextValue = valueFromPointer(event);
          if (nextValue !== null) choose(nextValue);
        }}
        onKeyDown={(event) => handleKeyDown(event, activeRating)}
      >
        {Array.from({ length: safeMax }, (_, index) => {
          const starValue = index + 1;
          const fill = Math.max(0, Math.min(100, (activeRating - index) * 100));
          return (
            <span
              className="rgi-rating-precision-star"
              data-rating-star={starValue}
              key={starValue}
              aria-hidden="true"
            >
              <span className="rgi-rating-precision-empty">☆</span>
              <span className="rgi-rating-precision-fill" style={{ width: `${fill}%` }}>
                ★
              </span>
            </span>
          );
        })}
      </div>
    );
  }

  if (readOnly) {
    return (
      <div
        {...props}
        ref={ref}
        className={cx('rgi-rating', 'rgi-rating-readonly', className)}
        role="img"
        aria-label={`${rating} out of ${safeMax} stars`}
      >
        {name && (
          <input className="rgi-rating-form-value" type="hidden" name={name} value={rating} />
        )}
        {Array.from({ length: safeMax }, (_, index) => index + 1).map((starValue) => (
          <span
            className={cx(
              'rgi-rating-choice-star',
              starValue <= rating && 'rgi-rating-choice-star-selected',
            )}
            aria-hidden="true"
            key={starValue}
          >
            {starValue <= rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      {...props}
      ref={ref}
      className={cx('rgi-rating', disabled && 'rgi-rating-disabled', className)}
      role="radiogroup"
      aria-label={label}
    >
      {Array.from({ length: safeMax }, (_, index) => {
        const starValue = index + 1;
        const checked = rating === starValue;
        return (
          // biome-ignore lint/a11y/useSemanticElements: Rating uses roving-focus buttons as the selectable stars in a radio group.
          <button
            className="rgi-rating-choice"
            type="button"
            role="radio"
            aria-checked={checked}
            aria-label={`${starValue} ${starValue === 1 ? 'star' : 'stars'}`}
            data-rating-value={starValue}
            tabIndex={rating === 0 ? (starValue === 1 ? 0 : -1) : checked ? 0 : -1}
            disabled={disabled}
            key={starValue}
            onClick={() => choose(starValue)}
            onKeyDown={(event) => handleKeyDown(event, starValue)}
          >
            <span
              className={cx(
                'rgi-rating-choice-star',
                starValue <= rating && 'rgi-rating-choice-star-selected',
              )}
              aria-hidden="true"
            >
              {starValue <= rating ? '★' : '☆'}
            </span>
          </button>
        );
      })}
      {name && <input className="rgi-rating-form-value" type="hidden" name={name} value={rating} />}
    </div>
  );
});

export default Rating;
