<script lang="ts">
	import {fetchPlan} from '$lib/api/fetch';
	import type {Theme} from '$lib/themeSwitcher';
	import {getTheme, setTheme, ThemeAccent} from '$lib/themeSwitcher';
	import {browser} from '$app/environment';
	import Dialog from "../Dialog.svelte";

	let selectedTheme: Theme | undefined = { accent: ThemeAccent.DEFAULT, dark: false, borderMode: false };

	let selectedAccent: ThemeAccent = ThemeAccent.DEFAULT;
	let darkMode = false;
	let borderMode = false;

	if (browser) {
		selectedTheme = getTheme();
		if (selectedTheme) {
			selectedAccent = selectedTheme.accent;
			darkMode = selectedTheme.dark;
			borderMode = selectedTheme.borderMode;
		} else {
			selectedTheme = { accent: ThemeAccent.DEFAULT, dark: false, borderMode: false };
		}
	}

	function closeModal() {
		document.querySelector<HTMLDialogElement>('#settingsDialog').close();
	}

	function refreshCache() {
		fetchPlan(undefined, true).then(() => location.reload());
	}

	function changeAccent(event: Event) {
		selectedAccent = (event.target as HTMLSelectElement).value as ThemeAccent;
		selectedTheme = setTheme({ accent: selectedAccent, dark: darkMode, borderMode: borderMode });
	}

	function changeDarkMode(event: Event) {
		darkMode = (event.target as HTMLInputElement).checked;
		selectedTheme = setTheme({ accent: selectedAccent, dark: darkMode, borderMode: borderMode });
	}

	function changeBorderMode(event: Event) {
		borderMode = (event.target as HTMLInputElement).checked;
		selectedTheme = setTheme({ accent: selectedAccent, dark: darkMode, borderMode: borderMode });
	}
</script>

<Dialog id="settingsDialog">
	<h1 class="mt-4 text-center">Einstellungen</h1>
	<div class="flex flex-col gap-2 items-center my-4">
		<input
			type="button"
			value="Cache leeren"
			on:click={refreshCache}
		/><!-- TODO: probably only for early versions -->
		<div class="w-full mt-5">
			<h2 class="text-center">Theming</h2>

			<div class="grid grid-cols-2 items-center justify-between gap-4">
				<p>Dark-Mode</p>
				<input type="checkbox" checked={darkMode} on:change={changeDarkMode} />
			</div>

			<div class="grid grid-cols-2 items-center justify-between gap-4">
				<p>Border-Mode</p>
				<input type="checkbox" checked={borderMode} on:change={changeBorderMode} />
			</div>

			<div class="grid grid-cols-2 items-center justify-between gap-4">
				<p>Akzentfarbe</p>
				<select class="input text-center" on:change={changeAccent}>
					{#each Object.values(ThemeAccent) as accent}
						<option value={accent} selected={accent === selectedAccent}
							>{accent.toUpperCase()}</option
						>
					{/each}
				</select>
			</div>
		</div>
	</div>
	<input type="button" value="Schließen" on:click={closeModal} />
</Dialog>

<style>
	input {
		width: 100%;
	}
</style>
