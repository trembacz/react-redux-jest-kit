export const FILTER = 'FILTER';

export const COUNTER_UP = 'COUNTER_UP';

export const CREATE_ORDER = 'CREATE_ORDER';

export const ORDER_NEXT_STEP = 'ORDER_NEXT_STEP';
export const ORDER_PREVIOUS_STEP = 'ORDER_PREVIOUS_STEP';

export const PRODUCTS = [
	{ name: 'Table', price: '5.99$' },
	{ name: 'TV', price: '30.00$' },
	{ name: 'LG G4s', price: '18.99$' },
	{ name: 'iPhone 5', price: '35.99$' },
	{ name: 'Nexus 7', price: '9.99$' },
	{ name: 'Windows 10', price: '25.99$' }
];

export const ORDER_STEP_LABELS = [
	'Step 1',
	'Step 2',
	'Step 3',
	'Delivery',
	'Review',
	'Confirmation'
];

const SHARED_STEPS = [{
	key: ORDER_STEP_LABELS[3]
}, {
	key: ORDER_STEP_LABELS[4]
}, {
	key: ORDER_STEP_LABELS[5]
}];

export const ORDER_STEP_MAP = {
	ExpertWitnessRequest: [{
		key: ORDER_STEP_LABELS[0]
	}, {
		key: ORDER_STEP_LABELS[1]
	}, {
		key: ORDER_STEP_LABELS[2]
	}].concat(SHARED_STEPS)
};
