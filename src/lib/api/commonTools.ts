import type { Plan } from '$lib/api/stundenplan42/class/Plan';
import type SchoolPlan from '$lib/api/stundenplan42/class/SchoolPlan';

export function getPlanFromSchoolPlan(short: string, schoolPlan: SchoolPlan): Plan | null {
	const klass = schoolPlan.classes.find((c) => c.short === short);
	if (klass) return klass;

	const room = schoolPlan.rooms.find((r) => r.short === short);
	if (room) return room;

	return null;
}
