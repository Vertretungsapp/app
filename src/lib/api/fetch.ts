import type Plan from '$lib/api/server/class/Plan';
import { getCredentials } from '$lib/api/session';
import { NoCredentialsError } from '$lib/api/server/errors/NoCredentialsError';
import { PlanNotFoundError } from '$lib/api/server/errors/PlanNotFoundError';
import { InvalidCredentialsError } from '$lib/api/server/errors/InvalidCredentialsError';

export async function fetchPlan(date?: Date): Promise<Plan> {
	const creds = getCredentials();

	if (!creds) throw new NoCredentialsError();

	const body = {
		credentials: creds,
		date: date ? date.getTime() : null
	};

	const res = await fetch(`/api/plan/`, {
		method: 'POST',
		body: JSON.stringify(body)
	});

	if (res.status === 401) throw new InvalidCredentialsError();
	if (res.status === 404) throw new PlanNotFoundError();

	const json = await res.json();
	return json as Plan;
}
