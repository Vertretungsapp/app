<script lang="ts">
	import type { ISubstitutionPlan, PlannedLesson, SubstitutionPlan } from 'indiware-api';
	import PlanLessonItem from './PlanLessonItem.svelte';

	export let lessons: PlannedLesson[] = [];
</script>

<div class="flex flex-col gap-2 overflow-y-auto">
	{#each lessons as lesson}
		<PlanLessonItem {lesson} />
	{/each}
</div>
