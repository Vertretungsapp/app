<script lang="ts">
	import { clearCache } from '$lib/cache/cache';
	import CredentialsLink from '$lib/components/settings/CredentialsLink.svelte';
	import toast from 'svelte-french-toast';
	import { PRIMARY_COLOR, settingsStore } from '$lib/stores/settingsStore';
	import SettingsCheckbox from '$lib/components/settings/SettingsCheckbox.svelte';
	import SettingsSection from '$lib/components/settings/SettingsSection.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import SettingsButton from '$lib/components/settings/SettingsButton.svelte';
	import Icon from '$lib/components/common/Icon.svelte';
	import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
	import SettingsThemingDefaultColorSelector from '$lib/components/settings/SettingsThemingDefaultColorSelector.svelte';

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
	<div class="flex gap-2">
		<a
			class="bg-clickable flex h-8 w-8 items-center justify-center rounded-lg p-2"
			href="/settings/info"
		>
			<Icon icon={faInfoCircle} scale={1.1} />
		</a>
		<CredentialsLink />
	</div>
</div>

<div class="space-y-8">
	<SettingsSection>
		<svelte:fragment slot="title">Darstellung</svelte:fragment>

		<div class="bg-display col-span-5 flex items-center gap-2 rounded-lg dark:bg-transparent">
			<ColorPicker bind:hex={$settingsStore.primaryColor} label="" />
			<span class="col-span-4">Farbe</span>
		</div>

		<SettingsCheckbox bind:checked={$settingsStore.darkMode}>Dark Mode</SettingsCheckbox>

		<div
			class="bg-display col-span-full flex flex-col justify-between gap-1 rounded-lg p-2 dark:bg-transparent"
		>
			<span>Standardfarben</span>
			<SettingsThemingDefaultColorSelector />
		</div>
	</SettingsSection>

	<SettingsSection>
		<svelte:fragment slot="title">Datenschutzeinstellungen</svelte:fragment>

		<SettingsCheckbox bind:checked={$settingsStore.errorMonitoring} fullWidth>
			Anonyme Fehlerberichte zur Analyse und Verbesserung der App an Sentry senden (Neustart
			erforderlich)
		</SettingsCheckbox>
	</SettingsSection>

	<SettingsSection>
		<svelte:fragment slot="title">Entwickleroptionen</svelte:fragment>

		<SettingsButton on:click={clrCache}>Clear Cache</SettingsButton>
	</SettingsSection>
</div>
