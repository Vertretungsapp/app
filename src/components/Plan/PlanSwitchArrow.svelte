<script lang="ts">
	import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
	import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
	import { date } from './stores';
	import addBusinessDays from 'date-fns/addBusinessDays';
	import Icon from "../Icon.svelte";

	export let holidays: Date[];
	export let turned: boolean;

	/**
	 * Check if a date is included in an array of dates (ignoring time)
	 * @param d
	 * @param dArray
	 */
	function isDateIncluded(d: Date, dArray: Date[]): boolean {
		return dArray.some((date) => {
			return new Date(date).toLocaleDateString() === d.toLocaleDateString();
		});
	}

	function handleClick() {
		date.update((d) => {
			let newDate = turned ? addBusinessDays(d, 1) : addBusinessDays(d, -1);
			while (isDateIncluded(newDate, holidays)) {
				newDate = turned ? addBusinessDays(newDate, 1) : addBusinessDays(newDate, -1);
			}
			return newDate;
		});
	}
</script>

<div class="cursor-pointer" on:keypress={() => undefined} on:click={handleClick}>
	<Icon icon={turned ? faChevronRight : faChevronLeft} size="2x" />
</div>
