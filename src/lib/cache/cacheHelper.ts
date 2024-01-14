import { PlanType, PlanTypePlural } from '$lib/api/planTypes';
import type { Credentials, Lesson, PlannedLesson } from 'indiware-api';
import { getPlans } from './cache';

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
	return infos.filter((info) => info.date.getTime() >= Date.now());
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
