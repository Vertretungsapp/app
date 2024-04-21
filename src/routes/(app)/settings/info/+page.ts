import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/info.json');
	const serviceWorkers = await navigator.serviceWorker.getRegistrations();
	return {
		serviceWorkers: serviceWorkers.map((sw) => ({
			scope: sw.scope,
			active: sw.active?.state
		})),
		...(await response.json())
	};
};
