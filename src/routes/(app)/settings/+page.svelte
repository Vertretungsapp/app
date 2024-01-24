<script lang="ts">
	import { getCredentials } from '$lib/api/session';
	import { clearCache, getCache } from '$lib/cache/cache';
	import CredentialsLink from '$lib/components/settings/CredentialsLink.svelte';
	import toast from 'svelte-french-toast';

	function clrCache() {
		clearCache();
		toast.success("Cache geleert", {
			duration: 2000,
		});
	}
</script>

<div class="flex w-full justify-end"></div>

<div class="flex justify-between mb-4">
	<h1>Einstellungen</h1>
	<CredentialsLink />
</div>

<pre>
	<code>
		{JSON.stringify(getCache(), null, 2)}
	</code>
</pre>

<button class="bg-secondary-900 p-2 rounded-lg" on:click={clrCache}>Clear Cache</button>