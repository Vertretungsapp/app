<script>
	import { page } from '$app/stores';
	import Icon from '../common/Icon.svelte';
	import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons/faCircleArrowLeft';
</script>

<div class="flex w-full items-center justify-between">
	<a href={$page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/'))}>
		<Icon icon={faCircleArrowLeft} scale={1.7} />
	</a>
</div>
