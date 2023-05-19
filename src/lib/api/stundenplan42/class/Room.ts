import type { Plan } from '$lib/api/stundenplan42/class/Plan';
import { PlanType } from '$lib/api/stundenplan42/class/Plan';
import type PlannedLesson from './PlannedLesson';

export default class Room implements Plan {
	type: PlanType = PlanType.ROOM;
	schedule: PlannedLesson[];
	short: string;

	constructor(short: string, ...schedule: PlannedLesson[]) {
		this.short = short;
		this.schedule = schedule;
	}

	public addLesson(lesson: PlannedLesson): void {
		this.schedule.push(lesson);
	}
}
