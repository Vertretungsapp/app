<script lang="ts">
	import type { IconData } from "svelte-awesome/components/Icon.svelte";
	import { Icon } from "svelte-awesome";

	export let text: string;
	export let icon: IconData;
	export let href: string;
</script>

<div>
	<a
		class="flex flex-col items-center justify-center max-w-[10rem] m-auto p-2 border-[3px] border-accent rounded-[13px] aspect-square"
		{href}
	>
		<Icon data={icon} scale="4" />
	</a>
	<p class="text-md text-center">{text}</p>
</div>
