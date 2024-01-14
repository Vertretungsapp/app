import type { PlanType } from '$lib/api/planTypes';

export type Filter = {
	schoolnumber: string;
	name: string;
	ignoredLessons: string[];
	type: PlanType;
	active: boolean;
};

export function createFilter(schoolnumber: string, name: string, type: PlanType): Filter {
	const filter = {
		schoolnumber,
		name,
		ignoredLessons: [],
		type,
		active: false
	} as Filter;

	localStorage.setItem(`filter.${schoolnumber}.${name}`, JSON.stringify(filter));

	return filter;
}

export function getFilter(schoolnumber: string, name: string): Filter | null {
	const filter = localStorage.getItem(`filter.${schoolnumber}.${name}`);
	if (!filter) return null;
	return JSON.parse(filter) as Filter;
}

export function updateFilter(filter: Filter): void {
	localStorage.setItem(`filter.${filter.schoolnumber}.${filter.name}`, JSON.stringify(filter));
}

export function deleteFilter(schoolnumber: string, name: string): void {
	localStorage.removeItem(`filter.${schoolnumber}.${name}`);
}
