import { getAll } from '$lib/cache/cacheHelper';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, url }) => {
	const { credentials } = await parent();
	const search = new URLSearchParams(url.search).get('q');

	return {
		items: getAll(credentials!).map((entity) => ({
			name: entity.name,
			type: entity.type
		})),
		search: search || ''
	};
};
