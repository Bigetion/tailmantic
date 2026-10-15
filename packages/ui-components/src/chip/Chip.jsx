import { forwardRef } from 'react';
import { cx } from 'tailmantic';
import './chip.styles.js';

const Chip = forwardRef(function Chip(
  {
    children,
    className,
    color = 'default',
    deleteLabel,
    deleteIcon = '×',
    disabled = false,
    icon: Icon,
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
    'tm-chip',
    `tm-chip-${variant}`,
    color !== 'default' && `tm-chip-${color}`,
    size === 'small' && 'tm-chip-small',
    onClick && 'tm-chip-interactive',
    selected && 'tm-chip-selected',
    disabled && 'tm-chip-disabled',
    className,
  );
  const content = (
    <>
      {Icon && <Icon className="tm-chip-icon" size={14} aria-hidden="true" />}
      <span>{children}</span>
    </>
  );

  if (onDelete) {
    const label =
      deleteLabel ?? (typeof children === 'string' ? `Remove ${children}` : 'Remove item');
    return (
      <span {...props} className={classes} ref={ref}>
        {content}
        <button
          className="tm-chip-delete"
          type="button"
          aria-label={label}
          disabled={disabled}
          onClick={onDelete}
        >
          <span aria-hidden="true">{deleteIcon}</span>
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
    <span {...props} className={classes} ref={ref}>
      {content}
    </span>
  );
});

export default Chip;
