import { goto } from '$app/navigation';
import { getCredentials } from '$lib/api/session';
import type { LayoutLoad } from './$types';

export const ssr = false;
export const prerender = 'auto';

export const load: LayoutLoad = async ({ url }) => {
	const credentials = getCredentials();
	if (!credentials && url.pathname != '/settings/credentials') goto('/settings/credentials');
};
