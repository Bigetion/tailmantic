import { Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ITEMS = [
  { title: 'Design system refresh', detail: 'Updated 2 hours ago' },
  { title: 'Mobile navigation', detail: 'Updated yesterday' },
  { title: 'Release checklist', detail: 'Updated on Monday' },
];

export default function List() {
  const [selected, setSelected] = useState(ITEMS[0].title);

  return (
    <section className="demo-section">
      <span className="demo-section-title">Selectable project list</span>
      <ul className="demo-list">
        {ITEMS.map(({ title, detail }) => (
          <li key={title}>
            <button
              type="button"
              className={
                selected === title ? 'demo-list-item demo-list-item-selected' : 'demo-list-item'
              }
              aria-current={selected === title ? 'true' : undefined}
              onClick={() => setSelected(title)}
            >
              <span className="demo-list-copy">
                <strong>{title}</strong>
                <small>{detail}</small>
              </span>
              {selected === title ? <Check size={17} /> : <ChevronRight size={17} />}
            </button>
          </li>
        ))}
      </ul>
      <span className="demo-note">Selected: {selected}</span>
    </section>
  );
}
