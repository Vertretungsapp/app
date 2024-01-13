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
	import { planStore } from '$lib/stores/planStore';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const ignoreDates = $planStore.holidays.map((h) => new Date(h).toDateString());

	function addDays(days: number): Date {
		const currentDate = data.substitutionPlan?.date || $planStore.currentDate;

		if (days > 0) {
			return nextDate(currentDate, ignoreDates);
		} else {
			return previousDate(currentDate, ignoreDates);
		}
	}

	function loadLink(link: string) {
		$planStore.isRefreshing = true;
		goto(link);
	}

	function previous() {
		loadLink(getHrefLink(addDays(-1), data.short, data.type));
	}

	function next() {
		loadLink(getHrefLink(addDays(1), data.short, data.type));
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
	use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' }}
	on:swipe={handleSwipe}
>
	<PlanHeaderControls />

	<h1 class="text-center">
		{planTypeToTranslatedString(data.type)} <span class="text-primary">{data.short}</span>
	</h1>

	<PlanInformation
		plan={data.substitutionPlan || undefined}
		on:next={next}
		on:previous={previous}
	/>

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
</div>
