export class PlanNotFoundError extends Error {
	constructor() {
		super('Plan not found.');
	}
}
