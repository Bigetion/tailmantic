const manifest = { classes: {}, groups: {} };

export function register(name, config = {}) {
	manifest.classes[name] = config;
}

register.all = function all(prefixOrConfigs, configs) {
	// register.all({ 'tm-foo': '...' })  — classic flat map
	if (configs === undefined) {
		Object.assign(manifest.classes, prefixOrConfigs);
		return;
	}

	// register.all('tm-accordion', { '': '...', 'item': '...', '&item-expanded .tm-accordion-chevron': '...' })
	// Key resolution:
	//   ''        → prefix             (root)
	//   'item'    → prefix-item        (suffix, joined with '-')
	//   '&...'    → strip '&', treat rest as suffix → prefix-rest
	//              if rest contains spaces or special chars it becomes a compound selector
	const prefix = prefixOrConfigs;
	for (const [key, value] of Object.entries(configs)) {
		let name;
		if (key === '') {
			name = prefix;
		} else if (key.startsWith('& ')) {
			name = `${prefix} ${key.slice(2)}`;
		} else if (key.startsWith('&')) {
			const rest = key.slice(1);
			name = rest ? `${prefix}-${rest}` : prefix;
		} else {
			name = `${prefix}-${key}`;
		}
		manifest.classes[name] = value;
	}
};

register.group = function group(name, components = {}) {
	manifest.groups[name] = components;
};

export function getManifest() {
	return {
		classes: { ...manifest.classes },
		groups: { ...manifest.groups },
	};
}

export function resetManifest() {
	manifest.classes = {};
	manifest.groups = {};
}