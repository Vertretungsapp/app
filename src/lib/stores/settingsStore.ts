import { isDarkPreferred } from '$lib/theming/darkMode';
import type { Credentials } from 'indiware-api';
import { writable } from 'svelte/store';

// I don't know where to put this, so I just put it here
export const PRIMARY_COLOR = '#2456df';

export interface SettingsStore {
	credentials: Credentials | null;
	darkMode: boolean;
	primaryColor: string;
}

export const settingsStore = writable<SettingsStore>({
	credentials: null,
	darkMode: isDarkPreferred(),
	primaryColor: PRIMARY_COLOR
});
