import IndiwareAPIWrapper, { type Credentials } from 'indiware-api';

export function createApiWrapper(credentials: Credentials): IndiwareAPIWrapper {
	return new IndiwareAPIWrapper({
		// TODO: Make this configurable
		uri: 'https://stundenplan24.de',
		axiosOptions: {
			headers: {
				// TODO: Make this dynamic or something
				'User-Agent': 'Vertretungsapp/1.0.0'
			},
			validateStatus: (status) => status >= 200 && status < 600
		},
		...credentials
	});
}
