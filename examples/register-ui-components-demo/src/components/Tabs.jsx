import { useId, useRef, useState } from 'react';
import { cx } from 'tailmantic';

const TABS = ['Overview', 'Members', 'Settings'];

function Tabs({ tabs, variant }) {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const tabRefs = useRef([]);
  const selectedIndex = selected % tabs.length;
  return (
    <div className="demo-tabs">
      <div
        className={`demo-tab-list demo-tab-list-${variant}`}
        role="tablist"
        aria-label="Project views"
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            const direction = event.key === 'ArrowRight' ? 1 : -1;
            const next = (selectedIndex + direction + tabs.length) % tabs.length;
            setSelected(next);
            tabRefs.current[next]?.focus();
          }
        }}
      >
        {tabs.map((tab, index) => (
          <button
            className={cx('demo-tab', selectedIndex === index && 'demo-tab-active')}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-controls={`${id}-panel`}
            aria-selected={selectedIndex === index}
            tabIndex={selectedIndex === index ? 0 : -1}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            key={tab}
            onClick={() => setSelected(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        className="demo-tab-panel"
        role="tabpanel"
        id={`${id}-panel`}
        aria-labelledby={`${id}-tab-${selectedIndex}`}
      >
        {tabs[selectedIndex]} content and recent activity.
      </div>
    </div>
  );
}

export default function TabsDemo() {
  const [variant, setVariant] = useState('standard');
  const tabs =
    variant === 'scrollable' ? [...TABS, 'Activity', 'Files', 'Integrations', 'Access'] : TABS;
  return (
    <div className="demo-col">
      <label className="demo-tabs-control">
        Layout
        <select value={variant} onChange={(event) => setVariant(event.target.value)}>
          <option value="standard">Standard</option>
          <option value="centered">Centered</option>
          <option value="scrollable">Scrollable</option>
        </select>
      </label>
      <Tabs tabs={tabs} variant={variant} />
    </div>
  );
}
