import { getSchoolnumber } from '$lib/api/session';
import type { PageLoad } from './$types';

export type PageData = {
	schoolnumber: string;
	id: number;
};

export const load = (async ({ params }) => {
	return { schoolnumber: getSchoolnumber(), id: parseInt(params.id) };
}) satisfies PageLoad;
