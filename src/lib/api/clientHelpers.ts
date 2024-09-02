import { addPlan, getPlan } from '$lib/cache/cache';
import { format } from 'date-fns';
import type { Credentials, ISubstitutionPlan } from 'indiware-api';
import toast from 'svelte-french-toast';
import { getCredentials } from './session';
import { type PlanStore, planStore } from '$lib/stores/planStore';

export interface FetchPlanOptions {
	date?: Date;
	customFetch?: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>;
	customCredentials?: Credentials;
	noCache?: boolean;
}

function setPlanStoreVal(data: Partial<PlanStore>) {
	planStore.update((store) => {
		return {
			...store,
			...data
		};
	});
}

function setPlanInStore(plan: ISubstitutionPlan) {
	setPlanStoreVal({
		date: plan.date,
		lastUpdated: plan.lastUpdated,
		holidays: plan.holidays,
		plan: plan,
		isRefreshing: false
	})
}

export async function fetchPlan({
	date,
	customFetch,
	customCredentials,
	noCache
}: FetchPlanOptions = {}) {
	const fetch = customFetch || window.fetch;
	const credentials = customCredentials || getCredentials();

	setPlanStoreVal({ error: undefined })

	if (!credentials) {
		toast.error('Bitte melde dich zunächst in den Einstellungen an.');
		throw new Error('Not logged in');
	}

	if (!noCache) {
		const cachedPlan = getPlan(credentials.schoolnumber, date);
		if (cachedPlan) {
			setPlanInStore(cachedPlan);
			return;
		}
	}

	setPlanStoreVal({ isRefreshing: true })
	
	function getAuthorizationHeader(credentials: Credentials) {
		return `Basic ${btoa(
			`${credentials.schoolnumber}:${credentials.username}:${credentials.password}`
		)}`;
	}

	const plan = await fetch(`/api/plan${date ? `?date=${format(date, 'yyyy-MM-dd')}` : ''}`, {
		headers: {
			Authorization: getAuthorizationHeader(credentials)
		}
	}).catch((err) => {
		setPlanStoreVal({ isRefreshing: false, error: err.message })
		throw err;
	});

	if (!plan.ok) {
		switch (plan.status) {
			case 401:
				toast.error('Die Zugangsdaten scheinen nicht mehr zu stimmen!');
				break;
			case 404:
				toast.error(
					`Kein Vertretungsplan für diesen Tag (${date ? format(new Date(date), 'dd.MM') : 'N/A'}) gefunden.`
				);
				break;
			default:
				toast.error('Ein unbekannter Fehler ist aufgetreten');
				break;
		}
		
		setPlanStoreVal({ isRefreshing: false, error: "Unbekannter Fehler - Der Vertretungsplan konnte nicht geladen werden." })
		throw new Error('Could not fetch plan');
	}

	const planJson = (await plan.json()) as ISubstitutionPlan;
	addPlan(credentials.schoolnumber, planJson);
	setPlanInStore(planJson)
}

export async function checkCredentials(credentials: Credentials) {
	return fetch('/api/credentials/verify', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			schoolnumber: credentials.schoolnumber,
			username: credentials.username,
			password: credentials.password
		})
	})
		.then((res) => res.ok)
		.catch(() => false);
}
