<script lang="ts">
	import { getCredentials, login, logout } from '$lib/api/session';
	import type { Credentials } from '$lib/api/session';
	import { onMount } from 'svelte';
	import { Icon } from 'svelte-awesome';
	import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
	import Dialog from '../Dialog.svelte';

	let message = null;
	let credentials: Credentials | null = null;

	async function handleSubmit(e) {
		const formData = new FormData(e.target);

		const data = {
			schoolnumber: formData.get('schoolnumber').toString(),
			username: formData.get('username') as 'schueler' | 'lehrer',
			password: formData.get('password').toString()
		};

		login(data).then((res) => {
			if (res === 200) return location.reload();
			if (res === 401) return (message = 'Zugangsdaten konnten nicht verifiziert werden.');
			if (res === 404) return (message = 'Die Schulnummer konnte nicht gefunden werden.');
			message = 'Es ist ein Fehler aufgetreten.';
		});
	}

	function closeModal() {
		document.querySelector('#loginDialog').close();
	}

	function handleLogout() {
		logout();
	}

	onMount(() => {
		credentials = getCredentials();
		if (credentials) {
			document.querySelector('#loginDialog_schoolnumber').value = credentials.schoolnumber;
			document.querySelector('#loginDialog_username').value = credentials.username;
			document.querySelector('#loginDialog_password').value = credentials.password;
		}
	});
</script>

<Dialog id="loginDialog">
	<h1 class="my-4 text-center">Zugangsdaten</h1>
	<form class="flex flex-col gap-2" on:submit|preventDefault={handleSubmit}>
		<input
			type="text"
			id="loginDialog_schoolnumber"
			name="schoolnumber"
			placeholder="Schulnummer"
		/>
		<select class="input" id="loginDialog_username" name="username">
			<option value="schueler" selected>Schüler</option>
			<option value="lehrer">Lehrer</option>
		</select>
		<input type="password" id="loginDialog_password" name="password" placeholder="Password" />
		<div class="mt-4 grid grid-cols-4 gap-4">
			{#if credentials}
				<input
					class="input col-span-3 cursor-pointer opacity-60"
					type="button"
					value="Schließen"
					on:click={closeModal}
				/>
			{/if}
			{#if credentials}
				<div
					class="col-span-1 flex cursor-pointer items-center justify-center rounded-[7px] border-[3px] border-error"
					on:keypress={() => {}}
					on:click={handleLogout}
				>
					<Icon data={faRightFromBracket} scale="2" />
				</div>
			{/if}
			<input class="input col-span-4 cursor-pointer" type="submit" value="Speichern" />
		</div>
	</form>
	{#if message}
		<p class="mt-4 text-center text-lg font-bold text-error">{message}</p>
	{/if}
</Dialog>
