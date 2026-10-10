import { useState } from 'react';
import { createPortal } from 'react-dom';

export default function Portal() {
  const [visible, setVisible] = useState(false);
  const [targetMode, setTargetMode] = useState('body');
  const [customTarget, setCustomTarget] = useState(null);
  const portalContent =
    visible && typeof document !== 'undefined' && (targetMode === 'body' || customTarget)
      ? createPortal(
          <div
            className={`demo-portal-toast${targetMode === 'custom' ? ' demo-portal-toast-custom' : ''}`}
            role="status"
          >
            <span>Rendered in {targetMode === 'body' ? 'document.body' : 'custom mount'}</span>
            <button
              type="button"
              aria-label="Dismiss portal message"
              onClick={() => setVisible(false)}
            >
              Dismiss
            </button>
          </div>,
          targetMode === 'body' ? document.body : customTarget,
        )
      : null;

  return (
    <section className="demo-section">
      <span className="demo-section-title">Portal rendering</span>
      <div className="demo-portal-explainer demo-portal-clipping">
        <p>Choose between document.body and a custom mount node inside this clipped surface.</p>
        <div className="demo-row">
          <button
            type="button"
            className="demo-portal-trigger"
            aria-pressed={targetMode === 'body'}
            onClick={() => setTargetMode('body')}
          >
            Mount in body
          </button>
          <button
            type="button"
            className="demo-portal-trigger"
            aria-pressed={targetMode === 'custom'}
            onClick={() => setTargetMode('custom')}
          >
            Mount locally
          </button>
        </div>
        <button
          type="button"
          className="demo-portal-trigger"
          onClick={() => setVisible(true)}
          disabled={visible}
        >
          Render portal message
        </button>
        <div className="demo-portal-custom-target" ref={setCustomTarget}>
          Custom mount target · layer 1
        </div>
      </div>
      <span className="demo-note">
        Portal content escapes clipping when mounted in document.body; custom targets retain their
        local stacking context.
      </span>
      {portalContent}
    </section>
  );
}
