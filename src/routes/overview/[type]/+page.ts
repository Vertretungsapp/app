import type { PageLoad } from './$types';
import { browser } from '$app/environment';
import type { Plan } from '$lib/api/server/class/Plan';
import { PlanType } from '$lib/api/server/class/Plan';
import { fetchPlan } from '$lib/api/fetch';

export const load = (async ({ params }) => {
	if (!browser) return {
		plans: [],
		planType: PlanType.CLASS
	};

	const planType = params.type as PlanType;
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
