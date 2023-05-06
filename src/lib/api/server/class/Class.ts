import PlannedLesson, { fromJson as plannedLessonParser } from './PlannedLesson';
import Lesson, { fromJson as lessonParser } from './Lesson';
import { parseArrayOrObjectFromJson } from './Plan';

export default class Class {
	short: string | undefined;
	lessons: Lesson[] = [];
	scheduledLessons: PlannedLesson[] = [];
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

	const scheduledLessons = json.Pl.Std;
	klass.scheduledLessons = parseArrayOrObjectFromJson<PlannedLesson>(
		scheduledLessons,
		plannedLessonParser
	);

	return klass;
}
