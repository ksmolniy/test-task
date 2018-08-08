import React from 'react';
import AccountFirstStep from './steps/AccountFirstStep';
import AccountSecondStep from './steps/AccountSecondStep';
import AccountThirdStep from './steps/AccountThirdStep';

import { connect } from 'react-redux';

import { updateFormState } from '~/store/form/actions'

class AccountForm extends React.Component {
    constructor() {
        super();

        this.submitStep = this.submitStep.bind(this);
        this.dataChanged = this.dataChanged.bind(this);
    }

    submitStep() {
        if (this.props.step === 3) {
            
            return;
        }

        this.props.updateFormState(this.props.step + 1, this.props.data);
    }

    dataChanged(data) {
        this.props.updateFormState(this.props.step, data);
    }

    render() {
        return (<React.Fragment>
            <h2>Editor step {this.props.step}</h2>
            { this.props.step === 1 && <AccountFirstStep submit={this.submitStep} onChange={this.dataChanged} data={this.props.data} /> }
            { this.props.step === 2 && <AccountSecondStep submit={this.submitStep} onChange={this.dataChanged} data={this.props.data} /> }
            { this.props.step === 3 && <AccountThirdStep submit={this.submitStep} onChange={this.dataChanged} data={this.props.data} /> }
        </React.Fragment>)
    }
}

const mapStateToProps = ({ form }) => {
    return {
        step: form.step,
        data: form.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateFormState: (step, data) => { 
            dispatch(updateFormState(step, data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountForm);