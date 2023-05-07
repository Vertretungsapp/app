import type Plan from '$lib/api/server/class/Plan';
import { getCredentials } from '$lib/api/session';
import { NoCredentialsError } from '$lib/api/server/errors/NoCredentialsError';
import { PlanNotFoundError } from '$lib/api/server/errors/PlanNotFoundError';
import { InvalidCredentialsError } from '$lib/api/server/errors/InvalidCredentialsError';

export async function fetchPlan(date?: Date): Promise<Plan> {
	const creds = getCredentials();

	if (!creds) throw new NoCredentialsError();

	const authorization = btoa(`${creds.schoolnumber}:${creds.username}:${creds.password}`);

	const res = await fetch(`/api/plan${date ? '/' + new Date(date).getTime() : ''}`, {
		method: 'GET',
		headers: {
			Authorization: `Basic ${authorization}`
		}
	});

	if (res.status === 401) throw new InvalidCredentialsError();
	if (res.status === 404) throw new PlanNotFoundError();

	const json = await res.json();
	return json as Plan;
}
