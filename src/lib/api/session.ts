export type Credentials = {
	schoolnumber: number;
	username: string;
	password: string;
};

/**
 * Saves the credentials to the local storage and returns true if the credentials are valid.
 * Validation is done by trying an api endpoint.
 * @param credentials
 * @returns number Status code of the request (200, 401, 404)
 */
export async function login(credentials: Credentials): Promise<number> {
	const res = await fetch('/api/verifyCredentials', {
		method: 'POST',
		body: JSON.stringify({ credentials })
	});

	if(res.status === 200) localStorage.setItem('credentials', JSON.stringify(credentials));

	return res.status;
}

/**
 * Removes the credentials from the local storage.
 * @returns void
 */
export function logout(): void {
	localStorage.removeItem('credentials');
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
