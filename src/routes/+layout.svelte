<script lang="ts">
	import MobileNavigator from '$lib/components/navigation/MobileNavigator.svelte';
	import '../app.css';
	import '@fontsource/inter/latin.css';
	import '@fontsource/poppins/latin.css';
</script>

<div class="flex h-dvh max-h-screen w-full flex-col justify-between">
	<main class="relative grow overflow-auto px-4 pt-8">
		<slot />
	</main>

	<MobileNavigator />
</div>
