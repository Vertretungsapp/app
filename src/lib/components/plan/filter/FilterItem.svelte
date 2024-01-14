<script lang="ts">
	import type { Filter } from '$lib/filter/filter';
	import type { Lesson, Credentials } from 'indiware-api';
	import { ignoreLesson, unignoreLesson } from '$lib/filter/filterHelper';
	import { twMerge } from 'tailwind-merge';

	export let credentials: Credentials;
	export let lesson: Lesson;
	export let filter: Filter;

	let checked = !filter.ignoredLessons.includes(lesson.id.toString());

	function handleClick() {
		checked = !checked;
		if (!checked) {
			ignoreLesson(credentials, filter.name, lesson.id);
		} else {
			unignoreLesson(credentials, filter.name, lesson.id);
		}
	}
</script>


	<button
		class={twMerge(
			'flex flex-col items-center justify-center rounded-lg border border-secondary-950 bg-secondary-950 p-2 leading-tight transition-colors duration-75',
			checked && 'border-primary'
		)}
		on:click={handleClick}
	>
		<span class="font-semibold">{lesson.name}</span>
		{#if lesson.teacher}<span class="text-sm">{lesson.teacher}</span>{/if}
		<span class="text-xs text-secondary-600">{lesson.id}</span>
	</button>