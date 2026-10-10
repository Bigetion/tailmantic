import { forwardRef } from 'react';
import { cx } from 'tailmantic';

const Badge = forwardRef(function Badge(
  {
    badgeContent,
    badgeLabel,
    children,
    className,
    color = 'primary',
    invisible = false,
    max = 99,
    overlap = 'rectangular',
    showZero = false,
    variant = 'standard',
    ...props
  },
  ref,
) {
  const isDot = variant === 'dot';
  const isEmpty = badgeContent == null || badgeContent === '' || (badgeContent === 0 && !showZero);
  const content =
    typeof badgeContent === 'number' && !isDot && badgeContent > max ? `${max}+` : badgeContent;
  const badgeAccessibility = badgeLabel
    ? { role: 'img', 'aria-label': badgeLabel }
    : { 'aria-hidden': true };

  if (badgeContent === undefined && !isDot) {
    return (
      <span {...props} ref={ref} className={cx('ui-badge', `ui-badge-${color}`, className)}>
        {children}
      </span>
    );
  }

  return (
    <span {...props} ref={ref} className={cx('ui-badge-root', className)}>
      {children}
      {!invisible && (isDot || !isEmpty) && (
        <span
          className={cx(
            'ui-badge',
            `ui-badge-${color}`,
            `ui-badge-${variant}`,
            `ui-badge-overlap-${overlap}`,
          )}
          {...badgeAccessibility}
        >
          {!isDot && content}
        </span>
      )}
    </span>
  );
});

export default Badge;
