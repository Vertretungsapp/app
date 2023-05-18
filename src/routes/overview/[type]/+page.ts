import type { PageLoad } from './$types';
import { browser } from '$app/environment';
import type { Plan } from '$lib/api/server/class/Plan';
import { PlanType } from '$lib/api/server/class/Plan';
import { fetchPlan } from '$lib/api/fetch';

export const load = (async ({ params }) => {
	if (!browser)
		return {
			plans: [],
			planType: PlanType.CLASS
		};

	let planType;

	switch (params.type) {
		case 'class':
			planType = PlanType.CLASS;
			break;
		case 'room':
			planType = PlanType.ROOM;
			break;
		default:
			planType = PlanType.CLASS;
			break;
	}

	let plans: Plan[] = [];

	try {
		const schoolPlan = await fetchPlan();

		if (planType === PlanType.CLASS) plans = schoolPlan.classes;
		else if (planType === PlanType.ROOM) plans = schoolPlan.rooms;

		return { plans, planType };
	} catch (e) {
		window.location.href = '/';
		return;
	}
}) satisfies PageLoad;
