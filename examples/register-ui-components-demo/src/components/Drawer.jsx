import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Drawer() {
  const [open, setOpen] = useState(false);
  const [persistent, setPersistent] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  function renderDrawerContent(persistentMode = false) {
    return (
      <aside
        className={`demo-drawer${persistentMode ? ' demo-drawer-persistent' : ''}`}
        aria-label="Workspace navigation"
      >
        <div className="demo-drawer-heading">
          <strong>Workspace</strong>
          {!persistentMode && (
            <button type="button" aria-label="Close drawer" onClick={() => setOpen(false)}>
              <X size={17} />
            </button>
          )}
        </div>
        {['Dashboard', 'Projects', 'Settings'].map((item) => (
          <button
            key={item}
            type="button"
            className={`demo-drawer-item${selected === item ? ' demo-drawer-item-active' : ''}`}
            aria-current={selected === item ? 'page' : undefined}
            onClick={() => {
              setSelected(item);
              if (!persistentMode) setOpen(false);
            }}
          >
            {item}
          </button>
        ))}
      </aside>
    );
  }

  return (
    <section className="demo-section">
      <span className="demo-section-title">Temporary and persistent navigation drawers</span>
      <button
        type="button"
        className="demo-drawer-trigger"
        aria-pressed={persistent}
        onClick={() => {
          setPersistent((value) => !value);
          setOpen(false);
        }}
      >
        {persistent ? 'Switch to temporary drawer' : 'Switch to persistent drawer'}
      </button>
      {persistent ? (
        <div className="demo-drawer-layout">
          {renderDrawerContent(true)}
          <div className="demo-drawer-content">
            <strong>{selected}</strong>
            <span>Page content remains visible beside a persistent drawer.</span>
          </div>
        </div>
      ) : (
        <button type="button" className="demo-drawer-trigger" onClick={() => setOpen(true)}>
          <Menu size={16} /> Open temporary drawer
        </button>
      )}
      {open && !persistent && (
        <div className="demo-drawer-backdrop">
          <button
            type="button"
            className="demo-drawer-dismiss"
            aria-label="Close drawer"
            onClick={() => setOpen(false)}
          />
          {renderDrawerContent()}
        </div>
      )}
      <span className="demo-note">
        Temporary drawers dismiss on backdrop or selection; persistent drawers stay beside the page.
      </span>
    </section>
  );
}
