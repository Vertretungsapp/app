// Source: https://kit.svelte.dev/docs/service-workers
// Just ignore the bunch of ts-ignore comments, as long as it works, it's fine.

/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />
const sw = /** @type {ServiceWorkerGlobalScope} */ /** @type {unknown} */ self;

import { build, files, prerendered, version } from '$service-worker';

// Create a unique cache name for this deployment
const CACHE = `cache-${version}`;

const ASSETS = [
	...build, // the app itself
	...files, // everything in `static`
	...prerendered
];

sw.addEventListener('install', (event) => {
	// Create a new cache and add all files to it
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	event.waitUntil(addFilesToCache());
});

sw.addEventListener('activate', (event) => {
	// Remove previous cached data from disk
	async function deleteOldCaches() {
		for (const key of await caches.keys()) {
			if (key !== CACHE) await caches.delete(key);
		}
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	event.waitUntil(deleteOldCaches());
});

sw.addEventListener('fetch', (event) => {
	// ignore POST requests etc
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	if (event.request.method !== 'GET') return;

	async function respond() {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const url = new URL(event.request.url);
		const cache = await caches.open(CACHE);

		// `build`/`files` can always be served from the cache
		// if (ASSETS.includes(url.pathname)) {
		// 	const response = await cache.match(url.pathname);
		//
		// 	if (response) {
		// 		return response;
		// 	}
		// }

		// for everything else, try the network first, but
		// fall back to the cache if we're offline
		try {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const response = await fetch(event.request);

			// if we're offline, fetch can return a value that is not a Response
			// instead of throwing - and we can't pass this non-Response to respondWith
			if (!(response instanceof Response)) {
				throw new Error('invalid response from fetch');
			}

			if (response.status === 200) {
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				cache.put(event.request, response.clone());
			}

			return response;
		} catch (err) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			const response = await cache.match(event.request);

			if (response) {
				return response;
			}

			// if there's no cache, then just error out
			// as there is nothing we can do to respond to this request
			throw err;
		}
	}

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	event.respondWith(respond());
});
