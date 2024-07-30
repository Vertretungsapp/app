import type { ISubstitutionPlan } from 'indiware-api';

export interface Cache {
	[schoolnumber: string]: ISubstitutionPlan[];
}

/**
 * Returns the cache object
 * @returns {Cache} The cache object
 */
export function getCache(): Cache {
	return JSON.parse(localStorage.getItem('cache') || '{}');
}

/**
 * Sets the cache object
 * @param {Cache} cache The cache object
 * @returns {void}
 */
export function setCache(cache: Cache): void {
	localStorage.setItem('cache', JSON.stringify(cache));
}

/**
 * Clears the cache
 * @returns {void}
 */
export function clearCache(): void {
	localStorage.removeItem('cache');
}

/**
 * Removes all plans that are older than the given amount of days
 * @param {number} days The amount of days
 * @param {Date[]} holidays The holidays to exclude, defaults to []
 * @returns {void}
 */
export function removeStale(days: number, holidays: Date[] = []): void {
	const cache = getCache();
	const now = new Date();
	const startDate = now;

	// Check if today is a holiday or weekend
	const isHoliday = holidays.some((holiday) => holiday.toDateString() === now.toDateString());
	const isWeekend = now.getDay() === 0 || now.getDay() === 6;

	if (isHoliday || isWeekend) {
		// Find the most recent school day
		do {
			startDate.setDate(startDate.getDate() - 1);
		} while (
			holidays.some((holiday) => holiday.toDateString() === startDate.toDateString()) ||
			startDate.getDay() === 0 ||
			startDate.getDay() === 6
		);
	}

	for (const schoolnumber in cache) {
		cache[schoolnumber] = cache[schoolnumber].filter((plan, index, array) => {
			const date = new Date(plan.date);
			const isWithinRange = startDate.getTime() - date.getTime() < 1000 * 60 * 60 * 24 * days;
			// Ensure at least one plan remains in the cache
			return isWithinRange || array.length === 1;
		});
	}
	setCache(cache);
}

/**
 * Gets all plans for the given schoolnumber
 * @param {string} schoolnumber The schoolnumber
 * @returns {ISubstitutionPlan[]} The plans
 */
export function getPlans(schoolnumber: string): ISubstitutionPlan[] {
	return getCache()[schoolnumber] || [];
}

/**
 * Gets a plan for the given schoolnumber, if no date is given, the newest cached plan is returned
 * @param {string} schoolnumber The schoolnumber
 * @param {Date} date The date of the plan
 * @returns {ISubstitutionPlan | undefined} The plan
 */
export function getPlan(schoolnumber: string, date?: Date): ISubstitutionPlan | undefined {
	const plans = getPlans(schoolnumber).sort(
		(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
	);
	if (!date) {
		const planOfToday = plans.find(
			(plan) => new Date(plan.date).toDateString() === new Date().toDateString()
		);
		if (planOfToday) return planOfToday;
		return plans[plans.length - 1];
	}
	return plans.find((plan) => new Date(plan.date).toDateString() === date.toDateString());
}

/**
 * Adds a plan to the cache or overwrites an existing one
 * @param {string} schoolnumber The schoolnumber
 * @param {ISubstitutionPlan} plan The plan
 * @returns {void}
 */
export function addPlan(schoolnumber: string, plan: ISubstitutionPlan): void {
	const cache = getCache();
	if (!cache[schoolnumber]) cache[schoolnumber] = [];
	cache[schoolnumber] = cache[schoolnumber].filter(
		(p) => new Date(p.date).toDateString() !== new Date(plan.date).toDateString()
	);
	cache[schoolnumber].push(plan);
	setCache(cache);
	// TODO: Make this configurable
	removeStale(14);
}

/**
 * Removes all plans for the given schoolnumber
 * @param {string} schoolnumber The schoolnumber
 * @returns {void}
 */
export function removePlans(schoolnumber: string): void {
	const cache = getCache();
	delete cache[schoolnumber];
	setCache(cache);
}

/**
 * Removes a plan from the cache
 * @param {string} schoolnumber The schoolnumber
 * @param {Date} date The date of the plan
 * @returns {void}
 */
export function removePlan(schoolnumber: string, date: Date): void {
	const cache = getCache();
	cache[schoolnumber] = cache[schoolnumber].filter(
		(plan) => new Date(plan.date).toDateString() !== date.toDateString()
	);
	setCache(cache);
}
