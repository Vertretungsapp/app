import type SchoolPlan from '$lib/api/stundenplan42/class/SchoolPlan';

export type Cache = {
	[schoolnumber: string]: SchoolPlan[];
};

/**
 * Gets the cache from localStorage
 * @returns The cache object
 */
export function getCache(): Cache {
	const cache = localStorage.getItem('cache');
	if (!cache) return {};
	return JSON.parse(cache) as Cache;
}

/**
 * Saves the cache to localStorage
 * @param cache The cache to save
 */
export function saveCache(cache: Cache) {
	localStorage.setItem('cache', JSON.stringify(cache));
}

/**
 * Removes old plans from the cache (older than 30 days)
 * @returns The new cache
 */
export function cleanupCache() {
	const cache = getCache();
	const now = new Date();
	for (const schoolnumber in cache) {
		cache[schoolnumber] = cache[schoolnumber].filter(
			(plan) => now.getTime() - new Date(plan.date).getTime() < 1000 * 60 * 60 * 24 * 30
		);
	}
	saveCache(cache);
	return cache;
}

/**
 * Gets the cache entry for a schoolnumber (all plans for that schoolnumber)
 * @param schoolnumber The schoolnumber
 */
export function getCacheEntry(schoolnumber: string): SchoolPlan[] | undefined {
	return getCache()[schoolnumber];
}

/**
 * Gets a plan from the cache
 * @param schoolnumber The schoolnumber of the plan to get
 * @param date The date of the plan
 */
export function getSchoolPlan(schoolnumber: string, date?: Date): SchoolPlan | undefined {
	const entry = getCacheEntry(schoolnumber);
	if (!entry) return undefined;
	if (!date) return entry[0];
	return entry.find((plan) => new Date(plan.date).getTime() === date.getTime());
}

/**
 * Adds a plan to the cache
 * @param schoolnumber The schoolnumber of the plan where the plan should be added
 * @param plan The plan to add
 */
export function addPlan(schoolnumber: string, plan: SchoolPlan) {
	const cache = getCache();
	if (!cache[schoolnumber]) cache[schoolnumber] = [];

	if (
		cache[schoolnumber].find((p) => new Date(p.date).getTime() === new Date(plan.date).getTime())
	) {
		cache[schoolnumber] = cache[schoolnumber].map((p) =>
			new Date(p.date).getTime() === new Date(plan.date).getTime() ? plan : p
		);
	} else cache[schoolnumber].push(plan);

	cache[schoolnumber] = cache[schoolnumber].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	saveCache(cache);
	cleanupCache();
}

/**
 * Removes a plan from the cache
 * @param schoolnumber The schoolnumber of the plan to remove
 * @param date The date of the plan to remove
 */
export function removePlan(schoolnumber: string, date: Date) {
	const cache = getCache();
	if (!cache[schoolnumber]) return;
	cache[schoolnumber] = cache[schoolnumber].filter(
		(plan) => new Date(plan.date).getTime() !== date.getTime()
	);
	saveCache(cache);
	cleanupCache();
}
