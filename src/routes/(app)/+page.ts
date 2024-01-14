import { getAllInfos } from '$lib/cache/cacheHelper';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { credentials } = await parent();

	return {
		infos: getAllInfos(credentials)
	};
};
