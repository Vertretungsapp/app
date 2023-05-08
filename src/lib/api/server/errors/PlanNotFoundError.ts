export class PlanNotFoundError extends Error {
	constructor() {
		super('SchoolPlan not found.');
	}
}
