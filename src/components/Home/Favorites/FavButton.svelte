<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
	import { faStar as faStarLine } from '@fortawesome/free-regular-svg-icons/faStar';
	import { onMount } from 'svelte';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';

	export let number: number;

	let isFavorite: boolean;
	let short: string;

	onMount(() => {
		isFavorite = localStorage.getItem(`favorite.${number}`) === 'true';
		short = localStorage.getItem(`favorite.${number}.short`);
	});

	function deleteFavorite() {
		localStorage.removeItem(`favorite.${number}`);
		localStorage.removeItem(`favorite.${number}.short`);
		isFavorite = false;
		short = '';
	}
</script>

<div class="flex items-center gap-2 w-full">
	<div class="h-full aspect-square flex items-center justify-center text-accent">
		<Icon data={isFavorite ? faStar : faStarLine} scale="2" />
	</div>

	<a
		href={isFavorite ? `/plan/${short}` : '#'}
		class={`w-full p-1 border-[3px] border-accent rounded-[7px] flex items-center justify-center ${
			!isFavorite && 'text-grayedOut'
		}`}
		>{isFavorite ? short : `Favorit ${number}`}
	</a>
	{#if isFavorite}
		<button
			on:click={deleteFavorite}
			class="border-[3px] border-accent rounded-[7px] p-1 h-full aspect-square"
		>
			<Icon data={faTrash} scale="1.5" />
		</button>
	{/if}
</div>
