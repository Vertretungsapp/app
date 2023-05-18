<script lang="ts">
	import type PlannedLesson from '$lib/api/server/class/PlannedLesson';
	import { fetchPlan } from '$lib/api/fetch';
	import { onMount } from 'svelte';
	import type SchoolPlan from '$lib/api/server/class/SchoolPlan';
	import { Icon } from 'svelte-awesome';
	import { faRefresh } from '@fortawesome/free-solid-svg-icons';
	import { date } from '../../../../components/Plan/stores';
	import PlanSwitchArrow from '../../../../components/Plan/PlanSwitchArrow.svelte';
	import PlanItem from '../../../../components/Plan/PlanItem.svelte';
	import type { Plan } from '$lib/api/server/class/Plan';
	import { PlanType } from '$lib/api/server/class/Plan';
	import BackMenu from '../../../../components/BackMenu.svelte';
	import {faInfoCircle} from "@fortawesome/free-solid-svg-icons/faInfoCircle";

	export let data: { short: string; date: string | undefined };

	type PlanData = {
		plan: SchoolPlan;
		schedule: PlannedLesson[];
		date: Date;
		type: PlanType;
	};

	const templatePlanData: PlanData = {
		plan: {
			classes: [],
			rooms: [],
			holidays: [],
			created: undefined,
			date: undefined
		} as SchoolPlan,
		schedule: [],
		date: new Date(),
		type: PlanType.CLASS
	};

	let planData: PlanData = templatePlanData;
	let isRefreshing = false;

	function getPlanFromSchoolPlan(
		short: string,
		schoolPlan: SchoolPlan
	): { plan: Plan; type: PlanType } | null {
		const klass = schoolPlan.classes.find((c) => c.short === short);
		if (klass)
			return {
				plan: klass,
				type: PlanType.CLASS
			};

		const room = schoolPlan.rooms.find((r) => r.short === short);
		if (room)
			return {
				plan: room,
				type: PlanType.ROOM
			};

		return null;
	}

	async function fetchData(d?: Date, force?: boolean) {
		isRefreshing = true;
		try {
			const schoolPlan = await fetchPlan(d ? new Date(d) : undefined, force);
			let plan = getPlanFromSchoolPlan(data.short, schoolPlan);
			if (!plan) return (planData = templatePlanData);

			planData = {
				plan: schoolPlan,
				schedule: plan.plan.schedule,
				date: new Date(schoolPlan.date || Date.now()),
				type: plan.type
			};
		} catch (e) {
			planData = templatePlanData;
		}
		isRefreshing = false;
	}

	function forceReload() {
		fetchData($date, true);
	}

	async function resetDate() {
		await fetchData(data.date ? new Date(data.date) : undefined).then(() => {
			$date = planData.date;
			date.subscribe(async (d) => {
				await fetchData(d);
			});
		});
	}

	onMount(() => resetDate());
</script>

<BackMenu />

<div class="fixed top-0 right-0 h-20 w-20 flex items-center justify-center">
	<button class="cursor-pointer" on:click={forceReload}>
		<Icon data={faRefresh} scale="2" />
	</button>
</div>

<div class="flex flex-col gap-4 pt-20 pb-10 h-screen max-h-screen">
	<h1 class="text-center">{planData.type} <span class="text-accent">{data.short}</span></h1>
	<div class="flex justify-between items-center px-8">
		<PlanSwitchArrow holidays={planData.plan.holidays} />
		<p on:keypress={() => {}} on:click={resetDate} class="cursor-pointer">
			{new Date($date).toLocaleDateString()}
		</p>
		<PlanSwitchArrow holidays={planData.plan.holidays} turned />
	</div>

	<p class="text-grayedOut w-full text-center">
		{#if isRefreshing}
			Lade...
		{:else}
			{planData.plan.created ? new Date(planData.plan.created).toLocaleString() : ''}
		{/if}
	</p>

	<div class="flex flex-col gap-2 w-[90%] h-full m-auto overflow-y-scroll">
		{#if planData.plan.info}
			<div class="grid grid-cols-5 justify-between gap-4 w-full py-4">
				<Icon data={faInfoCircle} scale="2" class="w-5 h-5" />
				{#each planData.plan.info as info}
					<p class="text-sm text-right col-span-4 leading-tight">{info}</p>
				{/each}
			</div>
		{/if}

		{#if planData.schedule.length === 0}
			<p class="text-center text-gray-500">Kein Plan verfügbar</p>
		{/if}

		{#each planData.schedule as lesson}
			<PlanItem {lesson} type={planData.type} />
		{/each}
	</div>
</div>
