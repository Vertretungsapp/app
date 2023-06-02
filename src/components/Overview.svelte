<script lang="ts">
	import type { Plan } from '$lib/api/stundenplan42/class/Plan';

	export let plans: Plan[] = [];
	export let overwriteHref: string;

	function generateOverwriteHref(short: string) {
		return overwriteHref.replace('{short}', short);
	}
</script>

<div class="grid h-full grid-cols-3 items-center gap-4 overflow-y-scroll p-4">
	{#each plans as plan}
		<a
			class="dynborder w-full rounded-[7px] p-4 text-center"
			href={!overwriteHref ? `/plan?short=${plan.short}` : generateOverwriteHref(plan.short)}
			>{plan.short}</a
		>
	{/each}
</div>
