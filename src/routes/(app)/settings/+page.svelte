<script lang="ts">
	import { clearCache } from '$lib/cache/cache';
	import CredentialsLink from '$lib/components/settings/CredentialsLink.svelte';
	import toast from 'svelte-french-toast';
	import { settingsStore } from '$lib/stores/settingsStore';
	import SettingsCheckbox from '$lib/components/settings/SettingsCheckbox.svelte';
	import SettingsSection from '$lib/components/settings/SettingsSection.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';

	function clrCache() {
		clearCache();
		toast.success('Cache geleert', {
			duration: 2000
		});
	}
</script>

<div class="flex w-full justify-end"></div>

<div class="mb-4 flex justify-between">
	<h1>Einstellungen</h1>
	<CredentialsLink />
</div>

<div class="space-y-8">
	<SettingsSection>
		<svelte:fragment slot="title">
			Darstellung
		</svelte:fragment>

		<ColorPicker bind:hex={$settingsStore.primaryColor}  label="" />
		<span class="col-span-4">Primärfarbe</span>

		<SettingsCheckbox bind:checked={$settingsStore.darkMode}>Dark Mode</SettingsCheckbox>
	</SettingsSection>

	<SettingsSection>
		<svelte:fragment slot="title">
			Entwickleroptionen
		</svelte:fragment>

		<button class="rounded-lg bg-clickable p-1 col-span-5" on:click={clrCache}>Clear Cache</button>
	</SettingsSection>
</div>


