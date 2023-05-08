import Class, { fromJson as classParser } from './Class';
import parseDate from 'date-fns/parse/index';
import DELocale from 'date-fns/locale/de/index';
import Room from '$lib/api/server/class/Room';

export default class SchoolPlan {
	created: Date | undefined;
	date: Date | undefined;
	week: number | undefined;
	holidays: Date[] = [];
	classes: Class[] = [];
	rooms: Room[] = [];
	info: string[] | undefined;

	public generateRooms(): void {
		for (const klass of this.classes) {
			for (const scheduledLesson of klass.schedule) {
				if (scheduledLesson.room === undefined || scheduledLesson.room?.name === '') continue;
				scheduledLesson.classShort = klass.short;
				const room = this.rooms.find((room) => room.short === scheduledLesson.room?.name);
				if (room) {
					room.addLesson(scheduledLesson);
				} else {
					this.rooms.push(new Room(scheduledLesson.room?.name, scheduledLesson));
				}
			}
		}

		for (const room of this.rooms) {
			room.schedule = room.schedule.sort((a, b) => (a.lessonNumber || 0) - (b.lessonNumber || 0));
		}

		this.rooms = this.rooms.sort((a, b) => a.short?.localeCompare(b.short || '') || 0);
	}
}

/**
 * Parses a plan from the JSON response
 * @param json JSON response
 */
export function fromJson(json: any): SchoolPlan {
	const plan = new SchoolPlan();

	plan.date = parseDate(json.VpMobil.Kopf.DatumPlan, 'EEEE, dd. MMMM y', new Date(), {
		locale: DELocale
	});
	plan.created = parseDate(json.VpMobil.Kopf.zeitstempel, 'dd.MM.y, HH:mm', new Date(), {
		locale: DELocale
	});
	plan.week = json.VpMobil.Kopf.woche;

	const holidays = json.VpMobil.FreieTage;
	if (holidays) plan.holidays = parseArrayOrObjectFromJson<Date>(holidays.ft, holidayParser);

	const classes = json.VpMobil.Klassen;
	if (classes) plan.classes = parseArrayOrObjectFromJson<Class>(classes.Kl, classParser);

	const info = json.VpMobil.ZusatzInfo;
	if (info) plan.info = parseArrayOrObjectFromJson<string>(info.ZiZeile, (s: string) => s);

	plan.generateRooms();

	return plan;
}

function holidayParser(s: string): Date {
	return new Date(`20${s.substring(0, 2)}-${s.substring(2, 4)}-${s.substring(4, 6)}`);
}

/**
 * Parses a JSON object always to an array, when the input data is an array or an object.
 * If the input data is neither an array nor an object, an empty array is returned.
 * This is for security reasons, so you won't get an NullPointer exception.
 * @param json JSON response
 * @param parseMethod Method to parse the JSON object
 */
export function parseArrayOrObjectFromJson<T>(json: any, parseMethod: (json: any) => T): T[] {
	if (Array.isArray(json)) return json.map(parseMethod);
	if (typeof json === 'object') return [parseMethod(json)];
	return [];
}
