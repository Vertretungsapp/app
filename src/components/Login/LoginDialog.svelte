<script lang="ts">
	import { getCredentials, login } from '$lib/api/session';
	import { onMount } from 'svelte';

	let message = null;

	async function handleSubmit(e) {
		const formData = new FormData(e.target);

		const data = {
			schoolnumber: parseInt(formData.get('schoolnumber').toString()) || 0,
			username: formData.get('username').toString(),
			password: formData.get('password').toString()
		};

		login(data).then((res) => {
			if (res === 200) return location.reload();
			if (res === 401) return (message = 'Zugangsdaten konnten nicht verifiziert werden.');
			if (res === 404) return (message = 'Die Schulnummer konnte nicht gefunden werden.');
			message = 'Es ist ein Fehler aufgetreten.';
		});
	}

	onMount(() => {
		const credentials = getCredentials();
		if (credentials) {
			document.querySelector('#loginDialog_schoolnumber').value = credentials.schoolnumber;
			document.querySelector('#loginDialog_username').value = credentials.username;
			document.querySelector('#loginDialog_password').value = credentials.password;
		}
	});
</script>

<dialog id="loginDialog" class="bg-background text-text border-accent border-2 rounded-[7px] p-8">
	<h1 class="my-4 text-center">Zugangsdaten</h1>
	<form class="flex flex-col gap-2" on:submit|preventDefault={handleSubmit}>
		<input
			type="text"
			id="loginDialog_schoolnumber"
			name="schoolnumber"
			placeholder="Schulnummer"
		/>
		<input type="text" id="loginDialog_username" name="username" placeholder="Benutzernamen" />
		<input type="password" id="loginDialog_password" name="password" placeholder="Password" />
		<div class="grid grid-cols-2 gap-4 mt-4">
			<input class="input col-start-2" type="submit" value="Speichern" />
		</div>
	</form>
	{#if message}
		<p class="text-error text-center text-lg font-bold mt-4">{message}</p>
	{/if}
</dialog>

<style>
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.3);
	}
</style>
