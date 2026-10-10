import { forwardRef, useCallback, useEffect, useId, useRef, useState } from 'react';
import { cx } from 'tailmantic';
import Button from '../button/Button.jsx';
import './button-group.styles.js';

const ButtonGroup = forwardRef(function ButtonGroup(
  { children, className, orientation = 'horizontal', variant = 'default', ...props },
  ref,
) {
  return (
    <div
      {...props}
      ref={ref}
      role={props.role ?? 'group'}
      className={cx(
        'rgi-button-group',
        variant === 'segmented' && 'rgi-button-group-segmented',
        orientation === 'vertical' && 'rgi-button-group-vertical',
        variant === 'spaced' && 'rgi-button-group-spaced',
        className,
      )}
    >
      {children}
    </div>
  );
});

const SplitButtonGroup = forwardRef(function SplitButtonGroup(
  {
    actions = [],
    'aria-label': ariaLabel = 'Split button actions',
    className,
    disabled = false,
    onAction,
    onOpenChange,
    onPrimaryClick,
    open,
    defaultOpen = false,
    primaryIcon,
    primaryLabel,
    ...props
  },
  ref,
) {
  const generatedId = useId();
  const menuId = `${generatedId}-menu`;
  const rootRef = useRef(null);
  const toggleRef = useRef(null);
  const isControlled = open !== undefined;
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = isControlled ? open : internalOpen;

  const updateOpen = useCallback((nextOpen) => {
    if (!isControlled) setInternalOpen(nextOpen);
    onOpenChange?.(nextOpen);
  }, [isControlled, onOpenChange]);

  useEffect(() => {
    if (!isOpen) return undefined;
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) updateOpen(false);
    }
    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => document.removeEventListener('pointerdown', handlePointerDown, true);
  }, [isOpen, updateOpen]);

  return (
    <div
      {...props}
      ref={(node) => {
        rootRef.current = node;
        if (typeof ref === 'function') ref(node);
        else if (ref) ref.current = node;
      }}
      className={cx('rgi-split-button-group', className)}
      role="group"
      aria-label={ariaLabel}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          event.preventDefault();
          updateOpen(false);
          toggleRef.current?.focus();
        }
        props.onKeyDown?.(event);
      }}
    >
      <Button
        className="rgi-split-button-primary"
        size="small"
        uppercase={false}
        disabled={disabled}
        onClick={(event) => {
          updateOpen(false);
          onPrimaryClick?.(event);
        }}
      >
        {primaryIcon}
        {primaryLabel}
      </Button>
      <Button
        ref={toggleRef}
        className="rgi-split-button-toggle"
        size="small"
        variant="text"
        uppercase={false}
        disabled={disabled}
        aria-label="More actions"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => updateOpen(!isOpen)}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Button>
      {isOpen && (
        <div className="rgi-split-button-menu" id={menuId} role="group" aria-label="More actions">
          {actions.map((action) => (
            <button
              className="rgi-split-button-menu-item"
              key={action.value}
              type="button"
              disabled={action.disabled}
              onClick={() => {
                onAction?.(action.value, action);
                updateOpen(false);
              }}
            >
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

export { SplitButtonGroup };
export default ButtonGroup;
