import { Compass, Home, UserRound } from 'lucide-react';
import { useState } from 'react';
import BottomNavigationComponent, {
  BottomNavigationItem,
} from '../components/BottomNavigation.jsx';

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
      <BottomNavigationComponent
        className="demo-bottom-navigation"
        aria-label="Primary"
        value={active}
        onChange={(_, value) => setActive(value)}
      >
        {ITEMS.map(({ label, icon: Icon }) => (
          <BottomNavigationItem
            key={label}
            value={label}
            label={labels || active === label ? label : ''}
            aria-label={label === 'Explore' ? 'Explore, 2 unread items' : label}
            className={!labels && active !== label ? 'demo-bottom-nav-item-compact' : undefined}
            icon={
              <span className="demo-bottom-nav-icon-wrap">
                <Icon size={18} />
                {label === 'Explore' && (
                  <span className="demo-bottom-nav-badge" aria-hidden="true">
                    2
                  </span>
                )}
              </span>
            }
          />
        ))}
      </BottomNavigationComponent>
      <span className="demo-note">Current destination: {active}</span>
    </section>
  );
}
