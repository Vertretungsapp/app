<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
	import { faStar as faStarLine } from '@fortawesome/free-regular-svg-icons/faStar';
	import { onMount } from 'svelte';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';
	import { getFavorite, removeFavorite } from '$lib/favorites';

	export let id: number;

	let isFavorite: boolean;
	let short: string;

	onMount(() => {
		const fav = getFavorite(id);
		isFavorite = fav !== null;
		short = fav?.short ?? '';
	});

	function clear() {
		isFavorite = false;
		short = '';
		removeFavorite(id);
	}
</script>

<div class="flex items-center gap-2 w-full">
	<div class="h-full aspect-square flex items-center justify-center text-accent">
		<Icon data={isFavorite ? faStar : faStarLine} scale="2" />
	</div>

	<a
		href={isFavorite ? `/plan/${short}` : `/favorite/${id}/set`}
		class={`w-full p-1 border-[3px] border-accent rounded-[7px] flex items-center justify-center ${
			!isFavorite && 'text-grayedOut'
		}`}
		>{isFavorite ? short : `Favorit ${id}`}
	</a>
	{#if isFavorite}
		<button
			on:click={clear}
			class="border-[3px] border-accent rounded-[7px] p-1 h-full aspect-square"
		>
			<Icon data={faTrash} scale="1.5" />
		</button>
	{/if}
</div>
