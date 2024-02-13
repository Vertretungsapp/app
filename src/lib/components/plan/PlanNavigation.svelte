<script lang="ts">
	import Icon from '../common/Icon.svelte';
	import { createEventDispatcher } from 'svelte';
	import ChevronLeftCircle from 'lucide-svelte/icons/chevron-left-circle';
	import ChevronRightCircle from 'lucide-svelte/icons/chevron-right-circle';

	const dispatch = createEventDispatcher();

	function next() {
		dispatch('next', {});
	}

	function previous() {
		dispatch('previous', {});
	}
</script>

<div class="flex w-full items-center justify-between py-2">
	<button on:click={previous}>
		<Icon icon={ChevronLeftCircle} scale={2} />
	</button>

	<slot />

	<button on:click={next}>
		<Icon icon={ChevronRightCircle} scale={2} />
	</button>
</div>
