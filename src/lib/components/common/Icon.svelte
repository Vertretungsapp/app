<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import Icon from 'svelte-awesome';
	import { twMerge } from 'tailwind-merge';

	export let icon: IconDefinition;

	export let scale: number = 1;
	export let flip: 'horizontal' | 'vertical' | undefined = undefined;
	export let label: string | undefined = undefined;

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
	<Icon data={icon} {scale} {flip} {label} class={twMerge(iconClass)} />
</a>
