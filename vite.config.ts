import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'vertretungsapp',
				project: 'app',
				setCommits: {
					auto: true
				}
			}
		}),
		sveltekit()
	]
});
