<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '../common/Icon.svelte';
	import ArrowLeftCircle from 'lucide-svelte/icons/arrow-left-circle';

	export let scale = 2;
</script>

<Icon
	icon={ArrowLeftCircle}
	href={$page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')) || '/'}
	{scale}
/>
