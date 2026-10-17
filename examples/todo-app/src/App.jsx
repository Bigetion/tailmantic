import {
  Alert,
  Avatar,
  Button,
  Checkbox,
  Chip,
  DatePicker,
  List,
  ListItem,
  Paper,
  Progress,
  Select,
  TextField,
  Typography,
} from '@tailmantic/ui-components';
import {
  CalendarDays,
  CircleCheck,
  Clock3,
  Inbox,
  ListTodo,
  Plus,
  Search,
  Sparkles,
  Trash2,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { cx } from 'tailmantic';

const STORAGE_KEY = 'tailmantic-daymark-tasks-v1';
const priorities = ['low', 'medium', 'high'];
const priorityOptions = priorities.map((value) => ({
  label: value[0].toUpperCase() + value.slice(1),
  value,
}));
const views = [
  { id: 'inbox', label: 'All tasks', icon: Inbox },
  { id: 'today', label: 'Today', icon: CalendarDays },
  { id: 'upcoming', label: 'Upcoming', icon: Clock3 },
  { id: 'completed', label: 'Completed', icon: CircleCheck },
];

function localDate(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function starterTasks() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return [
    {
      id: 'seed-1',
      title: 'Review the component API',
      date: localDate(today),
      priority: 'high',
      completed: false,
    },
    {
      id: 'seed-2',
      title: 'Try the todo flow on mobile',
      date: localDate(today),
      priority: 'medium',
      completed: false,
    },
    {
      id: 'seed-3',
      title: 'Write up the next iteration',
      date: localDate(tomorrow),
      priority: 'low',
      completed: false,
    },
    {
      id: 'seed-4',
      title: 'Set up the project workspace',
      date: localDate(today),
      priority: 'low',
      completed: true,
    },
  ];
}

function readTasks() {
  if (typeof window === 'undefined') return { tasks: starterTasks(), error: '' };
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return { tasks: starterTasks(), error: '' };
    const tasks = JSON.parse(stored);
    if (
      !Array.isArray(tasks) ||
      tasks.some(
        (task) =>
          !task ||
          typeof task.id !== 'string' ||
          typeof task.title !== 'string' ||
          typeof task.date !== 'string' ||
          !priorities.includes(task.priority) ||
          typeof task.completed !== 'boolean',
      )
    ) {
      throw new TypeError('Saved task data is invalid.');
    }
    return { tasks, error: '' };
  } catch (error) {
    console.error('Could not load saved tasks:', error);
    return {
      tasks: starterTasks(),
      error: 'Saved tasks could not be loaded. The starter list is shown instead.',
    };
  }
}

function formatDueDate(date) {
  if (!date) return 'No due date';
  if (date === localDate()) return 'Today';
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (date === localDate(tomorrow)) return 'Tomorrow';
  return new Date(`${date}T12:00:00`).toLocaleDateString('en', {
    month: 'short',
    day: 'numeric',
  });
}

function viewTitle(view) {
  return views.find((item) => item.id === view)?.label ?? 'All tasks';
}

function ViewNavigation({ counts, activeView, onSelect, mobile = false }) {
  return (
    <nav className={cx('todo-view-nav', mobile && 'todo-view-nav-mobile')} aria-label="Task views">
      {views.map(({ id, label, icon: Icon }) => (
        <Button
          key={id}
          className={cx(
            'todo-view-link',
            mobile && 'todo-view-link-mobile',
            activeView === id && 'todo-view-link-selected',
          )}
          size="small"
          variant="text"
          aria-current={activeView === id ? 'page' : undefined}
          onClick={() => onSelect(id)}
        >
          <Icon className="todo-view-icon" size={17} aria-hidden="true" />
          <span className="todo-view-label">{label}</span>
          <Chip size="small" className="todo-view-count">
            {counts[id]}
          </Chip>
        </Button>
      ))}
    </nav>
  );
}

function TaskRow({ task, onToggle, onDelete }) {
  const priorityColor = {
    low: 'success',
    medium: 'warning',
    high: 'primary',
  }[task.priority];

  return (
    <ListItem className={cx('todo-task-row', task.completed && 'todo-task-row-completed')} divider>
      <Checkbox
        checked={task.completed}
        className="todo-task-checkbox"
        aria-label={task.completed ? `Mark ${task.title} incomplete` : `Complete ${task.title}`}
        onChange={onToggle}
      />
      <div className="todo-task-details">
        <Typography
          className={cx('todo-task-title', task.completed && 'todo-task-title-completed')}
          component="span"
          variant="subtitle2"
        >
          {task.title}
        </Typography>
        <div className="todo-task-meta">
          <Chip
            className={cx('todo-priority-chip', `todo-priority-${task.priority}`)}
            color={priorityColor}
            size="small"
          >
            {task.priority}
          </Chip>
          <Chip className="todo-due-chip" icon={CalendarDays} size="small" variant="outlined">
            {formatDueDate(task.date)}
          </Chip>
        </div>
      </div>
      <Button
        className="todo-delete-button"
        size="small"
        variant="text"
        aria-label={`Delete ${task.title}`}
        onClick={onDelete}
      >
        <Trash2 size={17} aria-hidden="true" />
      </Button>
    </ListItem>
  );
}

