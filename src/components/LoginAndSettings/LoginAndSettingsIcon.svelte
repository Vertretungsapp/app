<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
	import Icon from '../Icon.svelte';

	export let icon: IconDefinition;
	export let onClick: () => void = () => null;

	function handleClick() {
		onClick();
	}
</script>

<button
	class="dynborder flex aspect-square cursor-pointer items-center justify-center rounded-[7px] p-[0.35rem]"
	on:click={handleClick}
>
	<Icon {icon} size="1.2x" />
</button>
