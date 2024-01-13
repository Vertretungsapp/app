import { settingsStore } from '$lib/stores/settingsStore';
import type { Credentials } from 'indiware-api';
import { fetchPlan } from './clientHelpers';

export async function login(
	credentials: Credentials,
	fetch?: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
): Promise<void> {
	await fetchPlan({
		customCredentials: credentials,
		customFetch: fetch
	});

	settingsStore.set({ credentials });
}

export function logout(): void {
	settingsStore.set({ credentials: null });
}

export function getCredentials(): Credentials | null {
	if (typeof localStorage === 'undefined') return null;
	const settings = localStorage.getItem('settings');
	if (!settings) return null;
	return JSON.parse(settings).credentials;
}
