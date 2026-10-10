import { forwardRef } from 'react';
import { cx } from 'tailmantic';

const IconGlyph = forwardRef(function IconGlyph(
  {
    'aria-label': ariaLabel,
    className,
    color = 'currentColor',
    icon: Icon,
    size = 24,
    title,
    ...props
  },
  ref,
) {
  const accessibleLabel = ariaLabel ?? title;

  return (
    <Icon
      {...props}
      ref={ref}
      className={cx('ui-icon-glyph', className)}
      size={size}
      color={color}
      role={accessibleLabel ? 'img' : undefined}
      aria-label={accessibleLabel}
      aria-hidden={accessibleLabel ? undefined : true}
    />
  );
});

export default IconGlyph;
