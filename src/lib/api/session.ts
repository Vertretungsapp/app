export type Credentials = {
	schoolnumber: number;
	username: string;
	password: string;
};

/**
 * Saves the credentials to the local storage and returns true if the credentials are valid.
 * Validation is done by trying an api endpoint.
 * @param credentials
 * @returns true if the credentials are valid
 */
export function login(credentials: Credentials): boolean {
	localStorage.setItem('credentials', JSON.stringify(credentials));
	return true;
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
