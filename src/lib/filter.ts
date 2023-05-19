import { getCredentials } from '$lib/api/session';
import type Lesson from '$lib/api/stundenplan42/class/Lesson';
import type PlannedLesson from '$lib/api/stundenplan42/class/PlannedLesson';

export type Filter = {
	schoolnumber: string;
	classShort: string;
	lessons: { enabled: boolean; lesson: Lesson }[];
};

export function createFilter(classShort: string, lessons: Lesson[]): Filter {
	if (!getCredentials()) {
		throw new Error('Not logged in');
	}
	const schoolnumber = getCredentials()?.schoolnumber as string;
	const filter = {
		schoolnumber,
		classShort,
		lessons: lessons.map((lesson) => ({ enabled: true, lesson }))
	};

	localStorage.setItem(`filter.${schoolnumber}.${classShort}`, JSON.stringify(filter));

	return filter;
}

export function getFilter(classShort: string): Filter | null {
	if (!getCredentials()) {
		throw new Error('Not logged in');
	}
	const schoolnumber = getCredentials()?.schoolnumber as string;
	const filter = localStorage.getItem(`filter.${schoolnumber}.${classShort}`);
	if (filter) return JSON.parse(filter);
	return null;
}

export function saveFilter(filter: Filter) {
	localStorage.setItem(
		`filter.${filter.schoolnumber}.${filter.classShort}`,
		JSON.stringify(filter)
	);
}

export function deleteFilter(schoolnumber: string, classShort: string) {
	localStorage.removeItem(`filter.${schoolnumber}.${classShort}`);
}

export function toggleLesson(filter: Filter, lesson: Lesson): boolean {
	const lessonFilter = filter.lessons.find((l) => l.lesson.id === lesson.id);
	if (lessonFilter) lessonFilter.enabled = !lessonFilter.enabled;
	saveFilter(filter);
	return lessonFilter?.enabled ?? false;
}

export function isLessonEnabled(filter: Filter, lesson: Lesson | PlannedLesson): boolean {
	const lessonFilter = filter.lessons.find((l) => l.lesson.id === lesson.id);
	return lessonFilter?.enabled ?? false;
}

export function setAllLessonEnabled(filter: Filter, enabled: boolean) {
	filter.lessons.forEach((l) => (l.enabled = enabled));
	saveFilter(filter);
	return filter;
}
