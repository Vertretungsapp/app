import { writable } from 'svelte/store';

export interface NavigationStore {
	activeId: number;
}

export const navigationStore = writable<NavigationStore>({
	activeId: 0
});
