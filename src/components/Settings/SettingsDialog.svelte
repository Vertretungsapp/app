<script lang="ts">
	import { fetchPlan } from '$lib/api/fetch';
	import { getTheme, setTheme, ThemeAccent } from '$lib/themeSwitcher';
	import type { Theme } from '$lib/themeSwitcher';
	import { browser } from '$app/environment';
	import Dialog from "../Dialog.svelte";

	let selectedTheme: Theme | undefined = { accent: ThemeAccent.DEFAULT, dark: false };

	let selectedAccent: ThemeAccent = ThemeAccent.DEFAULT;
	let darkMode = false;
	if (browser) {
		selectedTheme = getTheme();
		if (selectedTheme) {
			selectedAccent = selectedTheme.accent;
			darkMode = selectedTheme.dark;
		} else {
			selectedTheme = { accent: ThemeAccent.DEFAULT, dark: false };
		}
	}

	function closeModal() {
		document.querySelector<HTMLDialogElement>('#settingsDialog').close();
	}

	function refreshCache() {
		fetchPlan(undefined, true).then(() => location.reload());
	}

	function changeAccent(event: Event) {
		const accent = (event.target as HTMLSelectElement).value as ThemeAccent;
		selectedAccent = accent;
		selectedTheme = setTheme({ accent: accent, dark: selectedTheme?.dark ?? false });
	}

	function changeDarkMode(event: Event) {
		const dark = (event.target as HTMLInputElement).checked;
		darkMode = dark;
		selectedTheme = setTheme({ accent: selectedTheme?.accent ?? ThemeAccent.DEFAULT, dark });
	}
</script>

<Dialog id="settingsDialog">
	<h1 class="my-4 text-center">Einstellungen</h1>
	<div class="flex flex-col gap-2 items-center my-8">
		<input
			type="button"
			value="Cache leeren"
			on:click={refreshCache}
		/><!-- TODO: probably only for early versions -->
		<div class="w-full mt-5">
			<div class="grid grid-cols-2 items-center justify-between gap-4">
				<p>Dark-Mode</p>
				<input type="checkbox" checked={darkMode} on:change={changeDarkMode} />
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
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(5px);
	}

	input {
		width: 100%;
	}
</style>
