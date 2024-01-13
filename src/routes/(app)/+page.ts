import { getAllInfos } from '$lib/cache/cacheHelper';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({}) => {
	return {
		infos: getAllInfos()
	};
};
