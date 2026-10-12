import { Children, forwardRef } from 'react';
import { cx } from 'tailmantic';
import './avatar.styles.js';

const AvatarGroup = forwardRef(function AvatarGroup(
  { children, className, max = 5, role, total, ...props },
  ref,
) {
  const avatars = Children.toArray(children);
  const visibleCount = Number.isFinite(max) ? Math.max(0, Math.floor(max)) : avatars.length;
  const visibleAvatars = avatars.slice(0, visibleCount);
  const memberCount = Number.isFinite(total) ? Math.max(0, Math.floor(total)) : avatars.length;
  const overflow = Math.max(0, memberCount - visibleAvatars.length);

  return (
    <span
      {...props}
      ref={ref}
      className={cx(
        'rgi-avatar-group',
        'rgi-avatar-group-stacked',
        className,
      )}
      role={role ?? 'group'}
    >
      {visibleAvatars}
      {overflow > 0 && (
        <span
          className="rgi-avatar rgi-avatar-overflow"
          role="img"
          aria-label={`${overflow} additional ${overflow === 1 ? 'member' : 'members'}`}
        >
          +{overflow}
        </span>
      )}
    </span>
  );
});

export default AvatarGroup;
