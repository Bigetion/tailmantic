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
import { useState } from 'react';

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
  const [view, setView] = useState('Preview');
  const [alignment, setAlignment] = useState('Align left');
  const [menuOpen, setMenuOpen] = useState(false);
  const [announcement, setAnnouncement] = useState('');

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
        <div className="demo-button-group-split">
          <button
            type="button"
            className="demo-button-group-primary"
            onClick={() => {
              setAnnouncement('Draft saved.');
              setMenuOpen(false);
            }}
          >
            <Save size={14} /> Save draft
          </button>
          <button
            type="button"
            className="demo-button-group-toggle"
            aria-label="More save options"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <ChevronDown size={14} />
          </button>
          {menuOpen && (
            <div className="demo-button-group-menu">
              {['Publish now', 'Schedule publish'].map((action) => (
                <button
                  type="button"
                  key={action}
                  onClick={() => {
                    setAnnouncement(`${action} selected.`);
                    setMenuOpen(false);
                  }}
                >
                  {action}
                </button>
              ))}
            </div>
          )}
        </div>
        <span className="demo-note" role="status">
          {announcement || 'Save now or choose another publishing action.'}
        </span>
      </section>
    </>
  );
}
