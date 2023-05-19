<script lang="ts">
	import Dialog from '../Dialog.svelte';
	import FilterDialogItem from './FilterDialogItem.svelte';
	import type { Filter } from '$lib/filter';
	import { isLessonEnabled, setAllLessonEnabled } from '$lib/filter';

	export let filter: Filter;

	function setAllLesson(bool: boolean) {
		filter = setAllLessonEnabled(filter, bool);
	}
</script>

<Dialog id="filterDialog">
	<h1>Filter</h1>

	<div class="grid grid-cols-2 gap-4">
		<button class="input" on:click={() => setAllLesson(true)}>Alle</button>
		<button class="input" on:click={() => setAllLesson(false)}>Nichts</button>
	</div>

	<div class="grid max-h-[70vh] grid-cols-2 gap-4 overflow-y-scroll py-4">
		{#each filter.lessons.map((l) => l.lesson) as lesson}
			<FilterDialogItem {lesson} checked={isLessonEnabled(filter, lesson)} bind:filter />
		{/each}
	</div>
	<button class="input w-full" on:click={() => location.reload()}>Schließen</button>
</Dialog>
