import { fetchPlan } from '$lib/api/clientHelpers';
import { login } from '$lib/api/session';
import type { LayoutLoad } from './$types';

export const ssr = false;
export const load: LayoutLoad = async ({ fetch }) => {
	await login(
		{
			schoolnumber: '10000000',
			username: 'schueler',
			password: '1234567890'
		},
		fetch
	);

	const substitutionPlan = await fetchPlan({ customFetch: fetch });

	return {
		substitutionPlan
	};
};
