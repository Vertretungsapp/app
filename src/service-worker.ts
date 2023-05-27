/// <reference types="@sveltejs/kit" />
import { build, files, prerendered, version } from '$service-worker';

import { setDefaultHandler } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

const CACHE = `cache-${version}`;

const ASSETS = [...build, ...files, ...prerendered];

setDefaultHandler(
	new StaleWhileRevalidate({
		cacheName: CACHE
	})
);

self.addEventListener('install', (event) => {
	event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)));
});
