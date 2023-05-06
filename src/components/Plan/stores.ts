import { writable } from 'svelte/store';

export const date = writable<Date>(new Date());