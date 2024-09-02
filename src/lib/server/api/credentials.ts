import type { Credentials } from 'indiware-api';
import { Logger, type ILogObj } from 'tslog';
import { createApiWrapper } from './api';

const log: Logger<ILogObj> = new Logger();

/**
 * Checks if the credentials are valid by trying to fetch the newest plan.
 * @returns {Promise<boolean>} true if the credentials are valid, false if not
 */
export async function verifyCredentials(credentials: Credentials): Promise<boolean> {
	const api = createApiWrapper(credentials);

	try {
		const verify = await api.testConnection();
		if (verify) {
			log.debug(
				`Credentials are valid, responding with \`true\`. Schoolnumber: ${credentials.schoolnumber}`
			);
			return true;
		}
	} catch (error) {
		log.error(
			`There was an error while verifying the credentials for schoolnumber ${
				credentials.schoolnumber
			} (${credentials.username}): ${(error as Error).message}`
		);
		log.trace(error);
	}

	return false;
}

/**
 * Encodes the credentials to a base64 string.
 * @param {Credentials} credentials The credentials to encode
 * @returns {string} The encoded credentials
 */
export function encodeCredentials(credentials: Credentials): string {
	return btoa(`${credentials.schoolnumber}:${credentials.username}:${credentials.password}`);
}

/**
 * Decodes the credentials from a base64 string.
 * @param {Request} request The request to decode the credentials from
 * @returns {Credentials} The decoded credentials
 */
export function decodeCredentials(request: Request): Credentials {
	const encodedCredentials = request.headers.get('Authorization')?.split(' ')[1];
	if (!encodedCredentials) throw new Error('No credentials provided');
	const decoded = atob(encodedCredentials);
	const [schoolnumber, username, password] = decoded.split(':');
	return { schoolnumber, username, password };
}
