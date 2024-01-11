<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import Icon from '../common/Icon.svelte';
	import { twMerge } from 'tailwind-merge';
	import { navigationStore } from '$lib/stores/navigationStore';

	export let icon: IconDefinition;
	export let href: string;
	export let text: string;
	export let id: number;
</script>

<a
	class={twMerge(
		// TODO: add touch effect (active:bg-secondary-900)
		'flex flex-wrap items-center justify-center rounded-full p-2 text-xs transition-colors duration-75 ease-out ',
		$navigationStore.activeId === id && 'text-primary'
	)}
	{href}
	on:click={() => ($navigationStore.activeId = id)}
>
	<Icon {icon} label={text} scale={1.5} square />
	<span class="w-full text-center text-text">{text}</span>
</a>
