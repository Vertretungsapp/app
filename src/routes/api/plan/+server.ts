import { fetchPlan } from '$lib/api/server/stundenplan24';
import { fromJson } from '$lib/api/server/class/Plan';
import { json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { NoCredentialsError } from '$lib/api/server/errors/NoCredentialsError';
import { InvalidCredentialsError } from '$lib/api/server/errors/InvalidCredentialsError';
import { PlanNotFoundError } from '$lib/api/server/errors/PlanNotFoundError';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	const { credentials, date } = await request.json();

	const planRaw: object | 401 | 404 = await fetchPlan(
		credentials,
		date ? new Date(date) : undefined
	).catch((e) => {
		if (e instanceof NoCredentialsError || e instanceof InvalidCredentialsError) return 401;
		if (e instanceof PlanNotFoundError) return 404;
		throw e;
	});

	if (planRaw === 401) return json({ error: 'Invalid credentials' }, { status: 401 });
	if (planRaw === 404) return json({ error: 'Plan not found' }, { status: 404 });

	const plan = fromJson(planRaw as object);
	return json(plan);
};
