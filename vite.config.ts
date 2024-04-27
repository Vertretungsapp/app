import { sentrySvelteKit } from '@sentry/sveltekit';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import infoJson from './static/info.json';

const preview = process.env.PREVIEW === "true";

export default defineConfig({
	plugins: [
		sentrySvelteKit({
			sourceMapsUploadOptions: {
				org: 'vertretungsapp',
				project: 'app',
				authToken: process.env.SENTRY_AUTH_TOKEN,
				release: preview ? "preview-" + infoJson.sha : infoJson.version + "+" + infoJson.sha,
				setCommits: {
					auto: true
				},
			}
		}),
		sveltekit()
	]
});
