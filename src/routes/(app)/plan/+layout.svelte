<script lang="ts">
	import { planStore } from '$lib/stores/planStore';
	import { page } from '$app/stores';
	import toast from 'svelte-french-toast';
	
	$: if ($planStore.error) toast.error($planStore.error);
</script>

{#key $page.url.search}
	<slot />
{/key}