export default function App() {
  const today = localDate();
  const [initialStorage] = useState(readTasks);
  const [tasks, setTasks] = useState(initialStorage.tasks);
  const [storageError, setStorageError] = useState(initialStorage.error);
  const [activeView, setActiveView] = useState('today');
  const [search, setSearch] = useState('');
  const [draft, setDraft] = useState('');
  const [draftDate, setDraftDate] = useState(today);
  const [draftPriority, setDraftPriority] = useState('medium');
  const searchInput = useRef(null);

  useEffect(() => {
    const handleSearchShortcut = (event) => {
      const target = event.target;
      const isEditing =
        target instanceof HTMLElement &&
        target.matches('input, textarea, select, [contenteditable="true"]');
      if (event.key === '/' && !isEditing) {
        event.preventDefault();
        searchInput.current?.focus();
      } else if (event.key === 'Escape' && target === searchInput.current) {
        setSearch('');
        searchInput.current?.blur();
      }
    };
    window.addEventListener('keydown', handleSearchShortcut);
    return () => window.removeEventListener('keydown', handleSearchShortcut);
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
      setStorageError('');
    } catch (error) {
      console.error('Could not save tasks:', error);
      setStorageError('Changes could not be saved on this device.');
    }
  }, [tasks]);

  const counts = useMemo(
    () => ({
      inbox: tasks.filter((task) => !task.completed).length,
      today: tasks.filter((task) => !task.completed && task.date <= today).length,
      upcoming: tasks.filter((task) => !task.completed && task.date > today).length,
      completed: tasks.filter((task) => task.completed).length,
    }),
    [tasks, today],
  );

  const visibleTasks = useMemo(
    () =>
      tasks
        .filter((task) => {
          if (activeView === 'completed') return task.completed;
          if (task.completed) return false;
          if (activeView === 'today') return task.date <= today;
          if (activeView === 'upcoming') return task.date > today;
          return true;
        })
        .filter((task) => task.title.toLowerCase().includes(search.trim().toLowerCase()))
        .sort(
          (first, second) =>
            Number(first.completed) - Number(second.completed) ||
            priorities.indexOf(second.priority) - priorities.indexOf(first.priority),
        ),
    [activeView, search, tasks, today],
  );

  const addTask = (event) => {
    event.preventDefault();
    const title = draft.trim();
    if (!title) return;
    setTasks((current) => [
      {
        id: crypto.randomUUID(),
        title,
        date: draftDate,
        priority: draftPriority,
        completed: false,
      },
      ...current,
    ]);
    setDraft('');
    setDraftDate(today);
    setDraftPriority('medium');
  };

  const toggleTask = (taskId) => {
    setTasks((current) =>
      current.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)),
    );
  };

  const deleteTask = (taskId) => {
    setTasks((current) => current.filter((task) => task.id !== taskId));
  };

  const clearCompleted = () => {
    setTasks((current) => current.filter((task) => !task.completed));
  };

  const dateHeading = new Date().toLocaleDateString('en', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
  const completion = tasks.length ? Math.round((counts.completed / tasks.length) * 100) : 0;

  return (
    <div className="todo-app">
      <div className="todo-app-frame">
        <aside className="todo-sidebar">
          <a className="todo-brand" href="#today" aria-label="Daymark home">
            <span className="todo-brand-icon">
              <ListTodo size={19} strokeWidth={2.2} aria-hidden="true" />
            </span>
            <span>daymark</span>
          </a>

          <Typography className="todo-sidebar-caption" variant="overline">
            Workspace
          </Typography>
          <ViewNavigation counts={counts} activeView={activeView} onSelect={setActiveView} />

          <Paper className="todo-sidebar-note" elevation={0}>
            <span className="todo-note-icon">
              <Sparkles size={15} aria-hidden="true" />
            </span>
            <Typography className="todo-note-copy" component="p" variant="subtitle2">
              A little progress adds up.
            </Typography>
            <Typography className="todo-note-detail" component="span" variant="caption">
              {counts.completed} tasks completed
            </Typography>
          </Paper>
          <div className="todo-sidebar-footer">
            <Avatar className="todo-avatar" color="success" size="small">
              D
            </Avatar>
            <span className="todo-profile-copy">
              <Typography className="todo-empty-state-title" component="strong" variant="subtitle2">
                Daymark
              </Typography>
              <Typography component="span" variant="caption">
                Personal space
              </Typography>
            </span>
            <span className="todo-online-dot" aria-hidden="true" />
          </div>
        </aside>

        <main className="todo-main">
          <header className="todo-mobile-header">
            <a className="todo-brand" href="#today" aria-label="Daymark home">
              <span className="todo-brand-icon">
                <ListTodo size={18} aria-hidden="true" />
              </span>
              <span>daymark</span>
            </a>
            <Typography className="todo-mobile-date" variant="caption">
              {dateHeading}
            </Typography>
          </header>

          <ViewNavigation counts={counts} activeView={activeView} onSelect={setActiveView} mobile />

          <div className="todo-content">
            <div className="todo-page-heading">
              <div>
                <Typography className="todo-eyebrow" variant="caption">
                  <CalendarDays size={14} aria-hidden="true" />
                  {dateHeading}
                </Typography>
                <Typography className="todo-page-title" component="h1" variant="h2">
                  {viewTitle(activeView)}
                </Typography>
                <Typography className="todo-heading-copy" component="p" variant="body2">
                  A clear list makes room for your best work.
                </Typography>
              </div>
              <TextField
                ref={searchInput}
                className="todo-search"
                inputClassName="todo-control-input"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search tasks"
                aria-label="Search tasks"
                startAdornment={<Search size={17} aria-hidden="true" />}
                endAdornment={<kbd className="todo-search-shortcut">/</kbd>}
              />
            </div>

            {storageError && (
              <Alert className="todo-storage-alert" severity="warning">
                {storageError}
              </Alert>
            )}

            <Paper className="todo-focus" elevation={0} aria-label="Task summary">
              <span className="todo-focus-mark">
                <span />
              </span>
              <div className="todo-focus-copy">
                <Typography component="strong" variant="subtitle2">
                  {counts.today} tasks on your plate
                </Typography>
                <Typography component="span" variant="caption">
                  Keep your focus on what matters today.
                </Typography>
              </div>
              <div className="todo-focus-progress">
                <Typography component="span" variant="caption">
                  {counts.completed} done
                </Typography>
                <Progress
                  className="todo-progress"
                  value={completion}
                  max={100}
                  label={`${completion}% of tasks completed`}
                />
              </div>
            </Paper>

            <form className="todo-composer-form" onSubmit={addTask}>
              <Paper className="todo-composer" elevation={1}>
                <div className="todo-composer-main">
                  <span className="todo-composer-plus">
                    <Plus size={18} aria-hidden="true" />
                  </span>
                  <TextField
                    className="todo-task-field"
                    inputClassName="todo-control-input"
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder="Add a task to your list..."
                    aria-label="Task title"
                    required
                  />
                </div>
                <div className="todo-composer-options">
                  <DatePicker
                    className="todo-date-field"
                    popoverClassName="todo-date-picker-popover"
                    value={draftDate}
                    onChange={setDraftDate}
                    aria-label="Due date"
                  />
                  <Select
                    className="todo-priority-field"
                    value={draftPriority}
                    options={priorityOptions}
                    onValueChange={setDraftPriority}
                    aria-label="Priority"
                  />
                  <Button
                    className="todo-add-button"
                    type="submit"
                    size="small"
                    disabled={!draft.trim()}
                  >
                    <Plus size={16} aria-hidden="true" />
                    Add task
                  </Button>
                </div>
              </Paper>
            </form>

            <div className="todo-list-toolbar">
              <div className="todo-list-heading">
                <Typography component="h2" variant="h4">
                  {activeView === 'today' ? 'Your list' : viewTitle(activeView)}
                </Typography>
                <Chip className="todo-list-count" size="small">
                  {visibleTasks.length} {visibleTasks.length === 1 ? 'task' : 'tasks'}
                </Chip>
              </div>
              <Button
                className="todo-clear-button"
                size="small"
                variant="text"
                onClick={clearCompleted}
                disabled={!counts.completed}
              >
                <Trash2 size={15} aria-hidden="true" />
                Clear completed
              </Button>
            </div>

            {visibleTasks.length ? (
              <Paper className="todo-task-paper" elevation={0}>
                <List className="todo-task-list" disablePadding>
                  {visibleTasks.map((task) => (
                    <TaskRow
                      key={task.id}
                      task={task}
                      onToggle={() => toggleTask(task.id)}
                      onDelete={() => deleteTask(task.id)}
                    />
                  ))}
                </List>
              </Paper>
            ) : (
              <Paper className="todo-empty-state" elevation={0}>
                <span className="todo-empty-icon">
                  <Search size={20} aria-hidden="true" />
                </span>
                <Typography component="strong" variant="subtitle2">
                  {search ? 'No matching tasks' : 'All clear for now'}
                </Typography>
                <Typography className="todo-empty-state-copy" component="span" variant="caption">
                  {search
                    ? 'Try another search.'
                    : 'Add a task above and give it a place in your day.'}
                </Typography>
              </Paper>
            )}

            <footer className="todo-list-footer">
              <Typography className="todo-footer-status" component="span" variant="caption">
                <span className={cx('todo-saved-indicator', storageError && 'todo-save-error')} />
                {storageError
                  ? 'Saving is unavailable'
                  : 'Changes save automatically on this device'}
              </Typography>
              <Typography component="span" variant="caption">
                {counts.inbox} active · {counts.completed} completed
              </Typography>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
