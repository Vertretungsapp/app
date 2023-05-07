import { fetchPlan } from '$lib/api/server/stundenplan24';
import { fromJson } from '$lib/api/server/class/Plan';
import { json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { NoCredentialsError } from '$lib/api/server/errors/NoCredentialsError';
import { InvalidCredentialsError } from '$lib/api/server/errors/InvalidCredentialsError';
import { PlanNotFoundError } from '$lib/api/server/errors/PlanNotFoundError';
import type { Credentials } from '$lib/api/session';

export const GET: RequestHandler = async ({ request, params }: RequestEvent) => {
	const { date: dateParam } = params;
	const authorization = request.headers.get('authorization');

	const date = dateParam ? new Date(new Date().setTime(parseInt(dateParam))) : undefined;
	console.log();

	const credentials: Credentials | null = authorization
		? {
				schoolnumber: parseInt(atob(authorization.split(' ')[1]).split(':')[0]),
				username: atob(authorization.split(' ')[1]).split(':')[1],
				password: atob(authorization.split(' ')[1]).split(':')[2]
		  }
		: null;

	if (!credentials) return json({ error: 'No credentials provided' }, { status: 401 });

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
	return json(plan, { headers: { 'Cache-Control': 'private, max-age=43200' } }); // 12 hours
};
