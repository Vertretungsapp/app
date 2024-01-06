import { writable } from 'svelte/store';

export interface PlanStore {
	currentDate: Date;
	holidays: Date[];
	isRefreshing: boolean;
}

export const planStore = writable<PlanStore>({
	currentDate: new Date(),
	holidays: [],
	isRefreshing: false
});
