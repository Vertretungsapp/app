import type { PageLoad } from './$types';

export type PageData = {
	id: number;
	short: string;
};

export const load = (async ({ params }) => {
	return { id: parseInt(params.id), short: params.short };
}) satisfies PageLoad;
