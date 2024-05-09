import { PlanType } from '$lib/api/planTypes';
import { getAllClasses, getAllRooms, getAllTeachers } from '$lib/cache/cacheHelper';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { type, credentials } = await parent();

	const names: string[] = [];

	switch (type) {
		case PlanType.SCHOOL_CLASS:
			names.push(...getAllClasses(credentials!));
			names.sort((a, b) => {
				const aNum = parseInt(a, 10);
				const bNum = parseInt(b, 10);

				if (aNum === bNum) {
					return a.localeCompare(b);
				}

				return aNum - bNum;
			});
			break;

		case PlanType.ROOM:
			names.push(...getAllRooms(credentials!));
			names.sort((a, b) => a.localeCompare(b));
			break;

		case PlanType.TEACHER:
			names.push(...getAllTeachers(credentials!));
			names.sort((a, b) => a.localeCompare(b));
			break;
	}

	return {
		names
	};
};
