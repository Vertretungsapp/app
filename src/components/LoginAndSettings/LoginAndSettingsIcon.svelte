<script lang="ts">
	import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
	import Icon from "../Icon.svelte";

	export let icon: IconDefinition;
	export let onClick: () => void = () => null;

	function handleClick() {
		onClick();
	}
</script>

<button
	class="dynborder aspect-square cursor-pointer rounded-[7px] p-[0.35rem] flex items-center justify-center"
	on:click={handleClick}
>
	<Icon icon={icon} size="1.2x" />
</button>
