<script lang="ts">
	import { planTypeToTranslatedString } from '$lib/api/planTypes';
	import Icon from '$lib/components/common/Icon.svelte';
	import PlanHeaderControls from '$lib/components/plan/PlanHeaderControls.svelte';
	import PlanInformation from '$lib/components/plan/PlanInformation.svelte';
	import PlanLessonDisplay from '$lib/components/plan/PlanLessonDisplay.svelte';
	import type { PageData } from './$types';
	import { swipe } from 'svelte-gestures';
	import { faFaceFrown } from '@fortawesome/free-solid-svg-icons/faFaceFrown';
	import { getHrefLink, nextDate, previousDate } from '$lib/common/planHelper';
	import { goto } from '$app/navigation';
	import { planStore, usePlan } from '$lib/stores/planStore';
	import type { PlannedLesson } from 'indiware-api';

	export let data: PageData;

	const ignoreDates = $planStore.holidays.map((h) => new Date(h).toDateString());

	let plannedLessons: PlannedLesson[] = [];


	$: if ($planStore.plan) {
		plannedLessons = usePlan(data.type, data.short, $planStore.plan).plannedLessons;
	}

	console.log(plannedLessons);

	function addDays(days: number): Date {
		const currentDate = $planStore.date;

		if (days > 0) {
			return nextDate(currentDate, ignoreDates);
		} else {
			return previousDate(currentDate, ignoreDates);
		}
	}

	function previous() {
		goto(getHrefLink(data.short, data.type, addDays(-1)), { replaceState: true });
	}

	function next() {
		goto(getHrefLink(data.short, data.type, addDays(1)), { replaceState: true });
	}

	function handleSwipe(e: CustomEvent) {
		if (e.detail.direction === 'right') {
			previous();
		} else if (e.detail.direction === 'left') {
			next();
		}
	}
</script>

<div
	class="flex h-full max-h-full flex-col"
	use:swipe={{ timeframe: 600, minSwipeDistance: 20, touchAction: 'pan-y' }}
	on:swipe={handleSwipe}
>
	<PlanHeaderControls filterActive={data.filter.active} isFavorite={data.isFavorite} />

	<h1 class="text-center">
		{planTypeToTranslatedString(data.type)} <span class="text-primary-500">{data.short}</span>
	</h1>

	<PlanInformation
		on:next={next}
		on:previous={previous}
	/>

	{#if $planStore.plan}
		{#key plannedLessons}
			<PlanLessonDisplay
				lessons={plannedLessons.sort((a, b) => a.order - b.order)}
				type={data.type}
				filter={data.filter}
			/>
		{/key}
	{:else}
		<p class="text-disabled flex items-center justify-center gap-2 font-bold">
			<Icon icon={faFaceFrown} />
			Kein Plan verfügbar
		</p>
	{/if}
</div>
