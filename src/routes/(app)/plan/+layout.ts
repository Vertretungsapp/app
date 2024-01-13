import { goto } from '$app/navigation';
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

		if (!substitutionPlan) throw new Error('Could not fetch plan');

		planStore.update((store) => ({
			...store,
			holidays: substitutionPlan.holidays,
			currentDate: substitutionPlan.date,
			isRefreshing: false
		}));

		if (forceReload === 'true') {
			const params = new URLSearchParams(url.searchParams);
			params.delete('forceReload');
			goto(`?${params.toString()}`);
		}

		return {
			substitutionPlan
		};
	} catch (error) {
		planStore.update((store) => ({
			...store,
			currentDate: date ? new Date(date) : new Date(),
			isRefreshing: false
		}));

		if (forceReload === 'true') {
			const params = new URLSearchParams(url.searchParams);
			params.delete('forceReload');
			goto(`?${params.toString()}`);
		}

		return {
			error: true
		};
	}
};
