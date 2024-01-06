<script lang="ts">
	import type { ISubstitutionPlan } from 'indiware-api';
	import { format } from 'date-fns/format';
	import { de } from 'date-fns/locale';

	export let plan: ISubstitutionPlan;
</script>

<div class="flex w-full flex-col items-center justify-center gap-4 pb-2">
	<p class="text-xs text-secondary-600">
		Letzte Aktualisierung: {new Date(plan.lastUpdated).toLocaleString()}
	</p>

	<h2 class="text-xl font-bold">
		<span class=" text-primary">
			{format(plan.date, 'EEEE', {
				locale: de
			})}</span
		>,
		<span>{format(plan.date, 'dd.MM.yyyy')}</span>
	</h2>
</div>
