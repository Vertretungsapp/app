<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex h-screen w-full flex-col items-center justify-center gap-2">
	<h1 class="text-center">Vertretungsapp<span class="text-accent">.</span></h1>
	<h1 class="text-center">
		<span class="text-error">{$page.status}</span> - {$page.error.message}
	</h1>
	<a href="/">zurück zur Startseite</a>
</div>
