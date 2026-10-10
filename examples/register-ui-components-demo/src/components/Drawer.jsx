import { forwardRef, useEffect, useRef } from 'react';
import { cx } from 'tailmantic';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const Drawer = forwardRef(function Drawer(
  {
    children,
    className,
    closeOnBackdrop = true,
    closeOnEscape = true,
    onClose,
    onKeyDown,
    open = false,
    variant = 'temporary',
    'aria-label': ariaLabel = 'Navigation drawer',
    ...props
  },
  forwardedRef,
) {
  const drawerRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  function setDrawerRef(node) {
    drawerRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  useEffect(() => {
    if (!open || variant !== 'temporary') return undefined;

    const previouslyFocused = document.activeElement;
    drawerRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape' && closeOnEscape) {
        onCloseRef.current?.(event);
        return;
      }
      if (event.key !== 'Tab') return;

      const drawer = drawerRef.current;
      const focusable = [...(drawer?.querySelectorAll(FOCUSABLE) ?? [])].filter(
        (element) => !element.closest('[hidden]') && element.getAttribute('aria-hidden') !== 'true',
      );
      const activeIndex = focusable.indexOf(document.activeElement);

      if (focusable.length === 0) {
        event.preventDefault();
        drawer?.focus();
      } else if (event.shiftKey && (activeIndex <= 0 || document.activeElement === drawer)) {
        event.preventDefault();
        focusable[focusable.length - 1].focus();
      } else if (!event.shiftKey && activeIndex === focusable.length - 1) {
        event.preventDefault();
        focusable[0].focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, [closeOnEscape, open, variant]);

  if (variant === 'temporary' && !open) return null;

  const isTemporary = variant === 'temporary';
  const Surface = isTemporary ? 'div' : 'aside';

  return (
    <div className={cx('ui-drawer-root', `ui-drawer-${variant}`, open && 'ui-drawer-open')}>
      {isTemporary && (
        <button
          type="button"
          className="ui-drawer-backdrop"
          aria-label="Close drawer"
          tabIndex={open ? 0 : -1}
          onClick={(event) => closeOnBackdrop && onCloseRef.current?.(event)}
        />
      )}
      <Surface
        {...props}
        ref={setDrawerRef}
        className={cx('ui-drawer', isTemporary && 'ui-drawer-surface-temporary', className)}
        role={isTemporary ? 'dialog' : undefined}
        aria-label={ariaLabel}
        aria-modal={isTemporary ? 'true' : undefined}
        hidden={variant === 'persistent' && !open}
        tabIndex={isTemporary ? -1 : props.tabIndex}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (!isTemporary || event.defaultPrevented || event.key !== 'Tab') return;
          const focusable = [...event.currentTarget.querySelectorAll(FOCUSABLE)].filter(
            (element) =>
              !element.closest('[hidden]') && element.getAttribute('aria-hidden') !== 'true',
          );
          if (
            event.shiftKey &&
            (document.activeElement === focusable[0] ||
              document.activeElement === event.currentTarget)
          ) {
            event.preventDefault();
            focusable[focusable.length - 1]?.focus();
          } else if (
            !event.shiftKey &&
            document.activeElement === focusable[focusable.length - 1]
          ) {
            event.preventDefault();
            focusable[0]?.focus();
          }
        }}
      >
        {children}
      </Surface>
    </div>
  );
});

export default Drawer;
