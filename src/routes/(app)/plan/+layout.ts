import { fetchPlan } from '$lib/api/clientHelpers';
import { planStore } from '$lib/stores/planStore';
import type { ISubstitutionPlan } from 'indiware-api';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch, url }) => {
	const date = url.searchParams.get('date');
	const forceReload = url.searchParams.get('forceReload');

	planStore.update((store) => {
		return {
			...store,
			isRefreshing: true
		};
	});

	return await fetchPlan({
		customFetch: fetch,
		date: date ? new Date(date) : undefined,
		noCache: forceReload === 'true'
	})
		.then((substitutionPlan) => {
			if (!substitutionPlan) throw new Error('Could not fetch plan');

			return {
				substitutionPlan,
				date
			};
		})
		.catch(() => {
			// This is needed, so an existing plan does not get overwritten by a refresh error
			// See issue #161
			let plan: ISubstitutionPlan | null = null;
			planStore.subscribe((store) => {
				plan = store.plan;
			});

			return {
				error: true,
				date,
				substitutionPlan: plan
			};
		})
		.finally(() => {
			planStore.update((store) => ({
				...store,
				isRefreshing: false
			}));
		});
};
