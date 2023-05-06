import { fetchPlan } from '$lib/api/server/stundenplan24';
import { fromJson } from '$lib/api/server/class/Plan';
import { json } from '@sveltejs/kit';
import type { RequestEvent, RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	const { credentials, date } = await request.json();

	if (!date) return json(fromJson(await fetchPlan(credentials)));

	return json(fromJson(await fetchPlan(credentials, new Date(date))));
};
