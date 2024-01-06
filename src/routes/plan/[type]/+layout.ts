import { PlanType, isPlanType } from '$lib/api/planTypes';
import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ params }) => {
	if (!isPlanType(params.type)) {
		error(404, `Unbekannter Plantyp "${params.type}"`);
	}

	return {
		type: params.type as PlanType
	};
};
