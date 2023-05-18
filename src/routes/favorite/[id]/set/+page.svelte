<script lang="ts">
	import type { PlanType } from '$lib/api/server/class/Plan';
	import OverviewLinkButton from '../../../../components/Home/OverviewLinkButton.svelte';
	import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
	import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
	import type { PageData } from './+page';
	import Overview from '../../../../components/Overview.svelte';
	import { faHouse } from '@fortawesome/free-solid-svg-icons';
	import { Icon } from 'svelte-awesome';
	import { onMount } from 'svelte';
	import BackMenu from '../../../../components/BackMenu.svelte';

	let type: PlanType;

	export let data: PageData;

	let overwriteHref = '';

	onMount(() => {
		overwriteHref = `/favorite/${data.id}/set/{short}`;
	});
</script>

<BackMenu />

<div class="flex flex-col gap-4 h-screen py-20 max-h-screen w-full">
	<h1 class="text-center">Favoritenauswahl</h1>
	{#if type === 'class'}
		<Overview plans={data.classes} {overwriteHref} />
	{:else if type === 'room'}
		<Overview plans={data.rooms} {overwriteHref} />
	{:else}
		<div class="h-full w-full flex items-center justify-center overflow-y-scroll">
			<div class="w-[80%] grid grid-cols-3 gap-4">
				<button on:click={() => (type = 'class')}>
					<OverviewLinkButton text="Klassen" href="#" icon={faPeopleGroup} />
				</button>
				<div />
				<button on:click={() => (type = 'room')}>
					<OverviewLinkButton text="Räume" href="#" icon={faDoorOpen} />
				</button>
			</div>
		</div>
	{/if}
</div>
