const PACKAGE = '@tailmantic/ui-components';

function code(imports, example) {
  const setters = [...new Set([...example.matchAll(/\bset([A-Z][A-Za-z0-9]*)\b/g)].map((match) => match[1]))];
  const stateNames = new Set(setters.map((name) => name[0].toLowerCase() + name.slice(1)));
  const setterNames = new Set(setters.map((name) => `set${name}`));
  const callbackNames = new Set(
    [...example.matchAll(/\bon[A-Z][A-Za-z0-9]*=\{([A-Za-z_$][A-Za-z0-9_$]*)\}/g)]
      .map((match) => match[1])
      .filter((name) => !name.startsWith('set')),
  );
  const expressionNames = new Set();
  for (const [, expression] of example.matchAll(/\{([^{}]*)\}/g)) {
    if (/[<>]/.test(expression)) {
      const conditional = expression.match(/^\s*([A-Za-z_$][A-Za-z0-9_$]*)\s*&&/);
      if (conditional) expressionNames.add(conditional[1]);
      continue;
    }
    const withoutStrings = expression.replace(/(['"`])(?:\\.|(?!\1)[^\\])*?\1/g, '');
    for (const match of withoutStrings.matchAll(/[A-Za-z_$][A-Za-z0-9_$]*/g)) {
      const name = match[0];
      const before = withoutStrings.slice(0, match.index);
      const after = withoutStrings.slice(match.index + name.length);
      if (
        /^(?:true|false|null|undefined|return|const|let|function|new|typeof|void|event|index|with|or|and|not)$/.test(name) ||
        /\.\s*$/.test(before) ||
        /^\s*:/.test(after)
      ) continue;
      expressionNames.add(name);
    }
  }
  const importsFromReact = setters.length ? `import { useState } from 'react';\n` : '';
  const initialValues = {
    alignment: "'left'",
    department: "'engineering'",
    difficulty: '3',
    dueDate: "'2026-10-17'",
    email: "''",
    filter: "'all'",
    framework: "'React'",
    grantedIds: "['wifi']",
    loading: 'false',
    mapView: "'map'",
    members: '3',
    name: "''",
    open: 'true',
    page: '1',
    pageCount: '1',
    pageSize: '10',
    plan: "'starter'",
    priceRange: '[100, 300]',
    query: "''",
    rate: '42.5',
    rating: '4',
    seats: '10',
    section: "'profile'",
    selected: '[]',
    selectedItems: "['wifi']",
    sort: "'recent'",
    tags: "['Design']",
    tab: "'home'",
    teams: "['design', 'product']",
    value: '3',
    view: "'list'",
    visible: 'true',
    volume: '65',
    workspaceView: "'overview'",
    anchorEl: 'null',
    shipping: "'standard'",
  };
  const declarations = setters.map((suffix) => {
    const name = suffix[0].toLowerCase() + suffix.slice(1);
    const initialValue = initialValues[name] ??
      (/^(?:frameworks|options|projects|columns|availableItems|items)$/.test(name) ? '[]' : "'engineering'");
    return `  const [${name}, set${suffix}] = useState(${initialValue});`;
  });
  for (const callback of callbackNames) declarations.push(`  const ${callback} = () => {};`);
  for (const name of expressionNames) {
    if (stateNames.has(name) || setterNames.has(name) || callbackNames.has(name)) continue;
    if (/^(?:React|document|window|Math|Array|Object|String|Number|Boolean|JSON|Date|Promise)$/.test(name)) continue;
    const values = {
      availableItems: "[{ id: 'design', label: 'Design' }, { id: 'product', label: 'Product' }]",
      columns: "[{ key: 'name', label: 'Project' }, { key: 'status', label: 'Status' }]",
      items: "[{ id: 'wifi', label: 'Wi-Fi' }, { id: 'design', label: 'Design' }]",
      options: "['React', 'Vue', 'Svelte']",
      pageCount: '3',
      pageSize: '10',
      projects: "[{ id: 1, name: 'Design system', status: 'In progress' }]",
      rows: "[{ id: 1, name: 'Design system', status: 'In progress' }]",
      selectedItems: "[{ id: 'wifi', label: 'Wi-Fi' }]",
    };
    const value = values[name]
      ? `  const ${name} = ${values[name]};`
      : /^(?:anchor|anchorEl|container)$/.test(name)
        ? `  const ${name} = null;`
        : /^(?:open|visible|isOpen|checked|loading)$/.test(name)
          ? `  const ${name} = true;`
          : `  const ${name} = () => {};`;
    declarations.push(value);
  }
  const stateImport = declarations.some((declaration) => declaration.includes('useState('));
  const lines = [
    importsFromReact,
    `import { ${imports} } from '${PACKAGE}';`,
    '',
    'export default function Example() {',
    ...declarations,
    '  return (',
    '    <>',
    ...example.split('\n').map((line) => `      ${line}`),
    '    </>',
    '  );',
    '}',
  ];
  if (!stateImport && importsFromReact) lines[0] = '';
  return lines.filter(Boolean).join('\n');
}

const snippets = {
  alert: {
    'Semantic severity': code('Alert', `<Alert severity="success" title="Changes saved">
  Your preferences are up to date.
</Alert>`),
    'Outlined alerts': code('Alert', `<Alert severity="warning" variant="outlined" title="Review required">
  Check the project settings before continuing.
</Alert>`),
    'Actions and dismissal': code('Alert, Button', `<div>
  {visible ? (
    <Alert severity="info" onClose={() => setVisible(false)}>
      A new version is available.
    </Alert>
  ) : (
    <Button onClick={() => setVisible(true)}>Restore alert</Button>
  )}
</div>`),
  },
  appbar: {
    'Workspace toolbar': code('AppBar, Button', `<AppBar position="static">
  <strong>Design workspace</strong>
  <Button variant="text">Projects</Button>
</AppBar>`),
    'Search and actions': code('AppBar, Button', `<AppBar position="static">
  <input aria-label="Search workspace" placeholder="Search projects…" />
  <Button>Invite</Button>
</AppBar>`),
    'Responsive navigation': code('AppBar, Button', `<AppBar position="static">
  <strong>Workspace</strong>
  <nav aria-label="Main navigation">
    <Button variant="text">Overview</Button>
    <Button variant="text">Projects</Button>
  </nav>
</AppBar>`),
  },
  autocomplete: {
    'Search and select': code('Autocomplete', `<Autocomplete
  label="Framework"
  options={['React', 'Vue', 'Svelte']}
  value={framework}
  onValueChange={setFramework}
  placeholder="Search frameworks"
/>`),
    'Multiple selection': code('Autocomplete', `<Autocomplete
  label="Frameworks"
  multiple
  options={['React', 'Vue', 'Svelte']}
  selectedValues={frameworks}
  onSelectedValuesChange={setFrameworks}
/>`),
    'Free solo': code('Autocomplete', `<Autocomplete
  label="Add a framework"
  freeSolo
  options={['React', 'Vue', 'Svelte']}
  value={framework}
  onValueChange={setFramework}
/>`),
  },
  avatar: {
    'Avatar fallbacks': code('Avatar', `<div>
  <Avatar src="/images/alex.jpg" alt="Alex Morgan" />
  <Avatar alt="Jordan Lee" />
  <Avatar>TM</Avatar>
</div>`),
    'Avatar sizes': code('Avatar', `<div>
  <Avatar size="small" alt="Small avatar">S</Avatar>
  <Avatar size="medium" alt="Medium avatar">M</Avatar>
  <Avatar size="large" alt="Large avatar">L</Avatar>
</div>`),
    'Avatar group': code('Avatar, AvatarGroup', `<AvatarGroup max={4}>
  <Avatar alt="Alex Morgan">AM</Avatar>
  <Avatar alt="Jordan Lee">JL</Avatar>
  <Avatar alt="Sam Taylor">ST</Avatar>
</AvatarGroup>`),
  },
  badge: {
    'Notification counts': code('Badge', `<Badge badgeContent={4} color="primary">
  <button type="button" aria-label="Notifications">Notifications</button>
</Badge>`),
    'Visibility and emphasis': code('Badge', `<div>
  <Badge variant="dot" color="success"><span>Online</span></Badge>
  <Badge badgeContent="New" color="primary"><span>Messages</span></Badge>
</div>`),
    'Status and compact badges': code('Badge', `<div>
  <Badge color="success" badgeContent="Active" />
  <Badge color="warning" badgeContent="Pending" />
  <Badge color="danger" badgeContent="Failed" />
</div>`),
  },
  bottomNavigation: {
    'Primary destinations': code('BottomNavigation, BottomNavigationItem', `<BottomNavigation value={tab} onChange={setTab}>
  <BottomNavigationItem value="home" label="Home" />
  <BottomNavigationItem value="search" label="Search" />
  <BottomNavigationItem value="profile" label="Profile" />
</BottomNavigation>`),
    'Compact labels': code('BottomNavigation, BottomNavigationItem', `<BottomNavigation className="tm-bottom-navigation-example-compact" value={tab} onChange={setTab}>
  <BottomNavigationItem value="home" label="Home" icon="⌂" className="tm-bottom-navigation-example-compact-item" />
  <BottomNavigationItem value="search" label="Search" icon="⌕" className="tm-bottom-navigation-example-compact-item" />
</BottomNavigation>`),
    'Badges and icon states': code('BottomNavigation, BottomNavigationItem, Badge', `<BottomNavigation value={tab} onChange={setTab}>
  <BottomNavigationItem value="inbox" label="Inbox" icon={<Badge badgeContent={3}>✉</Badge>} />
  <BottomNavigationItem value="account" label="Account" icon="◉" />
</BottomNavigation>`),
  },
  breadcrumbs: {
    'Page hierarchy': code('Breadcrumbs', `<Breadcrumbs aria-label="Breadcrumb">
  <a href="/">Workspace</a>
  <a href="/projects">Projects</a>
  <span aria-current="page">Design system</span>
</Breadcrumbs>`),
    'Separator styles': code('Breadcrumbs', `<Breadcrumbs separator="›" aria-label="Breadcrumb">
  <a href="/">Home</a>
  <a href="/docs">Documentation</a>
  <span aria-current="page">Components</span>
</Breadcrumbs>`),
    'Collapsed hierarchy': code('Breadcrumbs', `<Breadcrumbs maxItems={3} aria-label="Breadcrumb">
  <a href="/">Workspace</a>
  <a href="/teams">Teams</a>
  <a href="/teams/design">Design</a>
  <span aria-current="page">Typography</span>
</Breadcrumbs>`),
  },
  buttonGroup: {
    'Segmented choices': code('ButtonGroup, Button', `<ButtonGroup aria-label="Text alignment">
  <Button aria-pressed="true">Left</Button>
  <Button aria-pressed="false">Center</Button>
  <Button aria-pressed="false">Right</Button>
</ButtonGroup>`),
    'Vertical controls': code('ButtonGroup, Button', `<ButtonGroup orientation="vertical" aria-label="Zoom">
  <Button>Zoom in</Button>
  <Button>Reset</Button>
  <Button>Zoom out</Button>
</ButtonGroup>`),
    'Split action': code('ButtonGroup, Button', `<ButtonGroup aria-label="Save options">
  <Button>Save</Button>
  <Button aria-label="More save options">▾</Button>
</ButtonGroup>`),
  },
  button: {
    'Button variants': code('Button', `<div>
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
  <Button variant="text">Text button</Button>
  <Button disabled>Disabled</Button>
</div>`),
    'Semantic colors': code('Button', `<div>
  <Button color="success">Success</Button>
  <Button color="warning">Warning</Button>
  <Button color="danger">Delete</Button>
</div>`),
    'Button sizes': code('Button', `<div>
  <Button size="small">Small</Button>
  <Button>Medium</Button>
  <Button size="large">Large action</Button>
</div>`),
    'Icons and actions': code('Button', `<div>
  <Button>＋ Create project</Button>
  <Button variant="outlined">Continue →</Button>
</div>`),
    'Loading and disabled': code('Button', `<Button
  type="button"
  disabled={loading}
  aria-busy={loading}
  onClick={() => {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 1000);
  }}
>
  {loading ? 'Saving changes…' : 'Save changes'}
</Button>`),
  },
  card: {
    'Project overview': code('Card', `<Card variant="outlined">
  <h3>Design system refresh</h3>
  <p>Update shared components and documentation.</p>
  <span>In progress · Due Oct 24</span>
</Card>`),
    'Interactive actions': code('Card, Button', `<Card variant="outlined">
  <h3>Project settings</h3>
  <p>Manage access and notification preferences.</p>
  <Button>Open settings</Button>
</Card>`),
    'Media and content': code('Card', `<Card>
  <img src="/images/project-cover.jpg" alt="Abstract project cover" />
  <h3>Brand exploration</h3>
  <p>Concepts and references for the next release.</p>
</Card>`),
  },
  checkbox: {
    'Checkbox states': code('Checkbox', `<fieldset>
  <legend>Notification preferences</legend>
  <label><Checkbox defaultChecked /> Email updates</label>
  <label><Checkbox /> Product announcements</label>
  <label><Checkbox disabled /> Unavailable option</label>
</fieldset>`),
    'Select all and indeterminate': code('Checkbox', `<label>
  <Checkbox indeterminate aria-label="Some projects selected" />
  Some projects selected
</label>`),
    'Checkbox group': code('Checkbox', `<fieldset>
  <legend>Notification preferences</legend>
  <label><Checkbox value="email" /> Email</label>
  <label><Checkbox value="in-app" /> In-app</label>
  <label><Checkbox value="digest" /> Weekly digest</label>
</fieldset>`),
  },
  datePicker: {
    'Controlled date': code('DatePicker', `<DatePicker
  label="Due date"
  value={dueDate}
  onChange={setDueDate}
  dateFormat="dd/MM/yyyy"
  helperText="Choose a date for this task."
/>`),
    'Date range': code('DatePicker', `<DatePicker
  label="Planning window"
  value={dueDate}
  onChange={setDueDate}
  dateFormat="dd/MM/yyyy"
  showMonthYearSelect
  minDate="2025-01-01"
  maxDate="2028-12-31"
/>`),
  },
  chip: {
    'Chip variants': code('Chip', `<div>
  <Chip>Default</Chip>
  <Chip color="primary">Primary</Chip>
  <Chip variant="outlined">Outlined</Chip>
</div>`),
    'Selectable filters': code('Chip', `<div>
  <Chip selected color="primary" onClick={() => setFilter('all')}>All projects</Chip>
  <Chip selected={filter === 'in-progress'} variant="outlined" onClick={() => setFilter('in-progress')}>In progress</Chip>
  <Chip selected={filter === 'completed'} variant="outlined" onClick={() => setFilter('completed')}>Completed</Chip>
</div>`),
    'Removable tags': code('Chip', `<Chip onDelete={() => setTags([])}>Design</Chip>`),
  },
  clickAwayListener: {
    'Outside click': code('ClickAwayListener', `<ClickAwayListener onClickAway={() => setOpen(false)}>
  <div>
    <button type="button" onClick={() => setOpen(true)}>Open actions</button>
    {open && <div role="menu">Project actions</div>}
  </div>
</ClickAwayListener>`),
    'Portaled content': code('ClickAwayListener, Portal', `<ClickAwayListener onClickAway={() => setOpen(false)}>
  <div>
    <button type="button" onClick={() => setOpen(true)}>Show popover</button>
    {open && <Portal><div role="dialog">Click outside to close</div></Portal>}
  </div>
</ClickAwayListener>`),
    'Mouse and touch': code('ClickAwayListener', `<ClickAwayListener onClickAway={() => setOpen(false)} mouseEvent="mousedown" touchEvent="touchend">
  <div>{open && <div role="menu">Dismiss with mouse or touch</div>}</div>
</ClickAwayListener>`),
  },
  dialog: {
    'Confirmation dialog': code('Dialog, Button', `<Dialog open={open} onClose={() => setOpen(false)} title="Save your changes?">
  <p>Your updates will be available to your team.</p>
  <Button onClick={() => setOpen(false)}>Cancel</Button>
  <Button onClick={() => setOpen(false)}>Save changes</Button>
</Dialog>`),
    'Destructive confirmation': code('Dialog, Button', `<Dialog open={open} onClose={() => setOpen(false)} title="Delete this project?">
  <p>This action cannot be undone.</p>
  <Button onClick={() => setOpen(false)}>Keep project</Button>
  <Button color="danger" onClick={() => setOpen(false)}>Delete project</Button>
</Dialog>`),
    'Focused composition': code('Dialog, Button', `<Dialog open={open} onClose={() => setOpen(false)} title="Invite a teammate">
  <label>Email address <input type="email" /></label>
  <Button onClick={() => setOpen(false)}>Cancel</Button>
  <Button onClick={() => setOpen(false)}>Send invitation</Button>
</Dialog>`),
  },
  divider: {
    'Horizontal dividers': code('Divider', `<div>
  <p>Account details</p>
  <Divider />
  <p>Notification preferences</p>
</div>`),
    'Vertical divider': code('Divider', `<div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
  <button type="button">Overview</button>
  <Divider orientation="vertical" flexItem />
  <button type="button">Activity</button>
</div>`),
    'Inset divider': code('Divider', `<div>
  <p>Alex Morgan</p>
  <Divider inset />
  <p>Jordan Lee</p>
</div>`),
  },
  drawer: {
    'Temporary navigation drawer': code('Drawer', `<Drawer open={open} onClose={close} variant="temporary">
  <nav aria-label="Workspace"><a href="/projects">Projects</a></nav>
</Drawer>`),
    'Temporary drawer with sections': code('Drawer', `<Drawer open={open} onClose={close} variant="temporary">
  <nav aria-label="Workspace">
    <h3>Workspace</h3><a href="/overview">Overview</a><a href="/projects">Projects</a>
    <h3>Manage</h3><a href="/settings">Settings</a>
  </nav>
</Drawer>`),
    'Permanent navigation drawer': code('Drawer', `<Drawer open variant="permanent">
  <nav aria-label="Main navigation"><a href="/overview">Overview</a><a href="/projects">Projects</a></nav>
</Drawer>`),
  },
  floatingActionButton: {
    'Floating actions': code('FloatingActionButton', `<FloatingActionButton aria-label="Create project" onClick={createProject}>
  +
</FloatingActionButton>`),
    'FAB sizes': code('FloatingActionButton', `<div>
  <FloatingActionButton size="small" aria-label="Add">+</FloatingActionButton>
  <FloatingActionButton aria-label="Create">+</FloatingActionButton>
  <FloatingActionButton size="large" aria-label="Compose">+</FloatingActionButton>
</div>`),
    'Quick action group': code('FloatingActionButton', `<div>
  <FloatingActionButton aria-label="Create task">＋</FloatingActionButton>
  <FloatingActionButton aria-label="Upload file">↑</FloatingActionButton>
  <FloatingActionButton aria-label="Invite teammate">♙</FloatingActionButton>
</div>`),
  },
  iconGlyph: {
    'Icon glyphs': code('IconGlyph', `<div>
  <IconGlyph name="check" />
  <IconGlyph name="close" />
  <IconGlyph name="back" />
</div>`),
    'Icon sizing': code('IconGlyph', `<div>
  <IconGlyph name="star" size={16} />
  <IconGlyph name="star" size={20} />
  <IconGlyph name="star" size={28} />
</div>`),
    'Icon action toolbar': code('IconGlyph', `<div role="toolbar" aria-label="Text formatting">
  <button type="button" aria-label="Back"><IconGlyph name="back" /></button>
  <button type="button" aria-label="Share"><IconGlyph name="share" /></button>
  <button type="button" aria-label="More options"><IconGlyph name="more" /></button>
</div>`),
  },
  icons: {
    'Browse the icon library': code('Icons', `<Icons title="Search" size={20} color="currentColor">
  <circle cx="11" cy="11" r="7" />
  <path d="m20 20-4-4" />
</Icons>`),
    'Semantic icon colors': code('Icons', `<div>
  <Icons title="Saved" size={20} color="var(--tm-color-success)">
    <path d="m5 12 4 4L19 6" />
  </Icons>
  <Icons title="Warning" size={20} color="var(--tm-color-warning)">
    <path d="M12 3 2 21h20L12 3Z" />
  </Icons>
</div>`),
    'Icon buttons': code('Icons', `<button type="button" aria-label="Open settings">
  <Icons title="Settings" size={18}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 2.9-.2-.1a1.7 1.7 0 0 0-1.8.2l-.1.1h-3.4l-.1-.2a1.7 1.7 0 0 0-1.6-1l-.2.1-1.7-2.9.1-.2a1.7 1.7 0 0 0-.1-1.8l-.1-.2V10l.2-.1a1.7 1.7 0 0 0 1-1.6l-.1-.2 2.9-1.7.2.1a1.7 1.7 0 0 0 1.8-.1l.2-.1h3.3l.1.2a1.7 1.7 0 0 0 1.7 1l.2-.1 1.7 2.9-.1.2a1.7 1.7 0 0 0 .1 1.8l.1.2v3.3Z" />
  </Icons>
</button>`),
  },
  link: {
    'Inline links': code('Link', `<p>Read the <Link href="/docs">component documentation</Link> to get started.</p>`),
    'Semantic link styles': code('Link', `<div>
  <Link href="/projects" color="primary">View projects</Link>
  <Link href="/help" color="secondary">Get help</Link>
</div>`),
    'Keyboard and disabled states': code('Link', `<div>
  <Link href="/account">Account settings</Link>
  <Link href="/restricted" aria-disabled="true">Restricted page</Link>
</div>`),
  },
  list: {
    'Workspace navigation': code('List, ListItem, ListItemText', `<List aria-label="Workspace">
  <ListItem><a href="/overview"><ListItemText primary="Overview" /></a></ListItem>
  <ListItem><a href="/projects"><ListItemText primary="Projects" /></a></ListItem>
</List>`),
    'Secondary content': code('List, ListItem, ListItemText', `<List>
  <ListItem><ListItemText primary="Alex Morgan" secondary="Product designer" /></ListItem>
  <ListItem><ListItemText primary="Jordan Lee" secondary="Frontend engineer" /></ListItem>
</List>`),
    'Interactive preferences': code('List, ListItem, ListItemText', `<List>
    <ListItem><button type="button" onClick={openProfile}><ListItemText primary="Profile" secondary="Manage your details" /></button></ListItem>
    <ListItem><button type="button" onClick={openNotifications}><ListItemText primary="Notifications" secondary="Choose what you receive" /></button></ListItem>
</List>`),
  },
  menu: {
    'Context actions': code('Menu, MenuItem', `<div>
  <button type="button" ref={setAnchorEl} onClick={(event) => setAnchorEl(event.currentTarget)}>Project actions</button>
  <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
    <MenuItem onClick={() => setAnchorEl(null)}>Rename</MenuItem>
    <MenuItem onClick={() => setAnchorEl(null)}>Duplicate</MenuItem>
    <MenuItem onClick={() => setAnchorEl(null)}>Delete</MenuItem>
  </Menu>
</div>`),
    'Placement options': code('Menu, MenuItem', `<div>
  <button type="button" ref={setAnchorEl} onClick={(event) => setAnchorEl(event.currentTarget)}>Open menu</button>
  <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} placement="bottom-end">
    <MenuItem>Open</MenuItem>
    <MenuItem>Share</MenuItem>
  </Menu>
</div>`),
    'Selectable options': code('Menu, MenuItem', `<div>
  <button type="button" ref={setAnchorEl} onClick={(event) => setAnchorEl(event.currentTarget)}>Sort projects</button>
  <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
    <MenuItem role="menuitemradio" aria-checked={sort === 'recent'} onClick={() => setSort('recent')}>Most recent</MenuItem>
    <MenuItem role="menuitemradio" aria-checked={sort === 'name'} onClick={() => setSort('name')}>Name</MenuItem>
  </Menu>
</div>`),
  },
  modal: {
    'Project preview': code('Modal', `<Modal open={open} onClose={() => setOpen(false)} aria-labelledby="project-title">
  <section role="dialog">
    <h2 id="project-title">Design system refresh</h2>
    <p>Review project progress and contributors.</p>
  </section>
</Modal>`),
    'Backdrop behavior': code('Modal', `<Modal open={open} onClose={() => setOpen(false)} closeOnBackdrop>
  <section role="dialog"><h2>Project details</h2><p>Click the backdrop to dismiss.</p></section>
</Modal>`),
    'Keyboard accessibility': code('Modal', `<Modal open={open} onClose={() => setOpen(false)} aria-label="Keyboard accessible dialog">
  <section role="dialog"><h2>Keyboard controls</h2><p>Press Escape to close this dialog.</p></section>
</Modal>`),
  },
  numberField: {
    'Stepped quantity': code('NumberField', `<label htmlFor="members">Team members</label>
<NumberField id="members" aria-label="Team members" value={members} onValueChange={setMembers} min={1} step={1} />`),
    'Custom step size': code('NumberField', `<label htmlFor="rate">Hourly rate</label>
<NumberField id="rate" aria-label="Hourly rate" value={rate} onValueChange={setRate} min={0} step={0.25} unit="$" unitPosition="start" />`),
    'Minimum and maximum': code('NumberField', `<label htmlFor="seats">Seats</label>
<NumberField id="seats" aria-label="Seats" value={seats} onValueChange={setSeats} min={1} max={20} step={1} />`),
  },
  pagination: {
    'Page navigation': code('Pagination', `<Pagination count={10} page={page} onChange={(_, nextPage) => setPage(nextPage)} />`),
    'Outlined pagination': code('Pagination', `<Pagination count={8} page={page} showFirstButton showLastButton aria-label="Outlined pagination" onChange={(_, nextPage) => setPage(nextPage)} />`),
    'Rows per page': code('Pagination', `<div>
  <label>Rows per page <select value={pageSize} onChange={(event) => { setPageSize(Number(event.target.value)); setPage(1); }}>
    <option value={10}>10</option><option value={25}>25</option>
  </select></label>
  <Pagination count={pageCount} page={page} onChange={(_, nextPage) => setPage(nextPage)} />
</div>`),
  },
  paper: {
    'Surface elevation': code('Paper', `<Paper elevation={3}>
  <h3>Elevated surface</h3>
  <p>Use elevation to create visual hierarchy.</p>
</Paper>`),
    'Elevation scale': code('Paper', `<div>
  <Paper elevation={0}>Level 0</Paper>
  <Paper elevation={2}>Level 2</Paper>
  <Paper elevation={5}>Level 5</Paper>
</div>`),
    'Surface variants': code('Paper', `<div>
  <Paper elevation={1}>Raised surface</Paper>
  <Paper elevation={0} square>Square surface</Paper>
</div>`),
  },
  popover: {
    'Project details': code('Popover', `<div>
  <button type="button" ref={setAnchorEl} onClick={(event) => setAnchorEl(event.currentTarget)}>Project details</button>
  <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
    <h3>Design system refresh</h3>
    <p>Updated 2 hours ago · 4 contributors</p>
  </Popover>
</div>`),
    'Placement controls': code('Popover', `<div>
  <button type="button" ref={setAnchorEl} onClick={(event) => setAnchorEl(event.currentTarget)}>Choose placement</button>
  <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} placement="bottom-start">
    <p>Choose where this popover appears relative to its trigger.</p>
  </Popover>
</div>`),
    'Interactive options': code('Popover', `<div>
  <button type="button" ref={setAnchorEl} onClick={(event) => setAnchorEl(event.currentTarget)}>Project options</button>
  <Popover open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEl(null)}>
    <button type="button" onClick={rename}>Rename project</button>
    <button type="button" onClick={archive}>Archive project</button>
  </Popover>
</div>`),
  },
  popper: {
    'Anchored surface': code('Popper', `<div>
  <button type="button" ref={setAnchorEl}>Project details</button>
  <Popper open={Boolean(anchorEl)} anchorEl={anchorEl}>
    <div role="tooltip">Details anchored to the trigger</div>
  </Popper>
</div>`),
    'Placement controls': code('Popper', `<div>
  <button type="button" ref={setAnchorEl}>Open settings</button>
  <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="right">
    <div role="tooltip">Positioned to the right of its anchor</div>
  </Popper>
</div>`),
    'Offset modifier': code('Popper', `<div>
  <button type="button" ref={setAnchorEl}>Show details</button>
  <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="bottom" modifiers={[{ name: 'offset', options: { offset: [0, 12] } }]}>
    <div role="tooltip">Offset 12px from the trigger</div>
  </Popper>
</div>`),
  },
  portal: {
    'Portal to document.body': code('Portal', `<Portal>
  <div role="status">Rendered outside the parent stacking context.</div>
</Portal>`),
    'Custom portal target': code('Portal', `<div>
  <p>Ensure an element with id="overlay-root" exists in the HTML document.</p>
  <Portal container={document.getElementById('overlay-root')}>
    <div role="dialog">Rendered in the custom target.</div>
  </Portal>
</div>`),
    'Escape clipping': code('Portal', `<div style={{ overflow: 'hidden' }}>
  <p>Clipping container</p>
  <Portal><div role="tooltip">This overlay renders outside the clipped area.</div></Portal>
</div>`),
  },
  progress: {
    'Linear progress': code('Progress', `<Progress variant="linear" value={65} aria-label="Upload progress" />`),
    'Circular progress': code('Progress', `<Progress variant="circular" value={72} aria-label="Task progress" />`),
    'Buffered progress': code('Progress', `<div className="tm-progress-example-buffer-track">
  <Progress label="Video buffered" value={76} aria-hidden="true" />
  <Progress label="Video playback" value={42} aria-valuetext="42% played, 76% buffered" />
</div>`),
  },
  radioGroup: {
    'Single selection': code('RadioGroup', `<RadioGroup
  name="plan"
  legend="Choose a plan"
  value={plan}
  onChange={(event) => setPlan(event.target.value)}
  options={[{ value: 'starter', label: 'Starter' }, { value: 'pro', label: 'Pro' }]}
/>`),
    'Horizontal layout': code('RadioGroup', `<RadioGroup
  name="alignment"
  legend="Text alignment"
  value={alignment}
  onChange={(event) => setAlignment(event.target.value)}
  orientation="horizontal"
  options={[{ value: 'left', label: 'Left' }, { value: 'center', label: 'Center' }, { value: 'right', label: 'Right' }]}
/>`),
    'Disabled option': code('RadioGroup', `<RadioGroup
  name="shipping"
  legend="Shipping speed"
  value={shipping}
  onChange={(event) => setShipping(event.target.value)}
  options={[
    { value: 'standard', label: 'Standard' },
    { value: 'express', label: 'Express', disabled: true },
  ]}
/>`),
  },
  rating: {
    'Interactive rating': code('Rating', `<Rating value={rating} onChange={setRating} aria-label="Rate this product" />`),
    'Half-star precision': code('Rating', `<Rating value={rating} precision={0.5} onChange={setRating} aria-label="Rate in half stars" />`),
    'Read-only rating': code('Rating', `<Rating value={4.5} precision={0.5} readOnly aria-label="Rated 4.5 out of 5" />`),
  },
  select: {
    'Single selection': code('Select', `<Select
  label="Department"
  options={[
    { value: 'engineering', label: 'Engineering' },
    { value: 'design', label: 'Design' },
    { value: 'product', label: 'Product' },
  ]}
  value={department}
  onValueChange={setDepartment}
/>`),
    'Multiple selection': code('Select', `<Select
  label="Project teams"
  options={[
    { value: 'design', label: 'Design' },
    { value: 'product', label: 'Product' },
    { value: 'support', label: 'Customer support' },
  ]}
  multiple
  selectedValues={teams}
  onSelectedValuesChange={setTeams}
/>`),
  },
  skeleton: {
    'Loading profile card': code('Card, Skeleton', `<Card>
  <Skeleton variant="circular" width={48} height={48} />
  <Skeleton variant="text" width="60%" />
  <Skeleton variant="text" width="90%" />
</Card>`),
    'Shape and content variants': code('Skeleton', `<div>
  <Skeleton variant="text" width={180} />
  <Skeleton variant="rectangular" width={240} height={120} />
  <Skeleton variant="circular" width={40} height={40} />
</div>`),
    'Animation styles': code('Skeleton', `<div>
  <Skeleton animation="pulse" width={220} />
  <Skeleton animation="wave" width={220} />
  <Skeleton animation="none" width={220} />
</div>`),
  },
  slider: {
    'Continuous value': code('Slider', `<Slider
  aria-label="Volume"
  min={0}
  max={100}
  value={volume}
  onChange={(event) => setVolume(Number(event.target.value))}
/>`),
    'Range selection': code('Slider', `<div>
  <Slider
    aria-label="Minimum price"
    min={0}
    max={priceRange[1]}
    value={priceRange[0]}
    onChange={(event) => setPriceRange(([, high]) => [Number(event.target.value), high])}
  />
  <Slider
    aria-label="Maximum price"
    min={priceRange[0]}
    max={500}
    value={priceRange[1]}
    onChange={(event) => setPriceRange(([low]) => [low, Number(event.target.value)])}
  />
</div>`),
    'Discrete steps': code('Slider', `<Slider
  aria-label="Difficulty"
  min={1}
  max={5}
  step={1}
  value={difficulty}
  onChange={(event) => setDifficulty(Number(event.target.value))}
/>`),
  },
  snackbar: {
    'Dismissible notification': code('Snackbar', `    <Snackbar open={open} onClose={() => setOpen(false)}>Your changes have been saved.</Snackbar>`),
    'Snackbar with action': code('Snackbar', `<Snackbar
  open={open}
  severity="info"
  action={<button type="button" onClick={undo}>Undo</button>}
  onClose={() => setOpen(false)}
>
  File moved to trash.
</Snackbar>`),
    'Placement options': code('Snackbar', `<div className="tm-snackbar-example-stage tm-snackbar-example-stage-center">
  <Snackbar open={open} severity="info" onClose={() => setOpen(false)}>
    Workspace preferences updated.
  </Snackbar>
</div>`),
  },
  speedDial: {
    'Quick actions': code('SpeedDial', `<SpeedDial
  ariaLabel="Open quick actions"
  actions={[
    { name: 'Upload image', icon: '▧' },
    { name: 'New document', icon: '＋' },
    { name: 'Send email', icon: '✉' },
  ]}
  onActionClick={handleActionClick}
/>`),
    'Expansion directions': code('SpeedDial', `<SpeedDial
  ariaLabel="Open directional actions"
  direction="right"
  defaultOpen
  actions={[
    { name: 'Upload image', icon: '▧' },
    { name: 'New document', icon: '＋' },
  ]}
/>`),
    'Expanded actions': code('SpeedDial', `<SpeedDial
  ariaLabel="Open sharing actions"
  defaultOpen
  actions={[
    { name: 'Invite teammate', icon: '♙' },
    { name: 'Share link', icon: '↗' },
    { name: 'Send email', icon: '✉' },
  ]}
/>`),
  },
  stepper: {
    'Horizontal checkout': code('Stepper, Step', `<Stepper activeStep={1}>
  <Step label="Cart" />
  <Step label="Shipping" />
  <Step label="Payment" />
  <Step label="Review" />
</Stepper>`),
    'Vertical setup': code('Stepper, Step', `<Stepper activeStep={0} orientation="vertical">
  <Step label="Create workspace" description="Choose a name for your team." />
  <Step label="Invite teammates" description="Add people to your workspace." />
  <Step label="Finish setup" description="Review your preferences." />
</Stepper>`),
    'Alternative labels': code('Stepper, Step', `<Stepper activeStep={1} alternativeLabel>
  <Step label="Details" />
  <Step label="Configure" />
  <Step label="Complete" />
</Stepper>`),
  },
  switch: {
    'Switch states': code('Switch', `<div>
  <Switch label="Enabled" defaultChecked />
  <Switch label="Disabled" />
  <Switch label="Unavailable" disabled />
</div>`),
    'Semantic colors': code('Switch', `<div>
  <Switch label="Service healthy" color="success" defaultChecked />
  <Switch label="Maintenance mode" color="warning" />
</div>`),
    'Labeled settings': code('Switch', `<div>
  <Switch label={<span>Email notifications <small>Receive important updates by email.</small></span>} />
  <Switch label={<span>Weekly summary <small>Get a digest every Monday.</small></span>} defaultChecked />
</div>`),
  },
  table: {
    'Sortable project table': code('Table', `<Table density="dense" hoverable aria-label="Projects">
  <thead>
    <tr>
      <th scope="col"><button type="button" onClick={handleSort}>Project</button></th>
      <th scope="col">Status</th>
      <th scope="col">Last updated</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Design system</td><td>In progress</td><td>Today</td></tr>
    <tr><td>Website refresh</td><td>Planning</td><td>Yesterday</td></tr>
  </tbody>
</Table>`),
    'Compact density': code('Table', `<Table density="dense" aria-label="Recent projects">
  <thead><tr><th scope="col">Project</th><th scope="col">Status</th></tr></thead>
  <tbody><tr><td>Design system</td><td>In progress</td></tr></tbody>
</Table>`),
    'Row selection': code('Table', `<Table density="dense" aria-label="Selectable projects">
  <thead><tr><th scope="col">Select</th><th scope="col">Project</th></tr></thead>
  <tbody>
    <tr>
      <td><input type="checkbox" checked={selected.includes(1)} onChange={() => setSelected(selected.includes(1) ? selected.filter((id) => id !== 1) : [...selected, 1])} aria-label="Select Design system" /></td>
      <td>Design system</td>
    </tr>
  </tbody>
</Table>`),
  },
  tabs: {
    'Workspace views': code('Tabs', `<Tabs
  ariaLabel="Workspace views"
  value={workspaceView}
  onChange={(_event, nextValue) => setWorkspaceView(nextValue)}
  tabs={[
    { label: 'Overview', value: 'overview', content: <p>Workspace overview and active projects.</p> },
    { label: 'Activity', value: 'activity', content: <p>Recent updates from your team.</p> },
    { label: 'Members', value: 'members', content: <p>Manage workspace collaborators.</p> },
  ]}
/>`),
    'Scrollable project filters': code('Tabs', `<Tabs
  ariaLabel="Project filters"
  value={filter}
  onChange={(_event, nextValue) => setFilter(nextValue)}
  variant="scrollable"
  tabs={[
    { label: 'All projects', value: 'all', content: <p>All projects</p> },
    { label: 'In progress', value: 'in-progress', badge: 4, content: <p>Projects in progress</p> },
    { label: 'Completed', value: 'completed', badge: 5, content: <p>Completed projects</p> },
    { label: 'Archived', value: 'archived', content: <p>Archived projects</p> },
  ]}
/>`),
    'Centered settings': code('Tabs', `<Tabs
  ariaLabel="Settings sections"
  value={section}
  onChange={(_event, nextValue) => setSection(nextValue)}
  variant="centered"
  tabs={[
    { label: 'Profile', value: 'profile', content: <p>Update your personal details.</p> },
    { label: 'Notifications', value: 'notifications', content: <p>Choose which updates to receive.</p> },
    { label: 'Preferences', value: 'preferences', content: <p>Set your workspace preferences.</p> },
  ]}
/>`),
  },
  textField: {
    'Basic field': code('TextField', `<TextField
  label="Project name"
  value={name}
  onChange={(event) => setName(event.target.value)}
  helperText="Choose a name your team will recognize."
/>`),
    'Validation': code('TextField', `<TextField
  label="Email address"
  type="email"
  value={email}
  onChange={(event) => setEmail(event.target.value)}
  error={!email.includes('@')}
  helperText={email.includes('@') ? 'Looks good.' : 'Enter a valid email address.'}
/>`),
    'Search adornment': code('TextField', `<TextField
  label="Search projects"
  value={query}
  onChange={(event) => setQuery(event.target.value)}
  startAdornment={<span aria-hidden="true">⌕</span>}
  endAdornment={<button type="button" onClick={() => setQuery('')}>Clear</button>}
/>`),
  },
  toggleButton: {
    'View selection': code('ButtonGroup, ToggleButton', `<ButtonGroup aria-label="Choose a view">
  <ToggleButton selected={view === 'list'} onClick={() => setView('list')}>List</ToggleButton>
  <ToggleButton selected={view === 'grid'} onClick={() => setView('grid')}>Grid</ToggleButton>
</ButtonGroup>`),
    'Clearable selection': code('ButtonGroup, ToggleButton', `<ButtonGroup aria-label="Text alignment">
  {['left', 'center', 'right'].map((option) => (
    <ToggleButton
      key={option}
      selected={alignment === option}
      onClick={() => setAlignment((current) => (current === option ? null : option))}
    >
      {option}
    </ToggleButton>
  ))}
</ButtonGroup>`),
    'Compact icon controls': code('ButtonGroup, ToggleButton', `<ButtonGroup aria-label="Map display">
  <ToggleButton selected={mapView === 'map'} onClick={() => setMapView('map')} aria-label="Map">Map</ToggleButton>
  <ToggleButton selected={mapView === 'grid'} onClick={() => setMapView('grid')} aria-label="Grid">Grid</ToggleButton>
</ButtonGroup>`),
  },
  tooltip: {
    'Accessible helper': code('Tooltip', `<Tooltip title="This action cannot be undone.">
  <button type="button" aria-label="More information">Info</button>
</Tooltip>`),
    'Placement controls': code('Tooltip', `<Tooltip title="Open settings" placement="right">
  <button type="button">Settings</button>
</Tooltip>`),
    'Contextual tooltip': code('Tooltip', `<Tooltip title="Last updated just now">
  <span tabIndex={0}>Project status</span>
</Tooltip>`),
  },
  transferList: {
    'Move selected items': code('TransferList', `<TransferList
  items={items}
  defaultValue={['wifi']}
  sourceTitle="Available"
  targetTitle="Selected"
/>`),
    'Bulk selection': code('TransferList', `<TransferList
  items={items}
  defaultValue={['wifi']}
  showSelectAll
  sourceTitle="Available"
  targetTitle="Selected"
/>`),
    'Move all items': code('TransferList', `<TransferList
  items={items}
  value={grantedIds}
  onChange={setGrantedIds}
  showAllActions
  sourceTitle="Available permissions"
  targetTitle="Granted permissions"
/>`),
  },
  typography: {
    'Type scale': code('Typography', `<div>
  <Typography variant="h1">Page heading</Typography>
  <Typography variant="h2">Section heading</Typography>
  <Typography variant="body1">Body text for readable content.</Typography>
</div>`),
    'Font weights': code('Typography', `<div>
  <Typography weight="regular">Regular</Typography>
  <Typography weight="medium">Medium</Typography>
  <Typography weight="bold">Bold</Typography>
</div>`),
    'Color and alignment': code('Typography', `<div>
  <Typography color="muted">Supporting text</Typography>
  <Typography color="primary" align="right">Aligned label</Typography>
</div>`),
  },
};

export function getExampleCode(slug, title) {
  const key = slug === 'app-bar' ? 'appbar' : slug.replace(/-([a-z])/g, (_, character) => character.toUpperCase());
  return snippets[key]?.[title] ?? null;
}
