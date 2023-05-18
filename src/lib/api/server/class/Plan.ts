import type PlannedLesson from '$lib/api/server/class/PlannedLesson';

export interface Plan {
	short: string | undefined;
	schedule: PlannedLesson[];
}

export enum PlanType {
	CLASS = 'Klasse',
	ROOM = 'Raum'
}
