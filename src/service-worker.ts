// import { build, files, prerendered, version } from '$service-worker';
// import { setDefaultHandler } from 'workbox-routing';
// import { StaleWhileRevalidate } from 'workbox-strategies';

// const CACHE = `cache-${version}`;

// const precache = [...build, ...files, ...prerendered];

// setDefaultHandler(
// 	new StaleWhileRevalidate({
// 		cacheName: CACHE,
// 		matchOptions: {
// 			ignoreSearch: true
// 		}
// 	})
// );

// self.addEventListener('install', (event) => {
// 	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// 	// @ts-ignore
// 	event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(precache)));
// });
