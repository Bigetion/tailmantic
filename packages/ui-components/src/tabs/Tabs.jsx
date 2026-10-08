import { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react';
import { cx } from 'tailmantic';
import './tabs.styles.js';

// Improvement 6 — scroll button SVG chevrons
function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 10l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const Tabs = forwardRef(function Tabs(
  {
    tabs = [],
    className,
    value: controlledValue,
    defaultValue,
    onChange,
    orientation = 'horizontal',
    activationMode = 'automatic',
    ariaLabel = 'Tabs',
    onKeyDown,
    variant = 'standard',
    size = 'md',
    ...props
  },
  ref,
) {
  const id = useId();
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? tabs.findIndex((tab) => !tab.disabled),
  );
  const current = controlledValue ?? internalValue;
  const hasValueMatch = tabs.some((tab) => tab.value === current);
  const selectedIndex =
    typeof current === 'number' && !hasValueMatch
      ? current
      : tabs.findIndex((tab) => tab.value === current);
  const safeIndex =
    selectedIndex >= 0 && selectedIndex < tabs.length && !tabs[selectedIndex]?.disabled
      ? selectedIndex
      : tabs.findIndex((tab) => !tab.disabled);

  function select(index, event) {
    const tab = tabs[index];
    if (!tab || tab.disabled) return;
    if (controlledValue === undefined) setInternalValue(tab.value ?? index);
    onChange?.(event, tab.value ?? index);
  }

  // Improvement 6 — scroll state for scrollable variant
  const listScrollRef = useRef(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = listScrollRef.current;
    if (!el) return;
    if (orientation === 'vertical') {
      setCanScrollBack(el.scrollTop > 1);
      setCanScrollForward(el.scrollTop + el.clientHeight < el.scrollHeight - 1);
    } else {
      setCanScrollBack(el.scrollLeft > 1);
      setCanScrollForward(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    }
  }, [orientation]);

  useEffect(() => {
    if (variant !== 'scrollable') return;
    const el = listScrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });

    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      ro.disconnect();
    };
  }, [variant, updateScrollState]);

  const scrollTabs = useCallback(
    (direction) => {
      const el = listScrollRef.current;
      if (!el) return;
      const amount = el.clientWidth * 0.6;
      if (orientation === 'vertical') {
        el.scrollBy({ top: direction === 'forward' ? amount : -amount, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: direction === 'forward' ? amount : -amount, behavior: 'smooth' });
      }
    },
    [orientation],
  );

  // Keyboard handler
  const handleKeyDown = (event) => {
    onKeyDown?.(event);
    if (
      event.defaultPrevented ||
      !['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)
    )
      return;
    const backwards =
      orientation === 'vertical' ? event.key === 'ArrowUp' : event.key === 'ArrowLeft';
    if (
      orientation === 'vertical' &&
      !['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)
    )
      return;
    if (
      orientation === 'horizontal' &&
      !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)
    )
      return;
    event.preventDefault();
    const enabled = tabs
      .map((tab, index) => (!tab.disabled ? index : -1))
      .filter((index) => index >= 0);
    const tablist = event.currentTarget;
    const focusedTab = [...tablist.querySelectorAll('[role="tab"]')].indexOf(
      tablist.ownerDocument.activeElement,
    );
    const focusedIndex = focusedTab >= 0 ? focusedTab : safeIndex;
    const currentPosition = enabled.indexOf(focusedIndex);
    const nextIndex =
      event.key === 'Home'
        ? enabled[0]
        : event.key === 'End'
          ? enabled.at(-1)
          : enabled[
              (currentPosition + (backwards ? enabled.length - 1 : 1)) % enabled.length
            ];
    const button = tablist.ownerDocument.getElementById(`${id}-tab-${nextIndex}`);
    button?.focus();
    if (activationMode === 'automatic') select(nextIndex, event);
  };

  // Shared tablist content (tab buttons)
  const tabButtons = tabs.map((tab, index) => (
    <button
      key={tab.value ?? tab.id ?? index}
      id={`${id}-tab-${index}`}
      type="button"
      role="tab"
      className={cx('rgi-tab', safeIndex === index && 'rgi-tab-selected')}
      aria-selected={safeIndex === index}
      aria-controls={`${id}-panel-${index}`}
      tabIndex={safeIndex === index ? 0 : -1}
      disabled={tab.disabled}
      onClick={(event) => select(index, event)}
    >
      {/* Improvement 4 — rgi-tab-content wrapper */}
      <span className="rgi-tab-content">
        {tab.icon && (
          <span className="rgi-tab-icon" aria-hidden="true">
            {tab.icon}
          </span>
        )}
        {tab.label}
        {/* Improvement 3 — badge */}
        {tab.badge !== undefined && (
          <span className="rgi-tab-badge">{tab.badge}</span>
        )}
      </span>
      {/* Improvement 2 — animated indicator, sibling outside rgi-tab-content */}
      {safeIndex === index && <span className="rgi-tab-indicator" aria-hidden="true" />}
    </button>
  ));

  // Build variant class for the list
  const variantClass =
    variant === 'scrollable'
      ? 'rgi-tabs-list-scrollable'
      : variant === 'centered'
        ? 'rgi-tabs-list-centered'
        : variant === 'fullwidth'
          ? 'rgi-tabs-list-fullwidth'
          : null;

  // Improvement 5 — size class on outer div
  const sizeClass = size === 'sm' ? 'rgi-tabs-sm' : size === 'lg' ? 'rgi-tabs-lg' : null;

  return (
    <div
      {...props}
      ref={ref}
      className={cx('rgi-tabs', `rgi-tabs-${orientation}`, sizeClass, className)}
    >
      {/* Improvement 6 — scrollable variant wraps list in container with chevron buttons */}
      {variant === 'scrollable' ? (
        <div className="rgi-tabs-scrollable-container">
          <button
            type="button"
            className="rgi-tabs-scroll-btn"
            aria-label={orientation === 'vertical' ? 'Scroll tabs up' : 'Scroll tabs left'}
            disabled={!canScrollBack}
            onClick={() => scrollTabs('back')}
          >
            {orientation === 'vertical' ? <ChevronUp /> : <ChevronLeft />}
          </button>
          <div
            ref={listScrollRef}
            className={cx('rgi-tabs-list', variantClass)}
            role="tablist"
            aria-label={ariaLabel}
            aria-orientation={orientation}
            onKeyDown={handleKeyDown}
          >
            {tabButtons}
          </div>
          <button
            type="button"
            className="rgi-tabs-scroll-btn"
            aria-label={orientation === 'vertical' ? 'Scroll tabs down' : 'Scroll tabs right'}
            disabled={!canScrollForward}
            onClick={() => scrollTabs('forward')}
          >
            {orientation === 'vertical' ? <ChevronDown /> : <ChevronRight />}
          </button>
        </div>
      ) : (
        <div
          className={cx('rgi-tabs-list', variantClass)}
          role="tablist"
          aria-label={ariaLabel}
          aria-orientation={orientation}
          onKeyDown={handleKeyDown}
        >
          {tabButtons}
        </div>
      )}

      {tabs.map((tab, index) => (
        <div
          key={tab.value ?? tab.id ?? index}
          id={`${id}-panel-${index}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${index}`}
          tabIndex={tab.tabIndex ?? 0}
          className="rgi-tab-panel"
          hidden={index !== safeIndex}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
});

export default Tabs;
