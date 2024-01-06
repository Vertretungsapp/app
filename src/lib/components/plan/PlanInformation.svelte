<script lang="ts">
	import type { ISubstitutionPlan } from 'indiware-api';
	import { format } from 'date-fns/format';
	import { de } from 'date-fns/locale';
	import PlanNavigation from './PlanNavigation.svelte';
	import { planStore } from '$lib/stores/planStore';

	export let plan: ISubstitutionPlan | undefined;
</script>

<div class="flex w-full flex-col items-center justify-center gap-4 pb-2">
	{#if plan}
		<p class="text-xs text-secondary-600">
			Letzte Aktualisierung: {new Date(plan.lastUpdated).toLocaleString()}
		</p>
	{/if}

	<PlanNavigation>
		<h2 class="text-xl font-bold">
			<span class=" text-primary">
				{format($planStore.currentDate, 'EEEE', {
					locale: de
				})}</span
			>,
			<span>{format($planStore.currentDate, 'dd.MM.yyyy')}</span>
		</h2>
	</PlanNavigation>
</div>
