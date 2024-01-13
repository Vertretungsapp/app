<script lang="ts">
	import type { LayoutData } from './$types';
	import { planStore } from '$lib/stores/planStore';
    import { page } from '$app/stores';

	export let data: LayoutData;

	$: {
		if (data.substitutionPlan) {
			$planStore = {
				currentDate: data.substitutionPlan.date,
				holidays: data.substitutionPlan.holidays,
				isRefreshing: $planStore.isRefreshing
			};
		} else if(data.error) {
            $planStore = {
                currentDate: new Date(data.date || Date.now()),
                holidays: $planStore.holidays,
                isRefreshing: $planStore.isRefreshing
            };
        }
	}
</script>

{#key $page.url.search}
	<slot />
{/key}
