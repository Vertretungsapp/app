import { goto } from '$app/navigation';
import { checkCredentials, fetchPlan } from '$lib/api/clientHelpers';
import { PlanType } from '$lib/api/planTypes';
import { getCredentials } from '$lib/api/session';
import { addFavorite } from '$lib/favorites/favorites';
import type { Filter } from '$lib/filter/filter';
import { updateVersion, type Migrator } from '$lib/migration/migrator';
import type { ISubstitutionPlan } from 'indiware-api';

// Fix the v1 migrator, which is very broken
export class V111Migrator implements Migrator {
	name = 'Migration auf Version 1.1.1';
	version = 4;

	async runMigration(): Promise<boolean> {
		// Step 1: Clear cache (sorry for that)
		localStorage.removeItem('cache');

		// Step 2: Check credentials
		const credentials = getCredentials();
		if (!credentials) {
			console.log('No credentials found, clearing all data');
			return wipeAll();
		}
		const credValid = await checkCredentials(credentials);
		if (!credValid) {
			console.log('Credentials are invalid, clearing all data');
			return wipeAll();
		}

		// Step 3: Fetch latest plan
		const latestPlan = await fetchPlan({ customCredentials: credentials, noCache: true });
		if (!latestPlan) {
			console.log('Failed to fetch latest plan, clearing all data');
			return wipeAll();
		}

		// Step 4: Migrate filter
		Object.keys({ ...localStorage }).forEach((key) => {
			if (key.startsWith('filter.')) {
				const data = localStorage.getItem(key);
				if (!data) return localStorage.removeItem(key);
				const filter = JSON.parse(data);
				const newFilter = migrateFilter(filter, latestPlan);
				if (!newFilter) {
					return localStorage.removeItem(key);
				}
				localStorage.setItem(key, JSON.stringify(newFilter));
			}

			if (key.startsWith('fav.')) {
				const data = localStorage.getItem(key);
				if (!data) return;
				const favorite = JSON.parse(data);
				migrateFavorite(favorite, latestPlan);
				localStorage.removeItem(key);
			}
		});

		// Step 5: Update version
		updateVersion(this);
		return true;
	}
}

function wipeAll() {
	localStorage.clear();
	goto('/settings/credentials', { invalidateAll: true, replaceState: true });
	return false;
}

function getPlanTypeByName(name: string, plan: ISubstitutionPlan) {
	if (plan.schoolClasses.find((schoolClass) => schoolClass.name === name))
		return PlanType.SCHOOL_CLASS;
	if (plan.teachers.find((teacher) => teacher.name === name)) return PlanType.TEACHER;
	if (plan.rooms.find((room) => room.name === name)) return PlanType.ROOM;
	return null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function migrateFilter(obj: any, plan: ISubstitutionPlan) {
	if (!obj.type) {
		const type = getPlanTypeByName(obj.classShort, plan);
		if (!type) return false;
		obj.type = type;
	}

	const newFilter = {
		schoolnumber: obj.schoolnumber,
		name: obj.classShort || obj.name,
		ignoredLessons: obj.ignoredLessons || [],
		type: obj.type,
		active: obj.active || true
	} as Filter;

	if (obj.lessons) {
		for (const lesson of obj.lessons) {
			if (lesson.enabled === false) {
				newFilter.ignoredLessons.push(lesson.lesson.id);
			}
		}
	}

	return newFilter;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function migrateFavorite(obj: any, plan: ISubstitutionPlan) {
	const type = getPlanTypeByName(obj.short, plan);
	if (!type) {
		console.log(`Could not find type for favorite, removing it.`);
		return;
	}
	addFavorite(obj.schoolnumber, obj.short, type);
}
