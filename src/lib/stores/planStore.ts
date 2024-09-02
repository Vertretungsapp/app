import type { ISubstitutionPlan, Room, SchoolClass, Teacher } from 'indiware-api';
import { writable } from 'svelte/store';
import { PlanType, pluralizePlanType } from '$lib/api/planTypes';

export interface PlanStore {
	isRefreshing: boolean;
	date: Date;
	lastUpdated: Date | null;
	holidays: Date[];
	plan: ISubstitutionPlan | null;
	error?: string;
}

export const planStore = writable<PlanStore>({
	isRefreshing: false,
	date: new Date(),
	lastUpdated: null,
	holidays: [],
	plan: null,
	error: undefined
});

export function useSubstitutionPlan(): ISubstitutionPlan | null {
	let substitutionPlan: ISubstitutionPlan | null = null;
	planStore.subscribe((store) => {
		substitutionPlan = store.plan;
	});
	return substitutionPlan;
}

export function usePlan(type: PlanType, short: string, substitutionPlan: ISubstitutionPlan): SchoolClass | Teacher | Room  {
	return substitutionPlan[pluralizePlanType(type)].find((p) => p.name === short) as
		| SchoolClass
		| Teacher
		| Room;
}
