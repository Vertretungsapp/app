import { PlanType } from '$lib/api/planTypes';
import { generateRoomTimetable, generateTeacherTimetable } from '$lib/cache/cacheHelper';
import { createFilter, getFilter } from '$lib/filter/filter';
import { error } from '@sveltejs/kit';
import type { SchoolClass } from 'indiware-api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { credentials, type, plan, short } = await parent();

	if (!plan) error(404, 'Plan not found');

	let filter = getFilter(credentials.schoolnumber, short);
	if (!filter) filter = createFilter(credentials.schoolnumber, short, type);

	switch (type) {
		case PlanType.SCHOOL_CLASS:
			return {
				timetable: (plan as SchoolClass).lessons,
				filter
			};

		case PlanType.ROOM:
			return {
				timetable: generateRoomTimetable(credentials, filter.name),
				filter
			};

		case PlanType.TEACHER:
			return {
				timetable: generateTeacherTimetable(credentials, filter.name),
				filter
			};
	}
};
