<script lang="ts">
	import { page } from '$app/stores';
	import { planTypeToTranslatedString } from '$lib/api/planTypes';
	import Icon from '$lib/components/common/Icon.svelte';
	import PlanHeaderControls from '$lib/components/plan/PlanHeaderControls.svelte';
	import PlanInformation from '$lib/components/plan/PlanInformation.svelte';
	import PlanLessonDisplay from '$lib/components/plan/PlanLessonDisplay.svelte';
	import type { PageData } from './$types';
	import { swipe } from 'svelte-gestures';
	import { faFaceFrown } from '@fortawesome/free-solid-svg-icons/faFaceFrown';

	export let data: PageData;

	// function handleSwipe(e: any) {
	// 	if(e.detail.direction === 'right') {

	// 	}
	// }
</script>

<div
	class="flex h-full max-h-full flex-col"
	use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' }}
>
	<PlanHeaderControls />

	<h1 class="text-center">
		{planTypeToTranslatedString(data.type)} <span class="text-primary">{data.short}</span>
	</h1>

	{#key $page.url}
		<PlanInformation plan={data.substitutionPlan || undefined} />
	{/key}

	{#if data.plan && data.substitutionPlan}
		<PlanLessonDisplay lessons={data.plan.plannedLessons} />
	{:else}
		<p class="flex items-center justify-center gap-2 font-bold text-secondary-600">
			<Icon icon={faFaceFrown} />Kein Plan verfügbar
		</p>
	{/if}
</div>
