import PropTypes from 'prop-types';
import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { nextStep, previousStep } from '../../../actions/order';
const styles = require('../../../styles/app.scss');

export class Steps extends Component {
	static propTypes = {
		dispatch: PropTypes.func,
		order: PropTypes.object,
		steps: PropTypes.any
	};

	constructor() {
		super();
		this.nextStep = this.nextStep.bind(this);
		this.handleStepClick = this.handleStepClick.bind(this);
	}

	handleStepClick(index) {
		this.props.dispatch(previousStep(index));
	}

	nextStep() {
		const isCompleted = this.checkComplete();
		if (!isCompleted) {
			this.props.dispatch(nextStep());
		}
	}

	renderItem(step, i, isCompleted) {
		const classNames = ['status'];
		if (step.completed) {
			classNames.push('complete');
		}
		if (step.current) {
			classNames.push('active');
		}

		let prevStep = (
			<div className={classNames.join(' ')} key={i}>
				<a href="#" role="button" onClick={e => { e.preventDefault(); this.handleStepClick(i); }}>
					<div className={styles['status-number']}>
						<span className="icon icon_Tick" />
						{i + 1}
					</div>
					{step.label.key}
				</a>
			</div>
		);

		if (isCompleted) {
			prevStep = (
				<div className={classNames.join(' ')} key={i}>
					<div className={styles['status-number']}>
						<span className="icon icon_Tick" />
						{i + 1}
					</div>
					{step.label.key}
				</div>
			);
		}

		switch (classNames.join(' ')) {
			case 'status complete':
				return prevStep;
			case 'status active':
			case 'status complete active':
				return (
					<div className={classNames.join(' ')} key={i}>
						<div className={styles['status-number']}>
							<span className="icon icon_Tick" />
							<span className="icon icon_ArrowLeft" />
							{i + 1}
						</div>
						{step.label.key}
					</div>
				);
			default:
				return (
					<div className={classNames.join(' ')} key={i}>
						<div className={styles['status-number']}>
							<span className="icon icon_Tick" />
							{i + 1}
						</div>
						{step.label.key}
					</div>
				);
		}
	}

	checkComplete() {
		const completeCount = this.props.order.steps.filter(step => { return step.completed; }).length;
		const isCompleted = completeCount === (this.props.order.steps.length - 1);
		return isCompleted;
	}

	render() {
		const isCompleted = this.checkComplete();
		const btnClass = isCompleted ? 'slide-button' :  'slide-button blue';
		return (
			<div className={styles['summary--panel']}>
				<div className={styles['checkout--status']}>
					{this.props.order.steps.map((step, i) => {
						return this.renderItem.call(this, step, i, isCompleted);
					})}
				</div>
				<button className={btnClass} onClick={this.nextStep}>Next Step</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state
	};
};

export default connect(mapStateToProps)(Steps);
