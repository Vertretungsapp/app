<script lang="ts">
	import type { PlannedLesson } from 'indiware-api';
	import { twMerge } from 'tailwind-merge';

	export let lesson: PlannedLesson;

	let changed = lesson.subject.changed || lesson.teacher.changed || lesson.room.changed;
</script>

<div>
	<div class="flex w-full text-lg font-bold">
		<div class={twMerge('bg-secondary-800 p-2', lesson.info ? 'rounded-tl-lg' : 'rounded-l-lg')}>
			<h2 class={twMerge('w-10 text-center text-4xl', changed && 'animate-pulse text-red-600')}>
				{lesson.order}
			</h2>
		</div>

		<div
			class={twMerge(
				'w-full bg-secondary-950 px-2 py-1',
				lesson.info ? 'rounded-tr-lg' : 'rounded-r-lg'
			)}
		>
			<div class="flex w-full items-center justify-between h-full">
				<div class="flex flex-col justify-center h-full">
						<p class={twMerge('leading-tight', lesson.subject.changed && 'text-red-600')}>
							{lesson.subject.value || ""}
						</p>
						<p class={twMerge('leading-tight', lesson.teacher.changed && 'text-red-600')}>
							{lesson.teacher.value || ""}
						</p>
				</div>

				<div>
					<p class={twMerge('text-2xl font-extrabold', lesson.room.changed && 'text-red-600')}>
						{lesson.room.value || ''}
					</p>
				</div>
			</div>
		</div>
	</div>

	{#if lesson.info}
		<div class="rounded-b-lg bg-secondary-950 p-2 text-sm">
			<p>{lesson.info}</p>
		</div>
	{/if}
</div>
