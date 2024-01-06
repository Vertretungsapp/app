import { fetchPlan } from '$lib/api/clientHelpers';
import { login } from '$lib/api/session';
import { planStore } from '$lib/stores/planStore';
import type { LayoutLoad } from './$types';

export const ssr = false;
export const load: LayoutLoad = async ({ fetch, url }) => {
	await login(
		{
			schoolnumber: '10000000',
			username: 'schueler',
			password: '1234567890'
		},
		fetch
	);

	const date = url.searchParams.get('date');

	try {
		const substitutionPlan = await fetchPlan({
			customFetch: fetch,
			date: date ? new Date(date) : undefined
		});

		if (!substitutionPlan) throw new Error('Could not fetch plan');

		planStore.update((store) => ({
			...store,
			holidays: substitutionPlan.holidays,
			currentDate: substitutionPlan.date
		}));

		return {
			substitutionPlan
		};
	} catch (error) {
		planStore.update((store) => ({
			...store,
			currentDate: date ? new Date(date) : new Date()
		}));

		return {
			error: true
		};
	}
};
