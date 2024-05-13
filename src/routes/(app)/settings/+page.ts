import type { PageLoad } from './$types';
import { browser } from '$app/environment';

type ServiceWorker = {
	scope: string;
	active: string | null;
}

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch('/info.json');
	const serviceWorkers: ServiceWorker[] = [];

	if(browser && 'serviceWorker' in navigator) {
		await navigator.serviceWorker.getRegistrations().then(registrations => {
			for(const registration of registrations) {
				serviceWorkers.push({
					scope: registration.scope,
					active: registration.active?.state || null
				});
			}
		});
	}

	return {
		serviceWorkers,
		...(await response.json())
	};
};
