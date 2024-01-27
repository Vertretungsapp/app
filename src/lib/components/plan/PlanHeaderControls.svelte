<script>
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../common/Icon.svelte';
	import { faRefresh } from '@fortawesome/free-solid-svg-icons/faRefresh';
	import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
	import { planStore } from '$lib/stores/planStore';
	import BackButton from '$lib/components/common/BackButton.svelte';
	import { goto } from '$app/navigation';

	const forceReloadUrl = new URL($page.url);
	forceReloadUrl.searchParams.set('forceReload', 'true');

	function refreshPage() {
		goto(forceReloadUrl.toString(), {
			invalidateAll: true,
		});
	}

	export let filterActive = false;
</script>

<div class="flex w-full items-center justify-between">
	<BackButton />

	<div class="flex gap-2">
		<a class="relative" href={$page.url.pathname + '/filter'}>
			<Icon icon={faFilter} scale={1.7} />
			{#if filterActive}
				<span class="absolute -right-1 -top-1 flex h-3 w-3">
					<span
						class="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 motion-safe:animate-ping"
					></span>
					<span class="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
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
