<script lang="ts">
	import CredentialsLink from '$lib/components/settings/CredentialsLink.svelte';
	import Icon from '$lib/components/common/Icon.svelte';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
	import { onMount } from 'svelte';
	import { navigationStore } from '$lib/stores/navigationStore';
	import type { PageData } from './$types';
	import FavoritesDisplay from '$lib/components/favorites/FavoritesDisplay.svelte';
	import NextLessonWidget from '$lib/components/favorites/NextLessonWidget.svelte';
	import { twMerge } from 'tailwind-merge';

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

	let searchButtonSticky = false;

	const infosAvailable = data.infos.find((info) => info.infos.length > 0);

	onMount(() => {
		$navigationStore.activeId = 0;

		const mainFrame = document.getElementById('main-frame');
		if (!mainFrame) return;
		const mustSticky = () => mainFrame.clientHeight < mainFrame.scrollHeight;

		searchButtonSticky = mustSticky();
		window.onresize = () => {
			searchButtonSticky = mustSticky();
		};
	});
</script>

<div class="flex justify-between">
	<h1 class="text-center">Vertretungsapp<span class="text-primary-500">.</span></h1>
	<div class="flex gap-2">
		<CredentialsLink />
	</div>
</div>

<p>{greeting}</p>

<div class="py-5"></div>

{#if infosAvailable}
	<h3>Informationen</h3>
	<div class="max-h-[25%] overflow-y-auto">
		{#each data.infos as info}
			{#if info.infos.length > 0}
				<div class="bg-display mb-2 rounded-lg p-4">
					<p class="text-sm font-bold">{info.date.toLocaleDateString()}</p>
					<!-- eslint-disable-next-line svelte/no-at-html-tags	-->
					<p class="">{@html info.infos.join('<br>')}</p>
				</div>
			{/if}
		{/each}
	</div>

	<div class="py-5"></div>
{/if}

<NextLessonWidget primary={data.primaryFavorite} favorites={data.favorites} />

<div class="py-5"></div>

<h3>Deine Favoriten</h3>
<FavoritesDisplay favorites={data.favorites} />

<div
	class={twMerge(
		'pointer-events-none bottom-2 left-0 flex w-full justify-center',
		searchButtonSticky ? 'sticky' : 'absolute'
	)}
>
	<a
		class="bg-clickable pointer-events-auto rounded-full border-4 border-background p-3"
		href="/search"
	>
		<Icon icon={faMagnifyingGlass} scale={1} />
	</a>
</div>
