<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import Icon from '../common/Icon.svelte';
	import { twMerge } from 'tailwind-merge';
	import { navigationStore } from '$lib/stores/navigationStore';
	import { settingsStore } from '$lib/stores/settingsStore.js';

	export let icon: IconDefinition;
	export let href: string;
	export let text: string;
	export let id: number;

	let disabled = false;
	$: disabled = $settingsStore.credentials === null;

	function onClick() {
		if (disabled) return;
		$navigationStore.activeId = id;
	}
</script>

<a
	class={twMerge(
		// TODO: add touch effect (active:bg-secondary-900)
		'flex flex-wrap items-center justify-center rounded-full p-2 text-xs transition-colors duration-75 ease-out',
		$navigationStore.activeId === id && 'text-primary-500'
	)}
	href={!disabled ? href : "#"}
	on:click={onClick}
>
	<Icon {icon} label={text} scale={1.5} square />
	<span class="w-full text-center text-text">{text}</span>
</a>
