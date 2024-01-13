<script lang="ts">
	import Icon from '../common/Icon.svelte';
	import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons/faCircleChevronLeft';
	import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons/faCircleChevronRight';
	import { page } from '$app/stores';
	import type { PlanType } from '$lib/api/planTypes';
	import { planStore } from '$lib/stores/planStore';
	import { getHrefLink, nextDate, previousDate } from '$lib/common/planHelper';

	const type = ($page.data.type || 'schoolClass') as PlanType;
	const short = $page.data.short as string;

	const ignoreDates = $planStore.holidays.map((h) => new Date(h).toDateString());

	function addDays(days: number): Date {
		if (days > 0) {
			return nextDate($planStore.currentDate, ignoreDates);
		} else {
			return previousDate($planStore.currentDate, ignoreDates);
		}
	}
</script>

<div class="flex w-full items-center justify-between py-2">
	<a href={getHrefLink(addDays(-1), short, type)}>
		<Icon icon={faCircleChevronLeft} scale={1.5} />
	</a>

	<slot />

	<a href={getHrefLink(addDays(1), short, type)}>
		<Icon icon={faCircleChevronRight} scale={1.5} />
	</a>
</div>
