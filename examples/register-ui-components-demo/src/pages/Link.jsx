import Link from '../components/Link.jsx';

export default function LinkDemo() {
  return (
    <div className="demo-col">
      <div className="demo-row">
        <Link href="#components">Default link</Link>
        <Link href="#components" underline="hover">
          Hover underline
        </Link>
      </div>
      <div className="demo-row">
        <Link href="https://example.com" external>
          External link
        </Link>
        <Link disabled>Unavailable link</Link>
      </div>
    </div>
  );
}
