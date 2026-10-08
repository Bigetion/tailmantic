import { useState } from 'react';
import { Minus, Plus, RotateCcw, GitBranch, ExternalLink, Bell, Mail, ShoppingCart, User } from 'lucide-react';
import { Button } from './components/Button';
import { Badge } from './components/Badge';
import { Card, CardHeader, CardBody, CardFooter } from './components/Card';
import { Input } from './components/Input';

// @tailmantic/ui-components — ready-made components
import UiButton from '@tailmantic/ui-components/button';
import UiCard from '@tailmantic/ui-components/card';
import UiAlert from '@tailmantic/ui-components/alert';
import UiBadge from '@tailmantic/ui-components/badge';
import UiTabs from '@tailmantic/ui-components/tabs';
import UiDialog from '@tailmantic/ui-components/dialog';
import UiTextField from '@tailmantic/ui-components/text-field';

export default function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div style={{ fontFamily: 'inherit', minHeight: '100vh', background: '#f9fafb', padding: '32px 16px' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>

        {/* Header */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0 }}>tailmantic</h1>
            <Badge variant="primary">v1.0.0</Badge>
          </div>
          <p style={{ color: '#6b7280', margin: 0, fontSize: '15px' }}>
            Build your own semantic design system with registered Tailwind CSS v4 utilities.
          </p>
          <p style={{ color: '#9ca3af', margin: '8px 0 0', fontSize: '13px' }}>
            💡 Open <strong>DevTools → Inspector</strong> and click any button below.
            You'll see <code style={{ background: '#f3f4f6', padding: '1px 6px', borderRadius: '4px', fontSize: '12px' }}>class="btn btn-primary btn-md"</code> — not utility strings.
          </p>
        </div>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>Button variants</span>
            <Badge variant="default">button.js</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
              <Button variant="primary" size="sm">Small</Button>
              <Button variant="primary" size="md">Medium</Button>
              <Button variant="primary" size="lg">Large</Button>
            </div>
          </CardBody>
          <CardFooter>
            <code style={{ fontSize: '12px', color: '#6b7280' }}>
              {'<Button variant="primary" size="md">Primary</Button>'}
            </code>
          </CardFooter>
        </Card>

        {/* Counter — shows cx() in action */}
        <Card>
          <CardHeader>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>cx() for conditional classes</span>
            <Badge variant="default">tailmantic</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Button variant="outline" size="sm" onClick={() => setCount(c => c - 1)}>
                <Minus size={14} />
              </Button>
              <span style={{ fontSize: '24px', fontWeight: 700, minWidth: '40px', textAlign: 'center' }}>{count}</span>
              <Button variant="outline" size="sm" onClick={() => setCount(c => c + 1)}>
                <Plus size={14} />
              </Button>
              <Button
                variant={count === 0 ? 'ghost' : count > 0 ? 'primary' : 'danger'}
                size="sm"
                onClick={() => setCount(0)}
              >
                <RotateCcw size={14} /> Reset
              </Button>
            </div>
            <p style={{ margin: '12px 0 0', fontSize: '13px', color: '#9ca3af' }}>
              Reset button variant changes based on count: ghost → primary (positive) → danger (negative)
            </p>
          </CardBody>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>Badge variants</span>
            <Badge variant="default">badge.js</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
            </div>
          </CardBody>
          <CardFooter>
            <code style={{ fontSize: '12px', color: '#6b7280' }}>
              {'<Badge variant="success">Success</Badge>'}
            </code>
          </CardFooter>
        </Card>

        {/* Input */}
        <Card>
          <CardHeader>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>Input field</span>
            <Badge variant="default">input.js</Badge>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '360px' }}>
              <Input
                label="Email address"
                type="email"
                placeholder="you@example.com"
                hint="We'll never share your email."
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Input
                label="Username"
                defaultValue="john_doe"
                error="Username is already taken."
              />
            </div>
          </CardBody>
        </Card>

        {/* How it works */}
        <Card>
          <CardHeader>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>How it works</span>
          </CardHeader>
          <CardBody>
            <ol style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#374151', lineHeight: 1.6 }}>
              <li>
                Define classes in <code style={{ background: '#f3f4f6', padding: '1px 5px', borderRadius: '4px' }}>src/tailmantics/button.js</code> using <code style={{ background: '#f3f4f6', padding: '1px 5px', borderRadius: '4px' }}>register()</code> with Tailwind utilities
              </li>
              <li>
                The Vite plugin picks up <code style={{ background: '#f3f4f6', padding: '1px 5px', borderRadius: '4px' }}>src/tailmantics/index.js</code>, compiles everything through Tailwind v4, and serves it as <code style={{ background: '#f3f4f6', padding: '1px 5px', borderRadius: '4px' }}>virtual:tailmantic.css</code>
              </li>
              <li>
                Your components use clean class names like <code style={{ background: '#f3f4f6', padding: '1px 5px', borderRadius: '4px' }}>btn btn-primary btn-md</code> — no utility strings in JSX
              </li>
              <li>
                Result: <strong>~7 KB gzip</strong> CSS for a full design system, zero JS runtime overhead
              </li>
            </ol>
          </CardBody>
          <CardFooter>
            <a
              href="https://github.com/Bigetion/tailmantic"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#3b82f6', textDecoration: 'none' }}
            >
              <GitBranch size={14} /> GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/tailmantic"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#3b82f6', textDecoration: 'none' }}
            >
              <ExternalLink size={14} /> npm
            </a>
          </CardFooter>
        </Card>

        {/* ── @tailmantic/ui-components showcase ── */}
        <div style={{ marginTop: '16px' }}>
          <div style={{ marginBottom: '16px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 6px' }}>
              @tailmantic/ui-components
            </h2>
            <p style={{ color: '#6b7280', margin: 0, fontSize: '15px' }}>
              Ready-made components — import and use, no registration needed.
            </p>
          </div>

          {/* Dark-surface container */}
          <div style={{
            background: '#090c12',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}>

            {/* Button */}
            <div>
              <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#a3aec0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Button — variants &amp; colors
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                <UiButton variant="contained" color="primary">Contained</UiButton>
                <UiButton variant="outlined" color="primary">Outlined</UiButton>
                <UiButton variant="text" color="primary">Text</UiButton>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <UiButton variant="contained" color="secondary">Secondary</UiButton>
                <UiButton variant="contained" color="error">Error</UiButton>
                <UiButton variant="contained" size="small">Small</UiButton>
                <UiButton variant="contained" size="large">Large</UiButton>
              </div>
            </div>

            {/* Card */}
            <div>
              <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#a3aec0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Card — variants
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <UiCard variant="elevated" elevation={2} style={{ padding: '16px', minWidth: '160px' }}>
                  <strong style={{ color: '#edf2fb' }}>Elevated</strong>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#a3aec0' }}>elevation=2</p>
                </UiCard>
                <UiCard variant="outlined" style={{ padding: '16px', minWidth: '160px' }}>
                  <strong style={{ color: '#edf2fb' }}>Outlined</strong>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#a3aec0' }}>variant=&quot;outlined&quot;</p>
                </UiCard>
                <UiCard variant="filled" interactive style={{ padding: '16px', minWidth: '160px', cursor: 'pointer' }}>
                  <strong style={{ color: '#edf2fb' }}>Filled</strong>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#a3aec0' }}>interactive</p>
                </UiCard>
              </div>
            </div>

            {/* Alert */}
            <div>
              <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#a3aec0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Alert — severity
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <UiAlert severity="info" title="Info">This is an informational message.</UiAlert>
                <UiAlert severity="success" title="Success">Operation completed successfully.</UiAlert>
                <UiAlert severity="warning" title="Warning">Check your configuration.</UiAlert>
                <UiAlert severity="error" title="Error" variant="filled">Something went wrong.</UiAlert>
              </div>
            </div>

            {/* Tabs */}
            <div>
              <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#a3aec0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Tabs
              </p>
              <UiTabs
                ariaLabel="Demo tabs"
                tabs={[
                  {
                    label: 'Overview',
                    value: 'overview',
                    content: (
                      <p style={{ margin: '12px 0 0', fontSize: '14px', color: '#a3aec0' }}>
                        Overview panel — write whatever content fits here.
                      </p>
                    ),
                  },
                  {
                    label: 'Details',
                    value: 'details',
                    content: (
                      <p style={{ margin: '12px 0 0', fontSize: '14px', color: '#a3aec0' }}>
                        Detailed information and specifications.
                      </p>
                    ),
                  },
                  {
                    label: 'Settings',
                    value: 'settings',
                    content: (
                      <p style={{ margin: '12px 0 0', fontSize: '14px', color: '#a3aec0' }}>
                        Configure your preferences here.
                      </p>
                    ),
                  },
                ]}
              />
            </div>

            {/* Badge */}
            <div>
              <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#a3aec0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Badge — overlaid on icon
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center' }}>
                <UiBadge badgeContent={4} color="primary">
                  <span style={{ display: 'inline-flex', padding: '8px', background: '#1f2937', borderRadius: '8px' }}>
                    <Bell size={20} style={{ color: '#edf2fb' }} />
                  </span>
                </UiBadge>
                <UiBadge badgeContent={99} color="error">
                  <span style={{ display: 'inline-flex', padding: '8px', background: '#1f2937', borderRadius: '8px' }}>
                    <Mail size={20} style={{ color: '#edf2fb' }} />
                  </span>
                </UiBadge>
                <UiBadge badgeContent={200} max={99} color="secondary">
                  <span style={{ display: 'inline-flex', padding: '8px', background: '#1f2937', borderRadius: '8px' }}>
                    <ShoppingCart size={20} style={{ color: '#edf2fb' }} />
                  </span>
                </UiBadge>
                <UiBadge variant="dot" color="success">
                  <span style={{ display: 'inline-flex', padding: '8px', background: '#1f2937', borderRadius: '8px' }}>
                    <User size={20} style={{ color: '#edf2fb' }} />
                  </span>
                </UiBadge>
              </div>
            </div>

            {/* Dialog */}
            <div>
              <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#a3aec0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Dialog
              </p>
              <UiButton variant="contained" color="primary" onClick={() => setDialogOpen(true)}>
                Open Dialog
              </UiButton>
              <UiDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                title="Example Dialog"
                description="This dialog is rendered via createPortal and traps focus correctly."
                actions={
                  <>
                    <UiButton variant="text" color="primary" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </UiButton>
                    <UiButton variant="contained" color="primary" onClick={() => setDialogOpen(false)}>
                      Confirm
                    </UiButton>
                  </>
                }
              >
                <p style={{ margin: 0, fontSize: '14px', color: '#a3aec0' }}>
                  The Dialog accepts <code>title</code>, <code>description</code>,{' '}
                  <code>children</code>, and <code>actions</code> props.
                  Press <kbd>Escape</kbd> or click the backdrop to close.
                </p>
              </UiDialog>
            </div>

            {/* TextField */}
            <div>
              <p style={{ margin: '0 0 12px', fontSize: '13px', color: '#a3aec0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                TextField
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '360px' }}>
                <UiTextField
                  label="Email address"
                  type="email"
                  placeholder="you@example.com"
                  helperText="We'll never share your email."
                />
                <UiTextField
                  label="Username"
                  defaultValue="john_doe"
                  error
                  errorText="Username is already taken."
                />
              </div>
            </div>

          </div>{/* end dark container */}
        </div>{/* end ui-components section */}

      </div>
    </div>
  );
}
