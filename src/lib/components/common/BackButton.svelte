<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '../common/Icon.svelte';
	import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons/faCircleArrowLeft';

	export let scale = 1.7;
	export let href: string | undefined = undefined;
</script>

<Icon
	icon={faCircleArrowLeft}
	href={href || $page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')) || '/'}
	{scale}
/>
