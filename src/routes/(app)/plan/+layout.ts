import { fetchPlan } from '$lib/api/clientHelpers';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url }) => {
	const date = url.searchParams.get('date');

	await fetchPlan({
		customFetch: fetch,
		date: date ? new Date(date) : undefined
	})
};
