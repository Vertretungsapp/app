import { PlanType } from '$lib/api/planTypes';
import { getAllClasses, getAllRooms, getAllTeachers } from '$lib/cache/cacheHelper';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { type } = await parent();

	const names: string[] = [];

	switch (type) {
		case PlanType.SCHOOL_CLASS:
			names.push(...getAllClasses());
			break;

		case PlanType.ROOM:
			names.push(...getAllRooms());
			break;

		case PlanType.TEACHER:
			names.push(...getAllTeachers());
			break;
	}

	return {
		names
	};
};
