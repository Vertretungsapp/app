import { addPlan, getPlan } from '$lib/cache/cache';
import type { Credentials, ISubstitutionPlan } from 'indiware-api';
import { getCredentials } from './session';

export interface FetchPlanOptions {
	date?: Date;
	customFetch?: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
	customCredentials?: Credentials;
}

export async function fetchPlan({ date, customFetch, customCredentials }: FetchPlanOptions = {}) {
	const fetch = customFetch || window.fetch;
	const credentials = customCredentials || getCredentials();

	if (!credentials) throw new Error('Not logged in');

	const cachedPlan = getPlan(credentials.schoolnumber, date);

	if (cachedPlan) return cachedPlan;

	function getAuthorizationHeader(credentials: Credentials) {
		return `Basic ${btoa(
			`${credentials.schoolnumber}:${credentials.username}:${credentials.password}`
		)}`;
	}

	const plan = await fetch(`/api/plan${date ? `/${date.getTime()}` : ''}`, {
		headers: {
			Authorization: getAuthorizationHeader(credentials)
		}
	});

	const planJson = (await plan.json()) as ISubstitutionPlan;
	addPlan(credentials.schoolnumber, planJson);
	return planJson;
}
