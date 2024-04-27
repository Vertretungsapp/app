import { goto } from '$app/navigation';
import { getAllInfos } from '$lib/cache/cacheHelper';
import { getFavorites, getPrimary } from '$lib/favorites/favorites';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { credentials } = await parent();

	if (!credentials) {
		await goto('/settings/credentials');
	}

	return {
		infos: getAllInfos(credentials),
		favorites: getFavorites(credentials.schoolnumber),
		primaryFavorite: getPrimary()
	};
};
