import type { ISubstitutionPlan } from 'indiware-api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const plan = await fetch('/api/plan', {
		headers: {
			// TODO: This is temporary, should be set by the user
			Authorization: `Basic ${btoa(`10000000:schueler:123456789`)}`
		}
	});

	return {
		plan: (await plan.json()) as ISubstitutionPlan
	};
};
