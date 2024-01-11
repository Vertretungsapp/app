import { addPlan, getPlan } from '$lib/cache/cache';
import { format } from 'date-fns';
import type { Credentials, ISubstitutionPlan } from 'indiware-api';
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

	if (!credentials) throw new Error('Not logged in');

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
	});

	if (!plan.ok) throw new Error('Could not fetch plan');

	const planJson = (await plan.json()) as ISubstitutionPlan;
	addPlan(credentials.schoolnumber, planJson);
	return planJson;
}
