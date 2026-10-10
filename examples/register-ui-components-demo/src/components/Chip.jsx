import { X } from 'lucide-react';
import { forwardRef } from 'react';
import { cx } from 'tailmantic';

const Chip = forwardRef(function Chip(
  {
    children,
    className,
    color = 'default',
    deleteIcon = <X size={12} aria-hidden="true" />,
    deleteLabel,
    disabled = false,
    icon,
    onClick,
    onDelete,
    selected = false,
    size = 'medium',
    variant = 'filled',
    ...props
  },
  ref,
) {
  const classes = cx(
    'ui-chip',
    `ui-chip-${variant}`,
    color !== 'default' && `ui-chip-${color}`,
    size === 'small' && 'ui-chip-small',
    onClick && 'ui-chip-interactive',
    selected && 'ui-chip-selected',
    disabled && 'ui-chip-disabled',
    className,
  );
  const content = (
    <>
      {icon && (
        <span className="ui-chip-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </>
  );

  if (onDelete) {
    const accessibleLabel =
      deleteLabel ?? (typeof children === 'string' ? `Remove ${children}` : 'Remove item');

    return (
      <span {...props} className={classes} ref={ref} aria-disabled={disabled || undefined}>
        {content}
        <button
          className="ui-chip-delete"
          type="button"
          aria-label={accessibleLabel}
          disabled={disabled}
          onClick={onDelete}
        >
          {deleteIcon}
        </button>
      </span>
    );
  }

  if (onClick) {
    return (
      <button
        {...props}
        className={classes}
        type="button"
        aria-pressed={selected}
        disabled={disabled}
        onClick={onClick}
        ref={ref}
      >
        {content}
      </button>
    );
  }

  return (
    <span {...props} className={classes} ref={ref} aria-disabled={disabled || undefined}>
      {content}
    </span>
  );
});

export default Chip;
