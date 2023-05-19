import { addPlan, getSchoolPlan } from '$lib/api/cache';
import { getCredentials } from '$lib/api/session';
import SchoolPlan, { fromJson } from '$lib/api/stundenplan42/class/SchoolPlan';
import { NoCredentialsError } from '$lib/api/stundenplan42/errors/NoCredentialsError';
import { fetchFromStundenplan24 } from '$lib/api/stundenplan42/stundenplan24';

export async function getPlan(ignoreCache?: boolean, date?: Date): Promise<SchoolPlan> {
	const credentials = getCredentials();
	if (!credentials) throw new NoCredentialsError();

	const cached = getSchoolPlan(credentials.schoolnumber, date);
	if (cached && !ignoreCache) return cached;

	const plan = fromJson(credentials.schoolnumber, await fetchFromStundenplan24(credentials, date));
	addPlan(credentials.schoolnumber, plan);

	return plan;
}
