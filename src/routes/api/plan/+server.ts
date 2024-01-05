import { createApiWrapper } from '$lib/server/api/api';
import { decodeCredentials } from '$lib/server/api/credentials';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
	const api = createApiWrapper(decodeCredentials(request));
	const plan = await api.getNewestSubstitutionPlan();
	return new Response(JSON.stringify(plan.toJSON()));
};
