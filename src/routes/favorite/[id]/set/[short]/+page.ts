import type { PageLoad } from './$types';
import {getSchoolnumber} from "$lib/api/session";
export type PageData = {
	schoolnumber: string;
	id: number;
	short: string;
};

export const load = (async ({ params }) => {
	return { schoolnumber: getSchoolnumber(), id: parseInt(params.id), short: params.short };
}) satisfies PageLoad;
