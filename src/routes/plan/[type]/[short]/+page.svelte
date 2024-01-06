<script lang="ts">
	import { planTypeToTranslatedString } from '$lib/api/planTypes';
	import PlanHeaderControls from '$lib/components/plan/PlanHeaderControls.svelte';
	import PlanInformation from '$lib/components/plan/PlanInformation.svelte';
	import PlanLessonDisplay from '$lib/components/plan/PlanLessonDisplay.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex max-h-full flex-col">
	<PlanHeaderControls />

	<h1 class="text-center">
		{planTypeToTranslatedString(data.type)} <span class="text-primary">{data.short}</span>
	</h1>

	<PlanInformation plan={data.substitutionPlan} />

	<PlanLessonDisplay lessons={data.plan.plannedLessons} />
</div>
