<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="w-full h-screen flex flex-col gap-2 items-center justify-center">
	<h1 class="text-center">Vertretungsplan<span class="text-accent">42</span></h1>
	<h1 class=""><span class="text-error">{$page.status}</span> - {$page.error.message}</h1>
	<a href="/">zurück zur Startseite</a>
</div>
