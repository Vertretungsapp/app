<script lang="ts">
	import { getHrefLink } from '$lib/common/planHelper';
	import type { Favorite } from '$lib/favorites/favorites';
	import { dndzone } from 'svelte-dnd-action';
	import { updateFavorites, type Favorites } from '$lib/favorites/favorites';
    import { flip } from 'svelte/animate';

    const flipDurationMs = 300;

	export let favorites: Favorites;
	let items: Favorite[] = favorites.favs;

	function handleDndConsider(e: any) {
		items = e.detail.items;
	}

	function handleDndFinalize(e: any) {
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
            animate:flip={{duration: flipDurationMs}}
			class="flex items-center justify-center rounded-lg bg-secondary-800 p-4 text-center"
			href={getHrefLink(fav.name, fav.type)}
		>
			{fav.name}
		</a>
	{/each}
</div>
