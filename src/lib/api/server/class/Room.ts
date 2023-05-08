import type PlannedLesson from './PlannedLesson';
import type { Plan } from '$lib/api/server/class/Plan';

export default class Room implements Plan {
	schedule: PlannedLesson[];
	short: string | undefined;

	constructor(short: string | undefined, ...schedule: PlannedLesson[]) {
		this.short = short;
		this.schedule = schedule;
	}

	public addLesson(lesson: PlannedLesson): void {
		this.schedule.push(lesson);
	}
}
