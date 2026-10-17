import { forwardRef, useEffect, useId, useMemo, useRef, useState } from 'react';
import { cx } from 'tailmantic';
import ChevronIcon from '../internal/ChevronIcon.jsx';
import Popover from '../popover/Popover.jsx';
import Select from '../select/Select.jsx';
import './date-picker.styles.js';

const WEEKDAYS = 7;
const CALENDAR_CELLS = 42;
const YEAR_RANGE = 100;
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const WEEKDAY_NAMES = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const SHORT_WEEKDAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function parseDate(value, propName) {
  if (value == null || value === '') return null;
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    throw new TypeError(`${propName} must be an ISO date in YYYY-MM-DD format.`);
  }
  const [year, month, day] = value.split('-').map(Number);
  const parsed = createDate(year, month - 1, day);
  if (
    parsed.getFullYear() !== year ||
    parsed.getMonth() !== month - 1 ||
    parsed.getDate() !== day
  ) {
    throw new TypeError(`${propName} must be a valid calendar date.`);
  }
  return parsed;
}

function createDate(year, month, day) {
  const date = new Date(0);
  date.setFullYear(year, month, day);
  date.setHours(0, 0, 0, 0);
  return date;
}

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatDate(date, dateFormat) {
  const tokens = {
    d: String(date.getDate()),
    dd: String(date.getDate()).padStart(2, '0'),
    M: String(date.getMonth() + 1),
    MM: String(date.getMonth() + 1).padStart(2, '0'),
    MMM: MONTH_NAMES[date.getMonth()].slice(0, 3),
    MMMM: MONTH_NAMES[date.getMonth()],
    yy: String(date.getFullYear()).slice(-2),
    yyyy: String(date.getFullYear()).padStart(4, '0'),
  };
  return dateFormat.replace(/yyyy|MMMM|MMM|yy|dd|MM|d|M/g, (token) => tokens[token]);
}

