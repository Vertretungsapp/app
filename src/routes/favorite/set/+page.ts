import { getSchoolnumber } from '$lib/api/session';
import type { PageLoad } from './$types';
import {browser} from "$app/environment";
export type PageData = {
	schoolnumber: string;
	id: number;
	short: string;
};

export const load = (async ({ url }) => {
	if(!browser) return {}
	return { schoolnumber: getSchoolnumber(), id: parseInt(url.searchParams.get("id") as string), short: url.searchParams.get("short") as string};
}) satisfies PageLoad;
