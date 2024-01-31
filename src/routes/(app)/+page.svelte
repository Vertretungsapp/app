<script lang="ts">
	import CredentialsLink from '$lib/components/settings/CredentialsLink.svelte';
	import Icon from '$lib/components/common/Icon.svelte';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
	import { onMount } from 'svelte';
	import { navigationStore } from '$lib/stores/navigationStore';
	import type { PageData } from './$types';
	import FavoritesDisplay from '$lib/components/favorites/FavoritesDisplay.svelte';
	import NextLessonWidget from '$lib/components/favorites/NextLessonWidget.svelte';

	export let data: PageData;

	const time = new Date();
	let greeting = 'Guten Nachmittag ☀️';

	if (time.getHours() < 12) {
		greeting = 'Guten Morgen ☕️';
	} else if (time.getHours() < 13) {
		greeting = 'Genieße dein Mittagessen 🍔';
	} else if (time.getHours() > 17) {
		greeting = 'Guten Abend 🌙';
	} else if (time.getHours() > 21) {
		greeting = 'Schlaf gut 🌕';
	}

	onMount(() => {
		$navigationStore.activeId = 0;
	});
</script>

<div class="flex justify-between">
	<h1 class="text-center">Vertretungsapp<span class="text-primary">.</span></h1>
	<CredentialsLink />
</div>

<p>{greeting}</p>

<div class="py-4"></div>

{#if data.infos.length > 0}
	<h3>Informationen</h3>
	<div class="max-h-[40%] overflow-y-auto">
		{#each data.infos as info}
			<div class="mb-2 rounded-lg bg-secondary-950 p-4">
				<p class="text-xs font-bold">{info.date.toLocaleDateString()}</p>
				<p>{info.info}</p>
			</div>
		{/each}
	</div>

	<div class="py-4"></div>
{/if}

<!-- This is just prototyping for design -->

<NextLessonWidget primary={data.primaryFavorite} favorites={data.favorites} />

<div class="py-4"></div>

<h3>Deine Favoriten</h3>
<FavoritesDisplay favorites={data.favorites} />

<div class="fixed bottom-20 left-0 flex w-full justify-center">
	<a class="rounded-full bg-primary p-3" href="/">
		<Icon icon={faMagnifyingGlass} scale={1} />
	</a>
</div>
