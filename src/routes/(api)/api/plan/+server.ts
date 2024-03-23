import { createApiWrapper } from '$lib/server/api/api';
import { decodeCredentials } from '$lib/server/api/credentials';
import { error, type NumericRange } from '@sveltejs/kit';
import { Logger, type ILogObj } from 'tslog';
import type { RequestHandler } from './$types';
import { PlanNotFoundError, RequestFailedError } from 'indiware-api';

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
		console.error(err);
		if(err instanceof PlanNotFoundError) {
			error(404, 'No plan found for this date');
		} else if (err instanceof RequestFailedError) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const status: NumericRange<400, 599> = err.getStatus() > 399 && err.getStatus() < 600 ? err.getStatus() : 500;
			error(status, err.getStatusText())
		}
		else {
			const e = err as Error;
			error(500, e.message);
		}
	}
};
