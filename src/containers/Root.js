import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import App from '../components/App';

export default function Root({store}) {
	return (
		<Provider store={store}>
			<div>
				<App />
			</div>
		</Provider>
	);
}

Root.propTypes = {
	store: PropTypes.object.isRequired
};
