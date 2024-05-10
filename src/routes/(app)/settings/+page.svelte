<script lang="ts">
	import { clearCache } from '$lib/cache/cache';
	import CredentialsLink from '$lib/components/settings/CredentialsLink.svelte';
	import toast from 'svelte-french-toast';
	import { settingsStore } from '$lib/stores/settingsStore';
	import SettingsCheckbox from '$lib/components/settings/SettingsCheckbox.svelte';
	import SettingsSection from '$lib/components/settings/SettingsSection.svelte';
	import ColorPicker from 'svelte-awesome-color-picker';
	import Icon from '$lib/components/common/Icon.svelte';
	import { faFileImport } from '@fortawesome/free-solid-svg-icons/faFileImport';
	import { faFileExport } from '@fortawesome/free-solid-svg-icons/faFileExport';
	import { onMount } from 'svelte';
	import SettingsThemingDefaultColorSelector from '$lib/components/settings/SettingsThemingDefaultColorSelector.svelte';
	import { format } from 'date-fns';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons/faGlobe';
	import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
	import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
	import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
	import SocialLink from '$lib/components/settings/info/SocialLink.svelte';
	import type { PageData } from './$types';
	import FeedbackButton from '$lib/components/common/FeedbackButton.svelte';

	export let data: PageData;

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
				const parsed = JSON.parse(reader.result as string);
				localStorage.clear();
				for (const key in parsed) {
					localStorage.setItem(key, parsed[key]);
				}
				toast.success('Einstellungen importiert, starte neu...', {
					duration: 2000
				});
				setTimeout(() => location.reload(), 1000);
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
		const str = JSON.stringify({ ...localStorage });

		// Save the file contents as a DataURI
		const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(str);

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
		<FeedbackButton />
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
		<input
			id="import_settings_json"
			type="file"
			class="hidden"
			accept="application/json"
			on:input={importSettings}
		/>
	</SettingsSection>
</div>

<section class="mt-8 text-center">
	<h2>Vertretungsapp<span class="text-primary-500">.</span></h2>
	<p>Version: {data.version}</p>
	<p>Build-Nummer: {data.sha}</p>
	<p>Date: {format(new Date(data.date), 'dd.MM.yyyy HH:mm')}</p>
</section>

<section class="mt-4 flex items-center justify-center gap-3">
	<SocialLink href="https://www.vertretungsapp.de" icon={faGlobe} />
	<SocialLink href="https://www.vertretungsapp.de/discord" icon={faDiscord} />
	<SocialLink href="https://www.vertretungsapp.de/github" icon={faGithub} />
	<SocialLink href="mailto:support@vertretungsapp.de" icon={faEnvelope} />
</section>

<section class="text-disabled mt-4 flex w-full justify-center gap-2 text-xs font-bold">
	<a href="https://www.vertretungsapp.de/imprint" target="_blank">Impressum</a>
	<a href="https://www.vertretungsapp.de/privacy" target="_blank">Datenschutzerklärung</a>
</section>

<section class="text-disabled mt-8 text-xs">
	<h3>Debug Information</h3>
	<div class="font-mono">
		<p>User-Agent: {window.navigator.userAgent}</p>
		<p>System time: {new Date()}</p>
		<p>Locale: {window.navigator.language}</p>
		<p>Service Workers:</p>
		<ul class="list-disc pl-4">
			{#each data.serviceWorkers as worker}
				<li>{worker.scope} - {worker.active}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="">
	<h3 class="text-disabled">Entwickleroptionen</h3>

	<button class="bg-clickable w-1/2 rounded-lg p-1" on:click={clrCache}> Clear Cache </button>
</section>
