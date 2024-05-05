import type { Migrator } from '$lib/migration/migrator';
import { V1Migrator } from '$lib/migration/v1-0-0/v1_migrator';
import { V111Migrator } from '$lib/migration/v1-1-0/v1-1-1_migrator';

/**
 * List of all available migrators
 */
export const migrators: Migrator[] = [new V1Migrator(), new V111Migrator()];
