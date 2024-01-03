<script>
	import MobileNavigator from '$lib/components/navigation/MobileNavigator.svelte';
	import '../app.css';
	import '@fontsource/inter/latin.css';
	import '@fontsource/poppins/latin.css';
</script>

<main class="px-4 py-8">
	<slot />
</main>

<MobileNavigator />
