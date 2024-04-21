import { PlanType } from '$lib/api/planTypes';
import { getAllMappedDate, getAllRooms } from '$lib/cache/cacheHelper';
import { isTimeLessOrEqualThan, isTimeLessThan } from '$lib/common/planHelper';
import type { PlannedLesson, Room } from 'indiware-api';
import type { PageLoad } from './$types';

type Params = {
	start: number | string | null;
	end: number | string | null;
};

/**
 * Returns all lessons between the given start and end time
 * If a lesson has the subject "---", the lesson will be ignored (the room is free)
 * The endTime is optional, if it is not given, all lessons after the startTime will be returned, so in the UI it will be shown as "free until ...am/pm
 */
function getAllLessonsBetweenTime(
	rooms: Map<Date, Room[]>,
	options: Params
): Map<Room, PlannedLesson[]> {
	const start = new Date(options.start!);
	const end = options.end ? new Date(options.end) : null;
	const date = new Date(start.toDateString());

	const lessons: Map<Room, PlannedLesson[]> = new Map();

	rooms.forEach((rooms, d) => {
		if (date.toDateString() !== d.toDateString()) return;
		rooms.forEach((room) => {
			const plannedLessons: PlannedLesson[] = [];

			room.plannedLessons.forEach((lesson) => {
				const lessonStart = new Date(lesson.startTime);
				const lessonEnd = new Date(lesson.endTime);

				if (lesson.subject.value === '---') return;
				if (isTimeLessThan(lessonEnd, start)) return;
				if (end && isTimeLessThan(end, lessonStart)) return;

				plannedLessons.push(lesson);
			});

			lessons.set(room, plannedLessons);
		});
	});

	return lessons;
}

function getTimeFromParam(string: string | null): number | string | null {
	if (!string) return null;
	if (isNaN(+string)) return string as string;
	return +string;
}

/**
 * Returns the start time of the first lesson in the given array
 * @param lessons The lessons to search in
 */
function getStartTimeOfFirstLesson(lessons: PlannedLesson[]): Date {
	if (lessons.length === 0) return new Date();
	return lessons.reduce((prev, curr) => {
		const start = new Date(curr.startTime);
		return isTimeLessThan(start, prev) ? start : prev;
	}, new Date(lessons[0].startTime));
}

export const load: PageLoad = async ({ url, parent }) => {
	const { credentials } = await parent();
	const params: Params = {
		start: getTimeFromParam(url.searchParams.get('start')),
		end: getTimeFromParam(url.searchParams.get('end'))
	};

	const roomsMappedDate = getAllMappedDate(credentials, PlanType.ROOM) as Map<Date, Room[]>;

	if (!params.start) return { rooms: [], planEmpty: false };

	const map = getAllLessonsBetweenTime(roomsMappedDate, params);
	const array = Array.from(map, ([room, lessons]) => ({
		room: room.name,
		lessons
	}));

	// This prevents that all rooms are shown as free, if the plan is empty
	if (array.length === 0) return { rooms: [], planEmpty: true };

	// Since not every room is present in every plan, we also need to inject all other rooms of the school
	// Which may are not present in the plan, but therefore definitely free
	const allRooms = getAllRooms(credentials);
	allRooms.forEach((room) => {
		if (array.find((r) => r.room === room)) return;
		array.push({
			room,
			lessons: []
		});
	});

	return {
		rooms: array
			.filter(({ lessons }) => {
				if (params.end) return lessons.length === 0;
				// Fix for edge case when start time is inside a lesson
				return !lessons.find(
					(lesson) =>
						isTimeLessOrEqualThan(new Date(lesson.startTime), new Date(params.start!)) &&
						isTimeLessOrEqualThan(new Date(params.start!), new Date(lesson.endTime))
				);
			})
			// Sort the rooms so that the room with the most free time is at the top
			.sort(
				(a, b) =>
					getStartTimeOfFirstLesson(b.lessons).getTime() -
					getStartTimeOfFirstLesson(a.lessons).getTime()
			),
		planEmpty: false
	};
};
