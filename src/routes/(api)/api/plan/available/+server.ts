import { createApiWrapper } from '$lib/server/api/api';
import { decodeCredentials } from '$lib/server/api/credentials';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
	const api = createApiWrapper(decodeCredentials(request));
	const dates = await api.fetchAvailableDates();
	return new Response(JSON.stringify(dates.map((d) => d.getTime())));
};
