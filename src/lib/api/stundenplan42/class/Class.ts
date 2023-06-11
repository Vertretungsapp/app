import type { Plan } from '$lib/api/stundenplan42/class/Plan';
import { PlanType } from '$lib/api/stundenplan42/class/Plan';
import Lesson, { fromJson as lessonParser } from './Lesson';
import PlannedLesson, { fromJson as plannedLessonParser } from './PlannedLesson';
import { parseArrayOrObjectFromJson } from './SchoolPlan';

export default class Class implements Plan {
	type: PlanType = PlanType.CLASS;
	schedule: PlannedLesson[] = [];
	short: string;
	lessons: Lesson[] = [];

	constructor(short: string) {
		this.short = short;
	}
}

/**
 * Parses a class from the JSON response
 * @param json JSON response
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromJson(json: any): Class {
	const klass = new Class(json.Kurz);

	const lessons = json.Unterricht.Ue;
	klass.lessons = parseArrayOrObjectFromJson<Lesson>(lessons, lessonParser);

	const schedule = json.Pl.Std;
	klass.schedule = parseArrayOrObjectFromJson<PlannedLesson>(schedule, plannedLessonParser);

	return klass;
}
