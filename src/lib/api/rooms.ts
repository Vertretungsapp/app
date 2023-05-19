import { getCacheEntry } from '$lib/api/cache';

/**
 * Returns all rooms of a school by searching through the cache
 * @param schoolnumber
 * @returns Array of room names
 */
export function getAllRooms(schoolnumber: string): string[] {
	const cache = getCacheEntry(schoolnumber);
	if (!cache) return [];
	const rooms: string[] = [];
	for (const plan of cache) {
		for (const klass of plan.classes) {
			for (const scheduledLesson of klass.schedule) {
				if (scheduledLesson.room === undefined || scheduledLesson.room?.name === '') continue;
				if (!rooms.includes(scheduledLesson.room?.name)) rooms.push(scheduledLesson.room?.name);
			}
		}
	}
	return rooms;
}
