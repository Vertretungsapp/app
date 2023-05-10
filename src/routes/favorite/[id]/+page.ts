import type { PageLoad } from './$types';
import { browser } from '$app/environment';
export const load = (async ({ params }) => {
	if (!browser) return {};

	const { id } = params;

	return { id: parseInt(id) };
}) satisfies PageLoad;
