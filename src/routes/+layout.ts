import { browser } from '$app/environment';
import { loadTheme } from '$lib/themeSwitcher';

export const load = async () => {
	if (!browser) return;
	loadTheme();
};
