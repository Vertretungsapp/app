import { browser } from '$app/environment';

export function isDarkPreferred() {
	if (!browser || !window) return false;
	return window.matchMedia('(prefers-color-scheme: dark)').matches;
}
