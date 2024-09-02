<script lang="ts">
	import { format } from 'date-fns/format';
	import { de } from 'date-fns/locale';
	import PlanNavigation from './PlanNavigation.svelte';
	import { planStore } from '$lib/stores/planStore';
	import { page } from '$app/stores';
</script>

<div class="flex w-full flex-col items-center justify-center gap-4 pb-2">
	{#if $planStore.lastUpdated}
		<p class="text-disabled text-xs">
			Letzte Aktualisierung: {new Date($planStore.lastUpdated).toLocaleString()}
		</p>
	{:else}
		<p class="text-disabled text-xs">Kein Plan verfügbar</p>
	{/if}

	<PlanNavigation on:next on:previous>
		<a href={$page.url.pathname} data-sveltekit-replacestate>
			<h2 class="text-xl font-bold">
				<span class="text-primary-500">
					{format($planStore.date, 'EEEE', {
						locale: de
					})}</span
				>
				<span>{format($planStore.date, 'dd.MM.yyyy')}</span>
			</h2>
		</a>
	</PlanNavigation>
</div>
