import type { ISubstitutionPlan } from 'indiware-api';
import { writable } from 'svelte/store';

export interface PlanStore {
	currentDate: Date;
	holidays: Date[];
	isRefreshing: boolean;
	plan: ISubstitutionPlan | null;
}

export const planStore = writable<PlanStore>({
	currentDate: new Date(),
	holidays: [],
	isRefreshing: false,
	plan: null
});
