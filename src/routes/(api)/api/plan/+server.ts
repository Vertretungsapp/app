import { createApiWrapper } from '$lib/server/api/api';
import { decodeCredentials } from '$lib/server/api/credentials';
import { error } from '@sveltejs/kit';
import { Logger, type ILogObj } from 'tslog';
import type { RequestHandler } from './$types';

const log: Logger<ILogObj> = new Logger();

export const GET: RequestHandler = async ({ request, url }) => {
	const api = createApiWrapper(decodeCredentials(request));
	const date = url.searchParams.get('date');

	log.info(`GET /api/plan/${date ? `?date=${date}` : ''}`);

	try {
		if (date) {
			const plan = await api.getSubstitutionPlanForDate(new Date(date));
			return new Response(JSON.stringify(plan.toJSON()));
		} else {
			const plan = await api.getNewestSubstitutionPlan();
			return new Response(JSON.stringify(plan.toJSON()));
		}
	} catch (err) {
		const e = err as Error;
		error(500, e.message);
	}
};
