<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import { faHouse } from '@fortawesome/free-solid-svg-icons';
	import type { Plan } from '$lib/api/server/class/Plan';
	import { PlanType } from '$lib/api/server/class/Plan';
	import Overview from '../../../components/Overview.svelte';
	import BackMenu from '../../../components/BackMenu.svelte';

	export let data: { plans: Plan[]; planType: PlanType };

	let overviewHeaderText: string;
	switch (data.planType) {
		case PlanType.CLASS:
			overviewHeaderText = 'Klassen';
			break;
		case PlanType.ROOM:
			overviewHeaderText = 'Raum';
			break;
		default:
			overviewHeaderText = 'Unbekannt';
			break;
	}
</script>

<BackMenu />

<div class="flex flex-col gap-4 py-20 h-screen max-h-screen">
	<h1 class="text-center"><span class="text-accent">{overviewHeaderText}</span>-Übersicht</h1>
	<Overview plans={data.plans} />
</div>
