import type { Credentials } from 'indiware-api';
import { getFilter, updateFilter } from './filter';

export function ignoreLesson(credentials: Credentials, name: string, lessonId: number): void {
	const filter = getFilter(credentials.schoolnumber, name);
	if (!filter) return;
	filter.ignoredLessons.push(lessonId.toString());
	updateFilter(filter);
}

export function unignoreLesson(credentials: Credentials, name: string, lessonId: number): void {
	const filter = getFilter(credentials.schoolnumber, name);
	if (!filter) return;
	filter.ignoredLessons = filter.ignoredLessons.filter((id) => id !== lessonId.toString());
	updateFilter(filter);
}

export function isLessonIgnored(credentials: Credentials, name: string, lessonId: number): boolean {
	const filter = getFilter(credentials.schoolnumber, name);
	if (!filter) return false;
	return filter.ignoredLessons.includes(lessonId.toString());
}
