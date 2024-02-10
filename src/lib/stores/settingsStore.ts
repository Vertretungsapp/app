import { isDarkPreferred } from '$lib/theming/darkMode';
import type { Credentials } from 'indiware-api';
import { writable } from 'svelte/store';

export interface SettingsStore {
	credentials: Credentials | null;
	darkMode: boolean;
	primaryColor: string;
}

export const settingsStore = writable<SettingsStore>({
	credentials: null,
	darkMode: isDarkPreferred(),
	primaryColor: '#2456df'
});
