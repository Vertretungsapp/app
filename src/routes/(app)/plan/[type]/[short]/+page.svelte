<script lang="ts">
	import { page } from '$app/stores';
	import { PlanType, planTypeToTranslatedString } from '$lib/api/planTypes';
	import Icon from '$lib/components/common/Icon.svelte';
	import PlanHeaderControls from '$lib/components/plan/PlanHeaderControls.svelte';
	import PlanInformation from '$lib/components/plan/PlanInformation.svelte';
	import PlanLessonDisplay from '$lib/components/plan/PlanLessonDisplay.svelte';
	import type { PageData } from './$types';
	import { swipe } from 'svelte-gestures';
	import { faFaceFrown } from '@fortawesome/free-solid-svg-icons/faFaceFrown';
	import { getHrefLink, nextDate, previousDate } from '$lib/common/planHelper';
	import { planStore } from '$lib/stores/planStore';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const type = ($page.data.type || 'schoolClass') as PlanType;
	const short = $page.data.short as string;

	const ignoreDates = $planStore.holidays.map((h) => new Date(h).toDateString());

	function addDays(days: number): Date {
		if (days > 0) {
			return nextDate($planStore.currentDate, ignoreDates);
		} else {
			return previousDate($planStore.currentDate, ignoreDates);
		}
	}

	function handleSwipe(e: CustomEvent) {
		console.log(e);

		if (e.detail.direction === 'right') {
			goto(getHrefLink(addDays(-1), short, type));
		} else if (e.detail.direction === 'left') {
			goto(getHrefLink(addDays(1), short, type));
		}
	}
</script>

<!-- ignore error that on:swipe is not available, this is a bug with the library and Svelte 4 -->
<div
	class="flex h-full max-h-full flex-col"
	use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' }}
	on:swipe={handleSwipe}
>
	{#key $page.url}
		<PlanHeaderControls />
	{/key}

	<h1 class="text-center">
		{planTypeToTranslatedString(data.type)} <span class="text-primary">{data.short}</span>
	</h1>

	{#key $page.url}
		<PlanInformation plan={data.substitutionPlan || undefined} />
	{/key}

	{#key $page.url}
		{#if data.plan && data.substitutionPlan}
			<PlanLessonDisplay
				lessons={data.plan.plannedLessons.sort((a, b) => a.order - b.order)}
				type={data.type}
			/>
		{:else}
			<p class="flex items-center justify-center gap-2 font-bold text-secondary-600">
				<Icon icon={faFaceFrown} />Kein Plan verfügbar
			</p>
		{/if}
	{/key}
</div>
