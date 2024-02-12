<script>
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../common/Icon.svelte';
	import { faRefresh } from '@fortawesome/free-solid-svg-icons/faRefresh';
	import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
	import { planStore } from '$lib/stores/planStore';
	import BackButton from '$lib/components/common/BackButton.svelte';
	import { goto } from '$app/navigation';
	import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons/faStar';
	import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
	import { addFavorite, deleteFavorite } from '$lib/favorites/favorites';

	const forceReloadUrl = new URL($page.url);
	forceReloadUrl.searchParams.set('forceReload', 'true');

	export let filterActive = false;
	export let isFavorite = false;

	function refreshPage() {
		goto(forceReloadUrl.toString(), {
			invalidateAll: true
		});
	}

	function toggleFavorite() {
		if (!isFavorite) {
			addFavorite($page.data.credentials.schoolnumber, $page.data.short, $page.data.type);
			isFavorite = true;
		} else {
			deleteFavorite($page.data.credentials.schoolnumber, $page.data.short, $page.data.type);
			isFavorite = false;
		}
	}
</script>

<div class="flex w-full items-center justify-between">
	<BackButton />

	<div class="flex gap-2">
		<button on:click={toggleFavorite}>
			<Icon icon={isFavorite ? faStar : faStarRegular} scale={1.7} />
		</button>

		<a class="relative" href={$page.url.pathname + '/filter'}>
			<Icon icon={faFilter} scale={1.7} />
			{#if filterActive}
				<span class="absolute -right-1 -top-1 flex h-2.5 w-2.5">
					<span
						class="absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75 motion-safe:animate-ping"
					></span>
					<span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-500"></span>
				</span>
			{/if}
		</a>

		<button on:click={refreshPage}>
			<Icon
				icon={faRefresh}
				scale={1.7}
				class={twMerge($planStore.isRefreshing ? 'animate-spin' : 'rotate-0')}
			/>
		</button>
	</div>
</div>
