const ROTATIONS = {
  down: undefined,
  left: 'rotate(90 12 12)',
  right: 'rotate(-90 12 12)',
  up: 'rotate(180 12 12)',
};

export default function ChevronIcon({ className, direction = 'down', size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" transform={ROTATIONS[direction]} />
    </svg>
  );
}
