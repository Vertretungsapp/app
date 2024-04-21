// This is a workaround, because svelte-gestures doesn't have types for svelte 4 yet.

import 'svelte/elements';

declare module 'svelte/elements' {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export interface HTMLAttributes<T> {
		'on:swipe'?: (
			event: CustomEvent<{
				direction: 'top' | 'right' | 'bottom' | 'left';
				target: EventTarget;
			}>
		) => void;
	}
}

export {};
