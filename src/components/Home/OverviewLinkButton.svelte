<script lang="ts">
	import type { IconData } from 'svelte-awesome/components/Icon.svelte';
	import { Icon } from 'svelte-awesome';

	export let text: string;
	export let icon: IconData;
	export let href: string;
</script>

<div>
	<a
		class="dynborder m-auto flex aspect-square max-w-[10rem] flex-col items-center justify-center rounded-[13px] p-2"
		{href}
	>
		<Icon data={icon} scale="4" />
	</a>
	<p class="text-md text-center">{text}</p>
</div>
