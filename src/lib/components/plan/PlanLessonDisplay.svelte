<script lang="ts">
	import type { PlannedLesson } from 'indiware-api';
	import PlanLessonItem from './PlanLessonItem.svelte';
	import type { PlanType } from '$lib/api/planTypes';
	import type { Filter } from '$lib/filter/filter';
	import { faWarning } from '@fortawesome/free-solid-svg-icons/faWarning';
	import Icon from '$lib/components/common/Icon.svelte';

	export let lessons: PlannedLesson[] = [];
	export let type: PlanType;
	export let filter: Filter;

	const filteredLessons = lessons.filter(
		(lesson) => !filter.ignoredLessons.includes(lesson.id.toString())
	);
</script>

<div class="flex flex-col gap-2 overflow-y-auto">
	{#if filter.active}
		{#if filteredLessons.length === 0}
			<div class="flex w-full justify-center gap-3 text-secondary-600">
				<Icon icon={faWarning} scale={1.5} />
				<p class="text-center font-semibold">Es wurden alle Stunden gefiltert</p>
			</div>
		{/if}

		{#each filteredLessons as lesson}
			<PlanLessonItem {lesson} {type} />
		{/each}
	{:else}
		{#each lessons as lesson}
			<PlanLessonItem {lesson} {type} />
		{/each}
	{/if}
</div>
