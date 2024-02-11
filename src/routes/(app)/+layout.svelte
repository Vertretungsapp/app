<script lang="ts">
	import { Toaster } from 'svelte-french-toast';

	import { type SettingsStore, settingsStore } from '$lib/stores/settingsStore';
	import { onMount } from 'svelte';
	import { setPrimaryColor } from '$lib/theming/primaryColor';

	onMount(() => {
		settingsStore.update((value) => ({
			...value,
			...JSON.parse(localStorage.getItem("settings") || "{}") as SettingsStore,
		}))

		settingsStore.subscribe((value) => {
			localStorage.setItem('settings', JSON.stringify(value));
		});

		// Dark Mode & Primary Color
		settingsStore.subscribe((value) => {
			const htmlElement = document.querySelector("html")
			if(!htmlElement) return
			if(value.darkMode && !htmlElement.classList.contains("dark")) {
				htmlElement.classList.add("dark")
			} else if (!value.darkMode && htmlElement.classList.contains("dark")) {
				htmlElement.classList.remove("dark")
			}
			setPrimaryColor(value.primaryColor, value.darkMode)
		})
	});
</script>

<Toaster />

<slot />
