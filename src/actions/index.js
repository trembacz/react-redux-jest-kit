import * as types from './types';

export function filterTable(filter) {
	return {
		type: types.FILTER,
		filter
	};
}

export function count(counter) {
	return {
		type: types.COUNTER_UP,
		counter
	};
}
