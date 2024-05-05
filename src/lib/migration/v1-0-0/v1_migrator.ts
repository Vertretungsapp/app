import { login } from '$lib/api/session';
import { updateVersion, type Migrator } from '$lib/migration/migrator';
import toast from 'svelte-french-toast';

export class V1Migrator implements Migrator {
	name = 'Migration auf Version 1.0.0';
	version = 3;
	async runMigration(): Promise<boolean> {
		updateVersion(this);

		// Step 1: Migrate credentials
		const credentials = localStorage.getItem('credentials');
		if (credentials) {
			const creds = JSON.parse(credentials);
			await login(creds)
				.catch(() => {
					toast.error('Fehler beim Migrieren der Anmeldeinformationen. Sind sie noch gültig?');
				})
				.finally(() => {
					localStorage.removeItem('credentials');
				});
		}

		// Step 2 & 3: Migrate filters & favorites
		// DEACTIVATED: This migration is dangerous and so replaced with the v1.1.1 migrator

		// Step 4: Delete cache (migration is not fully possible due to missing information)
		localStorage.removeItem('cache');

		return true;
	}
}
