import { Bell, Check, CircleHelp, Home, Search, Settings, UserRound } from 'lucide-react';
import { useState } from 'react';
import IconButton from '../components/IconButton.jsx';

const ICONS = [
  { label: 'Home', icon: Home, color: 'primary' },
  { label: 'Search', icon: Search, color: 'primary' },
  { label: 'Settings', icon: Settings, color: 'warning' },
  { label: 'Profile', icon: UserRound, color: 'primary' },
  { label: 'Alerts', icon: Bell, color: 'danger' },
  { label: 'Help', icon: CircleHelp, color: 'primary' },
  { label: 'Done', icon: Check, color: 'success' },
];

export default function Icons() {
  const [selected, setSelected] = useState('');
  return (
    <section className="demo-section">
      <span className="demo-section-title">Icon set</span>
      <div className="demo-icons-grid">
        {ICONS.map(({ label, icon, color }) => (
          <IconButton
            key={label}
            color={color}
            icon={icon}
            selected={selected === label}
            onClick={() => setSelected(label)}
          >
            {label}
          </IconButton>
        ))}
      </div>
      <span className="demo-note" role="status">
        {selected ? `${selected} icon button selected.` : 'Choose a colored icon button.'}
      </span>
    </section>
  );
}
