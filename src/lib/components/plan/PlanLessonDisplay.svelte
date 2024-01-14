<script lang="ts">
	import type { PlannedLesson } from 'indiware-api';
	import PlanLessonItem from './PlanLessonItem.svelte';
	import type { PlanType } from '$lib/api/planTypes';
	import type { Filter } from '$lib/filter/filter';

	export let lessons: PlannedLesson[] = [];
	export let type: PlanType;
	export let filter: Filter;
</script>

<div class="flex flex-col gap-2 overflow-y-auto">
	{#each lessons as lesson}
		{#if !filter.ignoredLessons.includes(lesson.id.toString())}
			 <PlanLessonItem {lesson} {type} />
		{/if}
	{/each}
</div>
