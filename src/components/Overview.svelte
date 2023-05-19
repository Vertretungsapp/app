<script lang="ts">
	import type { Plan } from '$lib/api/server/class/Plan';

	export let plans: Plan[] = [];
	export let overwriteHref: string;

	function generateOverwriteHref(short: string) {
		return overwriteHref.replace('{short}', short);
	}
</script>

<div class="grid grid-cols-3 items-center gap-4 p-4 h-full overflow-y-scroll">
	{#each plans as plan}
		<a
			class="w-full p-4 dynborder rounded-[7px] text-center"
			href={!overwriteHref ? `/plan/${plan.short}` : generateOverwriteHref(plan.short)}
			>{plan.short}</a
		>
	{/each}
</div>
