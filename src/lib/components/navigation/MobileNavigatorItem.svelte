<script lang="ts">
	import type { IconDefinition } from '@fortawesome/fontawesome-common-types';
	import Icon from '../common/Icon.svelte';
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/stores';

	export let icon: IconDefinition;
	export let href: string;
	export let text: string;
</script>

<a
	class={twMerge(
		// TODO: add touch effect (active:bg-secondary-900)
		'flex flex-wrap items-center justify-center rounded-full p-2 text-xs transition-colors duration-75 ease-out ',
		$page.route.id?.split('/')[1] == href.split('/')[1] && 'text-primary'
	)}
	{href}
>
	<Icon {icon} label={text} scale={1.5} square />
	<span class="w-full text-center text-text">{text}</span>
</a>
