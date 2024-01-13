<script lang="ts">
	import { stringToHexadecimal } from '$lib/common/stringToHexadecimal';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="grid grid-cols-3 gap-2">
	{#each data.names as name}
		<a
			class="flex items-center justify-center rounded-lg bg-secondary-950 p-4 text-center"
			href={`/plan/${data.type}/${stringToHexadecimal(name)}`}>{name}</a
		>
	{/each}
</div>
