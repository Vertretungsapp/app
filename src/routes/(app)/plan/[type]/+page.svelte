<script lang="ts">
	import { stringToHexadecimal } from '$lib/common/stringToHexadecimal';
	import type { PageData } from './$types';
	import { PlanType } from '$lib/api/planTypes';

	export let data: PageData;
</script>

<div class="grid grid-cols-3 gap-2">
	{#each data.names as name}
		<a
			class="flex items-center justify-center rounded-lg bg-secondary-950 p-4 text-center active:bg-accent"
			href={`/plan/${data.type}/${stringToHexadecimal(name)}`}>{name}</a
		>
	{/each}

	{#if data.error}
		<p class="col-span-3 text-center text-secondary-500">
			Es konnte kein Plan abgerufen werden, bitte überprüfe deine Zugangsdaten!
		</p>
	{/if}
</div>

{#if data.type === PlanType.TEACHER || data.type === PlanType.ROOM}
	<p class="mt-4 text-center text-sm leading-tight text-secondary-500">
		Hinweis: Die Daten werden anhand der gespeicherten Pläne erstellt, und können daher
		unvollständig sein.
	</p>
{/if}
