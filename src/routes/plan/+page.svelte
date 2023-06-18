<script lang="ts">
	import { onMount } from 'svelte';
	import { faFilter, faInfoCircle, faRefresh } from '@fortawesome/free-solid-svg-icons';
	import type { Filter } from '$lib/filter';
	import { isLessonEnabled } from '$lib/filter';
	import type { PageData, PlanData } from './+page';
	import { _fetchPlanData } from './+page';
	import { de } from 'date-fns/locale';
	import { format } from 'date-fns';
	import { date } from '../../components/Plan/stores';
	import BackMenu from '../../components/BackMenu.svelte';
	import FilterDialog from '../../components/Plan/FilterDialog.svelte';
	import Icon from '../../components/Icon.svelte';
	import PlanSwitchArrow from '../../components/Plan/PlanSwitchArrow.svelte';
	import PlanItem from '../../components/Plan/PlanItem.svelte';
	import { swipe } from 'svelte-gestures';
	import { addDays } from '$lib/day';

	export let data: PageData;

	let planData: PlanData;

	let filter: Filter | undefined;
	let isRefreshing = false;
	let startDate: Date;

	async function refreshData(force: boolean) {
		isRefreshing = true;
		try {
			planData = await _fetchPlanData(data.short, force, $date);
		} catch (e) {
			if (!force) {
				planData.schedule = [];
				planData.schoolPlan.info = [];
				planData.schoolPlan.created = undefined;
			}
		}
		isRefreshing = false;
	}

	async function resetDate() {
		date.set(startDate);
	}

	onMount(() => {
		planData = data.planData;
		startDate = new Date(planData.date);
		filter = data.filter;
		date.subscribe(() => {
			refreshData(false);
		});
	});

	function handleSwipe(e) {
		if (e.detail.direction === 'left') {
			date.set(addDays($date, 1, planData.schoolPlan.holidays));
		} else if (e.detail.direction === 'right') {
			date.set(addDays($date, -1, planData.schoolPlan.holidays));
		}
	}
</script>

<BackMenu />

{#if planData}
	{#if planData.type === 'Klasse'}
		<FilterDialog bind:filter />
	{/if}

	<div class="fixed right-0 top-0 flex h-20 w-20 items-center justify-end gap-4 pr-4">
		{#if planData.type === 'Klasse'}
			<button
				class="cursor-pointer"
				on:click={() => document.querySelector('#filterDialog').showModal()}
			>
				<Icon icon={faFilter} size="2x" />
			</button>
		{/if}

		<button class="cursor-pointer" on:click={() => refreshData(true)}>
			<Icon icon={faRefresh} size="2x" />
		</button>
	</div>

	<div class="flex h-screen max-h-screen flex-col gap-3 pb-10 pt-20">
		<h1 class="text-center">{planData.type} <span class="text-accent">{data.short}</span></h1>

		<div>
			<div class="flex items-center justify-between px-8">
				<PlanSwitchArrow holidays={planData.schoolPlan.holidays} />
				<div
					class="cursor-pointer text-center leading-tight"
					on:keypress={() => undefined}
					on:click={resetDate}
				>
					<p class="text-md">{format(new Date($date), 'EEEE', { locale: de })}</p>
					<p class="text-sm">
						{new Date($date).toLocaleDateString()}
					</p>
				</div>
				<PlanSwitchArrow holidays={planData.schoolPlan.holidays} turned />
			</div>

			<p class="mt-1 w-full text-center text-sm text-grayedOut">
				{#if isRefreshing}
					Lade...
				{:else}
					{planData.schoolPlan.created
						? new Date(planData.schoolPlan.created).toLocaleString()
						: ''}
				{/if}
			</p>
		</div>

		<div
			class="m-auto flex h-full w-[90%] flex-col gap-2 overflow-y-scroll"
			use:swipe={{ timeframe: 300, minSwipeDistance: 60, touchAction: 'pan-y' }}
			on:swipe={handleSwipe}
		>
			{#if planData.schoolPlan.info && planData.schoolPlan.info.length > 0}
				<div class="grid w-full grid-cols-5 justify-between gap-4 py-4">
					<Icon icon={faInfoCircle} size="lg" />
					<div class="col-span-4 text-right">
						{#each planData.schoolPlan.info as info}
							<p class="text-sm leading-tight">{info}</p>
						{/each}
					</div>
				</div>
			{/if}

			{#if planData.schedule.length === 0}
				<p class="text-center text-gray-500">Kein Plan verfügbar</p>
			{/if}

			{#each planData.schedule as lesson}
				{#if filter ? isLessonEnabled(filter, lesson) : true}
					<PlanItem {lesson} type={planData.type} />
				{/if}
			{/each}
		</div>
	</div>
{:else}
	<p class="text-center text-gray-500">Lade...</p>
{/if}
