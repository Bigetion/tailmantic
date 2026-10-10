import { FileText, Heart, Image, Mail, Plus, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import { cx } from 'tailmantic';
import FloatingActionButtonComponent from '../components/FloatingActionButton.jsx';

const ACTIONS = [
  { label: 'Upload image', icon: Image },
  { label: 'New document', icon: FileText },
  { label: 'Send email', icon: Mail },
];

export default function FloatingActionButton() {
  const actionsId = useId();
  const triggerRef = useRef(null);
  const [created, setCreated] = useState(0);
  const [speedDialOpen, setSpeedDialOpen] = useState(false);
  const [primaryAnnouncement, setPrimaryAnnouncement] = useState('');
  const [quickActionAnnouncement, setQuickActionAnnouncement] = useState('');

  function selectAction(label) {
    setSpeedDialOpen(false);
    setQuickActionAnnouncement(`${label} selected.`);
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!speedDialOpen) return undefined;
    function handleKeyDown(event) {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      setSpeedDialOpen(false);
      triggerRef.current?.focus();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [speedDialOpen]);

  return (
    <div className="demo-stage">
      <section className="demo-section">
        <span className="demo-section-title">Primary and extended actions</span>
        <div className="demo-fab-stage">
          <div className="demo-fab-stage-copy">
            <strong>Workspace shortcuts</strong>
            <span>Create a draft or choose another common action.</span>
          </div>
          <div className="demo-fab-examples">
            <FloatingActionButtonComponent
              label="Create draft"
              onClick={() => {
                setCreated((count) => count + 1);
                setPrimaryAnnouncement('Draft created.');
              }}
            >
              <Plus size={21} aria-hidden="true" />
            </FloatingActionButtonComponent>
            <FloatingActionButtonComponent
              label="Add to favorites"
              variant="secondary"
              onClick={() => setPrimaryAnnouncement('Added to favorites.')}
            >
              <Heart size={18} aria-hidden="true" />
            </FloatingActionButtonComponent>
            <FloatingActionButtonComponent
              label="Compose a message"
              variant="extended"
              onClick={() => setPrimaryAnnouncement('Message composer opened.')}
            >
              <Mail size={16} aria-hidden="true" />
              Compose
            </FloatingActionButtonComponent>
          </div>
        </div>
        <span className="demo-note" role="status" aria-live="polite">
          {created
            ? `${created} draft${created === 1 ? '' : 's'} created.`
            : primaryAnnouncement || 'Primary, secondary, and extended action variants.'}
        </span>
      </section>

      <section className="demo-section">
        <span className="demo-section-title">Sizes</span>
        <fieldset className="demo-fab-size-group">
          <legend className="sr-only">Floating action button sizes</legend>
          <FloatingActionButtonComponent label="Create, small size" size="small">
            <Plus size={17} aria-hidden="true" />
          </FloatingActionButtonComponent>
          <FloatingActionButtonComponent label="Create, default size">
            <Plus size={21} aria-hidden="true" />
          </FloatingActionButtonComponent>
          <FloatingActionButtonComponent label="Create, large size" size="large">
            <Plus size={25} aria-hidden="true" />
          </FloatingActionButtonComponent>
          <span className="demo-note">Small · Default · Large</span>
        </fieldset>
      </section>

      <section className="demo-section">
        <span className="demo-section-title">Quick action speed dial</span>
        <div className="demo-fab-speed-dial">
          <fieldset
            className={cx(
              'demo-fab-speed-dial-actions',
              !speedDialOpen && 'demo-fab-speed-dial-actions-hidden',
            )}
            id={actionsId}
            hidden={!speedDialOpen}
          >
            <legend className="sr-only">Available quick actions</legend>
            {ACTIONS.map(({ label, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className="demo-fab-speed-dial-action"
                onClick={() => selectAction(label)}
              >
                <span>{label}</span>
                <Icon size={16} aria-hidden="true" />
              </button>
            ))}
          </fieldset>
          <FloatingActionButtonComponent
            label={speedDialOpen ? 'Close quick actions' : 'Open quick actions'}
            aria-expanded={speedDialOpen}
            aria-controls={actionsId}
            ref={triggerRef}
            onClick={() => {
              setQuickActionAnnouncement('');
              setSpeedDialOpen((open) => !open);
            }}
          >
            {speedDialOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Plus size={21} aria-hidden="true" />
            )}
          </FloatingActionButtonComponent>
        </div>
        <span className="demo-note" role="status" aria-live="polite">
          {quickActionAnnouncement ||
            (speedDialOpen
              ? 'Choose an action or press Escape to close.'
              : 'Open the floating button to reveal quick actions.')}
        </span>
      </section>
    </div>
  );
}
