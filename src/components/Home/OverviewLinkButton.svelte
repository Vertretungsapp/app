<script lang="ts">
	import type {IconDefinition} from "@fortawesome/fontawesome-svg-core";
	import Icon from "../Icon.svelte";

	export let text: string;
	export let icon: IconDefinition;
	export let href: string;
</script>

<div>
	<a
		class="dynborder m-auto flex aspect-square max-w-[10rem] flex-col items-center justify-center rounded-[13px] p-2"
		{href}
	>
		<Icon icon={icon} size="3x" />
	</a>
	<p class="text-md text-center">{text}</p>
</div>
