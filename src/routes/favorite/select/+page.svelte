<script lang="ts">
	import type { PlanType } from '$lib/api/stundenplan42/class/Plan';
	import OverviewLinkButton from '../../../components/Home/OverviewLinkButton.svelte';
	import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
	import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
	import type { PageData } from './+page';
	import Overview from '../../../components/Overview.svelte';
	import { onMount } from 'svelte';
	import BackMenu from '../../../components/BackMenu.svelte';

	let type: PlanType;

	export let data: PageData;

	let overwriteHref = '';

	onMount(() => {
		overwriteHref = `/favorite/set/?id=${data.id}&short={short}`;
	});
</script>

<BackMenu />

<div class="flex h-screen max-h-screen w-full flex-col gap-4 py-20">
	<h1 class="text-center">Favoritenauswahl</h1>
	{#if type === 'class'}
		<Overview plans={data.classes} {overwriteHref} />
	{:else if type === 'room'}
		<Overview plans={data.rooms} {overwriteHref} />
	{:else}
		<div class="flex h-full w-full items-center justify-center overflow-y-scroll">
			<div class="grid w-[80%] grid-cols-3 gap-4">
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
