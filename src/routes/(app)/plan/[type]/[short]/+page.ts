import { pluralizePlanType } from '$lib/api/planTypes';
import { hexadecimalToString } from '$lib/common/stringToHexadecimal';
import type { Room, SchoolClass, Teacher } from 'indiware-api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	const { substitutionPlan, type } = await parent();

	const short = hexadecimalToString(params.short);

	if (!substitutionPlan) {
		return {
			planNotFound: true,
			short
		};
	}

	const plan = substitutionPlan[pluralizePlanType(type)].find((p) => p.name === short) as
		| SchoolClass
		| Teacher
		| Room
		| undefined;

	return {
		plan,
		short
	};
};
