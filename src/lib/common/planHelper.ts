import { addBusinessDays } from 'date-fns';

function changeDate(d: Date, holidays: Date[], days: number): Date {
	if (days === 0) return d;
	const ignoreDates = holidays.map((d) => d.toDateString());
	let newDate = addBusinessDays(d, days);
	while (ignoreDates.includes(newDate.toDateString())) {
		newDate = addBusinessDays(newDate, days > 0 ? 1 : -1);
	}
	return newDate;
}

export function nextDate(d: Date, holidays: Date[]) {
	return changeDate(d, holidays, 1);
}

export function previousDate(d: Date, holidays: Date[]) {
	return changeDate(d, holidays, -1);
}
