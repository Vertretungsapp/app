import { getFavorite } from '$lib/favorites/favorites';
import { createFilter, getFilter } from '$lib/filter/filter';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { credentials, short, type } = await parent();

	let filter = getFilter(credentials!.schoolnumber, short);
	if (!filter) filter = createFilter(credentials!.schoolnumber, short, type);

	return {
		filter,
		isFavorite: getFavorite(credentials!.schoolnumber, short, type) !== null
	};
};
