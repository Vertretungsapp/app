import { PlanType, PlanTypePlural, pluralizePlanType } from '$lib/api/planTypes';
import { getFilter } from '$lib/filter/filter';
import type { Credentials, Lesson, PlannedLesson, Room, SchoolClass, Teacher } from 'indiware-api';
import { getPlans } from './cache';
import toast from 'svelte-french-toast';

export function getAll(credentials: Credentials): Array<SchoolClass | Teacher | Room> {
	const plans = getPlans(credentials.schoolnumber);
	const entities: Array<SchoolClass | Teacher | Room> = [];

	plans.forEach((plan) => {
		plan.schoolClasses.forEach((schoolClass) => {
			if (!entities.find((entity) => entity.name === schoolClass.name)) entities.push(schoolClass);
		});

		plan.teachers.forEach((teacher) => {
			if (!entities.find((entity) => entity.name === teacher.name)) entities.push(teacher);
		});

		plan.rooms.forEach((room) => {
			if (!entities.find((entity) => entity.name === room.name)) entities.push(room);
		});
	});

	return entities;
}

export function getAllMappedDate(
	credentials: Credentials,
	type: PlanType
): Map<Date, (SchoolClass | Room | Teacher)[]> {
	const plans = getPlans(credentials.schoolnumber);

	const entities: Map<Date, (SchoolClass | Room | Teacher)[]> = new Map();

	plans.forEach((plan) => {
		const items = plan[pluralizePlanType(type)];
		const date = new Date(new Date(plan.date).toDateString());
		items.forEach((item) => {
			if (!entities.has(date)) {
				entities.set(date, []);
			}
			entities.get(date)?.push(item);
		});
	});

	return entities;
}

function getAllEntities(credentials: Credentials, type: PlanTypePlural): string[] {
	const plans = getPlans(credentials.schoolnumber);
	const entities: string[] = [];

	plans.forEach((plan) => {
		const items = plan[type];

		items.forEach((item) => {
			if (!entities.includes(item.name)) entities.push(item.name);
		});
	});

	return entities;
}

export function getAllClasses(credentials: Credentials): string[] {
	return getAllEntities(credentials, PlanTypePlural.SCHOOL_CLASS);
}

export function getAllRooms(credentials: Credentials): string[] {
	return getAllEntities(credentials, PlanTypePlural.ROOM);
}

export function getAllTeachers(credentials: Credentials): string[] {
	return getAllEntities(credentials, PlanTypePlural.TEACHER);
}

export function getAllInfos(credentials: Credentials): Array<{ info: string; date: Date }> {
	const plans = getPlans(credentials.schoolnumber);
	const infos: Array<{ info: string; date: Date }> = [];
	plans.forEach((plan) => {
		if (plan.info) {
			plan.info.forEach((info) => {
				infos.push({ info, date: new Date(plan.date) });
			});
		}
	});
	infos.sort((a, b) => a.date.getTime() - b.date.getTime());
	return infos.filter((info) => info.date.getTime() >= new Date().setHours(0, 0, 0, 0));
}

function isLessonTimetableValid(lesson: PlannedLesson): boolean {
	return [
		lesson.id != null && lesson.id != undefined,
		lesson.subject.value && lesson.subject.value.replaceAll(' ', '').length > 0,
		lesson.subject.value != '---'
	].every((condition) => condition === true);
}

function generateTimetable(credentials: Credentials, type: PlanType, name: string): Lesson[] {
	const plans = getPlans(credentials.schoolnumber);
	const lessons: Lesson[] = [];

	plans.forEach((plan) => {
		const entities = type === 'room' ? plan.rooms : plan.teachers;

		entities.forEach((entity) => {
			if (entity.name === name) {
				entity.plannedLessons.forEach((lesson) => {
					if (!isLessonTimetableValid(lesson)) return;
					if (lessons.find((l) => l.id === lesson.id)) return;

					lessons.push({
						id: lesson.id,
						group: null,
						name: `${lesson.subject.value!} (${lesson.schoolClass})`,
						subject: lesson.subject.value!,
						teacher: null
					});
				});
			}
		});
	});

	return lessons;
}

export function generateRoomTimetable(credentials: Credentials, room: string): Lesson[] {
	return generateTimetable(credentials, PlanType.ROOM, room);
}

export function generateTeacherTimetable(credentials: Credentials, teacher: string): Lesson[] {
	return generateTimetable(credentials, PlanType.TEACHER, teacher);
}

export function getNextLessons(
	credentials: Credentials,
	name: string,
	type: PlanType
): PlannedLesson[] {
	toast("Step 1")
	const plans = getPlans(credentials.schoolnumber);
	toast("Step 2")
	const now = new Date();
	const filter = getFilter(credentials.schoolnumber, name);
	toast("Step 3 - " + !!plans)
	const plan = plans.find((plan) => new Date(plan.date).toDateString() == now.toDateString());
	toast("Step 4")
	if (!plan) return [];
	toast("Step 5")
	toast(JSON.stringify(plan))
	let plannedLessons: PlannedLesson[] = [];
	switch (type) {
		case PlanType.ROOM:
			plannedLessons = plan.rooms.find((room) => room.name === name)?.plannedLessons ?? [];
			break;
		case PlanType.TEACHER:
			plannedLessons = plan.teachers.find((teacher) => teacher.name === name)?.plannedLessons ?? [];
			break;
		case PlanType.SCHOOL_CLASS:
			plannedLessons =
				plan.schoolClasses.find((schoolClass) => schoolClass.name === name)?.plannedLessons ?? [];
			break;
		default:
			return [];
	}

	return plannedLessons
		.filter((lesson) => {
			const startTime = new Date(lesson.startTime);

			if (filter && filter.active) {
				if (filter.ignoredLessons.includes(lesson.id.toString())) return false;
			}

			return (
				startTime.getHours() >= now.getHours() &&
				(startTime.getHours() == now.getHours() ? startTime.getMinutes() >= now.getMinutes() : true)
			);
		})
		.sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
}
