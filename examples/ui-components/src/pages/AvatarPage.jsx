import { User } from 'lucide-react';
import { Avatar } from '@tailmantic/ui-components';
import { getComponentBySlug } from '../data/components.js';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getStyleSource } from '../lib/useStyleSource.js';

const component = getComponentBySlug('avatar');

const DEMOS = {
  avatar: {
    title: 'Avatar fallbacks',
    caption: 'Represent a person with initials, an icon, or a neutral fallback.',
  },
  'avatar-sizes': {
    title: 'Avatar sizes',
    caption: 'Choose a size that fits the density and hierarchy of the surrounding interface.',
  },
  'avatar-group': {
    title: 'Avatar group',
    caption: 'Show a compact team of people and summarize additional members.',
  },
};

function AvatarFallbacks() {
  return (
    <div className="preview-stack">
      <div className="avatar-examples" role="list" aria-label="Avatar fallback examples">
        <Avatar aria-label="Jordan Davis" className="avatar-indigo">JD</Avatar>
        <Avatar aria-label="Morgan Kim" className="avatar-teal"><User size={18} aria-hidden="true" /></Avatar>
        <Avatar aria-label="Alex Lee" className="avatar-amber">AL</Avatar>
        <Avatar aria-label="No profile image" className="avatar-neutral">?</Avatar>
      </div>
      <span className="preview-note">Use initials or an icon when a profile image is unavailable.</span>
    </div>
  );
}

function AvatarSizes() {
  const sizes = [
    ['xs', 24],
    ['sm', 32],
    ['medium', 40],
    ['lg', 48],
    ['xl', 56],
  ];

  return (
    <div className="preview-stack">
      <div className="avatar-size-examples" role="list" aria-label="Avatar sizes">
        {sizes.map(([size, pixels]) => (
          <div className="avatar-size-item" key={size}>
            <Avatar
              aria-label={`${pixels} pixel avatar`}
              className={`avatar-indigo${size !== 'medium' ? ` tm-avatar-${size}` : ''}`}
            >
              JD
            </Avatar>
            <span className="avatar-size-label">{pixels}px</span>
          </div>
        ))}
      </div>
      <span className="preview-note">Scale avatars to match the density and hierarchy of their context.</span>
    </div>
  );
}

function AvatarGroup() {
  const members = [
    { label: 'Jordan Davis', initials: 'JD', colorClass: 'avatar-indigo' },
    { label: 'Morgan Kim', initials: 'MK', colorClass: 'avatar-teal' },
    { label: 'Alex Lee', initials: 'AL', colorClass: 'avatar-amber' },
    { label: 'Taylor Chen', initials: 'TC', colorClass: 'avatar-violet' },
  ];

  return (
    <div className="preview-stack">
      <div className="avatar-group" role="group" aria-label="Project team: four members and two more">
        {members.map((member) => (
          <Avatar key={member.label} aria-label={member.label} className={member.colorClass}>
            {member.initials}
          </Avatar>
        ))}
        <span className="avatar-group-overflow" aria-label="2 additional team members">+2</span>
      </div>
      <span className="preview-note">Overlap related profile avatars and summarize additional members.</span>
    </div>
  );
}

function AvatarDemoContent({ demoId }) {
  if (demoId === 'avatar-sizes') return <AvatarSizes />;
  if (demoId === 'avatar-group') return <AvatarGroup />;
  return <AvatarFallbacks />;
}

export default function AvatarPage() {
  const styleSource = getStyleSource('avatar');
  return (
    <ComponentPageLayout component={component}>
      {component.demos.map((demoId) => (
        <DemoPanel
          key={demoId}
          title={DEMOS[demoId]?.title ?? demoId}
          caption={DEMOS[demoId]?.caption ?? ''}
          code={styleSource}
        >
          <AvatarDemoContent demoId={demoId} />
        </DemoPanel>
      ))}
    </ComponentPageLayout>
  );
}
