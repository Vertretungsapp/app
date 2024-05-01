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

	function clrCache() {
		clearCache();
		toast.success('Cache geleert', {
			duration: 2000
		});
	}

	function importSettings(event: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		const file = event.currentTarget.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = () => {
			try {
				const settings = JSON.parse(reader.result as string);
				settingsStore.set(settings);
				toast.success('Einstellungen importiert', {
					duration: 2000
				});
			} catch (e) {
				toast.error('Fehler beim Importieren der Einstellungen', {
					duration: 2000
				});
			}
		};
		reader.readAsText(file);
	}

	onMount(() => {
		// Get the file contents
		// let txtFile = `vertretungsapp-settings_${new Date().toISOString().replace(/:/g, '-')}.json`;
		let str = JSON.stringify($settingsStore);

		// Save the file contents as a DataURI
		let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(str);

		// Write it as the href for the link
		const link = document.getElementById('export_settings_json') as HTMLAnchorElement;
		if (link) {
			link.href = dataUri;
			link.download = `vertretungsapp-settings_${new Date().toISOString().replace(/:/g, '-')}.json`;
		}
	});
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

		<ColorPicker bind:hex={$settingsStore.primaryColor} label="" />
		<span class="col-span-4">Primärfarbe</span>

		<SettingsCheckbox bind:checked={$settingsStore.darkMode}>Dark Mode</SettingsCheckbox>

		<SettingsButton on:click={() => ($settingsStore.primaryColor = PRIMARY_COLOR)}>
			Standardfarbe
		</SettingsButton>
	</SettingsSection>

	<SettingsSection>
		<svelte:fragment slot="title">Datenschutzeinstellungen</svelte:fragment>

		<SettingsCheckbox bind:checked={$settingsStore.errorMonitoring} fullWidth>
			Anonyme Fehlerberichte zur Analyse und Verbesserung der App an Sentry senden (Neustart
			erforderlich)
		</SettingsCheckbox>
	</SettingsSection>

	<SettingsSection>
		<svelte:fragment slot="title">Im-/Export der Einstellungen</svelte:fragment>

		<a
			class="bg-clickable col-span-5 flex items-center justify-center gap-2 rounded-lg p-2"
			href="/settings"
			id="export_settings_json"
		>
			<Icon icon={faFileExport} scale={1.1} />
			Exportieren
		</a>

		<label
			for="import_settings_json"
			class="bg-clickable col-span-5 flex items-center justify-center gap-2 rounded-lg p-2"
		>
			<Icon icon={faFileImport} scale={1.1} />
			Importieren
		</label>
		<input id="import_settings_json" type="file" class="hidden" on:input={importSettings} />
	</SettingsSection>

	<SettingsSection>
		<svelte:fragment slot="title">Entwickleroptionen</svelte:fragment>

		<SettingsButton on:click={clrCache}>Clear Cache</SettingsButton>
	</SettingsSection>
</div>
