export default class Lesson {
	id: string | undefined;
	subject: string | undefined;
	teacher: string | undefined;
}

/**
 * Parses a lesson from the JSON response
 * @param json JSON response
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromJson(json: any): Lesson {
	const lesson = new Lesson();
	lesson.id = json.UeNr['_'];
	lesson.subject = json.UeNr.$.UeGr || json.UeNr.$.UeFa;
	lesson.teacher = json.UeNr.$.UeLe;
	return lesson;
}
