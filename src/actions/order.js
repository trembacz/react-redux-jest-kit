import * as types from './types';

export function createOrder() {
	return {
		type: types.CREATE_ORDER
	};
}

export function nextStep() {
	return {
		type: types.ORDER_NEXT_STEP
	};
}

export function previousStep(index) {
	return {
		type: types.ORDER_PREVIOUS_STEP,
		index: index
	};
}
