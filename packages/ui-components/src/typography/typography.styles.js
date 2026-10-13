import { register } from 'tailmantic/collector';

register('rgi-typography', {
  base: { tw: 'm-0 text-[var(--rgi-typography-color,var(--text,#edf2fb))]' },
  modifiers: {
    h1: { tw: 'text-4xl leading-tight tracking-tight' },
    h2: { tw: 'text-3xl leading-tight tracking-tight' },
    h3: { tw: 'text-2xl leading-snug' },
    h4: { tw: 'text-xl leading-snug' },
    subtitle1: { tw: 'text-base leading-6' },
    subtitle2: { tw: 'text-sm leading-5' },
    body1: { tw: 'text-sm leading-6' },
    body2: { tw: 'text-xs leading-5' },
    caption: { tw: 'text-xs leading-4' },
    overline: { tw: 'text-[10px] uppercase tracking-[.08em]' },
    'align-left': { tw: 'text-left' },
    'align-center': { tw: 'text-center' },
    'align-right': { tw: 'text-right' },
    'align-justify': { tw: 'text-justify' },
    'weight-regular': { tw: 'font-normal' },
    'weight-medium': { tw: 'font-medium' },
    'weight-bold': { tw: 'font-bold' },
    'color-primary': { tw: '[--rgi-typography-color:var(--rgi-blue,#9bbcff)]' },
    'color-secondary': { tw: '[--rgi-typography-color:var(--muted,#9aa8bd)]' },
    'color-muted': { tw: '[--rgi-typography-color:var(--subtle,#77849a)]' },
    'color-success': { tw: '[--rgi-typography-color:#69b890]' },
    'color-warning': { tw: '[--rgi-typography-color:#e9ad64]' },
    'color-danger': { tw: '[--rgi-typography-color:#e47b84]' },
  },
});

register('rgi-typography-example-scale', {
  base: { tw: 'flex w-full max-w-[660px] flex-col divide-y divide-[var(--border)]' },
});

register('rgi-typography-example-scale-row', {
  base: { tw: 'grid grid-cols-[58px_minmax(0,1fr)_76px] items-center gap-2 py-3 first:pt-1 last:pb-1' },
});

register('rgi-typography-example-scale-label', {
  base: { tw: 'text-[9px] font-medium uppercase tracking-[.08em] text-[var(--subtle)]' },
});

register('rgi-typography-example-sample', {
  base: { tw: 'min-w-0 truncate !text-[var(--text)]' },
});

register('rgi-typography-example-spec', {
  base: { tw: 'text-right font-mono text-[8px] tabular-nums text-[var(--subtle)]' },
});

register('rgi-typography-example-weight-picker', {
  base: { tw: 'flex flex-wrap gap-1.5' },
});

register('rgi-typography-example-weight-button', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-[var(--border)] bg-[var(--panel)] px-2 text-[9px] text-[var(--muted)] hover:bg-[var(--panel-raised)] hover:text-[var(--text)]' },
});

register('rgi-typography-example-weight-button span', {
  base: { tw: 'font-mono text-[8px] text-[var(--subtle)]' },
});

register('rgi-typography-example-weight-active', {
  base: { tw: 'border-[#547be8] bg-[#19253a] text-[#d8e3ff]' },
});

register('rgi-typography-example-weight-preview', {
  base: { tw: 'flex w-full max-w-[520px] flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4' },
});

register('rgi-typography-example-weight-meta', {
  base: { tw: 'text-[8px] font-semibold tracking-[.12em] text-[#93a8ce]' },
});

register('rgi-typography-example-weight-preview strong', {
  base: { tw: '!text-[18px] !leading-snug !tracking-[-.02em] !text-[var(--text)]' },
});

register('rgi-typography-example-weight-preview p', {
  base: { tw: 'max-w-[440px] !text-[11px] !leading-relaxed !text-[var(--muted)]' },
});

register('rgi-typography-example-controls', {
  base: { tw: 'flex flex-wrap items-center justify-between gap-2' },
});

register('rgi-typography-example-tone-picker', {
  base: { tw: 'flex flex-wrap gap-1.5' },
});

register('rgi-typography-example-tone-button', {
  base: { tw: 'inline-flex h-7 cursor-pointer items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--panel)] px-2 text-[8px] font-medium hover:bg-[var(--panel-raised)]' },
});

register('rgi-typography-example-tone-primary', {
  base: { tw: 'text-[#d9e4ff]' },
});

register('rgi-typography-example-tone-secondary', {
  base: { tw: 'text-[#acbad0]' },
});

register('rgi-typography-example-tone-muted', {
  base: { tw: 'text-[#77849a]' },
});

register('rgi-typography-example-tone-success', {
  base: { tw: 'text-[#7bd2a9]' },
});

register('rgi-typography-example-tone-warning', {
  base: { tw: 'text-[#f2c27b]' },
});

register('rgi-typography-example-tone-active', {
  base: { tw: 'border-[#547be8] bg-[#19253a]' },
});

register('rgi-typography-example-alignment-picker', {
  base: { tw: 'inline-flex items-center gap-0.5 rounded-md border border-[var(--border)] bg-[var(--panel)] p-0.5' },
});

register('rgi-typography-example-alignment-button', {
  base: { tw: 'inline-flex size-6 cursor-pointer items-center justify-center rounded border-0 bg-transparent text-[var(--subtle)] hover:text-[var(--text)]' },
});

register('rgi-typography-example-alignment-active', {
  base: { tw: 'bg-[#24334b] text-[#c7d8ff]' },
});

register('rgi-typography-example-color-preview', {
  base: { tw: 'flex w-full max-w-[520px] flex-col gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4' },
});

register('rgi-typography-example-align-center', {
  base: { tw: 'items-center text-center [&_p]:mx-auto' },
});

register('rgi-typography-example-align-right', {
  base: { tw: 'items-end text-right [&_p]:ml-auto' },
});

register('rgi-typography-example-eyebrow', {
  base: { tw: '!text-[8px] !font-semibold !tracking-[.12em]' },
});

register('rgi-typography-example-title', {
  base: { tw: '!text-[16px] !font-semibold !leading-snug !tracking-[-.015em]' },
});

register('rgi-typography-example-copy', {
  base: { tw: 'max-w-[440px] !text-[10px] !leading-relaxed !text-[var(--muted)]' },
});
