import type { PageLoad } from './$types';

export type PageData = {
	schoolnumber: string;
	id: number;
};

export const load = (async ({ params }) => {
	return { schoolnumber: params.schoolnumber, id: parseInt(params.id) };
}) satisfies PageLoad;
