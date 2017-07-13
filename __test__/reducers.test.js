import reducers from '../src/reducers';
import React from 'react'

describe('>>> R E D U C E R S <<<',()=>{
	test('+++ INIT STORE', () => {
		let state;
		state = reducers( undefined, {} );
		expect(state).toEqual({ filter: '', counter: '', "order": {} });
	});

	test('+++ CREATE_ORDER', () => {
		let state;
		state = reducers({order:[],counter:0,filter:''}, {type:'CREATE_ORDER'});
		expect(state).toEqual({filter:'',counter:0,order:{steps:[{label:{key:'Step 1'},current:true,completed:false},{label:{key:'Step 2'},current:false,completed:false},{label:{key:'Step 3'},current:false,completed:false},{label:{key:'Delivery'},current:false,completed:false},{label:{key:'Review'},current:false,completed:false},{label:{key:'Confirmation'},current:false,completed:false}],currentStepIndex:0}});
	});

	test('+++ COUNTER_UP: 0 -> 1', () => {
		let state = { filter: '', counter: 0 }
		state = reducers( state, { type: "COUNTER_UP", counter: 0 })
		expect(state).toEqual({ filter: '', counter:1, "order": {} })
	});

	test('+++ COUNTER_UP: 49 -> 50', () => {
		let state = { filter: '', counter: 49 }
		state = reducers( state, { type: "COUNTER_UP", counter: 49 })
		expect(state).toEqual({ filter: '', counter: 50, "order": {} })
	});

	test('+++ FILTER: fo -> foo', () => {
		let state = { filter: 'fo', counter: '' }
		state = reducers( state, { type: "FILTER", filter: 'foo' })
		expect(state).toEqual({ filter: 'foo', counter: '', "order": {} })
	});

	test('+++ ORDER_NEXT_STEP: move to next step', () => {
		let state;
		state = reducers({filter:'',counter:0,order:{steps:[{label:{key:'Step 1'},current:true,completed:false},{label:{key:'Step 2'},current:false,completed:false},{label:{key:'Step 3'},current:false,completed:false},{label:{key:'Delivery'},current:false,completed:false},{label:{key:'Review'},current:false,completed:false},{label:{key:'Confirmation'},current:false,completed:false}],currentStepIndex:0}}, {type:'ORDER_NEXT_STEP'});
		expect(state).toEqual({filter:'',counter:0,order:{steps:[{label:{key:'Step 1'},current:false,completed:true},{label:{key:'Step 2'},current:true,completed:false},{label:{key:'Step 3'},current:false,completed:false},{label:{key:'Delivery'},current:false,completed:false},{label:{key:'Review'},current:false,completed:false},{label:{key:'Confirmation'},current:false,completed:false}],currentStepIndex:1}});
	});

	test('+++ ORDER_PREVIOUS_STEP: move between steps', () => {
		let state;
		state = reducers({filter:'',counter:0,order:{steps:[{label:{key:'Step 1'},current:false,completed:true},{label:{key:'Step 2'},current:true,completed:false},{label:{key:'Step 3'},current:false,completed:false},{label:{key:'Delivery'},current:false,completed:false},{label:{key:'Review'},current:false,completed:false},{label:{key:'Confirmation'},current:false,completed:false}],currentStepIndex:1}}, {type:'ORDER_PREVIOUS_STEP',index:0});
		expect(state).toEqual({filter:'',counter:0,order:{steps:[{label:{key:'Step 1'},current:true,completed:true},{label:{key:'Step 2'},current:false,completed:false},{label:{key:'Step 3'},current:false,completed:false},{label:{key:'Delivery'},current:false,completed:false},{label:{key:'Review'},current:false,completed:false},{label:{key:'Confirmation'},current:false,completed:false}],currentStepIndex:0}});
	});
});
//*******************************************************************************************************

