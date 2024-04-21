import { PlanType } from '$lib/api/planTypes';
import { login } from '$lib/api/session';
import { getPlanTypeByName } from '$lib/cache/cacheHelper';
import type { Filter } from '$lib/filter/filter';
import { updateVersion, type Migrator } from '$lib/migration/migrator';
import toast from 'svelte-french-toast';

export class V1Migrator implements Migrator {
	version = 1;
	async runMigration(): Promise<boolean> {
		updateVersion(this);

		// Step 1: Migrate credentials
		const credentials = localStorage.getItem('credentials');
		if (credentials) {
			const creds = JSON.parse(credentials);
			await login(creds)
				.catch(() => {
					toast.error('Fehler beim Migrieren der Anmeldeinformationen. Sind sie noch gültig?');
					throw new Error('Migration to v1.0.0 failed - credentials migration failed');
				})
				.finally(() => {
					localStorage.removeItem('credentials');
				});
		}

		// Step 2: Migrate filters
		Object.keys({ ...localStorage }).forEach((key) => {
			if (key.startsWith('filter.')) {
				const data = localStorage.getItem(key);
				if (!data) return;
				const filter = JSON.parse(data);
				if (filter.name) return; // This filter is already migrated
				migrateFilter(key, filter);
			}
		});

		return true;
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function migrateFilter(key: string, filter: any) {
	const newFilter: Filter = {
		schoolnumber: filter.schoolnumber,
		name: filter.classShort,
		ignoredLessons: [],
		type: PlanType.SCHOOL_CLASS,
		active: true
	};

	const type = getPlanTypeByName(filter.schoolnumber, filter.classShort);
	if (type) {
		newFilter.type = type;
	} else {
		// For type safety reasons, we should remove the filter if the type is not found
		// This may be very destructive, but it's the only way to ensure that the filter is valid
		console.log(`Could not find type for filter ${key}, removing it.`);
		return localStorage.removeItem(key);
	}

	for (const lesson of filter.lessons) {
		if (lesson.enabled === false) {
			newFilter.ignoredLessons.push(lesson.lesson.id);
		}
	}

	localStorage.setItem(key, JSON.stringify(newFilter));
}
