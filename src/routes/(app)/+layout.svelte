<script lang="ts">
	import { Toaster } from 'svelte-french-toast';

	import { type SettingsStore, settingsStore } from '$lib/stores/settingsStore';
	import { onMount } from 'svelte';
	import { setPrimaryColor } from '$lib/theming/primaryColor';
	import PageLoadingBar from '$lib/components/common/PageLoadingBar.svelte';
	import { navigating, page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	onMount(() => {
		settingsStore.update((value) => ({
			...value,
			...(JSON.parse(localStorage.getItem('settings') || '{}') as SettingsStore)
		}));

		settingsStore.subscribe((value) => {
			localStorage.setItem('settings', JSON.stringify(value));
			if (value.errorMonitoring) {
				localStorage.removeItem('ERROR_REPORTING');
			} else {
				localStorage.setItem('ERROR_REPORTING', 'false');
			}
		});

		// Dark Mode & Primary Color
		settingsStore.subscribe((value) => {
			const htmlElement = document.querySelector('html');
			if (!htmlElement) return;
			if (value.darkMode && !htmlElement.classList.contains('dark')) {
				htmlElement.classList.add('dark');
			} else if (!value.darkMode && htmlElement.classList.contains('dark')) {
				htmlElement.classList.remove('dark');
			}

			setPrimaryColor(value.primaryColor, value.darkMode);
		});
	});
</script>

<Toaster />

{#if $navigating}
	<PageLoadingBar />
{/if}

{#key $page.url.pathname}
	<div class="h-full" in:fly={{ easing: cubicOut, x: 10, duration: 200 }}>
		<slot />
	</div>
{/key}
