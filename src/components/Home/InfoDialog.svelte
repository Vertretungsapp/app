<script>
	import Dialog from '../Dialog.svelte';
</script>

<Dialog id="infoDialog" let:element>
	<h1 class="text-center">Vertretungsapp<span class="text-accent">.</span></h1>
	<h4 class="text-center">Deine Vertretungsapp für Indiware!</h4>

	<div class="my-4 text-center text-grayedOut">
		<p>
			Lizenziert unter <a
				class="underline"
				href="https://github.com/Vertretungsapp/app/blob/master/LICENSE"
				target="_blank">GNU GPLv3</a
			>
		</p>
		<!-- eslint-disable-next-line no-undef -->
		<!-- svelte-ignore missing-declaration -->
		<p>Version: {PROJECT_VERSION}</p>
	</div>

	<div class="my-4 flex justify-center gap-2">
		<a href="https://github.com/Vertretungsapp/app" target="_blank">GitHub</a>
		<p class="text-accent">・</p>
		<a href="https://www.vertretungsapp.de/discord" target="_blank">Discord</a>
		<p class="text-accent">・</p>
		<a href="https://www.vertretungsapp.de" target="_blank">Website</a>
	</div>

	<div class="my-4 flex justify-center gap-2 text-grayedOut">
		<a href="https://www.vertretungsapp.de/imprint" target="_blank">Impressum</a>
		<p>・</p>
		<a href="https://www.vertretungsapp.de/privacy" target="_blank">Datenschutz</a>
	</div>

	<input
		class="w-full cursor-pointer"
		type="button"
		value="Schließen"
		on:click={() => element.close()}
	/>
</Dialog>

<style>
	a,
	p {
		font-size: 0.9rem;
	}
</style>
