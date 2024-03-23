import { writable } from 'svelte/store';

export interface NavigationStore {
	activeId: number;
	lastRoute: string;
}

export const navigationStore = writable<NavigationStore>({
	activeId: 0,
	lastRoute: '/'
});
