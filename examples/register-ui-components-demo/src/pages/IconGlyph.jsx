import { Bell, Check, ChevronDown, CircleHelp, Search, Settings, X } from 'lucide-react';
import { useState } from 'react';
import IconGlyphComponent from '../components/IconGlyph.jsx';

const GLYPHS = [
  { label: 'Search', icon: Search },
  { label: 'Alerts', icon: Bell },
  { label: 'Settings', icon: Settings },
  { label: 'Confirm', icon: Check },
  { label: 'Expand', icon: ChevronDown },
  { label: 'Help', icon: CircleHelp },
  { label: 'Close', icon: X },
];

export default function IconGlyph() {
  const [size, setSize] = useState(18);
  const [action, setAction] = useState('');
  return (
    <section className="demo-section">
      <span className="demo-section-title">Common interface glyphs</span>
      <div className="demo-row">
        {[16, 20, 24].map((value) => (
          <button
            key={value}
            type="button"
            className={`demo-icon-glyph-size${size === value ? ' demo-icon-glyph-size-active' : ''}`}
            aria-pressed={size === value}
            onClick={() => setSize(value)}
          >
            {value}px
          </button>
        ))}
      </div>
      <div className="demo-icon-glyph-grid">
        {GLYPHS.map(({ label, icon: Icon }, index) => (
          <button
            className="demo-icon-glyph-item"
            key={label}
            type="button"
            aria-label={label}
            onClick={() => setAction(label)}
          >
            <IconGlyphComponent icon={Icon} size={size} strokeWidth={1.8} />
            <span>
              {label}
              {index < 3 ? ' · navigation' : ' · action'}
            </span>
          </button>
        ))}
      </div>
      <span className="demo-note" role="status">
        {action ? `${action} glyph selected.` : 'Select a glyph to preview an actionable icon.'}
      </span>
    </section>
  );
}
