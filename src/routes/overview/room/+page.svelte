<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchPlan } from '$lib/api/fetch';
	import { Icon } from 'svelte-awesome';
	import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
	import type Room from "$lib/api/server/class/Room";

	let rooms: Room[] = [];

	onMount(async () => {
		await fetchPlan()
			.then((p) => (rooms = p.rooms))
			.catch(() => {
				window.location.href = '/';
			});
	});
</script>

<div class="flex flex-col gap-4 h-screen max-h-screen">
	<h1 class="text-center mt-20"><span class="text-accent">Raum</span>-Übersicht</h1>
	<div class="grid grid-cols-3 items-center gap-4 p-4 h-full overflow-y-scroll">
		{#each rooms as room}
			<a
				class="w-full p-4 border-[3px] border-accent rounded-[7px] text-center"
				href={`/plan/${room.short}`}>{room.short}</a
			>
		{/each}
	</div>
	<div class="w-full h-20 px-8 pb-4 bg-background flex justify-center items-center">
		<a class="cursor-pointer" href="/">
			<Icon data={faHome} scale="2" />
		</a>
	</div>
</div>