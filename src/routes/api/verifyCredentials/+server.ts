import { fetchPlan, verifyCredentials } from '$lib/api/server/stundenplan24';
import { fromJson } from '$lib/api/server/class/Plan';
import { json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { tr } from 'date-fns/locale';
import { NoCredentialsError } from '$lib/api/server/errors/NoCredentialsError';
import { InvalidCredentialsError } from '$lib/api/server/errors/InvalidCredentialsError';
import { PlanNotFoundError } from '$lib/api/server/errors/PlanNotFoundError';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	const { credentials } = await request.json();

	try {
		await verifyCredentials(credentials);
	} catch (e) {
		if (e instanceof NoCredentialsError || e instanceof InvalidCredentialsError)
			return json({ error: 'Wrong credentials' }, { status: 401 });
		if (e instanceof PlanNotFoundError) return json({ error: 'Plan not found' }, { status: 404 });
	}

	return json({});
};
