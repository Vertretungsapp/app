import type PlannedLesson from '$lib/api/stundenplan42/class/PlannedLesson';

export interface Plan {
	short: string;
	schedule: PlannedLesson[];
	type: PlanType;
}

export enum PlanType {
	CLASS = 'Klasse',
	ROOM = 'Raum'
}
