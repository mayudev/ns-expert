import { writable } from 'svelte/store';

export const search = writable({
	from: '',
	fromRaw: '',
	to: '',
	toRaw: '',
	date: new Date()
});
