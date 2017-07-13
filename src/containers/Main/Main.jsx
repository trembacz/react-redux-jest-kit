import PropTypes from 'prop-types';
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { filterTable, count } from '../../actions';
// import * as actionCreators from './actionCreators'
import Products from '../../components/Products';
import Steps from './Steps';
const styles = require('../../styles/app.scss');

export class Main extends Component {
	static propTypes = {
		dispatch: PropTypes.func,
		filter: PropTypes.string,
		counter: PropTypes.number
	};

	constructor() {
		super();
		this.onFilterChange = this.onFilterChange.bind(this);
		this.handleCounterClick = this.handleCounterClick.bind(this);
	}

	onFilterChange(value) {
		this.props.dispatch(filterTable(value));
	}

	handleCounterClick() {
		this.props.dispatch(count(this.props.counter));
	}

	render() {
		return (
			<div className={styles.content + ' ' + styles.wrapper}>
				<div className={styles['content--wrap']}>
					<div className={styles['wrap--panel']}>
						<Steps />
					</div>
					<hr />
					<div className={styles['wrap--panel']}>
						<h3>Counter: {this.props.counter}</h3>
						<button className="slide-button blue" onClick={this.handleCounterClick}>Increase</button>
					</div>
					<hr />
					<div className={styles['wrap--panel']}>
						<input
							type="search"
							value={this.props.filter}
							ref="inputRef"
							placeholder="Filter list"
							onChange={event => { this.onFilterChange(event.target.value); } } />
						<Products filter={this.props.filter} />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect( mapStateToProps )(Main);
