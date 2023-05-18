import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import mkCert from 'vite-plugin-mkcert';

export default defineConfig({
	server: { https: true },
	plugins: [sveltekit(), mkCert()]
});
