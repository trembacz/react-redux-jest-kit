import * as types from '../actions/types';
import assign from 'object.assign';

export function generateSteps(steps) {
	return steps.map((label, i) => {
		return {
			label: label,
			current: i === 0,
			completed: false
		};
	});
}

function getInitialState() {
	const newSteps = generateSteps(types.ORDER_STEP_MAP.ExpertWitnessRequest);
	const state = {
		steps: newSteps,
		currentStepIndex: 0,
	};
	return state;
}

// Set the 'current step' to an index in the steps array
function setStepStateAtIndex(index, steps, clearCompleted) {
	if (typeof steps[0] === 'undefined') {
		throw new Error('Unable to set step state at chosen index ' + index);
	}
	return steps.map((step, i) => {
		const newStep = assign({}, step);
		if (i === index) {
			newStep.current = true;
		} else {
			newStep.current = false;
			if (clearCompleted) {
				newStep.completed = false;
			} else if (i < index) {
				newStep.completed = true;
			}
		}
		return newStep;
	});
}

export default function order(state = {}, action) {
	switch (action.type) {
		case types.CREATE_ORDER:
			return getInitialState();
		case types.ORDER_NEXT_STEP:
			// Calculate the next step state
			let nextStepIndex;
			const maxStepIndex = state.steps.length - 1;
			const steps = state.steps.map((step, i) => {
				const newStepState = assign({}, step);
				if (step.current && i < maxStepIndex ) {
					newStepState.current = false;
					newStepState.completed = true;
					nextStepIndex = i + 1;
				}
				if (nextStepIndex === i) {
					newStepState.current = true;
				}
				return newStepState;
			});
			return assign({}, state, {
				currentStepIndex: nextStepIndex,
				steps: steps
			});
		case types.ORDER_PREVIOUS_STEP:
			return assign({}, state, {
				currentStepIndex: action.index,
				steps: setStepStateAtIndex(action.index, state.steps)
			});
		default:
			return state;
	}
}

