<script lang="ts">
	import { PlanType } from '$lib/api/planTypes';
	import type { PlannedLesson } from 'indiware-api';
	import { twMerge } from 'tailwind-merge';

	export let lesson: PlannedLesson;
	export let type: PlanType;

	let changed = lesson.subject.changed || lesson.teacher.changed || lesson.room.changed;

	type Slot = { value: string | null; changed: boolean };

	let slot1: Slot;
	let slot2: Slot;
	let slot3: Slot;

	switch (type) {
		case PlanType.TEACHER:
			slot1 = lesson.subject;
			slot2 = { value: lesson.schoolClass, changed: false };
			slot3 = lesson.room;
			break;
		case PlanType.ROOM:
			slot1 = lesson.subject;
			slot2 = lesson.teacher;
			slot3 = { value: lesson.schoolClass, changed: false };
			break;
		default:
			slot1 = lesson.subject;
			slot2 = lesson.teacher;
			slot3 = lesson.room;
			break;
	}
</script>

<div>
	<div class="flex w-full text-lg font-bold">
		<div class={twMerge('bg-clickable p-2', lesson.info ? 'rounded-tl-lg' : 'rounded-l-lg')}>
			<h2 class={twMerge('w-10 text-center text-4xl', changed && 'animate-pulse text-red-600')}>
				{lesson.order}
			</h2>
		</div>

		<div
			class={twMerge(
				'w-full bg-display px-2 py-1',
				lesson.info ? 'rounded-tr-lg' : 'rounded-r-lg'
			)}
		>
			<div class="flex h-full w-full items-center justify-between">
				<div class="flex h-full flex-col justify-center">
					<p class={twMerge('leading-tight', slot1.changed && 'text-red-600')}>
						{slot1.value || ''}
					</p>

					<p class={twMerge('leading-tight', slot2.changed && 'text-red-600')}>
						{slot2.value || ''}
					</p>
				</div>

				<p class={twMerge('text-2xl font-extrabold', slot3.changed && 'text-red-600')}>
					{slot3.value || ''}
				</p>
			</div>
		</div>
	</div>

	{#if lesson.info}
		<div class="rounded-b-lg bg-display p-2 text-sm">
			<p>{lesson.info}</p>
		</div>
	{/if}
</div>
