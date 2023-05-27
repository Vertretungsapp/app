import { NoCredentialsError } from '$lib/api/stundenplan42/errors/NoCredentialsError';
import { NoInternetConnectionError } from '$lib/api/stundenplan42/errors/NoInternetConnectionError';
import { testCredentials } from '$lib/api/stundenplan42/stundenplan24';

export type Credentials = {
	schoolnumber: string;
	username: Username;
	password: string;
};

export type Username = 'schueler' | 'lehrer';

/**
 * Saves the credentials to the local storage and returns true if the credentials are valid.
 * Validation is done by trying an api endpoint.
 * @param credentials
 * @returns number Status code of the request (200, 401, 404)
 */
export async function login(credentials: Credentials): Promise<number> {
	const verify = await testCredentials(credentials);
	if (verify === 200) localStorage.setItem('credentials', JSON.stringify(credentials));
	return verify;
}

/**
 * Removes the credentials from the local storage.
 * @returns void
 */
export function logout(): void {
	localStorage.removeItem('credentials');
	location.reload();
}

/**
 * Gets the credentials from the local storage.
 * @returns Credentials or null if there are no credentials
 */
export function getCredentials(): Credentials | null {
	const credentials = localStorage.getItem('credentials');
	if (!credentials) return null;
	return JSON.parse(credentials);
}

/**
 * Checks if the credentials are valid by trying an api endpoint.
 * @returns boolean
 */
export async function verifyCredentials(): Promise<boolean> {
	const credentials = getCredentials();
	if (!credentials) return false;
	return (
		(await testCredentials(credentials).catch((e) => {
			if (e instanceof NoInternetConnectionError) {
				return 200;
			}
		})) === 200
	);
}

/**
 * Get schoolnumber from credentials
 * @returns string
 */
export function getSchoolnumber(): string {
	const credentials = getCredentials();
	if (!credentials) throw new NoCredentialsError();
	return credentials.schoolnumber;
}
