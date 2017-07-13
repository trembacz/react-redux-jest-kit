import { count, filterTable } from '../src/actions/index'

describe('>>> A C T I O N S <<<',()=>{
	test('+++ actionCreator: count', () => {
		const add = count(1)
		expect(add).toEqual({ type:"COUNTER_UP", counter: 1 })
	});
	test('+++ actionCreator: filterTable', () => {
		const string = filterTable("f")
		expect(string).toEqual({ type: "FILTER", filter: "f" })
	});
});
//*******************************************************************************************************
