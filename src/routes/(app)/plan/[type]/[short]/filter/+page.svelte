<script lang="ts">
	import type { PageData } from './$types';
	import FilterItem from '$lib/components/plan/filter/FilterItem.svelte';
	import BackButton from '$lib/components/navigation/BackButton.svelte';
	import { setActive } from '$lib/filter/filterHelper';
	import { faCheckCircle } from '@fortawesome/free-regular-svg-icons/faCheckCircle';
	import { faCircle } from '@fortawesome/free-regular-svg-icons/faCircle';
	import { faShuffle } from '@fortawesome/free-solid-svg-icons/faShuffle';
	import FilterQuickButton from '$lib/components/plan/filter/FilterQuickButton.svelte';

	export let data: PageData;

	let active = data.filter.active;

	// This contains the checked state of each filter item
	// Yes, this is a bit hacky, but as long as it works...
	const filterItems: Record<string, boolean> = {};

	function toggleActive() {
		setActive(data.credentials, data.filter.name, active);
	}

	function allActive() {
		Object.keys(filterItems).forEach((key) => {
			filterItems[key] = true;
		});
	}

	function allInactive() {
		Object.keys(filterItems).forEach((key) => {
			filterItems[key] = false;
		});
	}

	function allInvert() {
		Object.keys(filterItems).forEach((key) => {
			filterItems[key] = !filterItems[key];
		});
	}
</script>

<div class="flex h-full flex-col">
	<div class="flex w-full justify-between">
		<BackButton />

		<div class="flex items-center justify-end gap-1">
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

	<div class="grid grid-cols-3 gap-2 py-3">
		<FilterQuickButton icon={faCheckCircle} on:click={allActive}>Alle</FilterQuickButton>

		<FilterQuickButton icon={faCircle} on:click={allInactive}>Nichts</FilterQuickButton>

		<FilterQuickButton icon={faShuffle} on:click={allInvert}>Umkehren</FilterQuickButton>
	</div>

	<ul class="grid max-h-full grid-cols-2 gap-4 overflow-y-auto">
		{#each data.timetable as lesson}
			<FilterItem
				{lesson}
				filter={data.filter}
				credentials={data.credentials}
				bind:checked={filterItems[lesson.name + lesson.id]}
			/>
		{/each}
	</ul>
</div>
