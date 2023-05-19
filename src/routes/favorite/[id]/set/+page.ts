import { browser } from '$app/environment';
import { getPlan } from '$lib/api/api';
import type { Plan } from '$lib/api/stundenplan42/class/Plan';
import { PlanType } from '$lib/api/stundenplan42/class/Plan';
import type { PageLoad } from './$types';

export type PageData = {
	schoolnumber: string;
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
		const schoolPlan = await getPlan();

		data = {
			schoolnumber: schoolPlan.schoolnumber,
			id: parseInt(params.id),
			classes: schoolPlan.classes,
			rooms: schoolPlan.rooms
		};

		return data;
	} catch (e) {
		window.location.href = '/';
		return;
	}
}) satisfies PageLoad;
