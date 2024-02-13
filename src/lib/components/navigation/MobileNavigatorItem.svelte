<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { navigationStore } from '$lib/stores/navigationStore';
	import type { Icon } from 'lucide-svelte';
	import type { ComponentType } from 'svelte';

	export let icon: ComponentType<Icon>;
	export let href: string;
	export let text: string;
	export let id: number;
</script>

<a
	class={twMerge(
		// TODO: add touch effect (active:bg-secondary-900)
		'flex flex-wrap items-center justify-center rounded-full p-2 text-xs transition-colors duration-75 ease-out',
		$navigationStore.activeId === id && 'text-primary-500'
	)}
	{href}
	on:click={() => ($navigationStore.activeId = id)}
>
	<svelte:component this={icon} />
	<span class="w-full text-center text-text">{text}</span>
</a>
