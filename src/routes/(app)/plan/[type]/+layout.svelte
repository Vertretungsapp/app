<script lang="ts">
	import { PlanType } from '$lib/api/planTypes';
	import { navigationStore } from '$lib/stores/navigationStore';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		$navigationStore.activeId = Object.values(PlanType).indexOf(data.type as PlanType) + 1;
	});
</script>

<slot />
