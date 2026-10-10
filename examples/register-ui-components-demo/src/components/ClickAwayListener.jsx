import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function ClickAwayListener() {
  const containerRef = useRef(null);
  const portalRef = useRef(null);
  const controlsRef = useRef(null);
  const [open, setOpen] = useState(true);
  const [portaled, setPortaled] = useState(false);
  const [message, setMessage] = useState('Click outside the panel to dismiss it.');

  useEffect(() => {
    function handleOutsideInteraction(event) {
      const insidePanel = containerRef.current?.contains(event.target);
      const insidePortal = portalRef.current?.contains(event.target);
      const insideControls = controlsRef.current?.contains(event.target);
      if (!insidePanel && !insidePortal && !insideControls) {
        setOpen(false);
        setMessage(
          `Click-away detected by ${event.pointerType || event.type}. Reopen the panel to try again.`,
        );
      }
    }

    document.addEventListener('pointerdown', handleOutsideInteraction);
    return () => document.removeEventListener('pointerdown', handleOutsideInteraction);
  }, []);

  const panel = (
    <div className="demo-click-away-panel" ref={portaled ? portalRef : containerRef}>
      <strong>{portaled ? 'Portaled panel' : 'Floating panel'}</strong>
      <span>Clicks or taps inside this surface keep it open.</span>
    </div>
  );
  const portalPanel =
    open && portaled && typeof document !== 'undefined' ? createPortal(panel, document.body) : null;

  return (
    <section className="demo-section">
      <span className="demo-section-title">Outside interaction</span>
      <div className="demo-click-away-stage">
        {open ? (
          !portaled && panel
        ) : (
          <button type="button" className="demo-click-away-reopen" onClick={() => setOpen(true)}>
            Reopen panel
          </button>
        )}
        {open && portalPanel}
        <div ref={controlsRef}>
          <button
            type="button"
            className="demo-click-away-reopen"
            aria-pressed={portaled}
            onClick={() => {
              setPortaled((value) => !value);
              setOpen(true);
              setMessage('Click or tap outside the panel to dismiss it.');
            }}
          >
            {portaled ? 'Render inside stage' : 'Render in portal'}
          </button>
        </div>
        <span className="demo-note">{message}</span>
      </div>
    </section>
  );
}
