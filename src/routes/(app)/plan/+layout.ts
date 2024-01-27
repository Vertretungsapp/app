import { fetchPlan } from '$lib/api/clientHelpers';
import { getCredentials } from '$lib/api/session';
import { planStore } from '$lib/stores/planStore';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url }) => {
	const credentials = getCredentials();
	if (!credentials) error(401, 'Bitte melde dich zunächst in den Einstellungen an.');

	const date = url.searchParams.get('date');
	const forceReload = url.searchParams.get('forceReload');

	planStore.update((store) => ({
		...store,
		isRefreshing: true
	}));

	try {
		const substitutionPlan = await fetchPlan({
			customFetch: fetch,
			date: date ? new Date(date) : undefined,
			noCache: forceReload === 'true'
		});

		planStore.update((store) => ({
			...store,
			isRefreshing: false
		}));

		if (!substitutionPlan) throw new Error('Could not fetch plan');

		return {
			substitutionPlan,
			date
		};
	} catch (error) {
		planStore.update((store) => ({
			...store,
			isRefreshing: false
		}));

		return {
			error: true,
			date
		};
	}
};
