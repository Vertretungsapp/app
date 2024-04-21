<script lang="ts">
	import type { PlannedLesson } from 'indiware-api';
	import PlanLessonItem from './PlanLessonItem.svelte';
	import type { PlanType } from '$lib/api/planTypes';
	import type { Filter } from '$lib/filter/filter';
	import { faWarning } from '@fortawesome/free-solid-svg-icons/faWarning';
	import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
	import Icon from '$lib/components/common/Icon.svelte';

	export let lessons: PlannedLesson[] = [];
	export let type: PlanType;
	export let filter: Filter;

	const filteredLessons = lessons.filter(
		(lesson) => !filter.ignoredLessons.includes((lesson.id || 0).toString())
	);
</script>

<div class="flex flex-col gap-2 overflow-y-auto">
	{#if filter.active}
		{#if filteredLessons.length === 0}
			<div class="text-disabled flex w-full justify-center gap-3">
				<Icon icon={faWarning} scale={1.5} />
				<p class="text-center font-semibold">Es wurden alle Stunden gefiltert</p>
			</div>
		{/if}

		{#each filteredLessons as lesson}
			<PlanLessonItem {lesson} {type} />
		{/each}
	{:else}
		{#if lessons.length === 0}
			<div class="text-disabled flex w-full justify-center gap-3">
				<Icon icon={faBan} scale={1.5} />
				<p class="text-center font-semibold">Keine Stunden an diesem Tag</p>
			</div>
		{/if}

		{#each lessons as lesson}
			<PlanLessonItem {lesson} {type} />
		{/each}
	{/if}
</div>
