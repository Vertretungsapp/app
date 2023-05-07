<script lang="ts">
	import type PlannedLesson from '$lib/api/server/class/PlannedLesson';
	import PlanItem from './PlanItem.svelte';
	import { fetchPlan } from '$lib/api/fetch';
	import { onMount } from 'svelte';
	import PlanSwitchArrow from './PlanSwitchArrow.svelte';
	import type Plan from '$lib/api/server/class/Plan';
	import { date } from './stores';
	import { Icon } from 'svelte-awesome';
	import { faRefresh } from '@fortawesome/free-solid-svg-icons/faRefresh';
	import { faHome } from '@fortawesome/free-solid-svg-icons/faHome';

	export let klass: string;
	export let initDate: Date;

	let data: {
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

			let klassPlan = plan.classes.find((c) => c.short === klass);
			if (!klassPlan) return;

			data = {
				plan,
				lessons: klassPlan.scheduledLessons,
				date: new Date(plan.date || Date.now())
			};
		} catch (e) {
			return (data = {
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
		await fetchData(initDate).then(() => {
			$date = data.date;
			date.subscribe(async (d) => {
				await fetchData(d);
			});
		});
	});
</script>

<div class="flex flex-col gap-4 h-screen max-h-screen">
	<h1 class="text-center mt-20">Klasse <span class="text-accent">{klass}</span></h1>
	<div class="flex justify-between items-center px-8">
		<PlanSwitchArrow />
		<p>{new Date($date).toLocaleDateString()}</p>
		<PlanSwitchArrow turned />
	</div>

	<div class="flex flex-col gap-2 w-[90%] h-full m-auto overflow-y-scroll">
		{#if data.lessons.length === 0}
			<p class="text-center text-gray-500">Kein Plan verfügbar</p>
		{/if}

		{#each data.lessons as lesson}
			<PlanItem {lesson} />
		{/each}
	</div>

	<div class="w-full h-20 px-8 pb-4 bg-background flex justify-between items-center">
		<div class="cursor-pointer" on:keypress={() => {}} on:click={() => (location.href = '/')}>
			<Icon data={faHome} scale="2" />
		</div>
		<p class="text-grayedOut">
			{data.plan.created ? new Date(data.plan.created).toLocaleString() : ''}
		</p>
		<div class="cursor-pointer" on:keypress={() => {}} on:click={forceReload}>
			<Icon data={faRefresh} scale="2" />
		</div>
	</div>
</div>
