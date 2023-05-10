<script lang="ts">
	import { fetchPlan } from '$lib/api/fetch';
	import { getTheme, setTheme, Theme } from '$lib/themeSwitcher';
	import { browser } from '$app/environment';

	let selectedTheme = Theme.LIGHT;
	if (browser) selectedTheme = getTheme();

	function closeModal() {
		document.querySelector('#settingsDialog').close();
	}

	function refreshCache() {
		fetchPlan(undefined, true).then(() => location.reload());
	}

	function changeTheme(event: Event) {
		const theme = (event.target as HTMLSelectElement).value as Theme;
		setTheme(theme);
	}
</script>

<dialog
	id="settingsDialog"
	class="bg-background text-text border-accent border-2 rounded-[7px] p-8"
>
	<h1 class="my-4 text-center">Einstellungen</h1>
	<div class="flex flex-col gap-2 items-center my-8">
		<input
			type="button"
			value="Cache leeren"
			on:click={refreshCache}
		/><!-- TODO: probably only for early versions -->
		<div class="w-full">
			<p>Farbschema</p>
			<select class="input w-full" on:change={changeTheme}>
				{#each Object.values(Theme) as theme}
					<option value={theme} selected={theme === selectedTheme}>{theme.toUpperCase()}</option>
				{/each}
			</select>
		</div>
	</div>
	<input type="button" value="Schließen" on:click={closeModal} />
</dialog>

<style>
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.4);
		backdrop-filter: blur(5px);
	}

	input {
		width: 100%;
	}
</style>
