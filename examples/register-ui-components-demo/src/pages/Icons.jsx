import { Bell, Check, CircleHelp, Home, Search, Settings, UserRound } from 'lucide-react';
import { useState } from 'react';

const ICONS = [
  { label: 'Home', icon: Home },
  { label: 'Search', icon: Search },
  { label: 'Settings', icon: Settings },
  { label: 'Profile', icon: UserRound },
  { label: 'Alerts', icon: Bell },
  { label: 'Help', icon: CircleHelp },
  { label: 'Done', icon: Check },
];

export default function Icons() {
  const [selected, setSelected] = useState('');
  return (
    <section className="demo-section">
      <span className="demo-section-title">Icon set</span>
      <div className="demo-icons-grid">
        {ICONS.map(({ label, icon: Icon }) => (
          <button
            className={`demo-icons-item${selected === label ? ' demo-icons-item-selected' : ''}`}
            key={label}
            type="button"
            aria-pressed={selected === label}
            onClick={() => setSelected(label)}
          >
            <span className={`demo-icons-symbol demo-icons-symbol-${label.toLowerCase()}`}>
              <Icon size={19} strokeWidth={1.8} />
            </span>
            <span>{label}</span>
          </button>
        ))}
      </div>
      <span className="demo-note" role="status">
        {selected ? `${selected} icon button selected.` : 'Choose a colored icon button.'}
      </span>
    </section>
  );
}
