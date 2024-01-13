<script lang="ts">
	import { onMount } from 'svelte';
	import { navigationStore } from '$lib/stores/navigationStore';

	onMount(() => {
		$navigationStore.activeId = 4;
	});
</script>

<slot />
