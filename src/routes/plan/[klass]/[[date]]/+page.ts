import type { PageLoad } from './$types';
import { browser } from '$app/environment';
export const load = (async ({ params }) => {
	if (!browser) return {};

	const { date, klass } = params;

	return {
		klass,
		date
	};
}) satisfies PageLoad;
