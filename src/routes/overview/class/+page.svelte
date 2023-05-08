<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchPlan } from '$lib/api/fetch';
	import type Class from '$lib/api/server/class/Class';
	import { Icon } from 'svelte-awesome';
	import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';

	let classes: Class[] = [];

	onMount(async () => {
		await fetchPlan()
			.then((p) => (classes = p.classes))
			.catch(() => {
				window.location.href = '/';
			});
	});
</script>

<div class="flex flex-col gap-4 h-screen max-h-screen">
	<h1 class="text-center mt-20"><span class="text-accent">Klassen</span>-Übersicht</h1>
	<div class="grid grid-cols-3 items-center gap-4 p-4 h-full overflow-y-scroll">
		{#each classes as klass}
			<a
				class="w-full p-4 border-[3px] border-accent rounded-[7px] text-center"
				href={`/plan/${klass.short}`}>{klass.short}</a
			>
		{/each}
	</div>
	<div class="w-full h-20 px-8 pb-4 bg-background flex justify-center items-center">
		<a class="cursor-pointer" href="/">
			<Icon data={faHome} scale="2" />
		</a>
	</div>
</div>
