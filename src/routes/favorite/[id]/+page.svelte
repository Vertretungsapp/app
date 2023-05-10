<script lang="ts">
	import { onMount } from 'svelte';
	import { getFavorite } from '$lib/favorites.js';

	export let data: { id: number };

	onMount(() => {
		const favorite = getFavorite(data.id);
		if (!favorite) return (location.href = '/');
		location.href = `/plan/${favorite.short}`;
	});
</script>
