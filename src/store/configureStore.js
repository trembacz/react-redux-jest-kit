import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
export const history = createHistory();

const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
	order: [],
	counter: 0,
	filter: ''
};

export function configureStore() {
	return createStore(
		rootReducer,
		initialState,
		composeEnhancers(
			applyMiddleware(middleware)
		)
	);
}
