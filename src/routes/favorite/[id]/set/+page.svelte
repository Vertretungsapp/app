<script lang="ts">
	import type { Plan, PlanType } from '$lib/api/server/class/Plan';
	import OverviewLinkButton from '../../../../components/Home/OverviewLinkButton.svelte';
	import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons/faPeopleGroup';
	import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';
	import type { PageData } from './+page';
	import Overview from '../../../../components/Overview.svelte';
	import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
	import { Icon } from 'svelte-awesome';
	import { onMount } from 'svelte';

	let type: PlanType;
	let short: string;

	export let data: PageData;

	let overwriteHref = '';

	onMount(() => {
		overwriteHref = `/favorite/${data.id}/set/{short}`;
	});
</script>

<div class="flex flex-col gap-4 h-screen max-h-screen w-max m-auto">
	<h1 class="text-center mt-20">Favoritenauswahl</h1>
	<div class="h-full flex items-center justify-center overflow-y-scroll">
		{#if !type}
			<div class="w-full grid grid-cols-3 gap-4">
				<button on:click={() => (type = 'class')}>
					<OverviewLinkButton text="Klassen" href="#" icon={faPeopleGroup} />
				</button>
				<div />
				<button on:click={() => (type = 'room')}>
					<OverviewLinkButton text="Räume" href="#" icon={faDoorOpen} />
				</button>
			</div>
		{:else if type === 'class'}
			<Overview plans={data.classes} {overwriteHref} />
		{:else if type === 'room'}
			<Overview plans={data.rooms} {overwriteHref} />
		{/if}
	</div>

	<div class="w-full h-20 px-8 pb-4 bg-background flex justify-center items-center">
		<a class="cursor-pointer" href="/">
			<Icon data={faHome} scale="2" />
		</a>
	</div>
</div>
