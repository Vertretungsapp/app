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
 * @returns {void}
 */
export function removeStale(days: number): void {
	const cache = getCache();
	const now = new Date();
	for (const schoolnumber in cache) {
		cache[schoolnumber] = cache[schoolnumber].filter((plan) => {
			const date = new Date(plan.date);
			return now.getTime() - date.getTime() < 1000 * 60 * 60 * 24 * days;
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
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);
	if (!date) return plans[plans.length - 1];
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
