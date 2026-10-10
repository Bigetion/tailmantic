import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import DrawerComponent from '../components/Drawer.jsx';

export default function Drawer() {
  const [open, setOpen] = useState(false);
  const [persistent, setPersistent] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  function renderDrawerContent(persistentMode = false) {
    return (
      <>
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
      </>
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
          <DrawerComponent
            open
            variant="persistent"
            className="demo-drawer demo-drawer-persistent"
            aria-label="Workspace navigation"
          >
            {renderDrawerContent(true)}
          </DrawerComponent>
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
      <DrawerComponent
        open={open && !persistent}
        className="demo-drawer"
        aria-label="Workspace navigation"
        onClose={() => setOpen(false)}
      >
        {renderDrawerContent()}
      </DrawerComponent>
      <span className="demo-note">
        Temporary drawers dismiss on backdrop or selection; persistent drawers stay beside the page.
      </span>
    </section>
  );
}
