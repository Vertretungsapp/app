import { getCredentials } from '$lib/api/session';
import { runMigrations } from '$lib/migration/migrator';
import type { LayoutLoad } from './$types';
import { goto } from '$app/navigation';

export const ssr = false;
export const prerender = 'auto';

export const load: LayoutLoad = async ({ url }) => {
	await runMigrations();
	const credentials = getCredentials();
	if (!credentials && url.pathname != '/settings/credentials') {
		await goto('/settings/credentials');
		throw new Error('No credentials found');
	}

	return { credentials };
};
