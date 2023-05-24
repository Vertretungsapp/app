<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import type { IconData } from 'svelte-awesome/components/Icon.svelte';

	export let icon: IconData;
	export let onClick: () => void = () => null;

	function handleClick() {
		onClick();
	}
</script>

<button
	class="dynborder flex aspect-square cursor-pointer items-center justify-center rounded-[7px] p-[0.35rem]"
	on:click={handleClick}
>
	<Icon data={icon} scale="1.5" />
</button>
