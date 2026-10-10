import { Compass, Home, UserRound } from 'lucide-react';
import { useState } from 'react';

const ITEMS = [
  { label: 'Home', icon: Home },
  { label: 'Explore', icon: Compass },
  { label: 'Profile', icon: UserRound },
];

export default function BottomNavigation() {
  const [active, setActive] = useState('Home');
  const [labels, setLabels] = useState(true);

  return (
    <section className="demo-section">
      <span className="demo-section-title">Compact and labeled destinations</span>
      <button
        type="button"
        className="demo-bottom-nav-control"
        aria-pressed={!labels}
        onClick={() => setLabels((value) => !value)}
      >
        {labels ? 'Use icons only' : 'Show inactive labels'}
      </button>
      <nav className="demo-bottom-navigation" aria-label="Primary">
        {ITEMS.map(({ label, icon: Icon }) => (
          <button
            key={label}
            type="button"
            className={`${
              active === label
                ? 'demo-bottom-nav-item demo-bottom-nav-item-active'
                : 'demo-bottom-nav-item'
            }${!labels && active !== label ? ' demo-bottom-nav-item-compact' : ''}`}
            aria-current={active === label ? 'page' : undefined}
            aria-label={label === 'Explore' ? 'Explore, 2 unread items' : undefined}
            onClick={() => setActive(label)}
          >
            <Icon size={18} />
            {labels || active === label ? <span>{label}</span> : null}
            {label === 'Explore' && (
              <span className="demo-bottom-nav-badge" aria-hidden="true">
                2
              </span>
            )}
          </button>
        ))}
      </nav>
      <span className="demo-note">Current destination: {active}</span>
    </section>
  );
}
