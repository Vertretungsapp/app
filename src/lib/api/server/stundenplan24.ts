import type { Credentials } from '$lib/api/session';
import { parseStringPromise } from 'xml2js';
import { PlanNotFoundError } from '$lib/api/server/errors/PlanNotFoundError';
import { InvalidCredentialsError } from '$lib/api/server/errors/InvalidCredentialsError';
import { NoCredentialsError } from '$lib/api/server/errors/NoCredentialsError';

const BASE_DOMAIN = 'stundenplan24.de';

/**
 * Fetches the plan for a specific date, or the most recent one
 * @param cred Credentials to use
 * @param date? Date to fetch the plan for
 * @throws NoCredentialsError
 * @returns object | null
 */
export async function fetchPlan(cred: Credentials, date?: Date): Promise<object> {
	if (!cred) throw new NoCredentialsError();

	const url = `https://${BASE_DOMAIN}/${cred.schoolnumber}/mobil/mobdaten/${getFileName(date)}`;

	const headers = {
		Authorization: `Basic ${btoa(`${cred.username}:${cred.password}`)}`
	};

	const res = await fetch(url, { headers });
	const text = await res.text();

	if (res.status === 404) throw new PlanNotFoundError();
	if (res.status === 401) throw new InvalidCredentialsError();

	return await parseStringPromise(text, { trim: true, explicitArray: false });
}

function addZero(month: number): string {
	return month < 10 ? `0${month}` : month.toString();
}

function getFileName(date?: Date) {
	if (date) {
		return `PlanKl${date.getFullYear()}${addZero(date.getMonth() + 1)}${addZero(
			date.getDate()
		)}.xml`;
	} else return 'Klassen.xml';
}
