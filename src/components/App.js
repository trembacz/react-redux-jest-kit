import React from 'react';

import Header from '../containers/Header';
import Main from '../containers/Main';
import Footer from '../containers/Footer';
const styles = require('../styles/app.scss');

const App = () =>
	<div className={styles.container}>
		<Header />
		<Main />
		<Footer />
	</div>;

export default App;
