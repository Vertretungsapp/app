<script lang="ts">
	import type PlannedLesson from '$lib/api/server/class/PlannedLesson';

	export let lesson: PlannedLesson;
</script>

<div class="border-[3px] border-accent flex flex-col rounded-[13px] gap-4 px-4 py-2">
	<div class="flex items-center gap-4 w-full">
		<div class="flex items-center justify-between gap-4 w-[4.5rem]">
			<h1 class="text-center m-0">{lesson.lessonNumber}</h1>
			<div class="w-[1px] h-12 rounded-[7px] bg-accent" />
		</div>
		<div class="flex justify-between w-full items-center">
			<div class="leading-tight">
				<p class={lesson.subject.changed && 'text-error'}>{lesson.subject.name || '---'}</p>
				<p class={lesson.teacher.changed && 'text-error'}>{lesson.teacher.name || '---'}</p>
			</div>
			<h2 class={lesson.room.changed && 'text-error'}>{lesson.room.name || '---'}</h2>
		</div>
	</div>

	{#if lesson.info}
		<p class="text-sm text-grayedOut">{lesson.info}</p>
	{/if}
</div>
