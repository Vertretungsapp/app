import type { PageLoad } from './$types';
import { browser } from '$app/environment';
import type { Plan } from '$lib/api/server/class/Plan';
import { PlanType } from '$lib/api/server/class/Plan';
import { fetchPlan } from '$lib/api/fetch';

export type PageData = {
	id: number;
	classes: Plan[];
	rooms: Plan[];
};

export const load = (async ({ params }) => {
	if (!browser)
		return {
			plans: [],
			planType: PlanType.CLASS
		};

	let data: PageData;

	try {
		const schoolPlan = await fetchPlan();

		data = {
			id: parseInt(params.id),
			classes: schoolPlan.classes,
			rooms: schoolPlan.rooms
		};

		console.log(data);

		return data;
	} catch (e) {
		window.location.href = '/';
		return;
	}
}) satisfies PageLoad;
