export enum PlanType {
	SCHOOL_CLASS = 'schoolClass',
	ROOM = 'room',
	TEACHER = 'teacher'
}

export enum PlanTypePlural {
	SCHOOL_CLASS = 'schoolClasses',
	ROOM = 'rooms',
	TEACHER = 'teachers'
}

/**
 * Checks if the given value is a valid PlanType.
 * @param value The value to check.
 * @returns Whether the given value is a valid PlanType.
 */
export function isPlanType(value: string): boolean {
	return Object.values(PlanType).includes(value as PlanType);
}

/**
 * Converts a PlanType to a translated string.
 * @param type The PlanType to convert.
 * @returns The translated string.
 */
export function planTypeToTranslatedString(type: PlanType): string {
	switch (type) {
		case PlanType.SCHOOL_CLASS:
			return 'Klasse';
		case PlanType.TEACHER:
			return 'Lehrer';
		case PlanType.ROOM:
			return 'Raum';
	}
}

/**
 * Converts a PlanType to a PlanTypePlural.
 * @param type The PlanType to convert.
 * @returns The PlanTypePlural.
 */
export function pluralizePlanType(type: PlanType): PlanTypePlural {
	switch (type) {
		case PlanType.SCHOOL_CLASS:
			return PlanTypePlural.SCHOOL_CLASS;
		case PlanType.TEACHER:
			return PlanTypePlural.TEACHER;
		case PlanType.ROOM:
			return PlanTypePlural.ROOM;
	}
}

/**
 * Parses a PlanType from a string.
 * @param type The string to parse.
 * @returns The parsed PlanType.
 */
export function parsePlanType(type: string): PlanType {
	return type as PlanType;
}
