<script lang="ts">
	import { onMount } from 'svelte';
	import { getFavorite } from '$lib/favorites.js';
	import type { PageData } from './+page';

	export let data: PageData;

	onMount(() => {
		const favorite = getFavorite(data.schoolnumber, data.id);
		if (!favorite) return (location.href = '/');
		location.href = `/plan?short=${favorite.short}`;
	});
</script>
