import { hexadecimalToString } from '$lib/common/stringToHexadecimal';
import type { LayoutLoad } from './$types';
import { usePlan, useSubstitutionPlan } from '$lib/stores/planStore';

export const load: LayoutLoad = async ({ params, parent }) => {
	const { type } = await parent();
	const short = hexadecimalToString(params.short);

	const substitutionPlan = useSubstitutionPlan();

	if (!substitutionPlan) {
		throw new Error('ERROR: Substitution plan not found');
	}

	const plan = usePlan(type, short, substitutionPlan)

	if (!plan) {
		throw new Error(`ERROR: Plan ${short} not found in substitution plan, type: ${type}, date: ${substitutionPlan.date}.`);
	}

	return {
			short,
			plan
	};
};
