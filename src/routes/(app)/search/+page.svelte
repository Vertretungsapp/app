<script lang="ts">
	import type { PageData } from './$types';
	import { parsePlanType, PlanType } from '$lib/api/planTypes';
	import Icon from '$lib/components/common/Icon.svelte';
	import { faX } from '@fortawesome/free-solid-svg-icons';
	import SearchItem from '$lib/components/search/SearchItem.svelte';
	import BackButton from '$lib/components/common/BackButton.svelte';

	export let data: PageData;

	export let search = data.search;

	let items = data.items;

	function getPlanTypePriority(type: PlanType): number {
		return Object.values(PlanType).indexOf(type);
	}

	$: {
		if (search) {
			items = data.items.filter((entity) =>
				entity.name.toLowerCase().includes(search.toLowerCase())
			);
		} else {
			items = data.items;
		}

		items = items.sort(
			(a, b) =>
				a.name.localeCompare(b.name) &&
				getPlanTypePriority(parsePlanType(a.type)) - getPlanTypePriority(parsePlanType(b.type))
		);
	}
</script>

<div class="flex h-full flex-col">
	<div class="flex w-full items-center justify-between">
		<div class="flex gap-2">
			<BackButton />
			<h1>Suche</h1>
		</div>
		<a href="/search/free/room" class="bg-clickable rounded-lg p-1">Freien Raum finden</a>
	</div>

	<div class="relative flex items-center gap-2 mt-2">
		<!-- eslint-disable-next-line svelte/valid-compile -->
		<input class="h-full w-full p-2" type="text" placeholder="Suche" autofocus bind:value={search} />
		<button class="absolute right-2" on:click={() => (search = '')}>
			<Icon icon={faX} class="text-disabled" />
		</button>
	</div>

	<ul class="mt-4 grid max-h-full grid-cols-2 gap-2 overflow-y-auto">
		<li class="text-disabled sticky top-0 col-span-2 bg-background py-1">Klassen</li>
		{#each items.filter((i) => i.type === 'schoolClass') as item}
			<SearchItem {item} />
		{/each}

		<li class="text-disabled sticky top-0 col-span-2 bg-background py-1">Räume</li>
		{#each items.filter((i) => i.type === 'room') as item}
			<SearchItem {item} />
		{/each}

		<li class="text-disabled sticky top-0 col-span-2 bg-background py-1">Lehrer</li>
		{#each items.filter((i) => i.type === 'teacher') as item}
			<SearchItem {item} />
		{/each}
	</ul>
</div>
