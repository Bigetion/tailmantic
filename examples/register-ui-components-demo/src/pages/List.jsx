import { Check, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import UIList, { ListItem, ListItemButton, ListItemText } from '../components/List.jsx';

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
      <UIList>
        {ITEMS.map(({ title, detail }) => (
          <ListItem key={title}>
            <ListItemButton selected={selected === title} onClick={() => setSelected(title)}>
              <ListItemText primary={title} secondary={detail} />
              {selected === title ? (
                <Check size={17} aria-hidden="true" />
              ) : (
                <ChevronRight size={17} aria-hidden="true" />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </UIList>
      <span className="demo-note">Selected: {selected}</span>
    </section>
  );
}
