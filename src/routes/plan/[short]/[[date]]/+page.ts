import type { PageLoad } from './$types';
import { browser } from '$app/environment';
export const load = (async ({ params }) => {
	if (!browser) return {};

	const { date, short } = params;

	return {
		short,
		date
	};
}) satisfies PageLoad;
