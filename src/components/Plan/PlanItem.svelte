<script lang="ts">
	import type PlannedLesson from '$lib/api/stundenplan42/class/PlannedLesson';
	import type { PlanType } from '$lib/api/stundenplan42/class/Plan';

	export let lesson: PlannedLesson;
	export let type: PlanType;
</script>

<div class="dynborder flex flex-col gap-4 rounded-[13px] px-4 py-2">
	<div class="flex w-full items-center gap-4">
		<div class="flex w-[4.5rem] items-center justify-between gap-4">
			<h1 class="m-0 w-full text-center">{lesson.lessonNumber}</h1>
			<div class="h-12 w-[3px] rounded-[7px] bg-accent" />
		</div>
		<div class="flex w-full items-center justify-between">
			<div class="leading-tight">
				<p class={lesson.subject.changed && 'text-error'}>{lesson.subject.name || ''}</p>
				<p class={lesson.teacher.changed && 'text-error'}>{lesson.teacher.name || ''}</p>
			</div>
			{#if type === 'Klasse'}
				<h2 class={lesson.room.changed && 'text-error'}>{lesson.room.name || ''}</h2>
			{:else if type === 'Raum'}
				<h2>{lesson.classShort || ''}</h2>
			{/if}
		</div>
	</div>

	{#if lesson.info}
		<p class="text-sm text-grayedOut">{lesson.info}</p>
	{/if}
</div>
