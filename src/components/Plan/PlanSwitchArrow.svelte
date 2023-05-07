<script lang="ts">
	import { Icon } from 'svelte-awesome';
	import { faChevronLeft } from '@fortawesome/free-solid-svg-icons/faChevronLeft';
	import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
	import { date } from './stores';
	import addBusinessDays from 'date-fns/addBusinessDays';

	export let turned: boolean;

	function handleClick() {
		date.update((d) => {
			// TODO: implement holidays
			return turned ? addBusinessDays(d, 1) : addBusinessDays(d, -1);
		});
	}
</script>

<div class="cursor-pointer" on:keypress={() => {}} on:click={handleClick}>
	<Icon data={turned ? faChevronRight : faChevronLeft} scale="2" />
</div>
