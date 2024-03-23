<script lang="ts">
	import type { LayoutData } from './$types';
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	import { planStore } from '$lib/stores/planStore';
	import { page } from '$app/stores';

	export let data: LayoutData;

	$: {
		if (data.substitutionPlan) {
			$planStore = {
				currentDate: data.substitutionPlan.date,
				holidays: data.substitutionPlan.holidays,
				isRefreshing: $planStore.isRefreshing,
				plan: data.substitutionPlan
			};
		} else if (data.error) {
			$planStore = {
				currentDate: new Date(data.date || Date.now()),
				holidays: $planStore.holidays,
				isRefreshing: $planStore.isRefreshing,
				plan: $planStore.plan
			};
		}
	}
</script>

{#key $page.url.search}
	<slot />
{/key}
