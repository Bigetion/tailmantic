import { useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import ClickAwayListenerComponent from '../components/ClickAwayListener.jsx';

export default function ClickAwayListener() {
  const portalRef = useRef(null);
  const [open, setOpen] = useState(true);
  const [portaled, setPortaled] = useState(false);
  const [message, setMessage] = useState('Click outside the panel to dismiss it.');
  const ignoreRefs = useMemo(() => [portalRef], []);

  const panel = (
    <div className="demo-click-away-panel" ref={portaled ? portalRef : undefined}>
      <strong>{portaled ? 'Portaled panel' : 'Floating panel'}</strong>
      <span>Clicks or taps inside this surface keep it open.</span>
    </div>
  );
  const portalPanel =
    open && portaled && typeof document !== 'undefined' ? createPortal(panel, document.body) : null;

  return (
    <section className="demo-section">
      <span className="demo-section-title">Outside interaction</span>
      <ClickAwayListenerComponent
        className="demo-click-away-stage"
        ignoreRefs={ignoreRefs}
        onClickAway={(event) => {
          setOpen(false);
          setMessage(
            `Click-away detected by ${event.pointerType || event.type}. Reopen the panel to try again.`,
          );
        }}
      >
        {open ? (
          !portaled && panel
        ) : (
          <button type="button" className="demo-click-away-reopen" onClick={() => setOpen(true)}>
            Reopen panel
          </button>
        )}
        {open && portalPanel}
        <div>
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
      </ClickAwayListenerComponent>
    </section>
  );
}
