<script lang="ts">
	import type { Icon } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType<Icon>;

	export let scale: number = 1;
	export let flip: 'horizontal' | 'vertical' | undefined = undefined;
	export let fill: boolean = false;

	export let href: string | undefined = undefined;

	export let anchorClass: string | undefined = undefined;
	let iconClass: string | undefined = undefined;

	export let square: boolean = false;

	export { iconClass as class };
</script>

<a
	{href}
	class={twMerge(anchorClass, 'flex items-center justify-center', square && 'aspect-square')}
>
	<svelte:component this={icon} size={14 * scale} fill={fill ? "rgba(var(--text))" : "transparent"} class={twMerge(iconClass, flip === "horizontal" && "-scale-x-100",
		flip === "vertical" && "-scale-y-100"
	)} />
</a>
