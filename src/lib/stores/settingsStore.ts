import { getCredentials } from '$lib/api/session';
import type { Credentials } from 'indiware-api';
import { writable } from 'svelte/store';

export interface SettingsStore {
	credentials: Credentials | null;
}

export const settingsStore = writable<SettingsStore>({
	credentials: getCredentials()
});
