import Divider from '../components/Divider.jsx';

export default function DividerDemo() {
  return (
    <div className="demo-col">
      <div>
        <h2 className="demo-typography demo-typography-heading">Section title</h2>
        <Divider inset />
        <p className="demo-typography demo-typography-secondary">
          Supporting text separated by an inset divider.
        </p>
      </div>
      <div className="demo-divider-row">
        <span>First item</span>
        <Divider orientation="vertical" />
        <span>Second item</span>
        <Divider orientation="vertical" inset />
        <span>Third item</span>
      </div>
    </div>
  );
}
