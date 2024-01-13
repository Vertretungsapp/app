<script lang="ts">
	import { goto } from '$app/navigation';
	import { settingsStore } from '$lib/stores/settingsStore';

	let schoolnumber = '';
	let username = '';
	let password = '';

	if ($settingsStore.credentials) {
		schoolnumber = $settingsStore.credentials.schoolnumber;
		username = $settingsStore.credentials.username;
		password = $settingsStore.credentials.password;
	}

	function save(e: Event) {
        e.preventDefault();

		$settingsStore.credentials = {
			schoolnumber,
			username,
			password
		};

		goto('/');
	}
</script>

<h1>Zugangsdaten</h1>
<p class="text-xs text-secondary-500">
	Die Zugangsdaten werden von der Schule mitgeteilt. Sie entsprechen derer, welcher auch in der
	normalen VpMobil App benötigt werden.
</p>

<form class="grid grid-cols-3 items-center gap-y-2 py-8" on:submit={save}>
	<label>
		<span>Server</span>
	</label>

	<input type="text" class="col-span-2" value="stundenplan24.de" disabled />

	<label>
		<span>Schulnummer</span>
	</label>

	<input
		type="text"
		class="col-span-2"
		maxlength="8"
		pattern="^\d+$"
		required
		bind:value={schoolnumber}
	/>

	<label>
		<span>Benutzername</span>
	</label>

	<input type="text" class="col-span-2" required bind:value={username} />

	<label>
		<span>Passwort</span>
	</label>

	<input type="text" class="col-span-2" required bind:value={password} />

	<div class="col-span-3 mt-4 flex w-full justify-center">
		<button type="submit" class="rounded-lg bg-primary px-4 py-2">Speichern</button>
	</div>
</form>

<style>
	input {
		@apply rounded-md bg-secondary-900 p-1 disabled:bg-secondary-950 disabled:text-secondary-400;
	}
</style>
