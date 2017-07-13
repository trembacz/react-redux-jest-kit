import * as types from '../actions/types';

export default function counter(state = '', action) {
	switch (action.type) {
		case types.COUNTER_UP:
			return action.counter + 1;
		default:
			return state;
	}
}
