type Changeable = {
	name: string;
	changed: boolean;
};

export default class PlannedLesson {
	room: Changeable | undefined;
	teacher: Changeable | undefined;
	subject: Changeable | undefined;
	start: Date | undefined;
	end: Date | undefined;
	lessonNumber: number | undefined;
	info: string | undefined;
}

/**
 * Parses a planned lesson from the JSON response
 * @param json JSON response
 */
export function fromJson(json: any): PlannedLesson {
	const plannedLesson = new PlannedLesson();
	plannedLesson.lessonNumber = json.St;
	plannedLesson.start = json.Beginn;
	plannedLesson.end = json.Ende;
	plannedLesson.room = parseChangeable(json.Ra);
	plannedLesson.teacher = parseChangeable(json.Le);
	plannedLesson.subject = parseChangeable(json.Fa);
	plannedLesson.info = json.If;
	return plannedLesson;
}

function parseChangeable(changeable: any): Changeable | undefined {
	if (typeof changeable === 'string') return { name: changeable, changed: false };
	if (typeof changeable === 'object') return { name: changeable['_'] || '', changed: true };
	return undefined;
}
