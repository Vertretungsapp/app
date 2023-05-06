<script lang="ts">
	import type PlannedLesson from '$lib/api/server/class/PlannedLesson';
	import PlanItem from './PlanItem.svelte';
	import { fetchPlan } from '$lib/api/fetch';
	import { onMount } from 'svelte';
	import PlanSwitchArrow from './PlanSwitchArrow.svelte';
	import type Plan from '$lib/api/server/class/Plan';
	import { date } from './stores';

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

	async function fetchData(d?: Date) {
		try {
			const plan = await fetchPlan(d);

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

	onMount(async () => {
		await fetchData(new Date(initDate));
	});

	date.subscribe(async (d) => {
		await fetchData(d);
		console.log(d);
	});
</script>

<div class="flex justify-between items-center px-8 py-4">
	<PlanSwitchArrow />
	<p>{new Date(data.date).toLocaleDateString()}</p>
	<PlanSwitchArrow turned />
</div>

<div class="flex flex-col gap-2 w-[90%] m-auto h-[70vh] overflow-y-auto">
	{#if data.lessons.length === 0}
		<p class="text-center text-gray-500">Kein Plan verfügbar</p>
	{/if}

	{#each data.lessons as lesson}
		<PlanItem {lesson} />
	{/each}
</div>
