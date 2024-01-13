import { getCredentials } from '$lib/api/session';
import { getPlans } from './cache';

export function getAllClasses(): string[] {
	const credentials = getCredentials();
	if (!credentials) throw new Error('Not logged in');
	const plans = getPlans(credentials.schoolnumber);
	const classes: string[] = [];
	plans.forEach((plan) => {
		plan.schoolClasses.forEach((schoolClass) => {
			if (!classes.includes(schoolClass.name)) classes.push(schoolClass.name);
		});
	});
	return classes;
}

export function getAllRooms(): string[] {
	const credentials = getCredentials();
	if (!credentials) throw new Error('Not logged in');
	const plans = getPlans(credentials.schoolnumber);
	const rooms: string[] = [];
	plans.forEach((plan) => {
		plan.rooms.forEach((room) => {
			if (!rooms.includes(room.name)) rooms.push(room.name);
		});
	});
	return rooms;
}

export function getAllTeachers(): string[] {
	const credentials = getCredentials();
	if (!credentials) throw new Error('Not logged in');
	const plans = getPlans(credentials.schoolnumber);
	const teachers: string[] = [];
	plans.forEach((plan) => {
		plan.teachers.forEach((teacher) => {
			if (!teachers.includes(teacher.name)) teachers.push(teacher.name);
		});
	});
	return teachers;
}

export function getAllInfos(): Array<{ info: string; date: Date }> {
	const credentials = getCredentials();
	if (!credentials) throw new Error('Not logged in');
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
