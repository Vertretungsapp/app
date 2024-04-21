<script lang="ts">
	import Icon from '../common/Icon.svelte';
	import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons/faCircleChevronLeft';
	import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons/faCircleChevronRight';
	import { createEventDispatcher } from 'svelte';

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
		<Icon icon={faCircleChevronLeft} scale={1.7} />
	</button>

	<slot />

	<button on:click={next}>
		<Icon icon={faCircleChevronRight} scale={1.7} />
	</button>
</div>
