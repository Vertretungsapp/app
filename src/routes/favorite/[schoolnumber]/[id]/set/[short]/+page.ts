import type { PageLoad } from './$types';
export type PageData = {
	schoolnumber: string;
	id: number;
	short: string;
};

export const load = (async ({ params }) => {
	return { schoolnumber: params.schoolnumber, id: parseInt(params.id), short: params.short };
}) satisfies PageLoad;
