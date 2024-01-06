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

	localStorage.setItem('credentials', JSON.stringify(credentials));
}

export function logout(): void {
	localStorage.removeItem('credentials');
}

export function getCredentials(): Credentials | null {
	const credentials = localStorage.getItem('credentials');
	if (!credentials) return null;
	return JSON.parse(credentials);
}
