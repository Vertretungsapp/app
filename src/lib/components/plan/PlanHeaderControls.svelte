<script>
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';
	import Icon from '../common/Icon.svelte';
	import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons/faCircleArrowLeft';
	import { faRefresh } from '@fortawesome/free-solid-svg-icons/faRefresh';
	import { planStore } from '$lib/stores/planStore';
	import { goto } from '$app/navigation';

	const forceReloadUrl = new URL($page.url);
	forceReloadUrl.searchParams.set('forceReload', 'true');

	function forceReload() {
		$planStore.isRefreshing = true;
		goto(forceReloadUrl.toString())
	}
</script>

<div class="flex w-full items-center justify-between">
	<a href={$page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/'))}>
		<Icon icon={faCircleArrowLeft} scale={1.7} />
	</a>

	<div>
		<button on:click={forceReload}>
			<Icon
				icon={faRefresh}
				scale={1.7}
				class={twMerge($planStore.isRefreshing ? 'animate-spin' : 'rotate-0')}
			/>
		</button>
	</div>
</div>
