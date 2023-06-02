import { browser } from '$app/environment';
import { getPlan } from '$lib/api/api';
import { getPlanFromSchoolPlan } from '$lib/api/commonTools';
import type Class from '$lib/api/stundenplan42/class/Class';
import type { Plan, PlanType } from '$lib/api/stundenplan42/class/Plan';
import type PlannedLesson from '$lib/api/stundenplan42/class/PlannedLesson';
import type SchoolPlan from '$lib/api/stundenplan42/class/SchoolPlan';
import { PlanNotFoundError } from '$lib/api/stundenplan42/errors/PlanNotFoundError';
import type { Filter } from '$lib/filter';
import { createFilter, getFilter, updateFilter } from '$lib/filter';
import type { PageLoad } from './$types';

export type PageData = {
	short: string;
	date: string | undefined;
	planData: PlanData;
	filter: Filter | undefined;
};

export type PlanData = {
	schoolPlan: SchoolPlan;
	plan: Plan;
	schedule: PlannedLesson[];
	date: Date;
	type: PlanType;
};

export const load = (async ({ url }) => {
	if (!browser) return {};

	const date = url.searchParams.get('date')
		? new Date(url.searchParams.get('date') as string)
		: undefined;
	const short = url.searchParams.get('short') as string;

	const planData = await _fetchPlanData(short, false, date ? new Date(date) : undefined);

	let filter = getFilter(short);

	if(planData.type === "Klasse") {
		if (filter) {
			updateFilter(filter, (planData.plan as Class).lessons);
		} else {
			filter = createFilter(short, (planData.plan as Class).lessons);
		}
	}

	return {
		short,
		date: date || undefined,
		planData,
		filter: planData.type === 'Klasse' ? filter : undefined
	};
}) satisfies PageLoad;

export async function _fetchPlanData(
	short: string,
	force: boolean,
	date?: Date
): Promise<PlanData> {
	const schoolPlan = await getPlan(force, date);
	const plan = getPlanFromSchoolPlan(short, schoolPlan);
	if (!plan) throw new PlanNotFoundError();

	return {
		schoolPlan,
		plan: plan,
		schedule: plan.schedule,
		date: new Date(schoolPlan.date),
		type: plan.type
	};
}
