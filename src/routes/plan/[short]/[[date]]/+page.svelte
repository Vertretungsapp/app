<script lang="ts">
	import { onMount } from 'svelte';
	import { date } from '../../../../components/Plan/stores';
	import PlanSwitchArrow from '../../../../components/Plan/PlanSwitchArrow.svelte';
	import PlanItem from '../../../../components/Plan/PlanItem.svelte';
	import BackMenu from '../../../../components/BackMenu.svelte';
	import { faFilter, faInfoCircle, faRefresh } from '@fortawesome/free-solid-svg-icons';
	import FilterDialog from '../../../../components/Plan/FilterDialog.svelte';
	import type { Filter } from '$lib/filter';
	import { isLessonEnabled } from '$lib/filter';
	import type { PageData, PlanData } from './+page';
	import { _fetchPlanData } from './+page';
	import { de } from 'date-fns/locale';
	import { format } from 'date-fns';
	import Icon from "../../../../components/Icon.svelte";

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
			planData.schedule = [];
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
		$date = planData.date;
		date.subscribe(() => {
			refreshData(false);
		});
	});
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

	<div class="flex h-screen max-h-screen flex-col gap-4 pb-10 pt-20">
		<h1 class="text-center">{planData.type} <span class="text-accent">{data.short}</span></h1>
		<div class="flex items-center justify-between px-8">
			<PlanSwitchArrow holidays={planData.schoolPlan.holidays} />
			<div class="text-center leading-tight cursor-pointer" on:keypress={() => undefined} on:click={resetDate}>
				<p class="text-sm">{format(new Date($date), 'EEEE', { locale: de })}</p>
				<p class="text-md">
					{new Date($date).toLocaleDateString()}
				</p>
			</div>
			<PlanSwitchArrow holidays={planData.schoolPlan.holidays} turned />
		</div>

		<p class="w-full text-center text-grayedOut">
			{#if isRefreshing}
				Lade...
			{:else}
				{planData.schoolPlan.created ? new Date(planData.schoolPlan.created).toLocaleString() : ''}
			{/if}
		</p>

		<div class="m-auto flex h-full w-[90%] flex-col gap-2 overflow-y-scroll">
			{#if planData.schoolPlan.info && planData.schoolPlan.info.length > 0}
				<div class="grid w-full grid-cols-5 justify-between gap-4 py-4">
					<Icon icon={faInfoCircle} size="lg" />
					{#each planData.schoolPlan.info as info}
						<p class="col-span-4 text-right text-sm leading-tight">{info}</p>
					{/each}
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
