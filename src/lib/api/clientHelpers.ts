import { addPlan, getPlan } from '$lib/cache/cache';
import { format } from 'date-fns';
import type { Credentials, ISubstitutionPlan } from 'indiware-api';
import toast from 'svelte-french-toast';
import { getCredentials } from './session';

export interface FetchPlanOptions {
	date?: Date;
	customFetch?: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
	customCredentials?: Credentials;
	noCache?: boolean;
}

export async function fetchPlan({
	date,
	customFetch,
	customCredentials,
	noCache
}: FetchPlanOptions = {}): Promise<ISubstitutionPlan | null> {
	const fetch = customFetch || window.fetch;
	const credentials = customCredentials || getCredentials();

	if (!credentials) {
		toast.error('Bitte melde dich zunächst in den Einstellungen an.');
		throw new Error('Not logged in');
	}

	if (!noCache) {
		const cachedPlan = getPlan(credentials.schoolnumber, date);
		if (cachedPlan) return cachedPlan;
	}

	function getAuthorizationHeader(credentials: Credentials) {
		return `Basic ${btoa(
			`${credentials.schoolnumber}:${credentials.username}:${credentials.password}`
		)}`;
	}

	const plan = await fetch(`/api/plan${date ? `?date=${format(date, 'yyyy-MM-dd')}` : ''}`, {
		headers: {
			Authorization: getAuthorizationHeader(credentials)
		}
	}).catch((err) => {
		throw err;
	});

	if (!plan.ok) {
		switch (plan.status) {
			case 401:
				toast.error('Die Zugangsdaten scheinen nicht mehr zu stimmen!');
				break;
			case 404:
				toast.error(`Kein Vertretungsplan für diesen Tag (${date ? format(new Date(date), "dd.MM") : "N/A"}) gefunden.`);
				break;
			default:
				toast.error('Ein unbekannter Fehler ist aufgetreten');
				break;
		}

		throw new Error('Could not fetch plan');
	}

	const planJson = (await plan.json()) as ISubstitutionPlan;
	addPlan(credentials.schoolnumber, planJson);
	return planJson;
}
