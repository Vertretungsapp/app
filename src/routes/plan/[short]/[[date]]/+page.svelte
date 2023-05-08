<script lang="ts">
	import type PlannedLesson from '$lib/api/server/class/PlannedLesson';
	import { fetchPlan } from '$lib/api/fetch';
	import { onMount } from 'svelte';
	import type SchoolPlan from '$lib/api/server/class/SchoolPlan';
	import { Icon } from 'svelte-awesome';
	import { faRefresh } from '@fortawesome/free-solid-svg-icons/faRefresh';
	import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
	import { date } from '../../../../components/Plan/stores';
	import PlanSwitchArrow from '../../../../components/Plan/PlanSwitchArrow.svelte';
	import PlanItem from '../../../../components/Plan/PlanItem.svelte';
	import type { Plan } from '$lib/api/server/class/Plan';
	import { PlanType } from '$lib/api/server/class/Plan';

	export let data: { short: string; date: string | undefined };

	type PlanData = {
		plan: SchoolPlan;
		schedule: PlannedLesson[];
		date: Date;
		type: PlanType;
	};

	const templatePlanData: PlanData = {
		plan: {} as SchoolPlan,
		schedule: [],
		date: new Date(),
		type: PlanType.CLASS
	};

	let planData: PlanData = templatePlanData;

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

<div class="flex flex-col gap-4 h-screen max-h-screen">
	<h1 class="text-center mt-20">Klasse <span class="text-accent">{data.short}</span></h1>
	<div class="flex justify-between items-center px-8">
		<PlanSwitchArrow />
		<p on:keypress={() => {}} on:click={resetDate} class="cursor-pointer">
			{new Date($date).toLocaleDateString()}
		</p>
		<PlanSwitchArrow turned />
	</div>

	<div class="flex flex-col gap-2 w-[90%] h-full m-auto overflow-y-scroll">
		{#if planData.schedule.length === 0}
			<p class="text-center text-gray-500">Kein Plan verfügbar</p>
		{/if}

		{#each planData.schedule as lesson}
			<PlanItem {lesson} type={planData.type} />
		{/each}
	</div>

	<div class="w-full h-20 px-8 pb-4 bg-background flex justify-between items-center">
		<div class="cursor-pointer" on:keypress={() => {}} on:click={() => (location.href = '/')}>
			<Icon data={faHome} scale="2" />
		</div>
		<p class="text-grayedOut">
			{planData.plan.created ? new Date(planData.plan.created).toLocaleString() : ''}
		</p>
		<div class="cursor-pointer" on:keypress={() => {}} on:click={forceReload}>
			<Icon data={faRefresh} scale="2" />
		</div>
	</div>
</div>
