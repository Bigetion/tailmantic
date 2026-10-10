import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Modal() {
  const [open, setOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [systemHighContrast, setSystemHighContrast] = useState(false);
  const [systemReducedMotion, setSystemReducedMotion] = useState(false);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const highContrastEnabled = highContrast || systemHighContrast;
  const reducedMotionEnabled = reducedMotion || systemReducedMotion;

  useEffect(() => {
    const contrastPreference = window.matchMedia(
      '(prefers-contrast: more), (forced-colors: active)',
    );
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreferences = () => {
      setSystemHighContrast(contrastPreference.matches);
      setSystemReducedMotion(motionPreference.matches);
    };
    updatePreferences();
    contrastPreference.addEventListener('change', updatePreferences);
    motionPreference.addEventListener('change', updatePreferences);
    return () => {
      contrastPreference.removeEventListener('change', updatePreferences);
      motionPreference.removeEventListener('change', updatePreferences);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    dialogRef.current?.focus();
    return () => {
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open]);

  return (
    <section className="demo-section">
      <span className="demo-section-title">Modal surface</span>
      <div className="demo-row">
        <label className="demo-modal-option">
          <input
            type="checkbox"
            checked={highContrast}
            onChange={(event) => setHighContrast(event.target.checked)}
          />{' '}
          High contrast preview{systemHighContrast ? ' · system preference active' : ''}
        </label>
        <label className="demo-modal-option">
          <input
            type="checkbox"
            checked={reducedMotion}
            onChange={(event) => setReducedMotion(event.target.checked)}
          />{' '}
          Reduced motion preview{systemReducedMotion ? ' · system preference active' : ''}
        </label>
      </div>
      <button
        ref={triggerRef}
        type="button"
        className="demo-modal-trigger"
        onClick={() => setOpen(true)}
      >
        Open modal
      </button>
      {open && (
        <div className="demo-modal-backdrop">
          <button
            type="button"
            className="demo-modal-dismiss"
            aria-label="Close modal"
            onClick={() => setOpen(false)}
          />
          <section
            className={`demo-modal${highContrastEnabled ? ' demo-modal-high-contrast' : ''}${reducedMotionEnabled ? ' demo-modal-reduced-motion' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-modal-title"
            tabIndex={-1}
            ref={dialogRef}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setOpen(false);
              if (event.key === 'Tab') {
                const focusable = Array.from(
                  dialogRef.current?.querySelectorAll(
                    'button:not(:disabled), input:not(:disabled)',
                  ) ?? [],
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (
                  event.shiftKey &&
                  (document.activeElement === first || document.activeElement === dialogRef.current)
                ) {
                  event.preventDefault();
                  last?.focus();
                } else if (!event.shiftKey && document.activeElement === dialogRef.current) {
                  event.preventDefault();
                  first?.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                  event.preventDefault();
                  first?.focus();
                }
              }
            }}
          >
            <header>
              <h2 id="demo-modal-title">Share this workspace</h2>
              <button type="button" aria-label="Close modal" onClick={() => setOpen(false)}>
                <X size={17} />
              </button>
            </header>
            <p>Invite teammates to collaborate on projects and updates.</p>
            <label htmlFor="demo-modal-email">Email address</label>
            <input id="demo-modal-email" type="email" placeholder="name@example.com" />
            <footer>
              <button type="button" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button type="button" className="demo-modal-primary" onClick={() => setOpen(false)}>
                Send invite
              </button>
            </footer>
          </section>
        </div>
      )}
    </section>
  );
}
