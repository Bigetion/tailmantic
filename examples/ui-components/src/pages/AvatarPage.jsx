import { Avatar, AvatarGroup } from '@tailmantic/ui-components';
import { User } from 'lucide-react';
import ComponentPageLayout from '../components/ComponentPageLayout.jsx';
import DemoPanel from '../components/DemoPanel.jsx';
import { getExampleCode } from '../components/exampleCode.js';
import { getComponentBySlug } from '../data/components.js';

const component = getComponentBySlug('avatar');
const TEAM = [
  { name: 'Jordan Davis', initials: 'JD', color: 'indigo' },
  { name: 'Morgan Kim', initials: 'MK', color: 'teal' },
  { name: 'Alex Lee', initials: 'AL', color: 'amber' },
  { name: 'Taylor Chen', initials: 'TC', color: 'violet' },
  { name: 'Sam Rivera', initials: 'SR', color: 'neutral' },
  { name: 'Jamie Park', initials: 'JP', color: 'primary' },
];
const SIZES = [
  ['xs', 24],
  ['sm', 32],
  ['medium', 40],
  ['lg', 48],
  ['xl', 56],
];
const USAGE_CODE = `import { Avatar, AvatarGroup } from '@tailmantic/ui-components';
import '@tailmantic/ui-components/avatar/styles';

<Avatar alt="Jordan Davis" color="indigo" />
<AvatarGroup aria-label="Project team" max={4}>
  {members.map((member) => (
    <Avatar key={member.name} alt={member.name} color={member.color}>
      {member.initials}
    </Avatar>
  ))}
</AvatarGroup>`;
const IMPLEMENTATION_ROWS = [
  [
    'Page',
    'examples/ui-components/src/pages/AvatarPage.jsx',
    'Dedicated examples for accessible fallbacks, sizes, and grouped members.',
  ],
  [
    'Components',
    'packages/ui-components/src/avatar/Avatar.jsx',
    'Avatar with accessible image/fallback content, named colors, and sizes.',
  ],
  [
    'Styles',
    'packages/ui-components/src/avatar/avatar.styles.js',
    'Package-owned avatar, color, size, and group styles.',
  ],
];

function AvatarFallbacks() {
  return (
    <div className="preview-stack">
      <div className="preview-row" role="group" aria-label="Avatar fallback examples">
        <Avatar alt="Jordan Davis" color="indigo" />
        <Avatar aria-label="Morgan Kim" color="teal">
          <User size={18} aria-hidden="true" />
        </Avatar>
        <Avatar alt="Alex Lee" color="amber" />
        <Avatar alt="No profile image" color="neutral">
          ?
        </Avatar>
      </div>
      <span className="preview-note">Use initials or an icon when a profile image is unavailable.</span>
    </div>
  );
}

function AvatarSizes() {
  return (
    <div className="preview-stack">
      <div className="tm-avatar-size-list" role="group" aria-label="Avatar sizes">
        {SIZES.map(([size, pixels]) => (
          <div className="tm-avatar-size-item" key={size}>
            <Avatar alt={`${pixels} pixel avatar`} color="indigo" size={size}>
              JD
            </Avatar>
            <span className="tm-avatar-size-label">{pixels}px</span>
          </div>
        ))}
      </div>
      <span className="preview-note">
        Scale avatars to match the density and hierarchy of their context.
      </span>
    </div>
  );
}

function AvatarGroupExample() {
  return (
    <div className="preview-stack">
      <AvatarGroup aria-label="Project team" max={4} total={TEAM.length}>
        {TEAM.map(({ name, initials, color }) => (
          <Avatar key={name} alt={name} color={color}>
            {initials}
          </Avatar>
        ))}
      </AvatarGroup>
      <span className="preview-note">
        Overlap related profile avatars and summarize additional members.
      </span>
    </div>
  );
}

export default function AvatarPage() {
  return (
    <ComponentPageLayout
      component={component}
      implementationRows={IMPLEMENTATION_ROWS}
      usageCode={USAGE_CODE}
      usageCaption="Use Avatar for profile images or accessible fallbacks, and AvatarGroup to summarize a team."
      usageDescription="Avatar provides package-owned color and size variants. AvatarGroup limits visible members and announces the number represented by its overflow indicator."
    >
      <div className="component-showcase component-showcase-avatar">
        <DemoPanel
          title="Avatar fallbacks"
          caption="Represent a person with initials, an icon, or a neutral fallback."
          code={getExampleCode(component.slug, 'Avatar fallbacks')}
        >
          <AvatarFallbacks />
        </DemoPanel>
        <DemoPanel
          title="Avatar sizes"
          caption="Choose a size that fits the density and hierarchy of the surrounding interface."
          code={getExampleCode(component.slug, 'Avatar sizes')}
        >
          <AvatarSizes />
        </DemoPanel>
        <DemoPanel
          title="Avatar group"
          caption="Show a compact team of people and summarize additional members."
          code={getExampleCode(component.slug, 'Avatar group')}
        >
          <AvatarGroupExample />
        </DemoPanel>
      </div>
    </ComponentPageLayout>
  );
}
