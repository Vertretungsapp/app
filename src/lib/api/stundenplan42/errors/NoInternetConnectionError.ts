export class NoInternetConnectionError extends Error {
	constructor() {
		super('No internet connection');
	}
}
