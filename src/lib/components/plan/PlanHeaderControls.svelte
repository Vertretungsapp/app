<script>
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../common/Icon.svelte';
	import { faRefresh } from '@fortawesome/free-solid-svg-icons/faRefresh';
	import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter';
	import { planStore } from '$lib/stores/planStore';
	import BackButton from '$lib/components/common/BackButton.svelte';

	const forceReloadUrl = new URL($page.url);
	forceReloadUrl.searchParams.set('forceReload', 'true');
</script>

<div class="flex w-full items-center justify-between">
	<BackButton />

	<div class="flex gap-2">
		<a href={$page.url.pathname + "/filter"}>
			<Icon icon={faFilter} scale={1.7} />
		</a>

		<a href={forceReloadUrl.toString()}>
			<Icon
				icon={faRefresh}
				scale={1.7}
				class={twMerge($planStore.isRefreshing ? 'animate-spin' : 'rotate-0')}
			/>
		</a>
	</div>
</div>
