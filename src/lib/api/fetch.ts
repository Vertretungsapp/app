import type Plan from '$lib/api/server/class/Plan';
import { getCredentials } from '$lib/api/session';
import { NoCredentialsError } from '$lib/api/server/errors/NoCredentialsError';

export async function fetchPlan(date?: Date): Promise<Plan> {
	const creds = getCredentials();

	if (!creds) throw new NoCredentialsError();

	const body = {
		credentials: creds,
		date: date ? date.toISOString() : null
	};

	const res = await fetch(`/api/plan/${date || ''}`, {
		method: 'POST',
		body: JSON.stringify(body)
	});

	const json = await res.json();
	return json as Plan;
}
