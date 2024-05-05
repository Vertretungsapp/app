<script lang="ts">
	import { goto } from '$app/navigation';
	import { settingsStore } from '$lib/stores/settingsStore';
	import toast from 'svelte-french-toast';
	import { checkCredentials } from '$lib/api/clientHelpers';

	let schoolnumber = '';
	let username = '';
	let password = '';

	if ($settingsStore.credentials) {
		schoolnumber = $settingsStore.credentials.schoolnumber;
		username = $settingsStore.credentials.username;
		password = $settingsStore.credentials.password;
	}

	async function save(e: Event) {
		e.preventDefault();

		const isValid = await checkCredentials({
			schoolnumber,
			username,
			password
		});

		if (!isValid) return toast.error('Die Zugangsdaten konnten nicht verifiziert werden');

		$settingsStore.credentials = {
			schoolnumber,
			username,
			password
		};

		goto('/', {
			invalidateAll: true
		}).then(() => {
			toast.success('Zugangsdaten gespeichert');
		});
	}
</script>

<h1>Zugangsdaten</h1>
<p class="text-disabled mt-1 text-xs">
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
		minlength="8"
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
		<button type="submit" class="bg-clickable rounded-lg px-4 py-2">Speichern</button>
	</div>
</form>
