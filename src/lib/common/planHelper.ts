import type { PlanType } from '$lib/api/planTypes';
import { addBusinessDays, format } from 'date-fns';
import { stringToHexadecimal } from './stringToHexadecimal';

function changeDate(d: Date, holidays: string[], days: number): Date {
	if (days === 0) return d;
	let newDate = addBusinessDays(d, days);
	while (holidays.includes(newDate.toDateString())) {
		newDate = addBusinessDays(newDate, days > 0 ? 1 : -1);
	}
	return newDate;
}

export function nextDate(d: Date, holidays: string[]) {
	return changeDate(d, holidays, 1);
}

export function previousDate(d: Date, holidays: string[]) {
	return changeDate(d, holidays, -1);
}

export function formatDate(date: Date): string {
	return format(date, 'yyyy-MM-dd');
}

export function getHrefLink(short: string, type: PlanType, date?: Date): string {
	return `/plan/${type}/${stringToHexadecimal(short)}`.concat(
		date ? `?date=${formatDate(date)}` : ''
	);
}

export function addDays(days: number, date: Date, holidays: string[]): Date {
	if (days > 0) {
		return nextDate(date, holidays);
	} else {
		return previousDate(date, holidays);
	}
}
