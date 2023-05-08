import type SchoolPlan from '$lib/api/server/class/SchoolPlan';
import { getCredentials } from '$lib/api/session';
import { NoCredentialsError } from '$lib/api/server/errors/NoCredentialsError';
import { PlanNotFoundError } from '$lib/api/server/errors/PlanNotFoundError';
import { InvalidCredentialsError } from '$lib/api/server/errors/InvalidCredentialsError';

/**
 * Fetches a SchoolPlan plan from the server
 * @param date The date to fetch the plan for, if undefined, the latest plan will be fetched
 * @param force If true, the plan will be fetched from the server, even if it is cached
 */
export async function fetchPlan(date?: Date, force?: boolean): Promise<SchoolPlan> {
	const creds = getCredentials();

	if (!creds) throw new NoCredentialsError();

	const authorization = btoa(`${creds.schoolnumber}:${creds.username}:${creds.password}`);

	const headers = new Headers();
	headers.set('Authorization', `Basic ${authorization}`);
	if (force) headers.set('Cache-Control', 'no-cache');

	const res = await fetch(`/api/plan${date ? '/' + new Date(date).getTime() : ''}`, {
		method: 'GET',
		headers: headers
	});

	if (res.status === 401) throw new InvalidCredentialsError();
	if (res.status === 404) throw new PlanNotFoundError();

	const json = await res.json();
	return json as SchoolPlan;
}
