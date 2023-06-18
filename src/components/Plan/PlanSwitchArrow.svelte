<script lang="ts">
	import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
	import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import { date } from './stores';
	import Icon from '../Icon.svelte';
	import { addDays } from '$lib/day';

	export let holidays: Date[];
	export let turned: boolean;

	function handleClick() {
		date.update((d) => addDays(d, turned ? 1 : -1, holidays));
	}
</script>

<div class="cursor-pointer" on:keypress={() => undefined} on:click={handleClick}>
	<Icon icon={turned ? faChevronRight : faChevronLeft} size="2x" />
</div>
