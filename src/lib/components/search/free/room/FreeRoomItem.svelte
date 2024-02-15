<script lang="ts">
	import type { PlannedLesson } from 'indiware-api';
	import Icon from '$lib/components/common/Icon.svelte';
	import { faDoorOpen } from '@fortawesome/free-solid-svg-icons/faDoorOpen';
	import { format } from 'date-fns';
	import { isTimeGreaterThan } from '$lib/common/planHelper';
	import {getHrefLink} from '$lib/common/planHelper';
	import { PlanType } from '$lib/api/planTypes';

	export let room: string;
	export let lessons: PlannedLesson[];
	export let startTime: Date;

	let freeUntil: Date | number = -1;
	$: {
		let nextLesson = lessons.sort((a, b) => a.order - b.order).find(lesson => isTimeGreaterThan(new Date(lesson.startTime), new Date(startTime)));
		freeUntil = lessons.length > 0 && nextLesson ? nextLesson.startTime : -1
	}
</script>

<a href={getHrefLink(room, PlanType.ROOM, startTime)} class="w-full bg-display rounded-lg p-3 flex gap-3 items-center">
	<Icon icon={faDoorOpen} scale={2} />
	<div>
		<p>{room}</p>
		{#if freeUntil !== -1}
			<p class="text-disabled text-sm">Dieser Raum ist frei bis: {format(new Date(freeUntil), "HH:mm")} Uhr</p>
		{/if}
	</div>
</a>
