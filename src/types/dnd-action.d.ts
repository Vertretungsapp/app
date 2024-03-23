// This is a workaround, because svelte-gestures doesn't have types for svelte 4 yet.

import 'svelte/elements';

declare type Item = import('svelte-dnd-action').Item;
declare type DndEvent<ItemType = Item> = import('svelte-dnd-action').DndEvent<ItemType>;

declare module 'svelte/elements' {
	export interface HTMLAttributes<T> {
		'on:consider'?: (event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T }) => void;
		'on:finalize'?: (event: CustomEvent<DndEvent<ItemType>> & { target: EventTarget & T }) => void;
	}
}

export {};
