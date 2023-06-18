import addBusinessDays from 'date-fns/addBusinessDays';

/**
 * Check if a date is included in an array of dates (ignoring time)
 * @param d
 * @param dArray
 */
export function isDateIncluded(d: Date, dArray: Date[]): boolean {
	return dArray.some((date) => {
		return new Date(date).toLocaleDateString() === d.toLocaleDateString();
	});
}

export function addDays(d: Date, days: number, ignore?: Date[]): Date {
	if (days === 0) return d;
	let newDate = addBusinessDays(d, days);
	if (!ignore) return newDate;
	while (isDateIncluded(newDate, ignore)) {
		newDate = addBusinessDays(newDate, days > 0 ? 1 : -1);
	}
	return newDate;
}
