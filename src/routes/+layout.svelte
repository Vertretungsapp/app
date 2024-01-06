<script lang="ts">
	import MobileNavigator from '$lib/components/navigation/MobileNavigator.svelte';
	import '../app.css';
	import '@fontsource/inter/latin.css';
	import '@fontsource/poppins/latin.css';
	import { onMount } from 'svelte';

	import { pwaInfo } from 'virtual:pwa-info';

	onMount(async () => {
		if (pwaInfo) {
			const { registerSW } = await import('virtual:pwa-register');
			registerSW({
				immediate: true,
				onRegistered(r) {
					// uncomment following code if you want check for updates
					// r && setInterval(() => {
					//    console.log('Checking for sw update')
					//    r.update()
					// }, 20000 /* 20s for testing purposes */)
					console.log(`SW Registered: ${r}`);
				},
				onRegisterError(error) {
					console.log('SW registration error', error);
				}
			});
		}
	});

	$: webManifestLink = pwaInfo ? pwaInfo.webManifest.linkTag : '';
</script>

<svelte:head>
	{@html webManifestLink}
</svelte:head>

<div class="flex h-screen max-h-screen w-full flex-col justify-between">
	<main class="grow overflow-auto px-4 pt-8">
		<slot />
	</main>

	<MobileNavigator />
</div>
