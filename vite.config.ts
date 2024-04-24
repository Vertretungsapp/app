import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'vertretungsapp',
				project: 'app',
				authToken: process.env.SENTRY_AUTH_TOKEN,
				setCommits: {
					auto: true
				}
			}
		}),
		sveltekit()
	]
});
