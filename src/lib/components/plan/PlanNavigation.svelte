<script lang="ts">
	import Icon from '../common/Icon.svelte';
	import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons/faCircleChevronLeft';
	import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons/faCircleChevronRight';
	import { addBusinessDays } from 'date-fns/addBusinessDays';
	import { format } from 'date-fns/format';
	import { page } from '$app/stores';
	import type { PlanType } from '$lib/api/planTypes';
	import { stringToHexadecimal } from '$lib/common/stringToHexadecimal';
	import { planStore } from '$lib/stores/planStore';

	const type = ($page.data.type || 'schoolClass') as PlanType;
	const short = $page.data.short as string;

	const ignoreDates = $planStore.holidays.map((h) => new Date(h).toDateString());

	function addDays(days: number): Date {
		const d = new Date($planStore.currentDate);
		if (days === 0) return d;
		let newDate = addBusinessDays(d, days);
		while (ignoreDates.includes(newDate.toDateString())) {
			newDate = addBusinessDays(newDate, days > 0 ? 1 : -1);
		}
		return newDate;
	}

	function formatDate(date: Date): string {
		return format(date, 'yyyy-MM-dd');
	}

	function getHrefLink(date: Date): string {
		return `/plan/${type}/${stringToHexadecimal(short)}?date=${formatDate(date)}`;
	}
</script>

{#key $page.url}
	<div class="flex w-full items-center justify-between py-2">
		<a href={getHrefLink(addDays(-1))}>
			<Icon icon={faCircleChevronLeft} scale={1.5} />
		</a>

		<slot />

		<a href={getHrefLink(addDays(1))}>
			<Icon icon={faCircleChevronRight} scale={1.5} />
		</a>
	</div>
{/key}
