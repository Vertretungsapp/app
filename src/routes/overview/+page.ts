import { browser } from '$app/environment';
import { getPlan } from '$lib/api/api';
import type { Plan } from '$lib/api/stundenplan42/class/Plan';
import { PlanType } from '$lib/api/stundenplan42/class/Plan';
import type { PageLoad } from './$types';

export const load = (async ({ url }) => {
	if (!browser)
		return {
			plans: [],
			planType: PlanType.CLASS
		};

	let planType;

	switch (url.searchParams.get('type')) {
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
		const schoolPlan = await getPlan();

		if (planType === PlanType.CLASS) plans = schoolPlan.classes;
		else if (planType === PlanType.ROOM) plans = schoolPlan.rooms;

		return { plans, planType };
	} catch (e) {
		window.location.href = '/';
		return;
	}
}) satisfies PageLoad;
