import { goto } from '$app/navigation';
import { getCredentials } from '$lib/api/session';
import { runMigrations } from '$lib/migration/migrator';
import type { Credentials } from 'indiware-api';
import type { LayoutLoad } from './$types';

export const ssr = false;
export const prerender = 'auto';

export const load: LayoutLoad = async ({ url }) => {
	await runMigrations();
	const credentials = getCredentials();
	if (!credentials && url.pathname != '/settings/credentials') goto('/settings/credentials');
	return { credentials } as { credentials: Credentials };
};
