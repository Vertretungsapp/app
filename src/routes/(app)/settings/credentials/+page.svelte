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

		goto('/', {
			invalidateAll: true
		});
	}
</script>

<h1>Zugangsdaten</h1>
<p class="text-xs text-disabled mt-1">
	Die Zugangsdaten werden von der Schule mitgeteilt. Sie entsprechen derer, welcher auch in der
	normalen VpMobil App benötigt werden.
</p>

<form class="grid grid-cols-3 items-center gap-y-2 py-8" on:submit={save}>
	<label for="server">
		<span>Server</span>
	</label>

	<input type="text" class="col-span-2" value="stundenplan24.de" name="server" disabled />

	<label for="schoolnumber">
		<span>Schulnummer</span>
	</label>

	<input
		type="text"
		class="col-span-2"
		maxlength="8"
		pattern="^\d+$"
		name="schoolnumber"
		required
		bind:value={schoolnumber}
	/>

	<label for="username">
		<span>Benutzername</span>
	</label>

	<input type="text" class="col-span-2" name="username" required bind:value={username} />

	<label for="password">
		<span>Passwort</span>
	</label>

	<input type="text" class="col-span-2" name="password" required bind:value={password} />

	<div class="col-span-3 mt-4 flex w-full justify-center">
		<button type="submit" class="rounded-lg bg-clickable px-4 py-2">Speichern</button>
	</div>
</form>
