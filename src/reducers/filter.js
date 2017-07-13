import * as types from '../actions/types';

export default function filter(state = '', action) {
	switch (action.type) {
		case types.FILTER:
			return action.filter;
		default:
			return state;
	}
}
