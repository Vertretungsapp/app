import { browser } from '$app/environment';
import { loadTheme } from '$lib/themeSwitcher';

export const prerender = true;
export const load = async () => {
	if (!browser) return;
	loadTheme();
};
