<script lang="ts">
	import { stringToHexadecimal } from '$lib/common/stringToHexadecimal';
	import type { PageData } from './$types';
	import { PlanType } from '$lib/api/planTypes';

	export let data: PageData;
</script>

<div class="grid grid-cols-3 gap-2">
	{#each data.names as name}
		<a
			class="bg-clickable flex items-center justify-center rounded-lg p-4 text-center"
			href={`/plan/${data.type}/${stringToHexadecimal(name)}`}>{name}</a
		>
	{/each}

	{#if data.error}
		<p class="text-disabled col-span-3 text-center">
			Es konnte kein Plan abgerufen werden, bitte überprüfe deine Zugangsdaten!
		</p>
	{/if}
</div>

{#if data.type === PlanType.TEACHER || data.type === PlanType.ROOM}
	<p class="text-disabled mt-4 text-center text-sm leading-tight">
		Hinweis: Die Daten werden anhand der gespeicherten Pläne erstellt, und können daher
		unvollständig sein.
	</p>
{/if}
