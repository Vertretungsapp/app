import { PlanType } from '$lib/api/planTypes';
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

/**
 * Compares two dates and returns whether the first date is less than the second date.
 * This ignores the date and only compares the time.
 * @param a {Date} The first date.
 * @param b {Date} The second date.
 * @returns {boolean} Whether the first date is less than the second date.
 */
export function isTimeLessThan(a: Date, b: Date): boolean {
	return (
		a.getHours() < b.getHours() ||
		(a.getHours() === b.getHours() && a.getMinutes() < b.getMinutes())
	);
}

/**
 * Compares two dates and returns whether the first date is greater than the second date.
 * This ignores the date and only compares the time.
 * @param a {Date} The first date.
 * @param b {Date} The second date.
 * @returns {boolean} Whether the first date is greater than the second date.
 */
export function isTimeGreaterThan(a: Date, b: Date): boolean {
	return (
		a.getHours() > b.getHours() ||
		(a.getHours() === b.getHours() && a.getMinutes() > b.getMinutes())
	);
}

/**
 * Compares two dates and returns whether the first date is less than or equal to the second date.
 * @param a {Date} The first date.
 * @param b {Date} The second date.
 * @returns {boolean} Whether the first date is less than or equal to the second date.
 */
export function isTimeLessOrEqualThan(a: Date, b: Date): boolean {
	return isTimeLessThan(a, b) || a.toTimeString() === b.toTimeString();
}

/**
 * Compares two dates and returns whether the first date is greater than or equal to the second date.
 * @param a {Date} The first date.
 * @param b {Date} The second date.
 * @returns {boolean} Whether the first date is greater than or equal to the second date.
 */
export function isTimeGreaterOrEqualThan(a: Date, b: Date): boolean {
	return isTimeGreaterThan(a, b) || a.toTimeString() === b.toTimeString();
}
