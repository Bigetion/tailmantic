/**
 * src/tailmantics/index.js
 *
 * Manifest entry — import all registration files here.
 * The Vite plugin reads this file, compiles everything through
 * Tailwind v4, and serves the result as virtual:tailmantic.css.
 *
 * Add more files below as your design system grows.
 */
import { getManifest } from 'tailmantic/collector';

// Custom design-system tokens (your own components)
import './button.js';
import './badge.js';
import './card.js';
import './input.js';

// @tailmantic/ui-components — styles for components used in the showcase section
import '@tailmantic/ui-components/button/styles';
import '@tailmantic/ui-components/card/styles';
import '@tailmantic/ui-components/alert/styles';
import '@tailmantic/ui-components/badge/styles';
import '@tailmantic/ui-components/tabs/styles';
import '@tailmantic/ui-components/dialog/styles';
import '@tailmantic/ui-components/text-field/styles';

// Dark theme token overrides — must come AFTER component styles
import '@tailmantic/ui-components/tokens/dark';

export default getManifest();
