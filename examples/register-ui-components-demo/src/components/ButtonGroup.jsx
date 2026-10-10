import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  ChevronDown,
  Code2,
  Eye,
  History,
  Save,
} from 'lucide-react';
import { useCallback, useId, useRef, useState } from 'react';
import { useClickAway } from './FloatingSurface.jsx';

const VIEWS = [
  { label: 'Preview', icon: Eye },
  { label: 'Source', icon: Code2 },
  { label: 'History', icon: History },
];
const ALIGNMENTS = [
  { label: 'Align left', icon: AlignLeft },
  { label: 'Align center', icon: AlignCenter },
  { label: 'Align right', icon: AlignRight },
];

export default function ButtonGroup() {
  const menuId = useId();
  const groupRef = useRef(null);
  const toggleRef = useRef(null);
  const [view, setView] = useState('Preview');
  const [alignment, setAlignment] = useState('Align left');
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcement, setAnnouncement] = useState('');
  const dismissMenu = useCallback(() => setMenuOpen(false), []);

  useClickAway(menuOpen, groupRef, groupRef, dismissMenu);

  return (
    <>
      <section className="demo-section">
        <span className="demo-section-title">Exclusive horizontal selection</span>
        <fieldset className="demo-button-group">
          <legend className="sr-only">Editor view</legend>
          {VIEWS.map(({ label, icon: Icon }) => (
            <button
              className={
                view === label
                  ? 'demo-button-group-item demo-button-group-selected'
                  : 'demo-button-group-item'
              }
              type="button"
              aria-pressed={view === label}
              key={label}
              onClick={() => setView(label)}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </fieldset>
        <span className="demo-note" role="status">
          {view} view selected.
        </span>
      </section>
      <section className="demo-section">
        <span className="demo-section-title">Vertical icon group</span>
        <fieldset className="demo-button-group demo-button-group-vertical">
          <legend className="sr-only">Text alignment</legend>
          {ALIGNMENTS.map(({ label, icon: Icon }) => (
            <button
              type="button"
              key={label}
              aria-label={label}
              aria-pressed={alignment === label}
              className={
                alignment === label
                  ? 'demo-button-group-item demo-button-group-selected'
                  : 'demo-button-group-item'
              }
              onClick={() => setAlignment(label)}
            >
              <Icon size={15} />
            </button>
          ))}
        </fieldset>
        <span className="demo-note" role="status">
          {alignment} selected.
        </span>
      </section>
      <section className="demo-section">
        <span className="demo-section-title">Split action menu</span>
        <fieldset
          className="demo-button-group-split"
          ref={groupRef}
          onKeyDown={(event) => {
            if (event.key === 'Escape' && menuOpen) {
              event.preventDefault();
              dismissMenu();
              toggleRef.current?.focus();
            }
          }}
        >
          <legend className="sr-only">Save actions</legend>
          <button
            type="button"
            className="demo-button-group-primary"
            onClick={() => {
              setAnnouncement('Draft saved.');
              dismissMenu();
            }}
          >
            <Save size={14} /> Save draft
          </button>
          <button
            type="button"
            className="demo-button-group-toggle"
            aria-label="More save options"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            ref={toggleRef}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <ChevronDown size={14} />
          </button>
          {menuOpen && (
            <fieldset className="demo-button-group-menu" id={menuId}>
              <legend className="sr-only">More save options</legend>
              {['Publish now', 'Schedule publish'].map((action) => (
                <button
                  type="button"
                  key={action}
                  onClick={() => {
                    setAnnouncement(`${action} selected.`);
                    dismissMenu();
                  }}
                >
                  {action}
                </button>
              ))}
            </fieldset>
          )}
        </fieldset>
        <span className="demo-note" role="status">
          {announcement || 'Save now or choose another publishing action.'}
        </span>
      </section>
    </>
  );
}
