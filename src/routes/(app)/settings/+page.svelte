<script lang="ts">
	import { clearCache } from '$lib/cache/cache';
	import CredentialsLink from '$lib/components/settings/CredentialsLink.svelte';
	import toast from 'svelte-french-toast';

	function clrCache() {
		clearCache();
		toast.success('Cache geleert', {
			duration: 2000
		});
	}
</script>

<div class="flex w-full justify-end"></div>

<div class="mb-4 flex justify-between">
	<h1>Einstellungen</h1>
	<CredentialsLink />
</div>

<button class="rounded-lg bg-secondary-900 p-2" on:click={clrCache}>Clear Cache</button>
