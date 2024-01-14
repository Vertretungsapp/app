<script lang="ts">
	import type { PageData } from './$types';
	import FilterItem from '$lib/components/plan/filter/FilterItem.svelte';
	import BackButton from '$lib/components/common/BackButton.svelte';
	import { setActive } from '$lib/filter/filterHelper';

	export let data: PageData;

	let active = data.filter.active;

	function toggleActive() {
		setActive(data.credentials, data.filter.name, active);
	}
</script>

<div class="mb-2 flex w-full justify-between">
	<BackButton />

	<div class="flex gap-1 items-center justify-end">
		<label for="active" class="mr-2">Filter aktiv:</label>

		<input
			id="active"
			type="checkbox"
			bind:checked={active}
			on:change={toggleActive}
			class="h-5 w-5 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
		/>
	</div>
</div>

{#if data.plan}
	<ul>
		{#each data.timetable as lesson}
			<FilterItem {lesson} filter={data.filter} credentials={data.credentials} />
		{/each}
	</ul>
{/if}
