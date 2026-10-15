import type { Registration } from './index.js';

export interface RegistrationManifest {
	classes: Record<string, Registration>;
	groups: Record<string, Record<string, Registration>>;
}

/**
 * Shorthand config forms accepted by `register()` and `register.all()`.
 *
 * All forms are normalised internally:
 *
 * ```ts
 * // 1. string — most compact
 * register('tm-foo', 'flex items-center gap-2');
 *
 * // 2. string array — useful for long class lists
 * register('tm-foo', ['flex', 'items-center', 'gap-2']);
 *
 * // 3. flat { tw } — string or array
 * register('tm-foo', { tw: 'flex items-center gap-2' });
 * register('tm-foo', { tw: ['flex', 'items-center', 'gap-2'] });
 *
 * // 4. canonical { base: { tw } }
 * register('tm-foo', { base: { tw: 'flex items-center gap-2' } });
 *
 * // 5. full form with modifiers
 * register('tm-foo', {
 *   base: { tw: 'flex items-center' },
 *   modifiers: { active: { tw: 'bg-blue-500' } },
 * });
 * ```
 */
export type RegisterConfig = string | string[] | ({ tw: string | string[] } & Omit<Registration, 'base' | 'modifiers'>) | Registration;

export interface CollectorRegister {
	(name: string, config?: RegisterConfig): void;
	/**
	 * Register multiple classes at once.
	 *
	 * **Flat map** (classic):
	 * ```ts
	 * register.all({ 'tm-accordion': '...', 'tm-accordion-item': '...' });
	 * ```
	 *
	 * **Prefixed map** — avoids repeating the component prefix:
	 * ```ts
	 * register.all('tm-accordion', {
	 *   '':       '...',  // → 'tm-accordion'         (root)
	 *   'item':   '...',  // → 'tm-accordion-item'
	 *   '&item-expanded .tm-accordion-chevron': '...',  // → 'tm-accordion-item-expanded .tm-accordion-chevron'
	 *   '&panel[hidden]': '...',                         // → 'tm-accordion-panel[hidden]'
	 * });
	 * ```
	 * Keys starting with `&` have the prefix prepended with `-` then the rest used as-is,
	 * allowing compound selectors (spaces, attribute selectors, pseudo-classes).
	 */
	all(configs: Record<string, RegisterConfig>): void;
	all(prefix: string, configs: Record<string, RegisterConfig>): void;
	group(name: string, components?: Record<string, Registration>): void;
}

export declare const register: CollectorRegister;
export declare function getManifest(): RegistrationManifest;
export declare function resetManifest(): void;