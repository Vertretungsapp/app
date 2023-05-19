import type { RequestEvent, RequestHandler } from '@sveltejs/kit';
import { json, text } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }: RequestEvent) => {
	const { url, headers } = await request.json();

	const req = await fetch(url, {
		headers
	})

	if (req.status === 404) return json({}, { status: 404 });
	if (req.status === 401) return json({}, { status: 401 });
	if (req.status !== 200) return json({}, { status: 500 });

	return text(await req.text(), { status: 200 });
};
