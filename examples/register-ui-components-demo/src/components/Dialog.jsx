import { X } from 'lucide-react';
import { forwardRef, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cx } from 'tailmantic';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const Dialog = forwardRef(function Dialog(
  {
    actions,
    children,
    className,
    closeLabel = 'Close dialog',
    description,
    onClose,
    open = false,
    title,
    ...props
  },
  forwardedRef,
) {
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const titleId = useId();
  const descriptionId = useId();
  onCloseRef.current = onClose;

  function setRef(node) {
    dialogRef.current = node;
    if (typeof forwardedRef === 'function') forwardedRef(node);
    else if (forwardedRef) forwardedRef.current = node;
  }

  useEffect(() => {
    if (!open) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const dialog = dialogRef.current;
    const getFocusableItems = () =>
      [...(dialog?.querySelectorAll(FOCUSABLE) ?? [])].filter(
        (item) => item.getClientRects().length > 0 && item.getAttribute('aria-hidden') !== 'true',
      );
    const initialTarget = getFocusableItems()[0] ?? dialog;
    initialTarget?.focus();

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onCloseRef.current?.(event, 'escapeKeyDown');
        return;
      }
      if (event.key !== 'Tab' || !dialog) return;

      const items = getFocusableItems();
      const activeIndex = items.indexOf(document.activeElement);
      if (items.length === 0) {
        event.preventDefault();
        dialog.focus();
      } else if (event.shiftKey && activeIndex <= 0) {
        event.preventDefault();
        items[items.length - 1].focus();
      } else if (!event.shiftKey && (activeIndex === -1 || activeIndex === items.length - 1)) {
        event.preventDefault();
        items[0].focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, [open]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    // biome-ignore lint/a11y/noStaticElementInteractions: Only backdrop clicks close the dialog.
    <div
      className="ui-dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onCloseRef.current?.(event, 'backdropClick');
      }}
    >
      <section
        {...props}
        ref={setRef}
        className={cx('ui-dialog', className)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title != null ? titleId : undefined}
        aria-describedby={description != null ? descriptionId : undefined}
        tabIndex={-1}
      >
        {(title != null || onClose) && (
          <header className="ui-dialog-header">
            {title != null && (
              <h2 id={titleId} className="ui-dialog-title">
                {title}
              </h2>
            )}
            {onClose && (
              <button
                type="button"
                className="ui-dialog-close"
                aria-label={closeLabel}
                onClick={(event) => onCloseRef.current?.(event, 'closeButtonClick')}
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </header>
        )}
        {description != null && (
          <p id={descriptionId} className="ui-dialog-description">
            {description}
          </p>
        )}
        {children != null && <div className="ui-dialog-content">{children}</div>}
        {actions != null && <footer className="ui-dialog-actions">{actions}</footer>}
      </section>
    </div>,
    document.body,
  );
});

export default Dialog;
