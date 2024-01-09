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

	// Sort names like school classes
	// 1A, 1B, 1C, 2A, 2B, 2C, 3A, ...
	names.sort((a, b) => {
		const aNum = parseInt(a, 10);
		const bNum = parseInt(b, 10);

		if (aNum === bNum) {
			return a.localeCompare(b);
		}

		return aNum - bNum;
	});

	return {
		names
	};
};
