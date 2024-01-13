<script lang="ts">
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';
	import { planStore } from '$lib/stores/planStore';

	export let data: LayoutData;

	$: {
		if (data.substitutionPlan) {
			$planStore = {
				currentDate: data.substitutionPlan.date,
				holidays: data.substitutionPlan.holidays,
				isRefreshing: false
			};
		} else {
            $planStore = {
                currentDate: new Date(data.date || Date.now()),
                holidays: $planStore.holidays,
                isRefreshing: false
            };
        }
	}
</script>

{#key $page.url.search}
	<slot />
{/key}