function formatAccessibleDate(date) {
  return `${WEEKDAY_NAMES[date.getDay()]}, ${MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function startOfMonth(date) {
  return createDate(date.getFullYear(), date.getMonth(), 1);
}

function shiftMonth(date, amount) {
  const shifted = createDate(date.getFullYear(), date.getMonth() + amount, 1);
  const lastDay = createDate(shifted.getFullYear(), shifted.getMonth() + 1, 0).getDate();
  shifted.setDate(Math.min(date.getDate(), lastDay));
  return shifted;
}

function dateAtOffset(date, days) {
  return createDate(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function DatePicker(
  {
    className,
    buttonClassName,
    defaultValue,
    disabled = false,
    error = false,
    helperText,
    id,
    label,
    dateFormat = 'dd MMMM yyyy',
    maxDate,
    minDate,
    name,
    onChange,
    onClick,
    placeholder = 'Choose a date',
    popoverClassName,
    showMonthYearSelect = false,
    'aria-label': ariaLabel,
    value,
    ...buttonProps
  },
  forwardedRef,
) {
  const generatedId = useId();
  const triggerId = id ?? generatedId;
  const calendarId = `${triggerId}-calendar`;
  const helperId = `${triggerId}-helper`;
  const controlled = value !== undefined;
  const parsedValue = parseDate(
    controlled ? value : defaultValue,
    controlled ? 'value' : 'defaultValue',
  );
  const parsedMinDate = parseDate(minDate, 'minDate');
  const parsedMaxDate = parseDate(maxDate, 'maxDate');
  if (parsedMinDate && parsedMaxDate && parsedMinDate > parsedMaxDate) {
    throw new RangeError('minDate must be on or before maxDate.');
  }

  const [internalValue, setInternalValue] = useState(() =>
    parsedValue ? toISODate(parsedValue) : '',
  );
  const selectedValue = controlled ? (parsedValue ? toISODate(parsedValue) : '') : internalValue;
  const selectedDate = selectedValue ? parseDate(selectedValue, 'value') : null;
  const today = new Date();
  const initialDate = selectedDate ?? today;
  const [month, setMonth] = useState(() => startOfMonth(initialDate));
  const [focusedDate, setFocusedDate] = useState(() => toISODate(initialDate));
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const dayRefs = useRef(new Map());

  const monthLabel = `${MONTH_NAMES[month.getMonth()]} ${month.getFullYear()}`;
  const selectedLabel = selectedDate ? formatDate(selectedDate, dateFormat) : '';
  const previousMonthDisabled = parsedMinDate && startOfMonth(month) <= startOfMonth(parsedMinDate);
  const nextMonthDisabled = parsedMaxDate && startOfMonth(month) >= startOfMonth(parsedMaxDate);
  const currentYear = new Date().getFullYear();
  const firstYear = parsedMinDate
    ? parsedMinDate.getFullYear()
    : Math.min(currentYear - YEAR_RANGE, parsedValue?.getFullYear() ?? currentYear);
  const lastYear = parsedMaxDate
    ? parsedMaxDate.getFullYear()
    : Math.max(currentYear + YEAR_RANGE, parsedValue?.getFullYear() ?? currentYear);
  const years = useMemo(
    () => Array.from({ length: lastYear - firstYear + 1 }, (_, index) => firstYear + index),
    [firstYear, lastYear],
  );
  const weekdays = useMemo(() => {
    const firstSunday = createDate(2024, 0, 7);
    return Array.from(
      { length: WEEKDAYS },
      (_, index) => SHORT_WEEKDAY_NAMES[dateAtOffset(firstSunday, index).getDay()],
    );
  }, []);

  const calendarDays = useMemo(() => {
    const firstDay = startOfMonth(month);
    const firstVisible = dateAtOffset(firstDay, -firstDay.getDay());
    return Array.from({ length: CALENDAR_CELLS }, (_, index) => dateAtOffset(firstVisible, index));
  }, [month]);

  useEffect(() => {
    if (!open) return;
    dayRefs.current.get(focusedDate)?.focus();
  }, [focusedDate, open]);

  function setTriggerRef(node) {
    anchorRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  function handleOpen() {
    const initial = selectedDate ?? today;
    const boundedInitial =
      parsedMinDate && initial < parsedMinDate
        ? parsedMinDate
        : parsedMaxDate && initial > parsedMaxDate
          ? parsedMaxDate
          : initial;
    setFocusedDate(toISODate(boundedInitial));
    setMonth(startOfMonth(boundedInitial));
    setOpen(true);
  }

  function handleClose(_event, reason) {
    setOpen(false);
    if (reason === 'escapeKeyDown') anchorRef.current?.focus();
  }

  function selectDate(date) {
    if ((parsedMinDate && date < parsedMinDate) || (parsedMaxDate && date > parsedMaxDate)) return;
    const nextValue = toISODate(date);
    if (!controlled) setInternalValue(nextValue);
    onChange?.(nextValue);
    setOpen(false);
    anchorRef.current?.focus();
  }

  function changeMonth(amount) {
    const nextMonth = shiftMonth(month, amount);
    setMonth(startOfMonth(nextMonth));
    setFocusedDate(toISODate(nextMonth));
  }

  function changeDisplayedMonth(year, requestedMonthIndex) {
    let monthIndex = requestedMonthIndex;
    if (
      parsedMinDate &&
      year === parsedMinDate.getFullYear() &&
      monthIndex < parsedMinDate.getMonth()
    ) {
      monthIndex = parsedMinDate.getMonth();
    }
    if (
      parsedMaxDate &&
      year === parsedMaxDate.getFullYear() &&
      monthIndex > parsedMaxDate.getMonth()
    ) {
      monthIndex = parsedMaxDate.getMonth();
    }
    const monthStart = createDate(year, monthIndex, 1);
    const lastDay = createDate(year, monthIndex + 1, 0).getDate();
    let nextDate = createDate(year, monthIndex, Math.min(Number(focusedDate.slice(-2)), lastDay));
    if (parsedMinDate && nextDate < parsedMinDate) nextDate = parsedMinDate;
    if (parsedMaxDate && nextDate > parsedMaxDate) nextDate = parsedMaxDate;
    setMonth(monthStart);
    setFocusedDate(toISODate(nextDate));
  }

  function isMonthDisabled(year, monthIndex) {
    const firstDay = createDate(year, monthIndex, 1);
    const lastDay = createDate(year, monthIndex + 1, 0);
    return Boolean(
      (parsedMinDate && lastDay < parsedMinDate) || (parsedMaxDate && firstDay > parsedMaxDate),
    );
  }

  function isYearDisabled(year) {
    return Boolean(
      (parsedMinDate && year < parsedMinDate.getFullYear()) ||
        (parsedMaxDate && year > parsedMaxDate.getFullYear()),
    );
  }

  function handleDayKeyDown(event, date) {
    let nextDate;
    switch (event.key) {
      case 'ArrowLeft':
        nextDate = dateAtOffset(date, -1);
        break;
      case 'ArrowRight':
        nextDate = dateAtOffset(date, 1);
        break;
      case 'ArrowUp':
        nextDate = dateAtOffset(date, -WEEKDAYS);
        break;
      case 'ArrowDown':
        nextDate = dateAtOffset(date, WEEKDAYS);
        break;
      case 'Home':
        nextDate = dateAtOffset(date, -date.getDay());
        break;
      case 'End':
        nextDate = dateAtOffset(date, WEEKDAYS - date.getDay() - 1);
        break;
      case 'PageUp':
        nextDate = shiftMonth(date, event.shiftKey ? -12 : -1);
        break;
      case 'PageDown':
        nextDate = shiftMonth(date, event.shiftKey ? 12 : 1);
        break;
      default:
        return;
    }
    if (parsedMinDate && nextDate < parsedMinDate) nextDate = parsedMinDate;
    if (parsedMaxDate && nextDate > parsedMaxDate) nextDate = parsedMaxDate;
    event.preventDefault();
    setFocusedDate(toISODate(nextDate));
    setMonth(startOfMonth(nextDate));
  }

  return (
    <div className={cx('tm-date-picker', className)}>
      {label != null && (
        <label className="tm-date-picker-label" htmlFor={triggerId}>
          {label}
        </label>
      )}
      <button
        {...buttonProps}
        ref={setTriggerRef}
        id={triggerId}
        className={cx(
          'tm-date-picker-trigger',
          error && 'tm-date-picker-trigger-error',
          buttonClassName,
        )}
        type="button"
        disabled={disabled}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={calendarId}
        aria-label={ariaLabel ? `${ariaLabel}, ${selectedLabel || placeholder}` : undefined}
        aria-invalid={error || undefined}
        aria-describedby={helperText ? helperId : undefined}
        onClick={(event) => {
          onClick?.(event);
          if (event.defaultPrevented) return;
          if (open) setOpen(false);
          else handleOpen();
        }}
      >
        <span className="tm-date-picker-trigger-content">
          <svg
            className="tm-date-picker-trigger-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M16 3v4M8 3v4M3 10h18" />
          </svg>
          <span
            className={cx(
              'tm-date-picker-trigger-value',
              !selectedLabel && 'tm-date-picker-trigger-placeholder',
            )}
          >
            {selectedLabel || placeholder}
          </span>
        </span>
        <ChevronIcon className="tm-date-picker-trigger-chevron" size={16} />
      </button>
      {name && <input type="hidden" name={name} value={selectedValue} disabled={disabled} />}
      {helperText != null && (
        <span
          className={cx('tm-date-picker-helper', error && 'tm-date-picker-helper-error')}
          id={helperId}
        >
          {helperText}
        </span>
      )}
      <Popover
        anchorEl={anchorRef.current}
        open={open}
        onClose={handleClose}
        className={cx('tm-date-picker-popover', popoverClassName)}
        id={calendarId}
        label={typeof label === 'string' ? label : 'Choose date'}
        role="dialog"
      >
        <div className="tm-date-picker-calendar">
          <div className="tm-date-picker-header">
            {showMonthYearSelect ? (
              <div className="tm-date-picker-month-year-selects">
                <Select
                  className="tm-date-picker-month-select"
                  id={`${calendarId}-month`}
                  aria-label="Select month"
                  announceSelection={false}
                  disablePortal
                  value={String(month.getMonth())}
                  options={MONTH_NAMES.map((name, index) => ({
                    label: name,
                    value: String(index),
                    disabled: isMonthDisabled(month.getFullYear(), index),
                  }))}
                  onValueChange={(value) =>
                    changeDisplayedMonth(month.getFullYear(), Number(value))
                  }
                  popperClassName="tm-date-picker-select-options"
                />
                <Select
                  className="tm-date-picker-year-select"
                  id={`${calendarId}-year`}
                  aria-label="Select year"
                  announceSelection={false}
                  disablePortal
                  value={String(month.getFullYear())}
                  options={years.map((year) => ({
                    label: String(year),
                    value: String(year),
                    disabled: isYearDisabled(year),
                  }))}
                  onValueChange={(value) => changeDisplayedMonth(Number(value), month.getMonth())}
                  popperClassName="tm-date-picker-select-options"
                />
              </div>
            ) : (
              <span className="tm-date-picker-month-label" aria-live="polite">
                {monthLabel}
              </span>
            )}
            <div className="tm-date-picker-month-navigation">
              <button
                type="button"
                className="tm-date-picker-month-button"
                aria-label="Previous month"
                disabled={Boolean(previousMonthDisabled)}
                onClick={() => changeMonth(-1)}
              >
                <svg
                  className="tm-date-picker-month-button-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                className="tm-date-picker-month-button"
                aria-label="Next month"
                disabled={Boolean(nextMonthDisabled)}
                onClick={() => changeMonth(1)}
              >
                <svg
                  className="tm-date-picker-month-button-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
          <table className="tm-date-picker-grid" aria-label={monthLabel}>
            <thead>
              <tr>
                {weekdays.map((weekday, index) => (
                  <th
                    className="tm-date-picker-weekday"
                    scope="col"
                    key={toISODate(dateAtOffset(createDate(2024, 0, 7), index))}
                  >
                    {weekday}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }, (_, weekIndex) => {
                const week = calendarDays.slice(weekIndex * WEEKDAYS, (weekIndex + 1) * WEEKDAYS);
                return (
                  <tr key={toISODate(week[0])}>
                    {week.map((date) => {
                      const dateValue = toISODate(date);
                      const outsideMonth = date.getMonth() !== month.getMonth();
                      const isDisabled =
                        (parsedMinDate && date < parsedMinDate) ||
                        (parsedMaxDate && date > parsedMaxDate);
                      return (
                        <td className="tm-date-picker-cell" key={dateValue}>
                          <button
                            ref={(node) => {
                              if (node) dayRefs.current.set(dateValue, node);
                              else dayRefs.current.delete(dateValue);
                            }}
                            type="button"
                            className={cx(
                              'tm-date-picker-day',
                              outsideMonth && 'tm-date-picker-day-outside',
                              selectedValue === dateValue && 'tm-date-picker-day-selected',
                            )}
                            data-date={dateValue}
                            aria-label={formatAccessibleDate(date)}
                            aria-pressed={selectedValue === dateValue}
                            aria-current={dateValue === toISODate(today) ? 'date' : undefined}
                            tabIndex={focusedDate === dateValue ? 0 : -1}
                            disabled={Boolean(isDisabled)}
                            onFocus={() => setFocusedDate(dateValue)}
                            onKeyDown={(event) => handleDayKeyDown(event, date)}
                            onClick={() => selectDate(date)}
                          >
                            {date.getDate()}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Popover>
    </div>
  );
}

export default forwardRef(DatePicker);
