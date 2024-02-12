<script lang="ts">
	import type { PageData } from './$types';
	import { getHrefLink } from '$lib/common/planHelper';
	import { parsePlanType, PlanType } from '$lib/api/planTypes';
	import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
	import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';
	import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
	import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
	import Icon from '$lib/components/common/Icon.svelte';
	import { faX } from '@fortawesome/free-solid-svg-icons';
	import SearchItem from '$lib/components/search/SearchItem.svelte';

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

<div class="relative flex items-center">
	<input class="h-full w-full" type="text" placeholder="Suche" bind:value={search} />
	<button class="absolute right-2" on:click={() => (search = '')}>
		<Icon icon={faX} class="text-disabled" />
	</button>
</div>

<ul class="mt-4 grid grid-cols-2 gap-2">
	<li class="col-span-2 text-disabled">Klassen</li>
	{#each items.filter((i) => i.type === "schoolClass") as item}
		<SearchItem {item} />
	{/each}

	<li class="col-span-2 text-disabled">Räume</li>
	{#each items.filter((i) => i.type === "room") as item}
		<SearchItem {item} />
	{/each}

	<li class="col-span-2 text-disabled">Lehrer</li>
	{#each items.filter((i) => i.type === "teacher") as item}
		<SearchItem {item} />
	{/each}
</ul>
