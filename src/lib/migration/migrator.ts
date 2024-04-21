import { migrators } from '$lib/migration/migratorIndex';
import toast from 'svelte-french-toast';

export interface Migrator {
	name: string;
	version: number;
	runMigration(): Promise<boolean>;
}

/**
 * Updates the current version in the local storage, used inside the migrators
 * @param migrator Migrator instance
 * @returns void
 */
export function updateVersion(migrator: Migrator) {
	localStorage.setItem('version', migrator.version.toString());
}

/**
 * Runs all migrations
 * @returns void
 */
export async function runMigrations() {
	if(Object.keys({...localStorage}).length === 0) {
		localStorage.setItem('version', getLatestDataVersion().toString());
	}

	const version = +(localStorage.getItem('version') || 0);
	for (const migrator of migrators) {
		if (migrator.version <= version) continue;
		try {
			console.debug(`Running migration "${migrator.name}" (v${migrator.version})`);
			await migrator.runMigration().then((success) => {
				if (success) {
					toast.success(`Migration "${migrator.name}" erfolgreich abgeschlossen.`);
					console.log(
						`Migration "${migrator.name}" (v${migrator.version}) completed successfully.`
					);
				} else {
					toast.error(`Migration "${migrator.name}" ist fehlgeschlagen.`);
					console.error(`Migration "${migrator.name}" (v${migrator.version}) failed.`);
				}
			});
		} catch (error) {
			toast.error(`Migration "${migrator.name}" ist fehlgeschlagen.`);
			console.error(`Migration "${migrator.name}" (v${migrator.version}) failed.`, error);
		}
	}
}

/**
 * Returns the latest data version
 * @returns number
 */
export function getLatestDataVersion() {
	return migrators.reduce((max, migrator) => Math.max(max, migrator.version), 0);
}
