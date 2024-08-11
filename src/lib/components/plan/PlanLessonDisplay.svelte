<script lang="ts">
	import type { PlannedLesson } from 'indiware-api';
	import PlanLessonItem from './PlanLessonItem.svelte';
	import type { PlanType } from '$lib/api/planTypes';
	import type { Filter } from '$lib/filter/filter';
	import { faWarning } from '@fortawesome/free-solid-svg-icons/faWarning';
	import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
	import Icon from '$lib/components/common/Icon.svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	export let lessons: PlannedLesson[] = [];
	export let type: PlanType;
	export let filter: Filter;

	let visible = false;

	if (filter.active) {
		lessons = lessons.filter(
			(lesson) => !filter.ignoredLessons.includes((lesson.id || 0).toString())
		);
	}

	onMount(() => {
		visible = true;
	});
</script>

<div class="flex touch-pan-y flex-col gap-2 overflow-y-auto overflow-x-hidden">
	{#if lessons.length === 0}
		<div class="text-disabled flex w-full justify-center gap-3">
			<Icon icon={filter.active ? faWarning : faBan} scale={1.5} />
			<p class="text-center font-semibold">
				{filter.active ? 'Es wurden alle Stunden gefiltert' : 'Keine Stunden an diesem Tag'}
			</p>
		</div>
	{/if}

	{#each lessons as lesson, index}
		{#if visible}
			<div transition:fly={{ x: 70, duration: 250, delay: index * 30, easing: cubicOut }}>
				<PlanLessonItem {lesson} {type} />
			</div>
		{/if}
	{/each}
</div>
