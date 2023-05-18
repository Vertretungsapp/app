<script lang="ts">
	import type { Plan } from '$lib/api/server/class/Plan';
	import { PlanType } from '$lib/api/server/class/Plan';
	import Overview from '../../../components/Overview.svelte';
	import BackMenu from '../../../components/BackMenu.svelte';

	export let data: { plans: Plan[]; planType: PlanType };
</script>

<BackMenu />

<div class="flex flex-col gap-4 py-20 h-screen max-h-screen">
	<h1 class="text-center"><span class="text-accent">{data.planType}</span>-Übersicht</h1>
	<Overview plans={data.plans} />
</div>
