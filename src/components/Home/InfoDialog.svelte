<script>
	import Dialog from '../Dialog.svelte';
</script>

<Dialog id="infoDialog">
	<h1 class="text-center">Vertretungsapp<span class="text-accent">.</span></h1>
	<h4 class="text-center">Deine Vertretungsapp für Indiware!</h4>

	<div class="my-4 text-center text-grayedOut">
		<p>
			Lizenziert unter <a
				class="underline"
				href="https://github.com/SachsenspieltCoding/vertretungsapp/blob/master/LICENSE"
				target="_blank">GNU GPLv3</a
			>
		</p>
		<p>Version: {VERSION}</p>
	</div>

	<div class="my-4 flex justify-center gap-2">
		<a href="https://github.com/SachsenspieltCoding/vertretungsapp" target="_blank">GitHub</a>
		<p class="text-accent">・</p>
		<a href="https://vertretungsapp.de/discord" target="_blank">Discord</a>
		<p class="text-accent">・</p>
		<a href="https://vertretungsapp.de" target="_blank">Website</a>
	</div>

	<div class="my-4 flex justify-center gap-2 text-grayedOut">
		<a href="https://vertretungsapp.de/imprint" target="_blank">Impressum</a>
		<p>・</p>
		<a href="https://vertretungsapp.de/privacy" target="_blank">Datenschutz</a>
	</div>

	<input
		class="w-full cursor-pointer"
		type="button"
		value="Schließen"
		on:click={() => document.querySelector('#infoDialog').close()}
	/>
</Dialog>

<style>
	a,
	p {
		font-size: 0.9rem;
	}
</style>
