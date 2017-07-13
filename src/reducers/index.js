import { combineReducers } from 'redux';
import filter from './filter.js';
import counter from './counter.js';
import order from './order.js';

const rootReducer = combineReducers({
	filter,
	counter,
	order
});

export default rootReducer;
