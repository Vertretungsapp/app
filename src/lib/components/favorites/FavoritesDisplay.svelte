<script lang="ts">
	import { getHrefLink } from '$lib/common/planHelper';
	import type { Favorite } from '$lib/favorites/favorites';
	import { dndzone } from 'svelte-dnd-action';
	import { updateFavorites, type Favorites } from '$lib/favorites/favorites';
	import { flip } from 'svelte/animate';

	const flipDurationMs = 300;

	export let favorites: Favorites;
	let items: Favorite[] = favorites.favs;

	function handleDndConsider(e: CustomEvent) {
		items = e.detail.items;
	}

	function handleDndFinalize(e: CustomEvent) {
		items = e.detail.items;

		let newFavs: Favorite[] = [];
		items.forEach((item, index) => {
			newFavs.push({ id: item.id, name: item.name, type: item.type, order: index });
		});
		favorites.favs = newFavs;
		updateFavorites(favorites);
	}
</script>

<div
	use:dndzone={{ items, flipDurationMs }}
	on:consider={handleDndConsider}
	on:finalize={handleDndFinalize}
	class="grid grid-cols-3 gap-2"
>
	{#each items as fav (fav.id)}
		<a
			animate:flip={{ duration: flipDurationMs }}
			class="bg-clickable flex items-center justify-center rounded-lg p-4 text-center"
			href={getHrefLink(fav.name, fav.type)}
		>
			{fav.name}
		</a>
	{/each}
</div>

{#if items.length === 0}
	<p class="text-disabled col-span-3 text-sm">
		Du hast noch keine Favoriten. Um ein Plan zu favorisieren, klicke einfach auf das Stern-Symbol
		im Plan.
	</p>
{/if}
