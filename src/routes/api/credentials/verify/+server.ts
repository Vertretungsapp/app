import { verifyCredentials } from '$lib/server/api/credentials';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
	const { schoolnumber, username, password } = await request.json();
	if (!schoolnumber || !username || !password) error(400, 'Bad Request');

	const verify = await verifyCredentials({ schoolnumber, username, password });
	if (!verify) error(401, 'Unauthorized');

	return new Response();
};
