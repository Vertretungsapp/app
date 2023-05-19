export class NoCredentialsError extends Error {
	constructor() {
		super('No credentials in localStorage found. Is user logged in?');
	}
}
