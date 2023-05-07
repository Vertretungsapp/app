<script lang="ts">
	import type PlannedLesson from '$lib/api/server/class/PlannedLesson';
	import { fetchPlan } from '$lib/api/fetch';
	import { onMount } from 'svelte';
	import type Plan from '$lib/api/server/class/Plan';
	import { Icon } from 'svelte-awesome';
	import { faRefresh } from '@fortawesome/free-solid-svg-icons/faRefresh';
	import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';
	import { date } from '../../../../components/Plan/stores';
	import PlanSwitchArrow from '../../../../components/Plan/PlanSwitchArrow.svelte';
	import PlanItem from '../../../../components/Plan/PlanItem.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let planData: {
		plan: Plan;
		lessons: PlannedLesson[];
		date: Date;
	} = {
		plan: {} as Plan,
		lessons: [],
		date: new Date()
	};

	async function fetchData(d?: Date, force?: boolean) {
		try {
			const plan = await fetchPlan(d ? new Date(d) : undefined, force);

			let klassPlan = plan.classes.find((c) => c.short === data.klass);
			if (!klassPlan) return;

			planData = {
				plan,
				lessons: klassPlan.scheduledLessons,
				date: new Date(plan.date || Date.now())
			};
		} catch (e) {
			return (planData = {
				plan: {} as Plan,
				lessons: [],
				date: new Date(d || Date.now())
			});
		}
	}

	function forceReload() {
		fetchData($date, true);
	}

	onMount(async () => {
		await fetchData(data.date).then(() => {
			$date = planData.date;
			date.subscribe(async (d) => {
				await fetchData(d);
			});
		});
	});
</script>

<div class="flex flex-col gap-4 h-screen max-h-screen">
	<h1 class="text-center mt-20">Klasse <span class="text-accent">{data.klass}</span></h1>
	<div class="flex justify-between items-center px-8">
		<PlanSwitchArrow />
		<p>{new Date($date).toLocaleDateString()}</p>
		<PlanSwitchArrow turned />
	</div>

	<div class="flex flex-col gap-2 w-[90%] h-full m-auto overflow-y-scroll">
		{#if planData.lessons.length === 0}
			<p class="text-center text-gray-500">Kein Plan verfügbar</p>
		{/if}

		{#each planData.lessons as lesson}
			<PlanItem {lesson} />
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
