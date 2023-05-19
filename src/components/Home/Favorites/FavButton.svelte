<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import { faStar } from '@fortawesome/free-solid-svg-icons';
	import { faStar as faStarLine } from '@fortawesome/free-regular-svg-icons';
	import { onMount } from 'svelte';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';
	import { getFavorite, removeFavorite } from '$lib/favorites';
	import { getCredentials } from '$lib/api/session';

	export let id: number;

	let isFavorite: boolean;
	let short: string;
	let schoolnumber: string;

	onMount(() => {
		schoolnumber = getCredentials()?.schoolnumber ?? '';
		const fav = getFavorite(schoolnumber, id);
		isFavorite = fav !== null;
		short = fav?.short ?? '';
	});

	function clear() {
		isFavorite = false;
		short = '';
		removeFavorite(schoolnumber, id);
	}
</script>

<div class="flex items-center gap-2 w-full">
	<div class="h-full aspect-square flex items-center justify-center text-accent">
		<Icon data={isFavorite ? faStar : faStarLine} scale="2" />
	</div>

	<a
		href={isFavorite ? `/plan/${short}` : `/favorite/${schoolnumber}/${id}/set`}
		class={`w-full p-1 dynborder rounded-[7px] flex items-center justify-center ${
			!isFavorite && 'text-grayedOut'
		}`}
		>{isFavorite ? short : `Favorit ${id}`}
	</a>
	{#if isFavorite}
		<button
			on:click={clear}
			class="dynborder rounded-[7px] p-1 h-full aspect-square"
		>
			<Icon data={faTrash} scale="1.5" />
		</button>
	{/if}
</div>
