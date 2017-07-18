import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore } from './store/configureStore';
import Root from './containers/Root';
import { createOrder } from './actions/order.js';


const initialState = {
	order: [],
	counter: 0,
	filter: ''
};

const store = configureStore(initialState);
// create order
store.dispatch(createOrder());

render(
	<AppContainer>
		<Root store={store} />
	</AppContainer>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./containers/Root', () => {
		const newConfigureStore = require('./store/configureStore');
		const newStore = newConfigureStore.configureStore();
		const NewRoot = require('./containers/Root').default;
		render(
			<AppContainer>
				<NewRoot store={newStore} />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}
