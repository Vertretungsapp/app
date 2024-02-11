<script lang="ts">
	import type { PageData } from './$types';
	import { getHrefLink } from '$lib/common/planHelper';
	import { PlanType } from '$lib/api/planTypes';
	import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
	import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';
	import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
	import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';
	import Icon from '$lib/components/common/Icon.svelte';
	import { faX } from '@fortawesome/free-solid-svg-icons';

	export let data: PageData

	export let search = data.search

	let items = data.items

	function getPlanTypePriority(type: PlanType): number {
		return Object.values(PlanType).indexOf(type)
	}

	$: {
		if (search) {
			items = data.items.filter(entity => entity.name.toLowerCase().includes(search.toLowerCase()))
		} else {
			items = data.items
		}

		items = items.sort((a, b) => a.name.localeCompare(b.name) && getPlanTypePriority(parsePlanType(a.type)) - getPlanTypePriority(parsePlanType(b.type)))
	}

	function parsePlanType(type: string): PlanType {
		return type as PlanType;
	}

	function getIcon(type: PlanType) {
		switch (type) {
			case PlanType.SCHOOL_CLASS:
				return faPeopleGroup;

			case PlanType.ROOM:
				return faDoorOpen;

			case PlanType.TEACHER:
				return faUser;

			default:
				return faQuestion;
		}
	}
</script>

<div class="relative flex items-center">
	<input class="w-full h-full" type="text" placeholder="Suche" bind:value={search} />
	<button class="absolute right-2" on:click={() => search = ''}>
		<Icon icon={faX} class="text-disabled" />
	</button>
</div>

<ul class="grid grid-cols-2 gap-2 mt-4">
	{#each items as item}
		<a class="bg-clickable rounded-lg p-2 w-full flex gap-2" href={getHrefLink(item.name, parsePlanType(item.type))}>
			<Icon icon={getIcon(parsePlanType(item.type))} scale={1.5} />
			<span>{item.name}</span>
		</a>
	{/each}
</ul>
