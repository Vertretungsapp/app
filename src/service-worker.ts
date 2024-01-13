import { build, files, prerendered, version } from '$service-worker';
import { precacheAndRoute } from 'workbox-precaching';

const precache = [...build, ...files, ...prerendered].map((file) => ({
	url: file,
	revision: version
}));

console.log('precache', precache);

precacheAndRoute(precache);
