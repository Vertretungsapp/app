import type { Credentials } from '$lib/api/session';
import { InvalidCredentialsError } from '$lib/api/stundenplan42/errors/InvalidCredentialsError';
import { NoCredentialsError } from '$lib/api/stundenplan42/errors/NoCredentialsError';
import { PlanNotFoundError } from '$lib/api/stundenplan42/errors/PlanNotFoundError';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const BASE_DOMAIN = 'stundenplan24.de';

/**
 * Tests the credentials by trying to fetch a plan
 * @param cred Credentials to use
 * @returns number Status code of the request (200, 401, 404, ...)
 */
export async function testCredentials(cred: Credentials): Promise<number> {
	if (!cred) throw new NoCredentialsError();

	const url = `https://${BASE_DOMAIN}/${cred.schoolnumber}/mobil/mobdaten/vpinfok.txt`;

	const res = await axios.post('/api/proxy', {
		url,
		headers: {
			Authorization: `Basic ${btoa(`${cred.username}:${cred.password}`)}`
		}
	}).catch(err => err.response);

	return res.status;
}

/**
 * Fetches the plan for a specific date, or the most recent one
 * @param cred Credentials to use
 * @param date? Date to fetch the plan for
 * @throws PlanNotFoundError
 * @throws InvalidCredentialsError
 * @returns object | null
 */
export async function fetch(cred: Credentials, date?: Date): Promise<object> {
	const url = `https://${BASE_DOMAIN}/${cred.schoolnumber}/mobil/mobdaten/${getFileName(date)}`;

	const res = await axios.post('/api/proxy', {
		url,
		headers: {
			Authorization: `Basic ${btoa(`${cred.username}:${cred.password}`)}`
		}
	}).catch(err => err.response);

	if (res.status === 404) throw new PlanNotFoundError();
	if (res.status === 401) throw new InvalidCredentialsError();

	return await parseStringPromise(res.data, { trim: true, explicitArray: false });
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
