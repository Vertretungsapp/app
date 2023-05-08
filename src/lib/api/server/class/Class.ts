import PlannedLesson, {fromJson as plannedLessonParser} from './PlannedLesson';
import Lesson, {fromJson as lessonParser} from './Lesson';
import {parseArrayOrObjectFromJson} from './SchoolPlan';
import type {Plan} from "$lib/api/server/class/Plan";

export default class Class implements Plan {
	schedule: PlannedLesson[] = [];
	short: string | undefined;
	lessons: Lesson[] = [];
}

/**
 * Parses a class from the JSON response
 * @param json JSON response
 */
export function fromJson(json: any): Class {
	const klass = new Class();
	klass.short = json.Kurz;

	const lessons = json.Unterricht.Ue;
	klass.lessons = parseArrayOrObjectFromJson<Lesson>(lessons, lessonParser);

	const schedule = json.Pl.Std;
	klass.schedule = parseArrayOrObjectFromJson<PlannedLesson>(
		schedule,
		plannedLessonParser
	);

	return klass;
}
