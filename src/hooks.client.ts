import { getCredentials } from '$lib/api/session';
import * as Sentry from '@sentry/sveltekit';
import { feedbackIntegration, handleErrorWithSentry, replayIntegration } from '@sentry/sveltekit';

const cred = getCredentials();

if (localStorage.getItem('ERROR_REPORTING') !== 'false') {
	Sentry.init({
		dsn: 'https://8c74c96ad05b7ddd90c0113acf220257@o4507126149873664.ingest.de.sentry.io/4507126151905360',
		tracesSampleRate: 1.0,

		// This sets the sample rate to be 10%. You may want this to be 100% while
		// in development and sample at a lower rate in production
		replaysSessionSampleRate: 0.1,

		// If the entire session is not sampled, use the below sample rate to sample
		// sessions when an error occurs.
		replaysOnErrorSampleRate: 1.0,

		initialScope: {
			tags: {
				schoolnumber: cred ? cred.schoolnumber : 'unknown',
				username: cred ? cred.username : 'unknown'
			}
		},

		ignoreErrors: ['No credentials found'],

		// If you don't want to use Session Replay, just remove the line below:
		integrations: [
			replayIntegration(),
			feedbackIntegration({
				colorScheme: 'system',
				isEmailRequired: true,
				autoInject: false,
				showBranding: false
			})
		]
	});
}

// If you have a custom error handler, pass it to `handleErrorWithSentry`
export const handleError = handleErrorWithSentry();
