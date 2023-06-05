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

/**
 * Updates the lessons in the filter
 * @param filter Filter to update
 * @param lessons Lessons to update
 */
export function updateFilter(filter: Filter, lessons: Lesson[]): Filter {
	const lessonsToAdd = lessons.filter((lesson) => {
		return !filter.lessons.find((l) => l.lesson.id === lesson.id);
	});

	const lessonsToRemove = filter.lessons.filter((lesson) => {
		return !lessons.find((l) => l.id === lesson.lesson.id);
	});

	const lessonsToUpdate = filter.lessons.filter((lesson) => {
		return lessons.find((l) => l.id === lesson.lesson.id);
	});

	lessonsToAdd.forEach((lesson) => {
		filter.lessons.push({ enabled: true, lesson });
	});

	lessonsToRemove.forEach((lesson) => {
		filter.lessons.splice(filter.lessons.indexOf(lesson), 1);
	});

	lessonsToUpdate.forEach((lesson) => {
		lesson.lesson = lessons.find((l) => l.id === lesson.lesson.id) as Lesson;
	});

	saveFilter(filter);
	return filter;
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
	if(!filter.lessons.find((l) => l.lesson.id === lesson.id)) return true;
	return lessonFilter?.enabled ?? false;
}

export function setAllLessonEnabled(filter: Filter, enabled: boolean) {
	filter.lessons.forEach((l) => (l.enabled = enabled));
	saveFilter(filter);
	return filter;
}
