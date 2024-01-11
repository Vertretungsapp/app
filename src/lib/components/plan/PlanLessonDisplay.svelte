<script lang="ts">
	import type { PlannedLesson } from 'indiware-api';
	import PlanLessonItem from './PlanLessonItem.svelte';
	import type { PlanType } from '$lib/api/planTypes';
	import { page } from '$app/stores';

	export let lessons: PlannedLesson[] = [];
	export let type: PlanType;
</script>

<div class="flex flex-col gap-2 overflow-y-auto">
	{#key $page.url}
		{#each lessons as lesson}
			<PlanLessonItem {lesson} {type} />
		{/each}
	{/key}
</div>
